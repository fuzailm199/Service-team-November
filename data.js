// Auto-generated from November 2026 raw audit sheets. Do not hand-edit — regenerate from source data instead.
const PARAM_LABELS = {"uq": "Understanding the Query", "res": "Resolution & Info", "sys": "System Updates", "sla": "SLA Breach"};
const PARAM_COLORS = {"uq": "#ea580c", "res": "#dc2626", "sys": "#7c3aed", "sla": "#2563eb"};
const TEAM_META = {
  "sas": {
    "label": "SAS",
    "fullName": "SAS Team",
    "desc": "LTE / 15-day exchange coupon codes, quality check &amp; deduction entry, LTE&nbsp;\u2192&nbsp;LTB (Life Time Exchange to Life Time Buyback)",
    "accent": "#c8a846"
  },
  "intl": {
    "label": "INTL",
    "fullName": "INTL Team",
    "desc": "Order approval, profile balance confirmation, and repair",
    "accent": "#2563eb"
  },
  "mto": {
    "label": "MTO",
    "fullName": "MTO Team",
    "desc": "Customization pricing, sharing product-customization details, and resolving customization queries",
    "accent": "#7c3aed"
  },
  "service": {
    "label": "Service",
    "fullName": "Service Team",
    "desc": "Order cancellation &amp; refund, ITR (Internal Transfer of barcode between stores), and barcode reserve / unreserve",
    "accent": "#16a34a"
  }
};
const TEAMS = {
  "sas": {
    "order": [
      "jaisurya",
      "yokitha",
      "sadik_thamby",
      "sonali",
      "santhoshini",
      "zamak",
      "talha",
      "mubeena",
      "ahsan",
      "gulam_dastagir",
      "dipthi_dhiran",
      "devesh",
      "ronak",
      "rakshan"
    ],
    "agents": {
      "jaisurya": {
        "name": "Jaisurya",
        "cq": 92,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 3,
        "params": {
          "uq": 1,
          "res": 1,
          "sys": 0,
          "sla": 1
        },
        "aois": [
          {
            "cat": "uq",
            "label": "Understanding the Query",
            "text": "Need more intervention on mail with clear information and proper responsed to update on mails."
          },
          {
            "cat": "res",
            "label": "Resolution & Info",
            "text": "Proper details should be ask in first responsed with clear information & Incomplete mails / delayed mails responsed."
          },
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          }
        ],
        "cases": [
          {
            "query": "Ticket ##SR-2181719",
            "score": 100,
            "comment": "JC has understand the mail shared the LTE value correct ."
          },
          {
            "query": "Ticket ##SR-2181719",
            "score": 80,
            "comment": "JC has not check the mail gold coin offer dint inform 10 % dedcution again store ask post that 10 % has been deducted and LTE has been saved ."
          },
          {
            "query": "Ticket #narendrans002@gmail.com",
            "score": 100,
            "comment": "JC has understand the coupon and rejected the coupon code with in SLA."
          },
          {
            "query": "Ticket #tapariaratan@gmail.com",
            "score": 88,
            "comment": "JC has understand the coupon and apprvoed correct coupon value but delay in process."
          }
        ],
        "paramCaseMap": {
          "uq": [
            1
          ],
          "res": [
            1
          ],
          "sys": [],
          "sla": [
            3
          ]
        },
        "initials": "JA",
        "color": "#0891b2"
      },
      "yokitha": {
        "name": "Yokitha",
        "cq": 93,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 2,
        "params": {
          "uq": 0,
          "res": 0,
          "sys": 1,
          "sla": 1
        },
        "aois": [
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          },
          {
            "cat": "sys",
            "label": "System Updates",
            "text": "Need proper update in reversal entry / profile adjustment on priority. / While saving any mail entry, need proper resolution on time priority."
          }
        ],
        "cases": [
          {
            "query": "Ticket #sehar.rabia19@gmail.com",
            "score": 88,
            "comment": "JC has understand the coupon approved the coupon in delay to proceed further."
          },
          {
            "query": "Ticket ##SR-2189054",
            "score": 100,
            "comment": "JC has understand the mail shared the LTE value correct with in SLA."
          },
          {
            "query": "Ticket #poonam65175@gmail.com",
            "score": 85,
            "comment": "JC has understand the mail but doesn't no the system update CTC coupon has to be given one time coupon."
          },
          {
            "query": "Ticket #adi.adityadani@gmail.com",
            "score": 100,
            "comment": "JC has understand the coupon apprvoed the correct coupon value with in SLA."
          }
        ],
        "paramCaseMap": {
          "uq": [],
          "res": [],
          "sys": [
            2
          ],
          "sla": [
            0
          ]
        },
        "initials": "YO",
        "color": "#16a34a"
      },
      "sadik_thamby": {
        "name": "Sadik Thamby",
        "cq": 88,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 3,
        "params": {
          "uq": 1,
          "res": 0,
          "sys": 0,
          "sla": 2
        },
        "aois": [
          {
            "cat": "uq",
            "label": "Understanding the Query",
            "text": "Need more intervention on mail with clear information and proper responsed to update on mails."
          },
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          }
        ],
        "cases": [
          {
            "query": "Ticket ##SR-2199481",
            "score": 100,
            "comment": "JC has understand the mail saved the LTE value correct with in SLA."
          },
          {
            "query": "Ticket ##SR-2182334",
            "score": 90,
            "comment": "JC has understand the mail clear informatiom has to be give as product value is above 50,000 rs so kindly send the product to fc for valuation."
          },
          {
            "query": "Ticket #priyanka.patil2511@gmail.com",
            "score": 88,
            "comment": "JC has understand the mail Approved the correct coupon code but in delay."
          },
          {
            "query": "Ticket #edwinignatius562@gmail.com",
            "score": 75,
            "comment": "JC has understand the mail rejected the coupon code too much delay ."
          }
        ],
        "paramCaseMap": {
          "uq": [
            1
          ],
          "res": [],
          "sys": [],
          "sla": [
            2,
            3
          ]
        },
        "initials": "ST",
        "color": "#0d9488"
      },
      "sonali": {
        "name": "Sonali",
        "cq": 88,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 3,
        "params": {
          "uq": 0,
          "res": 1,
          "sys": 0,
          "sla": 2
        },
        "aois": [
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          },
          {
            "cat": "res",
            "label": "Resolution & Info",
            "text": "Proper details should be ask in first responsed with clear information & Incomplete mails / delayed mails responsed."
          }
        ],
        "cases": [
          {
            "query": "Ticket ##SR-2192798",
            "score": 88,
            "comment": "JC has understand the mail shared the LTE value in delay to proceed further."
          },
          {
            "query": "Ticket ##SR-2199851",
            "score": 100,
            "comment": "JC has understand the mail shared the LTE value and saved in correct profile within SLA."
          },
          {
            "query": "Ticket ##SR-2179709",
            "score": 90,
            "comment": "JC has understand the mail forget to ask customer is handovering the gold coin or not in first response to avoid multi response."
          },
          {
            "query": "Ticket ##SR-2192894",
            "score": 75,
            "comment": "JC has understand the mail shared the LTE value too much delay to proceed further."
          }
        ],
        "paramCaseMap": {
          "uq": [],
          "res": [
            2
          ],
          "sys": [],
          "sla": [
            0,
            3
          ]
        },
        "initials": "SO",
        "color": "#c8a846"
      },
      "santhoshini": {
        "name": "Santhoshini",
        "cq": 91,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 3,
        "params": {
          "uq": 0,
          "res": 0,
          "sys": 0,
          "sla": 3
        },
        "aois": [
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          }
        ],
        "cases": [
          {
            "query": "Ticket ##SR-2200205",
            "score": 100,
            "comment": "JC has understand the mail shared the LTE value correct and saved in correct profile with in SLA."
          },
          {
            "query": "Ticket ##SR-2189652",
            "score": 88,
            "comment": "JC has understand the mail too much delay in sharing the LTE ."
          },
          {
            "query": "Ticket #arjunkumarsingh1970@gmail.com",
            "score": 88,
            "comment": "JC has understand the coupon approved the coupon code in delay for 5 % to proceed further."
          },
          {
            "query": "Ticket #sikka.chetna@gmail.com",
            "score": 88,
            "comment": "JC has understand the mail rejected the coupon code in delay and have to mention the correct coupon value while rejecting the coupon."
          }
        ],
        "paramCaseMap": {
          "uq": [],
          "res": [],
          "sys": [],
          "sla": [
            1,
            2,
            3
          ]
        },
        "initials": "SA",
        "color": "#ea580c"
      },
      "zamak": {
        "name": "Zamak",
        "cq": 91,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 2,
        "params": {
          "uq": 0,
          "res": 0,
          "sys": 0,
          "sla": 2
        },
        "aois": [
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          }
        ],
        "cases": [
          {
            "query": "Ticket #aamirmajeed0511@gmail.com",
            "score": 100,
            "comment": "JC has understand the coupon of replacment approved the correct coupon within SLA."
          },
          {
            "query": "Ticket #vishalbhandare21@gmail.com",
            "score": 88,
            "comment": "JC has understand the mail shared the coupon code in delay to proceed further."
          },
          {
            "query": "Ticket ##SR-2183543",
            "score": 100,
            "comment": "JC has understand the mail shared the LTE value correct with in SLA."
          },
          {
            "query": "Ticket ##SR-2195189",
            "score": 75,
            "comment": "JC has understand the mail shared the price break up too much delay."
          }
        ],
        "paramCaseMap": {
          "uq": [],
          "res": [],
          "sys": [],
          "sla": [
            1,
            3
          ]
        },
        "initials": "ZA",
        "color": "#7c3aed"
      },
      "talha": {
        "name": "Talha",
        "cq": 91,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 2,
        "params": {
          "uq": 0,
          "res": 0,
          "sys": 0,
          "sla": 2
        },
        "aois": [
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          }
        ],
        "cases": [
          {
            "query": "Ticket ##SR-2179183",
            "score": 100,
            "comment": "JC has understand the mail shared the LTE value correct with in SLA."
          },
          {
            "query": "Ticket ##SR-2180138",
            "score": 75,
            "comment": "JC has understand the mail shared the LTE value too much delay."
          },
          {
            "query": "Ticket #preethinagore@gmail.com",
            "score": 100,
            "comment": "JC has understand the coupon approved the coupon code with in SLA to Proceed further."
          },
          {
            "query": "Ticket #sreemoyeemitra1976@gmail.com",
            "score": 88,
            "comment": "JC has understand the coupon approved the coupon code in delay for birthday coupon to proceed further."
          }
        ],
        "paramCaseMap": {
          "uq": [],
          "res": [],
          "sys": [],
          "sla": [
            1,
            3
          ]
        },
        "initials": "TA",
        "color": "#2563eb"
      },
      "mubeena": {
        "name": "Mubeena",
        "cq": 91,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 3,
        "params": {
          "uq": 0,
          "res": 0,
          "sys": 0,
          "sla": 3
        },
        "aois": [
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          }
        ],
        "cases": [
          {
            "query": "Ticket ##SR-2188797",
            "score": 100,
            "comment": "JC has understand the mail save the LTB value in correct customer profile."
          },
          {
            "query": "Ticket ##SR-2183158",
            "score": 88,
            "comment": "JC has understand the mail share the correct LTE value but in delay."
          },
          {
            "query": "Ticket #shrutiarya.2388@gmail.com",
            "score": 88,
            "comment": "JC has understand the mail rejected the coupon code in delay to proceed further."
          },
          {
            "query": "Ticket #tiwarisheetal425@gmail.com",
            "score": 88,
            "comment": "JC has understand the mail rejected the coupon code in delay to proceed further."
          }
        ],
        "paramCaseMap": {
          "uq": [],
          "res": [],
          "sys": [],
          "sla": [
            1,
            2,
            3
          ]
        },
        "initials": "MU",
        "color": "#dc2626"
      },
      "ahsan": {
        "name": "Ahsan",
        "cq": 88,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 2,
        "params": {
          "uq": 0,
          "res": 0,
          "sys": 0,
          "sla": 2
        },
        "aois": [
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          }
        ],
        "cases": [
          {
            "query": "Ticket ##SR-2179241",
            "score": 100,
            "comment": "JC has understand the mail shared the LTE value correct and saved within SLA."
          },
          {
            "query": "Ticket ##SR-2192673",
            "score": 75,
            "comment": "JC has understand the mail shared the price break up too much delay."
          },
          {
            "query": "Ticket ##SR-2190398",
            "score": 75,
            "comment": "JC has understand the mail too much delay in conversion entry need clarification ."
          },
          {
            "query": "Ticket #angelmehra24@gmail.com",
            "score": 100,
            "comment": "JC has understand the coupon approved anniversary and XP with in SLA."
          }
        ],
        "paramCaseMap": {
          "uq": [],
          "res": [],
          "sys": [],
          "sla": [
            1,
            2
          ]
        },
        "initials": "AH",
        "color": "#b8860b"
      },
      "gulam_dastagir": {
        "name": "Gulam Dastagir",
        "cq": 88,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 3,
        "params": {
          "uq": 1,
          "res": 0,
          "sys": 0,
          "sla": 2
        },
        "aois": [
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          },
          {
            "cat": "uq",
            "label": "Understanding the Query",
            "text": "Need more intervention on mail with clear information and proper responsed to update on mails."
          }
        ],
        "cases": [
          {
            "query": "Ticket ##SR-2184718",
            "score": 88,
            "comment": "JC has understand the mail shared the Price break correct but in delay."
          },
          {
            "query": "Ticket ##SR-2188675",
            "score": 100,
            "comment": "JC has understand the mail shared the LTE value correct and saved correct."
          },
          {
            "query": "Ticket ##SR-2188778",
            "score": 90,
            "comment": "JC has understand the mail but not shared the LTE value in first response . while sharing the LTE value JC can ask number conformatiom screen short."
          },
          {
            "query": "Ticket ##SR-2198073",
            "score": 75,
            "comment": "JC has understand the mail too much delay in sharing the LTE value ."
          }
        ],
        "paramCaseMap": {
          "uq": [
            2
          ],
          "res": [],
          "sys": [],
          "sla": [
            0,
            3
          ]
        },
        "initials": "GD",
        "color": "#0ea5e9"
      },
      "dipthi_dhiran": {
        "name": "Dipthi Dhiran",
        "cq": 91,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 2,
        "params": {
          "uq": 0,
          "res": 0,
          "sys": 0,
          "sla": 2
        },
        "aois": [
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          }
        ],
        "cases": [
          {
            "query": "Ticket ##SR-2198127",
            "score": 100,
            "comment": "JC has understand the mail shared the LTE value correct and saved with in SLA."
          },
          {
            "query": "Ticket ##SR-2177062",
            "score": 75,
            "comment": "JC has understand the mail too much delay in saving the LTE value to proceed further."
          },
          {
            "query": "Ticket #priyanka5kevin@gmail.com",
            "score": 100,
            "comment": "JC has understand the coupon apprvoed with in SLA."
          },
          {
            "query": "Ticket #tanvisingh564@gmail.com",
            "score": 88,
            "comment": "JC has understand the coupon rejected to much delay to proceed further."
          }
        ],
        "paramCaseMap": {
          "uq": [],
          "res": [],
          "sys": [],
          "sla": [
            1,
            3
          ]
        },
        "initials": "DD",
        "color": "#a855f7"
      },
      "devesh": {
        "name": "Devesh",
        "cq": 88,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 2,
        "params": {
          "uq": 0,
          "res": 0,
          "sys": 0,
          "sla": 2
        },
        "aois": [
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          }
        ],
        "cases": [
          {
            "query": "Ticket ##SR-2190579",
            "score": 75,
            "comment": "JC has understand the mail too much delay in sharing the LTE to proceed further."
          },
          {
            "query": "Ticket ##SR-2183370",
            "score": 75,
            "comment": "JC has understand the mail too much delay Conversion to proceed further."
          },
          {
            "query": "Ticket #rashmi4210@gmail.com",
            "score": 100,
            "comment": "JC has understand the coupon and apprvoed correct coupon value with in SLA."
          },
          {
            "query": "Ticket #aish6799@gmail.com",
            "score": 100,
            "comment": "JC has understand the coupon apprvoed correct coupon value with in SLA."
          }
        ],
        "paramCaseMap": {
          "uq": [],
          "res": [],
          "sys": [],
          "sla": [
            0,
            1
          ]
        },
        "initials": "DE",
        "color": "#0891b2"
      },
      "ronak": {
        "name": "Ronak",
        "cq": 82,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 4,
        "params": {
          "uq": 0,
          "res": 1,
          "sys": 0,
          "sla": 3
        },
        "aois": [
          {
            "cat": "res",
            "label": "Resolution & Info",
            "text": "Proper details should be ask in first responsed with clear information & Incomplete mails / delayed mails responsed."
          },
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          }
        ],
        "cases": [
          {
            "query": "Ticket ##SR-2177658",
            "score": 78,
            "comment": "JC has understand the mail shared the wrong LTE value without deducting the gold coin amount same has been rectify in delay."
          },
          {
            "query": "Ticket ##SR-2177900",
            "score": 75,
            "comment": "JC has understand the mail too much delay in reply to create the RTN request ."
          },
          {
            "query": "Ticket ##SR-2182273",
            "score": 75,
            "comment": "JC has understand the mail too much delay in reply to share th LTE value ."
          },
          {
            "query": "Ticket #sanjeevkumar9492@gmail.com",
            "score": 100,
            "comment": "JC has understand the birthday coupon apprvoed correct value with in SLA."
          }
        ],
        "paramCaseMap": {
          "uq": [],
          "res": [
            0
          ],
          "sys": [],
          "sla": [
            0,
            1,
            2
          ]
        },
        "initials": "RO",
        "color": "#16a34a"
      },
      "rakshan": {
        "name": "Rakshan",
        "cq": 80,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 4,
        "params": {
          "uq": 1,
          "res": 0,
          "sys": 0,
          "sla": 3
        },
        "aois": [
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          },
          {
            "cat": "uq",
            "label": "Understanding the Query",
            "text": "Need more intervention on mail with clear information and proper responsed to update on mails."
          }
        ],
        "cases": [
          {
            "query": "Ticket ##SR-2176773",
            "score": 100,
            "comment": "JC has understand the mail share the correct LTB value but mention LTE in comments make sure next time you mention the correct remarks to avoid confusions to store."
          },
          {
            "query": "Ticket ##SR-2194535",
            "score": 88,
            "comment": "JC has understand the mail too much delay in reply for LTE gifted."
          },
          {
            "query": "Ticket #tijare.purva@gmail.com",
            "score": 75,
            "comment": "JC has understand the coupon rejected the coupon too much delay to proceed further."
          },
          {
            "query": "Ticket #venkateshp@titan.co.in",
            "score": 55,
            "comment": "JC has not check the attachment for diffrence coupon rejected the coupon too much delay ."
          }
        ],
        "paramCaseMap": {
          "uq": [
            3
          ],
          "res": [],
          "sys": [],
          "sla": [
            1,
            2,
            3
          ]
        },
        "initials": "RA",
        "color": "#0d9488"
      }
    }
  },
  "mto": {
    "order": [
      "nancy",
      "riya_vipul",
      "shoaib",
      "muzaffar",
      "abubackker",
      "yusuf"
    ],
    "agents": {
      "nancy": {
        "name": "Nancy",
        "cq": 98,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 1,
        "params": {
          "uq": 0,
          "res": 1,
          "sys": 0,
          "sla": 0
        },
        "aois": [
          {
            "cat": "res",
            "label": "Resolution & Info",
            "text": "Inaccurate commitment on product page and mails."
          }
        ],
        "cases": [
          {
            "query": "Ticket #1760114",
            "score": 100,
            "comment": "JC has understand the mail shared the pricing correct with in SLA."
          },
          {
            "query": "Ticket #1760148",
            "score": 100,
            "comment": "JC has understand the mail shared the pricing correct with in SLA."
          },
          {
            "query": "Ticket #1755403",
            "score": 100,
            "comment": "JC has understand the mail shared the pricing correct with in SLA."
          },
          {
            "query": "Ticket #1751696",
            "score": 90,
            "comment": "JC has understand the mail shared the wrong image 0.30 CT actual has to be sent of 0.35 CT."
          }
        ],
        "paramCaseMap": {
          "uq": [],
          "res": [
            3
          ],
          "sys": [],
          "sla": []
        },
        "initials": "NA",
        "color": "#0891b2"
      },
      "riya_vipul": {
        "name": "Riya Vipul",
        "cq": 95,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 1,
        "params": {
          "uq": 0,
          "res": 0,
          "sys": 0,
          "sla": 1
        },
        "aois": [
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every product page query or mails or SKU should be responded to on time SLA / if not it will be marked down."
          }
        ],
        "cases": [
          {
            "query": "Ticket #1762579",
            "score": 100,
            "comment": "JC has understand the mail shared the pricing correct with in SLA."
          },
          {
            "query": "Ticket #1763125",
            "score": 100,
            "comment": "JC has understand the mail shared the pricing correct with in SLA."
          },
          {
            "query": "Ticket #1756067",
            "score": 100,
            "comment": "JC has understand the mail shared the pricing correct with in SLA."
          },
          {
            "query": "Ticket ##SR-2190615",
            "score": 80,
            "comment": "JC has understand the mail too much delay in reply to check with vendor ."
          }
        ],
        "paramCaseMap": {
          "uq": [],
          "res": [],
          "sys": [],
          "sla": [
            3
          ]
        },
        "initials": "RV",
        "color": "#16a34a"
      },
      "shoaib": {
        "name": "Shoaib",
        "cq": 94,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 2,
        "params": {
          "uq": 1,
          "res": 1,
          "sys": 0,
          "sla": 0
        },
        "aois": [
          {
            "cat": "uq",
            "label": "Understanding the Query",
            "text": "Understand and share pricing break up with proper updates within before 20mins"
          },
          {
            "cat": "res",
            "label": "Resolution & Info",
            "text": "Inaccurate commitment on product page and mails."
          }
        ],
        "cases": [
          {
            "query": "Ticket #1754637",
            "score": 100,
            "comment": "JC has understand the mail shared the correct pricing within SLA."
          },
          {
            "query": "Ticket #1756067",
            "score": 100,
            "comment": "JC has understand the mail asked the missing details to update the price ."
          },
          {
            "query": "Ticket ##SR-2176813",
            "score": 100,
            "comment": "JC has understand the mail shared the sketch to store and confirm CAD team to create the SKU ."
          },
          {
            "query": "Ticket #1725082",
            "score": 75,
            "comment": "JC has understand the mail shared the incorrect pricing in making charges same has been rectify while sharing SKU."
          }
        ],
        "paramCaseMap": {
          "uq": [
            3
          ],
          "res": [
            3
          ],
          "sys": [],
          "sla": []
        },
        "initials": "SH",
        "color": "#0d9488"
      },
      "muzaffar": {
        "name": "Muzaffar",
        "cq": 95,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 1,
        "params": {
          "uq": 0,
          "res": 0,
          "sys": 0,
          "sla": 1
        },
        "aois": [
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every product page query or mails or SKU should be responded to on time SLA / if not it will be marked down."
          }
        ],
        "cases": [
          {
            "query": "Ticket #1756204",
            "score": 100,
            "comment": "JC has understand the mail informed store one time tag product order cannot be taken within SLA."
          },
          {
            "query": "Ticket ##SR-2188089",
            "score": 100,
            "comment": "JC has understand the mail regaring Customization of losse solitaire updated with in SLA."
          },
          {
            "query": "Ticket ##SR-2184187",
            "score": 100,
            "comment": "JC has understand the mail share the pricing correct with in SLA."
          },
          {
            "query": "Ticket ##SR-2176935",
            "score": 80,
            "comment": "JC has understand the mail to much delay in finding the sku and highlighting to uploading team."
          }
        ],
        "paramCaseMap": {
          "uq": [],
          "res": [],
          "sys": [],
          "sla": [
            3
          ]
        },
        "initials": "MU",
        "color": "#c8a846"
      },
      "abubackker": {
        "name": "Abubackker",
        "cq": 92,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 6,
        "params": {
          "uq": 4,
          "res": 2,
          "sys": 0,
          "sla": 0
        },
        "aois": [
          {
            "cat": "uq",
            "label": "Understanding the Query",
            "text": "Understand the product page and give proper responses with clear information."
          },
          {
            "cat": "uq",
            "label": "Understanding the Query",
            "text": "Understand and share the proper information to CAD / Imaging or Sketch team on priority."
          },
          {
            "cat": "uq",
            "label": "Understanding the Query",
            "text": "Understand and share pricing break up with proper updates within before 20mins"
          },
          {
            "cat": "res",
            "label": "Resolution & Info",
            "text": "Inaccurate commitment on product page and mails."
          }
        ],
        "cases": [
          {
            "query": "Ticket #1762993",
            "score": 100,
            "comment": "JC has understand the mail informed coading team to create SKU with in SLA."
          },
          {
            "query": "Ticket ##SR-2183562",
            "score": 70,
            "comment": "JC has not understand the mail have ask for dummy SKU JC closed by updating noted another JC has given dummy SKU."
          },
          {
            "query": "Ticket #1756067",
            "score": 100,
            "comment": "JC has understand the mail shared the incorrect pricing in making charges same has been rectify by another JC."
          },
          {
            "query": "Ticket #1725082",
            "score": 100,
            "comment": "JC has understand the mail shared the incorrect pricing in making charges same has been rectify by another JC."
          }
        ],
        "paramCaseMap": {
          "uq": [
            1,
            2,
            3
          ],
          "res": [
            2,
            3
          ],
          "sys": [],
          "sla": []
        },
        "initials": "AB",
        "color": "#ea580c"
      },
      "yusuf": {
        "name": "Yusuf",
        "cq": 91,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 2,
        "params": {
          "uq": 1,
          "res": 1,
          "sys": 0,
          "sla": 0
        },
        "aois": [
          {
            "cat": "uq",
            "label": "Understanding the Query",
            "text": "Understand and share pricing break up with proper updates within before 20mins"
          },
          {
            "cat": "res",
            "label": "Resolution & Info",
            "text": "Inaccurate commitment on product page and mails."
          }
        ],
        "cases": [
          {
            "query": "Ticket #1752254",
            "score": 100,
            "comment": "JC has understand the mail shared the pricing correct with in SLA."
          },
          {
            "query": "Ticket #1756894",
            "score": 100,
            "comment": "JC has understand the mail shared the pricing correct with in SLA."
          },
          {
            "query": "Ticket #1725082",
            "score": 100,
            "comment": "JC has understand the mail shared the pricing correct within SLA."
          },
          {
            "query": "Ticket #1756928",
            "score": 65,
            "comment": "JC has understand the mail shared the incorrect price same has been rectify next day for diamond need clarification."
          }
        ],
        "paramCaseMap": {
          "uq": [
            3
          ],
          "res": [
            3
          ],
          "sys": [],
          "sla": []
        },
        "initials": "YU",
        "color": "#7c3aed"
      }
    }
  },
  "intl": {
    "order": [
      "suhail",
      "mustaq",
      "jaffreen"
    ],
    "agents": {
      "suhail": {
        "name": "Suhail",
        "cq": 95,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 2,
        "params": {
          "uq": 0,
          "res": 0,
          "sys": 1,
          "sla": 1
        },
        "aois": [
          {
            "cat": "sys",
            "label": "System Updates",
            "text": "Take ownership on mail tickets and give resolution / Unnecessarily transferring the mail to irrelevant team."
          },
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          }
        ],
        "cases": [
          {
            "query": "Ticket ##INC-2173619",
            "score": 100,
            "comment": "JC has understand the mail closed the ticket without reply but tag to legal team need clarification."
          },
          {
            "query": "Ticket ##SR-2174257",
            "score": 100,
            "comment": "JC has understand the mail check the balance and approved the order with in SLA ."
          },
          {
            "query": "Ticket ##SR-2173326",
            "score": 100,
            "comment": "JC has understand the mail check the balance and approved the order with in SLA ."
          },
          {
            "query": "Ticket ##SR-2174321",
            "score": 80,
            "comment": "JC has understand the mail share the breakup splitup too much delay."
          }
        ],
        "paramCaseMap": {
          "uq": [],
          "res": [],
          "sys": [
            0
          ],
          "sla": [
            3
          ]
        },
        "initials": "SU",
        "color": "#0891b2"
      },
      "mustaq": {
        "name": "Mustaq",
        "cq": 92,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 2,
        "params": {
          "uq": 0,
          "res": 0,
          "sys": 0,
          "sla": 2
        },
        "aois": [
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          }
        ],
        "cases": [
          {
            "query": "Ticket ##SR-2186161",
            "score": 100,
            "comment": "JC has understand the mail shared the correct profile balance within SLA."
          },
          {
            "query": "Ticket ##SR-2183225",
            "score": 100,
            "comment": "JC has understand the mail check the SBI discount and approved the order."
          },
          {
            "query": "Ticket ##SR-2184038",
            "score": 90,
            "comment": "JC has understand the mail check the balance and approved the order in delay ."
          },
          {
            "query": "Ticket ##SR-2184124",
            "score": 80,
            "comment": "JC has understand the mail to much delay in sharing the profile balance ."
          }
        ],
        "paramCaseMap": {
          "uq": [],
          "res": [],
          "sys": [],
          "sla": [
            2,
            3
          ]
        },
        "initials": "MU",
        "color": "#16a34a"
      },
      "jaffreen": {
        "name": "Jaffreen",
        "cq": 95,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 2,
        "params": {
          "uq": 0,
          "res": 0,
          "sys": 0,
          "sla": 2
        },
        "aois": [
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          }
        ],
        "cases": [
          {
            "query": "Ticket ##SR-2178505",
            "score": 100,
            "comment": "JC has understand the mail check the profile balance and updated correct balance with in SLA."
          },
          {
            "query": "Ticket ##SR-2183864",
            "score": 100,
            "comment": "JC has understand the mail check the profile balance and updated correct balance with in SLA."
          },
          {
            "query": "Ticket ##SR-2176562",
            "score": 90,
            "comment": "JC has understand the mail check the balance not able to approve highlighted to Tech team in delay."
          },
          {
            "query": "Ticket ##SR-2185155",
            "score": 90,
            "comment": "JC has understand the mail check the balance and approved the order in delay ."
          }
        ],
        "paramCaseMap": {
          "uq": [],
          "res": [],
          "sys": [],
          "sla": [
            2,
            3
          ]
        },
        "initials": "JA",
        "color": "#0d9488"
      }
    }
  },
  "service": {
    "order": [
      "varsha",
      "shabrin",
      "safeenafirdhous_k",
      "sabareesh",
      "ghufran",
      "ismail",
      "diti_jain",
      "arbeen",
      "afreen_f",
      "abdul_mannan",
      "aaqib"
    ],
    "agents": {
      "varsha": {
        "name": "Varsha",
        "cq": 92,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 4,
        "params": {
          "uq": 0,
          "res": 0,
          "sys": 0,
          "sla": 4
        },
        "aois": [
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          }
        ],
        "cases": [
          {
            "query": "Ticket ##SR-2184871",
            "score": 90,
            "comment": "JC has understand the mail delay in reply to proceed further."
          },
          {
            "query": "Ticket ##SR-2179903",
            "score": 100,
            "comment": "JC has understand the mail raise the ITR in delay ."
          },
          {
            "query": "Ticket ##SR-2173344",
            "score": 90,
            "comment": "JC has understand the mail delay in response in Order Cancellation."
          },
          {
            "query": "Ticket ##SR-2185061",
            "score": 90,
            "comment": "JC has understand the mail raise the ITR in delay ."
          }
        ],
        "paramCaseMap": {
          "uq": [],
          "res": [],
          "sys": [],
          "sla": [
            0,
            1,
            2,
            3
          ]
        },
        "initials": "VA",
        "color": "#0891b2"
      },
      "shabrin": {
        "name": "Shabrin",
        "cq": 95,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 2,
        "params": {
          "uq": 0,
          "res": 0,
          "sys": 0,
          "sla": 2
        },
        "aois": [
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          }
        ],
        "cases": [
          {
            "query": "Ticket ##SR-2181250",
            "score": 100,
            "comment": "JC has understand the mail cancel the order with in SLA."
          },
          {
            "query": "Ticket ##SR-2179641",
            "score": 100,
            "comment": "JC has understand the mail regarding repair update with in SLA."
          },
          {
            "query": "Ticket ##SR-2172904",
            "score": 90,
            "comment": "JC has understand the mail delay in reserving the barcode."
          },
          {
            "query": "Ticket ##SR-2180932",
            "score": 90,
            "comment": "JC has understand the mail delay in raising the ITR Request."
          }
        ],
        "paramCaseMap": {
          "uq": [],
          "res": [],
          "sys": [],
          "sla": [
            2,
            3
          ]
        },
        "initials": "SH",
        "color": "#16a34a"
      },
      "safeenafirdhous_k": {
        "name": "Safeenafirdhous K",
        "cq": 91,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 3,
        "params": {
          "uq": 1,
          "res": 1,
          "sys": 0,
          "sla": 1
        },
        "aois": [
          {
            "cat": "uq",
            "label": "Understanding the Query",
            "text": "Need more intervention on mail with clear information and proper responsed to update on mails."
          },
          {
            "cat": "res",
            "label": "Resolution & Info",
            "text": "Each mail responsed should be more clear and accurate information and complete the mails..1"
          },
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          }
        ],
        "cases": [
          {
            "query": "Ticket ##INC-2175832",
            "score": 85,
            "comment": "JC has understand the mail all details was given fail to check barcode and RTN asked for order number ."
          },
          {
            "query": "Ticket #2175423",
            "score": 100,
            "comment": "JC has understand the mail extended the XP with in SLA."
          },
          {
            "query": "Ticket ##INC-2188974",
            "score": 80,
            "comment": "JC has understand the mail too much delay in reply and no resolution was given in ticket."
          },
          {
            "query": "Ticket ##SR-2179683",
            "score": 100,
            "comment": "JC has understand the mail cancel the order with in SLA."
          }
        ],
        "paramCaseMap": {
          "uq": [
            0
          ],
          "res": [
            2
          ],
          "sys": [],
          "sla": [
            2
          ]
        },
        "initials": "SK",
        "color": "#0d9488"
      },
      "sabareesh": {
        "name": "Sabareesh",
        "cq": 92,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 3,
        "params": {
          "uq": 0,
          "res": 0,
          "sys": 0,
          "sla": 3
        },
        "aois": [
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          }
        ],
        "cases": [
          {
            "query": "Ticket ##SR-2182332",
            "score": 90,
            "comment": "JC has understand the mail shared the customer profile ID in delay."
          },
          {
            "query": "Ticket ##SR-2188664",
            "score": 100,
            "comment": "JC has understand the mail cancel the order with in SLA."
          },
          {
            "query": "Ticket ##SR-2182503",
            "score": 90,
            "comment": "JC has understand the mail cancel the order in delay ."
          },
          {
            "query": "Ticket ##SR-2182406",
            "score": 90,
            "comment": "JC has understand the mail delay in reply regarding GV to proceed further."
          }
        ],
        "paramCaseMap": {
          "uq": [],
          "res": [],
          "sys": [],
          "sla": [
            0,
            2,
            3
          ]
        },
        "initials": "SA",
        "color": "#c8a846"
      },
      "ghufran": {
        "name": "Ghufran",
        "cq": 92,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 3,
        "params": {
          "uq": 0,
          "res": 0,
          "sys": 0,
          "sla": 3
        },
        "aois": [
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          }
        ],
        "cases": [
          {
            "query": "Ticket ##SR-2180129",
            "score": 100,
            "comment": "JC has understand the mail cancel the order with in SLA."
          },
          {
            "query": "Ticket ##SR-2173638",
            "score": 90,
            "comment": "JC has understand the mail delay in disableing the POP."
          },
          {
            "query": "Ticket ##SR-2182553",
            "score": 90,
            "comment": "JC has understand the mail delay in cancelling the order."
          },
          {
            "query": "Ticket ##SR-2181526",
            "score": 90,
            "comment": "JC has understand the mail raise the ITR too much delay."
          }
        ],
        "paramCaseMap": {
          "uq": [],
          "res": [],
          "sys": [],
          "sla": [
            1,
            2,
            3
          ]
        },
        "initials": "GH",
        "color": "#ea580c"
      },
      "ismail": {
        "name": "Ismail",
        "cq": 92,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 3,
        "params": {
          "uq": 0,
          "res": 0,
          "sys": 0,
          "sla": 3
        },
        "aois": [
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          }
        ],
        "cases": [
          {
            "query": "Ticket ##SR-2181750",
            "score": 100,
            "comment": "JC has understand the mail raise the ITR with in SLA."
          },
          {
            "query": "Ticket ##SR-2181722",
            "score": 90,
            "comment": "JC has understand the mail cancel the order in delay to proceed further."
          },
          {
            "query": "Ticket ##SR-2182762",
            "score": 90,
            "comment": "JC has understand the mail reserved the barcode in delay to proceed further."
          },
          {
            "query": "Ticket ##SR-2181634",
            "score": 90,
            "comment": "JC has understand the mail created the xCLusive Card in delay."
          }
        ],
        "paramCaseMap": {
          "uq": [],
          "res": [],
          "sys": [],
          "sla": [
            1,
            2,
            3
          ]
        },
        "initials": "IS",
        "color": "#7c3aed"
      },
      "diti_jain": {
        "name": "Diti Jain",
        "cq": 95,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 3,
        "params": {
          "uq": 0,
          "res": 0,
          "sys": 0,
          "sla": 3
        },
        "aois": [
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          }
        ],
        "cases": [
          {
            "query": "Ticket ##SR-2184524",
            "score": 100,
            "comment": "JC has understand the mail raise the ITR within SLA."
          },
          {
            "query": "Ticket ##SR-2179661",
            "score": 100,
            "comment": "JC has understand the mail too much delay in order Cancellation response ."
          },
          {
            "query": "Ticket ##SR-2179578",
            "score": 100,
            "comment": "JC has understand the mail too much delay in checking in kiss flow and updating to store regarding repair."
          },
          {
            "query": "Ticket ##SR-2189566",
            "score": 80,
            "comment": "JC has understand the mail too much delay in highlighting the issue to FC team ."
          }
        ],
        "paramCaseMap": {
          "uq": [],
          "res": [],
          "sys": [],
          "sla": [
            1,
            2,
            3
          ]
        },
        "initials": "DJ",
        "color": "#2563eb"
      },
      "arbeen": {
        "name": "Arbeen",
        "cq": 95,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 2,
        "params": {
          "uq": 0,
          "res": 0,
          "sys": 0,
          "sla": 2
        },
        "aois": [
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          }
        ],
        "cases": [
          {
            "query": "Ticket ##SR-2173882",
            "score": 100,
            "comment": "JC has understand the mail check the barcode and reserve the correct barcode in order within SLA."
          },
          {
            "query": "Ticket ##SR-2174044",
            "score": 100,
            "comment": "JC has understand the mail check the PAN and approved the CTC with in SLA."
          },
          {
            "query": "Ticket ##SR-2172929",
            "score": 90,
            "comment": "JC has understand the mail regarding order cancellation but in delay."
          },
          {
            "query": "Ticket ##SR-2173443",
            "score": 90,
            "comment": "JC has understand the mail check the SKU and inform diffrent SKU but in delay."
          }
        ],
        "paramCaseMap": {
          "uq": [],
          "res": [],
          "sys": [],
          "sla": [
            2,
            3
          ]
        },
        "initials": "AR",
        "color": "#dc2626"
      },
      "afreen_f": {
        "name": "Afreen F",
        "cq": 85,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 3,
        "params": {
          "uq": 0,
          "res": 0,
          "sys": 0,
          "sla": 3
        },
        "aois": [
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          }
        ],
        "cases": [
          {
            "query": "Ticket ##SR-2180768",
            "score": 100,
            "comment": "JC has understand the mail and unreversed the barcode and blocked with in SLA."
          },
          {
            "query": "Ticket ##SR-2182012",
            "score": 80,
            "comment": "JC has understand the mail too much delay in reversing the barcode ."
          },
          {
            "query": "Ticket ##SR-2181969",
            "score": 80,
            "comment": "JC has understand the mail to much delay in response for ITR."
          },
          {
            "query": "Ticket ##SR-2183007",
            "score": 80,
            "comment": "JC has understand the mail to much delay in response for ITR."
          }
        ],
        "paramCaseMap": {
          "uq": [],
          "res": [],
          "sys": [],
          "sla": [
            1,
            2,
            3
          ]
        },
        "initials": "AF",
        "color": "#b8860b"
      },
      "abdul_mannan": {
        "name": "Abdul Mannan",
        "cq": 98,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 1,
        "params": {
          "uq": 0,
          "res": 0,
          "sys": 0,
          "sla": 1
        },
        "aois": [
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          }
        ],
        "cases": [
          {
            "query": "Ticket ##INC-2177441",
            "score": 100,
            "comment": "JC has understand the mail and Extended the POP benefit."
          },
          {
            "query": "Ticket ##SR-2182335",
            "score": 100,
            "comment": "JC has understand the mail and refunded in customer NEFT with in SLA."
          },
          {
            "query": "Ticket ##SR-2183534",
            "score": 90,
            "comment": "JC has understand the mail cancel the order in delay to proceed further."
          },
          {
            "query": "Ticket ##SR-2175066",
            "score": 100,
            "comment": "JC has understand the mail cancel the order to proceed further."
          }
        ],
        "paramCaseMap": {
          "uq": [],
          "res": [],
          "sys": [],
          "sla": [
            2
          ]
        },
        "initials": "AM",
        "color": "#0ea5e9"
      },
      "aaqib": {
        "name": "Aaqib",
        "cq": 92,
        "audits": 4,
        "ncf": 0,
        "totalErrors": 3,
        "params": {
          "uq": 0,
          "res": 2,
          "sys": 0,
          "sla": 1
        },
        "aois": [
          {
            "cat": "res",
            "label": "Resolution & Info",
            "text": "Each mail responsed should be more clear and accurate information and complete the mails..1"
          },
          {
            "cat": "res",
            "label": "Resolution & Info",
            "text": "Any further information ask in first mail with clear and proper information to be proceed further."
          },
          {
            "cat": "sla",
            "label": "SLA Breach",
            "text": "Each and every mail should be responsed on time SLA."
          }
        ],
        "cases": [
          {
            "query": "Ticket ##SR-2179263",
            "score": 100,
            "comment": "JC has understand the mail raise the ITR with in SLA to proceed further."
          },
          {
            "query": "Ticket ##SR-2176009",
            "score": 90,
            "comment": "JC has understand the mail forgot to chck the order number in attachment again store has send the order number."
          },
          {
            "query": "Ticket ##SR-2180165",
            "score": 90,
            "comment": "JC has understand the mail reverse the barcode but dint refresh. store again informed to reserve the same barcode post that barcode has been reserved."
          },
          {
            "query": "Ticket ##SR-2179039",
            "score": 90,
            "comment": "JC has understand the mail too much delay in response for order cancellation."
          }
        ],
        "paramCaseMap": {
          "uq": [],
          "res": [
            1,
            2
          ],
          "sys": [],
          "sla": [
            3
          ]
        },
        "initials": "AA",
        "color": "#a855f7"
      }
    }
  }
};
