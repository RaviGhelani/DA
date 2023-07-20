import Head from "next/head";
import { Fragment } from "react";
// import GuildSignUp from "../../Components/GuildPage/Guildsignup";
import { Avatar, Box, Button, Grid, Link, List, Typography, styled } from "@mui/material";
import Guild from "../../../Components/GuildPage/Guild";
import ProfilePageImage from '../../../public/Images/ProfilePage/ProfilePageImage.jpeg'
import Army_ATK from '../../../public/Images/ProfilePage/Army_ATK.png'
import Army_Health from '../../../public/Images/ProfilePage/Army_Health.png'
import Army_Defense from '../../../public/Images/ProfilePage/Army_Defense.png'
import Infantry_Defense from '../../../public/Images/ProfilePage/Infantry_Defense.png'
import Infantry_Health from '../../../public/Images/ProfilePage/Infantry_Health.png'
import Infantry_ATK from '../../../public/Images/ProfilePage/Infantry_ATK.png'
import Infantry from '../../../public/Images/ProfilePage/Infantry.png'
import Ranged_Defense from '../../../public/Images/ProfilePage/Ranged_Defense.png'
import Ranged_Health from '../../../public/Images/ProfilePage/Ranged_Health.png'
import Ranged_ATK from '../../../public/Images/ProfilePage/Ranged_ATK.png'
import Ranged from '../../../public/Images/ProfilePage/Ranged.png'
import Cavalry_Defense from '../../../public/Images/ProfilePage/Cavalry_Defense.png'
import Cavalry_Health from '../../../public/Images/ProfilePage/Cavalry_Health.png'
import Cavalry_ATK from '../../../public/Images/ProfilePage/Cavalry_ATK.png'
import Cavalry from '../../../public/Images/ProfilePage/Cavalry.png'

import Army from '../../../public/Images/ProfilePage/Troop.png'
import Image from "next/image";
import { useRouter } from "next/router";
import ListItemComp from "../../../Components/Design/ListItemComp";
import { useSelector } from "react-redux";


const Span = styled("span")(({ theme }) => ({
    color: "yellow",
    [theme.breakpoints.up("xs")]: {},
}));

