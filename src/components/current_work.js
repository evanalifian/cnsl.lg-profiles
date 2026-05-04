export default function currentWork() {
  return `
    <!-- SECTION 01: CURRENT_WORK (Focus: Mediva) -->
    <section class="mb-16 group">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-[10px] tracking-[0.4em] text-zinc-600 uppercase">
          01. Latest_Commit
        </h2>
        <div
          class="text-[10px] text-zinc-500 font-bold uppercase tracking-tighter">
          PUSH_VERIFIED
        </div>
      </div>

      <div
        class="border border-zinc-900 p-5 group-hover:border-zinc-700 transition-colors bg-[#020202]">
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-sm font-bold tracking-widest">
            MEDIVA HEALTH SYSTEM
          </h3>
          <span class="text-[10px] font-mono text-zinc-500">ACTIVE</span>
        </div>
        <div class="w-full h-[1px] bg-zinc-900 relative">
          <!-- Progress bar simulasi aktivitas -->
          <div
            class="absolute top-0 left-0 h-full bg-white w-full shadow-[0_0_8px_rgba(255,255,255,0.3)] animate-pulse"></div>
        </div>
        <p class="text-[10px] text-zinc-500 mt-4 leading-normal italic">
          "Implementasi Atomic Design untuk sistem kesehatan modular berbasis
          React dan Tailwind CSS."
        </p>
      </div>
    </section>
  `;
}