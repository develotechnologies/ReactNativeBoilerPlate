import {SETLOADERVISIBLE} from '../Types';
export const setLoaderVisible = (payload) => {
  return {
    type: SETLOADERVISIBLE,
    payload: payload,
  };
};
