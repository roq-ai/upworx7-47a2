interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Owner', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Upworx7',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage applications',
    'View job offers',
    'View company information',
    'Edit personal information',
  ],
  ownerAbilities: ['Manage application data', 'Manage job offer data', 'Manage user data', 'Manage company data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/aca4881e-c1e4-4970-b4a2-52ca02bcbd24',
};
