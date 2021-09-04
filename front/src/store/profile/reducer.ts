import { reducerWithInitialState } from "typescript-fsa-reducers";
import { Profile } from "../../domain/entity/profile";
import profileActions from "./actions";
import { Career } from "../../domain/entity/career";
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
  careers: [],
  college: {
    name: "",
    faculty: "",
    department: "",
  },
};

const initCareer: Career = {
  company: "",
  position: "",
  startAt: "",
  endAt: "",
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
    ...state,
    address: { ...state.address, ...payload },
  }))
  .case(profileActions.searchAddress.done, (state, payload) => ({
    ...state,
    address: { ...state.address, ...payload.result },
  }))
  .case(profileActions.setCareer, (state, payload) => ({
    ...state, // これまでの状態を展開
    // careerだけ新しいものに更新しています。 第二引数 i はindex
    careers: state.careers.map((c, i) =>
      // indexが一致するときだけpayload由来の新しいCareerを返して(職歴が変更のとき)
      //,それ以外は何もせずそのままCareerを返しています。(新しく追加のとき)
      i === payload.index ? { ...c, ...payload.career } : c
    ),
  }))
  .case(profileActions.deleteCareer, (state, payload) => ({
    ...state,
    // payload で渡ってきたindexと一致する場合のみfalseを 返すことで、
    // indexと一致しないものだけを返すことができます。つまり指定したindexのみ削除できます。
    // filterの第一引数を _と してるのは、第一引数（ここでは一つ一つの職歴であるCareer型）は使っていないということを明示するためでよくこのような書き方がされます。
    careers: state.careers.filter((_, i) => i !== payload),
  }))
  .case(profileActions.addCareer, (state) => ({
    ...state,
    // initCareerを追加しています。今回は ... を配列の展開で用いています。
    careers: [...state.careers, initCareer],
  }))
  .case(profileActions.setCollege, (state, payload) => ({
    ...state,
    college: { ...state.college, ...payload },
  }));
export default profileReducer;
