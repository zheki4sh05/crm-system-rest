import { SelectEntity } from "../select/Select";


export type Group = SelectEntity&{
    companyId:string,
    description:string
}