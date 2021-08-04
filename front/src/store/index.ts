import { createStore, combineReducers } from "redux";
import profileReducer from "./profile/reducer";
import { RootState } from "../domain/entity/rootState";

const store = createStore(
  // combineReducersという redux の API を用いて reudcer をひとつにまとめます。結果、 先ほど定義したRootStateのような形になります。
  combineReducers<RootState>({
    profile: profileReducer
  }),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && //redux dev tools というものを使うための記述
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