const Img = styled(Image)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
    },
    [theme.breakpoints.down("sm")]: {
    },
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
    const location = useRouter()
    const {
        playerInfo,
    } = useSelector((state) => state.players);
    console.log(playerInfo, "playerInfo");

    return (
        <Fragment>
            <main>
                <Img
                    src={ProfilePageImage}
                    alt={""}
                    sx={{
                        zIndex: "-1",
                        opacity: "0.8",
                        position: 'fixed',
                        width: '100%',
                        height: '100%',
                        bottom: "ovh",
                        objectFit: 'cover',
                    }}
                />



                <Box sx={{ px: 0 }}>
                    <Box sx={{ display: "flex" }}>
                        <Guild />
                        <Box sx={{ width: "100%", pb: "5%", marginTop: '65px' }}>
                            <Box sx={{ display: "flex", backgroundColor: "rgba(255, 255, 255, 0.4)", pt: "2rem", mt: { xs:"-10px", sm: "unset" }, flexDirection: { xs: "column" }, justifyContent: "space-between", gap: "20px", px: { xs: "3%", sm: "10%" }, pb: 40, borderBottom: "3px solid rgba(89, 149, 55, 0.7)" }}>

                                <Box
                                    sx={{
                                        display: "inline-block",
                                        width: "100%",
                                        borderRadius: "10px",
                                        boxShadow:
                                            "0px 5px 22px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03)",
                                        backgroundColor: "rgba(215,181,124, 0.8)",
                                    }}
                                >
                                    <Grid container columnSpacing={4}>
                                        <Grid
                                            item
                                            xs={12}
                                            sx={{  }}
                                        >
                                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "rgba(215,181,124, 0.9)", py: 1, borderRadius: "10px 10px 0 0", }}>
                                                <Typography
                                                    variant="subtitle2"
                                                    gutterBottom
                                                    sx={{
                                                        mb: 1,
                                                        fontWeight: "600",
                                                        fontSize: {xs:"15px", sm:"18px", lg:"22px"},
                                                        display: "inline-block",
                                                        color: "green",
                                                        px: "14px",
                                                        mt: 1,
                                                    }}
                                                >
                                                    PLAYER DETAILS
                                                </Typography>
                                                <Box sx={{ display: "flex", alignItems: "center", gap: "5px", px: 2 }}>
                                                    <Button
                                                        disableRipple
                                                        onClick={() => location.push('/guild/profile/edit-player-profile')}
                                                        variant="contained"
                                                        sx={{
                                                            width: { xs: "110px", sm: "140px", md: "160px" },
                                                            height: { xs: "30px", sm: "40px", md: "45px" },
                                                            color: "white",
                                                            backgroundColor: "#599537",
                                                            fontSize: { xs: "13px", sm: "16px", md: "18px", xl: "22px" },
                                                            lineHeight: { xs: "13px", sm: "16px", xl: "19px" },
                                                            fontWeight: "500",
                                                            borderRadius: "10px",
                                                            border: "1px solid #599537",
                                                            textTransform: "capitalize",
                                                            "&:hover": {
                                                                color: "white",
                                                                backgroundColor: "#599537",
                                                                border: "1px solid #599537",
                                                            },
                                                            "&:focus": {
                                                                color: "white",
                                                                backgroundColor: "#599537",
                                                                border: "1px solid #599537",
                                                            },
                                                            "&:active": {
                                                                color: "white",
                                                                backgroundColor: "#599537",
                                                                border: "1px solid #599537",
                                                            },
                                                            "&:disabled": {
                                                                cursor: "not-allowed",
                                                                border: "none",
                                                            },
                                                        }}
                                                    >
                                                        Edit Profile
                                                    </Button>
                                                </Box>
                                            </Box>

                                            <List>
                                                <Grid container columnSpacing={20}>
                                                    <Grid item xs={12} md={6}>
                                                        <ListItemComp
                                                            label={"Game name"}
                                                            value={playerInfo?.gameName}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <ListItemComp
                                                            label={"Guild Rank"}
                                                            value={playerInfo?.guildRank}
                                                        />
                                                    </Grid>
                                                </Grid>

                                                <Grid container columnSpacing={20}>
                                                    <Grid item xs={12} md={6}>
                                                        <ListItemComp
                                                            label={"Guild Tag"}
                                                            value={playerInfo?.guildId?.guildTag}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <ListItemComp
                                                            label={"Power"}
                                                            value={playerInfo?.power}
                                                        />
                                                    </Grid>
                                                </Grid>

                                                <Grid container columnSpacing={20}>
                                                    <Grid item xs={12} md={6}>
                                                        <ListItemComp
                                                            label={"Guild Name"}
                                                            value={playerInfo?.guildId?.guildName}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <ListItemComp
                                                            label={"Power Rank"}
                                                            value={playerInfo?.powerRank ? playerInfo?.powerRank : "-"}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </List>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: -35, mx: { xs: "3%", sm: "5%", md: "10%" }, p: 3, pt: { xs: 3, sm: 6 }, position: "relative", zIndex: 1, backgroundColor: "rgba(215,181,124, 1)", boxShadow: "0px 0px 50px #707070", borderRadius: "10px" }}>
                                <Box>
                                    <Typography
                                        variant="h4"
                                        gutterBottom
                                        sx={{
                                            fontSize: {xs:"15px", sm:"18px", lg:"22px"},
                                            fontWeight: "600",
                                            textAlign: "center",

                                            color: "green"
                                        }}
                                    >
                                        YOUR STATS
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", width: "100%", backgroundColor: "#bd9d68", py: 1, borderBottom: "2px solid green" }}>
                                    <Box sx={{ width: "30%" }}>
                                        <Typography
                                            variant="h4"
                                            gutterBottom
                                            sx={{
                                                fontSize: { xs: "13px", sm: "15px", md: "18px", xl: "20px" },
                                                fontWeight: "500",
                                                textAlign: "center",
                                                m: 0,
                                                color: "green"
                                            }}
                                        >
                                            Troop Type
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", width: "70%" }}>
                                        <Box sx={{ width: "33.33%" }}>
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    fontSize: { xs: "13px", sm: "15px", md: "18px", xl: "20px" },
                                                    fontWeight: "500",
                                                    textAlign: "center",
                                                    m: 0,
                                                    color: "green"
                                                }}
                                            >
                                                ATK
                                            </Typography>
                                        </Box>
                                        <Box sx={{ width: "33.33%" }}>
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    fontSize: { xs: "13px", sm: "15px", md: "18px", xl: "20px" },
                                                    fontWeight: "500",
                                                    textAlign: "center",
                                                    m: 0,
                                                    color: "green"
                                                }}
                                            >
                                                HP
                                            </Typography>
                                        </Box>
                                        <Box sx={{ width: "33.33%" }}>
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    fontSize: { xs: "13px", sm: "15px", md: "18px", xl: "20px" },
                                                    fontWeight: "500",
                                                    textAlign: "center",
                                                    m: 0,
                                                    color: "green"
                                                }}
                                            >
                                                DEF
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", width: "100%", py: 1, borderBottom: "1px solid green", backgroundColor: "#d1ae73" }}>
                                    <Box sx={{ width: "30%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: { xs: "column" }, gap: "10px" }}>
                                        <Img src={Army} sx={{ width: { xs: "55%", sm: "40%", md: "25%", lg: "20%" }, height: "auto" }} alt={'armyATK-Image'} />
                                        <Typography
                                            variant="h4"
                                            gutterBottom
                                            sx={{
                                                fontSize: { xs: "14px", sm: "16px", md: "18px", xl: "20px" },
                                                fontWeight: "500",
                                                textAlign: "center",
                                                m: 0,
                                                color: "green"
                                            }}
                                        >
                                            Army
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", width: "70%", justifyContent: "space-evenly" }}>
                                        <Box sx={{ width: "33.33%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "10px" }}>
                                            <Img src={Army_ATK} sx={{ width: { xs: "70%", sm: "50%", md: "30%", lg: "25%" }, height: "auto" }} alt={'armyATK-Image'} />
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    fontSize: { xs: "12px", sm: "14px", md: "16px", xl: "18px" },
                                                    fontWeight: "400",
                                                    textAlign: "center",
                                                    m: 0,
                                                }}
                                            >
                                                {playerInfo?.armyATK}%
                                            </Typography>
                                        </Box>
                                        <Box sx={{ width: "33.33%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "10px" }}>
                                            <Img src={Army_Health} sx={{ width: { xs: "70%", sm: "50%", md: "30%", lg: "25%" }, height: "auto" }} alt={'armyATK-Image'} />
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    fontSize: { xs: "12px", sm: "14px", md: "16px", xl: "18px" },
                                                    fontWeight: "400",
                                                    textAlign: "center",
                                                    m: 0,
                                                }}
                                            >
                                                {playerInfo?.armyHP}%
                                            </Typography>
                                        </Box>
                                        <Box sx={{ width: "33.33%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "10px" }}>
                                            <Img src={Army_Defense} sx={{ width: { xs: "70%", sm: "50%", md: "30%", lg: "25%" }, height: "auto" }} alt={'armyATK-Image'} />
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    fontSize: { xs: "12px", sm: "14px", md: "16px", xl: "18px" },
                                                    fontWeight: "400",
                                                    textAlign: "center",
                                                    m: 0,
                                                }}
                                            >
                                                {playerInfo?.armyDEF}%
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", width: "100%", py: 1, borderBottom: "1px solid green", backgroundColor: "#d1ae73" }}>
                                    <Box sx={{ width: "30%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: { xs: "column" }, gap: "10px" }}>
                                        <Img src={Infantry} sx={{ width: { xs: "55%", sm: "40%", md: "25%", lg: "20%" }, height: "auto" }} alt={'armyATK-Image'} />
                                        <Typography
                                            variant="h4"
                                            gutterBottom
                                            sx={{
                                                fontSize: { xs: "14px", sm: "16px", md: "18px", xl: "20px" },
                                                fontWeight: "500",
                                                textAlign: "center",
                                                m: 0,
                                                color: "green"
                                            }}
                                        >
                                            Infantry
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", width: "70%", justifyContent: "space-evenly" }}>
                                        <Box sx={{ width: "33.33%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "10px" }}>
                                            <Img src={Infantry_ATK} sx={{ width: { xs: "70%", sm: "50%", md: "30%", lg: "25%" }, height: "auto" }} alt={'armyATK-Image'} />
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    fontSize: { xs: "12px", sm: "14px", md: "16px", xl: "18px" },
                                                    fontWeight: "400",
                                                    textAlign: "center",
                                                    m: 0,
                                                }}
                                            >
                                                {playerInfo?.infATK}%
                                            </Typography>
                                        </Box>
                                        <Box sx={{ width: "33.33%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "10px" }}>
                                            <Img src={Infantry_Health} sx={{ width: { xs: "70%", sm: "50%", md: "30%", lg: "25%" }, height: "auto" }} alt={'armyATK-Image'} />
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    fontSize: { xs: "12px", sm: "14px", md: "16px", xl: "18px" },
                                                    fontWeight: "400",
                                                    textAlign: "center",
                                                    m: 0,
                                                }}
                                            >
                                                {playerInfo?.infHP}%
                                            </Typography>
                                        </Box>
                                        <Box sx={{ width: "33.33%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "10px" }}>
                                            <Img src={Infantry_Defense} sx={{ width: { xs: "70%", sm: "50%", md: "30%", lg: "25%" }, height: "auto" }} alt={'armyATK-Image'} />
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    fontSize: { xs: "12px", sm: "14px", md: "16px", xl: "18px" },
                                                    fontWeight: "400",
                                                    textAlign: "center",
                                                    m: 0,
                                                }}
                                            >
                                                {playerInfo?.infDEF}%
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", width: "100%", py: 1, borderBottom: "1px solid green", backgroundColor: "#d1ae73" }}>
                                    <Box sx={{ width: "30%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: { xs: "column" }, gap: "10px" }}>
                                        <Img src={Ranged} sx={{ width: { xs: "55%", sm: "40%", md: "25%", lg: "20%" }, height: "auto" }} alt={'armyATK-Image'} />
                                        <Typography
                                            variant="h4"
                                            gutterBottom
                                            sx={{
                                                fontSize: { xs: "14px", sm: "16px", md: "18px", xl: "20px" },
                                                fontWeight: "500",
                                                textAlign: "center",
                                                m: 0,
                                                color: "green"
                                            }}
                                        >
                                            Ranger
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", width: "70%", justifyContent: "space-evenly" }}>
                                        <Box sx={{ width: "33.33%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "10px" }}>
                                            <Img src={Ranged_ATK} sx={{ width: { xs: "70%", sm: "50%", md: "30%", lg: "25%" }, height: "auto" }} alt={'armyATK-Image'} />
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    fontSize: { xs: "12px", sm: "14px", md: "16px", xl: "18px" },
                                                    fontWeight: "400",
                                                    textAlign: "center",
                                                    m: 0,
                                                }}
                                            >
                                                {playerInfo?.rangerATK}%
                                            </Typography>
                                        </Box>
                                        <Box sx={{ width: "33.33%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "10px" }}>
                                            <Img src={Ranged_Health} sx={{ width: { xs: "70%", sm: "50%", md: "30%", lg: "25%" }, height: "auto" }} alt={'armyATK-Image'} />
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    fontSize: { xs: "12px", sm: "14px", md: "16px", xl: "18px" },
                                                    fontWeight: "400",
                                                    textAlign: "center",
                                                    m: 0,
                                                }}
                                            >
                                                {playerInfo?.rangerHP}%
                                            </Typography>
                                        </Box>
                                        <Box sx={{ width: "33.33%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "10px" }}>
                                            <Img src={Ranged_Defense} sx={{ width: { xs: "70%", sm: "50%", md: "30%", lg: "25%" }, height: "auto" }} alt={'armyATK-Image'} />
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    fontSize: { xs: "12px", sm: "14px", md: "16px", xl: "18px" },
                                                    fontWeight: "400",
                                                    textAlign: "center",
                                                    m: 0,
                                                }}
                                            >
                                                {playerInfo?.rangerDEF}%
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", width: "100%", py: 1, borderBottom: "1px solid green", backgroundColor: "#d1ae73" }}>
                                    <Box sx={{ width: "30%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: { xs: "column" }, gap: "10px" }}>
                                        <Img src={Cavalry} sx={{ width: { xs: "55%", sm: "40%", md: "25%", lg: "20%" }, height: "auto" }} alt={'armyATK-Image'} />
                                        <Typography
                                            variant="h4"
                                            gutterBottom
                                            sx={{
                                                fontSize: { xs: "14px", sm: "16px", md: "18px", xl: "20px" },
                                                fontWeight: "500",
                                                textAlign: "center",
                                                m: 0,
                                                color: "green"
                                            }}
                                        >
                                            Cavalry
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", width: "70%", justifyContent: "space-evenly" }}>
                                        <Box sx={{ width: "33.33%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "10px" }}>
                                            <Img src={Cavalry_ATK} sx={{ width: { xs: "70%", sm: "50%", md: "30%", lg: "25%" }, height: "auto" }} alt={'armyATK-Image'} />
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    fontSize: { xs: "12px", sm: "14px", md: "16px", xl: "18px" },
                                                    fontWeight: "400",
                                                    textAlign: "center",
                                                    m: 0,
                                                }}
                                            >
                                                {playerInfo?.cavATK}%
                                            </Typography>
                                        </Box>
                                        <Box sx={{ width: "33.33%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "10px" }}>
                                            <Img src={Cavalry_Health} sx={{ width: { xs: "70%", sm: "50%", md: "30%", lg: "25%" }, height: "auto" }} alt={'armyATK-Image'} />
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    fontSize: { xs: "12px", sm: "14px", md: "16px", xl: "18px" },
                                                    fontWeight: "400",
                                                    textAlign: "center",
                                                    m: 0,
                                                }}
                                            >
                                                {playerInfo?.cavHP}%
                                            </Typography>
                                        </Box>
                                        <Box sx={{ width: "33.33%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "10px" }}>
                                            <Img src={Cavalry_Defense} sx={{ width: { xs: "70%", sm: "50%", md: "30%", lg: "25%" }, height: "auto" }} alt={'armyATK-Image'} />
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    fontSize: { xs: "12px", sm: "14px", md: "16px", xl: "18px" },
                                                    fontWeight: "400",
                                                    textAlign: "center",
                                                    m: 0,
                                                }}
                                            >
                                                {playerInfo?.cavDEF}%
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>


                                {/* <Box sx={{ p: 2, border: "3px solid green", mb: 6 }}>
                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", marginTop: "-40px", marginBottom: "20px" }}>

                                        <Avatar sx={{ width: { md: "60px" }, height: { md: "60px" } }}
                                            alt="Avatar"
                                            src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                        />

                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    color: "green",
                                                    fontSize: { xs: "13px", sm: "14px", md: "15px", xl: "16px" },
                                                    fontWeight: "500",

                                                }}
                                            >
                                                Army ATK:{' '}
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
                                                480{'%'}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    color: "green",
                                                    fontSize: { xs: "13px", sm: "14px", md: "15px", xl: "16px" },
                                                    fontWeight: "600",

                                                }}
                                            >
                                                Army HP:{' '}
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
                                                320{'%'}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    color: "green",
                                                    fontSize: { xs: "13px", sm: "14px", md: "15px", xl: "16px" },
                                                    fontWeight: "600",

                                                }}
                                            >
                                                Army DEF:{' '}
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
                                                230{'%'}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                                    <Box sx={{ p: 2, border: "3px solid #707070" }}>
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", marginTop: "-40px", marginBottom: "20px" }}>

                                            <Avatar sx={{ width: { md: "60px" }, height: { md: "60px" } }}
                                                alt="Avatar"
                                                src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                            />

                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    color: "green",
                                                    fontSize: { xs: "13px", sm: "14px", md: "15px", xl: "16px" },
                                                    fontWeight: "600",

                                                }}
                                            >
                                                Inf ATK:{' '}
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
                                                480{'%'}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    color: "green",
                                                    fontSize: { xs: "13px", sm: "14px", md: "15px", xl: "16px" },
                                                    fontWeight: "600",

                                                }}
                                            >
                                                Inf HP:{' '}
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
                                                320{'%'}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    color: "green",
                                                    fontSize: { xs: "13px", sm: "14px", md: "15px", xl: "16px" },
                                                    fontWeight: "600",

                                                }}
                                            >
                                                Inf DEF:{' '}
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
                                                230{'%'}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ p: 2, border: "3px solid #707070" }}>
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", marginTop: "-40px", marginBottom: "20px" }}>

                                            <Avatar sx={{ width: { md: "60px" }, height: { md: "60px" } }}
                                                alt="Avatar"
                                                src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                            />

                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    color: "green",
                                                    fontSize: { xs: "13px", sm: "14px", md: "15px", xl: "16px" },
                                                    fontWeight: "600",

                                                }}
                                            >
                                                Ranger ATK:{' '}
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
                                                480{'%'}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    color: "green",
                                                    fontSize: { xs: "13px", sm: "14px", md: "15px", xl: "16px" },
                                                    fontWeight: "600",

                                                }}
                                            >
                                                Ranger HP:{' '}
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
                                                320{'%'}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    color: "green",
                                                    fontSize: { xs: "13px", sm: "14px", md: "15px", xl: "16px" },
                                                    fontWeight: "600",

                                                }}
                                            >
                                                Ranger DEF:{' '}
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
                                                230{'%'}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ p: 2, border: "3px solid #707070" }}>
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", marginTop: "-40px", marginBottom: "20px" }}>

                                            <Avatar sx={{ width: { md: "60px" }, height: { md: "60px" } }}
                                                alt="Avatar"
                                                src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                            />

                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    color: "green",
                                                    fontSize: { xs: "13px", sm: "14px", md: "15px", xl: "16px" },
                                                    fontWeight: "600",

                                                }}
                                            >
                                                Cav ATK:{' '}
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
                                                480{'%'}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    color: "green",
                                                    fontSize: { xs: "13px", sm: "14px", md: "15px", xl: "16px" },
                                                    fontWeight: "600",

                                                }}
                                            >
                                                Cav HP:{' '}
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
                                                320{'%'}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                            <Typography
                                                variant="h4"
                                                gutterBottom
                                                sx={{
                                                    color: "green",
                                                    fontSize: { xs: "13px", sm: "14px", md: "15px", xl: "16px" },
                                                    fontWeight: "600",

                                                }}
                                            >
                                                Cav DEF:{' '}
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
                                                230{'%'}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box> */}
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "5px", mt: 3, justifyContent: "center" }}>
                                <Button
                                    disableRipple
                                    onClick={() => location.push('/guild/profile/edit-stats')}
                                    variant="contained"
                                    sx={{
                                        width: { xs: "140px", sm: "160px", md: "200px" },
                                        height: { xs: "40px", sm: "50px", md: "60px" },
                                        color: "white",
                                        backgroundColor: "#599537",
                                        fontSize: { xs: "13px", sm: "16px", md: "18px", xl: "22px" },
                                        lineHeight: { xs: "13px", sm: "16px", xl: "19px" },
                                        fontWeight: "500",
                                        borderRadius: "10px",
                                        border: "1px solid #599537",
                                        textTransform: "capitalize",
                                        "&:hover": {
                                            color: "white",
                                            backgroundColor: "#599537",
                                            border: "1px solid #599537",
                                        },
                                        "&:focus": {
                                            color: "white",
                                            backgroundColor: "#599537",
                                            border: "1px solid #599537",
                                        },
                                        "&:active": {
                                            color: "white",
                                            backgroundColor: "#599537",
                                            border: "1px solid #599537",
                                        },
                                        "&:disabled": {
                                            cursor: "not-allowed",
                                            border: "none",
                                        },
                                    }}
                                >
                                    Edit Stats
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </main>
        </Fragment>
    );
}
