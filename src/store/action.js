export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  CHANGE_ACTIVE_CARD: `CHANGE_ACTIVE_CARD`,
  RESET_ACTIVE_CARD: `RESET_ACTIVE_CARD`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType
  }),
  changeActiveCard: (id) => ({
    type: ActionType.CHANGE_ACTIVE_CARD,
    payload: id
  }),
  resetActiveCard: () => ({
    type: ActionType.RESET_ACTIVE_CARD
  })
};
