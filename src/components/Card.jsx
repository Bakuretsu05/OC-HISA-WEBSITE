const Card = ({ children, className }) => {
  return (
    <div className={"bg-white rounded-md p-6 shadow-card-shadow " + className}>
      {children}
    </div>
  );
};

export default Card;
