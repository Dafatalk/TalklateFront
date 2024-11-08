export interface RequestModel {
  id: string;
  description: string;
  originLanguage: string;
  targetLanguage: string;
  startDate: Date;
  finishDate: Date;
  creator: string;
}
