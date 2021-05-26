const traits = [{
    "name": "Artificer's Lore",
	"races": [],
	"subraces": ["Rock Gnome"],

	"desc": 
		"Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.",
        
	"proficiencies": [],
},
{
    "name": "Brave",
    "races": ["Halfling"],
	"subraces": [],
	"desc": "You have advantage on saving throw against being frightened.",
	"proficiencies": [],
},
{
    "name": "Breath Weapon",
    "races": ["Dragonborn"],
	"subraces": [],
	"desc": "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you cannot use it again until you complete a short or long rest.",
	"proficiencies": [],
},
{
    "name": "Damage Resistance",
    "races": ["Dragonborn"],
	"subraces": [],
	"desc": "You have resistance to the damage type associated with your draconic ancestry.",
	"proficiencies": [],
},
{
    "name": "Darkvision",
    "races": ["Dwarf","Elf","Gnome","Half-Elf","Half-Orc","Tiefling"],
	"subraces": [],
	"desc": "You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray.",
	"proficiencies": [],
},
{
    "name": "Draconic Ancestry",
    "races":[ "Dragonborn"],
    "subraces": [],
	"desc": "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
    "proficiencies": [],
},
{
    "name": "Dwarven Combat Training",
    "races": ["Dwarf"],
	"subraces": [],
	"desc":"You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.",
    "proficiencies": [ "Battleaxes", "Handaxes","Light hammers","Warhammers"],
},
{
    "name": "Dwarven Resilience",
    "races": ["Dwarf"],
	"subraces": [],
	"desc":"You have advantage on saving throws against poison, and you have resistance against poison damage.",
	"proficiencies": [],
},
{
    "name": "Dwarven Toughness",
    "races": [],
	"subraces": ["Hill Dwarf"],
    "desc":"Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.",
    "proficiencies": [],
},
{
    "name": "Elf Weapon Training",
    "races": [],
	"subraces": [ "High Elf"],
	"desc": "You have proficiency with the longsword, shortsword, shortbow, and longbow.",	
	"proficiencies": [ "Longswords","Shortswords","Shortbows","Longbows"]
		
},
{
    "name": "Extra Language",
    "races": [],
	"subraces": [ "High Elf"],
	
	"desc":"You can speak, read, and write one extra language of your choice.",
	"proficiencies": [],
},
{
    "name": "Fey Ancestry",
    "races": ["Elf","Half-Elf"],
	"subraces": [],
	"desc": 
		"You have advantage on saving throws against being charmed, and magic cannot put you to sleep.",
	"proficiencies": []
},
{
    "name": "Gnome Cunning",
    "races": ["Gnome"],
	"subraces": [],
	"desc": 
		"You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
	"proficiencies": []
},
{
    "name": "Halfling Nimbleness",
    "races": ["Halfling"],
	"subraces": [],
	"desc": 
		"You can move through the space of any creature that is of a size larger than yours.",
	"proficiencies": []
},
{
    "name": "Hellish Resistance",
    "races": ["Tiefling"],
	"subraces": [],
	"desc": "You have resistance to fire damage.",
	"proficiencies": []
},
{
    "name": "High Elf Cantrip",
    "races": [],
	"subraces": ["High Elf"],
	"desc": 
		"You know one cantrip of your choice form the wizard spell list. Intelligence is your spellcasting ability for it.",
	"proficiencies": []
},
{
    "name": "Infernal Legacy",
    "races": ["Tiefling"],
	"subraces": [],
	"desc":
		"You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
	"proficiencies": []
},
{
    "name": "Keen Senses",
    "races": ["Elf"],
	"subraces": [],
	"desc": 
		"You have proficiency in the Perception skill.",
	"proficiencies": ["Skill: Perception"]
},
{
    "name": "Lucky",
    "races": ["Halfling"],
	"subraces": [],
	"desc": 
		"When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.",
	"proficiencies": []
},
{
    "name": "Menacing",
    "races": ["Half-Orc"],
	"subraces": [],
	"desc": 
		"You gain proficiency in the Intimidation skill.",
	"proficiencies": ["Skill: Intimidation"]
},
{
    "name": "Naturally Stealthy",
    "races": [],
	"subraces": ["Lightfoot Halfling"],
	"desc": 
		"You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.",
	"proficiencies": []
},
{
    "name": "Relentless Endurance",
    "races": ["Half-Orc"],
	"subraces": [],
	"desc": 
		"When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. you cannot use this feature again until you finish a long rest.",
	"proficiencies": []
},
{
    "name": "Savage Attacks",
    "races": ["Half-Orc"],
	"subraces": [],
	"desc": 
		"When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.",
	"proficiencies": []
},
{
    "name": "Skill Versatility",
    "races": ["Half-Elf"],
	"subraces": [],
	"desc": 
		"You gain proficiency in two skills of your choice."
	,
	"proficiencies": [],
	"proficiency_choices": ["Skill: Acrobatics","Skill: Animal Handling","Skill: Arcana","Skill: Athletics","Skill: Deception","Skill: History","Skill: Insight","Skill: Intimidation", "Skill: Investigation", "Skill: Medicine","Skill: Nature","Skill: Perception","Skill: Performance","Skill: Persuasion","Skill: Religion","Skill: Sleight of Hand","Skill: Stealth","Skill: Survival"]
},
{
    "name": "Stonecunning",
    "races": ["Dwarf",],
	"subraces": [],
	"desc":
		"Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
	"proficiencies": []
},
{
    "name": "Tinker",
    "races": [],
	"subraces": ["Rock Gnome"],
	"desc":
    "You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options: Clockwork Toy: This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents. Fire Starter: The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action. Music Box: When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed."
	,
	"proficiencies": [
		{
			"index": "tinkers-tools",
			"name": "Tinker's tools",
			"url": "/api/proficiencies/tinkers-tools"
		}
	]
},
{
    "name": "Tool Proficiency",
    "races": ["Dwarf",],
	"subraces": [],
	"desc": 
		"You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools."
	,
	"proficiencies": [],
	"proficiency_choices": ["Smith's tools","Brewer's supplies","Mason's tools"]
},
{
    "name": "Trance",
    "races": ["Elf"],
	"subraces": [],
	"desc":
		"Elves do not need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting this way, you gain the same benefit that a human does from 8 hours of sleep."
	,
	"proficiencies": []
}
]
export default traits