export const preset = "ts-jest";
export const testEnvironment = "node";
export const transform = {
  "^.+\\.tsx?$": "ts-jest",
};
export const moduleNameMapper = {
  "\\.(css|less|sass|scss)$": "identity-obj-proxy",
};
