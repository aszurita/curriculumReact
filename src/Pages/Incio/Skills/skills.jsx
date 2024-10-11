function SkillsSection({ area }) {
  return (
    <div className="bg-gray w-1/4 min-w-[325px] min-h-[400px] border-2 border-gray rounded-3xl text-black">
      <div className="flex flex-col place-content-center place-items-center text-center py-4">
        <div className="flex place-content-center place-items-center text-center rounded-full w-20 h-20 bg-green-calid">
          <img src={area.imagen} alt={area.name} className="w-10 h-10" />
        </div>
        <h2 className="font-roboto-slab font-bold text-2xl py-4">{area.name}</h2>
        <div className="font-roboto-slab text-lg text-[#808080] p-5 gap-5">
          <p>
            <i>" {area.phrase} "</i>
          </p>
          <br />
          <p>
            <strong>{area.author}, </strong>{area.placework}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
