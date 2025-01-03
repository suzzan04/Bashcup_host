export interface ApiResponse {
  statusCode: number;
  data: string | string[] | object;
  message: string;
  success: boolean;
}
