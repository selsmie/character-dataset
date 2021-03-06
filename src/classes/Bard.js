const bard = {

    "name": "Bard",

    "hit_die": 8,

    "proficiency_choices": ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"],

    "proficiency_choices2": ["Bagpipes", "Drum", "Dulcimer", "Flute", "Lute", "Lyre", "Horn", "Pan flute", "Shawm", "Viol"],
   
    "proficiencies": ["Light armor","Simple weapons","Longswords","Rapiers","Shortswords","Crossbows, hand",],
    
    "saving_throws": ["DEX", "CHA",],
    
    "starting_equipment": [{"name": "Leather", "quantity": 1 },{"name": "Dagger", "quantity": 1}],
 
    "starting_equipment_options": [[{"name": "Rapier", "quantity": 1},{"name": "Longsword", "quantity": 1 },{"name": "Any Simple Weapon", "quantity" : 1}],[{"name": "Diplomat's Pack","quantity": 1 },{"name": "Entertainer's Pack","quantity": 1}],[{"name": "Lute", "quantity": 1}, {"name": "Any Musical Instrument", "quantity": 1}]],    
    
    "subclasses": "Lore",

    
    "spellcasting_ability": "CHA",

    "spellcasting_info": [
			{
				"desc": "You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Bard table.",
				"name": "Cantrips"
			},
			{
				"desc": "The Bard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. For example, if you know the 1st-level spell cure wounds and have a 1st-level and a 2nd-level spell slot available, you can cast cure wounds using either slot.",
				"name": "Spell Slots"
			},
			{
				"desc": "You know four 1st-level spells of your choice from the bard spell list. The Spells Known column of the Bard table shows when you learn more bard spells of your choice. Each of these spells must be of a level for which you have spell slots, as shown on the table. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level. Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots.",
				"name": "Spells Known of 1st Level and Higher"
			},
			{
				"desc": "Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one. Spell save DC = 8 + your proficiency bonus + your Charisma modifier. Spell attack modifier = your proficiency bonus + your Charisma modifier.",
				"name": "Spellcasting Ability"
			},
			{
				"desc": "You can cast any bard spell you know as a ritual if that spell has the ritual tag.",
				"name": "Ritual Casting"
			},
			{
				"desc": "You can use a musical instrument (see Equipment) as a spellcasting focus for your bard spells.",
				"name": "Spellcasting Focus"
			}
        ]
}
    


export default bard