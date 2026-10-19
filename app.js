/* ==========================================================================
   SunPlex IPTV - Application Logic (Netflix & Smarters Media Engine)
   ========================================================================== */

// SVG Data-URI Bulletproof Fallback Poster
const FALLBACK_POSTER = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='600' viewBox='0 0 400 600'><rect width='100%' height='100%' fill='%23111827'/><rect x='10%' y='10%' width='80%' height='80%' rx='16' fill='%231F2937' stroke='%23374151' stroke-width='2'/><text x='50%' y='48%' dominant-baseline='middle' text-anchor='middle' fill='%23E50914' font-family='sans-serif' font-size='26' font-weight='bold'>SUNPLEX 4K</text><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' fill='%239CA3AF' font-family='sans-serif' font-size='14'>STREAMING MEDIA</text></svg>";

// Default Stream & Download Sources (Defined at top to avoid Temporal Dead Zone)
const DEFAULT_STREAM_URL = "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8";
const DEFAULT_DOWNLOAD_URL = "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4";

const MOVIES_DATA = [
  // --- Hollywood Blockbusters ---
  {
    id: 2026,
    tmdbId: 1368337,
    title: "The Odyssey",
    subTitle: "The Mythic Epic",
    year: "2026",
    rating: "16+",
    imdb: "7.5",
    tmdb: "7.5",
    rtCritic: "93",
    rtAudience: "97",
    sunplexRating: "10.0",
    printType: "Hall Print",
    duration: "2h 45m",
    genre: "Adventure / English Movies / Action",
    tags: "Epic Adventure • English Movies • Action Blockbuster",
    type: "MOVIE",
    category: "Hollywood",
    badge: "Hall Print",
    topRank: 1,
    poster: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/nVBzWBqHTB3XD0iqWiJLfKLo5fq.jpg",
    summary: "An epic cinematic voyage through uncharted lands and mythical battles as ancient legends collide in the modern age.",
    cast: "Matt Damon, Tom Holland, Anne Hathaway, Robert Pattinson, Himesh Patel, Charlize Theron",
    castDetails: [{"name":"Matt Damon","character":"Odysseus","photo":"https://image.tmdb.org/t/p/w185/aCvBXTAR9B1qRjIRzMBYhhbm1fR.jpg"},{"name":"Tom Holland","character":"Telemachus","photo":"https://image.tmdb.org/t/p/w185/adwEBb2sCSzqwnpVgNEG7irl1Ne.jpg"},{"name":"Anne Hathaway","character":"Penelope","photo":"https://image.tmdb.org/t/p/w185/s6tflSD20MGz04ZR2R1lZvhmC4Y.jpg"},{"name":"Robert Pattinson","character":"Antinous","photo":"https://image.tmdb.org/t/p/w185/3qZ09UE7lN6AtorfXFRYpEtSY93.jpg"},{"name":"Himesh Patel","character":"Eurylochus","photo":"https://image.tmdb.org/t/p/w185/icqsXLmU0FxBGTv63kkA0GcrecO.jpg"},{"name":"Charlize Theron","character":"Calypso","photo":"https://image.tmdb.org/t/p/w185/gd7ShD0yt4bsR2STeQ19KQ6hvXL.jpg"}],
    creator: "Christopher Nolan",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 104,
    tmdbId: 569094,
    title: "Spider-Man: Across the Spider-Verse",
    subTitle: "Multiverse Unleashed",
    year: "2023",
    rating: "13+",
    imdb: "8.7",
    duration: "2h 20m",
    genre: "Hollywood / Action / Superhero",
    tags: "Slick • Multiverse • Sci-Fi • Animation",
    type: "MOVIE",
    category: "Hollywood",
    badge: "Dual Audio",
    topRank: 1,
    poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/kVd3a9YeLGkoeR50jGEXM6EqseS.jpg",
    summary: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
    cast: "Shameik Moore, Hailee Steinfeld, Brian Tyree Henry, Luna Lauren Vélez, Jake Johnson, Oscar Isaac",
    castDetails: [{"name":"Shameik Moore","character":"Miles Morales (voice)","photo":"https://image.tmdb.org/t/p/w185/ovUKfVOwJ7CadEHaG3NDsfA5xRq.jpg"},{"name":"Hailee Steinfeld","character":"Gwen Stacy (voice)","photo":"https://image.tmdb.org/t/p/w185/qDInsG0cxWNxS1X4t59TBZ5S6x5.jpg"},{"name":"Brian Tyree Henry","character":"Jeff Morales (voice)","photo":"https://image.tmdb.org/t/p/w185/2MsJh0bpyzwvOUnXOltHp3j85Pb.jpg"},{"name":"Luna Lauren Vélez","character":"Rio Morales (voice)","photo":"https://image.tmdb.org/t/p/w185/98BvmTJCZHx0jPv0oNcv04Jkmfb.jpg"},{"name":"Jake Johnson","character":"Peter B. Parker (voice)","photo":"https://image.tmdb.org/t/p/w185/3UNfW2qZgRkW81neNVfQvaRC92K.jpg"},{"name":"Oscar Isaac","character":"Miguel O'Hara (voice)","photo":"https://image.tmdb.org/t/p/w185/dW5U5yrIIPmMjRThR9KT2xH6nTz.jpg"}],
    creator: "Joaquim Dos Santos, Kemp Powers",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 101,
    tmdbId: 693134,
    title: "Dune: Part Two",
    subTitle: "The Prophet Rises",
    year: "2024",
    rating: "13+",
    imdb: "8.6",
    duration: "2h 46m",
    genre: "Hollywood / Sci-Fi / Epic",
    tags: "Visually Stunning • Sci-Fi • Desert Epic",
    type: "MOVIE",
    category: "Hollywood",
    badge: "1080p",
    topRank: 2,
    poster: "https://image.tmdb.org/t/p/w500/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/eZ239CUp1d6OryZEBPnO2n87gMG.jpg",
    summary: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    cast: "Timothée Chalamet, Zendaya, Rebecca Ferguson, Javier Bardem, Josh Brolin, Austin Butler",
    castDetails: [{"name":"Timothée Chalamet","character":"Paul Atreides","photo":"https://image.tmdb.org/t/p/w185/dFxpwRpmzpVfP1zjluH68DeQhyj.jpg"},{"name":"Zendaya","character":"Chani","photo":"https://image.tmdb.org/t/p/w185/qGkBlyn1AwQpuFnRARMRwj0iHZp.jpg"},{"name":"Rebecca Ferguson","character":"Jessica","photo":"https://image.tmdb.org/t/p/w185/ra53cM1aNmdH0aFhj8yBqPOj2fb.jpg"},{"name":"Javier Bardem","character":"Stilgar","photo":"https://image.tmdb.org/t/p/w185/zfRID0jx8DKBluPGU9xtk9sZWUt.jpg"},{"name":"Josh Brolin","character":"Gurney Halleck","photo":"https://image.tmdb.org/t/p/w185/sX2etBbIkxRaCsATyw5ZpOVMPTD.jpg"},{"name":"Austin Butler","character":"Feyd-Rautha","photo":"https://image.tmdb.org/t/p/w185/atdAs4pFGjUQ4m2W8kJYly7N6cC.jpg"}],
    creator: "Denis Villeneuve",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 102,
    tmdbId: 872585,
    title: "Oppenheimer",
    subTitle: "Now I Am Become Death",
    year: "2023",
    rating: "18+",
    imdb: "8.9",
    duration: "3h 00m",
    genre: "Hollywood / Bio / Drama",
    tags: "Historical • Tense • Masterpiece",
    type: "MOVIE",
    category: "Hollywood",
    badge: "1080p",
    topRank: 3,
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/neeNHeXjMF5fXoCJRsOmkNGC7q.jpg",
    summary: "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    cast: "Cillian Murphy, Emily Blunt, Matt Damon, Robert Downey Jr., Florence Pugh, Josh Hartnett",
    castDetails: [{"name":"Cillian Murphy","character":"J. Robert Oppenheimer","photo":"https://image.tmdb.org/t/p/w185/2lKs67r7FI4bPu0AXxMUJZxmUXn.jpg"},{"name":"Emily Blunt","character":"Kitty Oppenheimer","photo":"https://image.tmdb.org/t/p/w185/5nCSG5TL1bP1geD8aaBfaLnLLCD.jpg"},{"name":"Matt Damon","character":"Leslie Groves","photo":"https://image.tmdb.org/t/p/w185/aCvBXTAR9B1qRjIRzMBYhhbm1fR.jpg"},{"name":"Robert Downey Jr.","character":"Lewis Strauss","photo":"https://image.tmdb.org/t/p/w185/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg"},{"name":"Florence Pugh","character":"Jean Tatlock","photo":"https://image.tmdb.org/t/p/w185/1QfiLnofJFlOJOLCWaxyDpIN03v.jpg"},{"name":"Josh Hartnett","character":"Ernest Lawrence","photo":"https://image.tmdb.org/t/p/w185/5eMo8D7h1XrSu6ZN4UXhPcS6YNG.jpg"}],
    creator: "Christopher Nolan",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 105,
    tmdbId: 533535,
    title: "Deadpool & Wolverine",
    subTitle: "Maximum Effort",
    year: "2024",
    rating: "18+",
    imdb: "7.9",
    duration: "2h 08m",
    genre: "Hollywood / Action / Comedy",
    tags: "Hilarious • Violent • MCU Teamup",
    type: "MOVIE",
    category: "Hollywood",
    badge: "Dual Audio",
    topRank: 4,
    poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/by8z9Fe8y7p4jo2YlW2SZDnptyT.jpg",
    summary: "Wade Wilson reluctantly suits up with Wolverine to save his homeworld from existential threat.",
    cast: "Ryan Reynolds, Hugh Jackman, Emma Corrin, Matthew Macfadyen, Dafne Keen, Jon Favreau",
    castDetails: [{"name":"Ryan Reynolds","character":"Wade Wilson / Deadpool / Nicepool","photo":"https://image.tmdb.org/t/p/w185/trzgptffGvAlAT6MEu01fz47cLW.jpg"},{"name":"Hugh Jackman","character":"Logan / Wolverine","photo":"https://image.tmdb.org/t/p/w185/4Xujtewxqt6aU0Y81tsS9gkjizk.jpg"},{"name":"Emma Corrin","character":"Cassandra Nova","photo":"https://image.tmdb.org/t/p/w185/miSbXJBlq6S3dVvOr7OoNL4axW6.jpg"},{"name":"Matthew Macfadyen","character":"Mr. Paradox","photo":"https://image.tmdb.org/t/p/w185/sFaIfkykJdftwrc3BdEfpdg2mYW.jpg"},{"name":"Dafne Keen","character":"Laura / X-23","photo":"https://image.tmdb.org/t/p/w185/34BhddK5z2YHjfppOleezVrQ7Jt.jpg"},{"name":"Jon Favreau","character":"Happy Hogan","photo":"https://image.tmdb.org/t/p/w185/tnx7iMVydPQXGOoLsxXl84PXtbA.jpg"}],
    creator: "Shawn Levy",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },

  // --- Bollywood Blockbusters ---
  {
    id: 301,
    tmdbId: 872906,
    title: "Jawan",
    subTitle: "Ready",
    year: "2023",
    rating: "16+",
    imdb: "7.1",
    duration: "2h 49m",
    genre: "Bollywood / Action / Thriller",
    tags: "Massive Action • Thrilling • Heroic",
    type: "MOVIE",
    category: "Bollywood",
    badge: "Dual Audio",
    topRank: 1,
    poster: "https://image.tmdb.org/t/p/w500/jFt1gS4BGHlK8xt76Y81Alp4dbt.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5LtSjMNw6j3LkG29Oa4O0iY5U8.jpg",
    summary: "A high-octane action thriller that outlines the emotional journey of a prison chief set to rectify the wrongs in society.",
    cast: "Shah Rukh Khan, Nayanthara, Vijay Sethupathi, Deepika Padukone, Sanjay Dutt, Priyamani",
    castDetails: [{"name":"Shah Rukh Khan","character":"Vikram Rathore / Azad","photo":"https://image.tmdb.org/t/p/w185/tKeQhSyXyzlzxNtxFq24iIvzXrC.jpg"},{"name":"Nayanthara","character":"Narmada","photo":"https://image.tmdb.org/t/p/w185/sYUzvjsSsqeOgBblSzda6ZwwbEa.jpg"},{"name":"Vijay Sethupathi","character":"Kalee Gaikwad","photo":"https://image.tmdb.org/t/p/w185/a3HWdfCAbplrvoMNEJCjnkbqqOo.jpg"},{"name":"Deepika Padukone","character":"Aishwarya Rathore","photo":"https://image.tmdb.org/t/p/w185/rzvvBQ0r6oiqDdzcsdTRB7jN4Rx.jpg"},{"name":"Sanjay Dutt","character":"Madhavan Naik","photo":"https://image.tmdb.org/t/p/w185/oq4pnvWhl1HxKpp0KVlSfAr3Tiu.jpg"},{"name":"Priyamani","character":"Laxmi","photo":"https://image.tmdb.org/t/p/w185/grcW2eMm77Q2Kj1xX0HvZlRpGRR.jpg"}],
    creator: "Atlee Kumar",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 302,
    tmdbId: 864692,
    title: "Pathaan",
    subTitle: "Outfit X Arrives",
    year: "2023",
    rating: "13+",
    imdb: "6.9",
    duration: "2h 26m",
    genre: "Bollywood / Action / Spy",
    tags: "Spy Universe • High Energy • Blockbuster",
    type: "MOVIE",
    category: "Bollywood",
    badge: "1080p",
    topRank: 2,
    poster: "https://image.tmdb.org/t/p/w500/arf00BkwvXo0CFKbaD9OpqdE4Nu.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/9wRAIQeOv2qzcgpfvA4dYZKeezl.jpg",
    summary: "An exiled RAW agent races against a ruthless rogue officer with a deadly vendetta to avert a bio-weapon strike on India.",
    cast: "Shah Rukh Khan, Deepika Padukone, John Abraham, Dimple Kapadia, Ashutosh Rana, Prakash Belawadi",
    castDetails: [{"name":"Shah Rukh Khan","character":"Pathaan","photo":"https://image.tmdb.org/t/p/w185/tKeQhSyXyzlzxNtxFq24iIvzXrC.jpg"},{"name":"Deepika Padukone","character":"Rubina Mohsin","photo":"https://image.tmdb.org/t/p/w185/rzvvBQ0r6oiqDdzcsdTRB7jN4Rx.jpg"},{"name":"John Abraham","character":"Jim","photo":"https://image.tmdb.org/t/p/w185/xqOzxrbBkgbzT0pgAR2k03Hvd30.jpg"},{"name":"Dimple Kapadia","character":"Nandini","photo":"https://image.tmdb.org/t/p/w185/nZoVs8drMLefoBN7PZ49slHuJe7.jpg"},{"name":"Ashutosh Rana","character":"Sunil Luthra","photo":"https://image.tmdb.org/t/p/w185/jFlhAoEP3KGEXO3SXCA4YLM2Goc.jpg"},{"name":"Prakash Belawadi","character":"Dr. Sahani","photo":"https://image.tmdb.org/t/p/w185/bECb7W5XUSFVOgN0z9Ob1ludIha.jpg"}],
    creator: "Siddharth Anand",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 303,
    tmdbId: 11090,
    title: "Animal",
    subTitle: "Super Violent Family Saga",
    year: "2023",
    rating: "18+",
    imdb: "6.7",
    duration: "3h 21m",
    genre: "Bollywood / Action / Drama",
    tags: "Intense • Dark • Family Drama",
    type: "MOVIE",
    category: "Bollywood",
    badge: "1080p",
    topRank: 3,
    poster: "https://image.tmdb.org/t/p/w500/oNxEXmKTZtECHs0bQbI6dQoXYMV.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/nLWvnjWgm8CoVPaoaY2pNnVCwoz.jpg",
    summary: "A fierce son's obsessive love for his father leads to an all-out gang war and vengeance against ruthless rivals.",
    cast: "Rob Schneider, Colleen Haskell, John C. McGinley, Ed Asner, Michael Caton, Louis Lombardi",
    castDetails: [{"name":"Rob Schneider","character":"Marvin Mange","photo":"https://image.tmdb.org/t/p/w185/nGHHon86e0rxVV1GVMRuKheqf6L.jpg"},{"name":"Colleen Haskell","character":"Rianna","photo":"https://image.tmdb.org/t/p/w185/6pFN7ovlINXgHTpZosjBZUp025v.jpg"},{"name":"John C. McGinley","character":"Sgt. Sisk","photo":"https://image.tmdb.org/t/p/w185/a9Oc7STg83syQh3X22u2TroAifk.jpg"},{"name":"Ed Asner","character":"Chief Wilson","photo":"https://image.tmdb.org/t/p/w185/AeVizz1AfAB2TbsfyzgBvqeSR3G.jpg"},{"name":"Michael Caton","character":"Dr. Wilder","photo":"https://image.tmdb.org/t/p/w185/8V9uSF00fv8AHt51I0hwFDKAYDT.jpg"},{"name":"Louis Lombardi","character":"Fatty","photo":"https://image.tmdb.org/t/p/w185/cYxbGCEf0mnsACuxCIX0faCjGUQ.jpg"}],
    creator: "Sandeep Reddy Vanga",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 304,
    tmdbId: 579974,
    title: "RRR",
    subTitle: "Rise Roar Revolt",
    year: "2022",
    rating: "16+",
    imdb: "7.8",
    duration: "3h 07m",
    genre: "Bollywood / Action / Epic",
    tags: "Oscar Winner • Epic Battles • Heroic",
    type: "MOVIE",
    category: "Bollywood",
    badge: "Dual Audio",
    topRank: 4,
    poster: "https://image.tmdb.org/t/p/w500/wE0I6efAW4cDDmZQWtwZMOW44EJ.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/i0Y0wP8H6SRgjr6QmuwbtQbS24D.jpg",
    summary: "A fearless revolutionary and an officer in the British army forge an unbreakable friendship during colonial India.",
    cast: "N.T. Rama Rao Jr., Ram Charan, Olivia Morris, Ray Stevenson, Alison Doody, Ajay Devgn",
    castDetails: [{"name":"N.T. Rama Rao Jr.","character":"Komaram Bheem","photo":"https://image.tmdb.org/t/p/w185/5ycQgZ3SPUa12bq0yn1jpToBq9X.jpg"},{"name":"Ram Charan","character":"Alluri Sitarama Raju","photo":"https://image.tmdb.org/t/p/w185/twGqYUCR0Yh33j3TcgRTZRBRhTd.jpg"},{"name":"Olivia Morris","character":"Jennifer 'Jenny' Buxton","photo":"https://image.tmdb.org/t/p/w185/iAzUTXzFWwEkRx6Ygudqnx4DmtW.jpg"},{"name":"Ray Stevenson","character":"Scott Buxton","photo":"https://image.tmdb.org/t/p/w185/9QCVNDgTgDEbGsa6w3JuECEPuQz.jpg"},{"name":"Alison Doody","character":"Cassandra Buxton","photo":"https://image.tmdb.org/t/p/w185/q5CpMFAjLP40JHgwS6qWku6arSC.jpg"},{"name":"Ajay Devgn","character":"Alluri Venkatarama Raju","photo":"https://image.tmdb.org/t/p/w185/vnHQQFzTjJ0sv14DGMIoKa3qTxN.jpg"}],
    creator: "S.S. Rajamouli",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 305,
    title: "Kalki 2898 AD",
    subTitle: "The Future Rises",
    year: "2024",
    rating: "13+",
    imdb: "7.6",
    duration: "3h 01m",
    genre: "Bollywood / Sci-Fi / Action",
    tags: "Futuristic • Mythology • High VFX",
    type: "MOVIE",
    category: "Bollywood",
    badge: "Dual Audio",
    topRank: 5,
    poster: "https://image.tmdb.org/t/p/w500/rstcAnBeCkxNQjNp3YXrF6IP1tW.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/o8XSR1SONnjcsv84NRu6Mwsl5io.jpg",
    summary: "Set in a post-apocalyptic world in the year 2898 AD, a modern avatar of Vishnu descends to protect the world.",
    cast: "Amitabh Bachchan, Prabhas, Deepika Padukone, Kamal Haasan, Saswata Chatterjee, Shobana",
    creator: "Nag Ashwin",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },

  // --- Action Thrillers ---
  {
    id: 202,
    tmdbId: 697843,
    title: "Extraction 2",
    subTitle: "Tyler Rake Return Mission",
    year: "2023",
    rating: "18+",
    imdb: "7.9",
    duration: "2h 02m",
    genre: "Action / Thriller",
    tags: "Adrenaline • Action • Explosive",
    type: "MOVIE",
    category: "Action",
    badge: "1080p",
    topRank: 1,
    poster: "https://image.tmdb.org/t/p/w500/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/wRxLAw4l17LqiFcPLkobriPTZAw.jpg",
    summary: "Back from the brink of death, highly skilled commando Tyler Rake takes on another dangerous mission.",
    cast: "Chris Hemsworth, Golshifteh Farahani, Adam Bessa, Tornike Gogrichiani, Tornike Bziava, Tinatin Dalakishvili",
    castDetails: [{"name":"Chris Hemsworth","character":"Tyler Rake","photo":"https://image.tmdb.org/t/p/w185/piQGdoIQOF3C1EI5cbYZLAW1gfj.jpg"},{"name":"Golshifteh Farahani","character":"Nik Khan","photo":"https://image.tmdb.org/t/p/w185/lbsd2lAIQq4egOUXDIfjhte12vv.jpg"},{"name":"Adam Bessa","character":"Yaz Khan","photo":"https://image.tmdb.org/t/p/w185/v8y5C5AA4G9Wr8ZbOZ0zbfNymIW.jpg"},{"name":"Tornike Gogrichiani","character":"Zurab Radiani / Nikoloz Radiani","photo":"https://image.tmdb.org/t/p/w185/uxricy51fMAFvK2WDsYAiBaoamG.jpg"},{"name":"Tornike Bziava","character":"David Radiani","photo":"https://image.tmdb.org/t/p/w185/brZSTPCKTfDOCcc7ZsqHbsENpZy.jpg"},{"name":"Tinatin Dalakishvili","character":"Ketevan Radiani","photo":"https://image.tmdb.org/t/p/w185/ulnFxigewurjUXWEZLLgva47XH8.jpg"}],
    creator: "Sam Hargrave, Joe Russo",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 401,
    tmdbId: 603692,
    title: "John Wick: Chapter 4",
    subTitle: "Baba Yaga Returns",
    year: "2023",
    rating: "18+",
    imdb: "7.7",
    duration: "2h 49m",
    genre: "Action / Crime",
    tags: "Gun-Fu • Non-Stop • Stylish",
    type: "MOVIE",
    category: "Action",
    badge: "Dual Audio",
    topRank: 2,
    poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/7I6VUdPj6tQECNHdviJkUHD2u89.jpg",
    summary: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy.",
    cast: "Keanu Reeves, Donnie Yen, Bill Skarsgård, Ian McShane, Laurence Fishburne, Lance Reddick",
    castDetails: [{"name":"Keanu Reeves","character":"John Wick","photo":"https://image.tmdb.org/t/p/w185/8RZLOyYGsoRe9p44q3xin9QkMHv.jpg"},{"name":"Donnie Yen","character":"Caine","photo":"https://image.tmdb.org/t/p/w185/hTlhrrZMj8hZVvD17j4KyAFWBHc.jpg"},{"name":"Bill Skarsgård","character":"Marquis","photo":"https://image.tmdb.org/t/p/w185/xBXLx1m0uzhXIbY3wN8lmPGeUHl.jpg"},{"name":"Ian McShane","character":"Winston","photo":"https://image.tmdb.org/t/p/w185/rteBJYNgD1yGsHg2HGZAIrYHz1t.jpg"},{"name":"Laurence Fishburne","character":"Bowery King","photo":"https://image.tmdb.org/t/p/w185/2GbXERENPpl5MmlqOLlPVaVtifD.jpg"},{"name":"Lance Reddick","character":"Charon","photo":"https://image.tmdb.org/t/p/w185/22mVtEXZbpt0J7S0LhIhdkfRrZV.jpg"}],
    creator: "Chad Stahelski",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 402,
    tmdbId: 361743,
    title: "Top Gun: Maverick",
    subTitle: "Danger Zone",
    year: "2022",
    rating: "13+",
    imdb: "8.3",
    duration: "2h 10m",
    genre: "Action / Aviation",
    tags: "Aerial Action • High Altitude • Emotional",
    type: "MOVIE",
    category: "Action",
    badge: "1080p",
    topRank: 3,
    poster: "https://image.tmdb.org/t/p/w500/n0YuM4f5lvGAP6MAW2kBIzugXnc.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg",
    summary: "After thirty years, Maverick is still pushing the envelope as a top naval aviator.",
    cast: "Tom Cruise, Miles Teller, Jennifer Connelly, Bashir Salahuddin, Jon Hamm, Charles Parnell",
    castDetails: [{"name":"Tom Cruise","character":"Capt. Pete 'Maverick' Mitchell","photo":"https://image.tmdb.org/t/p/w185/maf8PhSvDCdEwjEMbYfGpojR5RP.jpg"},{"name":"Miles Teller","character":"Lt. Bradley 'Rooster' Bradshaw","photo":"https://image.tmdb.org/t/p/w185/kDf3sW3USjEBDQ3Ua7lbwOfwty6.jpg"},{"name":"Jennifer Connelly","character":"Penny Benjamin","photo":"https://image.tmdb.org/t/p/w185/wdmcJagSRJ65AuJ4IUCzuHAdvgy.jpg"},{"name":"Bashir Salahuddin","character":"Wo-1. Bernie 'Hondo' Coleman","photo":"https://image.tmdb.org/t/p/w185/ZL5MRzjd6kWkvQXqh5mgPY1CKP.jpg"},{"name":"Jon Hamm","character":"Adm. Beau 'Cyclone' Simpson","photo":"https://image.tmdb.org/t/p/w185/mrXE5fZbEDPc7BEE5G21J6qrwzi.jpg"},{"name":"Charles Parnell","character":"Adm. Solomon 'Warlock' Bates","photo":"https://image.tmdb.org/t/p/w185/wLywO5xtR97YKtkYb57hXEFpL7j.jpg"}],
    creator: "Joseph Kosinski",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },

  // --- Horror ---
  {
    id: 501,
    tmdbId: 713704,
    title: "Evil Dead Rise",
    subTitle: "Mommy Loves You",
    year: "2023",
    rating: "18+",
    imdb: "6.6",
    duration: "1h 36m",
    genre: "Horror / Gore",
    tags: "Terrifying • Blood • Demons",
    type: "MOVIE",
    category: "Horror",
    badge: "1080p",
    topRank: 1,
    poster: "https://image.tmdb.org/t/p/w500/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/7bWxAsNPv9CXHOhZbJVlj2KxgfP.jpg",
    summary: "A twisted tale of two estranged sisters whose reunion is cut short by the rise of flesh-possessing demons.",
    cast: "Lily Sullivan, Alyssa Sutherland, Morgan Davies, Gabrielle Echols, Nell Fisher, Mark Mitchinson",
    castDetails: [{"name":"Lily Sullivan","character":"Beth","photo":"https://image.tmdb.org/t/p/w185/sLjxpxV2JX8k3k9VWoIPrzqlh5J.jpg"},{"name":"Alyssa Sutherland","character":"Ellie","photo":"https://image.tmdb.org/t/p/w185/tPxURKufpOddRYTgg5FuBwNK4iT.jpg"},{"name":"Morgan Davies","character":"Danny","photo":"https://image.tmdb.org/t/p/w185/tRo3puQuNnfXtV0N6VAuSpSq5FB.jpg"},{"name":"Gabrielle Echols","character":"Bridget","photo":"https://image.tmdb.org/t/p/w185/1f7Yk5VU2NsY5hZ4cqf4PxnZqdd.jpg"},{"name":"Nell Fisher","character":"Kassie","photo":"https://image.tmdb.org/t/p/w185/2x3jmnaWn8usaozAXjf08jKcKlL.jpg"},{"name":"Mark Mitchinson","character":"Mr. Fonda","photo":"https://image.tmdb.org/t/p/w185/dBnuglswEEKSQk6kxbSd6D1uS5j.jpg"}],
    creator: "Lee Cronin",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 502,
    tmdbId: 762441,
    title: "A Quiet Place: Day One",
    subTitle: "The Day The World Went Silent",
    year: "2024",
    rating: "13+",
    imdb: "6.8",
    duration: "1h 39m",
    genre: "Horror / Sci-Fi / Thriller",
    tags: "Suspenseful • Aliens • Silent Survival",
    type: "MOVIE",
    category: "Horror",
    badge: "Hall Print",
    topRank: 2,
    poster: "https://image.tmdb.org/t/p/w500/hU42CRk14JuPEdqZG3AWmagiPAP.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/6XjMwQTvnICBz6TguiDKkDVHvgS.jpg",
    summary: "Experience the day the world went silent in this thriller following a woman named Sam surviving the initial alien invasion.",
    cast: "Lupita Nyong'o, Joseph Quinn, Alex Wolff, Djimon Hounsou, Eliane Umuhire, Takunda Khumalo",
    castDetails: [{"name":"Lupita Nyong'o","character":"Samira","photo":"https://image.tmdb.org/t/p/w185/y40Wu1T742kynOqtwXASc5Qgm49.jpg"},{"name":"Joseph Quinn","character":"Eric","photo":"https://image.tmdb.org/t/p/w185/zshhuioZaH8S5ZKdMcojzWi1ntl.jpg"},{"name":"Alex Wolff","character":"Reuben","photo":"https://image.tmdb.org/t/p/w185/7PMu5zFOEH7PqFDzrKThgKD4Ndf.jpg"},{"name":"Djimon Hounsou","character":"Henri","photo":"https://image.tmdb.org/t/p/w185/tpvtxxvCx2Mb5DV632hmuYlHoiY.jpg"},{"name":"Eliane Umuhire","character":"Zena","photo":"https://image.tmdb.org/t/p/w185/u2q6nQtLsKGyTnWHtmKGyeYAyXq.jpg"},{"name":"Takunda Khumalo","character":"Osahar","photo":"https://image.tmdb.org/t/p/w185/8vX06iIWUxv7XZ59P0alJl63DF9.jpg"}],
    creator: "Michael Sarnoski",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 503,
    title: "Alien: Romulus",
    subTitle: "In Space No One Hears You",
    year: "2024",
    rating: "18+",
    imdb: "7.3",
    duration: "1h 59m",
    genre: "Horror / Sci-Fi",
    tags: "Xenomorph • Claustrophobic • Sci-Fi",
    type: "MOVIE",
    category: "Horror",
    badge: "Hall Print",
    topRank: 3,
    poster: "https://image.tmdb.org/t/p/w500/2uSWRTtCG336nuBiG8jOTEUKSy8.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/iYqSQaWDttQIQzsxg9xHyg0bttG.jpg",
    summary: "While scavenging the deep ends of a derelict space station, a group of young space colonizers comes face to face with the most terrifying life form.",
    cast: "Cailee Spaeny, David Jonsson, Archie Renaux, Isabela Merced, Spike Fearn, Aileen Wu",
    creator: "Fede Álvarez",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },

  // --- Web Series ---
  {
    id: 201,
    tmdbId: 42009,
    title: "Black Mirror",
    subTitle: "Demon 79",
    year: "2023",
    rating: "18+",
    imdb: "8.8",
    duration: "6 Seasons",
    genre: "Series / Sci-Fi / Thriller",
    tags: "Mind-Bending • Dark • Sci-Fi",
    type: "SERIES",
    category: "Series",
    badge: "1080p",
    topRank: 1,
    poster: "https://image.tmdb.org/t/p/w500/seN6rRfN0I6n8iDXjlSMk1QjNcq.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/dg3OindVAGZBjlT3xYKqIAdukPL.jpg",
    summary: "Northern England, 1979. A meek sales assistant discovers she must commit terrible acts to prevent an imminent nuclear apocalypse.",
    cast: "Jesse Plemons, Cristin Milioti, Jimmi Simpson",
    castDetails: [],
    creator: "Charlie Brooker",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 601,
    tmdbId: 66732,
    title: "Stranger Things",
    subTitle: "The Upside Down",
    year: "2022",
    rating: "16+",
    imdb: "8.7",
    duration: "4 Seasons",
    genre: "Series / Sci-Fi / Horror",
    tags: "80s Nostalgia • Monsters • Sci-Fi",
    type: "SERIES",
    category: "Series",
    badge: "Dual Audio",
    topRank: 2,
    poster: "https://image.tmdb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/9P4IIMYY3HifqeruZq0ZZ9g7YUi.jpg",
    summary: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    cast: "Winona Ryder, David Harbour, Millie Bobby Brown, Finn Wolfhard, Gaten Matarazzo, Caleb McLaughlin",
    castDetails: [{"name":"Winona Ryder","character":"Joyce Byers","photo":"https://image.tmdb.org/t/p/w185/8RVrlgtua8b53wmK7oZAAkm0N5O.jpg"},{"name":"David Harbour","character":"Jim Hopper","photo":"https://image.tmdb.org/t/p/w185/qMFtMWlYVtFVyBoBhX5IoA5sN5a.jpg"},{"name":"Millie Bobby Brown","character":"Eleven / Jane Hopper","photo":"https://image.tmdb.org/t/p/w185/8qasWpPYwiBgPw5Sn54YzN7q5uI.jpg"},{"name":"Finn Wolfhard","character":"Mike Wheeler","photo":"https://image.tmdb.org/t/p/w185/vgjd34eWfVL6GsLHwiwcAsjWLmo.jpg"},{"name":"Gaten Matarazzo","character":"Dustin Henderson","photo":"https://image.tmdb.org/t/p/w185/alVT7oDp8N5G9WLIApI9jqeuqHq.jpg"},{"name":"Caleb McLaughlin","character":"Lucas Sinclair","photo":"https://image.tmdb.org/t/p/w185/4jVS3EziBn7bf97ErxkW7jsdiLM.jpg"}],
    creator: "The Duffer Brothers",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 603,
    tmdbId: 1396,
    title: "Breaking Bad",
    subTitle: "Say My Name",
    year: "2013",
    rating: "18+",
    imdb: "9.5",
    duration: "5 Seasons",
    genre: "Series / Crime / Drama",
    tags: "Gritty • Crime • Masterpiece",
    type: "SERIES",
    category: "Series",
    badge: "1080p",
    topRank: 3,
    poster: "https://image.tmdb.org/t/p/w500/anFx9aTOOYqgS3v7x3R84Kz67ly.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
    summary: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine.",
    cast: "Bryan Cranston, Aaron Paul, Anna Gunn, RJ Mitte, Dean Norris, Betsy Brandt",
    castDetails: [{"name":"Bryan Cranston","character":"Walter White","photo":"https://image.tmdb.org/t/p/w185/7Jahy5LZX2Fo8fGJltMreAI49hC.jpg"},{"name":"Aaron Paul","character":"Jesse Pinkman","photo":"https://image.tmdb.org/t/p/w185/8Ac9uuoYwZoYVAIJfRLzzLsGGJn.jpg"},{"name":"Anna Gunn","character":"Skyler White","photo":"https://image.tmdb.org/t/p/w185/adppyeu1a4REN3khtgmXusrapFi.jpg"},{"name":"RJ Mitte","character":"Walter White Jr.","photo":"https://image.tmdb.org/t/p/w185/sNPA92ZrssYhlaB1UA2pWcLD9db.jpg"},{"name":"Dean Norris","character":"Hank Schrader","photo":"https://image.tmdb.org/t/p/w185/mKRrEbsxAX3ro700HsViFArRM7l.jpg"},{"name":"Betsy Brandt","character":"Marie Schrader","photo":"https://image.tmdb.org/t/p/w185/xAnuzyjdMbQq9L1c4JNwXL52Wm4.jpg"}],
    creator: "Vince Gilligan",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 604,
    tmdbId: 71446,
    title: "Money Heist",
    subTitle: "La Casa de Papel",
    year: "2021",
    rating: "18+",
    imdb: "8.2",
    duration: "5 Seasons",
    genre: "Series / Crime / Heist",
    tags: "Thrilling • Smart • Spanish",
    type: "SERIES",
    category: "Series",
    badge: "Dual Audio",
    topRank: 4,
    poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xGexTKCJDkl12dTW4YCBDXWb1AD.jpg",
    summary: "An unusual group of robbers led by The Professor attempt to carry out the most perfect robbery in Spanish history.",
    cast: "Úrsula Corberó, Itziar Ituño, Álvaro Morte, Pedro Alonso, Miguel Herrán, Jaime Lorente",
    castDetails: [{"name":"Úrsula Corberó","character":"Tokio","photo":"https://image.tmdb.org/t/p/w185/cmH8Z459tw9YkR61QfxlCSlZw9P.jpg"},{"name":"Itziar Ituño","character":"Raquel Murillo","photo":"https://image.tmdb.org/t/p/w185/l7XfYka8XxPj0fYjq22lvyxkJ7S.jpg"},{"name":"Álvaro Morte","character":"Profesor","photo":"https://image.tmdb.org/t/p/w185/2TGPhdpRC5wjdFEJqnLYiN5kbwg.jpg"},{"name":"Pedro Alonso","character":"Berlín","photo":"https://image.tmdb.org/t/p/w185/38HeVKeOBztVYrLJOWzAtEZiB02.jpg"},{"name":"Miguel Herrán","character":"Río","photo":"https://image.tmdb.org/t/p/w185/eFNlbsaMODCHys35ZQOkMQNh0Jq.jpg"},{"name":"Jaime Lorente","character":"Denver","photo":"https://image.tmdb.org/t/p/w185/nLaxzU92z14FIbe25sE8jDMIThZ.jpg"}],
    creator: "Álex Pina",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 605,
    tmdbId: 85937,
    title: "Demon Slayer",
    subTitle: "Kimetsu no Yaiba",
    year: "2023",
    rating: "16+",
    imdb: "8.6",
    duration: "3 Seasons",
    genre: "Series / Anime / Action",
    tags: "Anime • Sword Fighting • Demons",
    type: "SERIES",
    category: "Series",
    badge: "Dual Audio",
    topRank: 5,
    poster: "https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/3GQKYh6Trm8pxd2AypovoYQf4Ay.jpg",
    summary: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon herself.",
    cast: "Natsuki Hanae, Akari Kito, Hiro Shimono, Yoshitsugu Matsuoka",
    castDetails: [{"name":"Natsuki Hanae","character":"Tanjirō Kamado (voice)","photo":"https://image.tmdb.org/t/p/w185/alTb0DlcPIbcwM08WSmxFai58sd.jpg"},{"name":"Akari Kito","character":"Nezuko Kamado (voice)","photo":"https://image.tmdb.org/t/p/w185/AoRQOZRC0yINB0WeKnM569rV1wF.jpg"},{"name":"Hiro Shimono","character":"Zenitsu Agatsuma (voice)","photo":"https://image.tmdb.org/t/p/w185/yrSDcgFefHtWkFmLnTrcw2t0MV.jpg"},{"name":"Yoshitsugu Matsuoka","character":"Inosuke Hashibira (voice)","photo":"https://image.tmdb.org/t/p/w185/ugDwdWEXnmv43jcbnfAi4XwiQ8C.jpg"}],
    creator: "Koyoharu Gotouge",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  }
];

