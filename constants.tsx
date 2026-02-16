
import { Product, Testimonial } from './types';

export const WHATSAPP_NUMBER = "0505648365";

export const CATEGORIES = [
  { name: 'Theatre Setups', icon: 'operating-table' },
  { name: 'Laboratory Setups', icon: 'test-tube' },
  { name: 'Diagnostic Setups', icon: 'stethoscope' },
  { name: 'Dental Setups', icon: 'dental-chair' },
  { name: 'General Medical Machines and Equipment', icon: 'monitor' },
  { name: 'Medical Consumables', icon: 'band-aid' },
  { name: 'Others', icon: 'plus-circle' }
];

export const PRODUCTS: Product[] = [
  // Theatre Setups
  {
    id: 't1',
    name: 'HYDRAULIC THEATRE BED',
    category: 'Theatre Setups',
    description: 'Heavy-duty hydraulic operating table with multi-positional adjustments for various surgical procedures.',
    imageUrl: '/images/products/Theatre seups/Hydraulic-Theatre bed.jpg'
  },
  {
    id: 't2',
    name: 'EMERGENCY TRANSFER TROLLEY',
    category: 'Theatre Setups',
    description: 'High-mobility patient transfer stretcher with adjustable height and side rails for critical care.',
    imageUrl: '/images/products/Theatre seups/Emergency transfer trolley.jpg'
  },
  {
    id: 't3',
    name: 'DIATHERMY MACHINE',
    category: 'Theatre Setups',
    description: 'Advanced electrosurgical unit with monopolar and bipolar modes for precise tissue cutting and coagulation.',
    imageUrl: '/images/products/Theatre seups/Diathermy machine.jpg'
  },
  {
    id: 't4',
    name: 'THEATRE LIGHT (CEILING TYPE)',
    category: 'Theatre Setups',
    description: 'Shadowless surgical lighting system mounted to ceiling with adjustable intensity and focus.',
    imageUrl: '/images/products/Theatre seups/Theatre light(ceiling type).jpg'
  },
  {
    id: 't5',
    name: 'THEATRE LIGHT (STANDING TYPE)',
    category: 'Theatre Setups',
    description: 'Mobile surgical floor lamp with flexible arm and high-output LED for focal illumination.',
    imageUrl: '/images/products/Theatre seups/Theatre light(Standing type).jpg'
  },
  {
    id: 't6',
    name: 'THEATRE LIGHT (RECHARGEABLE)',
    category: 'Theatre Setups',
    description: 'Portable emergency surgical light with high-capacity internal battery for uninterrupted operation.',
    imageUrl: '/images/products/Theatre seups/Rechargeable theatre light.jpg'
  },
  {
    id: 't7',
    name: 'ANESTHESIA MACHINE (DOUBLE VAPORISER)',
    category: 'Theatre Setups',
    description: 'Precision anesthesia delivery system with dual vaporizers and integrated ventilator support.',
    imageUrl: '/images/products/Theatre seups/Anaesthesia machine(Double vaporiser).jpg'
  },
  {
    id: 't8',
    name: 'PATIENT MONITOR (WITH ADULT AND PEDIATRIC ACCESSORIES)',
    category: 'Theatre Setups',
    description: 'High-resolution multi-parameter monitor including probes and cuffs for all age groups.',
    imageUrl: '/images/products/Theatre seups/Patient monitor(Adult and Peadiatric accessories).jpg'
  },
  {
    id: 't9',
    name: 'UV LAMP',
    category: 'Theatre Setups',
    description: 'Ultraviolet sterilization lamp designed for operating room disinfection and air purification.',
    imageUrl: '/images/products/Theatre seups/UV lamp.jpeg'
  },
  {
    id: 't10',
    name: 'SUCTION MACHINE',
    category: 'Theatre Setups',
    description: 'High-vacuum, high-flow medical aspirator for surgical fluids and secretions.',
    imageUrl: '/images/products/Theatre seups/Suction Machine.jpg'
  },
  // Laboratory Setups
  {
    id: 'l1',
    name: 'MINDRAY BC 10 (3 PART HEMATOLOGY ANALYZER)',
    category: 'Laboratory Setups',
    description: 'Compact and powerful 3-part differential analyzer with reliable performance and user-friendly interface.',
    imageUrl: '/images/products/Laboratory setup/Mindray BC 10 (3 part Hematology analyzer).jpeg'
  },
  {
    id: 'l2',
    name: 'MINDRAY BC 5000 (5 PART HEMATOLOGY ANALYZER)',
    category: 'Laboratory Setups',
    description: 'Advanced 5-part hematology analyzer utilizing laser scatter and flow cytometry for high-accuracy results.',
    imageUrl: '/images/products/Laboratory setup/mindray bc 5000(5 part hematology analyzer).jpg'
  },
  {
    id: 'l3',
    name: 'FULLY AUTOMATED CHEMISTRY ANALYZER',
    category: 'Laboratory Setups',
    description: 'High-throughput system for comprehensive clinical chemistry testing with minimal manual intervention.',
    imageUrl: '/images/products/Laboratory setup/Fully automated chemistry analyzer.jpeg'
  },
  {
    id: 'l4',
    name: 'SEMI AUTOMATED CHEMISTRY ANALYZER',
    category: 'Laboratory Setups',
    description: 'Versatile analyzer designed for laboratories requiring flexibility and precision in biochemical diagnostics.',
    imageUrl: '/images/products/Laboratory setup/Semi automated chemical analyzer.jpeg'
  },
  {
    id: 'l5',
    name: 'OLYMPUS MICROSCOPE (CX 23 BINOCULAR)',
    category: 'Laboratory Setups',
    description: 'Ergonomic binocular microscope with world-class optics for educational and clinical laboratory use.',
    imageUrl: '/images/products/Laboratory setup/Olympus microscope(Cx 23 binocular).jpeg'
  },
  {
    id: 'l6',
    name: 'OLYMPUS MICROSCOPE (CX 23 TRINOCULAR)',
    category: 'Laboratory Setups',
    description: 'Professional trinocular microscope with camera port for high-quality digital imaging and documentation.',
    imageUrl: '/images/products/Laboratory setup/Olympus microscope(Cx 23 trinocular).jpeg'
  },
  {
    id: 'l7',
    name: 'DIGITAL CENTRIFUGE (8 HOLES)',
    category: 'Laboratory Setups',
    description: 'High-speed 8-position digital centrifuge with precise timing and speed control for reliable sample separation.',
    imageUrl: '/images/products/Laboratory setup/Digital centrifuge.jpeg'
  },
  {
    id: 'l8',
    name: 'WATER BATH (MEDIUM, 2 HOLES)',
    category: 'Laboratory Setups',
    description: 'Stable temperature-controlled 2-hole water bath for incubation and sensitive laboratory protocols.',
    imageUrl: '/images/products/Laboratory setup/Water bath medium 2 holes.jpeg'
  },
  {
    id: 'l9',
    name: 'BLOOD ROLLER MIXER',
    category: 'Laboratory Setups',
    description: 'Quiet and efficient roller mixer for consistent mixing of blood samples and anticoagulants.',
    imageUrl: '/images/products/Laboratory setup/Blood roller mixer.jpg'
  },
  {
    id: 'l10',
    name: 'BLOOD BANK FRIDGE',
    category: 'Laboratory Setups',
    description: 'Specialized medical-grade refrigeration system for the safe storage of blood products and reagents.',
    imageUrl: '/images/products/Laboratory setup/Blood bank fride.jpg'
  },
  // Diagnostic Setups
  {
    id: 'd1',
    name: 'MINDRAY DP-10 PORTABLE SCAN MACHINE',
    category: 'Diagnostic Setups',
    description: 'High-performance black-and-white portable ultrasound system designed for mobility and clinical reliability.',
    imageUrl: '/images/products/Diagnostics setups/Mindray DP-10 portable scan machine.jpeg'
  },
  {
    id: 'd2',
    name: '4D COLOR DOPPLER ULTRASOUND MACHINE WITH 5 PROBES',
    category: 'Diagnostic Setups',
    description: 'Premium real-time 4D color doppler imaging system equipped with five high-precision probes for comprehensive clinical diagnostics.',
    imageUrl: '/images/products/Diagnostics setups/4D color doppler ultrasound machine with 5 probes.jpeg'
  },
  // Dental Setups
  {
    id: 'de2',
    name: 'DENTAL UNIT (INCLUDES ORAL CAMERA MONITOR, AIR COMPRESSOR, ETC)',
    category: 'Dental Setups',
    description: 'All-in-one professional dental station featuring an integrated oral camera system, high-definition monitor, and a powerful, quiet air compressor for seamless procedures.',
    imageUrl: '/images/products/Dental setup/Dental setup.jpeg'
  },
  // General Medical Machines
  {
    id: 'g1',
    name: 'AMBUBAG SILICON (NEONATE, PEDIATRIC, ADULT)',
    category: 'General Medical Machines and Equipment',
    description: 'Manual resuscitator for respiratory support across all age groups including neonates, pediatrics, and adults.',
    imageUrl: '/images/products/General machines and equipment/Abmubag silicon.jpg'
  },
  {
    id: 'g2',
    name: 'STAINLESS STEEL BABY COT (TYPE A)',
    category: 'General Medical Machines and Equipment',
    description: 'Durable medical-grade stainless steel crib designed for safety and longevity in neonatal departments.',
    imageUrl: '/images/products/General machines and equipment/Baby cot stainless steel (Type A).jpg'
  },
  {
    id: 'g3',
    name: 'BABY COT (TYPE C-ABS)',
    category: 'General Medical Machines and Equipment',
    description: 'Modern infant bed featuring ABS panels for easy cleaning and adjustable features for clinical convenience.',
    imageUrl: '/images/products/General machines and equipment/Babycot (type C, ABS).jpeg'
  },
  {
    id: 'g4',
    name: 'TUBE PHOTOTHERAPY MACHINE',
    category: 'General Medical Machines and Equipment',
    description: 'Intensive phototherapy unit for efficient treatment of neonatal jaundice using advanced light therapy.',
    imageUrl: '/images/products/General machines and equipment/Tube phototheraphy machine.PNG'
  },
  {
    id: 'g5',
    name: 'MAYO\'S TROLLEY',
    category: 'General Medical Machines and Equipment',
    description: 'Adjustable height surgical instrument stand with a high-grade stainless steel tray.',
    imageUrl: '/images/products/General machines and equipment/Mayo\'s trolley.jpg'
  },
  {
    id: 'g6',
    name: 'EXAMINATION LAMP (ADJUSTABLE BRIGHTNESS BUTTON)',
    category: 'General Medical Machines and Equipment',
    description: 'Medical-grade LED examination light with intuitive brightness control for precise diagnostics.',
    imageUrl: '/images/products/General machines and equipment/Examination lamp(adjustable brightness buton).jpg'
  },
  {
    id: 'g7',
    name: 'DIAGNOSTIC OTOSCOPE',
    category: 'General Medical Machines and Equipment',
    description: 'High-intensity diagnostic tool for clear visualization during ear and auditory canal examinations.',
    imageUrl: '/images/products/General machines and equipment/Diagnostic outoscope.PNG'
  },
  {
    id: 'g8',
    name: 'COMMODE WHEELCHAIR (LONG BACK)',
    category: 'General Medical Machines and Equipment',
    description: 'Ergonomic wheelchair with a high backrest and integrated commode for patient convenience and support.',
    imageUrl: '/images/products/General machines and equipment/Commode wheelchair(long back).jpeg'
  },
  {
    id: 'g9',
    name: 'STANDARD WHEELCHAIR',
    category: 'General Medical Machines and Equipment',
    description: 'Heavy-duty mobility solution with durable frame construction and comfortable patient seating.',
    imageUrl: '/images/products/General machines and equipment/Standard wheelchair.PNG'
  },
  {
    id: 'g10',
    name: 'ADULT MECHANICAL SCALE (SEPARATE FOOT)',
    category: 'General Medical Machines and Equipment',
    description: 'Precision mechanical weighing scale with a wide platform and separate foot base for stability.',
    imageUrl: '/images/products/General machines and equipment/Adult mechanical scale with separate foot.jpeg'
  },
  {
    id: 'g11',
    name: 'ANTIDECUBITUS AIR MATRESS',
    category: 'General Medical Machines and Equipment',
    description: 'Medical pressure-relief mattress system designed for the prevention and treatment of bedsores.',
    imageUrl: '/images/products/General machines and equipment/Antidecubitus air matress.PNG'
  },

  {
    id: 'g13',
    name: 'INFANT HANGING SCALE',
    category: 'General Medical Machines and Equipment',
    description: 'Reliable and portable mechanical scale for pediatric clinics and field health monitoring.',
    imageUrl: '/images/products/General machines and equipment/Infant hanging scale.PNG'
  },
  {
    id: 'g14',
    name: 'SCALE WITH HEIGHT (SMALL)',
    category: 'General Medical Machines and Equipment',
    description: 'Compact weighing station with an integrated height measuring rod for comprehensive clinical assessment.',
    imageUrl: '/images/products/General machines and equipment/Scale with height(small).PNG'
  },
  {
    id: 'g15',
    name: 'WARD SCREEN (4 FOLD + 4 LEGS)',
    category: 'General Medical Machines and Equipment',
    description: 'Portable privacy divider with durable frames and stable casters for hospital ward use.',
    imageUrl: '/images/products/General machines and equipment/Ward screen(4 fold with 4 legs).PNG'
  },
  {
    id: 'g16',
    name: 'FINGER PULSE OXIMETER',
    category: 'General Medical Machines and Equipment',
    description: 'Quick and accurate monitoring of blood oxygen saturation and pulse rate via fingertips.',
    imageUrl: '/images/products/General machines and equipment/Finger pulse oximeter.PNG'
  },
  {
    id: 'g17',
    name: 'HANDHELD PULSE OXIMETER',
    category: 'General Medical Machines and Equipment',
    description: 'Professional-grade portable monitor for continuous and spot-check SpO2 tracking.',
    imageUrl: '/images/products/General machines and equipment/Handheld pulse oximeter.PNG'
  },
  {
    id: 'g18',
    name: 'PEDIATRIC RECHARGEABLE PULSE OXIMETERS',
    category: 'General Medical Machines and Equipment',
    description: 'Specialized oxygen monitor for children featuring a rechargeable battery and ergonomic sensor.',
    imageUrl: '/images/products/General machines and equipment/Pediatric pulse oximeter.PNG'
  },
  {
    id: 'g19',
    name: 'GUN THERMOMETERS',
    category: 'General Medical Machines and Equipment',
    description: 'High-speed infrared non-contact thermometer for hygienic and rapid temperature screening.',
    imageUrl: '/images/products/General machines and equipment/Gun thermometer.PNG'
  },
  {
    id: 'g20',
    name: 'PATIENT MONITOR STAND',
    category: 'General Medical Machines and Equipment',
    description: 'Mobile rolling stand with adjustable height and storage basket for vital sign monitors.',
    imageUrl: '/images/products/General machines and equipment/Patient monitor stand.PNG'
  },
  {
    id: 'g21',
    name: 'GAUZE DRUM (26X19CM, 30X21CM)',
    category: 'General Medical Machines and Equipment',
    description: 'Sterilization containers for medical dressings, made from high-quality medical grade stainless steel.',
    imageUrl: '/images/products/General machines and equipment/Gauze drum.PNG'
  },
  {
    id: 'g22',
    name: 'ROOM THERMOMETER',
    category: 'General Medical Machines and Equipment',
    description: 'Precision environmental monitor for maintaining optimal clinical conditions in hospitals and labs.',
    imageUrl: '/images/products/General machines and equipment/Room thermometer.PNG'
  },
  {
    id: 'g23',
    name: 'FRIDGE THERMOMETER',
    category: 'General Medical Machines and Equipment',
    description: 'Critical monitor for temperature-sensitive medications and biological reagents in medical fridges.',
    imageUrl: '/images/products/General machines and equipment/Fridge thermometer.PNG'
  },
  {
    id: 'g24',
    name: 'ANEROID SPHYGMOMANOMETER',
    category: 'General Medical Machines and Equipment',
    description: 'Reliable manual blood pressure monitor with a high-accuracy gauge and comfortable cuff.',
    imageUrl: '/images/products/General machines and equipment/Anerioid shygmomanometer.PNG'
  },
  {
    id: 'g25',
    name: 'INFUSION STAND WITH BASIN',
    category: 'General Medical Machines and Equipment',
    description: 'Mobile IV pole with a stable base, multiple hooks, and an integrated stainless steel utility basin.',
    imageUrl: '/images/products/General machines and equipment/Infusion stand with basin.PNG'
  },
  {
    id: 'g26',
    name: 'DELIVERY BED (TYPE B WITH 4 LEGS)',
    category: 'General Medical Machines and Equipment',
    description: 'Sturdy four-leg obstetric labor bed with adjustable sections for maternal comfort and safety.',
    imageUrl: '/images/products/General machines and equipment/Delivery bed type B(with 4 legs).PNG'
  },
  {
    id: 'g27',
    name: 'DELIVERY BED (TYPE C WITH 8 LEGS)',
    category: 'General Medical Machines and Equipment',
    description: 'Reinforced eight-leg delivery table providing maximum stability during obstetric procedures.',
    imageUrl: '/images/products/General machines and equipment/Delivery bed (type C with 8 legs).PNG'
  },
  {
    id: 'g28',
    name: 'GYNECOLOGICAL EXAMINATION BED',
    category: 'General Medical Machines and Equipment',
    description: 'Specialized clinical couch with adjustable lithotomy positions for OB/GYN assessments.',
    imageUrl: '/images/products/General machines and equipment/Gynaecological examination bed.PNG'
  },
  {
    id: 'g29',
    name: '40-LITRE OXYGEN CYLINDER',
    category: 'General Medical Machines and Equipment',
    description: 'High-capacity industrial-grade medical oxygen tank for long-term respiratory therapy.',
    imageUrl: '/images/products/General machines and equipment/40L oxygen cylinder.PNG'
  },
  {
    id: 'g30',
    name: 'COMPMIST COMPRESSOR NEBULIZER',
    category: 'General Medical Machines and Equipment',
    description: 'Advanced aerosol delivery system for efficient treatment of asthma and other respiratory conditions.',
    imageUrl: '/images/products/General machines and equipment/Compmist compressor nebilizer.PNG'
  },
  {
    id: 'g31',
    name: 'VEIN FINDER (MULTI PURPOSE)',
    category: 'General Medical Machines and Equipment',
    description: 'Innovative optical visualization device used to facilitate accurate peripheral vein location.',
    imageUrl: '/images/products/General machines and equipment/Vein finder(multipurpose).PNG'
  },
  {
    id: 'g32',
    name: 'SUTURING KITS',
    category: 'General Medical Machines and Equipment',
    description: 'Comprehensive surgical sets containing high-quality instruments for wound closure procedures.',
    imageUrl: '/images/products/General machines and equipment/Suturing kits.PNG'
  },
  // Medical Consumables
  {
    id: 'mc1',
    name: 'AUTOCLAVE STERILIZATION TAPE',
    category: 'Medical Consumables',
    description: 'High-performance indicator tape used to confirm successful steam sterilization processes in clinical settings.',
    imageUrl: '/images/products/Medical consumables/Autoclave sterilization tape.PNG'
  },
  {
    id: 'mc2',
    name: 'BLOOD BAG (SINGLE)',
    category: 'Medical Consumables',
    description: 'Sterile single-chamber blood collection system with integrated anticoagulant for safe storage.',
    imageUrl: '/images/products/Medical consumables/Blood bag.jpg'
  },
  {
    id: 'mc3',
    name: 'BLOOD LANCETS',
    category: 'Medical Consumables',
    description: 'Ultra-sharp, sterile disposal lancets designed for minimal patient discomfort during capillary sampling.',
    imageUrl: '/images/products/Medical consumables/Blood lancets.jpg'
  },
  {
    id: 'mc4',
    name: 'CANNULA (ASH, BLUE, PINK, GREEN, YELLOW)',
    category: 'Medical Consumables',
    description: 'Full range of color-coded intravenous cannulas for accurate gauge selection and optimal patient flow.',
    imageUrl: '/images/products/Medical consumables/Cannula.jpg'
  },
  {
    id: 'mc5',
    name: 'UMBILICAL CORD CLAMP',
    category: 'Medical Consumables',
    description: 'Safe and secure disposable clamps for neonatal cord management, featuring an anti-slip grip.',
    imageUrl: '/images/products/Medical consumables/umbilical cord clamp.PNG'
  },
  {
    id: 'mc6',
    name: 'ABSORBENT COTTON WOOL (100 YARDS)',
    category: 'Medical Consumables',
    description: 'Highly absorbent medical-grade cotton wool for clinical wound care and surface cleaning.',
    imageUrl: '/images/products/Medical consumables/Absorbent coton wool.PNG'
  },
  {
    id: 'mc7',
    name: 'DISPOSABLE APRON',
    category: 'Medical Consumables',
    description: 'Lightweight protective barriers designed to prevent cross-contamination in fluid-intense procedures.',
    imageUrl: '/images/products/Medical consumables/Disposable apron.PNG'
  },
  {
    id: 'mc8',
    name: 'DISPOSABLE NEEDLES (21G, 22G, 23G, 24G)',
    category: 'Medical Consumables',
    description: 'Precision-ground sterile needles for intramuscular and subcutaneous injections across multiple gauges.',
    imageUrl: '/images/products/Medical consumables/Disposable needle.PNG'
  },
  {
    id: 'mc9',
    name: 'DISPOSABLE SHOE COVER',
    category: 'Medical Consumables',
    description: 'Anti-skid protective footwear covers used to maintain sterile environments in operating theaters.',
    imageUrl: '/images/products/Medical consumables/Disposable shoe cover.PNG'
  },
  {
    id: 'mc10',
    name: 'DISPOSABLE VAGINAL SPECULUM (S, M, L)',
    category: 'Medical Consumables',
    description: 'Ergonomically designed disposable speculums available in multiple sizes for comfortable gynecological exams.',
    imageUrl: '/images/products/Medical consumables/Disposable vaginal speculum.PNG'
  },
  {
    id: 'mc11',
    name: 'DOXIFLOW',
    category: 'Medical Consumables',
    description: 'Advanced infusion control device for precise regulation of fluid delivery and medication dosing.',
    imageUrl: '/images/products/Medical consumables/Doxiflow.PNG'
  },
  {
    id: 'mc12',
    name: 'ECG PAPER (CHANNEL 12)',
    category: 'Medical Consumables',
    description: 'High-quality thermal recording paper specifically calibrated for 12-channel diagnostic ECG machines.',
    imageUrl: '/images/products/Medical consumables/ECG paper.PNG'
  },
  {
    id: 'mc13',
    name: 'ECG PAPER (CHANNEL 6)',
    category: 'Medical Consumables',
    description: 'Specialized thermal print rolls designed for high-resolution 6-channel cardiac monitoring reports.',
    imageUrl: '/images/products/Medical consumables/ECG paper.PNG'
  },
  {
    id: 'mc14',
    name: 'ELASTIC CREPE BANDAGE (SIZE 4 INCHES)',
    category: 'Medical Consumables',
    description: 'Strong, breathable support bandage providing consistent pressure for orthopedic care and sprain management.',
    imageUrl: '/images/products/Medical consumables/Elastic crepe bandage.PNG'
  },
  {
    id: 'mc15',
    name: 'ELASTIC CREPE BANDAGE (SIZE 6 INCHES)',
    category: 'Medical Consumables',
    description: 'Wide support bandage ideal for larger limb stabilization and sustained compressive therapy.',
    imageUrl: '/images/products/Medical consumables/Elastic crepe bandage.PNG'
  },
  {
    id: 'mc16',
    name: 'GAUZE ROLL (100 YARDS)',
    category: 'Medical Consumables',
    description: 'Pure cotton gauze roll for extensive surgical dressing and primary wound care applications.',
    imageUrl: '/images/products/Medical consumables/Gauze roll (2).PNG'
  },
  {
    id: 'mc17',
    name: 'LATEX FOLEY',
    category: 'Medical Consumables',
    description: 'Indwelling urinary catheters with hydrophilic coating for smooth insertion and patient comfort.',
    imageUrl: '/images/products/Medical consumables/Latex foley.PNG'
  },
  {
    id: 'mc18',
    name: 'NON-REBREATHER MASK (S, M, L)',
    category: 'Medical Consumables',
    description: 'High-concentration oxygen delivery masks featuring reservoir bags for efficient respiratory support.',
    imageUrl: '/images/products/Medical consumables/Non-rebreather mask.PNG'
  },
  {
    id: 'mc19',
    name: 'MICROSCOPE COVER GLASS',
    category: 'Medical Consumables',
    description: 'High-transparency laboratory grade cover slips for secure slide preparation and clinical diagnostics.',
    imageUrl: '/images/products/Medical consumables/Microscope cover glass.PNG'
  },
  // Others Category
  {
    id: 'o1',
    name: 'TUNING FORK (128HZ, 512HZ)',
    category: 'Others',
    description: 'High-precision medical tuning forks for neurological assessment and auditory testing.',
    imageUrl: '/images/products/others/tuning-fork.jpg'
  },
  {
    id: 'o2',
    name: 'RECHARGEABLE PEN TORCH',
    category: 'Others',
    description: 'Eco-friendly rechargeable diagnostic penlight with consistent beam intensity for clinical exams.',
    imageUrl: '/images/products/others/rechargeable-pen-torch.jpg'
  },
  {
    id: 'o3',
    name: 'PEN TORCH (BATTERY TYPE)',
    category: 'Others',
    description: 'Portable, battery-operated diagnostic penlight for rapid pupil reflexes and physical examinations.',
    imageUrl: '/images/products/others/pen-torch-battery.jpg'
  },
  {
    id: 'o4',
    name: 'LITTMAN STETHOSCOPE CLASSIC III',
    category: 'Others',
    description: 'Industry-standard diagnostic stethoscope featuring high acoustic sensitivity and dual-sided chestpiece.',
    imageUrl: '/images/products/others/littman-classic-3.jpg'
  },

  {
    id: 'o6',
    name: 'RETRACTABLE TAPE MEASURE',
    category: 'Others',
    description: 'Spring-loaded durable measuring tape for accurate patient anthropometric measurements.',
    imageUrl: '/images/products/others/retractable-tape-measure.jpg'
  },
  {
    id: 'o7',
    name: 'NON-RETRACTABLE TAPE MEASURE',
    category: 'Others',
    description: 'Flexible, high-visibility measuring tape ideal for circumferential medical measurements.',
    imageUrl: '/images/products/others/non-retractable-tape-measure.jpg'
  },
  {
    id: 'o8',
    name: 'LONG FLEXIBLE PATELLA HAMMER',
    category: 'Others',
    description: 'Tromner-style neurological hammer with a flexible handle for superior reflex elicitation.',
    imageUrl: '/images/products/others/patella-hammer-flexible.jpg'
  },
  {
    id: 'o9',
    name: 'SHORT METAL PATELLA HAMMER (WITH BRUSH AND PIN)',
    category: 'Others',
    description: 'Multi-functional Buck-style hammer featuring integrated tools for sensory testing.',
    imageUrl: '/images/products/others/patella-hammer-short.jpg'
  },
  {
    id: 'o10',
    name: 'LEEMAN STETHOSCOPE CASE FOR CARDIOLOGY',
    category: 'Others',
    description: 'Premium shock-proof protective case designed specifically for high-end cardiology stethoscopes.',
    imageUrl: '/images/products/others/stethoscope-case-cardiology.jpg'
  },
  {
    id: 'o11',
    name: 'CARDIOLOGY IV STETHOSCOPE',
    category: 'Others',
    description: 'Top-tier cardiology stethoscope designed for the most demanding clinical environments and fine auscultation.',
    imageUrl: '/images/products/others/cardiology-4-stethoscope.jpg'
  },
  {
    id: 'o12',
    name: 'DIGITAL THERMOMETER',
    category: 'Others',
    description: 'Fast and accurate electronic thermometer with easy-read display for clinical temperature monitoring.',
    imageUrl: '/images/products/others/digital-thermometer.jpg'
  },
  {
    id: 'o13',
    name: 'SPHYGMOMANOMETER',
    category: 'Others',
    description: 'Professional grade manual blood pressure monitor for reliable clinical diagnostics.',
    imageUrl: '/images/products/others/sphygmomanometer.jpg'
  },
  {
    id: 'o14',
    name: 'BREAST WATCH',
    category: 'Others',
    description: 'Hygienic silicone fob watch designed for medical professionals working in sterile environments.',
    imageUrl: '/images/products/others/breast-watch.jpg'
  },
  {
    id: 'o15',
    name: 'BLOOD PRESSURE MACHINES',
    category: 'Others',
    description: 'Automatic digital upper-arm blood pressure monitors for precise and rapid patient screening.',
    imageUrl: '/images/products/others/blood-pressure-machine.jpg'
  },
  {
    id: 'o16',
    name: 'SUTURE PADS',
    category: 'Others',
    description: 'High-fidelity multi-layer synthetic skin pads for medical students and surgical training.',
    imageUrl: '/images/products/others/suture-pads.jpg'
  },
  {
    id: 'o17',
    name: 'HOT WATER BOTTLE',
    category: 'Others',
    description: 'Medical-grade therapeutic heat bottle for targeted pain relief and comfort.',
    imageUrl: '/images/products/others/hot-water-bottle.jpg'
  },
  {
    id: 'o18',
    name: 'LITTMAN CLASSIC II STETHOSCOPE',
    category: 'Others',
    description: 'Proven clinical performance for general diagnosis with high-quality acoustic engineering.',
    imageUrl: '/images/products/others/littman-classic-2.jpg'
  },
  {
    id: 'o19',
    name: 'LITTMAN CLASSIC III STETHOSCOPE',
    category: 'Others',
    description: 'Enhanced version of the Classic II, providing superior clarity and comfort for clinicians.',
    imageUrl: '/images/products/others/littman-classic-3-stethoscope.jpg'
  },
  {
    id: 'o20',
    name: 'CARDIOLOGY IV BELL',
    category: 'Others',
    description: 'Replacement bell component for Cardiology IV stethoscopes, ensuring continued high-frequency performance.',
    imageUrl: '/images/products/others/cardiology-4-bell.jpg'
  },
  {
    id: 'o21',
    name: 'CARDIOLOGY STETHOSCOPE SPARE PARTS (DARK AND GREY)',
    category: 'Others',
    description: 'Official spare kit containing ear tips, diaphragms, and rim assemblies in various finishes.',
    imageUrl: '/images/products/others/cardiology-spare-parts.jpg'
  },
  {
    id: 'o22',
    name: 'DIAPHRAGMS',
    category: 'Others',
    description: 'Replacement tunable diaphragms for maintain acoustic integrity of clinical stethoscopes.',
    imageUrl: '/images/products/others/diaphragms.jpg'
  },
  {
    id: 'o23',
    name: 'EAR TIPS',
    category: 'Others',
    description: 'Soft-sealing stethoscope ear tips providing comfort and acoustic isolation.',
    imageUrl: '/images/products/others/ear-tips.jpg'
  },
  {
    id: 'o24',
    name: 'LEATHER STETHOSCOPE HOLDER',
    category: 'Others',
    description: 'Premium leather holder for carrying your stethoscope comfortably and securely.',
    imageUrl: '/images/products/others/leather stethoscope holder.jpeg'
  },
  {
    id: 'o25',
    name: 'CHEST PIECES (FOR CLASSIC III, IV)',
    category: 'Others',
    description: 'Modular chestpiece components for Littman Classic series to restore full diagnostic function.',
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'o26',
    name: 'BAJA\'S 1 AND 2',
    category: 'Others',
    description: 'Essential medical textbook series covering core principles of clinical practice.',
    imageUrl: '/images/products/others/bajas-1-and-2.jpg'
  },
  {
    id: 'o27',
    name: 'ATLAS ANATOMY',
    category: 'Others',
    description: 'Comprehensive photographic and illustrated atlas of human anatomy for medical professionals.',
    imageUrl: '/images/products/others/Atlas Anatomy.jpeg'
  },
  {
    id: 'o28',
    name: "NORMAN BROWSE'S HANDBOOK",
    category: 'Others',
    description: 'The definitive guide to clinical examination and surgical signs for medical practitioners.',
    imageUrl: "/images/products/others/Norman Browse's handbook.jpeg"
  },
  {
    id: 'o29',
    name: 'OXFORD HANDBOOK',
    category: 'Others',
    description: 'Pocket-sized clinical guide for rapid reference in hospital and community care settings.',
    imageUrl: '/images/products/others/Oxford handbook.jpg'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Sarah Mitchell',
    role: 'Head of Surgery, City General',
    content: 'The quality of the Theatre Setups provided by Prime Med is unmatched. Their support team is also incredibly responsive.',
    avatar: 'https://picsum.photos/seed/doctor1/200'
  },
  {
    id: '2',
    name: 'James Wilson',
    role: 'Laboratory Director',
    content: 'Our lab efficiency improved significantly with Prime Med laboratory setups. Accurate and reliable equipment.',
    avatar: 'https://picsum.photos/seed/admin/200'
  },
  {
    id: '3',
    name: 'Dr. Elena Rossi',
    role: 'Private Clinic Owner',
    content: 'The diagnostic tools we purchased have transformed our patient check-up experience. Prime Med is our go-to partner.',
    avatar: 'https://picsum.photos/seed/doctor2/200'
  }
];
