import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Order } from "../../../shared/entities/deal/order/Order";
import { Deal } from "../../../shared/entities/deal/Deal";
import { Stage } from "../../../shared/entities/stage/Stage";
import { MainDropdown } from "../../../shared/select/ui/MainDropdown";
import MainBtn from "../../../shared/button/ui/MainBtn";
import { getDealPrice } from "../../../app/util/dealPrice";
import { formatDateFromTimestamp } from "../../../app/util/formatDate";
import { SelectEntity } from "../../../shared/entities/select/Select";
import { Worker } from "../../../shared/entities/worker/Worker";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const handleUpdateAboutDeal = (newData: Deal) => {};

const handleOrderAdd = (newOrder: Order) => {};

type Props = {
  type: "kanban" | "overview";
  deal: Deal;
  moveHandler: (item: Deal) => void;
  openHandler: (value:Deal, anchor: string, open: boolean) => void;
  changeWorkerHandler: (value: SelectEntity) => void;
  stages: Array<Stage>;
  workers: Array<Worker>;
};

function DealCard({
  type,
  deal,
  moveHandler,
  openHandler,
  changeWorkerHandler,
  stages,
  workers,
}: Props) {
  // const useApi = () => {
  //   return getDealPrice(deal);
  // };

  // const getDealTotalPrice = useMemo(() => {
  //   return useApi;
  // }, []);

  // const [state, setState] = useState({
  //   top: false,
  //   left: false,
  //   bottom: false,
  //   right: false,
  // });

  // const toggleDrawer = (anchor, open) => (event) => {

  //   setState({ ...state, [anchor]: open });

  // };

  // const list = (anchor) => (
  //   <Box
  //     sx={{ width: "90vw", zIndex: 10000 }}
  //     role="presentation"

  //     // onClick={toggleDrawer(anchor, false)}
  //   >
  //     <Box sx={{ ml: 2, width: "100%" }}>
  //       <Grid2 container spacing={2}>
  //         <Grid2 size={1}>
  //           <Stack direction="row">
  //             <IconButton
  //               sx={{ mt: 1.5, ml: 1 }}
  //               onClick={toggleDrawer(anchor, false)}
  //             >
  //               <CloseIcon />
  //             </IconButton>
  //           </Stack>
  //         </Grid2>
  //         <Grid2 size={4}>
  //           <Typography sx={{ mt: 2 }} variant="h6" gutterBottom>
  //             Сделка
  //           </Typography>
  //         </Grid2>
  //         <Grid2 size={4}></Grid2>
  //       </Grid2>
  //       <Grid2 container spacing={1}>
  //         <Grid2 size={10}>
  //           <CustomTabPanel
  //             content={{
  //               tabNames: [
  //                 "Данные по сделке",
  //                 "Товары",
  //                 "Задачи",
  //                 "Дополнительно",
  //               ],
  //             }}
  //           >
  //             <Box sx={{ width: "100%" }}>
  //               <AboutDeal
  //                 data={deal}
  //                 handleSubmit={handleUpdateAboutDeal}
  //                 groupId={stages[0].groupId}
  //                 stages={stages}
  //                 showGroup={false}
  //               />
  //             </Box>
  //             <Box>
  //               <DealOrders
  //                 data={deal}
  //                 title="Редактирование товара"
  //                 getDealTotalPrice={getDealTotalPrice}
  //               />
  //             </Box>
  //             <Box sx={{ width: "100%" }}>
  //               <DealTasks data={deal} />
  //             </Box>

  //             <Box>
  //               <AddMoreAboutDealWrapper data={deal} />
  //             </Box>
  //           </CustomTabPanel>
  //         </Grid2>
  //       </Grid2>
  //     </Box>
  //   </Box>
  // );

  const getCardBody = () => {
    return (
      <CardContent sx={{ paddingBottom: "0px" }}>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {deal.name}
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          Сумма: {getDealPrice(deal)}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {deal.customer.lastname} {deal.customer.name}
          <br />
        </Typography>
        <Typography variant="body2" gutterBottom>
          С {formatDateFromTimestamp(new Date(deal.started).toDateString())}
        </Typography>

        <Typography variant="body2">Задач: {deal.tasks.length}</Typography>
      </CardContent>
    );
  };

  const getKanbanCard = () => {
    const chnageHandler = (newStage: SelectEntity) => {
      moveHandler({ ...deal, stageId: newStage.id });
    };

    return (
      <>
        {getCardBody()}
        <CardActions>
          <MainBtn
            text={"Открыть"}
            btnClickHandler={openHandler("right", true)}
          />

          <MainDropdown
            list={stages}
            title={""}
            displayEmpty={false}
            changeHandler={chnageHandler}
            defaultIndex={stages.indexOf(
              stages.filter((item) => item.id == deal.stageId)[0]
            )}
          />
        </CardActions>
      </>
    );
  };
  const getUserDeal = () => {
    return (
      <Card variant="outlined" sx={{ mb: "10px" }}>
        {getCardBody()}
        <CardActions>
          <MainBtn
            text={"Открыть"}
            btnClickHandler={openHandler("right", true)}
          />

          <MainDropdown
            title={"Исполнитель"}
            list={workers}
            displayEmpty={false}
            changeHandler={changeWorkerHandler}
            defaultIndex={workers.indexOf(
              workers.filter((item) => item.id == deal.worker.id)[0]
            )}
          />
        </CardActions>
      </Card>
    );
  };
  // workers.find((item) => item.id == activeWorker)
  // const getDrawer=()=>{
  //   return (

  //     <Drawer
  //         anchor={"right"}
  //         open={state["right"]}
  //         onClose={toggleDrawer("right", false)}
  //         sx={{ zIndex: 10000 }}
  //       >
  //         {list("right")}
  //       </Drawer>

  //   )
  // }

  if (type == "kanban") {
    return (
      <>
        <Box sx={{ minWidth: 230 }}>
          <Card variant="outlined" sx={{ mb: "10px" }}>
            {getKanbanCard()}
          </Card>
        </Box>
      </>
    );
  } else if (type == "overview") {
    return <>{getUserDeal()}</>;
  }
}

export default DealCard;
