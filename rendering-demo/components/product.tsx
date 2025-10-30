export const Product = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve('Intentional delay (Product).');
    }, 2000)
  );

  return <div>Product</div>;
};
