import { createAsyncThunk } from "@reduxjs/toolkit";
import guildAPI from "../api/guilds";


// guild rehister api
export const registerGuild = createAsyncThunk(
    "guild/registerGuild",
    async (data, { rejectWithValue }) => {
        try {
            const response = await guildAPI.registerGuildApi(data);
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

export const getGuildAvatar = createAsyncThunk(
    "guild/getGuildAvatar",
    async (data, { rejectWithValue }) => {
        try {
            const response = await guildAPI.getGuildAvatarApi();
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

export const getGuildList = createAsyncThunk(
    "guild/getGuildList",
    async (data, { rejectWithValue }) => {
        try {
            const response = await guildAPI.getGuildListApi(data);
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