import { Album } from "./album";

export interface Photo {
  id: number;
  title: number;
  url: string;
  thumbnailUrl: string;
  albumId: number;
  album: Album;
}
