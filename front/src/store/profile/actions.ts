import actionCreatorFactory from "typescript-fsa";
import { Profile } from "../../domain/entity/profile";
import { Address } from "../../domain/entity/address";

const actionCreator = actionCreatorFactory();

const profileActions = {
  // actionCreatorにはジェネリクス（型引数）が使われています。setProfileという action のpayload（reducer に渡す値）の型をこれで定義することができます。
  // とつひとつのプロパティに?を付けていくのでもいいが、全部のプロパティをオプションにしたいときはPartialが便利。
  setProfile: actionCreator<Partial<Profile>>("SET_PROFILE"),
  setAddress: actionCreator<Partial<Address>>("SET_ADDRESS")
};

export default profileActions;