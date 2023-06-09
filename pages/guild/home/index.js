import { Fragment, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Box, Link, Stack, Typography, styled } from "@mui/material";
import Guild from "../../../Components/GuildPage/Guild";
import AllPlayerTable from "../../../Components/GuildPage/allPlayer-Table";
import { setAllPlayersListCustomPagination } from "../../../redux/slices/playerSlice";
import { PlayersSearch } from "../../../Components/GuildPage/PlayerSearch";
import { getAllPlayersListByGuildId } from "../../../redux/actions/playersAction";


const Span = styled("span")(({ theme }) => ({
    color: "yellow",
    [theme.breakpoints.up("xs")]: {},
}));

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
    cursor: "poi nter",
    [theme.breakpoints.up("xs")]: {},
}));

export default function Home() {

    const {
        allPlayersListCustomPagination,
        allPlayersListLoader,
        allPlayersList,
        allPlayersListPagination,
    } = useSelector((state) => state.players);

    const dispatch = useDispatch();

    const [searchFilter, setSearchFilter] = useState("");

    const handleRowsPerPageChange = useCallback(
        (event) => {
            dispatch(
                setAllPlayersListCustomPagination({
                    page: 1,
                    size: event.target.value,
                })
            );

            dispatch(
                getAllPlayersListByGuildId({
                    page: 1,
                    size: event.target.value,
                    search: searchFilter?.name,
                })
            );
        },
        [allPlayersListCustomPagination?.page, searchFilter]
    );


    const handlePageChange = useCallback(
        (event, value) => {
            console.log("value", value);

            dispatch(
                setAllPlayersListCustomPagination({
                    page: value + 1,
                    size: allPlayersListCustomPagination?.size,
                })
            );

            dispatch(
                getAllPlayersListByGuildId({
                    page: value + 1,
                    size: allPlayersListCustomPagination?.size,
                    search: searchFilter?.name,
                })
            );
        },
        [allPlayersListCustomPagination?.size, searchFilter]
    );
    const searchFilterHandler = (value) => {
        setSearchFilter(value);
    };

    return (
        <Fragment>
            <main>

                <Box sx={{ px: 0 }}>
                    <Box sx={{ display: "flex" }}>
                        <Guild />
                        <Box sx={{ width: "100%", pb: "5%", marginTop: '65px' }}>
                            <Stack direction="row" justifyContent="space-between" spacing={4} sx={{ mt: 2, px: 2, color: "green" }}>
                                <Stack spacing={1}>
                                    <Typography variant="h5" sx={{ fontSize: { lg: "26px", md: "22px", xs: "20px" } }}>{"aPR's Dashboard"}</Typography>
                                </Stack>
                            </Stack>
                            <Box sx={{ mt: 2, p: 2, backgroundColor: "#f0f5f0 ", display: "flex", alignItems: "center", gap: "10px", color: "green" }}>
                                <Box>
                                    <Avatar sx={{ width: { md: "70px", xs: "50px" }, height: { md: "70px", xs: "50px" } }}
                                        alt="Avatar"
                                        src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    />
                                </Box>
                                <Box>
                                    <Typography variant="h5" sx={{ fontSize: { lg: "22px", md: "18px", xs: "16px" } }}>{"aPR (a Phoenix Rising)"}</Typography>
                                    <Stack spacing={1}>
                                        <Typography sx={{ fontSize: { lg: "18px", md: "16px", xs: "13px" } }}>{"Total Players:" + ' 5'}</Typography>
                                    </Stack>
                                </Box>
                            </Box>
                            <PlayersSearch searchFilterHandler={searchFilterHandler} />
                            <Box sx={{ mt: 0, p: { xs: 1, sm: 2 } }}>
                                <AllPlayerTable
                                    count={allPlayersListPagination?.totalItems}
                                    items={allPlayersList}
                                    onPageChange={handlePageChange}
                                    onRowsPerPageChange={handleRowsPerPageChange}
                                    page={allPlayersListCustomPagination?.page - 1}
                                    rowsPerPage={allPlayersListCustomPagination?.size} />
                            </Box>

                        </Box>
                    </Box>
                </Box>

            </main>
        </Fragment>
    );
}
