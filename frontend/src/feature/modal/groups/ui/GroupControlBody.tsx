import { Box, TextField } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import MainBtn from "../../../../shared/button/ui/MainBtn";
import { Group } from "../../../../shared/entities/group/Group";

type Props = {
  item: Group;
  handleSave: (updatedItem: Group) => void;
};

function GroupControlBody({
  item = {
    id: "0",
    name: "",
    description: "",
    companyId: "0",
  },
  handleSave,
}: Props) {
  const [name, setName] = useState(item.name);
  const [desc, setDesc] = useState(item.description);
  const [isEdit, setEdit] = useState(true);

  const check = (item: Group) => {
    if (item.name == name && item.description == desc) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    setEdit(check(item));
  }, [name, desc]);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleDescChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDesc(event.target.value);
  };

  const handleClick = () => {
    handleSave({
      ...item,
      name,
      description: desc,
    });
  };

  return (
    <Box sx={{ width: "200px" }}>
      <TextField
        id="name"
        label="Название"
        variant="outlined"
        value={name}
        onChange={handleNameChange}
        sx={{ mb: 3 }}
      />
      <TextField
        id="desc"
        label="Описание"
        variant="outlined"
        value={desc}
        onChange={handleDescChange}
      />

      <MainBtn
        type={"settings"}
        text={"Сохранить"}
        btnClickHandler={handleClick}
        disable={isEdit}
      />
    </Box>
  );
}

export default GroupControlBody;
