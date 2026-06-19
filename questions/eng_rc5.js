// eng_rc5.js – Dr Shetye Academic Programme
// English — Reading Comprehension (CAT / IIM Level) — Test 5
// 12 Questions · IDs 5537–5548 · 12 Marks · 20 Minutes
// Passage 1: The Paradox of Choice and Decision Fatigue (Behavioural Economics)
// Passage 2: Survivorship Bias in Historical Narrative (Epistemology / History)

var RC_PASSAGES = {

  "passage_1": {
    title: "Passage 1 of 2",
    label: "Read the following passage carefully and answer Questions 1–6.",
    text: `Classical economic theory treats choice as an unambiguous good: more options, the reasoning goes, can only expand a consumer's capacity to find a preferred outcome, since no rational agent is forced to consider an option they do not want. Psychologist Barry Schwartz's influential 2004 book challenged this assumption empirically, documenting a phenomenon he termed the 'paradox of choice' — circumstances under which an abundance of options measurably decreases, rather than increases, both decision quality and post-decision satisfaction.

The most frequently cited empirical support comes from a 2000 study by Sheena Iyengar and Mark Lepper, who set up jam-tasting displays in an upscale grocery store. One display offered 24 varieties of jam; another offered just 6. The larger display attracted more initial interest — 60% of passing shoppers stopped to sample, compared with 40% at the smaller display. Yet purchase conversion told the opposite story: only 3% of those who sampled from the 24-jam display made a purchase, compared with 30% from the 6-jam display — a tenfold difference.

The proposed psychological mechanism involves at least two distinct burdens. The first is cognitive: comparing many options across multiple attributes requires substantially more mental effort than comparing few, and this effort itself is aversive, leading some consumers to defer the decision entirely — opting for nothing rather than working through an extensive comparison. The second is what Schwartz calls 'anticipated regret': when only one option exists, a consumer who selects it bears no responsibility for unrealised alternatives. When dozens of options exist, choosing one means actively forgoing dozens of others, raising the psychological cost of any subsequently discovered flaw in the chosen option — the consumer wonders whether the option they passed over would have been better.

As with several influential findings in behavioural economics, however, the simplicity and intuitive appeal of the original jam study have outpaced its replicability. A 2010 meta-analysis by Benjamin Scheibehenne, Rainer Greifeneder, and Peter Todd, examining over 50 subsequent studies attempting to replicate choice overload effects, found the average effect size across all studies was statistically indistinguishable from zero. Some studies replicated the original finding; a comparable number found the opposite — that more choice increased satisfaction; the majority found no significant effect in either direction.

The meta-analysis identified specific moderating conditions under which choice overload is more likely to emerge: when the options differ along many attributes simultaneously, when the chooser lacks clear pre-existing preferences, when time pressure is absent, and when the decision carries no opportunity for later revision. Outside these specific conditions, the relationship between choice quantity and decision quality appears far more idiosyncratic than the original jam study suggested — a reminder that vivid, well-publicised single experiments often generalise less robustly than their initial reception implies.`
  },

  "passage_2": {
    title: "Passage 2 of 2",
    label: "Read the following passage carefully and answer Questions 7–12.",
    text: `During the Second World War, statistician Abraham Wald was asked by the U.S. military to help determine where additional armour should be added to fighter aircraft. Military analysts had collected data on bullet holes found on returning planes and observed that damage clustered heavily on the wings and tail, with relatively few hits to the engine and cockpit area. The intuitive recommendation — and the one initially favoured by the officers presenting the data — was to reinforce the areas showing the most damage.

Wald inverted this logic entirely. The data, he pointed out, came exclusively from planes that had survived and returned to base. Planes that had been hit in the engine or cockpit were precisely the planes that did not return — their absence from the dataset was not evidence of low risk in those areas but the direct consequence of why those areas were dangerous. The wings and tail showed extensive damage in the surviving sample precisely because aircraft could absorb substantial damage there and still fly home; damage to the engine or cockpit, by contrast, typically resulted in the aircraft never making it back to be counted at all. Wald recommended reinforcing the engine and cockpit — the areas showing the least damage in the available data.

This insight, now known as survivorship bias, identifies a systematic distortion that arises whenever a dataset is implicitly filtered by the very outcome one is trying to study. The bias is not confined to military statistics. Financial analysts studying mutual fund performance routinely encounter it: funds that perform poorly are frequently closed or merged into better-performing funds, vanishing from databases before researchers compile long-term performance statistics. The surviving funds — the ones still operating and therefore available to study — necessarily appear to outperform the broader population of funds that existed at the starting point, because the underperformers have been systematically removed from view.

A particularly persistent form of survivorship bias afflicts popular narratives of entrepreneurial success. Biographies and business journalism disproportionately study companies and founders who succeeded, extracting lessons from their habits, decisions, and personality traits — early rising, risk tolerance, unconventional schooling — and presenting these as causal explanations for success. But the appropriate comparison is not successful founders against the general population; it is successful founders against the much larger population of founders who exhibited identical habits and traits but failed, and who consequently never became subjects of biographies or conference keynotes. Without that comparison group, it is impossible to determine whether the studied traits caused success or were simply common among a population whose outcomes were determined substantially by factors unrelated to those traits — market timing, access to capital, or simple chance.

The corrective lesson is structural rather than merely statistical: before drawing conclusions from any sample, one must ask not only what the data shows, but what process generated the sample in the first place — and crucially, what failed to make it into the sample at all.`
  }
};

