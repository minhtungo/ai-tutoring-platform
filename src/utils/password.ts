export const checkPasswordStrength = (password: string) => {
  const requirements = [
    { regex: /.{8,}/, text: 'At least 8 characters' },
    { regex: /[0-9]/, text: 'At least 1 number' },
    { regex: /[a-z]/, text: 'At least 1 lowercase letter' },
    { regex: /[A-Z]/, text: 'At least 1 uppercase letter' },
  ];

  return requirements.map((req) => ({
    met: req.regex.test(password),
    text: req.text,
  }));
};

export function getPasswordStrengthColor(score: number) {
  if (score === 0) return 'bg-border';
  if (score <= 1) return 'bg-red-500';
  if (score <= 2) return 'bg-orange-500';
  if (score === 3) return 'bg-amber-500';
  return 'bg-emerald-500';
}

export function getPasswordStrengthText(score: number) {
  if (score === 0) return 'Enter a password';
  if (score <= 2) return 'Weak password';
  if (score === 3) return 'Medium password';
  return 'Strong password';
}
