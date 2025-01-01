import { Button, ButtonProps } from "@mui/material";


type BtnConfig={
    size: ButtonProps['size']; 
    color: ButtonProps['color']; 
    variant: ButtonProps['variant'];
}

type Props={
    type?:string,
    config?:BtnConfig,
    btnClickHandler:any,
    text?:string,
    disable?:boolean
}

function MainBtn({
  type = "btn",
  btnClickHandler,
  text,
  config = { size: "medium", color: "primary", variant: "contained" },
  disable = false,
}:Props) {
  const handler = () => {
    btnClickHandler();
  };
  
  return (
    <Button
      onClick={handler}
      variant={config.variant}
      size={config.size}
      color={config.color}
      disabled={disable}
    >
      {text}
    </Button>
  );

//   if (type == "btn") {
//     return (
//       <Button
//         onClick={handler}
//         variant={variant}
//         size={config.size}
//         color={config.color}
//         disabled={disable}
//       >
//         {text}
//       </Button>
//     );
//   } else {
//     if (type == "search") {
//       return (
//         <IconButton onClick={handler}>
//           <SearchIcon />
//         </IconButton>
//       );
//     } else if (type == "settings") {
//       return (
//         <Button
//           onClick={handler}
//           variant={variant}
//           size={config.size}
//           color={config.color}
//           startIcon={<SettingsIcon />}
//           disabled={disable}
//         >
//           {text}
//         </Button>
//       );
//     } else if (type == "info") {
//       return (
//         <Button
//           onClick={handler}
//           variant={variant}
//           size={config.size}
//           color={config.color}
//           startIcon={<InfoIcon />}
//         >
//           {text}
//         </Button>
//       );
//     } else if (type =="save"){
//       return (<IconButton>
//         <SaveIcon />
//       </IconButton>)
//     }
//   }
}

export default MainBtn;