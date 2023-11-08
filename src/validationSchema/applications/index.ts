import * as yup from 'yup';

export const applicationValidationSchema = yup.object().shape({
  proposal: yup.string().required(),
  freelancer_id: yup.string().nullable().required(),
  job_offer_id: yup.string().nullable().required(),
});
