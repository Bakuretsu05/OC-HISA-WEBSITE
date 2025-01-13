const VerticalCard = ({ img, title, text }) => {
  return (
    <div
      className={`bg-white shadow-card-shadow rounded-sm hover:scale-105 duration-300`}
    >
      <img src={img} alt={title} className="" />
      <div className="p-4">
        <h1 className="font-bold text-2xl">{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default VerticalCard;
