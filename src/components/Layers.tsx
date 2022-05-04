import { LayerItem } from '@lib/types';
import LayerWrapper from './LayerWrapper';

type Props = {
  layers: LayerItem[];
};

export const Layers: React.FC<Props> = ({ layers }) => {
  return (
    <>
      {layers.map((layer) => (
        <LayerWrapper key={layer.id} layer={layer} />
      ))}
    </>
  );
};

export default Layers;