const CHANNELS_DATA = [
  // ==================== BANGLADESH (BD) ====================
  {
    id: 1,
    name: "NTV HD Bangladesh",
    cat: "bangla",
    country: "bangladesh",
    epg: "টেলিফিল্ম ও মেগা বিনোদন ধারাবাহিক নাটক",
    logo: "https://i.imgur.com/l75bDTx.png",
    streamUrl: "https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8"
  },
  {
    id: 2,
    name: "Channel i HD",
    cat: "bangla",
    country: "bangladesh",
    epg: "হৃদয়ে মাটি ও মানুষ এবং বিশেষ নাটক",
    logo: "https://i.imgur.com/X0JJlOX.png",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
  },
  {
    id: 3,
    name: "Somoy TV HD Live",
    cat: "news",
    country: "bangladesh",
    epg: "দেশ ও বিদেশের সর্বশেষ ব্রেকিং নিউজ",
    logo: "https://i.imgur.com/i54AQic.png",
    streamUrl: "https://playertest.longtailvideo.com/adaptive/oceans_aes/oceans_aes.m3u8"
  },
  {
    id: 4,
    name: "T Sports HD Live",
    cat: "sports",
    country: "bangladesh",
    epg: "Live: BPL Cricket Championship 2026",
    logo: "https://i.imgur.com/2JzlorD.png",
    streamUrl: "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8"
  },
  {
    id: 5,
    name: "BTV World HD",
    cat: "bangla",
    country: "bangladesh",
    epg: "জাতীয় সংবাদ ও বিশেষ ম্যাগাজিন ইত্যাদি",
    logo: "https://i.imgur.com/sSnrg7o.png",
    streamUrl: "https://dwamdstream104.akamaized.net/hls/live/2015530/dwstream104/index.m3u8"
  },
  {
    id: 6,
    name: "Channel 24 HD",
    cat: "news",
    country: "bangladesh",
    epg: "লাইভ প্রাইম নিউজ বুলেটিন ও মুক্তবাক",
    logo: "https://i.imgur.com/4JLkaF7.png",
    streamUrl: "https://playertest.longtailvideo.com/adaptive/oceans_aes/oceans_aes.m3u8"
  },
  {
    id: 7,
    name: "GTV (Gazi TV) HD",
    cat: "sports",
    country: "bangladesh",
    epg: "লাইভ ক্রিকেট ও বিনোদন অনুষ্ঠান",
    logo: "https://i.imgur.com/2Lzhiq6.png",
    streamUrl: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/gazibdz.stream/live-orgin/gazibdz.stream/playlist.m3u8"
  },
  {
    id: 8,
    name: "ATN Bangla HD",
    cat: "bangla",
    country: "bangladesh",
    epg: "রাত ৯টার স্পেশাল ড্রামা সিরিয়াল",
    logo: "https://i.imgur.com/K1HmMRz.png",
    streamUrl: "https://tvsen5.aynaott.com/atnbangla/index.m3u8"
  },
  {
    id: 9,
    name: "BanglaVision HD",
    cat: "bangla",
    country: "bangladesh",
    epg: "দৃষ্টিজুড়ে দেশ বিনোদন স্পেশাল",
    logo: "https://i.imgur.com/nCWgp38.png",
    streamUrl: "https://tvsen5.aynaott.com/banglavision/index.m3u8"
  },

  // ==================== INDIA (IN) ====================
  {
    id: 10,
    name: "Star Sports 1 HD",
    cat: "sports",
    country: "india",
    epg: "Live: India vs Australia ODI Series",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/india/star-sports-1-in.png",
    streamUrl: "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8"
  },
  {
    id: 11,
    name: "Star Sports Select 1",
    cat: "sports",
    country: "india",
    epg: "Live: Premier League & Formula 1 2026",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/india/star-sports-select-1-in.png",
    streamUrl: "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8"
  },
  {
    id: 12,
    name: "Sony Entertainment HD",
    cat: "entertainment",
    country: "india",
    epg: "The Kapil Sharma Show Weekend",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/india/sony-entertainment-television-hd-in.png",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
  },
  {
    id: 13,
    name: "Colors TV HD",
    cat: "entertainment",
    country: "india",
    epg: "Bigg Boss Season 19 Weekend Ka Vaar",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/india/colors-in.png",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 14,
    name: "Zee TV HD Prime",
    cat: "entertainment",
    country: "india",
    epg: "Kundali Bhagya Mega Episode",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/india/zee-tv-hd-in.png",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 15,
    name: "Star Gold HD Premier",
    cat: "movies",
    country: "india",
    epg: "Movie: Jawan Full Movie HD",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/india/star-gold-hd-in.png",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 16,
    name: "Zee Cinema HD",
    cat: "movies",
    country: "india",
    epg: "Movie: Gadar 2 Action Mega Hit",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/india/zee-cinema-hd-in.png",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 17,
    name: "Sony MAX HD",
    cat: "movies",
    country: "india",
    epg: "Movie: South Action Mega Blockbuster",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/india/sony-max-hd-in.png",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 18,
    name: "Star Jalsha HD",
    cat: "bangla",
    country: "india",
    epg: "অনুরাগের ছোঁয়া মেগা এপিসোড",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/india/star-jalsha-hd-in.png",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 19,
    name: "Zee Bangla HD",
    cat: "bangla",
    country: "india",
    epg: "দিদি নাম্বার ওয়ান সিজন ১০",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/india/zee-bangla-hd-in.png",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 20,
    name: "Aaj Tak HD Live",
    cat: "news",
    country: "india",
    epg: "सबसे तेज़ - Live 24x7 News Bulletin",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/india/aaj-tak-hd-in.png",
    streamUrl: "https://feeds.intoday.in/aajtak/api/aajtakhd/master.m3u8"
  },
  {
    id: 21,
    name: "MTV Beats HD 4K",
    cat: "music",
    country: "india",
    epg: "Non-stop Bollywood Dance Hits",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/india/mtv-beats-hd-in.png",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
  },
  {
    id: 22,
    name: "Sony YAY! Kids",
    cat: "kids",
    country: "india",
    epg: "Oggy and the Cockroaches Super Special",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/india/sony-yay-in.png",
    streamUrl: "https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8"
  },

  // ==================== USA & GLOBAL (US/UK) ====================
  {
    id: 23,
    name: "HBO Max Cinema 4K",
    cat: "movies",
    country: "usa",
    epg: "Movie: Oppenheimer & House of the Dragon",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/hbo-max-us.png",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
  },
  {
    id: 24,
    name: "CNN International HD",
    cat: "news",
    country: "usa",
    epg: "The Lead with Jake Tapper & World News",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/cnn-us.png",
    streamUrl: "https://dwamdstream104.akamaized.net/hls/live/2015530/dwstream104/index.m3u8"
  },
  {
    id: 25,
    name: "ESPN HD USA",
    cat: "sports",
    country: "usa",
    epg: "Live: NBA Finals & NFL Sunday Night",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/espn-us.png",
    streamUrl: "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8"
  },
  {
    id: 26,
    name: "Discovery Science HD",
    cat: "documentary",
    country: "usa",
    epg: "Docu: How the Universe Works Season 12",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/discovery-science-us.png",
    streamUrl: "https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/master.m3u8"
  },
  {
    id: 27,
    name: "National Geographic 4K",
    cat: "documentary",
    country: "usa",
    epg: "Wildlife: Savage Kingdom 4K UHD",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/national-geographic-us.png",
    streamUrl: "https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/master.m3u8"
  },
  {
    id: 28,
    name: "Cartoon Network HD",
    cat: "kids",
    country: "usa",
    epg: "Ben 10 & Tom and Jerry Classics",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/india/cartoon-network-in.png",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 29,
    name: "Nickelodeon HD",
    cat: "kids",
    country: "usa",
    epg: "SpongeBob SquarePants Marathon",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/nickelodeon-us.png",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 30,
    name: "Disney Channel 4K",
    cat: "kids",
    country: "usa",
    epg: "Phineas and Ferb & Mickey Mouse Specials",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/disney-channel-us.png",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 31,
    name: "Animal Planet HD",
    cat: "documentary",
    country: "usa",
    epg: "River Monsters with Jeremy Wade",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/animal-planet-us.png",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 32,
    name: "History Channel HD",
    cat: "documentary",
    country: "usa",
    epg: "Ancient Aliens: The Hidden Technology",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/history-channel-us.png",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 33,
    name: "BBC News World HD",
    cat: "news",
    country: "usa",
    epg: "BBC World News Live Prime Broadcast",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-kingdom/bbc-news-uk.png",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 34,
    name: "Sky Sports Premier League",
    cat: "sports",
    country: "usa",
    epg: "Live: Premier League Super Sunday",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-kingdom/sky-sports-premier-league-uk.png",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 35,
    name: "TNT Sports 1 HD",
    cat: "sports",
    country: "usa",
    epg: "UEFA Champions League Matchday Live",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-kingdom/tnt-sports-1-uk.png",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  }
];

// App Navigation History Stack
let viewHistory = ['dashboardView'];
let currentView = 'dashboardView';

/* ==========================================================================
   TMDB API Live Engine (Key: f82f048192f53f87c2da59131f633355)
   ========================================================================== */
const TMDB_API_KEY = "f82f048192f53f87c2da59131f633355";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
const TMDB_BACKDROP_BASE = "https://image.tmdb.org/t/p/original";

async function fetchLiveTmdbCategory(endpoint, isTv = false, customCategory = null) {
  try {
    const res = await fetch(`${TMDB_BASE_URL}${endpoint}`);
    if (!res.ok) return [];
    const data = await res.json();
    return (data.results || []).map(item => {
      const yearVal = parseInt((item.release_date || item.first_air_date || "2024").substring(0, 4), 10);
      let assignedBadge = '1080p';
      if (yearVal >= 2026 || (item.release_date && item.release_date.startsWith('2026'))) {
        assignedBadge = 'Hall Print';
      } else if (item.id % 4 === 0) {
        assignedBadge = 'Hall Print';
      } else if (item.id % 2 === 0 || (customCategory && (customCategory.includes('Bollywood') || customCategory.includes('South Indian')))) {
        assignedBadge = 'Dual Audio';
      } else {
        assignedBadge = '1080p';
      }

      return {
        id: item.id,
        tmdbId: item.id,
        title: item.title || item.name || "SunPlex Stream",
        subTitle: item.original_title || item.original_name || item.title || "4K Stream",
        year: String(yearVal || '2024'),
        rating: item.adult ? "18+" : "13+",
        imdb: item.vote_average ? item.vote_average.toFixed(1) : "8.5",
        duration: isTv ? "Seasons" : "2h 15m",
        genre: customCategory ? `${customCategory} / HD Stream` : (isTv ? "Web Series / TV Show" : "Movie / VOD Stream"),
        tags: "TMDB Official • Ultra HD • 4K Stream",
        type: isTv ? "SERIES" : "MOVIE",
        category: customCategory || (isTv ? "TV Shows" : "Hollywood"),
        printType: assignedBadge,
        badge: assignedBadge,
        quality: assignedBadge,
        poster: item.poster_path ? `${TMDB_IMAGE_BASE}${item.poster_path}` : FALLBACK_POSTER,
        backdrop: item.backdrop_path ? `${TMDB_BACKDROP_BASE}${item.backdrop_path}` : (item.poster_path ? `${TMDB_IMAGE_BASE}${item.poster_path}` : FALLBACK_POSTER),
        summary: item.overview || "High-octane premium streaming content powered by SunPlex IPTV engine.",
        cast: "TMDB Featured Cast Performance",
        creator: "TMDB Studios",
        streamUrl: DEFAULT_STREAM_URL
      };
    });
  } catch (err) {
    console.error("TMDB Live Fetch Error:", err);
    return [];
  }
}

async function loadLiveTmdbFeeds() {
  const CAROUSEL_IDS = [
    "latestFeaturesCarousel", "globalTrendingCarousel", "hollywoodCarousel",
    "bollywoodCarousel", "foreignMoviesCarousel", "animationMoviesCarousel",
    "southIndianCarousel", "banglaMoviesCarousel", "tvShowsCarousel",
    "moviesTrendingCarousel", "moviesHollywoodCarousel", "moviesBollywoodCarousel",
    "moviesActionCarousel", "moviesHorrorCarousel", "seriesTrendingCarousel",
    "seriesDramaCarousel", "seriesSciFiCarousel", "seriesAnimeCarousel", "seriesHorrorCarousel"
  ];
  CAROUSEL_IDS.forEach(id => {
    const c = document.getElementById(id);
    if (c && !c.children.length) renderCarouselSkeleton(c, 6);
  });

  try {
    const [
      latestFeatures,
      globalTrending,
      hollywood,
      bollywood,
      foreignMovies,
      animationMovies,
      southIndian,
      banglaMovies,
      tvShows
    ] = await Promise.all([
      fetchLiveTmdbCategory(`/movie/now_playing?api_key=${TMDB_API_KEY}`, false, "Latest Features"),
      fetchLiveTmdbCategory(`/trending/movie/week?api_key=${TMDB_API_KEY}`, false, "Global Trending"),
      fetchLiveTmdbCategory(`/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=en&sort_by=popularity.desc`, false, "Hollywood"),
      fetchLiveTmdbCategory(`/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=hi&sort_by=popularity.desc`, false, "Bollywood"),
      fetchLiveTmdbCategory(`/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=ko|ja|es|fr|it|de&sort_by=popularity.desc`, false, "Foreign Movies"),
      fetchLiveTmdbCategory(`/discover/movie?api_key=${TMDB_API_KEY}&with_genres=16&sort_by=popularity.desc`, false, "Animation"),
      fetchLiveTmdbCategory(`/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=te|ta|ml|kn&sort_by=popularity.desc`, false, "South Indian"),
      fetchLiveTmdbCategory(`/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=bn&sort_by=popularity.desc`, false, "Bangla Movies"),
      fetchLiveTmdbCategory(`/tv/popular?api_key=${TMDB_API_KEY}`, true, "TV Shows")
    ]);

    // Merge all fetched TMDB items into MOVIES_DATA repo so all views have full dataset
    const allFetched = [
      ...latestFeatures, ...globalTrending, ...hollywood, ...bollywood,
      ...foreignMovies, ...animationMovies, ...southIndian, ...banglaMovies, ...tvShows
    ];
    allFetched.forEach(item => {
      const idx = MOVIES_DATA.findIndex(m => m.id === item.id);
      if (idx === -1) {
        MOVIES_DATA.push(item);
      } else {
        MOVIES_DATA[idx] = { ...MOVIES_DATA[idx], ...item };
      }
    });

    // 1. Latest Features (Home)
    if (latestFeatures.length) {
      renderCarouselContainer("latestFeaturesCarousel", latestFeatures);
    }

    // 2. Global Trending (Home & Movies)
    if (globalTrending.length) {
      renderCarouselContainer("globalTrendingCarousel", globalTrending);
      renderCarouselContainer("moviesTrendingCarousel", globalTrending);
    }

    // 3. Hollywood Movies (Home & Movies)
    if (hollywood.length) {
      renderCarouselContainer("hollywoodCarousel", hollywood);
      renderCarouselContainer("moviesHollywoodCarousel", hollywood);
      
      // Sync Movies Slider with top 5 live Hollywood Movies
      if (hollywood.length >= 5) {
        MOVIES_SLIDER_ITEMS.length = 0;
        hollywood.slice(0, 5).forEach((m) => {
          MOVIES_SLIDER_ITEMS.push({
            id: m.id,
            title: (m.title || "HOLLYWOOD MOVIE").toUpperCase(),
            badge: getMovieQualityBadge(m),
            tags: `<span>Hollywood</span> • <span>${m.year || '2024'}</span> • <span>Rating ${m.imdb || '8.5'}</span>`,
            backdrop: m.backdrop || m.poster,
            trailer: "https://www.youtube.com/embed/Way9Dexny3w?autoplay=1"
          });
        });
        renderMoviesHeroSlide(currentMoviesHeroIndex);
      }
    }

    // 4. Bollywood Movies (Home & Movies)
    if (bollywood.length) {
      renderCarouselContainer("bollywoodCarousel", bollywood);
      renderCarouselContainer("moviesBollywoodCarousel", bollywood);
    }

    // 5. Foreign Movies (Home)
    if (foreignMovies.length) {
      renderCarouselContainer("foreignMoviesCarousel", foreignMovies);
    }

    // 6. Animation Movies (Home)
    if (animationMovies.length) {
      renderCarouselContainer("animationMoviesCarousel", animationMovies);
    }

    // 7. South Indian Movies (Home)
    if (southIndian.length) {
      renderCarouselContainer("southIndianCarousel", southIndian);
    }

    // 8. Bangla Movies (Home)
    if (banglaMovies.length) {
      renderCarouselContainer("banglaMoviesCarousel", banglaMovies);
    }

    // 9. TV Shows (Home & Series)
    if (tvShows.length) {
      renderCarouselContainer("tvShowsCarousel", tvShows);
      renderCarouselContainer("seriesTrendingCarousel", tvShows);
      renderCarouselContainer("seriesDramaCarousel", tvShows.filter(s => s.genre.includes('Drama') || s.genre.includes('Crime') || s.genre.includes('Series')));
      renderCarouselContainer("seriesSciFiCarousel", tvShows.filter(s => s.genre.includes('Sci-Fi') || s.genre.includes('Action') || s.id % 2 === 0));
      renderCarouselContainer("seriesAnimeCarousel", tvShows.filter(s => s.genre.includes('Anime') || s.genre.includes('Animation') || s.id % 3 === 0));
      renderCarouselContainer("seriesHorrorCarousel", tvShows.slice(0, 10));
      
      // Sync Series Slider with top 5 live Series
      if (tvShows.length >= 5) {
        SERIES_SLIDER_ITEMS.length = 0;
        tvShows.slice(0, 5).forEach((s) => {
          SERIES_SLIDER_ITEMS.push({
            id: s.id,
            title: (s.title || "POPULAR SERIES").toUpperCase(),
            badge: getMovieQualityBadge(s),
            tags: `<span>TV Shows</span> • <span>${s.year || '2024'}</span> • <span>Rating ${s.imdb || '8.8'}</span>`,
            backdrop: s.backdrop || s.poster,
            trailer: "https://www.youtube.com/embed/shW9i6k8cB0?autoplay=1"
          });
        });
        renderSeriesHeroSlide(currentSeriesHeroIndex);
      }
    }

    // Sync Home hero slider with Trending / Latest Features
    const homeSource = globalTrending.length >= 5 ? globalTrending : latestFeatures;
    if (homeSource.length >= 5) {
      HERO_SLIDER_MOVIES.length = 0;
      homeSource.slice(0, 6).forEach((item) => {
        HERO_SLIDER_MOVIES.push({
          id: item.id,
          title: (item.title || "SUNPLEX STREAM").toUpperCase(),
          badge: getMovieQualityBadge(item),
          tags: `<span>${item.category || 'Trending'}</span> • <span>${item.year || '2024'}</span> • <span>Rating ${item.imdb || '8.6'}</span>`,
          backdrop: item.backdrop || item.poster,
          trailer: "https://www.youtube.com/embed/shW9i6k8cB0?autoplay=1"
        });
      });
      renderHeroSlide(currentHeroIndex);
    }

    // Refresh catalog grids with newly fetched live TMDB content
    renderMoviesGrid();
    renderSeriesGrid();

    // Re-attach mouse-drag listeners to the newly populated carousels
    if (typeof initAllCarouselsMouseDrag === 'function') initAllCarouselsMouseDrag();

    console.log("Live TMDB feeds connected for all 9 categories!");
  } catch (e) {
    console.error("Error loading live TMDB feeds:", e);
    CAROUSEL_IDS.forEach(id => {
      const c = document.getElementById(id);
      if (c && c.querySelector(".carousel-skeleton")) {
        renderCarouselError(c, loadLiveTmdbFeeds);
      }
    });
    showToast("Couldn't load catalog — showing offline content");
  }
}

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
  initSplash();
  initNotifications();
  initHeroSlider();
  initMoviesHeroSlider();
  initSeriesHeroSlider();
  renderContinueWatchingCarousel();
  renderHomeCarousels();
  renderMoviesPageCarousels();
  renderSeriesPageCarousels();
  renderMoviesGrid();
  renderSeriesGrid();
  renderChannels('all');
  renderFavoritesRail();
  renderRecentRail();
  if (CHANNELS_DATA.length) {
    const firstCh = CHANNELS_DATA[0];
    activeChannelId = firstCh.id;
    const activeLogo = document.getElementById("activeChannelLogo");
    if (activeLogo && firstCh.logo) {
      activeLogo.src = firstCh.logo;
      activeLogo.style.display = "inline-block";
    }
    const activeName = document.getElementById("activeChannelName");
    if (activeName) activeName.innerText = firstCh.name;
    const activeEpg = document.getElementById("liveNowPlayingText");
    if (activeEpg) activeEpg.innerText = firstCh.epg || `Live: ${firstCh.name}`;
    updateUpNextStrip(firstCh);
    updatePlayerFavIcon();
  }
  renderDownloadsList();
  
  // Live TMDB API integration with key f82f048192f53f87c2da59131f633355
  loadLiveTmdbFeeds();

  // Initialize mouse drag-to-scroll on all carousels
  initAllCarouselsMouseDrag();

  // Initialize global screen/view finger swipe navigation
  initGlobalViewSwipe();

  // Login gate: if no session, show login first
  if (!getSession()) {
    switchView('loginView');
  }

  applyThemeAndAccent();
  syncHeaderAvatar();

  // Header: Luxury frosted glass (responsive scroll detection)
  const header = document.querySelector(".top-header");
  if (header) {
    const applyHeaderScrollState = () => {
      const mainArea = document.querySelector(".main-view-area");
      const scrollY = Math.max(
        window.scrollY || 0,
        document.documentElement.scrollTop || 0,
        document.body.scrollTop || 0,
        (mainArea ? mainArea.scrollTop : 0)
      );
      if (scrollY > 15) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    };
    applyHeaderScrollState();
    const mainArea = document.querySelector(".main-view-area");
    if (mainArea) mainArea.addEventListener("scroll", applyHeaderScrollState, { passive: true });
    window.addEventListener("scroll", applyHeaderScrollState, { capture: true, passive: true });
    document.addEventListener("scroll", applyHeaderScrollState, { capture: true, passive: true });
  }
});

