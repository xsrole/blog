declare namespace Detalis {
    type CommonData = {
        id:number,
        title:string,
        cover:string,
        description:string,
        content:string,
        link:string,
        createAt:string,
        updateAt:string,
        auth:User.Auth
    }
    interface ProjectData extends CommonData{
        storeLink:string,
    }
}