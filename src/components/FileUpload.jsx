import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FileUploadComponent = () => {
  const initialValues = {
    file: '', // Initialize file field
  };

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    file: Yup.mixed().required('File is required'), // File is required
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    console.log('Form values:', values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form>
            <label>Upload File</label>
            <Field name="file">
              {({ field, form }) => (
                <div>
                  <input
                    type="file"
                    {...field}
                    onChange={(event) => {
                      // Set the file value when the file input changes
                      setFieldValue('file', event.currentTarget.files[0]);
                    }}
                  />
                  <ErrorMessage name="file" component="div" className="text-danger" />
                </div>
              )}
            </Field>


          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FileUploadComponent;
