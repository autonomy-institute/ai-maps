import { ViewState } from 'react-map-gl';
import { Layer, Map } from './models';

type MapItemBase = Pick<Map, 'id' | 'title' | 'slug' | 'style' | 'defaultLayers'>;
type LayerItemBase = Layer;

export interface LayerItem extends LayerItemBase {}

export interface MapItem extends MapItemBase {
  initialViewState: Partial<ViewState>;
  layers: LayerItem[];
}
