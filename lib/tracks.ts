export type TrackEra = "classic" | "90s" | "2000s" | "modern";

export type Track = {
  id: string;
  title: string;
  artist: string;
  year?: number;
  filmOrAlbum?: string;
  language?: string;
  era?: TrackEra;
  moods?: string[];
  youtubeId: string;
  duration: number;
  artwork?: string;
};

const classicTracks: Track[] = [
  { id: "musafir-hoon-yaaron", title: "Musafir Hoon Yaaron", artist: "Kishore Kumar", year: 1972, filmOrAlbum: "Parichay", language: "Hindi", era: "classic", moods: ["wanderer", "road", "timeless"], youtubeId: "doE6-zY2_ac", duration: 292 },
  { id: "gaata-rahe-mera-dil", title: "Gaata Rahe Mera Dil", artist: "Kishore Kumar & Lata Mangeshkar", year: 1965, filmOrAlbum: "Guide", language: "Hindi", era: "classic", moods: ["scenic", "romantic", "timeless"], youtubeId: "LGjDtDvrcRc", duration: 292 },
  { id: "ruk-jaana-nahin", title: "Ruk Jaana Nahin Tu Kahin Haar Ke", artist: "Kishore Kumar", year: 1974, filmOrAlbum: "Imtihaan", language: "Hindi", era: "classic", moods: ["uplift", "road", "timeless"], youtubeId: "upTiUx7-YiE", duration: 391 },
  { id: "chura-liya-hai-tumne", title: "Chura Liya Hai Tumne Jo Dil Ko", artist: "Asha Bhosle & Mohammed Rafi", year: 1973, filmOrAlbum: "Yaadon Ki Baaraat", language: "Hindi", era: "classic", moods: ["romantic", "nostalgic"], youtubeId: "XuCp0r3vhPQ", duration: 298 },
  { id: "kya-hua-tera-wada", title: "Kya Hua Tera Wada", artist: "Mohammed Rafi & Sushma Shrestha", year: 1977, filmOrAlbum: "Hum Kisise Kum Naheen", language: "Hindi", era: "classic", moods: ["nostalgic", "emotional"], youtubeId: "W6dKaCV-mJQ", duration: 280 },
  { id: "pal-pal-dil-ke-paas", title: "Pal Pal Dil Ke Paas", artist: "Kishore Kumar", year: 1973, filmOrAlbum: "Blackmail", language: "Hindi", era: "classic", moods: ["romantic", "drive", "nostalgic"], youtubeId: "viKdF7sp_cY", duration: 300 },
  { id: "o-mere-dil-ke-chain", title: "O Mere Dil Ke Chain", artist: "Kishore Kumar", year: 1972, filmOrAlbum: "Mere Jeevan Saathi", language: "Hindi", era: "classic", moods: ["romantic", "smooth"], youtubeId: "5eyflIV8pzM", duration: 280 },
  { id: "dil-deewana", title: "Dil Deewana Bin Sajna Ke", artist: "S.P. Balasubrahmanyam", year: 1989, filmOrAlbum: "Maine Pyar Kiya", language: "Hindi", era: "classic", moods: ["romantic", "singalong"], youtubeId: "DUY9JhrHaZ4", duration: 330 },
  { id: "dil-dil-pakistan", title: "Dil Dil Pakistan", artist: "Vital Signs", year: 1989, filmOrAlbum: "Vital Signs", language: "Urdu", era: "classic", moods: ["anthem", "nostalgic", "homeland"], youtubeId: "rMlKSqgNHNU", duration: 265 },
  { id: "ajnabi", title: "Ajnabi", artist: "Vital Signs", year: 1989, filmOrAlbum: "Vital Signs", language: "Urdu", era: "classic", moods: ["road", "nostalgic", "warm"], youtubeId: "sTIsjVZqQ4o", duration: 260 },
];

