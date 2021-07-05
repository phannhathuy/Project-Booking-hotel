import * as ActionType from "./const_action";

// ! action

export const getbooking = () => {
  return {
    type: ActionType.GET_BOOKING
  };
};

export const getroom = () => {
  return {
    type: ActionType.GET_ROOM
  };
};

export const getservice = () => {
  return {
    type: ActionType.GET_SERVICE
  };
};

export const getpromo = () => {
  return {
    type: ActionType.GET_PROMO
  };
};

export const getuser = () => {
  return {
    type: ActionType.GET_USER
  };
};

export const setloader = (data) => {
  return{
      type: ActionType.SET_LOADER, 
      payload: data
  }
}

// ! action success

export const getbookingsc = (data) => {
  return {
    type: ActionType.GET_BOOKING_SC,
    payload: data
  };
};

export const getroomsc = (data) => {
  return {
    type: ActionType.GET_ROOM_SC,
    payload: data
  };
};

export const getservicesc = (data) => {
  return {
    type: ActionType.GET_SERVICE_SC,
    payload: data
  };
};

export const getpromosc = (data) => {
  return {
    type: ActionType.GET_PROMO_SC,
    payload: data
  };
};

export const getusersc = (data) => {
  return {
    type: ActionType.GET_USER_SC,
    payload: data
  };
};