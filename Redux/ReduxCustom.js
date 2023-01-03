(function () {
  const customRedux = (function () {
    function createStore(reducer) {
      let state;
      let listeners = [];
      const getState = () => state;
      const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((l) => {
          l();
        });
        // console.log(state);
      };
      dispatch({});
      const subscribe = (listener) => {
        listeners.push(listener);
        console.log(listeners);
      };
      return {
        getState,
        dispatch,
        subscribe,
      };
    }
    return {
      createStore,
    };
  })();
  if (!window.customRedux) {
    window.$redux = customRedux;
  }
})();
