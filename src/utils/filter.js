export default function AddFilter(filters, strictMode) {
  const self = {
    filter: {
      ...filters,
    },
    strictMode,
  };

  const addFilterBehaviour = () => ({
    AddFilter(type, name) {
      this.filter[type].push(name);
    },
    RemoveFilter(type, name) {
      const index = this.filter[type].indexOf(name);
      if (index > -1) {
        this.filter[type].splice(index, 1);
      }
    },
    ClearFilter(type) {
      this.filter[type] = [];
    },
    filter_array() {
      this.processedState = this.state.filter((state) => {
        let bool = true;
        for (const [key, values] of Object.entries(this.filter)) {
          if (state[key] === undefined) {
            bool = false;
            break;
          }
          if (values === undefined || values.length == 0) {
            continue;
          }

          if (values.every((value) => value.toString().indexOf("-") > -1)) {
            for (const value of values) {
              let [min, max] = value.split("-");
              if (parseInt(min) > parseInt(max)) {
                [min, max] = [max, min];
              }
              bool = parseInt(min) <= state[key] && state[key] <= parseInt(max);
            }
          } else {
            bool = values.some((value) =>
              state[key].toString().includes(value)
            );
          }

          if (this.strictMode) {
            if (!bool) {
              break;
            }
          }
        }
        return bool;
      });
      return this.processedState;
    },
  });

  return {
    ...self,
    ...addFilterBehaviour(),
  };
}
