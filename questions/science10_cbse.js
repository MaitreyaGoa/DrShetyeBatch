// science10_cbse.js – Dr Shetye Academic Programme
// Std 10 Science Special Test — CBSE Syllabus 2025-26
// 100 Questions · IDs 9001–9100
// Distribution: Chemistry 31Q | Biology 31Q | Physics 31Q | Environment 7Q

var questions = [

  // ══════════════════════════════════════════════════════
  // SECTION: Chemistry (Q1–Q31) IDs 9001–9031
  // Unit 1: Chemical Reactions & Equations (9001–9007)
  // ══════════════════════════════════════════════════════

  {
    id: 9001, section: "Chemistry",
    text: "Which of the following is an example of a combination reaction?",
    options: ["A) CaCO₃ → CaO + CO₂", "B) 2H₂ + O₂ → 2H₂O", "C) Fe + CuSO₄ → FeSO₄ + Cu", "D) Zn + H₂SO₄ → ZnSO₄ + H₂"],
    answer: "B",
    explanation: "In a combination reaction two or more substances combine to form a single product. H₂ and O₂ combine to form H₂O, making option B the combination reaction."
  },
  {
    id: 9002, section: "Chemistry",
    text: "In the reaction Zn + H₂SO₄ → ZnSO₄ + H₂, zinc undergoes:",
    options: ["A) Reduction only", "B) Oxidation only", "C) Both oxidation and reduction", "D) Neither oxidation nor reduction"],
    answer: "B",
    explanation: "Zinc loses electrons (0 → +2 oxidation state), so it is oxidised. Only oxidation occurs for zinc in this displacement reaction."
  },
  {
    id: 9003, section: "Chemistry",
    text: "Which of the following is a decomposition reaction?",
    options: ["A) Na + Cl₂ → NaCl", "B) 2H₂O → 2H₂ + O₂", "C) CO₂ + H₂O → H₂CO₃", "D) CuO + H₂ → Cu + H₂O"],
    answer: "B",
    explanation: "Decomposition reactions break one compound into two or more simpler substances. Water splitting into H₂ and O₂ is a classic decomposition reaction."
  },
  {
    id: 9004, section: "Chemistry",
    text: "When an iron nail is dipped in copper sulphate solution, the solution turns:",
    options: ["A) Blue", "B) Yellow", "C) Green", "D) Colourless"],
    answer: "C",
    explanation: "Iron displaces copper from CuSO₄ forming FeSO₄ which is green in colour. The blue CuSO₄ solution turns green as iron sulphate forms."
  },
  {
    id: 9005, section: "Chemistry",
    text: "The chemical process responsible for the rancidity of butter and oils is:",
    options: ["A) Reduction", "B) Displacement", "C) Oxidation", "D) Decomposition"],
    answer: "C",
    explanation: "Fats and oils get oxidised when exposed to air, producing unpleasant smell and taste — this is called rancidity, caused by an oxidation reaction."
  },
  {
    id: 9006, section: "Chemistry",
    text: "In the reaction 2PbO + C → 2Pb + CO₂, carbon acts as:",
    options: ["A) An oxidising agent", "B) A reducing agent", "C) A catalyst", "D) A product"],
    answer: "B",
    explanation: "Carbon reduces PbO (removing oxygen from it) to form Pb, while carbon itself is oxidised to CO₂. A substance that reduces another is called a reducing agent."
  },
  {
    id: 9007, section: "Chemistry",
    text: "Which type of reaction is represented by: AB + CD → AD + CB?",
    options: ["A) Combination reaction", "B) Decomposition reaction", "C) Double displacement reaction", "D) Single displacement reaction"],
    answer: "C",
    explanation: "When two compounds exchange their ions to form two new compounds, it is called a double displacement reaction. AB + CD → AD + CB is the general form."
  },

  // Unit 1B: Acids, Bases & Salts (9008–9015)
  {
    id: 9008, section: "Chemistry",
    text: "Which of the following is a strong acid?",
    options: ["A) Acetic acid", "B) Carbonic acid", "C) Hydrochloric acid", "D) Citric acid"],
    answer: "C",
    explanation: "HCl (hydrochloric acid) completely dissociates in water making it a strong acid. Acetic, carbonic and citric acids only partially dissociate — they are weak acids."
  },
  {
    id: 9009, section: "Chemistry",
    text: "The pH of a neutral solution at 25°C is:",
    options: ["A) 0", "B) 14", "C) 7", "D) 1"],
    answer: "C",
    explanation: "A neutral solution has equal H⁺ and OH⁻ concentrations, giving pH = 7 at 25°C. pH below 7 is acidic; above 7 is basic."
  },
  {
    id: 9010, section: "Chemistry",
    text: "Which gas is released when dilute HCl reacts with zinc?",
    options: ["A) Oxygen", "B) Chlorine", "C) Carbon dioxide", "D) Hydrogen"],
    answer: "D",
    explanation: "Zn + 2HCl → ZnCl₂ + H₂↑. Hydrogen gas is released and can be identified by the squeaky pop test with a burning splint."
  },
  {
    id: 9011, section: "Chemistry",
    text: "The chemical formula of baking soda is:",
    options: ["A) Na₂CO₃", "B) NaOH", "C) NaHCO₃", "D) Na₂SO₄"],
    answer: "C",
    explanation: "Baking soda is sodium hydrogen carbonate (NaHCO₃). Washing soda is Na₂CO₃. These two are commonly confused in exams."
  },
  {
    id: 9012, section: "Chemistry",
    text: "Which indicator turns red in an acidic solution?",
    options: ["A) Phenolphthalein", "B) Litmus", "C) Both A and B", "D) Neither A nor B"],
    answer: "B",
    explanation: "Litmus turns red in acid and blue in base. Phenolphthalein turns pink in base and is colourless in acid — it does not turn red."
  },
  {
    id: 9013, section: "Chemistry",
    text: "Plaster of Paris has the chemical formula:",
    options: ["A) CaSO₄·2H₂O", "B) CaSO₄·½H₂O", "C) Ca(OH)₂", "D) CaCO₃"],
    answer: "B",
    explanation: "Plaster of Paris is CaSO₄·½H₂O (calcium sulphate hemihydrate), made by heating gypsum (CaSO₄·2H₂O) to about 100°C."
  },
  {
    id: 9014, section: "Chemistry",
    text: "Which of the following salts is used in fire extinguishers?",
    options: ["A) NaCl", "B) NaHCO₃", "C) Na₂CO₃", "D) CaCO₃"],
    answer: "B",
    explanation: "NaHCO₃ (baking soda/sodium bicarbonate) releases CO₂ when heated or treated with acid, which smothers fire by cutting off oxygen supply."
  },
  {
    id: 9015, section: "Chemistry",
    text: "Dilution of acid in water is:",
    options: ["A) An endothermic process", "B) A neutral process", "C) An exothermic process", "D) No heat change occurs"],
    answer: "C",
    explanation: "Dissolving acid in water releases heat (exothermic). This is why acid must always be added slowly to water, never water to concentrated acid."
  },

  // Unit 1C: Metals & Non-metals (9016–9023)
  {
    id: 9016, section: "Chemistry",
    text: "Which metal is the best conductor of electricity?",
    options: ["A) Iron", "B) Copper", "C) Silver", "D) Gold"],
    answer: "C",
    explanation: "Silver is the best conductor of electricity among all metals. Copper is used commercially due to cost, but silver leads in conductivity."
  },
  {
    id: 9017, section: "Chemistry",
    text: "The process of coating iron with zinc to prevent rusting is called:",
    options: ["A) Electroplating", "B) Galvanisation", "C) Anodising", "D) Tinning"],
    answer: "B",
    explanation: "Galvanisation coats iron/steel with zinc. Zinc acts as a sacrificial anode — it corrodes preferentially, protecting the iron underneath."
  },
  {
    id: 9018, section: "Chemistry",
    text: "Which of the following non-metals is liquid at room temperature?",
    options: ["A) Sulphur", "B) Phosphorus", "C) Bromine", "D) Carbon"],
    answer: "C",
    explanation: "Bromine is the only non-metal that exists as a liquid at room temperature (25°C). Mercury is the only metal that is liquid at room temperature."
  },
  {
    id: 9019, section: "Chemistry",
    text: "The principal ore of aluminium is:",
    options: ["A) Haematite", "B) Magnetite", "C) Galena", "D) Bauxite"],
    answer: "D",
    explanation: "Bauxite (Al₂O₃·2H₂O) is the main ore of aluminium. Haematite and magnetite are iron ores; galena is the ore of lead."
  },
  {
    id: 9020, section: "Chemistry",
    text: "The property that allows metals to be drawn into thin wires is called:",
    options: ["A) Malleability", "B) Lustre", "C) Conductivity", "D) Ductility"],
    answer: "D",
    explanation: "Ductility allows metals to be drawn into wires. Malleability allows them to be beaten into sheets. Gold is the most ductile metal."
  },
  {
    id: 9021, section: "Chemistry",
    text: "Which of the following metals does NOT react with cold water but reacts vigorously with steam?",
    options: ["A) Sodium", "B) Potassium", "C) Magnesium", "D) Calcium"],
    answer: "C",
    explanation: "Magnesium reacts very slowly with cold water but vigorously with steam: Mg + H₂O(steam) → MgO + H₂. Na and K react violently with cold water."
  },
  {
    id: 9022, section: "Chemistry",
    text: "Thermite reaction involves reduction of iron oxide by:",
    options: ["A) Carbon", "B) Hydrogen", "C) Aluminium", "D) Zinc"],
    answer: "C",
    explanation: "Thermite reaction: Fe₂O₃ + 2Al → Al₂O₃ + 2Fe + heat. Aluminium displaces iron because it is more reactive. Used in welding railway tracks."
  },
  {
    id: 9023, section: "Chemistry",
    text: "The process of obtaining a metal from its ore is called:",
    options: ["A) Mining", "B) Refining", "C) Extraction/Metallurgy", "D) Galvanisation"],
    answer: "C",
    explanation: "Metallurgy (or extraction) is the process of obtaining metals from their ores. It involves steps like concentration, reduction, and refining."
  },

  // Unit 1D: Carbon Compounds (9024–9031)
  {
    id: 9024, section: "Chemistry",
    text: "The general formula of alkanes is:",
    options: ["A) CₙH₂ₙ", "B) CₙH₂ₙ₋₂", "C) CₙH₂ₙ₊₂", "D) CₙH₂ₙ₊₁"],
    answer: "C",
    explanation: "Alkanes are saturated hydrocarbons with only single bonds. General formula: CₙH₂ₙ₊₂. For methane n=1: C₁H₄ ✓. Alkenes are CₙH₂ₙ; alkynes are CₙH₂ₙ₋₂."
  },
  {
    id: 9025, section: "Chemistry",
    text: "Which of the following is a saturated hydrocarbon?",
    options: ["A) Ethene", "B) Ethyne", "C) Ethane", "D) Benzene"],
    answer: "C",
    explanation: "Ethane (C₂H₆) has only single C–C bonds — it is a saturated hydrocarbon. Ethene has a double bond; ethyne has a triple bond; benzene has a ring."
  },
  {
    id: 9026, section: "Chemistry",
    text: "The functional group present in ethanol (C₂H₅OH) is:",
    options: ["A) –COOH", "B) –CHO", "C) –OH", "D) –CO–"],
    answer: "C",
    explanation: "Ethanol is an alcohol. The –OH (hydroxyl) group is its functional group. –COOH is the carboxyl group in acids; –CHO is the aldehyde group."
  },
  {
    id: 9027, section: "Chemistry",
    text: "The unique ability of carbon to form long chains by bonding with other carbon atoms is called:",
    options: ["A) Valency", "B) Tetravalency", "C) Catenation", "D) Isomerism"],
    answer: "C",
    explanation: "Catenation is carbon's unique property of bonding with other carbon atoms to form long chains, branched chains, and rings. No other element shows this to the same extent."
  },
  {
    id: 9028, section: "Chemistry",
    text: "The process of converting vegetable oils to solid fats (vanaspati) is called:",
    options: ["A) Oxidation", "B) Hydrogenation", "C) Saponification", "D) Halogenation"],
    answer: "B",
    explanation: "Hydrogenation adds H₂ across the double bonds of unsaturated vegetable oils (using Ni catalyst at 200°C) converting them into solid saturated fats like vanaspati."
  },
  {
    id: 9029, section: "Chemistry",
    text: "Soaps are sodium or potassium salts of:",
    options: ["A) Mineral acids", "B) Short-chain fatty acids", "C) Long-chain fatty acids", "D) Amino acids"],
    answer: "C",
    explanation: "Soaps are formed by saponification — treating fats/oils with NaOH or KOH. They are sodium or potassium salts of long-chain fatty acids like stearic or palmitic acid."
  },
  {
    id: 9030, section: "Chemistry",
    text: "Which of the following is an isomer of butane (C₄H₁₀)?",
    options: ["A) Propane", "B) Pentane", "C) Isobutane (2-methylpropane)", "D) Ethane"],
    answer: "C",
    explanation: "Isobutane (2-methylpropane) has the same molecular formula C₄H₁₀ as butane but a different structural arrangement — they are structural isomers."
  },
  {
    id: 9031, section: "Chemistry",
    text: "Ethanoic acid (acetic acid) reacts with sodium hydroxide to form:",
    options: ["A) Sodium ethoxide + H₂", "B) Sodium ethanoate + H₂O", "C) Ethyl acetate + H₂O", "D) Carbon dioxide + H₂O"],
    answer: "B",
    explanation: "CH₃COOH + NaOH → CH₃COONa + H₂O. Ethanoic acid (a weak acid) reacts with NaOH (a base) in a neutralisation reaction to form sodium ethanoate and water."
  },

  // ══════════════════════════════════════════════════════
  // SECTION: Biology (Q32–Q62) IDs 9032–9062
  // Unit 2A: Life Processes (9032–9040)
  // ══════════════════════════════════════════════════════

  {
    id: 9032, section: "Biology",
    text: "Which organelle is called the 'powerhouse of the cell'?",
    options: ["A) Nucleus", "B) Ribosome", "C) Mitochondria", "D) Chloroplast"],
    answer: "C",
    explanation: "Mitochondria produce ATP (energy currency) through cellular respiration. They are called the powerhouse of the cell because they generate most of the cell's energy supply."
  },
  {
    id: 9033, section: "Biology",
    text: "The process by which green plants make their own food using sunlight is:",
    options: ["A) Respiration", "B) Transpiration", "C) Photosynthesis", "D) Digestion"],
    answer: "C",
    explanation: "Photosynthesis: 6CO₂ + 6H₂O + sunlight → C₆H₁₂O₆ + 6O₂. Chlorophyll in chloroplasts absorbs light energy to convert CO₂ and water into glucose."
  },
  {
    id: 9034, section: "Biology",
    text: "In human muscle cells during vigorous exercise, anaerobic respiration produces:",
    options: ["A) Ethanol + CO₂", "B) Lactic acid", "C) Glucose + O₂", "D) Water + CO₂"],
    answer: "B",
    explanation: "In human muscle cells, when oxygen supply is insufficient during vigorous exercise, anaerobic respiration produces lactic acid. In yeast (fermentation), it produces ethanol + CO₂ instead."
  },
  {
    id: 9035, section: "Biology",
    text: "Which blood vessel carries oxygenated blood from the lungs to the heart?",
    options: ["A) Pulmonary artery", "B) Pulmonary vein", "C) Aorta", "D) Vena cava"],
    answer: "B",
    explanation: "The pulmonary vein carries oxygenated blood from the lungs to the left atrium of the heart. Note: veins usually carry deoxygenated blood, but pulmonary vein is an exception."
  },
  {
    id: 9036, section: "Biology",
    text: "The functional unit of the kidney responsible for filtration is:",
    options: ["A) Nephron", "B) Neuron", "C) Villus", "D) Alveolus"],
    answer: "A",
    explanation: "The nephron is the structural and functional unit of the kidney. Each kidney contains about one million nephrons that filter blood and produce urine."
  },
  {
    id: 9037, section: "Biology",
    text: "Which enzyme present in saliva helps in digestion of starch?",
    options: ["A) Pepsin", "B) Lipase", "C) Salivary amylase", "D) Trypsin"],
    answer: "C",
    explanation: "Salivary amylase (ptyalin) in saliva breaks down starch into maltose. Pepsin digests proteins in stomach; lipase digests fats; trypsin is a pancreatic enzyme."
  },
  {
    id: 9038, section: "Biology",
    text: "The process of removal of metabolic waste products from the body is called:",
    options: ["A) Digestion", "B) Excretion", "C) Respiration", "D) Secretion"],
    answer: "B",
    explanation: "Excretion is the biological process of removing metabolic waste products (like urea, CO₂, excess salts) from the body. In humans, the kidney is the main excretory organ."
  },
  {
    id: 9039, section: "Biology",
    text: "Opening and closing of stomata is controlled by:",
    options: ["A) Root hair cells", "B) Mesophyll cells", "C) Guard cells", "D) Epidermal cells"],
    answer: "C",
    explanation: "Guard cells are bean-shaped cells surrounding each stoma. They control the opening and closing of stomata by changing their turgidity in response to water and light."
  },
  {
    id: 9040, section: "Biology",
    text: "The mode of nutrition in fungi is:",
    options: ["A) Autotrophic", "B) Holozoic", "C) Saprotrophic", "D) Parasitic"],
    answer: "C",
    explanation: "Fungi are saprotrophic — they secrete digestive enzymes onto dead organic matter, absorb the digested nutrients. They cannot make their own food (not autotrophic)."
  },

  // Unit 2B: Control & Coordination (9041–9047)
  {
    id: 9041, section: "Biology",
    text: "Which part of the brain controls balance and coordination of body movements?",
    options: ["A) Cerebrum", "B) Cerebellum", "C) Medulla oblongata", "D) Hypothalamus"],
    answer: "B",
    explanation: "The cerebellum coordinates voluntary movements, balance and posture. Cerebrum is for thinking; medulla controls involuntary actions like heartbeat and breathing."
  },
  {
    id: 9042, section: "Biology",
    text: "The bending of a plant shoot towards light is called:",
    options: ["A) Geotropism", "B) Hydrotropism", "C) Phototropism", "D) Thigmotropism"],
    answer: "C",
    explanation: "Phototropism is the growth movement of plants in response to light. Shoots show positive phototropism (grow toward light); roots show negative phototropism."
  },
  {
    id: 9043, section: "Biology",
    text: "Which hormone is responsible for regulating blood sugar levels?",
    options: ["A) Thyroxine", "B) Adrenaline", "C) Insulin", "D) Testosterone"],
    answer: "C",
    explanation: "Insulin (produced by pancreas) lowers blood glucose by stimulating cells to absorb glucose. Deficiency of insulin causes diabetes mellitus."
  },
  {
    id: 9044, section: "Biology",
    text: "The junction between two neurons where a nerve impulse passes is called:",
    options: ["A) Axon", "B) Dendrite", "C) Synapse", "D) Node of Ranvier"],
    answer: "C",
    explanation: "A synapse is the gap between the axon terminal of one neuron and the dendrite of the next. Nerve impulses cross the synapse via chemical neurotransmitters."
  },
  {
    id: 9045, section: "Biology",
    text: "Iodine deficiency causes which disease?",
    options: ["A) Diabetes", "B) Goitre", "C) Dwarfism", "D) Cretinism in adults"],
    answer: "B",
    explanation: "Iodine is needed to produce thyroxine. Iodine deficiency causes the thyroid gland to enlarge (goitre) as it tries to produce more hormone. Cretinism occurs in children."
  },
  {
    id: 9046, section: "Biology",
    text: "Adrenaline hormone is secreted by which gland?",
    options: ["A) Thyroid gland", "B) Pituitary gland", "C) Adrenal gland", "D) Pancreas"],
    answer: "C",
    explanation: "Adrenaline (epinephrine) is secreted by the adrenal glands (located above kidneys). It is the 'fight or flight' hormone, increasing heart rate and blood pressure in emergencies."
  },
  {
    id: 9047, section: "Biology",
    text: "Reflex action is controlled by:",
    options: ["A) Brain", "B) Spinal cord", "C) Cerebellum", "D) Peripheral nerves only"],
    answer: "B",
    explanation: "Reflex actions are controlled by the spinal cord, not the brain. The reflex arc passes through the spinal cord allowing rapid involuntary responses without waiting for brain signals."
  },

  // Unit 2C: How do Organisms Reproduce? (9048–9055)
  {
    id: 9048, section: "Biology",
    text: "Which of the following is an example of asexual reproduction?",
    options: ["A) Pollination", "B) Binary fission in Amoeba", "C) Fertilisation", "D) Germination"],
    answer: "B",
    explanation: "Binary fission in Amoeba is asexual reproduction where one cell divides into two identical cells. It involves only one parent and no gametes."
  },
  {
    id: 9049, section: "Biology",
    text: "In which part of the flower does fertilisation take place?",
    options: ["A) Stigma", "B) Style", "C) Ovary", "D) Anther"],
    answer: "C",
    explanation: "Fertilisation takes place in the ovary where the pollen tube delivers male gametes to the ovule. After fertilisation, the ovule develops into a seed and ovary into fruit."
  },
  {
    id: 9050, section: "Biology",
    text: "The process of regeneration of a new organism from a cut piece of body is seen in:",
    options: ["A) Hydra", "B) Planaria", "C) Earthworm", "D) Leech"],
    answer: "B",
    explanation: "Planaria (flatworm) shows remarkable regeneration — each piece of a cut planaria can regenerate into a complete organism. Hydra reproduces by budding, not regeneration."
  },
  {
    id: 9051, section: "Biology",
    text: "In humans, the embryo gets nutrition from the mother through:",
    options: ["A) Amnion", "B) Placenta", "C) Uterus wall", "D) Fallopian tube"],
    answer: "B",
    explanation: "The placenta is a special tissue connecting the mother and embryo. It allows transfer of nutrients and oxygen from mother's blood to embryo and removal of waste."
  },
  {
    id: 9052, section: "Biology",
    text: "Spore formation for reproduction is seen in:",
    options: ["A) Amoeba", "B) Hydra", "C) Rhizopus (bread mould)", "D) Planaria"],
    answer: "C",
    explanation: "Rhizopus (bread mould) reproduces by forming spores in sporangia. Spores are light, resistant structures that can germinate in favourable conditions."
  },
  {
    id: 9053, section: "Biology",
    text: "The male reproductive cell (gamete) in plants is produced in:",
    options: ["A) Ovule", "B) Pistil", "C) Anther", "D) Petal"],
    answer: "C",
    explanation: "The anther (part of stamen) produces pollen grains which contain the male gametes. The ovule contains the female gamete (egg cell)."
  },
  {
    id: 9054, section: "Biology",
    text: "Double fertilisation is unique to:",
    options: ["A) Gymnosperms", "B) Angiosperms", "C) Ferns", "D) Mosses"],
    answer: "B",
    explanation: "Double fertilisation is a unique feature of angiosperms (flowering plants). One sperm fuses with egg (forming zygote), another fuses with polar nuclei (forming endosperm)."
  },
  {
    id: 9055, section: "Biology",
    text: "HIV, which causes AIDS, attacks which type of cells?",
    options: ["A) Red blood cells", "B) Platelets", "C) Helper T-lymphocytes (CD4+ cells)", "D) Neurons"],
    answer: "C",
    explanation: "HIV (Human Immunodeficiency Virus) attacks CD4+ T-helper lymphocytes, weakening the immune system. This makes the body unable to fight even simple infections."
  },

  // Unit 2D: Heredity & Evolution (9056–9062)
  {
    id: 9056, section: "Biology",
    text: "Who is called the 'Father of Genetics'?",
    options: ["A) Charles Darwin", "B) Gregor Mendel", "C) Hugo de Vries", "D) Watson and Crick"],
    answer: "B",
    explanation: "Gregor Mendel conducted experiments on pea plants and formulated the laws of inheritance. He is called the Father of Genetics."
  },
  {
    id: 9057, section: "Biology",
    text: "In a cross between tall (TT) and dwarf (tt) pea plants, the F1 generation shows:",
    options: ["A) All dwarf plants", "B) All tall plants", "C) 50% tall and 50% dwarf", "D) 75% tall and 25% dwarf"],
    answer: "B",
    explanation: "When TT (tall) × tt (dwarf) are crossed, all F1 offspring are Tt (tall), because tall is dominant over dwarf. The dwarf trait is recessive and is masked in F1. Only in F2 does 3:1 ratio appear."
  },
  {
    id: 9058, section: "Biology",
    text: "The sex of a human child is determined by:",
    options: ["A) Mother's chromosomes only", "B) Father's chromosomes only", "C) Both parents equally", "D) Environmental factors"],
    answer: "B",
    explanation: "Human females are XX; males are XY. The father contributes either X or Y chromosome to determine the sex. Mother always contributes X, so the father determines sex."
  },
  {
    id: 9059, section: "Biology",
    text: "The theory of evolution by natural selection was proposed by:",
    options: ["A) Lamarck", "B) Mendel", "C) Charles Darwin", "D) Hugo de Vries"],
    answer: "C",
    explanation: "Charles Darwin proposed the theory of evolution through natural selection in his book 'On the Origin of Species' (1859). He explained that organisms best suited to environment survive and reproduce."
  },
  {
    id: 9060, section: "Biology",
    text: "Wings of a bat and forelimbs of a horse are examples of:",
    options: ["A) Analogous organs", "B) Homologous organs", "C) Vestigial organs", "D) None of these"],
    answer: "B",
    explanation: "Homologous organs have the same basic structure (same evolutionary origin) but perform different functions. Bat wings and horse forelimbs both derive from the same ancestral forelimb structure."
  },
  {
    id: 9061, section: "Biology",
    text: "Which of the following is a vestigial organ in humans?",
    options: ["A) Thumb", "B) Appendix", "C) Kidney", "D) Liver"],
    answer: "B",
    explanation: "The appendix is a vestigial organ — it had a function in our evolutionary ancestors (digesting cellulose) but has no significant function in modern humans."
  },
  {
    id: 9062, section: "Biology",
    text: "The fossil record is important in the study of evolution because:",
    options: ["A) Fossils show current organisms", "B) Fossils provide evidence of organisms that lived in the past", "C) Fossils help predict future species", "D) Fossils prove spontaneous generation"],
    answer: "B",
    explanation: "Fossils are preserved remains or traces of organisms from the past. They provide direct evidence of organisms that lived millions of years ago, helping trace evolutionary history."
  },

  // ══════════════════════════════════════════════════════
  // SECTION: Physics (Q63–Q93) IDs 9063–9093
  // Unit 3: Light – Reflection & Refraction (9063–9070)
  // ══════════════════════════════════════════════════════

  {
    id: 9063, section: "Physics",
    text: "The focal length of a concave mirror is 10 cm. Its radius of curvature is:",
    options: ["A) 5 cm", "B) 10 cm", "C) 20 cm", "D) 40 cm"],
    answer: "C",
    explanation: "Radius of curvature (R) = 2 × focal length (f). R = 2 × 10 = 20 cm. This relationship holds for all spherical mirrors."
  },
  {
    id: 9064, section: "Physics",
    text: "Which mirror is used as a rear-view mirror in vehicles?",
    options: ["A) Concave mirror", "B) Plane mirror", "C) Convex mirror", "D) Parabolic mirror"],
    answer: "C",
    explanation: "Convex mirrors give a wider field of view and always produce erect, virtual, diminished images — ideal for rear-view mirrors in vehicles."
  },
  {
    id: 9065, section: "Physics",
    text: "A ray of light passing through the centre of curvature of a concave mirror, after reflection:",
    options: ["A) Passes through the focus", "B) Retraces its path", "C) Becomes parallel to principal axis", "D) Bends away from normal"],
    answer: "B",
    explanation: "A ray passing through the centre of curvature hits the mirror perpendicularly (along the normal) and retraces its path back through the centre of curvature."
  },
  {
    id: 9066, section: "Physics",
    text: "The speed of light in vacuum is:",
    options: ["A) 3 × 10⁶ m/s", "B) 3 × 10⁸ m/s", "C) 3 × 10¹⁰ m/s", "D) 3 × 10⁴ m/s"],
    answer: "B",
    explanation: "The speed of light in vacuum is approximately 3 × 10⁸ m/s (or 3,00,000 km/s). This is a fundamental constant of nature denoted as 'c'."
  },
  {
    id: 9067, section: "Physics",
    text: "When light travels from a denser medium to a rarer medium, it:",
    options: ["A) Bends towards the normal", "B) Bends away from the normal", "C) Travels in a straight line", "D) Is completely absorbed"],
    answer: "B",
    explanation: "When light travels from denser to rarer medium (e.g., glass to air), it bends away from the normal (angle of refraction > angle of incidence). This is Snell's law."
  },
  {
    id: 9068, section: "Physics",
    text: "A convex lens of focal length 20 cm. The power of this lens is:",
    options: ["A) 20 D", "B) 0.05 D", "C) +5 D", "D) –5 D"],
    answer: "C",
    explanation: "Power P = 1/f (in metres) = 1/0.20 m = +5 D. Convex lenses have positive power; concave lenses have negative power. Focal length must be in metres."
  },
  {
    id: 9069, section: "Physics",
    text: "The phenomenon of splitting of white light into its constituent colours by a prism is called:",
    options: ["A) Reflection", "B) Refraction", "C) Dispersion", "D) Diffraction"],
    answer: "C",
    explanation: "Dispersion occurs because different colours (wavelengths) of light refract by different amounts in a prism, separating white light into VIBGYOR (violet to red)."
  },
  {
    id: 9070, section: "Physics",
    text: "The sky appears blue because of:",
    options: ["A) Reflection of sunlight from sea", "B) Scattering of shorter wavelengths of light by atmosphere", "C) Absorption of red light", "D) Dispersion by water droplets"],
    answer: "B",
    explanation: "Blue light has shorter wavelength and is scattered more by atmospheric particles (Rayleigh scattering). So the sky appears blue. At sunrise/sunset, red light (longer wavelength) dominates."
  },

  // Unit 3B: Human Eye (9071–9077)
  {
    id: 9071, section: "Physics",
    text: "The ability of the eye to focus on objects at different distances is called:",
    options: ["A) Persistence of vision", "B) Accommodation", "C) Adaptation", "D) Refraction"],
    answer: "B",
    explanation: "Accommodation is the ability of the eye lens to change its focal length (by changing shape) to focus clearly on objects at different distances."
  },
  {
    id: 9072, section: "Physics",
    text: "A person with myopia (short-sightedness) should use:",
    options: ["A) Convex lens", "B) Concave mirror", "C) Concave lens", "D) Bifocal lens"],
    answer: "C",
    explanation: "Myopia (near-sightedness) — distant objects form image in front of retina. A concave (diverging) lens is used to diverge light rays so they focus correctly on the retina."
  },
  {
    id: 9073, section: "Physics",
    text: "The defect of vision where a person cannot see nearby objects clearly is:",
    options: ["A) Myopia", "B) Hypermetropia", "C) Presbyopia", "D) Astigmatism"],
    answer: "B",
    explanation: "Hypermetropia (far-sightedness) — nearby objects form image behind retina. Corrected by convex (converging) lens. Myopia affects distant vision; presbyopia affects aged people."
  },
  {
    id: 9074, section: "Physics",
    text: "The part of the eye that controls the amount of light entering is:",
    options: ["A) Cornea", "B) Retina", "C) Iris", "D) Lens"],
    answer: "C",
    explanation: "The iris is the coloured part of the eye that controls pupil size, regulating the amount of light entering the eye. In bright light, the iris contracts the pupil."
  },
  {
    id: 9075, section: "Physics",
    text: "Twinkling of stars is due to:",
    options: ["A) Stars emitting light intermittently", "B) Atmospheric refraction of starlight", "C) Rotation of Earth", "D) Reflection from clouds"],
    answer: "B",
    explanation: "Stars twinkle due to atmospheric refraction. As starlight passes through layers of air with varying density, it continuously refracts, causing the apparent position to shift rapidly."
  },
  {
    id: 9076, section: "Physics",
    text: "The image formed on the retina of the human eye is:",
    options: ["A) Real, erect, same size", "B) Virtual, erect, magnified", "C) Real, inverted, diminished", "D) Virtual, inverted, same size"],
    answer: "C",
    explanation: "The eye lens forms a real, inverted, diminished image on the retina. The brain interprets this inverted image as upright — this is the nature of image formation in the eye."
  },
  {
    id: 9077, section: "Physics",
    text: "The minimum distance of distinct vision for a normal human eye is:",
    options: ["A) 10 cm", "B) 25 cm", "C) 50 cm", "D) 100 cm"],
    answer: "B",
    explanation: "The near point (minimum distance of distinct vision) for a normal human eye is 25 cm. Objects closer than this appear blurred because the eye lens cannot accommodate further."
  },

  // Unit 4: Electricity (9078–9086)
  {
    id: 9078, section: "Physics",
    text: "The SI unit of electric charge is:",
    options: ["A) Ampere", "B) Volt", "C) Coulomb", "D) Ohm"],
    answer: "C",
    explanation: "The SI unit of electric charge is the Coulomb (C). 1 Coulomb = charge carried by approximately 6.24 × 10¹⁸ electrons. Current is charge per unit time: I = Q/t."
  },
  {
    id: 9079, section: "Physics",
    text: "According to Ohm's law, if resistance is doubled and voltage remains constant, the current will:",
    options: ["A) Double", "B) Remain same", "C) Become four times", "D) Halve"],
    answer: "D",
    explanation: "Ohm's law: V = IR, so I = V/R. If R doubles and V is constant, I = V/2R — current is halved. Current is inversely proportional to resistance."
  },
  {
    id: 9080, section: "Physics",
    text: "Three resistors of 2Ω, 3Ω, and 6Ω are connected in parallel. The equivalent resistance is:",
    options: ["A) 11 Ω", "B) 1 Ω", "C) 0.5 Ω", "D) 2 Ω"],
    answer: "B",
    explanation: "1/Req = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1. So Req = 1 Ω. In parallel, equivalent resistance is always less than the smallest individual resistance."
  },
  {
    id: 9081, section: "Physics",
    text: "The heating effect of electric current is used in:",
    options: ["A) Electric motor", "B) Electric generator", "C) Electric bulb and heater", "D) Transformer"],
    answer: "C",
    explanation: "Electric bulbs and heaters work on the heating effect (Joule heating): H = I²Rt. When current flows through resistance, electrical energy converts to heat and light."
  },
  {
    id: 9082, section: "Physics",
    text: "The commercial unit of electrical energy is:",
    options: ["A) Joule", "B) Watt", "C) Kilowatt-hour (kWh)", "D) Volt-ampere"],
    answer: "C",
    explanation: "The commercial unit of electrical energy is the kilowatt-hour (kWh), also called a 'unit'. 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J. Electricity bills are calculated in units (kWh)."
  },
  {
    id: 9083, section: "Physics",
    text: "In a series circuit, the current through each component is:",
    options: ["A) Different at each point", "B) Same throughout the circuit", "C) Zero", "D) Depends on resistance"],
    answer: "B",
    explanation: "In a series circuit, current is the same through all components because there is only one path for current to flow. Voltage divides across components but current remains constant."
  },
  {
    id: 9084, section: "Physics",
    text: "Which property of a fuse wire allows it to melt and break the circuit during overload?",
    options: ["A) High melting point", "B) High conductivity", "C) Low melting point", "D) Low resistivity"],
    answer: "C",
    explanation: "A fuse wire is made of a material with low melting point (such as a tin-lead alloy). When excess current flows, the wire heats up quickly and melts, breaking the circuit and protecting devices from damage."
  },
  {
    id: 9085, section: "Physics",
    text: "The potential difference required to maintain a current of 2A through a resistance of 5Ω is:",
    options: ["A) 2.5 V", "B) 7 V", "C) 10 V", "D) 3 V"],
    answer: "C",
    explanation: "V = IR = 2A × 5Ω = 10 V. Using Ohm's law, potential difference equals current multiplied by resistance."
  },
  {
    id: 9086, section: "Physics",
    text: "Electric power is given by the formula:",
    options: ["A) P = V/I", "B) P = I/V", "C) P = VI", "D) P = V + I"],
    answer: "C",
    explanation: "Electric power P = VI (voltage × current). It can also be written as P = I²R or P = V²/R. The unit of power is Watt (W)."
  },

  // Unit 4B: Magnetic Effects of Electric Current (9087–9093)
  {
    id: 9087, section: "Physics",
    text: "The direction of magnetic field around a straight current-carrying conductor is given by:",
    options: ["A) Fleming's left-hand rule", "B) Fleming's right-hand rule", "C) Right-hand thumb rule", "D) Lenz's law"],
    answer: "C",
    explanation: "Right-hand thumb rule (Maxwell's corkscrew rule): if the right-hand thumb points in direction of current, curled fingers show direction of magnetic field around the conductor."
  },
  {
    id: 9088, section: "Physics",
    text: "An electric motor converts:",
    options: ["A) Chemical energy to electrical energy", "B) Electrical energy to mechanical energy", "C) Mechanical energy to electrical energy", "D) Heat energy to electrical energy"],
    answer: "B",
    explanation: "An electric motor converts electrical energy into mechanical energy (rotation). It works on the principle that a current-carrying conductor in a magnetic field experiences a force."
  },
  {
    id: 9089, section: "Physics",
    text: "An electric generator works on the principle of:",
    options: ["A) Magnetic effect of current", "B) Chemical effect of current", "C) Electromagnetic induction", "D) Electrostatic induction"],
    answer: "C",
    explanation: "An electric generator works on electromagnetic induction (Faraday's law) — when a coil rotates in a magnetic field, an EMF (and hence current) is induced in it."
  },
  {
    id: 9090, section: "Physics",
    text: "Fleming's left-hand rule is used to find the direction of:",
    options: ["A) Induced current", "B) Magnetic field", "C) Force on a current-carrying conductor in a magnetic field", "D) Voltage"],
    answer: "C",
    explanation: "Fleming's left-hand rule (for motors): stretch forefinger (field), middle finger (current), thumb (force/motion) — they are mutually perpendicular. Used to find force direction."
  },
  {
    id: 9091, section: "Physics",
    text: "The device used to convert high voltage AC to low voltage AC is:",
    options: ["A) Electric motor", "B) Step-down transformer", "C) Step-up transformer", "D) Rectifier"],
    answer: "B",
    explanation: "A step-down transformer reduces AC voltage. It has more turns in primary coil than secondary coil. Step-up transformer increases voltage (more turns in secondary)."
  },
  {
    id: 9092, section: "Physics",
    text: "Domestic electric supply in India has a frequency of:",
    options: ["A) 50 Hz", "B) 60 Hz", "C) 100 Hz", "D) 220 Hz"],
    answer: "A",
    explanation: "India's domestic AC power supply has a frequency of 50 Hz (cycles per second) and voltage of 220V. The USA uses 60 Hz at 110V."
  },
  {
    id: 9093, section: "Physics",
    text: "A magnetic field is produced by:",
    options: ["A) A stationary electric charge", "B) A moving electric charge (current)", "C) Neutral particles only", "D) Gravitational force"],
    answer: "B",
    explanation: "A magnetic field is produced by moving electric charges (electric current). A stationary charge produces only an electric field, not a magnetic field."
  },

  // ══════════════════════════════════════════════════════
  // SECTION: Environment (Q94–Q100) IDs 9094–9100
  // Unit 5: Our Environment & Sustainable Management
  // ══════════════════════════════════════════════════════

  {
    id: 9094, section: "Environment",
    text: "Which of the following is a biodegradable waste?",
    options: ["A) Plastic bags", "B) Vegetable peels", "C) Glass bottles", "D) Aluminium cans"],
    answer: "B",
    explanation: "Biodegradable wastes (like vegetable peels, paper, food scraps) can be broken down by microorganisms. Plastic, glass and metal are non-biodegradable — they persist for hundreds of years."
  },
  {
    id: 9095, section: "Environment",
    text: "The correct sequence of a food chain is:",
    options: ["A) Grass → Grasshopper → Frog → Snake → Eagle", "B) Grasshopper → Grass → Frog → Eagle → Snake", "C) Eagle → Snake → Frog → Grasshopper → Grass", "D) Frog → Grasshopper → Grass → Snake → Eagle"],
    answer: "A",
    explanation: "A food chain starts with producers (green plants like grass). Energy flows from producer → herbivore → carnivore. Grass → Grasshopper → Frog → Snake → Eagle is the correct order."
  },
  {
    id: 9096, section: "Environment",
    text: "The phenomenon of accumulation of non-biodegradable chemicals in increasing concentrations at successive trophic levels is called:",
    options: ["A) Eutrophication", "B) Biomagnification", "C) Bioaccumulation", "D) Decomposition"],
    answer: "B",
    explanation: "Biomagnification (biological magnification) is the increase in concentration of toxic substances (like pesticides, heavy metals) as they move up the food chain from lower to higher trophic levels."
  },
  {
    id: 9097, section: "Environment",
    text: "Which gas is mainly responsible for the greenhouse effect?",
    options: ["A) Oxygen", "B) Nitrogen", "C) Carbon dioxide", "D) Hydrogen"],
    answer: "C",
    explanation: "Carbon dioxide (CO₂) is the primary greenhouse gas responsible for global warming. It traps heat radiation from Earth's surface. Other greenhouse gases include methane, water vapour, and nitrous oxide."
  },
  {
    id: 9098, section: "Environment",
    text: "Chipko movement was related to:",
    options: ["A) Protection of rivers", "B) Protection of forests and trees", "C) Conservation of wildlife", "D) Prevention of water pollution"],
    answer: "B",
    explanation: "Chipko movement (1973, Uttarakhand) was a non-violent movement where villagers hugged trees to prevent them from being felled. It is a classic example of community conservation of forests."
  },
  {
    id: 9099, section: "Environment",
    text: "The depletion of the ozone layer is mainly caused by:",
    options: ["A) Carbon dioxide", "B) Methane", "C) Chlorofluorocarbons (CFCs)", "D) Sulphur dioxide"],
    answer: "C",
    explanation: "CFCs (used in refrigerators, air conditioners, aerosol sprays) release chlorine atoms in the stratosphere that catalytically destroy ozone molecules, thinning the ozone layer."
  },
  {
    id: 9100, section: "Environment",
    text: "Which of the following is a renewable source of energy?",
    options: ["A) Coal", "B) Petroleum", "C) Natural gas", "D) Solar energy"],
    answer: "D",
    explanation: "Solar energy is renewable — it comes from the Sun and is inexhaustible. Coal, petroleum and natural gas are fossil fuels — non-renewable sources that take millions of years to form."
  }

];
