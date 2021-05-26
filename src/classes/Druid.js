const druid = {
    "name": "Druid",

    "hit_die": 8,

    "proficiency_choices": ["Animal Handling","Arcana","Insight","Medicine","Nature","Perception","Religion","Survival"],

    "proficiencies": ["Light armor","Medium armor","Shields","Clubs","Daggers","Javelins","Maces","Quarterstaffs","Sickles","Spears","Darts","Slings","Scimitars","Herbalism Kit"],

    "saving_throws": [ "INT",  "WIS"],
 
    "starting_equipment": [{"name": "Leather", "quantity": 1},{"name": "Explorer's Pack","quantity": 1 }, {"name": "Druidic Focus", "quantity": 1}],

    "starting_equipment_options": [[{"name": "Wooden Shield","quantity": 1},{"name": "Any Simple Weapon", "quantity": 1}],[{"name": "Scimitar", "quantity": 1}, {"name": "Any Simple Weapon", "quantity": 1}]],   
    
   
    "subclasses": "Land",

    
    "spellcasting_ability": "WIS",
    

    "spellcasting_info": [
        {
            "desc": "At 1st level, you know two cantrips of your choice from the druid spell list. You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table.",
            "name": "Cantrips"
        },
        {
            "desc": "The Druid table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. You prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level (minimum of one spell). The spells must be of a level for which you have spell slots. For example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells You can also change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.",
            "name": "Preparing and Casting Spells"
        },
        {
            "desc": "Wisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one.",
            "name": "Spellcasting Ability"
        },
        {
            "desc": "You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared.",
            "name": "Ritual Casting"
        },
        {
            "desc": "You can use a druidic focus (see chapter 5, \"Equipment\") as a spellcasting focus for your druid spells.",
            "name": "Spellcasting Focus"
        }
    ]
}

export default druid