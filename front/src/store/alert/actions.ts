import actionCreatorFactory from "typescript-fsa";
import { AlertState } from "../../domain/entity/alert";

const actionCreator = actionCreatorFactory();

// AlertStateのopen以外のフィールドという意味です
type AlertPayload = Omit<AlertState, "open">;
// 上と同じ耳
// export type AlertPayload = {
//   severity: AlertSeverity;
//   message: string;
// };

const alertActions = {
  openAlert: actionCreator<AlertPayload>("OPEN_ALERT"),
  closeAlert: actionCreator<{}>("CLOSE_ALERT"),
};

export default alertActions;
