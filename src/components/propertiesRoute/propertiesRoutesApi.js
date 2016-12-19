export const getRoutes = function() {
    return fetch(`<% API_HOST %>/api/propertiesRoutes`, {
        method: 'GET'
    }).then((res) => res.json());
};
