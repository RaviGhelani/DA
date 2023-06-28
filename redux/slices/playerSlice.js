import { createSlice } from "@reduxjs/toolkit";
import { getAllPlayersListByGuildId } from "../actions/playersAction";

const PlayersSlice = createSlice({
  name: "Players",
  initialState: {
    allPlayersList: null,
    allPlayersListPagination: null,
    allPlayersListLoader: false,
    allPlayersListCustomPagination: {
      page: 1,
      size: 10,
    },
    error: null,
  },
  reducers: {
    setAllPlayersListCustomPagination: (state, action) => {
      state.allPlayersListCustomPagination = {
        page: action.payload.page,
        size: action.payload.size,
      };
    },
  },
  extraReducers: (builder) => {
    // get all Players list api
    builder.addCase(getAllPlayersListByGuildId.pending, (state, { payload }) => {
      state.allPlayersListLoader = true;
    });

    builder.addCase(getAllPlayersListByGuildId.fulfilled, (state, { payload }) => {
      state.allPlayersListLoader = false;
      state.allPlayersList = payload.data;
      state.allPlayersListPagination = payload.pagination;
    });

    builder.addCase(getAllPlayersListByGuildId.rejected, (state, { payload }) => {
      state.allPlayersListLoader = false;
      state.error = payload;
    });
  },
});

export const { setAllPlayersListCustomPagination } =
  PlayersSlice.actions;

export default PlayersSlice.reducer;
