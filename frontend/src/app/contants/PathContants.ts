enum Paths {
    HOME = "/",
    DEALS = "/deals",
    TASKS = "/tasks",
    DOCS = "/documents",
    CUSTOMER = "/customer",
    WORKERS = "/workers"
}

export function getPageNameByPath(path:string){

    switch(path){
        case PathConstants.DEALS :{
            return "Сделки"
        } 
    }
}

export const PathConstants: Record<keyof typeof Paths, string> = Paths;
