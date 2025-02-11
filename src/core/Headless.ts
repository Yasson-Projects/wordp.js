import { OrderByType, OrderType } from "./interfaces/enums/args.enum";
import { Post, Posts } from "./interfaces/queries.interface";
import { WpPostContent } from "./interfaces/response.interface";

export class HeadlessWP {
  public baseUrl: string = "";

  /**
   * Usar nuevo headlesswp
   * @param {string} baseUrl - Url del endpoint wp-json de tu wordpress
  */
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * ### Recupera un post basado en un id
   * @param id Si la propiedad mode es one el id es requerido para saber cual la entrada
   * @param fields Pon los parametros del query params de la propiedad fiels que deseas que devuelva
   * @param embed Array 
   */
  public async post({ id, fields, embed }: Post): Promise<WpPostContent> {
    const data = await fetch(`${this.baseUrl}/posts/${id}/?_fields=${fields.join(",") ?? ""}&_embed=${embed.join(",") ?? ""}`, {
      method: "GET"
    })
    return await data.json()
  }

  /**
   * ### Recupera todos los posts
   * @param fields Pon los parametros del query params de la propiedad fiels que deseas que devuelva
   * @param embed Array 
   * @param page Numero de pagina del post
   * @param per_page Numero maximo de posts que se van a mostrar **(maximo de 100)**
   * @param order Devuelve la lista de post de un orden ascendente o decendente
   * @param orderBy Ordenar la lista mediante un parametro
   * @param offset Devuelva la lista de posts desde un post especifico
   */
  public async posts({ fields, embed, page = 1, per_page = 10, order, orderBy, offset }: Posts): Promise<WpPostContent[]> {
    const data = await fetch(`${this.baseUrl}/posts/?page=${page}&per_page=${per_page}&_fields=${fields.join(",") ?? ""}&_embed=${embed.join(",") ?? ""}&order=${order ?? OrderType.DESC}&orderby=${orderBy ?? OrderByType.date}&offset=${offset ?? 1}`, {
      method: "GET"
    })
    return await data.json()
  }
}