const container = document.querySelector(".all-matches");
const matchDiv = document.getElementById("match");
const addMatch = document.getElementById("addMatch");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const resultDiv = document.getElementById("total");
const resetBtn = document.getElementById("reset");
const initialState = {
  sum: 0,
};
function mainReducer(state = initialState, action) {
  if (action.type == "increment") {
    console.log("increment sum", action.payload.value1 + action.payload.value2);
    const incSum = action.payload.value1 + action.payload.value2;

    return {
      ...state,
      sum: incSum >= 0 ? incSum : 0,
    };
  } else if (action.type == "decrement") {
    console.log("decrement sum", action.payload.value1 - action.payload.value2);
    const incSum = action.payload.value1 - action.payload.value2;
    return {
      ...state,
      sum: incSum >= 0 ? incSum : 0,
    };
  } else {
    return state;
  }
}

incrementEl.addEventListener("input", () => {
  const num1 = Number(incrementEl.value);
  const num2 = Number(decrementEl.value);
  // console.log("increment:", num1, "  ", num2);
  store.dispatch({
    type: "increment",
    payload: {
      value1: num1,
      value2: num2,
    },
  });
});
decrementEl.addEventListener("input", () => {
  // console.log(Number(decrementEl.value));
  const num1 = Number(incrementEl.value);
  const num2 = Number(decrementEl.value);
  // console.log("decrement:", num1, "  ", num2);
  store.dispatch({
    type: "decrement",
    payload: {
      value1: num1,
      value2: num2,
    },
  });
});

const store = Redux.createStore(mainReducer);
const render = () => {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      console.log("enter clicked");
      let state = store.getState();
      resultDiv.innerHTML = state.sum;
    }
  });
};
store.subscribe(render);
//enter clicked

// addMatch.addEventListener("click", () => {
//   console.log("clicked");
//   const copiedDiv = matchDiv.cloneNode(true);
//   container.appendChild(copiedDiv);
// });
