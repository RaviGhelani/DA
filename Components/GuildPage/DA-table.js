import React from "react";
import {
    Box,
    Card,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
} from "@mui/material";
import { Scrollbar } from "../Design/Scrollbar";

const items = [
    {
        _id: "1",
        name: "Mad B00M",
        rank: "1",
        power: "9999",
        role: "(Team member) R3"
    },
    {
        _id: "2",
        name: "Shirish121",
        rank: "2",
        power: "8888",
        role: "(Leadership team) R4"
    },
    {
        _id: "3",
        name: "AprBossTeam",
        rank: "3",
        power: "7777",
        role: "(Leader) R5"
    },
    {
        _id: "4",
        name: "Shirish121",
        rank: "2",
        power: "8888",
        role: "(Leadership team) R4"
    },
    {
        _id: "5",
        name: "AprBossTeam",
        rank: "3",
        power: "7777",
        role: "(Leader) R5"
    }
]

const AllPlayerTable = (props) => {
    const {
        count = 0,
        // items = [],
        onPageChange = () => { },
        onRowsPerPageChange,
        page = 0,
        rowsPerPage = 0,
        selected = [],
    } = props;

    return (
        <>
            <Card>
                <Scrollbar>
                    <Box sx={{ minWidth: 500 }}>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ backgroundColor: "#dae6da" }}>
                                    <TableCell>Rank</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Power</TableCell>
                                    <TableCell>Guild Role</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {items?.length > 0 &&
                                    items?.map((player) => {
                                        const isSelected = selected.includes(player?._id);
                                        return (
                                            <TableRow hover key={player?._id} selected={isSelected} sx={{backgroundColor:"#f7f7f7"}}>
                                                <TableCell>{player.rank}</TableCell>
                                                <TableCell>{player.name}</TableCell>
                                                <TableCell>{player.power}</TableCell>
                                                <TableCell>{player.role}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </Box>
                </Scrollbar>

                <TablePagination
                    component="div"
                    count={count}
                    onPageChange={onPageChange}
                    onRowsPerPageChange={onRowsPerPageChange}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[5, 10, 25]}
                />
            </Card>
        </>
    );
};

export default AllPlayerTable;
