# React Form Handling Documentation

## Handling React Forms

1. **Managing fields through multiple states:**

   - Create individual state variables for each form field.

2. **Managing fields using a single state:**

   - Utilize a single state object to manage form fields.

3. **Using Refs to handle Input:**

   - Implement Refs to directly access and manipulate form inputs.

4. **Using browser FormData on each input field:**

   - Utilize the browser's `FormData` API to construct form data.

5. **Using browser FormData Object Entries:**
   - Employ `FormData`'s `entries()` method to iterate through form data.

## Validations

1. **Validate on every keystroke (onChange & onBlur):**

   - Implement validation logic to trigger on input changes and field blur.

2. **Validating on Form Submit:**

   - Validate form fields upon submission to ensure data integrity.

3. **Validating via built-in browser logic:**
   - Leverage browser's native validation features for basic form validation.

## Things to Remember

1. **Outsource validation logic:**

   - Encapsulate validation logic in separate functions for reusability.

2. **Create reusable input component:**

   - Develop a custom input component for consistent styling and behavior.

3. **Create custom Input Hooks for managing state logic:**
   - Abstract state management logic into custom Hooks for better organization.

## Using 3rd Party Libraries

Consider using the following libraries to simplify form handling:

1. **React Hook Form:**

   - A lightweight and performant library for managing forms in React.

2. **Formik:**
   - A powerful form library with built-in validation and error handling features.
