import mpx from "@mpxjs/core";
import store from "../store.js";
import { Promisify } from "../util/promisify";
import { ServerConfig } from "./server-config"


export async function getOrders(state, page, size) {
    let response = await mpx.xfetch.fetch({
        auth: true,
        method: 'GET',
        url: `${ServerConfig.BASE_URL}/order/state` + (state ? `/${state}` : `/`),
        data: {
            page, size
        }
    });
    return response.data;
}

export async function getOrderDetail(id) {
    let response = await mpx.xfetch.fetch({
        auth: true,
        method: 'GET',
        url: `${ServerConfig.BASE_URL}/order/id/${id}`
    });
    return response.data;
}

/**
 * @typedef  {{lat: number, lng: number}} Location
 */

/**
 *
 * @param {{type: string,startAt: Date,fromLocation: Location, toLocation: Location, helpersNumber: number}} order
 */
export async function createOrder(order) {
    let response = await mpx.xfetch.fetch({
        auth: true,
        method: 'POST',
        url: `${ServerConfig.BASE_URL}/order`,
        data: order
    });
    return response.data;
}


export async function payOrder(id) {
    let response = await mpx.xfetch.fetch({
        auth: true,
        method: 'POST',
        url: `${ServerConfig.BASE_URL}/order/payment/${id}`,
    });
    return response.data;
}
