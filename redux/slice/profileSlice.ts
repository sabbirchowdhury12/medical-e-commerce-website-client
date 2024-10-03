// src/redux/slice/profileSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  profile: any;
  loading: boolean;
}

const initialState: ProfileState = {
  profile: null,
  loading: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<any>) => {
      state.profile = action.payload;
    },
    clearProfile: (state) => {
      state.profile = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setProfile, clearProfile, setLoading } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
