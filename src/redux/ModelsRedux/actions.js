import { GET_ALL_MODELS, GET_SINGLE_MODEL, FILTER_MODELS } from "./types";
import Axios from "axios";

const setAllModels = (models) => ({
  type: GET_ALL_MODELS,
  models,
});

const setSingleModel = (model) => ({
  type: GET_SINGLE_MODEL,
  model,
});

const setFilteredModels = (orderedModels) => ({
  type: FILTER_MODELS,
  orderedModels,
});

// request para todos los modelos
export const fetchAllModels = () => (dispatch) => {
  return Axios.get(`http://challenge.agenciaego.tech/models`)
    .then((response) => response.data)
    .then((models) => dispatch(setAllModels(models)))
    .catch((err) => err.response);
};

// requres para un modelo por id
export const fetchSingleModel = (id) => (dispatch) => {
  return Axios.get(`http://challenge.agenciaego.tech/models/${id}`)
    .then((response) => response.data)
    .then((model) => dispatch(setSingleModel(model)))
    .catch((err) => err.message);
};

// FUNCIONES PARA FILTRAR MODELOS

export const changeModelsStore = (orderedModels) => (dispatch) => {
  dispatch(setFilteredModels(orderedModels));
};
