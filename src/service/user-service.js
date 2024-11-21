import mpx from "@mpxjs/core";
import store from "../store.js";
import { Promisify } from "../util/promisify";
import { ServerConfig } from "./server-config"


export async function getUserProfile() {
    let response = await mpx.xfetch.fetch({
        auth: true,
        method: 'GET',
        url: `${ServerConfig.BASE_URL}/user/profile`
    });

    store.commit("profile", response.data)
    return response.data;
}
