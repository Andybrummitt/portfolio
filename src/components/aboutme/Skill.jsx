const Skill = ({ name, img }) => {
  return (
    <div className="skill-container">
      <img src={img} alt={name} />
      <span>{name}</span>
    </div>
  );
};

export default Skill;
