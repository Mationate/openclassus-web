import React, { useState } from 'react';
import toast from 'react-hot-toast';

export const Hero = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });
      toast.success("Se envió un correo")

      if (!response.ok) {
        toast.error("Error");
      }

      setSuccess(true);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="h-screen w-full overflow-hidden bg-[url(https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop)] bg-cover bg-top bg-no-repeat"
    >
      <div className="h-full flex justify-center items-center bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-left">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Latest Shirts</h2>

          <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi
            doloribus iure architecto quae voluptatum beatae excepturi dolores.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none"
            />
            <textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="inline-block w-full rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {success && <p className="text-green-500">Message sent successfully!</p>}
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};
