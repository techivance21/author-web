// lib/posts.ts
export type BlogPost = {
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  excerpt: string;      // for the listing card
  content: string;      // full article text; render with whitespace-pre-wrap
  seoKeywords?: string[];
  image?: string;       // optional card image for listing/banner
};

export const POSTS: BlogPost[] = [
  {
    slug: "the-land-remembers",
    title: "The Land Remembers",
    subtitle: "Land is not just dirt — it is archive.",
    category: "Land & Memory",
    excerpt:
      "From the rice fields of the Lowcountry to the red earth of Sierra Leone, the land holds the memory of those who labored, prayed, and dreamed upon it. This is not metaphor — it is evidence.",
    content: `Land is not just dirt — it is archive.
The land remembers what we forget.
It remembers the footpaths carved by bare feet long before the plantations. It remembers the whisper of praise songs that rose in the dark when freedom was still a rumor. It remembers the pain and the planting, the weeping and the waiting.
When we walk the Lowcountry’s marshes today, we walk through layers of memory — a geography of endurance. The sweetgrass, the tides, the rice fields — all speak a language older than any deed. These landscapes are not merely scenic backdrops. They are archives, storing centuries of struggle, skill, and survival.

The Land as Witness
On Hilton Head, the live oaks still twist like arms raised in prayer. At Harris Neck, Georgia, the descendants of the displaced still fight to reclaim their ancestral acres, taken during World War II for a military airfield that was never returned. Each lawsuit and community meeting there is more than a legal process — it is a spiritual one. It is an argument between memory and forgetting.
The same soil that once bore the weight of bondage now carries the seeds of reclamation. When descendants stand on that land, the ground does not see ownership papers; it recognizes bloodlines. Every storm and harvest rewrites the archive, reminding us that memory is alive.

Across the Atlantic — The Other Shore Remembers Too
Far away, in Sierra Leone’s Sherbro River and Bunce Island — called Bensali by locals — the land bears a similar ache. The mangroves grip rusted cannons, and the tide carries shells across the graves of unnamed ancestors. Yet when descendants from the Carolinas and Georgia visit and pour libation, something ancient stirs. The Atlantic is not just a barrier; it is a bridge that connects memory to itself.
In 1989, when the first Gullah delegation stepped onto that island, they sang:
“We bring Sankofa… the circle is now complete.”
That song wasn’t for ceremony. It was for the land — a calling to reopen dialogue with the soil that birthed them. The earth listened. The circle began to close.

Land as Archive, Land as Heirloom
We live in a culture that sees land as commodity — something to own, sell, or fence. But to the ancestors, land was kin. To lose it was to lose language, to lose rhythm, to lose place in the great conversation of being. That is why the fight for Harris Neck, Sapelo Island, and St. Helena is not nostalgia — it is continuity.
On St. Helena Island, elders still say, “Dis land don’ belong to we — we belong to dis land.” That statement reverses everything Western law taught about ownership. It means that the earth itself has memory, and we are simply its stewards for a brief moment.

The Proof Is in the Soil
Science now confirms what oral tradition always knew. Soil samples from old rice fields still carry the same grain DNA as the upland varieties from the Upper Guinea Coast. The patterns of irrigation mirror Mende and Temne systems in Sierra Leone’s inland swamps. The knowledge crossed the ocean, buried in bodies but not erased. The land on both sides of the Atlantic tells a continuous story.

The Work of Re-rooting
To stand on ancestral land — whether Port Royal, Beaufort, or Bunce Island — is to feel time collapse. The question isn’t just Who were they? but Who are we becoming because they endured?
Preservation without participation is just storage. True remembrance demands re-rooting — working the land again, reviving the language, rebuilding what was scattered. The hush that once hid our prayers must now guide our plans.
When we return to the land with awareness, we turn memorial into movement. That’s what A Coven of Heirs is about — not simply remembering the past but entering into covenant with it.`,
    seoKeywords: [
      "Gullah Geechee history",
      "Bunce Island",
      "Harris Neck",
      "St. Helena Island",
      "land preservation",
      "Sierra Leone connection",
    ],
    image: "/blog-land.jpg",
  },
  {
    slug: "echoes-from-the-atlantic-graveyard",
    title: "Echoes from the Atlantic Graveyard",
    subtitle: "The ocean is a graveyard, but also a mirror.",
    category: "Ocean & Memory",
    excerpt:
      "Beneath the Atlantic’s blue silence lies a cemetery without borders. When descendants pour libation and call the names, that water becomes memory — and the ancestors rise as witnesses.",
    content: `The ocean is a graveyard, but also a mirror.
The ocean does not forget.
It moves with memory — wave after wave, carrying the whispers of those who never reached shore. Between the Rice Coast and the Carolinas, it holds a history written not in ink, but in salt and sorrow.
The Atlantic was once called a “Middle Passage,” but that phrase hides more than it reveals. This was no passage — it was a crossing of rupture and resilience. For millions, the ocean was both grave and genesis, ending one story and beginning another.

The Graveyard We Sail Over
Every mile of ocean between Sierra Leone and South Carolina is haunted by the names we cannot know. Ships like The Hare, The Andromache, and The Chance left from Bunce Island, carrying cargo they called “prime slaves.” Yet the manifests record how many “perished at sea,” reducing lives to loss counts.
But what the ledgers call waste, the ocean calls witness. The waves still carry their echoes. On quiet days at Bunce Island, when the tide recedes, villagers say they hear faint voices — a murmur like song. Some call it superstition. Others call it sound memory. Either way, it is history refusing to drown.

Libation as Testimony
When we pour libation — water to water — we are not performing a ritual of mourning. We are reopening a courtroom. The act itself is declaration: We remember, and therefore you remain.
In Port Royal, South Carolina, I have poured libation three times — not out of habit, but as conversation. Each time, I learned something new. The last time, I discovered that a ship named Chance landed there in 1800 with 58 captives from Sierra Leone. It was as if the water had been waiting to speak.
That is how remembrance works. It waits for the living to ask the right question.

The Ocean as Mirror
If the land holds the bones, the ocean holds the breath. Its surface reflects us — descendants of those who survived, inheritors of both trauma and tenacity. To stare at that water is to meet one’s own reflection and realize how much of our DNA is salt.
Across centuries, communities on both sides of the Atlantic have reclaimed that space as sacred ground. In Sierra Leone, the women of Senehun Ngola sing the Mende funeral song that once resurfaced in Georgia. In the Carolinas, Gullah elders sing spirituals whose rhythms recall the same West African cadences. Two continents, one call-and-response.
The Atlantic isn’t dividing us. It’s rehearsing us — teaching the next generation how to remember across distance.

The Science of Remembrance
Historians once said the ocean erased everything. But research and sonar now reveal traces — the outlines of wrecked ships, chains fused by salt, ballast stones from Bunce Island still lying on the seabed. Archaeologists call them artifacts. I call them ancestors.
These submerged sites are more than relics of commerce. They are underwater archives of African genius — people who carried languages, technologies, and faith across terror and made something new in the New World.
When we teach history, we must stop at the shoreline and look seaward too. The story does not end on land.

Libation, Not Lament
We pour not only to grieve, but to give thanks — because those who didn’t survive gave us the gift of purpose. Their silence birthed our sound. Their crossing birthed a people who refused to vanish.
So when the Gullah Geechee descendants stand at water’s edge and whisper, “We remember,” the Atlantic listens. It returns the echo. The libation ripples outward, carrying word to the other side — to Bensali, to Senehun, to every shore where ancestors wait to be acknowledged.`,
    seoKeywords: [
      "Atlantic slave trade",
      "Bunce Island",
      "Port Royal South Carolina",
      "Gullah Geechee",
      "Sierra Leone",
      "libation ceremony",
      "transatlantic memory",
    ],
    image: "/blog-ocean.jpg",
  },
  {
    slug: "before-the-crossing-the-gullah-genesis",
    title: "Before the Crossing: The Gullah Genesis",
    subtitle: "We were not born enslaved — we were born brilliant.",
    category: "Origins",
    excerpt:
      "Long before the slave ships, there were kingdoms, languages, and technologies that shaped the world. Gullah Geechee culture did not begin in bondage — it began in brilliance.",
    content: `We were not born enslaved — we were born brilliant.
They said we were born into chains. They were wrong.
Before the crossing, there were empires that stretched beyond imagination — Mali, Songhai, and the rice-rich coastlines of Sierra Leone and Guinea. There were architects, navigators, linguists, and farmers who engineered systems so advanced that even in captivity, they rebuilt them from memory.
The Gullah story does not begin on a plantation. It begins in the wetlands of West Africa, where rice bent like mirrored sunlight and ancestral tongues carried science in sound.

Africa Before the Atlantic
In the 1300s, the Mali Empire had already built universities, libraries, and gold trade routes linking the Sahara to the Atlantic. Centuries later, when Portuguese and British traders arrived on the Rice Coast, they met people who had mastered water management and inland navigation.
These were the ancestors of the Gullah Geechee — Mende, Temne, Vai, Susu, Fulani, Balanta, and others. They spoke multiple languages, wove baskets not for decoration but for irrigation, and cultivated rice varieties that resisted saltwater. When Europeans “discovered” rice in the Carolinas, it was not discovery. It was transfer.
Every terraced field in the Carolinas is an echo of an African engineer.

The Brilliance They Couldn’t Erase
The Atlantic slave trade tore bodies from homelands but could not erase the habits of thought. When these Africans were forced into the Carolina and Georgia Lowcountry, their knowledge became the backbone of plantation wealth. The very skills that built empires at home built fortunes abroad.
That is the irony of history: those enslaved were specialists — not savages. Their expertise was their curse and their contribution. Rice fetched gold on the global market, and the planters who claimed genius for it never planted a seed without African guidance.

The Rice Coast Connection
The “Rice Coast,” stretching from present-day Senegal to Liberia, became the crucible of this transfer. Ships like The Hare and The Andromache carried hundreds from Sierra Leone directly to Charleston and Port Royal. Traders like Henry Laurens and Richard Oswald documented their preference for captives “acquainted with rice,” especially from Sherbro, Mende, and Temne territories.
Those records — once instruments of commerce — are now confessions of dependence. They prove that the Gullah Geechee world was not accidental. It was designed by displaced Africans who refused to forget how to farm, build, and pray.

Spiritual Systems of Survival
Before the crossing, the Poro and Sande societies of West Africa trained men and women in balance — between the seen and unseen. The Gullah praise house later became a reflection of that spiritual architecture. When we hear ring shouts or feel the rhythm of a shout song, we are not hearing imitation — we are hearing continuation.
In the hush, you can still hear the call of ancestral teachers reminding us that spirituality was always science too — a way to order the world when the world became chaos.

Language as Bridge
From Temne verbs to Mende tonal patterns, from Vai rhythm to English structure, Gullah is linguistic testimony of survival through synthesis. It is not broken English — it is braided African genius.
Even before ships crossed, coastal traders had already developed pidgin languages for commerce across ethnic lines. That flexibility — the ability to code-switch, blend, and create — became the survival skill that birthed Gullah. The grammar of resilience was already in place.`,
    seoKeywords: [
      "Gullah Geechee origins",
      "Rice Coast Africa",
      "Sierra Leone rice culture",
      "Mende and Temne",
      "African civilizations",
      "transatlantic slave trade",
    ],
    image: "/blog-genesis.jpg",
  },
];

export function getPostBySlug(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
