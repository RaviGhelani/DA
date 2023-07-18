import React from "react";
import {
    Box,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
} from "@mui/material";
import { Scrollbar } from "../Design/Scrollbar";


const AllPlayerTable = (props) => {
    const {
        count = 0,
        items = [],
        onPageChange = () => { },
        onRowsPerPageChange,
        page = 0,
        rowsPerPage = 0,
        selected = [],
    } = props;

    return (
        <>
            <Card>
                {/* <Scrollbar> */}
                    <Box sx={{ minWidth: 500, overflow:"auto" }}>
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
                                            <TableRow hover key={player?._id} selected={isSelected} sx={{backgroundColor:"#fcfcfc"}}>
                                                <TableCell>{player.poweRank ? player.poweRank : 0}</TableCell>
                                                <TableCell>{player.gameName}</TableCell>
                                                <TableCell>{player.power}</TableCell>
                                                <TableCell>{player.guildRank}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </Box>
                {/* </Scrollbar> */}

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
