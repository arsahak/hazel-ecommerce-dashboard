export const generateSlug = (input: string): string => {
  return input
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading/trailing spaces
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
};
