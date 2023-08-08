import * as yup from 'yup';

export const contentValidationSchema = yup.object().shape({
  title: yup.string().required(),
  body: yup.string().required(),
  teacher_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
