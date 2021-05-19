const barbarian = {
    "name": "Barbarian",

    "hit_die": 12,

    "proficiency_choices": ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"],
    
    "proficiencies": ["Light armor", "Medium armor","Shields","Simple weapons", "Martial weapons"],

    "saving_throws": ["STR", "CON"],

    "starting_equipment": [{"name": "Explorer's Pack", "quantity": 1}, {"name": "Javelin", "quantity": 4}],
    
    "starting_equipment_options": [[{"name": "Greataxe","quantity": 1},{"name": "Any Martial Melee Weapon", "quantity": 1}], [{"name": "Handaxe", "quantity": 2}, {"name": "Any Simple Weapon", "quantity": 1}]],
   
    "subclasses": "Berserker",    
}

    export default barbarian