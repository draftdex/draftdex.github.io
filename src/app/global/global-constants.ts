/**
 * @description House global constants to be used throughout app (type list, abilities, etc.)
 */
export class GlobalConstants {
    public static typeList = [
        'Bug',
        'Dark',
        'Dragon',
        'Electric',
        'Fairy',
        'Fighting',
        'Fire',
        'Flying',
        'Ground',
        'Grass',
        'Ghost',
        'Ice',
        'Normal',
        'Poison',
        'Water',
        'Psychic',
        'Rock',
        'Steel'
    ];

    public static abilityList = [
        'Adaptability','Aerilate','Aftermath','Air Lock','Analytic','Anger Point','Anger Shell', 'Anticipation',
        'Arena Trap', 'Armor Tail','Aroma Veil','As One','Aura Break','Bad Dreams','Ball Fetch','Battery',
        'Battle Armor','Battle Bond','Beads of Ruin','Beast Boost','Berserk','Big Pecks','Blaze','Bulletproof',
        'Cheek Pouch','Chilling Neigh','Chlorophyll','Clear Body','Cloud Nine','Color Change',
        'Comatose','Commander','Competitive','Compound Eyes','Corrosion','Costar','Cotton Down','Cud Chew','Curious Medicine',
        'Cursed Body','Cute Charm','Damp','Dancer','Dark Aura','Dauntless Shield','Dazzling',
        'Defeatist','Defiant','Delta Stream','Desolate Land','Disguise','Download','Dragon\'s Maw',
        'Drizzle','Drought','Dry Skin','Early Bird','Earth Eater','Effect Spore','Electric Surge','Electromorphosis','Emergency Exit',
        'Fairy Aura','Filter','Flame Body','Flare Boost','Flash Fire','Flower Gift','Flower Veil',
        'Fluffy','Forecast','Forewarn','Friend Guard','Frisk','Full Metal Body','Fur Coat','Gale Wings',
        'Galvanize','Gluttony','Good as Gold','Gooey','Gorilla Tactics','Grass Pelt','Grassy Surge','Grim Neigh',
        'Guard Dog','Gulp Missile','Guts','Hadron Engine','Harvest','Healer','Heatproof','Heavy Metal','Honey Gather','Hospitality',
        'Huge Power','Hunger Switch','Hustle','Hydration','Hyper Cutter','Ice Body','Ice Face','Ice Scales',
        'Illuminate','Illusion','Immunity','Imposter','Infiltrator','Innards Out','Inner Focus',
        'Insomnia','Intimidate','Intrepid Sword','Iron Barbs','Iron Fist','Justified','Keen Eye',
        'Klutz','Leaf Guard','Levitate','Libero','Light Metal','Lightning Rod','Limber','Lingering Aroma','Liquid Ooze',
        'Liquid Voice','Long Reach','Magic Bounce','Magic Guard','Magician','Magma Armor','Magnet Pull',
        'Marvel Scale','Mega Launcher','Merciless','Mimicry','Minus','Mirror Armor','Misty Surge',
        'Mold Breaker','Moody','Motor Drive','Moxie','Multiscale','Multitype','Mummy','Mycelium Might','Natural Cure',
        'Neuroforce','Neutralizing Gas','Normalize','Oblivious','Opportunist','Orichalcum Pulse','Overcoat','Overgrow','Own Tempo',
        'Parental Bond','Pastel Veil','Perish Body','Pickpocket','Pickup','Pixilate','Plus',
        'Poison Heal','Poison Point','Poison Touch','Power Construct','Power of Alchemy','Power Spot',
        'Prankster','Pressure','Primordial Sea','Prism Armor','Propeller Tail','Protean','Protosynthesis',
        'Psychic Surge','Punk Rock','Pure Power','Purifying Salt','Quark Drive','Queenly Majesty','Quick Draw','Quick Feet',
        'Rain Dish','Rattled','Receiver','Reckless','Refrigerate','Regenerator','Ripen','Rivalry',
        'RKS System','Rock Head','Rocky Payload','Rough Skin','Run Away','Sand Force','Sand Rush','Sand Spit',
        'Sand Stream','Sand Veil','Sap Sipper','Schooling','Scrappy','Screen Cleaner','Seed Sower','Serene Grace',
        'Shadow Shield','Shadow Tag','Sharpness','Shed Skin','Sheer Force','Shell Armor','Shield Dust',
        'Shields Down','Simple','Skill Link','Slow Start','Slush Rush','Sniper','Snow Cloak',
        'Snow Warning','Solar Power','Solid Rock','Soul-Heart','Soundproof','Speed Boost','Stakeout',
        'Stall','Stalwart','Stamina','Stance Change','Static','Steadfast','Steam Engine','Steelworker',
        'Steely Spirit','Stench','Sticky Hold','Storm Drain','Strong Jaw','Sturdy','Suction Cups',
        'Super Luck','Supersweet Syrup','Supreme Overlord','Surge Surfer','Swarm','Sweet Veil','Swift Swim','Sword of Ruin','Symbiosis','Synchronize',
        'Tablets of Ruin','Tangled Feet','Tangling Hair','Technician','Telepathy','Teravolt','Thermal Exchange','Thick Fat','Tinted Lens',
        'Torrent','Tough Claws','Toxic Boost','Toxic Chain','Toxic Debris','Trace','Transistor','Triage','Truant','Turboblaze',
        'Unaware','Unburden','Unnerve','Unseen Fist','Vessel of Ruin','Victory Star','Vital Spirit','Volt Absorb',
        'Wandering Spirit','Water Absorb','Water Bubble','Water Compaction','Water Veil','Weak Armor','Well-Baked Body',
        'White Smoke','Wimp Out','Wind Power','Wind Rider','Wonder Guard','Wonder Skin','Zen Mode','Zero to Hero'
    ];

    public static tierList = [
        '1',
        '2',
        '3',
        '4',
        'My Team',
        'Restricted',
        'Legend',
        'Unlisted',
        'Banned',
        'All'
    ];

    public static pokemonAttributesTableHeaders = [
        'Name',
        'Form',
        'Type 1',
        'Type 2',
        'Ability 1',
        'Ability 2',
        'Hidden Ability',
        'HP',
        'Atk',
        'Def',
        'SpA',
        'SpD',
        'Spd',
        'Bst',
        'Tier',
        'Team'
    ];

    public static tableHeaderMap: any = {
        'Name' : "name",
        'Form' : "form",
        'Type 1' : "type1",
        'Type 2' : "type2",
        'Ability 1' : "ability1",
        'Ability 2' : "ability2",
        'Hidden Ability' : "hiddenAbility",
        'HP' : "hp",
        'Atk' : "attack",
        'Def' : "defense",
        'SpA' : "spAttack",
        'SpD' : "spDefense",
        'Spd' : "speed",
        'Bst' : "bst",
        'Tier' : "tier",
        'Team' : "team"
    };


    public static Ruleset = "docs.google.com/document/d/1WiwZXmJaPP-gyrqFR1u34oRQeBKGqeA9-4eUCaqQXJk/edit?usp=sharing";
    public static MasterSheet = "docs.google.com/spreadsheets/d/11JnOJTLF6TlI3cwqGGdipUS_Fd3YywGIFIXlrbIiYzA/edit?usp=sharing";
    public static Help = "mailto:draftdex@gmail.com";
    public static ScheduleLink = "docs.google.com/spreadsheets/d/1F2ZAI4Pm2Ux5LNHuOtnGmepyMapB9cg9J6OIaQcNjzI/edit?usp=sharing";
    public static Showdown = "play.pokemonshowdown.com/teambuilder";
}   