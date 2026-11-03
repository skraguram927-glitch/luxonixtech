import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Video, 
  ShieldCheck, 
  ArrowRight,
  Globe2
} from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES } from '../data/mockData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialService
}) => {
  const [selectedService, setSelectedService] = useState(initialService || 'Software Development');
  const [selectedDate, setSelectedDate] = useState('2026-04-02');
  const [selectedTime, setSelectedTime] = useState('11:00 AM IST (05:30 AM UTC)');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const dates = [
    { day: 'Tomorrow', date: '2026-04-02', label: 'Thu, Apr 2' },
    { day: 'Fri', date: '2026-04-03', label: 'Fri, Apr 3' },
    { day: 'Mon', date: '2026-04-06', label: 'Mon, Apr 6' },
    { day: 'Tue', date: '2026-04-07', label: 'Tue, Apr 7' },
  ];

  const slots = [
    '10:00 AM IST (04:30 AM UTC)',
    '11:30 AM IST (06:00 AM UTC)',
    '02:30 PM IST (09:00 AM UTC)',
    '04:30 PM IST (11:00 AM UTC)',
    '06:30 PM IST (01:00 PM UTC)',
    '08:30 PM IST (US Morning EST 11:00 AM)',
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="border-b border-slate-800 pb-4">
          <div className="inline-flex items-center gap-1.5 text-xs text-cyan-400 font-semibold mb-1">
            <Video className="w-3.5 h-3.5" />
            <span>Virtual Discovery Session</span>
          </div>
          <h3 className="text-2xl font-bold text-white">Book a Technical Consultation</h3>
          <p className="text-xs text-slate-400 mt-1">
            Connect directly with a Luxonixstacks software architect or job order specialist for 30 minutes. Free of charge, no obligation.
          </p>
        </div>

        {confirmed ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-cyan-950 border border-cyan-500/60 flex items-center justify-center mx-auto text-cyan-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-white">Consultation Confirmed!</h4>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 max-w-md mx-auto space-y-1">
              <div><strong className="text-white">Service:</strong> {selectedService}</div>
              <div><strong className="text-white">Time:</strong> {selectedTime} on {selectedDate}</div>
              <div><strong className="text-white">Host:</strong> Luxonixstacks Engineering Desk (Salem HQ)</div>
              <div><strong className="text-white">Email confirmation:</strong> {email}</div>
            </div>
            <p className="text-xs text-slate-400">
              A Google Meet video invitation and calendar invite has been dispatched.
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl hover:bg-cyan-300 transition-colors cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="space-y-4">
            {/* Service selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Primary Discussion Focus *
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
              >
                {CORE_SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
                <option value="General Technical Consultation">General Technical Consultation / Custom Architecture</option>
              </select>
            </div>

            {/* Date selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>Select Date *</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {dates.map((d) => (
                  <button
                    type="button"
                    key={d.date}
                    onClick={() => setSelectedDate(d.date)}
                    className={`p-2 rounded-xl text-center border text-xs transition-colors cursor-pointer ${
                      selectedDate === d.date
                        ? 'bg-slate-800 border-cyan-400 text-cyan-300 font-bold shadow-sm'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div>{d.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slot selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Select Available Time Slot (Global Timezones) *</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-36 overflow-y-auto pr-1">
                {slots.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`p-2 rounded-lg text-left border text-xs transition-colors cursor-pointer ${
                      selectedTime === slot
                        ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300 font-semibold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Client info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Miller"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@company.com"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">WhatsApp / Phone *</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91... or international prefix"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Brief Project Scope / Job Order Notes</label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="What challenges or milestones would you like to discuss on this call?"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
              ></textarea>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-800">
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>NDA Protected Call</span>
              </span>
              <button
                type="submit"
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md shadow-cyan-950/40 cursor-pointer"
              >
                Confirm Appointment
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
