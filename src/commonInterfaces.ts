export interface IPost {
  title: string;
  img_source: string;
  createdAt: number;
  status: TStatus;
  description: string;
}

export type TStatus = "draft" | "published";
