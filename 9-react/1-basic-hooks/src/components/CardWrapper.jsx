const CardWrapper = ({ children, width }) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "15px",
        width: width,
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
