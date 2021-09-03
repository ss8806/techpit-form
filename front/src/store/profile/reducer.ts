import { reducerWithInitialState } from "typescript-fsa-reducers";
import { Profile } from "../../domain/entity/profile";
import profileActions from "./actions";

// redux では reducer で state の初期値を定義する
const init: Profile = {
  name: "",
  description: "",
  birthday: "",
  gender: "",

  address: {
    postalcode: "",
    prefecture: "",
    city: "",
    restAddress: "",
  },
};

const profileReducer = reducerWithInitialState(init)
  // .case()をチェーンさせることでそれぞれのアクションでの処理を記述
  // case()は第一引数にアクション(profileAction)を, 第二引数にコールバック関数(setProfile)を渡しています
  // 第二引数の関数(setProfile)の引数は、第一引数が直前のProfileのstate そのもの、第二引数がアクションから渡ってきたpayload
  .case(profileActions.setProfile, (state, payload) => ({
    // returnは省略されている
    ...state,
    ...payload,
  }))
  .case(profileActions.setAddress, (state, payload) => ({
    // returnは省略されている
    ...state,
    address: { ...state.address, ...payload },
  }))
  .case(profileActions.searchAddress.done, (state, payload) => ({
    ...state,
    address: { ...state.address, ...payload.result },
  }));
export default profileReducer;
