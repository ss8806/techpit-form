import actionCreatorFactory from "typescript-fsa";
import { Profile } from "../../domain/entity/profile";

const actionCreator = actionCreatorFactory();

const profileActions = {
  // とつひとつのプロパティに?を付けていくのでもいいが、全部のプロパティをオプションにしたいときはPartialが便利。
  setProfile: actionCreator<Partial<Profile>>("SET_PROFILE")
};

export default profileActions;