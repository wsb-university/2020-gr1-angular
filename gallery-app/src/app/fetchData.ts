export const fetchData = (httpClient, dataType, location) => {
    return httpClient
        .get(
            'https://api.openweathermap.org/data/2.5/' +
                dataType +
                '?q=' +
                location +
                '&appid=ae76d0efed32d9f29c4d54a5738b80ca'
        )
        .toPromise();
};
