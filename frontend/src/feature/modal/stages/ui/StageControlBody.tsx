
import { Box, TextField } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { Stage } from "../../../../shared/entities/stage/Stage";
import MainBtn from "../../../../shared/button/ui/MainBtn";

type Props={
    item:Stage,
    handleSave:(item:Stage)=>void
}

function StageControlBody({item=  {
    id: "0",
    name: "",
    description: "",
    groupId: "0",
    order: 0,
  }, handleSave}:Props) {

    const [name,setName] = useState(item.name)
    const [desc,setDesc] = useState(item.description)
 
    const [isEdit,setEdit] = useState(true)

    const check=(item:Stage)=>{
       
        if(item.name==name && item.description==desc){
            return true
        }else{
            return false
        }
    }

    useEffect(()=>{
        setEdit(check(item))
    },[name,desc])

    const handleNameChange=(event:ChangeEvent<HTMLInputElement>)=>{
        setName(event.target.value)
    }
    const handleDescChange=(event:ChangeEvent<HTMLInputElement>)=>{
        setDesc(event.target.value)
    }

const handleClick=()=>{
    

 handleSave({
        ...item, name, description:desc
    })
}

    return ( <Box sx={{width:"200px"}} >

<TextField id="name" label="Название" variant="outlined" value={name} onChange={handleNameChange} sx={{mb:3}}/>
<TextField id="desc" label="Описание" variant="outlined" value={desc} onChange={handleDescChange}/>



<MainBtn type={"settings"} text={"Сохранить"} btnClickHandler={handleClick} disable={isEdit}/>

    </Box> );
}

export default StageControlBody;
