import {
  PythonIcon,
  SqlIcon,
  PowerBiIcon,
  TableauIcon,
  SnowflakeIcon,
  ExcelIcon,
  PandasIcon,
  BigQueryIcon,
  RIcon,
  EtlIcon,
} from "@/components/ui/DataIcons";

export function FigmaToolsCard() {
  const toolsRow1 = [
    { name: "python", icon: <PythonIcon className="w-12 h-12" /> },
    { name: "postgresql & sql", icon: <SqlIcon className="w-12 h-12 text-[#38bdf8]" /> },
    { name: "power bi & dax", icon: <PowerBiIcon className="w-12 h-12" /> },
    { name: "tableau", icon: <TableauIcon className="w-12 h-12" /> },
    { name: "snowflake", icon: <SnowflakeIcon className="w-12 h-12" /> },
  ];

  const toolsRow2 = [
    { name: "advanced excel", icon: <ExcelIcon className="w-12 h-12" /> },
    { name: "pandas & numpy", icon: <PandasIcon className="w-12 h-12" /> },
    { name: "google bigquery", icon: <BigQueryIcon className="w-12 h-12" /> },
    { name: "r statistics", icon: <RIcon className="w-12 h-12" /> },
    { name: "etl & pipelines", icon: <EtlIcon className="w-12 h-12 text-emerald-500 dark:text-[#10b981]" /> },
  ];

  return (
    <div className="bento-card p-6 sm:p-10 flex flex-col justify-between w-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-10">
        <span className="font-mono text-xs text-neutral-500 line-through">
          analytics
        </span>
        <span className="font-mono text-xs font-semibold text-neutral-900 dark:text-white tracking-wide">
          tools &amp; stack
        </span>
      </div>

      {/* 2 Rows of 5 Tools */}
      <div className="space-y-10 sm:space-y-12">
        {/* Row 1 */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-8 items-center text-center">
          {toolsRow1.map((tool) => (
            <div key={tool.name} className="flex flex-col items-center group cursor-default">
              <div className="h-16 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              <span className="text-xs font-mono text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-8 items-center text-center">
          {toolsRow2.map((tool) => (
            <div key={tool.name} className="flex flex-col items-center group cursor-default">
              <div className="h-16 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              <span className="text-xs font-mono text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
