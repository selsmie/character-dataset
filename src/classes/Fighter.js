const fighter = {
    "name": "Fighter",

    "hit_die": 10,

    "proficiency_choices":["Acrobatics","Animal Handling","Athletics","History","Insight","Intimidation","Perception","Survival"],

    "proficiencies": [ "All armor","Shields","Simple weapons","Martial weapons"],
  
    "saving_throws": ["STR","CON"],
    
    
    "starting_equipment": [],
    "starting_equipment_options": [[{"name": "Chain Mail","quantity": 1},{"name": "Leather Armour and Longbow", "quantity": 1, "arrows":20 }],[{"name": "Shield and Marital Weapon", "quantity":1},{"name":"Any Martial Weapon", "quantity":2}],[{"name": "Handaxe","quantity": 2},{"name": "Crossbow, light","quantity": 1, "bolts":20}],[{"name": "Dungeoneer's Pack", "quantity": 1},{"name": "Explorer's Pack", "quantity": 1}]],
    
  
    "subclasses": ["Champion"],
    
    }

export default fighter