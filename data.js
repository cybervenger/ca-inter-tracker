```javascript
const TRACKER_DATA = {
  "meta": {
    "startDate": "2026-06-22",
    "totalDays": 70,
    "examDate": null,
    "lastUpdated": "2026-06-22"
  },
  "subjects": [
    {
      "id": "p1",
      "name": "Advanced Accounting",
      "group": 1,
      "chapters": []
    },
    {
      "id": "p2",
      "name": "Corporate & Other Laws",
      "group": 1,
      "chapters": [
        {
          "id": "p2-c1",
          "name": "The General Clauses Act, 1897",
          "weightage": "Medium",
          "pdfLink": "https://resource.cdn.icai.org/87784bos-aps2160-p2-ch1.pdf",
          "status": "in-progress",
          "lastTouched": "2026-06-22",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Immovable property",
                "ref": "S.3(26)",
                "body": "Land, benefits to arise out of land, things attached to earth, or permanently fastened to anything attached to earth."
              },
              {
                "term": "Movable property",
                "ref": "S.3(36)",
                "body": "Property of every description, except immovable property."
              },
              {
                "term": "Financial year",
                "ref": "S.3(21)",
                "body": "1 April to 31 March."
              },
              {
                "term": "Year",
                "ref": "S.3(66)",
                "body": "British calendar year, Jan to Dec."
              },
              {
                "term": "Good faith",
                "ref": "S.3(22)",
                "body": "Done honestly, whether negligently or not. Honesty test, not a due-care test."
              },
              {
                "term": "Document",
                "ref": "S.3(18)",
                "body": "Any matter written/expressed on any substance by letters, figures, or marks, meant for recording."
              },
              {
                "term": "Person",
                "ref": "S.3(42)",
                "body": "Includes any company, association, or body of individuals, incorporated or not."
              },
              {
                "term": "Affidavit / Oath / Swear",
                "ref": "S.3(3)/(37)/(62)",
                "body": "All three include affirmation & declaration where swearing isn't legally required. Identical wording across all three."
              },
              {
                "term": "“Means” vs “includes”",
                "ref": "definitional rule",
                "body": "‘Means’ = exhaustive definition. ‘Includes’ = inclusive/extensive, not restricted to listed items."
              },
              {
                "term": "Effect of repeal",
                "ref": "S.6",
                "body": "Repeal does NOT: revive anything, undo past operation, affect accrued rights/penalties, or kill pending litigation."
              }
            ],
            "caseLaws": [
              {
                "case": "Ananda Behera v. Orissa",
                "point": "Right to catch fish = immovable property (profit a prendre)."
              },
              {
                "case": "Shantabai v. Bombay",
                "point": "Standing trees = immovable (rooted in earth); cut timber is NOT immovable."
              },
              {
                "case": "Kolhapur Canesugar v. UOI",
                "point": "S.6 (repeal effect) applies only to repeal, not omission; applies to Act/Regulation, not Rules."
              },
              {
                "case": "United Commercial Bank v. Bhim Sain Makhija",
                "point": "Plain registered post is NOT valid service if the rule specifically demands 'acknowledgement due'."
              },
              {
                "case": "State of MP v. V.R. Agnihotri",
                "point": "Acquittal on one charge doesn't bar conviction on the other charge in the same trial (S.26)."
              }
            ],
            "numericalPatterns": [
              {
                "name": "Section 9 — commencement & termination of time",
                "howTo": "‘from’ excludes the first day, ‘to’ includes the last day. Drives every dividend-timeline / notice-period numerical in this chapter."
              }
            ],
            "notes": "Triaged on day 1. Tier-1 list covers the recurring MCQ/descriptive patterns from the ICAI module; case law kept to one line each (exam only needs the holding, not facts)."
          }
        },
        {
          "id": "p2-c2",
          "name": "Preliminary (Companies Act 2013, Ch. I) - Definitions",
          "weightage": "High",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Act extent & commencement",
                "ref": "S.1",
                "body": "Extends to whole of India. Different sections commenced on different notified dates (not all at once on 30 Aug 2013)."
              },
              {
                "term": "Act applies to",
                "ref": "S.1",
                "body": "Companies incorporated under this/previous Act, insurance/banking/electricity companies (except where inconsistent with their special Act), companies under special Acts, notified body corporates."
              },
              {
                "term": "Associate Company & Significant Influence",
                "ref": "S.2(6)",
                "body": "Significant influence = control of at least 20% voting power OR participation in business decisions under agreement. Not a subsidiary, includes joint ventures."
              },
              {
                "term": "Free Reserves",
                "ref": "S.2(43)",
                "body": "Reserves available for dividend per latest audited balance sheet. EXCLUDES unrealised/notional gains and revaluation reserves."
              },
              {
                "term": "Government Company",
                "ref": "S.2(45)",
                "body": "Not less than 51% paid-up share capital held by Central/State Govt (singly or jointly), including subsidiaries of such company."
              },
              {
                "term": "Small Company",
                "ref": "S.2(85)",
                "body": "Non-public company with paid-up capital <= Rs.4 crore AND turnover <= Rs.40 crore (both conditions must hold). Excludes holding/subsidiary companies, S.8 companies, special Act companies."
              },
              {
                "term": "Private vs Public Company",
                "ref": "S.2(68)/(71)",
                "body": "Private: restricts share transfer, max 200 members (employees excluded), prohibits public invitation. Public: not private + min paid-up capital as prescribed. A private subsidiary of a public company is DEEMED public."
              },
              {
                "term": "Key Managerial Personnel (KMP)",
                "ref": "S.2(51)",
                "body": "CEO/MD/Manager, Company Secretary, Whole-time Director, CFO, + one officer below directors in whole-time employment designated as KMP by Board."
              },
              {
                "term": "Related Party",
                "ref": "S.2(76)",
                "body": "Director/KMP + relatives, firms/private cos where they're partner/member/director, public cos where they hold >2% with relatives, holding/subsidiary/associate companies."
              },
              {
                "term": "Officer in Default",
                "ref": "S.2(60)",
                "body": "WTD, KMP, or (if none) Board-specified director(s), or any person under whose advice Board acts (non-professional), or director aware of contravention without objecting."
              },
              {
                "term": "Net Worth",
                "ref": "S.2(57)",
                "body": "Paid-up capital + reserves from profits + securities premium +/- P&L balance, LESS accumulated losses/deferred expenditure. EXCLUDES revaluation reserves, write-back of depreciation, amalgamation reserves."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Subscribed/Issued/Called-up/Paid-up capital chain",
                "howTo": "Authorised >= Subscribed >= Issued >= Called-up >= Paid-up. Work through each stage sequentially using the given share numbers and per-share amounts (see worked example: ABC Ltd. with 7,00,000 issued shares, Rs.8 called, 6000 shares partly unpaid)."
              }
            ],
            "notes": "This is the definitions chapter - huge volume of S.2 clauses (90+ terms). High-yield exam terms are the ones with numeric thresholds (Small Company, Government Company, Significant Influence %) since MCQs love testing exact percentages/amounts. Don't try to memorize all 90+ clauses - focus on the ones with numbers or clear distinguishing tests."
          }
        },
        {
          "id": "p2-c3",
          "name": "Incorporation of Company and Matters Incidental Thereto (Companies Act 2013, Ch. II)",
          "weightage": "High",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Minimum members to form a company",
                "ref": "S.3",
                "body": "Public: 7+. Private: 2+. OPC: 1 (as a private company). All companies can be limited by shares, limited by guarantee, or unlimited."
              },
              {
                "term": "One Person Company (OPC) eligibility",
                "ref": "S.3(1) + Rules",
                "body": "Only natural person, NOT a minor, Indian citizen (resident or not). Resident = stayed in India 120+ days in preceding FY. Cannot be a S.8 company or do NBFC investment activities. Person can be member of only ONE OPC at a time."
              },
              {
                "term": "Severally liable members (reduced membership)",
                "ref": "S.3A",
                "body": "If members fall below 7 (public)/2 (private) and business continues 6+ months with knowledge, those members become SEVERALLY liable for debts contracted after the 6-month mark."
              },
              {
                "term": "Certificate of Incorporation (CoI)",
                "ref": "S.7",
                "body": "Issued via SPICe+ form. CoI is NOT conclusive proof of everything prior to incorporation being in order (changed from old law) - especially not proof of legality of objects clause."
              },
              {
                "term": "Corporate Identity Number (CIN) structure",
                "ref": "concept",
                "body": "21 alphanumeric digits: Listing status (L/U) + 5-digit industry code + 2-letter state code + 4-digit incorporation year + 3-letter classification (PLC/PTC/FTC/GOI) + 6-digit ROC registration number."
              },
              {
                "term": "Section 8 Companies (charitable objects)",
                "ref": "S.8",
                "body": "Promotes commerce/art/science/charity etc., applies profits to objects, PROHIBITS dividend payment. No 'Limited'/'Private Limited' suffix needed. Cannot be formed as OPC or small company. Conversion to other company types or revocation of license follows a detailed Tribunal/Regional Director process."
              },
              {
                "term": "Doctrine of Ultra Vires",
                "ref": "concept + S.4(1)(c)",
                "body": "Acts beyond the objects clause in MOA are void and CANNOT be ratified even by 100% shareholder consent. Landmark case: Ashbury Railway Carriage v. Riche."
              },
              {
                "term": "Doctrine of Constructive Notice",
                "ref": "concept",
                "body": "Everyone dealing with a company is DEEMED to know contents of MOA/AOA (public documents) whether they actually read them or not. Based on Ernest v Nicholls."
              },
              {
                "term": "Doctrine of Indoor Management (Turquand's Rule)",
                "ref": "concept",
                "body": "Outsiders can assume internal procedures (board approvals, resolutions) were properly followed - exception to Constructive Notice. From Royal British Bank v. Turquand. Exceptions: outsider has actual knowledge of irregularity, negligence in not checking obvious red flags, forgery, or the act is ultra vires the COMPANY itself (not just the officer)."
              },
              {
                "term": "MOA vs AOA - key differences",
                "ref": "comparison",
                "body": "MOA = charter/fundamental conditions, defines scope (acts beyond it are VOID, unratifiable). AOA = internal rules, subordinate to MOA and the Act; acts beyond AOA (but within MOA) CAN be ratified by shareholders."
              },
              {
                "term": "Alteration of Memorandum vs Articles",
                "ref": "S.13 / S.14",
                "body": "Both generally need special resolution. Name change needs Central Govt/ROC approval (Form INC-24). Registered office change between states needs Regional Director approval; change of objects after raising public money needs special resolution via postal ballot + newspaper advertisement + dissenting shareholder exit option."
              },
              {
                "term": "Provision for Entrenchment",
                "ref": "S.5(3)-(5)",
                "body": "Makes specific AOA provisions harder to alter than via ordinary special resolution. Can only be inserted at formation, OR later by ALL members' agreement (private co.) or special resolution (public co.). Notice to Registrar required."
              },
              {
                "term": "Subsidiary cannot hold shares in holding company",
                "ref": "S.19",
                "body": "Void if attempted. Exceptions: subsidiary acting as legal representative of deceased member, subsidiary holding as TRUSTEE, or subsidiary already held shares before becoming a subsidiary (no voting rights in that case)."
              },
              {
                "term": "Registered office requirements",
                "ref": "S.12",
                "body": "Must have one within 30 days of incorporation; verify with Registrar within 30 days. Name/CIN/address must be displayed on signboard, letterheads, seal. Change within same city = Board Resolution; different city same state = Special Resolution + ROC notice; different state = Special Resolution + Central Govt/Regional Director approval + fresh Certificate of Incorporation."
              }
            ],
            "caseLaws": [
              {
                "case": "Ashbury Railway Carriage and Iron Co. Ltd. v. Riche",
                "point": "Foundational ultra vires case - contract outside objects clause is void even if all shareholders ratify it."
              },
              {
                "case": "Ernest v Nicholls",
                "point": "Established Doctrine of Constructive Notice - persons dealing with a company are deemed to know its public documents."
              },
              {
                "case": "Royal British Bank v. Turquand",
                "point": "Established Doctrine of Indoor Management - outsiders can presume internal company procedures were properly followed."
              },
              {
                "case": "Kotla Venkataswamy v. Chinta Ramamurthy",
                "point": "Applied Constructive Notice: payee had no claim when a cheque requiring two signatures (per AOA) was signed by only one director."
              },
              {
                "case": "Borland's Trustee v Steel Bros & Co Ltd",
                "point": "AOA binds members to the company - share transfer restriction clauses are enforceable even against a bankrupt shareholder's trustee."
              },
              {
                "case": "Browne v La Trinidad",
                "point": "AOA does NOT bind the company to outsiders, even if a clause purports to give them rights (e.g. a named director)."
              },
              {
                "case": "Rayfield v Hands",
                "point": "AOA binds members to each other - directors (who were also members) were compelled to buy a member's shares per the articles."
              }
            ],
            "numericalPatterns": [
              {
                "name": "CIN decoding",
                "howTo": "Break a given 21-character CIN into its 6 components (listing status, industry code, state, year, classification, ROC number) - a quick, low-effort MCQ pattern."
              },
              {
                "name": "Severally liable members - debt timeline",
                "howTo": "Identify the date membership fell below threshold, add 6 months, then any debt contracted AFTER that date makes the continuing members severally (not just jointly) liable."
              }
            ],
            "notes": "Two of the most-cited doctrine pairs in this paper: Ultra Vires (limits company's own power) vs Constructive Notice + Indoor Management (govern outsider's rights against the company). Exam loves testing the EXCEPTIONS to Indoor Management specifically - know all 4 (knowledge of irregularity, negligence, forgery, ultra vires the company itself) since that's where nuance/marks live."
          }
        }
      ]
    },
    {
      "id": "p3",
      "name": "Taxation",
      "group": 1,
      "chapters": [
        {
          "id": "p3-it1",
          "name": "Basic Concepts",
          "weightage": "High",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Direct vs Indirect tax",
                "ref": "concept",
                "body": "Direct: burden cannot be shifted (Income tax). Indirect: burden passed to another person (GST, Customs)."
              },
              {
                "term": "Components of Income-tax law",
                "ref": "concept",
                "body": "Income-tax Act 1961 (S.1-298 + Sch I-XIV) + Annual Finance Act (4 parts: current AY rates, TDS rates, salary/advance tax rates, agri income rules) + IT Rules 1962 + Circulars/Notifications + Case law."
              },
              {
                "term": "Charging section",
                "ref": "S.4",
                "body": "Tax charged at rates prescribed by Finance Act on every 'person' u/s 2(31), on total income of PREVIOUS year (not AY), with exceptions u/s 172,174,174A,175,176."
              },
              {
                "term": "Person categories",
                "ref": "S.2(31)",
                "body": "7 categories: Individual, HUF, Company, Firm (incl. LLP), AOP, BOI, Local Authority, Artificial Juridical Person. AOP vs BOI: AOP allows any entity as member (firm/company), BOI only individuals; AOP has common will/intention, BOI may not."
              },
              {
                "term": "Income definition",
                "ref": "S.2(24)",
                "body": "INCLUSIVE definition, not exhaustive. Includes profits, dividends, perquisites, winnings from lotteries/gambling, deemed profits u/s 41/59, capital gains, subsidies/grants from govt."
              },
              {
                "term": "15-step computation of Total Income",
                "ref": "process",
                "body": "1)Residential status 2)Classify income into 5 heads 3)Compute income per head 4)Clubbing 5)Set-off/carry-forward losses 6)Gross Total Income 7)Deductions from GTI 8)Total Income 9)Apply tax rates 10)Surcharge/87A rebate 11)Health & Edu cess 4% 12)AMT if applicable 13)Choose 115BAC vs optional regime 14)Advance tax/TDS/TCS 15)Net tax payable/refund."
              },
              {
                "term": "Default regime S.115BAC slabs (AY 2026-27)",
                "ref": "formula",
                "body": "Up to 4L: Nil | 4-8L: 5% | 8-12L: 10% | 12-16L: 15% | 16-20L: 20% | 20-24L: 25% | Above 24L: 30%. Basic exemption Rs.4,00,000. Denies most exemptions/deductions except 80CCD(2), 80CCH(2), 80JJAA."
              },
              {
                "term": "Optional regime slabs (normal provisions)",
                "ref": "formula",
                "body": "Up to 2.5L: Nil | 2.5-5L: 5% | 5-10L: 20% | Above 10L: 30%. Senior citizen (60+) basic exemption 3L; very senior (80+) basic exemption 5L."
              },
              {
                "term": "Rebate u/s 87A",
                "ref": "formula",
                "body": "115BAC regime: full rebate if TI <= 12L (+marginal relief above). Optional regime: full rebate if TI <= 5L. Resident individuals only."
              },
              {
                "term": "Surcharge slabs",
                "ref": "formula",
                "body": "115BAC: >50L-1Cr:10%, >1Cr-2Cr:15%, >2Cr:25% (capped). Optional regime: >50L-1Cr:10%, >1Cr-2Cr:15%, >2Cr-5Cr:25%, >5Cr:37%. Dividend/111A/112/112A capped at max 15% surcharge regardless of regime."
              },
              {
                "term": "Marginal relief",
                "ref": "concept",
                "body": "Ensures tax increase due to crossing a surcharge threshold doesn't exceed the income increase itself. Always compute: tax at threshold + excess income, compare to tax at actual income, take lower."
              },
              {
                "term": "Agricultural income apportionment Rules 7/7A/7B/8",
                "ref": "formula",
                "body": "Rubber (Rule 7A): 65% agri/35% business. Coffee grown+cured (7B): 75/25. Coffee grown+cured+roasted (7B): 60/40. Tea grown+manufactured (Rule 8): 60/40."
              },
              {
                "term": "Undisclosed income sections",
                "ref": "S.68-69D",
                "body": "S.68 Cash credits (unexplained), S.69 Unexplained investments, S.69A Unexplained money/bullion, S.69B Under-recorded investments, S.69C Unexplained expenditure, S.69D Hundi borrowing not via a/c payee cheque. All taxed @60%+25% surcharge = 78% effective u/s 115BBE, no deductions/loss set-off allowed."
              },
              {
                "term": "Exceptions to PY/AY timing rule",
                "ref": "S.172-176",
                "body": "Income taxed in PY itself (not following AY) for: Non-resident shipping (7.5% of freight), Person leaving India, AOP/BOI formed for one event, Person likely to transfer assets to avoid tax, Discontinued business."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Tax liability with marginal relief computation",
                "howTo": "Step 1: tax+surcharge on actual TI. Step 2: tax+surcharge on threshold TI + (actual TI - threshold). Step 3: tax payable = LOWER of Step 1 and Step 2. Marginal relief = Step1 - Step2 if Step1 is higher."
              },
              {
                "name": "Agricultural vs business income split (Rule 7 - growing+manufacturing)",
                "howTo": "Market value of raw agri produce used in manufacture = treated as agricultural income (less cost of cultivation = agri profit); Sale price of final product less market value of raw material less manufacturing cost = business income."
              },
              {
                "name": "Default vs optional regime comparison",
                "howTo": "Compute total tax liability (incl. surcharge+cess) under BOTH regimes using the same total income, pick whichever gives lower tax — always show both workings in the answer."
              }
            ],
            "notes": "Foundational chapter - the 115BAC vs optional-regime slab comparison and marginal relief mechanics recur in nearly every numerical across the whole Taxation paper. Master the rate tables and the 3-step marginal relief method first."
          }
        },
        {
          "id": "p3-it2",
          "name": "Residence and Scope of Total Income",
          "weightage": "High",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Individual residency - basic conditions S.6(1)",
                "ref": "formula",
                "body": "Resident if: (i) stay >=182 days in PY, OR (ii) stay >=60 days in PY AND >=365 days in 4 preceding years. Exception: Indian citizen leaving for employment/crew, or Indian citizen/PIO visiting India - condition (ii) becomes 182 days instead of 60 (unless income >Rs.15L, then 120 days)."
              },
              {
                "term": "Deemed resident S.6(1A)",
                "ref": "formula",
                "body": "Indian citizen with income (excl. foreign sources) >Rs.15L, NOT liable to tax in any other country by domicile/residence, becomes deemed resident even with ZERO days in India. Always RNOR. Doesn't apply if already resident under 6(1)."
              },
              {
                "term": "RNOR conditions S.6(6)",
                "ref": "formula",
                "body": "Individual is RNOR if ANY one holds: (i) non-resident in 9 of preceding 10 years, OR (ii) stay <=729 days in preceding 7 years, OR (iii) Indian citizen/PIO visiting with income>15L and stay 120-182 days, OR (iv) deemed resident u/s 6(1A)."
              },
              {
                "term": "HUF/Firm/AOP/Company residency",
                "ref": "concept",
                "body": "HUF/Firm/AOP/BOI: resident if control & management wholly or partly in India. Company: resident if Indian company OR Place of Effective Management (POEM) in India during the year."
              },
              {
                "term": "Scope of Total Income S.5",
                "ref": "formula",
                "body": "ROR: global income taxable (received/accrued in India + accrued outside India even if not received in India). RNOR: India income + income from business controlled/profession set up in India (even if accrued abroad); NOT other foreign income. NR: only India-received or India-accrued income."
              },
              {
                "term": "Income deemed to accrue/arise in India S.9",
                "ref": "concept",
                "body": "Business connection/property/asset/capital asset transfer in India (9(1)(i)); Salary earned in India (9(1)(ii)); Govt salary to Indian citizen for service abroad (9(1)(iii)); Dividend by Indian co. paid abroad (9(1)(iv)); Interest/Royalty/FTS payable by Govt/resident/non-resident-for-India-business (9(1)(v)-(vii))."
              },
              {
                "term": "Interest/Royalty/FTS - territorial nexus override",
                "ref": "Explanation to S.9",
                "body": "Deemed to accrue in India regardless of whether non-resident has residence/place of business/business connection in India, and regardless of whether services were rendered in India - only that they were UTILISED in India."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Determining residential status from days-count table",
                "howTo": "Build a year-by-year days table (current PY + 4 preceding for basic condition; 7 preceding for RNOR 729-day test; 10 preceding for 9-out-of-10 NR test) then apply conditions sequentially: basic condition first (resident/non-resident), then RNOR test only if resident."
              },
              {
                "name": "Building taxable income under ROR/RNOR/NR side by side",
                "howTo": "List every income item in a 3-column table; apply S.5 scope rules per column - foreign-accrued+foreign-received income is taxable ONLY for ROR (and for RNOR only if from business controlled/profession set up in India); India-sourced income is taxable for all three statuses."
              }
            ],
            "notes": "The residential-status decision tree (basic condition -> RNOR test) and the 3-column ROR/RNOR/NR income table are the two recurring patterns. Crew-member/visiting-NRI day-exclusion rules are a frequent trap in MCQs."
          }
        },
        {
          "id": "p3-it3-1",
          "name": "Heads of Income - Unit 1: Salaries",
          "weightage": "High",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Employer-employee relationship test",
                "ref": "concept",
                "body": "Salary taxable ONLY if employer-employee relationship exists. Partner's salary from firm = business income (not salary). MP/MLA remuneration = Income from Other Sources (not Govt employee)."
              },
              {
                "term": "Salary chargeability S.15",
                "ref": "concept",
                "body": "Taxed on DUE or RECEIPT basis, whichever is EARLIER. Advance salary taxed on receipt; arrears taxed in year due UNLESS never due before (then receipt basis) - relief u/s 89 available for rate-spike from arrears/advance."
              },
              {
                "term": "Meaning of Salary S.17(1)",
                "ref": "concept",
                "body": "Inclusive definition: wages, annuity/pension, gratuity, fees/commission/perquisites, advance salary, leave encashment, taxable PF accretion, employer NPS contribution, Agniveer Corpus Fund contribution."
              },
              {
                "term": "HRA exemption S.10(13A) - optional regime only",
                "ref": "formula",
                "body": "Least of: (i) HRA received, (ii) Rent paid - 10% of salary, (iii) 50% salary (metro: Delhi/Mumbai/Kolkata/Chennai) or 40% (other cities). NOT available under 115BAC default regime."
              },
              {
                "term": "Standard deduction S.16(ia)",
                "ref": "formula",
                "body": "Default regime (115BAC): lower of salary or Rs.75,000. Optional regime: lower of salary or Rs.50,000."
              },
              {
                "term": "Gratuity exemption S.10(10)",
                "ref": "formula",
                "body": "Govt employees: fully exempt. Covered by Gratuity Act: least of Rs.20L / actual received / 15 days salary (26 days/month) x years of service. NOT covered by Gratuity Act: least of Rs.20L / actual received / half-month avg salary (last 10 months) x years of service."
              },
              {
                "term": "Leave encashment exemption S.10(10AA)",
                "ref": "formula",
                "body": "Govt employee: fully exempt. Other employees (on retirement): least of Rs.25L / actual received / 10 months avg salary / cash equiv of leave at credit (max 30 days/year of service)."
              },
              {
                "term": "Commuted pension exemption S.10(10A)",
                "ref": "formula",
                "body": "Govt employee: fully exempt. Other (with gratuity): 1/3 of full pension value exempt. Other (without gratuity): 1/2 of full pension value exempt. Full value = commuted amount / commutation% x 100."
              },
              {
                "term": "Voluntary retirement S.10(10C)",
                "ref": "formula",
                "body": "Max exemption Rs.5L. Least of: actual compensation / Rs.5L / 3 months salary x completed years / last salary x remaining months of service. Once claimed in any AY, cannot claim again ever; mutually exclusive with S.89 relief for same VRS amount."
              },
              {
                "term": "Provident Fund types & taxability",
                "ref": "concept",
                "body": "RPF: employer contribution >12% salary taxable; interest >9.5% taxable; withdrawal exempt only if 5+ years continuous service (else taxed as if URPF throughout). SPF/PPF: fully exempt always. URPF: employer's share+interest taxed as salary on withdrawal; employee's interest taxed as Other Sources; employee's own contribution not taxed (no deduction was ever given)."
              },
              {
                "term": "Specified employee (for perquisite taxability)",
                "ref": "S.17(2)(iii) + Rule",
                "body": "3 categories: (i) Director-employee, (ii) employee with substantial interest (beneficial owner of >=20% voting equity), (iii) employee whose salary (excl. non-monetary perks & exempt items) exceeds prescribed limit."
              },
              {
                "term": "Motor car perquisite valuation",
                "ref": "Rule 3(2)",
                "body": "Employer-owned, wholly official use + records kept: NIL. Wholly personal use: actual running cost + employer reimbursement. Partly official+personal, expenses by employer: Rs.1,800/2,400 pm (<=1.6L/>1.6L cc) +Rs.900 if chauffeur. Partly mixed, expenses by employee: Rs.600/900 pm +Rs.900 chauffeur."
              },
              {
                "term": "Rent-free accommodation valuation",
                "ref": "Rule 3(1)",
                "body": "Govt employees: license fee less rent paid. Others (employer-owned): 10%/7.5%/5% of salary depending on city population (>40L/15-40L/other) less rent recovered. Furniture adds 10% p.a. of cost (or hire charges) on top."
              }
            ],
            "caseLaws": [
              {
                "case": "CIT vs. Lala Shri Dhar (1972) 84 ITR 19 (Del.)",
                "point": "Personal accident insurance premium paid by employer is not a taxable perquisite since the employee only has an expectancy of benefit."
              }
            ],
            "numericalPatterns": [
              {
                "name": "Full salary computation (Gross Salary -> Income under Salaries)",
                "howTo": "Basic + DA + Bonus/Commission + all allowances (less exemptions) + all perquisites (less exemptions) + gratuity/pension/leave-encashment/VRS (less S.10 exemptions) = Gross Salary. Less S.16 deductions (standard deduction, entertainment allowance if Govt+optional regime, professional tax if optional regime) = Income under Salaries."
              },
              {
                "name": "HRA exemption calculation",
                "howTo": "Always compute all 3 limits (received, rent-10%sal, 50/40%sal) for the EXACT period of occupation/rent payment if it changes mid-year - split the year into sub-periods if salary or city changes."
              },
              {
                "name": "Gratuity/Leave encashment/VRS - 3-limb least-of test",
                "howTo": "Always list all 3 (or 4) limbs explicitly even if the answer is obviously one limb - examiners give partial marks for showing the comparison, not just the final figure."
              }
            ],
            "notes": "The single longest, most provision-dense unit in the whole syllabus. The recurring exam skeleton is always: build the Gross Salary table top to bottom (allowances first, then perquisites, then retirement benefits with their S.10 exemptions), then apply S.16 deductions at the very end. Master that skeleton once, since every salary numerical follows it."
          }
        },
        {
          "id": "p3-it3-2",
          "name": "Heads of Income - Unit 2: Income from House Property",
          "weightage": "High",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Chargeability conditions S.22",
                "ref": "concept",
                "body": "Property must be: (i) building or land appurtenant thereto, (ii) assessee must be OWNER (legal or deemed owner; registration not mandatory). Self-occupied portions used for own business/profession are taxed under PGBP, not house property."
              },
              {
                "term": "Composite rent treatment",
                "ref": "concept",
                "body": "Rent for building + other assets (furniture/machinery): if separable, building portion taxed as House Property, other assets as Business/Other Sources. If inseparable, entire rent taxed as Business Income or Other Sources."
              },
              {
                "term": "Gross Annual Value determination",
                "ref": "S.23",
                "body": "GAV = higher of Expected Rent (Municipal/Fair Rent, capped at Standard Rent) and Actual Rent Received, subject to adjustment for vacancy period (Actual Rent reduced proportionately, can make Actual < Expected)."
              },
              {
                "term": "Stock-in-trade property - 2 year exemption",
                "ref": "S.23(5)",
                "body": "If house property held as stock-in-trade and NOT let out, annual value = NIL for 2 years from end of FY in which completion certificate obtained."
              },
              {
                "term": "Deductions u/s 24",
                "ref": "formula",
                "body": "(a) Standard deduction: 30% of Net Annual Value (NAV = GAV - municipal taxes paid by owner). (b) Interest on borrowed capital: fully allowed for let-out property; for self-occupied, capped at Rs.2,00,000 (loan after 1.4.1999 for acquisition/construction within 5 years) or Rs.30,000 (other cases) - and Interest deduction for self-occupied property NOT allowed under default 115BAC regime."
              },
              {
                "term": "Pre-construction period interest",
                "ref": "concept",
                "body": "Interest for period before completion of construction is accumulated and allowed in 5 equal installments starting from year of completion, in ADDITION to interest of that year (subject to overall Rs.2L cap for self-occupied)."
              },
              {
                "term": "Unrealized rent & arrears of rent",
                "ref": "S.25A",
                "body": "Both taxed in year of RECEIPT (ownership not required at receipt time) after deducting 30% standard deduction - regardless of whether assessee still owns the property."
              },
              {
                "term": "Co-owned property",
                "ref": "S.26",
                "body": "Each co-owner's share taxed separately per their defined share; if self-occupied by all co-owners, each gets separate Rs.2L/30K interest cap and NIL annual value benefit individually."
              }
            ],
            "caseLaws": [
              {
                "case": "Rayala Corporation (P) Ltd. vs Asstt. CIT (2016) 386 ITR 500 (SC)",
                "point": "Income from letting out commercial properties as a regular business activity is taxable as business income, not house property income."
              }
            ],
            "numericalPatterns": [
              {
                "name": "GAV determination with vacancy",
                "howTo": "Compute Expected Rent (lower of Fair Rent vs Standard Rent, but not below Municipal Value reference point per latest CBDT view) first. Then compare to Actual Rent for LET period only. If Actual < Expected purely due to vacancy, GAV = Actual Rent (vacancy override); otherwise GAV = higher of the two."
              },
              {
                "name": "Self-occupied + let-out portions of same property",
                "howTo": "Apportion municipal value, fair rent, and interest on loan between self-occupied and let-out portions (usually by area/floor); compute each portion's income separately under its own rules, then sum."
              }
            ],
            "notes": "Shorter unit than Salaries but the GAV-with-vacancy logic and the Rs.2L self-occupied interest cap (denied entirely under 115BAC) are the two highest-yield exam points. Always check which regime applies before claiming self-occupied interest deduction."
          }
        },
        {
          "id": "p3-it3-3",
          "name": "Heads of Income - Unit 3: Profits and Gains of Business or Profession",
          "weightage": "High",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Computation proforma starting point",
                "ref": "concept",
                "body": "Start with Net Profit per P&L Account, ADD BACK inadmissible expenses debited (depreciation per books, disallowed items u/s 40/40A/43B), LESS allowable items not yet debited (depreciation per Income-tax Rules, earlier-year disallowances now paid)."
              },
              {
                "term": "S.40(a)(ia) - TDS default disallowance",
                "ref": "formula",
                "body": "30% of any sum payable to a resident (on which tax was deductible) is disallowed if TDS not deducted or not deposited by due date u/s 139(1) - the 30% becomes allowable in the year TDS is actually deposited."
              },
              {
                "term": "S.40A(3) - cash payment disallowance",
                "ref": "formula",
                "body": "Any expenditure where payment (single day, to one person) exceeds Rs.10,000 otherwise than by account-payee cheque/draft/ECS/prescribed digital mode is FULLY disallowed."
              },
              {
                "term": "S.43B - allowed only on actual payment",
                "ref": "list",
                "body": "Items deductible ONLY when actually paid (even if accrual basis used): taxes/duties/cess, employer PF/ESI contributions, bonus/commission to employees, interest on loans from banks/financial institutions, leave encashment provision, payments to MSME beyond Sec 15 MSMED Act time limit."
              },
              {
                "term": "Speculative transaction & loss treatment",
                "ref": "concept",
                "body": "Speculative business loss can be set off ONLY against speculative business income (not regular business income); carried forward max 4 years."
              },
              {
                "term": "Presumptive taxation - key schemes",
                "ref": "concept",
                "body": "S.44AD (business, turnover <=Rs.3Cr if cash receipts <=5%, else 2Cr): 8% of turnover (6% for digital receipts) deemed income. S.44ADA (profession, gross receipts <=75L): 50% of receipts deemed income. S.44AE (goods carriage transporters): presumptive per vehicle per month."
              },
              {
                "term": "Compulsory books of account & audit",
                "ref": "S.44AA/44AB",
                "body": "Tax audit triggers: business turnover >Rs.1Cr (or >Rs.10Cr if cash transactions <=5% of total), profession receipts >Rs.50L (or >Rs.75L for similar low-cash threshold). Presumptive scheme opt-out also triggers audit if income claimed below presumptive rate and total income exceeds basic exemption."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Net Profit reconciliation statement",
                "howTo": "Build the standard 2-column 'Add back inadmissible items' then 'Less allowable items not debited' format; always check each disallowed item against its specific section (40, 40A, 43B) rather than disallowing generically."
              },
              {
                "name": "Presumptive income computation under 44AD/44ADA",
                "howTo": "Check turnover/receipts against threshold first, identify cash vs digital receipt proportion for 44AD's 6%/8% split, then apply rate - no further business deductions allowed once presumptive rate is adopted."
              }
            ],
            "notes": "This is the heaviest computational unit in the whole Taxation paper (depreciation rules, numerous disallowance sections). Build fluency with the Add-back/Less-allowable reconciliation format first since it's the backbone of every PGBP numerical regardless of which specific disallowance sections are tested."
          }
        },
        {
          "id": "p3-it3-4",
          "name": "Heads of Income - Unit 4: Capital Gains",
          "weightage": "High",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Capital gains computation proforma",
                "ref": "formula",
                "body": "Full value of consideration - Expenses on transfer (e.g. brokerage; NOT STT) = Net Sale Consideration. Less Cost of Acquisition (COA) and Cost of Improvement (COI) = Capital Gain. STCG: no exemptions u/s 54B/54D generally apply except specific land cases; LTCG: wide range of S.54 exemptions available."
              },
              {
                "term": "Short-term vs Long-term holding periods",
                "ref": "concept",
                "body": "Listed securities/units of equity fund: LT if held >12 months. Unlisted shares/immovable property: LT if held >24 months. Other assets (movable, debt MF, etc.): LT if held >36 months."
              },
              {
                "term": "STCG special rate S.111A",
                "ref": "formula",
                "body": "20% on STCG from listed equity shares/equity fund units/business trust units where STT paid - applies regardless of tax regime, on top of slab-rate income."
              },
              {
                "term": "LTCG special rates",
                "ref": "formula",
                "body": "S.112A: 12.5% on LTCG >Rs.1,25,000 (exemption threshold) from listed equity/equity fund/business trust units where STT paid. S.112: 12.5% without indexation on other LTCG generally; individual/HUF resident on land/building acquired before 23.7.2024 can choose lower of (20% with indexation) or (12.5% without indexation)."
              },
              {
                "term": "Capital gains on depreciable assets (block of assets)",
                "ref": "concept",
                "body": "If block ceases to exist (all assets sold) or WDV goes negative: STCG = Sale consideration - WDV of block at year start - cost of new assets added during year. If block continues with positive WDV, no immediate gain - depreciation simply continues on reduced WDV."
              },
              {
                "term": "Key exemption sections (LTCG primarily)",
                "ref": "S.54 series",
                "body": "S.54: LTCG on residential house, reinvest in 1 (or 2 if gain<=Rs.2Cr, once in lifetime) residential house in India. S.54EC: invest LTCG (max Rs.50L) in specified bonds within 6 months, lock-in 5 years. S.54F: LTCG on any asset (not residential house) reinvested in residential house, exemption proportionate to amount invested vs net consideration."
              },
              {
                "term": "Indexed Cost of Acquisition (where applicable)",
                "ref": "formula",
                "body": "Indexed COA = COA x (CII of year of transfer / CII of year of acquisition, or CII of FY 2001-02 if acquired before that, using FMV as on 1.4.2001 if higher than actual cost)."
              },
              {
                "term": "Slump sale",
                "ref": "S.50B",
                "body": "Transfer of an entire undertaking for a lump sum without values assigned to individual assets/liabilities. Capital gain = Sale consideration - Net worth of undertaking (book value of assets - liabilities, with depreciable assets at WDV)."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Full LTCG/STCG computation with exemption claim",
                "howTo": "Net Sale Consideration -> less COA/COI (indexed if eligible) -> Gross Capital Gain -> less S.54-series exemption (compute exemption amount per specific formula of that section) -> Taxable Capital Gain -> apply special rate (111A/112/112A)."
              },
              {
                "name": "Block of assets - depreciation + capital gain interaction",
                "howTo": "Opening WDV + cost of assets acquired during year - sale consideration of assets sold = Closing WDV. If closing WDV is negative or block empty, that negative/excess amount IS the STCG; otherwise depreciation is claimed on the positive closing WDV and there's no capital gain in that year."
              }
            ],
            "notes": "Highest numerical-density unit alongside PGBP. The S.54-series exemption formulas are easy to confuse - always identify which specific section applies based on (a) what asset was sold, (b) what asset was purchased, (c) STCG vs LTCG, before attempting the exemption calculation."
          }
        },
        {
          "id": "p3-it3-5",
          "name": "Heads of Income - Unit 5: Income from Other Sources",
          "weightage": "Medium",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Residuary head - what falls here",
                "ref": "concept",
                "body": "Income chargeable to tax but not falling under the other 4 heads. Key items: Dividend income, Casual/winnings income (lottery, game shows, betting), Interest on enhanced compensation (taxed only on RECEIPT, not accrual), gifts/property received without/inadequate consideration u/s 56(2)(x), compensation on employment termination not covered elsewhere."
              },
              {
                "term": "Section 56(2)(x) - gifts taxation",
                "ref": "formula",
                "body": "Money or property received without consideration (or for inadequate consideration) by ANY person is taxable if aggregate exceeds Rs.50,000 in a year - EXCEPT from relatives, on marriage, under will/inheritance, or from specified trusts/funds."
              },
              {
                "term": "Casual income tax rate S.115BB",
                "ref": "formula",
                "body": "Winnings from lotteries/crossword puzzles/races/card games/betting taxed flat @30% (excluding online games). No deduction/expenditure allowed against such income, and no basic exemption limit benefit."
              },
              {
                "term": "Online gaming winnings S.115BBJ",
                "ref": "formula",
                "body": "Net winnings from online games taxed flat @30% - separate provision from general casual income, reflects modern digital gaming."
              },
              {
                "term": "Family pension taxability",
                "ref": "deduction",
                "body": "Fully taxable as Income from Other Sources (not Salaries, since no employer-employee relationship with the recipient). Deduction available: lower of 33-1/3% of such income OR Rs.15,000 (optional regime) / Rs.25,000 (default 115BAC regime)."
              },
              {
                "term": "Interest on compensation/enhanced compensation",
                "ref": "S.56(2)(viii)",
                "body": "Taxable in year of RECEIPT (deviates from normal accrual concept), with a flat 50% deduction allowed u/s 57(iv) - no other expense deduction permitted against this specific interest."
              },
              {
                "term": "Deductions allowable u/s 57",
                "ref": "list",
                "body": "Commission/remuneration for realizing dividend/interest on securities; current repairs/insurance/depreciation for let-out machinery/plant/furniture; standard 50% deduction for family pension; any other expenditure wholly/exclusively for earning that income (not capital in nature)."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Income from Other Sources proforma build-up",
                "howTo": "List each item (dividend, casual income, gifts u/s 56(2)(x), interest income, family pension, etc.) separately, apply specific S.57 deduction to each, then sum - do NOT net deductions against the total, since some deductions are item-specific (e.g. 50% only against family pension, not against dividend)."
              },
              {
                "name": "Aggregate gift threshold test (S.56(2)(x))",
                "howTo": "Add up ALL gifts (cash + property) received from non-exempt sources during the year; if aggregate exceeds Rs.50,000, the ENTIRE aggregate becomes taxable (not just the excess over 50,000) - common trap in MCQs."
              }
            ],
            "notes": "Shorter, more conceptual unit. The aggregate-not-marginal taxability rule for S.56(2)(x) gifts (entire amount taxable once threshold crossed, not just the excess) is the most commonly mis-answered MCQ pattern here."
          }
        },
        {
          "id": "p3-it4",
          "name": "Income of Other Persons Included in Assessee's Total Income (Clubbing)",
          "weightage": "Medium",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Purpose of clubbing provisions",
                "ref": "S.60-64",
                "body": "Prevent tax avoidance via income diversion to spouse/minor child/others while progressive slab rates exist. Two categories: income of others included in assessee's income generally (S.60-63) and specifically included in an INDIVIDUAL's income (S.64)."
              },
              {
                "term": "Transfer of income without transfer of asset S.60",
                "ref": "concept",
                "body": "If income from an asset is transferred (revocable or irrevocable) WITHOUT transferring the asset itself, income is clubbed in transferor's hands regardless of timing of transfer."
              },
              {
                "term": "Revocable transfer of assets S.61",
                "ref": "concept",
                "body": "Income from a revocable transfer is clubbed in transferor's hands. Revocable = transfer deed allows retransfer of asset/income, or gives transferor a right to reassume power. Exception (S.62): trust/transfer NOT revocable during beneficiary's lifetime is excluded from clubbing."
              },
              {
                "term": "Clubbing of spouse's income S.64(1)(ii)/(iv)",
                "ref": "concept",
                "body": "Remuneration to spouse from a concern where assessee has substantial interest (without technical/professional qualification justifying it) is clubbed. Income from assets transferred to spouse without adequate consideration (other than on agreement to live apart) is clubbed."
              },
              {
                "term": "Clubbing of son's wife related transfers S.64(1)(vi)/(viii)",
                "ref": "concept",
                "body": "Income from assets transferred (directly or via any person) for inadequate consideration to son's wife, OR to any person for benefit of son's wife, is clubbed in transferor's hands."
              },
              {
                "term": "Clubbing of minor child's income S.64(1A)",
                "ref": "formula",
                "body": "Income of minor child clubbed in parent's hands with HIGHER income (or the parent who maintains the child if marriage subsists). EXCEPTIONS not clubbed: income from manual work, income from skill/talent/specialized knowledge of the minor, income of minor suffering specified disability u/s 80U."
              },
              {
                "term": "Clubbing exemption for minor's income",
                "ref": "formula",
                "body": "Rs.1,500 per child exemption available if the parent's income actually includes the minor's clubbed income and the minor's income itself is less than or equal to that threshold (effectively shields small amounts)."
              },
              {
                "term": "HUF income clubbing",
                "ref": "S.64(2)",
                "body": "If a member converts self-acquired property into joint family (HUF) property without adequate consideration, income from that converted property is clubbed in the transferor-member's individual hands (anti-avoidance for HUF partition strategies)."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Clubbing decision tree application",
                "howTo": "For each income item: (1) identify WHO actually received it, (2) check if it falls under S.60-64 categories, (3) if minor's income, determine which parent has higher income BEFORE clubbing to decide whose hands it's added to, (4) apply Rs.1,500/child exemption if applicable."
              }
            ],
            "notes": "Conceptual unit with limited but precise numericals - mostly about correctly identifying WHICH clubbing section applies to a given fact pattern. The minor-child 'higher income parent' rule and its narrow exceptions (manual work, special skill, disability) are the most commonly tested points."
          }
        },
        {
          "id": "p3-it5",
          "name": "Aggregation of Income, Set-off and Carry Forward of Losses",
          "weightage": "High",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Order of set-off",
                "ref": "concept",
                "body": "1) Inter-source set-off WITHIN same head, 2) Inter-head adjustment ACROSS heads, 3) Carry forward of unabsorbed losses to future years (against same head/source restrictions apply)."
              },
              {
                "term": "Restrictions on inter-source set-off",
                "ref": "list",
                "body": "Speculation loss: only against speculation income. Loss from owning/maintaining race horses: only against race-horse activity income. Long-term capital loss: only against LTCG (not STCG). Loss from specified business u/s 35AD: only against specified business profit."
              },
              {
                "term": "Restrictions on inter-head set-off",
                "ref": "list",
                "body": "Business loss CANNOT be set off against Salary income. Loss from house property: under DEFAULT 115BAC regime, CANNOT be set off against any other head at all; under optional regime, can be set off against other heads but capped at Rs.2,00,000 per year. Capital gains loss CANNOT be set off against any other head."
              },
              {
                "term": "Carry forward periods",
                "ref": "table",
                "body": "Business loss (non-speculative): 8 years, set off only against business income (any business, not necessarily same one). Speculation loss: 4 years, against speculation income only. Specified business loss (35AD): indefinite, against specified business profit. Capital loss (ST or LT): 8 years, ST loss against any capital gain, LT loss against LTCG only. House property loss: 8 years, against house property income only. Race horse loss: 4 years, against race horse activity only."
              },
              {
                "term": "Mandatory conditions for carry forward",
                "ref": "concept",
                "body": "Return of income must be filed within due date u/s 139(1) to carry forward business loss / speculation loss / capital loss / specified business loss (NOT applicable to unabsorbed depreciation or house property loss, which can be carried forward even with belated return)."
              },
              {
                "term": "Unabsorbed depreciation",
                "ref": "concept",
                "body": "Carried forward INDEFINITELY (no time limit), can be set off against income under ANY head (except salary) in future years - more flexible than business loss carry-forward itself."
              },
              {
                "term": "Default 115BAC regime restrictions on losses",
                "ref": "concept",
                "body": "Cannot set off brought-forward losses/unabsorbed depreciation attributable to deductions disallowed under 115BAC (e.g. additional depreciation, 35AD, most Chapter VI-A). Cannot set off house property loss against any other head in the current year under this regime."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Multi-source, multi-head loss computation table",
                "howTo": "Build a table: each income/loss source as a row, apply inter-source set-off within head first (respecting restrictions), get net figure per head, then apply inter-head adjustment (respecting restrictions, especially house property cap of Rs.2L under optional regime / total denial under 115BAC), arrive at Gross Total Income."
              },
              {
                "name": "Carry-forward sequencing across years",
                "howTo": "When losses span multiple years, always set off the OLDEST carried-forward loss first before current year's loss, and respect each loss type's own carry-forward period independently (don't let an 8-year business loss eat into the 4-year speculation loss window)."
              }
            ],
            "notes": "The house-property-loss restriction under 115BAC (total denial of inter-head set-off, vs Rs.2L cap under optional regime) is a frequently tested regime-comparison point. Master the carry-forward period table (8/4/4/8/8 years by loss type) since it's pure recall and easy marks."
          }
        },
        {
          "id": "p3-it6",
          "name": "Deductions from Gross Total Income",
          "weightage": "High",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Deduction vs Exemption distinction",
                "ref": "concept",
                "body": "Deduction (Ch VI-A, S.10AA): amount included in GTI first, then reduced to arrive at TI. Exemption (S.10): income never enters GTI computation at all."
              },
              {
                "term": "Deductions available under DEFAULT 115BAC regime",
                "ref": "list",
                "body": "ONLY: S.80CCD(2) employer's NPS contribution, S.80CCH(2) Central Govt's Agniveer Corpus contribution, S.80JJAA new employment deduction. ALL other Chapter VI-A deductions (80C-80U) and S.10AA are DENIED under default regime."
              },
              {
                "term": "S.80C - investments (optional regime only)",
                "ref": "formula",
                "body": "Max Rs.1,50,000 aggregate for: LIC premium, PPF, ELSS, NSC, tuition fees (max 2 children), principal repayment of housing loan, Sukanya Samriddhi, 5-year bank FD, etc."
              },
              {
                "term": "S.80D - medical insurance (optional regime only)",
                "ref": "formula",
                "body": "Self/spouse/dependent children: max Rs.25,000 (Rs.50,000 if any insured is senior citizen). Parents: additional max Rs.25,000 (Rs.50,000 if parent is senior citizen). Preventive health check-up sub-limit Rs.5,000 within overall cap."
              },
              {
                "term": "S.80E - education loan interest (optional regime only)",
                "ref": "formula",
                "body": "Interest on loan for higher education of self/spouse/children/student for whom assessee is legal guardian - NO monetary cap, deduction available for 8 years from year of starting repayment or until interest fully paid, whichever earlier."
              },
              {
                "term": "S.80G - donations (optional regime only)",
                "ref": "concept",
                "body": "100%/50% deduction with or without qualifying limit (10% of adjusted GTI) depending on the specific fund/institution listed. Cash donations above Rs.2,000 NOT eligible."
              },
              {
                "term": "S.80TTA/80TTB - savings interest",
                "ref": "formula",
                "body": "80TTA (non-senior, both regimes... actually optional regime only along with most 80 deductions): savings bank interest deduction max Rs.10,000. 80TTB (senior citizens, optional regime only): all deposit interest (savings+FD) max Rs.50,000, replaces 80TTA for seniors."
              },
              {
                "term": "S.80GGC - political party donations",
                "ref": "concept",
                "body": "Contribution to political party/electoral trust fully deductible (optional regime), but NO deduction if contribution made in CASH."
              },
              {
                "term": "S.80JJAA - new employment (available in BOTH regimes)",
                "ref": "formula",
                "body": "30% of additional employee cost for 3 years, for new regular employees with salary <=Rs.25,000/month, employed for minimum 240 days in the year (150 days for apparel/footwear/leather manufacturing)."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Chapter VI-A deduction stacking with regime check",
                "howTo": "FIRST determine which tax regime applies (default 115BAC vs optional) - this single check eliminates ~90% of deductions before any calculation begins under default regime. Only then compute applicable deduction amounts against their specific caps."
              }
            ],
            "notes": "The regime-gate check (115BAC denies almost everything here except 3 sections) is the single most important first step - always state which regime before listing any deduction amount, since listing 80C/80D/80E under default regime is an automatic error."
          }
        },
        {
          "id": "p3-it7",
          "name": "Advance Tax, Tax Deduction at Source and Tax Collection at Source",
          "weightage": "High",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Three modes of recovering tax during the year",
                "ref": "concept",
                "body": "TDS (Tax Deducted at Source), TCS (Tax Collected at Source), Advance Tax - all paid before assessment, distinct from self-assessment tax paid at return-filing time."
              },
              {
                "term": "Liability to pay advance tax S.207-208",
                "ref": "formula",
                "body": "Liable if estimated tax liability for the year is Rs.10,000 or more (after TDS/TCS/relief). Exception: resident senior citizen (60+) NOT having business/professional income is exempt from advance tax."
              },
              {
                "term": "Advance tax installment schedule S.211",
                "ref": "formula",
                "body": "By 15 June: 15% | By 15 Sept: 45% (cumulative) | By 15 Dec: 75% (cumulative) | By 15 March: 100% (cumulative). Presumptive taxation assessees (44AD/44ADA): can pay 100% in single installment by 15 March."
              },
              {
                "term": "Interest for default in advance tax S.234B/234C",
                "ref": "formula",
                "body": "234B: 1% per month if advance tax paid <90% of assessed tax. 234C: 1% per month for each installment shortfall (with specific tolerance thresholds per installment, slightly relaxed for presumptive-scheme assessees)."
              },
              {
                "term": "TDS on Salary S.192",
                "ref": "concept",
                "body": "Deducted at AVERAGE rate of tax for the year, computed on estimated salary income, at the TIME OF PAYMENT (not accrual) - unique among TDS provisions which usually deduct at credit or payment, whichever earlier."
              },
              {
                "term": "Common TDS sections - quick reference",
                "ref": "list",
                "body": "S.194A: interest (other than securities) - 10%. S.194C: contractor payments - 1%(individual/HUF)/2%(others). S.194H: commission/brokerage - 2%. S.194I: rent - 2%(P&M)/10%(land/building). S.194J: professional/technical fees - 10%(2% for technical/call-center). S.194-IA: immovable property transfer - 1% if consideration >=Rs.50L."
              },
              {
                "term": "No TDS / lower TDS certificates",
                "ref": "S.197/197A",
                "body": "S.197: payee can apply to AO for certificate of lower/nil TDS if final tax liability will be lower. S.197A: payee can self-declare via Form 15G/15H (no/low taxable income) to avoid TDS, mainly used for bank interest by non-taxable individuals/seniors."
              },
              {
                "term": "TCS - key triggers S.206C",
                "ref": "concept",
                "body": "Seller collects TCS on sale of specified goods (e.g. scrap, certain minerals, motor vehicles above Rs.10L) and on certain remittances under LRS / overseas tour packages above specified thresholds."
              },
              {
                "term": "Consequence of TDS default",
                "ref": "concept",
                "body": "Payer becomes 'assessee-in-default' if tax not deducted, or deducted but not deposited. Interest, penalty, and prosecution provisions apply; payer also loses expense deduction to the extent of 30% u/s 40(a)(ia) until TDS is deposited."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Advance tax interest computation (234B/234C)",
                "howTo": "Build a quarter-by-quarter table comparing cumulative advance tax PAID vs cumulative REQUIRED (15/45/75/100% of assessed tax); compute shortfall at each checkpoint, apply 1% per month for the relevant period to get 234C; separately check year-end 90% threshold for 234B."
              },
              {
                "name": "TDS rate identification from a transaction description",
                "howTo": "First classify the payment type (rent/contract/commission/professional fee/interest etc.), check if recipient is individual/HUF or other (rate often differs), then check if payment exceeds the threshold for that section before applying the rate - many sections have a minimum threshold below which no TDS applies at all."
              }
            ],
            "notes": "TDS rate recall (194-series) is high-frequency MCQ material - build a simple rate-card mental table. The 234B/234C interest computation is the standard numerical pattern; always build the quarterly cumulative table rather than computing shortfall for a single quarter in isolation."
          }
        },
        {
          "id": "p3-it8",
          "name": "Provisions for Filing Return of Income and Self Assessment",
          "weightage": "Medium",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Compulsory filing S.139(1)",
                "ref": "concept",
                "body": "Mandatory for companies & firms regardless of income/loss. For others: mandatory if total income exceeds basic exemption limit, OR if specified high-value transactions occurred (foreign asset/signing authority, beneficiary of foreign asset, etc.) even if income is below exemption limit."
              },
              {
                "term": "Due dates for filing S.139(1)",
                "ref": "concept",
                "body": "Company/firm requiring audit (incl. transfer pricing cases): later due date (typically Oct 31 / Nov 30). Other assessees not requiring audit: typically July 31. Specific dates notified each year via Finance Act/CBDT."
              },
              {
                "term": "Belated Return S.139(4)",
                "ref": "formula",
                "body": "Can be filed any time before 3 months prior to end of relevant Assessment Year, or completion of assessment, whichever is earlier. Attracts late filing fee u/s 234F and interest u/s 234A."
              },
              {
                "term": "Revised Return S.139(5)",
                "ref": "concept",
                "body": "Can revise an original OR belated return if any omission/wrong statement discovered, within the same time limit as belated return (3 months before AY end / before assessment, whichever earlier). Can be revised multiple times within that window."
              },
              {
                "term": "Updated Return S.139(8A)",
                "ref": "concept",
                "body": "Can be filed within 48 months from end of relevant AY (even if no original return filed), subject to conditions (cannot reduce tax liability/increase refund/create or increase loss) and payment of additional tax u/s 140B (25%/50%/60%/70% of tax+interest depending on when filed)."
              },
              {
                "term": "Late filing fee S.234F",
                "ref": "formula",
                "body": "Rs.5,000 if total income >Rs.5,00,000; Rs.1,000 if total income <=Rs.5,00,000. Applies for filing AFTER the due date u/s 139(1)."
              },
              {
                "term": "Self-Assessment Tax S.140A",
                "ref": "concept",
                "body": "Tax due on return income (after adjusting TDS/TCS/advance tax/relief/MAT credit) must be paid BEFORE filing the return; order of adjustment of part-payment: interest first, then fee, then tax."
              },
              {
                "term": "PAN requirements S.139A",
                "ref": "concept",
                "body": "Mandatory for: income exceeding basic exemption limit, business/professional turnover beyond specified threshold, specified high-value transactions (property, foreign travel/expenditure thresholds, certain deposits)."
              },
              {
                "term": "Verification of return S.140",
                "ref": "concept",
                "body": "Individual: self, or by someone holding valid power of attorney if individual is abroad/incapacitated/etc. Company: Managing Director (or any director if no MD/MD unable). Firm: managing partner (or any partner if none). Different rules per assessee type."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Updated return additional tax computation",
                "howTo": "Identify which time slab the updated return falls into (within 12 months: 25% additional tax on tax+interest due; 12-24 months: 50%; 24-36: 60%; 36-48: 70%), apply to the tax+interest shortfall, ensure conditions (no loss creation/increase, no refund increase) are checked first."
              }
            ],
            "notes": "Mostly conceptual/recall unit - the due-date hierarchy (audit cases vs non-audit cases) and the belated/revised/updated return time windows are the recurring MCQ test points. Few genuine numericals beyond the updated-return additional-tax slab computation."
          }
        },
        {
          "id": "p3-it9",
          "name": "Income Tax Liability - Computation and Optimisation",
          "weightage": "High",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "8-step process to compute Total Income",
                "ref": "process",
                "body": "1) Determine residential status, 2) Classify income under 5 heads applying charging/deeming provisions + deductions/exemptions thereunder, 3) Apply clubbing provisions, 4) Set-off/carry-forward of losses, 5) Compute Gross Total Income, 6) Less deductions from GTI = Total Income."
              },
              {
                "term": "Income capacities for individuals - taxation treatment",
                "ref": "concept",
                "body": "Personal capacity: taxed under 5 heads normally. As partner of firm/LLP: salary/interest taxable as business income (to extent allowed as deduction to firm); share of profit EXEMPT u/s 10(2A) even if firm pays nil tax due to its own exemptions. As HUF member: share of HUF income exempt u/s 10(2)."
              },
              {
                "term": "Alternate Minimum Tax (AMT) applicability",
                "ref": "S.115JC",
                "body": "Applies to non-corporate assessees (other than those under default 115BAC, who are exempt from AMT) who claim profit-linked/investment-linked deductions (10AA, 80H-80RRB except 80P, 35AD) and whose AMT-computed tax exceeds regular tax. AMT credit (excess paid) can be carried forward and set off against future regular tax in excess of future AMT, for specified years."
              },
              {
                "term": "Choosing between default 115BAC and optional regime",
                "ref": "concept",
                "body": "No business/professional income: can switch regime choice EVERY year freely at time of filing return. WITH business/professional income: option to opt OUT of 115BAC must be exercised by due date u/s 139(1); once opted out, can switch back to 115BAC only ONCE in lifetime, after which default regime becomes permanently locked (no further switching either way) unless business income ceases entirely."
              },
              {
                "term": "Practical regime-comparison approach",
                "ref": "method",
                "body": "Compute total tax liability (with all applicable surcharge/cess/AMT) under BOTH regimes side by side using identical total income figures, then select whichever gives lower final tax payable - this comparison itself is often the exam question."
              }
            ],
            "caseLaws": [
              {
                "case": "Circular No.8/2014 dated 31.03.2014",
                "point": "Partner's share of firm profit remains exempt u/s 10(2A) in the partner's hands even where the firm's own income becomes nil due to exemptions/deductions available to the firm."
              }
            ],
            "numericalPatterns": [
              {
                "name": "Side-by-side regime comparison numerical",
                "howTo": "Prepare TWO complete computations from Gross Total Income down to final tax payable (incl. surcharge, cess, and AMT check for optional regime) using the SAME underlying income figures, then state the conclusion ('X regime is more beneficial, saving Rs.Y') explicitly - examiners specifically reward this final comparative statement."
              },
              {
                "name": "AMT credit carry-forward tracking",
                "howTo": "In years where AMT > regular tax, pay AMT and carry forward the excess (AMT - regular tax) as credit; in later years where regular tax > AMT, use carried-forward credit to reduce regular tax payable down to (but not below) that year's AMT amount."
              }
            ],
            "notes": "This is the capstone unit tying together every other Taxation chapter into one final computation. The regime-switching rule for business-income assessees (one-time switch-back only) is a frequently tested conceptual trap distinct from the no-business-income assessee's full annual flexibility."
          }
        },
        {
          "id": "p3-gst1",
          "name": "GST in India - An Introduction",
          "weightage": "Low",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Direct vs Indirect tax",
                "ref": "concept",
                "body": "Direct tax: cannot be shifted, borne by the person on whom it's imposed (e.g. income tax). Indirect tax: shifted to ultimate consumer, regressive in nature (e.g. GST)."
              },
              {
                "term": "GST commencement",
                "ref": "concept",
                "body": "Introduced 1 July 2017, replacing excise duty, service tax, VAT, CST, entry tax, purchase tax, entertainment tax, luxury tax, etc. Customs duty continues outside GST."
              },
              {
                "term": "101st Constitutional Amendment Act 2016",
                "ref": "concept",
                "body": "Enabled GST by inserting Article 246A (concurrent power to Centre+States to levy GST), amending Article 269A (IGST on inter-state supply), and Article 279A (GST Council)."
              },
              {
                "term": "GST Council - Article 279A",
                "ref": "concept",
                "body": "Chaired by Union Finance Minister; members include Union MoS Finance + State Finance Ministers. Decisions by 3/4 majority of weighted votes (Centre 1/3 weight, States 2/3 weight collectively)."
              },
              {
                "term": "Dual GST structure",
                "ref": "concept",
                "body": "CGST + SGST/UTGST on intra-state supply; IGST (=CGST+SGST combined rate) on inter-state supply. GST Compensation Cess levied separately on specified luxury/sin goods."
              },
              {
                "term": "Taxes subsumed into GST",
                "ref": "list",
                "body": "Central: Central Excise Duty, Service Tax, CVD, SAD, Central Sales Tax. State: VAT, Entry Tax, Octroi, Purchase Tax, Luxury Tax, Entertainment Tax, Betting/Gambling Tax."
              },
              {
                "term": "GST not levied on",
                "ref": "concept",
                "body": "Alcoholic liquor for human consumption (state excise applies instead); Petroleum crude, high speed diesel, motor spirit, natural gas, ATF currently outside GST (constitutionally includible but not yet notified)."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [],
            "notes": "Purely conceptual/historical chapter, lowest exam weightage of the GST module - mostly background and constitutional context. Quick read, few if any numericals."
          }
        },
        {
          "id": "p3-gst2",
          "name": "Supply under GST",
          "weightage": "High",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Supply - 3 core parameters",
                "ref": "S.7(1)(a)",
                "body": "Must be (1) of goods or services, (2) for a consideration, (3) in the course or furtherance of business. Forms: sale, transfer, barter, exchange, license, rental, lease, disposal (illustrative, not exhaustive)."
              },
              {
                "term": "Exception - import of services",
                "ref": "S.7(1)(b)",
                "body": "Import of services for consideration is supply EVEN IF not in course/furtherance of business - the only exception to the business-purpose requirement."
              },
              {
                "term": "Schedule I - deemed supply without consideration",
                "ref": "S.7(1)(c)",
                "body": "4 cases: (1) Permanent transfer/disposal of business assets where ITC availed, (2) Supply between related/distinct persons in course of business (gifts to employee up to Rs.50,000/year excluded), (3) Principal-Agent goods supply, (4) Import of services from related person/foreign establishment in course of business."
              },
              {
                "term": "Related persons vs Distinct persons",
                "ref": "concept",
                "body": "Related persons: officers/directors of each other, legal partners, employer-employee, >=25% common ownership, one controls other, family members, sole agent/distributor. Distinct persons: separate GST registrations of the same PAN entity (same or different states)."
              },
              {
                "term": "Principal-Agent test (Schedule I Para 3)",
                "ref": "concept",
                "body": "Key test: WHO issues the invoice to the end customer. If agent invoices in own name = covered as agent (Para 3 applies). If principal invoices directly = agent merely facilitates, not covered."
              },
              {
                "term": "Schedule III - non-supplies (negative list)",
                "ref": "S.7(2)",
                "body": "Employee services to employer in course of employment; services by court/tribunal; functions of MPs/MLAs/Panchayat members; funeral/burial services; sale of land and (subject to completion-certificate rule) sale of building; actionable claims other than betting/casinos/gambling/horse racing/lottery/online money gaming."
              },
              {
                "term": "Schedule II - goods vs services classification",
                "ref": "S.7(1A)",
                "body": "Transfer of title = goods. Transfer of right to use without title (lease/rental) = services. Land/building lease, IP temporary transfer, software development, works contract, restaurant service (food+service) = all services."
              },
              {
                "term": "Composite Supply",
                "ref": "S.2(30)",
                "body": "2+ supplies naturally bundled in ordinary course of business, one being principal supply. Taxed at the rate of the PRINCIPAL supply. E.g. hotel stay + breakfast (hotel accommodation is principal)."
              },
              {
                "term": "Mixed Supply",
                "ref": "S.2(74)",
                "body": "2+ independent supplies bundled for a single price, NOT naturally bundled (can be sold separately). Taxed at the HIGHEST rate among all items in the bundle. E.g. gift hamper of unrelated items."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Composite vs Mixed supply classification + rate application",
                "howTo": "First test if items are naturally bundled (would a reasonable customer expect them together, can they be sold separately) - if yes, composite, tax at principal supply's rate; if no, mixed, tax at the highest rate among all components."
              }
            ],
            "notes": "Foundational chapter for the entire GST paper - the Schedule I/II/III three-way classification (deemed supply / goods-vs-services / non-supply) is the most frequently tested conceptual framework. The composite vs mixed supply distinction recurs in numericals across many later chapters."
          }
        },
        {
          "id": "p3-gst3",
          "name": "Charge of GST",
          "weightage": "High",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Intra-State vs Inter-State supply",
                "ref": "concept",
                "body": "Intra-state: supplier location and place of supply in SAME state/UT -> CGST+SGST/UTGST. Inter-state: supplier and place of supply in DIFFERENT states/UTs (or one is SEZ) -> IGST."
              },
              {
                "term": "Forward charge vs Reverse charge",
                "ref": "S.9(1)/(3)/(4)",
                "body": "Forward charge (default): supplier pays tax. Reverse charge S.9(3): notified goods/services where RECIPIENT pays tax regardless of supplier's registration status. S.9(4): recipient (specified class) pays tax on supplies from UNREGISTERED suppliers of notified categories."
              },
              {
                "term": "Common S.9(3) reverse charge categories",
                "ref": "list",
                "body": "GTA services (if GTA hasn't opted to pay forward), legal services by advocate/firm to business entity, services by arbitral tribunal, sponsorship services, services by director to company, services by insurance agent, recovery agent services to banks/NBFCs."
              },
              {
                "term": "Composition Levy eligibility (goods)",
                "ref": "S.10",
                "body": "Aggregate turnover in preceding FY <= Rs.1.5 crore (Rs.75 lakh for specified special category states) for goods suppliers. Cannot supply ice cream, pan masala, tobacco; cannot make inter-state outward supply; cannot supply through ECO required to collect TCS (with some relaxation); cannot supply non-taxable goods."
              },
              {
                "term": "Composition rates",
                "ref": "formula",
                "body": "Manufacturers/traders: 1% of turnover (0.5% CGST + 0.5% SGST). Restaurant service (not serving alcohol): 5% of turnover. Other service providers (S.10(2A) scheme, turnover<=Rs.50 lakh): 6% of turnover."
              },
              {
                "term": "Composition scheme - key restrictions",
                "ref": "concept",
                "body": "Cannot collect tax from recipient (issues bill of supply, not tax invoice). Cannot avail ITC. Must mention 'composition taxable person, not eligible to collect tax' on bill of supply. All registrations under same PAN must opt in/out together."
              },
              {
                "term": "CGST Act extent",
                "ref": "S.1",
                "body": "Extends to whole of India (including J&K after 2019 reorganisation); commenced from notified dates section-wise."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Composition scheme eligibility + tax computation",
                "howTo": "First check turnover threshold (Rs.1.5Cr / Rs.75L) AND check exclusion list (ice cream/pan masala/tobacco/inter-state supply) before computing tax; tax = aggregate turnover in the State x applicable composition rate (not on value of taxable supply alone)."
              },
              {
                "name": "Identifying reverse charge applicability from a transaction description",
                "howTo": "Check: (1) is the good/service on the notified S.9(3) list, (2) if not on the list, is the supplier unregistered and recipient a notified S.9(4) category - if either condition is met, shift the liability to the recipient."
              }
            ],
            "notes": "The composition scheme numbers (1%/5%/6% rates, Rs.1.5Cr/Rs.75L/Rs.50L thresholds) are classic high-frequency recall points. Reverse charge category recall (which services fall under S.9(3)) is the other major MCQ source from this chapter."
          }
        },
        {
          "id": "p3-gst4",
          "name": "Place of Supply",
          "weightage": "Medium",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Place of supply - goods, general rule",
                "ref": "S.10 IGST Act",
                "body": "Where movement involved: location where movement terminates for delivery to recipient. No movement involved: location of goods at time of delivery (e.g. sale of goods at the premises itself)."
              },
              {
                "term": "Place of supply - goods, Bill-to-Ship-to model",
                "ref": "S.10(1)(b)",
                "body": "Where goods delivered to a third party on instruction of the buyer (before/during movement, by transfer of title documents): place of supply = principal place of business of the person who gave the instruction (the buyer/B in A-B-C chain), NOT the actual delivery location."
              },
              {
                "term": "Place of supply - services, general rule (B2B/B2C)",
                "ref": "S.12 IGST Act",
                "body": "B2B (registered recipient): location of the recipient. B2C (unregistered recipient): location of recipient if address on record exists, else location of supplier."
              },
              {
                "term": "Place of supply - immovable property related services",
                "ref": "S.12(3)",
                "body": "Services directly related to immovable property (architect, lodging, accommodation, construction): location of the immovable property itself, regardless of supplier/recipient location."
              },
              {
                "term": "Place of supply - restaurant/catering/personal grooming/health/beauty",
                "ref": "S.12(4)",
                "body": "Location where the service is actually performed (not location of recipient or supplier)."
              },
              {
                "term": "Place of supply - training/performance appraisal",
                "ref": "S.12(5)",
                "body": "B2B: location of recipient. B2C: location where service is actually performed."
              },
              {
                "term": "Place of supply - transportation of goods",
                "ref": "S.12(8)",
                "body": "B2B: location of registered recipient. B2C: location where goods are handed over for transportation."
              },
              {
                "term": "Place of supply - online services/OIDAR",
                "ref": "concept",
                "body": "OIDAR services to unregistered person in India: place of supply = location of recipient in India - ensures GST captured on imported digital services consumed domestically."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Classifying a transaction as intra-state vs inter-state from given facts",
                "howTo": "Determine place of supply using the relevant specific rule for the supply type (immovable property/event/transport/general), then compare to supplier's location - same state/UT = intra-state (CGST+SGST), different = inter-state (IGST)."
              }
            ],
            "notes": "The category-specific place-of-supply rules (immovable property, restaurant/personal services = location of performance; general B2B = location of recipient) are the recurring exam pattern - always identify which specific category a service falls into before defaulting to the general rule."
          }
        },
        {
          "id": "p3-gst5",
          "name": "Exemptions from GST",
          "weightage": "Medium",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Power to grant exemption",
                "ref": "S.11",
                "body": "Government, on GST Council recommendation, can exempt goods/services generally (by notification) or in specific cases (by special order, recording reasons). Exemption is mandatory once granted - taxpayer cannot opt to pay tax on an exempt supply."
              },
              {
                "term": "Key exempt services categories",
                "ref": "list",
                "body": "Healthcare services by clinical establishments/doctors (except cosmetic surgery generally); education services by recognized educational institutions; services by RBI, foreign diplomatic missions; agricultural support services (cultivation, harvesting, warehousing of agri produce); transport of passengers by non-AC contract/stage carriage, metro, or auto-rickshaw."
              },
              {
                "term": "Exempt vs Nil-rated vs Non-taxable vs Zero-rated",
                "ref": "concept",
                "body": "Exempt: notified exemption under S.11, no ITC reversal-free benefit. Nil-rated: 0% rate in tariff itself. Non-taxable: outside GST scope entirely (e.g. alcohol). Zero-rated (exports/SEZ supply): taxable at 0% but ITC IS available/refundable - distinct from exempt."
              },
              {
                "term": "Renting of residential dwelling exemption",
                "ref": "concept",
                "body": "Exempt when rented for use AS RESIDENCE to an unregistered person. If rented to a registered person/business entity (even if used as residence by an employee), taxable under reverse charge in certain configurations."
              },
              {
                "term": "Charitable/religious activity exemption",
                "ref": "concept",
                "body": "Services by entity registered u/s 12AA/12AB of Income-tax Act by way of charitable activities (relief of poor, advancement of religion/spirituality, preservation of environment) - exempt. Renting of precincts of religious place also generally exempt subject to monetary limits on room/hall rent."
              },
              {
                "term": "GTA (Goods Transport Agency) exemptions",
                "ref": "concept",
                "body": "Transport of agricultural produce, milk, salt, food grains, organic manure, relief materials, defence/military equipment, newspapers/magazines via GTA - exempt regardless of consignment value. Other GTA services exempt only if single carriage consignment value <=Rs.1,500 or single consignee's goods <=Rs.750."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Identifying exempt vs taxable supply from a list of services/goods",
                "howTo": "Cross-check the specific activity against the notified exemption entry's exact wording (e.g. 'healthcare services' excludes hair transplant/cosmetic surgery specifically) - exemption notifications are narrowly worded, so partial matches don't qualify."
              }
            ],
            "notes": "This is a long list-based, recall-heavy chapter (large exemption notification with ~80+ entries) rather than formula-driven. Focus on the most commonly tested categories: healthcare, education, GTA thresholds, and the exempt-vs-zero-rated distinction, since memorizing the entire notification is impractical."
          }
        },
        {
          "id": "p3-gst6",
          "name": "Time of Supply",
          "weightage": "Medium",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Time of supply of GOODS - forward charge",
                "ref": "S.12(2)",
                "body": "Earlier of: (a) date of invoice (or last date invoice ought to have been issued), or (b) date of payment receipt. SPECIAL RULE: per Notification 66/2017, GST on goods is payable ONLY on invoice date - no GST on advance receipt for goods (except composition suppliers)."
              },
              {
                "term": "Time of supply of GOODS - reverse charge",
                "ref": "S.12(3)",
                "body": "Earliest of: (a) date goods received, (b) date payment recorded/debited, (c) day immediately after 30 days from supplier's invoice date. If undeterminable: date of entry in recipient's books."
              },
              {
                "term": "Time of supply of SERVICES - forward charge",
                "ref": "S.13(2)",
                "body": "If invoice issued WITHIN prescribed time (30/45 days): earlier of invoice date or payment date. If invoice NOT issued in time: earlier of date of provision of service or payment date. (Unlike goods, advance payment for services DOES trigger GST liability.)"
              },
              {
                "term": "Time of supply of SERVICES - reverse charge",
                "ref": "S.13(3)",
                "body": "Earlier of: (a) date of payment, or (b) day after 61 days from supplier's invoice (60-day window +1). Special: import from associated enterprise outside India = earlier of payment date or date of entry in recipient's books."
              },
              {
                "term": "Time of supply - vouchers",
                "ref": "S.12(4)/13(4)",
                "body": "If supply identifiable at issue (e.g. shirt voucher): date of ISSUE. If not identifiable (e.g. multi-category gift voucher): date of REDEMPTION. (Note: Finance Act 2025 proposes omitting these voucher provisions - check ICAI announcement for exam applicability.)"
              },
              {
                "term": "Time of supply - residual cases",
                "ref": "S.12(5)/13(5)",
                "body": "If undeterminable by above rules: due date of periodical return filing, or (if no periodic return) date tax is actually paid."
              },
              {
                "term": "Time of supply - interest/late fee/penalty addition",
                "ref": "S.12(6)/13(6)",
                "body": "Time of supply for any ADDITION to value via interest/late fee/penalty for delayed payment = date supplier actually RECEIVES that additional amount (separate from the time of supply of the main transaction)."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Determining time of supply from a sequence of dates",
                "howTo": "List all relevant dates (invoice, payment recorded, payment credited/debited, goods received/delivered); apply the earliest/earliest-of-N rule per the specific clause (goods forward/reverse, services forward/reverse) - always check whether goods or services first, since the rules genuinely differ."
              }
            ],
            "notes": "The single most important asymmetry to remember: GST on ADVANCE for GOODS is not payable (only on invoice), but GST on ADVANCE for SERVICES IS payable immediately. This trips up nearly every student initially and is a favorite exam trap."
          }
        },
        {
          "id": "p3-gst7",
          "name": "Value of Supply",
          "weightage": "Medium",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Transaction value - basic rule",
                "ref": "S.15(1)",
                "body": "Value = price actually paid/payable, applicable ONLY when (a) supplier and recipient are UNRELATED, and (b) price is the SOLE consideration."
              },
              {
                "term": "Inclusions in value",
                "ref": "S.15(2)",
                "body": "(a) Other taxes/duties/cess (not GST itself) if charged separately, (b) third-party payments the supplier was liable for but recipient paid, (c) incidental expenses (commission, packing, pre-delivery costs), (d) interest/late fee/penalty for delayed payment, (e) non-government subsidies directly linked to price."
              },
              {
                "term": "Exclusion of discounts from value",
                "ref": "S.15(3)",
                "body": "Discount EXCLUDED if: (a) given before/at time of supply AND recorded in invoice, OR (b) given post-supply per a pre-existing agreement linked to specific invoices AND recipient reverses proportionate ITC. Secondary discounts (not known/agreed at time of supply) are NOT excludible."
              },
              {
                "term": "Related person valuation",
                "ref": "S.15(4)/(5)",
                "body": "When parties are related, or price isn't sole consideration, or for notified supplies: value determined per CGST Valuation Rules (open market value, or value of like-kind goods, or cost+10%, or residual method) - not simple transaction value."
              },
              {
                "term": "Subsidy treatment",
                "ref": "formula",
                "body": "Government subsidy (Central/State): NEVER included in value, regardless of link to price. Non-government subsidy directly linked to price: INCLUDED in value of supply made by the recipient of the subsidy."
              },
              {
                "term": "TCS under Income-tax Act - not includible",
                "ref": "concept",
                "body": "TCS collected under Income-tax Act provisions is an interim levy without character of 'tax' - NOT includible in GST value of supply, per CBIC clarification."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Building up value of taxable supply from itemized particulars",
                "howTo": "Start with base price; ADD: other taxes (non-GST), third-party payments supplier was liable for, incidental/packing/inspection charges, non-govt subsidies, interest for delay; SUBTRACT: only discounts meeting both S.15(3) conditions (recorded in invoice OR linked agreement + ITC reversed)."
              },
              {
                "name": "Distinguishing financial/commercial credit notes from GST credit notes",
                "howTo": "If discount conditions aren't met (no pre-existing agreement, or recipient won't reverse ITC), supplier can still issue a 'commercial/financial credit note' for the discount amount WITHOUT any GST component - this doesn't reduce the supplier's GST liability."
              }
            ],
            "notes": "The discount-exclusion test (2 conditions, both must be satisfied for post-supply discounts) is the highest-yield numerical pattern here. Always build the value computation as an itemized table (inclusions then exclusions) rather than a single formula, since ICAI illustrations are structured that way."
          }
        },
        {
          "id": "p3-gst8",
          "name": "Input Tax Credit",
          "weightage": "High",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "4 mandatory conditions for claiming ITC",
                "ref": "S.16(2)",
                "body": "(a) Possession of tax invoice/debit note, (aa) supplier has reported it in GSTR-1 AND it's reflected in recipient's GSTR-2B, (b) goods/services actually received, (c) tax actually paid to government by supplier, (d) recipient has filed their own GSTR-3B return. ALL four must be satisfied."
              },
              {
                "term": "180-day payment rule",
                "ref": "S.16(2) 2nd proviso",
                "body": "If recipient doesn't pay supplier (value+tax) within 180 days of invoice, ITC availed must be reversed with interest, in the GSTR-3B for the period right after the 180-day mark. Can be re-availed once payment is made later. Exceptions: reverse charge supplies, Schedule I deemed supplies."
              },
              {
                "term": "Time limit to avail ITC",
                "ref": "S.16(4)",
                "body": "Earlier of: 30th November following end of FY to which invoice/debit note pertains, OR date of filing annual return for that FY. For debit notes, the RELEVANT FY is the year the debit note itself was issued, not the original invoice's year."
              },
              {
                "term": "Goods received in lots/instalments",
                "ref": "1st proviso to S.16(2)",
                "body": "ITC can be claimed only upon receipt of the LAST lot/instalment, even if full invoice value was paid earlier."
              },
              {
                "term": "Apportionment of ITC - taxable vs exempt use",
                "ref": "S.17(1)/(2)",
                "body": "Full ITC for inputs/services EXCLUSIVELY for taxable+zero-rated supply. ZERO ITC for inputs/services exclusively for exempt supply. PROPORTIONATE ITC (by turnover ratio) for common-use inputs/services."
              },
              {
                "term": "Blocked credits - S.17(5) key categories",
                "ref": "list",
                "body": "Motor vehicles (seating<=13) unless used for further supply/passenger transport/driving training; vessels/aircraft similarly restricted; food/beverages/outdoor catering/beauty/health/cosmetic surgery/life&health insurance (unless same-category onward supply or statutory employer obligation); membership of club/health centre; works contract for immovable property (except plant&machinery or sub-contracting); goods/services for self-construction of immovable property (except P&M); composition-levy tax paid goods; goods lost/stolen/destroyed/written-off/given as gifts/free samples; CSR expenditure."
              },
              {
                "term": "Depreciation vs ITC - mutually exclusive",
                "ref": "S.16(3)",
                "body": "If depreciation is claimed on the TAX COMPONENT of capital goods/P&M cost under Income-tax Act, ITC on that tax component is DISALLOWED. Cannot claim both benefits on the same tax amount."
              },
              {
                "term": "ITC in special circumstances (S.18)",
                "ref": "concept",
                "body": "New registration/voluntary registration: ITC allowed on stock held the day before becoming liable/registered. Switching FROM composition TO regular: ITC allowed on stock+capital goods (capital goods ITC reduced 5%/quarter from invoice date). Switching TO composition or exempt-supply: must REVERSE ITC on stock+capital goods held."
              },
              {
                "term": "ITC utilization order (S.49/49A/49B)",
                "ref": "formula",
                "body": "IGST credit MUST be fully exhausted FIRST (against IGST, then CGST/SGST in any order/proportion) before any CGST or SGST credit can be used. CGST credit -> CGST then IGST (never SGST). SGST credit -> SGST then IGST, but only after CGST credit is fully exhausted first."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Eligible ITC computation excluding blocked credits",
                "howTo": "List every inward supply with GST paid; check each against the S.17(5) blocked list individually (don't blanket-disallow); sum only the eligible amounts; separately check the 4 conditions of S.16(2) (especially GSTR-2B reflection) before finalizing the eligible figure."
              },
              {
                "name": "ITC utilization sequencing across IGST/CGST/SGST",
                "howTo": "Always exhaust IGST credit completely first (split between CGST and SGST output liability in any chosen proportion), THEN use CGST credit against remaining CGST output (then IGST if any left), THEN SGST credit against SGST output (then IGST, only after CGST credit fully used) - never let CGST credit touch SGST liability or vice versa."
              },
              {
                "name": "ITC reversal on switch to composition/exempt supply",
                "howTo": "Compute ITC on stock (proportional to invoices) + capital goods (pro-rata over 5-year useful life, expressed in remaining months/60) as on the day immediately preceding the switch date; this amount becomes payable as output tax liability."
              }
            ],
            "notes": "Highest-weightage, most numerically dense GST chapter. The blocked-credit list (S.17(5)) and the 4-condition eligibility test (S.16(2)) are the two pillars every ITC question builds on - drill these two lists until they're automatic, since nearly every ITC numerical is really just careful application of these two checklists."
          }
        },
        {
          "id": "p3-gst9",
          "name": "Registration",
          "weightage": "High",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Aggregate turnover - definition",
                "ref": "S.2(6)",
                "body": "Value of ALL taxable supplies + exempt supplies + exports + inter-state supplies of same-PAN persons, computed PAN-wide (all states combined). EXCLUDES GST/cess and value of inward RCM supplies. INCLUDES outward RCM supplies."
              },
              {
                "term": "Threshold limits for registration",
                "ref": "S.22(1)",
                "body": "Goods-only suppliers: Rs.40 lakh (most states), Rs.20 lakh (Arunachal/Meghalaya/Sikkim/Uttarakhand/Puducherry/Telangana), Rs.10 lakh (Mizoram/Tripura/Manipur/Nagaland). Services or mixed goods+services: Rs.20 lakh (most states), Rs.10 lakh (the 4 special category states)."
              },
              {
                "term": "Compulsory registration regardless of turnover",
                "ref": "S.24",
                "body": "Inter-state taxable supply of goods (services get threshold relief up to Rs.20L/10L); casual taxable persons; persons liable under reverse charge; non-resident taxable persons; e-commerce operators required to collect TCS; persons making supply through ECO (with some threshold relief for services); persons required to deduct TDS; agents making taxable supply on behalf of others; Input Service Distributor."
              },
              {
                "term": "Persons NOT liable for registration",
                "ref": "S.23",
                "body": "Persons exclusively supplying wholly-exempt or non-taxable goods/services; agriculturist (individual/HUF) for produce out of own land cultivation only. Plus notified exemptions: persons making ONLY reverse-charge-taxable supplies, inter-state service suppliers <=Rs.20L, certain handicraft-goods inter-state suppliers <=Rs.20L."
              },
              {
                "term": "PAN-based, State-wise registration",
                "ref": "concept",
                "body": "Registration is PAN-based; separate registration required per State/UT from which TAXABLE supply is made (not where supply is received). Within a state, single registration covers multiple places of business (PPoB+APoB) unless separate registration opted for each."
              },
              {
                "term": "Time limit & effective date of registration",
                "ref": "Rule 10",
                "body": "Apply within 30 days of becoming liable (CTP/NRTP: at least 5 days before commencing business). If applied within 30 days: effective date = date liability arose. If applied LATE: effective date = date registration actually granted."
              },
              {
                "term": "Aadhaar authentication requirement",
                "ref": "S.25(6A)-(6D)",
                "body": "Mandatory for new registrants (individual or specified persons for non-individual entities). Successful authentication -> deemed approval within 7 working days if no SCN issued. Failed/skipped authentication -> mandatory physical site verification, approval within 30 days."
              },
              {
                "term": "Casual Taxable Person & Non-Resident Taxable Person",
                "ref": "S.27",
                "body": "CTP: occasional supply from a State where no fixed place of business exists. NRTP: no fixed place of business/residence in India at all. Both must register at least 5 days before commencing business, make ADVANCE TAX DEPOSIT, valid for period applied for or 90 days (extendable by another 90 days), whichever earlier."
              },
              {
                "term": "Cancellation & Revocation",
                "ref": "S.29/30",
                "body": "Cancellation triggers: business discontinued/transferred, change in constitution causing new PAN, no longer liable, composition return not filed for 3 months beyond due date, regular filer hasn't filed for 6 continuous months (monthly) or 2 tax periods (QRMP), fraud. Revocation: apply within 90 days of cancellation order (extendable to 180 days), only for officer-initiated (suo-motu) cancellations, not self-requested ones."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Determining liability to register from turnover + supply-type facts",
                "howTo": "Identify which threshold applies (goods-only Rs.40L/20L/10L vs services/mixed Rs.20L/10L based on the specific state); then separately check if ANY S.24 compulsory-registration trigger applies (inter-state goods, reverse charge, e-commerce) which would override the threshold entirely."
              },
              {
                "name": "Effective date of registration determination",
                "howTo": "Find the date the person became liable to register (when turnover crossed threshold, or trigger event for S.24 cases); compare to actual application date - within 30 days means effective date = liability date; beyond 30 days means effective date = grant date."
              }
            ],
            "notes": "The state-by-state threshold table (Rs.40L/20L/10L for goods, Rs.20L/10L for services) is dense recall material - build a simple 2x2 mental grid (goods vs services, special-category vs other) rather than memorizing every state individually. S.24's compulsory list overrides thresholds entirely and is the more frequently tested concept."
          }
        },
        {
          "id": "p3-gst10",
          "name": "Tax Invoice, Credit and Debit Notes",
          "weightage": "Medium",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Time limit for tax invoice - goods",
                "ref": "S.31(1)",
                "body": "Before or at the time of removal (where movement involved) or delivery/making available (no movement)."
              },
              {
                "term": "Time limit for tax invoice - services",
                "ref": "S.31(2) + Rule 47",
                "body": "Within 30 days of supply of service (45 days for insurer/bank/financial institution/NBFC)."
              },
              {
                "term": "Bill of Supply",
                "ref": "S.31(3)(c)",
                "body": "Issued instead of tax invoice by: composition scheme suppliers, and suppliers of exempted goods/services. No tax amount shown since none is collected."
              },
              {
                "term": "Receipt Voucher & Refund Voucher",
                "ref": "S.31(3)(d)/(e)",
                "body": "Receipt voucher: issued on receipt of advance payment (relevant mainly for services, since goods don't attract GST on advance). Refund voucher: issued if advance was received (receipt voucher issued) but supply never happens and no tax invoice follows."
              },
              {
                "term": "E-invoicing applicability",
                "ref": "Rule 48(4)",
                "body": "Mandatory for registered persons with aggregate turnover >Rs.5 crore in any FY from 2017-18 onward, for B2B supplies and exports. NOT applicable to B2C, SEZ units, insurers/banks/NBFCs, GTA, passenger transport, cinema exhibition services, Govt departments, local authorities, or Input Service Distributors."
              },
              {
                "term": "Credit Note",
                "ref": "S.34(1)/(2)",
                "body": "Issued when invoiced taxable value/tax EXCEEDS actual, or goods returned, or goods/services found deficient. Must be declared by EARLIER of: 30th November following end of FY of original supply, or date of filing annual return. Reduces supplier's output tax liability (unless incidence already passed to another person)."
              },
              {
                "term": "Debit Note",
                "ref": "S.34(3)/(4)",
                "body": "Issued when invoiced taxable value/tax is LESS than actual (undercharged). Treated like a regular invoice for return/payment purposes - increases supplier's output tax liability. No specific time-limit restriction like credit notes have."
              },
              {
                "term": "Secondary discounts - no credit note for GST reduction",
                "ref": "concept",
                "body": "Discounts NOT known/agreed at time of supply (offered later, unilaterally) cannot be passed via a GST credit note reducing tax liability - only a financial/commercial credit note (without GST) can be issued for such cases."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Identifying which document to issue from a transaction scenario",
                "howTo": "Map the fact pattern to the document type systematically: composition/exempt supplier -> Bill of Supply; advance received for service -> Receipt Voucher; advance received then supply cancelled -> Refund Voucher; value/tax overcharged or goods returned -> Credit Note; value/tax undercharged -> Debit Note."
              }
            ],
            "notes": "Mostly a documentation/procedural chapter - good for quick recall-based marks. The credit note's strict November-30/annual-return deadline (vs the debit note having no such deadline) is a frequently tested asymmetry."
          }
        },
        {
          "id": "p3-gst11",
          "name": "Accounts and Records",
          "weightage": "Low",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Core records every registered person maintains",
                "ref": "S.35(1)",
                "body": "Production/manufacture records, inward+outward supply records, stock of goods, ITC availed, output tax payable+paid, plus prescribed additional particulars (advances, reverse-charge supplies, supplier/recipient names+addresses)."
              },
              {
                "term": "Place of maintenance",
                "ref": "concept",
                "body": "At the Principal Place of Business as per registration certificate. If multiple places of business registered, records for each kept at that specific place."
              },
              {
                "term": "Period of retention",
                "ref": "S.36",
                "body": "72 months (6 years) from the due date of filing the annual return for the year the records pertain to. EXTENDED if under appeal/revision/investigation: 1 year after final disposal, OR the standard 72-month period, WHICHEVER IS LATER."
              },
              {
                "term": "Additional records by specific persons",
                "ref": "concept",
                "body": "Manufacturer: monthly production accounts (raw material used + finished goods + waste/by-products). Service provider: goods used in service provision + input services utilized. Works contractor: separate accounts per contract (parties, goods/services received & used, payments). Agent: authorization details, goods received/supplied per principal, accounts furnished to each principal."
              },
              {
                "term": "Owner/operator of warehouse & transporter obligations",
                "ref": "S.35(2)",
                "body": "MUST maintain records of consignor/consignee details EVEN IF NOT REGISTERED under GST - obtain a unique enrolment number (Form GST ENR-01) if unregistered, rather than a regular GSTIN."
              },
              {
                "term": "Electronic record-keeping rules",
                "ref": "concept",
                "body": "Permitted in electronic form (authenticated by digital signature); must keep proper backup; must produce records on demand in hard copy or readable electronic format, including file passwords/access codes if asked."
              },
              {
                "term": "Consequence of failure to maintain accounts",
                "ref": "S.35(6)",
                "body": "Proper officer can determine tax payable on unaccounted goods/services AS IF they had been supplied by that person - shifts burden of proof effectively onto the taxpayer."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [],
            "notes": "Lowest-weightage, purely conceptual chapter - mostly 'who maintains what' recall. The 72-month retention period (extendable for ongoing litigation) is the single most quoted figure from this chapter in MCQs."
          }
        },
        {
          "id": "p3-gst12",
          "name": "E-Way Bill",
          "weightage": "Medium",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "E-Way Bill - purpose & trigger",
                "ref": "Rule 138",
                "body": "Required for movement of goods (by registered person, even if to/from unregistered person) where consignment value exceeds Rs.50,000 - either in relation to a supply, or for reasons other than supply (e.g. branch transfer, job work returns), or due to inward supply from unregistered person."
              },
              {
                "term": "Who generates the e-way bill",
                "ref": "concept",
                "body": "Registered person causing movement (consignor/consignee), or if neither generates it, the TRANSPORTER must generate it before movement, based on the invoice/bill of supply/delivery challan information."
              },
              {
                "term": "Validity period of e-way bill",
                "ref": "formula",
                "body": "1 day per 200 km (or part thereof) for regular cargo; 1 day per 20 km for Over Dimensional Cargo (ODC). Validity counted from the time of generation, can be extended within 8 hours before/after expiry under specific circumstances (transshipment delay, natural calamity, etc.)."
              },
              {
                "term": "Situations where e-way bill is NOT required",
                "ref": "list",
                "body": "Non-motorized conveyance; goods transported from port/airport/customs station to ICD/CFS for clearance; specified exempt goods (e.g. LPG for household, kerosene under PDS, jewellery, currency); goods transported under customs bond; transit cargo to/from Nepal/Bhutan; defence formation movements; empty cargo containers."
              },
              {
                "term": "Consolidated E-way Bill",
                "ref": "Rule 138(8)",
                "body": "A transporter carrying multiple consignments (each with its own individual e-way bill) in one vehicle can generate ONE consolidated e-way bill indicating serial numbers of all individual e-way bills, instead of carrying each separately."
              },
              {
                "term": "Cancellation of e-way bill",
                "ref": "concept",
                "body": "Can be cancelled within 24 hours of generation if goods not actually transported or details are incorrect - cannot be cancelled if already verified in transit by an officer."
              },
              {
                "term": "Blocking of e-way bill generation facility",
                "ref": "Rule 138E",
                "body": "E-way bill generation blocked for a GSTIN if returns (GSTR-3B) not filed for 2 consecutive tax periods (regular) or the prescribed default period for composition taxpayers - prevents non-compliant taxpayers from continuing supply chains."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Validity period computation from distance",
                "howTo": "Divide total transport distance by 200 (round up any part-distance to a full day) for regular cargo, or by 20 for ODC, starting the count from the e-way bill generation timestamp - not the actual movement start time."
              }
            ],
            "notes": "Procedural/operational chapter with a moderate numerical pattern (validity period calculation). The Rs.50,000 consignment-value threshold and the distance-based validity formula are the two most commonly tested concrete figures."
          }
        },
        {
          "id": "p3-gst13",
          "name": "Payment of Tax",
          "weightage": "Medium",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Three E-Ledgers",
                "ref": "S.49",
                "body": "Electronic Cash Ledger: cash deposits made by taxpayer, used to pay tax/interest/penalty/fee. Electronic Credit Ledger: ITC availed, used ONLY for tax payment (not interest/penalty/late fee). Electronic Liability Register: running record of total tax/interest/penalty/other dues, auto-updated from returns."
              },
              {
                "term": "ITC utilization sequence (recap from ITC chapter)",
                "ref": "S.49A/49B/Rule 88A",
                "body": "IGST credit must be exhausted FIRST (in any proportion against CGST and SGST output) before CGST or SGST credit is touched. CGST credit cannot pay SGST liability and vice versa - cross-utilization is strictly IGST<->CGST and IGST<->SGST only."
              },
              {
                "term": "Interest on delayed payment of tax",
                "ref": "S.50",
                "body": "18% p.a. on tax NOT paid by due date, computed on the NET tax liability (i.e. after deducting eligible ITC) - calculated from the day after the due date until actual payment. If ITC wrongly availed AND utilized (not just availed), interest is 24% p.a. on that wrongly utilized amount."
              },
              {
                "term": "Rule 86A - blocking of fraudulent ITC",
                "ref": "concept",
                "body": "Commissioner/authorized officer can disallow debit of electronic credit ledger (block ITC use) where credit is believed fraudulently availed (fake invoices, non-existent supplier, no actual receipt of goods/services) - restriction lasts max 1 year."
              },
              {
                "term": "Rule 86B - 99% cash payment restriction",
                "ref": "concept",
                "body": "Where monthly taxable supply value (excl. exempt+zero-rated) exceeds Rs.50 lakh, registered person CANNOT use more than 99% of output tax liability from electronic credit ledger - at least 1% must be paid in cash. Exceptions: persons who paid >Rs.1 lakh income tax in each of last 2 years, received >Rs.1 lakh refund of unutilized ITC (exports/inverted duty), discharged >1% liability via cash cumulatively in current FY, or are Govt/PSU/local authority/statutory body."
              },
              {
                "term": "Order of discharge of tax liability",
                "ref": "S.49(8)",
                "body": "Self-assessed tax+other dues for PREVIOUS tax periods must be discharged FIRST, before current period's liability. Within any period: interest and late fee are paid before the tax itself if amounts are insufficient."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Interest computation on delayed tax payment",
                "howTo": "Identify net cash tax liability (after ITC offset) for the relevant period, compute number of days from due date to actual payment date, apply 18% p.a. (or 24% for wrongly availed+utilized ITC) pro-rated for those days."
              },
              {
                "name": "Rule 86B cash payment check",
                "howTo": "First check if monthly taxable turnover (excl. exempt/zero-rated) exceeds Rs.50 lakh; if yes, verify none of the 4 exceptions apply; if no exception applies, ensure at least 1% of output liability is discharged via cash ledger, not entirely from credit ledger."
              }
            ],
            "notes": "The 18%/24% interest rate distinction (mere availing vs availing+utilizing wrongly) is a frequently confused point. Rule 86B's 99%-credit-cap with its 4 specific exceptions is dense but high-yield recall material for MCQs."
          }
        },
        {
          "id": "p3-gst14",
          "name": "Tax Deduction at Source and Collection of Tax at Source",
          "weightage": "Medium",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "TDS under GST - who deducts (S.51)",
                "ref": "concept",
                "body": "Government departments/establishments, local authorities, PSUs, and specified persons (notified) deduct TDS when making payment to a supplier under a contract, if the contract value exceeds Rs.2,50,000 (excl. tax)."
              },
              {
                "term": "TDS rate and computation",
                "ref": "formula",
                "body": "1% CGST + 1% SGST (or 2% IGST for inter-state) on the payment made to supplier, EXCLUDING the GST component itself from the base on which TDS is computed."
              },
              {
                "term": "TDS deposit & certificate timeline",
                "ref": "concept",
                "body": "TDS amount deposited to government within 10 days after the end of the month of deduction. TDS certificate (Form GSTR-7A) made available to deductee within 5 days of crediting the amount to government - late certificate issuance attracts late fee of Rs.100/day (max Rs.5,000)."
              },
              {
                "term": "No TDS deduction situations",
                "ref": "list",
                "body": "Where supplier and recipient (deductor) are located in the same state but the PLACE OF SUPPLY is a different state (would create IGST mismatch); supplies between distinct persons (not normally arising in govt-supplier context but excluded if applicable); contract value <=Rs.2,50,000."
              },
              {
                "term": "TCS under GST - who collects (S.52)",
                "ref": "concept",
                "body": "Every Electronic Commerce Operator (ECO) who collects consideration on behalf of suppliers selling through its platform must collect TCS, EXCEPT for supplies where the ECO itself is liable to pay tax under S.9(5) (e.g. cab aggregators, accommodation services via unregistered suppliers)."
              },
              {
                "term": "TCS rate",
                "ref": "formula",
                "body": "0.5% CGST + 0.5% SGST (or 1% IGST) of the NET VALUE of taxable supplies made through the ECO (gross value of taxable supplies LESS supplies returned during that month, by all suppliers through the operator)."
              },
              {
                "term": "TCS statements & matching",
                "ref": "concept",
                "body": "ECO files monthly TCS statement (Form GSTR-8) and annual statement; details auto-reflect in supplier's electronic cash ledger; any mismatch between ECO's reported outward supply value and supplier's own declared value gets communicated to both for reconciliation."
              },
              {
                "term": "Difference between TDS and TCS in GST context",
                "ref": "comparison",
                "body": "TDS: deducted by RECIPIENT/payer when paying a SUPPLIER (notified govt/PSU entities only, contract-based). TCS: collected by the E-COMMERCE PLATFORM from amounts it collects on behalf of suppliers selling through it - fundamentally different trigger and deductor identity."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "TDS computation on a government contract payment",
                "howTo": "Check contract value threshold (>Rs.2,50,000 excl. tax) first; compute TDS as 1%+1% (or 2% IGST) on the payment value EXCLUDING GST; verify the no-TDS exception (same state supplier/deductor but different place of supply) doesn't apply."
              },
              {
                "name": "TCS computation for an e-commerce operator",
                "howTo": "Aggregate gross value of all taxable supplies made through the platform during the month by all suppliers (excluding S.9(5) categories where ECO itself pays tax); subtract any supplies returned during the same month; apply 0.5%+0.5% (or 1% IGST) to the net figure."
              }
            ],
            "notes": "The TDS/TCS rate pair (1%+1% vs 0.5%+0.5%) and their respective Rs.2,50,000 contract threshold / net-value basis are the most commonly tested concrete numbers. Keep the TDS deductor identity (govt/PSU) clearly distinct from the TCS collector identity (e-commerce platform) - they're often confused in MCQs."
          }
        },
        {
          "id": "p3-gst15",
          "name": "Returns",
          "weightage": "High",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "GSTR-1 - outward supplies statement",
                "ref": "S.37",
                "body": "Monthly (turnover>Rs.5Cr, or opted) by 11th of next month, or Quarterly under QRMP scheme (turnover<=Rs.5Cr) by 13th of month after quarter-end. Contains invoice-wise B2B and consolidated B2C outward supply details."
              },
              {
                "term": "GSTR-1A",
                "ref": "concept",
                "body": "Optional facility allowing supplier to amend/add details of outward supplies for a tax period AFTER filing GSTR-1 but BEFORE filing GSTR-3B for that period - corrects errors before the recipient's ITC gets locked in via GSTR-2B."
              },
              {
                "term": "GSTR-2B - auto-generated ITC statement",
                "ref": "S.38",
                "body": "Auto-generated monthly statement (not filed by taxpayer) showing ITC available/not-available based on suppliers' GSTR-1/IFF filings, generated on a fixed date each month - forms the basis for ITC eligibility checks under S.16(2)(aa)."
              },
              {
                "term": "GSTR-3B - summary return + tax payment",
                "ref": "S.39",
                "body": "Monthly (by 20th of next month for >Rs.5Cr turnover; staggered 20th/22nd/24th for smaller taxpayers across state groups) or Quarterly (QRMP, by 22nd/24th after quarter-end). Self-assessed summary of outward supply, ITC claimed, and tax payment - the actual tax-paying return."
              },
              {
                "term": "QRMP Scheme",
                "ref": "concept",
                "body": "Quarterly Return Monthly Payment: available to taxpayers with turnover <=Rs.5 crore. File GSTR-1/GSTR-3B quarterly, but pay tax monthly via a simplified payment challan (either 35% of last quarter's cash liability via fixed sum method, or self-assessment method) for the first 2 months of the quarter."
              },
              {
                "term": "Annual Return - GSTR-9",
                "ref": "S.44",
                "body": "Filed by 31st December following the end of the financial year. Mandatory for regular taxpayers with turnover above the prescribed threshold (currently optional below Rs.2 crore, with relaxations notified periodically). GSTR-9C (reconciliation statement, self-certified) required additionally above Rs.5 crore turnover."
              },
              {
                "term": "Final Return - GSTR-10",
                "ref": "S.45",
                "body": "Filed within 3 months of cancellation of registration or cancellation order date (whichever later) - applicable to taxpayers whose registration is cancelled or surrendered, to settle final tax liability and ITC reversal on closing stock."
              },
              {
                "term": "Other specific returns",
                "ref": "list",
                "body": "GSTR-4: annual return for composition taxpayers (by 30th April following FY). GSTR-5: return by non-resident taxable person. GSTR-8: TCS statement by e-commerce operator. GSTR-11: statement by UIN holders for claiming refund on inward supplies."
              },
              {
                "term": "Late fee for default",
                "ref": "S.47",
                "body": "Rs.100/day CGST + Rs.100/day SGST (i.e. Rs.200/day total) up to a maximum cap, subject to lower caps for nil-liability returns and for small taxpayers per turnover slabs (reduced caps notified periodically, e.g. Rs.2,000/Rs.5,000/Rs.10,000 depending on turnover band)."
              },
              {
                "term": "Goods and Services Tax Practitioner (GSTP)",
                "ref": "S.48",
                "body": "Person enrolled to assist registered persons in preparing/filing returns on their behalf, based on information provided by the registered person - acts on the taxpayer's authorization but the taxpayer remains legally responsible for the return's accuracy."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Identifying correct return + due date for a given taxpayer profile",
                "howTo": "First classify taxpayer type (regular monthly/QRMP/composition/NRTP/ECO), then match to the corresponding return (GSTR-1/3B/4/5/8) and apply the relevant due date - turnover threshold (Rs.5 crore) is the key QRMP-eligibility gatekeeper."
              },
              {
                "name": "Late fee computation with caps",
                "howTo": "Compute Rs.200/day (CGST+SGST combined) for the actual delay period, then apply whichever cap is lower between the standard maximum and any turnover-based or nil-return reduced cap that applies to that specific taxpayer."
              }
            ],
            "notes": "This is the capstone procedural chapter tying the whole compliance cycle together (GSTR-1 -> GSTR-2B -> GSTR-3B -> GSTR-9). The QRMP scheme mechanics and the GSTR-1/3B due-date structure are the most exam-relevant operational details; the late fee cap table is dense recall material worth a quick review pass."
          }
        }
      ]
    },
    {
      "id": "p4",
      "name": "Cost & Management Accounting",
      "group": 2,
      "chapters": []
    },
    {
      "id": "p5",
      "name": "Auditing & Ethics",
      "group": 2,
      "chapters": []
    },
    {
      "id": "p6",
      "name": "Financial Management & Strategic Management",
      "group": 2,
      "chapters": [
        {
          "id": "p6-c1",
          "name": "Chapter 1: Scope and Objectives of Financial Management",
          "weightage": "Medium",
          "pdfLink": "https://resource.cdn.icai.org/87737bos280825-ch1.pdf",
          "status": "in-progress",
          "lastTouched": "2026-06-22",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Three financial decisions",
                "ref": "V = f(I,F,D)",
                "body": "Investment, Financing, Dividend decisions. Value of firm depends on all three jointly."
              },
              {
                "term": "Profit Max vs Wealth Max",
                "ref": "core theory",
                "body": "Wealth Max preferred: accounts for risk, timing of returns, and uses cash flow not accounting profit. Wealth = PV(benefits) - PV(costs)."
              },
              {
                "term": "Value of firm",
                "ref": "formula",
                "body": "V = N (number of shares) x MP (market price) = Ve (equity) + Vd (debt)."
              },
              {
                "term": "Financial distress vs Insolvency",
                "ref": "concept",
                "body": "Distress = cash inflows inadequate to meet current obligations. Prolonged distress -> insolvency = inability to repay debts."
              },
              {
                "term": "Agency Problem & Agency Cost",
                "ref": "concept",
                "body": "Conflict between owners/shareholders and managers (agents). 4 types of agency cost: monitoring, bonding, opportunity, structuring."
              },
              {
                "term": "Three evolution phases",
                "ref": "history",
                "body": "Traditional (occasional events only) -> Transitional (day-to-day funds problems) -> Modern (efficient markets, capital budgeting theory)."
              },
              {
                "term": "Sources of funds",
                "ref": "concept",
                "body": "Equity (safest, but costliest), Debentures (cheaper, tax-deductible interest, but mandatory repayment/interest), Bank funding, International (FDI/FII/ADR/GDR), Angel financing."
              }
            ],
            "caseLaws": [
              {
                "case": "Van Horne (definition)",
                "point": "Firm value = market price of common stock; reflects all participants' judgment on future earnings, timing, risk, dividend policy."
              },
              {
                "case": "Phillippatus (definition)",
                "point": "Financial Management = managerial decisions resulting in acquisition and financing of short and long term credit."
              }
            ],
            "numericalPatterns": [
              {
                "name": "Illustration 1 pattern - Profit Max vs Wealth Max",
                "howTo": "Compare two cash flow streams (e.g. Product X vs Y) with equal total but different risk. Profit max picks higher total blindly; wealth max requires risk-adjusted judgment. Largely conceptual, not a real calculation."
              }
            ],
            "notes": "Triaged from pasted PDF text. 12 MCQs and 7 theory Qs already in the ICAI module map directly onto the Tier-1 list above - good for self-testing without needing extra practice questions."
          }
        },
        {
          "id": "p6-c2",
          "name": "Chapter 2: Types of Financing",
          "weightage": "Medium",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Financial needs classification",
                "ref": "concept",
                "body": "Long-term (>5-10yr, fixed assets, permanent WC), Medium-term (1-5yr), Short-term (<1yr, current assets/WC)."
              },
              {
                "term": "Equity vs Preference vs Debentures",
                "ref": "comparison",
                "body": "Equity: permanent, highest cost, no fixed dividend, dilutes control. Preference: hybrid, fixed dividend not tax-deductible, cumulative/non-cumulative/redeemable/participating/convertible types. Debentures: cheapest (tax-deductible interest), mandatory repayment, secured/unsecured, convertible types."
              },
              {
                "term": "Venture Capital financing",
                "ref": "concept",
                "body": "Equity financing for high-risk new ventures. Methods: equity financing (max 49% stake), conditional loan (royalty on sales, no interest), income note (low interest + low royalty), participating debenture (3-phase interest)."
              },
              {
                "term": "Debt Securitisation",
                "ref": "concept",
                "body": "Illiquid assets (e.g. loans) pooled into marketable securities sold to investors via SPV (Special Purpose Vehicle). Helps originator raise funds and get loans off balance sheet."
              },
              {
                "term": "Lease Financing types",
                "ref": "concept",
                "body": "Operating Lease: short-term, cancellable, lessor bears risk/maintenance. Financial Lease: long-term, non-cancellable, lessee bears risk, full payout, also called capital lease. Also: Sale & Lease Back, Leveraged Lease, Sales-aid Lease."
              },
              {
                "term": "Short-term sources",
                "ref": "list",
                "body": "Trade credit, Accrued expenses, Advances from customers, Commercial Paper (CP - 7 to 364 days, min Rs.5 lakh denomination), Treasury Bills (14-364 days), Certificates of Deposit, Bank advances (loan/OD/cash credit/clean advances)."
              },
              {
                "term": "Export finance",
                "ref": "concept",
                "body": "Pre-shipment finance (packing credit - before shipment) and Post-shipment finance (after shipment - bill discounting, advance against bills for collection)."
              },
              {
                "term": "ADR / GDR / IDR",
                "ref": "international financing",
                "body": "ADR: non-US companies list on US exchange. GDR: traded mainly in Europe/London. IDR: foreign companies raise funds from Indian market (reverse of ADR/GDR)."
              },
              {
                "term": "Crowdfunding types",
                "ref": "contemporary funding",
                "body": "Equity funding (investors get securities), P2P lending (unsecured loans matched online), Donation-based (no return expected)."
              }
            ],
            "caseLaws": [
              {
                "case": "Masala Bond example",
                "point": "NTPC raised Rs.2,000 crore via masala bonds (2016) - rupee-denominated bonds issued outside India."
              },
              {
                "case": "Green Bond example",
                "point": "Ghaziabad Municipal Corporation - first Indian municipal corp to raise Rs.150 crore via Green Bond (2021)."
              }
            ],
            "numericalPatterns": [],
            "notes": "Heavy on named-instrument recall (15+ named instruments across Indian/foreign bonds). Best tested via matching-type self-quizzes - this chapter is descriptive/MCQ heavy, not calculation heavy."
          }
        },
        {
          "id": "p6-c3",
          "name": "Chapter 3: Financial Analysis and Planning - Ratio Analysis",
          "weightage": "High",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Four ratio categories",
                "ref": "classification",
                "body": "Liquidity (short-term solvency), Leverage/Capital Structure (long-term solvency), Activity/Turnover (efficiency), Profitability."
              },
              {
                "term": "Current Ratio & Quick Ratio",
                "ref": "formula",
                "body": "Current Ratio = CA/CL, ideal 2:1. Quick Ratio = (CA - Inventory - Prepaid)/CL, ideal 1:1. Quick assets exclude inventory & prepaid expenses."
              },
              {
                "term": "Debt-Equity Ratio & Debt-to-Assets",
                "ref": "formula",
                "body": "D/E = Total Debt / Shareholders Equity. High ratio = less creditor protection, higher financial leverage."
              },
              {
                "term": "Coverage Ratios",
                "ref": "formula",
                "body": "DSCR = Earnings available for debt service / (Interest+Installments), ideal 1.5-2. Interest Coverage = EBIT/Interest. Fixed Charges Coverage = (EBIT+Depreciation)/(Interest+Loan repayment)."
              },
              {
                "term": "Turnover Ratios",
                "ref": "formula",
                "body": "Inventory TO = COGS/Avg Inventory. Debtors TO = Credit Sales/Avg Receivables. Payables TO = Net Credit Purchases/Avg Payables. Average collection/payment period = 365/TO ratio."
              },
              {
                "term": "ROI family",
                "ref": "formula",
                "body": "ROA = (PAT+Interest)/Avg Total Assets. ROCE(pre-tax) = EBIT/Capital Employed. ROCE(post-tax) = EBIT(1-t)/Capital Employed. ROE = (PAT - Pref Div)/Equity Shareholders Fund."
              },
              {
                "term": "DuPont Model",
                "ref": "ROE breakdown",
                "body": "ROE = Net Profit Margin x Asset Turnover x Equity Multiplier. Equity Multiplier = Assets/Shareholders Equity - isolates leverage's contribution to ROE."
              },
              {
                "term": "Market/Investor ratios",
                "ref": "formula",
                "body": "EPS = Net profit avail to equity / No. of shares. P/E = MPS/EPS. Dividend Yield = DPS/MPS. Q Ratio = Market value of equity+debt / Replacement cost of assets (Q=1 is equilibrium)."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Multi-year ratio comparison + analysis writeup",
                "howTo": "Classic exam pattern: given 2-year income statement + balance sheet, compute 5-7 ratios for both years, then write 'Analysis:' paragraph explaining WHY each ratio changed."
              },
              {
                "name": "Reverse-engineering financial statements from ratios",
                "howTo": "Given only a set of ratios and a few absolute figures, reconstruct the full P&L and Balance Sheet by working backward through each ratio formula. Very common 10-mark question type."
              },
              {
                "name": "Industry-norm comparison",
                "howTo": "Compute company's own ratios, compare to given industry-norm table, comment on each (better/worse than industry, with reasoning tied to specific ratio meaning)."
              }
            ],
            "notes": "Highest-weightage FM chapter by sheer volume of formulas (25+ named ratios) and the most illustration-heavy. The 'reconstruct financial statements from ratios' numerical pattern is the signature ICAI question type - practice that specifically."
          }
        },
        {
          "id": "p6-c4",
          "name": "Chapter 4: Cost of Capital",
          "weightage": "High",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Cost of Irredeemable Debt",
                "ref": "formula",
                "body": "Kd = I/NP x (1-t). NP = Net Proceeds (issue price less floatation cost)."
              },
              {
                "term": "Cost of Redeemable Debt (approximation)",
                "ref": "formula",
                "body": "Kd = [I(1-t) + (RV-NP)/n] / [(RV+NP)/2]. Use YTM/IRR method via trial & error for more accuracy when RV-NP gap is large."
              },
              {
                "term": "Cost of Preference Shares",
                "ref": "formula",
                "body": "Irredeemable: Kp = PD/P0. Redeemable: Kp = [PD + (RV-NP)/n] / [(RV+NP)/2]. Preference dividend NOT tax-deductible (unlike debt interest)."
              },
              {
                "term": "Cost of Equity - 5 approaches",
                "ref": "concept",
                "body": "Dividend Price (Ke=D/P0), Earnings Price (Ke=E/P), Growth/Gordon's (Ke=D1/P0 + g), Realized Yield (historical IRR), CAPM (Ke = Rf + Beta(Rm-Rf))."
              },
              {
                "term": "Growth rate estimation",
                "ref": "formula",
                "body": "Average method: D0 = Dn(1+g)^n, solve for g. Gordon's Growth Model: g = b x r (retention ratio x return on investment)."
              },
              {
                "term": "Cost of Retained Earnings",
                "ref": "formula",
                "body": "Same formulas as Ke but P = current market price (not net proceeds) and NO floatation cost adjustment. Kr is normally LOWER than Ke."
              },
              {
                "term": "WACC steps",
                "ref": "process",
                "body": "1) Total capital from all sources. 2) Proportion of each source. 3) Multiply proportion x specific cost. 4) Sum all = WACC. Use Book Value or Market Value weights - MV preferred, more relevant to current conditions."
              },
              {
                "term": "Marginal Cost of Capital",
                "ref": "concept",
                "body": "Cost of raising ONE additional rupee of capital. Uses intended financing proportions as weights. Rises once cheaper sources are exhausted (e.g. retained earnings -> new equity)."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "YTM/IRR for cost of debt/preference shares",
                "howTo": "Discount cash flows (interest net of tax + redemption value) at two trial rates, interpolate: IRR = L + [NPV_L/(NPV_L - NPV_H)] x (H-L)."
              },
              {
                "name": "WACC with BV vs MV weights",
                "howTo": "Always compute both when asked - apportion equity's market value between paid-up capital and retained earnings using the BV ratio of the two."
              },
              {
                "name": "Marginal cost of capital - break point",
                "howTo": "Find the capital investment level at which retained earnings get exhausted (Capital investment = Retained earnings / equity-weight%) - beyond this point, new equity must be issued, usually at higher cost."
              }
            ],
            "notes": "Most formula-dense FM chapter. The YTM/IRR interpolation pattern repeats across cost of debt, cost of preference shares, AND comes back in Investment Decisions for IRR of projects - master the interpolation formula once, applies everywhere."
          }
        },
        {
          "id": "p6-c5",
          "name": "Chapter 5: Financing Decisions - Capital Structure",
          "weightage": "High",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Four Capital Structure Theories",
                "ref": "classification",
                "body": "NI Approach (relevant, max debt minimizes WACC), NOI Approach (irrelevant, WACC constant), Traditional Approach (optimal mix exists), MM Approach (irrelevant w/o tax, relevant with tax due to interest tax shield)."
              },
              {
                "term": "NI Approach formula",
                "ref": "formula",
                "body": "Value of Firm V = S + D. Market value of equity S = NI/Ke. Overall cost of capital = EBIT/V. Lower WACC achieved through MORE debt."
              },
              {
                "term": "NOI Approach formula",
                "ref": "formula",
                "body": "V = EBIT/Ko (Ko constant regardless of leverage). Ke = (EBIT-Interest)/S, rises with leverage to offset cheaper debt - net effect is WACC stays flat."
              },
              {
                "term": "MM Approach (1958, no tax)",
                "ref": "formula",
                "body": "Vlevered = Vunlevered (capital structure irrelevant). Ke(levered) = Ko + (Ko-Kd) x Debt/Equity. Arbitrage process keeps values equal across firms with same risk class."
              },
              {
                "term": "MM Approach (1963, with tax)",
                "ref": "formula",
                "body": "Vlevered = Vunlevered + (Debt x Tax rate) [tax shield benefit]. Keg = Keu + (Keu-Kd) x [Debt/(Debt+Equity)](1-t). Kog = Keu[1-(t x L)] where L=Debt/(Debt+Equity)."
              },
              {
                "term": "Trade-off Theory",
                "ref": "concept",
                "body": "Balances tax benefit of debt (interest tax shield) against cost of financial distress/bankruptcy. Optimal capital structure is where marginal benefit = marginal cost of additional debt."
              },
              {
                "term": "Pecking Order Theory",
                "ref": "concept",
                "body": "Financing hierarchy due to asymmetric information: 1) Internal finance first, 2) Debt, 3) New equity issue LAST (most info-revealing, most costly signal)."
              },
              {
                "term": "EBIT-EPS-MPS Analysis",
                "ref": "tool",
                "body": "Compare financing alternatives at same EBIT level; calculate EPS for each, multiply by P/E ratio (or divide by Ke) to get MPS. Plan with highest MPS wins, even if EPS is lower elsewhere."
              },
              {
                "term": "Financial Break-Even Point & Indifference Point",
                "ref": "formula",
                "body": "Financial BEP = Interest + [Preference Dividend/(1-t)] - EBIT level where EPS=0. Indifference Point: EBIT where two financing plans give EQUAL EPS."
              },
              {
                "term": "Over-capitalisation vs Under-capitalisation",
                "ref": "concept",
                "body": "Over-cap: more capital than needed, falling dividend/share price, remedy = buyback. Under-cap: actual capitalisation lower than earning capacity warrants, remedy = bonus shares. Over-cap is more dangerous."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Indifference point between financing plans",
                "howTo": "Set EPS formulas of two plans equal, solve for EBIT. Below this EBIT equity wins; above it debt financing wins."
              },
              {
                "name": "Arbitrage process (MM 1958)",
                "howTo": "Given two firms (one levered, one unlevered) with different value, show how an investor sells/buys + borrows/lends personally to replicate the position at lower cost, proving values must equalize."
              },
              {
                "name": "MM with tax - value of levered firm",
                "howTo": "Vlevered = Vunlevered + (Debt x Tax rate). Then back out new Ke and Ko using the formulas above - the single most repeated numerical in this chapter."
              }
            ],
            "notes": "Theory-heaviest FM chapter - 4 named theories with distinct formulas that are easy to confuse. Drill the NI vs NOI vs MM(no-tax) vs MM(with-tax) distinction since exam MCQs love testing which approach says capital structure is irrelevant vs relevant."
          }
        },
        {
          "id": "p6-c6",
          "name": "Chapter 6: Financing Decisions - Leverages",
          "weightage": "High",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Three types of leverage",
                "ref": "classification",
                "body": "Operating Leverage (Sales-EBIT, business risk). Financial Leverage (EBIT-EPS, financial risk). Combined Leverage (Sales-EPS, total risk)."
              },
              {
                "term": "Degree of Operating Leverage (DOL)",
                "ref": "formula",
                "body": "DOL = Contribution/EBIT = %change in EBIT / %change in Sales. Driven by fixed cost amount."
              },
              {
                "term": "Degree of Financial Leverage (DFL)",
                "ref": "formula",
                "body": "DFL = EBIT/EBT (no pref shares) = %change in EPS / %change in EBIT. Driven by interest + preference dividend."
              },
              {
                "term": "Degree of Combined Leverage (DCL)",
                "ref": "formula",
                "body": "DCL = DOL x DFL = Contribution/EBT = %change in EPS / %change in Sales."
              },
              {
                "term": "Margin of Safety & DOL relationship",
                "ref": "formula",
                "body": "DOL = 1/Margin of Safety. MOS = (Sales-BEP Sales)/Sales = EBIT/Contribution. Higher MOS = lower business risk = lower DOL."
              },
              {
                "term": "Financial Leverage as Trading on Equity / Double-Edged Sword",
                "ref": "concept",
                "body": "Favourable when ROI > Interest rate (debt boosts EPS). Unfavourable when ROI < Interest rate (debt hurts EPS) - hence 'double-edged sword'."
              },
              {
                "term": "DOL/DFL behavior near BEP",
                "ref": "concept",
                "body": "Can never be between 0 and 1 - either <=0 or >=1. At Operating/Financial BEP, leverage is undefined/infinite."
              },
              {
                "term": "Combined leverage risk matrix",
                "ref": "decision table",
                "body": "Low DOL + Low DFL = lower total risk. High+High = highest risk. Low DOL + High DFL = best balance (financial risk offset by low business risk)."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "DOL/DFL/DCL from income statement",
                "howTo": "Build Sales -> Contribution -> EBIT -> EBT -> EPS waterfall; DOL=Contribution/EBIT, DFL=EBIT/EBT, DCL=product of both."
              },
              {
                "name": "Reverse-engineering EBIT/Sales/Fixed Cost from given leverage ratios",
                "howTo": "Given DOL & DFL plus one absolute figure, work backward: Financial Leverage = EBIT/(EBIT-Interest) -> solve EBIT; Operating Leverage = Contribution/EBIT -> solve Contribution; Fixed Cost = Contribution - EBIT."
              },
              {
                "name": "Percentage change propagation",
                "howTo": "If DOL=6 and sales rise 10%, EBIT rises 60% (6x10%). Same logic chains DFL to EPS and DCL straight from Sales to EPS."
              }
            ],
            "notes": "Short conceptual chapter but the reverse-engineering numerical pattern (given leverage ratios, find absolute EBIT/Sales/Fixed Cost) is asked almost every exam. DOL=1/MOS identity is a quick-win fact worth memorizing cold."
          }
        },
        {
          "id": "p6-c7",
          "name": "Chapter 7: Investment Decisions",
          "weightage": "High",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Cash flow estimation principles",
                "ref": "concept",
                "body": "Exclude financing costs (interest/dividend - already in WACC), use post-tax cash flows only, depreciation is non-cash but creates tax shield."
              },
              {
                "term": "Sunk cost vs Opportunity cost",
                "ref": "concept",
                "body": "Sunk cost = already incurred, IRRELEVANT (exclude). Opportunity cost = value of best forgone alternative, RELEVANT (include as cash outflow)."
              },
              {
                "term": "Block of Assets depreciation treatment",
                "ref": "concept",
                "body": "If asset is the ONLY one in block: no depreciation in year of sale, STCG/STCL arises on (Sale value - WDV). If block has multiple assets: depreciation continues on (WDV - sale value)."
              },
              {
                "term": "Payback Period",
                "ref": "formula",
                "body": "Uniform CF: Initial Investment/Annual CF. Non-uniform: find year cumulative CF first exceeds investment, interpolate the fraction. Ignores time value of money."
              },
              {
                "term": "Accounting Rate of Return (ARR)",
                "ref": "formula",
                "body": "ARR = Average Annual Profit / Investment (initial OR average). Average Investment = 1/2(Initial-Salvage)+Salvage+Additional WC."
              },
              {
                "term": "Net Present Value (NPV)",
                "ref": "formula",
                "body": "NPV = Sum of PV(cash inflows) - Initial Investment. Decision: NPV>=0 Accept. For mutually exclusive: pick highest NPV."
              },
              {
                "term": "Profitability Index (PI)",
                "ref": "formula",
                "body": "PI = PV of cash inflows / Initial cash outlay. Decision: PI>=1 Accept. Useful for ranking under capital rationing (divisible projects)."
              },
              {
                "term": "Internal Rate of Return (IRR)",
                "ref": "formula",
                "body": "Discount rate where NPV=0. IRR = L + [NPV_L/(NPV_L-NPV_H)] x (H-L). Decision: IRR>=Cut-off rate/WACC Accept."
              },
              {
                "term": "Modified IRR (MIRR)",
                "ref": "concept",
                "body": "Reinvests all interim cash flows at cost of capital to terminal value, then finds single discount rate equating initial outflow to that terminal value. Fixes IRR's unrealistic reinvestment assumption."
              },
              {
                "term": "NPV vs IRR conflicts",
                "ref": "concept",
                "body": "3 scenarios cause ranking conflicts: (1) Scale/size disparity, (2) Timing disparity, (3) Unequal project lives. NPV is theoretically superior - always prefer NPV ranking when conflict arises."
              },
              {
                "term": "Capital Rationing",
                "ref": "concept",
                "body": "Divisible projects: rank by NPV per rupee of investment. Indivisible projects: rank by absolute NPV, combine to exhaust budget optimally - test combinations, don't just stack by rank."
              },
              {
                "term": "Unequal life projects",
                "ref": "concept",
                "body": "Replacement Chain Method: extend shorter project via repetition to match longer project's life. Equivalent Annualized Criterion: NPV / PVAF(for that project's life) - avoids needing common multiple of lives."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "CFAT (Cash Flow After Tax) statement",
                "howTo": "Sales - Variable Cost = Contribution; less Fixed Cost and Depreciation = EBT; less Tax = EAT; add back Depreciation = CFAT. Repeats in every NPV/IRR/Payback numerical."
              },
              {
                "name": "IRR via trial-and-error + interpolation",
                "howTo": "Guess a rate, get NPV; if positive try higher rate, if negative try lower rate, until bracketed; then interpolate between the two bracketing rates."
              },
              {
                "name": "Replacement decision cash flows",
                "howTo": "Initial outflow = New asset cost - Sale value of old asset +/- tax on STCG/STCL. Interim CF = incremental revenue/cost changes after tax + incremental depreciation tax shield."
              },
              {
                "name": "Capital rationing project selection",
                "howTo": "For divisible projects, rank NPV/Rs.1 invested and fill budget by rank. For indivisible projects, test feasible combinations within budget, pick highest total NPV."
              }
            ],
            "notes": "The single most numerically dense and highest-weightage FM chapter - covers 7 distinct evaluation techniques. The CFAT computation structure is the backbone of nearly every other numerical and recurs in Chapter 4 (cost of capital, via YTM)."
          }
        },
        {
          "id": "p6-c8",
          "name": "Chapter 8: Dividend Decisions",
          "weightage": "High",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Two theory categories",
                "ref": "classification",
                "body": "Irrelevance Theory: MM Approach. Relevance Theory: Walter's Model, Gordon's Model, Lintner's Model."
              },
              {
                "term": "MM Hypothesis (Irrelevance)",
                "ref": "formula",
                "body": "P0 = (P1+D1)/(1+Ke). Value unchanged whether dividend paid via cash, new shares issued, or not paid at all - proven via arbitrage."
              },
              {
                "term": "Walter's Model (Relevance)",
                "ref": "formula",
                "body": "P = [D + (r/Ke)(E-D)] / Ke. Optimal payout: Growth firm (r>Ke) -> 0% payout. Declining firm (r<Ke) -> 100% payout. Normal firm (r=Ke) -> payout irrelevant."
              },
              {
                "term": "Gordon's Model (Relevance)",
                "ref": "formula",
                "body": "P0 = E1(1-b) / (Ke - br), where br = g (growth rate), b = retention ratio. Same optimal payout conclusions as Walter's."
              },
              {
                "term": "Gordon's Revised Model / Bird-in-hand",
                "ref": "formula",
                "body": "P0 = D0(1+g)/(Ke-g) = D1/(Ke-g). Investors prefer certain current dividends over uncertain future capital gains."
              },
              {
                "term": "Dividend Discount Model (DDM) variants",
                "ref": "concept",
                "body": "Zero Growth: P0=D/Ke. Constant Growth (Gordon's): P0=D1/(Ke-g). Variable/Multi-stage Growth: discount each phase separately, add PV of terminal value."
              },
              {
                "term": "Lintner's Model",
                "ref": "formula",
                "body": "D1 = D0 + [(EPS x Target payout) - D0] x Adjustment factor. Managers focus on dividend CHANGES, not absolute level - explains why dividends are 'sticky'."
              },
              {
                "term": "Stock Split vs Bonus Shares vs Share Buyback",
                "ref": "concept",
                "body": "Stock Split: divides one share into many, keeps shares affordable. Bonus Shares: capitalizes retained earnings, no cash outflow, net worth unchanged. Buyback: company repurchases own shares, raises future DPS."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "MM Hypothesis - value of firm under dividend/no-dividend scenarios",
                "howTo": "Compute P1 using P0=(P1+D1)/(1+Ke) for both scenarios; compute shares needed to fund investment shortfall; show total firm value is identical either way."
              },
              {
                "name": "Walter's/Gordon's optimal payout determination",
                "howTo": "Compare r (return on investment) vs Ke (cost of equity) first - this single comparison determines whether 0% or 100% payout is optimal before any further calculation."
              },
              {
                "name": "Multi-stage DDM (variable growth)",
                "howTo": "Discount each year's dividend in the high-growth phase individually; for the terminal phase, use Gordon's formula to get terminal value, then discount back to present."
              }
            ],
            "notes": "Conceptually parallels Chapter 5 (Capital Structure) - both have an 'irrelevance' theory (MM) and 'relevance' theories with explicit formulas. The key question type: given r vs Ke, what's the optimal payout ratio?"
          }
        },
        {
          "id": "p6-c9",
          "name": "Chapter 9: Management of Working Capital",
          "weightage": "High",
          "pdfLink": "",
          "status": "not-started",
          "lastTouched": "2026-06-23",
          "revisionCount": 1,
          "practice": {
            "mcqAttempted": 0,
            "mcqCorrect": 0,
            "numericalsAttempted": 0,
            "numericalsCorrect": 0
          },
          "breakdown": {
            "tier1": [
              {
                "term": "Working Capital - 6 units structure",
                "ref": "classification",
                "body": "Unit I: Introduction. Unit II: Treasury & Cash Management. Unit III: Inventory Management. Unit IV: Receivables Management. Unit V: Payables Management. Unit VI: Financing of Working Capital."
              },
              {
                "term": "Gross vs Net WC, Permanent vs Fluctuating",
                "ref": "concept",
                "body": "Gross WC = investment in current assets. Net WC = Current Assets - Current Liabilities. Permanent WC = minimum base always required. Fluctuating/Temporary WC = varies with seasonal needs."
              },
              {
                "term": "Treasury Management functions",
                "ref": "concept",
                "body": "Cash Management, Currency Management (forex risk), Fund Management, Banking relationships, Corporate Finance (M&A, investor relations)."
              },
              {
                "term": "Credit Policy elements (Receivables)",
                "ref": "concept",
                "body": "Credit standards, Credit terms (e.g. '3/15 net 60'), Collection efforts. Lenient policy = more sales but more bad debt risk; Stringent = fewer sales, safer."
              },
              {
                "term": "Cost of Trade Credit (Payables)",
                "ref": "formula",
                "body": "Nominal cost of NOT taking discount = [d/(100-d)] x [365/t]. Effective cost = [(1+d/(100-d))^(365/t)] - 1, where d=discount%, t=days between discount period and full credit period."
              },
              {
                "term": "Sources of Working Capital Finance",
                "ref": "classification",
                "body": "Spontaneous: Trade credit, Bills payable, Accrued expenses (no explicit cost). Negotiated: Bank loans, Commercial Paper, Inter-corporate deposits, Public deposits."
              },
              {
                "term": "Inventory Management cross-reference",
                "ref": "note",
                "body": "This unit defers to Cost & Management Accounting Paper 4, Chapter 2 (Material Cost) for EOQ and inventory control techniques."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Cost of not availing cash discount",
                "howTo": "Use [d/(100-d)] x [365/t] for nominal annual cost; compare against opportunity cost of investing the retained cash elsewhere."
              },
              {
                "name": "Working capital estimation (operating cycle method)",
                "howTo": "Build up cash blocked in each stage: raw material + WIP + finished goods holding period + receivables period - payables period, multiply by daily cash operating expense."
              }
            ],
            "notes": "Largest FM chapter by page count (6 units) but lower numerical density than Chapters 3, 4, or 7 - mostly conceptual/list-based. The trade-credit discount-cost formula is the one genuinely numerical, exam-testable formula here."
          }
        }
      ]
    }
  ]
};

```
