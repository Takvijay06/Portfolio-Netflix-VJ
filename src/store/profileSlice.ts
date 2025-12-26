import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ProfileType = 'recruiter' | 'stacker' | 'developer' | null;

interface ProfileState {
  currentProfile: ProfileType;
  selectedProfile: ProfileType;
}

const initialState: ProfileState = {
  currentProfile: null,
  selectedProfile: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setCurrentProfile: (state, action: PayloadAction<ProfileType>) => {
      state.currentProfile = action.payload;
      state.selectedProfile = action.payload;
    },
    clearProfile: (state) => {
      state.currentProfile = null;
      state.selectedProfile = null;
    },
  },
});

export const { setCurrentProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;