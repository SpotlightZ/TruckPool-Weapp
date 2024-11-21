export function installInterceptors(mpx, store) {
    mpx.xfetch.interceptors.request.use(function (config) {
        console.log(store)
        //auth check
        if (config.auth) {
            if (config.header) { config.header['x-access-token'] = store.state.tokenData.accessToken; }
            else {
                config.header = { 'x-access-token': store.state.tokenData.accessToken }
            }
        }
        console.log(`[Request] auth: ${config.auth}`, config);
        return config
    });

    mpx.xfetch.interceptors.response.use(function (res) {
        console.log(`[Response] code: ${res.data.code}`, res.data.data);
        return res.data || res;
    })

}
