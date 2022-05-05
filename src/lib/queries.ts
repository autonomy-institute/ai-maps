import { QueryMany } from '@directus/sdk';
import { directus } from './directus';
import { Map } from './models';
import { MapItem } from './types';

const LAYERS_FIELDS = ['id', 'name', 'cluster', 'file', 'style'];
const MAPS_FIELDS = ['id', 'title', 'slug', 'style', 'center', 'zoom', 'defaultLayers'];

type MapQuery = {
  slug: string;
};

const mapQueryFields = joinFields(MAPS_FIELDS, LAYERS_FIELDS, 'layers.layer');

export async function getMapItem({ slug }: MapQuery) {
  const items = await directus.items('maps').readByQuery({
    filter: { slug: { _eq: slug } },
    fields: mapQueryFields,
  });

  const data = items.data ?? [];
  const item = data[0] as Map;

  return item && toMapItem(item);
}

export async function getMaps(query?: QueryMany<Map>) {
  const items = await directus.items('maps').readByQuery({
    ...query,
    fields: MAPS_FIELDS,
  });

  const data = items.data ?? [];

  return data as Map[];
}

/* utils */

function joinFields(base: string[], fields: string[], path: string) {
  const mapped = fields.map((field) => `${path}.${field}`);
  return [...base, ...mapped];
}

function toMapItem(map: Map): MapItem {
  const { id, title, slug, style, zoom, defaultLayers } = map;
  const [longitude, latitude] = map.center.coordinates;

  const layers = map.layers.map(({ layer }) => ({
    ...layer,
  }));

  const initialViewState = {
    longitude,
    latitude,
    zoom,
  };

  return {
    id,
    title,
    slug,
    style,
    initialViewState,
    layers,
    defaultLayers,
  };
}
