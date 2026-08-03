import { LucideIcon } from "lucide-react";

interface InformationItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface InformationCardProps {
  id?: string;
  background?: string;
  sectionNumber: string;
  heading: string;
  highlight: string;
  description: string;
  items: InformationItem[];
}

export function InformationCard({
  id,
  background,
  sectionNumber,
  heading,
  highlight,
  description,
  items,
}: InformationCardProps) {
  return (
    <section id={id} className={`${background || "bg-white"} py-16`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
            {sectionNumber}
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
            {heading}{" "}
            <span className="text-[#0B5FFF]">{highlight}</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {description}
          </p>
        </div>

        {/* Items */}
        <div className="space-y-6">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex gap-5 border-b border-slate-200 pb-6 last:border-b-0"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0B5FFF] shrink-0">
                  <Icon className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}