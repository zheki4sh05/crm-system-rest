import { Box, Typography } from "@mui/material";
import { Group } from "../../../shared/entities/group/Group";
import { Stage } from "../../../shared/entities/stage/Stage";
import { useState } from "react";
import DialogEntityProvider from "../../../processes/contextProvider/api/DialogEntityProvider";
import { PathConstants } from "../../../app/contants/PathContants";
import CustomStepper from "../../../feature/create/ui/CustomStepper";
import MainBtn from "../../../shared/button/ui/MainBtn";
import { MainDropdown } from "../../../shared/select/ui/MainDropdown";
import ModalWindow from "../../../shared/modal/ui/ModalWindow";
import GroupsControlBody from "../../../feature/modal/groups/ui/GroupsControlBody";
import StagesControlBody from "../../../feature/modal/stages/ui/StagesControlBody";
import PageInfo from "../../../widgets/page/info/ui/PageInfo";
import Kanban from "../../../feature/kanban/ui/Kanban";
import SearchSection from "../../../widgets/page/header/ui/PageHeader";
import { SelectEntity } from "../../../shared/entities/select/Select";

function Deals() {
    // const dispatch = useDispatch();
    // const groups = useSelector(getGroups);
    const groups: Array<Group> = [];
    const [activeGroup, setActiveGroup] = useState(groups.length > 0 ? groups[0].id : "0");
    
    // const stages = useSelector(getStages);
    const stages: Array<Stage> = [];
  
    // const deals = useSelector(getDeals);
    // let groupsStatus = useSelector(getGroupsStatus);
    // let stagesStatus = useSelector(getStagesStatus);
    // let dealsStatus = useSelector(getDealsStatus);
    // let company = useSelector(getCompany);
    function makeRequest() {
      //   dispatch(fetchGroups({ companyId: company.id }));
      
      // dispatch(fetchStages({ companyId: company.id }));
  
      // dispatch(fetchDeal());
    }
  
  
  
    const initGroup = (items:Group[]) => {
      if (items.length > 0) {
        return items[0].id;
      } else {
        return 0;
      }
    };
  
    const getStagesByGroup = () => {
      return stages.filter((item) => {
        return item.groupId == activeGroup;
      });
    };
  
  
  
    
  
    // const [deals,setDeals] = useState(useSelector(getDeals))
  
    const handleChangeGroup = (value:SelectEntity) => {
      setActiveGroup(groups.filter((item) => item.id === value.id)[0].id);
    };
  
  
  
  
    return (
      <DialogEntityProvider>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            maxWidth: "1400px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              gap: "30px",
            }}
          >
            <Box sx={{ flex: 1 / 2 }}>
              <SearchSection type={PathConstants.DEALS} title={"Найти сделки"}>
                <CustomStepper buttonText={"Создать"} />
              </SearchSection>
            </Box>
  
            <Box
              sx={{
                flex: 1 / 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                {
                    groups.length>0 ? 
  
                    <MainDropdown
                    title={"Группа"}
                    list={groups}
                    changeHandler={handleChangeGroup}
                    displayEmpty={false}
                    defaultIndex={0}
                  />
                  :
                  <Typography>Необходимо создать группу</Typography>
  
                }
               
              </Box>
  
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", justifyContent: "start" }}>
                  <Typography
                    variant="caption"
                    sx={{ display: "block", mb: "6px" }}
                  >
                    Управление
                  </Typography>
                </Box>
  
                <Box sx={{ display: "flex", gap: "20px" }}>
                  <ModalWindow
                    title="Управление группами"
                    btnText={"Группы"}
                  >
                    <GroupsControlBody list={groups} />
                  </ModalWindow>
  
                  <ModalWindow
                    title="Управление стадиями"
                    btnText={"Стадии"}
                  
                  >
                    <StagesControlBody stages={getStagesByGroup()} activeGroup={activeGroup}/>
                  </ModalWindow>
                </Box>
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  sx={{ display: "block", mb: "6px" }}
                >
                  Метрики воронки
                </Typography>
  
                <MainBtn type={"btn"} text="Обзор" btnClickHandler={()=>{}}/>
              </Box>
            </Box>
          </Box>
  
          <Box sx={{ marginTop: "10px", marginBottom: "10x" }}>
            <PageInfo />
          </Box>
  
          <Box sx={{ width: "100%", marginTop: "10px", height: "auto" }}>
            {/* {groupsStatus == statusTypes.loading ||
            stagesStatus == statusTypes.loading ||
            dealsStatus == statusTypes.loading ? (
              <LinearProgress />
            ) : (
              <Kanban
                type={kanban.deal}
                stages={getStagesByGroup()}
                deals={deals}
              />
            )} */}
            <Kanban
              
                stages={getStagesByGroup()}
                deals={[]}
              />
          </Box>
        </Box>
        {stages.length !=0 && groups.length!=0 ?
        <CreateDial reloadHandler={makeRequest} />
        :
        null
      
      }
        
      </DialogEntityProvider>
    );
}

export default Deals;