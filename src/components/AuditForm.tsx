import { useState, type FormEvent } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Send, CheckCircle } from "lucide-react";

export default function AuditForm() {
  const { t, dir } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    business: "",
    message: "",
    websiteTrap: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (formData.websiteTrap.trim()) return;

    const fields = [
      ["name", formData.name],
      ["email", formData.email],
      ["phone", formData.phone],
      ["website", formData.website],
      ["business", formData.business],
      ["message", formData.message],
    ];

    const body = fields
      .map(([key, value]) => key + ": " + (value || "Not provided"))
      .join("\\n");

    const subject = encodeURIComponent(
      formData.business ? "Free Digital Audit — " + formData.business : "Free Digital Audit Request"
    );

    window.location.href =
      "mailto:merinidegital@gmail.com?subject=" +
      subject +
      "&body=" +
      encodeURIComponent(body);

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="audit" className="bg-white py-20" dir={dir}>
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-12">
            <CheckCircle size={48} className="mx-auto mb-4 text-green-500" />
            <p className="text-xl font-medium text-green-700">{t.audit.success}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="audit" className="bg-white py-20" dir={dir}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">{t.audit.title}</h2>
          <p className="text-lg text-gray-600">{t.audit.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 bg-gray-50 p-8 sm:p-10">
          <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
            <label htmlFor="websiteTrap">Leave this field empty</label>
            <input
              id="websiteTrap"
              type="text"
              name="websiteTrap"
              tabIndex={-1}
              autoComplete="off"
              value={formData.websiteTrap}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">{t.audit.fields.name} *</label>
              <input
                type="text"
                name="name"
                required
                maxLength={100}
                value={formData.name}
                onChange={handleChange}
                placeholder={t.audit.placeholders.name}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-[#35DCE7] focus:ring-2 focus:ring-[#35DCE7]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">{t.audit.fields.email} *</label>
              <input
                type="email"
                name="email"
                required
                maxLength={254}
                value={formData.email}
                onChange={handleChange}
                placeholder={t.audit.placeholders.email}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-[#35DCE7] focus:ring-2 focus:ring-[#35DCE7]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">{t.audit.fields.phone} *</label>
              <input
                type="tel"
                name="phone"
                required
                maxLength={30}
                value={formData.phone}
                onChange={handleChange}
                placeholder={t.audit.placeholders.phone}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-[#35DCE7] focus:ring-2 focus:ring-[#35DCE7]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">{t.audit.fields.website}</label>
              <input
                type="url"
                name="website"
                maxLength={2048}
                value={formData.website}
                onChange={handleChange}
                placeholder={t.audit.placeholders.website}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-[#35DCE7] focus:ring-2 focus:ring-[#35DCE7]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">{t.audit.fields.business} *</label>
              <input
                type="text"
                name="business"
                required
                maxLength={150}
                value={formData.business}
                onChange={handleChange}
                placeholder={t.audit.placeholders.business}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-[#35DCE7] focus:ring-2 focus:ring-[#35DCE7]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">{t.audit.fields.message}</label>
              <textarea
                name="message"
                rows={4}
                maxLength={2000}
                value={formData.message}
                onChange={handleChange}
                placeholder={t.audit.placeholders.message}
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-[#35DCE7] focus:ring-2 focus:ring-[#35DCE7]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#050505] px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-[#12B8C4] hover:shadow-lg"
          >
            <Send size={20} />
            {t.audit.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
