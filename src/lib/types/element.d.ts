export type Element = {
  type: ElementSubType;
  html: string;
  name: string;
  isRequired: boolean;
  title: string;
  validators: ValidatorType[];
  showNoneItem: boolean;
  showOtherItem: boolean;
  otherText: string;
  choices: Partial<Choice>[] | string[];
};

export type Page = {
  elements: Partial<Element>[];
};
