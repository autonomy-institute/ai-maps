export interface Map {
  id: number;
  title: string;
  slug: string;
  style: string;
  center: GeoJSON.Point;
  zoom: number;
  defaultLayers: DefaultLayer[];
  layers: MapLayer[];
}

export type DefaultLayer = 'buildings' | 'terrain';

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
