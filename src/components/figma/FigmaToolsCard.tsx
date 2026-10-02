import {
  ReactIcon,
  VueIcon,
  LaravelIcon,
  NodejsIcon,
  AwsS3Icon,
  TailwindIcon,
  BootstrapIcon,
  MongodbIcon,
  GraphqlIcon,
  RelayIcon,
} from "@/components/ui/FigmaIcons";

export function FigmaToolsCard() {
  const toolsRow1 = [
    { name: "reactjs & react native", icon: <ReactIcon className="w-12 h-12 text-neutral-800 dark:text-white" /> },
    { name: "vuejs", icon: <VueIcon className="w-12 h-12 text-neutral-800 dark:text-white" /> },
    { name: "laravel", icon: <LaravelIcon className="w-12 h-12 text-neutral-800 dark:text-white" /> },
    { name: "nodejs", icon: <NodejsIcon className="w-12 h-12 text-neutral-800 dark:text-white" /> },
    { name: "aws s3", icon: <AwsS3Icon className="w-12 h-12 text-neutral-800 dark:text-white" /> },
  ];

  const toolsRow2 = [
    { name: "tailwind", icon: <TailwindIcon className="w-12 h-12 text-neutral-800 dark:text-white" /> },
    { name: "bootstrap", icon: <BootstrapIcon className="w-12 h-12 text-neutral-800 dark:text-white" /> },
    { name: "mongodb", icon: <MongodbIcon className="w-12 h-12 text-neutral-800 dark:text-white" /> },
    { name: "graphql", icon: <GraphqlIcon className="w-12 h-12 text-neutral-800 dark:text-white" /> },
    { name: "relay", icon: <RelayIcon className="w-12 h-12 text-neutral-800 dark:text-white" /> },
  ];

  return (
    <div className="bento-card p-6 sm:p-10 flex flex-col justify-between w-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-10">
        <span className="font-mono text-xs text-neutral-500 line-through">
          development
        </span>
        <span className="font-mono text-xs font-semibold text-neutral-900 dark:text-white tracking-wide">
          tools
        </span>
      </div>

      {/* 2 Rows of 5 Tools */}
      <div className="space-y-10 sm:space-y-12">
        {/* Row 1 */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-8 items-center text-center">
          {toolsRow1.map((tool) => (
            <div key={tool.name} className="flex flex-col items-center group">
              <div className="h-16 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                {tool.icon}
              </div>
              <span className="text-xs font-mono text-neutral-600 dark:text-neutral-300">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-8 items-center text-center">
          {toolsRow2.map((tool) => (
            <div key={tool.name} className="flex flex-col items-center group">
              <div className="h-16 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                {tool.icon}
              </div>
              <span className="text-xs font-mono text-neutral-600 dark:text-neutral-300">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
