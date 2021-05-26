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

	"spellcasting_info": [
		{
			"desc": "At 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn additional sorcerer cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Sorcerer table.",
			"name": "Cantrips"
		},
		{
			"desc": "The Sorcerer table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. For example, if you know the 1st-level spell burning hands and have a 1st-level and a 2nd-level spell slot available, you can cast burning hands using either slot.",
			"name": "Spell Slots"
		},
		{
			"desc": "You know two 1st-level spells of your choice from the sorcerer spell list. The Spells Known column of the Sorcerer table shows when you learn more sorcerer spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level. Additionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots.",
			"name": "Spells Known of 1st Level and Higher"
		},
		{
			"desc": "Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one.",
			"name": "Spellcasting Ability"
		},
		{
			"desc": "You can use an arcane focus as a spellcasting focus for your sorcerer spells.",
			"name": "Spellcasting Focus"
		}
	]
}
export default Sorcerer