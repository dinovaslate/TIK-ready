export default function addGetTop() {
  return {
    getTop(number = 3) {
      const temp = this.state.sort((a, b) => b.sales - a.sales);
      return temp.slice(0, number);
    },
  };
}
