import { getStatesData } from "../data";
import { IStateResponse } from "../interfaces";

const read = (): IStateResponse[] => {
  const statesReturn = getStatesData();
  
  return statesReturn;
};

const readById = (id: number): IStateResponse => {
  const stateReturn = getStatesData();

  const stateTarget = stateReturn.filter((state) => state.id === id);

  return stateTarget[0];
};

export default { read, readById };
