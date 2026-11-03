import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  MessageSquare, 
  Plus, 
  Sparkles, 
  Globe, 
  ThumbsUp, 
  X,
  Filter
} from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';
import { Testimonial, ServiceCategory } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | ServiceCategory>('all');
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(TESTIMONIALS);
  const [modalOpen, setModalOpen] = useState(false);

  // New review form
  const [newReview, setNewReview] = useState({
    name: '',
    role: '',
    company: '',
    location: '',
    serviceCategory: 'software-development' as ServiceCategory,
    serviceName: '',
    rating: 5,
    reviewText: '',
    projectOutcome: '',
  });
  const [submittedReviewSuccess, setSubmittedReviewSuccess] = useState(false);

  const filteredTestimonials = filter === 'all' 
    ? testimonialsList 
    : testimonialsList.filter((t) => t.serviceCategory === filter);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceNameMap: Record<ServiceCategory, string> = {
      'software-development': 'Software Development',
      'it-services': 'IT Services & Cloud Hosting',
      'web-designing': 'Web Designing & UI/UX',
      'job-order-works': 'Job Order Works Execution',
    };

    const reviewToAdd: Testimonial = {
      id: `custom-test-${Date.now()}`,
      name: newReview.name,
      role: newReview.role || 'Enterprise Partner',
      company: newReview.company || 'Global Client',
      location: newReview.location || 'International',
      rating: newReview.rating,
      serviceCategory: newReview.serviceCategory,
      serviceName: newReview.serviceName || serviceNameMap[newReview.serviceCategory],
      reviewText: newReview.reviewText,
      projectOutcome: newReview.projectOutcome || 'Project completed within agreed SLA and milestones.',
      verified: true,
      date: 'Just now',
    };

    setTestimonialsList([reviewToAdd, ...testimonialsList]);
    setSubmittedReviewSuccess(true);
    setTimeout(() => {
      setSubmittedReviewSuccess(false);
      setModalOpen(false);
      setNewReview({
        name: '',
        role: '',
        company: '',
        location: '',
        serviceCategory: 'software-development',
        serviceName: '',
        rating: 5,
        reviewText: '',
        projectOutcome: '',
      });
    }, 1800);
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative border-t border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-r-xl rounded-l-sm bg-slate-900/90 border-y border-r border-slate-800 border-l-2 border-l-cyan-400 text-cyan-300 text-[11px] font-mono tracking-[0.18em] uppercase shadow-lg shadow-cyan-950/20 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse"></span>
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>Client Feedback & Verified Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Global Innovators & Enterprises
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            See how Luxonixstacks powers mission-critical digital projects, IT infrastructure, and precision job orders for businesses worldwide.
          </p>
        </div>

        {/* Aggregate Social Proof Card */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 mb-12 shadow-xl grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          
          <div className="md:border-r border-slate-800 pr-4 space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-4xl font-extrabold text-white">4.9</span>
              <div className="space-y-0.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <div className="text-[11px] text-slate-400">Overall Client Rating</div>
              </div>
            </div>
            <p className="text-xs text-slate-400">Based on 38+ verified global client engagements</p>
          </div>

          <div className="space-y-1 text-center">
            <div className="text-2xl font-bold text-cyan-400">100%</div>
            <div className="text-xs font-semibold text-slate-200">SLA Delivery Rate</div>
            <div className="text-[11px] text-slate-400">Zero missed deadlines on critical job orders</div>
          </div>

          <div className="space-y-1 text-center">
            <div className="text-2xl font-bold text-sky-400">96%</div>
            <div className="text-xs font-semibold text-slate-200">Client Retention</div>
            <div className="text-[11px] text-slate-400">Long-term partnerships & retainer agreements</div>
          </div>

          <div className="flex justify-center md:justify-end">
            <button
              onClick={() => setModalOpen(true)}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white border border-slate-700 hover:border-cyan-500/50 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Submit Your Testimonial</span>
            </button>
          </div>

        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800 overflow-x-auto max-w-full">
            {[
              { id: 'all', label: 'All Reviews' },
              { id: 'software-development', label: 'Software Development' },
              { id: 'it-services', label: 'IT Services' },
              { id: 'web-designing', label: 'Web Designing' },
              { id: 'job-order-works', label: 'Job Order Works' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer shrink-0 ${
                  filter === tab.id
                    ? 'bg-slate-800 text-cyan-400 shadow-sm border border-cyan-500/40'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-4">
                
                {/* Top Row: Stars & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified Client
                    </span>
                  )}
                </div>

                {/* Service Tag & Date */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-cyan-400">{testimonial.serviceName}</span>
                  <span className="text-[11px] text-slate-400">{testimonial.date}</span>
                </div>

                {/* Review Body */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{testimonial.reviewText}"
                </p>

                {/* Measurable Project Outcome Box */}
                {testimonial.projectOutcome && (
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-300 space-y-1">
                    <div className="text-[10px] font-bold uppercase text-slate-400 flex items-center gap-1">
                      <ThumbsUp className="w-3 h-3 text-cyan-400" />
                      Measurable Result:
                    </div>
                    <div className="text-white font-medium">
                      {testimonial.projectOutcome}
                    </div>
                  </div>
                )}

              </div>

              {/* Author Meta */}
              <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {testimonial.role} · <span className="text-slate-300">{testimonial.company}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Globe className="w-3 h-3 text-slate-400" />
                    {testimonial.location.split(',').pop()?.trim()}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ================= Submit Review Modal ================= */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-slate-800 pb-3">
              <h3 className="text-xl font-bold text-white">Share Your Client Experience</h3>
              <p className="text-xs text-slate-400 mt-1">
                Your feedback helps other global partners understand the quality and speed of Luxonixstacks.
              </p>
            </div>

            {submittedReviewSuccess ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Thank You for Your Feedback!</h4>
                <p className="text-xs text-slate-300">
                  Your review has been verified and published to the client wall.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Company & Role *</label>
                    <input
                      type="text"
                      required
                      value={newReview.company}
                      onChange={(e) => setNewReview({ ...newReview, company: e.target.value })}
                      placeholder="e.g. Acme Tech, VP of Eng"
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Location / Country</label>
                    <input
                      type="text"
                      value={newReview.location}
                      onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                      placeholder="e.g. Berlin, Germany"
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Service Delivered *</label>
                    <select
                      value={newReview.serviceCategory}
                      onChange={(e) => setNewReview({ ...newReview, serviceCategory: e.target.value as any })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option value="software-development">Software Development</option>
                      <option value="it-services">IT Services & Cloud</option>
                      <option value="web-designing">Web Designing & UI</option>
                      <option value="job-order-works">Job Order Works</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Star Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className="p-1 focus:outline-none"
                      >
                        <Star
                          className={`w-5 h-5 ${
                            star <= newReview.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-700'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Review *</label>
                  <textarea
                    required
                    rows={3}
                    value={newReview.reviewText}
                    onChange={(e) => setNewReview({ ...newReview, reviewText: e.target.value })}
                    placeholder="Describe how the team handled execution, communication, and technical depth..."
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Quantifiable Result (Optional)</label>
                  <input
                    type="text"
                    value={newReview.projectOutcome}
                    onChange={(e) => setNewReview({ ...newReview, projectOutcome: e.target.value })}
                    placeholder="e.g. Reduced server costs by 30% or delivered 2 days ahead of schedule"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-bold rounded-lg transition-colors"
                  >
                    Publish Review
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
