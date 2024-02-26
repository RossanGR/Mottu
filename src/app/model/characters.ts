export interface Characters {
    id:number,
    name:string,
    status: string,
    specie: string,
    type: string,
    gender: string,
    origin:{
      name:string,
      url: string
    },
    location:{
      name:string,
      url: string
    },
    image:string;
    episode:Array<string>,
    url:string,
    created:string,
    isFavorite: boolean,
    length:number

}