import Head from "next/head";
import { Fragment, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Box, Link, Typography, styled } from "@mui/material";
import Guild from "../../../Components/GuildPage/Guild";
import AllPlayerTable from "../../../Components/GuildPage/allPlayer-Table";
import { setAllPlayersListCustomPagination } from "../../../redux/slices/playerSlice";


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

    const {
        allPlayersListCustomPagination,
        allPlayersListLoader,
        allPlayersList,
        allPlayersListPagination,
    } = useSelector((state) => state.players);

    const dispatch = useDispatch();

    const [searchFilter, setSearchFilter] = useState({
        name: "",
    });

    const handleRowsPerPageChange = useCallback(
        (event) => {
            dispatch(
                setAllPlayersListCustomPagination({
                    page: 1,
                    size: event.target.value,
                })
            );

            dispatch(
                getAllPlayersList({
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
                getAllPlayersList({
                    page: value + 1,
                    size: allPlayersListCustomPagination?.size,
                    search: searchFilter?.name,
                })
            );
        },
        [allPlayersListCustomPagination?.size, searchFilter]
    );
    return (
        <Fragment>
            <main>

                <Box sx={{ px: 0 }}>
                    <Box sx={{ display: "flex" }}>
                        <Guild />
                        <Box sx={{ width: "100%", pb: "5%", marginTop: '65px' }}>
                            <Box>
                                welcom to guild page
                            </Box>
                            <Box sx={{ mt: 2, p: { xs: 1, sm: 2 } }}>
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
