import Container from "../common/container";
import H2 from "../common/heading-two";
import { journey } from "@/data/profile";

const JourneySection = () => {
  return (
    <section id="journey" className="pb-28 md:pb-40">
      <Container size="sm">
        <H2 className="text-center pb-12">The journey so far</H2>
        <div className="border border-white/20 rounded-[24px] p-2">
          <ol className="bg-muted rounded-2xl px-8 py-10 md:px-12 md:py-14">
            {journey.map((item, idx) => (
              <li
                key={`${item.org}-${item.role}`}
                className="relative pl-8 pb-10 last:pb-0"
              >
                {idx < journey.length - 1 && (
                  <span className="absolute left-[5px] top-3 bottom-0 w-px bg-white/20" />
                )}
                <span className="absolute left-0 top-1.5 size-[11px] rounded-full border border-white/60 bg-black" />
                <div className="flex flex-col md:flex-row md:justify-between md:gap-8 gap-1">
                  <div>
                    <h4 className="font-title text-lg font-semibold">
                      {item.role}
                    </h4>
                    <p className="text-white/70">{item.org}</p>
                    {item.note && (
                      <p className="text-sm text-white/50 mt-1">{item.note}</p>
                    )}
                  </div>
                  <span className="text-sm text-white/50 shrink-0 md:pt-1">
                    {item.period}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
};

export default JourneySection;