// Screen 1: Splash Screen Handler
function initSplash() {
  const splash = document.getElementById("splashScreen");
  setTimeout(() => {
    if (splash && !splash.classList.contains("fade-out")) {
      splash.classList.add("fade-out");
    }
  }, 2200);
}

function skipSplash() {
  const splash = document.getElementById("splashScreen");
  if (splash) {
    splash.classList.add("fade-out");
  }
}

// View Switching Router
function switchView(viewId, isBack = false) {
  if (!isBack && currentView !== viewId) {
    viewHistory.push(viewId);
  }
  currentView = viewId;

  const views = document.querySelectorAll('.sub-view');
  views.forEach(v => v.classList.remove('active'));

  const target = document.getElementById(viewId);
  if (target) {
    target.classList.add('active');
  }

  const mainViewArea = document.querySelector('.main-view-area');
  if (mainViewArea) {
    mainViewArea.scrollTop = 0;
  }

  // Update Header Back Button Visibility
  const backBtn = document.getElementById("headerBackBtn");
  const dropdowns = document.getElementById("headerDropdowns");

  if (viewId === 'dashboardView') {
    if (backBtn) backBtn.style.display = "none";
    if (dropdowns) dropdowns.style.display = "flex";
  } else {
    if (backBtn) backBtn.style.display = "inline-flex";
    if (dropdowns) dropdowns.style.display = "none";
  }

  // Update Mobile Bottom Nav active state
  updateBottomNavTabs(viewId);

  // Hide header + bottom nav on the login page
  document.body.classList.toggle('login-mode', viewId === 'loginView');

  if (viewId === 'accountView') {
    renderAccountView();
  }
  if (viewId === 'searchView') {
    initSearchViewIfNeeded();
  }
  if (viewId === 'categoryListingView') {
    renderCategoryListing();
  }

  // Handle embedded video playback on view transitions
  if (viewId === 'liveTvView') {
    const activeCh = CHANNELS_DATA.find(c => c.id === activeChannelId) || CHANNELS_DATA[0];
    playLiveChannelStream(activeCh?.streamUrl || DEFAULT_STREAM_URL, activeCh?.name);
  } else {
    pauseLiveChannelStream();
  }

  if (viewId !== 'singleMovieView') {
    stopInlineDetailPlay();
  }

  // Scroll to top of view (both window and inner scroll container)
  const mainArea = document.querySelector('.main-view-area');
  if (mainArea) mainArea.scrollTop = 0;
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

  // Re-verify carousel drag listeners on current view
  initAllCarouselsMouseDrag();
}

function goBack() {
  if (viewHistory.length > 1) {
    viewHistory.pop();
    const prevView = viewHistory[viewHistory.length - 1];
    switchView(prevView, true);
  } else {
    switchView('dashboardView', true);
  }
}

function updateBottomNavTabs(viewId) {
  const tabs = document.querySelectorAll('.nav-tab-btn');
  tabs.forEach(t => t.classList.remove('active'));

  if (viewId === 'dashboardView') {
    document.getElementById('tabHome')?.classList.add('active');
  } else if (viewId === 'moviesView' || (viewId === 'singleMovieView' && activeCurrentMovie?.type === 'MOVIE')) {
    document.getElementById('tabMovies')?.classList.add('active');
  } else if (viewId === 'seriesView' || (viewId === 'singleMovieView' && activeCurrentMovie?.type === 'SERIES')) {
    document.getElementById('tabSeries')?.classList.add('active');
  } else if (viewId === 'liveTvView') {
    document.getElementById('tabLiveTv')?.classList.add('active');
  } else if (viewId === 'downloadsView') {
    document.getElementById('tabDownloads')?.classList.add('active');
  }
}

// Screen 2: Render All Home Page Carousels (Popular, Bollywood, Hollywood, Action, Horror)

// Movie & Series Quality Badge Resolver (1080p, Dual Audio, Hall Print, 4K UHD)
function getMovieQualityBadge(item) {
  if (!item) return '1080p';
  const explicit = item.quality || item.printType || item.badge;
  if (explicit && ['1080p', 'Dual Audio', 'Hall Print', '1080p Dual Audio', '4K UHD', '720p', 'HD 1080p'].includes(explicit)) {
    return explicit;
  }
  const title = (item.title || '').toLowerCase();
  const year = parseInt(item.year || '2024', 10);
  if (year >= 2026 || title.includes('odyssey') || title.includes('shaitaan') || title.includes('romulus') || title.includes('quiet place') || title.includes('smile 2') || title.includes('fighter') || title.includes('sinners')) {
    return 'Hall Print';
  }
  if (title.includes('jawan') || title.includes('pathaan') || title.includes('rrr') || title.includes('kalki') || title.includes('salaar') || title.includes('leo') || title.includes('pushpa') || title.includes('brahm') || title.includes('spider') || title.includes('deadpool') || title.includes('john wick') || title.includes('stranger things') || title.includes('money heist') || title.includes('demon slayer')) {
    return 'Dual Audio';
  }
  if (title.includes('oppenheimer') || title.includes('avatar') || title.includes('interstellar') || title.includes('top gun')) {
    return '1080p';
  }
  return '1080p';
}

function getQualityBadgeClass(quality) {
  const q = String(quality || '').toLowerCase();
  if (q.includes('hall')) return 'badge-hall-print';
  if (q.includes('dual')) return 'badge-dual-audio';
  if (q.includes('4k')) return 'badge-4k';
  if (q.includes('live')) return 'badge-live';
  return 'badge-1080p';
}

function renderHomeCarousels() {
  renderCarouselContainer("latestFeaturesCarousel", MOVIES_DATA.filter(m => m.category === 'Latest Features' || m.year >= 2024 || m.type === 'MOVIE').slice(0, 15));
  renderCarouselContainer("globalTrendingCarousel", MOVIES_DATA.filter(m => m.category === 'Global Trending' || m.type === 'MOVIE').slice(0, 15));
  renderCarouselContainer("hollywoodCarousel", MOVIES_DATA.filter(m => m.category === 'Hollywood' || m.genre.includes('Hollywood') || m.type === 'MOVIE').slice(0, 15));
  renderCarouselContainer("bollywoodCarousel", MOVIES_DATA.filter(m => m.category === 'Bollywood' || m.genre.includes('Bollywood')).slice(0, 15));
  renderCarouselContainer("foreignMoviesCarousel", MOVIES_DATA.filter(m => m.category === 'Foreign Movies' || m.genre.includes('Foreign') || m.genre.includes('Korean') || m.genre.includes('Japanese') || m.genre.includes('Anime')).slice(0, 15));
  renderCarouselContainer("animationMoviesCarousel", MOVIES_DATA.filter(m => m.category === 'Animation' || m.genre.includes('Animation') || m.genre.includes('Anime')).slice(0, 15));
  renderCarouselContainer("southIndianCarousel", MOVIES_DATA.filter(m => m.category === 'South Indian' || m.genre.includes('South Indian') || m.title.includes('RRR') || m.title.includes('Kalki') || m.title.includes('Salaar') || m.title.includes('Pushpa')).slice(0, 15));
  renderCarouselContainer("banglaMoviesCarousel", MOVIES_DATA.filter(m => m.category === 'Bangla Movies' || m.genre.includes('Bangla') || m.category === 'Bangla').slice(0, 15));
  renderCarouselContainer("tvShowsCarousel", MOVIES_DATA.filter(m => m.type === 'SERIES' || m.category === 'TV Shows' || m.category === 'Series').slice(0, 15));
}

// Dedicated Movies Page Carousels Renderer
function renderMoviesPageCarousels() {
  const movies = MOVIES_DATA.filter(m => m.type === 'MOVIE');
  renderCarouselContainer("moviesTrendingCarousel", movies);
  renderCarouselContainer("moviesBollywoodCarousel", movies.filter(m => m.category === 'Bollywood' || m.genre.includes('Bollywood')));
  renderCarouselContainer("moviesHollywoodCarousel", movies.filter(m => m.category === 'Hollywood' || m.genre.includes('Hollywood')));
  renderCarouselContainer("moviesActionCarousel", movies.filter(m => m.category === 'Action' || m.genre.includes('Action')));
  renderCarouselContainer("moviesHorrorCarousel", movies.filter(m => m.category === 'Horror' || m.genre.includes('Horror')));
}

// Dedicated Series Page Carousels Renderer
function renderSeriesPageCarousels() {
  const series = MOVIES_DATA.filter(m => m.type === 'SERIES');
  renderCarouselContainer("seriesTrendingCarousel", series);
  renderCarouselContainer("seriesDramaCarousel", series.filter(m => m.genre.includes('Drama') || m.genre.includes('Crime')));
  renderCarouselContainer("seriesSciFiCarousel", series.filter(m => m.genre.includes('Sci-Fi') || m.genre.includes('Action') || m.genre.includes('Adventure')));
  renderCarouselContainer("seriesAnimeCarousel", series.filter(m => m.genre.includes('Anime') || m.genre.includes('Animation')));
  renderCarouselContainer("seriesHorrorCarousel", series.filter(m => m.genre.includes('Horror') || m.genre.includes('Thriller') || m.genre.includes('Mystery')));
}

function renderCarouselSkeleton(container, count = 6) {
  const wrap = document.createElement("div");
  wrap.className = "carousel-skeleton";
  for (let i = 0; i < count; i++) {
    const s = document.createElement("div");
    s.className = "carousel-skeleton-card";
    wrap.appendChild(s);
  }
  container.appendChild(wrap);
}

function renderCarouselError(container, retryFn) {
  container.innerHTML = `
    <div class="carousel-error-state">
      <i class="ri-wifi-off-line" style="font-size:22px;"></i>
      <div>Couldn't load this row. Check your connection.</div>
      <button class="btn-outline" type="button">Retry</button>
    </div>`;
  const btn = container.querySelector("button");
  if (btn && retryFn) btn.onclick = retryFn;
}

function renderCarouselContainer(containerId, itemsList) {
  const carousel = document.getElementById(containerId);
  if (!carousel) return;
  carousel.innerHTML = "";

  const rawList = (itemsList && itemsList.length > 0) ? itemsList : MOVIES_DATA;
  const list = applyParentalCap(rawList);
  if (!list.length) {
    renderCarouselSkeleton(carousel, 6);
    return;
  }

  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "top-10-card";
    card.onclick = () => openFeaturedMovie(item.id);

    const qBadge = getMovieQualityBadge(item);
    const qClass = getQualityBadgeClass(qBadge);

    card.innerHTML = `
      <div class="top-10-badge ${qClass}">${qBadge}</div>
      <img src="${item.poster || FALLBACK_POSTER}" alt="${item.title}" class="poster-img" loading="lazy" onerror="this.onerror=null; this.src='https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg';">
      <div class="top-10-overlay">
        <div class="top-10-title">${item.title}</div>
      </div>
    `;
    carousel.appendChild(card);
  });

  enableCarouselMouseDrag(carousel);
}

// Screen 3: Open Single Movie / Series Details View
// Screen 4: Category Selection Modal / Overlay
function openCategoryModal() {
  document.getElementById("categoryOverlayModal")?.classList.add("active");
  document.getElementById("categoryScrim")?.classList.add("active");
}

function closeCategoryModal() {
  document.getElementById("categoryOverlayModal")?.classList.remove("active");
  document.getElementById("categoryScrim")?.classList.remove("active");
}

function openAccountDrawer() {
  try {
    const d = document.getElementById("accountDrawer");
    const s = document.getElementById("accountScrim");
    if (!d) { console.warn("accountDrawer missing"); return; }
    const p = (typeof getProfile === 'function') ? getProfile() : null;
    const plan = (typeof getPlan === 'function') ? getPlan() : null;
    if (p) {
      const avEl = document.getElementById("drawerAvatar");
      const nmEl = document.getElementById("drawerProfileName");
      const emEl = document.getElementById("drawerProfileEmail");
      if (avEl && typeof paintAvatarInto === 'function') paintAvatarInto(avEl, p.avatar);
      if (nmEl) nmEl.textContent = p.name || "SunPlex User";
      if (emEl) emEl.textContent = p.email || "";
    }
    if (plan) {
      const planEl = document.getElementById("drawerPlanBadge");
      if (planEl) planEl.textContent = (plan.name || "PREMIUM").toUpperCase();
    }
    d.classList.add("active");
    if (s) s.classList.add("active");
  } catch (e) {
    console.error("openAccountDrawer error:", e);
    switchView('accountView');
  }
}

function closeAccountDrawer() {
  document.getElementById("accountDrawer")?.classList.remove("active");
  document.getElementById("accountScrim")?.classList.remove("active");
}

/* ==========================================================================
   APP NOTIFICATIONS SYSTEM (Header Bell & Dynamic Navigation)
   ========================================================================== */
const NOTIF_STORAGE_KEY = 'sunplex_app_notifications';

let appNotifications = [
  {
    id: 'notif-1',
    title: 'The Odyssey (2026)',
    message: 'New Hall Print release starring Matt Damon & Tom Holland is now streaming in 4K!',
    time: '5m ago',
    poster: 'https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg',
    read: false,
    targetType: 'movie',
    targetId: 2026,
    badgeText: 'Watch Movie'
  },
  {
    id: 'notif-2',
    title: 'Spider-Man: Across the Spider-Verse',
    message: 'Miles Morales in stunning 1080p Dual Audio. Tap to stream instantly.',
    time: '45m ago',
    poster: 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
    read: false,
    targetType: 'movie',
    targetId: 104,
    badgeText: 'Watch Movie'
  },
  {
    id: 'notif-3',
    title: 'Live Sports: ICC T20 / BPL Stream',
    message: 'High-definition live cricket broadcast on T Sports HD & Star Sports.',
    time: '2h ago',
    icon: 'ri-broadcast-line',
    read: false,
    targetType: 'channel',
    targetId: 104,
    badgeText: 'Live Stream'
  },
  {
    id: 'notif-4',
    title: 'Trending Web Series',
    message: 'Explore the complete top-rated series and multi-season collections.',
    time: '1d ago',
    icon: 'ri-tv-line',
    read: true,
    targetType: 'view',
    targetView: 'seriesView',
    badgeText: 'Explore Series'
  }
];

let currentNotifFilter = 'all';

function loadStoredNotifications() {
  try {
    const raw = localStorage.getItem(NOTIF_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        appNotifications = parsed;
      }
    }
  } catch (e) {
    console.warn("Could not load notifications from localStorage", e);
  }
}

function saveNotifications() {
  try {
    localStorage.setItem(NOTIF_STORAGE_KEY, JSON.stringify(appNotifications));
  } catch (e) {
    console.warn("Could not save notifications to localStorage", e);
  }
}

function initNotifications() {
  loadStoredNotifications();
  updateNotificationBadge();
  renderNotificationsList();
}

function updateNotificationBadge(animate = false) {
  const badge = document.getElementById("notificationBadge");
  const countPill = document.getElementById("notificationCountPill");
  const unreadCount = appNotifications.filter(n => !n.read).length;

  if (badge) {
    if (unreadCount > 0) {
      badge.textContent = unreadCount > 99 ? '99+' : unreadCount;
      badge.style.display = "flex";
      if (animate) {
        badge.classList.remove("animate-pulse");
        void badge.offsetWidth; // trigger reflow
        badge.classList.add("animate-pulse");
      }
    } else {
      badge.style.display = "none";
    }
  }

  if (countPill) {
    countPill.textContent = unreadCount > 0 ? `${unreadCount} New` : '0 New';
  }
}

function toggleNotificationDrawer() {
  const drawer = document.getElementById("notificationDrawer");
  if (!drawer) return;
  if (drawer.classList.contains("active")) {
    closeNotificationDrawer();
  } else {
    openNotificationDrawer();
  }
}

function openNotificationDrawer() {
  const drawer = document.getElementById("notificationDrawer");
  const scrim = document.getElementById("notificationScrim");
  if (!drawer) return;
  renderNotificationsList();
  drawer.classList.add("active");
  if (scrim) scrim.classList.add("active");
}

function closeNotificationDrawer() {
  document.getElementById("notificationDrawer")?.classList.remove("active");
  document.getElementById("notificationScrim")?.classList.remove("active");
}

function filterNotifications(filter, btnEl) {
  currentNotifFilter = filter;
  document.querySelectorAll('.notif-filter-tab').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  renderNotificationsList();
}

