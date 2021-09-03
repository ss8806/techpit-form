import { Dispatch } from "redux";
import profileActions from "./actions";
import { Address } from "../../domain/entity/address";
import {
  isCompletePostalcode,
  sanitizePostalcode,
} from "../../domain/services/address";

export const searchAddressFromPostalcode =  // dispatch を引数にとる関数を返す高階関数
  (code: string) => async (dispach: Dispatch) => {
    // 関数を早期リターンしています。if の中身が 1 行のときは{}を省略することができます。
    if (!isCompletePostalcode(code)) return;
    // fetch()はPromise<Response>という型を返してくれます。 awaitで Promise を解決しているので、const resはResponse型
    const res = await fetch(
      `https://apis.postcode-jp.com/api/v3/postcodes?apikey=[Gm37wo8PqslUyHLFgT5JGu8RNxB9sRa72gHeZ6C]&postcode=${sanitizePostalcode(
        code
      )}`
    );
    // Response型はjson()というメソッドを持っていて、
    // 実行することで response body の json を JavaScript のオブジェクトにすることができます。（指定しない限り型はanyです。）
    const result = await res.json();

    if (!result.data[0]) return; //もし検索結果が何もないときは関数を早期リターン

    const address: Partial<Address> = {
      prefecture: result.data[0].pref,
      city: result.data[0].city + result.data[0].town,
    };
    // resultという key で変更したいものを指定する必要があります。このようなpayloadの型になっているのは、ライブラリの制約なのでそういうものなんだと思っておいてください。
    dispach(profileActions.searchAddress.done({ result: address, params: {} }));
  };
