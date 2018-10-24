import { types, getEnv } from "mobx-state-tree";

export const Artist = types
  .model("Artist", {
    name: types.string,
    id: types.identifier,
    active: types.boolean
  })
  .views(model => ({
    get socket() {
      return getEnv(model).socket;
    }
  }))
  .actions(model => ({
    afterCreate() {},
    update(payload) {
      model.socket.emit("hello", payload);
    }
  }));
