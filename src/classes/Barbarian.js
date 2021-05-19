const barbarian = {
    "name": "Barbarian",
    "hit_die": 12,
    "proficiency_choices": ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"],
    "proficiencies": ["Light armor", "Medium armor","Shields","Simple weapons", "Martial weapons"],
    "saving_throws": ["STR", "CON"],
    "starting_equipment": [
    {
    "equipment": {

    "name": "Explorer's Pack",
    },
    "quantity": 1
    },
    {
    "equipment": {
    "name": "Javelin",
    },
    "quantity": 4
    }
    ],
    "starting_equipment_options": [
    {
    "choose": 1,
    "type": "equipment",
    "from": [
    {
    "equipment": {
    "name": "Greataxe",
    },
    "quantity": 1
    },
    {
    "equipment_option": {
    "choose": 1,
    "type": "equipment",
    "from": {
    "equipment_category": {
    "name": "Martial Melee Weapons",
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
    "name": "Handaxe",
    },
    "quantity": 2
    },
    {
    "equipment_option": {
    "choose": 1,
    "type": "equipment",
    "from": {
    "equipment_category": {
    "name": "Simple Weapons",
    }
    }
    }
    }
    ]
    }
    ],
   
    "subclasses": "Berserker",
    
    }

    export default barbarian