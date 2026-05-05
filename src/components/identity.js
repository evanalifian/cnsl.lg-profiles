export default function identity() {
  return `
    <header class="mb-20">
      <div class="flex items-center justify-between mb-8">
        <div class="text-[10px] tracking-[0.4em] text-zinc-600">
          ID // 0101
        </div>
        <div class="h-px bg-zinc-900 flex-1 ml-4"></div>
      </div>

      <div class="flex items-end gap-4 mb-6">
        <div
          class="w-14 h-14 bg-zinc-900 grayscale border border-zinc-800 shrink-0 overflow-hidden">
          <img
            src="/evan-nobg.png"
            alt="Profile"
            class="w-full h-full object-cover opacity-80" />
        </div>
        <div>
          <h1 class="text-3xl font-bold tracking-tighter leading-none">
            Evan Alifian
          </h1>
          <p class="text-zinc-500 text-[10px] tracking-widest mt-1">
            @cnsl.lg
          </p>
        </div>
      </div>

      <p class="text-zinc-400 text-xs leading-relaxed max-w-[320px]">
        Web Developer currently diving deep into
        <span class="text-zinc-200">Text Preprocessing</span> using
        <span class="text-zinc-200">Python</span>. Focused on transforming 
        raw textual data into structured assets for information and retrieval systems.
      </p>
    </header>
  `;
}
