import { Avatar, Box, Container, Typography, styled } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

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
    cursor: "pointer",
    // backgroundColor:"yellow",
    [theme.breakpoints.up("xs")]: {},
}));

function Guild() {
    const location = useRouter()
    console.log(location)
    
    return (

        <Box sx={{ width: "30%", height: "100vh", backgroundColor: "#599537", overflowY:"auto"}}>
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
                        Rank: {' '}
                        <Span>
                            11
                        </Span>
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Links
                    href="/guild/home"
                    sx={{ backgroundColor: "yellow", color: "green", fontWeight: "700", fontSize: "20px" }}
                >
                    Home
                </Links>
                <Links href="/guild/dragon-arena">Dragon Arena</Links>
                <Links href="/guild/profile">Profile</Links>
                <Links href="/guild/help">Help</Links>
                <Links href="/">Logout</Links>
            </Box>
        </Box>

    )
}

export default Guild