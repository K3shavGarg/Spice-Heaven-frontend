import {createReducer} from "@reduxjs/toolkit";

export const authReducer = createReducer({},
    {
        loadingUserRequest: (state)=>{
            state.loading = true;
        },
        loadingUserSuccess: (state, action)=>{
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        loadingUserFail: (state, action)=>{
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },


        logoutRequest: (state)=>{
            state.loading = true;
        },
        logoutSuccess: (state,action)=>{
            state.loading = false;
            state.message = action.payload;
            state.isAuthenticated = false;
            state.user = null;
        },
        logoutFail: (state, action)=>{
            state.loading = false;
            state.isAuthenticated = true;
            state.error = action.payload;
        },

        userContactRequest: (state)=>{
            state.loading = true;
        },
        userContactSuccess: (state,action)=>{
            state.loading = false;
            state.message = action.payload;
        },
        userContactFail: (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },


        clearError: (state)=>{
            state.error = null;
        },
        clearMessage: (state)=>{
            state.message = null;
        },
    }
)
