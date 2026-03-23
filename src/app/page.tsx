"use client";

import Image from "next/image";
import { Share2, Bookmark } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [timeElapsed, setTimeElapsed] = useState("Loading...");

  useEffect(() => {
    const startDate = new Date("2007-03-13T00:00:00");
    const updateTick = () => {
      const now = new Date();
      if (now < startDate) return;
      const diff = now.getTime() - startDate.getTime();
      const totalSeconds = Math.floor(diff / 1000);
      const days = Math.floor(totalSeconds / 86400);
      const years = Math.floor(days / 365.25);
      const remDays = Math.floor(days % 365.25);
      setTimeElapsed(`${years} years, ${remDays} days ago`);
    };
    updateTick();
    const intv = setInterval(updateTick, 1000);
    return () => clearInterval(intv);
  }, []);

  return (
    <main className="w-full bg-white flex-1 flex justify-center py-8">
      <article className="max-w-[800px] w-full px-4">
        <h1 className="font-serif text-[40px] leading-[44px] font-[700] text-[#141414] mb-6 tracking-tight">
          Police Hunt Suspect After Two Bodies Found in Decomposing State Inside Home
        </h1>

        <div className="flex flex-col gap-3 mb-6">
          <div className="flex justify-between items-center text-[13px] text-gray-600">
            <span suppressHydrationWarning>{timeElapsed}</span>
            <div className="flex gap-4">
              <button className="flex items-center gap-1.5 hover:text-black font-semibold transition-colors">
                Share <Share2 size={16} strokeWidth={2} />
              </button>
              <button className="flex items-center gap-1.5 hover:text-black font-semibold transition-colors">
                Save <Bookmark size={16} strokeWidth={2} />
              </button>
            </div>
          </div>
          <div className="text-[14px] font-bold text-[#141414]">Robert Williams</div>
        </div>

        <div className="w-full relative mb-6">
          <img
            src="/crime-scene.jpg"
            alt="Crime scene investigation room"
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[11px] px-1.5 py-0.5">
            PA Media
          </div>
        </div>

        <div className="font-serif text-[18px] leading-[28px] text-[#141414] space-y-5">
          <p>Police are searching for a suspect after the bodies of a man and a woman were found inside a house, where investigators believe they had been lying undiscovered for an extended period.</p>
          <p>The grim discovery was made after residents in the area reported a foul smell coming from the property. Officers were sent to the home to carry out a welfare check and found the two victims inside with apparent stab wounds.</p>
          <p>Authorities said the bodies had begun to decompose, suggesting the victims had been dead for some time before they were found. Forensic teams were seen entering and leaving the property as investigators worked to establish the exact timeline of events.</p>
          <p>The names of the victims have not yet been released, pending formal identification and notification of their next of kin.</p>
          <p>Police have launched a murder investigation and said efforts are under way to trace the person responsible. Detectives are examining evidence from the scene, reviewing any available surveillance footage, and speaking to neighbours as part of their inquiries.</p>
          <p>A police spokesperson said officers were keeping an open mind regarding the circumstances of the killings but confirmed that a suspect was being sought.</p>
          <p>The discovery has shocked local residents, several of whom said they had noticed an unpleasant smell for days but did not initially suspect anything so serious.</p>
          <p>Anyone with information that may assist the investigation has been urged to contact police.</p>
        </div>
      </article>
    </main>
  );
}

