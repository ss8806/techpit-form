import { reducerWithInitialState } from "typescript-fsa-reducers";
import collegesActions from "./actions";
import { Colleges } from "../../domain/entity/college";

const init: Colleges = { result: [], search: "" };

const collegesReducer = reducerWithInitialState(init)
  .case(collegesActions.setSearchWord, (state, payload) => ({
    ...state,
    // payloadはスプレッド演算子を用いずにそのままsearchに渡しました。
    // このようにした理由はsearchしか変更することがないので
    // const payload = { search: "some string" }のようにに渡すよりも
    // const payload = "some string"とした方が完結でわかりやすいからです。
    search: payload,
  }))
  // .done は ajaxが成功した場合 この場合はeffects.tsのserchCollegeが成功した場合
  .case(collegesActions.searchCollege.done, (state, payload) => ({
    ...state,
    result: payload.result,
  }));

export default collegesReducer;
