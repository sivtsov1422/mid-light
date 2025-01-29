export interface Property {
  id: number;
  name: string;
  description: string;
}

export interface ProductOne {
  id: number;
  name: string;
  material: string;
  price: number;
  height: number;
  potreb: number;
  napryag: number;
  count: number;
  angle: number;
  paint: string;
  weight: number;
  description: string;
  moreDescription: string;
  imgUrl: string;
}

export interface OneImg {
  id: number;
  image: string;
  text: string;
}

export interface SliderProps {
  imgs: OneImg[];
}
