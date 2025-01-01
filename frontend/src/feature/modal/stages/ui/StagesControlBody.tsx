import { Box, List, ListItem, Typography } from "@mui/material";
import { Stage } from "../../../../shared/entities/stage/Stage";
import ModalWindow from "../../../../shared/modal/ui/ModalWindow";
import StageControlBody from './StageControlBody';

type Props={
    stages:Array<Stage>,
    activeGroup:string
}


function StagesControlBody({ stages,activeGroup }:Props) {
//   const token=  useSelector(getToken)
//   const company = useSelector(getCompany)
//   const dispatch = useDispatch()
  const handleSave = (item:Stage) => {
    // dispatch(createStage({
    //   data:{
    //     name: item.name,
    //     description:item.description,
    //     companyId:company.id,
    //     groupId:activeGroup

    //   },
    //   token:token
    // }))
    // console.log(item);
  };
  
  const handleEdit=(item:Stage)=>{

  }

const sortByOrder=(list:Array<Stage>)=>{
  return list.sort((a, b) => a.order - b.order);
}
  const getTodos = (list:Array<Stage>) => {
   

    return (

      <>

      {

        list.length>0 ? 
        <List sx={{width:"100%"}}>
        {sortByOrder(list).map((todo) => (
          <ListItem key={todo.id} divider={true} sx={{width:"100%"}}>
            <Box sx={{display:"flex", flexDirection:"row", width:"100%"}}>

           
            <Typography
              key={todo.id}
            >
              {todo.name}
            </Typography>
            <Box sx={{ ml: "15px", mr: "10px",display:"flex" }}>
              <ModalWindow
                title={"Управление " + todo.name}
                btnText={"Открыть"}
              
              >
                <StageControlBody item={todo} handleSave={handleEdit}/>
              </ModalWindow>
           
            </Box>
            </Box>
          </ListItem>
        ))}
      </List>

      :
      <Typography>Список пуст</Typography>
      }
      
      </>

     
    );
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box>
      {getTodos(stages)}
        <ModalWindow title={"Создание стадии"} btnText={"Создать"}>
          <StageControlBody item={{id:"0", name:"", description:"", groupId:activeGroup, order:0}} handleSave={handleSave} />
        </ModalWindow>
      </Box>
    </Box>
  );
}

export default StagesControlBody;