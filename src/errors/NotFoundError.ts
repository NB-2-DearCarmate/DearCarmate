class NotFoundError extends Error {
  constructor(entityName: string) {
    super(`존재하지 않는 ${entityName}입니다.`);
    this.name = "NotFoundError";
  }
}

export default NotFoundError;
