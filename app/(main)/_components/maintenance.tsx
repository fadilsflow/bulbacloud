"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function Maintenance() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [email, setEmail] = useState("");

  useEffect(() => {
    const targetDate = new Date("2025-03-31T23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi email sederhana
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Simulasi pengiriman email ke backend
    console.log("Submitted email:", email);
    toast.success("You have been subscribed!", {
      description: "We will notify you when we launch.",
      action: {
        label: "Undo",
        onClick: () => {
          console.log("Undo subscription");
          // Logika untuk membatalkan langganan
        },
      },
    });

    setEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
      <main className="text-center space-y-10 max-w-2xl animate-fade-in">
        <h1 className="text-5xl font-bold mb-6">We&apos;re Coming Soon</h1>
        <p className="text-xl text-muted-foreground mb-10">
          Our website is under construction. We&apos;ll be here soon with our
          new awesome site. Subscribe to be notified!
        </p>

        {/* Countdown Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="bg-muted/50 backdrop-blur-sm border border-muted-foreground/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl font-bold mb-3 text-foreground">
                {value.toString().padStart(2, "0")}
              </div>
              <div className="text-sm uppercase text-muted-foreground tracking-wider">
                {unit}
              </div>
            </div>
          ))}
        </div>

        {/* Subscription Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 mt-12 w-full max-w-md mx-auto"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow px-6 py-3 rounded-xl border border-muted-foreground/20 focus:ring-2 focus:ring-foreground focus:ring-offset-2 transition-all"
          />
          <Button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-colors"
          >
            Notify Me
          </Button>
        </form>
      </main>
    </div>
  );
}
