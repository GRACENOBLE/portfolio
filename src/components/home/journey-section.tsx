import { journey } from "@/data/profile";
import { CornerMarks, Section, Tab } from "../blueprint";

// Laid out like the revision table on a drawing: latest revision first
const JourneySection = () => {
  return (
    <Section id="journey" title="The journey so far">
      <div className="relative border border-line bg-paper">
        <CornerMarks />
        <Tab>Revision history</Tab>
        <div
          aria-hidden="true"
          className="hidden md:grid grid-cols-[5rem_12rem_1fr] border-b border-line text-[10px] uppercase tracking-[0.2em] text-ink/50"
        >
          <span className="px-5 py-3">Rev</span>
          <span className="px-5 py-3 border-l border-line">Period</span>
          <span className="px-5 py-3 border-l border-line">Description</span>
        </div>
        <ol>
          {journey.map((item, idx) => (
            <li
              key={`${item.org}-${item.role}`}
              className="grid grid-cols-[4rem_1fr] md:grid-cols-[5rem_12rem_1fr] border-b border-line last:border-b-0"
            >
              <span className="px-5 py-5 text-sm text-ink/60 md:row-auto row-span-2">
                R{String(journey.length - idx).padStart(2, "0")}
              </span>
              <span className="px-5 pt-5 md:py-5 border-l border-line text-xs uppercase tracking-[0.12em] text-ink/60">
                {item.period}
              </span>
              <div className="px-5 pb-5 pt-2 md:py-5 border-l border-line">
                <h4 className="font-title text-lg font-semibold">
                  {item.role}
                </h4>
                <p className="text-ink/75">{item.org}</p>
                {item.note && (
                  <p className="text-sm text-ink/55 mt-1">{item.note}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
};

export default JourneySection;
