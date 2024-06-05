import axios from "axios";
import app from "./app";
import { IState } from "./interfaces";
import { textEncrypt } from "./utils";
import { setStatesData } from "./data";

const fetchStatesData = async () => {
  try {
    const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
    const response = await axios.get<IState[]>(url);
    const encryptedData = response.data.map((state: IState) => ({
      ...state,
      nome: textEncrypt(state.nome),
    }));
    setStatesData(encryptedData);
    console.log("State data has been successfully updated.");
  } catch (error) {
    console.error("Error when searching for IBGE data", error);
  }
};

(() => {
  try {
    const port = 3000;
    console.clear();
    fetchStatesData();
    app.listen(port, () => {
      console.log(`Server running on route: http://localhost:${port}/`);
    });
  } catch (err) {
    console.error("Erro durante a inicialização", err);
  }
})();
