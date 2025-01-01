import { Box, createTheme, ThemeProvider } from "@mui/material";
import Navbar from "./Navbar";
import Header from "./Header";
import MainBody from "./MainBody";
import { Outlet } from "react-router";



const theme = createTheme();
function Layout() {


  
     const handleLogOut = () => {};
     const state = true;
  
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{height:"100vh", width:"100vw"}}>
          {

                !state ? 
                // <LoadingUserData  />
                <></>
                :
                <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  boxSizing:"border-box",
                  height:"100%",
                }}
              >
                <Navbar />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex:1,
                    height:"100%",
                   
                    boxSizing:"border-box",
                   
                   
                  }}
                >
                  <Header><></></Header>
  
                  <MainBody>
                    <Outlet />
                  </MainBody>
  
                 
            
                </Box>
              </Box>
                

          }
        </Box>
      </ThemeProvider>
    );
  }
  

export default Layout;