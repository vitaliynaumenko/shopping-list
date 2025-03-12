export const validateItem = (name: string, quantity: number): string | null => {
    if (!name.trim()) {
      return 'The name cannot be empty.';
    }
    if (quantity <= 0) {
      return 'The number must be greater than zero.';
    }
    return null;
  };