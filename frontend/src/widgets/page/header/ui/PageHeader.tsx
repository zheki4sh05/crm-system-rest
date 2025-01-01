import { Box } from "@mui/material";
import { ChildrenNode } from "../../../../shared/entities/props/Props";
import SearchBox from "../../../../feature/search/ui/SearchBox";


type SearchApi = {
  title: string;
  type: string;
  children: ChildrenNode;
};

function SearchSection(props: SearchApi) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDeirection: "row",
        bgcolor: "#F0F8FF",
        p: 1.5,
        borderRadius: "3px",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {props.children}
      <SearchBox primaryText={props.title} type={props.type} />
    </Box>
  );
}

export default SearchSection;
