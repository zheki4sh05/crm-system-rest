import * as React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";
import { SelectEntity } from "../../entities/select/Select";
import { SelectChangeEvent } from "@mui/material/Select/SelectInput";
import { FormControl } from "@mui/material";

interface Props {
  title: string;
  list: Array<SelectEntity>;
  changeHandler: (value: SelectEntity) => void;
  displayEmpty: boolean;
  defaultIndex?: number;
}

export const MainDropdown: React.FC<Props> = ({
  title,
  list,
  changeHandler,
  displayEmpty,
  defaultIndex =0
}) => {
  const [value, setValue] = React.useState(list[defaultIndex].id);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
    changeHandler({ id: event.target.value, name: "" });
  };

  return (
    <FormControl size={"small"}>
      <InputLabel id="demo-simple-select-label">{title}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={title}
        onChange={handleChange}
        defaultValue=""
        displayEmpty={displayEmpty}
      >
        {list.map((item) => (
          <MenuItem sx={{ zIndex: 10000000 }} key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
