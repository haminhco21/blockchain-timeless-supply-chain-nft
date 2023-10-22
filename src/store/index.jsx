import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  modal: "scale-0",
  showModal: "scale-100",
  updateModal: "scale-100",
  loading: { show: false, msg: "Mining processing..." },
});

const setLoadingMsg = (msg) => {
  const loading = getGlobalState("loading");
  setGlobalState("loading", { ...loading, msg: msg });
};

export { useGlobalState, setGlobalState, getGlobalState, setLoadingMsg };
