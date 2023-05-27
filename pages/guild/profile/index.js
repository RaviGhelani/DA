import Head from "next/head";
import { Fragment } from "react";
// import GuildSignUp from "../../Components/GuildPage/Guildsignup";
import { Avatar, Box, Link, Typography, styled } from "@mui/material";
import Guild from "../../../Components/GuildPage/Guild";


const Span = styled("span")(({ theme }) => ({
    color: "yellow",
    [theme.breakpoints.up("xs")]: {},
}));

const Links = styled(Link)(({ theme }) => ({
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // padding: '15px',
    display: "flex",
    height: "50px",
    color: "white",
    borderTop: "1px solid white",
    borderBottom: "1px solid white",
    textDecoration: "none",
    cursor: "poi nter",
    // backgroundColor:"yellow",
    [theme.breakpoints.up("xs")]: {},
}));

export default function Home() {
    return (
        <Fragment>
            <main>

                <Box sx={{ px: 0 }}>
                    <Box sx={{ display: "flex" }}>
                        <Guild />
                        <Box sx={{ width: "100%", px: "5%", py: "5%" }}>
                            <Box>
                                <Box sx={{ backgroundColor: "white" }}>
                                    <Box sx={{display:"flex", alignItems:"center", gap:"5px"}}>
                                        <Typography
                                            variant="h4"
                                            gutterBottom
                                            sx={{
                                                color: "green",
                                                fontSize: { xs: "13px", sm: "14px", md: "15px", xl: "16px" },
                                                fontWeight: "600",
                                                
                                            }}
                                        >
                                            Game Name:{' '}
                                        </Typography>
                                        <Typography
                                            variant="h4"
                                            gutterBottom
                                            sx={{
                                                color: "black",
                                                fontSize: { xs: "13px", sm: "14px", md: "15px", xl: "16px" },
                                                fontWeight: "400",
                                            }}
                                        >
                                            Mad B00M
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </main>
        </Fragment>
    );
}
