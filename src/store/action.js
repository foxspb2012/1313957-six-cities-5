export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHOOSE_OFFER: `CHOOSE_OFFER`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),

  chooseOffer: (offerId) => ({
    type: ActionType.CHOOSE_OFFER,
    payload: offerId
  }),
};
