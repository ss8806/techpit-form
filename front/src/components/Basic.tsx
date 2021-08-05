import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  TextField, 
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";
import useStyles from "./styles";
import { RootState } from "../domain/entity/rootState";
import { Profile } from "../domain/entity/profile";
import { PROFILE } from "../domain/services/profile";
import { Gender } from "../domain/entity/gender";
import profileActions from "../store/profile/actions";


const Basic = () => {
  const dispatch = useDispatch();  // dispatch をするための関数を作成してくれる hooks
  // useSelector()でStoreのstateを参照して処理する      reducerのstate.profile
  const profile = useSelector((state: RootState) => state.profile); //dispatchするための関数と状態を保持している
  const classes = useStyles();
 // 更新したい項目だけを受け取って reducer に dispatch しています。
  const handleChange = (member: Partial<Profile>) => {
    dispatch(profileActions.setProfile(member));
  };

  return (
    <>
      <TextField 
        fullWidth 
        label={PROFILE.NAME}
        className={classes.formField}
        value={profile.name}
        onChange={e => handleChange({ name: e.target.value })}
      />
      <TextField
        fullWidth
        multiline
        className={classes.formField}
        rows={5}
        label={PROFILE.DESCRIPTION}
        value={profile.description}
        onChange={e => handleChange({ description: e.target.value })}
      />
      <FormControl className={classes.formField}>
        <FormLabel>{PROFILE.GENDER}</FormLabel>
        <RadioGroup
          value={profile.gender}
          onChange={e => handleChange({ gender: e.target.value as Gender })}
        >
          <FormControlLabel
            value="male"
            label="男性"
            control={<Radio color="primary" />}
          />
          <FormControlLabel
            value="female"
            label="女性"
            control={<Radio color="primary" />}
          />
        </RadioGroup>
      </FormControl>
      <TextField
        fullWidth
        className={classes.formField}
        label={PROFILE.BIRTHDAY}
        type="date"
        value={profile.birthday}
        onChange={e => handleChange({ birthday: e.target.value })}
        InputLabelProps={{
          shrink: true
        }}
      />
    </>
  );
};

export default Basic;