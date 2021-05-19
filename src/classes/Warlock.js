const Warlock = {
    
        "name": "Warlock",
        
        "hit_die": 8,

        "proficiency_choices": ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"],

        "proficiencies": ["Light armor","Simple weapons"],

        "saving_throws": ["WIS", "CHA"],
        
        "starting_equipment": [{"name": "Dagger", "quantity": 2}, {"name": "Leather", "quantity": 1}],
        
        "starting_equipment_options": [[{"name": "Crossbow, light","quantity": 1, "bolts": 20},{"name": "Any Simple Weapons","quantity": 1}], [{"name": "Component pouch","quantity": 1},{"name": "Arcane foci","quantity": 1}], [{"name": "Scholar's Pack","quantity": 1}, {"name": "Dungeoneer's Pack","quantity": 1}], [{"name": "Simple Weapons","quantity": 1}]],
        
        "subclasses": "Fiend",

        
        "spellcasting_ability": "CHA"  

}
export default Warlock