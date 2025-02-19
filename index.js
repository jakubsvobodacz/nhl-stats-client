//DEPENDENCIES
const axios = require("axios");

//CONSTANTS
const BASE_URL = "https://api-web.nhle.com/v1";

//CORE CALL

/**
 * This method will make a request to the NHL API
 * @param {string} query defines the query parameters for the API call
 * @param {String} [caynneExp=''] this expression is required in some of the API calls
 * @param {Object} [extraUrlParams={}] additional url parameters for the API call
 * @returns {Promise<Object>} The api response data
 */
const makeRequest = async ({ query = '', caynneExp = '', extraUrlParams = {} }) => {
    try {
        const params = {}
        let url = ''
        if (caynneExp) {
            params.caynneExp = caynneExp;
        }
        if (query) {
            params.query = query;
        }
        if (Object.keys(extraUrlParams).length > 0) {
            url = extraUrlParams.url; 
        }
        const response = await axios.get(BASE_URL + url, { params });
        return response.data;
    } catch (error) {
        console.error(`API Request Failed with error: ${error}`);
    }
};

//PLAYER FUNCTIONS

/**
 * This method will return a specific player information based on the player id
 * @param {*} id 
 * @returns all player information
 */
const getPlayer = async (id) => {
    const playerId = id;
    const url = `/player/${playerId}/landing`;
    const data = await makeRequest({extraUrlParams: { url }});
    return data;
}

//TESTING
const main = async (func, ...args) => {
    let result = await func(...args);
    console.log(result);
} 

main(getPlayer, 8478402);





