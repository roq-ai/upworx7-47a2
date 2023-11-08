import * as yup from 'yup';

export const jobOfferValidationSchema = yup.object().shape({
  name: yup.string().required(),
  placed: yup.boolean().required(),
  company_id: yup.string().nullable().required(),
});
