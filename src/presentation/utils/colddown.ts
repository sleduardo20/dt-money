export const coldDownFrom = async (delay: number) => {
  await new Promise((resolve) => setTimeout(resolve, delay));
};
