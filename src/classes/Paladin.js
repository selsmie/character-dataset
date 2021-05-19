const Paladin = {
	"name": "Paladin",

	"hit_die": 10,

	"proficiency_choices": ["Athletics","Insight","Intimidation","Medicine","Persuasion","Religion"],

	"proficiencies": ["All armor","Shields","Simple weapons","Martial weapons"],

	"saving_throws": ["WIS", "CHA"],

	"starting_equipment": [{"name": "Chain Mail","quantity": 1}],
	"starting_equipment_options": [[{"name": "Shield","quantity": 1, "name2": "Martial Weapons","quantity2": 1},{"name": "Any Martial Weapons", "quantity": 1}], [{"name": "Javelin","quantity": 5},{"name": "Simple Weapons","quantity": 1}], [{"name": "Priest's Pack","quantity": 1},{"name": "Explorer's Pack","quantity": 1}], [{"name": "Holy Symbols", "quantity": 1}]],
	
	"subclasses": "Devotion",
		
	
	"spellcasting_ability": "CHA",
		
}
	

export default Paladin