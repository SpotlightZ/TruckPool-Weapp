export class Promisify {
  static from(fun) {
    return new Promise((res, rej) => {
      fun({
        success: res,
        fail: rej
      });
    });
  }
}
