export interface Banner {
  name: string;
  image: string;
  forMainPage: boolean;
}

export interface BannerDetail extends Banner {
  _id: string;
}
