// User types
export interface User {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  role: 'candidate' | 'employer' | 'admin';
  company?: string;
  position?: string;
  phone?: string;
  address?: string;
  profileImage?: string;
  createdAt?: string;
  updatedAt?: string;
}

// Job types
export interface Job {
  _id?: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  category: string;
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  postedBy: string | User;
  isActive: boolean;
  applicationDeadline: string;
  applicationCount?: number;
  createdAt?: string;
  updatedAt?: string;
}

// Job Application types
export interface JobApplication {
  _id?: string;
  jobId: string | Job;
  candidateId: string | User;
  employerId: string | User;
  status: 'pending' | 'reviewed' | 'shortlisted' | 'rejected' | 'hired';
  coverLetter: string;
  resume: string;
  appliedAt: string;
  reviewedAt?: string;
  notes?: string;
  // Additional fields for display
  title?: string;
  company?: string;
  location?: string;
}

// Candidate types
export interface Candidate {
  _id?: string;
  userId: string | User;
  skills: string[];
  experience: number;
  education: {
    degree: string;
    institution: string;
    year: number;
  }[];
  certifications: {
    name: string;
    issuer: string;
    year: number;
  }[];
  portfolio?: string;
  linkedin?: string;
  github?: string;
}

// Auth types
export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, userData: Partial<User>) => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

// Pagination types
export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Search and filter types
export interface JobSearchParams {
  title?: string;
  company?: string;
  location?: string;
  type?: string;
  category?: string;
  minSalary?: number;
  maxSalary?: number;
}

// Form types
export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  role: 'candidate' | 'employer';
  company?: string;
  position?: string;
}

export interface JobFormData {
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  category: string;
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  applicationDeadline: string;
}

export interface JobApplicationFormData {
  coverLetter: string;
  resume: string;
  jobId: string;
}

// Component props types
export interface JobCardProps {
  job: Job;
  onApply?: (jobId: string) => void;
  onSave?: (jobId: string) => void;
  isSaved?: boolean;
}

export interface JobDetailsProps {
  job: Job;
  onApply: (jobId: string) => void;
  onSave: (jobId: string) => void;
  isSaved: boolean;
}

export interface NavbarProps {
  user: User | null;
  onSignOut: () => void;
}

// Firebase types
export interface FirebaseUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
} 