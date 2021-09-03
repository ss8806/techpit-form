import actionCreatorFactory from "typescript-fsa";
import { Profile } from "../../domain/entity/profile";
import { Address } from "../../domain/entity/address";

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
};

export default profileActions;
