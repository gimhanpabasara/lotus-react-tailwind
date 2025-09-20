// LCXOffGridConfigurator.jsx
import React, { useMemo, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {
  Sun, Droplet, Bolt, Mountain, Shield, Leaf,
  Palette, LayoutGrid, Shapes, Ruler, Camera, Wrench, Info, Truck
} from "lucide-react"; // or whatever icon library
import { Button } from "./components/Button";
import { Card } from "./components/Card";
// ... other component imports

// Mock data (colours, packs, floorplans) same as before
const EXTERIOR_COLOURS = [
  { id: "sand", name: "Sand Taupe", swatch: "from-[#CEBDA7] to-[#A6927B]" },
  { id: "white", name: "White", swatch: "from-white to-neutral-200" },
  { id: "dgm", name: "Dark Grey Metallic", swatch: "from-[#4B4E57] to-[#2C2F36]" },
  { id: "silver", name: "Silver Metallic", swatch: "from-[#D9DEE4] to-[#AAB4C2]" },
  { id: "army", name: "Army Green", swatch: "from-[#6B7D59] to-[#3F4B34]" },
  { id: "charcoal", name: "Charcoal Grey", swatch: "from-[#585858] to-[#2B2B2B]" },
];

const CHECKERPLATE = [
  { id: "steel", name: "Steel Pearl", swatch: "from-[#8A8F99] to-[#636973]" },
  { id: "silver", name: "Silver", swatch: "from-[#D7DDE5] to-[#9AA6B2]" },
  { id: "black", name: "Black", swatch: "from-[#222] to-[#000]" },
];

const INTERIOR_PACKS = [
  { id: "lc1", name: "LC Designer 1", notes: "Warm beige + dove cabinetry", price: 0 },
  { id: "lc2", name: "Natural oak + alabaster", price: 950 },
  { id: "lc3", name: "Wood accents + arctic", price: 1150 },
  { id: "lc4", name: "Concrete + carbon matte", price: 1400 },
  { id: "lc5", name: "Slate + dove matte", price: 600 },
  { id: "lc6", name: "Classic oak + gloss", price: 1200 },
  { id: "lc7", name: "Cottonseed + white tile", price: 800 },
];

const FLOORPLANS = [
  { id: "223", label: "22’3” (OG223D/T-LCX)", length: 22.25, berths: 2, slideout: false, img: "/images/floorplan223.png" },
  { id: "235", label: "23’5” (OG235SBD/T-LCX)", length: 23.42, berths: 2, slideout: true, img: "/images/floorplan235.png" },
  { id: "236", label: "23’6” (OG236D/T-LCX)", length: 23.5, berths: 2, slideout: false, img: "/images/floorplan236.png" },
];

const CAPABILITIES = [
  { icon: Mountain, label: "Off-road chassis" },
  { icon: Sun, label: "Solar Array" },
  { icon: Droplet, label: "Twin Fresh Tanks" },
  { icon: Shield, label: "Armoured Cladding" },
  { icon: Leaf, label: "Efficient HVAC" },
];

const BASE_PRICE = 129990;

export default function LCXOffGridConfigurator() {
  const [activeSection, setActiveSection] = useState("exterior"); // 'exterior' | 'interior' | 'floorplans' | 'specs' | 'gallery'
  const [exteriorFront, setExteriorFront] = useState(EXTERIOR_COLOURS[5]);
  const [exteriorSide, setExteriorSide] = useState(EXTERIOR_COLOURS[2]);
  const [checkerplate, setCheckerplate] = useState(CHECKERPLATE[2]);
  const [interiorPack, setInteriorPack] = useState(INTERIOR_PACKS[0]);
  const [floorplan, setFloorplan] = useState(FLOORPLANS[0]);
  const [solar, setSolar] = useState(600);
  const [battery, setBattery] = useState(200);
  const [water, setWater] = useState(190);
  const [airRide, setAirRide] = useState(true);

  const configRef = useRef(null);

  const price = useMemo(() => {
    let extras = 0;
    extras += interiorPack.price;
    if (solar > 600) extras += 1500;
    if (battery > 200) extras += 2200;
    if (airRide) extras += 3500;
    return BASE_PRICE + extras;
  }, [interiorPack, solar, battery, airRide]);

  // Function to download config as PDF
  const handleSaveConfig = async () => {
    if (!configRef.current) return;
    // Use html2canvas to capture the part of the page
    const canvas = await html2canvas(configRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "pt",
      format: [canvas.width, canvas.height]
    });
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("LCX-OffGrid-Config.pdf");
  };

  const fmt = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Sticky Summary Bar */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-700">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-2 md:gap-4">
          <Truck className="w-6 h-6" />
          <div className="flex-1">
            <div className="font-bold">LCX Off-Grid Builder</div>
            <div className="text-sm text-gray-400">
              {floorplan.label} • {exteriorFront.name}/{checkerplate.name} • {interiorPack.name}
            </div>
          </div>
          <div className="text-lg font-semibold">{fmt.format(price)}</div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-4" ref={configRef}>
        {/* Hero Section */}
        <section className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4">
              Power Your Next Escape
            </h1>
            <p className="text-gray-300 mb-6 max-w-2xl">
              Configure your ultimate off-grid LCX caravan. Choose colours, floorplan, interior finishes, and capability to suit your adventure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Card className="flex items-center gap-2 bg-gray-800">
                <Sun className="w-5 h-5 text-yellow-400" /><span>{solar}W Solar</span>
              </Card>
              <Card className="flex items-center gap-2 bg-gray-800">
                <Droplet className="w-5 h-5 text-sky-400" /><span>{water}L Fresh Water</span>
              </Card>
              <Card className="flex items-center gap-2 bg-gray-800">
                <Bolt className="w-5 h-5 text-amber-400" /><span>{battery}Ah Lithium</span>
              </Card>
            </div>
          </motion.div>
          <motion.div
            className="mt-8"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {/* Car & colour preview image or SVG */}
            <div className="w-full aspect-[16/9] bg-gray-700 rounded-2xl overflow-hidden relative">
              {/* Placeholder image */}
              <img
                src="/images/caravan_preview_placeholder.jpg"
                alt="Caravan Preview"
                className="object-cover w-full h-full opacity-80"
              />
              {/* overlay colour filters (for demo) */}
              <div
                className={`absolute inset-0 mix-blend-multiply bg-gradient-to-br ${exteriorFront.swatch}`}
                style={{ opacity: 0.5 }}
              />
            </div>
          </motion.div>
        </section>

        {/* Tabs / Navigation */}
        <div className="flex gap-4 border-b border-gray-700 mb-6">
          {["exterior","interior","floorplans","specs","gallery"].map(section => (
            <button
              key={section}
              className={`py-2 px-4 font-medium ${
                activeSection === section
                  ? "text-emerald-400 border-b-2 border-emerald-400"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Section Content with animation */}
        <AnimatePresence exitBeforeEnter>
          {activeSection === "exterior" && (
            <motion.div
              key="exterior"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Exterior options */}
              <h2 className="text-2xl font-semibold text-emerald-200">Exterior Customization</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm mb-2 text-gray-300">Front & Back Panel Colour</div>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                    {EXTERIOR_COLOURS.map(c => (
                      <div
                        key={c.id}
                        className={`border-2 rounded-lg p-1 cursor-pointer ${
                          exteriorFront.id === c.id
                            ? "border-emerald-400"
                            : "border-gray-600"
                        }`}
                        onClick={() => setExteriorFront(c)}
                      >
                        <div
                          className={`aspect-[7/3] w-full rounded-lg bg-gradient-to-br ${c.swatch}`}
                        ></div>
                        <div className="mt-1 text-xs text-gray-200">{c.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm mb-2 text-gray-300">Checkerplate</div>
                  <div className="grid grid-cols-3 gap-3">
                    {CHECKERPLATE.map(c => (
                      <div
                        key={c.id}
                        className={`border-2 rounded-lg p-1 cursor-pointer ${
                          checkerplate.id === c.id
                            ? "border-emerald-400"
                            : "border-gray-600"
                        }`}
                        onClick={() => setCheckerplate(c)}
                      >
                        <div
                          className={`aspect-[7/3] w-full rounded-lg bg-gradient-to-br ${c.swatch}`}
                        ></div>
                        <div className="mt-1 text-xs text-gray-200">{c.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === "interior" && (
            <motion.div
              key="interior"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold text-emerald-200">Interior Design Packs</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {INTERIOR_PACKS.map(pack => (
                  <div
                    key={pack.id}
                    className={`p-4 rounded-lg cursor-pointer border-2 ${
                      interiorPack.id === pack.id
                        ? "border-emerald-400 bg-gray-700"
                        : "border-gray-600 bg-gray-800 hover:bg-gray-700"
                    }`}
                    onClick={() => setInteriorPack(pack)}
                  >
                    <div className="text-lg font-semibold">{pack.name}</div>
                    <div className="text-sm text-gray-300 mt-1">{pack.notes || ""}</div>
                    <div className="text-sm text-gray-400 mt-2">{pack.price ? `+${fmt.format(pack.price)}` : "Included"}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === "floorplans" && (
            <motion.div
              key="floorplans"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold text-emerald-200">Floorplans</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {FLOORPLANS.map(fp => (
                  <div
                    key={fp.id}
                    className={`border-2 rounded-lg overflow-hidden cursor-pointer ${
                      floorplan.id === fp.id
                        ? "border-emerald-400"
                        : "border-gray-600"
                    }`}
                    onClick={() => setFloorplan(fp)}
                  >
                    <div className="w-full h-48 bg-gray-700">
                      <img
                        src={fp.img}
                        alt={fp.label}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-4 bg-gray-800">
                      <div className="font-semibold">{fp.label}</div>
                      <div className="text-sm text-gray-300">
                        {fp.berths} berth {fp.slideout ? "• Slide-out" : ""}
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-gray-400 text-sm">Length:</span>
                        <span className="font-medium">{fp.length.toFixed(2)} ft</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === "specs" && (
            <motion.div
              key="specs"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold text-emerald-200">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Spec label="External Width" value="~2.5 m" />
                <Spec label="Internal Height" value="~2.0 m" />
                <Spec label="Total Length" value={`${floorplan.length.toFixed(2)} ft`} />
                <Spec label="Chassis" value="Off-road rated" />
                <Spec label="Suspension" value={airRide ? "Air-Ride" : "Twin Shock"} />
                <Spec label="Power System" value={`${battery}Ah + ${solar}W solar`} />
                <Spec label="Water Capacity" value={`${water}L fresh + grey tanks`} />
                <Spec label="Checkerplate Protection" value={checkerplate.name} />
                <Spec label="Interior Finish" value={interiorPack.name} />
              </div>
            </motion.div>
          )}

          {activeSection === "gallery" && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold text-emerald-200">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <div key={idx} className="w-full h-40 bg-gray-700 rounded-lg overflow-hidden">
                    <img
                      src={`/images/gallery_placeholder_${idx+1}.jpg`}
                      alt={`Gallery ${idx+1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Buttons */}
      <div className="max-w-5xl mx-auto p-4 flex gap-4 justify-center">
        <Button
          onClick={handleSaveConfig}
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg"
        >
          Save Config
        </Button>
        <Button
          onClick={() => {
            window.location.href = "/contact-us";
          }}
          className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg"
        >
          Talk to an Expert
        </Button>
      </div>
    </div>
  );
}

// Sub-components
function Spec({ label, value }) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
      <div className="text-gray-400 text-sm">{label}</div>
      <div className="mt-2 font-semibold">{value}</div>
    </div>
  );
}
