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
		
	"spellcasting_info": [
		{
			"desc": "The Ranger table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. For example, if you know the 1st-level spell animal friendship and have a 1st-level and a 2nd-level spell slot available, you can cast animal friendship using either slot.",
			"name": "Spell Slots"
		},
		{
			"desc": "You know two 1st-level spells of your choice from the ranger spell list. The Spells Known column of the Ranger table shows when you learn more ranger spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 5th level in this class, you can learn one new spell of 1st or 2nd level. Additionally, when you gain a level in this class, you can choose one of the ranger spells you know and replace it with another spell from the ranger spell list, which also must be of a level for which you have spell slots.",
			"name": "Spells Known of 1st Level and Higher"
		},
		{
			"desc": "Wisdom is your spellcasting ability for your ranger spells, since your magic draws on your attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a ranger spell you cast and when making an attack roll with one.",
			"name": "Spellcasting Ability"
		}
	]
}
export default Ranger
