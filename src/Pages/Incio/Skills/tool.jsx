function Tool({ tool, smalltool = false }) {
  return (
    <a href={tool.link} target="_blank">
      <div className="rounded-lg  bg-green-calid bg-opacity-60 flex place-content-center place-items-center py-2 px-4 gap-5 hover:bg-opacity-15">
        <img src={tool.image} alt={tool.name_tool} className={smalltool ? "w-5 h-5 max-sm:w-4 max-sm:h-4" : "w-10 h-10 max-sm:w-8 max-sm:h-8"} />
        <p className={`font-montserrat font-bold ${smalltool ? "text-sm max-sm:text-xs" : "text-lg max-sm:text-sm"}`}>{tool.name_tool}</p>
      </div>
    </a>
  )
}

export default Tool;