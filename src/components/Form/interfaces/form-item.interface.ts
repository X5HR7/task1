import { IInput } from '@shared/ui/FormItem/interfaces/input.interface.ts';

export interface IFormItem {
  titleText: string;
  errorMessage: string;
  input: IInput;
}
