
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export enum ConsultationStep {
  TYPE = 'TYPE',
  SCHEDULE = 'SCHEDULE',
  DETAILS = 'DETAILS',
  CONFIRM = 'CONFIRM'
}

export type ConsultationType = 'General Checkup' | 'Specialist Consultation' | 'Follow-up' | 'Urgent Care';
