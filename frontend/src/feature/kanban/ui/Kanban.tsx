import {
  Box,
} from "@mui/material";
import { Deal } from "../../../shared/entities/deal/Deal";
import { Stage } from "../../../shared/entities/stage/Stage";
import KanbanColumn from "./KanbanColumn";


type Props = {

    deals:Array<Deal>
    stages:Array<Stage>
}

function Kanban({deals, stages }:Props) {


//   const dispatch = useDispatch();

  const getDealsByStage = (stageId:string) => {
    return deals.filter((item) => {
      return item.stageId == stageId;
    });
  };



  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          overflowX: "scroll",
          maxWidth: "100%",
          borderLeft: "dashed 2px #A9A9A9",
        }}
      >
        {stages.map((item, index) => (
          <KanbanColumn
           
            key={index}
            title={item.name}

            deals={getDealsByStage(item.id)}
            stages={stages}
          />
        ))}
      </Box>
    </>
  );
}

export default Kanban;
