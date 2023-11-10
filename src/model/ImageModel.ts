
export interface IImageImages {
  id: string;
  title: string;
  description: string | null;
  datetime: number;
  type: string;
  animated: boolean;
  width: number;
  height: number;
  size: number;
  views: number;
  favorite: boolean;
  has_sound: boolean;
  tags: string[];
  link: string;
  gifv: string;
  comment_count: number;
  favorite_count: number;
  ups: number;
  downs: number;
  points: number;
  score: number;
}

export interface IImage {
  id: string;
  title: string;
  description: string | null;
  datetime: number;
  account_url: string;
  privacy: "hidden" | "public";
  views: number;
  link: string;
  gifv: string;
  type: string;
  ups: number;
  downs: number;
  points: number;
  score: number;
  is_album: boolean;
  favorite: boolean;
  comment_count: number;
  favorite_count: number;
  topic: string | null;
  images_count: number;
  tags: string[];
  in_most_viral: boolean;
  images: IImageImages[]
}

export interface IGallery {
  data: IImage[];
  success: boolean;
  status: number
}