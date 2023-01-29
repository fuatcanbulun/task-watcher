interface ITextInput {
  label?: string;
  value?: string;
  placeholder?: string;
  icon?: string;
  onChange: Function;
  disabled?: boolean;
  maxlength?: string;
}

export type { ITextInput };
