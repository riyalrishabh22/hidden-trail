export interface Location {
  id: number;
  name: string;
  category: string;
  description: string;
  images: string[];
  mapsLink: string;
}

export interface LocationsData {
  locations: Location[];
  categories: string[];
}
