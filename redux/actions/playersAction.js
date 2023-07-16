import { createAsyncThunk } from "@reduxjs/toolkit";
import playersAPI from "../api/players";


// register player
export const registerPlayer = createAsyncThunk(
  "guild/registerPlayer",
  async (data, { rejectWithValue }) => {
      try {
          const response = await playersAPI.registerPlayerApi(data);
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

// playerlogin
export const playerLogin = createAsyncThunk(
  "guild/playerLogin",
  async (data, { rejectWithValue }) => {
      try {
        console.log(data,"a");
          const response = await playersAPI.playerLoginApi(data);
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

// get all DA players list api
export const getAllDAPlayersListByGuildId = createAsyncThunk(
  "players/getAllDAPlayersListByGuildId",
  async (data, { rejectWithValue }) => {
    try {
      const response = await playersAPI.getAllDAPlayersListApi(data);
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

export const getPlayerAvatar = createAsyncThunk(
  "guild/getPlayerAvatar",
  async (data, { rejectWithValue }) => {
      try {
          const response = await playersAPI.getPlayerAvatarApi();
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
