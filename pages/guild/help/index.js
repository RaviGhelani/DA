import Head from "next/head";
import { Fragment, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Box, Link, Stack, Typography, styled } from "@mui/material";
import Guild from "../../../Components/GuildPage/Guild";
import { setAllDAPlayersListCustomPagination, setAllPlayersListCustomPagination } from "../../../redux/slices/playerSlice";
import { PlayersSearch } from "../../../Components/GuildPage/PlayerSearch";
import AllDAPlayerTable from "../../../Components/GuildPage/allDAPlayer-Table";
import { getAllDAPlayersListByGuildId } from "../../../redux/actions/playersAction";


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
        allDAPlayersListCustomPagination,
        allDAPlayersListLoader,
        allDAPlayersList,
        allDAPlayersListPagination,
    } = useSelector((state) => state.players);

    const dispatch = useDispatch();

    const [searchFilter, setSearchFilter] = useState("");

    const handleRowsPerPageChange = useCallback(
        (event) => {
            dispatch(
                setAllDAPlayersListCustomPagination({
                    page: 1,
                    size: event.target.value,
                })
            );

            dispatch(
                getAllDAPlayersListByGuildId({
                    page: 1,
                    size: event.target.value,
                    search: searchFilter?.name,
                })
            );
        },
        [allDAPlayersListCustomPagination?.page, searchFilter]
    );


    const handlePageChange = useCallback(
        (event, value) => {
            console.log("value", value);

            dispatch(
                setAllDAPlayersListCustomPagination({
                    page: value + 1,
                    size: allDAPlayersListCustomPagination?.size,
                })
            );

            dispatch(
                getAllDAPlayersListByGuildId({
                    page: value + 1,
                    size: allDAPlayersListCustomPagination?.size,
                    search: searchFilter?.name,
                })
            );
        },
        [allDAPlayersListCustomPagination?.size, searchFilter]
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
                            Comming Soon...!
                        </Box>
                    </Box>
                </Box>

            </main>
        </Fragment>
    );
}
