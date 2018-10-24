import {
  types,
  getEnv,
  onPatch,
  onAction,
  addMiddleware
} from "mobx-state-tree";

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
      onPatch(model, patch => {
        console.log("%c[onPatch]   ", "color: red", "Got change: ", patch);
      });
      onAction(model, call => {
        console.log(
          "%c[onAction]  ",
          "color: green",
          "action was called: ",
          call
        );
      });
      addMiddleware(model, (call, next, abort) => {
        console.log(
          "%c[middleware]",
          "color: grey",
          `action [${call.name}] was invoked`,
          call
        );
        // runs the next middleware
        // or the implementation of the targeted action
        // if there is no middleware left to run

        // the value returned from the next can be manipulated
        next(call, value => value + 1);
      });
    }
  }));
