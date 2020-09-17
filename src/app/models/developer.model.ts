export interface IDeveloper{
    id?:number;
    nombres_completos? :string;
    link_gitHub?:string;
    tecnologias_conocidas?:string;
}

export class Developer implements IDeveloper{
    constructor(
        public id?:number,
        public nombres_completos? :string,
        public link_gitHub?:string,
        public tecnologias_conocidas?:string
    ){
        this.id = id ? id : 0;
        this.nombres_completos = nombres_completos ? nombres_completos : "";
        this.link_gitHub = link_gitHub ? link_gitHub : "";
        this.tecnologias_conocidas = tecnologias_conocidas ? tecnologias_conocidas : "";
    }
    
}
