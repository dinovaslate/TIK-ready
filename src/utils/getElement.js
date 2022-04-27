export default function addGetElement() {
  return {
    getElement(name) {
      return this.state.filter((state) => state.name === name)[0];
    },
  };
}
