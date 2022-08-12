import {
    addNewPlayer,
    getPlayers,
    getPlayerWithID,
    UpdatePlayer,
    deletePlayer
} from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
        // Get endpoint
        .get(getPlayers)

        // POST endpoint
        .post(addNewPlayer);

    app.route('/player/:PlayerId')
        // Get specfic player
        .get(getPlayerWithID)

        // update a specific player
        .put(UpdatePlayer)

        // delete a specific player
        .delete(deletePlayer);

}

export default routes;