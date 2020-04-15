import * as types from '../constants/actionTypes'

export const addCompany = () => ({
  type: types.ADD_COMPANY,
  // payload: marketId,
});

export const addStatus = (id) => ({
  type: types.ADD_STATUS,
  payload: id,
});

export const deleteCard = (id) => ({
  type: types.DELETE_CARD,
  payload: id,
});