const ninetiesTracks: Track[] = [
  { id: "pehla-nasha", title: "Pehla Nasha", artist: "Udit Narayan & Sadhana Sargam", year: 1992, filmOrAlbum: "Jo Jeeta Wohi Sikandar", language: "Hindi", era: "90s", moods: ["romantic", "scenic", "nostalgic"], youtubeId: "Ki41AKu0iHc", duration: 307 },
  { id: "tujhe-dekha-to", title: "Tujhe Dekha To Ye Jaana Sanam", artist: "Kumar Sanu & Lata Mangeshkar", year: 1995, filmOrAlbum: "Dilwale Dulhania Le Jayenge", language: "Hindi", era: "90s", moods: ["romantic", "singalong", "iconic"], youtubeId: "cNV5hLSa9H8", duration: 345 },
  { id: "ho-gaya-hai-tujhko", title: "Ho Gaya Hai Tujhko To Pyar Kya", artist: "Lata Mangeshkar & Udit Narayan", year: 1995, filmOrAlbum: "Dilwale Dulhania Le Jayenge", language: "Hindi", era: "90s", moods: ["romantic", "nostalgic"], youtubeId: "hw_HpTI_Wkw", duration: 337 },
  { id: "zara-sa-jhoom-loon-main", title: "Zara Sa Jhoom Loon Main", artist: "Abhijeet & Asha Bhosle", year: 1995, filmOrAlbum: "Dilwale Dulhania Le Jayenge", language: "Hindi", era: "90s", moods: ["playful", "energetic", "singalong"], youtubeId: "96YVQBjrtWE", duration: 274 },
  { id: "mehndi-laga-ke-rakhna", title: "Mehndi Laga Ke Rakhna", artist: "Udit Narayan & Lata Mangeshkar", year: 1995, filmOrAlbum: "Dilwale Dulhania Le Jayenge", language: "Hindi", era: "90s", moods: ["celebration", "singalong"], youtubeId: "-bNwqXvMuB8", duration: 420 },
  { id: "kuch-kuch-hota-hai", title: "Kuch Kuch Hota Hai", artist: "Udit Narayan & Alka Yagnik", year: 1998, filmOrAlbum: "Kuch Kuch Hota Hai", language: "Hindi", era: "90s", moods: ["romantic", "iconic", "nostalgic"], youtubeId: "bKZTnnFU9HA", duration: 309 },
  { id: "ladki-badi-anjani-hai", title: "Ladki Badi Anjani Hai", artist: "Kumar Sanu & Alka Yagnik", year: 1998, filmOrAlbum: "Kuch Kuch Hota Hai", language: "Hindi", era: "90s", moods: ["playful", "energetic"], youtubeId: "WlWlGlvN4L4", duration: 326 },
  { id: "bholi-si-surat", title: "Bholi Si Surat", artist: "Udit Narayan & Lata Mangeshkar", year: 1997, filmOrAlbum: "Dil To Pagal Hai", language: "Hindi", era: "90s", moods: ["romantic", "smooth", "drive"], youtubeId: "IsPOtygII-Q", duration: 253 },
  { id: "are-re-are", title: "Are Re Are", artist: "Udit Narayan & Lata Mangeshkar", year: 1997, filmOrAlbum: "Dil To Pagal Hai", language: "Hindi", era: "90s", moods: ["romantic", "easygoing"], youtubeId: "OEpFiDKqH7E", duration: 332 },
  { id: "dil-to-pagal-hai", title: "Dil To Pagal Hai", artist: "Udit Narayan & Lata Mangeshkar", year: 1997, filmOrAlbum: "Dil To Pagal Hai", language: "Hindi", era: "90s", moods: ["romantic", "uplift"], youtubeId: "lZ2PhyBF3GQ", duration: 300 },
  { id: "ek-duuje-ke-vaaste", title: "Ek Duje Ke Vaaste", artist: "Lata Mangeshkar & Hariharan", year: 1997, filmOrAlbum: "Dil To Pagal Hai", language: "Hindi", era: "90s", moods: ["romantic", "calm"], youtubeId: "uori-FN0pXs", duration: 330 },
  { id: "aankhon-se-tune-kya-keh-diya", title: "Aankhon Se Tune Kya Keh Diya", artist: "Kumar Sanu & Alka Yagnik", year: 1998, filmOrAlbum: "Ghulam", language: "Hindi", era: "90s", moods: ["romantic", "nostalgic"], youtubeId: "zGbMOXFIYko", duration: 330 },
  { id: "hoshwalon-ko-khabar-kya", title: "Hoshwalon Ko Khabar Kya", artist: "Jagjit Singh", year: 1999, filmOrAlbum: "Sarfarosh", language: "Hindi", era: "90s", moods: ["ghazal", "emotional", "night"], youtubeId: "hZuwe72Rtcc", duration: 307 },
  { id: "aankhon-ki-gustakhiyan", title: "Aankhon Ki Gustakhiyan Maaf Ho", artist: "Kumar Sanu & Kavita Krishnamurthy", year: 1999, filmOrAlbum: "Hum Dil De Chuke Sanam", language: "Hindi", era: "90s", moods: ["romantic", "emotional"], youtubeId: "7k5gM4ClRRo", duration: 299 },
  { id: "ek-ladki-ko-dekha", title: "Ek Ladki Ko Dekha", artist: "Kumar Sanu", year: 1994, filmOrAlbum: "1942 A Love Story", language: "Hindi", era: "90s", moods: ["romantic", "scenic", "gentle"], youtubeId: "fTauOK8J-U8", duration: 275 },
  { id: "mera-dil-bhi-kitna-pagal-hai", title: "Mera Dil Bhi Kitna Pagal Hai", artist: "Kumar Sanu & Alka Yagnik", year: 1991, filmOrAlbum: "Saajan", language: "Hindi", era: "90s", moods: ["romantic", "nostalgic"], youtubeId: "RVQsBlI35vw", duration: 370 },
  { id: "dheere-dheere-se", title: "Dheere Dheere Se Meri Zindagi Mein Aana", artist: "Kumar Sanu & Anuradha Paudwal", year: 1990, filmOrAlbum: "Aashiqui", language: "Hindi", era: "90s", moods: ["romantic", "nostalgic"], youtubeId: "pKsD2GiQhOo", duration: 327 },
  { id: "tu-cheez-badi-hai-mast-mast", title: "Tu Cheez Badi Hai Mast Mast", artist: "Udit Narayan & Kavita Krishnamurthy", year: 1994, filmOrAlbum: "Mohra", language: "Hindi", era: "90s", moods: ["energetic", "singalong", "fun"], youtubeId: "fT4vP4PnLxg", duration: 348 },
  { id: "tip-tip-barsa-paani", title: "Tip Tip Barsa Paani", artist: "Udit Narayan & Alka Yagnik", year: 1994, filmOrAlbum: "Mohra", language: "Hindi", era: "90s", moods: ["rain", "romantic", "energetic"], youtubeId: "BtlnpBb4O8E", duration: 365 },
  { id: "tum-mile-dil-khile", title: "Tum Mile Dil Khile", artist: "Kumar Sanu & Alka Yagnik", year: 1995, filmOrAlbum: "Criminal", language: "Hindi", era: "90s", moods: ["romantic", "atmospheric"], youtubeId: "2OtYy8TT_Ps", duration: 378 },
  { id: "ae-mere-humsafar", title: "Ae Mere Humsafar", artist: "Vinod Rathod & Alka Yagnik", year: 1993, filmOrAlbum: "Baazigar", language: "Hindi", era: "90s", moods: ["romantic", "nostalgic"], youtubeId: "UCsW7nea7sI", duration: 340 },
  { id: "ghar-se-nikalte-hi", title: "Ghar Se Nikalte Hi", artist: "Udit Narayan", year: 1996, filmOrAlbum: "Papa Kehte Hain", language: "Hindi", era: "90s", moods: ["road", "playful", "nostalgic"], youtubeId: "0NT-xmLX4tk", duration: 300 },
  { id: "do-dil-mil-rahe-hain", title: "Do Dil Mil Rahe Hain", artist: "Kumar Sanu", year: 1997, filmOrAlbum: "Pardes", language: "Hindi", era: "90s", moods: ["romantic", "celebration"], youtubeId: "gmJW33derRY", duration: 400 },
  { id: "meri-mehbooba", title: "Meri Mehbooba", artist: "Kumar Sanu & Alka Yagnik", year: 1997, filmOrAlbum: "Pardes", language: "Hindi", era: "90s", moods: ["romantic", "singalong"], youtubeId: "WkfcHsPKwds", duration: 390 },
  { id: "yeh-dil-deewana", title: "Yeh Dil Deewana", artist: "Sonu Nigam, Hema Sardesai & Shankar Mahadevan", year: 1997, filmOrAlbum: "Pardes", language: "Hindi", era: "90s", moods: ["energetic", "road", "singalong"], youtubeId: "d7MDzmchS50", duration: 421 },
  { id: "dil-se-re", title: "Dil Se Re", artist: "A.R. Rahman", year: 1998, filmOrAlbum: "Dil Se", language: "Hindi", era: "90s", moods: ["atmospheric", "emotional", "expansive"], youtubeId: "MYfaX0BH2AY", duration: 402 },
  { id: "ae-ajnabi", title: "Ae Ajnabi", artist: "Udit Narayan & Mahalaxmi Iyer", year: 1998, filmOrAlbum: "Dil Se", language: "Hindi", era: "90s", moods: ["emotional", "longing", "road"], youtubeId: "TdUu05Svkl8", duration: 340 },
  { id: "yeh-haseen-vadiyan", title: "Yeh Haseen Vadiyan", artist: "S.P. Balasubrahmanyam & K.S. Chithra", year: 1992, filmOrAlbum: "Roja", language: "Hindi", era: "90s", moods: ["scenic", "romantic", "expansive"], youtubeId: "5kZ5o-oM0RI", duration: 315 },
  { id: "didi-tera-devar-deewana", title: "Didi Tera Devar Deewana", artist: "Lata Mangeshkar & S.P. Balasubrahmanyam", year: 1994, filmOrAlbum: "Hum Aapke Hain Koun..!", language: "Hindi", era: "90s", moods: ["celebration", "singalong", "fun"], youtubeId: "tEKi6vnPApI", duration: 459 },
  { id: "chura-ke-dil-mera", title: "Chura Ke Dil Mera", artist: "Kumar Sanu & Alka Yagnik", year: 1994, filmOrAlbum: "Main Khiladi Tu Anari", language: "Hindi", era: "90s", moods: ["playful", "singalong", "energetic"], youtubeId: "Yqj1_V90KJo", duration: 320 },
  { id: "pardesi-pardesi", title: "Pardesi Pardesi Jana Nahi", artist: "Udit Narayan, Alka Yagnik & Sapna Awasthi", year: 1996, filmOrAlbum: "Raja Hindustani", language: "Hindi", era: "90s", moods: ["singalong", "emotional", "iconic"], youtubeId: "QKfGl39ZJWI", duration: 440 },
  { id: "kitna-pyara-tujhe", title: "Kitna Pyara Tujhe Rab Ne Banaya", artist: "Udit Narayan & Alka Yagnik", year: 1996, filmOrAlbum: "Raja Hindustani", language: "Hindi", era: "90s", moods: ["romantic", "singalong"], youtubeId: "KuysuMXViuE", duration: 382 },
  { id: "o-sanam", title: "O Sanam", artist: "Lucky Ali", year: 1996, filmOrAlbum: "Sunoh", language: "Hindi", era: "90s", moods: ["road", "nostalgic", "wistful"], youtubeId: "dWqb-WqbGh8", duration: 257 },
];

