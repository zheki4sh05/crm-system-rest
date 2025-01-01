import { useContext } from "react";
import DialogContext from "../../../processes/contextProvider/DialogContext";
import MainBtn from "../../../shared/button/ui/MainBtn";


type Props={
    buttonText:string
}

function CustomStepper({ buttonText }:Props) {

    const { openDialogHandler } = useContext(DialogContext);

    return ( 
    <MainBtn
            type={"btn"}
            
            text={buttonText}
            btnClickHandler={openDialogHandler}
            config={{size:"medium", color:"primary", variant:"contained"}}
            disable={false}
    /> );
}

export default CustomStepper;