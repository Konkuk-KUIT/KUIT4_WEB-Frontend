/**
 *
 * @param {number[] } numbers
 
 */
export const shuffle = (numbers) => {
  return numbers.sort(() => Math.random() - 0.5);
};
