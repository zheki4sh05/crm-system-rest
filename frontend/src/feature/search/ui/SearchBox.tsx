import { useState } from "react";
import MainBtn from "../../../shared/button/ui/MainBtn";
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Drawer,
  Grid2,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

type Props = {
  primaryText: string;
  type: string;
};

export default function SearchBox({ primaryText, type }: Props) {
  const [searchData, setSearchData] = useState<string>("");

  //   const searchState = useSelector(getSearchStatus);

  //   const dispatch = useDispatch();

  //   const searchType = useSelector(getSearchType)
  // const searchType =

  const [state, setState] = useState<boolean>(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(event.target.value.trim());
  };

  //   function handleSearch() {
  //     return new Promise((resolve) => {
  //       setTimeout(() => {
  //         dispatch(setSearcResult([1]));
  //         resolve();
  //       }, 4000);
  //     });
  //   }

  const searchClickHandler = () => {
    // if (searchData.length != 0 && searchData != "") {
    //   dispatch(setSearchType(searchBox))
    //   dispatch(controlSearchStage(statusTypes.loading));
    //   handleSearch().then(() => {
    //     dispatch(controlSearchStage(statusTypes.succeeded));
    //   });
    // }
  };

  const toggleDrawer = (open: boolean) => (event:any) => {
    setState(open);
  };

  //   const handleState = (open) => {
  //     setState({ ...state, right: open });
  //   };

  //   useEffect(() => {
  //     if (searchState === statusTypes.succeeded && searchType==searchBox) {
  //       handleState(true);
  //       dispatch(clearSearchedData())
  //     }
  //   }, [searchState]);

  const list = () => (
    <Box
      sx={{ width: "90vw", zIndex: 10000 }}
      role="presentation"

      // onClick={toggleDrawer(anchor, false)}
    >
      <Box sx={{ ml: 2 }}>
        <Grid2 container spacing={2}>
          <Grid2 size={4}>
            <Stack direction="row">
              <IconButton
                sx={{ mt: 1.5, ml: 1 }}
                onClick={toggleDrawer(false)}
              >
                <CloseIcon />
              </IconButton>
            </Stack>
          </Grid2>
          <Grid2 size={4} >
            <Typography sx={{ mt: 2 }} variant="h6" gutterBottom>
              Результат поиска
            </Typography>
          </Grid2>
          <Grid2 size={4}></Grid2>
        </Grid2>
        <Grid2 container spacing={1}>
          <Grid2 size={4}>
            <Box>
              <div>гыгыгы</div>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );

  return (
    <Paper
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={primaryText}
          value={searchData}
          onChange={handleSearchChange}
          inputProps={{ "aria-label": "search google maps" }}
        />

        <MainBtn type="search" btnClickHandler={searchClickHandler} />
      </>

      <Drawer
        anchor={"right"}
        open={state}
        onClose={toggleDrawer(false)}
        sx={{ zIndex: 10000 }}
      >
        {list()}
      </Drawer>
    </Paper>
  );
}
