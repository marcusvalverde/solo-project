import * as types from '../constants/actionTypes'

export const addCompany = () => ({
  type: types.ADD_COMPANY,
 
});
export const addFields = ([name,title,notes, media,]) => ({
    type: types.ADD_FIELDS,
    payload: [name,title,notes, media],
});
export const addStatus = (id) => ({
  type: types.ADD_STATUS,
  payload:id,
  
});
export const delete_Card = (id) => ({
    type: types.DELETE_CARD,
    payload: id,
  });