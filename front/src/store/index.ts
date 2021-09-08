import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import profileReducer from "./profile/reducer";
import { RootState } from "../domain/entity/rootState";
import collegesReducer from "./colleges/reducer";
import validationReducer from "./validation/reducer";
import alertReducer from "./alert/reducer";

const store = createStore(
  // combineReducersという redux の API を用いて reudcer をひとつにまとめます。結果、 先ほど定義したRootStateのような形になります。
  combineReducers<RootState>({
    profile: profileReducer,
    colleges: collegesReducer,
    validation: validationReducer,
    alert: alertReducer,
  }),
  // composeは Redux Dev Tool と middleware をまとめて store に登録する
  compose(
    // applyMiddlewareは redux-thunk という外部ライブラリを redux に登録
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && //redux dev tools というものを使うための記述
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
