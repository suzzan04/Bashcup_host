export interface Feedback {
  name: string;
  email: string;
  message: string;
  rating: number;
  show: boolean;
}

export interface FeedbackDetail extends Feedback {
  id: string;
}
