const Events = () => {
  const handleOne = (e) => {
    e.preventDefault();
    alert('Hi Everyone');
  };
  const handleTwo = ({ name }) => {
    alert('Hi Everyone', name);
  };
  return (
    <>
      {/* Without Aurgoments  */}
      <button onClick={handleOne}>Click Me</button>
      <br />
      {/* With Aurgoments  */}
      <button onClick={() => handleTwo('Imran')}>Click Me</button>
    </>
  );
};

export default Events;
