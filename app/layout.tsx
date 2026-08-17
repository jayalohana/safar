import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Safar — Music for the road between places",
  description: "A Pakistani road journey carried by music.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {/*
          THESIS: The interface stays still while the Pakistani road journey changes around it; this refuses a library-first music app.
          OWN-WORLD: Midnight asphalt, warm brass, cream lettering, restrained truck ornament, and translucent smoked controls.
          STORY: Arrive, press play, choose a route, and watch listening time become an atmospheric journey.
          FIRST VIEWPORT: Floating routes left, small lockup above, dominant سفر centered, player low and wide, motorway scene behind everything.
          FORM: Pinned reference composition; seed key SAFAR-REFERENCE-2026.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
        */}
        <span className="sr-only" data-design-contract="SAFAR-REFERENCE-2026">Safar design contract</span>
        {children}
      </body>
    </html>
  );
}
