import { Request } from 'express';
import { ObjectId } from 'mongodb';

// User types
export interface IUser {
  _id?: ObjectId;
  name: string;
  email: string;
  password: string;
  role: 'candidate' | 'employer' | 'admin';
  company?: string;
  position?: string;
  phone?: string;
  address?: string;
  profileImage?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Job types
export interface IJob {
  _id?: ObjectId;
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
  postedBy: ObjectId | IUser;
  isActive: boolean;
  applicationDeadline: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

// Job Application types
export interface IJobApplication {
  _id?: ObjectId;
  jobId: ObjectId | IJob;
  candidateId: ObjectId | IUser;
  employerId: ObjectId | IUser;
  status: 'pending' | 'reviewed' | 'shortlisted' | 'rejected' | 'hired';
  coverLetter: string;
  resume: string;
  appliedAt: Date;
  reviewedAt?: Date;
  notes?: string;
}

// Candidate types
export interface ICandidate {
  _id?: ObjectId;
  userId: ObjectId | IUser;
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
export interface IAuthRequest extends Request {
  user?: {
    _id: string;
    email: string;
    role: string;
  };
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

// Environment variables
export interface EnvironmentVariables {
  PORT: string;
  MONGODB_URI: string;
  SECRET_KEY: string;
  NODE_ENV: string;
} 