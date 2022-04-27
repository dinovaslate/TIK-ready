export default function AddSort() {
  const self = {
    sort: "",
  };

  const addSortBehaviour = () => ({
    RemoveSort() {
      this.sort = "";
    },
    AddSort(type) {
      this.sort = type;
    },
    sort_array(key, type = "ASC", logic) {
      if (this.sort !== "") this.RemoveSort();
      this.AddSort(key);
      if (logic && typeof logic === "function") {
        this.processedState = this.processedState.sort(logic);
        return this.processedState;
      }
      this.processedState = this.processedState.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        return x < y ? -1 : x > y ? 1 : 0;
      });
      if (type === "DESC") {
        this.processedState = this.processedState.reverse();
      }
      return this.processedState;
    },
  });

  return {
    ...self,
    ...addSortBehaviour(),
  };
}
