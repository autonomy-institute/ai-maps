import { GetServerSideProps } from 'next';
import { useCallback, useState } from 'react';
import Map, { AttributionControl, MapLayerMouseEvent } from 'react-map-gl';
import { Box } from '@chakra-ui/react';
import DefaultLayers from '@components/DefaultLayers';
import Layers from '@components/Layers';
import { MapItem } from '@lib/types';
import { getMapItem } from '@lib/queries';

type Props = {
  item: MapItem;
};

type Params = {
  slug: string;
};

export default function MapPage({ item }: Props) {
  const [cursor, setCursor] = useState<string>('auto');

  const onMouseEnter = useCallback(() => setCursor('pointer'), []);
  const onMouseLeave = useCallback(() => setCursor('auto'), []);

  return (
    <Box position="absolute" w="100vw" h="100vh">
      <Map
        initialViewState={item.initialViewState}
        mapboxAccessToken="pk.eyJ1IjoiYXRyaXVzdGVjaCIsImEiOiJjanAwODBwb3UwdXpqM2pwNDBydGlodzkxIn0.008dDfZA13OT8MYDFS-k7w"
        mapStyle={item.style}
        style={{ width: '100%', height: '100%' }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        interactiveLayerIds={item.layers.map(({ id }) => id)}
        cursor={cursor}
        attributionControl={false}
        terrain={{ source: 'mapbox-dem' }}
      >
        <AttributionControl compact={true} />
        <DefaultLayers defaultLayers={item.defaultLayers}></DefaultLayers>
        <Layers layers={item.layers}></Layers>
      </Map>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({
  params,
}) => {
  const { slug } = params!;
  const item = await getMapItem({ slug });

  if (!item) {
    return { notFound: true };
  }

  return {
    props: {
      item,
    },
  };
};
