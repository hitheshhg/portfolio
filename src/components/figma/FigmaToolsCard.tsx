import {
  PythonIcon,
  SqlIcon,
  PowerBiIcon,
  TableauIcon,
  SnowflakeIcon,
  ExcelIcon,
  BigQueryIcon,
  RIcon,
  PandasIcon,
  EtlIcon,
} from "@/components/ui/DataIcons";

export function FigmaToolsCard() {
  const toolsRow1 = [
    { name: "python", icon: <PythonIcon className="w-10 h-10" /> },
    { name: "postgresql & sql", icon: <SqlIcon className="w-10 h-10 text-[#38bdf8]" /> },
    { name: "power bi & dax", icon: <PowerBiIcon className="w-10 h-10" /> },
    { name: "tableau", icon: <TableauIcon className="w-10 h-10" /> },
    { name: "snowflake", icon: <SnowflakeIcon className="w-10 h-10" /> },
  ];

  const toolsRow2 = [
    { name: "advanced excel", icon: <ExcelIcon className="w-10 h-10" /> },
    { name: "pandas & numpy", icon: <PandasIcon className="w-10 h-10" /> },
    { name: "google bigquery", icon: <BigQueryIcon className="w-10 h-10" /> },
    { name: "r statistics", icon: <RIcon className="w-10 h-10" /> },
    { name: "etl & data pipelines", icon: <EtlIcon className="w-10 h-10 text-[#10b981]" /> },
  ];

  return (
    <div className="bento-card p-6 sm:p-10 flex flex-col justify-between w-full bg-black text-white border border-white/[0.08]">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8 sm:mb-10">
        <span className="font-mono text-xs font-semibold text-white tracking-wide uppercase">
          core analytics stack
        </span>
      </div>

      {/* 2 Rows of 5 Tools */}
      <div className="space-y-8 sm:space-y-10">
        {/* Row 1 */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-8 items-center text-center">
          {toolsRow1.map((tool) => (
            <div key={tool.name} className="flex flex-col items-center group cursor-default">
              <div className="h-14 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              <span className="text-xs font-mono text-neutral-300 group-hover:text-white transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-8 items-center text-center">
          {toolsRow2.map((tool) => (
            <div key={tool.name} className="flex flex-col items-center group cursor-default">
              <div className="h-14 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              <span className="text-xs font-mono text-neutral-300 group-hover:text-white transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
