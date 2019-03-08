const defaultState = {
  layoutStatus: 'HOME',
};

const layoutReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LEFT_SIDE_OPEN':
      return {
        layoutStatus: action.type,
      };
    case 'RIGHT_SIDE_OPEN':
      return {
        layoutStatus: action.type,
      };
    case 'RIGHT_SIDE_PAGE_MOUNTED':
      return {
        layoutStatus: action.type,
      };
    default:
      return state;
  }
};

export default layoutReducer;