const twoThousandsTracks: Track[] = [
  { id: "dil-chahta-hai", title: "Dil Chahta Hai", artist: "Shankar Mahadevan", year: 2001, filmOrAlbum: "Dil Chahta Hai", language: "Hindi", era: "2000s", moods: ["road", "friendship", "energetic"], youtubeId: "mgF6SGtEr6g", duration: 320 },
  { id: "koi-kahe-kehta-rahe", title: "Koi Kahe Kehta Rahe", artist: "Shankar Mahadevan, Shaan & KK", year: 2001, filmOrAlbum: "Dil Chahta Hai", language: "Hindi", era: "2000s", moods: ["energetic", "friendship", "singalong"], youtubeId: "ctJI7pCbxAo", duration: 346 },
  { id: "kaho-naa-pyaar-hai", title: "Kaho Naa Pyaar Hai", artist: "Udit Narayan & Alka Yagnik", year: 2000, filmOrAlbum: "Kaho Naa Pyaar Hai", language: "Hindi", era: "2000s", moods: ["energetic", "romantic", "singalong"], youtubeId: "-LESbtPT8uw", duration: 361 },
  { id: "na-tum-jaano-na-hum", title: "Na Tum Jaano Na Hum", artist: "Lucky Ali & Ramya", year: 2000, filmOrAlbum: "Kaho Naa Pyaar Hai", language: "Hindi", era: "2000s", moods: ["romantic", "wistful", "drive"], youtubeId: "eSxo4l-epv8", duration: 383 },
  { id: "suraj-hua-maddham", title: "Suraj Hua Maddham", artist: "Sonu Nigam & Alka Yagnik", year: 2001, filmOrAlbum: "Kabhi Khushi Kabhie Gham", language: "Hindi", era: "2000s", moods: ["romantic", "expansive", "dusk"], youtubeId: "iqNS2Qe4pp0", duration: 428 },
  { id: "bole-chudiyan", title: "Bole Chudiyan", artist: "Alka Yagnik, Amit Kumar, Sonu Nigam, Udit Narayan & Kavita Krishnamurthy", year: 2001, filmOrAlbum: "Kabhi Khushi Kabhie Gham", language: "Hindi", era: "2000s", moods: ["celebration", "singalong", "energetic"], youtubeId: "IBvg3WeqP1U", duration: 410 },
  { id: "yeh-ladka-hai-allah", title: "Yeh Ladka Hai Allah", artist: "Udit Narayan & Alka Yagnik", year: 2001, filmOrAlbum: "Kabhi Khushi Kabhie Gham", language: "Hindi", era: "2000s", moods: ["playful", "energetic", "singalong"], youtubeId: "BE8_rNJOQ-0", duration: 350 },
  { id: "kal-ho-naa-ho", title: "Kal Ho Naa Ho", artist: "Sonu Nigam", year: 2003, filmOrAlbum: "Kal Ho Naa Ho", language: "Hindi", era: "2000s", moods: ["emotional", "bittersweet", "iconic"], youtubeId: "g0eO74UmRBs", duration: 288 },
  { id: "tum-se-hi", title: "Tum Se Hi", artist: "Mohit Chauhan", year: 2007, filmOrAlbum: "Jab We Met", language: "Hindi", era: "2000s", moods: ["romantic", "warm", "road"], youtubeId: "mt9xg0mmt28", duration: 321 },
  { id: "aaoge-jab-tum", title: "Aaoge Jab Tum", artist: "Ustad Rashid Khan", year: 2007, filmOrAlbum: "Jab We Met", language: "Hindi", era: "2000s", moods: ["romantic", "evening", "longing"], youtubeId: "3N_VMU-SnXo", duration: 355 },
  { id: "tere-naam", title: "Tere Naam Humne Kiya Hai", artist: "Udit Narayan", year: 2003, filmOrAlbum: "Tere Naam", language: "Hindi", era: "2000s", moods: ["emotional", "nostalgic"], youtubeId: "OMoU0Pfibc4", duration: 420 },
  { id: "tum-dil-ki-dhadkan-mein", title: "Tum Dil Ki Dhadkan Mein", artist: "Abhijeet & Alka Yagnik", year: 2000, filmOrAlbum: "Dhadkan", language: "Hindi", era: "2000s", moods: ["romantic", "nostalgic"], youtubeId: "XOj4ldIWbK8", duration: 340 },
  { id: "dil-ne-yeh-kaha-hai-dil-se", title: "Dil Ne Yeh Kaha Hai Dil Se", artist: "Udit Narayan, Alka Yagnik & Kumar Sanu", year: 2000, filmOrAlbum: "Dhadkan", language: "Hindi", era: "2000s", moods: ["romantic", "singalong"], youtubeId: "MvcNeQlqtes", duration: 347 },
  { id: "aankhon-mein-teri", title: "Aankhon Mein Teri Ajab Si", artist: "KK", year: 2007, filmOrAlbum: "Om Shanti Om", language: "Hindi", era: "2000s", moods: ["romantic", "dreamy"], youtubeId: "Ha4BUOcLQE4", duration: 241 },
  { id: "pehli-nazar-mein", title: "Pehli Nazar Mein", artist: "Atif Aslam", year: 2008, filmOrAlbum: "Race", language: "Hindi", era: "2000s", moods: ["romantic", "smooth", "drive"], youtubeId: "MofpuI_Vg_U", duration: 313 },
  { id: "tera-hone-laga-hoon", title: "Tera Hone Laga Hoon", artist: "Atif Aslam & Alisha Chinai", year: 2009, filmOrAlbum: "Ajab Prem Ki Ghazab Kahani", language: "Hindi", era: "2000s", moods: ["romantic", "gentle"], youtubeId: "QIQSQWvt4-M", duration: 296 },
  { id: "tanha-dil", title: "Tanha Dil", artist: "Shaan", year: 2000, filmOrAlbum: "Tanha Dil", language: "Hindi", era: "2000s", moods: ["road", "wistful", "nostalgic"], youtubeId: "64KSVbMDr0c", duration: 295 },
  { id: "pyaar-ke-pal", title: "Pyaar Ke Pal", artist: "KK", year: 1999, filmOrAlbum: "Pal", language: "Hindi", era: "2000s", moods: ["friendship", "emotional", "nostalgic"], youtubeId: "NUqlCJTYu6I", duration: 362 },
  { id: "yaaron", title: "Yaaron", artist: "KK", year: 1999, filmOrAlbum: "Pal", language: "Hindi", era: "2000s", moods: ["friendship", "nostalgic", "singalong"], youtubeId: "LCfvYo3ILG0", duration: 268 },
  { id: "maaeri", title: "Maaeri", artist: "Euphoria (Palash Sen)", year: 2000, filmOrAlbum: "Phir Dhoom", language: "Hindi", era: "2000s", moods: ["nostalgic", "warm", "singalong"], youtubeId: "MGMh7kYzNqo", duration: 332 },
  { id: "deewana-tera", title: "Deewana Tera", artist: "Sonu Nigam", year: 1999, filmOrAlbum: "Deewana", language: "Hindi", era: "2000s", moods: ["romantic", "nostalgic"], youtubeId: "J8zlroVMYeM", duration: 357 },
  { id: "piya-basanti-re", title: "Piya Basanti Re", artist: "Ustad Sultan Khan & K.S. Chithra", year: 2000, filmOrAlbum: "Piya Basanti", language: "Hindi", era: "2000s", moods: ["atmospheric", "evening", "romantic"], youtubeId: "XFT2niDEy28", duration: 276 },
];

