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
 * @param {number} id the player id
 * @returns all available player information
 */
const getPlayer = async (id) => {
    const playerId = id;
    const url = `/player/${playerId}/landing`;
    const data = await makeRequest({extraUrlParams: { url }});
    return data;
}
/**
 * This method will return a specific player game log based on the player id, season, and game type
 * @param {number} id the player id
 * @param {number} season the season year, format YYYYYYYY meaning the season year is 20242025 without hyphens or spaces
 * @param {number} gameType the game type (2 for regular season, 3 for playoffs)
 * @returns {Promise<Object>} The api response data
 */
const getPlayerGameLog = async (id, season, gameType) => {
    const playerId = id;
    const url = `/player/${playerId}/game-log/${season}/${gameType}`;
    const data = await makeRequest({extraUrlParams: { url }});
    return data;
}

/**
 * This method will return a specific player game log that is happening right now based on the player id
 * @param {number} id the player id
 * @returns {Promise<Object>} The api response data
 */
const getPlayerGameLogNow = async (id) => {
    const playerId = id;
    const url = `/player/${playerId}/game-log/now`;
    const data = await makeRequest({extraUrlParams: { url }});
    return data;
}



//TESTING
const main = async (func, ...args) => {
    let result = await func(...args);
    console.log(result);
} 

main(getPlayerGameLogNow, 8478402);


//EXPORT
module.exports = {
    getPlayer,
    getPlayerGameLog,
    getPlayerGameLogNow
}


