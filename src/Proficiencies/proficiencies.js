const proficiencies = [
    {
        "name": "Alchemist's supplies",
        "type": "Artisan's Tools",
	    "classes": [],
	    "races": [],
    },
    {
        "name": "All armor",
        "type": "Armor",
	    "classes": ["Fighter","Paladin"],
	    "races": [],
    },
    {
        "name": "Bagpipes",
        "type": "Musical Instruments",
	    "classes": [],
	    "races": [],
    },
    {
        "name": "Battleaxes",
	    "type": "Weapons",
	    "classes": [],
	    "races": ["Dwarf"]
    },
    {
        "name": "Blowguns",
        "type": "Weapons",
	    "classes": [],
	    "races": [],
    },
    {
        "name": "Breastplate",
	    "type": "Armor",
	    "classes": [],
	    "races": [],
    },
    {
        "name": "Brewer's supplies",
	    "type": "Artisan's Tools",
	    "classes": [],
	    "races": [],
    },
    {
        "name": "Calligrapher's supplies",
	    "type": "Artisan's Tools",
	    "classes": [],
	    "races": [],
    },
    {
        "name": "Carpenter's tools",
	    "type": "Artisan's Tools",
	    "classes": [],
	    "races": [],
    },
    {
        "name": "Cartographer's tools",
        "type": "Artisan's Tools",
        "classes": [],
        "races": [],
    },
    {
        "name": "Chain Mail",
        "type": "Armor",
        "classes": [],
        "races": [],
    },
    {
        "name": "Chain Shirt",
        "type": "Armor",
        "classes": [],
        "races": [],
    },
    {
        "name": "Clubs",
	    "type": "Weapons",
	    "classes": ["Druid"],
	    "races": [],
    },
    {
        "name": "Cobbler's tools",
        "type": "Artisan's Tools",
        "classes": [],
        "races": [],
    },
    {
        "name": "Cook's utensils",
        "type": "Artisan's Tools",
        "classes": [],
        "races": [],
    },
    {
        "name": "Crossbows, hand",
        "type": "Weapons",
        "classes": ["Bard","Rogue"],
        "races": [],
    },
    {
        "name": "Crossbows, heavy",
        "type": "Weapons",
	    "classes": [],
	    "races": [],
    },
    {
        "name": "Crossbows, light",
        "type": "Weapons",
	    "classes": [],
	    "races": [],
    },
    {
        "name": "Daggers",
        "index": "daggers",
        "type": "Weapons",
        "classes": ["Druid","Sorcerer", "Wizard"],
        "races": [],
    },
    {
        "name": "Darts",
        "index": "darts",
	"type": "Weapons",
	"classes": ["Druid","Sorcerer","Wizard"],
	"races": [],
    },
    {
        "name": "Dice Set",
        "type": "Gaming Sets",
        "classes": [],
        "races": [],
    },
    {
        "name": "Disguise kit",
        "type": "Artisan's Tools",
        "classes": [],
        "races": [],
    },
    {
        "name": "Drum",
        "type": "Musical Instruments",
	    "classes": [],
	    "races": [],
    },
    {
        "name": "Dulcimer",
        "type": "Musical Instruments",
	    "classes": [],
        "races": [],
    },
    {
        "name": "Flails",
        "type": "Weapons",
        "classes": [],
        "races": [],
    },
    {
        "name": "Flute",
        "type": "Musical Instruments",
        "classes": [],
        "races": [],
    },
    {
        "name": "Forgery kit",
        "type": "Artisan's Tools",
        "classes": [],
        "races": [],
    },
    {
        "name": "Glaives",
        "type": "Weapons",
        "classes": [],
        "races": [],
    },
    {
        "name": "Glassblower's tools",
        "type": "Artisan's Tools",
        "classes": [],
        "races": [],
    },
    {
        "name": "Greataxes",
        "type": "Weapons",
        "classes": [],
        "races": [],
    },
    {
        "name": "Greatclubs",
        "type": "Weapons",
	    "classes": [],
	    "races": [],
    },
    {
        "name": "Greatswords",
        "type": "Weapons",
        "classes": [],
        "races": [],
    },
    {
        "name": "Halberds",
        "type": "Weapons",
        "classes": [],
        "races": [],
    },
    {
        "name": "Half Plate",
        "type": "Armor",
	    "classes": [],
	    "races": [],
    },
    {
        "name": "Handaxes",
        "type": "Weapons",
        "classes": [],
        "races": ["Dwarf"],
    },
    {
        "name": "Heavy armor",
        "type": "Armor",
	    "classes": [],
	    "races": [],
    },
    {
        "name": "Herbalism Kit",
        "type": "Other",
        "classes": ["Druid"],		
        "races": [],
    },
    {
        "name": "Hide",
        "type": "Armor",
	    "classes": [],
	    "races": [],
    },
    {
        "name": "Horn",
        "type": "Musical Instruments",
        "classes": [],
        "races": [],
    },
    {
        "name": "Javelins",
        "type": "Weapons",
        "classes": ["Druid"],
        "races": [],
    },
    {
        "name": "Jeweler's tools",
        "type": "Artisan's Tools",
        "classes": [],
        "races": [],
    },
    {
        "name": "Lances",
        "type": "Weapons",
        "classes": [],
        "races": [],
    },
    {
        "name": "Land Vehicles",
        "type": "Vehicles",
        "classes": [],
        "races": [],
    },
    {
        "name": "Leather",
        "type": "Armor",
	    "classes": [],
	    "races": [],
    },
    {
        "name": "Leatherworker's tools",
        "type": "Artisan's Tools",
        "classes": [],
        "races": [],
    },
    {
        "name": "Light armor",
        "type": "Armor",
        "classes": ["Barbarian","Bard","Cleric","Druid","Ranger","Rogue","Warlock"],
        "races": []
    },
    {
        "name": "Light hammers",
        "type": "Weapons",
        "classes": [],
        "races": ["Dwarf"]
    },
    {
        "name": "Longbows",
        "type": "Weapons",
        "classes": [],
        "races": ["High Elf"]
    },
    {
        "name": "Longswords",
        "type": "Weapons",
        "classes": ["Bard","Rogue"],
        "races": ["High Elf"]
    },
    {
        "name": "Lute",
        "type": "Musical Instruments",
        "classes": [],
        "races": []
    },
    {
        "name": "Lyre",
        "type": "Musical Instruments",
        "classes": [],
        "races": []
    },
    {
        "name": "Maces",
        "type": "Weapons",
        "classes": ["Druid"],
        "races": []
    },
    {
        "name": "Martial weapons",
        "type": "Weapons",
        "classes": ["Barbarian","Fighter","Paladin","Ranger"],
        "races": []
    },
    {
        "name": "Mason's tools",
        "type": "Artisan's Tools",
        "classes": [],
        "races": []
    },
    {
        "name": "Mauls",
        "type": "Weapons",
        "classes": [],
        "races": []
    },
    {
        "name": "Medium armor",
        "type": "Armor",
        "classes": ["Barbarian","Cleric","Druid","Ranger"],
        "races": []
    },
    {
        "name": "Morningstars",
        "type": "Weapons",
        "classes": [],
        "races": []
    },
    {
        "name": "Navigator's Tools",
        "type": "Other",
        "classes": [],
        "races": []
    },
    {
        "name": "Nets",
        "type": "Weapons",
        "classes": [],
        "races": []
    },
    {
        "name": "Padded",
        "type": "Armor",
        "classes": [],
        "races": []
    },
    {
        "name": "Painter's supplies",
        "type": "Artisan's Tools",
        "classes": [],
        "races": []
    },
    {
        "name": "Pan flute",
        "type": "Musical Instruments",
        "classes": [],
        "races": []
    },
    {
        "name": "Pikes",
        "type": "Weapons",
        "classes": [],
        "races": []
    },
    {
        "name": "Plate",
        "type": "Armor",
        "classes": [],
        "races": []
    },
    {
        "name": "Playing card set",
        "type": "Gaming Sets",
        "classes": [],
        "races": []
    },
    {
        "name": "Poisoner's Kit",
        "type": "Other",
        "classes": [],
        "races": []
    },
    {
        "name": "Potter's tools",
        "type": "Artisan's Tools",
        "classes": [],
        "races": []
    },
    {
        "name": "Quarterstaffs",
        "type": "Weapons",
        "classes": ["Druid","Sorcerer","Wizard"],
        "races": []
    },
    {
        "name": "Rapiers",
        "type": "Weapons",
        "classes": ["Bard","Rogue"],
        "races": []
    },
    {
        "name": "Ring Mail",
        "type": "Armor",
        "classes": [],
        "races": []
    },
    {
        "name": "Saving Throw: CHA",
        "type": "Saving Throws",
        "classes": ["Bard","Cleric","Paladin","Sorcerer","Warlock"],
        "races": []
    },
    {
        "name": "Saving Throw: CON",
        "type": "Saving Throws",
        "classes": ["Barbarian","Fighter","Sorcerer"],
        "races": []
    },
    {
        "name": "Saving Throw: DEX",
        "type": "Saving Throws",
        "classes": ["Bard","Monk","Ranger","Rogue"],
        "races": []
    },
    {
        "name": "Saving Throw: INT",
        "type": "Saving Throws",
        "classes": ["Druid","Rogue","Wizard"],
        "races": [],
    },
    {
        "name": "Saving Throw: STR",
        "type": "Saving Throws",
        "classes": ["Barbarian","Fighter","Monk","Ranger"],
        "races": [],
    },
    {
        "name": "Saving Throw: WIS",
        "type": "Saving Throws",
        "classes": ["Cleric","Druid","Paladin","Warlock","Wizard"],
        "races": [],
    },
    {
        "name": "Scale Mail",
        "type": "Armor",
        "classes": [],
        "races": [],
    },
    {
        "name": "Scimitars",
        "type": "Weapons",
        "classes": ["Druid"],
        "races": []
    },
    {
        "name": "Shawm",
        "type": "Musical Instruments",
        "classes": [],
        "races": [],
    },
    {
        "name": "Shields",
        "type": "Armor",
        "classes": ["Barbarian","Cleric","Druid","Fighter","Paladin","Ranger"],
        "races": []
    },
    {
        "name": "Shortbows",
        "type": "Weapons",
        "classes": [],
        "races": ["High Elf"]
    },
    {
        "name": "Shortswords",
        "type": "Weapons",
        "classes": ["Bard","Monk","Rogue"],
        "races": ["High Elf"]
    },
    {
        "name": "Sickles",
        "type": "Weapons",
        "classes": ["Druid"],
        "races": []
    },
    {
        "name": "Simple weapons",
        "type": "Weapons",
        "classes": ["Barbarian","Bard","Cleric","Fighter","Monk","Paladin","Ranger","Rogue","Warlock"],
        "races": []
    },
    {
        "name": "Skill: Acrobatics",
        "type": "Skills",
        "classes": [],
        "races": []
    },
    {
        "name": "Skill: Animal Handling",
        "type": "Skills",
        "classes": [],
        "races": []
    },
    {
        "name": "Skill: Arcana",
        "type": "Skills",
        "classes": [],
        "races": []
    },
    {
        "name": "Skill: Athletics",
        "type": "Skills",
        "classes": [],
        "races": []
    },
    {
        "name": "Skill: Deception",
        "type": "Skills",
        "classes": [],
        "races": []
    },
    {
        "name": "Skill: History",
        "type": "Skills",
        "classes": [],
        "races": []
    },
    {
        "name": "Skill: Insight",
        "type": "Skills",
        "classes": [],
        "races": []
    },
    {
        "name": "Skill: Intimidation",
        "type": "Skills",
        "classes": [],
        "races": []
    },
    {
        "name": "Skill: Investigation",
        "type": "Skills",
        "classes": [],
        "races": []
    },
    {
        "name": "Skill: Medicine",
        "type": "Skills",
        "classes": [],
        "races": []
    },
    {
        "name": "Skill: Nature",
        "type": "Skills",
        "classes": [],
        "races": []
    },
    {
        "name": "Skill: Perception",
        "type": "Skills",
        "classes": [],
        "races": ["Elf"]
    },
    {
        "name": "Skill: Performance",
        "type": "Skills",
        "classes": [],
        "races": []
    },
    {
        "name": "Skill: Persuasion",
        "type": "Skills",
        "classes": [],
        "races": []
    },
    {
        "name": "Skill: Religion",
        "type": "Skills",
        "classes": [],
        "races": []
    },
    {
        "name": "Skill: Sleight of Hand",
        "type": "Skills",
        "classes": [],
        "races": []
    },
    {
        "name": "Skill: Stealth",
        "type": "Skills",
        "classes": [],
        "races": []
    },
    {
        "name": "Skill: Survival",
        "type": "Skills",
        "classes": [],
        "races": []
    },
    {
        "name": "Slings",
        "type": "Weapons",
        "classes": ["Druid","Sorcerer","Wizard"],
        "races": []
    },
    {
        "name": "Smith's tools",
        "type": "Artisan's Tools",
        "classes": [],
        "races": []
    },
    {
        "name": "Spears",
        "type": "Weapons",
        "classes": ["Druid"],
        "races": []
    },
    {
        "name": "Splint",
        "type": "Armor",
        "classes": [],
        "races": []
    },
    {
        "name": "Studded Leather",
        "type": "Armor",
        "classes": [],
        "races": []
    },
    {
        "name": "Thieves' Tools",
        "type": "Other",
        "classes": ["Rogue"],
        "races": [],
    },
    {
        "name": "Tinker's tools",
        "type": "Artisan's Tools",
        "classes": [],
        "races": []
    },
    {
        "name": "Tridents",
        "type": "Weapons",
        "classes": [],
        "races": []
    },
    {
        "name": "Viol",
        "type": "Musical Instruments",
        "classes": [],
        "races": []
    },
    {
        "name": "War picks",
        "type": "Weapons",
        "classes": [],
        "races": []
    },
    {
        "name": "Warhammers",
        "type": "Weapons",
        "classes": [],
        "races": ["Dwarf"]
    },
    {
        "name": "Water Vehicles",
        "type": "Vehicles",
        "classes": [],
        "races": []
    },
    {
        "name": "Weaver's tools",
        "type": "Artisan's Tools",
        "classes": [],
        "races": []
    },
    {
        "name": "Whips",
        "type": "Weapons",
        "classes": [],
        "races": []
    },
    {
        "name": "Woodcarver's tools",
        "type": "Artisan's Tools",
        "classes": [],
        "races": []
    }
]

export default proficiencies