import { JobOfferInterface } from 'interfaces/job-offer';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  job_offer?: JobOfferInterface[];

  _count?: {
    job_offer?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  tenant_id?: string;
}
