const monk = {
    "name": "Monk",

    "hit_die": 8,

    "proficiency_choices": ["Alchemist's supplies","Brewer's supplies","Calligrapher's supplies","Carpenter's tools","Cartographer's tools", "Cobbler's tools", "Cook's utensils", "Glassblower's tools", "Jeweler's tools", "Leatherworker's tools", "Mason's tools", "Painter's supplies", "Potter's tools", "Smith's tools", "Tinker's tools", "Weaver's tools", "Woodcarver's tools",  "Disguise kit", "Forgery kit",],

    "proficiency_choices2": ["Bagpipes", "Drum", "Dulcimer", "Flute", "Lute", "Lyre", "Horn", "Pan flute", "Shawm", "Viol"],

    "proficiency_choices3": ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"],

    "proficiencies": ["Simple weapons", "Shortswords"],
 
    "saving_throws": ["STR","DEX"],
   
    "starting_equipment": [{"name": "Dart","quantity": 10}],

    "starting_equipment_options": [[{"name": "Shortsword","quantity": 1},{"name": "Simple Weapons","quantity": 1}], [{"name": "Explorer's Pack", "quantity": 1}, {"name": "Dungeoneer's Pack", "quanity": 1}]],
    
    "subclasses": "Open Hand"
}

export default monk