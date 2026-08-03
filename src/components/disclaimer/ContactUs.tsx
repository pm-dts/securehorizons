import { contactData } from "@/../data/disclaimer/contactus";

export default function ContactUs() {
  return (
    <section id="contact-us" className="bg-slate-50 py-16 scroll-mt-24">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 xl:px-16">
        <div className="mb-10 max-w-4xl">
          <span className="inline-flex items-center uppercase text-sm font-bold leading-relaxed text-blue-700">
            {contactData.badge}
          </span>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 lg:text-5xl">
            {contactData.title.first}{" "}
            <span className="text-[#0B5FFF]">
              {contactData.title.highlight}
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {contactData.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {contactData.items.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50">
                <item.icon className="h-5 w-5 text-blue-600" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>

                <p className="mt-2 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 lg:p-10">
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#0B5FFF]">
              <contactData.notice.icon className="h-7 w-7" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900">
                {contactData.notice.title}
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                {contactData.notice.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
