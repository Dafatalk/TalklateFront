/**
 * result model
 */
export interface ResultModel {
  /**
   * actions
   */
  action?: any;

  /**
   * error
   */
  error?: boolean;

  /**
   * message internal
   */
  messageInternal?: string;

  /**
   * message internal
   */
  messageUser?: string;

  token?: string;

  list?: Array<any>;

  username?: string;
}
