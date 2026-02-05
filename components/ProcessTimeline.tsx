export default function ProcessTimeline() {
  const steps = [
    {
      number: "01",
      title: "Share Your Vision",
      description: "Tell me about your dream piece! Send photos, describe colors, and share any inspiration.",
      icon: "💭",
    },
    {
      number: "02",
      title: "Design & Quote",
      description: "I'll create a design concept and provide a quote within 24-48 hours.",
      icon: "✏️",
    },
    {
      number: "03",
      title: "Crafting Magic",
      description: "Once approved, I'll handcraft your piece with love and attention to every detail.",
      icon: "✨",
    },
    {
      number: "04",
      title: "Delivered to You",
      description: "Your treasure arrives beautifully packaged, ready to wear or gift!",
      icon: "🎁",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={step.number} className="text-center relative">
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-gold to-gold/30" />
            )}

            {/* Step circle */}
            <div className="relative z-10 w-16 h-16 mx-auto mb-4 bg-gold rounded-full flex items-center justify-center text-2xl">
              {step.icon}
            </div>

            {/* Content */}
            <div className="text-gold text-sm font-semibold mb-2">
              Step {step.number}
            </div>
            <h3 className="text-cream font-semibold mb-2">{step.title}</h3>
            <p className="text-cream-muted text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
