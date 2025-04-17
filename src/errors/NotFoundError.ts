class NotFoundError extends Error {
  constructor(id: number) {
    super(`해당 ${id}를 찾을 수 없습니다.`);
    this.name = "NotFoundError";
  }
}

export default NotFoundError;
