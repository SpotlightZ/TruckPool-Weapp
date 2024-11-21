import mpx from "@mpxjs/core";
import store from "../store.js";
import { Promisify } from "../util/promisify";
import { ServerConfig } from "./server-config"

export async function wxLogin() {
    return Promisify.from(wx.login);
}



export async function userLogin(data) {
    
    let loginCode = await wxLogin();
    let response = await mpx.xfetch.fetch({
        method: 'POST',
        url: `${ServerConfig.BASE_URL}/user/access/login/wx`,
        data: {
            loginCode: loginCode.code,
            userInfo: data
        }
    });
    store.commit("login", response.data)
}

export function userLogout(data) {
    //auth: true,
    store.commit("logout")
}

export async function placeDetail(link) {
    link += `&appid=${APP_ID}`;
    let response = await mpx.xfetch.fetch({ url: link });
    return response.data;
}
