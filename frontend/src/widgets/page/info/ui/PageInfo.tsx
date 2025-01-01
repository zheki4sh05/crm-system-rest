import { Box, Typography } from "@mui/material";
import {
  getPageNameByPath,
  PathConstants,
} from "../../../../app/contants/PathContants";
import { useLocation } from "react-router";

function PageInfo() {
  const location = useLocation();

  const getItemInfo = (name: string) => {
    switch (name) {
      case PathConstants.DEALS: {
        return (
          // <Typography >Всего: {useSelector(getDeals).length}</Typography>
          <Typography>Всего: 0</Typography>
        );
      }
      // case PathConstants.DOCS:{

      //     return(

      //         <Typography >Всего: {useSelector(getDocs).length}</Typography>
      //     )

      // }
      // case PathConstants.WORKERS:{

      //     return(

      //         <Typography >Всего: {useSelector(getWorkers).length}</Typography>
      //     )
      // }
      // case PathConstants.CUSTOMER:{

      //     return(
      //             <></>
      //         // <Typography >Всего: {useSelector(getWorkers).length}</Typography>
      //     )

      // }
    }

    return "0";
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Typography variant="h5">
        {getPageNameByPath(location.pathname)}
      </Typography>

      <Box
        sx={{
          marginLeft: "40px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {getItemInfo(location.pathname)}
      </Box>
    </Box>
  );
}

export default PageInfo;
