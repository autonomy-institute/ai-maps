export interface Map {
  id: number;
  title: string;
  slug: string;
  style: string;
  center: GeoJSON.Point;
  zoom: number;
  layers: MapLayer[];
}

export interface MapLayer {
  layer: Layer;
}

export interface Layer {
  id: string;
  name: string;
  cluster: boolean;
  file: string;
  style: any;
}

export type Collections = {
  maps: Map;
};
