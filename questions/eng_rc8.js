// eng_rc8.js – Dr Shetye Academic Programme
// English — Reading Comprehension (CAT / IIM Level) — Test 8
// 12 Questions · IDs 5603–5614 · 12 Marks · 20 Minutes
// Passage 1: The Efficient Markets Hypothesis and Its Discontents (Finance / Economics)
// Passage 2: The Anthropology of Gift-Giving and Reciprocity (Social Anthropology)

var RC_PASSAGES = {

  "passage_1": {
    title: "Passage 1 of 2",
    label: "Read the following passage carefully and answer Questions 1–6.",
    text: `The efficient markets hypothesis, formalised by economist Eugene Fama in the early 1970s, holds that asset prices fully reflect all available information at any given time, making it impossible to consistently achieve returns exceeding the market average through analysis of publicly available information alone. The hypothesis comes in three strengths: weak form, which claims prices reflect all historical price information, making technical analysis of past price patterns futile; semi-strong form, which extends this to all publicly available information, including financial statements and news; and strong form, the most demanding version, which claims prices reflect even private, insider information.

The theoretical appeal of the hypothesis rests on a simple competitive mechanism: if a profitable trading opportunity existed and were identifiable from public information, rational, profit-seeking investors would immediately act on it, buying or selling until the price adjusted to eliminate the opportunity. Information, in this framework, gets rapidly priced in precisely because investors have strong financial incentives to detect and exploit any mispricing the moment it appears, and the act of exploitation itself eliminates the very opportunity being exploited.

For decades, the weak and semi-strong forms enjoyed substantial empirical support: actively managed mutual funds, on average and after fees, have persistently failed to outperform passive index funds tracking the broader market, a finding replicated across multiple decades and market conditions, and frequently cited as the strongest evidence for market efficiency in its weaker forms. This finding underlies the now-mainstream advice that most individual investors are better served by low-cost index funds than by attempting to pick individual stocks or actively managed funds.

However, the behavioural finance movement, associated with economists such as Richard Thaler and psychologists Daniel Kahneman and Amos Tversky, has documented persistent and systematic anomalies that challenge a strict reading of market efficiency. The 'momentum effect' — the empirical tendency of stocks that have performed well over the past 3 to 12 months to continue performing well in the near future — directly contradicts weak-form efficiency, since it implies past price information does have predictive power. Similarly, well-documented overreaction and underreaction patterns around earnings announcements suggest markets do not instantaneously and accurately incorporate new information as the theory predicts.

Economist Andrei Shleifer and others have proposed that these anomalies persist not because markets are simply irrational, but because exploiting them requires bearing risks — including the risk that an apparent mispricing will widen before it narrows, potentially bankrupting an investor attempting to exploit it before the correction occurs — that limit the capital willing to engage in the corrective arbitrage the efficient markets hypothesis assumes will occur freely. This 'limits of arbitrage' framework attempts to reconcile documented anomalies with a more nuanced version of market efficiency, in which markets are efficient enough to eliminate the most obvious mispricings while persistent, harder-to-exploit anomalies survive precisely because the risk-adjusted returns from exploiting them are not as attractive as their raw returns might initially suggest.`
  },

  "passage_2": {
    title: "Passage 2 of 2",
    label: "Read the following passage carefully and answer Questions 7–12.",
    text: `Marcel Mauss's seminal 1925 essay on the gift established a foundational insight for social anthropology: that gift-giving in non-market societies, far from being a spontaneous, disinterested act, operates according to a binding tripartite obligation — to give, to receive, and, crucially, to reciprocate. Mauss documented this structure across societies as geographically and culturally distant as the Trobriand Islanders of Melanesia and the indigenous peoples of the Pacific Northwest Coast of North America, arguing that the apparently voluntary gift in fact constitutes an obligatory exchange system functioning as a form of social currency that creates and sustains relationships, alliances, and hierarchies.

The Kula ring, documented extensively by anthropologist Bronisław Malinowski among the Trobriand Islanders, exemplifies this system concretely: ceremonial shell ornaments — armbands and necklaces — circulate continuously among trading partners across a network of islands, travelling always in fixed directions, accumulating prestige and historical association as they pass from hand to hand. Crucially, the objects' value lies almost entirely in their function as carriers of social relationship and obligation; they are not used as currency to purchase ordinary goods and possess little or no practical utility, yet their exchange constitutes one of the most economically and socially significant institutions in Trobriand society.

The potlatch ceremonies of Pacific Northwest Coast peoples present an even more striking case, historically involving the deliberate, sometimes extravagant destruction or distribution of accumulated wealth — blankets, food, ceremonial objects, and in extreme historical instances, valuable copper plaques — as a means of establishing or reaffirming social status. The host who could afford to destroy or give away the most wealth thereby demonstrated and consolidated superior social standing, inverting the conventional economic logic in which status follows from accumulation rather than dispersal. Colonial authorities in Canada, viewing the potlatch as wasteful and economically irrational by the standards of market capitalism, banned the practice between 1885 and 1951, a prohibition now widely understood by anthropologists and historians as reflecting a fundamental failure to comprehend an alternative, internally coherent economic logic rather than evidence of genuine economic irrationality.

Mauss's broader theoretical claim — that the seemingly free gift is never truly free, but instead generates a debt the recipient is morally and socially obligated to eventually repay — has found surprising resonance well beyond the specific non-market societies he originally studied. Contemporary research on corporate gift-giving, reciprocity in professional networking, and even the psychology of unsolicited favours has documented strikingly similar dynamics in ostensibly modern, market-based societies: people who receive an unrequested gift or favour frequently feel a strong, sometimes uncomfortable, compulsion to reciprocate, even when the original giver explicitly disclaims any expectation of return — suggesting Mauss's tripartite obligation structure may reflect something considerably more fundamental about human social psychology than a feature specific to the particular non-market societies in which he first documented it.

This raises an unresolved question for contemporary social theory: whether market exchange and gift exchange represent two genuinely distinct logics governing different domains of human interaction, or whether the apparently disinterested transactions of modern market economies are better understood as a historically specific overlay obscuring an underlying reciprocal logic that persists, often unacknowledged, beneath the surface of even the most impersonal commercial transaction.`
  }
};

