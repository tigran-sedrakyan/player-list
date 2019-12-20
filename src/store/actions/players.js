import { RSAA } from "redux-api-middleware";
import CONTANTS from "../../constants";

const {
  ACTIONS: { GET_PLAYERS, SAVE_PLAYER, REMOVE_PLAYER },
  URLS: { BASE_URL }
} = CONTANTS;

export const getPlayers = params => {
  return {
    [RSAA]: {
      endpoint: `${BASE_URL}?index=player&q=${params.query}`,
      method: "GET",
      types: [GET_PLAYERS.REQUEST, GET_PLAYERS.SUCCESS, GET_PLAYERS.FAILURE]
    }
  };
};

export const savePlayer = params => {
  return {
    type: SAVE_PLAYER,
    payload: {
      id: params.id
    }
  };
};

export const removePlayer = params => {
  return {
    type: REMOVE_PLAYER,
    payload: {
      id: params.id
    }
  };
};
