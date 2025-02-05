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
   * Recupera un post basado en un id
   * @param id Si la propiedad mode es one el id es requerido para saber cual la entrada
   * @param fields Pon los parametros del query params de la propiedad fiels que deseas que devuelva
   * @param embed Array 
   * {@link https://github.com/yasson-proyects/wordp.js/wiki/posts Ver en documentacion}
   */
  public async post({ id, fields, embed }: Post): Promise<WpPostContent> {
    const data = await fetch(`${this.baseUrl}/posts/${id}/?_fields=${fields.join(",") ?? ""}&_embed=${embed.join(",") ?? ""}`, {
      method: "GET"
    })
    return await data.json()
  }

  /**
   * Recupera todos los posts
   * @param fields Pon los parametros del query params de la propiedad fiels que deseas que devuelva
   * @param embed Array 
   * 
   * {@link https://github.com/yasson-proyects/wordp.js/wiki/posts Ver en documentacion}
   */
  public async posts({ fields, embed }: Posts): Promise<WpPostContent[]> {
    const data = await fetch(`${this.baseUrl}/posts/?_fields=${fields.join(",") ?? ""}&_embed=${embed.join(",") ?? ""}`, {
      method: "GET"
    })
    return await data.json()
  }
}