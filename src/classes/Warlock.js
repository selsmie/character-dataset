const Warlock = {

	"name": "Warlock",

	"hit_die": 8,

	"proficiency_choices": ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"],

	"proficiencies": ["Light armor","Simple weapons"],

	"saving_throws": ["WIS", "CHA"],

	"starting_equipment": [{"name": "Dagger", "quantity": 2}, {"name": "Leather", "quantity": 1}],

	"starting_equipment_options": [[{"name": "Crossbow, light","quantity": 1, "bolts": 20},{"name": "Any Simple Weapons","quantity": 1}], [{"name": "Component pouch","quantity": 1},{"name": "Arcane foci","quantity": 1}], [{"name": "Scholar's Pack","quantity": 1}, {"name": "Dungeoneer's Pack","quantity": 1}], [{"name": "Simple Weapons","quantity": 1}]],

	"subclasses": "Fiend",


	"spellcasting_ability": "CHA",

	"spellcasting_info": [
		{
			"desc": "You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table.",
			"name": "Cantrips"
		},
		{
			"desc": "The Warlock table shows how many spell slots you have. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest. For example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell thunderwave, you must spend one of those slots, and you cast it as a 3rd-level spell.",
			"name": "Spell Slots"
		},
		{
			"desc": "At 1st level, you know two 1st-level spells of your choice from the warlock spell list. The Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level and higher. A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level. Additionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots.",
			"name": "Spells Known of 1st Level and Higher"
		},
		{
			"desc": "Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one.",
			"name": "Spellcasting Ability"
		},
		{
			"desc": "You can use an arcane focus as a spellcasting focus for your warlock spells.",
			"name": "Spellcasting Focus"
		}
	]
}
export default Warlock