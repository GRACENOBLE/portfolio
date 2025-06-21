const SkillSetCard = ({
  skill,
  description,
}: {
  skill: string;
  description: string;
}) => {
  return (
    <div className="border border-muted/10 rounded-2xl px-6 py-5 ">
      <h3 className="text-lg mb-1">{skill}</h3>
      <p className="text-muted/60">{description} </p>
    </div>
  );
};

export default SkillSetCard;
