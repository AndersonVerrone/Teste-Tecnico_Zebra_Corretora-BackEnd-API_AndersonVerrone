interface IState {
  id: number;
  nome: string;
  sigla: string;
  regiao: {
    id: number;
    nome: string;
    sigla: string;
  };
}

interface IStateResponse {
  id: number;
  name: string;
}

type IStateRequest = Omit<IState, "regiao" | "sigla">;

export { IState, IStateResponse, IStateRequest };
