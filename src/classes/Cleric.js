const cleric = {
    "name": "Cleric",
    "hit_die": 8,
    "proficiency_choices": ["History","Insight","Medicine","Persuasion","Religion"],
    "proficiencies": ["Light armor", "Medium armor", "Shields", "Simple weapons"],   
    "saving_throws": ["WIS","CHA"]
  
    "starting_equipment": [
    {
    "equipment": {
    "index": "shield",
    "name": "Shield",
    
    },
    "quantity": 1
    }
    ],
    "starting_equipment_options": [
    {
    "choose": 1,
    "type": "equipment",
    "from": [
    {
    "equipment": {
    "index": "mace",
    "name": "Mace",
    
    },
    "quantity": 1
    },
    {
    "equipment": {
    "index": "warhammer",
    "name": "Warhammer",
    
    "quantity": 1,
    "prerequisites": [
    {
    "type": "proficiency",
    "proficiency": {
    "index": "warhammers",
    "name": "Warhammers",
   
    }
    ]
    }
    ]
    },
    {
    "choose": 1,
    "type": "equipment",
    "from": [
    {
    "equipment": {
    "index": "scale-mail",
    "name": "Scale Mail",
    
    },
    "quantity": 1
    },
    {
    "equipment": {
    "index": "leather",
    "name": "Leather",
    
    },
    "quantity": 1
    },
    {
    "equipment": {
    "index": "chain-mail",
    "name": "Chain Mail",
    
    },
    "quantity": 1,
    "prerequisites": [
    {
    "type": "proficiency",
    "proficiency": {
    "index": "chain-mail",
    "name": "Chain Mail",
    
    }
    }
    ]
    }
    ]
    },
    {
    "choose": 1,
    "type": "equipment",
    "from": [
    {
    "0": {
    "equipment": {
    "index": "crossbow-light",
    "name": "Crossbow, light",
    
    },
    "quantity": 1
    },
    "1": {
    "equipment": {
    "index": "crossbow-bolt",
    "name": "Crossbow bolt",
    
    },
    "quantity": 20
    }
    },
    {
    "equipment_option": {
    "choose": 1,
    "type": "equipment",
    "from": {
    "equipment_category": {
    "index": "simple-weapons",
    "name": "Simple Weapons",
    
    }
    }
    }
    }
    ]
    },
    {
    "choose": 1,
    "type": "equipment",
    "from": [
    {
    "equipment": {
    "index": "priests-pack",
    "name": "Priest's Pack",
    
    },
    "quantity": 1
    },
    {
    "equipment": {
    "index": "explorers-pack",
    "name": "Explorer's Pack",
    
    },
    "quantity": 1
    }
    ]
    },
    {
    "choose": 1,
    "type": "equipment",
    "from": [
    {
    "equipment_category": {
    "index": "holy-symbols",
    "name": "Holy Symbols",
    
    }
    }
    ]
    }
    ],
    "subclasses": ["Life"],
    
  
    "spellcasting": {
    "info": [
    {
    "desc": [
    "At 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table."
    ],
    "name": "Cantrips"
    },
    {
    "desc": [
    "The Cleric table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
    "You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots.",
    "For example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
    "You can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list."
    ],
    "name": "Preparing and Casting Spells"
    },
    {
    "desc": [
    "Wisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.",
    "Spell save DC = 8 + your proficiency bonus + your Wisdom modifier",
    "Spell attack modifier = your proficiency bonus + your Wisdom modifier"
    ],
    "name": "Spellcasting Ability"
    },
    {
    "desc": [
    "You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared."
    ],
    "name": "Ritual Casting"
    },
    {
    "desc": [
    "You can use a holy symbol (see Equipment) as a spellcasting focus for your cleric spells."
    ],
    "name": "Spellcasting Focus"
    }
    ],
    "level": 1,
    "spellcasting_ability": {
    "index": "wis",
    "name": "WIS",
    "url": "/api/ability-scores/wis"
    }
    },
    "spells": "/api/classes/cleric/spells",
    "url": "/api/classes/cleric"
    }

    export default cleric