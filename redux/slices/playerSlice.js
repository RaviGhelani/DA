import { createSlice } from "@reduxjs/toolkit";
import {
  getAllDAPlayersListByGuildId,
  getAllPlayersListByGuildId,
  getPlayerAvatar,
  getPlayerInfo,
  playerLogin,
} from "../actions/playersAction";

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
    allDAPlayersList: null,
    allDAPlayersListPagination: null,
    allDAPlayersListLoader: false,
    allDAPlayersListCustomPagination: {
      page: 1,
      size: 10,
    },
    error: null,
    playerAvatar: null,
    playerInfo: null,
    success: false,
    loading: false,
  },
  reducers: {
    setAllPlayersListCustomPagination: (state, action) => {
      state.allPlayersListCustomPagination = {
        page: action.payload.page,
        size: action.payload.size,
      };
    },
    setAllDAPlayersListCustomPagination: (state, action) => {
      state.allDAPlayersListCustomPagination = {
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

    // get all DA Players list api
    builder.addCase(getAllDAPlayersListByGuildId.pending, (state, { payload }) => {
      state.allDAPlayersListLoader = true;
    });

    builder.addCase(getAllDAPlayersListByGuildId.fulfilled, (state, { payload }) => {
      state.allDAPlayersListLoader = false;
      state.allDAPlayersList = payload.data;
      state.allDAPlayersListPagination = payload.pagination;
    });

    builder.addCase(getAllDAPlayersListByGuildId.rejected, (state, { payload }) => {
      state.allDAPlayersListLoader = false;
      state.error = payload;
    });


    // get Player Avatar
    builder.addCase(getPlayerAvatar.pending, (state, { payload }) => {
      state.loading = true;
    });

    builder.addCase(getPlayerAvatar.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.playerAvatar = payload;
      state.success = true;
    });

    builder.addCase(getPlayerAvatar.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });


    // get Player Avatar
    builder.addCase(getPlayerInfo.pending, (state, { payload }) => {
      state.loading = true;
    });

    builder.addCase(getPlayerInfo.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.playerInfo = payload;
      state.success = true;
    });

    builder.addCase(getPlayerInfo.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const {
  setAllPlayersListCustomPagination,
  setAllDAPlayersListCustomPagination,
} = PlayersSlice.actions;

export default PlayersSlice.reducer;
