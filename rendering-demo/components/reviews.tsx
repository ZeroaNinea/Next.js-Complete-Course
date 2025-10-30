export const Reviews = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve('Intentional delay (Reviews).');
    }, 4000)
  );

  return <div>Reviews</div>;
};
