// science10_cbse_pyq.js – Dr Shetye Academic Programme
// Std 10 Science PYQ Test — CBSE Board Exam Questions 2019–2025
// 100 Questions · IDs 9101–9200
// Distribution: Chemistry 31Q | Biology 31Q | Physics 31Q | Environment 7Q
// All questions sourced from CBSE board exam papers and official sample papers

var questions = [

  // ══════════════════════════════════════════════════════
  // SECTION: Chemistry (Q1–Q31) — IDs 9101–9131
  // Ch1: Chemical Reactions & Equations (9101–9107)
  // ══════════════════════════════════════════════════════

  {
    id: 9101, section: "Chemistry",
    text: "Magnesium ribbon is cleaned by rubbing with sandpaper before burning because it has a coating of:",
    options: ["A) Basic magnesium carbonate", "B) Basic magnesium oxide", "C) Basic magnesium sulphide", "D) Basic magnesium chloride"],
    answer: "A",
    explanation: "[CBSE Board 2020] Magnesium ribbon gets coated with basic magnesium carbonate (MgCO₃·Mg(OH)₂) when exposed to air. This white coating prevents burning; rubbing with sandpaper removes it."
  },
  {
    id: 9102, section: "Chemistry",
    text: "In the reaction 3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g), which of the following statements is correct?",
    options: ["A) Iron is getting reduced", "B) Water is getting oxidised", "C) Water is acting as an oxidising agent", "D) Water is acting as a reducing agent"],
    answer: "C",
    explanation: "[CBSE Board 2020] Water (H₂O) oxidises iron — iron goes from 0 to +8/3 oxidation state in Fe₃O₄. So water itself gets reduced (H goes from +1 to 0 in H₂). Water acts as an oxidising agent."
  },
  {
    id: 9103, section: "Chemistry",
    text: "Which of the following is NOT a physical change?",
    options: ["A) Boiling of water to give water vapour", "B) Melting of ice to give water", "C) Dissolution of common salt in water", "D) Burning of magnesium in air to give magnesium oxide"],
    answer: "D",
    explanation: "[CBSE Board 2021] Burning of magnesium produces a new substance (MgO) — it is a chemical change, not physical. Boiling, melting, and dissolving salt do not produce new substances."
  },
  {
    id: 9104, section: "Chemistry",
    text: "Pb + CuCl₂ → PbCl₂ + Cu. The above reaction is an example of:",
    options: ["A) Combination reaction", "B) Double displacement reaction", "C) Decomposition reaction", "D) Displacement reaction"],
    answer: "D",
    explanation: "[CBSE Board PYQ] Lead (Pb) displaces copper from copper chloride solution. This is a displacement (single displacement) reaction. Lead is more reactive than copper in the reactivity series."
  },
  {
    id: 9105, section: "Chemistry",
    text: "Which of the following gases can be used for storage of food items to prevent them from oxidation?",
    options: ["A) Carbon dioxide or oxygen", "B) Helium or nitrogen", "C) Carbon dioxide or helium", "D) Nitrogen or oxygen"],
    answer: "B",
    explanation: "[CBSE Board 2022] Nitrogen and helium are inert gases that do not react with food. They displace oxygen and prevent oxidation/rancidity. Nitrogen (cheapest) is most commonly used in food packaging."
  },
  {
    id: 9106, section: "Chemistry",
    text: "A dilute ferrous sulphate solution was gradually added to an acidified permanganate solution. The light purple colour fades and disappears. The correct explanation is:",
    options: ["A) KMnO₄ is an oxidising agent; it oxidises FeSO₄", "B) FeSO₄ acts as an oxidising agent and oxidises KMnO₄", "C) The colour change is due to dilution effect only", "D) Fe²⁺ ions are colourless so colour disappears"],
    answer: "A",
    explanation: "[CBSE Board PYQ] KMnO₄ is a strong oxidising agent. It oxidises Fe²⁺ to Fe³⁺ while Mn⁷⁺ is reduced to Mn²⁺ (colourless). The purple colour of KMnO₄ disappears as it gets reduced."
  },
  {
    id: 9107, section: "Chemistry",
    text: "Which of the following equations represents a balanced chemical equation?",
    options: ["A) Mg + O₂ → MgO", "B) 2Mg + O₂ → 2MgO", "C) Mg + 2O₂ → MgO", "D) 2Mg + 2O₂ → 2MgO"],
    answer: "B",
    explanation: "[CBSE Board 2023] 2Mg + O₂ → 2MgO is correctly balanced: Left: 2 Mg, 2 O; Right: 2 Mg, 2 O ✓. A balanced equation must have equal atoms of each element on both sides."
  },

  // Ch2: Acids, Bases & Salts (9108–9115)
  {
    id: 9108, section: "Chemistry",
    text: "Sodium hydroxide solution in water conducts electricity because it contains:",
    options: ["A) Na and OH molecules", "B) H₂O molecules", "C) Na⁺ and OH⁻ ions", "D) NaOH molecules only"],
    answer: "C",
    explanation: "[CBSE Board 2021] NaOH is a strong base that dissociates completely into Na⁺ and OH⁻ ions in water. These free ions carry electric charge and conduct electricity through the solution."
  },
  {
    id: 9109, section: "Chemistry",
    text: "Universal indicator shows which colour at pH 1?",
    options: ["A) Green", "B) Yellow", "C) Blue", "D) Red"],
    answer: "D",
    explanation: "[CBSE Board 2019] Universal indicator shows red at pH 1 (strongly acidic), orange/yellow at mild acid, green at neutral (pH 7), blue at mild base, and violet at strong base. Red = strongly acidic."
  },
  {
    id: 9110, section: "Chemistry",
    text: "Which of the following will turn red litmus to blue?",
    options: ["A) Vinegar", "B) Lemon juice", "C) Aerated drinks", "D) Lime water"],
    answer: "D",
    explanation: "[CBSE Board 2020] Lime water (Ca(OH)₂) is a base and turns red litmus blue. Vinegar (acetic acid), lemon juice (citric acid), and aerated drinks (carbonic acid) are acidic — they keep litmus red."
  },
  {
    id: 9111, section: "Chemistry",
    text: "What happens when crystals of copper sulphate (CuSO₄·5H₂O) are heated strongly?",
    options: ["A) Colour changes from blue to white and water vapour is released", "B) Colour changes from white to blue and SO₂ is released", "C) Colour changes from blue to green and HCl is released", "D) No change occurs"],
    answer: "A",
    explanation: "[CBSE Board 2022] Heating blue CuSO₄·5H₂O removes the water of crystallisation, forming anhydrous CuSO₄ (white). CuSO₄·5H₂O → CuSO₄ + 5H₂O. The blue colour is due to the water of crystallisation."
  },
  {
    id: 9112, section: "Chemistry",
    text: "Which gas is evolved when dilute sulphuric acid reacts with zinc granules?",
    options: ["A) SO₂", "B) H₂S", "C) H₂", "D) O₂"],
    answer: "C",
    explanation: "[CBSE Board PYQ] Zn + H₂SO₄ (dilute) → ZnSO₄ + H₂↑. Hydrogen gas is produced. This can be confirmed by the burning splint test (squeaky pop). Dilute H₂SO₄ gives H₂, not SO₂."
  },
  {
    id: 9113, section: "Chemistry",
    text: "What is the common name of the compound CaOCl₂?",
    options: ["A) Bleaching powder", "B) Washing soda", "C) Baking soda", "D) Quick lime"],
    answer: "A",
    explanation: "[CBSE Board 2023] CaOCl₂ is bleaching powder (calcium hypochlorite/calcium oxychloride). It is made by passing Cl₂ over dry slaked lime Ca(OH)₂. Used as a disinfectant and bleaching agent."
  },
  {
    id: 9114, section: "Chemistry",
    text: "Which of the following correctly represents 360g of water?",
    options: ["A) 2 moles of water", "B) 20 moles of water", "C) 36 moles of water", "D) 18 moles of water"],
    answer: "B",
    explanation: "[CBSE Board 2021] Molar mass of H₂O = 2(1) + 16 = 18 g/mol. Moles = mass/molar mass = 360/18 = 20 moles. This is a standard mole calculation based on CBSE curriculum."
  },
  {
    id: 9115, section: "Chemistry",
    text: "pH of a solution is 3. If the solution is diluted 10 times, the new pH will be:",
    options: ["A) 3", "B) 4", "C) Less than 3", "D) More than 3 but less than 7"],
    answer: "D",
    explanation: "[CBSE Board Sample Paper] Diluting an acid reduces H⁺ ion concentration, so pH increases (becomes less acidic) but stays below 7 since the solution remains acidic. pH moves from 3 towards 7."
  },

  // Ch3: Metals & Non-metals (9116–9123)
  {
    id: 9116, section: "Chemistry",
    text: "An element A is soft, can be cut with a knife, very reactive, stored under kerosene, reacts with water vigorously to produce a gas. Element A is most likely:",
    options: ["A) Magnesium", "B) Calcium", "C) Sodium", "D) Phosphorus"],
    answer: "C",
    explanation: "[CBSE Board 2022] Sodium (Na) is soft, highly reactive, stored under kerosene (to prevent reaction with air/moisture), and reacts vigorously with water: 2Na + 2H₂O → 2NaOH + H₂↑. It catches fire in air."
  },
  {
    id: 9117, section: "Chemistry",
    text: "When aluminium strip is kept immersed in freshly prepared ferrous sulphate solution, which change is observed?",
    options: ["A) Light green solution turns brown", "B) Blue solution turns green", "C) Light green solution turns blue", "D) No change is observed since Al does not react with FeSO₄"],
    answer: "A",
    explanation: "[CBSE Board 2020] Al + FeSO₄ → Al₂(SO₄)₃ + Fe. Aluminium displaces iron (Al is more reactive than Fe). The light green colour of FeSO₄ turns brown as iron deposits. Al₂(SO₄)₃ solution is colourless."
  },
  {
    id: 9118, section: "Chemistry",
    text: "The most abundant metal in Earth's crust is:",
    options: ["A) Iron", "B) Zinc", "C) Copper", "D) Aluminium"],
    answer: "D",
    explanation: "[CBSE Board 2019] Aluminium is the most abundant metal in Earth's crust (about 8% by mass). Iron is the most abundant element in Earth's core. Silicon is most abundant element in crust overall."
  },
  {
    id: 9119, section: "Chemistry",
    text: "Which of the following reactions will occur? (Reactivity order: Zn > Fe > Cu > Ag)",
    options: ["A) CuSO₄ + Zn → ZnSO₄ + Cu", "B) ZnSO₄ + Cu → CuSO₄ + Zn", "C) FeSO₄ + Cu → CuSO₄ + Fe", "D) CuSO₄ + Ag → AgSO₄ + Cu"],
    answer: "A",
    explanation: "[CBSE Board PYQ] Displacement reactions occur only when a more reactive metal displaces a less reactive one. Zn is more reactive than Cu, so Zn + CuSO₄ → ZnSO₄ + Cu occurs. Cu cannot displace Zn (less reactive); Cu cannot displace Fe; Ag cannot displace Cu."
  },

  {
    id: 9120, section: "Chemistry",
    text: "A reddish-brown metal X reacts with dilute H₂SO₄ in the presence of oxygen to form a blue-green solution. Metal X is:",
    options: ["A) Iron", "B) Copper", "C) Zinc", "D) Lead"],
    answer: "B",
    explanation: "[CBSE Board 2022] Copper is reddish-brown. It does not react with dilute H₂SO₄ normally, but in the presence of oxygen it reacts to form copper sulphate (CuSO₄) which gives a blue-green solution."
  },
  {
    id: 9121, section: "Chemistry",
    text: "Which of the following metals does not react with oxygen even at high temperatures?",
    options: ["A) Calcium", "B) Sodium", "C) Platinum", "D) Potassium"],
    answer: "C",
    explanation: "[CBSE Board 2023] Platinum (and gold) are noble metals that do not react with oxygen even at high temperatures — they are at the bottom of the reactivity series. This is why gold/platinum remain lustrous."
  },
  {
    id: 9122, section: "Chemistry",
    text: "In the electrolytic refining of copper, which electrode is made of impure copper?",
    options: ["A) Cathode", "B) Anode", "C) Both cathode and anode", "D) Electrolyte only"],
    answer: "B",
    explanation: "[CBSE Board PYQ] In electrolytic refining of copper: impure copper is the ANODE (dissolves), pure copper deposits on the CATHODE. Anode mud collects impurities like silver and gold under the anode."
  },
  {
    id: 9123, section: "Chemistry",
    text: "Stainless steel is an example of:",
    options: ["A) A compound", "B) An element", "C) An alloy", "D) A mixture of non-metals"],
    answer: "C",
    explanation: "[CBSE Board 2020] Stainless steel is an alloy of iron, carbon, chromium, and nickel. Alloys are homogeneous mixtures of metals (or metals with non-metals) with improved properties like hardness and corrosion resistance."
  },

  // Ch4: Carbon Compounds (9124–9131)
  {
    id: 9124, section: "Chemistry",
    text: "Ethanol reacts with sodium to give hydrogen gas and sodium ethoxide. This shows that ethanol contains:",
    options: ["A) A hydrogen that can be replaced by sodium", "B) Oxygen which reacts with sodium", "C) Carbon that reacts with sodium", "D) All atoms react with sodium"],
    answer: "A",
    explanation: "[CBSE Board 2021] 2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑. The –OH hydrogen in ethanol is replaced by sodium. This is characteristic of the –OH (hydroxyl) group. Sodium replaces the active hydrogen."
  },
  {
    id: 9125, section: "Chemistry",
    text: "Which of the following is the correct electron dot structure of ethane (C₂H₆)?",
    options: ["A) Ethane has a carbon-carbon double bond", "B) Ethane has only single bonds between all atoms", "C) Ethane has a carbon-carbon triple bond", "D) Ethane has one carbon-carbon bond and one C=O bond"],
    answer: "B",
    explanation: "[CBSE Board PYQ] Ethane (C₂H₆) is a saturated hydrocarbon (alkane). It has only single bonds: one C–C bond and six C–H bonds. No double or triple bonds. This makes it less reactive than alkenes/alkynes."
  },
  {
    id: 9126, section: "Chemistry",
    text: "Oxidation of ethanol with alkaline KMnO₄ gives:",
    options: ["A) Ethanoic acid", "B) Ethene", "C) Methanoic acid", "D) Ethanal only"],
    answer: "A",
    explanation: "[CBSE Board 2022] Ethanol (C₂H₅OH) when oxidised by alkaline KMnO₄ or acidified K₂Cr₂O₇ gives ethanoic acid (CH₃COOH). This is an important oxidation reaction: C₂H₅OH → CH₃CHO → CH₃COOH."
  },
  {
    id: 9127, section: "Chemistry",
    text: "Which of the following does NOT belong to the homologous series of alcohols?",
    options: ["A) CH₃OH", "B) C₂H₅OH", "C) C₃H₇OH", "D) C₂H₅COOH"],
    answer: "D",
    explanation: "[CBSE Board 2023] C₂H₅COOH is propionic acid (propanoic acid), not an alcohol. Alcohols have the –OH functional group: methanol (CH₃OH), ethanol (C₂H₅OH), propanol (C₃H₇OH) form a homologous series."
  },
  {
    id: 9128, section: "Chemistry",
    text: "The number of covalent bonds in a molecule of ethyne (C₂H₂) is:",
    options: ["A) 2", "B) 3", "C) 5", "D) 4"],
    answer: "C",
    explanation: "[CBSE Board PYQ] Ethyne (H–C≡C–H): the C≡C triple bond counts as 3 covalent bonds, plus 2 C–H single bonds = 3 + 2 = 5 total covalent bonds. Ethyne is an unsaturated hydrocarbon with the highest degree of unsaturation among C2 hydrocarbons."
  },

  {
    id: 9129, section: "Chemistry",
    text: "When ethanol is heated with concentrated H₂SO₄ at 170°C, the product formed is:",
    options: ["A) Ethanoic acid", "B) Ethene", "C) Diethyl ether", "D) Ethane"],
    answer: "B",
    explanation: "[CBSE Board 2021] C₂H₅OH → (conc. H₂SO₄, 170°C) → CH₂=CH₂ + H₂O. Ethene is formed by dehydration. At lower temperature (140°C) with excess ethanol, diethyl ether forms instead."
  },
  {
    id: 9130, section: "Chemistry",
    text: "Cleansing action of soap is due to:",
    options: ["A) Saponification", "B) Emulsification", "C) Precipitation", "D) Neutralisation"],
    answer: "B",
    explanation: "[CBSE Board 2022] Soap molecules have a hydrophilic head (ionic, water-loving) and hydrophobic tail (water-repelling, oil-loving). They form micelles around oil/grease droplets — this emulsification removes dirt."
  },
  {
    id: 9131, section: "Chemistry",
    text: "Detergents are preferred over soaps in hard water because:",
    options: ["A) Detergents form more lather", "B) Detergents do not form scum with hard water", "C) Detergents are cheaper than soaps", "D) Detergents clean better in general"],
    answer: "B",
    explanation: "[CBSE Board 2023] Hard water contains Ca²⁺ and Mg²⁺ ions. These ions react with soap (fatty acid salts) to form insoluble scum. Detergents (synthetic surfactants) do not react with hard water ions — no scum forms."
  },

  // ══════════════════════════════════════════════════════
  // SECTION: Biology (Q32–Q62) — IDs 9132–9162
  // Ch5: Life Processes (9132–9140)
  // ══════════════════════════════════════════════════════

  {
    id: 9132, section: "Biology",
    text: "The enzyme pepsin is secreted by:",
    options: ["A) Liver", "B) Pancreas", "C) Gastric glands in stomach wall", "D) Salivary glands"],
    answer: "C",
    explanation: "[CBSE Board 2022] Pepsin is secreted by the gastric glands (chief cells) in the stomach wall. It digests proteins into peptides. Pepsin works in the acidic environment (HCl) of the stomach."
  },
  {
    id: 9133, section: "Biology",
    text: "Which of the following is not a function of the kidney?",
    options: ["A) Regulation of blood glucose level", "B) Removal of urea from blood", "C) Regulation of water balance in body", "D) Removal of excess salts from body"],
    answer: "A",
    explanation: "[CBSE Board 2021] Regulation of blood glucose is done by the pancreas (insulin and glucagon hormones), not the kidney. Kidneys filter urea, regulate water balance, and remove excess salts."
  },
  {
    id: 9134, section: "Biology",
    text: "The inner lining of the small intestine has finger-like projections called villi. What is their function?",
    options: ["A) Secretion of digestive juices", "B) Absorption of nutrients into blood", "C) Production of bile", "D) Mechanical digestion of food"],
    answer: "B",
    explanation: "[CBSE Board 2020] Villi (singular: villus) are finger-like projections in the small intestine that vastly increase the surface area for absorption of digested food (glucose, amino acids, fatty acids) into the bloodstream."
  },
  {
    id: 9135, section: "Biology",
    text: "What is the advantage of having four chambers in the human heart?",
    options: ["A) It allows more blood to be stored", "B) It prevents mixing of oxygenated and deoxygenated blood", "C) It increases the speed of pumping", "D) It reduces the effort of breathing"],
    answer: "B",
    explanation: "[CBSE Board 2022] The four-chambered heart completely separates oxygenated blood (left side) from deoxygenated blood (right side). This ensures efficient oxygen supply to body cells — essential for warm-blooded animals."
  },
  {
    id: 9136, section: "Biology",
    text: "Which of the following transports water and minerals from roots to leaves in plants?",
    options: ["A) Phloem", "B) Cortex", "C) Xylem", "D) Epidermis"],
    answer: "C",
    explanation: "[CBSE Board 2019] Xylem transports water and dissolved minerals from roots upward to leaves (transpiration pull). Phloem transports prepared food (sugars) from leaves to other parts of the plant."
  },
  {
    id: 9137, section: "Biology",
    text: "The process by which carbon dioxide is released from the body is called:",
    options: ["A) Breathing", "B) Respiration", "C) Exhalation", "D) Transpiration"],
    answer: "A",
    explanation: "[CBSE Board 2020] Breathing (or ventilation) is the physical process of inhaling oxygen and exhaling carbon dioxide. Respiration is the cellular chemical process that produces CO₂. Exhalation is one phase of breathing."
  },
  {
    id: 9138, section: "Biology",
    text: "In which part of a plant does photosynthesis mainly occur?",
    options: ["A) Stem", "B) Root", "C) Flower", "D) Leaf"],
    answer: "D",
    explanation: "[CBSE Board 2021] Leaves are the main site of photosynthesis. They contain chlorophyll in chloroplasts, have a large flat surface to capture sunlight, and stomata for gas exchange (CO₂ in, O₂ out)."
  },
  {
    id: 9139, section: "Biology",
    text: "Name the blood vessel that carries oxygenated blood from the left ventricle to all parts of the body:",
    options: ["A) Vena cava", "B) Pulmonary artery", "C) Pulmonary vein", "D) Aorta"],
    answer: "D",
    explanation: "[CBSE Board 2023] The aorta is the largest artery that carries oxygenated blood from the left ventricle to all parts of the body. Pulmonary artery carries deoxygenated blood to lungs; pulmonary vein brings it back oxygenated."
  },
  {
    id: 9140, section: "Biology",
    text: "Which of the following is not related to excretion in plants?",
    options: ["A) Stomata release CO₂", "B) Resins and gums stored in old xylem", "C) Oxygen released during photosynthesis", "D) Fallen leaves carry waste products"],
    answer: "C",
    explanation: "[CBSE Board PYQ] Oxygen released during photosynthesis is a by-product of the photosynthesis reaction (from water splitting), NOT an excretory product. Excretion refers to waste metabolic products; O₂ is a useful product."
  },

  // Ch6: Control & Coordination (9141–9147)
  {
    id: 9141, section: "Biology",
    text: "Which is the correct sequence of events in a reflex action?",
    options: ["A) Receptor → Effector → Afferent nerve → CNS → Efferent nerve", "B) Receptor → Afferent nerve → CNS → Efferent nerve → Effector", "C) Effector → CNS → Receptor → Efferent nerve → Afferent nerve", "D) CNS → Receptor → Afferent nerve → Effector → Efferent nerve"],
    answer: "B",
    explanation: "[CBSE Board 2022] Correct reflex arc sequence: Receptor (detects stimulus) → Afferent (sensory) nerve → CNS (spinal cord) → Efferent (motor) nerve → Effector (muscle/gland). This allows rapid involuntary response."
  },
  {
    id: 9142, section: "Biology",
    text: "Which of the following plant hormones promotes cell elongation in shoots and is responsible for phototropism?",
    options: ["A) Cytokinin", "B) Gibberellin", "C) Auxin", "D) Abscisic acid"],
    answer: "C",
    explanation: "[CBSE Board 2021] Auxin is produced at the shoot tip. In phototropism, auxin moves to the shaded side, causing more elongation there — bending the shoot toward light. Abscisic acid promotes dormancy and wilting."
  },
  {
    id: 9143, section: "Biology",
    text: "The pituitary gland is often called the 'master gland' because:",
    options: ["A) It is the largest gland in the body", "B) It controls the functioning of other endocrine glands", "C) It produces the most hormones", "D) It is located in the brain near all other glands"],
    answer: "B",
    explanation: "[CBSE Board 2022] The pituitary gland (located at base of brain) is called the master gland because it secretes hormones that regulate/stimulate other endocrine glands like thyroid, adrenal, and gonads."
  },
  {
    id: 9144, section: "Biology",
    text: "Growth of pollen tube towards the ovule is an example of:",
    options: ["A) Phototropism", "B) Geotropism", "C) Chemotropism", "D) Hydrotropism"],
    answer: "C",
    explanation: "[CBSE Board 2020] Chemotropism is movement/growth in response to chemical stimuli. The pollen tube grows toward the ovule in response to chemical substances released by the ovule — this is chemotropism."
  },
  {
    id: 9145, section: "Biology",
    text: "Diabetes mellitus is caused due to deficiency of which hormone?",
    options: ["A) Thyroxine", "B) Adrenaline", "C) Insulin", "D) Growth hormone"],
    answer: "C",
    explanation: "[CBSE Board 2023] Diabetes mellitus (Type 1) is caused by deficiency of insulin produced by β-cells of islets of Langerhans in the pancreas. Without insulin, cells cannot absorb glucose → high blood sugar."
  },
  {
    id: 9146, section: "Biology",
    text: "Which part of the brain is responsible for maintaining posture and balance?",
    options: ["A) Cerebrum", "B) Medulla oblongata", "C) Pons", "D) Cerebellum"],
    answer: "D",
    explanation: "[CBSE Board 2021] The cerebellum controls coordination, balance, and posture. It coordinates voluntary muscle movements. The cerebrum is for thinking; medulla controls involuntary vital functions like heartbeat."
  },
  {
    id: 9147, section: "Biology",
    text: "Identify the mismatched pair:",
    options: ["A) Adrenaline – Emergency hormone", "B) Insulin – Lowers blood glucose", "C) Thyroxine – Regulates metabolism", "D) Testosterone – Controls water balance in kidney"],
    answer: "D",
    explanation: "[CBSE Board 2022] Testosterone is the male sex hormone — it controls development of secondary sexual characters, NOT water balance. Water balance in kidneys is regulated by ADH (antidiuretic hormone) from pituitary."
  },

  // Ch7: Reproduction (9148–9155)
  {
    id: 9148, section: "Biology",
    text: "The mode of reproduction in Hydra is:",
    options: ["A) Binary fission", "B) Budding", "C) Spore formation", "D) Fragmentation"],
    answer: "B",
    explanation: "[CBSE Board 2019] Hydra reproduces asexually by budding — a small bud grows on the parent body, develops into a new individual, and eventually detaches. Amoeba divides by binary fission; Rhizopus by spores."
  },
  {
    id: 9149, section: "Biology",
    text: "Which of the following changes is seen in girls at puberty?",
    options: ["A) Voice becomes hoarse", "B) Breast size increases", "C) Appearance of moustache", "D) Development of beard"],
    answer: "B",
    explanation: "[CBSE Board 2020] In girls, puberty changes include breast development, widening of hips, growth of pubic/underarm hair, and onset of menstruation. Hoarse voice, moustache, and beard are male puberty changes."
  },
  {
    id: 9150, section: "Biology",
    text: "Which part of the flower gets converted into fruit after fertilisation?",
    options: ["A) Stigma", "B) Style", "C) Ovary", "D) Petal"],
    answer: "C",
    explanation: "[CBSE Board 2021] After fertilisation: ovule → seed, ovary → fruit. The ovary wall thickens to form the fruit (pericarp). Petals, sepals, stamens, and style usually wither away after fertilisation."
  },
  {
    id: 9151, section: "Biology",
    text: "In human males, the testes are located outside the abdominal cavity in the scrotum because:",
    options: ["A) There is no space in the abdomen", "B) Sperm production requires slightly lower temperature than body temperature", "C) Hormones are better secreted there", "D) Blood supply is better outside"],
    answer: "B",
    explanation: "[CBSE Board 2022] Sperm production (spermatogenesis) requires a temperature about 2–3°C lower than normal body temperature (37°C). The scrotum maintains this lower temperature. Sperm produced at body temp would be non-viable."
  },
  {
    id: 9152, section: "Biology",
    text: "The contraceptive method that prevents fertilisation without blocking sperm transport is:",
    options: ["A) Condom", "B) Copper-T", "C) Vasectomy", "D) Tubectomy"],
    answer: "B",
    explanation: "[CBSE Board PYQ] Copper-T is an intrauterine device (IUD) that prevents implantation of fertilised egg or may prevent fertilisation. It does not block sperm transport. Condom blocks sperm; vasectomy/tubectomy cut tubes."
  },
  {
    id: 9153, section: "Biology",
    text: "What is the result of self-pollination over many generations?",
    options: ["A) Hybrid vigour", "B) Genetic diversity", "C) Inbreeding depression", "D) More genetic variation"],
    answer: "C",
    explanation: "[CBSE Board 2023] Continuous self-pollination leads to inbreeding depression — reduced genetic variation and accumulation of harmful recessive traits. Cross-pollination produces hybrid vigour and genetic diversity."
  },
  {
    id: 9154, section: "Biology",
    text: "A woman has delivered a baby girl. Which of the following correctly explains why?",
    options: ["A) The egg contributed X chromosome; sperm contributed X chromosome", "B) The egg contributed Y chromosome; sperm contributed X chromosome", "C) The egg contributed X chromosome; sperm contributed Y chromosome", "D) Both egg and sperm contributed Y chromosomes"],
    answer: "A",
    explanation: "[CBSE Board 2021] Female is XX. The egg always contributes X. If the sperm also contributes X (not Y), the result is XX = girl. If sperm contributes Y, result is XY = boy. So for a girl: egg (X) + sperm (X)."
  },
  {
    id: 9155, section: "Biology",
    text: "Identical twins are formed when:",
    options: ["A) Two eggs are fertilised by two different sperms", "B) One fertilised egg divides into two embryos", "C) Two eggs are fertilised by one sperm", "D) One sperm fertilises two eggs"],
    answer: "B",
    explanation: "[CBSE Board PYQ] Identical (monozygotic) twins form when one fertilised egg (zygote) splits into two genetically identical embryos. Fraternal twins form from two different eggs fertilised by two different sperms."
  },

  // Ch8: Heredity & Evolution (9156–9162)
  {
    id: 9156, section: "Biology",
    text: "In Mendel's experiment, when pure tall pea plants were crossed with pure dwarf pea plants, the F1 generation had all tall plants. When F1 plants were self-pollinated, the ratio of tall to dwarf plants in F2 was:",
    options: ["A) 1:3", "B) 3:1", "C) 1:1", "D) 2:1"],
    answer: "B",
    explanation: "[CBSE Board 2020] Tt × Tt → TT : Tt : tt = 1:2:1. Phenotype ratio: 3 tall (TT + 2Tt) : 1 dwarf (tt) = 3:1. This is Mendel's Law of Segregation demonstrated in the F2 generation."
  },
  {
    id: 9157, section: "Biology",
    text: "If both parents carry heterozygous gene for blood group AB (IA IB), their offspring may have which blood groups?",
    options: ["A) A and B only", "B) A, B, AB, and O", "C) AB only", "D) A, B, and AB only"],
    answer: "D",
    explanation: "[CBSE Board PYQ] IA IB × IA IB → IA IA (Blood group A) : IA IB (AB) : IB IB (Blood group B) = 1:2:1. Possible blood groups: A, AB, and B (ratio 1:2:1). Blood group O (ii) cannot appear from this cross."
  },
  {
    id: 9158, section: "Biology",
    text: "Which of the following is an example of analogous organs?",
    options: ["A) Wings of bat and forelimbs of horse", "B) Wings of bat and wings of butterfly", "C) Forelimbs of frog and arms of human", "D) Thorn of rose and spine of cactus"],
    answer: "B",
    explanation: "[CBSE Board 2022] Analogous organs have different structure/origin but perform the same function. Wings of bat (modified forelimb, bone+membrane) and wings of butterfly (chitin) look similar but have different origins."
  },
  {
    id: 9159, section: "Biology",
    text: "According to Darwin's theory of evolution, 'survival of the fittest' means:",
    options: ["A) Only physically strongest organisms survive", "B) Organisms best adapted to their environment have better survival chances", "C) Fastest organisms always survive", "D) Largest organisms have most offspring"],
    answer: "B",
    explanation: "[CBSE Board 2021] Darwin's natural selection: organisms with variations better suited to their environment survive longer, reproduce more, and pass traits to offspring. 'Fitness' means reproductive success, not physical strength."
  },
  {
    id: 9160, section: "Biology",
    text: "The two versions of a gene present in sexually reproducing organisms are called:",
    options: ["A) Chromosomes", "B) Alleles", "C) Gametes", "D) Genotypes"],
    answer: "B",
    explanation: "[CBSE Board 2023] Alleles are alternate forms of the same gene at the same locus on homologous chromosomes. In diploid organisms, there are two alleles for each gene (one from each parent). They may be identical or different."
  },
  {
    id: 9161, section: "Biology",
    text: "Mendel's Law of Independent Assortment is applicable when genes are:",
    options: ["A) Located on the same chromosome", "B) Linked genes", "C) Located on different (non-homologous) chromosomes", "D) Identical alleles only"],
    answer: "C",
    explanation: "[CBSE Board PYQ] Mendel's Law of Independent Assortment states that alleles of different genes are distributed independently during gamete formation. This applies when genes are on different (non-homologous) chromosomes."
  },
  {
    id: 9162, section: "Biology",
    text: "Which of the following pieces of evidence supports the theory of evolution?",
    options: ["A) All organisms have the same DNA", "B) Fossil record showing simpler organisms in older strata", "C) All organisms look similar", "D) All organisms live in the same environment"],
    answer: "B",
    explanation: "[CBSE Board 2022] The fossil record shows a progression from simpler to more complex organisms in successively younger geological strata. Older (deeper) strata contain fossils of simpler organisms — direct evidence of evolution over time."
  },

  // ══════════════════════════════════════════════════════
  // SECTION: Physics (Q63–Q93) — IDs 9163–9193
  // Ch9: Light – Reflection & Refraction (9163–9170)
  // ══════════════════════════════════════════════════════

  {
    id: 9163, section: "Physics",
    text: "An object is placed at a distance of 30 cm in front of a concave mirror of focal length 15 cm. The image formed is:",
    options: ["A) Virtual, erect and magnified", "B) Real, inverted and same size as object", "C) Real, inverted and diminished", "D) Virtual, erect and of same size"],
    answer: "B",
    explanation: "[CBSE Board PYQ] u = -30 cm, f = -15 cm. Mirror formula: 1/v + 1/u = 1/f. 1/v = 1/(-15) - 1/(-30) = -2/30 + 1/30 = -1/30. So v = -30 cm. Magnification m = -v/u = -(−30)/(−30) = -1. Image is real, inverted, same size as object, formed at centre of curvature (C)."
  },

  {
    id: 9164, section: "Physics",
    text: "The mirror formula is 1/v + 1/u = 1/f. If an object is placed at the centre of curvature of a concave mirror, the image is formed:",
    options: ["A) At infinity", "B) At the focus", "C) At the centre of curvature itself", "D) Between F and C"],
    answer: "C",
    explanation: "[CBSE Board 2021] When object is at C (u = 2f), using 1/v + 1/u = 1/f: 1/v = 1/f − 1/2f = 1/2f, so v = 2f = C. Image is at centre of curvature — real, inverted, same size. Magnification = −1."
  },
  {
    id: 9165, section: "Physics",
    text: "A person looking through a convex lens sees the image of a far object. The image will be:",
    options: ["A) Virtual, erect and diminished", "B) Virtual, erect and magnified", "C) Real, inverted and diminished", "D) Real, erect and same size"],
    answer: "C",
    explanation: "[CBSE Board 2022] For a far (distant) object, a convex lens forms a real, inverted, diminished image at the focus (or near focus). A convex lens only forms virtual, erect, magnified image when object is within focal length."
  },
  {
    id: 9166, section: "Physics",
    text: "Refractive index of glass with respect to air is 1.5. What is the speed of light in glass? (Speed of light in air = 3 × 10⁸ m/s)",
    options: ["A) 4.5 × 10⁸ m/s", "B) 2 × 10⁸ m/s", "C) 1.5 × 10⁸ m/s", "D) 3 × 10⁸ m/s"],
    answer: "B",
    explanation: "[CBSE Board 2020] Refractive index n = speed of light in air / speed of light in glass. So speed in glass = 3×10⁸ / 1.5 = 2×10⁸ m/s. Light slows down when it enters a denser medium like glass."
  },
  {
    id: 9167, section: "Physics",
    text: "Which colour of white light is deviated the most when passed through a prism?",
    options: ["A) Red", "B) Yellow", "C) Green", "D) Violet"],
    answer: "D",
    explanation: "[CBSE Board 2019] Violet light has the shortest wavelength and highest frequency — it refracts the most in a prism. Red light has the longest wavelength and refracts least. Order of deviation: V > I > B > G > Y > O > R."
  },
  {
    id: 9168, section: "Physics",
    text: "A ray of light strikes the surface of a plane mirror at an angle of 40° to the mirror surface. The angle of reflection is:",
    options: ["A) 40°", "B) 50°", "C) 80°", "D) 90°"],
    answer: "B",
    explanation: "[CBSE Board 2021] Angle to mirror surface = 40°. Angle of incidence (from normal) = 90° − 40° = 50°. By law of reflection, angle of incidence = angle of reflection = 50°. Note: always measure angles from the normal."
  },
  {
    id: 9169, section: "Physics",
    text: "The power of a lens is −2 D. What is its focal length and type?",
    options: ["A) 50 cm, convex lens", "B) 50 cm, concave lens", "C) 200 cm, convex lens", "D) 2 cm, concave lens"],
    answer: "B",
    explanation: "[CBSE Board 2022] P = 1/f → f = 1/P = 1/(−2) = −0.5 m = −50 cm. Negative focal length = concave (diverging) lens. Negative power always indicates a concave lens. Positive power = convex lens."
  },
  {
    id: 9170, section: "Physics",
    text: "Why does the sun appear reddish at sunrise and sunset?",
    options: ["A) Sun produces more red light at these times", "B) Blue light is scattered away by atmosphere; red reaches us", "C) Clouds reflect only red light", "D) Earth's atmosphere absorbs blue and green light"],
    answer: "B",
    explanation: "[CBSE Board 2020] At sunrise/sunset, sunlight travels through a longer atmospheric path. Blue light (short wavelength) is scattered away. Red and orange light (longer wavelengths, less scattered) reach our eyes — making sun appear red."
  },

  // Ch10: Human Eye (9171–9177)
  {
    id: 9171, section: "Physics",
    text: "A student is unable to see clearly the blackboard while sitting at the back of the class. The student most likely has:",
    options: ["A) Hypermetropia", "B) Presbyopia", "C) Astigmatism", "D) Myopia"],
    answer: "D",
    explanation: "[CBSE Board 2021] Myopia (short-sightedness) causes difficulty seeing distant objects (like blackboard from back). The distant image forms in front of the retina. Corrected with concave lens."
  },
  {
    id: 9172, section: "Physics",
    text: "A person with myopia has near point at 10 cm and far point at 50 cm. What kind of lens should be used to correct the vision?",
    options: ["A) Convex lens of focal length 50 cm", "B) Concave lens of focal length 50 cm", "C) Concave lens of focal length 25 cm", "D) Convex lens of focal length 25 cm"],
    answer: "B",
    explanation: "[CBSE Board 2022] For myopia, we need the lens to form a virtual image of a distant object at the far point (50 cm). Using lens formula: 1/v − 1/u = 1/f, with u=∞, v=−50 cm → f = −50 cm. Concave lens, f = −50 cm."
  },
  {
    id: 9173, section: "Physics",
    text: "Splitting of white light into seven colours on passing through a glass prism is due to:",
    options: ["A) Reflection of light", "B) Different speeds of different colour light in glass", "C) Total internal reflection", "D) Diffraction of light"],
    answer: "B",
    explanation: "[CBSE Board 2023] Dispersion occurs because different colours of light have different wavelengths and travel at different speeds in glass — hence different refractive indices. Violet slows most; red slows least, so they separate."
  },
  {
    id: 9174, section: "Physics",
    text: "Planets do not twinkle like stars because:",
    options: ["A) Planets are closer and appear as extended sources; fluctuations average out", "B) Planets produce their own light", "C) Planets are larger than stars", "D) Planets move faster than stars"],
    answer: "A",
    explanation: "[CBSE Board 2020] Stars twinkle because they are point sources (very far away) — slight atmospheric refraction changes make them appear to flicker. Planets appear as extended discs; fluctuations at different points average out, so no twinkling."
  },
  {
    id: 9175, section: "Physics",
    text: "What is the far point of a person suffering from myopia?",
    options: ["A) At infinity", "B) At 25 cm", "C) Closer than infinity", "D) Beyond 25 cm"],
    answer: "C",
    explanation: "[CBSE Board 2021] A person with myopia (near-sightedness) can only see nearby objects clearly. Their far point is closer than infinity (often a few metres). They cannot focus on objects beyond their far point."
  },
  {
    id: 9176, section: "Physics",
    text: "The focal length of an eye lens of normal human eye is maximum when:",
    options: ["A) Looking at nearby objects", "B) Looking at very distant objects", "C) Eye is in complete relaxation and sees far objects", "D) Eye is in darkness"],
    answer: "C",
    explanation: "[CBSE Board 2022] When looking at distant objects, the ciliary muscles relax, the suspensory ligaments pull the lens flat (less curved), increasing focal length to its maximum. For near objects, the lens becomes more curved (shorter f)."
  },
  {
    id: 9177, section: "Physics",
    text: "The danger signals are made in red colour because red light:",
    options: ["A) Has the highest frequency", "B) Has the shortest wavelength", "C) Is scattered least by the atmosphere and can be seen from a long distance", "D) Is absorbed most by the atmosphere"],
    answer: "C",
    explanation: "[CBSE Board 2019] Red light has the longest wavelength among visible colours and is scattered least by atmosphere and fog. It can be seen from greater distances — making it ideal for danger signals, traffic lights, and brake lights."
  },

  // Ch11: Electricity (9178–9186)
  {
    id: 9178, section: "Physics",
    text: "A wire of resistance R is bent in a circle. The effective resistance between the two ends of its diameter is:",
    options: ["A) R", "B) R/2", "C) R/4", "D) 2R"],
    answer: "C",
    explanation: "[CBSE Board 2020] When a wire R is bent into a circle, each half = R/2. The two halves are in parallel between the diameter ends. 1/Req = 1/(R/2) + 1/(R/2) = 4/R. So Req = R/4."
  },
  {
    id: 9179, section: "Physics",
    text: "An electric bulb is rated 220V, 100W. When operated at 110V, the power consumed will be:",
    options: ["A) 100 W", "B) 75 W", "C) 50 W", "D) 25 W"],
    answer: "D",
    explanation: "[CBSE Board 2022] Resistance R = V²/P = (220)²/100 = 484 Ω. At 110V: P = V²/R = (110)²/484 = 12100/484 = 25 W. Power is proportional to V², so halving voltage gives one-quarter the power: 100/4 = 25 W."
  },
  {
    id: 9180, section: "Physics",
    text: "Two resistors of 4 Ω and 6 Ω are connected in series. A 12V battery is connected. Current through the circuit is:",
    options: ["A) 1.2 A", "B) 2 A", "C) 3 A", "D) 0.5 A"],
    answer: "A",
    explanation: "[CBSE Board 2021] Series resistance: R = 4 + 6 = 10 Ω. Current I = V/R = 12/10 = 1.2 A. In a series circuit, same current flows through all components."
  },
  {
    id: 9181, section: "Physics",
    text: "The unit of resistivity is:",
    options: ["A) Ω", "B) Ω/m", "C) Ω·m", "D) Ω·m²"],
    answer: "C",
    explanation: "[CBSE Board 2020] Resistivity (ρ) is defined as ρ = RA/L, where R is in Ω, A in m², L in m. Unit = Ω × m²/m = Ω·m (ohm-metre). Resistivity is a property of the material, not the shape of conductor."
  },
  {
    id: 9182, section: "Physics",
    text: "A household uses: refrigerator of 400W for 8h/day, fan of 80W for 12h/day, and tube light of 60W for 6h/day. The total energy consumed per day is:",
    options: ["A) 3.20 kWh", "B) 4.52 kWh", "C) 5.36 kWh", "D) 6.00 kWh"],
    answer: "B",
    explanation: "[CBSE Board 2023] Refrigerator: 400W × 8h = 3200 Wh = 3.20 kWh. Fan: 80W × 12h = 960 Wh = 0.96 kWh. Tube light: 60W × 6h = 360 Wh = 0.36 kWh. Total = 3.20 + 0.96 + 0.36 = 4.52 kWh."
  },
  {
    id: 9183, section: "Physics",
    text: "Why is tungsten used as a filament in electric bulbs?",
    options: ["A) It has low resistance", "B) It has high resistivity and very high melting point", "C) It conducts electricity best", "D) It is cheap and easily available"],
    answer: "B",
    explanation: "[CBSE Board 2021] Tungsten is used because it has high melting point (~3380°C) so it doesn't melt at high temperatures, and high resistivity so it heats up significantly to produce light when current passes through it."
  },
  {
    id: 9184, section: "Physics",
    text: "The resistance of a conductor depends on:",
    options: ["A) Length only", "B) Cross-sectional area only", "C) Nature of material only", "D) Length, cross-sectional area, and nature of material"],
    answer: "D",
    explanation: "[CBSE Board 2022] R = ρL/A, where ρ = resistivity (material property), L = length, A = cross-sectional area. Resistance increases with length and decreases with area. All three factors affect resistance."
  },
  {
    id: 9185, section: "Physics",
    text: "In which of the following circuit arrangements does current remain the same through each component?",
    options: ["A) Parallel circuit", "B) Series circuit", "C) Mixed circuit", "D) Open circuit"],
    answer: "B",
    explanation: "[CBSE Board 2019] In a series circuit, there is only one path for current, so the same current passes through each component. In parallel, current divides — different components may carry different currents."
  },
  {
    id: 9186, section: "Physics",
    text: "A student measures the resistance of a wire using a circuit with ammeter and voltmeter. Ammeter reads 0.5A and voltmeter reads 3V. The resistance is:",
    options: ["A) 1.5 Ω", "B) 3.5 Ω", "C) 6 Ω", "D) 0.17 Ω"],
    answer: "C",
    explanation: "[CBSE Board 2020] Using Ohm's law: R = V/I = 3V / 0.5A = 6 Ω. This is a direct application of V = IR — standard CBSE board practical question."
  },

  // Ch12: Magnetic Effects of Current (9187–9193)
  {
    id: 9187, section: "Physics",
    text: "What happens when the direction of current in a straight conductor in a magnetic field is reversed?",
    options: ["A) The force on the conductor becomes zero", "B) The force direction reverses", "C) The force magnitude doubles", "D) No change in force"],
    answer: "B",
    explanation: "[CBSE Board 2021] By Fleming's left-hand rule, force on current-carrying conductor is F = BIL. Reversing current direction reverses the force direction. This is the principle behind AC motor rotation reversal."
  },
  {
    id: 9188, section: "Physics",
    text: "The phenomenon of electromagnetic induction was discovered by:",
    options: ["A) Maxwell", "B) Faraday", "C) Ohm", "D) Fleming"],
    answer: "B",
    explanation: "[CBSE Board 2022] Michael Faraday discovered electromagnetic induction in 1831 — a changing magnetic field induces an electric current in a conductor. This principle is used in generators, transformers, and induction motors."
  },
  {
    id: 9189, section: "Physics",
    text: "In a step-up transformer, the number of turns in the secondary coil is:",
    options: ["A) Equal to primary coil", "B) Less than primary coil", "C) More than primary coil", "D) Zero"],
    answer: "C",
    explanation: "[CBSE Board 2020] In a step-up transformer, Vs/Vp = Ns/Np. To increase voltage (Vs > Vp), we need Ns > Np (more turns in secondary). Used in power transmission to increase voltage and reduce current losses."
  },
  {
    id: 9190, section: "Physics",
    text: "What is the function of a commutator in a DC motor?",
    options: ["A) To increase the current", "B) To reverse the direction of current in the armature coil periodically", "C) To reduce friction", "D) To increase the magnetic field"],
    answer: "B",
    explanation: "[CBSE Board 2021] The commutator (split ring) reverses the direction of current in the coil every half rotation. This ensures the coil experiences a force in the same direction continuously, maintaining unidirectional rotation."
  },
  {
    id: 9191, section: "Physics",
    text: "A charged particle is moving parallel to a magnetic field. The force on it is:",
    options: ["A) Maximum", "B) Minimum but not zero", "C) Zero", "D) Equal to its weight"],
    answer: "C",
    explanation: "[CBSE Board 2022] Force on moving charge: F = qvB sinθ. When particle moves parallel to the field, θ = 0°, sin 0° = 0, so F = 0. Force is maximum when θ = 90° (perpendicular movement)."
  },
  {
    id: 9192, section: "Physics",
    text: "Which of the following is used to detect a small amount of current in a circuit?",
    options: ["A) Voltmeter", "B) Ammeter", "C) Galvanometer", "D) Rheostat"],
    answer: "C",
    explanation: "[CBSE Board 2019] A galvanometer is a sensitive instrument used to detect small currents and their direction. An ammeter measures current but is less sensitive. Voltmeter measures potential difference; rheostat controls resistance."
  },
  {
    id: 9193, section: "Physics",
    text: "The frequency of AC supply in India is 50 Hz. This means the current changes direction:",
    options: ["A) 25 times per second", "B) 50 times per second", "C) 100 times per second", "D) Once per second"],
    answer: "C",
    explanation: "[CBSE Board 2023] At 50 Hz, the current completes 50 cycles per second. In each cycle, current changes direction twice (once from positive to negative, once from negative to positive). So it changes direction 100 times per second."
  },

  // ══════════════════════════════════════════════════════
  // SECTION: Environment (Q94–Q100) — IDs 9194–9200
  // ══════════════════════════════════════════════════════

  {
    id: 9194, section: "Environment",
    text: "In a food chain, the amount of energy available decreases at each trophic level. This is because:",
    options: ["A) Organisms at higher levels are bigger", "B) Energy is lost as heat at each trophic level", "C) Sunlight decreases at higher levels", "D) There are fewer organisms at higher levels"],
    answer: "B",
    explanation: "[CBSE Board 2021] At each trophic level, organisms use energy for metabolic activities; much is lost as heat. Only about 10% of energy is transferred to the next level (10% law by Lindemann). This is why food chains rarely have more than 4–5 links."
  },
  {
    id: 9195, section: "Environment",
    text: "The increase in concentration of DDT through food chain from plankton to fish to fish-eating birds is an example of:",
    options: ["A) Eutrophication", "B) Bioaccumulation at same level", "C) Biomagnification", "D) Natural selection"],
    answer: "C",
    explanation: "[CBSE Board 2022] Biomagnification (biological magnification) is the progressive increase in concentration of non-biodegradable substances (like DDT, mercury) as they move up the food chain. Top predators accumulate highest concentrations."
  },
  {
    id: 9196, section: "Environment",
    text: "Which of the following is NOT a greenhouse gas?",
    options: ["A) Carbon dioxide", "B) Methane", "C) Water vapour", "D) Nitrogen"],
    answer: "D",
    explanation: "[CBSE Board 2020] Greenhouse gases trap heat radiation: CO₂, CH₄, H₂O vapour, N₂O, and ozone. Nitrogen (N₂) makes up 78% of atmosphere but is NOT a greenhouse gas — it is transparent to heat radiation."
  },
  {
    id: 9197, section: "Environment",
    text: "Management of forest resources following the principle of 'sustainable development' means:",
    options: ["A) Using all forest resources as fast as possible", "B) Protecting forests by not using any resources", "C) Using resources in a way that meets current needs without compromising future generations", "D) Allowing only industries to use forest resources"],
    answer: "C",
    explanation: "[CBSE Board 2021] Sustainable development (Brundtland Commission definition) means meeting current needs without depleting resources for future generations. It balances economic use with conservation for long-term availability."
  },
  {
    id: 9198, section: "Environment",
    text: "The Ganga Action Plan was launched to:",
    options: ["A) Increase water flow in Ganga", "B) Prevent industrial and municipal pollution of the Ganga", "C) Build more dams on Ganga", "D) Promote navigation on Ganga"],
    answer: "B",
    explanation: "[CBSE Board 2022] The Ganga Action Plan (1985) was launched to reduce pollution from industrial effluents, sewage, and solid waste being dumped into the Ganga. It aimed to restore the river's water quality through treatment plants and regulations."
  },
  {
    id: 9199, section: "Environment",
    text: "Which of the following is an example of water harvesting practised in Rajasthan?",
    options: ["A) Check dams", "B) Khadins and Kunds", "C) Bawris", "D) Bamboo drip irrigation"],
    answer: "B",
    explanation: "[CBSE Board 2023] Khadins (a technique to collect rainwater runoff) and Kunds (underground cisterns to collect rainwater) are traditional water harvesting systems of Rajasthan. Bamboo drip irrigation is from Meghalaya."
  },
  {
    id: 9200, section: "Environment",
    text: "Which of the following correctly describes the 3R principle for environment conservation?",
    options: ["A) Reduce, Reuse, Recycle", "B) Remove, Restore, Rebuild", "C) Reduce, Remove, Recycle", "D) Replace, Reuse, Rebuild"],
    answer: "A",
    explanation: "[CBSE Board 2020] The 3R principle for environmental conservation: Reduce (use less resources), Reuse (use items again before discarding), Recycle (convert waste into new materials). Following 3R reduces waste and conserves natural resources."
  }

];