function renderNotificationsList() {
  const container = document.getElementById("notificationListContainer");
  if (!container) return;

  const items = currentNotifFilter === 'unread' 
    ? appNotifications.filter(n => !n.read) 
    : appNotifications;

  if (!items.length) {
    container.innerHTML = `
      <div class="notification-empty">
        <i class="ri-notification-off-line"></i>
        <p>${currentNotifFilter === 'unread' ? 'No unread notifications' : 'No notifications right now'}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(n => {
    let mediaHtml = '';
    if (n.poster) {
      mediaHtml = `
        <div class="notif-item-media">
          <img src="${n.poster}" alt="${n.title}" loading="lazy" onerror="this.onerror=null; this.src='${FALLBACK_POSTER}';">
        </div>
      `;
    } else {
      mediaHtml = `
        <div class="notif-item-icon-box">
          <i class="${n.icon || 'ri-notification-3-line'}"></i>
        </div>
      `;
    }

    const badgeLabel = n.badgeText || (n.targetType === 'channel' ? 'Watch Live' : (n.targetType === 'view' ? 'Open Page' : 'Play Now'));

    return `
      <div class="notification-item ${n.read ? '' : 'unread'}" onclick="handleNotificationClick('${n.id}')">
        ${mediaHtml}
        <div class="notif-item-content">
          <div class="notif-item-header">
            <span class="notif-item-title" title="${n.title}">${n.title}</span>
            <span class="notif-item-time">${n.time || ''}</span>
          </div>
          <div class="notif-item-message">${n.message}</div>
          <div class="notif-item-footer">
            <span class="notif-item-badge"><i class="ri-play-circle-fill"></i> ${badgeLabel}</span>
            ${n.read ? '' : '<span class="notif-unread-dot" title="Unread"></span>'}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function handleNotificationClick(notifId) {
  const notif = appNotifications.find(n => n.id === notifId);
  if (!notif) return;

  // Mark as read
  notif.read = true;
  saveNotifications();
  updateNotificationBadge();
  closeNotificationDrawer();

  // Navigate to target content
  if (notif.targetType === 'movie' || notif.targetMovieId) {
    const movieId = notif.targetId || notif.targetMovieId;
    showToast(`Opening ${notif.title}...`);
    openFeaturedMovie(movieId);
  } else if (notif.targetType === 'channel' || notif.targetChannelId) {
    const channelId = notif.targetId || notif.targetChannelId;
    switchView('liveTvView');
    showToast(`Streaming ${notif.title}...`);
    const ch = (CHANNELS_DATA || []).find(c => c.id == channelId || c.name.toLowerCase().includes(String(channelId).toLowerCase()));
    if (ch) {
      setTimeout(() => {
        selectChannel(ch);
      }, 150);
    }
  } else if (notif.targetType === 'view' || notif.targetView) {
    const viewName = notif.targetView || notif.targetId;
    showToast(`Navigating to ${notif.title}...`);
    switchView(viewName);
  } else {
    showToast(notif.title);
  }
}

function markAllNotificationsAsRead() {
  appNotifications.forEach(n => { n.read = true; });
  saveNotifications();
  updateNotificationBadge();
  renderNotificationsList();
  showToast("All notifications marked as read");
}

function clearAllNotifications() {
  appNotifications = [];
  saveNotifications();
  updateNotificationBadge();
  renderNotificationsList();
  showToast("All notifications cleared");
}

// Global API: Send a notification dynamically from anywhere in the app!
window.addAppNotification = function({ title, message, time = 'Just now', icon, poster, targetType = 'movie', targetId, targetView, badgeText }) {
  const newNotif = {
    id: 'notif-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
    title: title || 'SunPlex Notification',
    message: message || '',
    time: time,
    icon: icon || (poster ? null : 'ri-notification-3-line'),
    poster: poster || null,
    read: false,
    targetType,
    targetId,
    targetView,
    badgeText
  };
  appNotifications.unshift(newNotif);
  saveNotifications();
  updateNotificationBadge(true);
  renderNotificationsList();
  showToast(`🔔 ${title}`);
  return newNotif;
};

function selectCategory(categoryName) {
  const label = document.getElementById("selectedCategoryLabel");
  if (label) label.innerText = categoryName;

  // Highlight the matching drawer item
  document.querySelectorAll('.drawer-item').forEach(item => {
    const txt = (item.textContent || '').trim();
    item.classList.toggle('active', txt === categoryName);
  });

  // Close the right-side categories drawer
  closeCategoryModal();

  // Open the dedicated listing page for this category
  openCategoryListing(categoryName);

  const items = document.querySelectorAll('.cat-modal-item');
  items.forEach(item => {
    if (item.innerText === categoryName) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  closeCategoryModal();

  // Filter movies catalog grid by category name
  renderMoviesGrid(categoryName.toLowerCase());
  switchView('moviesView');
}

// Search Input Handlers
function toggleSearchInput() {
  const bar = document.getElementById("searchOverlayBar");
  if (!bar) return;
  bar.classList.toggle("active");
  if (bar.classList.contains("active")) {
    document.getElementById("searchInput")?.focus();
  }
}

function handleSearchInput(e) {
  const query = e.target.value.toLowerCase();
  if (query.length > 1) {
    renderMoviesGrid(query);
    switchView('moviesView');
  } else {
    renderMoviesGrid();
  }
}

// Render VOD Movies Grid
function renderMoviesGrid(filterQuery = '') {
  const grid = document.getElementById("moviesGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const list = applyParentalCap(filterQuery
    ? MOVIES_DATA.filter(m => m.title.toLowerCase().includes(filterQuery) || m.genre.toLowerCase().includes(filterQuery) || m.category?.toLowerCase().includes(filterQuery))
    : MOVIES_DATA);

  list.forEach(movie => {
    const card = document.createElement("div");
    card.className = "top-10-card";
    card.style.aspectRatio = "2/3";
    card.onclick = () => openFeaturedMovie(movie.id);
    const qBadge = getMovieQualityBadge(movie);
    const qClass = getQualityBadgeClass(qBadge);
    card.innerHTML = `
      <div class="top-10-badge ${qClass}">${qBadge}</div>
      <img src="${movie.poster}" alt="${movie.title}" class="poster-img" loading="lazy" onerror="this.onerror=null; this.src='https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg';">
      <div class="top-10-overlay">
        <div class="top-10-title">${movie.title}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderSeriesGrid() {
  const grid = document.getElementById("seriesGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const seriesList = MOVIES_DATA.filter(m => m.type === 'SERIES' || m.duration.includes('Season'));

  (seriesList.length ? seriesList : MOVIES_DATA).forEach(show => {
    const card = document.createElement("div");
    card.className = "top-10-card";
    card.onclick = () => openFeaturedMovie(show.id);
    const qBadge = getMovieQualityBadge(show);
    const qClass = getQualityBadgeClass(qBadge);
    card.innerHTML = `
      <div class="top-10-badge ${qClass}">${qBadge}</div>
      <img src="${show.poster}" alt="${show.title}" class="poster-img" loading="lazy" onerror="this.onerror=null; this.src='https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg';">
      <div class="top-10-overlay">
        <div class="top-10-title">${show.title}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// IPTV Channels Renderer
let currentChannelCategory = 'sports';
let activeChannelId = null;

const FAV_KEY = 'sunplex_tv_favs';
const RECENT_KEY = 'sunplex_tv_recent';
const RECENT_MAX = 8;

function getFavIds() {
  try { return JSON.parse(localStorage.getItem(FAV_KEY) || '[]'); } catch { return []; }
}
function setFavIds(ids) { localStorage.setItem(FAV_KEY, JSON.stringify(ids)); }
function getRecentIds() {
  try { return JSON.parse(localStorage.getItem(RECENT_KEY) || '[]'); } catch { return []; }
}
function pushRecentId(id) {
  const list = getRecentIds().filter(x => x !== id);
  list.unshift(id);
  localStorage.setItem(RECENT_KEY, JSON.stringify(list.slice(0, RECENT_MAX)));
}

function isFav(id) { return getFavIds().includes(id); }

function toggleFavorite(id) {
  const list = getFavIds();
  const idx = list.indexOf(id);
  if (idx >= 0) list.splice(idx, 1); else list.push(id);
  setFavIds(list);
  renderFavoritesRail();
  renderChannels(currentChannelCategory, document.getElementById("channelSearchInput")?.value || "");
  updatePlayerFavIcon();
}

function toggleFavoriteCurrent() {
  if (activeChannelId != null) toggleFavorite(activeChannelId);
}

function updatePlayerFavIcon() {
  const icon = document.getElementById("favoriteIcon");
  if (!icon) return;
  const fav = activeChannelId != null && isFav(activeChannelId);
  icon.className = fav ? "ri-star-fill" : "ri-star-line";
  icon.style.color = fav ? "var(--accent-gold)" : "";
}

function getChannelsForCategory(category) {
  if (!category || category === 'all') return CHANNELS_DATA;
  if (category === 'bangladesh' || category === 'india' || category === 'usa') {
    return CHANNELS_DATA.filter(c => c.country === category);
  }
  return CHANNELS_DATA.filter(c => c.cat === category);
}

function renderChannels(category, searchQuery = "") {
  currentChannelCategory = category;
  const container = document.getElementById("channelsListContainer");
  if (!container) return;
  container.innerHTML = "";

  let filtered = getChannelsForCategory(category);
  if (searchQuery) {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(c => 
      c.name.toLowerCase().includes(q) ||
      (c.country && c.country.toLowerCase().includes(q)) ||
      (c.epg && c.epg.toLowerCase().includes(q))
    );
  }

  if (!filtered.length) {
    container.innerHTML = `<div class="channels-empty-state"><i class="ri-tv-line" style="font-size:22px;"></i><br>No channels found</div>`;
    return;
  }

  filtered.forEach((ch) => {
    const div = document.createElement("div");
    const isActive = ch.id === activeChannelId;
    const fav = isFav(ch.id);
    div.className = `channel-card ${isActive ? 'active' : ''}`;
    div.onclick = () => selectChannel(ch, div);

    let logoHtml = '';
    if (ch.logo && (ch.logo.startsWith('http://') || ch.logo.startsWith('https://'))) {
      logoHtml = `<img src="${ch.logo}" alt="${ch.name}" class="channel-logo-img" loading="lazy" onerror="this.onerror=null; this.style.display='none'; this.parentElement.innerText='📺';" />`;
    } else {
      logoHtml = ch.logo || '📺';
    }

    const flagBadge = ch.country === 'bangladesh' ? '🇧🇩 BD' : (ch.country === 'india' ? '🇮🇳 IN' : '🇺🇸 USA');

    div.innerHTML = `
      <div class="channel-logo">${logoHtml}</div>
      <div class="channel-info">
        <div class="channel-name" title="${ch.name}">${ch.name}</div>
      </div>
      <button class="channel-fav-btn ${fav ? 'is-fav' : ''}" title="Favorite" aria-label="Favorite">
        <i class="${fav ? 'ri-star-fill' : 'ri-star-line'}"></i>
      </button>
    `;
    const favBtn = div.querySelector('.channel-fav-btn');
    favBtn.onclick = (e) => { e.stopPropagation(); toggleFavorite(ch.id); };
    container.appendChild(div);
  });
}

function renderFavoritesRail() {
  renderMiniRail("favoritesRail", "favoritesRailList", getFavIds());
}
function renderRecentRail() {
  renderMiniRail("recentRail", "recentRailList", getRecentIds());
}
function renderMiniRail(wrapperId, listId, ids) {
  const wrapper = document.getElementById(wrapperId);
  const list = document.getElementById(listId);
  if (!wrapper || !list) return;
  const channels = ids.map(id => CHANNELS_DATA.find(c => c.id === id)).filter(Boolean);
  if (!channels.length) { wrapper.hidden = true; list.innerHTML = ""; return; }
  wrapper.hidden = false;
  list.innerHTML = "";
  channels.forEach(ch => {
    const chip = document.createElement("div");
    chip.className = "channel-mini";
    chip.onclick = () => selectChannel(ch);
    let miniLogoHtml = '';
    if (ch.logo && (ch.logo.startsWith('http://') || ch.logo.startsWith('https://'))) {
      miniLogoHtml = `<img src="${ch.logo}" alt="${ch.name}" class="channel-mini-img" loading="lazy" onerror="this.onerror=null; this.style.display='none'; this.parentElement.innerText='📺';" />`;
    } else {
      miniLogoHtml = ch.logo || '📺';
    }
    chip.innerHTML = `<span class="channel-mini-logo">${miniLogoHtml}</span><span>${ch.name}</span>`;
    list.appendChild(chip);
  });
  if (wrapperId === 'favoritesRail') {
    initFavoritesRailScroll();
  }
}

function scrollFavoritesRail(offset) {
  const list = document.getElementById("favoritesRailList");
  if (list) {
    list.scrollBy({ left: offset, behavior: "smooth" });
  }
}

function initFavoritesRailScroll() {
  const list = document.getElementById("favoritesRailList");
  if (!list || list._hasFavDrag) return;
  list._hasFavDrag = true;

  let isDown = false;
  let startX = 0;
  let scrollStart = 0;
  let hasDragged = false;
  let dragEndTime = 0;

  list.addEventListener("dragstart", (e) => e.preventDefault());

  const onMouseMove = (e) => {
    if (!isDown) return;
    const walk = e.pageX - startX;
    if (Math.abs(walk) > 3) {
      hasDragged = true;
      list.classList.add("is-dragging");
      list.scrollLeft = scrollStart - walk;
    }
  };

  const onMouseUp = () => {
    if (!isDown) return;
    isDown = false;
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
    list.classList.remove("is-dragging");
    if (hasDragged) {
      dragEndTime = Date.now();
    }
  };

  list.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return;
    isDown = true;
    hasDragged = false;
    startX = e.pageX;
    scrollStart = list.scrollLeft;
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  });

  list.addEventListener("click", (e) => {
    if (hasDragged || (Date.now() - dragEndTime < 260)) {
      e.preventDefault();
      e.stopPropagation();
      hasDragged = false;
    }
  }, true);
}

function filterCategory(cat, el) {
  const items = document.querySelectorAll('.cat-pill');
  items.forEach(i => i.classList.remove('active'));
  if (el) el.classList.add('active');
  const searchInput = document.getElementById("channelSearchInput");
  if (searchInput) searchInput.value = "";
  renderChannels(cat);
}

let _searchChannelsTimer = null;
function searchChannels(query) {
  clearTimeout(_searchChannelsTimer);
  _searchChannelsTimer = setTimeout(() => {
    renderChannels(currentChannelCategory, query);
  }, 180);
}

function selectChannel(ch, el) {
  activeChannelId = ch.id;
  document.querySelectorAll('.channel-card').forEach(i => i.classList.remove('active'));
  if (el) el.classList.add('active');

  const nameEl = document.getElementById("activeChannelName");
  if (nameEl) nameEl.innerText = ch.name;

  const logoEl = document.getElementById("activeChannelLogo");
  if (logoEl) {
    if (ch.logo && (ch.logo.startsWith('http://') || ch.logo.startsWith('https://'))) {
      logoEl.src = ch.logo;
      logoEl.style.display = 'inline-block';
    } else {
      logoEl.style.display = 'none';
    }
  }

  const nowPlayingEl = document.getElementById("liveNowPlayingText");
  if (nowPlayingEl) nowPlayingEl.innerText = ch.epg || `Live: ${ch.name}`;

  pushRecentId(ch.id);
  renderRecentRail();
  updatePlayerFavIcon();
  updateUpNextStrip(ch);

  // Play stream directly in the embedded TV player
  playLiveChannelStream(ch.streamUrl || DEFAULT_STREAM_URL, ch.name);
}

// Prev/Next channel (used by circular action row)
function _channelList() {
  const q = document.getElementById("channelSearchInput")?.value || "";
  let list = getChannelsForCategory(currentChannelCategory);
  if (q) {
    const query = q.toLowerCase().trim();
    list = list.filter(c => 
      c.name.toLowerCase().includes(query) ||
      (c.country && c.country.toLowerCase().includes(query)) ||
      (c.epg && c.epg.toLowerCase().includes(query))
    );
  }
  return list;
}
function nextChannel() {
  const list = _channelList();
  if (!list.length) return;
  const idx = list.findIndex(c => c.id === activeChannelId);
  const next = list[(idx + 1 + list.length) % list.length];
  selectChannel(next);
}
function prevChannel() {
  const list = _channelList();
  if (!list.length) return;
  const idx = list.findIndex(c => c.id === activeChannelId);
  const prev = list[(idx - 1 + list.length) % list.length];
  selectChannel(prev);
}
function toggleRecord() {
  const icon = document.getElementById("recordIcon");
  if (!icon) return;
  const on = icon.classList.toggle("recording");
  icon.className = (on ? "ri-record-circle-fill recording" : "ri-record-circle-line");
  icon.style.color = on ? "#ef4444" : "";
  showToast(on ? "Recording started" : "Recording stopped");
}
function showChannelInfo() {
  const ch = CHANNELS_DATA.find(c => c.id === activeChannelId);
  if (!ch) return;
  openInfoModal({
    title: ch.name,
    body: `Category: ${ch.cat || '—'}\nChannel ID: ${ch.id}\nStream: HLS 4K Live`
  });
}

// Up Next EPG strip removed — kept as no-op for callers
function updateUpNextStrip() { return; }
function _removedUpNextStrip(ch) {
  const now = new Date();
  const startMinutes = Math.floor(now.getMinutes() / 30) * 30;
  const slotStart = new Date(now);
  slotStart.setMinutes(startMinutes, 0, 0);
  const slotNext = new Date(slotStart.getTime() + 30 * 60000);
  const slotLater = new Date(slotStart.getTime() + 60 * 60000);
  const fmt = (d) => d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

  const nowTitle = ch.epg || `Live: ${ch.name}`;
  const nextTitles = {
    sports: ["Post-Match Analysis", "SportsCenter Highlights", "Game Day Recap", "Top 10 Plays"],
    news: ["World News Hour", "Market Watch", "Weather Update", "Breaking News Live"],
    movies: ["Blockbuster Premiere", "Director's Cut Special", "Classic Cinema Hour", "Trailer Spotlight"],
    entertainment: ["Celebrity Interview", "Late Night Show", "Reality Spotlight", "Awards Recap"],
    kids: ["Cartoon Marathon", "Learn & Play", "Adventure Time", "Story Hour"],
    documentary: ["Planet Earth", "Deep Space Explored", "Hidden History", "Science Weekly"]
  };
  const pool = nextTitles[ch.cat] || nextTitles.entertainment;
  const nextTitle = pool[0];
  const laterTitle = pool[1];

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };
  set("upNextNowTitle", nowTitle);
  set("upNextNowTime", `${fmt(slotStart)} – ${fmt(slotNext)}`);
  set("upNextNextTitle", nextTitle);
  set("upNextNextTime", fmt(slotNext));
  set("upNextLaterTitle", laterTitle);
  set("upNextLaterTime", fmt(slotLater));

  const elapsedMs = now - slotStart;
  const pct = Math.max(2, Math.min(100, (elapsedMs / (30 * 60000)) * 100));
  const fill = document.getElementById("upNextProgressFill");
  if (fill) fill.style.width = pct + "%";
}

// Real HLS Video Stream & Download Player Logic
let currentHlsInstance = null;
let activeCurrentMovie = null;

function openFeaturedMovie(movieId) {
  stopInlineDetailPlay();
  const movie = MOVIES_DATA.find(m => m.id === movieId) || MOVIES_DATA[0];
  activeCurrentMovie = movie;

  const detailBackdrop = document.getElementById("detailBackdrop");
  if (detailBackdrop) detailBackdrop.src = movie.backdrop || movie.poster;

  const detailTypeBadge = document.getElementById("detailTypeBadge");
  if (detailTypeBadge) detailTypeBadge.innerHTML = `<i class="ri-film-fill"></i> ${movie.type || 'MOVIE'}`;

  const detailPrintBadge = document.getElementById("detailPrintBadge");
  if (detailPrintBadge) {
    detailPrintBadge.innerText = movie.printType || (movie.id % 3 === 0 ? 'Dual Audio' : (movie.id % 2 === 0 ? '1080p Dual Audio' : '1080p'));
  }

  const detailTitle = document.getElementById("detailTitle");
  if (detailTitle) detailTitle.innerText = movie.title;

  const detailYear = document.getElementById("detailYear");
  if (detailYear) detailYear.innerText = movie.year || '2026';

  const detailGenre = document.getElementById("detailGenre");
  if (detailGenre) detailGenre.innerText = movie.genre || 'Adventure / English Movies / Action';

  const detailCastInline = document.getElementById("detailCastInline");
  if (detailCastInline) {
    const rawCast = movie.cast || 'Matt Damon, Tom Holland, Anne Hathaway';
    const names = rawCast.split(',').map(n => n.trim()).filter(Boolean);
    detailCastInline.innerHTML = names.map(n => `<span class="clickable-actor-link" style="cursor:pointer; color:#FFFFFF; text-decoration:underline; text-decoration-color:rgba(252,83,5,0.6); text-underline-offset:3px; margin-right:4px;">${n}</span>`).join(', ');
    detailCastInline.querySelectorAll('.clickable-actor-link').forEach((el, idx) => {
      el.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        openActorProfile(names[idx]);
      };
    });
  }

  // 5 Ratings: IMDb, TMDB, RT Critic, RT Audience, SunPlex
  const detailImdb = document.getElementById("detailImdbScore");
  if (detailImdb) detailImdb.innerText = movie.imdb || '7.5';

  const detailTmdb = document.getElementById("detailTmdbScore");
  if (detailTmdb) detailTmdb.innerText = movie.tmdb || movie.imdb || '7.5';

  const detailRtCritic = document.getElementById("detailRtCriticScore");
  if (detailRtCritic) detailRtCritic.innerText = movie.rtCritic || '93';

  const detailRtAudience = document.getElementById("detailRtAudienceScore");
  if (detailRtAudience) detailRtAudience.innerText = movie.rtAudience || '97';

  const detailSunplex = document.getElementById("detailSunplexScore");
  if (detailSunplex) detailSunplex.innerText = movie.sunplexRating || '10.0';

  const detailEpisodeTitle = document.getElementById("detailEpisodeTitle");
  if (detailEpisodeTitle) detailEpisodeTitle.innerText = movie.subTitle || movie.title;

  const detailSynopsis = document.getElementById("detailSynopsis");
  if (detailSynopsis) detailSynopsis.innerText = movie.summary;

  const detailCast = document.getElementById("detailCast");
  if (detailCast) detailCast.innerText = movie.cast;

  const detailCreator = document.getElementById("detailCreator");
  if (detailCreator) detailCreator.innerText = movie.creator;

  // Render Circular Cast Avatars from Real TMDB Cast Data
  const castRow = document.getElementById("detailCastAvatars");
  if (castRow) {
    castRow.innerHTML = "";

    const renderCastItems = (items) => {
      castRow.innerHTML = "";
      items.slice(0, 18).forEach(actor => {
        const div = document.createElement("div");
        div.className = "cast-avatar-item";
        div.title = `${actor.name} (${actor.character || 'Featured Star'}) - Click to view filmography`;
        const photoUrl = actor.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(actor.name)}&background=1F2937&color=FC5305&bold=true`;
        div.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          openActorProfile(actor.name, photoUrl);
        };
        div.innerHTML = `
          <div class="cast-avatar-img-wrap">
            <img src="${photoUrl}" alt="${actor.name}" class="cast-avatar-img" loading="lazy" onerror="this.onerror=null; this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(actor.name)}&background=1F2937&color=FC5305&bold=true';">
          </div>
          <div class="cast-avatar-name">${actor.name}</div>
          <div class="cast-avatar-role">${actor.character || 'Featured Star'}</div>
        `;
        castRow.appendChild(div);
      });
      initCastRowScroll();
    };

    // Render immediately if castDetails pre-populated
    if (movie.castDetails && movie.castDetails.length) {
      renderCastItems(movie.castDetails);
    } else {
      const names = (movie.cast || "").split(',').map(n => n.trim()).filter(Boolean);
      renderCastItems(names.map(name => ({ name, character: 'Featured Star', photo: null })));
    }

    // Live fetch real cast & photos from TMDB API
    const isTv = movie.type === 'SERIES' || (movie.duration || '').includes('Season');
    const endpointType = isTv ? 'tv' : 'movie';
    const creditsPromise = movie.tmdbId 
      ? fetch(`${TMDB_BASE_URL}/${endpointType}/${movie.tmdbId}/credits?api_key=${TMDB_API_KEY}`)
      : fetch(`${TMDB_BASE_URL}/search/${endpointType}?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(movie.title)}`)
          .then(r => r.json())
          .then(d => {
            const found = d.results && d.results[0];
            return found ? fetch(`${TMDB_BASE_URL}/${endpointType}/${found.id}/credits?api_key=${TMDB_API_KEY}`) : null;
          });

    if (creditsPromise) {
      creditsPromise
        .then(r => r ? r.json() : null)
        .then(d => {
          if (d && d.cast && d.cast.length) {
            const liveCast = d.cast.slice(0, 18).map(c => ({
              name: c.name,
              character: c.character || 'Featured Star',
              photo: c.profile_path ? `https://image.tmdb.org/t/p/w185${c.profile_path}` : null
            }));
            movie.castDetails = liveCast;
            renderCastItems(liveCast);
          }
        })
        .catch(err => console.warn("TMDB Live Cast fetch note:", err));
    }
  }

  // Render "More Like This" Related Movies Carousel
  const relatedCarousel = document.getElementById("detailRelatedCarousel");
  if (relatedCarousel) {
    const related = MOVIES_DATA.filter(m => m.id !== movie.id && (m.category === movie.category || m.type === movie.type)).slice(0, 10);
    renderCarouselContainer("detailRelatedCarousel", related.length ? related : MOVIES_DATA.slice(0, 8));
  }

  updateMyListBtn(movie.id);

  // TV Series & Episodes Section Handler
  const episodesSection = document.getElementById("detailEpisodesSection");
  if (episodesSection) {
    if (isSeriesItem(movie)) {
      episodesSection.style.display = "block";
      renderEpisodesSection(movie, 1);
    } else {
      episodesSection.style.display = "none";
    }
  }

  switchView('singleMovieView');
  const mainArea = document.querySelector('.main-view-area');
  if (mainArea) mainArea.scrollTop = 0;
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
}

/* ==========================================================================
   ACTOR FILMOGRAPHY & PROFILE CONTROLLER
   ========================================================================== */
async function openActorProfile(actorName, actorPhoto) {
  if (!actorName) return;

  const actorView = document.getElementById("actorDetailView");
  if (!actorView) return;

  // Set initial placeholders
  const heroName = document.getElementById("actorHeroName");
  const heroAvatar = document.getElementById("actorHeroAvatar");
  const heroBio = document.getElementById("actorHeroBio");
  const heroCount = document.getElementById("actorMoviesCount");
  const deptChip = document.getElementById("actorDepartmentChip");
  const bdayChip = document.getElementById("actorBirthdayChip");
  const bdayText = document.getElementById("actorBirthdayText");
  const grid = document.getElementById("actorFilmographyGrid");

  if (heroName) heroName.innerText = actorName;
  const initialPhoto = actorPhoto || `https://ui-avatars.com/api/?name=${encodeURIComponent(actorName)}&background=1F2937&color=FC5305&bold=true`;
  if (heroAvatar) {
    heroAvatar.src = initialPhoto;
    heroAvatar.alt = actorName;
  }
  if (heroBio) heroBio.innerText = `Searching filmography and titles for ${actorName}...`;
  if (heroCount) heroCount.innerText = "...";
  if (deptChip) deptChip.innerHTML = `<i class="ri-clapperboard-line"></i> Acting`;
  if (bdayChip) bdayChip.style.display = "none";
  if (grid) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 40px 20px; text-align: center; color: var(--text-muted);">
        <i class="ri-loader-4-line ri-spin" style="font-size: 32px; color: var(--sunplex-orange); display: block; margin-bottom: 12px;"></i>
        Finding all movies & TV series starring ${actorName}...
      </div>
    `;
  }

  // Switch to actor filmography view
  switchView('actorDetailView');

  // 1. Gather all local movies/series in MOVIES_DATA that match this actor
  const localMatches = MOVIES_DATA.filter(m => {
    if (!m) return false;
    const castMatch = (m.cast || '').toLowerCase().includes(actorName.toLowerCase());
    const castDetailsMatch = Array.isArray(m.castDetails) && m.castDetails.some(c => c.name && c.name.toLowerCase().includes(actorName.toLowerCase()));
    return castMatch || castDetailsMatch;
  });

  let combinedItems = [...localMatches];

  // 2. Fetch person data from TMDB
  try {
    const searchRes = await fetch(`${TMDB_BASE_URL}/search/person?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(actorName)}`);
    const searchData = await searchRes.json();
    const person = searchData.results && searchData.results[0];

    if (person) {
      if (person.profile_path && heroAvatar) {
        heroAvatar.src = `https://image.tmdb.org/t/p/h632${person.profile_path}`;
      }
      if (deptChip && person.known_for_department) {
        deptChip.innerHTML = `<i class="ri-clapperboard-line"></i> ${person.known_for_department}`;
      }

      // Fetch full bio & combined credits (movies + TV series)
      const detailRes = await fetch(`${TMDB_BASE_URL}/person/${person.id}?api_key=${TMDB_API_KEY}&append_to_response=combined_credits`);
      const personData = await detailRes.json();

      if (personData) {
        if (personData.biography && heroBio) {
          heroBio.innerText = personData.biography.slice(0, 360) + (personData.biography.length > 360 ? "..." : "");
        } else if (heroBio) {
          heroBio.innerText = `${actorName} is a celebrated ${personData.known_for_department || 'screen actor'} known for dynamic performances across hit movies and television series.`;
        }

        if (personData.birthday && bdayChip && bdayText) {
          bdayText.innerText = `Born ${personData.birthday}`;
          bdayChip.style.display = "inline-flex";
        }

        if (personData.combined_credits && personData.combined_credits.cast) {
          const rawCast = personData.combined_credits.cast;
          // Sort by popularity descending
          const sorted = rawCast
            .filter(c => c.poster_path && (c.title || c.name))
            .sort((a, b) => (b.popularity || 0) - (a.popularity || 0));

          sorted.forEach(credit => {
            const isTv = credit.media_type === 'tv';
            const title = credit.title || credit.name;
            const existing = combinedItems.find(m => (m.tmdbId && m.tmdbId === credit.id) || (m.title && m.title.toLowerCase() === title.toLowerCase()));

            if (!existing) {
              const releaseDate = credit.release_date || credit.first_air_date || '';
              const year = releaseDate ? releaseDate.split('-')[0] : '2024';
              const rating = credit.vote_average ? credit.vote_average.toFixed(1) : '7.8';
              const newItem = {
                id: credit.id + (isTv ? 900000 : 800000),
                tmdbId: credit.id,
                title: title,
                subTitle: credit.character ? `as ${credit.character}` : (isTv ? 'Hit Series' : 'Blockbuster Movie'),
                year: year,
                imdb: rating,
                tmdb: rating,
                rtCritic: Math.min(99, Math.round(Number(rating) * 10 + 5)),
                rtAudience: Math.min(99, Math.round(Number(rating) * 10 + 8)),
                sunplexRating: "10.0",
                duration: isTv ? '1 Season' : '2h 10m',
                genre: isTv ? 'TV Series / Drama' : 'Movie / Action Blockbuster',
                tags: `${actorName} • ${isTv ? 'TV Series' : 'Movie'} • Ultra HD`,
                type: isTv ? 'SERIES' : 'MOVIE',
                category: isTv ? 'TV Shows' : 'Hollywood',
                badge: '1080p Dual Audio',
                poster: `https://image.tmdb.org/t/p/w500${credit.poster_path}`,
                backdrop: credit.backdrop_path ? `https://image.tmdb.org/t/p/original${credit.backdrop_path}` : `https://image.tmdb.org/t/p/w500${credit.poster_path}`,
                summary: credit.overview || `${title} starring ${actorName} in an unforgettable role.`,
                cast: `${actorName}, Featured Stars`,
                creator: 'TMDB Studios',
                streamUrl: DEFAULT_STREAM_URL
              };
              MOVIES_DATA.push(newItem);
              combinedItems.push(newItem);
            }
          });
        }
      }
    } else {
      if (heroBio) {
        heroBio.innerText = `${actorName} is a featured star on SunPlex streaming. Browse all available movies and series below.`;
      }
    }

    if (heroCount) heroCount.innerText = String(combinedItems.length);

    currentActorItems = combinedItems;
    renderActorFilmographyPage(1);
  } catch (err) {
    console.error("openActorProfile Error:", err);
    if (grid && (!combinedItems || !combinedItems.length)) {
      grid.innerHTML = `<div style="grid-column: 1 / -1; padding: 30px; text-align: center; color: var(--text-muted);">Failed to load all filmography for ${actorName}.</div>`;
    }
  }
}

let currentActorItems = [];
let currentActorPage = 1;
const ACTOR_PAGE_SIZE = 18;

function getPaginationPages(current, total) {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  if (current <= 4) {
    return [1, 2, 3, 4, 5, '...', total];
  }
  if (current >= total - 3) {
    return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
  }
  return [1, '...', current - 1, current, current + 1, '...', total];
}

function renderActorFilmographyPage(page = 1) {
  const grid = document.getElementById("actorFilmographyGrid");
  const paginationWrap = document.getElementById("actorPaginationWrap");
  if (!grid) return;

  const totalItems = currentActorItems.length;
  const totalPages = Math.ceil(totalItems / ACTOR_PAGE_SIZE) || 1;

  currentActorPage = Math.max(1, Math.min(page, totalPages));

  const startIdx = (currentActorPage - 1) * ACTOR_PAGE_SIZE;
  const pageItems = currentActorItems.slice(startIdx, startIdx + ACTOR_PAGE_SIZE);

  grid.innerHTML = "";
  if (!pageItems.length) {
    grid.innerHTML = `
      <div class="category-listing-empty" style="grid-column: 1 / -1; padding: 40px; text-align:center;">
        <i class="ri-movie-2-line" style="font-size: 40px; color: var(--sunplex-orange);"></i>
        <div style="font-size: 16px; font-weight: 700; color: #FFF; margin-top: 10px;">No titles found</div>
      </div>
    `;
    if (paginationWrap) paginationWrap.innerHTML = "";
    return;
  }

  pageItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "top-10-card";
    card.style.aspectRatio = "2/3";
    card.onclick = () => openFeaturedMovie(item.id);

    const qBadge = getMovieQualityBadge(item);
    const qClass = getQualityBadgeClass(qBadge);
    const poster = item.poster || FALLBACK_POSTER;

    card.innerHTML = `
      <div class="top-10-badge ${qClass}">${qBadge}</div>
      <img src="${poster}" alt="${item.title}" class="poster-img" loading="lazy" onerror="this.onerror=null; this.src='https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg';">
      <div class="top-10-overlay">
        <div class="top-10-title">${item.title}</div>
      </div>
    `;
    grid.appendChild(card);
  });

  // Render pagination controls if totalPages > 1
  if (paginationWrap) {
    if (totalPages <= 1) {
      paginationWrap.innerHTML = "";
    } else {
      const pageList = getPaginationPages(currentActorPage, totalPages);
      let pageButtonsHtml = '';
      pageList.forEach(p => {
        if (p === '...') {
          pageButtonsHtml += `<span class="actor-page-ellipsis">…</span>`;
        } else {
          pageButtonsHtml += `
            <button class="actor-page-num ${p === currentActorPage ? 'active' : ''}" onclick="goToActorPage(${p})">${p}</button>
          `;
        }
      });

      paginationWrap.innerHTML = `
        <div class="actor-pagination-container">
          <button class="actor-page-arrow" ${currentActorPage === 1 ? 'disabled style="opacity:0.35; cursor:not-allowed;"' : ''} onclick="goToActorPage(${currentActorPage - 1})" title="Previous Page" aria-label="Previous Page">
            <i class="ri-arrow-left-s-line"></i>
          </button>
          <div class="actor-page-numbers">
            ${pageButtonsHtml}
          </div>
          <button class="actor-page-arrow" ${currentActorPage === totalPages ? 'disabled style="opacity:0.35; cursor:not-allowed;"' : ''} onclick="goToActorPage(${currentActorPage + 1})" title="Next Page" aria-label="Next Page">
            <i class="ri-arrow-right-s-line"></i>
          </button>
        </div>
        <div class="actor-page-summary">Page ${currentActorPage} of ${totalPages} (${totalItems} total titles)</div>
      `;
    }
  }
}

