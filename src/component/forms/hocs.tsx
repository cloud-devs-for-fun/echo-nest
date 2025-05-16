////// sample HOC
import React from 'react';
import { getIn, useFormikContext, FormikValues } from 'formik';

interface WithInputControllerProps {
  name: string;
}

const withInputController = <Type extends object>(
  Component: React.ComponentType<
    Type &
      WithInputControllerProps & {
        fieldProps: {
          value: unknown;
          error?: string;
          touched?: boolean;
          hasError: boolean;
        };
      }
  >,
) => {
  const WithInputController = ({ name, ...props }: WithInputControllerProps) => {
    const form = useFormikContext<FormikValues>();

    const fieldValue = getIn(form.values, name);
    const fieldError = getIn(form.errors, name);
    const fieldTouched = getIn(form.touched, name);
    const hasError = Boolean(fieldError) && Boolean(fieldTouched);

    return (
      <Component
        {...(props as Type)}
        name={name}
        fieldProps={{
          value: fieldValue,
          error: fieldError,
          touched: fieldTouched,
          hasError,
        }}
      />
    );
  };

  WithInputController.displayName = `WithInputController(${Component.displayName || Component.name || 'Component'})`;

  return WithInputController;
};

export default withInputController;
