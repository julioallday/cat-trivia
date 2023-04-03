export interface fact {
  status: {
    verified: boolean;
    sentCount: number;
  };
  _id: string;
  createdAt: string;
  deleted: boolean;
  source: string;
  text: string;
  type: string;
  updatedAt: string;
  used: boolean;
  user: string;
  __v: number;
}
