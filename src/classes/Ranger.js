const Ranger = {
	"name": "Ranger",

	"hit_die": 10,

	"proficiency_choices": ["Animal Handling","Athletics","Insight","Investigation","Nature","Perception","Stealth","Survival"],

	"proficiencies": ["Light armor","Medium armor","Shields","Simple weapons","Martial weapons"],

	"saving_throws": ["STR", "DEX"],
	
	"starting_equipment": [{"name": "Longbow","quantity": 1, "arrows": 20}],

	"starting_equipment_options": [[{"name": "Scale Mail","quantity": 1},{"name": "Leather","quantity": 1}], [{"name": "Shortsword","quantity": 2},{"name": "Simple Melee Weapons","quantity": 1}], [{"name": "Dungeoneer's Pack","quantity": 1},{"name": "Explorer's Pack","quantity": 1}]],

	"subclasses": "Hunter",
		
	"spellcasting_ability": "WIS",
		
}
export default Ranger
