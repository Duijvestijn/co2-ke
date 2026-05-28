export type Lang = "sw" | "en";

export const translations = {
  nav: {
    sw: {
      logo: "CO2.ke",
      home: "Nyumbani",
      credits: "Mikopo ya Kaboni",
      projects: "Miradi",
      why: "Kwa Nini Kenya",
      contact: "Wasiliana",
      lang: "EN",
    },
    en: {
      logo: "CO2.ke",
      home: "Home",
      credits: "Carbon Credits",
      projects: "Projects",
      why: "Why Kenya",
      contact: "Contact",
      lang: "SW",
    },
  },

  hero: {
    sw: {
      label: "MASOKO YA KABONI • KENYA",
      titleLine1: "Kaboni ya Afrika",
      titleLine2: "inaanza Kenya",
      description:
        "Kenya ni moja ya nchi za kwanza barani Afrika kuunda mfumo wa masoko ya kaboni wa kitaifa. Misitu ya Bonde la Ufa, savana za Masai Mara, na mwambao wa Pwani — rasilimali za kipekee zinazosubiri kuchaguliwa.",
      btn1: "Jifunze Zaidi",
      btn2: "Ona Miradi",
      stat1Value: "26M",
      stat1Label: "Hekta za misitu",
      stat2Value: "40+",
      stat2Label: "Miradi iliyoidhinishwa",
      stat3Value: "$12",
      stat3Label: "Bei ya wastani / tCO₂",
      stat4Value: "2050",
      stat4Label: "Lengo la neutrality",
    },
    en: {
      label: "CARBON MARKETS • KENYA",
      titleLine1: "Africa's carbon",
      titleLine2: "starts in Kenya",
      description:
        "Kenya is among Africa's first nations to establish a national carbon market framework. The Rift Valley forests, Maasai Mara savannas, and coastal mangroves represent an unmatched carbon opportunity.",
      btn1: "Learn More",
      btn2: "View Projects",
      stat1Value: "26M",
      stat1Label: "Hectares of forest",
      stat2Value: "40+",
      stat2Label: "Registered projects",
      stat3Value: "$12",
      stat3Label: "Avg price / tCO₂",
      stat4Value: "2050",
      stat4Label: "Net-zero target",
    },
  },

  whatIs: {
    sw: {
      label: "MIKOPO YA KABONI NI NINI",
      title: "Uelewa wa Msingi wa Masoko ya Kaboni",
      subtitle: "Mti mmoja, mkopo mmoja, mustakabali mmoja",
      intro:
        "Mkopo wa kaboni ni hati inayothibitisha kwamba tani moja ya CO₂ imeondolewa au kuzuiwa kutolewa angani. Serikali, makampuni, na wawekezaji wanaweza kununua mikopo hii ili kukidhi malengo yao ya hali ya hewa.",
      step1Title: "Kupanda na Kulinda",
      step1Desc: "Miti mipya inapandwa au misitu iliyopo inazuiwa kukatwa.",
      step2Title: "Kupima CO₂",
      step2Desc: "Wataalamu wanakagua na kupima kiasi cha kaboni kilichohifadhiwa.",
      step3Title: "Kuthibitisha",
      step3Desc: "Shirika kama Verra au Gold Standard linathibitisha na kutoa mikopo.",
      step4Title: "Biashara",
      step4Desc: "Mikopo inaweza kuuzwa katika masoko ya kimataifa.",
      whyTitle: "Kwa Nini Hii ni Muhimu kwa Kenya",
      whyDesc:
        "Kenya ina uwezo wa kipekee wa kuzalisha mikopo ya kaboni kutokana na misitu yake, savana, na mwambao. Hii inamaanisha mapato mapya kwa serikali na jamii za vijijini huku ikiokoa mazingira.",
    },
    en: {
      label: "WHAT ARE CARBON CREDITS",
      title: "The Fundamentals of Carbon Markets",
      subtitle: "One tree, one credit, one future",
      intro:
        "A carbon credit certifies that one metric tonne of CO₂ has been removed from or prevented from entering the atmosphere. Governments, corporations, and investors purchase these credits to meet their climate commitments.",
      step1Title: "Plant & Protect",
      step1Desc: "New trees are planted or existing forests are protected from deforestation.",
      step2Title: "Measure CO₂",
      step2Desc: "Experts verify and quantify the carbon stored in the ecosystem.",
      step3Title: "Certify",
      step3Desc: "Bodies like Verra or Gold Standard certify and issue the credits.",
      step4Title: "Trade",
      step4Desc: "Credits are sold on international voluntary or compliance markets.",
      whyTitle: "Why This Matters for Kenya",
      whyDesc:
        "Kenya holds unique carbon potential from its forests, savannas, and coastal habitats. This means new revenue streams for government and rural communities while protecting irreplaceable ecosystems.",
    },
  },

  whyKenya: {
    sw: {
      label: "KWA NINI KENYA",
      title: "Kenya: Nguvu ya Kaboni ya Afrika Mashariki",
      subtitle: "Ardhi yenye thamani, mustakabali wenye faida",
      intro:
        "Kenya ina mfumo wa mazingira tofauti zaidi barani Afrika — kuanzia misitu ya mvua ya Bonde la Ufa hadi savana za Masai Mara na mikoko ya Pwani ya Hindi.",
      stat1Value: "26M",
      stat1Label: "Hekta za misitu na ardhi ya kijani",
      stat2Value: "70%",
      stat2Label: "Nishati mbadala tayari",
      stat3Value: "#3",
      stat3Label: "Afrika kwa masoko ya kaboni",
      stat4Value: "2030",
      stat4Label: "NDC iliyoimarishwa",
      adv1Title: "Mfumo wa Kisheria",
      adv1Desc: "Kenya ina sheria ya hali ya hewa na sera za masoko ya kaboni zilizo wazi.",
      adv2Title: "Misitu ya Bonde la Ufa",
      adv2Desc: "Misitu ya kipekee inayohifadhi kaboni nyingi na bioanuwai.",
      adv3Title: "Savana za Masai Mara",
      adv3Desc: "Mifumo mikubwa ya savana inayostahili mkopo wa kaboni.",
      adv4Title: "Mikoko ya Pwani",
      adv4Desc: "Mikoko ya bahari inayohifadhi kaboni zaidi ya misitu ya kawaida.",
      adv5Title: "Jamii Zishirikishwazo",
      adv5Desc: "Mfano wa Afrika wa ushiriki wa jamii katika miradi ya kaboni.",
      adv6Title: "Fedha za Hali ya Hewa",
      adv6Desc: "Msaada wa kimataifa wa fedha za hali ya hewa unaowafikia wakulima.",
    },
    en: {
      label: "WHY KENYA",
      title: "Kenya: East Africa's Carbon Powerhouse",
      subtitle: "Rich land, rewarding future",
      intro:
        "Kenya possesses the most diverse ecosystems in East Africa — from the Rift Valley rainforests to Maasai Mara savannas and the Indian Ocean mangrove coast.",
      stat1Value: "26M",
      stat1Label: "Hectares of forests & green land",
      stat2Value: "70%",
      stat2Label: "Renewable energy already",
      stat3Value: "#3",
      stat3Label: "Africa in carbon markets",
      stat4Value: "2030",
      stat4Label: "Enhanced NDC target",
      adv1Title: "Legal Framework",
      adv1Desc: "Kenya has clear climate legislation and carbon market policies in place.",
      adv2Title: "Rift Valley Forests",
      adv2Desc: "Unique highland forests storing significant carbon and biodiversity.",
      adv3Title: "Maasai Mara Savannas",
      adv3Desc: "Vast savanna ecosystems eligible for carbon credit generation.",
      adv4Title: "Coastal Mangroves",
      adv4Desc: "Blue carbon mangroves storing more CO₂ per hectare than terrestrial forests.",
      adv5Title: "Community Models",
      adv5Desc: "Africa's leading example of community-based carbon project participation.",
      adv6Title: "Climate Finance",
      adv6Desc: "International climate finance reaching smallholder farmers and communities.",
    },
  },

  projects: {
    sw: {
      label: "MIRADI YA MFANO",
      title: "Miradi ya Kaboni ya Kenya",
      subtitle: "Mifano halisi ya uhifadhi wa mazingira na mapato ya kaboni.",
      project1Title: "Uhifadhi wa Msitu wa Bonde la Ufa",
      project1Desc:
        "Hekta 50,000 za msitu wa mvua zinahifadhiwa kutokana na ukataji miti haramu kupitia ushirikiano wa jamii ya eneo.",
      project1Tag: "REDD+",
      project2Title: "Kaboni ya Savana ya Masai Mara",
      project2Desc:
        "Savana za Mara zinapata usimamizi endelevu, hifadhi ya hewa ukaa, na mapato kwa jamii za Maasai.",
      project2Tag: "Savana",
      project3Title: "Urejesho wa Mikoko Pwani",
      project3Desc:
        "Kilomita 200 za mwambao wa Pwani ya Hindi zinapandwa tena mikoko kwa ushirikiano na wavuvi wa eneo.",
      project3Tag: "Mikoko",
      project4Title: "Misitu ya Kikanda ya Kaunti",
      project4Desc:
        "Kaunti 15 zinaunda misitu mipya na programu za upandaji miti ili kukidhi malengo ya NDC ya Kenya.",
      project4Tag: "Upandaji Miti",
    },
    en: {
      label: "EXAMPLE PROJECTS",
      title: "Kenya's Carbon Projects",
      subtitle: "Real examples of conservation and carbon revenue generation.",
      project1Title: "Rift Valley Forest REDD+",
      project1Desc:
        "50,000 hectares of montane rainforest protected from illegal logging through community partnership.",
      project1Tag: "REDD+",
      project2Title: "Maasai Mara Savanna Carbon",
      project2Desc:
        "The Mara savannas receive sustainable management, carbon storage, and revenue for Maasai communities.",
      project2Tag: "Savanna",
      project3Title: "Coastal Mangrove Restoration",
      project3Desc:
        "200km of Indian Ocean coastline replanted with mangroves in partnership with local fishing communities.",
      project3Tag: "Mangroves",
      project4Title: "County Afforestation Programme",
      project4Desc:
        "15 counties establishing new forests and tree-planting schemes to meet Kenya's NDC commitments.",
      project4Tag: "Afforestation",
    },
  },

  contact: {
    sw: {
      label: "WASILIANA",
      title: "Anza Mazungumzo",
      subtitle:
        "Tunashirikiana na serikali, wawekezaji, wamiliki wa ardhi, na waendelezaji wa miradi ya kaboni nchini Kenya.",
      flows: [
        { title: "Serikali na Manispaa", desc: "Msaada wa sera za kaboni na utekelezaji wa NDC." },
        { title: "Wawekezaji wa Kimataifa", desc: "Fursa za uwekezaji katika mikopo ya kaboni ya Kenya." },
        { title: "Wamiliki wa Ardhi", desc: "Geuza ardhi yako kuwa chanzo cha mapato ya kaboni." },
        { title: "Waendelezaji wa Miradi", desc: "Msaada wa kiufundi na ufikiaji wa masoko ya kimataifa." },
      ],
      namePlaceholder: "Jina lako",
      emailPlaceholder: "Barua pepe yako",
      messagePlaceholder: "Ujumbe wako...",
      send: "Tuma Ujumbe",
    },
    en: {
      label: "CONTACT",
      title: "Start the Conversation",
      subtitle: "We partner with governments, investors, landowners, and project developers across Kenya.",
      flows: [
        { title: "Government & Counties", desc: "Carbon policy support and NDC implementation assistance." },
        { title: "International Investors", desc: "Investment opportunities in Kenya's verified carbon credits." },
        { title: "Landowners", desc: "Turn your land into a source of sustainable carbon revenue." },
        { title: "Project Developers", desc: "Technical support and access to international carbon markets." },
      ],
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message...",
      send: "Send Message",
    },
  },

  footer: {
    sw: {
      tagline: "Kaboni ya Kenya — rasilimali ya Afrika Mashariki.",
      copyright: "© 2026 CO2.ke",
    },
    en: {
      tagline: "Kenya's carbon — East Africa's natural asset.",
      copyright: "© 2026 CO2.ke",
    },
  },
};
