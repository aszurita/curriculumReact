function Experience({ experience }) {
  return (
    <div className="flex w-full pb-5">
      <div className="w-1/6 font-roboto-slab text-base">
        <p className="pt-2 text-sm max-sm:text-xs">{experience.date}</p>
      </div>
      <div className="flex flex-col w-5/6 font-roboto-slab text-base pl-8 !min-w-[260px] max-sm:pt-1">
        <div className="w-full px-4 max-sm:px-1">
          <p>
            <span className="font-bold text-xl max-sm:text-base">{experience.title}</span>,&nbsp;
            {experience.place}
          </p>
          <div className="flex flex-col place-content-start max-sm:text-[14px] pt-2 gap-2">
            {
              experience.description && experience.description.map((desc, index) => {
                return (
                  <div className="flex items-center" key={index}>
                    <svg width="14" height="14" className="!min-w-[14px]">
                      <circle cx="7" cy="7" r="6" stroke="#f8f9fa" strokeWidth="2" fill="#69b3a2" />
                    </svg>
                    <p className="text-start ml-3" >{desc}</p>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
