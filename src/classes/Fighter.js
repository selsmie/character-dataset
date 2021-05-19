const fighter = {
    "index": "fighter",
    "name": "Fighter",
    "hit_die": 10,
    "proficiency_choices": [
    {
    "choose": 2,
    "type": "proficiencies",
    "from": [
    {
    "index": "skill-acrobatics",
    "name": "Skill: Acrobatics",
    "url": "/api/proficiencies/skill-acrobatics"
    },
    {
    "index": "skill-animal-handling",
    "name": "Skill: Animal Handling",
    "url": "/api/proficiencies/skill-animal-handling"
    },
    {
    "index": "skill-athletics",
    "name": "Skill: Athletics",
    "url": "/api/proficiencies/skill-athletics"
    },
    {
    "index": "skill-history",
    "name": "Skill: History",
    "url": "/api/proficiencies/skill-history"
    },
    {
    "index": "skill-insight",
    "name": "Skill: Insight",
    "url": "/api/proficiencies/skill-insight"
    },
    {
    "index": "skill-intimidation",
    "name": "Skill: Intimidation",
    "url": "/api/proficiencies/skill-intimidation"
    },
    {
    "index": "skill-perception",
    "name": "Skill: Perception",
    "url": "/api/proficiencies/skill-perception"
    },
    {
    "index": "skill-survival",
    "name": "Skill: Survival",
    "url": "/api/proficiencies/skill-survival"
    }
    ]
    }
    ],
    "proficiencies": [
    {
    "index": "all-armor",
    "name": "All armor",
    "url": "/api/proficiencies/all-armor"
    },
    {
    "index": "shields",
    "name": "Shields",
    "url": "/api/proficiencies/shields"
    },
    {
    "index": "simple-weapons",
    "name": "Simple weapons",
    "url": "/api/proficiencies/simple-weapons"
    },
    {
    "index": "martial-weapons",
    "name": "Martial weapons",
    "url": "/api/proficiencies/martial-weapons"
    }
    ],
    "saving_throws": [
    {
    "index": "str",
    "name": "STR",
    "url": "/api/ability-scores/str"
    },
    {
    "index": "con",
    "name": "CON",
    "url": "/api/ability-scores/con"
    }
    ],
    "starting_equipment": [],
    "starting_equipment_options": [
    {
    "choose": 1,
    "type": "equipment",
    "from": [
    {
    "equipment": {
    "index": "chain-mail",
    "name": "Chain Mail",
    "url": "/api/equipment/chain-mail"
    },
    "quantity": 1
    },
    {
    "0": {
    "equipment": {
    "index": "leather",
    "name": "Leather",
    "url": "/api/equipment/leather"
    },
    "quantity": 1
    },
    "1": {
    "equipment": {
    "index": "longbow",
    "name": "Longbow",
    "url": "/api/equipment/longbow"
    },
    "quantity": 1
    },
    "2": {
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
    "0": {
    "equipment": {
    "index": "shield",
    "name": "Shield",
    "url": "/api/equipment/shield"
    },
    "quantity": 1
    },
    "1": {
    "equipment_option": {
    "choose": 1,
    "type": "equipment",
    "from": {
    "equipment_category": {
    "index": "martial-weapons",
    "name": "Martial Weapons",
    "url": "/api/equipment-categories/martial-weapons"
    }
    }
    }
    }
    },
    {
    "equipment_option": {
    "choose": 2,
    "type": "equipment",
    "from": {
    "equipment_category": {
    "index": "martial-weapons",
    "name": "Martial Weapons",
    "url": "/api/equipment-categories/martial-weapons"
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
    "index": "handaxe",
    "name": "Handaxe",
    "url": "/api/equipment/handaxe"
    },
    "quantity": 2
    },
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
    }
    ]
    },
    {
    "choose": 1,
    "type": "equipment",
    "from": [
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
    "class_levels": "/api/classes/fighter/levels",
    "subclasses": [
    {
    "index": "champion",
    "name": "Champion",
    "url": "/api/subclasses/champion"
    }
    ],
    "url": "/api/classes/fighter"
    }

export default fighter