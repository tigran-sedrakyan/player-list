import CONSTANTS from "../../constants";
import initialState from "../initialState";

const {
  ACTIONS: { GET_PLAYERS, SAVE_PLAYER, REMOVE_PLAYER }
} = CONSTANTS;

const players = (state = initialState.players, action) => {
  switch (action.type) {
    case GET_PLAYERS.REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case GET_PLAYERS.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message + action.payload.name
      };
    case GET_PLAYERS.SUCCESS:
      return {
        ...state,
        data: action.payload.length
          ? action.payload[0].documents
          : action.payload,
        loading: false
      };
    case SAVE_PLAYER:
      return {
        ...state,
        saved: [...state.saved, action.payload.id]
      };
    case REMOVE_PLAYER:
      return {
        ...state,
        saved: state.saved.filter(id => id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default players;
