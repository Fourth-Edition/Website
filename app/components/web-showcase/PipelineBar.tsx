import { pipeline } from "./data";
import { web, pipelineRamp } from "./theme";

/**
 * Pipeline stages are ordinal (New -> Won carries meaning), so they
 * take a single-hue light-to-dark ramp rather than four unrelated
 * categorical colors.
 */
export default function PipelineBar() {
  const total = pipeline.reduce((sum, stage) => sum + stage.count, 0);

  return (
    <div className={`rounded-lg border ${web.border} ${web.panel} p-2.5`}>
      <div className="flex items-baseline justify-between mb-2">
        <span className={`text-[11px] font-medium ${web.ink}`}>Pipeline</span>
        <span className={`text-[10px] ${web.muted}`}>{total} open deals</span>
      </div>

      <div className="flex h-2.5 rounded-full overflow-hidden gap-0.5">
        {pipeline.map((stage, i) => (
          <div
            key={stage.label}
            className={pipelineRamp[i]}
            style={{ width: `${(stage.count / total) * 100}%` }}
          />
        ))}
      </div>

      <div className="flex justify-between mt-2">
        {pipeline.map((stage, i) => (
          <div key={stage.label} className="flex flex-col items-center gap-1">
            <span className={`w-1.5 h-1.5 rounded-full ${pipelineRamp[i]}`} />
            <span className={`text-[9px] ${web.muted}`}>{stage.label}</span>
            <span className={`text-[10px] font-medium ${web.ink}`}>{stage.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
