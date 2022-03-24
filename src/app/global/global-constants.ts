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
        'Adaptability','Aerilate','Aftermath','Air Lock','Analytic', 'Anger Point','Anticipation',
        'Arena Trap','Aroma Veil','As One','Aura Break','Bad Dreams','Ball Fetch','Battery',
        'Battle Armor','Battle Bond','Beast Boost','Berserk','Big Pecks','Blaze','Bulletproof',
        'Cheek Pouch','Chilling Neigh','Chlorophyll','Clear Body','Cloud Nine','Color Change',
        'Comatose','Competitive','Compound Eyes','Corrosion','Cotton Down','Curious Medicine',
        'Cursed Body','Cute Charm','Damp','Dancer','Dark Aura','Dauntless Shield','Dazzling',
        'Defeatist','Defiant','Delta Stream','Desolate Land','Disguise','Download','Dragon\'s Maw',
        'Drizzle','Drought','Dry Skin','Early Bird','Effect Spore','Electric Surge','Emergency Exit',
        'Fairy Aura','Filter','Flame Body','Flare Boost','Flash Fire','Flower Gift','Flower Veil',
        'Fluffy','Forecast','Forewarn','Friend Guard','Frisk','Full Metal Body','Fur Coat','Gale Wings',
        'Galvanize','Gluttony','Gooey','Gorilla Tactics','Grass Pelt','Grassy Surge','Grim Neigh',
        'Gulp Missile','Guts','Harvest','Healer','Heatproof','Heavy Metal','Honey Gather','Huge Power',
        'Hunger Switch','Hustle','Hydration','Hyper Cutter','Ice Body','Ice Face','Ice Scales',
        'Illuminate','Illusion','Immunity','Imposter','Infiltrator','Innards Out','Inner Focus',
        'Insomnia','Intimidate','Intrepid Sword','Iron Barbs','Iron Fist','Justified','Keen Eye',
        'Klutz','Leaf Guard','Levitate','Libero','Light Metal','Lightning Rod','Limber','Liquid Ooze',
        'Liquid Voice','Long Reach','Magic Bounce','Magic Guard','Magician','Magma Armor','Magnet Pull',
        'Marvel Scale','Mega Launcher','Merciless','Mimicry','Minus','Mirror Armor','Misty Surge',
        'Mold Breaker','Moody','Motor Drive','Moxie','Multiscale','Multitype','Mummy','Natural Cure',
        'Neuroforce','Neutralizing Gas','Normalize','Oblivious','Overcoat','Overgrow','Own Tempo',
        'Parental Bond','Pastel Veil','Perish Body','Pickpocket','Pickup','Pixilate','Plus',
        'Poison Heal','Poison Point','Poison Touch','Power Construct','Power of Alchemy','Power Spot',
        'Prankster','Pressure','Primordial Sea','Prism Armor','Propeller Tail','Protean',
        'Psychic Surge','Punk Rock','Pure Power','Queenly Majesty','Quick Draw','Quick Feet',
        'Rain Dish','Rattled','Receiver','Reckless','Refrigerate','Regenerator','Ripen','Rivalry',
        'RKS System','Rock Head','Rough Skin','Run Away','Sand Force','Sand Rush','Sand Spit',
        'Sand Stream','Sand Veil','Sap Sipper','Schooling','Scrappy','Screen Cleaner','Serene Grace',
        'Shadow Shield','Shadow Tag','Shed Skin','Sheer Force','Shell Armor','Shield Dust',
        'Shields Down','Simple','Skill Link','Slow Start','Slush Rush','Sniper','Snow Cloak',
        'Snow Warning','Solar Power','Solid Rock','Soul-Heart','Soundproof','Speed Boost','Stakeout',
        'Stall','Stalwart','Stamina','Stance Change','Static','Steadfast','Steam Engine','Steelworker',
        'Steely Spirit','Stench','Sticky Hold','Storm Drain','Strong Jaw','Sturdy','Suction Cups',
        'Super Luck','Surge Surfer','Swarm','Sweet Veil','Swift Swim','Symbiosis','Synchronize',
        'Tangled Feet','Tangling Hair','Technician','Telepathy','Teravolt','Thick Fat','Tinted Lens',
        'Torrent','Tough Claws','Toxic Boost','Trace','Transistor','Triage','Truant','Turboblaze',
        'Unaware','Unburden','Unnerve','Unseen Fist','Victory Star','Vital Spirit','Volt Absorb',
        'Wandering Spirit','Water Absorb','Water Bubble','Water Compaction','Water Veil','Weak Armor',
        'White Smoke','Wimp Out','Wonder Guard','Wonder Skin','Zen Mode',
    ];

    public static tierList = [
        'Restricted',
        'Legend',
        '1',
        '2',
        '3',
        '4',
        'Unlisted',
        'Banned'
    ];

    public static pokemonAttributesTableHeaders = [
        'Name',
        'Form',
        'GMax',
        'Type 1',
        'Type 2',
        'Ability 1',
        'Ability 2',
        'Hidden Ability',
        'HP',
        'Attack',
        'Defense',
        'Sp. Attack',
        'Sp. Defense',
        'Speed',
        'Tier',
        'Free',
        'Team'
    ];

    public static tableHeaderMap: any = {
        'Name' : "name",
        'Form' : "form",
        'GMax' : "gmax",
        'Type 1' : "type1",
        'Type 2' : "type2",
        'Ability 1' : "ability1",
        'Ability 2' : "ability2",
        'Hidden Ability' : "hiddenAbility",
        'HP' : "hp",
        'Attack' : "attack",
        'Defense' : "defense",
        'Sp. Attack' : "spAttack",
        'Sp. Defense' : "spDefense",
        'Speed' : "speed",
        'Tier' : "tier",
        'Free' : "available",
        'Team' : "team"
    };


    public static Ruleset = "docs.google.com/document/d/1u0mzt_oQH4vYfq6SLKqYcVLfCXD9uFLm-d4ldvVSQJ4/edit?usp=sharing";
    public static MasterSheet = "docs.google.com/spreadsheets/d/1DomhRvEdFnVv2-njRJEVGhImahEsNsekWLDF93fiV4Q/edit?usp=sharing";
    public static Help = "mailto:draftdex@gmail.com";

    public static Showdown = "play.pokemonshowdown.com/teambuilder";
    
}