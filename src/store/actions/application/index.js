import { SET_ACTIVE_SCREEN } from "./types"
import * as accountService from '../../../service/AccountService';
import { MY_PROFILE } from '../../../utils/ScreenNames';

export const setActiveScreen = (activeScreen, options) => {
  return {
    type: SET_ACTIVE_SCREEN,
    activeScreen,
    options
  }
}

export function showMyProfile() {
  return function (dispatch, getState) {
    accountService.getAccount().then(response => {
      dispatch(setActiveScreen(MY_PROFILE, { profile: response.data }));
    });
  };
}