import { useState } from 'react';
import { usePaystackPayment } from 'react-paystack';

type Currency = 'NGN' | 'USD';

interface PaystackConfig {
  reference: string;
  email: string;
  amount: number;
  publicKey: string;
  currency: Currency;
}

export default function Donate() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState<Currency>('NGN');
  const [success, setSuccess] = useState(false);

  const config: PaystackConfig = {
    reference: `lomi_${new Date().getTime()}`,
    email,
    amount: Math.round(parseFloat(amount) * 100), // Paystack expects kobo
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    currency,
  };

  const initializePayment = usePaystackPayment(config);

  const handleDonate = () => {
    if (!email || !amount || parseFloat(amount) <= 0) return;

    initializePayment({
      onSuccess: () => setSuccess(true),
      onClose: () => {},
    });
  };

  if (success) {
    return (
      <section className="bg-[#F9F7F4] min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white border border-[#1B3A6B]/10 rounded-sm p-10 flex flex-col items-center text-center gap-5 shadow-sm">
          <span className="text-5xl">🙏</span>
          <h2
            className="text-[#1B3A6B] text-2xl font-bold"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Thank You, {name || 'Donor'}
          </h2>
          <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">
            Your gift has been received. You are directly impacting lives across
            Nigeria through food relief, medical outreach, and care for widows
            and orphans.
          </p>
          <button
            onClick={() => {
              setSuccess(false);
              setAmount('');
              setEmail('');
              setName('');
            }}
            className="text-[#C9A84C] text-sm font-semibold hover:underline"
          >
            Give Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F9F7F4] min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full flex flex-col gap-8">
        {/* Header */}
        <div className="text-center flex flex-col gap-2">
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
            Give Today
          </span>
          <h1
            className="text-[#1B3A6B] text-3xl font-bold"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Support the Work
          </h1>
          <p className="text-[#1A1A1A]/60 text-sm">
            Give what you can. Every naira makes a real difference.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white border border-[#1B3A6B]/10 rounded-sm p-8 flex flex-col gap-5 shadow-sm">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[#1A1A1A] text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-[#1B3A6B]/20 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B3A6B] transition-colors"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[#1A1A1A] text-sm font-medium">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-[#1B3A6B]/20 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B3A6B] transition-colors"
            />
          </div>

          {/* Currency Toggle */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[#1A1A1A] text-sm font-medium">
              Currency
            </label>
            <div className="flex gap-3">
              {(['NGN', 'USD'] as Currency[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`flex-1 py-2.5 text-sm font-semibold rounded-sm border transition-colors duration-200 ${
                    currency === c
                      ? 'bg-[#1B3A6B] text-white border-[#1B3A6B]'
                      : 'bg-white text-[#1B3A6B] border-[#1B3A6B]/30 hover:border-[#1B3A6B]'
                  }`}
                >
                  {c === 'NGN' ? '🇳🇬 NGN' : '🇺🇸 USD'}
                </button>
              ))}
            </div>
          </div>

          {/* Amount */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[#1A1A1A] text-sm font-medium">
              Amount <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40 text-sm">
                {currency === 'NGN' ? '₦' : '$'}
              </span>
              <input
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border border-[#1B3A6B]/20 rounded-sm pl-8 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#1B3A6B] transition-colors"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleDonate}
            disabled={!email || !amount || parseFloat(amount) <= 0}
            className="bg-[#C9A84C] hover:bg-[#b8933d] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-sm transition-colors duration-200 text-base mt-2"
          >
            Donate Now
          </button>

          <p className="text-[#1A1A1A]/30 text-xs text-center">
            Secured by Paystack · Your details are safe
          </p>
        </div>
      </div>
    </section>
  );
}
