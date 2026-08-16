/**
 * Central data source for the presentation.
 * Every hotspot references an image file under assets/images/.
 * If a file is missing, the UI falls back to an elegant placeholder —
 * drop the correctly named file in and it appears automatically, no code changes needed.
 */

const VEHICLE = {
  name: "BMW X6 E71",
  tagline: "Dream Build Projekt",
};

const SPECS = [
  "BMW X6 30d",
  "Allradantrieb",
  "245 PS",
  "Stage 1 (308 PS)",
  "Sitzheizung",
  "Sitzbelüftung",
  "Massagesitze",
  "Memory Funktion",
  "Braunes Leder Interior",
  "Keyless Entry / Keyless Go",
  "Head-Up Display",
  "Abstandstempomat (ACC)",
  "PDC Vorn / Hinten",
  "360° Kamera",
  "Rückfahrkamera",
  "Sternenhimmel",
];

/**
 * section: "front" | "rear" | "interior"
 * x / y: position in percent, relative to the view container
 * image: expected filename inside assets/images/
 */
const HOTSPOTS = [
  // ---------------- EXTERIOR — FRONT ----------------
  {
    id: "wrap",
    section: "front",
    x: 50,
    y: 58,
    title: "FOLIERUNG",
    subtitle: "Farbe: Blau",
    description:
      "Vollfolierung der Karosserie in Blau. Die Farbe gilt für das gesamte Fahrzeug, Front bis Heck.",
    image: "ref-wrap-blue.jpg",
    specs: ["Farbe: Blau", "Umfang: Vollfolierung"],
  },
  {
    id: "headlights",
    section: "front",
    x: 23,
    y: 40,
    title: "HEADLIGHTS",
    subtitle: "Geplante Scheinwerfer",
    description: "Geplante Scheinwerfer für den Umbau, siehe Referenzbild.",
    image: "ref-headlights.jpg",
  },
  {
    id: "acc-sensor",
    section: "front",
    x: 50,
    y: 50,
    title: "ABSTANDSTEMPOMAT (ACC)",
    subtitle: "ACC Sensor",
    description: "Sensor für den Abstandstempomat (ACC), verbaut im Frontbereich.",
    image: "ref-acc-sensor.jpg",
  },
  {
    id: "front-lip",
    section: "front",
    x: 50,
    y: 86,
    title: "FRONT LIP",
    subtitle: "Geplante Front Lip",
    description: "Geplante Front Lip für die Front des Fahrzeugs.",
    image: "ref-front-lip.jpg",
  },

  // ---------------- EXTERIOR — REAR ----------------
  {
    id: "taillights",
    section: "rear",
    x: 77,
    y: 38,
    title: "TAILLIGHTS",
    subtitle: "Geplante Rückleuchten",
    description: "Geplante Rückleuchten für den Umbau, siehe Referenzbild.",
    image: "ref-taillights.jpg",
  },
  {
    id: "rear-lip",
    section: "rear",
    x: 50,
    y: 86,
    title: "REAR LIP",
    subtitle: "Geplante Rear Lip",
    description: "Geplante Rear Lip für das Heck des Fahrzeugs.",
    image: "ref-rear-lip.jpg",
  },

  // ---------------- INTERIOR ----------------
  {
    id: "seats",
    section: "interior",
    x: 78,
    y: 78,
    title: "BRAUNES LEDER INTERIOR",
    subtitle: "Sitzheizung · Sitzbelüftung · Massagesitze · Memory Funktion",
    description:
      "Braunes Leder Interior mit Sitzheizung, Sitzbelüftung, Massagesitzen und Memory Funktion.",
    image: "ref-seats.jpg",
    specs: ["Sitzheizung", "Sitzbelüftung", "Massagesitze", "Memory Funktion"],
  },
  {
    id: "steering-wheel",
    section: "interior",
    x: 32,
    y: 72,
    title: "LENKRAD",
    subtitle: "Braunes Leder / passend zum Interior",
    description: "Lenkrad in braunem Leder, passend zum restlichen Interieur.",
    image: "ref-steering-wheel.jpg",
  },
  {
    id: "digital-cluster",
    section: "interior",
    x: 38,
    y: 58,
    title: "DIGITAL CLUSTER",
    subtitle: "",
    description: "Digitales Kombiinstrument (Digital Cluster).",
    image: "ref-digital-cluster.jpg",
  },
  {
    id: "dual-multimedia",
    section: "interior",
    x: 56,
    y: 44,
    title: "DUAL MULTIMEDIA DISPLAY",
    subtitle: "",
    description: "Dual Multimedia Display im Cockpit.",
    image: "ref-dual-multimedia.jpg",
  },
  {
    id: "digital-ac-panel",
    section: "interior",
    x: 56,
    y: 63,
    title: "DIGITAL AC PANEL",
    subtitle: "",
    description: "Digitales Klimabedienteil (Digital AC Panel).",
    image: "ref-digital-ac-panel.jpg",
  },
  {
    id: "head-up-display",
    section: "interior",
    x: 30,
    y: 44,
    title: "HEAD-UP DISPLAY",
    subtitle: "",
    description: "Head-Up Display, Einblendung relevanter Fahrdaten in der Windschutzscheibe.",
    image: "ref-head-up-display.jpg",
  },
  {
    id: "starlight-headliner",
    section: "interior",
    x: 50,
    y: 12,
    title: "STERNENHIMMEL",
    subtitle: "",
    description: "Starlight Headliner / Sternenhimmel im Dachhimmel.",
    image: "ref-starlight-headliner.jpg",
  },
];

const KEY_INFO = {
  title: "DISPLAY KEY",
  subtitle: "BMW Display Key",
  description: "BMW Display Key mit Statusanzeige.",
  image: "ref-key.jpg",
};
