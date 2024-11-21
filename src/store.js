import {
    createStore
} from "@mpxjs/core";

const store = createStore({
    state: {
        tabActive: 0,
        isLoggedin: wx.getStorageSync("token") != null,
        /**
         * @type {accessToken: string}
         */
        tokenData: wx.getStorageSync("token"),
        userProfile: {}
    },
    mutations: {
        switchTab(state, index) {
            state.tabActive = index;
        },
        login(state, tokenData) {
            state.isLoggedin = true;
            state.tokenData = tokenData;

            wx.setStorage({
                key: "token",
                data: tokenData
            })
        },
        logout(state, data) {
            state.isLoggedin = false;
            wx.removeStorage({ key: "token" })
        },
        profile(state, profile) {
            state.userProfile = profile;
        }
    }
});


export default store;
