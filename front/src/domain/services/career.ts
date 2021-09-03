import { Career } from "../entity/career";

export const exitEmptyCareers = (careers: Career[]) =>
  // some() ひとつでもtureがあればtrueを返します。
  // 今回はひとつでもisEmptyCareer()な職歴があれば追加できないようにする
  careers.some((c) => isEmptyCareer(c));

const isEmptyCareer = (career: Career) => {
  // every() 配列の要素を一個ずつ条件をみたしているか評価していって全てがtrueならtrueを返し、それ以外の場合にfalseを返す関数です。
  // 今回は、全てが空文字列ならtrueを返したいので以下のような実装になります。
  return Object.values(career).every((v) => !v);
};
