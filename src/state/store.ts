import {configureStore} from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import playlistReducer from './features/playlistSlice';
import accompaniesReducer from './features/accompanySlice';
import accompanyReducer from './features/companySlice';
import partnerSlice from './features/partnerSlice';
import singlePartnerSlice from './features/singlePartnerSlice';
import contractSlice from './features/contractSlice';
import scheduleSlice from './features/scheduleSlice';
import singleScheduleSlice from './features/singleScheduleSlice';
export const store = configureStore({
    reducer: {
        auth:authReducer,
        playlist:playlistReducer,
        accompanies:accompaniesReducer,
        accompany:accompanyReducer,
        partner: partnerSlice,
        singlepartnerSlice : singlePartnerSlice,
        contract: contractSlice,
        schedule:scheduleSlice,
        singleScheduleSlice:singleScheduleSlice
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;