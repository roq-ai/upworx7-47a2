import { ApplicationInterface } from 'interfaces/application';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface JobOfferInterface {
  id?: string;
  name: string;
  placed?: boolean;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  application?: ApplicationInterface[];
  company?: CompanyInterface;
  _count?: {
    application?: number;
  };
}

export interface JobOfferGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  company_id?: string;
}
