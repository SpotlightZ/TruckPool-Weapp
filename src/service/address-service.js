import mpx from "@mpxjs/core";

const MAP_BASE_URL = "http://dev.virtualearth.net/REST/v1";
const KEY = "AuSQcC8fkqfyYQD7nD_tMS9CPefxwUwSTHA3mWWRLze9DLksx9n5QepKA952d1-j";

const BING_BASE_URL = "https://www.bing.com/api/v6";

const APP_ID = "D41D8CD98F00B204E9800998ECF8427E1FBE79C2";

export async function geoToAddress(lat, lng) {
    let response = await mpx.xfetch.fetch({
        url: `${MAP_BASE_URL}/Locations/${lat},${lng}?key=${KEY}&includeEntityTypes=Address,PopulatedPlace,CountryRegion,PopulatedPlace`
    });
    return response;
}

export async function locationSuggest(search, location, radius, maxResults) {
    let response = await mpx.xfetch.fetch({
        url: `${BING_BASE_URL}/Places/AutoSuggest?q=${encodeURIComponent(
            search
        )}&appid=${APP_ID}&localcircularview=${location.lat},${
            location.lng
            },${radius}&structuredaddress=true&maxResults=${maxResults}&setlang=en-AU`
    });
    return response;
}

export async function placeDetail(link) {
    link += `&appid=${APP_ID}`;
    let response = await mpx.xfetch.fetch({ url: link });
    return response;
}
