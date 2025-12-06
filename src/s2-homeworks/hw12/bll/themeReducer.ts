const initState = {
  themeId: 1,
};

export type InitStateType = {
  themeId: number;
};

type ActionType = {
  type: 'SET_THEME_ID';
  id: number;
};

export const themeReducer = (state = initState, action: ActionType): InitStateType => {
  // fix any
  switch (action.type) {
    case 'SET_THEME_ID':
      return { ...state, themeId: action.id };
    default:
      return state;
  }
};

export const changeThemeId = (id: number): ActionType => ({ type: 'SET_THEME_ID', id }); // fix any
export type RootState = {
  theme: InitStateType;
};
