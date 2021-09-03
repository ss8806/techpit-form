export const isPostalcode = (target: string) =>
  /^(\d{0,7}|\d{0,3}|\d{3}-\d{0,4})$/.test(target);

// 最後まで入力されて 7 桁になっているかどうかをチェックしています
export const isCompletePostalcode = (target: string) =>
  /^(\d{7}|\d{3}-\d{4})$/.test(target);

// sanitizePostalcode()は、-を取り除いて数字だけにしています
export const sanitizePostalcode = (target: string) => target.replace(/-/, "");
