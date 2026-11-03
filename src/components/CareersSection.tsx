import React, { useState, useRef } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Upload, 
  FileText, 
  CheckCircle2, 
  Send, 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Building2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { JobType } from '../types';

export const CareersSection: React.FC = () => {
  // Application Type: Job or Internship (no role cards, no mention of paid internship)
  const [appType, setAppType] = useState<JobType>('Job');

  // Candidate Details
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [collegeOrCompany, setCollegeOrCompany] = useState('');
  const [departmentOrDomain, setDepartmentOrDomain] = useState('Software Development');
  const [experienceOrGradYear, setExperienceOrGradYear] = useState('');
  const [skills, setSkills] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [coverNote, setCoverNote] = useState('');

  // CV File Upload
  const [cvFile, setCvFile] = useState<{ name: string; sizeKb: number } | null>(null);
  const [fileError, setFileError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    name: string;
    type: JobType;
    domain: string;
    email: string;
    fileName: string;
  } | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError('');
    const file = e.target.files?.[0];
    if (!file) return;

    const validExtensions = ['.pdf', '.doc', '.docx'];
    const hasValidExt = validExtensions.some(ext => file.name.toLowerCase().endsWith(ext));

    if (!hasValidExt) {
      setFileError('Please upload a valid CV file (.pdf, .doc, or .docx format).');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setFileError('CV file size exceeds the 10MB limit.');
      return;
    }

    setCvFile({
      name: file.name,
      sizeKb: Math.round(file.size / 1024),
    });
  };

  const handleRemoveFile = () => {
    setCvFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const refId = `LX-CAR-${Math.floor(100000 + Math.random() * 900000)}`;
      
      setSubmittedData({
        referenceId: refId,
        name: fullName,
        type: appType,
        domain: departmentOrDomain,
        email: email,
        fileName: cvFile ? cvFile.name : 'No file attached',
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleResetForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setCollegeOrCompany('');
    setDepartmentOrDomain('Software Development');
    setExperienceOrGradYear('');
    setSkills('');
    setPortfolioUrl('');
    setCoverNote('');
    setCvFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  return (
    <section id="careers" className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-r-xl rounded-l-sm bg-slate-900/90 border-y border-r border-slate-800 border-l-2 border-l-cyan-400 text-cyan-300 text-[11px] font-mono tracking-[0.18em] uppercase shadow-lg shadow-cyan-950/20 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse"></span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Join Our Salem Engineering Center & Global Delivery Team</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Careers & Internship Opportunities
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Interested in building high-performance software, cloud infrastructure, responsive web portals, or precision job orders? Select whether you are applying for a <strong className="text-white font-medium">Job</strong> or an <strong className="text-white font-medium">Internship</strong>, enter your details, and attach your CV. All applications are delivered directly to the Luxonixstacks team at <span className="text-cyan-400 font-mono">luxonixstacks@gmail.com</span>.
          </p>
        </div>

        {/* Interactive Application Container */}
        <div className="rounded-3xl bg-slate-900/70 border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
          
          {isSubmitted && submittedData ? (
            /* Pristine Submission Success View */
            <div className="py-12 px-4 sm:px-8 text-center max-w-2xl mx-auto space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-2xl bg-emerald-950 border border-emerald-600/60 text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-950">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                  Transmission Confirmed
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  Application Successfully Sent!
                </h3>
                <p className="text-sm text-slate-300 mt-2">
                  Thank you, <strong className="text-white">{submittedData.name}</strong>. Your <strong className="text-cyan-400">{submittedData.type}</strong> application in <strong className="text-white">{submittedData.domain}</strong> has been delivered directly to <strong className="text-cyan-300">luxonixstacks@gmail.com</strong>.
                </p>
              </div>

              {/* Receipt Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-left space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Application Reference:</span>
                  <span className="text-cyan-400 font-bold">{submittedData.referenceId}</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Application Type:</span>
                  <span className="text-white font-bold">{submittedData.type}</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Specialization Domain:</span>
                  <span className="text-white">{submittedData.domain}</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Attached CV File:</span>
                  <span className="text-cyan-300 font-semibold">{submittedData.fileName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Recipient Email:</span>
                  <span className="text-emerald-400 font-bold">luxonixstacks@gmail.com</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-400 text-left space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Next Steps:</span>
                </div>
                <p>
                  Our Salem talent desk will review your submission and contact you via email ({submittedData.email}) within 2 to 4 business days.
                </p>
              </div>

              <button
                type="button"
                onClick={handleResetForm}
                className="py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-750 text-white text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            /* Interactive Intake Form */
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Option Selector: Job vs Internship (No Role Cards) */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-3">
                  1. Select Application Type <span className="text-cyan-400">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Job Option */}
                  <button
                    type="button"
                    onClick={() => setAppType('Job')}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      appType === 'Job'
                        ? 'bg-cyan-950/60 border-cyan-500 shadow-md shadow-cyan-950/50 text-white ring-1 ring-cyan-500'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-3 rounded-xl border ${
                        appType === 'Job' 
                          ? 'bg-cyan-500 text-slate-950 border-cyan-400' 
                          : 'bg-slate-900 text-slate-400 border-slate-800'
                      }`}>
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-base font-bold text-white">Job</div>
                        <div className="text-xs text-slate-400">Full-Time / Professional Opportunities</div>
                      </div>
                    </div>
                    {appType === 'Job' && (
                      <div className="w-6 h-6 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                    )}
                  </button>

                  {/* Internship Option */}
                  <button
                    type="button"
                    onClick={() => setAppType('Internship')}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      appType === 'Internship'
                        ? 'bg-sky-950/60 border-sky-500 shadow-md shadow-sky-950/50 text-white ring-1 ring-sky-500'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-3 rounded-xl border ${
                        appType === 'Internship' 
                          ? 'bg-sky-400 text-slate-950 border-sky-300' 
                          : 'bg-slate-900 text-slate-400 border-slate-800'
                      }`}>
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-base font-bold text-white">Internship</div>
                        <div className="text-xs text-slate-400">Students, Freshers & Learning Programs</div>
                      </div>
                    </div>
                    {appType === 'Internship' && (
                      <div className="w-6 h-6 rounded-full bg-sky-400 text-slate-950 flex items-center justify-center">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                    )}
                  </button>

                </div>
              </div>

              {/* Candidate Required Details */}
              <div className="space-y-4">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300">
                  2. Enter Your Details & Technical Background <span className="text-cyan-400">*</span>
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white text-sm placeholder:text-slate-600 focus:outline-none"
                    />
                  </div>

                  {/* Candidate Email Address */}
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="rahul@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white text-sm placeholder:text-slate-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Mobile Number / WhatsApp */}
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      Mobile Number / WhatsApp <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 93423 20225"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white text-sm placeholder:text-slate-600 focus:outline-none"
                    />
                  </div>

                  {/* College / Institution / Current Organization */}
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      College / Institution / Current Organization <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={collegeOrCompany}
                      onChange={(e) => setCollegeOrCompany(e.target.value)}
                      placeholder="e.g. Salem Engineering College / Tech Freelancer"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white text-sm placeholder:text-slate-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Domain / Field of Interest */}
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      Area of Interest / Domain <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      value={departmentOrDomain}
                      onChange={(e) => setDepartmentOrDomain(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white text-sm focus:outline-none"
                    >
                      <option value="Software Development">Software Development (Full-Stack, React, Node, Python)</option>
                      <option value="IT Services & Cloud Infrastructure">IT Services & Cloud Infrastructure (AWS, Linux, DevOps)</option>
                      <option value="Web Designing & UI/UX">Web Designing & Modern UI/UX (Figma, Tailwind, Frontend)</option>
                      <option value="Job Order Works & Technical Operations">Job Order Works & Operations (Data, QA, Automation)</option>
                      <option value="General Technology Application">General Technology Application</option>
                    </select>
                  </div>

                  {/* Experience Level / Passing Year */}
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      Experience Level / Year of Graduation
                    </label>
                    <input
                      type="text"
                      value={experienceOrGradYear}
                      onChange={(e) => setExperienceOrGradYear(e.target.value)}
                      placeholder="e.g. 2026 Batch or 2 Years Experience"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white text-sm placeholder:text-slate-600 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Key Technical Skills */}
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">
                    Key Technical Skills & Tools <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    placeholder="e.g. React, TypeScript, Node.js, Python, PostgreSQL, Docker, Figma, Linux"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white text-sm placeholder:text-slate-600 focus:outline-none"
                  />
                </div>

                {/* Portfolio / GitHub / LinkedIn */}
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">
                    Portfolio / GitHub / LinkedIn URL (Optional)
                  </label>
                  <input
                    type="url"
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    placeholder="https://github.com/your-username or portfolio URL"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white text-sm placeholder:text-slate-600 focus:outline-none"
                  />
                </div>

                {/* Cover Note / Message */}
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">
                    Short Note / Message for Luxonixstacks Team
                  </label>
                  <textarea
                    rows={3}
                    value={coverNote}
                    onChange={(e) => setCoverNote(e.target.value)}
                    placeholder="Tell us briefly about your projects, strengths, and what you hope to achieve at Luxonixstacks..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white text-sm placeholder:text-slate-600 focus:outline-none resize-none"
                  />
                </div>
              </div>

              {/* CV File Upload (Required file) */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  3. Attach CV / Resume File (.pdf, .doc, .docx) <span className="text-cyan-400">*</span>
                </label>

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />

                {!cvFile ? (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="p-6 rounded-2xl border-2 border-dashed border-slate-800 hover:border-cyan-500/80 bg-slate-950/70 hover:bg-slate-950 transition-all text-center cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-3 text-cyan-400 group-hover:scale-105 transition-transform">
                      <Upload className="w-6 h-6" />
                    </div>
                    <div className="text-sm font-semibold text-white mb-1">
                      Click to Browse & Select CV File
                    </div>
                    <div className="text-xs text-slate-400">
                      Supports PDF, DOC, DOCX up to 10MB
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-cyan-900/60 text-cyan-300">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white font-mono">{cvFile.name}</div>
                        <div className="text-xs text-cyan-400">
                          {cvFile.sizeKb} KB · Attached and ready to deliver to {COMPANY_INFO.email}
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="p-2 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-red-400 border border-slate-800 transition-colors cursor-pointer"
                      title="Remove file"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {fileError && (
                  <p className="text-xs text-red-400 mt-2 font-medium">{fileError}</p>
                )}
              </div>

              {/* Delivery Notice & Submit Button */}
              <div className="pt-4 border-t border-slate-800 space-y-4">
                
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950 border border-slate-800 shadow-inner flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 shadow-sm shadow-cyan-950/50">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                        Direct Recipient Mailbox
                      </div>
                      <div className="text-white font-mono font-bold text-sm tracking-tight mt-0.5">
                        luxonixstacks@gmail.com
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-slate-400 pt-2 md:pt-0 border-t md:border-t-0 border-slate-800/80 w-full md:w-auto justify-between md:justify-end">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Salem HQ (TN-636203)</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/50 border border-emerald-800/60 text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>24-48h Review SLA</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-xl shadow-cyan-950/50 flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                      <span>Transmitting Application to luxonixstacks@gmail.com...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit {appType} Application to Company Mail ({COMPANY_INFO.email})</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
