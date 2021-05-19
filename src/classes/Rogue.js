const Rogue = 
    {
        "index": "rogue",
        "name": "Rogue",
        "hit_die": 8,
        "proficiency_choices": ["Acrobatics", "Athletics", "Deception","Insight","Intimidation","Investigation","Perception","Performance","Persuasion","Sleight of Hand","Stealth"],
        "proficiencies": ["Light armor","Simple weapons","Longswords","Rapiers","Shortswords","Crossbows, hand","Thieves' Tools",],
        "saving_throws": ["DEX", "INT"],
        "starting_equipment": [
            {
                "equipment": {
                    "index": "leather",
                    "name": "Leather",
                    "url": "/api/equipment/leather"
                },
                "quantity": 1
            },
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
                    "index": "thieves-tools",
                    "name": "Thieves' tools",
                    "url": "/api/equipment/thieves-tools"
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
                            "index": "rapier",
                            "name": "Rapier",
                            "url": "/api/equipment/rapier"
                        },
                        "quantity": 1
                    },
                    {
                        "equipment": {
                            "index": "shortsword",
                            "name": "Shortsword",
                            "url": "/api/equipment/shortsword"
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
                        "equipment": {
                            "index": "shortsword",
                            "name": "Shortsword",
                            "url": "/api/equipment/shortsword"
                        },
                        "quantity": 1
                    },
                    {
                        "0": {
                            "equipment": {
                                "index": "shortbow",
                                "name": "Shortbow",
                                "url": "/api/equipment/shortbow"
                            },
                            "quantity": 1
                        },
                        "1": {
                            "equipment": {
                                "index": "arrow",
                                "name": "Arrow",
                                "url": "/api/equipment/arrow"
                            },
                            "quantity": 20
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
                            "index": "burglars-pack",
                            "name": "Burglar's Pack",
                            "url": "/api/equipment/burglars-pack"
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
                    },
                    {
                        "equipment": {
                            "index": "explorers-pack",
                            "name": "Explorer's Pack",
                            "url": "/api/equipment/explorers-pack"
                        },
                        "quantity": 1
                    }
                ]
            }
        ],
        "class_levels": "/api/classes/rogue/levels",
        "subclasses": [
            {
                "index": "thief",
                "name": "Thief",
                "url": "/api/subclasses/thief"
            }
        ],
        "url": "/api/classes/rogue"
    }

export default Rogue