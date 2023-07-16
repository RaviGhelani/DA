import { createSlice } from "@reduxjs/toolkit";
import { getGuildAvatar, getGuildList, registerGuild } from "../actions/guildAction";

const guildSlice = createSlice({
  name: "guild",
  initialState: {
    loading: false,
    guildData: null,
    guildAvatar: null,
    guildList: null,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // guild register
    builder.addCase(registerGuild.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(registerGuild.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.guildData = payload.data;
    });
    builder.addCase(registerGuild.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    // guild Avatar
    builder.addCase(getGuildAvatar.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(getGuildAvatar.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.guildAvatar = payload;
    });
    builder.addCase(getGuildAvatar.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });


    // guild Liat
    builder.addCase(getGuildList.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(getGuildList.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.guildList = payload;
    });
    builder.addCase(getGuildList.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export default guildSlice.reducer;
