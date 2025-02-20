# 🏒 NHL Stats API Client
This project represents a client library for the NHL Stats API located at api-web.nhle.com. It is available as an npm package.

## 🙏 THANK YOU
This little project was made possible by two great resources:
- The NHL API, which is a fantastic resource for hockey data. Thank you to the NHL for providing this data and to the developers who made the API available.
- The [NHL-API-Reference](https://github.com/Zmalski/NHL-API-Reference) project, where the main heavy lifting of mapping and documenting the the entire (?) API was done - ⭐️ Thanks! ⭐️

## Installation
```bash
npm install nhl-stats-client
```

## Usage

```javascript
const nhlStats = require('nhl-stats-client');
```

## Player Functions

### getPlayer(id)
Retrieves detailed information about a specific NHL player.

**Parameters**: 
`id` {number} - The player's NHL ID
**Returns**: Promise<Object> containing all available player information
**Example**:

```javascript
const playerInfo = await nhlStats.getPlayer(8478402);
```

### getPlayerGameLog(id, season, gameType)
Retrieves a player's game log for a specific season and game type.

**Parameters**:
`id` {number} - The player's NHL ID
`season` {number} - Season year in YYYYYYYY format (e.g., 20242025)
`gameType` {number} - Game type (2 for regular season, 3 for playoffs)
**Returns**: Promise<Object> containing the player's game log data
**Example**:

```javascript 
    const gameLog = await nhlStats.getPlayerGameLog(8478402, 20232024, 2); 
```

### getPlayerGameLogNow(id)
Retrieves a player's current game log (for games in progress).

**Parameters**:
`id` {number} - The player's NHL ID
**Returns**: Promise<Object> containing the player's current game data
**Example**:

```javascript
const currentGame = await nhlStats.getPlayerGameLogNow(8478402);
```

## Error Handling
All API requests include error handling that will log errors to the console if the request fails.

## Base URL
The API uses `https://api-web.nhle.com/v1` as its base URL for all requests.

## Contributing
Feel free to open issues or submit pull requests for any improvements or bug fixes.

## License
MIT

