//reducer for job data on careers page
import defaultState from "./defaultState.json";

//import action types
import {
  jobActions
} from "./../actions/actionsIndex.js"

export default function(state = defaultState, actionObj) {
  let newState = {};
  switch(actionObj.type) {
    case jobActions.FETCH_JOB_DATA:
      return {
        ...state,
        currentJob: actionObj.data
      };
    default:
      return state;
  }
}