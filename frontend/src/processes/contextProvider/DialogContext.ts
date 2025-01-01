import { createContext } from "react";
import { ContextData } from "../../shared/entities/props/Props";

interface ContextApi{
    openDialog:boolean,
    openDialogHandler?:()=>void,
    closeDialogHandler:()=>void,
    setDataHandler:(value:ContextData)=>void,
    data:ContextData,
    getDialogResult:()=>number
    resetDialogContext:()=>void

}


const DialogContext = createContext<ContextApi>({
    openDialog:false,
    getDialogResult:()=>0,
    data:{},
    setDataHandler:({})=>{},
    closeDialogHandler:()=>{},
    resetDialogContext:()=>{}
})
export default DialogContext;