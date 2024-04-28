// Email Validation
export const isEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

// Is Not Empty Validation
export const isNotEmpty = (value) => {
  return value.trim() !== "";
};

// Has Minimum length
export const hasMinLength = (value, minLength) => {
  return value.length >= minLength;
};

// Is equal to other value
export const isEqualToOtherValue = (value, otherValue) => {
  return value === otherValue;
};
