export type PostLang = { title: string; excerpt: string; content: string };
export type Post = { slug: string; date: string; lang: { [key: string]: PostLang } };

export const posts: Post[] = [
  {
    slug: "kenya-carbon-market-2025",
    date: "2025-08-01",
    lang: {
      en: {
        title: "Kenya's Carbon Market in 2025: What You Need to Know",
        excerpt: "Kenya has emerged as one of Africa's most active voluntary carbon markets. Here's a comprehensive overview of the landscape, key players, and opportunities.",
        content: `<p>Kenya stands at the forefront of Africa's voluntary carbon market revolution. With over 40 registered projects across forestry, cookstoves, and blue carbon, the country has established itself as a premier destination for carbon credit investment on the continent.</p>
<p>The Kenya Forest Service (KFS) and the Kenya Climate Innovation Center (KCIC) work in tandem to certify and promote domestic carbon projects. International standards such as Verra's Verified Carbon Standard (VCS) and the Gold Standard are widely applied, giving buyers confidence in the quality and permanence of credits sourced from Kenya.</p>
<p>Article 6 of the Paris Agreement has added a new dimension to Kenya's carbon market. The bilateral agreement signed between Kenya and Switzerland in 2021 marked one of the first operationalized Article 6.2 arrangements globally, paving the way for internationally transferred mitigation outcomes (ITMOs). This positions Kenya advantageously as carbon markets transition toward internationally linked systems.</p>
<p>For buyers and project developers alike, Kenya offers a compelling combination: robust regulatory frameworks, biodiversity-rich landscapes, and a government actively committed to using carbon finance for conservation and rural development. The coming years will see the Kenyan carbon market deepen significantly as Article 6 rules are finalized under the UNFCCC.</p>`,
      },
      sw: {
        title: "Soko la Kaboni la Kenya 2025: Unachohitaji Kujua",
        excerpt: "Kenya imeibuka kama moja ya masoko ya kaboni ya hiari yanayoongoza barani Afrika. Hapa kuna muhtasari wa mazingira, washiriki wakuu, na fursa.",
        content: `<p>Kenya inasimama mstari wa mbele wa mapinduzi ya soko la kaboni la hiari barani Afrika. Na zaidi ya miradi 40 iliyosajiliwa katika misitu, majiko ya kupikia, na kaboni ya bluu, nchi imejiweka kama mahali pa uwekezaji wa hati za kaboni barani.</p>
<p>Huduma ya Misitu ya Kenya (KFS) na Kituo cha Ubunifu wa Hali ya Hewa cha Kenya (KCIC) vinafanya kazi pamoja kuthibitisha na kukuza miradi ya kaboni ya ndani. Viwango vya kimataifa kama vile VCS ya Verra na Gold Standard vinatumika sana, vikitoa ujasiri kwa wanunuzi kuhusu ubora na kudumu kwa hati zinazotoka Kenya.</p>
<p>Kifungu cha 6 cha Makubaliano ya Paris kimeongeza kipengele kipya katika soko la kaboni la Kenya. Makubaliano ya pande mbili yaliyosainiwa kati ya Kenya na Uswizi mwaka 2021 yaliacha alama ya kipekee kimataifa katika usanidi wa Kifungu cha 6.2, na kufungua njia kwa matokeo ya upunguzaji yanayohamishwa kimataifa (ITMOs).</p>
<p>Kwa wanunuzi na waendelezaji wa miradi, Kenya inatoa mchanganyiko wa kuvutia: mifumo ya udhibiti imara, mandhari yenye bayoanuwai, na serikali iliyojitolea kutumia fedha za kaboni kwa uhifadhi na maendeleo ya vijijini.</p>`,
      },
    },
  },
  {
    slug: "article-6-kenya-carbon-trading",
    date: "2025-07-15",
    lang: {
      en: {
        title: "Article 6 and Kenya: Trading Carbon Credits Internationally",
        excerpt: "How Kenya's landmark Article 6.2 agreements are reshaping international carbon credit trading and what it means for project developers.",
        content: `<p>When Kenya and Switzerland signed their bilateral agreement under Article 6.2 of the Paris Agreement, it marked a watershed moment for international carbon markets. This agreement allows Switzerland to count carbon reductions achieved in Kenya toward its own nationally determined contributions (NDCs), creating a direct financial incentive for Swiss buyers to invest in Kenyan climate projects.</p>
<p>Since then, Kenya has expanded its Article 6 ambitions. The country has entered negotiations with several European nations and Japan, recognizing that internationally linked carbon markets can unlock substantially higher prices for Kenyan credits — often 2-3 times the voluntary market rate.</p>
<p>For project developers operating in Kenya, Article 6 compliance requires additional authorization from the national government (a Letter of Authorization or LoA), additionality documentation, and alignment with Kenya's own NDC targets. The Ministry of Environment and Climate Change has established a dedicated Article 6 unit to process these applications.</p>
<p>The transition to Article 6-authorized credits is not without complexity, but the premium pricing justifies the additional compliance burden for most large-scale projects. Kenya is positioning itself as the go-to destination for Article 6 credits from the African continent.</p>`,
      },
      sw: {
        title: "Kifungu cha 6 na Kenya: Biashara ya Hati za Kaboni Kimataifa",
        excerpt: "Jinsi makubaliano ya kipekee ya Kifungu cha 6.2 ya Kenya yanavyobadilisha biashara ya hati za kaboni kimataifa na maana yake kwa waendelezaji wa miradi.",
        content: `<p>Kenya ilipoafiki makubaliano ya pande mbili chini ya Kifungu cha 6.2 cha Makubaliano ya Paris na Uswizi, iliashiria wakati wa mabadiliko kwa masoko ya kaboni ya kimataifa. Makubaliano haya yanaruhusu Uswizi kuhesabu upunguzaji wa kaboni uliofikiwa Kenya kuelekea mchango wake wenyewe uliowekwa kitaifa (NDCs).</p>
<p>Tangu wakati huo, Kenya imepanua matarajio yake ya Kifungu cha 6. Nchi imeingia katika mazungumzo na mataifa kadhaa ya Ulaya na Japan, ikitambua kwamba masoko ya kaboni yaliyounganishwa kimataifa yanaweza kufungua bei za juu zaidi kwa hati za Kenya — mara nyingi mara 2-3 ya kiwango cha soko la hiari.</p>
<p>Kwa waendelezaji wa miradi wanaofanya kazi Kenya, utiifu wa Kifungu cha 6 unahitaji idhini ya ziada kutoka kwa serikali ya kitaifa (Barua ya Idhini), nyaraka za ziada, na ulinganifu na malengo ya NDC ya Kenya yenyewe.</p>
<p>Mpito wa hati zilizoidhinishwa za Kifungu cha 6 una ugumu, lakini bei ya juu inajustify mzigo wa ziada wa utiifu kwa miradi mingi ya kiwango kikubwa.</p>`,
      },
    },
  },
  {
    slug: "kenya-redd-plus-forests",
    date: "2025-06-20",
    lang: {
      en: {
        title: "Forests for Climate: Kenya's REDD+ Projects Explained",
        excerpt: "Kenya's forests sequester millions of tonnes of CO2 annually. REDD+ projects translate this into tradeable carbon credits while protecting biodiversity.",
        content: `<p>Kenya's forests — from the Mau Forest Complex to the Arabuko Sokoke coastal forest — represent some of the continent's most biodiverse and carbon-dense ecosystems. REDD+ (Reducing Emissions from Deforestation and Forest Degradation) provides the mechanism to translate forest conservation into internationally recognized carbon credits.</p>
<p>The Kasigau Corridor REDD+ Project in southeastern Kenya is often cited as Africa's first large-scale REDD+ project to issue Verified Carbon Units (VCUs). Managed by Wildlife Works Carbon, it protects 500,000 acres of dryland forest while generating credits sold to multinational buyers. The project's success has catalyzed dozens of similar initiatives across Kenya.</p>
<p>For investors and buyers, REDD+ projects in Kenya offer several advantages: long-term credit streams (typically 30+ year project lifetimes), co-benefits including biodiversity conservation and community livelihoods, and eligibility under multiple standards (VCS + CCB for biodiversity).</p>
<p>Challenges include the permanence risk — ensuring forests aren't deforested in the future — and measurement uncertainty. Kenyan REDD+ projects address this through buffer pools and satellite monitoring programs, maintaining high standards of environmental integrity.</p>`,
      },
      sw: {
        title: "Misitu kwa Hali ya Hewa: Miradi ya REDD+ ya Kenya Imeelezwa",
        excerpt: "Misitu ya Kenya hujaza tena mamilioni ya tani za CO2 kila mwaka. Miradi ya REDD+ inatafsiri hili kuwa hati za kaboni zinazoweza kuuzwa huku ikilinda bayoanuwai.",
        content: `<p>Misitu ya Kenya — kutoka Tata la Msitu wa Mau hadi msitu wa pwani wa Arabuko Sokoke — inawakilisha baadhi ya mifumo ikolojia yenye bayoanuwai zaidi na mnene wa kaboni barani. REDD+ (Kupunguza Utoaji wa Hewa Chafu kutoka kwa Ukataji Miti na Uharibifu wa Misitu) hutoa utaratibu wa kutafsiri uhifadhi wa misitu kuwa hati za kaboni zinazotambuliwa kimataifa.</p>
<p>Mradi wa Kasigau Corridor REDD+ kusini mashariki mwa Kenya mara nyingi hutajwa kama mradi mkubwa wa kwanza wa REDD+ barani Afrika kutoa Vitengo vya Kaboni Vilivyothibitishwa (VCUs). Unaodhibitiwa na Wildlife Works Carbon, unalinda ekari 500,000 za msitu wa ardhi kame huku ukizalisha hati zinazoouzwa kwa wanunuzi wa kimataifa.</p>
<p>Kwa wawekezaji na wanunuzi, miradi ya REDD+ Kenya inatoa faida kadhaa: mtiririko wa hati wa muda mrefu (maisha ya mradi ya miaka 30+), manufaa ya ziada ikiwa ni pamoja na uhifadhi wa bayoanuwai na riziki za jamii, na kustahiki chini ya viwango vingi.</p>
<p>Changamoto ni pamoja na hatari ya kudumu — kuhakikisha misitu haikatiwi baadaye — na kutokuwa na uhakika wa kipimo. Miradi ya REDD+ ya Kenya inashughulikia hili kupitia akiba ya bafa na programu za ufuatiliaji wa setilaiti.</p>`,
      },
    },
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug);
}
