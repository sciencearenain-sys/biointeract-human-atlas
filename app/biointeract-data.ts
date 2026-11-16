// app/biointeract-data.ts
// Medical Device, Drug Interaction, Toxicology, and Immune Reaction Database
// Mapped to BodyParts3D FMA (Foundational Model of Anatomy) Concept IDs

export interface BioInteractProfile {
  name: string;
  fmaId: string;
  system: string;
  devices: string[];
  drugs: string[];
  toxicology: string[];
  immune: string[];
}

export const BIOINTERACT_DATABASE: Record<string, BioInteractProfile> = {
  // HEART & CORONARY VASCULATURE
  "FMA:7088": {
    name: "Heart & Coronary Vasculature",
    fmaId: "FMA:7088",
    system: "Cardiovascular",
    devices: [
      "Drug-Eluting Stents (DES) & Bioresorbable Vascular Scaffolds (BVS)",
      "Transcatheter Aortic Valve Replacements (TAVR)",
      "Implantable Cardioverter-Defibrillator (ICD) & Pacemaker Leads",
      "Left Ventricular Assist Devices (LVAD)"
    ],
    drugs: [
      "Local antiproliferative elution (Sirolimus, Everolimus, Zotarolimus)",
      "Systemic dual antiplatelet therapy (Aspirin, Clopidogrel, Ticagrelor)",
      "Antiarrhythmics altering electrical pacing and sensing thresholds"
    ],
    toxicology: [
      "Heavy metal ion leaching (Cobalt, Chromium, Nickel from Nitinol and MP35N alloys)",
      "Durable polymer coating microparticulates (PLGA, PVDF-HFP) causing endothelial apoptosis",
      "High shear stress driving mechanical erythrocyte lysis (hemolysis)"
    ],
    immune: [
      "Immediate plasma protein adsorption (fibrinogen, vitronectin) within seconds",
      "Monocyte adhesion and fusion into Foreign Body Giant Cells (FBGCs)",
      "Smooth muscle cell proliferation inducing neointimal hyperplasia (in-stent restenosis)"
    ]
  },

  // BRAIN & CEREBRAL CORTEX
  "FMA:50801": {
    name: "Brain & Cerebral Cortex",
    fmaId: "FMA:50801",
    system: "Nervous",
    devices: [
      "Deep Brain Stimulation (DBS) Electrodes (Platinum/Iridium)",
      "Endovascular Flow Diverters & Platinum Aneurysm Coils",
      "Ventriculoperitoneal (VP) Shunts (Silicone elastomer)",
      "Cortical Neural Interfaces (BCIs) & Micro-ECoG Grids"
    ],
    drugs: [
      "Osmotic Blood-Brain Barrier (BBB) modulators (Mannitol)",
      "Antiepileptic medications altering neuronal excitability and charge injection limits",
      "Intrathecal drug delivery formulations (Baclofen, Opioids)"
    ],
    toxicology: [
      "Microglial neurotoxicity from trace metal dissolution (Platinum, Silver)",
      "Silicone oligomer migration triggering chemical aseptic meningitis in VP shunts",
      "Radiofrequency thermal rise during MRI scans provoking localized neuronal apoptosis"
    ],
    immune: [
      "Microglial activation (CD68+ phenotype) within hours of tissue penetration",
      "Dense reactive astrogliosis creating a glial scar (GFAP accumulation) within 14-28 days",
      "Progressive bio-impedance elevation diminishing signal-to-noise recording ratio"
    ]
  },

  // LUNGS & TRACHEOBRONCHIAL TREE
  "FMA:7195": {
    name: "Lungs & Tracheobronchial Tree",
    fmaId: "FMA:7195",
    system: "Respiratory",
    devices: [
      "Endotracheal Tubes (PVC) & Tracheostomy Cannulas",
      "Tracheobronchial Stents (Self-expanding Nitinol, Silicone)",
      "Pulmonary Artery Swan-Ganz Catheters",
      "Dry Powder Inhalers (DPIs) & Vibrating Mesh Nebulizers"
    ],
    drugs: [
      "Inhaled corticosteroids (Fluticasone, Budesonide) reducing mucosal granulation",
      "Pulmonary surfactant alterations modifying aerosol deposition mechanics",
      "Mucolytics (N-acetylcysteine) altering polymeric degradation rates"
    ],
    toxicology: [
      "DEHP/phthalate plasticizer leaching from PVC respiratory tubing",
      "Nanoparticle and microplastic aerosolization from vibrating mesh nebulizers",
      "Endotoxin and biofilm contamination triggering acute chemical pneumonitis"
    ],
    immune: [
      "Alveolar macrophage engulfment of synthetic degradation debris",
      "Hyperplastic granulation tissue overgrowth causing airway re-stenosis",
      "Neutrophil extracellular trap (NET) formation along tracheal biofilms"
    ]
  },

  // LIVER & HEPATIC PORTAL SYSTEM
  "FMA:7197": {
    name: "Liver & Hepatic Portal System",
    fmaId: "FMA:7197",
    system: "Gastrointestinal",
    devices: [
      "TIPS Endoprostheses (Transjugular Intrahepatic Portosystemic Shunt)",
      "Biliary Stents (Polyethylene & Covered Metallic Stents)",
      "Chemoembolization (TACE) Microcatheters and Microspheres",
      "Radiofrequency Hepatic Tumor Ablation Antennas"
    ],
    drugs: [
      "Altered first-pass CYP450 metabolism due to hemodynamic portosystemic shunting",
      "Localized release of Doxorubicin from drug-eluting beads (DEB-TACE)",
      "Bile acid interactions accelerating polymer ester hydrolysis"
    ],
    toxicology: [
      "Biliary sludge and calcium bilirubinate salt encrustation",
      "Kupffer cell toxicity from leachable polymerization curing agents",
      "Barium sulfate radiopaque additive parenchymal leakage"
    ],
    immune: [
      "Kupffer cell (hepatic macrophage) phagocytic entrapment of microspheres",
      "Enteric bacterial biofilm colonization from duodenal reflux blocking stent flow",
      "Hepatic stellate cell transdifferentiation driving localized peridevice fibrosis"
    ]
  },

  // KIDNEYS & URINARY TRACT
  "FMA:7203": {
    name: "Kidneys & Urinary Tract",
    fmaId: "FMA:7203",
    system: "Renal",
    devices: [
      "Ureteral Double-J Stents (Polyurethane, Silicone, Hydrogel-coated)",
      "Hemodialysis Dialyzer Cartridges (Polysulfone, PES membranes)",
      "Tunneled Cuffed Central Venous Dialysis Catheters",
      "Percutaneous Nephrostomy Tubes"
    ],
    drugs: [
      "Nephrotoxic synergy with aminoglycosides or NSAIDs near contact mucosa",
      "Antimicrobial / Heparin coatings preventing catheter luminal occlusion",
      "Urinary pH modulators preventing hydroxyapatite and struvite precipitation"
    ],
    toxicology: [
      "Bisphenol A (BPA) and solvent extraction from dialyzer potting resins",
      "Ethylene oxide sterilization residuals triggering hypersensitivity reactions",
      "Oxidative stress generated across bioincompatible membrane interfaces"
    ],
    immune: [
      "Complement alternative pathway activation (C3a, C5a) on hemodialysis membranes",
      "Urothelial hyperplasia and polypoid inflammatory reactions at stent pigtails",
      "Bacterial urease-driven encrustation and persistent urinary biofilm formation"
    ]
  },

  // GASTROINTESTINAL TRACT
  "FMA:71132": {
    name: "Gastrointestinal Tract & Stomach",
    fmaId: "FMA:71132",
    system: "Gastrointestinal",
    devices: [
      "Percutaneous Endoscopic Gastrostomy (PEG) Tubes",
      "Esophageal & Colonic Self-Expanding Metal Stents (SEMS)",
      "Ingestible Wireless Diagnostic Capsule Endoscopes",
      "Intragastric Bariatric Balloons"
    ],
    drugs: [
      "Gastric acid suppression (PPIs) altering drug-polymer dissolution kinetics",
      "Site-targeted enteric release coats (Eudragit polymers)",
      "Systemic antineoplastics exacerbating mucosal ulceration at stent margins"
    ],
    toxicology: [
      "Gastric pepsin and acid hydrolysis degrading elastomer valve membranes",
      "Battery leakage risks (Lithium chemistry) in trapped endoscopic capsules",
      "Mechanical pressure ischemia predisposing to hollow viscous perforation"
    ],
    immune: [
      "Acute mucosal erosive inflammation with heavy polymorphonuclear neutrophil infiltration",
      "Tissue ingrowth through uncovered wire meshes causing stent entrapment",
      "Stoma site foreign-body granuloma formation around gastrostomy bolsters"
    ]
  },

  // BONES & FEMUR
  "FMA:30315": {
    name: "Femur, Hip & Orthopedic Skeleton",
    fmaId: "FMA:30315",
    system: "Musculoskeletal",
    devices: [
      "Total Hip & Knee Replacements (Ti6Al4V, CoCrMo, UHMWPE)",
      "Intramedullary Nails, Bone Plates, and Cortical Screws",
      "Bioabsorbable Interference Screws (PLLA, PLGA, Magnesium alloys)",
      "Antibiotic-Impregnated PMMA Bone Cement"
    ],
    drugs: [
      "Bisphosphonates and Teriparatide altering peri-implant osseointegration",
      "Local high-dose elution of Vancomycin/Gentamicin from cement spacers",
      "Chronic corticosteroid therapy impairing primary mechanical bone anchorage"
    ],
    toxicology: [
      "Metallosis: Cobalt and Chromium systemic toxicity with local pseudotumors",
      "Exothermic heat necrosis (up to 80°C) during PMMA cement curing",
      "Submicron UHMWPE wear debris accumulation"
    ],
    immune: [
      "Macrophage phagocytosis of wear particles stimulating IL-1, TNF-alpha, and RANKL",
      "Osteoclastic bone resorption driving aseptic implant loosening",
      "Type IV delayed hypersensitivity to nickel, cobalt, and chrome components"
    ]
  },

  // VASCULAR SYSTEM
  "FMA:86849": {
    name: "Major Vascular System (Aorta & Peripheral Vessels)",
    fmaId: "FMA:86849",
    system: "Cardiovascular",
    devices: [
      "Aortic Endovascular Stent-Grafts (EVAR / TEVAR - Dacron/ePTFE)",
      "Central Venous Catheters (CVC) & PICC Lines",
      "Inferior Vena Cava (IVC) Retrievable Filters",
      "Arteriovenous (AV) Fistula Grafts for Hemodialysis"
    ],
    drugs: [
      "Dual antiplatelet therapy (DAPT) maintaining endovascular lumen patency",
      "Catheter-directed thrombolysis (Alteplase, recombinant tPA)",
      "Chlorhexidine/Silver antimicrobial coatings preventing bloodstream infections"
    ],
    toxicology: [
      "Contact phase activation of intrinsic coagulation factor XII (Hageman factor)",
      "Plasticizer leaching (DEHP) leading to downstream endothelial dysfunction",
      "Flow disruption triggering localized high-shear thrombus shedding"
    ],
    immune: [
      "Virchow's triad cascade: foreign artificial surface + wall injury + altered shear",
      "Fibroepithelial sleeve formation enveloping indwelling catheter lines",
      "Transmural macrophage invasion into porous synthetic graft textiles"
    ]
  }
};
