const Sorcerer = {
    
        "name": "Sorcerer",

        "hit_die": 6,

        "proficiency_choices": ["Arcana","Deception","Insight","Intimidation","Persuasion","Religion",],

        "proficiencies": ["Daggers","Quarterstaffs","Darts","Slings"],

        "saving_throws": ["CON", "CHA"],
         
        "starting_equipment": [{"name": "Dagger","quantity": 2}],

        "starting_equipment_options": [[{"name": "Crossbow, light","quantity": 1, "bolts": 20}, {"name": "Simple Weapons","quantity": 1}], [{"name": "Component pouch","quantity": 1}, {"name": "Arcane Foci", "quantity": 1}], [{"name": "Explorer's Pack","quantity": 1}, {"name": "Dungeoneer's Pack","quantity": 1}]],
        
        "subclasses": "Draconic",

        
        "spellcasting_ability": "CHA",
        
    
}
export default Sorcerer