function goToActorPage(page) {
  renderActorFilmographyPage(page);
  const grid = document.getElementById("actorFilmographyGrid");
  if (grid) {
    grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/* ==========================================================================
   TV SERIES & EPISODES MANAGER
   ========================================================================== */
let currentSeriesSeason = 1;

function isSeriesItem(m) {
  if (!m) return false;
  return m.type === 'SERIES' || 
         m.category === 'Series' || 
         m.category === 'TV Shows' || 
         (m.duration || '').toLowerCase().includes('season') ||
         (m.genre || '').toLowerCase().includes('series') ||
         (m.title && /stranger|crown|breaking|queen|witcher|black mirror|squid game|loki|game of thrones|peaky|boys|last of us|shogun|succession|fallout|demon slayer|money heist/i.test(m.title));
}

function onSeasonChange(val) {
  currentSeriesSeason = parseInt(val, 10) || 1;
  if (activeCurrentMovie) {
    renderEpisodesSection(activeCurrentMovie, currentSeriesSeason);
  }
}

function renderEpisodesSection(movie, seasonNum) {
  currentSeriesSeason = seasonNum || 1;
  const listEl = document.getElementById("detailEpisodesList");
  const seasonSelect = document.getElementById("detailSeasonSelect");
  if (!listEl) return;

  if (seasonSelect) {
    seasonSelect.value = String(currentSeriesSeason);
  }

  listEl.innerHTML = `
    <div style="padding: 18px; text-align: center; color: var(--text-muted); font-size: 13px;">
      <i class="ri-loader-4-line ri-spin" style="margin-right: 6px;"></i> Loading Season ${currentSeriesSeason} episodes...
    </div>
  `;

  // Fallback generator for realistic episodes
  const renderFallbackEpisodes = () => {
    const episodeTemplates = [
      { ep: 1, title: "Chapter One: The Awakening", runtime: "54m", desc: "When the unexpected happens, secrets begin to unravel and unexpected alliances form." },
      { ep: 2, title: "Chapter Two: Shadows in the Dark", runtime: "51m", desc: "A shocking revelation forces the team into hiding while danger looms closer." },
      { ep: 3, title: "Chapter Three: The Catalyst", runtime: "58m", desc: "High stakes decisions lead to unprecedented conflicts across different factions." },
      { ep: 4, title: "Chapter Four: Crossroads", runtime: "49m", desc: "Loyalties are tested as a risky gambit threatens to expose everything." },
      { ep: 5, title: "Chapter Five: Breaking Point", runtime: "62m", desc: "Tensions reach a boiling point and past choices catch up with tragic consequences." },
      { ep: 6, title: "Chapter Six: The Reckoning", runtime: "55m", desc: "A desperate race against time sets the stage for a climactic confrontation." },
      { ep: 7, title: "Chapter Seven: The Confrontation", runtime: "53m", desc: "Unveiling the mastermind behind the chaos brings unexpected truth to light." },
      { ep: 8, title: "Chapter Eight: Season Finale", runtime: "65m", desc: "The thrilling season finale delivers breathtaking surprises and sets up what is to come." }
    ];

    listEl.innerHTML = "";
    episodeTemplates.forEach(ep => {
      const card = document.createElement("div");
      card.className = "episode-card";
      const thumbImg = movie.backdrop || movie.poster || 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg';
      card.innerHTML = `
        <div class="episode-thumb-box">
          <img src="${thumbImg}" alt="${ep.title}" class="episode-thumb-img" loading="lazy">
          <div class="episode-play-overlay">
            <div class="episode-play-icon"><i class="ri-play-fill"></i></div>
          </div>
          <span class="episode-duration-tag">${ep.runtime}</span>
        </div>
        <div class="episode-info-box">
          <div class="episode-number-title">${ep.ep}. ${ep.title}</div>
          <div class="episode-synopsis-text">${ep.desc}</div>
        </div>
        <button class="episode-play-action-btn" title="Play Episode">
          <i class="ri-play-circle-line"></i>
        </button>
      `;
      card.onclick = () => {
        const streamTitle = `${movie.title} - S${currentSeriesSeason}:E${ep.ep} "${ep.title}"`;
        playStream(movie.streamUrl, streamTitle);
        showToast(`Playing ${streamTitle}`);
      };
      listEl.appendChild(card);
    });
  };

  const fetchTmdbEpisodes = (tvId) => {
    fetch(`${TMDB_BASE_URL}/tv/${tvId}/season/${currentSeriesSeason}?api_key=${TMDB_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.episodes && data.episodes.length) {
          listEl.innerHTML = "";
          data.episodes.forEach(ep => {
            const card = document.createElement("div");
            card.className = "episode-card";
            const thumbUrl = ep.still_path 
              ? `${TMDB_IMAGE_BASE}${ep.still_path}` 
              : (movie.backdrop || movie.poster || 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg');
            const runtimeStr = ep.runtime ? `${ep.runtime}m` : '50m';
            const epNum = ep.episode_number || 1;
            const epTitle = ep.name || `Episode ${epNum}`;
            const epOverview = ep.overview || 'No synopsis available for this episode.';

            card.innerHTML = `
              <div class="episode-thumb-box">
                <img src="${thumbUrl}" alt="${epTitle}" class="episode-thumb-img" loading="lazy" onerror="this.onerror=null; this.src='${movie.backdrop || movie.poster}';">
                <div class="episode-play-overlay">
                  <div class="episode-play-icon"><i class="ri-play-fill"></i></div>
                </div>
                <span class="episode-duration-tag">${runtimeStr}</span>
              </div>
              <div class="episode-info-box">
                <div class="episode-number-title">${epNum}. ${epTitle}</div>
                <div class="episode-synopsis-text">${epOverview}</div>
              </div>
              <button class="episode-play-action-btn" title="Play Episode">
                <i class="ri-play-circle-line"></i>
              </button>
            `;
            card.onclick = () => {
              const streamTitle = `${movie.title} - S${currentSeriesSeason}:E${epNum} "${epTitle}"`;
              playStream(movie.streamUrl, streamTitle);
              showToast(`Playing ${streamTitle}`);
            };
            listEl.appendChild(card);
          });
        } else {
          renderFallbackEpisodes();
        }
      })
      .catch(err => {
        console.warn("TMDB episodes fetch error, falling back:", err);
        renderFallbackEpisodes();
      });
  };

  if (movie.tmdbId) {
    fetchTmdbEpisodes(movie.tmdbId);
  } else {
    fetch(`${TMDB_BASE_URL}/search/tv?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(movie.title)}`)
      .then(r => r.json())
      .then(d => {
        if (d && d.results && d.results[0] && d.results[0].id) {
          movie.tmdbId = d.results[0].id;
          fetchTmdbEpisodes(movie.tmdbId);
        } else {
          renderFallbackEpisodes();
        }
      })
      .catch(() => renderFallbackEpisodes());
  }
}

// Embedded Video & HLS Stream Engines
let liveHlsInstance = null;
let detailHlsInstance = null;
let _liveSimOverlayTimer = null;

function showAndAutoHideLiveSimOverlay(delayMs = 5000) {
  const overlay = document.getElementById("liveSimOverlay");
  if (!overlay) return;
  overlay.classList.remove("is-hidden");
  clearTimeout(_liveSimOverlayTimer);
  _liveSimOverlayTimer = setTimeout(() => {
    overlay.classList.add("is-hidden");
  }, delayMs);
}

function playLiveChannelStream(url, channelName) {
  const video = document.getElementById("liveVideoElement");
  const spinner = document.getElementById("livePlayerSpinner");
  const playIcon = document.getElementById("playIcon");
  const centerBtn = document.getElementById("liveCenterPlayBtn");
  const streamUrl = url || DEFAULT_STREAM_URL;

  if (!video) return;

  showAndAutoHideLiveSimOverlay(5000);

  const screen = document.getElementById("videoScreen");
  if (screen && !screen._hasOverlayAutoHideListener) {
    screen._hasOverlayAutoHideListener = true;
    ['mousemove', 'touchstart', 'click'].forEach(evt => {
      screen.addEventListener(evt, () => showAndAutoHideLiveSimOverlay(5000), { passive: true });
    });
  }

  if (spinner) spinner.style.display = "block";
  if (centerBtn) centerBtn.classList.remove("playing");

  if (liveHlsInstance) {
    liveHlsInstance.destroy();
    liveHlsInstance = null;
  }

  const onPlaying = () => {
    if (spinner) spinner.style.display = "none";
    if (playIcon) playIcon.className = "ri-pause-fill";
    if (centerBtn) centerBtn.classList.add("playing");
    isPlaying = true;
    showAndAutoHideLiveSimOverlay(5000);
  };

  const onPaused = () => {
    if (playIcon) playIcon.className = "ri-play-fill";
    if (centerBtn) centerBtn.classList.remove("playing");
    isPlaying = false;
  };

  video.onplaying = onPlaying;
  video.onpause = onPaused;
  video.onerror = () => {
    if (spinner) spinner.style.display = "none";
    console.warn("Live stream playback error, retrying fallback");
  };

  if (window.Hls && Hls.isSupported()) {
    liveHlsInstance = new Hls({ enableWorker: true, lowLatencyMode: true });
    liveHlsInstance.loadSource(streamUrl);
    liveHlsInstance.attachMedia(video);
    liveHlsInstance.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play().catch(err => {
        console.log("Autoplay prevented:", err);
        if (spinner) spinner.style.display = "none";
        if (centerBtn) centerBtn.classList.remove("playing");
      });
    });
    liveHlsInstance.on(Hls.Events.ERROR, function (event, data) {
      if (data.fatal) {
        if (spinner) spinner.style.display = "none";
        switch (data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            liveHlsInstance.startLoad();
            break;
          case Hls.ErrorTypes.MEDIA_ERROR:
            liveHlsInstance.recoverMediaError();
            break;
          default:
            liveHlsInstance.destroy();
            break;
        }
      }
    });
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = streamUrl;
    video.play().catch(e => {
      console.log("Native HLS autoplay prevented:", e);
      if (spinner) spinner.style.display = "none";
    });
  } else {
    video.src = streamUrl;
    video.play().catch(() => {});
  }
}

function pauseLiveChannelStream() {
  const video = document.getElementById("liveVideoElement");
  const playIcon = document.getElementById("playIcon");
  const centerBtn = document.getElementById("liveCenterPlayBtn");
  if (video && !video.paused) {
    video.pause();
  }
  if (playIcon) playIcon.className = "ri-play-fill";
  if (centerBtn) centerBtn.classList.remove("playing");
  isPlaying = false;
}

function toggleLivePlay() {
  const video = document.getElementById("liveVideoElement");
  const playIcon = document.getElementById("playIcon");
  const centerBtn = document.getElementById("liveCenterPlayBtn");
  if (!video) return;

  if (video.paused) {
    if (!video.src && !liveHlsInstance) {
      const activeCh = CHANNELS_DATA.find(c => c.id === activeChannelId) || CHANNELS_DATA[0];
      playLiveChannelStream(activeCh?.streamUrl || DEFAULT_STREAM_URL, activeCh?.name);
    } else {
      video.play().then(() => {
        if (playIcon) playIcon.className = "ri-pause-fill";
        if (centerBtn) centerBtn.classList.add("playing");
        isPlaying = true;
      }).catch(err => console.log("Play failed:", err));
    }
  } else {
    video.pause();
    if (playIcon) playIcon.className = "ri-play-fill";
    if (centerBtn) centerBtn.classList.remove("playing");
    isPlaying = false;
  }
}

function toggleLiveMute() {
  const video = document.getElementById("liveVideoElement");
  const muteIcon = document.getElementById("muteIcon");
  if (!video) return;

  video.muted = !video.muted;
  isMuted = video.muted;
  if (muteIcon) {
    muteIcon.className = video.muted ? "ri-volume-mute-fill" : "ri-volume-up-line";
  }
}

function togglePlay() {
  toggleLivePlay();
}

function toggleMute() {
  toggleLiveMute();
}

// Inline Movie Detail Player
function triggerInlineDetailPlay() {
  const video = document.getElementById("detailInlineVideo");
  const backdrop = document.getElementById("detailBackdrop");
  const overlay = document.getElementById("detailPreviewOverlay");
  const closeBtn = document.getElementById("detailVideoCloseBtn");
  const url = (activeCurrentMovie && activeCurrentMovie.streamUrl) ? activeCurrentMovie.streamUrl : DEFAULT_STREAM_URL;

  if (!video) return;

  if (detailHlsInstance) {
    detailHlsInstance.destroy();
    detailHlsInstance = null;
  }

  video.style.display = "block";
  if (backdrop) backdrop.style.display = "none";
  if (overlay) overlay.style.display = "none";
  if (closeBtn) closeBtn.style.display = "flex";

  if (window.Hls && Hls.isSupported()) {
    detailHlsInstance = new Hls({ enableWorker: true });
    detailHlsInstance.loadSource(url);
    detailHlsInstance.attachMedia(video);
    detailHlsInstance.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play().catch(e => console.log('Movie inline play prevented:', e));
    });
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = url;
    video.play().catch(e => console.log('Native video play prevented:', e));
  } else {
    video.src = url;
    video.play().catch(() => {});
  }
}

function stopInlineDetailPlay() {
  const video = document.getElementById("detailInlineVideo");
  const backdrop = document.getElementById("detailBackdrop");
  const overlay = document.getElementById("detailPreviewOverlay");
  const closeBtn = document.getElementById("detailVideoCloseBtn");

  if (video) {
    video.pause();
    video.src = "";
    video.style.display = "none";
  }
  if (detailHlsInstance) {
    detailHlsInstance.destroy();
    detailHlsInstance = null;
  }
  if (backdrop) backdrop.style.display = "block";
  if (overlay) overlay.style.display = "flex";
  if (closeBtn) closeBtn.style.display = "none";
}

function triggerMainStreamPlay() {
  triggerInlineDetailPlay();
}

function playStream(url, title) {
  const streamUrl = url || DEFAULT_STREAM_URL;
  const modal = document.getElementById("videoPlayerModal");
  const video = document.getElementById("activeVideoElement");
  const titleEl = document.getElementById("videoModalTitle");

  if (titleEl) titleEl.innerText = title || "SunPlex 4K Stream";

  if (currentHlsInstance) {
    currentHlsInstance.destroy();
    currentHlsInstance = null;
  }

  if (window.Hls && Hls.isSupported()) {
    currentHlsInstance = new Hls();
    currentHlsInstance.loadSource(streamUrl);
    currentHlsInstance.attachMedia(video);
    currentHlsInstance.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play().catch(e => console.log('Autoplay handled:', e));
    });
  } else if (video && video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = streamUrl;
    video.play();
  } else if (video) {
    video.src = streamUrl;
    video.play();
  }

  if (modal) {
    modal.classList.add("active");
    if (window.innerWidth <= 768) {
      modal.classList.add("portrait-mode");
      const btn = document.getElementById("mobilePortraitBtn");
      if (btn) {
        btn.innerHTML = `<i class="ri-aspect-ratio-line"></i> <span style="font-size:12px; margin-left:4px;">Fit Mode</span>`;
      }
      if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock("portrait").catch(e => console.log("Orientation lock:", e));
      }
    }
  }
}

// Toggle Mobile Display Portrait Mode vs Fit Mode
function toggleMobilePortraitMode() {
  const modal = document.getElementById("videoPlayerModal");
  const btn = document.getElementById("mobilePortraitBtn");
  if (!modal) return;

  modal.classList.toggle("portrait-mode");
  const isPortrait = modal.classList.contains("portrait-mode");

  if (btn) {
    btn.innerHTML = isPortrait
      ? `<i class="ri-aspect-ratio-line"></i> <span style="font-size:12px; margin-left:4px;">Fit Mode</span>`
      : `<i class="ri-smartphone-line"></i> <span style="font-size:12px; margin-left:4px;">Portrait</span>`;
  }

  if (screen.orientation && screen.orientation.lock) {
    if (isPortrait) {
      screen.orientation.lock("portrait").catch(e => console.log(e));
    } else {
      if (screen.orientation.unlock) screen.orientation.unlock();
    }
  }
}

// Toggle Picture in Picture Mode
function togglePictureInPicture() {
  const video = document.getElementById("activeVideoElement");
  if (!video) return;

  if (document.pictureInPictureElement) {
    document.exitPictureInPicture().catch(e => console.log("Exit PIP error:", e));
  } else if (video.requestPictureInPicture) {
    video.requestPictureInPicture().catch(e => console.log("Request PIP error:", e));
  }
}

function closeVideoPlayer() {
  const modal = document.getElementById("videoPlayerModal");
  const video = document.getElementById("activeVideoElement");

  if (video) {
    video.pause();
    video.src = "";
  }

  if (currentHlsInstance) {
    currentHlsInstance.destroy();
    currentHlsInstance = null;
  }

  if (modal) {
    modal.classList.remove("active");
    modal.classList.remove("portrait-mode");
  }

  if (screen.orientation && screen.orientation.unlock) {
    screen.orientation.unlock();
  }
}

function triggerMainStreamDownload() {
  const url = (activeCurrentMovie && activeCurrentMovie.downloadUrl) ? activeCurrentMovie.downloadUrl : DEFAULT_DOWNLOAD_URL;
  window.open(url, '_blank');
}

function toggleFullscreen() {
  const elem = document.getElementById("videoScreen");
  const liveVid = document.getElementById("liveVideoElement");
  const target = elem || liveVid;
  if (!target) return;
  if (!document.fullscreenElement) {
    if (target.requestFullscreen) {
      target.requestFullscreen().catch(err => {
        if (liveVid && liveVid.webkitEnterFullscreen) {
          liveVid.webkitEnterFullscreen();
        } else {
          console.warn('Fullscreen error:', err);
          showToast("Couldn't enter fullscreen");
        }
      });
    } else if (liveVid && liveVid.webkitEnterFullscreen) {
      liveVid.webkitEnterFullscreen();
    }
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
  }
}

/* ==========================================================================
   CATEGORY LISTING VIEW — reused by every "See All" link
   ========================================================================== */
let _categoryListingState = { name: 'All', filterFn: null };

function openCategoryListing(name) {
  _categoryListingState.name = name;
  _categoryListingState.filterFn = buildCategoryFilter(name);
  switchView('categoryListingView');
}

function buildCategoryFilter(name) {
  const n = (name || '').toLowerCase();
  const isSeries = (m) => m.type === 'SERIES' || (m.duration || '').includes('Season');
  const isMovie = (m) => !isSeries(m);
  const genreHit = (m, keywords) => {
    const text = ((m.genre || '') + ' ' + (m.category || '')).toLowerCase();
    return keywords.some(k => text.includes(k));
  };

  // Catch-all
  if (n === 'all' || n === 'all categories' || n === 'available for download') return () => true;
  if (n === 'popular' || n === 'popular on sunplex') return (m) => parseFloat(m.imdb || 0) >= 7.5;
  if (n === 'movies') return isMovie;
  if (n === 'series' || n === 'tv shows' || n === 'top 10 web series today') return isSeries;

  // Named series carousels — require Series type + matching keywords
  if (n.includes('crime') || n === 'crime & drama series') {
    return (m) => isSeries(m) && genreHit(m, ['crime', 'drama', 'mystery']);
  }
  if (n.includes('sci-fi') && n.includes('series')) {
    return (m) => isSeries(m) && genreHit(m, ['sci-fi', 'science fiction', 'action', 'adventure']);
  }
  if (n.includes('anime')) {
    return (m) => genreHit(m, ['anime', 'animation']);
  }
  if (n.includes('thriller') && n.includes('series')) {
    return (m) => isSeries(m) && genreHit(m, ['thriller', 'mystery', 'crime']);
  }
  if (n.includes('drama') && n.includes('series')) {
    return (m) => isSeries(m) && genreHit(m, ['drama']);
  }

  // Named genres (strip trailing "series/movies/shows")
  const cleaned = n.replace(/\s*(series|movies|shows|films)$/i, '').trim();
  if (cleaned && cleaned !== n) {
    return (m) => genreHit(m, [cleaned]);
  }

  // Generic contains-match on category OR genre
  return (m) => genreHit(m, [n]);
}

function renderCategoryListing() {
  const title = document.getElementById('categoryListingTitle');
  const meta = document.getElementById('categoryListingMeta');
  const grid = document.getElementById('categoryListingGrid');
  if (!title || !grid) return;

  const name = _categoryListingState.name || 'Category';
  title.textContent = name;

  const filterFn = _categoryListingState.filterFn || (() => true);
  const list = applyParentalCap(MOVIES_DATA.filter(filterFn));

  if (meta) meta.textContent = `${list.length} title${list.length === 1 ? '' : 's'}`;

  grid.innerHTML = '';
  if (!list.length) {
    grid.innerHTML = `
      <div class="category-listing-empty">
        <i class="ri-film-line"></i>
        <div style="font-size:15px; font-weight:700; color:#FFF;">Nothing here yet</div>
        <div style="font-size:12px; margin-top:4px;">Try another category.</div>
      </div>`;
    return;
  }

  list.forEach(item => {
    const card = document.createElement('div');
    card.className = 'top-10-card';
    card.style.aspectRatio = '2/3';
    card.onclick = () => openFeaturedMovie(item.id);
    const qBadge = getMovieQualityBadge(item);
    const qClass = getQualityBadgeClass(qBadge);
    const poster = item.poster || 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg';
    card.innerHTML = `
      <div class="top-10-badge ${qClass}">${qBadge}</div>
      <img src="${poster}" alt="${item.title}" class="poster-img" loading="lazy" onerror="this.onerror=null; this.src='https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg';">
      <div class="top-10-overlay"><div class="top-10-title">${item.title}</div></div>
    `;
    grid.appendChild(card);
  });
}

/* ==========================================================================
   ADVANCED SEARCH VIEW
   ========================================================================== */
const TRENDING_SEARCHES = ["Action", "4K", "Trending", "Comedy", "Thriller", "Family", "New releases", "Bollywood", "Anime"];
let searchState = { query: "", scope: "all", genre: "any" };
let _searchDebounce = null;

function openSearchView() {
  switchView('searchView');
}

function initSearchViewIfNeeded() {
  renderTrendingSearches();
  renderRecentSearches();
  const inp = document.getElementById("searchPageInput");
  if (inp) {
    inp.value = searchState.query;
    setTimeout(() => inp.focus(), 50);
  }
  // Always start with Advanced panel collapsed
  const panel = document.getElementById("searchFilterPanel");
  if (panel) panel.hidden = true;
  const caret = document.getElementById("filterPanelCaret");
  if (caret) caret.className = "ri-arrow-down-s-line";
  // Default: show empty state until user types
  if (!searchState.query) {
    toggleSearchResultsView(false);
  } else {
    runSearch();
  }
}

function renderTrendingSearches() {
  const row = document.getElementById("trendingSearchesRow");
  if (!row) return;
  row.innerHTML = "";
  TRENDING_SEARCHES.forEach(term => {
    const b = document.createElement("button");
    b.className = "search-chip";
    b.textContent = term;
    b.onclick = () => { setSearchQuery(term); };
    row.appendChild(b);
  });
}

function getRecentSearches() {
  try { return JSON.parse(localStorage.getItem("sunplex_search_recent") || "[]"); }
  catch { return []; }
}
function pushRecentSearch(q) {
  if (!q || q.trim().length < 2) return;
  const list = getRecentSearches().filter(x => x.toLowerCase() !== q.toLowerCase());
  list.unshift(q);
  localStorage.setItem("sunplex_search_recent", JSON.stringify(list.slice(0, 10)));
  renderRecentSearches();
}
function removeRecentSearch(q) {
  const list = getRecentSearches().filter(x => x !== q);
  localStorage.setItem("sunplex_search_recent", JSON.stringify(list));
  renderRecentSearches();
}
function renderRecentSearches() {
  const wrap = document.getElementById("recentSearchesBlock");
  const row = document.getElementById("recentSearchesRow");
  if (!wrap || !row) return;
  const list = getRecentSearches();
  if (!list.length) { wrap.hidden = true; row.innerHTML = ""; return; }
  wrap.hidden = false;
  row.innerHTML = "";
  list.forEach(term => {
    const b = document.createElement("button");
    b.className = "search-chip";
    b.innerHTML = `<i class="ri-time-line"></i> ${term} <i class="ri-close-line recent-chip-dismiss"></i>`;
    b.onclick = (e) => {
      if (e.target.classList.contains("recent-chip-dismiss")) {
        e.stopPropagation();
        removeRecentSearch(term);
      } else {
        setSearchQuery(term);
      }
    };
    row.appendChild(b);
  });
}

function setSearchQuery(q) {
  const inp = document.getElementById("searchPageInput");
  if (inp) inp.value = q;
  searchState.query = q;
  runSearch();
}

function onSearchInput() {
  const inp = document.getElementById("searchPageInput");
  searchState.query = (inp?.value || "").trim();
  renderSuggestions();
  clearTimeout(_searchDebounce);
  _searchDebounce = setTimeout(runSearch, 200);
}

function renderSuggestions() {
  const box = document.getElementById("searchSuggestions");
  if (!box) return;
  const q = (searchState.query || "").toLowerCase().trim();
  if (q.length < 2) { box.hidden = true; box.innerHTML = ""; return; }

  const titleMatches = MOVIES_DATA
    .filter(m => (m.title || "").toLowerCase().includes(q))
    .slice(0, 5);

  const GENRES = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Thriller", "Anime", "Romance", "Documentary"];
  const genreMatches = GENRES.filter(g => g.toLowerCase().includes(q)).slice(0, 2);

  if (!titleMatches.length && !genreMatches.length) { box.hidden = true; box.innerHTML = ""; return; }

  box.innerHTML = "";
  titleMatches.forEach(m => {
    const b = document.createElement("button");
    b.className = "suggestion-item";
    const kind = (m.type === 'SERIES' || (m.duration || '').includes('Season')) ? 'Series' : 'Movie';
    b.innerHTML = `<i class="ri-search-line"></i><span>${m.title}</span><span class="suggestion-meta">${kind}</span>`;
    b.onclick = () => {
      box.hidden = true;
      openFeaturedMovie(m.id);
    };
    box.appendChild(b);
  });
  genreMatches.forEach(g => {
    const b = document.createElement("button");
    b.className = "suggestion-item";
    b.innerHTML = `<i class="ri-hashtag"></i><span>${g}</span><span class="suggestion-meta">Genre</span>`;
    b.onclick = () => {
      box.hidden = true;
      browseByGenre(g);
    };
    box.appendChild(b);
  });
  box.hidden = false;
}

function hideSuggestions() {
  const box = document.getElementById("searchSuggestions");
  if (box) box.hidden = true;
}

function onSearchKey(e) {
  if (e.key === "Enter") {
    pushRecentSearch(searchState.query);
    hideSuggestions();
    runSearch();
  } else if (e.key === "Escape") {
    hideSuggestions();
    goBack();
  }
}

function clearSearchInput() {
  searchState.query = "";
  const inp = document.getElementById("searchPageInput");
  if (inp) { inp.value = ""; inp.focus(); }
  hideSuggestions();
  runSearch();
}

function setSearchScope(scope, el) {
  searchState.scope = scope;
  document.querySelectorAll("#searchScopeRow .search-chip").forEach(b => b.classList.remove("active"));
  el?.classList.add("active");
  runSearch();
}

function setGenre(genre, el) {
  searchState.genre = genre;
  document.querySelectorAll("#genreChipRow .search-chip").forEach(b => b.classList.remove("active"));
  el?.classList.add("active");
  runSearch();
}

// Called from the browse-by-genre tiles on the empty state
function browseByGenre(genre) {
  // Set the genre filter chip
  searchState.genre = genre;
  document.querySelectorAll("#genreChipRow .search-chip").forEach(b => {
    b.classList.toggle("active", b.dataset.genre === genre);
  });
  // Seed the input with the genre so results show and filter toggle appears
  const inp = document.getElementById("searchPageInput");
  if (inp) inp.value = genre;
  searchState.query = genre;
  runSearch();
}

function toggleFilterPanel() {
  const panel = document.getElementById("searchFilterPanel");
  const caret = document.getElementById("filterPanelCaret");
  if (!panel) return;
  panel.hidden = !panel.hidden;
  if (caret) caret.className = panel.hidden ? "ri-arrow-down-s-line" : "ri-arrow-up-s-line";
}

function clearAllSearchFilters() {
  searchState.genre = "any";
  document.querySelectorAll("#genreChipRow .search-chip").forEach(b => b.classList.toggle("active", b.dataset.genre === "any"));
  const y1 = document.getElementById("filterYearMin");
  const y2 = document.getElementById("filterYearMax");
  const r = document.getElementById("filterMinRating");
  const s = document.getElementById("filterSort");
  if (y1) y1.value = 2000;
  if (y2) y2.value = 2030;
  if (r) { r.value = 0; document.getElementById("minRatingLabel").textContent = "0.0"; }
  if (s) s.value = "relevance";
  runSearch();
}

function toggleSearchResultsView(showResults) {
  const empty = document.getElementById("searchEmptyState");
  const wrap = document.getElementById("searchResultsWrap");
  if (empty) empty.hidden = showResults;
  if (wrap) wrap.hidden = !showResults;
}

function runSearch() {
  const q = (searchState.query || "").trim().toLowerCase();
  const scope = searchState.scope;
  const genre = searchState.genre;
  const yearMin = parseInt(document.getElementById("filterYearMin")?.value, 10) || 1950;
  const yearMax = parseInt(document.getElementById("filterYearMax")?.value, 10) || 2030;
  const minRating = parseFloat(document.getElementById("filterMinRating")?.value) || 0;
  const sort = document.getElementById("filterSort")?.value || "relevance";

  if (!q) {
    toggleSearchResultsView(false);
    return;
  }
  toggleSearchResultsView(true);

  // Build candidate pool from MOVIES_DATA + CHANNELS_DATA
  let pool = [];
  if (scope === "all" || scope === "movie") {
    MOVIES_DATA.filter(m => m.type !== 'SERIES' && !(m.duration || '').includes('Season'))
      .forEach(m => pool.push({ ...m, _kind: 'movie' }));
  }
  if (scope === "all" || scope === "series") {
    MOVIES_DATA.filter(m => m.type === 'SERIES' || (m.duration || '').includes('Season'))
      .forEach(m => pool.push({ ...m, _kind: 'series' }));
  }
  if (scope === "all" || scope === "live") {
    (window.CHANNELS_DATA || []).forEach(ch => pool.push({
      id: 'ch-' + ch.id, title: ch.name, year: '2026', genre: ch.cat || 'Live',
      poster: null, badge: 'LIVE', imdb: '9.0', _kind: 'live', _channel: ch
    }));
  }

  pool = applyParentalCap(pool);

  // Filter
  let filtered = pool.filter(m => {
    if (minRating > 0 && parseFloat(m.imdb || 0) < minRating) return false;
    const y = parseInt(m.year, 10);
    if (!Number.isNaN(y) && (y < yearMin || y > yearMax)) return false;
    if (genre !== 'any') {
      const g = ((m.genre || '') + ' ' + (m.category || '')).toLowerCase();
      if (!g.includes(genre.toLowerCase())) return false;
    }
    return true;
  });

  // Score by relevance
  const scored = filtered.map(m => {
    const t = (m.title || '').toLowerCase();
    const g = ((m.genre || '') + ' ' + (m.category || '')).toLowerCase();
    const c = (m.cast || '').toLowerCase();
    const syn = (m.summary || '').toLowerCase();
    let score = 0;
    if (t === q) score += 10;
    if (t.startsWith(q)) score += 6;
    if (t.includes(q)) score += 3;
    if (g.includes(q)) score += 2;
    if (c.includes(q) || syn.includes(q)) score += 1;
    return { ...m, _score: score };
  }).filter(m => m._score > 0);

  // Sort
  if (sort === "newest") scored.sort((a, b) => (parseInt(b.year) || 0) - (parseInt(a.year) || 0));
  else if (sort === "rating") scored.sort((a, b) => parseFloat(b.imdb || 0) - parseFloat(a.imdb || 0));
  else if (sort === "az") scored.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
  else scored.sort((a, b) => b._score - a._score);

  renderSearchResults(scored);
  pushRecentSearch(searchState.query);
}

function renderSearchResults(list) {
  const grid = document.getElementById("searchResultsGrid");
  const count = document.getElementById("searchResultsCount");
  if (!grid || !count) return;
  count.textContent = `${list.length} result${list.length === 1 ? '' : 's'}`;
  grid.innerHTML = "";

  if (!list.length) {
    grid.innerHTML = `
      <div class="search-no-results">
        <i class="ri-search-eye-line"></i>
        <div style="font-size:15px; font-weight:700; color:#FFF;">No matches</div>
        <div style="font-size:12px; margin-top:4px;">Try removing a filter or using a different word.</div>
        <button class="btn-outline" style="margin-top:14px;" onclick="clearAllSearchFilters()">Clear filters</button>
      </div>`;
    return;
  }

  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "top-10-card";
    card.style.aspectRatio = "2/3";
    card.onclick = () => {
      if (item._kind === 'live' && item._channel) {
        switchView('liveTvView');
        setTimeout(() => selectChannel(item._channel), 100);
      } else {
        openFeaturedMovie(item.id);
      }
    };
    const qBadge = item._kind === 'live' ? 'LIVE' : getMovieQualityBadge(item);
    const qClass = item._kind === 'live' ? 'badge-live' : getQualityBadgeClass(qBadge);
    const poster = item.poster || 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg';
    card.innerHTML = `
      <div class="top-10-badge ${qClass}">${qBadge}</div>
      <img src="${poster}" alt="${item.title}" class="poster-img" loading="lazy" onerror="this.onerror=null; this.src='https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg';">
      <div class="top-10-overlay"><div class="top-10-title">${item.title}</div></div>
    `;
    grid.appendChild(card);
  });
}

// Account view — redirects legacy modal open to full page
function openAccountModal() { switchView('accountView'); }
function closeAccountModal() {}

/* Demo login handler */
function handleDemoLogin(event) {
  if (event) event.preventDefault();
  const user = document.getElementById("loginUser")?.value || "demo";
  const pass = document.getElementById("loginPass")?.value || "demo";
  const remember = document.getElementById("loginRemember")?.checked;
  if (!user || !pass) { showToast("Enter username and password"); return; }
  saveSession({ user, pass, server: "demo.sunplex.net", remember: !!remember });
  showToast(`Welcome back, ${user}!`);
  switchView('dashboardView');
}

/* Reusable info modal (replaces alert() for account flows) */
function openInfoModal({ title, body, code, actions }) {
  const modal = document.getElementById("infoModal");
  if (!modal) return;
  document.getElementById("infoModalTitle").textContent = title || "Info";
  const bodyEl = document.getElementById("infoModalBody");
  const actionsEl = document.getElementById("infoModalActions");
  bodyEl.innerHTML = "";
  if (code) {
    const row = document.createElement("div");
    row.className = "info-code";
    row.innerHTML = `<span>${code}</span><button class="btn-outline" aria-label="Copy code">Copy</button>`;
    row.querySelector("button").onclick = () => {
      navigator.clipboard?.writeText(code).then(
        () => showToast("Code copied"),
        () => showToast("Couldn't copy — select manually")
      );
    };
    bodyEl.appendChild(row);
  }
  if (body) {
    const b = document.createElement("div");
    b.textContent = body;
    bodyEl.appendChild(b);
  }
  actionsEl.innerHTML = "";
  (actions || [{ label: "Close", onClick: closeInfoModal }]).forEach(a => {
    const btn = document.createElement("button");
    btn.className = "btn-outline" + (a.danger ? " btn-danger" : "");
    btn.textContent = a.label;
    btn.onclick = () => { a.onClick?.(); if (a.closeAfter !== false) closeInfoModal(); };
    actionsEl.appendChild(btn);
  });
  modal.classList.add("active");
}
function closeInfoModal() {
  document.getElementById("infoModal")?.classList.remove("active");
}

/* ==========================================================================
   ACCOUNT STATE (prototype — all localStorage, no backend)
   ========================================================================== */
const AVATAR_PRESETS = ["🎬", "🍿", "🎭", "🚀", "🦸", "👑", "🐱", "🐺", "🌙", "🔥", "🎸", "🎮"];

const DEFAULT_PROFILE = {
  name: "SunPlex User", email: "user@sunplex.tv", avatar: "🎬", memberSince: "2024"
};
const DEFAULT_PLAN = { name: "Premium 4K", price: "$14.99", renews: "Nov 15, 2026", card: "Visa •••• 4242", maxStreams: 4 };
const DEFAULT_PREFS = {
  autoplayNext: true, autoplayPreviews: true, quality: "auto", dataSaver: false,
  audioLang: "English", subLang: "Off", subSize: "m", subColor: "#ffffff",
  lang: "English", region: "Global", theme: "dark", accent: "gold",
  notifReleases: true, notifReminders: true, notifLive: true, notifPromo: false,
  quietStart: "22:00", quietEnd: "07:00",
  downloadQuality: "standard", wifiOnly: true, autoDelete: false,
  biometric: false, twoFA: "off", loginAlerts: true, parentalCap: "all", pauseHistory: false
};

function lsGet(key, fallback) {
  try { const r = localStorage.getItem(key); return r ? JSON.parse(r) : fallback; }
  catch { return fallback; }
}
function lsSet(key, val) { localStorage.setItem(key, JSON.stringify(val)); }

function getProfile() { return { ...DEFAULT_PROFILE, ...lsGet('sunplex_profile', {}) }; }
function setProfile(p) { lsSet('sunplex_profile', p); }
function getPlan() { return { ...DEFAULT_PLAN, ...lsGet('sunplex_plan', {}) }; }
function setPlan(p) { lsSet('sunplex_plan', p); }
function getPrefs() { return { ...DEFAULT_PREFS, ...lsGet('sunplex_prefs', {}) }; }
function setPrefs(p) { lsSet('sunplex_prefs', p); }

function getProfiles() {
  const list = lsGet('sunplex_profiles', null);
  if (list && list.length) return list;
  const seed = [
    { id: 1, name: "You", avatar: "🎬", isKid: false },
    { id: 2, name: "Kids", avatar: "🐻", isKid: true }
  ];
  lsSet('sunplex_profiles', seed);
  return seed;
}
function setProfiles(list) { lsSet('sunplex_profiles', list); }
function getActiveProfileId() { return lsGet('sunplex_active_profile', getProfiles()[0]?.id); }
function setActiveProfileId(id) { lsSet('sunplex_active_profile', id); }

function getDevices() {
  const list = lsGet('sunplex_devices', null);
  if (list) return list;
  const seed = [{
    id: 'this-' + Date.now(), name: "This browser", type: "web",
    os: navigator.platform || "Web", city: "Local", lastActive: Date.now(), isCurrent: true, isTrusted: true
  }];
  lsSet('sunplex_devices', seed);
  return seed;
}
function setDevices(list) { lsSet('sunplex_devices', list); }

function getBillingHistory() {
  return lsGet('sunplex_billing', [
    { date: "Oct 15, 2026", amount: "$14.99", status: "Paid" },
    { date: "Sep 15, 2026", amount: "$14.99", status: "Paid" },
    { date: "Aug 15, 2026", amount: "$14.99", status: "Paid" }
  ]);
}

function getLoginLog() {
  return lsGet('sunplex_login_log', [
    { at: Date.now() - 1000 * 60 * 15, device: "This browser", ip: "192.168.1.4", city: "Local" },
    { at: Date.now() - 1000 * 60 * 60 * 26, device: "Android Phone", ip: "103.***.***.21", city: "Dhaka" },
    { at: Date.now() - 1000 * 60 * 60 * 72, device: "Android TV", ip: "103.***.***.21", city: "Dhaka" }
  ]);
}

function getRewardsPoints() { return lsGet('sunplex_points', 0); }
function setRewardsPoints(n) { lsSet('sunplex_points', n); }

/* ---------- Renderers ---------- */
function renderAccountView() {
  const p = getProfile();
  const plan = getPlan();
  const setText = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };

  setText('profileName', p.name);
  setText('profileEmail', p.email);
  setText('profileMemberSince', p.memberSince);
  const av = document.getElementById('profileAvatarBig');
  if (av) paintAvatarInto(av, p.avatar);
  syncHeaderAvatar();

  setText('profilePlanBadge', plan.name.toUpperCase());
  setText('planName', plan.name);
  setText('planPrice', plan.price);
  setText('planRenews', plan.renews);
  setText('planCard', plan.card);

  // Billing history
  const bh = document.getElementById('billingHistoryList');
  if (bh) {
    bh.innerHTML = getBillingHistory().map(b =>
      `<div class="plan-history-row"><span>${b.date}</span><span>${b.amount}</span><span style="color:#10b981;">${b.status}</span></div>`
    ).join('');
  }

  renderProfiles();
  renderDevices();
  loadPrefsIntoForm();
  updateStreamCounter();
  updateRewardsDisplay();
  updateAppPinLabel();
  updateThemeAccentActive();
}

function renderProfiles() {
  const row = document.getElementById('profilesRow');
  if (!row) return;
  const active = getActiveProfileId();
  row.innerHTML = "";
  getProfiles().forEach(pr => {
    const chip = document.createElement('div');
    chip.className = `profile-chip ${pr.id === active ? 'active' : ''}`;
    chip.onclick = () => { setActiveProfileId(pr.id); renderProfiles(); showToast(`Switched to ${pr.name}`); };
    chip.innerHTML = `
      <div class="profile-chip-avatar"></div>
      <div class="profile-chip-name">${pr.name}</div>
      ${pr.isKid ? '<span class="profile-chip-kid-badge">KIDS</span>' : ''}
    `;
    paintAvatarInto(chip.querySelector('.profile-chip-avatar'), pr.avatar);
    row.appendChild(chip);
  });
}

function addProfile() {
  const name = prompt("New profile name:");
  if (!name) return;
  const isKid = confirm("Make this a Kids profile?");
  const list = getProfiles();
  const avatar = AVATAR_PRESETS[list.length % AVATAR_PRESETS.length];
  list.push({ id: Date.now(), name, avatar, isKid });
  setProfiles(list);
  renderProfiles();
}

function isAvatarImage(a) {
  return typeof a === "string" && (a.startsWith("data:image/") || /^https?:\/\//.test(a));
}

function paintAvatarInto(el, avatar) {
  if (!el) return;
  if (isAvatarImage(avatar)) {
    el.classList.add("has-image");
    el.innerHTML = `<img src="${avatar}" alt="Profile avatar" draggable="false">`;
  } else {
    el.classList.remove("has-image");
    el.textContent = avatar || "🎬";
  }
}

function pickAvatarPreset() {
  openInfoModal({
    title: "Change profile picture",
    body: "Pick an emoji preset, upload an image from your device, or paste an image URL.",
    actions: [
      { label: "Upload image", onClick: triggerAvatarUpload, closeAfter: true },
      { label: "Paste image URL", onClick: setAvatarByUrl, closeAfter: true },
      { label: "Next emoji", onClick: cycleEmojiAvatar, closeAfter: true },
      { label: "Cancel" }
    ]
  });
}

function triggerAvatarUpload() {
  const inp = document.createElement("input");
  inp.type = "file";
  inp.accept = "image/*";
  inp.onchange = () => {
    const file = inp.files && inp.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { showToast("Image too large (max 2 MB)"); return; }
    const reader = new FileReader();
    reader.onload = (e) => applyAvatar(e.target.result);
    reader.onerror = () => showToast("Couldn't read file");
    reader.readAsDataURL(file);
  };
  inp.click();
}

function setAvatarByUrl() {
  const url = prompt("Paste an image URL:");
  if (!url) return;
  if (!/^https?:\/\//.test(url)) { showToast("URL must start with http(s)://"); return; }
  applyAvatar(url);
}

function cycleEmojiAvatar() {
  const p = getProfile();
  const cur = isAvatarImage(p.avatar) ? "" : p.avatar;
  const next = AVATAR_PRESETS[(AVATAR_PRESETS.indexOf(cur) + 1) % AVATAR_PRESETS.length];
  applyAvatar(next);
}

function applyAvatar(value) {
  const p = getProfile();
  p.avatar = value;
  setProfile(p);
  renderAccountView();
  const drawerAv = document.getElementById("drawerAvatar");
  if (drawerAv) paintAvatarInto(drawerAv, value);
  showToast("Profile picture updated");
}

function syncHeaderAvatar() {
  const wrap = document.getElementById("accountPillBtn");
  const avatar = getProfile().avatar;
  if (!wrap) return;
  // Keep the emoji span if we're using an emoji; swap to <img> if image.
  if (isAvatarImage(avatar)) {
    wrap.classList.add("has-image");
    wrap.innerHTML = `<img src="${avatar}" alt="Profile avatar" draggable="false">`;
  } else {
    wrap.classList.remove("has-image");
    wrap.innerHTML = `<span class="avatar-emoji" id="headerAvatarEmoji">${avatar || "🎬"}</span>`;
  }
}

function openEditProfile() {
  const p = getProfile();
  const name = prompt("Display name:", p.name);
  if (name == null) return;
  const email = prompt("Email:", p.email);
  if (email == null) return;
  setProfile({ ...p, name, email });
  renderAccountView();
  showToast("Profile updated");
}

/* ---------- Devices ---------- */
function renderDevices() {
  const list = document.getElementById('devicesList');
  if (!list) return;
  const devices = getDevices();
  list.innerHTML = "";
  devices.forEach(d => {
    const row = document.createElement('div');
    row.className = `device-row ${d.isCurrent ? 'is-current' : ''}`;
    const iconClass = {
      tv: 'ri-tv-2-line', phone: 'ri-smartphone-line', tablet: 'ri-tablet-line',
      web: 'ri-computer-line', laptop: 'ri-macbook-line'
    }[d.type] || 'ri-device-line';
    const last = new Date(d.lastActive).toLocaleString();
    row.innerHTML = `
      <div class="device-icon"><i class="${iconClass}"></i></div>
      <div class="device-main">
        <div class="device-name">${d.name}${d.isCurrent ? ' <span class="plan-badge" style="font-size:9px; margin-left:6px;">THIS DEVICE</span>' : ''}</div>
        <div class="device-meta">${d.os} · ${d.city} · Last active ${last}${d.isTrusted ? ' · Trusted' : ''}</div>
      </div>
      <div class="device-actions"></div>
    `;
    const actions = row.querySelector('.device-actions');
    const renameBtn = document.createElement('button');
    renameBtn.className = 'btn-text';
    renameBtn.textContent = 'Rename';
    renameBtn.onclick = () => renameDevice(d.id);
    actions.appendChild(renameBtn);
    const trustBtn = document.createElement('button');
    trustBtn.className = 'btn-text';
    trustBtn.textContent = d.isTrusted ? 'Untrust' : 'Trust';
    trustBtn.onclick = () => toggleTrustDevice(d.id);
    actions.appendChild(trustBtn);
    if (!d.isCurrent) {
      const outBtn = document.createElement('button');
      outBtn.className = 'btn-outline btn-danger';
      outBtn.textContent = 'Sign out';
      outBtn.onclick = () => signOutDevice(d.id);
      actions.appendChild(outBtn);
    }
    list.appendChild(row);
  });
}

function addDevice(name, type) {
  const list = getDevices();
  list.push({
    id: 'dev-' + Date.now(), name: name || "Linked Device", type: type || "tv",
    os: type === 'tv' ? "Android TV" : "Unknown", city: "Dhaka", lastActive: Date.now(),
    isCurrent: false, isTrusted: false
  });
  setDevices(list);
  renderDevices();
  updateStreamCounter();
}

function renameDevice(id) {
  const list = getDevices();
  const d = list.find(x => x.id === id);
  if (!d) return;
  const name = prompt("Rename device:", d.name);
  if (!name) return;
  d.name = name;
  setDevices(list);
  renderDevices();
}

function toggleTrustDevice(id) {
  const list = getDevices();
  const d = list.find(x => x.id === id);
  if (!d) return;
  d.isTrusted = !d.isTrusted;
  setDevices(list);
  renderDevices();
}

function signOutDevice(id) {
  if (!confirm("Sign out this device?")) return;
  setDevices(getDevices().filter(d => d.id !== id));
  renderDevices();
  updateStreamCounter();
  showToast("Device signed out");
}

function signOutAllDevices() {
  if (!confirm("Sign out all other devices? This device will remain signed in.")) return;
  setDevices(getDevices().filter(d => d.isCurrent));
  renderDevices();
  updateStreamCounter();
  showToast("All other devices signed out");
}

function updateStreamCounter() {
  const el = document.getElementById('streamCounter');
  if (!el) return;
  const plan = getPlan();
  const inUse = Math.min(getDevices().length, plan.maxStreams);
  el.textContent = `${inUse} of ${plan.maxStreams} streams in use`;
}

/* ---------- Prefs ---------- */
function loadPrefsIntoForm() {
  const p = getPrefs();
  const bind = (id, val, prop = 'value') => { const el = document.getElementById(id); if (el) el[prop] = val; };
  bind('prefAutoplayNext', p.autoplayNext, 'checked');
  bind('prefAutoplayPreviews', p.autoplayPreviews, 'checked');
  bind('prefQuality', p.quality);
  bind('prefDataSaver', p.dataSaver, 'checked');
  bind('prefAudioLang', p.audioLang);
  bind('prefSubLang', p.subLang);
  bind('prefSubSize', p.subSize);
  bind('prefSubColor', p.subColor);
  bind('prefLang', p.lang);
  bind('prefRegion', p.region);
  bind('notifReleases', p.notifReleases, 'checked');
  bind('notifReminders', p.notifReminders, 'checked');
  bind('notifLive', p.notifLive, 'checked');
  bind('notifPromo', p.notifPromo, 'checked');
  bind('quietStart', p.quietStart);
  bind('quietEnd', p.quietEnd);
  bind('prefDownloadQuality', p.downloadQuality);
  bind('prefWifiOnly', p.wifiOnly, 'checked');
  bind('prefAutoDelete', p.autoDelete, 'checked');
  bind('secBiometric', p.biometric, 'checked');
  bind('sec2FA', p.twoFA);
  bind('secLoginAlerts', p.loginAlerts, 'checked');
  bind('parentalCap', p.parentalCap);
  bind('pauseHistory', p.pauseHistory, 'checked');
  applySubStylePreview();
}

function savePrefs() {
  const read = (id, prop = 'value') => { const el = document.getElementById(id); return el ? el[prop] : undefined; };
  const p = {
    autoplayNext: read('prefAutoplayNext', 'checked'),
    autoplayPreviews: read('prefAutoplayPreviews', 'checked'),
    quality: read('prefQuality'),
    dataSaver: read('prefDataSaver', 'checked'),
    audioLang: read('prefAudioLang'),
    subLang: read('prefSubLang'),
    subSize: read('prefSubSize'),
    subColor: read('prefSubColor'),
    lang: read('prefLang'),
    region: read('prefRegion'),
    theme: getPrefs().theme,
    accent: getPrefs().accent,
    notifReleases: read('notifReleases', 'checked'),
    notifReminders: read('notifReminders', 'checked'),
    notifLive: read('notifLive', 'checked'),
    notifPromo: read('notifPromo', 'checked'),
    quietStart: read('quietStart'),
    quietEnd: read('quietEnd'),
    downloadQuality: read('prefDownloadQuality'),
    wifiOnly: read('prefWifiOnly', 'checked'),
    autoDelete: read('prefAutoDelete', 'checked'),
    biometric: read('secBiometric', 'checked'),
    twoFA: read('sec2FA'),
    loginAlerts: read('secLoginAlerts', 'checked'),
    parentalCap: read('parentalCap'),
    pauseHistory: read('pauseHistory', 'checked')
  };
  setPrefs(p);
  applySubStylePreview();
  showToast("Settings saved");
}

function applySubStylePreview() {
  const p = getPrefs();
  const el = document.getElementById('subStylePreview');
  if (!el) return;
  const sizes = { s: '12px', m: '14px', l: '18px' };
  el.style.fontSize = sizes[p.subSize] || '14px';
  el.style.color = p.subColor || '#fff';
}

function setTheme(theme) {
  const p = getPrefs(); p.theme = theme; setPrefs(p);
  applyThemeAndAccent();
  updateThemeAccentActive();
}

function setAccent(accent) {
  const p = getPrefs(); p.accent = accent; setPrefs(p);
  applyThemeAndAccent();
  updateThemeAccentActive();
}

function applyThemeAndAccent() {
  const p = getPrefs();
  document.body.dataset.theme = p.theme;
  const bgMap = { dark: '#0b0f19', amoled: '#000000', dim: '#131722' };
  const accentMap = { gold: '#FC5305', orange: '#FC5305', purple: '#8B5CF6', red: '#E50914', cyan: '#06B6D4' };
  document.documentElement.style.setProperty('--bg-primary', bgMap[p.theme] || bgMap.dark);
  document.documentElement.style.setProperty('--accent-gold', accentMap[p.accent] || '#FC5305');
  document.body.style.background = bgMap[p.theme] || bgMap.dark;
}

function updateThemeAccentActive() {
  const p = getPrefs();
  document.querySelectorAll('.theme-chip').forEach(b => b.classList.toggle('active', b.dataset.theme === p.theme));
  document.querySelectorAll('.accent-dot').forEach(b => b.classList.toggle('active', b.dataset.accent === p.accent));
}

/* ---------- Security ---------- */
function setAppPin() {
  const pin = prompt("Enter new 4-digit PIN (empty to remove):");
  if (pin === null) return;
  if (pin && !/^\d{4}$/.test(pin)) { showToast("PIN must be 4 digits"); return; }
  lsSet('sunplex_app_pin', pin || null);
  updateAppPinLabel();
  showToast(pin ? "App PIN set" : "App PIN removed");
}
function updateAppPinLabel() {
  const el = document.getElementById('appPinLabel');
  if (!el) return;
  const pin = lsGet('sunplex_app_pin', null);
  el.textContent = pin ? "Change (set)" : "Not set";
}
function openChangePassword() {
  const cur = prompt("Current password:");
  if (!cur) return;
  const n1 = prompt("New password:");
  if (!n1) return;
  const n2 = prompt("Confirm new password:");
  if (n1 !== n2) { showToast("Passwords don't match"); return; }
  lsSet('sunplex_pwd_changed_at', Date.now());
  const el = document.getElementById('pwdLastChanged'); if (el) el.textContent = "just now";
  showToast("Password updated");
}
function openLoginLog() {
  const log = getLoginLog().map(e => `• ${new Date(e.at).toLocaleString()} — ${e.device} (${e.ip}, ${e.city})`).join('\n');
  openInfoModal({ title: "Recent login activity", body: log });
}
function clearWatchHistory() {
  if (!confirm("Clear all watch history? This cannot be undone.")) return;
  localStorage.removeItem('sunplex_watch_history');
  showToast("Watch history cleared");
}
function downloadMyData() {
  const data = {
    profile: getProfile(), plan: getPlan(), prefs: getPrefs(),
    devices: getDevices(), profiles: getProfiles(), points: getRewardsPoints()
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'sunplex-data.json'; a.click();
  URL.revokeObjectURL(url);
}
function confirmDeleteAccount() {
  if (!confirm("Delete your account? This is permanent after 30 days.")) return;
  const t = prompt('Type "DELETE" to confirm:');
  if (t !== "DELETE") return;
  showToast("Account scheduled for deletion in 30 days");
}

/* ---------- Content & Social ---------- */
function openMyListManager() { showToast("My List manager (prototype)"); }
function openWatchHistory() { showToast("Watch history view (prototype)"); }
function openMyRatings() { showToast("My ratings & reviews (prototype)"); }
function openTasteQuiz() { showToast("Taste quiz coming soon"); }
function openFamilyInvite() {
  const code = Math.random().toString(36).slice(2, 8).toUpperCase();
  openInfoModal({
    title: "Family invite code",
    code,
    body: "Share this with a household member to add them to your plan."
  });
}
function openReferral() {
  const code = "SUNPLEX-" + (getProfile().name.toUpperCase().replace(/\s/g, '').slice(0, 6) || "USER");
  openInfoModal({
    title: "Your referral code",
    code,
    body: "Invite a friend — they get 1 month free, and so do you."
  });
}

/* ---------- Rewards & Help ---------- */
function updateRewardsDisplay() {
  const el = document.getElementById('rewardsPoints');
  if (el) el.textContent = getRewardsPoints().toLocaleString();
}
function redeemPoints() {
  const pts = getRewardsPoints();
  if (pts < 500) { showToast(`Need at least 500 pts (you have ${pts})`); return; }
  if (!confirm(`Redeem 500 pts for 1 free upgrade?`)) return;
  setRewardsPoints(pts - 500);
  updateRewardsDisplay();
  showToast("Redeemed! Enjoy your upgrade.");
}
function openPromoCode() {
  const code = prompt("Enter promo code:");
  if (!code) return;
  const bonus = 100;
  setRewardsPoints(getRewardsPoints() + bonus);
  updateRewardsDisplay();
  showToast(`Code accepted — +${bonus} pts`);
}
function openGiftSubscription() { showToast("Gift flow (prototype)"); }
function openBugReport() {
  const msg = prompt("Describe the bug:");
  if (msg) showToast("Bug report sent — thank you!");
}

/* ---------- Plan ---------- */
function openChangePlan() {
  const choice = prompt("Choose plan:\n1 = Basic ($5.99)\n2 = Standard ($9.99)\n3 = Premium 4K ($14.99)\n4 = Ultra ($19.99)");
  const plans = {
    "1": { name: "Basic", price: "$5.99", maxStreams: 1 },
    "2": { name: "Standard", price: "$9.99", maxStreams: 2 },
    "3": { name: "Premium 4K", price: "$14.99", maxStreams: 4 },
    "4": { name: "Ultra", price: "$19.99", maxStreams: 6 }
  };
  const picked = plans[choice];
  if (!picked) return;
  setPlan({ ...getPlan(), ...picked });
  renderAccountView();
  showToast(`Plan changed to ${picked.name}`);
}
function confirmCancelPlan() {
  if (!confirm("Cancel your subscription? Access continues until the next renewal date.")) return;
  showToast("Subscription will end at next renewal");
}

/* ---------- Sign out ---------- */
function signOutCurrent() {
  if (!confirm("Sign out of SunPlex on this device?")) return;
  clearSession();
  showToast("Signed out");
  switchView('dashboardView');
}

// Hook TV code pairing success into device management
const _origCheckTvCodeVerified = typeof checkTvCodeVerified === 'function' ? checkTvCodeVerified : null;
if (_origCheckTvCodeVerified) {
  checkTvCodeVerified = function() {
    const before = localStorage.getItem('sunplex_tv_verified');
    _origCheckTvCodeVerified.apply(this, arguments);
    if (before && !localStorage.getItem('sunplex_tv_verified')) {
      addDevice("Linked Android TV", "tv");
    }
  };
}

// Downloads Demo Data Repository with Official Real Artwork
let DOWNLOADS_DATA = [
  {
    id: 104,
    title: "SPIDER-MAN",
    subTitle: "Across the Spider-Verse",
    quality: "1080p Full HD",
    size: "2.4 GB",
    date: "Sep 04, 2026",
    poster: "https://upload.wikimedia.org/wikipedia/en/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 101,
    title: "Dune: Part Two",
    subTitle: "The Prophet Rises 4K",
    quality: "1080p Ultra HD",
    size: "3.1 GB",
    date: "Sep 05, 2026",
    poster: "https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpg",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 202,
    title: "Extraction 2",
    subTitle: "Tyler Rake Return Mission",
    quality: "1080p Full HD",
    size: "1.8 GB",
    date: "Aug 28, 2026",
    poster: "https://upload.wikimedia.org/wikipedia/en/7/7b/Extraction_2_poster.jpg",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 301,
    title: "Jawan",
    subTitle: "Hindi Action Blockbuster",
    quality: "720p HD",
    size: "1.4 GB",
    date: "Aug 15, 2026",
    poster: "https://upload.wikimedia.org/wikipedia/en/3/39/Jawan_film_poster.jpg",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  }
];

function renderDownloadsList() {
  const container = document.getElementById("downloadsListContainer");
  const countLabel = document.getElementById("downloadedCountLabel");
  if (!container) return;
  container.innerHTML = "";

  if (countLabel) {
    countLabel.innerText = `${DOWNLOADS_DATA.length} Movies / Shows`;
  }

  if (DOWNLOADS_DATA.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
        <i class="ri-download-cloud-line" style="font-size: 56px; color: var(--bg-dark-600);"></i>
        <p style="margin-top: 12px; font-size: 15px; font-weight: 600;">No Offline Downloads</p>
        <p style="font-size: 12px;">Movies you download for offline viewing will appear here.</p>
      </div>
    `;
    return;
  }

  DOWNLOADS_DATA.forEach(item => {
    const card = document.createElement("div");
    card.className = "download-item-card";
    card.innerHTML = `
      <img src="${item.poster}" alt="${item.title}" class="download-poster" loading="lazy">
      <div class="download-item-info">
        <div class="download-item-title">${item.title}</div>
        <div class="download-item-subtitle">${item.subTitle}</div>
        <div class="download-meta-badges">
          <span class="download-badge">${item.quality}</span>
          <span class="download-badge">${item.size}</span>
          <span class="download-badge">${item.date}</span>
        </div>
      </div>
      <div class="download-actions">
        <button class="btn-download-play" onclick="playStream('${item.streamUrl}', '${item.title}')" title="Play Offline Video">
          <i class="ri-play-fill"></i>
        </button>
        <button class="btn-download-delete" onclick="deleteDownloadItem(${item.id})" title="Delete Download">
          <i class="ri-delete-bin-line"></i>
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

function deleteDownloadItem(id) {
  DOWNLOADS_DATA = DOWNLOADS_DATA.filter(d => d.id !== id);
  renderDownloadsList();
}

/* ==========================================================================
   FEATURE 1: Continue Watching Carousel Logic (Official Real Artwork)
   ========================================================================== */
let CONTINUE_WATCHING_DATA = [
  {
    id: 104,
    title: "SPIDER-MAN",
    subTitle: "Across the Spider-Verse",
    progress: 65,
    timeLeft: "48 min remaining",
    poster: "https://upload.wikimedia.org/wikipedia/en/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 201,
    title: "Black Mirror",
    subTitle: "S6:E1 • Demon 79",
    progress: 30,
    timeLeft: "35 min remaining",
    poster: "https://upload.wikimedia.org/wikipedia/en/2/22/BlackMirrorTitleCard.png",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  },
  {
    id: 301,
    title: "Jawan",
    subTitle: "Hindi Action Blockbuster",
    progress: 82,
    timeLeft: "25 min remaining",
    poster: "https://upload.wikimedia.org/wikipedia/en/3/39/Jawan_film_poster.jpg",
    streamUrl: "https://stream.sunplex.net/Movies/Hindi/2026/A/Alpha/Alpha.2026.1080p.x264.AAC.BTs.VTL.mp4/index.m3u8"
  }
];

function renderContinueWatchingCarousel() {
  const container = document.getElementById("continueWatchingCarousel");
  const section = document.getElementById("continueWatchingSection");
  if (!container) return;
  container.innerHTML = "";

  if (CONTINUE_WATCHING_DATA.length === 0) {
    if (section) section.style.display = "none";
    return;
  }
  if (section) section.style.display = "block";

  CONTINUE_WATCHING_DATA.forEach(item => {
    const card = document.createElement("div");
    card.className = "top-10-card";
    card.style.aspectRatio = "16/9";
    card.onclick = () => playStream(item.streamUrl, item.title);
    card.innerHTML = `
      <img src="${item.poster}" alt="${item.title}" class="poster-img" loading="lazy">
      <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(0,0,0,0.9), transparent 60%); display:flex; flex-direction:column; justify-content:flex-end; padding:10px;">
        <div style="font-size:13px; font-weight:700; color:#fff;">${item.title}</div>
        <div style="font-size:11px; color:#aaa; margin-bottom:6px;">${item.subTitle} • ${item.timeLeft}</div>
        <div style="width:100%; height:4px; background:rgba(255,255,255,0.2); border-radius:2px; overflow:hidden;">
          <div style="width:${item.progress}%; height:100%; background:var(--brand-red);"></div>
        </div>
      </div>
      <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:36px; height:36px; border-radius:50%; background:rgba(229,9,20,0.85); display:flex; align-items:center; justify-content:center; color:#fff; font-size:18px;">
        <i class="ri-play-fill"></i>
      </div>
    `;
    container.appendChild(card);
  });

  enableCarouselMouseDrag(container);
}

/* ==========================================================================
   FEATURE 2: My List (Watchlist) Management
   ========================================================================== */
let MY_LIST = JSON.parse(localStorage.getItem('sunplex_mylist') || '[]');

function toggleMyListHero(movieId) {
  const targetId = movieId || (activeCurrentMovie ? activeCurrentMovie.id : 104);
  const idx = MY_LIST.indexOf(targetId);
  if (idx > -1) {
    MY_LIST.splice(idx, 1);
    showToast("Removed from My List");
  } else {
    MY_LIST.push(targetId);
    showToast("Saved to My List ❤️");
  }
  localStorage.setItem('sunplex_mylist', JSON.stringify(MY_LIST));
  updateMyListBtn(targetId);
}

function toggleMyListActive() {
  if (activeCurrentMovie) {
    toggleMyListHero(activeCurrentMovie.id);
  } else {
    toggleMyListHero(104);
  }
}

function updateMyListBtn(movieId) {
  const isSaved = MY_LIST.includes(movieId);

  const detailIcon = document.getElementById("detailMyListIcon");
  const detailText = document.getElementById("detailMyListText");
  if (detailIcon) detailIcon.className = isSaved ? "ri-heart-fill" : "ri-heart-line";
  if (detailText) detailText.innerText = isSaved ? "In Watchlist" : "My List";

  const heroIcon = document.getElementById("heroMyListIcon");
  const heroText = document.getElementById("heroMyListText");
  if (heroIcon) heroIcon.className = isSaved ? "ri-heart-fill" : "ri-heart-line";
  if (heroText) heroText.innerText = isSaved ? "In Watchlist" : "My List";
}

/* ==========================================================================
   FEATURE 3: Trailer Previews Modal Handler
   ========================================================================== */
function triggerTrailerPlay() {
  openTrailerModal("https://www.youtube.com/embed/shW9i6k8cB0?autoplay=1");
}

let _trailerLoadTimer = null;
function openTrailerModal(embedUrl) {
  const modal = document.getElementById("trailerModal");
  const iframe = document.getElementById("trailerIframe");
  if (!modal || !iframe) return;

  clearTimeout(_trailerLoadTimer);
  iframe.dataset.loaded = "false";
  iframe.onload = () => {
    iframe.dataset.loaded = "true";
    clearTimeout(_trailerLoadTimer);
  };
  iframe.onerror = () => showToast("Couldn't load trailer");
  iframe.src = embedUrl || "https://www.youtube.com/embed/shW9i6k8cB0?autoplay=1";

  _trailerLoadTimer = setTimeout(() => {
    if (iframe.dataset.loaded !== "true") showToast("Trailer taking a while — check your connection");
  }, 6000);

  modal.classList.add("active");
}

function closeTrailerModal() {
  const modal = document.getElementById("trailerModal");
  const iframe = document.getElementById("trailerIframe");
  if (iframe) iframe.src = "";
  if (modal) modal.classList.remove("active");
}

/* ==========================================================================
   FEATURE 4: Advanced Catalog Filtering (Year, Rating, Genre)
   ========================================================================== */
function applyAdvancedFilters(type) {
  const isSeries = type === 'series';
  const prefix = isSeries ? 'series' : 'movies';
  const year = document.getElementById(`${prefix}YearFilter`)?.value || 'ALL';
  const rating = document.getElementById(`${prefix}RatingFilter`)?.value || 'ALL';
  const genre = document.getElementById(`${prefix}GenreFilter`)?.value || 'ALL';

  const typeFilter = isSeries
    ? (m => m.type === 'SERIES' || (m.duration || '').includes('Season'))
    : (m => m.type === 'MOVIE' || !m.type);

  let filtered = applyParentalCap(MOVIES_DATA.filter(typeFilter));
  if (year !== 'ALL') filtered = filtered.filter(m => String(m.year) === String(year));
  if (rating !== 'ALL') filtered = filtered.filter(m => m.rating === rating);
  if (genre !== 'ALL') filtered = filtered.filter(m => (m.category || '').toLowerCase() === genre.toLowerCase() || (m.genre || '').toLowerCase().includes(genre.toLowerCase()));

  const gridId = isSeries ? 'seriesGrid' : 'moviesGrid';
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = "";

  if (!filtered.length) {
    grid.innerHTML = `<div class="channels-empty-state" style="grid-column:1/-1;"><i class="ri-filter-off-line" style="font-size:22px;"></i><br>No titles match these filters</div>`;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "top-10-card";
    card.style.aspectRatio = "2/3";
    card.onclick = () => openFeaturedMovie(item.id);
    const qBadge = getMovieQualityBadge(item);
    const qClass = getQualityBadgeClass(qBadge);
    card.innerHTML = `
      <div class="top-10-badge ${qClass}">${qBadge}</div>
      <img src="${item.poster}" alt="${item.title}" class="poster-img" loading="lazy">
      <div class="top-10-overlay"><div class="top-10-title">${item.title}</div></div>
    `;
    grid.appendChild(card);
  });
}

// Content-rating cap from Account preferences
function applyParentalCap(list) {
  const cap = (getPrefs && getPrefs().parentalCap) || 'all';
  if (!cap || cap === 'all') return list;
  const limit = parseInt(cap, 10);
  if (!Number.isFinite(limit)) return list;
  return list.filter(m => {
    const r = parseInt(String(m.rating || '').replace(/\D/g, ''), 10);
    return !Number.isFinite(r) || r <= limit;
  });
}

/* ==========================================================================
   FEATURE 5: Xtream Codes IPTV Login Modal Handler
   ========================================================================== */
function openXtreamLoginModal() {
  const modal = document.getElementById("xtreamLoginModal");
  if (modal) modal.classList.add("active");
}

function closeXtreamLoginModal() {
  const modal = document.getElementById("xtreamLoginModal");
  if (modal) modal.classList.remove("active");
}

function handleXtreamLogin(event) {
  event.preventDefault();
  const server = document.getElementById("xtreamHost")?.value;
  const user = document.getElementById("xtreamUser")?.value;
  const pass = document.getElementById("xtreamPass")?.value;

  if (server && user && pass) {
    localStorage.setItem('sunplex_xtream', JSON.stringify({ server, user, pass }));
    saveSession({ server, user, pass });
    closeXtreamLoginModal();
    showToast("Xtream Codes IPTV Connected! Loading Playlist...");
  } else {
    showToast("Please fill in all Xtream credentials.");
  }
}

/* ==========================================================================
   FEATURE 5b: Session Persistence
   ========================================================================== */
function getSession() {
  try {
    const raw = localStorage.getItem('sunplex_session');
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function saveSession(data) {
  localStorage.setItem('sunplex_session', JSON.stringify({ ...data, loggedInAt: Date.now() }));
}

function clearSession() {
  localStorage.removeItem('sunplex_session');
}

/* ==========================================================================
   FEATURE 5c: "Sign in with a Code" — Phone-to-TV Pairing (local demo)
   ========================================================================== */
const TV_CODE_TTL_MS = 5 * 60 * 1000;
let tvCodeTimerInterval = null;
let tvCodePollInterval = null;

function generateTvCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no ambiguous chars
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

function openTvCodeModal() {
  closeXtreamLoginModal();
  const modal = document.getElementById("tvCodeModal");
  if (!modal) return;
  modal.classList.add("active");
  showTvCodeStep();
  startTvCode();
}

function closeTvCodeModal() {
  const modal = document.getElementById("tvCodeModal");
  if (modal) modal.classList.remove("active");
  stopTvCodePolling();
  window.removeEventListener('storage', handleTvCodeStorageEvent);
}

function showTvCodeStep() {
  document.getElementById("tvCodeStepTv")?.classList.remove("hidden");
  document.getElementById("tvCodeStepPhone")?.classList.add("hidden");
  document.getElementById("tvCodeStepSuccess")?.classList.add("hidden");
}

function showPhoneVerifyStep() {
  document.getElementById("tvCodeStepTv")?.classList.add("hidden");
  document.getElementById("tvCodeStepPhone")?.classList.remove("hidden");
  document.getElementById("tvCodeStepSuccess")?.classList.add("hidden");
  const input = document.getElementById("phoneCodeInput");
  if (input) { input.value = ""; input.focus(); }
}

function startTvCode() {
  const code = generateTvCode();
  const expiresAt = Date.now() + TV_CODE_TTL_MS;
  localStorage.setItem('sunplex_tv_code', JSON.stringify({ code, expiresAt }));
  localStorage.removeItem('sunplex_tv_verified');

  const codeEl = document.getElementById("tvCodeValue");
  if (codeEl) codeEl.textContent = code;

  const statusEl = document.getElementById("tvCodeStatus");
  if (statusEl) statusEl.textContent = "Waiting for phone…";

  startTvCodeCountdown(expiresAt);
  startTvCodePolling();

  window.removeEventListener('storage', handleTvCodeStorageEvent);
  window.addEventListener('storage', handleTvCodeStorageEvent);
}

function startTvCodeCountdown(expiresAt) {
  clearInterval(tvCodeTimerInterval);
  const timerEl = document.getElementById("tvCodeTimer");

  const tick = () => {
    const msLeft = expiresAt - Date.now();
    if (msLeft <= 0) {
      startTvCode(); // regenerate so the flow never dead-ends
      return;
    }
    const secs = Math.ceil(msLeft / 1000);
    const m = Math.floor(secs / 60);
    const s = String(secs % 60).padStart(2, "0");
    if (timerEl) timerEl.textContent = `Expires in ${m}:${s}`;
  };

  tick();
  tvCodeTimerInterval = setInterval(tick, 1000);
}

function startTvCodePolling() {
  stopTvCodePolling();
  tvCodePollInterval = setInterval(checkTvCodeVerified, 1000);
}

function stopTvCodePolling() {
  clearInterval(tvCodeTimerInterval);
  clearInterval(tvCodePollInterval);
  tvCodeTimerInterval = null;
  tvCodePollInterval = null;
}

function handleTvCodeStorageEvent(e) {
  if (e.key === 'sunplex_tv_verified') checkTvCodeVerified();
}

function checkTvCodeVerified() {
  try {
    const raw = localStorage.getItem('sunplex_tv_verified');
    if (!raw) return;
    const verified = JSON.parse(raw);
    const pending = JSON.parse(localStorage.getItem('sunplex_tv_code') || "null");
    if (!pending || verified.code !== pending.code) return;

    stopTvCodePolling();
    window.removeEventListener('storage', handleTvCodeStorageEvent);
    saveSession(verified.session || { server: 'demo', user: 'demo', pass: 'demo' });
    localStorage.removeItem('sunplex_tv_code');
    localStorage.removeItem('sunplex_tv_verified');

    document.getElementById("tvCodeStepTv")?.classList.add("hidden");
    document.getElementById("tvCodeStepPhone")?.classList.add("hidden");
    document.getElementById("tvCodeStepSuccess")?.classList.remove("hidden");

    setTimeout(() => {
      closeTvCodeModal();
      showToast("Phone Linked! You're signed in.");
    }, 1200);
  } catch (e) {
    // ignore malformed storage state
  }
}

function submitPhoneCode(event) {
  event.preventDefault();
  const input = document.getElementById("phoneCodeInput");
  const enteredRaw = (input?.value || "").trim().toUpperCase();
  const errorEl = document.getElementById("phoneCodeError");

  try {
    const pending = JSON.parse(localStorage.getItem('sunplex_tv_code') || "null");
    if (!pending || Date.now() > pending.expiresAt) {
      if (errorEl) errorEl.textContent = "This code has expired. Check the TV screen for a new one.";
      return;
    }
    if (enteredRaw !== pending.code) {
      if (errorEl) errorEl.textContent = "That code doesn't match. Please try again.";
      return;
    }
    if (errorEl) errorEl.textContent = "";
    localStorage.setItem('sunplex_tv_verified', JSON.stringify({ code: pending.code, at: Date.now() }));
    checkTvCodeVerified();
  } catch (e) {
    if (errorEl) errorEl.textContent = "Something went wrong. Please try again.";
  }
}

/* ==========================================================================
   FEATURE 6: Parental Control Lock PIN Modal (18+ Content Safety)
   ========================================================================== */
let pendingStreamUrl = "";
let pendingStreamTitle = "";

function verifyAndPlay(url, title, rating) {
  if (rating === '18+') {
    pendingStreamUrl = url;
    pendingStreamTitle = title;
    openParentalPinModal();
  } else {
    playStream(url, title);
  }
}

function openParentalPinModal() {
  const modal = document.getElementById("parentalPinModal");
  const input = document.getElementById("parentalPinInput");
  const err = document.getElementById("parentalPinErr");
  if (input) input.value = "";
  if (err) err.style.display = "none";
  if (modal) modal.classList.add("active");
}

function closeParentalPinModal() {
  const modal = document.getElementById("parentalPinModal");
  if (modal) modal.classList.remove("active");
}

function verifyParentalPin() {
  const input = document.getElementById("parentalPinInput")?.value;
  const err = document.getElementById("parentalPinErr");

  // Default master PIN is 0000
  if (input === '0000') {
    closeParentalPinModal();
    playStream(pendingStreamUrl || DEFAULT_STREAM_URL, pendingStreamTitle || "18+ Unlocked Content");
  } else {
    if (err) err.style.display = "block";
  }
}

/* ==========================================================================
   FEATURE 7: Picture-in-Picture (PIP) Floating Video Player
   ========================================================================== */
async function togglePictureInPicture() {
  const video = document.getElementById("activeVideoElement");
  if (!video) return;

  try {
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else if (document.pictureInPictureEnabled) {
      await video.requestPictureInPicture();
    } else {
      showToast("PIP is not supported on this browser");
    }
  } catch (error) {
    console.error("Picture-in-Picture failed:", error);
    showToast("Unable to enter Picture-in-Picture mode");
  }
}

/* ==========================================================================
   Toast Notification Utility
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById("sunplexToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "sunplexToast";
    toast.style.cssText = `
      position: fixed;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(20,20,20,0.95);
      color: #fff;
      padding: 12px 24px;
      border-radius: 30px;
      font-size: 13px;
      font-weight: 600;
      box-shadow: 0 10px 30px rgba(0,0,0,0.8);
      border: 1px solid rgba(229,9,20,0.5);
      z-index: 999999;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 8px;
    `;
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="ri-information-fill" style="color:var(--brand-red); font-size:16px;"></i> ${message}`;
  toast.style.opacity = "1";
  toast.style.visibility = "visible";

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.visibility = "hidden";
  }, 3000);
}

/* ==========================================================================
   DYNAMIC HERO BANNER SLIDER ENGINE (Latest Movies 4K Carousel)
   ========================================================================== */
const HERO_SLIDER_MOVIES = [
  {
    id: 2026,
    title: "The Odyssey",
    badge: "Hall Print",
    printType: "Hall Print",
    year: "2026",
    cast: "Matt Damon, Tom Holland, Anne Hathaway",
    imdb: "7.5",
    tmdb: "7.5",
    rtCritic: "93",
    rtAudience: "97",
    sunplexRating: "10.0",
    tags: "<span>Adventure</span> • <span>English Movies</span> • <span>Action</span>",
    backdrop: "https://image.tmdb.org/t/p/original/nVBzWBqHTB3XD0iqWiJLfKLo5fq.jpg",
    trailer: "https://www.youtube.com/embed/Way9Dexny3w?autoplay=1"
  },
  {
    id: 104,
    title: "SPIDER-MAN: BRAND NEW DAY",
    badge: "Dual Audio",
    printType: "1080p Dual Audio",
    tags: "<span>Slick</span> • <span>Exciting</span> • <span>Sci-Fi Adventure</span> • <span>Superhero</span>",
    backdrop: "https://image.tmdb.org/t/p/original/kVd3a9YeLGkoeR50jGEXM6EqseS.jpg",
    trailer: "https://www.youtube.com/embed/shW9i6k8cB0?autoplay=1"
  },
  {
    id: 101,
    title: "DUNE: PART TWO",
    badge: "1080p",
    printType: "1080p",
    tags: "<span>Sci-Fi</span> • <span>Epic</span> • <span>Action</span> • <span>Oscar Winner</span>",
    backdrop: "https://image.tmdb.org/t/p/original/eZ239CUp1d6OryZEBPnO2n87gMG.jpg",
    trailer: "https://www.youtube.com/embed/Way9Dexny3w?autoplay=1"
  },
  {
    id: 103,
    title: "DEADPOOL & WOLVERINE",
    badge: "Dual Audio",
    printType: "1080p Dual Audio",
    tags: "<span>Action</span> • <span>Comedy</span> • <span>Marvel</span> • <span>Blockbuster</span>",
    backdrop: "https://image.tmdb.org/t/p/original/by8z9Fe8y7p4jo2YlW2SZDnptyT.jpg",
    trailer: "https://www.youtube.com/embed/73_1biulkYk?autoplay=1"
  },
  {
    id: 102,
    title: "OPPENHEIMER",
    badge: "1080p",
    printType: "1080p",
    tags: "<span>Historical</span> • <span>Drama</span> • <span>Masterpiece</span>",
    backdrop: "https://image.tmdb.org/t/p/original/neeNHeXjMF5fXoCJRsOmkNGC7q.jpg",
    trailer: "https://www.youtube.com/embed/uYPbbksJxIg?autoplay=1"
  },
  {
    id: 201,
    title: "AVATAR: THE WAY OF WATER",
    badge: "Dual Audio",
    printType: "Dual Audio",
    tags: "<span>Sci-Fi</span> • <span>Adventure</span> • <span>Visual Spectacle</span>",
    backdrop: "https://image.tmdb.org/t/p/original/nVBzWBqHTB3XD0iqWiJLfKLo5fq.jpg",
    trailer: "https://www.youtube.com/embed/d9MyW72ELq0?autoplay=1"
  }
];

let currentHeroIndex = 0;
let heroAutoSlideInterval = null;

// Smooth crossfade + content fade/slide used by all hero sliders (home/movies/series)
function smoothHeroTransition(backdropEl, contentEl, applyChanges) {
  if (!backdropEl) {
    applyChanges();
    return;
  }
  backdropEl.classList.add("hero-transitioning");
  if (contentEl) contentEl.classList.add("hero-transitioning");

  setTimeout(() => {
    applyChanges();
    requestAnimationFrame(() => {
      backdropEl.classList.remove("hero-transitioning");
      if (contentEl) contentEl.classList.remove("hero-transitioning");
    });
  }, 260);
}

/* ==========================================================================
   MOUSE & TOUCH SWIPE CONTROLLER FOR HERO SLIDERS & CAROUSELS
   ========================================================================== */

// Enable Mouse & Touch/Finger Swipe on Hero Slider Banners
function enableHeroSwipe(containerId, onNext, onPrev) {
  const container = document.getElementById(containerId);
  if (!container || container._hasSwipeListener) return;
  container._hasSwipeListener = true;

  let startX = 0;
  let startY = 0;
  let startTime = 0;
  let isDown = false;
  let hasMoved = false;

  const contentEl = container.querySelector(".hero-content");

  // Mouse drag events
  container.addEventListener("mousedown", (e) => {
    // Avoid triggering drag if user clicked an interactive control
    if (e.target.closest("button, input, select, a, .hero-dot, .hero-btn")) return;
    isDown = true;
    hasMoved = false;
    startX = e.pageX;
    startY = e.pageY;
    startTime = Date.now();
    container.classList.add("is-dragging");
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    const diffX = e.pageX - startX;
    const diffY = e.pageY - startY;
    if (Math.abs(diffX) > 8) {
      hasMoved = true;
      if (contentEl && Math.abs(diffX) > Math.abs(diffY)) {
        contentEl.style.transform = `translateX(${diffX * 0.25}px)`;
        contentEl.style.transition = 'none';
      }
    }
  });

  window.addEventListener("mouseup", (e) => {
    if (!isDown) return;
    isDown = false;
    container.classList.remove("is-dragging");

    if (contentEl) {
      contentEl.style.transform = '';
      contentEl.style.transition = '';
    }

    const diffX = e.pageX - startX;
    const diffY = e.pageY - startY;
    const elapsed = Date.now() - startTime;

    // Swipe sensitivity threshold: 35px drag or quick flick
    if ((Math.abs(diffX) > 35 || (Math.abs(diffX) > 20 && elapsed < 280)) && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) {
        onNext(); // Swiped left -> Next slide
      } else {
        onPrev(); // Swiped right -> Previous slide
      }
    }
  });

  // Touch / Finger swipe events for touchscreens / tablets / phones
  let touchStartX = 0;
  let touchStartY = 0;
  let touchStartTime = 0;
  let isTouching = false;
  let touchMoved = false;

  container.addEventListener("touchstart", (e) => {
    if (e.target.closest("button, input, select, a, .hero-dot, .hero-btn")) return;
    if (!e.touches || !e.touches.length) return;
    const touch = e.touches[0];
    touchStartX = touch.pageX;
    touchStartY = touch.pageY;
    touchStartTime = Date.now();
    isTouching = true;
    touchMoved = false;
  }, { passive: true });

  container.addEventListener("touchmove", (e) => {
    if (!isTouching || !e.touches || !e.touches.length) return;
    const touch = e.touches[0];
    const diffX = touch.pageX - touchStartX;
    const diffY = touch.pageY - touchStartY;

    if (Math.abs(diffX) > 8 && Math.abs(diffX) > Math.abs(diffY)) {
      touchMoved = true;
      if (contentEl) {
        contentEl.style.transform = `translateX(${diffX * 0.3}px)`;
        contentEl.style.transition = 'none';
      }
    }
  }, { passive: true });

  const finishTouchSwipe = (e) => {
    if (!isTouching) return;
    isTouching = false;

    if (contentEl) {
      contentEl.style.transform = '';
      contentEl.style.transition = '';
    }

    const touch = (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0] : null;
    if (!touch) return;

    const diffX = touch.pageX - touchStartX;
    const diffY = touch.pageY - touchStartY;
    const elapsed = Date.now() - touchStartTime;

    // Fast flick or > 30px swipe threshold
    if ((Math.abs(diffX) > 30 || (Math.abs(diffX) > 18 && elapsed < 300)) && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) {
        onNext(); // Finger swiped left -> Next slide
      } else {
        onPrev(); // Finger swiped right -> Previous slide
      }
    }
  };

  container.addEventListener("touchend", finishTouchSwipe, { passive: true });
  container.addEventListener("touchcancel", finishTouchSwipe, { passive: true });
}

