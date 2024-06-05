import { IState, IStateResponse } from "../interfaces";

let statesData: IStateResponse[] = [];

const setStatesData = (data: IState[]) => {
  statesData = data.map((state) => ({
    id: state.id,
    name: state.nome,
  }));
};

const getStatesData = (): IStateResponse[] => {
  return statesData;
};

export { setStatesData, getStatesData };
