// data.js — single source of truth for the tracker.
// Claude edits this file directly when you talk through a topic.
// The website only ever reads/renders this; it never silently mutates it
// except for marking lastTouched/practice numbers via the UI controls.

const TRACKER_DATA = {
    meta: {
          startDate: "2026-06-22",
          totalDays: 70,
          examDate: null,
          lastUpdated: "2026-06-22"
    },

        subjects: [
          {
                  id: "p1",
                  name: "Advanced Accounting",
                  group: 1,
                  chapters: []
          },
          {
                  id: "p2",
                  name: "Corporate & Other Laws",
                  group: 1,
                  chapters: [
                    {
                                id: "p2-c1",
                                name: "The General Clauses Act, 1897",
                                weightage: "Medium",
                                pdfLink: "https://resource.cdn.icai.org/87784bos-aps2160-p2-ch1.pdf",
                                status: "in-progress",
                                lastTouched: "2026-06-22",
                                revisionCount: 1,
                                practice: { mcqAttempted: 0, mcqCorrect: 0, numericalsAttempted: 0, numericalsCorrect: 0 },
                                            breakdown: {
                                                          tier1: [
                                                            { term: "Immovable property", ref: "S.3(26)", body: "Land, benefits to arise out of land, things attached to earth, or permanently fastened to anything attached to earth." },
                                                            { term: "Movable property", ref: "S.3(36)", body: "Property of every description, except immovable property." },
                                                            { term: "Financial year", ref: "S.3(21)", body: "1 April to 31 March." },
                                                            { term: "Year", ref: "S.3(66)", body: "British calendar year, Jan to Dec." },
                                                            { term: "Good faith", ref: "S.3(22)", body: "Done honestly, whether negligently or not. Honesty test, not a due-care test." },
                                                            { term: "Document", ref: "S.3(18)", body: "Any matter written/expressed on any substance by letters, figures, or marks, meant for recording." },
                                                            { term: "Person", ref: "S.3(42)", body: "Includes any company, association, or body of individuals, incorporated or not." },
                                                            { term: "Affidavit / Oath / Swear", ref: "S.3(3)/(37)/(62)", body: "All three include affirmation & declaration where swearing isn't legally required. Identical wording across all three." },
                                                            { term: "\u201cMeans\u201d vs \u201cincludes\u201d", ref: "definitional rule", body: "\u2018Means\u2019 = exhaustive definition. \u2018Includes\u2019 = inclusive/extensive, not restricted to listed items." },
                                                            { term: "Effect of repeal", ref: "S.6", body: "Repeal does NOT: revive anything, undo past operation, affect accrued rights/penalties, or kill pending litigation." }
                                                                        ],
                                                                        caseLaws: [
                                                                          { case: "Ananda Behera v. Orissa", point: "Right to catch fish = immovable property (profit a prendre)." },
                                                                          { case: "Shantabai v. Bombay", point: "Standing trees = immovable (rooted in earth); cut timber is NOT immovable." },
                                                                          { case: "Kolhapur Canesugar v. UOI", point: "S.6 (repeal effect) applies only to repeal, not omission; applies to Act/Regulation, not Rules." },
                                                                          { case: "United Commercial Bank v. Bhim Sain Makhija", point: "Plain registered post is NOT valid service if the rule specifically demands 'acknowledgement due'." },
                                                                          { case: "State of MP v. V.R. Agnihotri", point: "Acquittal on one charge doesn't bar conviction on the other charge in the same trial (S.26)." }
                                                                                      ],
                                                                                      numericalPatterns: [
                                                                                        { name: "Section 9 \u2014 commencement & termination of time", howTo: "\u2018from\u2019 excludes the first day, \u2018to\u2019 includes the last day. Drives every dividend-timeline / notice-period numerical in this chapter." }
                                                                                                    ],
                                                                                                    notes: "Triaged on day 1. Tier-1 list covers the recurring MCQ/descriptive patterns from the ICAI module; case law kept to one line each (exam only needs the holding, not facts)."
                                            }
                    }
                          ]
          },
          {
                  id: "p3",
                  name: "Taxation",
                  group: 1,
                  chapters: []
          },
          {
                  id: "p4",
                  name: "Cost & Management Accounting",
                  group: 2,
                  chapters: []
          },
          {
                  id: "p5",
                  name: "Auditing & Ethics",
                  group: 2,
                  chapters: []
          },
          {
                  id: "p6",
                  name: "Financial Management & Strategic Management",
                  group: 2,
                  chapters: [// Pending chapters queued for the next batch commit.
// Each entry: { subjectId: "p6", chapter: {...} }
// Source: Google Drive "financial management" folder, fm1.pdf - fm9.6.pdf
 
const PENDING_CHAPTERS = [
  {
    subjectId: "p6",
    chapter: {
      id: "p6-c1",
      name: "Chapter 1: Scope and Objectives of Financial Management",
      weightage: "Medium",
      pdfLink: "https://resource.cdn.icai.org/87737bos280825-ch1.pdf",
      status: "in-progress",
      lastTouched: "2026-06-22",
      revisionCount: 1,
      practice: { mcqAttempted: 0, mcqCorrect: 0, numericalsAttempted: 0, numericalsCorrect: 0 },
      breakdown: {
        tier1: [
          { term: "Three financial decisions", ref: "V = f(I,F,D)", body: "Investment, Financing, Dividend decisions. Value of firm depends on all three jointly." },
          { term: "Profit Max vs Wealth Max", ref: "core theory", body: "Wealth Max preferred: accounts for risk, timing of returns, and uses cash flow not accounting profit. Wealth = PV(benefits) - PV(costs)." },
          { term: "Value of firm", ref: "formula", body: "V = N (number of shares) x MP (market price) = Ve (equity) + Vd (debt)." },
          { term: "Financial distress vs Insolvency", ref: "concept", body: "Distress = cash inflows inadequate to meet current obligations. Prolonged distress -> insolvency = inability to repay debts." },
          { term: "Agency Problem & Agency Cost", ref: "concept", body: "Conflict between owners/shareholders and managers (agents). 4 types of agency cost: monitoring, bonding, opportunity, structuring." },
          { term: "Three evolution phases", ref: "history", body: "Traditional (occasional events only) -> Transitional (day-to-day funds problems) -> Modern (efficient markets, capital budgeting theory)." },
          { term: "Sources of funds", ref: "concept", body: "Equity (safest, but costliest), Debentures (cheaper, tax-deductible interest, but mandatory repayment/interest), Bank funding, International (FDI/FII/ADR/GDR), Angel financing." }
        ],
        caseLaws: [
          { case: "Van Horne (definition)", point: "Firm value = market price of common stock; reflects all participants' judgment on future earnings, timing, risk, dividend policy." },
          { case: "Phillippatus (definition)", point: "Financial Management = managerial decisions resulting in acquisition and financing of short and long term credit." }
        ],
        numericalPatterns: [
          { name: "Illustration 1 pattern - Profit Max vs Wealth Max", howTo: "Compare two cash flow streams (e.g. Product X vs Y) with equal total but different risk. Profit max picks higher total blindly; wealth max requires risk-adjusted judgment. Largely conceptual, not a real calculation." }
        ],
        notes: "Triaged from pasted PDF text. 12 MCQs and 7 theory Qs already in the ICAI module map directly onto the Tier-1 list above - good for self-testing without needing extra practice questions."
      }
    }
  },
  {
    subjectId: "p6",
    chapter: {
      id: "p6-c2",
      name: "Chapter 2: Types of Financing",
      weightage: "Medium",
      pdfLink: "",
      status: "not-started",
      lastTouched: "2026-06-23",
      revisionCount: 1,
      practice: { mcqAttempted: 0, mcqCorrect: 0, numericalsAttempted: 0, numericalsCorrect: 0 },
      breakdown: {
        tier1: [
          { term: "Financial needs classification", ref: "concept", body: "Long-term (>5-10yr, fixed assets, permanent WC), Medium-term (1-5yr), Short-term (<1yr, current assets/WC)." },
          { term: "Equity vs Preference vs Debentures", ref: "comparison", body: "Equity: permanent, highest cost, no fixed dividend, dilutes control. Preference: hybrid, fixed dividend not tax-deductible, cumulative/non-cumulative/redeemable/participating/convertible types. Debentures: cheapest (tax-deductible interest), mandatory repayment, secured/unsecured, convertible types." },
          { term: "Venture Capital financing", ref: "concept", body: "Equity financing for high-risk new ventures. Methods: equity financing (max 49% stake), conditional loan (royalty on sales, no interest), income note (low interest + low royalty), participating debenture (3-phase interest)." },
          { term: "Debt Securitisation", ref: "concept", body: "Illiquid assets (e.g. loans) pooled into marketable securities sold to investors via SPV (Special Purpose Vehicle). Helps originator raise funds and get loans off balance sheet." },
          { term: "Lease Financing types", ref: "concept", body: "Operating Lease: short-term, cancellable, lessor bears risk/maintenance. Financial Lease: long-term, non-cancellable, lessee bears risk, full payout, also called capital lease. Also: Sale & Lease Back, Leveraged Lease, Sales-aid Lease." },
          { term: "Short-term sources", ref: "list", body: "Trade credit, Accrued expenses, Advances from customers, Commercial Paper (CP - 7 to 364 days, min Rs.5 lakh denomination), Treasury Bills (14-364 days), Certificates of Deposit, Bank advances (loan/OD/cash credit/clean advances)." },
          { term: "Export finance", ref: "concept", body: "Pre-shipment finance (packing credit - before shipment) and Post-shipment finance (after shipment - bill discounting, advance against bills for collection)." },
          { term: "ADR / GDR / IDR", ref: "international financing", body: "ADR: non-US companies list on US exchange. GDR: traded mainly in Europe/London. IDR: foreign companies raise funds from Indian market (reverse of ADR/GDR)." },
          { term: "Crowdfunding types", ref: "contemporary funding", body: "Equity funding (investors get securities), P2P lending (unsecured loans matched online), Donation-based (no return expected)." }
        ],
        caseLaws: [
          { case: "Masala Bond example", point: "NTPC raised Rs.2,000 crore via masala bonds (2016) - rupee-denominated bonds issued outside India." },
          { case: "Green Bond example", point: "Ghaziabad Municipal Corporation - first Indian municipal corp to raise Rs.150 crore via Green Bond (2021)." }
        ],
        numericalPatterns: [],
        notes: "Heavy on named-instrument recall (15+ named instruments across Indian/foreign bonds). Best tested via matching-type self-quizzes - this chapter is descriptive/MCQ heavy, not calculation heavy."
      }
    }
  },
  {
    subjectId: "p6",
    chapter: {
      id: "p6-c3",
      name: "Chapter 3: Financial Analysis and Planning - Ratio Analysis",
      weightage: "High",
      pdfLink: "",
      status: "not-started",
      lastTouched: "2026-06-23",
      revisionCount: 1,
      practice: { mcqAttempted: 0, mcqCorrect: 0, numericalsAttempted: 0, numericalsCorrect: 0 },
      breakdown: {
        tier1: [
          { term: "Four ratio categories", ref: "classification", body: "Liquidity (short-term solvency), Leverage/Capital Structure (long-term solvency), Activity/Turnover (efficiency), Profitability." },
          { term: "Current Ratio & Quick Ratio", ref: "formula", body: "Current Ratio = CA/CL, ideal 2:1. Quick Ratio = (CA - Inventory - Prepaid)/CL, ideal 1:1. Quick assets exclude inventory & prepaid expenses." },
          { term: "Debt-Equity Ratio & Debt-to-Assets", ref: "formula", body: "D/E = Total Debt / Shareholders Equity. High ratio = less creditor protection, higher financial leverage." },
          { term: "Coverage Ratios", ref: "formula", body: "DSCR = Earnings available for debt service / (Interest+Installments), ideal 1.5-2. Interest Coverage = EBIT/Interest. Fixed Charges Coverage = (EBIT+Depreciation)/(Interest+Loan repayment)." },
          { term: "Turnover Ratios", ref: "formula", body: "Inventory TO = COGS/Avg Inventory. Debtors TO = Credit Sales/Avg Receivables. Payables TO = Net Credit Purchases/Avg Payables. Average collection/payment period = 365/TO ratio." },
          { term: "ROI family", ref: "formula", body: "ROA = (PAT+Interest)/Avg Total Assets. ROCE(pre-tax) = EBIT/Capital Employed. ROCE(post-tax) = EBIT(1-t)/Capital Employed. ROE = (PAT - Pref Div)/Equity Shareholders Fund." },
          { term: "DuPont Model", ref: "ROE breakdown", body: "ROE = Net Profit Margin x Asset Turnover x Equity Multiplier. Equity Multiplier = Assets/Shareholders Equity - isolates leverage's contribution to ROE." },
          { term: "Market/Investor ratios", ref: "formula", body: "EPS = Net profit avail to equity / No. of shares. P/E = MPS/EPS. Dividend Yield = DPS/MPS. Q Ratio = Market value of equity+debt / Replacement cost of assets (Q=1 is equilibrium)." }
        ],
        caseLaws: [],
        numericalPatterns: [
          { name: "Multi-year ratio comparison + analysis writeup", howTo: "Classic exam pattern: given 2-year income statement + balance sheet, compute 5-7 ratios for both years, then write 'Analysis:' paragraph explaining WHY each ratio changed." },
          { name: "Reverse-engineering financial statements from ratios", howTo: "Given only a set of ratios and a few absolute figures, reconstruct the full P&L and Balance Sheet by working backward through each ratio formula. Very common 10-mark question type." },
          { name: "Industry-norm comparison", howTo: "Compute company's own ratios, compare to given industry-norm table, comment on each (better/worse than industry, with reasoning tied to specific ratio meaning)." }
        ],
        notes: "Highest-weightage FM chapter by sheer volume of formulas (25+ named ratios) and the most illustration-heavy. The 'reconstruct financial statements from ratios' numerical pattern is the signature ICAI question type - practice that specifically."
      }
    }
  },
  {
    subjectId: "p6",
    chapter: {
      id: "p6-c4",
      name: "Chapter 4: Cost of Capital",
      weightage: "High",
      pdfLink: "",
      status: "not-started",
      lastTouched: "2026-06-23",
      revisionCount: 1,
      practice: { mcqAttempted: 0, mcqCorrect: 0, numericalsAttempted: 0, numericalsCorrect: 0 },
      breakdown: {
        tier1: [
          { term: "Cost of Irredeemable Debt", ref: "formula", body: "Kd = I/NP x (1-t). NP = Net Proceeds (issue price less floatation cost)." },
          { term: "Cost of Redeemable Debt (approximation)", ref: "formula", body: "Kd = [I(1-t) + (RV-NP)/n] / [(RV+NP)/2]. Use YTM/IRR method via trial & error for more accuracy when RV-NP gap is large." },
          { term: "Cost of Preference Shares", ref: "formula", body: "Irredeemable: Kp = PD/P0. Redeemable: Kp = [PD + (RV-NP)/n] / [(RV+NP)/2]. Preference dividend NOT tax-deductible (unlike debt interest)." },
          { term: "Cost of Equity - 5 approaches", ref: "concept", body: "Dividend Price (Ke=D/P0), Earnings Price (Ke=E/P), Growth/Gordon's (Ke=D1/P0 + g), Realized Yield (historical IRR), CAPM (Ke = Rf + Beta(Rm-Rf))." },
          { term: "Growth rate estimation", ref: "formula", body: "Average method: D0 = Dn(1+g)^n, solve for g. Gordon's Growth Model: g = b x r (retention ratio x return on investment)." },
          { term: "Cost of Retained Earnings", ref: "formula", body: "Same formulas as Ke but P = current market price (not net proceeds) and NO floatation cost adjustment. Kr is normally LOWER than Ke." },
          { term: "WACC steps", ref: "process", body: "1) Total capital from all sources. 2) Proportion of each source. 3) Multiply proportion x specific cost. 4) Sum all = WACC. Use Book Value or Market Value weights - MV preferred, more relevant to current conditions." },
          { term: "Marginal Cost of Capital", ref: "concept", body: "Cost of raising ONE additional rupee of capital. Uses intended financing proportions as weights. Rises once cheaper sources are exhausted (e.g. retained earnings -> new equity)." }
        ],
        caseLaws: [],
        numericalPatterns: [
          { name: "YTM/IRR for cost of debt/preference shares", howTo: "Discount cash flows (interest net of tax + redemption value) at two trial rates, interpolate: IRR = L + [NPV_L/(NPV_L - NPV_H)] x (H-L)." },
          { name: "WACC with BV vs MV weights", howTo: "Always compute both when asked - apportion equity's market value between paid-up capital and retained earnings using the BV ratio of the two." },
          { name: "Marginal cost of capital - break point", howTo: "Find the capital investment level at which retained earnings get exhausted (Capital investment = Retained earnings / equity-weight%) - beyond this point, new equity must be issued, usually at higher cost." }
        ],
        notes: "Most formula-dense FM chapter. The YTM/IRR interpolation pattern repeats across cost of debt, cost of preference shares, AND comes back in Investment Decisions for IRR of projects - master the interpolation formula once, applies everywhere."
      }
    }
  },
  {
    subjectId: "p6",
    chapter: {
      id: "p6-c5",
      name: "Chapter 5: Financing Decisions - Capital Structure",
      weightage: "High",
      pdfLink: "",
      status: "not-started",
      lastTouched: "2026-06-23",
      revisionCount: 1,
      practice: { mcqAttempted: 0, mcqCorrect: 0, numericalsAttempted: 0, numericalsCorrect: 0 },
      breakdown: {
        tier1: [
          { term: "Four Capital Structure Theories", ref: "classification", body: "NI Approach (relevant, max debt minimizes WACC), NOI Approach (irrelevant, WACC constant), Traditional Approach (optimal mix exists), MM Approach (irrelevant w/o tax, relevant with tax due to interest tax shield)." },
          { term: "NI Approach formula", ref: "formula", body: "Value of Firm V = S + D. Market value of equity S = NI/Ke. Overall cost of capital = EBIT/V. Lower WACC achieved through MORE debt." },
          { term: "NOI Approach formula", ref: "formula", body: "V = EBIT/Ko (Ko constant regardless of leverage). Ke = (EBIT-Interest)/S, rises with leverage to offset cheaper debt - net effect is WACC stays flat." },
          { term: "MM Approach (1958, no tax)", ref: "formula", body: "Vlevered = Vunlevered (capital structure irrelevant). Ke(levered) = Ko + (Ko-Kd) x Debt/Equity. Arbitrage process keeps values equal across firms with same risk class." },
          { term: "MM Approach (1963, with tax)", ref: "formula", body: "Vlevered = Vunlevered + (Debt x Tax rate) [tax shield benefit]. Keg = Keu + (Keu-Kd) x [Debt/(Debt+Equity)](1-t). Kog = Keu[1-(t x L)] where L=Debt/(Debt+Equity)." },
          { term: "Trade-off Theory", ref: "concept", body: "Balances tax benefit of debt (interest tax shield) against cost of financial distress/bankruptcy. Optimal capital structure is where marginal benefit = marginal cost of additional debt." },
          { term: "Pecking Order Theory", ref: "concept", body: "Financing hierarchy due to asymmetric information: 1) Internal finance first, 2) Debt, 3) New equity issue LAST (most info-revealing, most costly signal)." },
          { term: "EBIT-EPS-MPS Analysis", ref: "tool", body: "Compare financing alternatives at same EBIT level; calculate EPS for each, multiply by P/E ratio (or divide by Ke) to get MPS. Plan with highest MPS wins, even if EPS is lower elsewhere." },
          { term: "Financial Break-Even Point & Indifference Point", ref: "formula", body: "Financial BEP = Interest + [Preference Dividend/(1-t)] - EBIT level where EPS=0. Indifference Point: EBIT where two financing plans give EQUAL EPS." },
          { term: "Over-capitalisation vs Under-capitalisation", ref: "concept", body: "Over-cap: more capital than needed, falling dividend/share price, remedy = buyback. Under-cap: actual capitalisation lower than earning capacity warrants, remedy = bonus shares. Over-cap is more dangerous." }
        ],
        caseLaws: [],
        numericalPatterns: [
          { name: "Indifference point between financing plans", howTo: "Set EPS formulas of two plans equal, solve for EBIT. Below this EBIT equity wins; above it debt financing wins." },
          { name: "Arbitrage process (MM 1958)", howTo: "Given two firms (one levered, one unlevered) with different value, show how an investor sells/buys + borrows/lends personally to replicate the position at lower cost, proving values must equalize." },
          { name: "MM with tax - value of levered firm", howTo: "Vlevered = Vunlevered + (Debt x Tax rate). Then back out new Ke and Ko using the formulas above - the single most repeated numerical in this chapter." }
        ],
        notes: "Theory-heaviest FM chapter - 4 named theories with distinct formulas that are easy to confuse. Drill the NI vs NOI vs MM(no-tax) vs MM(with-tax) distinction since exam MCQs love testing which approach says capital structure is irrelevant vs relevant."
      }
    }
  },
  {
    subjectId: "p6",
    chapter: {
      id: "p6-c6",
      name: "Chapter 6: Financing Decisions - Leverages",
      weightage: "High",
      pdfLink: "",
      status: "not-started",
      lastTouched: "2026-06-23",
      revisionCount: 1,
      practice: { mcqAttempted: 0, mcqCorrect: 0, numericalsAttempted: 0, numericalsCorrect: 0 },
      breakdown: {
        tier1: [
          { term: "Three types of leverage", ref: "classification", body: "Operating Leverage (Sales-EBIT, business risk). Financial Leverage (EBIT-EPS, financial risk). Combined Leverage (Sales-EPS, total risk)." },
          { term: "Degree of Operating Leverage (DOL)", ref: "formula", body: "DOL = Contribution/EBIT = %change in EBIT / %change in Sales. Driven by fixed cost amount." },
          { term: "Degree of Financial Leverage (DFL)", ref: "formula", body: "DFL = EBIT/EBT (no pref shares) = %change in EPS / %change in EBIT. Driven by interest + preference dividend." },
          { term: "Degree of Combined Leverage (DCL)", ref: "formula", body: "DCL = DOL x DFL = Contribution/EBT = %change in EPS / %change in Sales." },
          { term: "Margin of Safety & DOL relationship", ref: "formula", body: "DOL = 1/Margin of Safety. MOS = (Sales-BEP Sales)/Sales = EBIT/Contribution. Higher MOS = lower business risk = lower DOL." },
          { term: "Financial Leverage as Trading on Equity / Double-Edged Sword", ref: "concept", body: "Favourable when ROI > Interest rate (debt boosts EPS). Unfavourable when ROI < Interest rate (debt hurts EPS) - hence 'double-edged sword'." },
          { term: "DOL/DFL behavior near BEP", ref: "concept", body: "Can never be between 0 and 1 - either <=0 or >=1. At Operating/Financial BEP, leverage is undefined/infinite." },
          { term: "Combined leverage risk matrix", ref: "decision table", body: "Low DOL + Low DFL = lower total risk. High+High = highest risk. Low DOL + High DFL = best balance (financial risk offset by low business risk)." }
        ],
        caseLaws: [],
        numericalPatterns: [
          { name: "DOL/DFL/DCL from income statement", howTo: "Build Sales -> Contribution -> EBIT -> EBT -> EPS waterfall; DOL=Contribution/EBIT, DFL=EBIT/EBT, DCL=product of both." },
          { name: "Reverse-engineering EBIT/Sales/Fixed Cost from given leverage ratios", howTo: "Given DOL & DFL plus one absolute figure, work backward: Financial Leverage = EBIT/(EBIT-Interest) -> solve EBIT; Operating Leverage = Contribution/EBIT -> solve Contribution; Fixed Cost = Contribution - EBIT." },
          { name: "Percentage change propagation", howTo: "If DOL=6 and sales rise 10%, EBIT rises 60% (6x10%). Same logic chains DFL to EPS and DCL straight from Sales to EPS." }
        ],
        notes: "Short conceptual chapter but the reverse-engineering numerical pattern (given leverage ratios, find absolute EBIT/Sales/Fixed Cost) is asked almost every exam. DOL=1/MOS identity is a quick-win fact worth memorizing cold."
      }
    }
  },
  {
    subjectId: "p6",
    chapter: {
      id: "p6-c7",
      name: "Chapter 7: Investment Decisions",
      weightage: "High",
      pdfLink: "",
      status: "not-started",
      lastTouched: "2026-06-23",
      revisionCount: 1,
      practice: { mcqAttempted: 0, mcqCorrect: 0, numericalsAttempted: 0, numericalsCorrect: 0 },
      breakdown: {
        tier1: [
          { term: "Cash flow estimation principles", ref: "concept", body: "Exclude financing costs (interest/dividend - already in WACC), use post-tax cash flows only, depreciation is non-cash but creates tax shield." },
          { term: "Sunk cost vs Opportunity cost", ref: "concept", body: "Sunk cost = already incurred, IRRELEVANT (exclude). Opportunity cost = value of best forgone alternative, RELEVANT (include as cash outflow)." },
          { term: "Block of Assets depreciation treatment", ref: "concept", body: "If asset is the ONLY one in block: no depreciation in year of sale, STCG/STCL arises on (Sale value - WDV). If block has multiple assets: depreciation continues on (WDV - sale value)." },
          { term: "Payback Period", ref: "formula", body: "Uniform CF: Initial Investment/Annual CF. Non-uniform: find year cumulative CF first exceeds investment, interpolate the fraction. Ignores time value of money." },
          { term: "Accounting Rate of Return (ARR)", ref: "formula", body: "ARR = Average Annual Profit / Investment (initial OR average). Average Investment = 1/2(Initial-Salvage)+Salvage+Additional WC." },
          { term: "Net Present Value (NPV)", ref: "formula", body: "NPV = Sum of PV(cash inflows) - Initial Investment. Decision: NPV>=0 Accept. For mutually exclusive: pick highest NPV." },
          { term: "Profitability Index (PI)", ref: "formula", body: "PI = PV of cash inflows / Initial cash outlay. Decision: PI>=1 Accept. Useful for ranking under capital rationing (divisible projects)." },
          { term: "Internal Rate of Return (IRR)", ref: "formula", body: "Discount rate where NPV=0. IRR = L + [NPV_L/(NPV_L-NPV_H)] x (H-L). Decision: IRR>=Cut-off rate/WACC Accept." },
          { term: "Modified IRR (MIRR)", ref: "concept", body: "Reinvests all interim cash flows at cost of capital to terminal value, then finds single discount rate equating initial outflow to that terminal value. Fixes IRR's unrealistic reinvestment assumption." },
          { term: "NPV vs IRR conflicts", ref: "concept", body: "3 scenarios cause ranking conflicts: (1) Scale/size disparity, (2) Timing disparity, (3) Unequal project lives. NPV is theoretically superior - always prefer NPV ranking when conflict arises." },
          { term: "Capital Rationing", ref: "concept", body: "Divisible projects: rank by NPV per rupee of investment. Indivisible projects: rank by absolute NPV, combine to exhaust budget optimally - test combinations, don't just stack by rank." },
          { term: "Unequal life projects", ref: "concept", body: "Replacement Chain Method: extend shorter project via repetition to match longer project's life. Equivalent Annualized Criterion: NPV / PVAF(for that project's life) - avoids needing common multiple of lives." }
        ],
        caseLaws: [],
        numericalPatterns: [
          { name: "CFAT (Cash Flow After Tax) statement", howTo: "Sales - Variable Cost = Contribution; less Fixed Cost and Depreciation = EBT; less Tax = EAT; add back Depreciation = CFAT. Repeats in every NPV/IRR/Payback numerical." },
          { name: "IRR via trial-and-error + interpolation", howTo: "Guess a rate, get NPV; if positive try higher rate, if negative try lower rate, until bracketed; then interpolate between the two bracketing rates." },
          { name: "Replacement decision cash flows", howTo: "Initial outflow = New asset cost - Sale value of old asset +/- tax on STCG/STCL. Interim CF = incremental revenue/cost changes after tax + incremental depreciation tax shield." },
          { name: "Capital rationing project selection", howTo: "For divisible projects, rank NPV/Rs.1 invested and fill budget by rank. For indivisible projects, test feasible combinations within budget, pick highest total NPV." }
        ],
        notes: "The single most numerically dense and highest-weightage FM chapter - covers 7 distinct evaluation techniques. The CFAT computation structure is the backbone of nearly every other numerical and recurs in Chapter 4 (cost of capital, via YTM)."
      }
    }
  },
  {
    subjectId: "p6",
    chapter: {
      id: "p6-c8",
      name: "Chapter 8: Dividend Decisions",
      weightage: "High",
      pdfLink: "",
      status: "not-started",
      lastTouched: "2026-06-23",
      revisionCount: 1,
      practice: { mcqAttempted: 0, mcqCorrect: 0, numericalsAttempted: 0, numericalsCorrect: 0 },
      breakdown: {
        tier1: [
          { term: "Two theory categories", ref: "classification", body: "Irrelevance Theory: MM Approach. Relevance Theory: Walter's Model, Gordon's Model, Lintner's Model." },
          { term: "MM Hypothesis (Irrelevance)", ref: "formula", body: "P0 = (P1+D1)/(1+Ke). Value unchanged whether dividend paid via cash, new shares issued, or not paid at all - proven via arbitrage." },
          { term: "Walter's Model (Relevance)", ref: "formula", body: "P = [D + (r/Ke)(E-D)] / Ke. Optimal payout: Growth firm (r>Ke) -> 0% payout. Declining firm (r<Ke) -> 100% payout. Normal firm (r=Ke) -> payout irrelevant." },
          { term: "Gordon's Model (Relevance)", ref: "formula", body: "P0 = E1(1-b) / (Ke - br), where br = g (growth rate), b = retention ratio. Same optimal payout conclusions as Walter's." },
          { term: "Gordon's Revised Model / Bird-in-hand", ref: "formula", body: "P0 = D0(1+g)/(Ke-g) = D1/(Ke-g). Investors prefer certain current dividends over uncertain future capital gains." },
          { term: "Dividend Discount Model (DDM) variants", ref: "concept", body: "Zero Growth: P0=D/Ke. Constant Growth (Gordon's): P0=D1/(Ke-g). Variable/Multi-stage Growth: discount each phase separately, add PV of terminal value." },
          { term: "Lintner's Model", ref: "formula", body: "D1 = D0 + [(EPS x Target payout) - D0] x Adjustment factor. Managers focus on dividend CHANGES, not absolute level - explains why dividends are 'sticky'." },
          { term: "Stock Split vs Bonus Shares vs Share Buyback", ref: "concept", body: "Stock Split: divides one share into many, keeps shares affordable. Bonus Shares: capitalizes retained earnings, no cash outflow, net worth unchanged. Buyback: company repurchases own shares, raises future DPS." }
        ],
        caseLaws: [],
        numericalPatterns: [
          { name: "MM Hypothesis - value of firm under dividend/no-dividend scenarios", howTo: "Compute P1 using P0=(P1+D1)/(1+Ke) for both scenarios; compute shares needed to fund investment shortfall; show total firm value is identical either way." },
          { name: "Walter's/Gordon's optimal payout determination", howTo: "Compare r (return on investment) vs Ke (cost of equity) first - this single comparison determines whether 0% or 100% payout is optimal before any further calculation." },
          { name: "Multi-stage DDM (variable growth)", howTo: "Discount each year's dividend in the high-growth phase individually; for the terminal phase, use Gordon's formula to get terminal value, then discount back to present." }
        ],
        notes: "Conceptually parallels Chapter 5 (Capital Structure) - both have an 'irrelevance' theory (MM) and 'relevance' theories with explicit formulas. The key question type: given r vs Ke, what's the optimal payout ratio?"
      }
    }
  },
  {
    subjectId: "p6",
    chapter: {
      id: "p6-c9",
      name: "Chapter 9: Management of Working Capital",
      weightage: "High",
      pdfLink: "",
      status: "not-started",
      lastTouched: "2026-06-23",
      revisionCount: 1,
      practice: { mcqAttempted: 0, mcqCorrect: 0, numericalsAttempted: 0, numericalsCorrect: 0 },
      breakdown: {
        tier1: [
          { term: "Working Capital - 6 units structure", ref: "classification", body: "Unit I: Introduction. Unit II: Treasury & Cash Management. Unit III: Inventory Management. Unit IV: Receivables Management. Unit V: Payables Management. Unit VI: Financing of Working Capital." },
          { term: "Gross vs Net WC, Permanent vs Fluctuating", ref: "concept", body: "Gross WC = investment in current assets. Net WC = Current Assets - Current Liabilities. Permanent WC = minimum base always required. Fluctuating/Temporary WC = varies with seasonal needs." },
          { term: "Treasury Management functions", ref: "concept", body: "Cash Management, Currency Management (forex risk), Fund Management, Banking relationships, Corporate Finance (M&A, investor relations)." },
          { term: "Credit Policy elements (Receivables)", ref: "concept", body: "Credit standards, Credit terms (e.g. '3/15 net 60'), Collection efforts. Lenient policy = more sales but more bad debt risk; Stringent = fewer sales, safer." },
          { term: "Cost of Trade Credit (Payables)", ref: "formula", body: "Nominal cost of NOT taking discount = [d/(100-d)] x [365/t]. Effective cost = [(1+d/(100-d))^(365/t)] - 1, where d=discount%, t=days between discount period and full credit period." },
          { term: "Sources of Working Capital Finance", ref: "classification", body: "Spontaneous: Trade credit, Bills payable, Accrued expenses (no explicit cost). Negotiated: Bank loans, Commercial Paper, Inter-corporate deposits, Public deposits." },
          { term: "Inventory Management cross-reference", ref: "note", body: "This unit defers to Cost & Management Accounting Paper 4, Chapter 2 (Material Cost) for EOQ and inventory control techniques." }
        ],
        caseLaws: [],
        numericalPatterns: [
          { name: "Cost of not availing cash discount", howTo: "Use [d/(100-d)] x [365/t] for nominal annual cost; compare against opportunity cost of investing the retained cash elsewhere." },
          { name: "Working capital estimation (operating cycle method)", howTo: "Build up cash blocked in each stage: raw material + WIP + finished goods holding period + receivables period - payables period, multiply by daily cash operating expense." }
        ],
        notes: "Largest FM chapter by page count (6 units) but lower numerical density than Chapters 3, 4, or 7 - mostly conceptual/list-based. The trade-credit discount-cost formula is the one genuinely numerical, exam-testable formula here."
      }
    }
  }
];
                  ]
          }
            ]
};
