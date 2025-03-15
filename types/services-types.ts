export interface ServiceTypes {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number
  times?: string;
  specs: string[];
  featured?: boolean;
  badge?: string;
  allFeature?: string []
}
