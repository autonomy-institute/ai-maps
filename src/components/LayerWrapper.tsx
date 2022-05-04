import { Source, Layer, CircleLayer } from 'react-map-gl';
import { LayerItem } from '@lib/types';
import { getUrl } from '@lib/directus';

type Props = {
  layer: LayerItem;
};

const defaultStyle: CircleLayer = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 5,
    'circle-color': '#007cbf',
  },
};

export const LayerWrapper: React.FC<Props> = ({ layer }) => {
  return (
    <Source id={layer.id} type="geojson" data={getUrl(layer.file)}>
      <Layer id={layer.id} {...layer.style}></Layer>
    </Source>
  );
};

export default LayerWrapper;
