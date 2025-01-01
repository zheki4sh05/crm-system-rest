
import {useEffect, useState } from "react";

import DialogContext from "../DialogContext";
import { ChildrenNode } from "../../../shared/entities/props/Props";
import { ContextData } from '../../../shared/entities/props/Props';


function DialogEntityProvider({children}:{children:ChildrenNode}) {
  const [openDialog, setOpen] = useState(false);
  const [data, setData] = useState<ContextData>({});

  const openDialogHandler = () => {

    setOpen(true);
  };
  const closeDialogHandler = () => {
    setOpen(false);
  };
  const setDataHandler=(value:any)=>{
    setData({...data, ...value})
  
  }

  useEffect(()=>{
  },[data])

  const getDialogResult=()=>{
      return Object.keys(data).length
  }
  const resetDialogContext=()=>{
    Object.keys(data).forEach(key => delete data[key]);
  }
  return (
    <DialogContext.Provider
      value={{
        openDialog,
        openDialogHandler,
        closeDialogHandler,
        setDataHandler,
        data,
        getDialogResult,
        resetDialogContext
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}

export default DialogEntityProvider;