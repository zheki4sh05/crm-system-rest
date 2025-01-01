
import { Deal } from "../../shared/entities/deal/Deal";

export const getDealPrice = (deal:Deal) => {
    return deal.orderList.reduce((accumulator, currentProduct) => {
      return accumulator + currentProduct.price * currentProduct.count;
    }, 0)}