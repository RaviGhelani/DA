import { createAsyncThunk } from "@reduxjs/toolkit";
import playersAPI from "../api/players";

// get all players list api
export const getAllPlayersListByGuildId = createAsyncThunk(
  "players/getAllPlayersListByGuildId",
  async (data, { rejectWithValue }) => {
    try {
      const response = await playersAPI.getAllPlayersListApi(data);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
