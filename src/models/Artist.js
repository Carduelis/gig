import { types, getEnv } from "mobx-state-tree";

export const Artist = types
  .model("Artist", {
    name: types.string,
    id: types.identifier,
    active: false
  })
  .views(model => ({
    get socket() {
      return getEnv(model).socket;
    }
  }))
  .actions(model => ({
    afterCreate() {
      console.log('model "Artist" has been added', model);
    },
    update(payload) {
      model.socket.emit("hello", payload);
    }
  }));