var questions = [

  // ══ PASSAGE 1: Paradox of Choice — Q1–Q6 (IDs 5525–5530) ══

  {
    id: 5537, section: "English",
    passage: "passage_1",
    text: "The primary purpose of the passage is to:",
    options: [
      "A) Prove that classical economic theory about consumer choice is entirely correct",
      "B) Introduce the 'paradox of choice' through the Iyengar-Lepper jam study, then show how subsequent rigorous replication substantially complicated the original finding",
      "C) Argue that grocery stores should always offer the maximum possible variety of products",
      "D) Provide a complete biography of psychologist Barry Schwartz's academic career"
    ],
    answer: "B",
    explanation: "The passage introduces the paradox of choice concept, details the famous jam study as supporting evidence, explains the psychological mechanism, then presents the Scheibehenne et al. meta-analysis showing the effect was far less reliable than originally believed, concluding with specific moderating conditions. Option B captures this complete arc."
  },

  {
    id: 5538, section: "English",
    passage: "passage_1",
    text: "According to the passage, what was the key discrepancy observed in the Iyengar-Lepper jam study?",
    options: [
      "A) The 6-jam display attracted more initial samplers but resulted in fewer purchases overall",
      "B) Both displays attracted identical numbers of samplers and resulted in identical purchase rates",
      "C) The 24-jam display had both higher sampling rates and higher purchase rates than the 6-jam display",
      "D) The 24-jam display attracted more initial samplers but resulted in far fewer purchases than the 6-jam display"
    ],
    answer: "D",
    explanation: "The passage states the larger (24-jam) display had 60% sampling versus 40% for the smaller display, but only 3% purchase conversion versus 30% for the 6-jam display. The key discrepancy is exactly this inversion — more initial interest but far fewer actual purchases. Option A captures this precisely."
  },

  {
    id: 5539, section: "English",
    passage: "passage_1",
    text: "The concept of 'anticipated regret' as described in the passage refers to:",
    options: [
      "A) The psychological cost of choosing one option among many, since doing so means forgoing all other alternatives that might have been superior",
      "B) Regret that a consumer feels only after using a product and discovering it is defective",
      "C) A legal term describing a consumer's right to return defective products within a specified period",
      "D) The tendency of consumers to avoid all forms of shopping due to general anxiety"
    ],
    answer: "A",
    explanation: "The passage explains: 'when dozens of options exist, choosing one means actively forgoing dozens of others, raising the psychological cost of any subsequently discovered flaw... the consumer wonders whether the option they passed over would have been better.' This anticipation of regret over foregone alternatives is precisely what option B describes."
  },

  {
    id: 5540, section: "English",
    passage: "passage_1",
    text: "The author's reference to the Scheibehenne, Greifeneder, and Todd meta-analysis serves primarily to:",
    options: [
      "A) Completely discredit Barry Schwartz's original theoretical framework as worthless",
      "B) Prove that consumers always prefer having more options regardless of context",
      "C) Demonstrate that the original jam study's dramatic finding did not hold up reliably across a much larger body of subsequent research, while identifying conditions under which the effect does appear",
      "D) Show that grocery store jam displays are an unrepresentative context for studying consumer psychology"
    ],
    answer: "C",
    explanation: "The meta-analysis found the average effect size 'statistically indistinguishable from zero' across 50+ studies, with results split between replications, opposite findings, and null results. Importantly, it also identified specific 'moderating conditions' where the effect does emerge. Option B captures both the complication and the more nuanced finding; A overstates this as a complete discrediting."
  },

  {
    id: 5541, section: "English",
    passage: "passage_1",
    text: "Which of the following scenarios would the passage's identified moderating conditions predict is MOST likely to produce a choice overload effect?",
    options: [
      "A) A consumer choosing between two nearly identical brands of bottled water under significant time pressure",
      "B) A consumer with no strong existing preferences choosing among twenty unfamiliar wines that differ in region, grape variety, vintage, and price, with no time pressure and no ability to exchange the choice later",
      "C) A consumer with a strong, well-established preference for a specific brand selecting that brand among many alternatives",
      "D) A consumer making a low-stakes decision they can easily reverse later if dissatisfied"
    ],
    answer: "B",
    explanation: "The passage identifies four moderating conditions for choice overload: options differing on many attributes, absence of clear pre-existing preferences, absence of time pressure, and no opportunity for later revision. Option B satisfies all four conditions simultaneously (multiple attributes, no preference, no time pressure, no revision option), making it the scenario most likely to produce the effect."
  },

  {
    id: 5542, section: "English",
    passage: "passage_1",
    text: "The final sentence's observation about 'vivid, well-publicised single experiments' generalising 'less robustly than their initial reception implies' functions as:",
    options: [
      "A) A broader epistemological caution about over-relying on single striking studies, extending beyond the specific jam study discussed",
      "B) A criticism aimed exclusively at the field of grocery store marketing research",
      "C) A claim that all psychological experiments conducted before 2010 are invalid",
      "D) An argument that academic publishing should ban single-study research entirely"
    ],
    answer: "A",
    explanation: "This concluding observation generalises the lesson of the jam study's failure to replicate reliably into a broader methodological point applicable to many fields, not narrowly confined to grocery marketing (A) or a blanket dismissal of pre-2010 psychology (C). Option B captures this generalising function, consistent with how the passage frames the meta-analysis findings throughout."
  },

  // ══ PASSAGE 2: Survivorship Bias — Q7–Q12 (IDs 5531–5536) ══

  {
    id: 5543, section: "English",
    passage: "passage_2",
    text: "Abraham Wald's key insight regarding aircraft armour was that:",
    options: [
      "A) All areas of an aircraft should receive identical amounts of armour to ensure fairness",
      "B) Bullet holes in the wings and tail proved that these areas needed no additional reinforcement",
      "C) Military aircraft from the Second World War were generally too poorly designed to be repaired",
      "D) The data on surviving aircraft was systematically biased because it excluded aircraft that had been shot down, and therefore the areas showing the LEAST damage in survivors were actually the most critical to protect"
    ],
    answer: "D",
    explanation: "Wald recognised that the surviving-aircraft dataset excluded planes shot down in the engine/cockpit — those areas appeared to have few hits only because hits there were fatal to the aircraft's survival. He recommended reinforcing engine and cockpit — the LEAST damaged areas in the visible sample — precisely because their absence indicated lethality, not safety. Option B captures this inverted logic precisely; D directly contradicts Wald's actual recommendation."
  },

  {
    id: 5544, section: "English",
    passage: "passage_2",
    text: "According to the passage, why do surviving mutual funds in a database tend to appear to outperform the broader population of funds that originally existed?",
    options: [
      "A) Fund managers deliberately falsify performance reports to inflate apparent returns",
      "B) Government regulations require poorly performing funds to be permanently deleted from all financial records",
      "C) Poorly performing funds are frequently closed or merged away and therefore disappear from databases before long-term statistics are compiled, leaving only relatively successful funds visible",
      "D) Mutual funds that perform poorly are statistically rare events that occur in less than 1% of cases"
    ],
    answer: "C",
    explanation: "The passage states: 'funds that perform poorly are frequently closed or merged into better-performing funds, vanishing from databases before researchers compile long-term performance statistics... necessarily appear to outperform... because the underperformers have been systematically removed from view.' Option B is a precise restatement; A, C, and D introduce claims not supported by the passage."
  },

  {
    id: 5545, section: "English",
    passage: "passage_2",
    text: "The passage's critique of entrepreneurial success narratives centres on which methodological flaw?",
    options: [
      "A) Biographers tend to exaggerate the personal habits of successful entrepreneurs for dramatic effect",
      "B) Success stories focus only on successful founders without comparing them to the much larger population of equally-habited founders who failed, making it impossible to isolate which traits actually caused success",
      "C) Most successful entrepreneurs are reluctant to share details of their working habits with biographers",
      "D) Entrepreneurial success is entirely random and has no relationship to any personal habits or traits whatsoever"
    ],
    answer: "B",
    explanation: "The passage explains that comparing successful founders only to 'the general population' is the wrong comparison; the correct comparison is to 'the much larger population of founders who exhibited identical habits and traits but failed.' Without this comparison group, causal claims about specific traits (early rising, risk tolerance) cannot be substantiated. Option B captures this precise methodological critique; D overstates the passage's claim into pure randomness."
  },

  {
    id: 5546, section: "English",
    passage: "passage_2",
    text: "The author's overall tone toward popular narratives of entrepreneurial success can best be described as:",
    options: [
      "A) Enthusiastically supportive of using biographies as reliable guides for aspiring entrepreneurs",
      "B) Critically skeptical, emphasising a structural flaw in how causal lessons are typically extracted from such narratives",
      "C) Entirely dismissive, suggesting these narratives have no value or interest whatsoever",
      "D) Neutral and purely descriptive, offering no evaluative judgment on the narratives' reliability"
    ],
    answer: "B",
    explanation: "The passage explicitly identifies 'a particularly persistent form of survivorship bias' in these narratives and explains why the causal claims they make are methodologically unjustified without a proper comparison group. This is clearly evaluative and critical, not neutral (D) or wholly dismissive (C) of the narratives' existence — the critique is about their causal claims, not their entire value. Option B is correct."
  },

  {
    id: 5547, section: "English",
    passage: "passage_2",
    text: "Which of the following best captures the 'corrective lesson' the passage identifies as 'structural rather than merely statistical'?",
    options: [
      "A) Researchers should always use larger sample sizes regardless of how the sample was selected",
      "B) Before drawing conclusions from any sample, one must examine the underlying process that generated the sample, including what was systematically excluded from it",
      "C) Statistical significance testing is the only reliable method for validating any research finding",
      "D) All historical and financial data should be discarded in favour of purely theoretical models"
    ],
    answer: "B",
    explanation: "The passage's final sentence states the lesson is to ask 'not only what the data shows, but what process generated the sample in the first place — and crucially, what failed to make it into the sample at all.' This is about understanding sample-generation processes and exclusions, not merely sample size (A) or abandoning empirical data (D). Option B is a precise restatement."
  },

  {
    id: 5548, section: "English",
    passage: "passage_2",
    text: "Which of the following scenarios best illustrates the same type of bias described throughout the passage?",
    options: [
      "A) A school only tracks the academic outcomes of students who graduated, concluding that its teaching methods are highly effective, without accounting for students who dropped out and may have struggled most",
      "B) A school randomly samples 50% of all enrolled students, including both graduates and dropouts, to assess teaching effectiveness",
      "C) A school compares its graduation rate this year to its graduation rate five years ago using consistent methodology",
      "D) A school surveys all currently enrolled students, including those at risk of dropping out, about their satisfaction levels"
    ],
    answer: "A",
    explanation: "Survivorship bias arises when a dataset implicitly excludes cases based on the very outcome being studied — exactly as in option A, where dropouts (a meaningful subset of outcomes) are excluded from the assessment of teaching effectiveness, just as downed aircraft and failed founders were excluded from their respective datasets. Options B, C, and D all involve more complete or consistent sampling methods that do not exhibit this systematic exclusion."
  }

];
