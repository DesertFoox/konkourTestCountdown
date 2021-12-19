interface IInputProps {
  type: string;
  className?: string;
  placeholder?: string;
  onChange?: (e: any) => any;
  value?: string | number;
  label?: string;
  disabled?: boolean
}

export default IInputProps;
