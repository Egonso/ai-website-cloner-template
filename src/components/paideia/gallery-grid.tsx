"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import type { GalleryCollection } from "@/types/paideia";

export function GalleryGrid({
  collection,
}: {
  collection: GalleryCollection;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem =
    activeIndex === null ? null : collection.items[activeIndex] ?? null;

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {collection.items.map((item, index) => (
          <motion.button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="group overflow-hidden rounded-[1.75rem] border border-black/6 bg-white text-left shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
          >
            <div className="relative aspect-[0.88] overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="space-y-2 px-4 py-4">
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[color:var(--paideia-red)]">
                Bild {index + 1}
              </p>
              <p className="text-sm leading-6 text-[color:var(--paideia-ink)]/76">
                {item.caption}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[rgba(6,10,18,0.84)] p-4 backdrop-blur-md"
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto flex h-full max-w-6xl flex-col justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="mb-4 ml-auto rounded-full border border-white/18 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/82"
              >
                Schliessen
              </button>
              <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
                <div className="relative min-h-[55vh] overflow-hidden rounded-[2rem] bg-white/6">
                  <Image
                    src={activeItem.src}
                    alt={activeItem.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex items-end rounded-[2rem] border border-white/10 bg-white/6 p-6 text-white">
                  <div className="space-y-3">
                    <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/52">
                      {collection.title}
                    </p>
                    <p className="text-2xl font-medium">{activeItem.caption}</p>
                    <p className="text-sm leading-7 text-white/72">
                      {activeItem.alt}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
