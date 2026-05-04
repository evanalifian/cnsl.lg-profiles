export default function footer() {
  const now = new Date();
  const currentHour = now.getHours();
  const currentYear = now.getFullYear();

  // Logika Status: STANDBY jika di atas jam 10 malam (22) atau sebelum jam 5 pagi
  const status =
    currentHour >= 22 || currentHour < 5
      ? "STANDBY / NIGHT_MODE"
      : "OPERATIONAL";

  return `
    <!-- FOOTER -->
    <footer class="pt-8 border-t border-zinc-900">
      <div
        class="flex justify-between items-center text-[9px] text-zinc-700 tracking-[0.2em]">
        <span>STATUS: ${status}</span>
        <span>© ${currentYear} // EVAN ALIFIAN</span>
      </div>
    </footer>
  `;
}