const modernTracks: Track[] = [
  { id: "phir-se-ud-chala", title: "Phir Se Ud Chala", artist: "Mohit Chauhan", year: 2011, filmOrAlbum: "Rockstar", language: "Hindi", era: "modern", moods: ["road", "expansive", "mountains"], youtubeId: "2mWaqsC3U7k", duration: 213 },
  { id: "nadaan-parindey", title: "Nadaan Parindey", artist: "A.R. Rahman & Mohit Chauhan", year: 2011, filmOrAlbum: "Rockstar", language: "Hindi", era: "modern", moods: ["emotional", "longing", "cinematic"], youtubeId: "ttIKsnxPrMY", duration: 300 },
  { id: "kun-faya-kun", title: "Kun Faya Kun", artist: "A.R. Rahman, Javed Ali & Mohit Chauhan", year: 2011, filmOrAlbum: "Rockstar", language: "Hindi", era: "modern", moods: ["sufi", "expansive", "reflective"], youtubeId: "T94PHkuydcw", duration: 381 },
  { id: "safarnama", title: "Safarnama", artist: "Lucky Ali", year: 2015, filmOrAlbum: "Tamasha", language: "Hindi", era: "modern", moods: ["road", "reflective", "warm"], youtubeId: "sOhESxhibAM", duration: 251 },
  { id: "ilahi", title: "Ilahi", artist: "Arijit Singh", year: 2013, filmOrAlbum: "Yeh Jawaani Hai Deewani", language: "Hindi", era: "modern", moods: ["road", "uplift", "wanderer"], youtubeId: "fdubeMFwuGs", duration: 204 },
  { id: "kabira", title: "Kabira", artist: "Tochi Raina & Rekha Bhardwaj", year: 2013, filmOrAlbum: "Yeh Jawaani Hai Deewani", language: "Hindi", era: "modern", moods: ["reflective", "calm", "emotional"], youtubeId: "jHNNMj5bNQw", duration: 252 },
  { id: "heer", title: "Heer", artist: "Harshdeep Kaur", year: 2012, filmOrAlbum: "Jab Tak Hai Jaan", language: "Punjabi", era: "modern", moods: ["emotional", "soft", "scenic"], youtubeId: "aNcxgxHcGYg", duration: 313 },
  { id: "challa", title: "Challa", artist: "Rabbi Shergill", year: 2012, filmOrAlbum: "Jab Tak Hai Jaan", language: "Punjabi", era: "modern", moods: ["road", "wanderer", "sufi"], youtubeId: "9a4izd3Rvdw", duration: 320 },
  { id: "pani-da-rang", title: "Pani Da Rang", artist: "Ayushmann Khurrana", year: 2012, filmOrAlbum: "Vicky Donor", language: "Hindi", era: "modern", moods: ["rain", "wistful", "gentle"], youtubeId: "EiItLWWxgOI", duration: 240 },
  { id: "baari", title: "Baari", artist: "Bilal Saeed & Momina Mustehsan", year: 2019, filmOrAlbum: "Baari (single)", language: "Punjabi", era: "modern", moods: ["romantic", "smooth"], youtubeId: "h18s7zlYOyg", duration: 220 },
];

