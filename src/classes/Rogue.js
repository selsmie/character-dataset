const Rogue = 
    {
        "name": "Rogue",

        "hit_die": 8,

        "proficiency_choices": ["Acrobatics", "Athletics", "Deception","Insight","Intimidation","Investigation","Perception","Performance","Persuasion","Sleight of Hand","Stealth"],

        "proficiencies": ["Light armor","Simple weapons","Longswords","Rapiers","Shortswords","Crossbows, hand","Thieves' Tools",],

        "saving_throws": ["DEX", "INT"],
        
        "starting_equipment": [{"name": "Leather","quantity": 1},{"name": "Dagger", "quantity": 2},{"name": "Thieves' tools","quantity": 1}],

        "starting_equipment_options": [[{"name": "Rapier", "quantity": 1},{"name": "Shortsword","quantity": 1}], [{"name": "Shortsword","quantity": 1},{"name": "Shortbow","quantity": 1, "arrows": 20}], [{"name": "Burglar's Pack", "quantity": 1}, {"name": "Dungeoneer's Pack","quantity": 1}, {"name": "Explorer's Pack","quantity": 1}]],
        
        "subclasses": "Thief"
}

export default Rogue