// Carousel Row Navigation Helper (Preserved for compatibility)
function scrollCarouselRow(target, direction) {
  const carousel = target instanceof HTMLElement 
    ? (target.classList.contains("top-10-carousel") ? target : target.closest(".content-section, .carousel-wrapper")?.querySelector(".top-10-carousel"))
    : document.querySelector(".top-10-carousel");
  if (!carousel) return;
  const scrollAmount = Math.max(340, Math.floor(carousel.clientWidth * 0.75));
  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}

// Remove Prev & Next Buttons and clean up Carousel Wrapper (Arrows removed as requested)
function attachCarouselArrows(carouselEl) {
  if (!carouselEl) return;
  // If carousel was wrapped in carousel-wrapper, unwrap it and clean up any buttons
  const wrapper = carouselEl.parentElement;
  if (wrapper && wrapper.classList.contains("carousel-wrapper")) {
    wrapper.querySelectorAll(".carousel-nav-btn").forEach(btn => btn.remove());
    wrapper.parentNode.insertBefore(carouselEl, wrapper);
    wrapper.remove();
  }
  // Remove any remaining nav buttons inside or around this carousel
  carouselEl.querySelectorAll(".carousel-nav-btn").forEach(btn => btn.remove());
}

// Enable Mouse Wheel Horizontal Scrolling on Carousel without blocking page vertical scroll
function enableCarouselWheelScroll(carouselEl) {
  if (carouselEl._hasWheelListener) return;
  carouselEl._hasWheelListener = true;

  carouselEl.addEventListener("wheel", (e) => {
    // If Shift key is pressed, scroll carousel horizontally with wheel
    if (e.shiftKey && e.deltaY !== 0) {
      e.preventDefault();
      carouselEl.scrollLeft += e.deltaY * 1.2;
    }
  }, { passive: false });
}

