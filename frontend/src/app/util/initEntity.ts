import { Deal, MoreAboutDeal } from "../../shared/entities/deal/Deal";

export function initDeal():Deal{
    return {
        id: "0",
        name: "",
        description: "",
        stageId: "1",
        started: 0,
        customer: {
          id: 0,
          email: "",
          surname:"",
          name: "",
          lastname: "",
          address: "",
           phone:""
        },
        worker:{
            id:"0",
            name:"",
            email:""
        },
        orderList: [],
        tasks:[]
      }
}
export function initOrder(){
    return {
        id: 0,
        name: "",
        count: 0,
        code: "",
        dealId: 0,
        price: 0.0
      }
}

export function initTask(){
   return {
  
        id:0,
        name:"",
        deal:0,
        worker:0,
        is_done:false,
        start:0,
        finishAt:0,

      }
}


export function initMoreAboutDeal():MoreAboutDeal{
    return {
        source: 1,
        group: 0,
        stage: 0,
    }
}
export function initDocument(){
  return {
    id:"",
    name:"",
    description:"",
    type:0,
    size:"",
    date:"",
    format:""
  }
}

export function initWorker(){
  return {
    id:0,
    name:"",
    lastname:"",
    surname:"",
    email:"",
    phone:""
  }
}
