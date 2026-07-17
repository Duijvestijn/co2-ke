export type Lang = "en" | "sw";

export interface Article {
  slug: string;
  tag: string;
  tagSw: string;
  date: string;
  readTime: number;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  content: Record<Lang, string>;
}

export const articles: Article[] = [
  {
    slug: "kenya-regulated-carbon-market-exchange",
    tag: "Policy",
    tagSw: "Sera",
    date: "May 2026",
    readTime: 6,
    title: {
      en: "Kenya Becomes Africa's First Nation to Launch a Regulated Carbon Market Exchange",
      sw: "Kenya Kuwa Nchi ya Kwanza barani Afrika Kuzindua Soko la Kubadilishana Kaboni Linalodhibitiwa",
    },
    excerpt: {
      en: "The Kenya Carbon Markets Authority has launched the country's first regulated voluntary carbon exchange, enabling domestic and international buyers to transact directly with Kenyan project developers.",
      sw: "Mamlaka ya Masoko ya Kaboni ya Kenya imezindua soko la kwanza la kubadilishana kaboni nchini, linalosaidia wanunuzi wa ndani na nje ya nchi kuwasiliana moja kwa moja na wasanidi miradi wa Kenya.",
    },
    content: {
      en: `<p class="lead">In May 2026, Kenya made history as Africa's first country to operationalise a fully regulated voluntary carbon credit exchange — a milestone that positions the country as the continent's premier destination for carbon finance and signals a new era for nature-based climate solutions across sub-Saharan Africa.</p>

<h2>A Framework Built for Integrity</h2>
<p>The Kenya Carbon Markets Authority (KCMA), established under the Climate Change (Amendment) Act 2023, has spent two years constructing the legal, technical, and institutional architecture for this exchange. The result is a platform that allows project developers holding Verra VCS, Gold Standard, or KCMA-registered credits to list, sell, and retire units in a transparent, auditable environment.</p>
<p>Unlike over-the-counter carbon markets — which have historically suffered from opacity, double-counting, and greenwashing — Kenya's exchange requires all credits to carry serial numbers traceable through the Verra or Gold Standard public registries. Buyers access a verified chain of custody from forest to certificate.</p>

<h2>What This Means for Project Developers</h2>
<p>For the 40+ registered VCS and Gold Standard projects currently operating in Kenya, the exchange removes the most significant commercial barrier they face: price discovery. Previously, Kenyan project developers negotiated bilaterally with international brokers, often accepting below-market prices because they lacked visibility into global demand.</p>
<p>The regulated exchange introduces competitive bidding, allowing buyers — corporate sustainability teams, compliance-driven energy companies, and sovereign buyers seeking Article 6 mitigation outcomes — to post bids directly. Early indicative pricing on the exchange shows nature-based Kenyan credits trading at $18–28 per tonne CO₂, compared to the $10–14 historically achieved through broker intermediaries.</p>

<h2>Article 6 Alignment and Sovereign Carbon</h2>
<p>Kenya was among the first African nations to ratify Article 6 provisions of the Paris Agreement, enabling internationally transferable mitigation outcomes (ITMOs). The exchange is built to handle both voluntary and Article 6 transactions — a critical feature as corporate buyers under TCFD and CSRD disclosure frameworks increasingly need credits with government-backed provenance.</p>
<p>Kenya's NDC commits to a 32% emissions reduction by 2030. The government has signalled that proceeds from Article 6 ITMO sales will be ring-fenced for domestic climate adaptation — giving international buyers a direct development co-benefit narrative alongside the carbon unit itself.</p>

<h2>Community Revenue Flows</h2>
<p>A defining feature of Kenya's regulatory framework is the mandatory community benefit sharing requirement. All projects listed on the exchange must demonstrate that a minimum of 40% of credit revenue reaches the communities living within or adjacent to the project area. This is enforced through escrow arrangements verified by KCMA-appointed social auditors.</p>
<p>For the Maasai Mara community carbon coalition — currently the largest single listing block on the exchange — this translates to an estimated $4.2 million in annual community disbursements at current trading volumes.</p>

<h2>What Comes Next</h2>
<p>The KCMA has announced a second phase of the exchange, expected to go live in Q1 2027, that will introduce biodiversity credit instruments alongside carbon — aligning with the global Biodiversity Credit Alliance framework and the Kunming-Montreal Global Biodiversity Framework targets.</p>
<p>For international investors and corporate buyers, Kenya's regulated exchange represents the most credible entry point to African carbon markets today. Green Earth Group's registered Verra VCS project — VCS 3321, the Mount Kenya Regenerative Agroforestry Project — is among the first cohort of projects approved for listing on the exchange.</p>`,

      sw: `<p class="lead">Mnamo Mei 2026, Kenya iliandika historia kama nchi ya kwanza barani Afrika kuanzisha soko la kubadilishana mikopo ya kaboni linalodhibitiwa kikamilifu — hatua muhimu inayoiweka nchi kama kituo kikuu cha fedha za hali ya hewa Afrika na kuashiria enzi mpya kwa suluhisho za hali ya hewa zinazotegemea asili Afrika Kusini mwa Jangwa la Sahara.</p>

<h2>Mfumo Uliojengwa kwa Uadilifu</h2>
<p>Mamlaka ya Masoko ya Kaboni ya Kenya (KCMA), iliyoanzishwa chini ya Sheria ya Mabadiliko ya Tabianchi (Marekebisho) ya 2023, imetumia miaka miwili kujenga muundo wa kisheria, kiufundi, na taasisi kwa soko hili. Matokeo ni jukwaa linaloweza kuwasaidia wasanidi miradi wanaomiliki mikopo ya Verra VCS, Gold Standard, au iliyoandikishwa na KCMA kuorodhesha, kuuza, na kustaafu vitengo katika mazingira ya uwazi na uwajibikaji.</p>

<h2>Maana kwa Wasanidi Miradi</h2>
<p>Kwa miradi 40+ ya VCS na Gold Standard iliyoandikishwa inayofanya kazi Kenya sasa hivi, soko linaondoa kizuizi kikubwa zaidi cha kibiashara wanachokabili: ugunduzi wa bei. Awali, wasanidi miradi wa Kenya walifanya mazungumzo ya moja kwa moja na madalali wa kimataifa, mara nyingi wakipokea bei chini ya soko kwa sababu hawakuwa na ufahamu wa mahitaji ya kimataifa.</p>

<h2>Ufanano na Ibara ya 6</h2>
<p>Kenya ilikuwa miongoni mwa nchi za kwanza za Afrika kuridhia masharti ya Ibara ya 6 ya Mkataba wa Paris, ikiwezesha matokeo ya kupunguza hewa zinazoweza kuhamishiwa kimataifa. Soko limejengwa kushughulikia miamala ya hiari na ya Ibara ya 6.</p>`,
    },
  },
  {
    slug: "maasai-mara-community-carbon-projects",
    tag: "Projects",
    tagSw: "Miradi",
    date: "April 2026",
    readTime: 5,
    title: {
      en: "Maasai Mara Community Carbon Projects Reach 500,000 tCO₂ in Annual Issuances",
      sw: "Miradi ya Kaboni ya Jamii ya Masai Mara Kufikia Tani 500,000 za CO₂ kwa Mwaka",
    },
    excerpt: {
      en: "A coalition of 14 community-owned carbon projects across the Maasai Mara ecosystem has collectively reached 500,000 tCO₂ in annual verified issuances, delivering $4.2M in direct community revenue.",
      sw: "Muungano wa miradi 14 inayomilikiwa na jamii katika mfumo wa ikolojia ya Masai Mara umefika kwa pamoja tani 500,000 za CO₂ kwa mwaka, ukitoa mapato ya dola milioni 4.2 moja kwa moja kwa jamii.",
    },
    content: {
      en: `<p class="lead">Fourteen community-owned carbon projects spread across the 1.5 million-hectare Maasai Mara ecosystem have jointly crossed a landmark threshold: 500,000 verified tonnes of CO₂ reduced or removed per year — making the Maasai Mara the single largest community-managed carbon cluster on the African continent.</p>

<h2>A Model Built from the Ground Up</h2>
<p>Unlike plantation-based carbon projects managed by external corporations, all 14 Maasai Mara projects are structured as community-owned enterprises in which Maasai group ranches hold the land rights, the project rights, and a controlling stake in the revenue distribution mechanism.</p>
<p>The model emerged from a decade of negotiation between the Maasai community, NGO advisors, and the Verra VCS technical team. The breakthrough was applying the VM0032 (Methodology for the Adoption of Sustainable Grassland Management through Improved Grazing) framework to Maasai pastoral practices — recognising that sustainable rotational grazing, which the Maasai have practiced for centuries, is a verifiable carbon sequestration activity.</p>

<h2>$4.2 Million Flowing Directly to Communities</h2>
<p>At the current verified volume of 500,000 tCO₂ per year and an average credit price of $14, the coalition generates approximately $7 million in gross annual revenue. After deducting monitoring, verification, and registry costs (which average 30–35% for community projects of this structure), $4.2 million flows directly to the 14 group ranches.</p>
<p>Under the individual project constitutions, this revenue is split three ways: 50% to a community development fund (schools, boreholes, medical clinics), 30% to individual landowner households, and 20% retained as a reinvestment reserve for project continuity. The average household payment in the core ranch areas is approximately $180 per year — modest in absolute terms, but meaningful in a pastoral economy where annual cash income often falls below $400.</p>

<h2>Wildlife Co-Benefits: The Hidden Value</h2>
<p>The Maasai Mara ecosystem is home to the world's most densely documented large mammal migration — the annual wildebeest crossing from the Serengeti. Carbon project activity has directly reduced poaching pressure and human-wildlife conflict by providing alternative income streams to communities that previously bore the full economic cost of wildlife conservation.</p>
<p>A 2025 wildlife census conducted by the Kenya Wildlife Service and Mara Conservancy recorded a 23% increase in lion pride sizes within project boundaries compared to the 2020 baseline, and a 17% increase in cheetah sightings — species that serve as sentinel indicators for ecosystem health.</p>

<h2>The Road to One Million Tonnes</h2>
<p>The coalition is targeting one million tCO₂ in annual issuances by 2030. The pathway involves three expansions: bringing an additional six group ranches into the programme (adding approximately 180,000 hectares), layering a blue carbon component for the Mara River wetlands under the VM0033 methodology, and introducing a biodiversity credit instrument that monetises the wildlife recovery documented above.</p>
<p>Green Earth Group is an implementation partner for two of the fourteen projects and is actively advising four of the prospective expansion ranches. For investors seeking exposure to high-integrity, community-verified African carbon credits at scale, the Maasai Mara coalition represents the most mature and transparent programme currently available in East Africa.</p>`,

      sw: `<p class="lead">Miradi kumi na minne inayomilikiwa na jamii iliyoenea katika mfumo wa ikolojia wa Masai Mara wa hekta milioni 1.5 imevuka pamoja kizingiti muhimu: tani 500,000 za CO₂ zilizothibitishwa kwa mwaka — na kuifanya Masai Mara kuwa klasta kubwa zaidi ya kaboni inayosimamiwa na jamii Afrika.</p>

<h2>Muundo Uliojengwa Kutoka Chini</h2>
<p>Tofauti na miradi ya kaboni inayotegemea mashamba inayosimamiwa na mashirika ya nje, miradi yote 14 ya Masai Mara imepangwa kama biashara zinazomilikiwa na jamii ambazo mashamba ya kikundi cha Wamasai yanamiliki haki za ardhi, haki za mradi, na hisa ya kudhibiti katika utaratibu wa usambazaji wa mapato.</p>

<h2>Dola Milioni 4.2 Zinazofika Moja kwa Moja kwa Jamii</h2>
<p>Kwa kiasi kilichothibitishwa cha sasa cha tani 500,000 za CO₂ kwa mwaka na bei ya wastani ya mkopo ya $14, muungano unazalisha mapato ya jumla ya takriban dola milioni 7 kwa mwaka. Baada ya kuondoa gharama za ufuatiliaji, uthibitisho, na usajili, dola milioni 4.2 zinaenda moja kwa moja kwa ranchi 14 za kikundi.</p>`,
    },
  },
  {
    slug: "kenya-coastal-mangroves-blue-carbon",
    tag: "Science",
    tagSw: "Sayansi",
    date: "March 2026",
    readTime: 7,
    title: {
      en: "Kenya's Coastal Mangroves: A $1.2 Billion Blue Carbon Opportunity Barely Tapped",
      sw: "Mikoko ya Pwani ya Kenya: Fursa ya Bilioni $1.2 ya Kaboni ya Bluu Ambayo Bado Haijachimbua",
    },
    excerpt: {
      en: "New remote sensing data reveals Kenya has over 61,000 hectares of restorable mangrove habitat along its Indian Ocean coastline — enough to generate 600,000+ annual blue carbon credits.",
      sw: "Data mpya ya upigaji picha kwa umbali inaonyesha kwamba Kenya ina zaidi ya hekta 61,000 za makazi ya mikoko inayoweza kurudishwa kando ya pwani yake ya Bahari ya Hindi — ya kutosha kuzalisha zaidi ya mikopo 600,000 ya kaboni ya bluu kwa mwaka.",
    },
    content: {
      en: `<p class="lead">A comprehensive remote sensing analysis published in March 2026 — combining Sentinel-2 satellite imagery, LiDAR canopy data, and field-verified soil carbon measurements — has established that Kenya's Indian Ocean coastline holds over 61,000 hectares of mangrove habitat that has been degraded or cleared since 1990, making it the largest single concentration of restorable blue carbon habitat in East Africa.</p>

<h2>Why Mangroves Are Exceptional Carbon Stores</h2>
<p>Mangrove forests are among the most carbon-dense ecosystems on Earth. Per hectare, a restored coastal mangrove sequesters 3–5 times more carbon per year than an equivalent area of tropical rainforest, for two compounding reasons: photosynthetic carbon capture in above-ground biomass (trees, pneumatophores, prop roots), and anaerobic soil carbon accumulation in the deep, waterlogged sediments beneath the root mat — a process that can preserve organic carbon for thousands of years.</p>
<p>The Kenyan coastal zone, spanning from Lamu County in the north to Kwale County in the south, covers approximately 536 kilometres of shoreline. The remote sensing study identifies the Tana River Delta (21,400 ha), the Mida Creek estuary (8,200 ha), the Kilifi Creek system (6,700 ha), and the Gazi Bay area (4,100 ha) as the four priority restoration zones — together accounting for 66% of the total restorable area.</p>

<h2>The Verra VM0033 Methodology</h2>
<p>Blue carbon mangrove projects in Kenya are structured under the Verra Verified Carbon Standard (VCS) methodology VM0033 — Tidal Wetland and Seagrass Restoration. This methodology accounts for both above-ground biomass accumulation and below-ground soil carbon sequestration, and it requires project developers to demonstrate additionality (that restoration would not have occurred without carbon finance).</p>
<p>Based on the spatial analysis and VM0033 carbon stock parameters validated for East African mangrove ecosystems, a full-scale restoration programme across the 61,000 identified hectares would generate approximately 610,000–680,000 verified tCO₂ per year at steady-state (typically reached at year 10–12 post-planting). At current blue carbon credit prices of $18–30 per tonne — a premium over terrestrial credits reflecting the ecosystem co-benefits — this implies an annual market value of $11M–$20M.</p>

<h2>Community and Fisheries Co-Benefits</h2>
<p>Kenya's coastal mangrove communities are among the most economically marginalised in the country. The coastal poverty rate (34%) is significantly above the national average (26%), and livelihoods depend heavily on small-scale artisanal fisheries that are directly supported by mangrove habitat.</p>
<p>Studies from the Gazi Bay Blue Carbon Project — the longest-running mangrove carbon project in Africa, initiated in 2013 — demonstrate a 40–60% increase in nearshore fish catch within restored mangrove zones, driven by the use of prop root structures as juvenile fish nurseries. Blue carbon project design therefore creates a direct pathway from carbon revenue to fisheries recovery to household food security.</p>

<h2>The Carbon Finance Gap</h2>
<p>Despite the quantified opportunity, less than 4% of Kenya's restorable mangrove area is currently under active carbon project development. The barriers are primarily institutional: mangrove tenure in Kenya is complex (foreshore land is formally vested in the Kenya Forest Service, while community user rights are customary rather than statutory), monitoring is technically demanding in tidal environments, and project development costs are 40–60% higher per hectare than for terrestrial forest projects.</p>
<p>Green Earth Group is currently conducting feasibility assessments for blue carbon projects along two coastal zones in Kenya. For project developers, landowners with coastal access, or county governments with jurisdiction over mangrove areas, we are available to discuss technical and financial structuring.</p>`,

      sw: `<p class="lead">Uchambuzi wa kina wa upigaji picha kwa umbali uliochapishwa Machi 2026 umeonyesha kwamba pwani ya Bahari ya Hindi ya Kenya ina zaidi ya hekta 61,000 za makazi ya mikoko ambayo imeharibiwa au kuondolewa tangu 1990 — na kuifanya kuwa mkusanyiko mkubwa zaidi wa makazi ya kaboni ya bluu yanayoweza kurudishwa Afrika Mashariki.</p>

<h2>Kwa Nini Mikoko ni Hifadhi Bora ya Kaboni</h2>
<p>Misitu ya mikoko ni miongoni mwa mifumo ya ikolojia yenye kaboni nyingi zaidi duniani. Kwa hekta moja, mikoko iliyorejeshwa inashikilia kaboni mara 3–5 zaidi kwa mwaka kuliko eneo sawa la msitu wa mvua wa tropiki.</p>

<h2>Mbinu ya Verra VM0033</h2>
<p>Miradi ya kaboni ya bluu ya mikoko nchini Kenya imepangwa chini ya mbinu ya Verra VM0033 — Urejeshaji wa Ardhi oevu ya Mzunguko wa Maji na Mwani. Mbinu hii inazingatia mkusanyiko wa majani juu ya ardhi na mkusanyiko wa kaboni ya udongo chini ya ardhi.</p>`,
    },
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}
