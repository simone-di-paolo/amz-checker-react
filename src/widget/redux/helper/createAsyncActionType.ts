
export const createAsyncActionType = (actionIdentifier: string, actionName: string) => {
  return {
    _REQUEST: `@@${actionIdentifier}/v01/${actionName}._REQUEST`,
    _SUCCESS: `@@${actionIdentifier}/v01/${actionName}._SUCCESS`,
    _ERROR: `@@${actionIdentifier}/v01/${actionName}._ERROR`,
  };
};
