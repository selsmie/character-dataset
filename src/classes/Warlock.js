const Warlock = {
    
        "index": "warlock",
        "name": "Warlock",
        "hit_die": 8,
        "proficiency_choices": ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"],
        "proficiencies": ["Light armor","Simple weapons"],
        "saving_throws": ["WIS", "CHA"],
        "starting_equipment": [
            {
                "equipment": {
                    "index": "dagger",
                    "name": "Dagger",
                    "url": "/api/equipment/dagger"
                },
                "quantity": 2
            },
            {
                "equipment": {
                    "index": "leather",
                    "name": "Leather",
                    "url": "/api/equipment/leather"
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
                        "0": {
                            "equipment": {
                                "index": "crossbow-light",
                                "name": "Crossbow, light",
                                "url": "/api/equipment/crossbow-light"
                            },
                            "quantity": 1
                        },
                        "1": {
                            "equipment": {
                                "index": "crossbow-bolt",
                                "name": "Crossbow bolt",
                                "url": "/api/equipment/crossbow-bolt"
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
                                    "url": "/api/equipment-categories/simple-weapons"
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
                            "index": "component-pouch",
                            "name": "Component pouch",
                            "url": "/api/equipment/component-pouch"
                        },
                        "quantity": 1
                    },
                    {
                        "equipment_option": {
                            "choose": 1,
                            "type": "equipment",
                            "from": {
                                "equipment_category": {
                                    "index": "arcane-foci",
                                    "name": "Arcane foci",
                                    "url": "/api/equipment-categories/arcane-foci"
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
                            "index": "scholars-pack",
                            "name": "Scholar's Pack",
                            "url": "/api/equipment/scholars-pack"
                        },
                        "quantity": 1
                    },
                    {
                        "equipment": {
                            "index": "dungeoneers-pack",
                            "name": "Dungeoneer's Pack",
                            "url": "/api/equipment/dungeoneers-pack"
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
                            "index": "simple-weapons",
                            "name": "Simple Weapons",
                            "url": "/api/equipment-categories/simple-weapons"
                        }
                    }
                ]
            }
        ],
        "class_levels": "/api/classes/warlock/levels",
        "subclasses": [
            {
                "index": "fiend",
                "name": "Fiend",
                "url": "/api/subclasses/fiend"
            }
        ],
        "spellcasting": {
            "info": [
                {
                    "desc": [
                        "You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table."
                    ],
                    "name": "Cantrips"
                },
                {
                    "desc": [
                        "The Warlock table shows how many spell slots you have. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.",
                        "For example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell thunderwave, you must spend one of those slots, and you cast it as a 3rd-level spell."
                    ],
                    "name": "Spell Slots"
                },
                {
                    "desc": [
                        "At 1st level, you know two 1st-level spells of your choice from the warlock spell list.",
                        "The Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level and higher. ",
                        "A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level.",
                        "Additionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots."
                    ],
                    "name": "Spells Known of 1st Level and Higher"
                },
                {
                    "desc": [
                        "Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one."
                    ],
                    "name": "Spellcasting Ability"
                },
                {
                    "desc": [
                        "You can use an arcane focus as a spellcasting focus for your warlock spells."
                    ],
                    "name": "Spellcasting Focus"
                }
            ],
            "level": 1,
            "spellcasting_ability": {
                "index": "cha",
                "name": "CHA",
                "url": "/api/ability-scores/cha"
            }
        },
        "spells": "/api/classes/warlock/spells",
        "url": "/api/classes/warlock"
    

}
export default Warlock