// Enable Mouse Drag & Touch/Finger Swipe on any Horizontal Carousel
function enableCarouselMouseDrag(carouselEl) {
  if (!carouselEl) return;

  // Clean up any existing arrow buttons and unwrap if needed
  attachCarouselArrows(carouselEl);
  enableCarouselWheelScroll(carouselEl);

  if (carouselEl._hasDragListener) return;
  carouselEl._hasDragListener = true;

  let isDown = false;
  let startX = 0;
  let scrollStart = 0;
  let hasDragged = false;
  let dragEndTime = 0;
  let lastX = 0;
  let lastTime = 0;
  let velocity = 0;

  // Prevent browser native image ghost dragging
  carouselEl.addEventListener("dragstart", (e) => e.preventDefault());

  // Mouse Drag to Scroll
  const onMouseMove = (e) => {
    if (!isDown) return;
    const currentX = e.pageX;
    const walk = currentX - startX;

    // 5px threshold to differentiate between an intentional click and drag
    if (Math.abs(walk) > 5) {
      if (!hasDragged) {
        hasDragged = true;
        carouselEl.classList.add("is-dragging");
      }
      carouselEl.scrollLeft = scrollStart - walk;

      const now = Date.now();
      const dt = now - lastTime;
      if (dt > 0) {
        velocity = (currentX - lastX) / dt;
      }
      lastX = currentX;
      lastTime = now;
    }
  };

  const onMouseUp = () => {
    if (!isDown) return;
    isDown = false;
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);

    carouselEl.classList.remove("is-dragging");
    carouselEl.style.scrollBehavior = "";

    if (hasDragged) {
      dragEndTime = Date.now();
      // Smooth momentum glide if released while dragging fast
      if (Math.abs(velocity) > 0.25) {
        carouselEl.scrollBy({
          left: -velocity * 180,
          behavior: "smooth"
        });
      }
    }
  };

  carouselEl.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return; // Only primary/left mouse button
    isDown = true;
    hasDragged = false;
    startX = e.pageX;
    scrollStart = carouselEl.scrollLeft;
    lastX = e.pageX;
    lastTime = Date.now();
    velocity = 0;
    carouselEl.style.scrollBehavior = "auto";

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  });

  // Touch / Mobile Swipe Handling
  let touchStartX = 0;
  let touchStartY = 0;
  let touchHasDragged = false;

  carouselEl.addEventListener("touchstart", (e) => {
    if (!e.touches || !e.touches.length) return;
    touchHasDragged = false;
    touchStartX = e.touches[0].pageX;
    touchStartY = e.touches[0].pageY;
  }, { passive: true });

  carouselEl.addEventListener("touchmove", (e) => {
    if (!e.touches || !e.touches.length) return;
    const dx = e.touches[0].pageX - touchStartX;
    if (Math.abs(dx) > 8) {
      touchHasDragged = true;
    }
  }, { passive: true });

  const onTouchEnd = () => {
    if (touchHasDragged) {
      dragEndTime = Date.now();
      touchHasDragged = false;
    }
  };

  carouselEl.addEventListener("touchend", onTouchEnd, { passive: true });
  carouselEl.addEventListener("touchcancel", onTouchEnd, { passive: true });

  // Suppress movie card click if user was dragging or swiping
  carouselEl.addEventListener("click", (e) => {
    if (hasDragged || (Date.now() - dragEndTime < 280)) {
      e.preventDefault();
      e.stopPropagation();
      hasDragged = false;
    }
  }, true);
}

