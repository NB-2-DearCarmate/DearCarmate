export type CreateCustomerInput = {
    name: string;
    gender: 'male' | 'female';
    phone: string;
    ageRange?: string;
    region?: string;
    email?: string;
    memo?: string;
  };