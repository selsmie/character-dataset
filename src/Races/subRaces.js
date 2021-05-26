const subRaces = [
    {
        
        "name": "High Elf",

        "race":  "Elf",

		"desc": "As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many fantasy gaming worlds, there are two kinds of high elves. One type is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type is more common and more friendly, and often encountered among humans and other races.",

	    "ability_bonuses": [{"name": "INT", "bonus": 1}],

	    "starting_proficiencies": ["Longswords","Shortswords","Shortbows","Longbows",],

	    "languages": [],

	    "language_options": ["Dwarvish","Giant","Gnomish","Goblin","Halfling","Orc","Abyssal","Celestial","Draconic","Deep Speech","Infernal","Primordial","Sylvan", "Undercommon"],
	    
        "racial_traits": "Elf Weapon Training",
			
		"racial_trait_options": ["High Elf Cantrip: Light","High Elf Cantrip: Mage Hand","High Elf Cantrip: Mending","High Elf Cantrip: Message","High Elf Cantrip: Minor Illusion","High Elf Cantrip: Acid Splash","High Elf Cantrip: Prestidigitation","High Elf Cantrip: Ray of Frost","High Elf Cantrip: Shocking Grasp","High Elf Cantrip: True Strike","High Elf Cantrip: Chill Touch","High Elf Cantrip: Dancing Lights"]
			
	


        
    },
    {
        
        "name": "Hill Dwarf",
        
            "race": "Dwarf",
               
            "desc": "As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.",

            "ability_bonuses": [{ "name": "WIS", "bonus": 1} ],

            "starting_proficiencies": [],

            "languages": [],

            "racial_traits": "Dwarven Toughness",
                    
        
    },
    {
        
        "name": "Lightfoot Halfling",

        "race":"Halfling",

		"desc": "As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You're inclined to be affable and get along well with others. Lightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life.",

	    "ability_bonuses": [{"name": "CHA", "bonus": 1}],

	    "starting_proficiencies": [],

	    "languages": [],

	    "racial_traits": "Naturally Stealthy",
	},

        
  
    {
        
        "name": "Rock Gnome",

        "race":"Gnome",

		"desc": "As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes.",

	    "ability_bonuses": {"name": "CON", "bonus": 1},
	    
        "starting_proficiencies": "Tinker's tools",
		
	    "languages": [],

	    "racial_traits": ["Artificer's Lore","Tinker",],

    }

        
    

]

export default subRaces