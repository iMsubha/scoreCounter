const matchContainer = document.querySelector(".all-matches");
const addMatchBtn = document.querySelector(".lws-addMatch");
const matchDiv = document.getElementById("match");

const initialState = [
  {
    id: 1,
    score: 0,
  },
];
const ADD_MATCH = "ADD_MATCH";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
// add new match action
const addMatch = () => {
  return { type: ADD_MATCH };
};
function nextMatchId(matches) {
  const maxId = matches.reduce((maxId, match) => Math.max(match.id, maxId), 0);
  return maxId + 1;
}
// create reducer function
function matchReducer(state = initialState, action) {
  //console.log("inside matchReducer");
  if (action.type === ADD_MATCH) {
    const id = nextMatchId(state);
    console.log([...state, { id, score: 0 }]);
    return [...state, { id, score: 0 }];
  }
  if (action.type === INCREMENT) {
  }
}

addMatchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Match Button clicked!");
  //   const newMatchDiv = matchDiv.cloneNode(true);
  //   matchContainer.appendChild(newMatchDiv);
  store.dispatch({
    type: ADD_MATCH,
  });
});
const increment = (payload) => {
  store.dispatch({
    type: INCREMENT,
    payload,
  });
};
const decrement = (payload) => {
  store.dispatch({
    type: DECREMENT,
    payload,
  });
};
function incrementHandler(event, id, formEl) {
  const input = formEl.querySelector(".incrementForm");
  const value = Number(input.value);

  if (value > 0) {
    store.dispatch(increment({ id, value }));
  }
}
function decrementHandler(event, id, formEl) {}
const render = () => {
  const state = store.getState();
  const matchView = state
    .map((item) => {
      return `<div class="match" id="match">
    <div class="wrapper">
      <button class="lws-delete">
        <img src="./image/delete.svg" alt="" />
      </button>
      <h3 class="lws-matchName">Match ${item.id}</h3>
    </div>
    <div class="inc-dec"> 
      <form class="incrementForm" onsubmit="event.preventDefault();incrementHandler(${item.id},this)">
        <h4>Increment</h4>
        <input
          type="number"
          name="increment"
          id="increment"
          class="lws-increment"
        />
      </form>
      <form class="decrementForm" onsubmit="event.preventDefault();decrementHandler(${item.id},this)">
        <h4>Decrement</h4>
        <input
          type="number"
          name="decrement"
          id="decrement"
          class="lws-decrement"
        />
      </form>
    </div>
    <div class="numbers">
      <h2 class="lws-singleResult" id="total">0</h2>
    </div>
  </div>`;
    })
    .join("");
  matchContainer.innerHTML = matchView;
};

const store = Redux.createStore(matchReducer);
store.subscribe(render);
