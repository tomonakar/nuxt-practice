export interface Domain {
  create(arg: any): Domain
  validation(arg: any): void| never
}
