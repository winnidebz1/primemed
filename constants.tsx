
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
    imageUrl: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 't2',
    name: 'EMERGENCY TRANSFER TROLLEY',
    category: 'Theatre Setups',
    description: 'High-mobility patient transfer stretcher with adjustable height and side rails for critical care.',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 't3',
    name: 'DIATHERMY MACHINE',
    category: 'Theatre Setups',
    description: 'Advanced electrosurgical unit with monopolar and bipolar modes for precise tissue cutting and coagulation.',
    imageUrl: 'https://images.unsplash.com/photo-1579152276506-0414b6205edb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 't4',
    name: 'THEATRE LIGHT (CEILING TYPE)',
    category: 'Theatre Setups',
    description: 'Shadowless surgical lighting system mounted to ceiling with adjustable intensity and focus.',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 't5',
    name: 'THEATRE LIGHT (STANDING TYPE)',
    category: 'Theatre Setups',
    description: 'Mobile surgical floor lamp with flexible arm and high-output LED for focal illumination.',
    imageUrl: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 't6',
    name: 'THEATRE LIGHT (RECHARGEABLE)',
    category: 'Theatre Setups',
    description: 'Portable emergency surgical light with high-capacity internal battery for uninterrupted operation.',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 't7',
    name: 'ANESTHESIA MACHINE (DOUBLE VAPORISER)',
    category: 'Theatre Setups',
    description: 'Precision anesthesia delivery system with dual vaporizers and integrated ventilator support.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 't8',
    name: 'PATIENT MONITOR (WITH ADULT AND PEDIATRIC ACCESSORIES)',
    category: 'Theatre Setups',
    description: 'High-resolution multi-parameter monitor including probes and cuffs for all age groups.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 't9',
    name: 'UV LAMP',
    category: 'Theatre Setups',
    description: 'Ultraviolet sterilization lamp designed for operating room disinfection and air purification.',
    imageUrl: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 't10',
    name: 'SUCTION MACHINE',
    category: 'Theatre Setups',
    description: 'High-vacuum, high-flow medical aspirator for surgical fluids and secretions.',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },
  // Laboratory Setups
  {
    id: 'l1',
    name: 'MINDRAY BC 10 (3 PART HEMATOLOGY ANALYZER)',
    category: 'Laboratory Setups',
    description: 'Compact and powerful 3-part differential analyzer with reliable performance and user-friendly interface.',
    imageUrl: 'https://images.unsplash.com/photo-1579152276506-0414b6205edb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'l2',
    name: 'MINDRAY BC 5000 (5 PART HEMATOLOGY ANALYZER)',
    category: 'Laboratory Setups',
    description: 'Advanced 5-part hematology analyzer utilizing laser scatter and flow cytometry for high-accuracy results.',
    imageUrl: 'https://images.unsplash.com/photo-1583912267550-d44d7a12982c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'l3',
    name: 'FULLY AUTOMATED CHEMISTRY ANALYZER',
    category: 'Laboratory Setups',
    description: 'High-throughput system for comprehensive clinical chemistry testing with minimal manual intervention.',
    imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'l4',
    name: 'SEMI AUTOMATED CHEMISTRY ANALYZER',
    category: 'Laboratory Setups',
    description: 'Versatile analyzer designed for laboratories requiring flexibility and precision in biochemical diagnostics.',
    imageUrl: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'l5',
    name: 'OLYMPUS MICROSCOPE (CX 23 BINOCULAR)',
    category: 'Laboratory Setups',
    description: 'Ergonomic binocular microscope with world-class optics for educational and clinical laboratory use.',
    imageUrl: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'l6',
    name: 'OLYMPUS MICROSCOPE (CX 23 TRINOCULAR)',
    category: 'Laboratory Setups',
    description: 'Professional trinocular microscope with camera port for high-quality digital imaging and documentation.',
    imageUrl: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'l7',
    name: 'DIGITAL CENTRIFUGE (8 HOLES)',
    category: 'Laboratory Setups',
    description: 'High-speed 8-position digital centrifuge with precise timing and speed control for reliable sample separation.',
    imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'l8',
    name: 'WATER BATH (MEDIUM, 2 HOLES)',
    category: 'Laboratory Setups',
    description: 'Stable temperature-controlled 2-hole water bath for incubation and sensitive laboratory protocols.',
    imageUrl: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'l9',
    name: 'BLOOD ROLLER MIXER',
    category: 'Laboratory Setups',
    description: 'Quiet and efficient roller mixer for consistent mixing of blood samples and anticoagulants.',
    imageUrl: 'https://images.unsplash.com/photo-1579152433971-9660dc48b436?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'l10',
    name: 'BLOOD BANK FRIDGE',
    category: 'Laboratory Setups',
    description: 'Specialized medical-grade refrigeration system for the safe storage of blood products and reagents.',
    imageUrl: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800'
  },
  // Diagnostic Setups
  {
    id: 'd1',
    name: 'MINDRAY DP-10 PORTABLE SCAN MACHINE',
    category: 'Diagnostic Setups',
    description: 'High-performance black-and-white portable ultrasound system designed for mobility and clinical reliability.',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'd2',
    name: '4D COLOR DOPPLER ULTRASOUND MACHINE WITH 5 PROBES',
    category: 'Diagnostic Setups',
    description: 'Premium real-time 4D color doppler imaging system equipped with five high-precision probes for comprehensive clinical diagnostics.',
    imageUrl: 'https://images.unsplash.com/photo-1579152276506-0414b6205edb?auto=format&fit=crop&q=80&w=800'
  },
  // Dental Setups
  {
    id: 'de2',
    name: 'DENTAL UNIT (INCLUDES ORAL CAMERA MONITOR, AIR COMPRESSOR, ETC)',
    category: 'Dental Setups',
    description: 'All-in-one professional dental station featuring an integrated oral camera system, high-definition monitor, and a powerful, quiet air compressor for seamless procedures.',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800'
  },
  // General Medical Machines
  {
    id: 'g1',
    name: 'AMBUBAG SILICON (NEONATE, PEDIATRIC, ADULT)',
    category: 'General Medical Machines and Equipment',
    description: 'Manual resuscitator for respiratory support across all age groups including neonates, pediatrics, and adults.',
    imageUrl: 'https://images.unsplash.com/photo-1581093458391-9f42e68fe4f7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g2',
    name: 'STAINLESS STEEL BABY COT (TYPE A)',
    category: 'General Medical Machines and Equipment',
    description: 'Durable medical-grade stainless steel crib designed for safety and longevity in neonatal departments.',
    imageUrl: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g3',
    name: 'BABY COT (TYPE C-ABS)',
    category: 'General Medical Machines and Equipment',
    description: 'Modern infant bed featuring ABS panels for easy cleaning and adjustable features for clinical convenience.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g4',
    name: 'TUBE PHOTOTHERAPY MACHINE',
    category: 'General Medical Machines and Equipment',
    description: 'Intensive phototherapy unit for efficient treatment of neonatal jaundice using advanced light therapy.',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g5',
    name: 'MAYO\'S TROLLEY',
    category: 'General Medical Machines and Equipment',
    description: 'Adjustable height surgical instrument stand with a high-grade stainless steel tray.',
    imageUrl: 'https://images.unsplash.com/photo-1581093458391-9f42e68fe4f7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g6',
    name: 'EXAMINATION LAMP (ADJUSTABLE BRIGHTNESS BUTTON)',
    category: 'General Medical Machines and Equipment',
    description: 'Medical-grade LED examination light with intuitive brightness control for precise diagnostics.',
    imageUrl: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g7',
    name: 'DIAGNOSTIC OTOSCOPE',
    category: 'General Medical Machines and Equipment',
    description: 'High-intensity diagnostic tool for clear visualization during ear and auditory canal examinations.',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g8',
    name: 'COMMODE WHEELCHAIR (LONG BACK)',
    category: 'General Medical Machines and Equipment',
    description: 'Ergonomic wheelchair with a high backrest and integrated commode for patient convenience and support.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g9',
    name: 'STANDARD WHEELCHAIR',
    category: 'General Medical Machines and Equipment',
    description: 'Heavy-duty mobility solution with durable frame construction and comfortable patient seating.',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g10',
    name: 'ADULT MECHANICAL SCALE (SEPARATE FOOT)',
    category: 'General Medical Machines and Equipment',
    description: 'Precision mechanical weighing scale with a wide platform and separate foot base for stability.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g11',
    name: 'ANTIDECUBITUS AIR MATRESS',
    category: 'General Medical Machines and Equipment',
    description: 'Medical pressure-relief mattress system designed for the prevention and treatment of bedsores.',
    imageUrl: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g12',
    name: 'ADULT MECHANICAL SCALE (JOINT FOOT)',
    category: 'General Medical Machines and Equipment',
    description: 'Accurate analog floor scale with integrated platform for routine clinical weight monitoring.',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g13',
    name: 'INFANT HANGING SCALE',
    category: 'General Medical Machines and Equipment',
    description: 'Reliable and portable mechanical scale for pediatric clinics and field health monitoring.',
    imageUrl: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g14',
    name: 'SCALE WITH HEIGHT (SMALL)',
    category: 'General Medical Machines and Equipment',
    description: 'Compact weighing station with an integrated height measuring rod for comprehensive clinical assessment.',
    imageUrl: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g15',
    name: 'WARD SCREEN (4 FOLD + 4 LEGS)',
    category: 'General Medical Machines and Equipment',
    description: 'Portable privacy divider with durable frames and stable casters for hospital ward use.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g16',
    name: 'FINGER PULSE OXIMETER',
    category: 'General Medical Machines and Equipment',
    description: 'Quick and accurate monitoring of blood oxygen saturation and pulse rate via fingertips.',
    imageUrl: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g17',
    name: 'HANDHELD PULSE OXIMETER',
    category: 'General Medical Machines and Equipment',
    description: 'Professional-grade portable monitor for continuous and spot-check SpO2 tracking.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g18',
    name: 'PEDIATRIC RECHARGEABLE PULSE OXIMETERS',
    category: 'General Medical Machines and Equipment',
    description: 'Specialized oxygen monitor for children featuring a rechargeable battery and ergonomic sensor.',
    imageUrl: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g19',
    name: 'GUN THERMOMETERS',
    category: 'General Medical Machines and Equipment',
    description: 'High-speed infrared non-contact thermometer for hygienic and rapid temperature screening.',
    imageUrl: 'https://images.unsplash.com/photo-1583912267550-d44d7a12982c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g20',
    name: 'PATIENT MONITOR STAND',
    category: 'General Medical Machines and Equipment',
    description: 'Mobile rolling stand with adjustable height and storage basket for vital sign monitors.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g21',
    name: 'GAUZE DRUM (26X19CM, 30X21CM)',
    category: 'General Medical Machines and Equipment',
    description: 'Sterilization containers for medical dressings, made from high-quality medical grade stainless steel.',
    imageUrl: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g22',
    name: 'ROOM THERMOMETER',
    category: 'General Medical Machines and Equipment',
    description: 'Precision environmental monitor for maintaining optimal clinical conditions in hospitals and labs.',
    imageUrl: 'https://images.unsplash.com/photo-1579152276506-0414b6205edb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g23',
    name: 'FRIDGE THERMOMETER',
    category: 'General Medical Machines and Equipment',
    description: 'Critical monitor for temperature-sensitive medications and biological reagents in medical fridges.',
    imageUrl: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g24',
    name: 'ANEROID SPHYGMOMANOMETER',
    category: 'General Medical Machines and Equipment',
    description: 'Reliable manual blood pressure monitor with a high-accuracy gauge and comfortable cuff.',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g25',
    name: 'INFUSION STAND WITH BASIN',
    category: 'General Medical Machines and Equipment',
    description: 'Mobile IV pole with a stable base, multiple hooks, and an integrated stainless steel utility basin.',
    imageUrl: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g26',
    name: 'DELIVERY BED (TYPE B WITH 4 LEGS)',
    category: 'General Medical Machines and Equipment',
    description: 'Sturdy four-leg obstetric labor bed with adjustable sections for maternal comfort and safety.',
    imageUrl: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g27',
    name: 'DELIVERY BED (TYPE C WITH 8 LEGS)',
    category: 'General Medical Machines and Equipment',
    description: 'Reinforced eight-leg delivery table providing maximum stability during obstetric procedures.',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g28',
    name: 'GYNECOLOGICAL EXAMINATION BED',
    category: 'General Medical Machines and Equipment',
    description: 'Specialized clinical couch with adjustable lithotomy positions for OB/GYN assessments.',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffce47267a5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g29',
    name: '40-LITRE OXYGEN CYLINDER',
    category: 'General Medical Machines and Equipment',
    description: 'High-capacity industrial-grade medical oxygen tank for long-term respiratory therapy.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g30',
    name: 'COMPMIST COMPRESSOR NEBULIZER',
    category: 'General Medical Machines and Equipment',
    description: 'Advanced aerosol delivery system for efficient treatment of asthma and other respiratory conditions.',
    imageUrl: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g31',
    name: 'VEIN FINDER (MULTI PURPOSE)',
    category: 'General Medical Machines and Equipment',
    description: 'Innovative optical visualization device used to facilitate accurate peripheral vein location.',
    imageUrl: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g32',
    name: 'SUTURING KITS',
    category: 'General Medical Machines and Equipment',
    description: 'Comprehensive surgical sets containing high-quality instruments for wound closure procedures.',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
  },
  // Medical Consumables
  {
    id: 'mc1',
    name: 'AUTOCLAVE STERILIZATION TAPE',
    category: 'Medical Consumables',
    description: 'High-performance indicator tape used to confirm successful steam sterilization processes in clinical settings.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mc2',
    name: 'BLOOD BAG (SINGLE)',
    category: 'Medical Consumables',
    description: 'Sterile single-chamber blood collection system with integrated anticoagulant for safe storage.',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mc3',
    name: 'BLOOD LANCETS',
    category: 'Medical Consumables',
    description: 'Ultra-sharp, sterile disposal lancets designed for minimal patient discomfort during capillary sampling.',
    imageUrl: 'https://images.unsplash.com/photo-1579152433971-9660dc48b436?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mc4',
    name: 'CANNULA (ASH, BLUE, PINK, GREEN, YELLOW)',
    category: 'Medical Consumables',
    description: 'Full range of color-coded intravenous cannulas for accurate gauge selection and optimal patient flow.',
    imageUrl: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mc5',
    name: 'UMBILICAL CORD CLAMP',
    category: 'Medical Consumables',
    description: 'Safe and secure disposable clamps for neonatal cord management, featuring an anti-slip grip.',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mc6',
    name: 'ABSORBENT COTTON WOOL (100 YARDS)',
    category: 'Medical Consumables',
    description: 'Highly absorbent medical-grade cotton wool for clinical wound care and surface cleaning.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mc7',
    name: 'DISPOSABLE APRON',
    category: 'Medical Consumables',
    description: 'Lightweight protective barriers designed to prevent cross-contamination in fluid-intense procedures.',
    imageUrl: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mc8',
    name: 'DISPOSABLE NEEDLES (21G, 22G, 23G, 24G)',
    category: 'Medical Consumables',
    description: 'Precision-ground sterile needles for intramuscular and subcutaneous injections across multiple gauges.',
    imageUrl: 'https://images.unsplash.com/photo-1583912267550-d44d7a12982c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mc9',
    name: 'DISPOSABLE SHOE COVER',
    category: 'Medical Consumables',
    description: 'Anti-skid protective footwear covers used to maintain sterile environments in operating theaters.',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mc10',
    name: 'DISPOSABLE VAGINAL SPECULUM (S, M, L)',
    category: 'Medical Consumables',
    description: 'Ergonomically designed disposable speculums available in multiple sizes for comfortable gynecological exams.',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffce47267a5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mc11',
    name: 'DOXIFLOW',
    category: 'Medical Consumables',
    description: 'Advanced infusion control device for precise regulation of fluid delivery and medication dosing.',
    imageUrl: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mc12',
    name: 'ECG PAPER (CHANNEL 12)',
    category: 'Medical Consumables',
    description: 'High-quality thermal recording paper specifically calibrated for 12-channel diagnostic ECG machines.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mc13',
    name: 'ECG PAPER (CHANNEL 6)',
    category: 'Medical Consumables',
    description: 'Specialized thermal print rolls designed for high-resolution 6-channel cardiac monitoring reports.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mc14',
    name: 'ELASTIC CREPE BANDAGE (SIZE 4 INCHES)',
    category: 'Medical Consumables',
    description: 'Strong, breathable support bandage providing consistent pressure for orthopedic care and sprain management.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mc15',
    name: 'ELASTIC CREPE BANDAGE (SIZE 6 INCHES)',
    category: 'Medical Consumables',
    description: 'Wide support bandage ideal for larger limb stabilization and sustained compressive therapy.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mc16',
    name: 'GAUZE ROLL (100 YARDS)',
    category: 'Medical Consumables',
    description: 'Pure cotton gauze roll for extensive surgical dressing and primary wound care applications.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mc17',
    name: 'LATEX FOLEY',
    category: 'Medical Consumables',
    description: 'Indwelling urinary catheters with hydrophilic coating for smooth insertion and patient comfort.',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mc18',
    name: 'NON-REBREATHER MASK (S, M, L)',
    category: 'Medical Consumables',
    description: 'High-concentration oxygen delivery masks featuring reservoir bags for efficient respiratory support.',
    imageUrl: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mc19',
    name: 'MICROSCOPE COVER GLASS',
    category: 'Medical Consumables',
    description: 'High-transparency laboratory grade cover slips for secure slide preparation and clinical diagnostics.',
    imageUrl: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?auto=format&fit=crop&q=80&w=800'
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
