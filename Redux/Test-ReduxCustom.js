const withrow = (amount) => {
  return {
    type: "WITHDROW_MONEY",
    payload: amount,
  };
};
const deposite = (amount) => {
  return {
    type: "DEPOSITE_MONEY",
    payload: amount,
  };
};
const bankReducer = (state = 1000, action) => {
  switch (action.type) {
    case "WITHDROW_MONEY":
      return state - action.payload;
    case "DEPOSITE_MONEY":
      return state + action.payload;
    default:
      return state;
  }
};
const store = $redux.createStore(bankReducer);
console.log(store);
console.log($redux);
console.log(store.dispatch(withrow(200)));
console.log(store.getState());
store.subscribe(() => {
  console.log(`Current state : ${store.getState()}`);
});
let budget = document.getElementById("value");
let amount = document.getElementById("amount");
document.getElementById("withrow").addEventListener("click", () => {
  store.dispatch(withrow(+amount.value));
});
document.getElementById("deposite").addEventListener("click", () => {
  store.dispatch(deposite(+amount.value));
});
budget.innerHTML = store.getState();
// subscribe will be runed  after any action
store.subscribe(() => {
  console.log(store.getState());
  budget.innerHTML = store.getState();
});