var questions = [

  // ══ PASSAGE 1: Efficient Markets Hypothesis — Q1–Q6 (IDs 5603–5608) ══

  {
    id: 5603, section: "English",
    passage: "passage_1",
    text: "The primary purpose of the passage is to:",
    options: [
      "A) Prove that all forms of the efficient markets hypothesis are completely false and should be discarded entirely",
      "B) Provide detailed personal investment advice for retail investors choosing between index funds and individual stocks",
      "C) Explain the efficient markets hypothesis and its empirical support, then present behavioural finance anomalies and the 'limits of arbitrage' framework that attempts to reconcile them with a more nuanced view of efficiency",
      "D) Argue that Eugene Fama's 1970s research has been completely superseded by more recent academic work"
    ],
    answer: "C",
    explanation: "The passage defines the three forms of market efficiency, explains the theoretical mechanism and empirical support (index fund outperformance), then introduces behavioural anomalies (momentum effect, overreaction) that challenge strict efficiency, concluding with the 'limits of arbitrage' reconciliation framework. Option B captures this complete, nuanced arc."
  },

  {
    id: 5604, section: "English",
    passage: "passage_1",
    text: "According to the passage, what distinguishes the 'strong form' of the efficient markets hypothesis from the 'weak' and 'semi-strong' forms?",
    options: [
      "A) The strong form applies only to government bonds, while the other forms apply to corporate stocks",
      "B) The strong form only applies to markets outside the United States",
      "C) The strong form was proposed decades before the weak and semi-strong forms were developed",
      "D) The strong form claims prices reflect even private, insider information, which is a more demanding claim than the public-information claims of the weak and semi-strong forms"
    ],
    answer: "D",
    explanation: "The passage explicitly states the strong form 'claims prices reflect even private, insider information' as 'the most demanding version,' contrasted with weak form (historical prices) and semi-strong form (all public information). Option B precisely captures this distinguishing, more demanding claim."
  },

  {
    id: 5605, section: "English",
    passage: "passage_1",
    text: "The passage explains that profitable trading opportunities get eliminated because:",
    options: [
      "A) Rational, profit-seeking investors act on identifiable opportunities, and this very act of exploitation causes the price to adjust, eliminating the opportunity",
      "B) Government regulators actively intervene to remove any profitable trading opportunity within minutes of its appearance",
      "C) Stock exchanges close trading whenever an unusual price movement is detected",
      "D) All investors are required by law to share information about profitable opportunities with competitors"
    ],
    answer: "A",
    explanation: "The passage states this mechanism directly: investors 'would immediately act on it... until the price adjusted to eliminate the opportunity' and 'the act of exploitation itself eliminates the very opportunity being exploited.' Option B is a precise restatement of this self-correcting competitive mechanism."
  },

  {
    id: 5606, section: "English",
    passage: "passage_1",
    text: "Why does the passage describe the 'momentum effect' as directly contradicting weak-form efficiency?",
    options: [
      "A) Because momentum trading is illegal in most stock markets around the world",
      "B) Because the momentum effect was discovered before the efficient markets hypothesis was first proposed",
      "C) Because momentum effects only occur in bond markets, not in equity markets",
      "D) Because weak-form efficiency claims that past price information has no predictive power, while the momentum effect shows that past performance does predict near-term future performance"
    ],
    answer: "D",
    explanation: "Weak-form efficiency holds that 'prices reflect all historical price information, making technical analysis of past price patterns futile' — implying no predictive power from past prices. The momentum effect directly contradicts this since 'past price information does have predictive power' for near-term returns. Option A precisely captures this logical contradiction."
  },

  {
    id: 5607, section: "English",
    passage: "passage_1",
    text: "The 'limits of arbitrage' framework, as described in the final paragraph, attempts to explain persistent market anomalies by arguing that:",
    options: [
      "A) Markets are completely irrational and no rational explanation for anomalies is possible",
      "B) Behavioural finance has been completely disproven by more recent academic research",
      "C) All market anomalies are eliminated within seconds of being identified by any investor",
      "D) Exploiting certain anomalies requires bearing risks that limit the capital willing to engage in corrective arbitrage, allowing the anomalies to persist despite being theoretically exploitable"
    ],
    answer: "D",
    explanation: "The passage explains this framework precisely: exploiting anomalies involves 'risks... that limit the capital willing to engage in the corrective arbitrage the efficient markets hypothesis assumes will occur freely.' This explains persistence without abandoning a more nuanced notion of efficiency. Option B is a precise restatement; A and D both overstate the passage's measured, reconciliatory framing."
  },

  {
    id: 5608, section: "English",
    passage: "passage_1",
    text: "Which of the following, if true, would most directly support the 'limits of arbitrage' explanation for why a documented market anomaly persists?",
    options: [
      "A) A study finds that hedge funds attempting to exploit the anomaly faced a significant risk of substantial losses if the mispricing widened before eventually correcting, deterring many potential arbitrageurs",
      "B) A study finds that the anomaly disappeared completely within one week of being published in an academic journal",
      "C) A survey shows that most individual investors have never heard of the specific anomaly in question",
      "D) Data shows that the anomaly only appears in extremely small, illiquid stocks with minimal trading volume"
    ],
    answer: "A",
    explanation: "The 'limits of arbitrage' framework specifically argues anomalies persist because exploiting them carries risks (such as the mispricing widening before correcting) that deter capital from correcting them. Option A directly illustrates this exact mechanism — real risk of loss deterring arbitrageurs. Option B would actually suggest markets ARE highly efficient once information is public, weakening rather than supporting the 'limits' framework."
  },

  // ══ PASSAGE 2: Gift-Giving and Reciprocity — Q7–Q12 (IDs 5609–5614) ══

  {
    id: 5609, section: "English",
    passage: "passage_2",
    text: "The primary purpose of the passage is to:",
    options: [
      "A) Explain Mauss's tripartite gift obligation framework through historical examples (Kula ring, potlatch), then explore its surprising contemporary relevance and an unresolved theoretical question about modern market exchange",
      "B) Argue that gift-giving should be completely abolished in all modern societies because it creates unwanted social obligations",
      "C) Provide a complete historical timeline of all anthropological research conducted between 1900 and 2000",
      "D) Prove that the Trobriand Islanders and Pacific Northwest Coast peoples had identical economic systems in every respect"
    ],
    answer: "A",
    explanation: "The passage introduces Mauss's give-receive-reciprocate framework, illustrates it through the Kula ring and potlatch, discusses the colonial misunderstanding of potlatch, extends the framework to contemporary contexts, and ends by posing an open theoretical question about whether market and gift logics are truly distinct. Option B captures this complete arc."
  },

  {
    id: 5610, section: "English",
    passage: "passage_2",
    text: "According to the passage, what is the central insight of Mauss's tripartite obligation framework?",
    options: [
      "A) Gifts in non-market societies are entirely spontaneous and carry no binding social expectations whatsoever",
      "B) Only wealthy individuals in any society are permitted to give gifts to others",
      "C) Gift-giving operates according to a binding obligation structure — to give, to receive, and to reciprocate — making the apparently voluntary gift actually an obligatory exchange system",
      "D) Gift-giving was invented by the Trobriand Islanders and later spread to other societies through cultural contact"
    ],
    answer: "C",
    explanation: "The passage states Mauss's framework directly: a 'binding tripartite obligation — to give, to receive, and, crucially, to reciprocate,' arguing 'the apparently voluntary gift in fact constitutes an obligatory exchange system.' Option B is a precise restatement; A directly contradicts this central claim."
  },

  {
    id: 5611, section: "English",
    passage: "passage_2",
    text: "The Kula ring objects (shell ornaments) are described in the passage as having value primarily because:",
    options: [
      "A) They are extremely rare minerals that cannot be found anywhere else in the world",
      "B) They function as carriers of social relationship and obligation, accumulating prestige as they circulate, despite possessing little or no practical utility",
      "C) They can be exchanged for any ordinary good or service within Trobriand markets",
      "D) Colonial authorities assigned them a fixed monetary value for taxation purposes"
    ],
    answer: "B",
    explanation: "The passage states explicitly: 'the objects' value lies almost entirely in their function as carriers of social relationship and obligation; they are not used as currency to purchase ordinary goods and possess little or no practical utility.' Option B is a precise restatement; C directly contradicts this."
  },

  {
    id: 5612, section: "English",
    passage: "passage_2",
    text: "Why does the passage state that colonial authorities' ban on the potlatch reflected 'a fundamental failure to comprehend an alternative... economic logic'?",
    options: [
      "A) Because the potlatch involved destroying wealth to gain social status, which appeared wasteful and irrational by market-capitalist standards, but actually followed a coherent internal logic where status derived from generosity rather than accumulation",
      "B) Because colonial authorities did not have the legal authority to ban any cultural practices under any circumstances",
      "C) Because the potlatch was actually a form of taxation that benefited the colonial government financially",
      "D) Because Pacific Northwest Coast peoples had no system of social status or hierarchy of any kind"
    ],
    answer: "A",
    explanation: "The passage explains the potlatch 'invert[ed] the conventional economic logic in which status follows from accumulation rather than dispersal,' and that colonial authorities viewed it as 'wasteful and economically irrational by the standards of market capitalism' — a perspective anthropologists now see as a failure to recognise the potlatch's own coherent, alternative logic. Option A precisely captures this reasoning."
  },

  {
    id: 5613, section: "English",
    passage: "passage_2",
    text: "The passage's discussion of 'contemporary research on corporate gift-giving... and the psychology of unsolicited favours' serves primarily to:",
    options: [
      "A) Prove that all modern corporations are secretly organised according to Trobriand Island social customs",
      "B) Demonstrate that Mauss's reciprocity framework may reflect something fundamental about human social psychology, extending well beyond the specific non-market societies he originally studied",
      "C) Argue that corporate gift-giving should be made illegal in all jurisdictions due to its manipulative nature",
      "D) Show that modern societies have completely eliminated all forms of gift-giving and reciprocal obligation"
    ],
    answer: "B",
    explanation: "The passage states this research has 'documented strikingly similar dynamics in ostensibly modern, market-based societies,' suggesting 'Mauss's tripartite obligation structure may reflect something considerably more fundamental about human social psychology than a feature specific to the particular non-market societies in which he first documented it.' Option B is a precise restatement."
  },

  {
    id: 5614, section: "English",
    passage: "passage_2",
    text: "The 'unresolved question for contemporary social theory' posed in the final paragraph concerns whether:",
    options: [
      "A) Anthropology should be classified as a natural science or a social science in university curricula",
      "B) Market exchange and gift exchange are genuinely distinct logics governing separate domains, or whether market transactions are better understood as a historically specific overlay obscuring an underlying reciprocal logic that persists beneath even impersonal commercial transactions",
      "C) The Trobriand Islanders should be permitted to continue practising the Kula ring in the present day",
      "D) Marcel Mauss's 1925 essay should be removed from university anthropology curricula due to outdated methodology"
    ],
    answer: "B",
    explanation: "The passage's final paragraph poses exactly this question: 'whether market exchange and gift exchange represent two genuinely distinct logics... or whether the apparently disinterested transactions of modern market economies are better understood as a historically specific overlay obscuring an underlying reciprocal logic.' Option B is a precise, complete restatement of this open theoretical question."
  }

];
