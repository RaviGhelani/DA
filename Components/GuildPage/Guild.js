import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Avatar } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { SvgIcon } from "@mui/material";


const items = [
    {
        title: "Home",
        path: "/guild/home",
        icon: (
            <SvgIcon fontSize="small">
                {/* <ChartBarIcon /> */}
            </SvgIcon>
        ),
    },
    {
        title: "Dragon Arena",
        path: "/guild/dragon-arena",
        icon: (
            <SvgIcon fontSize="small">
                {/* <UsersIcon /> */}
            </SvgIcon>
        ),
    },
    {
        title: "Profile",
        path: "/guild/profile",
        icon: (
            <SvgIcon fontSize="small">
                {/* <ShoppingBagIcon /> */}
            </SvgIcon>
        ),
    },
    {
        title: "Help",
        path: "/guild/help",
        icon: (
            <SvgIcon fontSize="small">
                {/* <VoucherSvg /> */}
            </SvgIcon>
        ),
    },
    {
        title: "Logout",
        path: "/",
        icon: (
            <SvgIcon fontSize="small">
                {/* <CompanySvg /> */}
            </SvgIcon>
        ),
    },
];


const drawerWidth = 200;

const Links = styled(Link)(({ theme }) => ({
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: "50px",
    color: "white",
    borderTop: "1px solid white",
    borderBottom: "1px solid white",
    textDecoration: "none",
    cursor: "pointer",
    [theme.breakpoints.up("xs")]: {},
    "&:hover, &:focus": {
        backgroundColor: "#ffff7f", // Add your desired hover and focus styles here
        color: "green",
    },
}));

const Span = styled("span")(({ theme }) => ({
    color: "yellow",
    [theme.breakpoints.up("xs")]: {},
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    backgroundColor: "#599537",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    const router = useRouter();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar open={open} sx={{ backgroundColor: "#599537" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: { xs: drawerWidth, sm: "30% !important", md: "25% !important", lg: "20% !important" },
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: { xs: drawerWidth, sm: "30% !important", md: "25% !important", lg: "20% !important" },
                        boxSizing: 'border-box',
                    },
                    width: "30%", height: "100vh", backgroundColor: "#599537", overflowY: "auto"
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose} >
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Box sx={{ width: "100%", height: "100vh", backgroundColor: "#599537", overflowY: "auto" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "5%", paddingBottom: "15px !important", borderBottom: "1px solid white", p: 1, cursor: "pointer" }}>
                        <Box>
                            <Avatar sx={{ width: { md: "70px" }, height: { md: "70px" } }}
                                alt="Avatar"
                                src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            />
                        </Box>
                        <Box>
                            <Typography
                                variant="h4"
                                gutterBottom
                                sx={{
                                    color: "white",
                                    fontSize: { xs: "16px", sm: "20px", md: "20px", lg: "22px", xl: "24px" },
                                    fontWeight: "500",
                                    textAlign: "left",
                                    mb: 0
                                }}
                            >
                                Mad B00M
                            </Typography>
                            <Typography
                                variant="h4"
                                gutterBottom
                                sx={{
                                    color: "white",
                                    fontSize: { xs: "13px", sm: "16px", md: "16px", lg: "18px", xl: "20px" },
                                    fontWeight: "400",
                                    textAlign: "left",
                                    mb: 0
                                }}
                            >
                                Power Rank: {' '}
                                <Span>
                                    11
                                </Span>
                            </Typography>
                            <Typography
                                variant="h4"
                                gutterBottom
                                sx={{
                                    color: "white",
                                    fontSize: { xs: "13px", sm: "16px", md: "16px", lg: "18px", xl: "20px" },
                                    fontWeight: "400",
                                    textAlign: "left",
                                    mb: 0
                                }}
                            >
                                Power: {' '}
                                <Span>
                                    9999
                                </Span>
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        {items.map((item) => {
                            let currentNav = false;
                            if (router.pathname === item.path) {
                                currentNav = true;
                            }

                            if (currentNav) {
                                return (
                                    <Links
                                        href={item.path}
                                        sx={{
                                            backgroundColor: "#ffff7f",
                                            color: "green",
                                            fontWeight: "700",
                                            fontSize: "20px"
                                        }}
                                    >
                                        {item.title}
                                    </Links>
                                );
                            } else {
                                return (
                                    <Links
                                        href={item.path}
                                        sx={{ fontWeight: "700", fontSize: "20px" }}
                                    >
                                        {item.title}
                                    </Links>
                                );
                            }
                        })}
                    </Box>

                </Box>

            </Drawer >
        </Box >
    );
}