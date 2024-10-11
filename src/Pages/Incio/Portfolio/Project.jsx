import { info } from "../../../data/HomeInfo.js";
import Tool from "../Skills/tool.jsx";

function Project({ project }) {
  const tools = info.tools;
  const link_image = project.link || project.github;
  return (
    <div className="min-w-[300px] w-5/12 flex flex-col border-r border-gray-2 rounded-xl bg-gray  shadow-lg shadow-green-calid text-black">
      <div
        className="h-[350px] w-full overflow-hidden relative"
      >
        <a href={link_image} target='_blank'>
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover rounded-t-md transform transition duration-300 ease-out hover:scale-110"
            style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent)' }}
          />
        </a>

      </div>
      <div className="py-5 w-full gap-5 px-4">
        <p className="font-roboto-slab text-3xl font-bold text-center">{project.name}</p>
        <div className='flex place-content-center place-items-center gap-10 pt-5'>
          {
            project.github && (
              <a href={project.github} target="_blank">
                <img src="/assets/tools/github.png" alt="GITHUB" className='w-6 h-6' />
              </a>
            )
          }
          {
            project.link && (
              <a href={project.link} target="_blank">
                <img src="/assets/tools/link.png" alt="link" className='w-6 h-6' />
              </a>
            )
          }
        </div>
        <p className="py-5 font-roboto-slab text-lg text-center">{project.description}</p>
      </div>
      <div className="flex place-content-center place-items-center gap-y-1 gap-x-2 flex-wrap w-full p-4">
        {project.tools && project.tools.map((toolName, index) => {
          const tool = tools.find(t => t.name_tool === toolName);
          if (tool) {
            return <Tool key={index} tool={tool} smalltool={true} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Project;
