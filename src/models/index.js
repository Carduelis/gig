import { types, getEnv } from "mobx-state-tree";

import { ArtistsStore } from "./ArtistsStore";

export const Store = types
  .model("Store", {
    data: types.frozen(),
    artistsStore: types.optional(ArtistsStore, {})
  })
  .views(model => ({
    get fetch() {
      return getEnv(model).fetch;
    },
    get socket() {
      return getEnv(model).socket;
    },
    get alert() {
      return getEnv(model).alert;
    }
  }))
  .actions(model => ({
    afterCreate() {
      model.socket.on("event", data => model.alert(data));
      model.alert("Store has been created", model);
    }
  }));
