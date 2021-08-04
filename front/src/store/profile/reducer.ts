import { reducerWithInitialState } from "typescript-fsa-reducers";
import { Profile } from "../../domain/entity/profile";
import profileActions from "./actions";

// redux では reducer で state の初期値を定義する
const init: Profile = {
  name: "",
  description: "",
  birthday: "",
  gender: ""
};

// .case()をチェーンさせることでそれぞれのアクションでの処理を記述
const profileReducer = reducerWithInitialState(init).case(
// case()は第一引数にアクション(profileAction)を, 第二引数にコールバック関数(setProfile)を渡しています
  profileActions.setProfile,
// 第二引数の関数(setProfile)の引数は、第一引数が直前のprofileという state そのもの、第二引数がアクションから渡ってきたpayload
  (state, payload) => ({
    ...state,
    ...payload
  })
);

export default profileReducer;
