export interface Input {
  label: string;
  value: any;
  col: string;
  type: string;
  rules: rule;
}

export interface rule {
  required: boolean;
}

export interface baseField{
  col:string;
fieldName:string;
label:string;
rules:rule;
type:string;
value:string;
}
export interface Field extends baseField{
  subFields?:baseField[]
}