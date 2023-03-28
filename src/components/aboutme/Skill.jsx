const Skill = ({ image, alt }) => {
  return (
    <li className="skill-container">
      <div>
        <img src={image} alt={alt} />
        <p>{alt}</p>
      </div>
    </li>
  );
};

export default Skill;