// Enable Mouse Drag & Wheel Scroll on Live TV Categories Row
function initCategoriesRowScroll() {
  const row = document.getElementById("tvCategoriesRow");
  if (!row || row._hasCategoryDrag) return;
  row._hasCategoryDrag = true;

  let isDown = false;
  let startX = 0;
  let scrollStart = 0;
  let hasDragged = false;
  let dragEndTime = 0;
  let velocity = 0;
  let lastX = 0;
  let lastTime = 0;

  // Prevent browser ghost image/element drag
  row.addEventListener("dragstart", (e) => e.preventDefault());

  const onMouseMove = (e) => {
    if (!isDown) return;
    const currentX = e.pageX;
    const walk = currentX - startX;

    if (Math.abs(walk) > 4) {
      hasDragged = true;
      row.classList.add("is-dragging");
      row.scrollLeft = scrollStart - walk;

      const now = Date.now();
      const dt = now - lastTime;
      if (dt > 0) {
        velocity = (currentX - lastX) / dt;
      }
      lastX = currentX;
      lastTime = now;
    }
  };

  const onMouseUp = () => {
    if (!isDown) return;
    isDown = false;
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);

    row.classList.remove("is-dragging");

    if (hasDragged) {
      dragEndTime = Date.now();
      if (Math.abs(velocity) > 0.2) {
        row.scrollBy({
          left: -velocity * 160,
          behavior: "smooth"
        });
      }
    }
  };

  row.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return; // Only primary mouse button
    isDown = true;
    hasDragged = false;
    startX = e.pageX;
    scrollStart = row.scrollLeft;
    lastX = e.pageX;
    lastTime = Date.now();
    velocity = 0;

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  });

  // Mouse Wheel horizontal scroll directly over categories
  row.addEventListener("wheel", (e) => {
    if (e.deltaY !== 0 || e.deltaX !== 0) {
      e.preventDefault();
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      row.scrollLeft += delta * 0.95;
    }
  }, { passive: false });

  // Suppress category button click if user was dragging or swiping
  row.addEventListener("click", (e) => {
    if (hasDragged || (Date.now() - dragEndTime < 260)) {
      e.preventDefault();
      e.stopPropagation();
      hasDragged = false;
    }
  }, true);
}

// Enable Mouse Drag & Wheel Scroll on Single Movie / Series Cast Avatars Row
function initCastRowScroll() {
  const row = document.getElementById("detailCastAvatars");
  if (!row || row._hasCastDrag) return;
  row._hasCastDrag = true;

  let isDown = false;
  let startX = 0;
  let scrollStart = 0;
  let hasDragged = false;
  let dragEndTime = 0;
  let velocity = 0;
  let lastX = 0;
  let lastTime = 0;

  row.addEventListener("dragstart", (e) => e.preventDefault());

  const onMouseMove = (e) => {
    if (!isDown) return;
    const currentX = e.pageX;
    const walk = currentX - startX;

    if (Math.abs(walk) > 3) {
      hasDragged = true;
      row.classList.add("is-dragging");
      row.scrollLeft = scrollStart - walk;

      const now = Date.now();
      const dt = now - lastTime;
      if (dt > 0) {
        velocity = (currentX - lastX) / dt;
      }
      lastX = currentX;
      lastTime = now;
    }
  };

  const onMouseUp = () => {
    if (!isDown) return;
    isDown = false;
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);

    row.classList.remove("is-dragging");

    if (hasDragged) {
      dragEndTime = Date.now();
      if (Math.abs(velocity) > 0.15) {
        row.scrollBy({
          left: -velocity * 180,
          behavior: "smooth"
        });
      }
    }
  };

  row.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return;
    isDown = true;
    hasDragged = false;
    startX = e.pageX;
    scrollStart = row.scrollLeft;
    lastX = e.pageX;
    lastTime = Date.now();
    velocity = 0;

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  });

  // Do NOT intercept vertical mouse wheel (up/down) so page scrolls vertically without hindrance
  row.addEventListener("wheel", (e) => {
    // Only scroll cast horizontally if user performs explicit horizontal wheel/trackpad swipe
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      row.scrollLeft += e.deltaX * 0.95;
    }
  }, { passive: false });

  // Suppress avatar item click if user was dragging or swiping
  row.addEventListener("click", (e) => {
    if (hasDragged || (Date.now() - dragEndTime < 260)) {
      e.preventDefault();
      e.stopPropagation();
      hasDragged = false;
    }
  }, true);
}

// Attach Drag & Swipe to all Carousels, Categories Row, Cast Row, and Favorites Rail
function initAllCarouselsMouseDrag() {
  document.querySelectorAll(".carousel-nav-btn").forEach(btn => btn.remove());
  const carousels = document.querySelectorAll(".top-10-carousel");
  carousels.forEach(c => enableCarouselMouseDrag(c));
  initCategoriesRowScroll();
  initCastRowScroll();
  initFavoritesRailScroll();
}

// Screen / Tab View Finger Swiping (Swipe between Home, Movies, Series, Live TV, Downloads)
function initGlobalViewSwipe() {
  const mainView = document.querySelector(".main-view-area");
  if (!mainView || mainView._hasGlobalSwipe) return;
  mainView._hasGlobalSwipe = true;

  const viewsOrder = ['dashboardView', 'moviesView', 'seriesView', 'liveTvView', 'downloadsView'];
  let touchStartX = 0;
  let touchStartY = 0;
  let touchStartTime = 0;
  let isTouching = false;

  mainView.addEventListener("touchstart", (e) => {
    // Do not intercept if touch started inside carousel, hero banner, button, input, categories row, cast row, or modal
    if (e.target.closest("button, input, select, a, .top-10-carousel, .hero-banner, .carousel-wrapper, .modal-backdrop, .video-player-modal, .channel-card, .cat-pill, .tv-categories-row, .cast-avatars-row, .cast-avatar-item")) {
      isTouching = false;
      return;
    }
    if (!e.touches || !e.touches.length) return;
    touchStartX = e.touches[0].pageX;
    touchStartY = e.touches[0].pageY;
    touchStartTime = Date.now();
    isTouching = true;
  }, { passive: true });

  mainView.addEventListener("touchend", (e) => {
    if (!isTouching || !e.changedTouches || !e.changedTouches.length) return;
    isTouching = false;

    const touch = e.changedTouches[0];
    const diffX = touch.pageX - touchStartX;
    const diffY = touch.pageY - touchStartY;
    const elapsed = Date.now() - touchStartTime;

    // Minimum swipe threshold: 60px horizontal, distinctly horizontal, under 500ms
    if (Math.abs(diffX) > 60 && Math.abs(diffX) > Math.abs(diffY) * 1.4 && elapsed < 500) {
      const currentIdx = viewsOrder.indexOf(currentView);
      if (currentIdx !== -1) {
        if (diffX < 0 && currentIdx < viewsOrder.length - 1) {
          // Swiped left -> Next Tab
          switchView(viewsOrder[currentIdx + 1]);
        } else if (diffX > 0 && currentIdx > 0) {
          // Swiped right -> Previous Tab
          switchView(viewsOrder[currentIdx - 1]);
        }
      }
    }
  }, { passive: true });
}

// Smooth scroll to catalog and apply category/genre filter if requested
function scrollToCatalog(gridId, category) {
  if (category && category !== 'ALL') {
    if (gridId === 'moviesGrid') {
      const catSelect = document.getElementById("moviesCategoryFilter");
      if (catSelect) {
        catSelect.value = category;
        applyAdvancedFilters('movies');
      }
    } else if (gridId === 'seriesGrid') {
      const genreSelect = document.getElementById("seriesGenreFilter");
      if (genreSelect) {
        genreSelect.value = category;
        applyAdvancedFilters('series');
      }
    }
  }
  const el = document.getElementById(gridId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function initHeroSlider() {
  renderHeroSlide(0);
  startHeroAutoSlide();
  enableHeroSwipe("heroBanner", nextHeroSlide, prevHeroSlide);
}

function renderHeroSlide(index) {
  if (!HERO_SLIDER_MOVIES.length) return;
  if (index < 0) index = HERO_SLIDER_MOVIES.length - 1;
  if (index >= HERO_SLIDER_MOVIES.length) index = 0;
  currentHeroIndex = index;

  const item = HERO_SLIDER_MOVIES[currentHeroIndex];
  const backdropEl = document.getElementById("heroBackdrop");
  const badgeEl = document.getElementById("heroPrintBadge");
  const titleEl = document.getElementById("heroTitle");
  const tagsEl = document.getElementById("heroTags");
  const contentEl = (badgeEl || titleEl)?.closest(".hero-content");
  const dotsContainer = document.getElementById("heroSliderDots");

  smoothHeroTransition(backdropEl, contentEl, () => {
    if (backdropEl) {
      const fallbackBackdrops = [
        'https://image.tmdb.org/t/p/original/kVd3a9YeLGkoeR50jGEXM6EqseS.jpg',
        'https://image.tmdb.org/t/p/original/eZ239CUp1d6OryZEBPnO2n87gMG.jpg',
        'https://image.tmdb.org/t/p/original/by8z9Fe8y7p4jo2YlW2SZDnptyT.jpg',
        'https://image.tmdb.org/t/p/original/neeNHeXjMF5fXoCJRsOmkNGC7q.jpg',
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&q=80'
      ];

      const defaultFallback = fallbackBackdrops[currentHeroIndex % fallbackBackdrops.length];
      const targetUrl = (item.backdrop && !item.backdrop.includes("data:image")) ? item.backdrop : defaultFallback;

      backdropEl.style.backgroundImage = `url('${targetUrl}')`;
      backdropEl.style.opacity = '1';

      // Image Load Guard
      const testImg = new Image();
      testImg.src = targetUrl;
      testImg.onerror = () => {
        console.log("Hero backdrop URL failed, applying bulletproof backdrop:", defaultFallback);
        backdropEl.style.backgroundImage = `url('${defaultFallback}')`;
      };
    }

    if (badgeEl) badgeEl.innerText = item.badge;
    if (titleEl) titleEl.innerText = item.title;
    if (tagsEl) tagsEl.innerHTML = item.tags;

    // Update Hero Badges & 5 Rating Scores from data
    const heroPrintBadge = document.getElementById("heroPrintBadge");
    if (heroPrintBadge) {
      heroPrintBadge.innerText = item.printType || (item.id % 2 === 0 ? '1080p Dual Audio' : '1080p');
    }

    const heroYear = document.getElementById("heroYear");
    if (heroYear) heroYear.innerText = item.year || '2026';

    const heroStarring = document.getElementById("heroStarring");
    if (heroStarring) heroStarring.innerText = item.cast || 'Matt Damon, Tom Holland, Anne Hathaway';

    const heroImdb = document.getElementById("heroImdbScore");
    if (heroImdb) heroImdb.innerText = item.imdb || '7.5';

    const heroTmdb = document.getElementById("heroTmdbScore");
    if (heroTmdb) heroTmdb.innerText = item.tmdb || item.imdb || '7.5';

    const heroRtCritic = document.getElementById("heroRtCriticScore");
    if (heroRtCritic) heroRtCritic.innerText = item.rtCritic || '93';

    const heroRtAudience = document.getElementById("heroRtAudienceScore");
    if (heroRtAudience) heroRtAudience.innerText = item.rtAudience || '97';

    const heroSunplex = document.getElementById("heroSunplexScore");
    if (heroSunplex) heroSunplex.innerText = item.sunplexRating || '10.0';

    // Dynamic Apple TV+ style Ambient Glow adaptation
    const glowEl = document.getElementById("heroAmbientGlow");
    if (glowEl) {
      const hue = (currentHeroIndex * 68 + 32) % 360;
      glowEl.style.background = `radial-gradient(circle, hsla(${hue}, 88%, 56%, 0.35) 0%, hsla(${(hue + 60) % 360}, 80%, 48%, 0.22) 50%, transparent 75%)`;
    }
  });

  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    HERO_SLIDER_MOVIES.forEach((_, idx) => {
      const dot = document.createElement("div");
      dot.className = `hero-dot ${idx === currentHeroIndex ? 'active' : ''}`;
      dot.onclick = () => {
        renderHeroSlide(idx);
        resetHeroAutoSlide();
      };
      dotsContainer.appendChild(dot);
    });
  }
}

function nextHeroSlide() {
  renderHeroSlide(currentHeroIndex + 1);
  resetHeroAutoSlide();
}

function prevHeroSlide() {
  renderHeroSlide(currentHeroIndex - 1);
  resetHeroAutoSlide();
}

function startHeroAutoSlide() {
  stopHeroAutoSlide();
  heroAutoSlideInterval = setInterval(() => {
    renderHeroSlide(currentHeroIndex + 1);
  }, 5000);
}

function stopHeroAutoSlide() {
  if (heroAutoSlideInterval) {
    clearInterval(heroAutoSlideInterval);
    heroAutoSlideInterval = null;
  }
}

function resetHeroAutoSlide() {
  startHeroAutoSlide();
}

function playCurrentHeroMovie() {
  const item = HERO_SLIDER_MOVIES[currentHeroIndex];
  if (!item) return;
  const targetId = item.id || (MOVIES_DATA[0] && MOVIES_DATA[0].id);
  openFeaturedMovie(targetId);
  setTimeout(() => {
    triggerInlineDetailPlay();
  }, 120);
}

function playCurrentHeroTrailer() {
  const item = HERO_SLIDER_MOVIES[currentHeroIndex];
  if (item && item.trailer) {
    openTrailerModal(item.trailer);
  } else {
    showToast("Trailer not available for this title");
  }
}

function toggleMyListHeroCurrent() {
  const item = HERO_SLIDER_MOVIES[currentHeroIndex];
  if (item && item.id) {
    toggleMyListHero(item.id);
  }
}

/* ==========================================================================
   MOVIES PAGE HERO SLIDER ENGINE (Movies Only)
   ========================================================================== */
const MOVIES_SLIDER_ITEMS = [
  {
    id: 101,
    title: "DUNE: PART TWO",
    badge: "CINEMATIC MASTERPIECE 4K",
    tags: "<span>Sci-Fi</span> • <span>Epic</span> • <span>Action</span> • <span>Oscar Winner</span>",
    backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1600&q=80",
    trailer: "https://www.youtube.com/embed/Way9Dexny3w?autoplay=1"
  },
  {
    id: 102,
    title: "OPPENHEIMER",
    badge: "7 OSCAR WINNER",
    tags: "<span>Historical</span> • <span>Drama</span> • <span>Masterpiece</span>",
    backdrop: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1600&q=80",
    trailer: "https://www.youtube.com/embed/uYPbbksJxIg?autoplay=1"
  },
  {
    id: 104,
    title: "SPIDER-MAN: ACROSS THE SPIDER-VERSE",
    badge: "SUPERHERO BLOCKBUSTER",
    tags: "<span>Animation</span> • <span>Action</span> • <span>Multiverse</span>",
    backdrop: "https://images.unsplash.com/photo-1635863138275-d9b33299680b?w=1600&q=80",
    trailer: "https://www.youtube.com/embed/shW9i6k8cB0?autoplay=1"
  },
  {
    id: 301,
    title: "JAWAN",
    badge: "BOLLYWOOD RECORD BREAKER",
    tags: "<span>Hindi</span> • <span>Action</span> • <span>Thriller</span>",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1600&q=80",
    trailer: "https://www.youtube.com/embed/COv52Qyctws?autoplay=1"
  },
  {
    id: 202,
    title: "EXTRACTION 2",
    badge: "NON-STOP ACTION",
    tags: "<span>Hollywood</span> • <span>Action</span> • <span>Explosive</span>",
    backdrop: "https://images.unsplash.com/photo-1563089145-599997674d42?w=1600&q=80",
    trailer: "https://www.youtube.com/embed/Y274jZs5s7s?autoplay=1"
  }
];

let currentMoviesHeroIndex = 0;
let moviesHeroAutoSlideInterval = null;

function initMoviesHeroSlider() {
  renderMoviesHeroSlide(0);
  startMoviesHeroAutoSlide();
  enableHeroSwipe("moviesHeroBanner", nextMoviesHeroSlide, prevMoviesHeroSlide);
}

function renderMoviesHeroSlide(index) {
  if (!MOVIES_SLIDER_ITEMS.length) return;
  if (index < 0) index = MOVIES_SLIDER_ITEMS.length - 1;
  if (index >= MOVIES_SLIDER_ITEMS.length) index = 0;
  currentMoviesHeroIndex = index;

  const item = MOVIES_SLIDER_ITEMS[currentMoviesHeroIndex];
  const backdropEl = document.getElementById("moviesHeroBackdrop");
  const badgeEl = document.getElementById("moviesHeroBadge");
  const titleEl = document.getElementById("moviesHeroTitle");
  const tagsEl = document.getElementById("moviesHeroTags");
  const contentEl = badgeEl?.closest(".hero-content");
  const dotsContainer = document.getElementById("moviesHeroSliderDots");

  smoothHeroTransition(backdropEl, contentEl, () => {
    if (backdropEl) {
      const fallbackBackdrops = [
        'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1600&q=80',
        'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1600&q=80',
        'https://images.unsplash.com/photo-1635863138275-d9b33299680b?w=1600&q=80',
        'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1600&q=80',
        'https://images.unsplash.com/photo-1563089145-599997674d42?w=1600&q=80'
      ];

      const defaultFallback = fallbackBackdrops[currentMoviesHeroIndex % fallbackBackdrops.length];
      const targetUrl = (item.backdrop && !item.backdrop.includes("data:image")) ? item.backdrop : defaultFallback;

      backdropEl.style.backgroundImage = `url('${targetUrl}')`;
      backdropEl.style.opacity = '1';

      const testImg = new Image();
      testImg.src = targetUrl;
      testImg.onerror = () => {
        backdropEl.style.backgroundImage = `url('${defaultFallback}')`;
      };
    }

    if (badgeEl) badgeEl.innerText = item.badge;
    if (titleEl) titleEl.innerText = item.title;
    if (tagsEl) tagsEl.innerHTML = item.tags;
  });

  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    MOVIES_SLIDER_ITEMS.forEach((_, idx) => {
      const dot = document.createElement("div");
      dot.className = `hero-dot ${idx === currentMoviesHeroIndex ? 'active' : ''}`;
      dot.onclick = () => {
        renderMoviesHeroSlide(idx);
        resetMoviesHeroAutoSlide();
      };
      dotsContainer.appendChild(dot);
    });
  }
}

function nextMoviesHeroSlide() {
  renderMoviesHeroSlide(currentMoviesHeroIndex + 1);
  resetMoviesHeroAutoSlide();
}

function prevMoviesHeroSlide() {
  renderMoviesHeroSlide(currentMoviesHeroIndex - 1);
  resetMoviesHeroAutoSlide();
}

function startMoviesHeroAutoSlide() {
  stopMoviesHeroAutoSlide();
  moviesHeroAutoSlideInterval = setInterval(() => {
    renderMoviesHeroSlide(currentMoviesHeroIndex + 1);
  }, 5000);
}

function stopMoviesHeroAutoSlide() {
  if (moviesHeroAutoSlideInterval) {
    clearInterval(moviesHeroAutoSlideInterval);
    moviesHeroAutoSlideInterval = null;
  }
}

function resetMoviesHeroAutoSlide() {
  startMoviesHeroAutoSlide();
}

function playCurrentMoviesHeroMovie() {
  const item = MOVIES_SLIDER_ITEMS[currentMoviesHeroIndex];
  if (!item) return;
  const targetId = item.id || (MOVIES_DATA.find(m => m.type === 'MOVIE')?.id) || (MOVIES_DATA[0] && MOVIES_DATA[0].id);
  openFeaturedMovie(targetId);
  setTimeout(() => {
    triggerInlineDetailPlay();
  }, 120);
}

function playCurrentMoviesHeroTrailer() {
  const item = MOVIES_SLIDER_ITEMS[currentMoviesHeroIndex];
  if (item && item.trailer) {
    openTrailerModal(item.trailer);
  }
}

function toggleMyListMoviesHeroCurrent() {
  const item = MOVIES_SLIDER_ITEMS[currentMoviesHeroIndex];
  if (item && item.id) {
    toggleMyListHero(item.id);
  }
}

/* ==========================================================================
   SERIES PAGE HERO SLIDER ENGINE (Series Only)
   ========================================================================== */
const SERIES_SLIDER_ITEMS = [
  {
    id: 601,
    title: "BLACK MIRROR",
    badge: "NETFLIX ORIGINAL SERIES",
    tags: "<span>Mind-Bending</span> • <span>Dark</span> • <span>Sci-Fi Thriller</span> • <span>6 Seasons</span>",
    backdrop: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1600&q=80",
    trailer: "https://www.youtube.com/embed/shW9i6k8cB0?autoplay=1"
  },
  {
    id: 603,
    title: "BREAKING BAD",
    badge: "#1 RATED SHOW OF ALL TIME",
    tags: "<span>Crime</span> • <span>Drama</span> • <span>Masterpiece</span> • <span>5 Seasons</span>",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1600&q=80",
    trailer: "https://www.youtube.com/embed/HhesaQXLuRY?autoplay=1"
  },
  {
    id: 604,
    title: "MONEY HEIST (LA CASA DE PAPEL)",
    badge: "GLOBAL PHENOMENON",
    tags: "<span>Spanish</span> • <span>Heist</span> • <span>Action</span> • <span>5 Seasons</span>",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1600&q=80",
    trailer: "https://www.youtube.com/embed/_InqQJRqGW4?autoplay=1"
  },
  {
    id: 605,
    title: "DEMON SLAYER",
    badge: "TOP ANIME SERIES",
    tags: "<span>Anime</span> • <span>Action</span> • <span>Demons</span> • <span>3 Seasons</span>",
    backdrop: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1600&q=80",
    trailer: "https://www.youtube.com/embed/VQGCKyuzIM4?autoplay=1"
  },
  {
    id: 602,
    title: "STRANGER THINGS",
    badge: "NETFLIX TOP BLOCKBUSTER",
    tags: "<span>80s Nostalgia</span> • <span>Sci-Fi</span> • <span>Monsters</span> • <span>4 Seasons</span>",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&q=80",
    trailer: "https://www.youtube.com/embed/b9EkMc79ZSU?autoplay=1"
  }
];

let currentSeriesHeroIndex = 0;
let seriesHeroAutoSlideInterval = null;

function initSeriesHeroSlider() {
  renderSeriesHeroSlide(0);
  startSeriesHeroAutoSlide();
  enableHeroSwipe("seriesHeroBanner", nextSeriesHeroSlide, prevSeriesHeroSlide);
}

function renderSeriesHeroSlide(index) {
  if (!SERIES_SLIDER_ITEMS.length) return;
  if (index < 0) index = SERIES_SLIDER_ITEMS.length - 1;
  if (index >= SERIES_SLIDER_ITEMS.length) index = 0;
  currentSeriesHeroIndex = index;

  const item = SERIES_SLIDER_ITEMS[currentSeriesHeroIndex];
  const backdropEl = document.getElementById("seriesHeroBackdrop");
  const badgeEl = document.getElementById("seriesHeroBadge");
  const titleEl = document.getElementById("seriesHeroTitle");
  const tagsEl = document.getElementById("seriesHeroTags");
  const contentEl = badgeEl?.closest(".hero-content");
  const dotsContainer = document.getElementById("seriesHeroSliderDots");

  smoothHeroTransition(backdropEl, contentEl, () => {
    if (backdropEl) {
      const fallbackBackdrops = [
        'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1600&q=80',
        'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1600&q=80',
        'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1600&q=80',
        'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1600&q=80',
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&q=80'
      ];

      const defaultFallback = fallbackBackdrops[currentSeriesHeroIndex % fallbackBackdrops.length];
      const targetUrl = (item.backdrop && !item.backdrop.includes("data:image")) ? item.backdrop : defaultFallback;

      backdropEl.style.backgroundImage = `url('${targetUrl}')`;
      backdropEl.style.opacity = '1';

      const testImg = new Image();
      testImg.src = targetUrl;
      testImg.onerror = () => {
        backdropEl.style.backgroundImage = `url('${defaultFallback}')`;
      };
    }

    if (badgeEl) badgeEl.innerText = item.badge;
    if (titleEl) titleEl.innerText = item.title;
    if (tagsEl) tagsEl.innerHTML = item.tags;
  });

  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    SERIES_SLIDER_ITEMS.forEach((_, idx) => {
      const dot = document.createElement("div");
      dot.className = `hero-dot ${idx === currentSeriesHeroIndex ? 'active' : ''}`;
      dot.onclick = () => {
        renderSeriesHeroSlide(idx);
        resetSeriesHeroAutoSlide();
      };
      dotsContainer.appendChild(dot);
    });
  }
}

function nextSeriesHeroSlide() {
  renderSeriesHeroSlide(currentSeriesHeroIndex + 1);
  resetSeriesHeroAutoSlide();
}

function prevSeriesHeroSlide() {
  renderSeriesHeroSlide(currentSeriesHeroIndex - 1);
  resetSeriesHeroAutoSlide();
}

function startSeriesHeroAutoSlide() {
  stopSeriesHeroAutoSlide();
  seriesHeroAutoSlideInterval = setInterval(() => {
    renderSeriesHeroSlide(currentSeriesHeroIndex + 1);
  }, 5000);
}

function stopSeriesHeroAutoSlide() {
  if (seriesHeroAutoSlideInterval) {
    clearInterval(seriesHeroAutoSlideInterval);
    seriesHeroAutoSlideInterval = null;
  }
}

function resetSeriesHeroAutoSlide() {
  startSeriesHeroAutoSlide();
}

function playCurrentSeriesHeroMovie() {
  const item = SERIES_SLIDER_ITEMS[currentSeriesHeroIndex];
  if (!item) return;
  const targetId = item.id || (MOVIES_DATA.find(m => m.type === 'SERIES')?.id) || (MOVIES_DATA[0] && MOVIES_DATA[0].id);
  openFeaturedMovie(targetId);
  setTimeout(() => {
    triggerInlineDetailPlay();
  }, 120);
}

function playCurrentSeriesHeroTrailer() {
  const item = SERIES_SLIDER_ITEMS[currentSeriesHeroIndex];
  if (item && item.trailer) {
    openTrailerModal(item.trailer);
  }
}

function toggleMyListSeriesHeroCurrent() {
  const item = SERIES_SLIDER_ITEMS[currentSeriesHeroIndex];
  if (item && item.id) {
    toggleMyListHero(item.id);
  }
}

/* ==========================================================================
   PWA & Standalone App Mode Controller
   ========================================================================== */
let deferredInstallPrompt = null;

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch((err) => {
      console.log('SunPlex SW registration note:', err);
    });
  });
}

// Capture native PWA install prompt
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const pwaBtn = document.getElementById('pwaInstallBtn');
  if (pwaBtn) {
    pwaBtn.title = 'Install SunPlex as App';
    const icon = document.getElementById('pwaIcon');
    if (icon) icon.className = 'ri-download-cloud-2-line';
  }
});

// Detect if currently running in Standalone App window
function isRunningInAppMode() {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.matchMedia('(display-mode: window-controls-overlay)').matches ||
    window.navigator.standalone === true ||
    window.name === 'SunPlexAppWindow' ||
    Boolean(window.opener)
  );
}

// Adjust UI if already in dedicated App window
document.addEventListener('DOMContentLoaded', () => {
  if (isRunningInAppMode()) {
    document.body.classList.add('app-mode-active');
    const pwaBtn = document.getElementById('pwaInstallBtn');
    if (pwaBtn) {
      pwaBtn.style.display = 'none'; // Already running in app mode!
    }
  }
});

// App Mode / Install Click Handler
function handleAppModeClick() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('SunPlex PWA installed');
      }
      deferredInstallPrompt = null;
    });
    return;
  }

  // If in standard browser tab, launch dedicated borderless App window
  const width = Math.min(1440, Math.floor(window.screen.availWidth * 0.92));
  const height = Math.min(840, Math.floor(window.screen.availHeight * 0.92));
  const left = Math.max(0, Math.floor((window.screen.availWidth - width) / 2));
  const top = Math.max(0, Math.floor((window.screen.availHeight - height) / 2));

  const winFeatures = `width=${width},height=${height},left=${left},top=${top},menubar=no,toolbar=no,location=no,status=no,directories=no,scrollbars=yes,resizable=yes`;
  const appWin = window.open(window.location.href, 'SunPlexAppWindow', winFeatures);

  if (!appWin) {
    showToast('Please allow popups for SunPlex to open the App Mode window!');
  }
}


