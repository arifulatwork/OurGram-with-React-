import { SET_ACTIVE_SCREEN } from "./types"

export const setActiveScreen = (activeScreen, options) => {
  return {
    type: SET_ACTIVE_SCREEN,
    activeScreen,
    options
  }
}