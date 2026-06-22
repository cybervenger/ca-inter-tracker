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
                  chapters: []
          }
            ]
};
