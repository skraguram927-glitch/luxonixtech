/**
 * Luxonixstacks IT Solutions - Data Models & Types
 */

export type ServiceCategory = 'software-development' | 'it-services' | 'web-designing' | 'job-order-works';

export interface ServiceDetail {
  id: ServiceCategory;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  iconName: string;
  highlights: string[];
  deliverables: string[];
  technologies: string[];
  sla: string;
  idealFor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatarUrl?: string;
  rating: number;
  serviceCategory: ServiceCategory;
  serviceName: string;
  reviewText: string;
  projectOutcome: string;
  verified: boolean;
  date: string;
}

export type JobType = 'Job' | 'Internship';

export interface CareerOpportunity {
  id: string;
  title: string;
  type: JobType;
  department: string;
  location: string;
  experienceLevel: string;
  stipendOrSalary: string;
  description: string;
  requirements: string[];
  skills: string[];
  duration?: string; // e.g. "3 - 6 Months" for internships
  openings: number;
}

export interface JobApplicationRecord {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  type: JobType;
  role: string;
  collegeOrCompany: string;
  experienceOrGradYear: string;
  skills: string;
  portfolioUrl?: string;
  coverNote?: string;
  cvFileName: string;
  cvFileSizeKb: number;
  socComplianceHash: string;
  sqlRecordId: string;
  status: 'Received' | 'Under Review' | 'Shortlisted' | 'Interview Scheduled';
  submittedAt: string;
}

export interface ContactInquiry {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  service: string;
  budgetRange: string;
  message: string;
}

export interface ConsultationSlot {
  date: string;
  time: string;
  serviceCategory: string;
  fullName: string;
  email: string;
  phone: string;
  projectNotes: string;
}
