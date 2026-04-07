import type { FeatureCollection, Polygon } from 'geojson';

export type RegionProperties = {
  id: string;
  name: string;
  from: number;
  to: number;
  color: string;
  centerLng: number;
  centerLat: number;
  description: string;
};

export type RegionsFC = FeatureCollection<Polygon, RegionProperties>;


export type Region = {
  id: string;
  name: string;
  d: string;
  description: string;
  cx: number;
  cy: number;
};


export const regions: Region[] = [
  {
    id: 'west',
    name: 'Запад',
    d: 'M 210 290 L 430 250 L 500 390 L 390 540 L 200 500 Z',
    description: 'Тестовая область на западе карты.',
    cx: 340,
    cy: 395
  },
  {
    id: 'center',
    name: 'Центр',
    d: 'M587 470.5H579L575 473.5L571.5 478.5L573.5 483.5L571.5 488.5V492L573.5 497L571.5 502.5H567L564.5 509H559L564.5 515L567 519.5L571.5 524L575 529V535.5L579 541L587 544.5L590.5 547.5H596H603.5L609.5 549.5L612 555L614.5 566L624.5 570H636H642H650L662 570.5L664.5 566V560.5H659L653 555L647.5 547.5L653 544.5V532.5L647.5 524L638.5 516L642 509L645 502.5V495L647.5 488.5L642 483.5L638.5 473.5L642 468.5L647.5 466L645 455V443L636 439.5L629 437L624.5 439.5L630.5 443V447.5L628 458.5H624.5L620 464L614.5 468.5L612 475.5H603.5L600 483.5H590.5V478.5L587 470.5Z',
    description: 'Тестовая область в центральной части карты.',
    cx: 610,
    cy: 510
  },
  {
    id: 'east',
    name: 'Восток',
    d: 'M 930 230 L 1220 190 L 1310 470 L 1110 720 L 900 600 Z',
    description: 'Тестовая область на востоке карты.',
    cx: 1110,
    cy: 430
  }
];