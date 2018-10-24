import { types, getEnv } from "mobx-state-tree";
import { Artist } from "./Artist";

export const ArtistsStore = types
  .model("ArtistsStore", {
    artists: types.map(Artist)
  })
  .views(model => ({
    get socket() {
      return getEnv(model).socket;
    },
    get id() {
      return Math.random()
        .toString(20)
        .slice(2);
    },
    get total() {
      return model.artists.size;
    }
  }))
  .actions(model => ({
    afterCreate() {},
    add(name) {
      model.artists.set(model.id, { name });
    },
    update(payload) {
      model.socket.emit("hello", payload);
    }
  }));
