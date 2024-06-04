interface RadioOption {
    value: number;
    label: string;
  }
  
  interface AppProps {
    title: string;
    initialValue: number;
    options: RadioOption[];
    disabled?: boolean;
  }