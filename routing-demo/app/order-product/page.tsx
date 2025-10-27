export default function OrderProduct() {
  const handleClick = () => {};

  return (
    <>
      <h1>Order Product</h1>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Place order
      </button>
    </>
  );
}
