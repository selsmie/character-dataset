const Wizard = {
        "name": "Wizard",

        "hit_die": 6,

        "proficiency_choices": ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"],

        "proficiencies": ["Daggers", "Quarterstaffs", "Darts", "Slings"],

        "saving_throws": ["INT", "WIS"],
        
        "starting_equipment": [{"name": "Spellbook", "quantity": 1}],
        "starting_equipment_options": [[{"name": "Dagger", "quantity": 1}, {"name": "Quarterstaff", "quantity": 1}],[{"name": "Component pouch","quantity": 1}, {"name": "Arcane Foci", "quantity": 1}], [{"name": "Scholar's Pack", "quantity": 1}, {"name": "Dungeoneer's Pack", "quanity": 1}]],
            
        "subclasses": "Evocation",
        
        "spellcasting_ability": "INT",
}

export default Wizard