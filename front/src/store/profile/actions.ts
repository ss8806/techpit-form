import actionCreatorFactory from "typescript-fsa";
import { Profile } from "../../domain/entity/profile";
import { Address } from "../../domain/entity/address";
import { Career } from "../../domain/entity/career";

// typescript-fsaを使うことで型情報を失わず簡単に定義することができる。
// actionCreatorにはジェネリクス（型引数）が使われています。setProfileという action のpayload（reducer に渡す値）の型をこれで定義することができます。
const actionCreator = actionCreatorFactory();

const profileActions = {
  // ひとつひとつのプロパティに?を付けていくのでもいいが、全部のプロパティをオプションにしたいときはPartialが便利。
  // partialで |undifined と同じ
  setProfile: actionCreator<Partial<Profile>>("SET_PROFILE"),
  setAddress: actionCreator<Partial<Address>>("SET_ADDRESS"),
  searchAddress: actionCreator.async<{}, Partial<Address>, {}>(
    "SEARCH_ADDRESS"
  ),
  setCareer:
    // 複数の職歴を入力できるcareerでは、何番目(index)の職歴なのかという情報も必要
    actionCreator<{ career: Partial<Career>; index: number }>("SET_CAREER"),
  // 何番目の職歴を削除するかを指定したい
  deleteCareer: actionCreator<number>("DELETE_CAREER"),
  // payloadはありません。これは、追加の際には初期値の職歴を新たに追加して職歴のフォームを追加で表示させるため
  addCareer: actionCreator<{}>("ADD_CAREER"),
};

export default profileActions;
