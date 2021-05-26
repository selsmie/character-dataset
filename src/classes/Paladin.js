const Paladin = {
	"name": "Paladin",

	"hit_die": 10,

	"proficiency_choices": ["Athletics","Insight","Intimidation","Medicine","Persuasion","Religion"],

	"proficiencies": ["All armor","Shields","Simple weapons","Martial weapons"],

	"saving_throws": ["WIS", "CHA"],

	"starting_equipment": [{"name": "Chain Mail","quantity": 1}],
	"starting_equipment_options": [[{"name": "Shield and Martial Weapon","quantity": 1},{"name": "Any Martial Weapon", "quantity": 1}], [{"name": "Javelin","quantity": 5},{"name": "Simple Weapons","quantity": 1}], [{"name": "Priest's Pack","quantity": 1},{"name": "Explorer's Pack","quantity": 1}], [{"name": "Holy Symbols", "quantity": 1}]],
	
	"subclasses": "Devotion",
		
	
	"spellcasting_ability": "CHA",
		
	"spellcasting_info": [
		{
			"desc": "The Paladin table shows how many spell slots you have to cast your spells. To cast one of your paladin spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. You prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots. For example, if you are a 5th-level paladin, you have four 1st-level and two 2nd-level spell slots. With a Charisma of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or a 2nd- level slot. Casting the spell doesn't remove it from your list of prepared spells. You can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.",
			"name": "Preparing and Casting Spells"
		},
		{
			"desc": "Charisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one.",
			"name": "Spellcasting Ability"
		},
		{
			"desc": "You can use a holy symbol as a spellcasting focus for your paladin spells.",
			"name": "Spellcasting Focus"
		}
	]
}
	

export default Paladin