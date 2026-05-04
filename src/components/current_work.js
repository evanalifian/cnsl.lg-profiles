export default async function currentWork() {
  const events = await getAllEvents();

  const pushEvent = events.find((e) => e.type === "PushEvent");

  if (!pushEvent?.repo?.name) {
    return `
      <section class="mb-16">
        <h2 class="text-[10px] tracking-[0.4em] text-zinc-600 uppercase">
          01. Latest_Commit
        </h2>
        <p class="text-zinc-500 text-xs mt-4">
          No push event found.
        </p>
      </section>
    `;
  }

  const repoFullName = pushEvent.repo.name;

  // fetch detail repo (INI KUNCI FIX)
  const repoData = await fetch(
    `https://api.github.com/repos/evanalifian/${repoFullName.slice(12)}`,
  ).then((res) => res.json());

  const description = repoData?.description || "No description available";

  return `
    <!-- SECTION 01: CURRENT_WORK -->
    <section class="mb-16 group">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-[10px] tracking-[0.4em] text-zinc-600 uppercase">
          01. Latest_Commit
        </h2>
        <div class="text-[10px] text-zinc-500 font-bold uppercase tracking-tighter">
          PUSH_VERIFIED
        </div>
      </div>

      <a href="https://github.com/evanalifian/${pushEvent.repo.name.slice(12)}" target="_blank">
        <div class="border border-zinc-900 p-5 group-hover:border-zinc-700 transition-colors bg-[#020202]">
        
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-sm font-bold tracking-widest">
              ${repoData?.full_name || repoFullName}
            </h3>

            <span class="text-[10px] font-mono text-zinc-500">
              ${repoData?.private ? "PRIVATE" : "PUBLIC"}
            </span>
          </div>

          <div class="w-full h-0.5 bg-zinc-900 relative">
            <div class="absolute top-0 left-0 h-full bg-white w-full shadow-[0_0_8px_rgba(255,255,255,0.3)] animate-pulse"></div>
          </div>

          <p class="text-[10px] text-zinc-500 mt-4 leading-normal italic">
            "${description}"
          </p>

        </div>
      </a>
    </section>
  `;
}

async function getAllEvents() {
  const res = await fetch("https://api.github.com/users/evanalifian/events");
  return await res.json();
}
