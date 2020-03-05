import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError
} from "./action";

function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsPending());
    fetch("https://swapi.co/api/people/")
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }

        dispatch(fetchProductsSuccess(res.results));
        return res.results;
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}

export default fetchProducts;
