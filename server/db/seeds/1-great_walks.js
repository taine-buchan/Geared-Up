export async function seed(knex) {
  await knex('great_walks').insert([
    {
      id: 1,
      name: 'Lake Waikaremoana',
      difficulty: 'Intermediate',
      elevation:
        'The highest point is Bald Knob at 1,161 meters (3,809 feet), located on Panekire Bluff.',
      duration: '3-4 days',
      distance: '46 km one way',
      location: 'Te Urewera, East North Island',
      description:
        'Lake Waikaremoana is a Great Walk that is more of a backcountry, off the beaten track experience. Be immersed into stunning natural wilderness and welcomed into the homeland of Ngai Tūhoe.',
      seasonal: 'All year',
      track_image_url:
        'https://www.hawkesbaynz.com/assets/HBT-See-and-Do/Rivers-Lakes-Waterfalls/HBT-SeeDo-Recreations-RiversLakesWaterfalls-LakeWaikaremoana-Banner-1600x650.jpg',
      doc_link:
        'https://www.doc.govt.nz/parks-and-recreation/places-to-go/east-coast/places/te-urewera/things-to-do/tracks/lake-waikaremoana-great-walk/',
      required_equipment: JSON.stringify(
        {
          backpack: true,
          waterproof_pack_liner: true,
          sleeping_bag: true,
          first_aid_kit: true,
          survival_kit: true,
          safety_equipment: true,
          torch_flashlight: true,
          rubbish_bag: true,
          booking_confirmation_and_id: true,
          earplugs_for_bunkrooms: true,
          drink_bottle: true,
          eating_and_cooking_utensils: true,
          gas_cooker_and_fuel: true,
          matches_or_lighter: true,
          general_toiletries: true,
          backup_toilet_option: true,
          tent: true,
          sleeping_mat: true,
          ground_sheet: true,
          walking_clothes: true,
          hiking_boots: true,
          socks: true,
          shorts: true,
          shirt: true,
          under_layers: true,
          mid_layers: true,
          raincoat: true,
          overtrousers: true,
          warm_hat_and_gloves: true,
          sunhat_and_sunglasses: true,
          extra_socks_underwear_and_shirt: true,
          gaiters: true,
          lightweight_shoes_for_huts: true,
          carry_food: true,
          lightweight_food: true,
          emergency_food: true,
          food_storage: true,
          emergency_shelter: false,
          distress_beacon: false,
          cooking_facilities: false,
          sanitary_bins: false,
          gas_cooker: false,
          fire_starters: false,
          life_jacket: false,
          kayak_or_canoe: false,
          paddles: false,
          plastic_drums_or_equivalent: false,
          dry_bags: false,
          swimwear: false,
          sandals_or_aqua_shoes: false,
          portable_stove_and_fuel: false,
          candles: false,
          doc_confirmation_letter: false,
        },
        null,
        2,
      ),
    },
    {
      id: 2,
      name: 'Tongariro Northern Circuit',
      difficulty: 'Intermediate',
      elevation:
        'The highest point is near the Red Crater summit, reaching approximately 1,868 meters (6,129 feet). However, the track itself reaches a high point of 1,574 meters (5,164 feet). The highest hut on the circuit is at 1,360m (4,462 feet).',
      duration: '3-4 days',
      distance: '44.9 km loop',
      location: 'Tongariro National Park, Central North Island',
      description:
        'This World Heritage site is a landscape of stark contrasts. You’ll pass alpine vegetation, lush forest, tranquil lakes and desert-like plateaux, with amazing views at every turn. As the circuit winds past Mount Tongariro and Mount Ngāuruhoe, you will be dazzled by dramatic volcanic landscapes and New Zealand’s rich geological and ancestral past. The Tongariro Northern Circuit can be hiked in either direction. The track is well marked and signposted, but some sections may be steep, rough or muddy.',
      seasonal: '25 October 2024 - 30 April 2025',
      track_image_url:
        'https://tongarirocrossingshuttles.co.nz/wp-content/uploads/2017/06/Tongariro-Northern-Circuit-Birds-Eye-View-600x394.jpg.webp',
      doc_link:
        'https://www.doc.govt.nz/parks-and-recreation/places-to-go/central-north-island/places/tongariro-national-park/things-to-do/tracks/tongariro-northern-circuit/',
      required_equipment: JSON.stringify(
        {
          backpack: true,
          waterproof_pack_liner: true,
          sleeping_bag: true,
          first_aid_kit: true,
          survival_kit: true,
          safety_equipment: true,
          torch_flashlight: true,
          rubbish_bag: true,
          booking_confirmation_and_id: true,
          earplugs_for_bunkrooms: true,
          drink_bottle: true,
          eating_and_cooking_utensils: true,
          gas_cooker_and_fuel: true,
          matches_or_lighter: true,
          general_toiletries: true,
          backup_toilet_option: true,
          tent: true,
          sleeping_mat: true,
          ground_sheet: true,
          walking_clothes: true,
          hiking_boots: true,
          socks: true,
          shorts: true,
          shirt: true,
          under_layers: true,
          mid_layers: true,
          raincoat: true,
          overtrousers: true,
          warm_hat_and_gloves: true,
          sunhat_and_sunglasses: true,
          extra_socks_underwear_and_shirt: true,
          gaiters: true,
          lightweight_shoes_for_huts: true,
          carry_food: true,
          lightweight_food: true,
          emergency_food: true,
          food_storage: true,
          emergency_shelter: true,
          distress_beacon: true,
          cooking_facilities: true,
          sanitary_bins: true,
          gas_cooker: true,
          fire_starters: true,
          life_jacket: false,
          kayak_or_canoe: false,
          paddles: false,
          plastic_drums_or_equivalent: false,
          dry_bags: false,
          swimwear: false,
          sandals_or_aqua_shoes: false,
          portable_stove_and_fuel: false,
          candles: false,
          doc_confirmation_letter: false,
        },
        null,
        2,
      ),
    },

    {
      id: 3,
      name: 'Whanganui Journey',
      difficulty: 'Intermediate',
      elevation:
        "This is primarily a river journey by canoe or kayak, so elevation change is minimal and gradual along the river's course.",
      duration: '3-5 days',
      distance: '87 or 145 km one way',
      location: 'Whanganui National Park, south-west North Island',
      description:
        'Paddle through a landscape of towering cliffs and deep valleys on the magical Whanganui Journey. You’ll travel through calm waters and foaming rapids, on an unforgettable trip into the heart of the Whanganui National Park. Experience the beauty, history and culture of the mighty Whanganui River in the south-west of the North Island. Choose a 5-day journey from Taumarunui to Pipiriki (145 km), or a shorter, 3-day journey starting at Whakahoro (88 km), featuring the most spectacular stretches of the river.',
      seasonal: '1 October - 30 April',
      track_image_url:
        'https://www.landclimate.org/wp-content/uploads/2025/04/W-river-.jpeg',
      doc_link:
        'https://www.doc.govt.nz/globalassets/documents/parks-and-recreation/tracks-and-walks/wanganui/whanganui-journey-brochure.pdf',
      required_equipment: JSON.stringify(
        {
          backpack: true,
          waterproof_pack_liner: true,
          sleeping_bag: true,
          first_aid_kit: true,
          survival_kit: true,
          safety_equipment: true,
          torch_flashlight: true,
          rubbish_bag: true,
          booking_confirmation_and_id: true,
          earplugs_for_bunkrooms: true,
          drink_bottle: true,
          eating_and_cooking_utensils: true,
          gas_cooker_and_fuel: true,
          matches_or_lighter: true,
          general_toiletries: true,
          backup_toilet_option: true,
          tent: true,
          sleeping_mat: true,
          ground_sheet: true,
          walking_clothes: true,
          hiking_boots: true,
          socks: true,
          shorts: true,
          shirt: true,
          under_layers: true,
          mid_layers: true,
          raincoat: true,
          overtrousers: true,
          warm_hat_and_gloves: true,
          sunhat_and_sunglasses: true,
          extra_socks_underwear_and_shirt: true,
          gaiters: true,
          lightweight_shoes_for_huts: true,
          carry_food: true,
          lightweight_food: true,
          emergency_food: true,
          food_storage: true,
          emergency_shelter: true,
          distress_beacon: true,
          cooking_facilities: true,
          sanitary_bins: true,
          gas_cooker: true,
          fire_starters: true,
          life_jacket: true,
          kayak_or_canoe: true,
          paddles: true,
          plastic_drums_or_equivalent: true,
          dry_bags: true,
          swimwear: true,
          sandals_or_aqua_shoes: true,
          portable_stove_and_fuel: false,
          candles: false,
          doc_confirmation_letter: false,
        },
        null,
        2,
      ),
    },

    {
      id: 4,
      name: 'Abel Tasman Coast Track',
      difficulty: 'Easy',
      elevation:
        'This track is primarily coastal, with the highest point being relatively low, around 180 meters (590 feet) at its highest saddle.',
      duration: '3-5 days',
      distance: '60 km one way',
      location: 'Abel Tasman National Park, north-west South Island',
      description:
        "Discover the enchanting Cleopatra's Pool, a natural rock formation featuring a unique moss-lined water slide for a fun and refreshing experience. As you continue your exploration, you'll cross a striking 47-meter suspension bridge, offering picturesque views of the beautiful inlet where the Falls River meets the sea. Keep a watchful eye out for the playful fur seals, also known as kekeno, that frequent this area. All of this natural beauty is nestled within the crystal-clear waters of the protected Tonga Island Marine Reserve, promising a memorable encounter with nature. The track is well marked and signposted, but some sections may be steep and rough and the track could be muddy. Walk the whole track in either direction, take a water taxi or kayak between different locations.",
      seasonal: 'All year',
      track_image_url:
        'https://www.rankers.co.nz/system/experience_images/12316/original.jpeg?1364681927',
      doc_link:
        'https://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/abel-tasman-national-park/things-to-do/tracks/abel-tasman-coast-track/',
      required_equipment: JSON.stringify(
        {
          backpack: true,
          waterproof_pack_liner: true,
          sleeping_bag: true,
          first_aid_kit: true,
          survival_kit: true,
          safety_equipment: true,
          torch_flashlight: true,
          rubbish_bag: true,
          booking_confirmation_and_id: true,
          earplugs_for_bunkrooms: true,
          drink_bottle: true,
          eating_and_cooking_utensils: true,
          gas_cooker_and_fuel: true,
          matches_or_lighter: true,
          general_toiletries: true,
          backup_toilet_option: true,
          tent: true,
          sleeping_mat: true,
          ground_sheet: true,
          walking_clothes: true,
          hiking_boots: true,
          socks: true,
          shorts: true,
          shirt: true,
          under_layers: true,
          mid_layers: true,
          raincoat: true,
          overtrousers: true,
          warm_hat_and_gloves: true,
          sunhat_and_sunglasses: true,
          extra_socks_underwear_and_shirt: true,
          gaiters: true,
          lightweight_shoes_for_huts: true,
          carry_food: true,
          lightweight_food: true,
          emergency_food: true,
          food_storage: true,
          emergency_shelter: false,
          distress_beacon: false,
          cooking_facilities: false,
          sanitary_bins: false,
          gas_cooker: false,
          fire_starters: false,
          life_jacket: false,
          kayak_or_canoe: false,
          paddles: false,
          plastic_drums_or_equivalent: false,
          dry_bags: false,
          swimwear: false,
          sandals_or_aqua_shoes: false,
          portable_stove_and_fuel: false,
          candles: false,
          doc_confirmation_letter: false,
        },
        null,
        2,
      ),
    },

    {
      id: 5,
      name: 'Heaphy Track',
      difficulty: 'Intermediate',
      elevation:
        'The track traverses a wide range of elevations, reaching a high point in the sub-alpine tussock grasslands, around 1,075 meters (3,527 feet).',
      duration: '4-6 days',
      distance: '78.4 km one way',
      location: 'Kahurangi National Park, north-west South Island',
      description:
        'If it’s varied and rugged landscapes you’re looking for, you’ll be spoilt for choice on the Heaphy Track. Retrace the steps of early Māori seeking pounamu (greenstone) and 19th century gold prospectors. You’ll pass through expansive tussock downs, lush forests and nīkau palms before reaching the roaring seas of the West Coast.',
      seasonal: 'All year',
      track_image_url:
        'https://holidayswithkids.com.au/wp-content/uploads/2018/10/7128_Honeycomb_Hill_Caves_Julian_Apse.jpg',
      doc_link:
        'https://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/kahurangi-national-park/things-to-do/tracks/heaphy-track/',
      required_equipment: JSON.stringify(
        {
          backpack: true,
          waterproof_pack_liner: true,
          sleeping_bag: true,
          first_aid_kit: true,
          survival_kit: true,
          safety_equipment: true,
          torch_flashlight: true,
          rubbish_bag: true,
          booking_confirmation_and_id: true,
          earplugs_for_bunkrooms: true,
          drink_bottle: true,
          eating_and_cooking_utensils: true,
          gas_cooker_and_fuel: true,
          matches_or_lighter: true,
          general_toiletries: true,
          backup_toilet_option: true,
          tent: true,
          sleeping_mat: true,
          ground_sheet: true,
          walking_clothes: true,
          hiking_boots: true,
          socks: true,
          shorts: true,
          shirt: true,
          under_layers: true,
          mid_layers: true,
          raincoat: true,
          overtrousers: true,
          warm_hat_and_gloves: true,
          sunhat_and_sunglasses: true,
          extra_socks_underwear_and_shirt: true,
          gaiters: true,
          lightweight_shoes_for_huts: true,
          carry_food: true,
          lightweight_food: true,
          emergency_food: true,
          food_storage: true,
          emergency_shelter: true,
          distress_beacon: true,
          cooking_facilities: true,
          sanitary_bins: true,
          gas_cooker: true,
          fire_starters: true,
          life_jacket: false,
          kayak_or_canoe: false,
          paddles: false,
          plastic_drums_or_equivalent: false,
          dry_bags: false,
          swimwear: false,
          sandals_or_aqua_shoes: false,
          portable_stove_and_fuel: true,
          candles: true,
          doc_confirmation_letter: false,
        },
        null,
        2,
      ),
    },

    {
      id: 6,
      name: 'Paparoa Track',
      difficulty: 'Intermediate',
      duration: '3-4 days',
      distance: '55.1 km one way',
      elevation:
        'This track reaches an elevation of approximately 1,120 meters (3,675 feet) as it traverses the Paparoa Ranges.',
      location: 'Paparoa Range, West Coast of the South Island',
      description:
        'Embark on an unforgettable journey through the spectacular Pororari River Gorge, where dramatic limestone cliffs rise above lush beech forests and glades of subtropical nīkau palms. As your adventure continues, find yourself captivated by incredible sunsets painting the Tasman Sea from the vantage point of the Moonlight Tops Hut. Follow the historic Croesus Track, retracing the steps of gold miners while soaking in the stunning panoramic views. Along your path to Pororari Hut, be sure to keep an eye out for the distinctive Lone Hand rock formation, a unique landmark in this breathtaking landscape.',
      seasonal: 'All year',
      track_image_url:
        'https://cyclejourneys.co.nz/wp-content/uploads/2019/05/rsz_punakaiki_incline_01-1500x430.jpg',
      doc_link:
        'https://www.doc.govt.nz/parks-and-recreation/places-to-go/west-coast/places/paparoa-national-park/things-to-do/tracks/paparoa-track/',
      required_equipment: JSON.stringify(
        {
          backpack: true,
          waterproof_pack_liner: true,
          sleeping_bag: true,
          first_aid_kit: true,
          survival_kit: true,
          safety_equipment: true,
          torch_flashlight: true,
          rubbish_bag: true,
          booking_confirmation_and_id: true,
          earplugs_for_bunkrooms: true,
          drink_bottle: true,
          eating_and_cooking_utensils: true,
          gas_cooker_and_fuel: true,
          matches_or_lighter: true,
          general_toiletries: true,
          backup_toilet_option: true,
          tent: true,
          sleeping_mat: true,
          ground_sheet: true,
          walking_clothes: true,
          hiking_boots: true,
          socks: true,
          shorts: true,
          shirt: true,
          under_layers: true,
          mid_layers: true,
          raincoat: true,
          overtrousers: true,
          warm_hat_and_gloves: true,
          sunhat_and_sunglasses: true,
          extra_socks_underwear_and_shirt: true,
          gaiters: true,
          lightweight_shoes_for_huts: true,
          carry_food: true,
          lightweight_food: true,
          emergency_food: true,
          food_storage: true,
          emergency_shelter: true,
          distress_beacon: true,
          cooking_facilities: true,
          sanitary_bins: true,
          gas_cooker: true,
          fire_starters: true,
          life_jacket: false,
          kayak_or_canoe: false,
          paddles: false,
          plastic_drums_or_equivalent: false,
          dry_bags: false,
          swimwear: false,
          sandals_or_aqua_shoes: false,
          portable_stove_and_fuel: false,
          candles: false,
          doc_confirmation_letter: false,
        },
        null,
        2,
      ),
    },

    {
      id: 7,
      name: 'Routeburn Track',
      difficulty: 'Intermediate',
      elevation:
        'The highest point of the track itself is Harris Saddle at 1,255 meters (4,117 feet). A side trip to Conical Hill reaches a height of 1,515 meters (4,970 feet).',
      duration: '2-4 days',
      distance: '33 km one way',
      location:
        'Mount Aspiring and Fiordland National Parks, south-west South Island',
      description:
        'The Routeburn Track is the ultimate alpine adventure, taking you through ice-carved valleys and below the majestic peaks of the Southern Alps/ Kā Tiritiri o te Moana. A short trip from bustling Queenstown, this Great Walk links Mount Aspiring and Fiordland National Parks in Te Wāhipounamu - South West New Zealand World Heritage Area. Weaving through meadows, reflective tarns and alpine gardens, you’ll be rewarded with spectacular vistas over vast mountain ranges and valleys. The Routeburn Track can be hiked in either direction. The track is well marked and signposted, but some sections are steep and rough and may be muddy and slippery. Poor weather conditions can make this walk challenging, even in the Great Walks season.',
      seasonal: '15 November 2024 - 30 April 2025',
      track_image_url:
        'https://www.earthtrekkers.com/wp-content/uploads/2023/07/Routeburn-Track-New-Zealand.jpg.optimal.jpg',
      doc_link:
        'https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/routeburn-track/',
      required_equipment: JSON.stringify(
        {
          backpack: true,
          waterproof_pack_liner: true,
          sleeping_bag: true,
          first_aid_kit: true,
          survival_kit: true,
          safety_equipment: true,
          torch_flashlight: true,
          rubbish_bag: true,
          booking_confirmation_and_id: true,
          earplugs_for_bunkrooms: true,
          drink_bottle: true,
          eating_and_cooking_utensils: true,
          gas_cooker_and_fuel: true,
          matches_or_lighter: true,
          general_toiletries: true,
          backup_toilet_option: true,
          tent: true,
          sleeping_mat: true,
          ground_sheet: true,
          walking_clothes: true,
          hiking_boots: true,
          socks: true,
          shorts: true,
          shirt: true,
          under_layers: true,
          mid_layers: true,
          raincoat: true,
          overtrousers: true,
          warm_hat_and_gloves: true,
          sunhat_and_sunglasses: true,
          extra_socks_underwear_and_shirt: true,
          gaiters: true,
          lightweight_shoes_for_huts: true,
          carry_food: true,
          lightweight_food: true,
          emergency_food: true,
          food_storage: true,
          emergency_shelter: true,
          distress_beacon: true,
          cooking_facilities: true,
          sanitary_bins: true,
          gas_cooker: true,
          fire_starters: true,
          life_jacket: false,
          kayak_or_canoe: false,
          paddles: false,
          plastic_drums_or_equivalent: false,
          dry_bags: false,
          swimwear: false,
          sandals_or_aqua_shoes: false,
          portable_stove_and_fuel: false,
          candles: false,
          doc_confirmation_letter: false,
        },
        null,
        2,
      ),
    },

    {
      id: 8,
      name: 'Kepler Track',
      difficulty: 'Intermediate',
      elevation:
        'The highest point is around the Luxmore Hut area, approximately 1,400 meters (4,593 feet).',
      duration: '3-4 days',
      distance: '60 km loop',
      location: 'Fiordland National Park, south-west South Island',
      description:
        'Set out on a wilderness adventure above the clouds, high in the mountains above Lakes Te Anau and Manapouri in Te Wāhipounamu - South West New Zealand World Heritage Area. The drama of these vast tussock-covered ridgelines and spectacular alpine vistas contrasts with the peaceful lakes and the beech forest of the Iris Burn valley.',
      seasonal: '29 October 2024 - 30 April 2025',
      track_image_url:
        'https://www.doc.govt.nz/thumbs/hero/globalassets/images/places/fiordland/kepler-track/kepler-1920.jpg',
      doc_link:
        'https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/kepler-track/',
      required_equipment: JSON.stringify(
        {
          backpack: true,
          waterproof_pack_liner: true,
          sleeping_bag: true,
          first_aid_kit: true,
          survival_kit: true,
          safety_equipment: true,
          torch_flashlight: true,
          rubbish_bag: true,
          booking_confirmation_and_id: true,
          earplugs_for_bunkrooms: true,
          drink_bottle: true,
          eating_and_cooking_utensils: true,
          gas_cooker_and_fuel: true,
          matches_or_lighter: true,
          general_toiletries: true,
          backup_toilet_option: true,
          tent: true,
          sleeping_mat: true,
          ground_sheet: true,
          walking_clothes: true,
          hiking_boots: true,
          socks: true,
          shorts: true,
          shirt: true,
          under_layers: true,
          mid_layers: true,
          raincoat: true,
          overtrousers: true,
          warm_hat_and_gloves: true,
          sunhat_and_sunglasses: true,
          extra_socks_underwear_and_shirt: true,
          gaiters: true,
          lightweight_shoes_for_huts: true,
          carry_food: true,
          lightweight_food: true,
          emergency_food: true,
          food_storage: true,
          emergency_shelter: true,
          distress_beacon: true,
          cooking_facilities: true,
          sanitary_bins: true,
          gas_cooker: true,
          fire_starters: true,
          life_jacket: false,
          kayak_or_canoe: false,
          paddles: false,
          plastic_drums_or_equivalent: false,
          dry_bags: false,
          swimwear: false,
          sandals_or_aqua_shoes: false,
          portable_stove_and_fuel: false,
          candles: false,
          doc_confirmation_letter: false,
        },
        null,
        2,
      ),
    },

    {
      id: 9,
      name: 'Milford Track',
      difficulty: 'Easy',
      elevation:
        'The highest point is Mackinnon Pass at 1,069 meters (3,507 feet).',
      duration: '4 days',
      distance: '53.5 km',
      location: 'Fiordland National Park, south-west South Island',
      description:
        'Experience the ‘finest walk in the world’ as you retrace the steps of early explorers on the world renowned Milford Track. Take a journey along valleys carved by glaciers, wander through ancient rainforests and admire cascading waterfalls. You’ll follow a historic route through Fiordland National Park, part of Te Wāhipounamu - South West New Zealand World Heritage Area, before reaching your final destination, the spectacular Milford Sound/Piopiotahi.',
      seasonal: '29 October 2024 - 30 April 2025, last departure 28 April 2025',
      track_image_url:
        'https://www.doc.govt.nz/thumbs/hero/globalassets/images/places/fiordland/milford-track/milford-hero-1920.jpg',
      doc_link:
        'https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/milford-track/',
      required_equipment: JSON.stringify(
        {
          backpack: true,
          waterproof_pack_liner: true,
          sleeping_bag: true,
          first_aid_kit: true,
          survival_kit: true,
          safety_equipment: true,
          torch_flashlight: true,
          rubbish_bag: true,
          booking_confirmation_and_id: true,
          earplugs_for_bunkrooms: true,
          drink_bottle: true,
          eating_and_cooking_utensils: true,
          gas_cooker_and_fuel: true,
          matches_or_lighter: true,
          general_toiletries: true,
          backup_toilet_option: true,
          tent: true,
          sleeping_mat: true,
          ground_sheet: true,
          walking_clothes: true,
          hiking_boots: true,
          socks: true,
          shorts: true,
          shirt: true,
          under_layers: true,
          mid_layers: true,
          raincoat: true,
          overtrousers: true,
          warm_hat_and_gloves: true,
          sunhat_and_sunglasses: true,
          extra_socks_underwear_and_shirt: true,
          gaiters: true,
          lightweight_shoes_for_huts: true,
          carry_food: true,
          lightweight_food: true,
          emergency_food: true,
          food_storage: true,
          emergency_shelter: false,
          distress_beacon: false,
          cooking_facilities: false,
          sanitary_bins: false,
          gas_cooker: false,
          fire_starters: false,
          life_jacket: false,
          kayak_or_canoe: false,
          paddles: false,
          plastic_drums_or_equivalent: false,
          dry_bags: false,
          swimwear: false,
          sandals_or_aqua_shoes: false,
          portable_stove_and_fuel: false,
          candles: false,
          doc_confirmation_letter: false,
        },
        null,
        2,
      ),
    },

    {
      id: 10,
      name: 'Tuatapere Hump Ridge Track',
      difficulty: 'Intermediate',
      elevation:
        'This newer Great Walk reaches a high point of around 1,000 meters (3,281 feet) near Okaka Lodge in the subalpine zone.',
      duration: '3 days',
      distance: '60 km loop',
      location: 'Southern Fiordland',
      description:
        'Experience stunning beach, forest and mountain views on the Tuatapere Hump Ridge Track.',
      seasonal: 'All year',
      track_image_url:
        'https://www.doc.govt.nz/thumbs/hero/contentassets/77cb77a14e4a41fa9a5e2f4d0d56634f/loop-track-lake-poteriteri-hero.jpg',
      doc_link:
        'https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/hump-ridge-track/',
      required_equipment: JSON.stringify(
        {
          backpack: true,
          waterproof_pack_liner: true,
          sleeping_bag: true,
          first_aid_kit: true,
          survival_kit: true,
          safety_equipment: true,
          torch_flashlight: true,
          rubbish_bag: true,
          booking_confirmation_and_id: true,
          earplugs_for_bunkrooms: true,
          drink_bottle: true,
          eating_and_cooking_utensils: true,
          gas_cooker_and_fuel: true,
          matches_or_lighter: true,
          general_toiletries: true,
          backup_toilet_option: true,
          tent: true,
          sleeping_mat: true,
          ground_sheet: true,
          walking_clothes: true,
          hiking_boots: true,
          socks: true,
          shorts: true,
          shirt: true,
          under_layers: true,
          mid_layers: true,
          raincoat: true,
          overtrousers: true,
          warm_hat_and_gloves: true,
          sunhat_and_sunglasses: true,
          extra_socks_underwear_and_shirt: true,
          gaiters: true,
          lightweight_shoes_for_huts: true,
          carry_food: true,
          lightweight_food: true,
          emergency_food: true,
          food_storage: true,
          emergency_shelter: false,
          distress_beacon: false,
          cooking_facilities: false,
          sanitary_bins: false,
          gas_cooker: false,
          fire_starters: false,
          life_jacket: false,
          kayak_or_canoe: false,
          paddles: false,
          plastic_drums_or_equivalent: false,
          dry_bags: false,
          swimwear: false,
          sandals_or_aqua_shoes: false,
          portable_stove_and_fuel: false,
          candles: false,
          doc_confirmation_letter: false,
        },
        null,
        2,
      ),
    },

    {
      id: 11,
      name: 'Rakiura Track',
      difficulty: 'Intermediate',
      elevation:
        'This track on Stewart Island is also at a lower elevation, with its highest point being around 295 meters (968 feet).',
      duration: '3 days',
      distance: '32.1 km loop',
      location: 'Stewart Island/Rakiura',
      description:
        "Escape on an island adventure, and exchange the hustle and bustle of the mainland for the tranquility of the Rakiura Track. Located in Rakiura National Park on Stewart Island/Rakiura, this is a leisurely hike suitable for anyone with a moderate level of fitness. Relax and unwind in the peaceful surroundings, with the bush, birds and beach at your side. At night, you'll enjoy world-class star-gazing. Stewart Island/Rakiura is the world's fifth International Dark Sky Sanctuary. If you're lucky, you might get to see the night sky glow red and green with the aurora australis/southern lights. During the winter months, the island’s weather is cool yet settled, making the Rakiura Track a great winter escape. This is a journey that links the past with the present - Stewart Island/Rakiura is steeped in history.",
      seasonal: 'All year',
      track_image_url:
        'https://terranovatours.net/wp-content/uploads/2020/10/tobias-keller-mtcook1920x500-unsplash.jpg',
      doc_link:
        'https://www.doc.govt.nz/parks-and-recreation/places-to-go/southland/places/stewart-island-rakiura/rakiura-national-park/things-to-do/rakiura-track/',
      required_equipment: JSON.stringify(
        {
          backpack: true,
          waterproof_pack_liner: true,
          sleeping_bag: true,
          first_aid_kit: true,
          survival_kit: true,
          safety_equipment: true,
          torch_flashlight: true,
          rubbish_bag: true,
          booking_confirmation_and_id: true,
          earplugs_for_bunkrooms: true,
          drink_bottle: true,
          eating_and_cooking_utensils: true,
          gas_cooker_and_fuel: true,
          matches_or_lighter: true,
          general_toiletries: true,
          backup_toilet_option: true,
          tent: true,
          sleeping_mat: true,
          ground_sheet: true,
          walking_clothes: true,
          hiking_boots: true,
          socks: true,
          shorts: true,
          shirt: true,
          under_layers: true,
          mid_layers: true,
          raincoat: true,
          overtrousers: true,
          warm_hat_and_gloves: true,
          sunhat_and_sunglasses: true,
          extra_socks_underwear_and_shirt: true,
          gaiters: true,
          lightweight_shoes_for_huts: true,
          carry_food: true,
          lightweight_food: true,
          emergency_food: true,
          food_storage: true,
          emergency_shelter: false,
          distress_beacon: false,
          cooking_facilities: false,
          sanitary_bins: false,
          gas_cooker: false,
          fire_starters: false,
          life_jacket: false,
          kayak_or_canoe: false,
          paddles: false,
          plastic_drums_or_equivalent: false,
          dry_bags: false,
          swimwear: false,
          sandals_or_aqua_shoes: false,
          portable_stove_and_fuel: false,
          candles: false,
          doc_confirmation_letter: true,
        },
        null,
        2,
      ),
    },
  ])
}
