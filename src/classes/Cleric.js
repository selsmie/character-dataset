const cleric = {
    "name": "Cleric",

    "hit_die": 8,

    "proficiency_choices": ["History","Insight","Medicine","Persuasion","Religion"],

    "proficiencies": ["Light armor", "Medium armor", "Shields", "Simple weapons"],  

    "saving_throws": ["WIS","CHA"],

    "starting_equipment": [{"name": "Shield", "quantity": 1},{"name": "Holy Symbol", "quantity":1}],

    "starting_equipment_options": [[{"name": "Mace","quantity": 1},{"name": "Warhammer","quantity": 1,}],[{"name": "Scale Mail","quantity": 1},{"name": "Leather","quantity": 1},{"name": "Chain Mail", "quantity": 1}],[{"name": "Crossbow, light", "quantity": 1, "bolts": 20},{"name": "Any Simple Weapon", "quantity":1}],[{"name": "Priest's Pack",  "quantity": 1 }, { "name": "Explorer's Pack","quantity": 1}]],
    
    "subclasses": "Life",
    
  
    
    "spellcasting_ability": "WIS",
  
    }
    

    export default cleric