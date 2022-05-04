import getConfig from 'next/config';
import { Directus } from '@directus/sdk';
import { Collections } from './models';

const { publicRuntimeConfig } = getConfig();
const { directusUrl } = publicRuntimeConfig;

export const directus = new Directus<Collections>(directusUrl);

export const getUrl = (id: string) => {
  const base: string = directusUrl;
  const slash = base.endsWith('/') ? '' : '/';
  return directusUrl + slash + 'assets/' + id;
};
