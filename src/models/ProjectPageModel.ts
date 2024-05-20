export type Item = {
  colorName?: string;
  colorHex: string;
  height?: number;
  textColor?: string;
  fontFamily?: string;
};

export type ImageItem = {
  src: string;
  alt: string;
  width?: number;
  height: number;
  objectFit?: string;
};

export type ImagesListModel = {
  bgColor: string;
  images: ImageItem[];
  flexDirection?: string;
  gap?: number;
};

export type FontPresentationModel = {
  height?: number;
  letterOverview: {
    text: string;
    fontWeight: number | string;
    fontSize?: number;
  };
  fontFamily: string;
  textColor: string;
  bgColor: string;
  fonts: {
    text: string;
    fontStyle?: string;
    fontWeight: number | string;
  }[];
};

export type InformationModel = {
  title: string;
  description: string;
  timeMarker?: string;
  bgColor: string;
  textColor: string;
};

export type IconsListModel = {
  icons: {
    image: ImageItem;
    name: string;
  }[];
  background: string;
  textColor: string;
};

export type RightColContentModel = {
  type: string;
  image?: {
    src: string;
    alt: string;
    height: number;
    width?: number;
    priority?: boolean;
    objectFit?: string;
    objectPosition?: string;
  };
  textList?: string[];
  information?: InformationModel;
  fontPresentation?: FontPresentationModel;
  imagesList?: ImagesListModel;
  iconsList?: IconsListModel;
  item?: Item; // items is only used for type 'text'
  left?: RightColContentModel[];
  right?: RightColContentModel[];
};

export type ProjectModel = {
  id: string;
  content: {
    name: string;
    tags: string[];
    description: string[];
    heroImages: {
      height: number;
      left?: {
        src: string;
        alt: string;
        width: number;
        objectFit?: string;
        objectPosition?: string;
      };
      right: {
        src: string;
        alt: string;
        objectFit?: string;
        objectPosition?: string;
        width: number;
      };
    };
    project: {
      left: {
        image: {
          src: string;
          alt: string;
          height: number;
          objectPosition?: string;
        };
        description: string[];
      };
      right: RightColContentModel[];
    };
  };
};

export const DEFAULT = {
  src: '/images/lpp-baumes.jpg',
  alt: 'aqua-studio',
};
