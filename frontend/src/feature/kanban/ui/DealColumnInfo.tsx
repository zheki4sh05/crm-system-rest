import { Box, Typography } from "@mui/material";
import { getDealPrice } from "../../../app/util/dealPrice";
import { Deal } from "../../../shared/entities/deal/Deal";

type Props={
    items:Array<Deal>
}

function DealColumnInfo({ items }:Props) {
  const calcInfo = (items:Array<Deal>) => {
    if (items.length > 1) {
      let sum = 0;

      for (let i = 0; i < items.length; i++) {
        sum += getDealPrice(items[i]);
      }
      return sum;
    } else if (items.length == 1) {
      return getDealPrice(items[0]);
    } else {
      return 0;
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="subtitle2" gutterBottom sx={{ margin: "0 auto" }}>
        Всего: {items.length}
      </Typography>
      <Typography variant="subtitle2" gutterBottom sx={{ margin: "0 auto" }}>
        Сумма: {calcInfo(items)} руб.
      </Typography>
    </Box>
  );
}

export default DealColumnInfo;