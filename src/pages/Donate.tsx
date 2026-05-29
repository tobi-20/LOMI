import { useState } from 'react';

const accountDetails = {
  bankName: 'GTBank (Guaranty Trust Bank)',
  accountNumber: '0722029698',
  accountName: "Lawrence Oluwadare Ministry Int'l",
};

const suggestedAmounts = ['5,000', '10,000', '25,000', '50,000', '100,000'];

export default function Donate() {
  const [copied, setCopied] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(accountDetails.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (confirmed) {
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
            We've received your notification. Your gift is making a real
            difference to families across Nigeria. We'll be in touch shortly.
          </p>
          <button
            onClick={() => {
              setConfirmed(false);
              setName('');
              setEmail('');
              setAmount('');
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
    <main className="bg-[#F9F7F4] min-h-screen py-16 px-4">
      <div className="max-w-2xl mx-auto flex flex-col gap-10">
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

        {/* Step 1 — Pick Amount */}
        <div className="bg-white border border-[#1B3A6B]/10 rounded-sm p-8 flex flex-col gap-5 shadow-sm">
          <h2 className="text-[#1B3A6B] font-semibold text-lg">
            Step 1 — Choose an Amount
          </h2>

          <div className="flex flex-wrap gap-3">
            {suggestedAmounts.map((a) => (
              <button
                key={a}
                onClick={() => {
                  setAmount(a);
                  setCustomAmount(false);
                }}
                className={`px-5 py-2.5 rounded-sm border font-semibold text-sm transition-colors duration-200 ${
                  amount === a && !customAmount
                    ? 'bg-[#1B3A6B] text-white border-[#1B3A6B]'
                    : 'border-[#1B3A6B]/30 text-[#1B3A6B] hover:border-[#1B3A6B]'
                }`}
              >
                ₦{a}
              </button>
            ))}
            <button
              onClick={() => {
                setCustomAmount(true);
                setAmount('');
              }}
              className={`px-5 py-2.5 rounded-sm border font-semibold text-sm transition-colors duration-200 ${
                customAmount
                  ? 'bg-[#1B3A6B] text-white border-[#1B3A6B]'
                  : 'border-[#1B3A6B]/30 text-[#1B3A6B] hover:border-[#1B3A6B]'
              }`}
            >
              Custom
            </button>
          </div>

          {customAmount && (
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40 text-sm">
                ₦
              </span>
              <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border border-[#1B3A6B]/20 rounded-sm pl-8 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#1B3A6B] transition-colors bg-white"
              />
            </div>
          )}
        </div>

        {/* Step 2 — Account Details */}
        <div className="bg-white border border-[#1B3A6B]/10 rounded-sm p-8 flex flex-col gap-5 shadow-sm">
          <h2 className="text-[#1B3A6B] font-semibold text-lg">
            Step 2 — Transfer to This Account
          </h2>

          <div className="bg-[#F9F7F4] rounded-sm p-6 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-[#1A1A1A]/40 text-xs font-semibold uppercase tracking-widest">
                Bank
              </span>
              <span className="text-[#1B3A6B] font-semibold text-base">
                {accountDetails.bankName}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#1A1A1A]/40 text-xs font-semibold uppercase tracking-widest">
                Account Name
              </span>
              <span className="text-[#1B3A6B] font-semibold text-base">
                {accountDetails.accountName}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#1A1A1A]/40 text-xs font-semibold uppercase tracking-widest">
                Account Number
              </span>
              <div className="flex items-center gap-3">
                <span className="text-[#1B3A6B] font-bold text-2xl tracking-widest">
                  {accountDetails.accountNumber}
                </span>
                <button
                  onClick={handleCopy}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-sm border transition-colors duration-200 ${
                    copied
                      ? 'bg-green-50 border-green-300 text-green-600'
                      : 'border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-white'
                  }`}
                >
                  {copied ? '✓ Copied' : 'Copy'}
                </button>
              </div>
            </div>
          </div>

          <p className="text-[#1A1A1A]/50 text-xs">
            Use your name as the transfer narration so we can identify your
            gift.
          </p>
        </div>

        {/* Step 3 — Confirm */}
        <div className="bg-white border border-[#1B3A6B]/10 rounded-sm p-8 flex flex-col gap-5 shadow-sm">
          <h2 className="text-[#1B3A6B] font-semibold text-lg">
            Step 3 — Let Us Know You Gave
          </h2>
          <p className="text-[#1A1A1A]/60 text-sm">
            After transferring, fill this in so we can acknowledge your gift and
            keep you updated on the impact.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[#1A1A1A] text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-[#1B3A6B]/20 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B3A6B] transition-colors bg-white"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[#1A1A1A] text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-[#1B3A6B]/20 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B3A6B] transition-colors bg-white"
              />
            </div>
          </div>

          <button
            onClick={() => {
              if (name && email) setConfirmed(true);
            }}
            disabled={!name || !email}
            className="bg-[#C9A84C] hover:bg-[#b8933d] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-sm transition-colors duration-200 text-base mt-2"
          >
            I've Made This Transfer
          </button>
        </div>
      </div>
    </main>
  );
}
