export const computeDetails = item => {
  // heavy computation
  let result = '';
  const startTime = new Date().getTime();
  for (let i = 0; i < 10000; i++) {
    result += Math.random();
  }
  const endTime = new Date().getTime();
  return {startTime, endTime};
};
