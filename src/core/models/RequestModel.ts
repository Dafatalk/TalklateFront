export interface RequestModel {
  id: string;
  description: string;
  originLanguage: string;
  targetLanguage: string;
  startDate: Date | null;
  finishDate: Date | null;
  creator: string;
  translator: string | null;
}
