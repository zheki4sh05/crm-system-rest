import { Box, Divider, Typography } from "@mui/material";

import { ReactNode, useState } from "react";
import { Stage } from "../../../shared/entities/stage/Stage";
import { Deal } from "../../../shared/entities/deal/Deal";
import { MainDropdown } from "../../../shared/select/ui/MainDropdown";
import DealColumnInfo from "./DealColumnInfo";
import { getDealPrice } from "../../../app/util/dealPrice";
import { SelectEntity } from "../../../shared/entities/select/Select";
import DealCard from "../../../entity/deal/ui/Deal";


type Props={
    deals:Array<Deal>
    title:string,   
    stages:Array<Stage>
}

function KanbanColumn({ deals, title,stages }:Props) {


  const [sortType, setSortType] = useState("1");

  const sortByType = (type:string, list:Array<Deal>) => {
    switch (type) {
      case "1": {
        return list;
      }
      case "2": {
        return list.sort((a, b) => getDealPrice(a) - getDealPrice(b));
      }
      case "3": {
        return list.sort((a, b) => getDealPrice(b) - getDealPrice(a));
      }
      default:{
        return []
      }
    }
  };

  const changeSortTypeHandler = (value:SelectEntity) => {
    setSortType(value.id);
  };

  const moveHandler = (item:Deal) => {
    // dispatch(updateDeal(item))

    // dispatch(updateDealAction(item));
  };

  const changeWorkerHandler=(value:SelectEntity)=>{

  }
  const openHandler=(value:Deal, anchor: string, open: boolean)=>{
    
  }


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        borderRight: "dashed 2px #A9A9A9",

        padding: "0px 10px 10px 10px",
        height: "100%",
      }}
    >
      <Typography variant="subtitle1" gutterBottom sx={{ margin: "0 auto" }}>
        {title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <DealColumnInfo items={deals} />
  
        <Box>
          <MainDropdown
            changeHandler={changeSortTypeHandler}
            title={""}
            list={[
              { id: "1", name: "—" },
              { id: "2", name: "Цена ↓" },
              { id: "3", name: "Цена ↑" },
            ]}
            displayEmpty={false}
          />
        </Box>
      </Box>

      <Divider sx={{ margin: "5px 0 5px 0" }} />
      
      <Box>

      {sortByType(sortType, deals).map((item) =>(
                <DealCard
                
                type="kanban"
                deal={item}
                moveHandler={moveHandler}
                changeWorkerHandler={changeWorkerHandler}
                openHandler={openHandler}
                stages={stages}
                workers={[]}

                
                />
        ))}
      </Box>
    </Box>
  );
}

export default KanbanColumn;