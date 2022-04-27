export default function stateObjectCreator(init) {
  return {
    state: init,
    processedState: init,
  };
}
