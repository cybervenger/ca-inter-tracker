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
        },
        {
          "id": "p2-c4",
          "name": "Prospectus and Allotment of Securities (Companies Act 2013, Ch. III)",
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
                "term": "Public Offer vs Private Placement - S.23",
                "ref": "concept",
                "body": "Public company can issue securities via: Public Offer (prospectus - IPO/FPO/OFS), Private Placement, or Rights/Bonus issue. Private company can issue ONLY via Private Placement or Rights/Bonus issue - cannot make a public offer at all."
              },
              {
                "term": "Types of Prospectus",
                "ref": "concept",
                "body": "Red Herring Prospectus: issued before price/quantum of securities is finalized, doesn't include complete particulars of price/number. Shelf Prospectus: filed once for multiple issues over a period (max 1 year) without re-filing each time, used by entities making frequent issues (e.g. NBFCs). Abridged Prospectus: memorandum containing salient features, accompanies every application form."
              },
              {
                "term": "Deemed Prospectus - S.25",
                "ref": "concept",
                "body": "Where a company allots/agrees to allot securities to an intermediary (e.g. issue house) with a view to those securities being offered to the public, any document through which the offer is made to the public is DEEMED a prospectus."
              },
              {
                "term": "Civil liability for misstatement - S.35",
                "ref": "concept",
                "body": "Person who subscribes for securities on faith of a prospectus containing an untrue statement can claim compensation from every director, promoter, and person who authorized the issue - covers loss/damage sustained due to the misstatement."
              },
              {
                "term": "Criminal liability for misstatement - S.34",
                "ref": "concept",
                "body": "Punishable under S.447 (fraud) if prospectus includes any untrue/misleading statement - applies to every person who authorized the issue of such prospectus."
              },
              {
                "term": "Punishment for fraudulently inducing persons to invest - S.36",
                "ref": "concept",
                "body": "Any person who knowingly/recklessly makes a false/misleading statement, promise, or forecast to induce another to invest money is liable for action u/s 447 - separate from misstatement-in-prospectus liability, can apply even without a formal prospectus."
              },
              {
                "term": "Private Placement - S.42",
                "ref": "concept",
                "body": "Offer/invitation to subscribe securities made to a SELECT group of persons (other than by way of public offer) through private placement offer letter. Max 200 persons in aggregate in a financial year (excluding QIBs and employees under ESOP) - if exceeded, deemed to be a public offer requiring full prospectus compliance."
              },
              {
                "term": "Return of allotment - S.39",
                "ref": "concept",
                "body": "Company must file a return of allotment with the Registrar within 30 days of allotment, specifying details of allottees and securities allotted - non-compliance attracts penalty on the company and officers in default."
              },
              {
                "term": "Securities Allotment - minimum subscription requirement",
                "ref": "S.39",
                "body": "No allotment of securities can be made unless the amount stated as MINIMUM SUBSCRIPTION in the prospectus has been received, and the sum payable on application has been received via specified banking channels."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Identifying which prospectus type applies to a given fundraising scenario",
                "howTo": "Match the scenario's stage/characteristics to the correct type: price not yet fixed -> Red Herring; repeated issues over time -> Shelf; accompanying an application form with summary info -> Abridged; offer via intermediary to ultimate public -> Deemed Prospectus."
              },
              {
                "name": "Private placement headcount + exceeding-200 consequence",
                "howTo": "Count offerees excluding QIBs/ESOP employees; if the running aggregate for the financial year exceeds 200, the entire offer is treated as a DEEMED PUBLIC OFFER, triggering full prospectus and public-offer compliance requirements retroactively for that offer."
              }
            ],
            "notes": "High-weightage chapter covering capital-raising mechanics. The prospectus-type classification (Red Herring/Shelf/Abridged/Deemed) and the private-placement 200-person ceiling are the most frequently tested specific facts."
          }
        },
        {
          "id": "p2-c5",
          "name": "Share Capital and Debentures (Companies Act 2013, Ch. IV)",
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
                "term": "Share - definition & nature",
                "ref": "S.2(84)",
                "body": "Share in the share capital of a company, includes stock. Per Borland's Trustee v Steel Bros: share = interest of shareholder measured by sum of money, comprising bundle of mutual covenants per Companies Act + AOA - NOT simply a sum of money."
              },
              {
                "term": "Equity vs Preference share capital",
                "ref": "S.43",
                "body": "Equity: residual claim, voting rights generally proportionate to holding, no fixed dividend. Preference: preferential right to fixed dividend + preferential right to capital repayment on winding up - generally no voting rights except in specified circumstances (e.g. dividend arrears beyond a period, or matters directly affecting preference rights)."
              },
              {
                "term": "Sweat Equity Shares - S.54",
                "ref": "concept",
                "body": "Equity shares issued to directors/employees at a discount or for consideration other than cash, for providing know-how or making available IP rights or value additions - subject to conditions (1-year minimum from commencement of business, specific resolution and disclosure requirements)."
              },
              {
                "term": "Prohibition on issue of shares at a discount - S.53",
                "ref": "concept",
                "body": "Company CANNOT issue shares at a discount, EXCEPT sweat equity shares issued per S.54. Any share issued at a discount (in violation) is VOID, and the company + officers in default are liable to penalty."
              },
              {
                "term": "Securities Premium - S.52",
                "ref": "concept",
                "body": "Premium received on share issue must be transferred to 'Securities Premium Account' - usable ONLY for specified purposes (issuing fully paid bonus shares, writing off preliminary expenses, writing off share/debenture issue expenses or discount, providing premium payable on redemption of preference shares/debentures, buy-back of own shares)."
              },
              {
                "term": "Calls on shares & forfeiture",
                "ref": "concept",
                "body": "Company can call up unpaid amount on shares per AOA terms; if a shareholder fails to pay a call (with notice + reasonable time given), the Board can FORFEIT the shares - forfeiture extinguishes the shareholder's rights but the company can later re-issue the forfeited shares."
              },
              {
                "term": "Variation of shareholders' rights - S.48",
                "ref": "concept",
                "body": "Rights of a class of shareholders can only be varied with consent of holders of 3/4ths of the issued shares of that class (in writing) OR by special resolution passed at a separate meeting of that class - dissenting shareholders (holding >=10% of that class) can apply to Tribunal to cancel the variation."
              },
              {
                "term": "Further issue of share capital (Rights Issue) - S.62",
                "ref": "concept",
                "body": "Existing shareholders get pre-emptive right to be offered new shares in proportion to paid-up capital held, before offering to outsiders - offer open minimum 15 days, max 30 days; shareholder can renounce the offer in favour of another person."
              },
              {
                "term": "Bonus shares - S.63",
                "ref": "concept",
                "body": "Issued out of free reserves, securities premium, or capital redemption reserve (NOT from reserves created by revaluation of assets) - fully paid-up, capitalizing accumulated profits, no cash outflow, must be authorized by AOA and shareholders, and company must not have defaulted on deposit/debenture/statutory dues repayment."
              },
              {
                "term": "Buy-back of shares - S.68",
                "ref": "concept",
                "body": "Max 25% of total paid-up capital + free reserves in a financial year (10% via Board resolution alone; up to 25% needs special resolution); debt-equity ratio post-buyback must not exceed 2:1; buy-back must be completed within 1 year of resolution; cooling-off period of 1 year before another buy-back (with some exceptions for bonus/rights/ESOP issues)."
              },
              {
                "term": "Capital Redemption Reserve (CRR)",
                "ref": "concept",
                "body": "Created when shares are redeemed/bought-back out of free reserves/securities premium (not out of fresh issue proceeds) - amount equal to nominal value of shares redeemed/bought back must be transferred to CRR, usable only for issuing fully paid bonus shares."
              },
              {
                "term": "Debenture Redemption Reserve (DRR)",
                "ref": "S.71",
                "body": "Companies issuing debentures must create DRR out of profits available for dividend - amount and applicability vary by company type/listing status per rules; provides a cushion ensuring funds are earmarked for eventual debenture redemption."
              },
              {
                "term": "Transfer vs Transmission of securities",
                "ref": "comparison",
                "body": "Transfer: voluntary act of the holder (sale/gift) - requires proper instrument of transfer. Transmission: operation of law (death, insolvency, inheritance) - no instrument of transfer needed, company registers based on legal evidence (succession certificate, probate, etc.)."
              },
              {
                "term": "Refusal to register transfer & appeal",
                "ref": "S.58/59",
                "body": "Private company can refuse registration per AOA restrictions; public company has very limited grounds to refuse. Aggrieved person can appeal to the Tribunal (NCLT) within specified time limits against refusal or against transmission disputes."
              }
            ],
            "caseLaws": [
              {
                "case": "New London & Brazilian Bank v. Brockle Bank",
                "point": "A share is not merely a sum of money but an interest measured in money, comprising various contractual rights."
              },
              {
                "case": "Borland's Trustee v. Steel Brothers & Co Ltd",
                "point": "Share is the interest of a shareholder in the company, measured by a sum of money for liability and interest purposes, consisting of mutual covenants among shareholders per AOA."
              }
            ],
            "numericalPatterns": [
              {
                "name": "Buy-back eligibility computation (25% capital+reserves cap, 2:1 debt-equity check)",
                "howTo": "Compute 25% of (paid-up capital + free reserves) as the maximum buy-back value; separately verify post-buyback debt-equity ratio stays at or below 2:1 - BOTH conditions must be satisfied, and exceeding either blocks the buy-back regardless of the other."
              },
              {
                "name": "Rights issue timeline computation",
                "howTo": "From the date of offer, the acceptance window must be minimum 15 days and maximum 30 days - check the given dates against this window to determine if a rights issue notice period was compliant."
              }
            ],
            "notes": "Dense, numerically-relevant chapter (the only one in Corporate Law alongside Buy-back with genuine percentage/ratio calculations). The buy-back 25%/2:1 dual-condition test and the bonus-vs-buy-back source-of-funds distinction (free reserves/securities premium vs CRR) are the highest-yield exam points."
          }
        },
        {
          "id": "p2-c6",
          "name": "Acceptance of Deposits by Companies (Companies Act 2013, Ch. V)",
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
                "term": "Deposit - definition S.2(31)",
                "ref": "concept",
                "body": "Inclusive definition: any receipt of money by way of deposit/loan/any other form by a company, EXCLUDING prescribed categories (per Rules). Repayment is time-bound, can be secured/unsecured, accepted in joint names up to 3 persons, depositor can nominate."
              },
              {
                "term": "Amounts NOT considered deposits",
                "ref": "Rule 2(1)(c)",
                "body": "Key exclusions: amounts from Central/State Govt or guaranteed by them, foreign Govts/banks/multilateral institutions, loans from banking companies/SBI/notified institutions/co-op banks, loans from public financial institutions/insurance companies/scheduled banks, commercial paper proceeds, inter-company deposits (ICD), share application money (if not refunded beyond prescribed period)."
              },
              {
                "term": "Private company - deposits restriction",
                "ref": "S.73",
                "body": "Private company can accept deposits ONLY from its own members (not from public) - subject to conditions, unless it qualifies as a 'start-up' or meets specified exemption criteria allowing limited deposits without full compliance."
              },
              {
                "term": "Eligible Company - deposits from public",
                "ref": "S.76",
                "body": "Only a 'public company' meeting specified net worth/turnover criteria (notified as 'Eligible Company') can accept deposits from the PUBLIC (in addition to members) - subject to credit rating requirement, deposit insurance, and other stringent conditions beyond what applies to member-only deposits."
              },
              {
                "term": "Conditions for acceptance of deposits",
                "ref": "S.73(2)",
                "body": "Requires: circular/advertisement issued to members, deposit of at least 20% of deposits maturing in the financial year in a separate bank account ('deposit repayment reserve account'), deposit insurance (if applicable), certificate of no default in repayment of earlier deposits, providing security (if secured deposits)."
              },
              {
                "term": "Repayment of deposits",
                "ref": "S.74",
                "body": "Where deposits were accepted before commencement of the 2013 Act provisions and remain unpaid, company must file a statement and repay within 1 year from commencement OR the due date, whichever is earlier."
              },
              {
                "term": "Punishment for contravention - S.76A",
                "ref": "concept",
                "body": "Company liable to fine; every officer in default liable to imprisonment up to 7 years AND fine - reflects the seriousness with which deposit-related defaults are treated given the public-money safeguarding objective of this chapter."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [],
            "notes": "Conceptual/recall chapter centered on the deposit-definition exclusion list. The private-vs-eligible-company distinction (members-only vs public deposits) is the most frequently tested conceptual point - exclusion list items (govt sources, banks, ICD) are good quick-recall MCQ material."
          }
        },
        {
          "id": "p2-c7",
          "name": "Registration of Charges (Companies Act 2013, Ch. VI)",
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
                "term": "Charge - definition S.2(16)",
                "ref": "concept",
                "body": "Interest or lien created on property/assets of a company (or undertaking, or both) as SECURITY, includes mortgage - compulsorily registrable under Chapter VI."
              },
              {
                "term": "Fixed Charge",
                "ref": "concept",
                "body": "Charge on SPECIFIC, identified assets of permanent nature (land, building, machinery) at time of creation. Asset CANNOT be sold during the charge period without charge-holder's consent. Vacated only on full repayment."
              },
              {
                "term": "Floating Charge",
                "ref": "concept",
                "body": "Charge on a CLASS of assets (raw material, stock-in-trade, debtors) that fluctuates/changes - company CAN deal with these assets in ordinary course of business; buyer takes free of charge. 'Floats' above ever-changing assets until crystallization."
              },
              {
                "term": "Crystallization of floating charge",
                "ref": "concept",
                "body": "When the charge-holder enforces security (due to breach of terms) OR the company goes into liquidation, the floating charge converts/crystallizes into a FIXED charge on all assets available on that date - company loses the freedom to deal with those assets thereafter."
              },
              {
                "term": "Duty to register charges - S.77",
                "ref": "concept",
                "body": "Every company creating a charge must register particulars with the Registrar within 30 days of creation (extendable with additional fees up to specified further periods, beyond which Central Government condonation may be required)."
              },
              {
                "term": "Effect of non-registration",
                "ref": "S.77",
                "body": "An UNREGISTERED charge is VOID against the liquidator and other creditors of the company - though the underlying debt itself remains valid and recoverable from the company directly, it loses priority/security status against third parties."
              },
              {
                "term": "Satisfaction of charge - S.82/83",
                "ref": "concept",
                "body": "When the secured debt is fully repaid/satisfied, the company must intimate the Registrar within 30 days of the satisfaction date - Registrar then enters a memorandum of satisfaction in the Register of Charges."
              },
              {
                "term": "Register of Charges - S.81/85",
                "ref": "concept",
                "body": "Registrar maintains a Register of Charges for all registered companies (publicly accessible). Company itself must also maintain its OWN register of charges at its registered office, open for inspection."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Distinguishing fixed vs floating charge from an asset description",
                "howTo": "Check: is the asset SPECIFIC/IDENTIFIED and of a PERMANENT nature that the company cannot freely sell (-> Fixed), or is it a CLASS of fluctuating assets the company continues trading with in the ordinary course (-> Floating)? This single test resolves nearly every fact-pattern MCQ in this chapter."
              }
            ],
            "notes": "Short, focused chapter where the fixed-vs-floating distinction (and the crystallization trigger) is essentially the entire syllabus weight. The 30-day registration window and the void-against-liquidator consequence of non-registration are the other commonly tested specific facts."
          }
        },
        {
          "id": "p2-c8",
          "name": "Management and Administration (Companies Act 2013, Ch. VII)",
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
                "term": "Registers to be maintained - S.88",
                "ref": "concept",
                "body": "Register of Members, Register of Debenture-holders, Register of any other Security-holders - maintained at registered office (or elsewhere if Board decides, within India), open for inspection by members/debenture-holders without fee."
              },
              {
                "term": "Register of Significant Beneficial Owners - S.90",
                "ref": "concept",
                "body": "Tracks individuals who ultimately own/control a company indirectly (e.g. through layered corporate structures) even though not directly registered as members - aimed at beneficial-ownership transparency to combat shell-company misuse."
              },
              {
                "term": "Annual Return - S.92",
                "ref": "concept",
                "body": "Every company must file an annual return (Form MGT-7/MGT-7A for OPC/small companies) within 60 days of the AGM (or, if no AGM held, within 60 days of the date it should have been held), containing particulars as of the close of the financial year - signed by a director and Company Secretary (or CS in practice for specified companies)."
              },
              {
                "term": "Annual General Meeting (AGM) - S.96",
                "ref": "concept",
                "body": "Every company (except OPC) must hold an AGM each year - first AGM within 9 months of close of first financial year; subsequent AGMs within 6 months of close of financial year (gap between two AGMs not exceeding 15 months), held during business hours on a day that is not a national holiday."
              },
              {
                "term": "Extraordinary General Meeting (EGM) - S.100",
                "ref": "concept",
                "body": "Called by the Board on its own motion, OR on requisition by members holding specified minimum voting power (10% of paid-up capital with voting rights, or 10% of total voting power in case of company without share capital) - for transacting urgent business between two AGMs."
              },
              {
                "term": "Quorum for meetings - S.103",
                "ref": "concept",
                "body": "Public company: 5 members personally present if total members <=1000; 15 if 1001-5000; 30 if >5000. Private company: 2 members personally present, regardless of total membership."
              },
              {
                "term": "Proxy - S.105",
                "ref": "concept",
                "body": "Member entitled to attend/vote can appoint another person (proxy) to attend/vote on their behalf - proxy need NOT be a member (except for S.8 companies, where proxy must be a member). Proxy form must be deposited 48 hours before the meeting."
              },
              {
                "term": "Voting - methods",
                "ref": "S.107-109",
                "body": "Show of hands (default unless poll/e-voting demanded), Poll (demanded by specified members, gives proportionate weight to shareholding rather than one-member-one-vote), Postal Ballot (for specified businesses, no physical meeting required for that particular resolution), Electronic Voting (mandatory for listed companies and companies with 1000+ members)."
              },
              {
                "term": "Ordinary vs Special Resolution",
                "ref": "S.114",
                "body": "Ordinary: passed by simple majority (votes cast in favour exceed votes cast against). Special: requires 3 times as many votes in favour as against (effectively 75% threshold) - used for more significant matters (e.g. altering MOA/AOA, reducing capital, certain related-party transactions)."
              },
              {
                "term": "Minutes of meetings - S.118",
                "ref": "concept",
                "body": "Must be recorded within 30 days of the meeting's conclusion, in books kept for that purpose, signed/initialed as prescribed - minutes are PRIMA FACIE evidence of the proceedings, though not absolutely conclusive (can be challenged with sufficient contrary evidence)."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Quorum determination from given membership count",
                "howTo": "For a public company, check total members against the 3 thresholds (<=1000/1001-5000/>5000) to pick the correct quorum number (5/15/30); for a private company, it's flatly 2 regardless of total membership - apply directly."
              },
              {
                "name": "AGM timeline compliance check",
                "howTo": "Verify the gap between consecutive AGMs doesn't exceed 15 months AND each AGM falls within 6 months of financial year-end (9 months for the first AGM) - both conditions checked independently against the given dates."
              }
            ],
            "notes": "High-weightage procedural chapter covering corporate governance mechanics. The quorum threshold table and the Ordinary-vs-Special resolution voting-majority distinction are the most frequently tested concrete numbers - build quick recall for both."
          }
        },
        {
          "id": "p2-c9",
          "name": "Declaration and Payment of Dividend (Companies Act 2013, Ch. VIII)",
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
                "term": "Dividend - definition S.2(35)",
                "ref": "concept",
                "body": "Includes any interim dividend. In substance: distribution of profits (or free reserves where permitted) to members - shareholders' return on investment."
              },
              {
                "term": "Dividend declaration process",
                "ref": "concept",
                "body": "Board RECOMMENDS the dividend rate in the Board's Report; shareholders APPROVE it at the AGM via ordinary resolution. Shareholders CANNOT declare dividend at a rate HIGHER than what the Board recommended - they can only approve the same rate or a lower one."
              },
              {
                "term": "Dividend computed on face value, not market value",
                "ref": "concept",
                "body": "Dividend % is always applied to the FACE/NOMINAL value of the share, never the market price - e.g. 20% dividend on a Rs.10 face-value share = Rs.2 per share, regardless of the share trading at Rs.250 in the market."
              },
              {
                "term": "Interim Dividend - S.123(3)/(4)",
                "ref": "concept",
                "body": "Declared by the BOARD (not shareholders) at any time between closure of financial year and the AGM, OR during the financial year itself - sourced from: surplus in P&L account, current year's profits, or profits up to the quarter preceding declaration. If company has incurred a LOSS up to that quarter, the rate of interim dividend cannot exceed the average dividend rate of the preceding 3 financial years."
              },
              {
                "term": "Dividend out of accumulated reserves - conditions",
                "ref": "concept",
                "body": "If profits in a year are inadequate/absent, company can declare dividend out of accumulated profits from previous years (transferred to reserves), subject to prescribed conditions: rate not exceeding average of last 3 years, amount drawn not exceeding 1/10th of paid-up capital+free reserves, and accumulated losses must be set off first."
              },
              {
                "term": "Unpaid/Unclaimed Dividend - S.124",
                "ref": "concept",
                "body": "Dividend not claimed/paid within 30 days of declaration must be transferred to a special 'Unpaid Dividend Account' within 7 days after the 30-day period. Amounts remaining unclaimed for 7 YEARS from transfer to that account must then be transferred to the Investor Education and Protection Fund (IEPF)."
              },
              {
                "term": "Investor Education and Protection Fund (IEPF) - S.125",
                "ref": "concept",
                "body": "Established to credit unclaimed dividends/shares/matured deposits/debentures (after the 7-year unclaimed period) and to utilize funds for investor awareness, education, and protection activities - administered by an IEPF Authority."
              },
              {
                "term": "Punishment for failure to distribute dividend - S.127",
                "ref": "concept",
                "body": "If dividend isn't paid/dispatched within 30 days of declaration, every director knowingly party to the default is punishable - WITH specified exceptions where non-payment is due to operation of law, shareholder instructions, or a dispute regarding entitlement (these are NOT treated as defaults)."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Dividend amount computation from declared rate + face value + shareholding",
                "howTo": "Dividend per share = declared % x FACE VALUE (never market price); total dividend = dividend per share x number of shares held - a simple but frequently mis-applied calculation if market value is mistakenly used instead of face value."
              },
              {
                "name": "Interim dividend rate cap when current-year-to-date shows a loss",
                "howTo": "If the company has incurred losses up to the end of the quarter preceding interim dividend declaration, the interim dividend rate cannot exceed the AVERAGE dividend rate declared by the company in the immediately preceding 3 financial years."
              }
            ],
            "notes": "Moderate-weightage chapter with a few precise numerical rules (the 30-day/7-day/7-year unclaimed-dividend timeline, and the interim-dividend-during-a-loss rate cap). The face-value-not-market-value computation trap is a classic, easy-to-lose-marks-on point worth double-checking in every dividend numerical."
          }
        },
        {
          "id": "p2-c10",
          "name": "Accounts of Companies (Companies Act 2013, Ch. IX)",
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
                "term": "Books of account - S.128",
                "ref": "concept",
                "body": "Must be kept at registered office (or elsewhere in India if Board decides, with ROC intimation within 7 days). Must capture: all money received/spent, all sales/purchases of goods+services, assets+liabilities, and cost items per S.148 if applicable. Preserved for minimum 8 years; non-compliance attracts fine of Rs.50,000 to Rs.5,00,000."
              },
              {
                "term": "Financial Statement - S.2(40)/129",
                "ref": "concept",
                "body": "Includes: Balance Sheet, P&L Account (or Income & Expenditure for not-for-profit), Cash Flow Statement (EXEMPT for OPC/small company/dormant company/certain start-up private companies), Statement of Changes in Equity (if applicable), explanatory notes."
              },
              {
                "term": "Re-opening/Recasting of accounts on Court/Tribunal order - S.130",
                "ref": "concept",
                "body": "Accounts can only be reopened on an order from a COURT OF COMPETENT JURISDICTION or the Tribunal (NCLT) - on application by specified authorities (Central Govt, Income-tax authorities, SEBI, or any other statutory regulatory body), where it's shown accounts were prepared in a fraudulent manner or affairs were mismanaged casting doubt on reliability."
              },
              {
                "term": "Voluntary revision of financial statements - S.131",
                "ref": "concept",
                "body": "Company's directors can voluntarily revise FS or Board's Report for any of the preceding 3 financial years, IF they're satisfied the original wasn't in compliance with S.129/134, but ONLY after obtaining Tribunal approval - revised statements must be filed with Registrar."
              },
              {
                "term": "National Financial Reporting Authority (NFRA) - S.132",
                "ref": "concept",
                "body": "Independent regulatory body for accounting/auditing standards oversight - monitors/enforces compliance with accounting+auditing standards, oversees quality of service of accounting/auditing professions, has powers to investigate professional/other misconduct (overlapping with, but separate from, ICAI's own disciplinary mechanism for certain classes of companies)."
              },
              {
                "term": "Corporate Social Responsibility (CSR) - S.135",
                "ref": "concept",
                "body": "Applies to companies meeting threshold (net worth >=Rs.500 crore, OR turnover >=Rs.1000 crore, OR net profit >=Rs.5 crore in immediately preceding FY) - must spend at least 2% of average net profits of the preceding 3 FYs on CSR activities, constitute a CSR Committee, and report unspent CSR amounts with specific carry-forward/transfer rules to a designated fund if related to ongoing projects."
              },
              {
                "term": "Right of members to copies of FS & filing with Registrar - S.136/137",
                "ref": "concept",
                "body": "Copies of FS (including consolidated FS, auditor's report, etc.) must be sent to members at least 21 days before the AGM. Adopted FS must be FILED with the Registrar within 30 days of the AGM (or, if AGM is delayed/not held, within the prescribed extended timeline with additional fees)."
              },
              {
                "term": "Internal Audit - S.138",
                "ref": "concept",
                "body": "Mandatory for prescribed classes of companies (based on turnover/borrowings/public deposits/outstanding loan thresholds) - internal auditor can be a chartered accountant, cost accountant, or any other professional as the Board may decide; reports to the Board/Audit Committee on internal financial controls and operational effectiveness."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "CSR applicability + 2% spend computation",
                "howTo": "Check if ANY ONE of the 3 threshold conditions (net worth/turnover/net profit) is met for the relevant preceding FY; if yes, compute average net profit of the preceding 3 financial years, then 2% of that average is the minimum mandatory CSR spend for the current year."
              }
            ],
            "notes": "High-weightage chapter combining accounting compliance mechanics with the increasingly-tested CSR provisions. The 3-alternative CSR applicability test (any ONE threshold triggers applicability) and the 2%-of-3-year-average-profit computation are the signature numerical pattern here."
          }
        },
        {
          "id": "p2-c11",
          "name": "Audit and Auditors (Companies Act 2013, Ch. X)",
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
                "term": "First Auditor appointment - S.139(6)/(7)",
                "ref": "concept",
                "body": "Non-government company: Board appoints first auditor within 30 days of incorporation; if Board fails, members appoint within 90 days via EGM. Government company: CAG appoints first auditor within 60 days of incorporation."
              },
              {
                "term": "Subsequent Auditor appointment & tenure",
                "ref": "S.139(1)",
                "body": "Appointed at the FIRST AGM (or the AGM in which appointed), holds office till conclusion of the 6th AGM thereafter (i.e. a 5-year term per appointment cycle, subject to ratification considerations under earlier law now removed - simply continues till 6th AGM unless removed/resigns)."
              },
              {
                "term": "Manner of selection for specified companies",
                "ref": "Rule 3",
                "body": "Companies required to have an Audit Committee (per S.177): Audit Committee recommends auditor candidates to the Board, considering qualifications/experience/any pending disciplinary proceedings - Board then places recommendation before members for appointment."
              },
              {
                "term": "Removal of auditor before term expiry - S.140(1)",
                "ref": "concept",
                "body": "Requires SPECIAL RESOLUTION of the company AND prior approval of the Central Government (application in prescribed form) - auditor must be given a reasonable opportunity of being heard before removal."
              },
              {
                "term": "Resignation of auditor - S.140(2)",
                "ref": "concept",
                "body": "Auditor must file a statement (Form ADT-3) with the Registrar (and, for government companies, also with CAG) within 30 days of resignation, indicating reasons and relevant facts - non-compliance attracts a fine."
              },
              {
                "term": "Eligibility, Qualification & Disqualification - S.141",
                "ref": "concept",
                "body": "Eligible: Chartered Accountant in practice (or firm/LLP of CAs). Disqualified: officer/employee of the company, person holding securities of the company (beyond a nominal prescribed value, with specified relatives), person who is indebted to the company beyond a prescribed amount, person who has provided a guarantee for company's debt beyond a prescribed amount, person whose relative is a director/KMP of the company."
              },
              {
                "term": "Remuneration of Auditor - S.142",
                "ref": "concept",
                "body": "Fixed by the company in general meeting (or as the Board may fix, if so authorized by members) - includes expenses incurred for audit purposes but EXCLUDES any remuneration for other services rendered, which must be separately disclosed."
              },
              {
                "term": "Powers & Duties of Auditor - S.143",
                "ref": "concept",
                "body": "Right of access to books of account/vouchers at all times; right to require information/explanation from officers; duty to report on whether FS give a true and fair view, comply with accounting standards, and on specific matters listed in S.143(3) (e.g. proper books maintained, adequate internal financial controls, qualifications/observations)."
              },
              {
                "term": "Prohibited (non-audit) services - S.144",
                "ref": "concept",
                "body": "Auditor CANNOT render: accounting/bookkeeping services, internal audit, design/implementation of financial information systems, actuarial services, investment advisory/banking services, outsourced financial services, management services - aimed at preserving independence by avoiding self-review threats."
              },
              {
                "term": "Signing of audit reports - S.145",
                "ref": "concept",
                "body": "Only the person appointed as auditor (or, in case of a firm, a partner practicing in India) can sign the audit report and other documents required to be signed/certified by the auditor."
              },
              {
                "term": "Auditor's attendance at AGM - S.146",
                "ref": "concept",
                "body": "Auditor (or authorized representative who is also qualified to be an auditor) is entitled to attend the AGM unless specifically exempted by the company, and entitled to be heard on matters concerning them as auditor."
              },
              {
                "term": "Punishment for contravention - S.147",
                "ref": "concept",
                "body": "Auditor contravening provisions liable to fine; if contravention is willful with intent to deceive, liable to imprisonment AND fine - for fraud-related contraventions, refund of remuneration + compensation for losses may also be ordered."
              },
              {
                "term": "Cost Auditor - S.148",
                "ref": "concept",
                "body": "Central Government can direct specified classes of companies (engaged in production of prescribed goods/services) to maintain cost records and have them audited by a COST ACCOUNTANT in practice - separate appointment process from the financial statement auditor, though similar removal/resignation-type safeguards apply."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "First auditor appointment timeline + fallback",
                "howTo": "Check if Board appointed within 30 days of incorporation; if not, the 90-day member-appointment-via-EGM fallback kicks in automatically - for government companies, substitute CAG's 60-day window instead of the Board's 30-day window."
              },
              {
                "name": "Auditor disqualification check from a given fact pattern",
                "howTo": "Cross-check the proposed auditor (or their relatives/firm) against each S.141 disqualification ground individually (employment, security holding, indebtedness, guarantee, relative as KMP/director) - any single match disqualifies them, regardless of how minor the connection seems."
              }
            ],
            "notes": "Very high-weightage chapter (audit appointment/removal/eligibility mechanics are exam staples). The S.141 disqualification list and the removal-requires-Central-Govt-approval rule are the most frequently tested specific provisions - the disqualification checklist especially rewards careful, ground-by-ground checking rather than a gut-feel answer."
          }
        },
        {
          "id": "p2-c12",
          "name": "Companies Incorporated Outside India (Companies Act 2013, Ch. XXII)",
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
                "term": "Foreign Company - definition S.2(42)",
                "ref": "concept",
                "body": "Any company/body corporate incorporated OUTSIDE India that: (a) has a place of business in India (whether by itself or through an agent, physically or via electronic mode), AND (b) conducts any business activity in India in any other manner."
              },
              {
                "term": "Electronic mode - meaning",
                "ref": "Rule 2(1)(h)",
                "body": "Includes: B2B/B2C transactions and digital supply, accepting deposits/subscriptions in securities from India/Indian citizens, financial settlements/web-based marketing/advisory services, online services (telemarketing/telemedicine/education), related data communication via email/mobile/social media/cloud - broad enough to cover most digital cross-border business presence."
              },
              {
                "term": "IFSC exception",
                "ref": "Explanation to S.2(42)",
                "body": "Electronic offering/subscription/listing of securities specifically within International Financial Services Centres (IFSC, set up under SEZ Act 2005) is NOT construed as 'electronic mode' for foreign-company classification purposes - a deliberate carve-out to support IFSC operations like GIFT City."
              },
              {
                "term": "Application of Act to Foreign Companies - S.379",
                "ref": "concept",
                "body": "S.380-386, 392, 393 apply to ALL foreign companies as defined. If 50%+ of paid-up share capital (equity/preference/combined) is held by Indian citizens/Indian-incorporated companies (singly or in combination), the foreign company is treated as if it were an INDIAN company for purposes of business conducted in India - a 'deemed Indian company' rule to prevent using foreign shells to escape Indian compliance."
              },
              {
                "term": "Documents to be delivered - S.380",
                "ref": "concept",
                "body": "Foreign company must file with Registrar within 30 days of establishing place of business in India: certified copy of charter/MOA-AOA equivalent, full address of registered/principal office, list of directors/secretary with particulars, name+address of authorized person(s) in India to accept service of process."
              },
              {
                "term": "Accounts of Foreign Company - S.381",
                "ref": "concept",
                "body": "Must prepare financial statements relating to its Indian business operations (per Indian accounting standards/Schedule requirements as applicable) and file these with the Registrar annually, in addition to whatever home-country filing obligations exist."
              },
              {
                "term": "Dating and Registration of Prospectus - S.387/389",
                "ref": "concept",
                "body": "Where a foreign company issues a prospectus offering Indian Depository Receipts (IDRs) or securities to the Indian public, the prospectus must be dated and registered with the Registrar before issue - similar safeguards to a domestic prospectus (expert consent provisions, specified particulars) apply."
              },
              {
                "term": "Indian Depository Receipts (IDRs)",
                "ref": "concept",
                "body": "Instrument allowing a foreign company to raise capital from the INDIAN market without directly listing its own shares in India - the underlying foreign shares are held by a depository, and IDRs (representing those shares) are issued/traded in India, essentially the reverse mechanism of ADRs/GDRs."
              },
              {
                "term": "Merger/amalgamation with foreign company - S.234",
                "ref": "concept",
                "body": "Permits cross-border mergers (Indian company merging with a foreign company incorporated in specified jurisdictions, and vice versa) subject to RBI approval and Tribunal (NCLT) sanction - opens pathways for genuine cross-border corporate restructuring beyond the foreign-company compliance chapter itself."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "50% Indian-holding test for 'deemed Indian company' treatment",
                "howTo": "Aggregate paid-up share capital held by Indian citizens + Indian-incorporated companies/bodies corporate (singly or jointly) across equity AND preference; if this combined holding is 50% or more, the foreign company's Indian operations are treated under Indian-company-equivalent compliance standards rather than mere foreign-company filing requirements."
              }
            ],
            "notes": "Niche but recurring chapter given globalization trends in the syllabus. The foreign-company definition's two-pronged test (place of business + business activity, including electronic mode) and the 50% Indian-holding deeming rule are the most conceptually tested points - the IDR mechanism (reverse of ADR/GDR from the FM syllabus) is a good cross-subject linkage point."
          }
        },
        {
          "id": "p2-c13",
          "name": "Interpretation of Statutes, Deeds and Documents",
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
                "term": "Statute - meaning",
                "ref": "concept",
                "body": "Synonymous with 'Act of Parliament' - the written law the legislature establishes directly. In India: enacted law passed by Parliament/State Legislature, after President's/Governor's assent. 'Enacted law' as against 'unenacted/unwritten law'."
              },
              {
                "term": "Document - meaning",
                "ref": "S.3(18) General Clauses Act / S.3 Evidence Act",
                "body": "Any matter written/expressed/described on any substance by letters/figures/marks (or combination), intended/usable for recording that matter. 4 elements: Matter, Record (the mechanical/mutual device used), Substance (the medium), Means (letters/figures/marks/symbols)."
              },
              {
                "term": "Instrument - meaning",
                "ref": "S.2(14) Indian Stamp Act",
                "body": "Includes every document by which any right or liability IS or PURPORTS to be created/transferred/extended/extinguished/recorded - broader than 'deed' (all deeds are instruments, but not all instruments are deeds)."
              },
              {
                "term": "Deed - meaning",
                "ref": "concept",
                "body": "Instrument in writing purporting to effect some LEGAL DISPOSITION - a formal legal document. Subset of 'instrument'."
              },
              {
                "term": "Why interpretation is needed",
                "ref": "concept",
                "body": "Enactments are often capable of more than one meaning/interpretation - the rules of interpretation provide a structured, consistent approach to resolving such ambiguity rather than ad-hoc judicial guessing."
              },
              {
                "term": "Primary Rules of Interpretation",
                "ref": "classification",
                "body": "Literal/Grammatical Rule: words given their plain, ordinary, grammatical meaning - applied first, before any other rule. Mischief Rule (Heydon's Rule): looks at the 'mischief' the statute was intended to remedy, interprets to suppress that mischief. Golden Rule: modification of literal rule - departs from literal meaning ONLY if literal interpretation would lead to absurdity/inconsistency. Harmonious Construction: when two provisions conflict, interpret so both can operate together without one rendering the other redundant."
              },
              {
                "term": "Secondary Rules of Interpretation",
                "ref": "classification",
                "body": "Noscitur a sociis: meaning of an unclear word is gathered from accompanying words in the same context. Ejusdem generis: where specific words are followed by general words, the general words are restricted to the same category as the specific words. Reddendo singula singulis: distributive interpretation - applying respective words to their respective subjects when a sentence has multiple subjects and multiple objects/verbs."
              },
              {
                "term": "Internal Aids to Interpretation",
                "ref": "concept",
                "body": "Found WITHIN the statute itself: Title (long & short), Preamble (states the Act's objective), Headings, Marginal Notes, Definition/Interpretation clauses, Illustrations/Examples, Provisos (carve out exceptions), Explanations (clarify scope), Schedules."
              },
              {
                "term": "External Aids to Interpretation",
                "ref": "concept",
                "body": "Found OUTSIDE the statute: Dictionaries (for undefined ordinary words), other statutes on the same subject (in pari materia), historical background/legislative debates, judicial decisions/precedent, foreign decisions (persuasive, not binding), reports of expert committees that preceded the legislation."
              },
              {
                "term": "Rules of interpretation of Deeds and Documents",
                "ref": "concept",
                "body": "The document/deed must be read as a WHOLE to ascertain the true intent of parties; words given their ordinary/natural meaning unless context indicates a technical/special meaning was intended; if there's ambiguity, construed against the party who drafted it (contra proferentem) in certain contract contexts."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Identifying which interpretation rule applies to a given ambiguous-statute scenario",
                "howTo": "Check sequentially: does plain/literal meaning work without absurdity? If yes, stop there (Literal Rule). If literal reading creates absurdity, check if a minor departure fixes it (Golden Rule). If the issue is about which 'mischief'/problem the law targets, apply Mischief Rule. If two provisions seem to conflict, try Harmonious Construction before assuming one overrides the other."
              }
            ],
            "notes": "Conceptually dense but low-numerical chapter - mostly about correctly NAMING which interpretation rule/aid applies to a given scenario. The Literal-Golden-Mischief-Harmonious sequence (in that rough priority order) and the internal-vs-external aid classification are the recurring MCQ patterns."
          }
        },
        {
          "id": "p2-c14",
          "name": "The Foreign Exchange Management Act, 1999 (FEMA)",
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
                "term": "FEMA - background & objective",
                "ref": "concept",
                "body": "Replaced the more rigid/penal FERA 1973; enacted to FACILITATE external trade/payments and PROMOTE orderly development/maintenance of the forex market - shift from a 'control' regime to a 'management' regime, reflecting India's 1991 liberalization. Effective from 1 June 2000."
              },
              {
                "term": "FEMA structure - 7 chapters",
                "ref": "concept",
                "body": "I: Preliminary (S.1-2), II: Regulation & Management of Foreign Exchange (S.3-9), III: Authorised Person (S.10-12), IV: Contravention & Penalties (S.13-15), V: Adjudication & Appeal (S.16-35), VI: Directorate of Enforcement (S.36-38), VII: Miscellaneous (S.39-49)."
              },
              {
                "term": "Extent and Application - S.1",
                "ref": "concept",
                "body": "Extends to WHOLE of India + all branches/offices/agencies OUTSIDE India that are owned/controlled by a person resident in India + covers contraventions committed OUTSIDE India by any person to whom the Act applies (broad extraterritorial reach via the 'owned or controlled' test)."
              },
              {
                "term": "Person Resident in India - definition",
                "ref": "S.2(v)",
                "body": "Person residing in India for MORE THAN 182 days in the preceding financial year - BUT excludes a person who has gone out of India (or stays outside) for taking up employment/business/vocation/any other purpose indicating an intention to stay outside for an UNCERTAIN period (even if the 182-day test would otherwise be met). Also includes certain entities (offices/branches in India) regardless of the day-count test."
              },
              {
                "term": "Current Account Transaction",
                "ref": "S.2(j)",
                "body": "Transaction OTHER than a capital account transaction - includes: payments for foreign trade/services, interest on loans/income from investments, remittances for living expenses of family abroad, expenses for foreign travel/education/medical treatment."
              },
              {
                "term": "Capital Account Transaction",
                "ref": "S.2(e)",
                "body": "Transaction that ALTERS the assets or liabilities (including contingent liabilities) outside India of persons resident in India, OR assets/liabilities in India of persons resident outside India - e.g. investments, borrowings, acquisition/transfer of immovable property abroad."
              },
              {
                "term": "Regulation of Current Account Transactions - Schedule structure",
                "ref": "concept",
                "body": "Schedule I: transactions TOTALLY PROHIBITED (e.g. remittance for lottery winnings, banned magazines). Schedule II: transactions requiring PRIOR APPROVAL of Government of India for amounts beyond specified limits. Schedule III: transactions requiring PRIOR APPROVAL of RBI beyond specified limits. Below the specified limits in Schedules II/III, transactions are freely permitted through Authorised Dealers."
              },
              {
                "term": "Regulation of Capital Account Transactions",
                "ref": "concept",
                "body": "Generally regulated more strictly than current account transactions - RBI/Central Government jointly prescribe permissible classes of capital account transactions and limits (e.g. Overseas Direct Investment limits, External Commercial Borrowing norms, Liberalised Remittance Scheme limits for resident individuals)."
              },
              {
                "term": "Authorised Person",
                "ref": "S.10",
                "body": "Authorised Dealer, Money Changer, Off-shore Banking Unit, or any other person authorized under S.10(1) to deal in foreign exchange/foreign securities - the regulated intermediary channel through which most permitted forex transactions must flow."
              },
              {
                "term": "Directorate of Enforcement",
                "ref": "S.36",
                "body": "Though RBI exercises overall regulatory control, ENFORCEMENT (investigation of contraventions, search/seizure powers) is specifically entrusted to this separate Directorate - distinct institutional split between regulation (RBI) and enforcement (Directorate of Enforcement)."
              },
              {
                "term": "Adjudication, Compounding, and Appeal mechanism",
                "ref": "concept",
                "body": "Contraventions can be ADJUDICATED by designated authorities; many contraventions can be COMPOUNDED (settled by paying a specified sum, avoiding prolonged litigation); appeals lie to Special Director (Appeals) and further to the Appellate Tribunal for Foreign Exchange - provides a graduated dispute-resolution ladder distinct from ordinary criminal courts."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Classifying a transaction as Current Account vs Capital Account",
                "howTo": "Ask: does the transaction ALTER assets/liabilities outside/inside India (creates/extinguishes an asset or liability, e.g. investment, loan, property purchase) -> Capital Account. Or is it a routine payment/receipt NOT altering the underlying asset/liability position (trade payment, travel expense, interest income) -> Current Account. This single test resolves most classification questions."
              },
              {
                "name": "Determining which Schedule (I/II/III) governs a specific current account transaction",
                "howTo": "Check the transaction against the specific notified list: is it on the absolute PROHIBITION list (Schedule I)? If not, does it need Government approval beyond a threshold (Schedule II) or RBI approval beyond a threshold (Schedule III)? Below the relevant threshold, it's freely permitted via an Authorised Dealer without specific approval."
              }
            ],
            "notes": "High-weightage chapter given its overlap with international business/FDI topics tested elsewhere. The Current-vs-Capital account transaction classification test and the person-resident-in-India definition's 182-day-with-intention-exception nuance are the most frequently tested conceptual points - the residency definition deliberately differs from the Income-tax Act's residency test, a common source of confusion worth flagging explicitly."
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
      "chapters": [
        {
          "id": "p5-a1",
          "name": "Nature, Objective and Scope of Audit",
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
                "term": "Definition of Audit",
                "ref": "concept",
                "body": "Independent examination of financial information of any entity (profit-oriented or not, any size/legal form) conducted with a view to expressing an opinion thereon."
              },
              {
                "term": "Reasonable vs Absolute assurance",
                "ref": "SA 200",
                "body": "Audit provides REASONABLE assurance (high level, but not complete) - never absolute/complete assurance, due to inherent limitations."
              },
              {
                "term": "Objectives of audit per SA 200",
                "ref": "concept",
                "body": "(a) Obtain reasonable assurance financial statements as a whole are free from material misstatement (fraud or error), enabling opinion on compliance with applicable financial reporting framework; (b) Report and communicate per SA requirements."
              },
              {
                "term": "Scope of audit - what it includes",
                "ref": "concept",
                "body": "Coverage of all aspects of entity relevant to FS; reliability & sufficiency of financial information; proper disclosure of financial information; expression of opinion."
              },
              {
                "term": "Scope of audit - what it does NOT include",
                "ref": "concept",
                "body": "Responsibility for preparation/presentation of FS (management's job); duties outside auditor's competence (e.g. physical condition of machinery, civil structure life); authentication of documents; investigation (audit is general/broad, investigation is specific/narrow with a special purpose)."
              },
              {
                "term": "5 Inherent Limitations of Audit",
                "ref": "SA 200",
                "body": "(1) Nature of financial reporting - involves management judgment, (2) Nature of audit procedures - practical/legal limits on evidence (sampling, management may not provide complete info, sophisticated fraud schemes, auditor not document-authentication expert), (3) Not in nature of investigation, (4) Timeliness of reporting - relevance decreases over time, balance needed vs cost, (5) Future events may affect entity adversely, can't be predicted with certainty."
              },
              {
                "term": "Assurance Engagement - 5 elements",
                "ref": "concept",
                "body": "(1) Three-party relationship: practitioner, responsible party, intended users, (2) Appropriate subject matter, (3) Suitable criteria, (4) Sufficient appropriate evidence, (5) Written assurance report in appropriate form."
              },
              {
                "term": "Reasonable vs Limited assurance engagement",
                "ref": "comparison",
                "body": "Reasonable (e.g. Audit): high level of assurance, elaborate/extensive procedures. Limited (e.g. Review): lower/moderate level of assurance, fewer procedures, limited conclusions."
              },
              {
                "term": "Historical vs Prospective financial information",
                "ref": "concept",
                "body": "Historical: about past economic events/conditions. Prospective: based on assumptions about future events (forecast/projection). Audits of prospective info only assure assumptions are 'not unreasonable' - moderate assurance level, since future evidence is itself forward-looking."
              },
              {
                "term": "4 Engagement Standards + Quality Control",
                "ref": "classification",
                "body": "SAs (Standards on Auditing) - historical FS audits. SREs (Review Engagements) - historical FS reviews. SAEs (Assurance Engagements) - non-historical-FS matters (e.g. prospective info, internal controls). SRSs (Related Services) - agreed-upon procedures, compilation engagements (no assurance/opinion given). SQC 1 applies across ALL of the above."
              },
              {
                "term": "Audit vs Investigation",
                "ref": "comparison",
                "body": "Audit: general & broad scope, reasonable assurance, regular/periodic. Investigation: specific & narrow scope (special purpose, e.g. suspected fraud), critical examination, no opinion on true-and-fair view as such."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [],
            "notes": "Foundational/conceptual chapter using ICAI's signature case-study (Sameer/Rohit/Gurpreet) MCQ format. The reasonable-vs-absolute-assurance distinction and the 5 inherent limitations are the most frequently tested points - nearly every other chapter's SAs build on these foundational definitions."
          }
        },
        {
          "id": "p5-a2",
          "name": "Audit Strategy, Audit Planning and Audit Programme",
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
                "term": "SA 300 - Planning an audit",
                "ref": "concept",
                "body": "Objective: plan the audit so it's performed in an effective manner. Planning involves establishing overall audit strategy AND developing a detailed audit plan."
              },
              {
                "term": "Benefits of planning",
                "ref": "list",
                "body": "Devote appropriate attention to important areas; identify/resolve potential problems timely; organize/manage engagement efficiently; select team members with appropriate skills; facilitate direction/supervision/review; coordinate work of experts/others."
              },
              {
                "term": "Audit Strategy vs Audit Plan",
                "ref": "comparison",
                "body": "Strategy: sets the SCOPE, TIMING, DIRECTION of audit, guides development of the more detailed plan. Plan: more DETAILED than strategy, addresses the various matters in the strategy, includes NATURE/TIMING/EXTENT of audit procedures (risk assessment + further procedures)."
              },
              {
                "term": "Audit Programme",
                "ref": "concept",
                "body": "Detailed plan of audit work, listing specific procedures to be performed, by whom, and the time to be spent - serves as both a set of instructions and a record/evidence of work done."
              },
              {
                "term": "Plans are dynamic, not static",
                "ref": "concept",
                "body": "Plans should be based on knowledge of client's business and further developed/revised AS NECESSARY during the course of the audit - new information discovered mid-audit can require re-planning."
              },
              {
                "term": "Delegation and Supervision of audit work",
                "ref": "concept",
                "body": "Quality control requires direction, supervision, and review of work performed by assistants commensurate with their experience - ensures consistent quality across the engagement team."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [],
            "notes": "Short, conceptual, procedural chapter. The Strategy-vs-Plan-vs-Programme three-tier distinction (broad to specific) is the core recurring exam point - always frame answers around that hierarchy."
          }
        },
        {
          "id": "p5-a3",
          "name": "Risk Assessment and Internal Control",
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
                "term": "Audit Risk definition",
                "ref": "SA 200",
                "body": "The risk that the auditor expresses an INAPPROPRIATE opinion when the financial statements are MATERIALLY MISSTATED. Auditor plans/performs audit to reduce this risk to an acceptably low level, never to zero."
              },
              {
                "term": "Audit Risk components",
                "ref": "formula",
                "body": "Audit Risk = Risk of Material Misstatement (Inherent Risk x Control Risk) x Detection Risk. Inherent Risk: susceptibility of an assertion to misstatement before controls. Control Risk: risk that internal controls won't prevent/detect/correct a misstatement timely. Detection Risk: risk auditor's procedures won't detect an existing misstatement."
              },
              {
                "term": "Materiality concept",
                "ref": "concept",
                "body": "Misstatements (including omissions) are material if they could reasonably influence economic decisions of users. Judged in light of surrounding circumstances - magnitude AND nature both matter."
              },
              {
                "term": "Understanding the entity and its environment",
                "ref": "SA 315",
                "body": "Required to identify/assess risks of material misstatement: industry/regulatory/external factors, nature of entity (operations, ownership, governance, investments), accounting policy selection/application, objectives/strategies/related business risks, measurement & review of financial performance."
              },
              {
                "term": "5 Components of Internal Control (COSO framework)",
                "ref": "concept",
                "body": "(1) Control Environment - tone at the top, (2) Entity's Risk Assessment Process, (3) Information System & Communication, (4) Control Activities (authorization, performance reviews, segregation of duties, physical controls), (5) Monitoring of Controls."
              },
              {
                "term": "Not all controls are relevant to audit",
                "ref": "concept",
                "body": "Auditor exercises professional judgment on which controls (individually/combined) are relevant to assessing RMM and designing further procedures - operational efficiency controls (e.g. unrelated to FS reliability) may be irrelevant to the audit."
              },
              {
                "term": "Risks requiring special audit consideration",
                "ref": "concept",
                "body": "Significant risks: risks of material misstatement that require SPECIAL audit consideration due to nature, degree of judgment involved, or unusual/non-routine nature of transactions - require a response that goes beyond standard substantive procedures alone."
              },
              {
                "term": "Automated environment - key IT-related risks",
                "ref": "concept",
                "body": "Inaccurate processing of data, unauthorized access leading to improper changes to data/programs, potential loss of data, IT personnel gaining access privileges beyond necessary, unauthorized changes to systems/programs, failure to make necessary system changes."
              },
              {
                "term": "Types of controls in automated environment",
                "ref": "classification",
                "body": "General IT Controls (GITC): apply across all systems (access security, change management, IT operations). Application Controls: specific to individual applications (input/processing/output controls, validation checks, edit checks)."
              },
              {
                "term": "Auditor's responses to assessed risks",
                "ref": "SA 330",
                "body": "Overall responses (e.g. emphasizing professional skepticism, assigning more experienced staff, providing more supervision) + specific responses (nature/timing/extent of further audit procedures tailored to the assessed risk at the assertion level)."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Identifying audit risk component from a scenario",
                "howTo": "Classify the described risk as Inherent (something about the business/transaction itself, before any controls), Control (a gap or failure in the client's internal control design/operation), or Detection (related to auditor's own procedure choice/sample/timing) - this 3-way classification is the recurring MCQ pattern."
              }
            ],
            "notes": "High-weightage, conceptually dense chapter - the Audit Risk formula (IR x CR x DR) and the COSO 5-component internal control framework are the two pillars. The automated-environment IT risk/controls section is increasingly emphasized given digital audit trends - don't skip it as a 'minor' addition."
          }
        },
        {
          "id": "p5-a4",
          "name": "Audit Evidence",
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
                "term": "Sufficiency vs Appropriateness of evidence",
                "ref": "SA 500",
                "body": "Sufficiency: QUANTITY of evidence (affected by auditor's risk assessment and quality of evidence itself). Appropriateness: QUALITY of evidence - comprises Relevance + Reliability."
              },
              {
                "term": "Reliability hierarchy of audit evidence",
                "ref": "concept",
                "body": "More reliable: evidence obtained from independent external sources; auditor's own direct knowledge/observation; original documents (vs photocopies); written evidence (vs oral). Internal evidence is more reliable when related internal controls are effective."
              },
              {
                "term": "Financial Statement Assertions",
                "ref": "concept",
                "body": "Classes of transactions/events: Occurrence, Completeness, Accuracy, Cutoff, Classification. Account balances: Existence, Rights & Obligations, Completeness, Valuation & Allocation. Presentation & disclosure: Occurrence+Rights&Obligations, Completeness, Classification & Understandability, Accuracy & Valuation."
              },
              {
                "term": "Audit procedures to obtain evidence",
                "ref": "list",
                "body": "Inspection (of records/tangible assets), Observation (of a process/procedure), External Confirmation, Recalculation, Reperformance, Analytical Procedures, Inquiry (alone is insufficient, must be corroborated)."
              },
              {
                "term": "Using the work of Internal Auditors",
                "ref": "SA 610",
                "body": "External auditor evaluates: objectivity of internal audit function, technical competence, due professional care, communication effectiveness - then decides whether/to what extent to use their work, but retains FULL responsibility for the audit opinion regardless."
              },
              {
                "term": "Audit Sampling",
                "ref": "SA 530",
                "body": "Application of procedures to LESS than 100% of population items, such that all sampling units have a chance of selection, to provide a basis for conclusions about the entire population. Methods: Statistical (random/systematic, uses probability theory) vs Non-statistical (judgmental selection)."
              },
              {
                "term": "Sampling Risk vs Non-Sampling Risk",
                "ref": "concept",
                "body": "Sampling risk: conclusion based on a sample differs from conclusion if entire population were tested (inherent to sampling itself). Non-sampling risk: auditor reaches erroneous conclusion for reasons unrelated to sample size (e.g. wrong procedure used, misinterpreted evidence)."
              },
              {
                "term": "Specific items - SA 501",
                "ref": "concept",
                "body": "Inventory: attendance at physical counting mandatory if material, unless impracticable. Litigation & claims: inquiry of management + legal counsel, written representations. Segment information: understand methods used + consistency, perform analytical procedures."
              },
              {
                "term": "External Confirmations - SA 505",
                "ref": "concept",
                "body": "Positive confirmation: requests respondent to reply in ALL cases (whether they agree or not) - provides more reliable evidence. Negative confirmation: respondent replies ONLY if they disagree - lower reliability, used when risk is low and population is large with similar small balances."
              },
              {
                "term": "Opening Balances - SA 510",
                "ref": "concept",
                "body": "For initial audit engagements: obtain sufficient appropriate evidence that opening balances don't contain misstatements materially affecting current FS, and that prior period closing balances were correctly brought forward (or restated where appropriate)."
              },
              {
                "term": "Related Parties - SA 550",
                "ref": "concept",
                "body": "Risk of material misstatement is HIGHER for related party transactions (may not be conducted at arm's length, may be deliberately concealed by management) - requires specific risk assessment procedures and heightened professional skepticism."
              },
              {
                "term": "Analytical Procedures - SA 520",
                "ref": "concept",
                "body": "Evaluations of financial information through analysis of plausible relationships among both financial and non-financial data - includes investigation of identified fluctuations/relationships inconsistent with other relevant information or differing significantly from expected values."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Classifying evidence by reliability hierarchy",
                "howTo": "Rank given evidence sources by independence (external > internal), directness (auditor's own observation > client-provided), and form (written > oral, original > photocopy) to determine which provides the strongest evidence in a given scenario."
              },
              {
                "name": "Choosing positive vs negative confirmation method",
                "howTo": "Assess: is assessed risk LOW + population LARGE with small homogeneous balances + low expected error rate -> negative confirmation acceptable; otherwise default to positive confirmation for stronger evidence."
              }
            ],
            "notes": "Core, high-weightage chapter underlying most practical audit work. The assertions framework (which assertion does which audit procedure test) and the SA 500/501/505/520/530/550/610 mini-standards are frequently tested as 'identify the applicable SA' questions - build a quick mental index of SA number to topic."
          }
        },
        {
          "id": "p5-a5",
          "name": "Audit of Items of Financial Statements",
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
                "term": "Assertion-based audit approach",
                "ref": "concept",
                "body": "Every line item in financial statements carries implied assertions; auditor designs specific procedures to test each relevant assertion for that line item, building up overall opinion from individual judgments."
              },
              {
                "term": "Balance Sheet caption assertions",
                "ref": "classification",
                "body": "Existence, Rights & Obligations, Completeness, Valuation, Presentation & Disclosure - tested for every asset/liability/equity balance (e.g. trade receivables: existence = confirm balance is real; valuation = check recoverability/provision for doubtful debts)."
              },
              {
                "term": "Income Statement caption assertions",
                "ref": "classification",
                "body": "Occurrence, Completeness, Cut-off, Measurement, Presentation & Disclosure - tested for revenue/expense items (e.g. sales: occurrence = transaction actually happened; cut-off = recorded in the correct period)."
              },
              {
                "term": "Schedule III framework reference",
                "ref": "concept",
                "body": "Indian companies' financial statements must follow Schedule III of the Companies Act 2013 format - auditor checks classification/presentation compliance against this framework as part of disclosure assertion testing."
              },
              {
                "term": "Key audit procedures by balance sheet item (illustrative)",
                "ref": "concept",
                "body": "Property/Plant/Equipment: physical verification, title deed check, depreciation recalculation. Trade Receivables: confirmation, subsequent receipt tracing, ageing analysis for provisioning. Inventory: physical count attendance, valuation method (lower of cost/NRV) verification. Trade Payables: confirmation, completeness via subsequent payment/invoice tracing."
              },
              {
                "term": "Key audit procedures by P&L item (illustrative)",
                "ref": "concept",
                "body": "Revenue: cut-off testing around year-end, agreement to dispatch/delivery documents, analytical review against prior year/budget. Expenses: vouching to supporting documents, completeness check via accrual review, related-party expense scrutiny."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Mapping a given balance sheet/P&L item to its relevant assertions and audit procedures",
                "howTo": "For any named line item, first identify which assertions are MOST at risk for that specific item (e.g. inventory - existence & valuation are higher-risk than rights&obligations), then design/select procedures that specifically target those higher-risk assertions rather than generic checking."
              }
            ],
            "notes": "Practical application chapter linking the assertions framework (from Audit Evidence chapter) to specific real financial statement captions. Best studied as a continuation of Chapter 4 rather than standalone - the assertions vocabulary must already be solid before this chapter clicks."
          }
        },
        {
          "id": "p5-a6",
          "name": "Audit Documentation",
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
                "term": "Definition - SA 230",
                "ref": "concept",
                "body": "Record of audit procedures performed, relevant audit evidence obtained, and conclusions the auditor reached. Also called 'working papers' or 'work papers'."
              },
              {
                "term": "Objective of audit documentation",
                "ref": "concept",
                "body": "Provide (a) sufficient appropriate record of basis for auditor's report, AND (b) evidence that audit was planned/performed in accordance with SAs and legal/regulatory requirements."
              },
              {
                "term": "Purposes of audit documentation",
                "ref": "list",
                "body": "Assist engagement team to plan/perform audit; assist direction/supervision/review responsibilities; enable accountability; retain record of continuing significance to future audits; enable quality control reviews (SQC 1); enable external inspections."
              },
              {
                "term": "Ownership of audit documentation",
                "ref": "concept",
                "body": "Working papers are the PROPERTY OF THE AUDITOR (unless law/regulation provides otherwise) - the auditor may, at discretion, make portions/extracts available to the client, but is not obligated to do so."
              },
              {
                "term": "Form, content and extent of documentation",
                "ref": "concept",
                "body": "Depends on factors like: size/complexity of entity, nature of audit procedures, identified risks, significance of evidence, audit methodology/tools used. Should be sufficient to enable an EXPERIENCED auditor (with no prior connection to the audit) to understand work performed and conclusions reached."
              },
              {
                "term": "Assembly of final audit file",
                "ref": "concept",
                "body": "Must be completed within 60 days after the date of auditor's report. After assembly, documents cannot be deleted/discarded before end of retention period; additions are permitted but must be documented as to when/by whom/why, without changing the original information."
              },
              {
                "term": "Retention period for audit documentation",
                "ref": "concept",
                "body": "Minimum 7 years from the date of the auditor's report (or, if later, the date of the group auditor's report) - aligned broadly with statutory record-keeping requirements."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [],
            "notes": "Short, procedural/recall chapter. The ownership rule (auditor owns the papers, not the client) and the 60-day assembly deadline + 7-year retention period are the most commonly tested specific facts."
          }
        },
        {
          "id": "p5-a7",
          "name": "Completion and Review",
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
                "term": "Subsequent Events - SA 560",
                "ref": "concept",
                "body": "Events occurring between date of FS and date of auditor's report, AND facts becoming known to auditor after the date of auditor's report. Two types: Adjusting events (require FS adjustment, e.g. settling a year-end legal claim for less than provided) and Non-adjusting events (only disclosure needed)."
              },
              {
                "term": "Auditor's responsibility for subsequent events",
                "ref": "SA 560",
                "body": "Between FS date and report date: ACTIVE duty to perform procedures to identify such events. After report date but before FS issued: if auditor becomes aware of facts, discuss with management, determine if FS needs amendment. After FS issued: generally no obligation, but if facts existed at report date and would have caused a different opinion, specific remedial action required."
              },
              {
                "term": "Going Concern - SA 570",
                "ref": "concept",
                "body": "Fundamental accounting assumption that entity will continue operations for the foreseeable future (at least 12 months from period end/approval date), without intention/necessity of liquidation or ceasing operations. Auditor evaluates appropriateness of management's use of this assumption."
              },
              {
                "term": "Indicators of going concern issues",
                "ref": "list",
                "body": "Financial: negative net worth/working capital, fixed-term borrowings approaching maturity without realistic refinancing, adverse key financial ratios, substantial operating losses. Operating: loss of key management/market/franchise, labour difficulties, shortage of important supplies. Other: non-compliance with capital/statutory requirements, pending legal proceedings that may result in unsatisfiable claims, changes in law/policy adversely affecting the entity."
              },
              {
                "term": "Evaluation of Misstatements - SA 450",
                "ref": "concept",
                "body": "Auditor accumulates misstatements identified during the audit (other than clearly trivial ones), communicates them to management on a timely basis, and evaluates whether UNCORRECTED misstatements (individually or in aggregate) are material to the FS as a whole before forming the final opinion."
              },
              {
                "term": "Written Representations - SA 580",
                "ref": "concept",
                "body": "A written statement by management provided to confirm certain matters or support other audit evidence - obtained from management with appropriate responsibilities for FS, doesn't substitute for other evidence the auditor could reasonably expect to be available, but acts as necessary corroboration where no other evidence exists (e.g. management's future intentions)."
              },
              {
                "term": "Communication with Those Charged with Governance - SA 260",
                "ref": "concept",
                "body": "Auditor communicates: auditor's responsibilities re: the FS audit, planned scope/timing of audit, significant findings, auditor's independence (where relevant). Purpose: establish effective two-way communication, helps auditor obtain relevant information, assists governance body in oversight."
              },
              {
                "term": "Communicating Deficiencies in Internal Control - SA 265",
                "ref": "concept",
                "body": "Auditor communicates SIGNIFICANT deficiencies in internal control identified during the audit, in writing, to those charged with governance on a timely basis - distinguished from merely communicating to management for minor/operational deficiencies."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Classifying a subsequent event as adjusting vs non-adjusting",
                "howTo": "Ask: did the condition giving rise to the event EXIST at the balance sheet date (just came to light later) - if yes, adjust the FS; if the event arose entirely AFTER the balance sheet date (a genuinely new condition), only disclose, don't adjust."
              },
              {
                "name": "Identifying going concern risk indicators from a fact pattern",
                "howTo": "Sort the given facts into financial/operating/other categories per the standard indicator list; assess cumulative severity (a single minor indicator rarely triggers a going-concern qualification, but multiple compounding indicators do) before concluding on the appropriateness of the going-concern assumption."
              }
            ],
            "notes": "Tightly clustered set of 'final stage' SAs (560/570/450/580/260/265) that all occur near the end of the audit cycle. The adjusting-vs-non-adjusting subsequent events test and the going-concern indicator checklist are the two highest-yield recurring patterns."
          }
        },
        {
          "id": "p5-a8",
          "name": "Audit Report",
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
                "term": "SA 700 - Forming an Opinion and Reporting",
                "ref": "concept",
                "body": "Auditor evaluates whether FS as a whole are free from material misstatement, considering qualitative aspects of accounting practices (not just quantitative), and whether FS adequately disclose significant accounting policies/their selection/application."
              },
              {
                "term": "Basic elements of audit report",
                "ref": "list",
                "body": "Title, Addressee, Auditor's Opinion (with paragraph heading), Basis for Opinion, Key Audit Matters (if applicable), Responsibilities of Management/those charged with governance, Auditor's Responsibilities for the Audit, Other Reporting Responsibilities (legal/regulatory), Signature, Auditor's Address, Date of Report."
              },
              {
                "term": "Types of Modified Opinions - SA 705",
                "ref": "concept",
                "body": "Qualified Opinion: misstatements are material but NOT pervasive (or auditor unable to obtain sufficient evidence, but possible effects not pervasive). Adverse Opinion: misstatements are material AND pervasive. Disclaimer of Opinion: unable to obtain sufficient appropriate evidence AND possible effects could be both material and pervasive."
              },
              {
                "term": "Pervasive - meaning",
                "ref": "concept",
                "body": "Effects on FS that: (a) are not confined to specific elements/accounts/items, (b) if confined, represent/could represent a substantial proportion of the FS, or (c) in relation to disclosures, are fundamental to users' understanding of the FS."
              },
              {
                "term": "Key Audit Matters - SA 701",
                "ref": "concept",
                "body": "Matters that, in auditor's professional judgment, were of MOST SIGNIFICANCE in the audit of current period FS - selected from matters communicated to those charged with governance. Mandatory for listed entities; communicates WHY the matter was significant and HOW it was addressed in the audit."
              },
              {
                "term": "Emphasis of Matter & Other Matter Paragraphs - SA 706",
                "ref": "concept",
                "body": "Emphasis of Matter: draws attention to a matter ALREADY appropriately presented/disclosed in FS, fundamental to users' understanding - does NOT modify the opinion. Other Matter: relates to matters OTHER than those in the FS, relevant to users' understanding of the audit/auditor's responsibilities/report itself."
              },
              {
                "term": "Comparative Information - SA 710",
                "ref": "concept",
                "body": "Corresponding Figures: prior period amounts are an integral part of CURRENT period FS, opinion ONLY on current period (prior period figures referred to only in relation to current period). Comparative Financial Statements: prior period amounts are COMPLETE FS in their own right, opinion expressed individually on each period presented."
              },
              {
                "term": "Using the work of Another Auditor - SA 600",
                "ref": "concept",
                "body": "Principal auditor (auditing the parent/main FS) uses work of another auditor (auditing a component, e.g. branch/subsidiary) - principal auditor determines how the other auditor's work affects the audit, may need to perform additional procedures, but division of responsibility may be disclosed in the report."
              },
              {
                "term": "Joint Audit - SA 299",
                "ref": "concept",
                "body": "Two or more auditors are appointed to conduct audit of the same entity, jointly responsible for the work as a whole, but each joint auditor is responsible ONLY for the work allocated to them (not jointly/severally liable for work properly allocated to and performed by another joint auditor, except in specific circumstances)."
              },
              {
                "term": "Companies Act 2013 reporting requirements",
                "ref": "concept",
                "body": "S.143 prescribes specific matters the auditor must report on for companies (e.g. whether proper books of account maintained, whether FS comply with accounting standards, observations/comments having adverse effect on functioning, etc.) - in addition to the standard SA 700 opinion."
              },
              {
                "term": "CARO 2020 (Companies Auditor's Report Order)",
                "ref": "concept",
                "body": "Additional reporting requirements applicable to most companies (with specified exemptions for small/private companies meeting certain thresholds) - covers matters like fixed assets, inventory, loans/investments, statutory dues, fraud, going concern, etc., as a SEPARATE annexure to the main audit report."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Selecting the correct modified opinion type from a fact pattern",
                "howTo": "Two-step test: (1) is the issue a MISSTATEMENT or a SCOPE LIMITATION (inability to obtain evidence)? (2) is the effect MATERIAL ONLY or MATERIAL+PERVASIVE? Misstatement+material-only -> Qualified. Misstatement+pervasive -> Adverse. Scope limitation+material-only -> Qualified. Scope limitation+material+pervasive -> Disclaimer."
              },
              {
                "name": "Distinguishing Emphasis of Matter from a qualification",
                "howTo": "Check: is the matter ALREADY correctly disclosed in the FS itself? If yes and auditor just wants to highlight it for user attention, it's Emphasis of Matter (opinion unmodified). If the disclosure itself is missing/inadequate, that's a misstatement requiring a modified opinion instead."
              }
            ],
            "notes": "Highest-weightage chapter in the whole paper alongside Risk Assessment - the modified-opinion decision tree (materiality x pervasiveness, misstatement vs scope-limitation) is the single most tested numerical/scenario-based pattern in all of Auditing. Master that 2x2 grid cold."
          }
        },
        {
          "id": "p5-a9",
          "name": "Special Features of Audit of Different Types of Entities",
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
                "term": "Government Audit & CAG",
                "ref": "Article 148-151",
                "body": "Comptroller and Auditor General of India (CAG) is the 'Supreme Audit Institution of India' - audits receipts/expenditure of Union & States, bodies substantially financed by Union/State revenues, and Government companies. Appointed by President, removable only like a Supreme Court judge (ensuring independence). Reports submitted to President/Governor, laid before Parliament/State Legislature."
              },
              {
                "term": "Consolidated Fund of India - Article 266",
                "ref": "concept",
                "body": "Consists of all revenue from direct/indirect taxes, all loans raised by Govt of India, and all loan repayments received - no expenditure can be incurred from it without Parliamentary/Legislative approval (via Demand for Grants)."
              },
              {
                "term": "Local Bodies audit",
                "ref": "concept",
                "body": "Control over expenditure exercised primarily through budgetary control and internal checks; objectives include ensuring legality/propriety of expenditure, financial regularity, and that funds were used for the purposes for which they were sanctioned."
              },
              {
                "term": "NGO/Charitable Institutions audit considerations",
                "ref": "concept",
                "body": "Constitution of organisation (trust deed/society registration/Section 8 company), specific grant/donor conditions on fund utilization, verification that funds were used for the stated charitable objects, compliance with FCRA (if receiving foreign contributions)."
              },
              {
                "term": "Educational Institutions, Hospitals, Clubs, Hotels, Cinema halls - constitution check",
                "ref": "concept",
                "body": "Common thread across all these special entities: auditor must FIRST verify the constitution/governing document (trust deed, society bye-laws, partnership deed, etc.) since permissible income/expenditure and reporting obligations flow directly from that founding document."
              },
              {
                "term": "Hire Purchase and Leasing Company audit",
                "ref": "concept",
                "body": "Special considerations: verification of hire purchase/lease agreements, proper accounting treatment of finance vs operating leases, verification of installments receivable, repossession of goods on default, provision for bad/doubtful hire purchase debts."
              },
              {
                "term": "LLP (Limited Liability Partnership) audit",
                "ref": "concept",
                "body": "Governed by LLP Act 2008; audit mandatory if turnover exceeds Rs.40 lakh OR contribution exceeds Rs.25 lakh; auditor verifies LLP Agreement provisions (profit-sharing, capital contribution) similar to how a company auditor checks AOA/MOA."
              },
              {
                "term": "Co-operative Society audit",
                "ref": "concept",
                "body": "Governed by respective State Co-operative Societies Act; auditor specifically examines compliance with the Act's provisions, bye-laws, and verifies that society's funds were utilized for purposes specified in the Act/bye-laws - often a STATUTORY auditor appointed under the cooperative law itself, not just the Companies Act framework."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [],
            "notes": "Wide-coverage, low-numerical 'special entities' chapter - mostly a checklist of which document to check FIRST (constitution/governing deed) for each entity type, then what special considerations follow from it. Good for quick recall marks rather than deep numerical practice."
          }
        },
        {
          "id": "p5-a10",
          "name": "Audit of Banks",
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
                "term": "Types of banks in India",
                "ref": "classification",
                "body": "Commercial Banks (deposits+advances, most widespread), Regional Rural Banks (RRBs, rural focus), Co-operative Banks (registered under Cooperative Societies Act, function like commercial banks), Development Banks/Term-Lending Institutions, Small Finance Banks, Payment Banks (limited scope - no lending)."
              },
              {
                "term": "Legal framework for bank audit",
                "ref": "concept",
                "body": "Banking Regulation Act 1949, RBI Act 1934, Companies Act 2013 (for banking companies), RBI master circulars/guidelines on income recognition, asset classification, provisioning."
              },
              {
                "term": "Non-Performing Asset (NPA) classification",
                "ref": "concept",
                "body": "An asset becomes NPA when interest/installment of principal remains OVERDUE for a period exceeding 90 days (for term loans). Categories: Sub-standard (overdue <=12 months as NPA), Doubtful (overdue >12 months as NPA), Loss Assets (identified as virtually unrecoverable, full value loss but not yet written off)."
              },
              {
                "term": "Income recognition policy for NPAs",
                "ref": "concept",
                "body": "Interest on NPA accounts should NOT be recognized as income on accrual basis - recognized only upon actual realization (cash basis), reversing any unrealized interest already credited to P&L."
              },
              {
                "term": "Provisioning norms (illustrative)",
                "ref": "concept",
                "body": "Standard assets: general provision (small %). Sub-standard: higher % (secured vs unsecured portions differ). Doubtful: graduated % increasing with age of doubtful classification, plus 100% on unsecured portion. Loss assets: 100% provision required."
              },
              {
                "term": "Bank audit approach - key audit areas",
                "ref": "concept",
                "body": "Advances (largest and riskiest asset - verify NPA classification accuracy, provisioning adequacy, documentation of security), Investments (held-to-maturity/available-for-sale/held-for-trading classification & valuation), Interest income/expense (accrual accuracy, NPA-related reversals), Contingent liabilities (LCs, guarantees, derivatives)."
              },
              {
                "term": "Core Banking Solution (CBS) environment",
                "ref": "concept",
                "body": "Centralized IT platform enabling real-time, any-branch transactions - auditor must understand the IT control environment (access controls, data integrity, audit trail) given the scale and automation of bank transaction processing."
              },
              {
                "term": "Statutory Central Auditors (SCA) vs Branch Auditors",
                "ref": "concept",
                "body": "Large banks appoint SCAs (consolidate the overall bank audit opinion) and separate branch auditors (for individual branches, especially larger ones) - SCA relies on branch auditors' reports similarly to how a principal auditor uses another auditor's work (SA 600 logic)."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "NPA classification + provisioning computation from an overdue-period fact pattern",
                "howTo": "Determine number of days/months an account has been overdue; classify per the 90-day NPA threshold and subsequent sub-standard/doubtful/loss categories based on how long it's stayed in NPA status; apply the relevant provisioning percentage to the appropriate secured/unsecured split of the outstanding amount."
              }
            ],
            "notes": "Highest-weightage specialized-entity chapter given how frequently bank audit numericals (NPA classification + provisioning) appear in exams. The 90-day NPA threshold and the sub-standard/doubtful/loss progression are the load-bearing facts - get comfortable computing provisioning from a simple overdue-period scenario."
          }
        },
        {
          "id": "p5-a11",
          "name": "Ethics and Terms of Audit Engagements",
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
                "term": "Meaning of Ethics",
                "ref": "concept",
                "body": "Moral principles governing a person's behaviour/conduct of activity - branch of knowledge dealing with moral principles, intrinsic to the individual, a 'state of mind' to act per moral principles."
              },
              {
                "term": "Need for Professional Ethics in auditing",
                "ref": "concept",
                "body": "Society/government/clients/investors place tremendous trust in CA services; the purpose of assurance engagements is to enhance user confidence, which REQUIRES users to trust the person providing the service - hence the heightened ethical requirement vs ordinary commerce."
              },
              {
                "term": "Fundamental Principles of Professional Ethics",
                "ref": "concept",
                "body": "Integrity, Objectivity, Professional Competence & Due Care, Confidentiality, Professional Behaviour - the 5 pillars all CAs must uphold regardless of specific engagement type."
              },
              {
                "term": "Independence of Auditors - 2 forms",
                "ref": "concept",
                "body": "Independence of MIND: state of mind permitting expression of a conclusion without being affected by influences that compromise professional judgment (actual independence). Independence in APPEARANCE: avoidance of facts/circumstances significant enough that a reasonable third party would conclude integrity/objectivity/professional skepticism had been compromised (perceived independence)."
              },
              {
                "term": "5 Threats to Independence",
                "ref": "classification",
                "body": "Self-Interest Threat: financial/other interest influencing judgment (e.g. holding shares in client). Self-Review Threat: evaluating own prior work/judgment (e.g. auditing financial statements you helped prepare). Advocacy Threat: promoting a client's position to the point objectivity is compromised. Familiarity Threat: long/close relationship leading to being too sympathetic/trusting. Intimidation Threat: being deterred from acting objectively due to actual/perceived pressures (including attempts at undue influence)."
              },
              {
                "term": "Safeguards to Independence",
                "ref": "concept",
                "body": "Created by the profession/legislation/regulation (education/training requirements, CPE, professional standards, monitoring/disciplinary processes) AND safeguards within the firm's own systems/procedures (quality control policies, rotation of senior personnel, involving another professional to review work, discussing ethical issues with those charged with governance)."
              },
              {
                "term": "Professional Skepticism",
                "ref": "concept",
                "body": "An attitude that includes a QUESTIONING MIND, being alert to conditions that may indicate possible misstatement due to error/fraud, and a critical assessment of audit evidence - must be maintained throughout the audit, not just when fraud is specifically suspected."
              },
              {
                "term": "SA 210 - Agreeing the Terms of Audit Engagement",
                "ref": "concept",
                "body": "Auditor's objective: accept/continue an audit engagement only when the basis upon which it is to be performed has been AGREED, through (a) establishing whether preconditions for an audit are present, and (b) confirming a common understanding between auditor and management/governance of the terms of engagement."
              },
              {
                "term": "Preconditions for an Audit",
                "ref": "SA 210",
                "body": "Use of an ACCEPTABLE financial reporting framework in preparation of FS, AND agreement of management that it acknowledges/understands its responsibility for (i) preparation of FS per that framework, (ii) internal control necessary for FS free from material misstatement, (iii) providing the auditor with access to all relevant information/personnel."
              },
              {
                "term": "Engagement Letter - key contents",
                "ref": "SA 210",
                "body": "Objective & scope of audit, auditor's responsibilities, management's responsibilities, identification of applicable financial reporting framework, reference to expected form/content of reports to be issued - serves as the WRITTEN record of the agreed terms, reducing risk of misunderstanding."
              },
              {
                "term": "SQC 1 - basic overview",
                "ref": "concept",
                "body": "Establishes a firm's responsibility to have a SYSTEM OF QUALITY CONTROL covering: leadership responsibilities for quality, ethical requirements, acceptance/continuance of client relationships, human resources, engagement performance, and monitoring - applies firm-wide, not per-engagement."
              },
              {
                "term": "SA 220 - basic overview",
                "ref": "concept",
                "body": "Quality control AT THE ENGAGEMENT LEVEL (as opposed to SQC 1's firm-wide scope) - covers engagement partner's responsibility for overall quality, relevant ethical requirements, acceptance/continuance decisions specific to that client, assignment of engagement teams, direction/supervision/review, and engagement quality control review for certain engagements."
              }
            ],
            "caseLaws": [],
            "numericalPatterns": [
              {
                "name": "Identifying the specific threat to independence from a scenario",
                "howTo": "Match the described situation to ONE of the 5 threat categories based on its core mechanism: financial/personal stake -> Self-Interest; reviewing own earlier work -> Self-Review; defending client's position publicly -> Advocacy; long-standing close relationship -> Familiarity; pressure/coercion -> Intimidation. Many MCQs test this exact classification."
              }
            ],
            "notes": "High-weightage chapter that's both conceptually foundational (independence/ethics underpin the entire profession) and frequently scenario-tested. The 5-threats-to-independence classification is the single most repeated MCQ pattern in this chapter - practice matching scenarios to threat type until it's automatic."
          }
        }
      ]
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
                "point": "Firm value = market price of common stock; reflects all participants' judgment on future earnings,timing, risk, dividend policy."
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
