import styled from "@emotion/styled";

const DrawerHeader = styled('div')(({ theme }:any) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

interface HeaderProps {
    children: React.ReactNode;
}

function Header({ children }: HeaderProps) {
    return ( <DrawerHeader>{children}</DrawerHeader> );
}


export default Header;

