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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Client-side honeypot: normal visitors never see or fill this field.
    if (formData.websiteTrap.trim()) return;

    const body = Object.entries(formData).map(([key, value]) => `${key}: ${value || "Not provided"}`).join("\n");
    window.location.href = `mailto:merinidegital@gmail.com?subject=Free%20Digital%20Audit%20Request&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="audit" className="py-20 bg-white" dir={dir}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="p-12 rounded-2xl bg-green-50 border border-green-200">
            <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
            <p className="text-xl text-green-700 font-medium">{t.audit.success}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="audit" className="py-20 bg-white" dir={dir}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.audit.title}
          </h2>
          <p className="text-lg text-gray-600">{t.audit.subtitle}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-8 sm:p-10 rounded-2xl bg-gray-50 border border-gray-200"
        >
          <div
            aria-hidden="true"
            className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
          >
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.audit.fields.name} *
              </label>
              <input
                type="text"
                name="name"
                required
                maxLength={100}
                value={formData.name}
                onChange={handleChange}
                placeholder={t.audit.placeholders.name}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#35DCE7] focus:ring-2 focus:ring-[#35DCE7] transition-all outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.audit.fields.email} *
              </label>
              <input
                type="email"
                name="email"
                required
                maxLength={254}
                value={formData.email}
                onChange={handleChange}
                placeholder={t.audit.placeholders.email}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#35DCE7] focus:ring-2 focus:ring-[#35DCE7] transition-all outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.audit.fields.phone} *
              </label>
              <input
                type="tel"
                name="phone"
                required
                maxLength={30}
                value={formData.phone}
                onChange={handleChange}
                placeholder={t.audit.placeholders.phone}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#35DCE7] focus:ring-2 focus:ring-[#35DCE7] transition-all outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.audit.fields.website}
              </label>
              <input
                type="url"
                name="website"
                maxLength={2048}
                value={formData.website}
                onChange={handleChange}
                placeholder={t.audit.placeholders.website}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#35DCE7] focus:ring-2 focus:ring-[#35DCE7] transition-all outline-none"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.audit.fields.business} *
              </label>
              <input
                type="text"
                name="business"
                required
                maxLength={150}
                value={formData.business}
                onChange={handleChange}
                placeholder={t.audit.placeholders.business}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#35DCE7] focus:ring-2 focus:ring-[#35DCE7] transition-all outline-none"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.audit.fields.message}
              </label>
              <textarea
                name="message"
                rows={4}
                maxLength={2000}
                value={formData.message}
                onChange={handleChange}
                placeholder={t.audit.placeholders.message}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#35DCE7] focus:ring-2 focus:ring-[#35DCE7] transition-all outline-none resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#050505] hover:bg-[#12B8C4] text-white rounded-xl font-semibold text-lg transition-all hover:shadow-lg"
          >
            <Send size={20} />
            {t.audit.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
