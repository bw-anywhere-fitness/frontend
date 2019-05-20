export const GET_PASSES_START = "GET_PASSES_START";
export const GET_PASSES_SUCCESS = "GET_PASSES_SUCCESS";
export const GET_PASSES_FAILURE = "GET_PASSES_FAILURE";

export const getPasses = creds => dispatch => {
    // console.log("creds", creds)
    dispatch({ type: GET_PASSES_START })
    // axiosWithAuth().get('api placeholder')
    //     .then(res => {
    //         // console.log("response", res);
    //         dispatch({ type: GET_PASSES_SUCCESS, payload: res.data})
    //     })
    //     .catch(err => {
    //         // console.log(err);
    //         dispatch({ type: GET_PASSES_FAILURE })
    //     })
}

// export const PURCHASE_PASSES_START = "PURCHASE_PASSES_START";
// export const PURCHASE_PASSES_SUCCESS = "PURCHASE_PASSES_SUCCESS";
// export const PURCHASE_PASSES_FAILURE = "PURCHASE_PASSES_FAILURE";

// export const purchasePasses = clientID => dispatch => {
//     dispatch({ type: PURCHASE_PASSES_START })
//     axiosWithAuth().put(`api placeholder`, clientID)
//         .then(res => {
//             dispatch({ type: PURCHASE_PASSES_SUCCESS, payload: res.data})
//         })
//         .catch(err => {
//             dispatch({ type: PURCHASE_PASSES_FAILURE })
//         })
// }

export const USE_ONE_PASS_START = "USE_ONE_PASS_START";
export const USE_ONE_PASS_SUCCESS = "USE_ONE_PASS_SUCCESS";
export const USE_ONE_PASS_FAILURE = "USE_ONE_PASS_FAILURE";

// export const useOnePass = clientID => dispatch => {
//     dispatch({ type: USE_ONE_PASS_START })
//     axiosWithAuth().put(`api placeholder`, clientID)
//         .then(res => {
//             dispatch({ type: USE_ONE_PASS_SUCCESS, payload: res.data})
//         })
//         .catch(err => {
//             dispatch({ type: USE_ONE_PASS_FAILURE })
//         })
// }