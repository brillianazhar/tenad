import AppShell from "@/components/Layout/AppShell";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps, router }) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <AppShell>
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.route} />
        <Analytics />
      </AnimatePresence>
    </AppShell>
  );
}
