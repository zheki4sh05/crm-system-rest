import { Box, List, ListItem, Typography } from "@mui/material";
import ModalWindow from "../../../../shared/modal/ui/ModalWindow";
import { Group } from "../../../../shared/entities/group/Group";
import GroupControlBody from "./GroupControlBody";

type Props = {
  list: Array<Group>;
};

function GroupsControlBody({ list }: Props) {
  // const token = useSelector(getToken)
  // const company = useSelector(getCompany)
  // const dispatch = useDispatch()

  // const handleSave=(item)=>{
  //   let modify = {...item, type:alignment}
  //   console.log(modify)
  //   dispatch(createGroup(
  //     {
  //       data:{
  //         name:modify.name,
  //         description:modify.description,
  //         companyId:company.id,
  //         customerType:alignment,
  //         isActive:modify.isActive
  //       },
  //       token
  //     }
  //   ))

  // }

  const handleSave = (item: Group) => {};
  const handleEdit = (item: Group) => {};

  const getTodos = (list: Array<Group>) => {
    return (
      <List sx={{ width: "100%" }}>
        {list.map((todo) => (
          <ListItem key={todo.id} divider={true} sx={{ width: "100%" }}>
            <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
              <Typography key={todo.id}>{todo.name}</Typography>
              <Box sx={{ ml: "15px", mr: "10px", display: "flex" }}>
                <ModalWindow
                  title={"Управление " + todo.name}
                  btnText={"Открыть"}
                >
                  <GroupControlBody item={todo} handleSave={handleEdit} />
                </ModalWindow>
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <Box sx={{ width: "400px" }}>
      {getTodos(list)}

      <Box sx={{ ml: 1 }}>
        <ModalWindow title={"Создание группы"} btnText={"Создать"}>
          <GroupControlBody
            item={{ id: "0", name: "", description: "", companyId: "" }}
            handleSave={handleSave}
          />
        </ModalWindow>
      </Box>
    </Box>
  );
}

export default GroupsControlBody;
