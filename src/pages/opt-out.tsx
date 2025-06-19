// pages/opt-out.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function OptOut() {
  const router = useRouter();
  const { token } = router.query;

  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    if (!token) return;

    // Simulate API call and 45-day countdown
    const optOutDate = new Date(); // replace with actual stored date from API
    optOutDate.setDate(optOutDate.getDate() + 45);
    const now = new Date();
    const diff = Math.max(0, Math.ceil((optOutDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
    setDaysLeft(diff);

    // Call API hook (same as Module 4)
    fetch('/api/award-credit', {
      method: 'POST',
      body: JSON.stringify({ token }),
      headers: { 'Content-Type': 'application/json' },
    });
  }, [token]);

  return (
    <div className="p-4">
      <div dangerouslySetInnerHTML={{ __html: `<script src="https://cdn.alatreeventures.com/raffle-widget.js"></script>` }} />
      {daysLeft !== null ? (
        <p>You will be opted out in {daysLeft} day(s).</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
