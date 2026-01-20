
export enum SlideType {
  TITLE = 'TITLE',
  PROBLEM = 'PROBLEM',
  SOLUTION_OVERVIEW = 'SOLUTION_OVERVIEW',
  DETAIL = 'DETAIL',
  LOGISTICS = 'LOGISTICS',
  KPI = 'KPI',
  MOCKUP = 'MOCKUP',
  TRACKING = 'TRACKING'
}

export interface Task {
  id: string;
  title: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
}

export interface SlideData {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  content?: any;
}