const pakistaniTracks: Track[] = [
  { id: "purani-jeans", title: "Purani Jeans", artist: "Ali Haider", year: 1993, filmOrAlbum: "Sandesa", language: "Urdu", era: "90s", moods: ["nostalgic", "friendship", "college"], youtubeId: "CksKn3u--FA", duration: 243 },
  { id: "us-rah-par", title: "Us Rah Par", artist: "Junaid Jamshed", year: 1999, filmOrAlbum: "Us Rah Par", language: "Urdu", era: "90s", moods: ["road", "hopeful", "nostalgic"], youtubeId: "9MG9_2LOxeE", duration: 261 },
  { id: "sayonee", title: "Sayonee", artist: "Junoon", year: 1997, filmOrAlbum: "Azadi", language: "Urdu", era: "90s", moods: ["sufi", "road", "iconic"], youtubeId: "-8anr6et3Lw", duration: 298 },
  { id: "jazba-e-junoon", title: "Jazba-e-Junoon", artist: "Junoon", year: 1996, filmOrAlbum: "Inquilaab", language: "Urdu", era: "90s", moods: ["anthem", "energetic", "uplift"], youtubeId: "31pd4FKPzdI", duration: 265 },
  { id: "bulleya", title: "Bulleya", artist: "Junoon", year: 1999, filmOrAlbum: "Parvaaz", language: "Punjabi", era: "90s", moods: ["sufi", "road", "energetic"], youtubeId: "rfkqcGGtK7Y", duration: 300 },
  { id: "sar-kiye-yeh-pahar", title: "Sar Kiye Yeh Pahar", artist: "Strings", year: 2000, filmOrAlbum: "Duur", language: "Urdu", era: "2000s", moods: ["mountains", "nostalgic", "iconic"], youtubeId: "yp_xs2vaxlM", duration: 273 },
  { id: "duur", title: "Duur", artist: "Strings", year: 2000, filmOrAlbum: "Duur", language: "Urdu", era: "2000s", moods: ["road", "expansive", "uplift"], youtubeId: "NgEQL8UOAG4", duration: 310 },
  { id: "dhaani", title: "Dhaani", artist: "Strings", year: 2003, filmOrAlbum: "Dhaani", language: "Urdu", era: "2000s", moods: ["warm", "easygoing", "scenic"], youtubeId: "n7F1U6lP2NY", duration: 252 },
  { id: "najanay-kyun", title: "Najanay Kyun", artist: "Strings", year: 2003, filmOrAlbum: "Dhaani", language: "Urdu", era: "2000s", moods: ["romantic", "gentle", "drive"], youtubeId: "rucMwBt66fM", duration: 245 },
  { id: "mera-bichra-yaar", title: "Mera Bichra Yaar", artist: "Strings", year: 2003, filmOrAlbum: "Dhaani", language: "Urdu", era: "2000s", moods: ["romantic", "singalong", "warm"], youtubeId: "DZIUT1n0abw", duration: 248 },
  { id: "chal-dil-mere", title: "Chal Dil Mere", artist: "Ali Zafar", year: 2003, filmOrAlbum: "Huqa Pani", language: "Urdu", era: "2000s", moods: ["road", "playful", "nostalgic"], youtubeId: "orHsHqDMm94", duration: 261 },
  { id: "channo", title: "Channo", artist: "Ali Zafar", year: 2003, filmOrAlbum: "Huqa Pani", language: "Punjabi", era: "2000s", moods: ["energetic", "fun", "singalong"], youtubeId: "BCV0shv9tx0", duration: 289 },
  { id: "jaan-e-baharaan", title: "Jaan-e-Bahaaraan", artist: "Ali Zafar", year: 2016, filmOrAlbum: "Coke Studio Season 10", language: "Urdu", era: "modern", moods: ["romantic", "warm", "spring"], youtubeId: "BTf68TSLGH4", duration: 384 },
  { id: "aadat", title: "Aadat", artist: "Atif Aslam", year: 2003, filmOrAlbum: "Kalyug (original single 2003)", language: "Urdu", era: "2000s", moods: ["nostalgic", "emotional", "iconic"], youtubeId: "QGNcfBhGFdc", duration: 336 },
  { id: "lamhey", title: "Lamhey", artist: "Jal", year: 2004, filmOrAlbum: "Aadat", language: "Urdu", era: "2000s", moods: ["road", "nostalgic", "energetic"], youtubeId: "vgFi6tNxFm0", duration: 325 },
  { id: "sajni", title: "Sajni", artist: "Jal", year: 2007, filmOrAlbum: "Boondh", language: "Urdu", era: "2000s", moods: ["rain", "emotional", "gentle"], youtubeId: "cdwm9Q7U02o", duration: 308 },
  { id: "tere-bin", title: "Tere Bin", artist: "Atif Aslam", year: 2006, filmOrAlbum: "Bas Ek Pal", language: "Urdu", era: "2000s", moods: ["romantic", "emotional", "atmospheric"], youtubeId: "k6NnNv7XJYg", duration: 320 },
  { id: "aankhon-ke-saagar", title: "Aankhon Ke Saagar", artist: "Fuzön (Shafqat Amanat Ali)", year: 2002, filmOrAlbum: "Saagar", language: "Urdu", era: "2000s", moods: ["romantic", "atmospheric", "evening"], youtubeId: "xaA85R0CveM", duration: 341 },
  { id: "khamaj", title: "Khamaj (Mora Saiyaan)", artist: "Shafqat Amanat Ali", year: 2009, filmOrAlbum: "Coke Studio Season 2", language: "Urdu", era: "2000s", moods: ["romantic", "evening", "classical"], youtubeId: "uMF8npZN5wE", duration: 430 },
  { id: "paimona", title: "Paimona Bittey Na Maloom", artist: "Zeb & Haniya", year: 2009, filmOrAlbum: "Coke Studio Season 2", language: "Dari", era: "2000s", moods: ["atmospheric", "mountains", "calm"], youtubeId: "7wIRNkE0uXY", duration: 300 },
  { id: "boohey-barian", title: "Boohey Barian", artist: "Hadiqa Kiani", year: 1999, filmOrAlbum: "Hadiqa Kiani (debut era)", language: "Punjabi", era: "90s", moods: ["scenic", "nostalgic", "ethereal"], youtubeId: "q2bIHdeMWp8", duration: 305 },
  { id: "bachana", title: "Bachana", artist: "Bilal Khan", year: 2010, filmOrAlbum: "Umeed", language: "Urdu", era: "modern", moods: ["romantic", "acoustic", "road"], youtubeId: "8YEE9VM-ltA", duration: 209 },
  { id: "tajdar-e-haram", title: "Tajdar-e-Haram", artist: "Atif Aslam", year: 2015, filmOrAlbum: "Coke Studio Season 8", language: "Urdu", era: "modern", moods: ["sufi", "cinematic", "emotional"], youtubeId: "a18py61_F_w", duration: 477 },
  { id: "afreen-afreen", title: "Afreen Afreen", artist: "Rahat Fateh Ali Khan & Momina Mustehsan", year: 2016, filmOrAlbum: "Coke Studio Season 9", language: "Urdu", era: "modern", moods: ["romantic", "iconic", "evening"], youtubeId: "kw4tT7SCmaY", duration: 405 },
  { id: "man-aamadeh-am", title: "Man Aamadeh Am", artist: "Atif Aslam & Gul Panra", year: 2015, filmOrAlbum: "Coke Studio Season 8", language: "Persian", era: "modern", moods: ["romantic", "warm", "duet"], youtubeId: "U_DSCLqgZCo", duration: 250 },
  { id: "paar-chanaa-de", title: "Paar Chanaa De", artist: "Shilpa Rao & Noori", year: 2016, filmOrAlbum: "Coke Studio Season 9", language: "Punjabi", era: "modern", moods: ["energetic", "folk", "river"], youtubeId: "TrPvQvbp3Cg", duration: 386 },
  { id: "tera-woh-pyar", title: "Tera Woh Pyar", artist: "Momina Mustehsan & Asim Azhar", year: 2016, filmOrAlbum: "Coke Studio Season 9", language: "Urdu", era: "modern", moods: ["romantic", "gentle", "nostalgic"], youtubeId: "8367ETnagHo", duration: 431 },
  { id: "tu-jhoom", title: "Tu Jhoom", artist: "Naseebo Lal & Abida Parveen", year: 2022, filmOrAlbum: "Coke Studio Season 14", language: "Urdu", era: "modern", moods: ["sufi", "uplift", "celebration"], youtubeId: "7D4vNcK6D38", duration: 400 },
  { id: "pasoori", title: "Pasoori", artist: "Ali Sethi & Shae Gill", year: 2022, filmOrAlbum: "Coke Studio Season 14", language: "Urdu", era: "modern", moods: ["energetic", "road", "modern-classic"], youtubeId: "5Eqb_-j3FDA", duration: 284 },
];

export const trackLibrary: Track[] = [
  ...classicTracks,
  ...ninetiesTracks,
  ...twoThousandsTracks,
  ...modernTracks,
  ...pakistaniTracks,
];

export const trackById: ReadonlyMap<string, Track> = new Map(trackLibrary.map((track) => [track.id, track]));

export function resolveTracks(ids: readonly string[]): Track[] {
  const resolved: Track[] = [];
  for (const id of ids) {
    const track = trackById.get(id);
    if (track) resolved.push(track);
    else if (process.env.NODE_ENV !== "production") console.warn(`[safar] Unknown track id in playlist: ${id}`);
  }
  return resolved;
}
