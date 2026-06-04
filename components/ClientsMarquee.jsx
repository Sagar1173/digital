const clients = [
  "Alice Receptions", "Alice Conference", "Mr Nepal", "Majjako Deals", "allSKn", "Melung Kitchen",
  "Alice Restaurant", "dERI", "Skyline Restaurant & Bar", "Hotel Eco Home Kathmandu", "S Furniture Hub",
  "Mega Adventures", "House of Eggs", "Gentlemen Words", "Asian International Education",
  "Eco Home Restro & Bar", "Himalaya Queen Bee Resort", "The Car Meet", "Hike for Nepal Holidays",
  "MN Move and Grow Visa", "Navadurga Pashmina", "Nirvik Collection", "lit Education",
];

function Row({ direction = "left", duration = 40 }) {
  const items = [...clients, ...clients];
  return (
    <div className="overflow-hidden marquee-mask">
      <div
        className="flex gap-4 w-max"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
        }}
      >
        {items.map((c, i) => (
          <div
            key={`${c}-${i}`}
            className="shrink-0 border border-background/15 px-8 py-6 min-w-56 flex items-center justify-center hover:bg-accent hover:text-foreground hover:border-accent transition-colors"
          >
            <span className="font-display font-semibold text-base whitespace-nowrap">{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientsMarquee() {
  return (
    <div className="space-y-4">
      <Row direction="left" duration={45} />
      <Row direction="right" duration={55} />
    </div>
  );
}
