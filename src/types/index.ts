export type BannerData = {
  id: number;
  template?: string;
  title: {
    text: string;
    position: {
      x: number;
      y: number;
    };
    style: {
      color: string;
      fontSize: string;
      fontWeight?: string;
      textAlign?: string;
    };
  };
  description: {
    text: string;
    position: {
      x: number;
      y: number;
    };
    style: {
      color: string;
      fontSize: string;
      fontWeight?: string;
      textAlign?: string;
      margin?: string;
    };
  };
  btn?: {
    text: string;
    position: {
      x: number;
      y: number;
    };
    style: {
      color: string;
      fontSize: string;
      fontWeight?: string;
      backgroundColor: string;
      borderRadius?: string;
      padding?: string;
    };
  };
  image: {
    src: string;
    type: "square" | "rectangle" | string;
    dimensions: {
      width: number;
      height: number;
    };
    position?: {
      x: number;
      y: number;
    };
  };
};
