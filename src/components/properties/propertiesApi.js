export const getProperties = function() {
    return fetch('<% API_HOST %>/api/properties', {
        method: 'GET'
    }).then((res) => res.json());
};
