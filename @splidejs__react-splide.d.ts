declare module '@splidejs/react-splide' {
  import * as React from 'react';

  interface SplideProps {
    options?: object;
    [key: string]: any;
  }

  export class Splide extends React.Component<SplideProps> {}

  interface SplideSlideProps {
    children?: React.ReactNode;
  }

  export class SplideSlide extends React.Component<SplideSlideProps> {}
}
