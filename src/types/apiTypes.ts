export type THeader = {
  'Content-Type': string
}

export type TDefaultTimeout = number;

export type TAPIErrorResponse = {
  'status': number | string,
  'message': string
}