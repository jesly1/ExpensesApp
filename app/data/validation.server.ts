interface ExpenseInput {
  title: string;
  amount: string; 
  date: string;
}
interface CredentialsInput {
  email: string;
  password: string;
}
function isValidTitle(value: string): boolean {
  return value.trim().length > 0 && value.trim().length <= 30;
}

function isValidAmount(value: string): boolean {
  const amount = parseFloat(value);
  return !isNaN(amount) && amount > 0;
}

function isValidDate(value: string): boolean {
  return !!value && new Date(value).getTime() < new Date().getTime();
}
export function validateExpenseInput(input: ExpenseInput): void {
  const validationErrors: Record<string, string> = {}; 

  if (!isValidTitle(input.title)) {
    validationErrors.title = 'Invalid expense title. Must be at most 30 characters long.';
  }

  if (!isValidAmount(input.amount)) {
    validationErrors.amount = 'Invalid amount. Must be a number greater than zero.';
  }

  if (!isValidDate(input.date)) {
    validationErrors.date = 'Invalid date. Must be a date before today.';
  }

  if (Object.keys(validationErrors).length > 0) {
    throw validationErrors;
  }
}
function isValidEmail(value: string): boolean {
  return value.includes('@');
}

function isValidPassword(value: string): boolean {
  return value.trim().length >= 7;
}

export function validateCredentials(input: CredentialsInput): void {
  const validationErrors: Record<string, string> = {}; 

  if (!isValidEmail(input.email)) {
    validationErrors.email = 'Invalid email address.';
  }

  if (!isValidPassword(input.password)) {
    validationErrors.password = 'Invalid password. Must be at least 7 characters long.';
  }

  if (Object.keys(validationErrors).length > 0) {
    throw validationErrors;
  }
}
