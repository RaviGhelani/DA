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
    borderTop:"1px solid white",
    borderBottom:"1px solid white",
    textDecoration:"none",
    cursor:"poi nter",
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
                        <Box sx={{ width: "70%" }}>
                            welcom to guild page
                        </Box>
                    </Box>
                </Box>

            </main>
        </Fragment>
    );
}
