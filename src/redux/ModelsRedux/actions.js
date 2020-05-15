import { GET_ALL_MODELS, GET_SINGLE_MODEL, FILTER_MODELS } from "./types";
import Axios from "axios";

import { URL } from "../../config";

const setAllModels = (models) => ({
  type: GET_ALL_MODELS,
  models,
});

const setSingleModel = (model) => ({
  type: GET_SINGLE_MODEL,
  model,
});

const setFilteredModels = (models) => ({
  type: FILTER_MODELS,
  models,
});

export const fetchAllModels = () => (dispatch) => {
  return Axios.get(`${URL}/api/models`)
    .then((response) => response.data)
    .then((models) => {
      dispatch(setAllModels(models));
      return models;
    })
    .catch((err) => err.message);
};

export const fetchSingleModel = (id) => (dispatch) => {
  return Axios.get(`${URL}/api/models/${id}`)
    .then((response) => response.data)
    .then((model) => {
      dispatch(setSingleModel(model));
      return model;
    })
    .catch((err) => err.message);
};

// FUNCIONES PARA FILTRAR MODELOS

export const changeModelsStore = (models) => (dispatch) => {
  dispatch(setFilteredModels(models));
};
