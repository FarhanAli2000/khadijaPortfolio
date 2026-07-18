function SkillMeter({ name, level }) {
  return (
    <div className="skill-meter">
      <div className="skill-meter-top">
        <span>{name}</span>
        <strong>{level}%</strong>
      </div>
      <div className="skill-track">
        <span style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

export default SkillMeter;
