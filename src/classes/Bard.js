const bard = {

    "name": "Bard",

    "hit_die": 8,

    "proficiency_choices": ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"],

    "proficiency_choices2": ["Bagpipes", "Drum", "Dulcimer", "Flute", "Lute", "Lyre", "Horn", "Pan flute", "Shawm", "Viol"],
   
    "proficiencies": ["Light armor","Simple weapons","Longswords","Rapiers","Shortswords","Crossbows, hand",],
    
    "saving_throws": ["DEX", "CHA",],
    
    "starting_equipment": [{"name": "Leather", "quantity": 1 },{"name": "Dagger", "quantity": 1}],
 
    "starting_equipment_options": [[{"name": "Rapier", "quantity": 1},{"name": "Longsword", "quantity": 1 },{"name": "Any Simple Weapon", "quantity" : 1}],[{"name": "Diplomat's Pack","quantity": 1 },{"name": "Entertainer's Pack","quantity": 1}],[{"name": "Lute", "quantity": 1}, {"name": "Any Musical Instrument", "quantity": 1}]],    
    
    "subclasses": "Lore",

    
    "spellcasting_ability": "CHA",

}
    


export default bard