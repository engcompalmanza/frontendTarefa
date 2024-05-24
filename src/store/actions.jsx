
export function setGlobalObject(object) {
  return {
    type: 'SET_GLOBAL_OBJECT',
    payload: object,
  };
}