export default function archive() {
  return `
    <!-- SECTION 02: ARCHIVES & EXTERNAL -->
    <section class="mb-16">
        <h2 class="text-[10px] tracking-[0.4em] text-zinc-600 uppercase mb-4">02. Archives</h2>
        
        <!-- Link Portfolio Utama -->
        <a href="https://evanalifian.vercel.app" target="_blank" class="group block border-b border-zinc-900 py-4 hover:border-zinc-400 transition-all">
            <div class="flex justify-between items-center">
                <div class="flex flex-col">
                    <span class="text-sm tracking-tight text-zinc-300 group-hover:text-white uppercase font-bold">Main_Portfolio</span>
                    <span class="text-[9px] text-zinc-600 mt-1">evanalifian.vercel.app</span>
                </div>
                <span class="text-[10px] text-zinc-700 group-hover:text-white group-hover:translate-x-1 transition-all italic">LINK_EXTERNAL ↗</span>
            </div>
        </a>

        <!-- Link CV -->
        <a href="#" class="group block border-b border-zinc-900 py-4 hover:border-zinc-400 transition-all">
            <div class="flex justify-between items-center">
                <span class="text-sm tracking-tight text-zinc-300 group-hover:text-white uppercase font-bold">Curriculum_Vitae.pdf</span>
                <span class="text-[10px] text-zinc-700 group-hover:text-white group-hover:translate-x-1 transition-all">→ FETCH</span>
            </div>
        </a>
    </section>
  `;
}