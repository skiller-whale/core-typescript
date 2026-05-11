type Whale = {
  name: string;
  species: string;
  weightInKg: number;
  likesToEat: string;
};

function whaleGreeting(whale: Whale): string {
  const intro = `Hi, I'm ${whale.name}.`;
  const description =
    "weightInKg" in whale
      ? `I'm a ${whale.weightInKg}kg ${whale.species}.`
      : `I'm a ${whale.species}.`;
  const diet =
    "likesToEat" in whale ? `I like to eat ${whale.likesToEat}.` : "";

  return [intro, description, diet].filter((part) => part !== "").join(" ");
}

type RegistrationOptions = {
  sendWelcomePack: boolean;
  notifySubscribers: boolean;
};

function registerWhale(whale: Whale, overrides: RegistrationOptions = {}) {
  const options: RegistrationOptions = {
    sendWelcomePack: true,
    notifySubscribers: false,
    ...overrides,
  };

  console.log(`Registering whale: ${whale.name}`);
  if (options.sendWelcomePack) {
    console.log(`Sending welcome pack to ${whale.name}`);
  }
  if (options.notifySubscribers) {
    console.log("Sending following notification to subscribers:");
    console.log(`New whale registered: ${whaleGreeting(whale)}`);
  }
  console.log("");
}

registerWhale(
  {
    name: "Ada Loveplaice",
    species: "Skiller Whale",
    weightInKg: undefined,
    likesToEat: "knowledge",
  },
  { notifySubscribers: true },
);
registerWhale(
  {
    name: "Charles Barbage",
    species: "Narwhal",
    weightInKg: 4712,
    likesToEat: undefined,
  },
  { sendWelcomePack: false },
);
registerWhale({
  name: "Michael Fara-ray",
  species: "Humpback Whale",
  weightInKg: 27500,
  likesToEat: "little and often",
});
