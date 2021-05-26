const subclasses = [
    {
        "name": "Berserker",
        "class": "Barbarian",
       "subclass_flavor": "Primal Path",
        "desc":  "For some barbarians, rage is a means to an end--that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being.",
    },
    {
        "name": "Champion",
        "class":"Fighter",
        "subclass_flavor": "Martial Archetype",
        "desc": "The archetypal Champion focuses on the development of raw physical power honed to deadly perfection. Those who model themselves on this archetype combine rigorous training with physical excellence to deal devastating blows.",
    },
    {
        "name": "Devotion",
        
        "class":"Paladin",
        
        "subclass_flavor": "Sacred Oath",
        
        "desc": "The Oath of Devotion binds a paladin to the loftiest ideals of justice, virtue, and order. Sometimes called cavaliers, white knights, or holy warriors, these paladins meet the ideal of the knight in shining armor, acting with honor in pursuit of justice and the greater good. They hold themselves to the highest standards of conduct, and some, for better or worse, hold the rest of the world to the same standards. Many who swear this oath are devoted to gods of law and good and use their gods' tenets as the measure of their devotion. They hold angels--the perfect servants of good--as their ideals, and incorporate images of angelic wings into their helmets or coats of arms.",

        "spells": [{"level": 3,"name": "Protection from Evil and Good"},{"level": 3, "name": "Sanctuary"}, {"level": 5,"name": "Lesser Restoration"},{ "level":  5,"name": "Zone of Truth"},{"level":  9, "name": "Beacon of Hope" },{"level":  9, "name": "Dispel Magic"},{"level": 13,"name": "Freedom of Movement"},{"level": 17,"name": "Commune"},{ "level": 17,"name": "Flame Strike"},
        ]
    },
    {
        "name": "Draconic",
        "class": "Sorcerer",
        "subclass_flavor": "Sorcerous Origins",
        "desc": "Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors. Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times who made a bargain with a dragon or who might even have claimed a dragon parent. Some of these bloodlines are well established in the world, but most are obscure. Any given sorcerer could be the first of a new bloodline, as a result of a pact or some other exceptional circumstance.",
    },
    {
        "name": "Evocation",
        "class":"Wizard",
        "subclass_flavor": "Arcane Tradition",
        "desc": "You focus your study on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid. Some evokers find employment in military forces, serving as artillery to blast enemy armies from afar. Others use their spectacular power to protect the weak, while some seek their own gain as bandits, adventurers, or aspiring tyrants.",    
    },
    {
        "name": "Fiend",
        "class": "Warlock",
        "subclass_flavor": "Otherworldly Patron",
        "desc": "You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even if you strive against those aims. Such beings desire the corruption or destruction of all things, ultimately including you. Fiends powerful enough to forge a pact include demon lords such as Demogorgon, Orcus, Fraz'Urb-luu, and Baphomet; archdevils such as Asmodeus, Dispater, Mephistopheles, and Belial; pit fiends and balors that are especially mighty; and ultroloths and other lords of the yugoloths.",
        
        "spells": [{"level": 1, "name": "Burning Hands",},{"level": 1, "name": "Command"},{"level": 1,"name": "Blindness/Deafness"},{"level": 1,"name": "Scorching Ray"}, {"level": 1, "name": "Fireball"},{"level": 1,"name": "Stinking Cloud"},{"level": 1,"name": "Fire Shield"},{"level": 1,"name": "Wall of Fire"},{"level": 1,"name": "Flame Strike"},{"level": 1,"name": "Hallow"}],
    },
    {
        "name": "Hunter",
        "class": "Ranger",
        "subclass_flavor": "Ranger Archetype",
        "desc": "Emulating the Hunter archetype means accepting your place as a bulwark between civilization and the terrors of the wilderness. As you walk the Hunter's path, you learn specialized techniques for fighting the threats you face, from rampaging ogres and hordes of orcs to towering giants and terrifying dragons.",
    },
    {
        "name": "Land",
        "class": "Druid",
        "subclass_flavor": "Druid Circle",
        "desc": 
            "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle's wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle's mysterious rites.",
        "spells": [
            {
                "level": 3,
                "prerequisites": "Circle of the Land: Arctic",
                "name": "Hold Person"
            },
            {
                "level": 3,
                "prerequisites": "Circle of the Land: Arctic",
                "name": "Spike Growth",
            },
            {
                "level": 5,
                "prerequisites": "Circle of the Land: Arctic",
                "name": "Sleet Storm"
            },
            {
                "level": 5,
                "prerequisites": "Circle of the Land: Arctic",
                "name": "Slow"
            },
            {
                "level": 7,
                "prerequisites": "Circle of the Land: Arctic",
                "name": "Freedom of Movement"
            },
            {
                "prerequisites": "Circle of the Land: Arctic",
                "level": 7,
                "name": "Holy Aura"
            },
            {
                "level": 9,
                "prerequisites": "Circle of the Land: Arctic",
                "name": "Commune"
            },
            {
                "level": 9,
                "prerequisites": "Circle of the Land: Arctic",
                "name": "Comprehend Languages"
            },
            {
                "level": 3,
                "prerequisites": "Circle of the Land: Coast",
                "name": "Mirror Image"
            },
            {
                "level": 3,
                "prerequisites": "Circle of the Land: Coast",
                "name": "Misty Step"
            },
            {
                "level": 5,
                "prerequisites": "Circle of the Land: Coast",
                "name": "Water Breathing"
            },
            {
                "level": 5,
                "prerequisites": "Circle of the Land: Coast", 
                "name": "Water Walk"
            },
            {
                "level": 7,
                "prerequisites": "Circle of the Land: Coast",
                "name": "Control Water"
            },
            {
                "level": 7,
                "prerequisites": "Circle of the Land: Coast",
                "name": "Freedom of Movement"
            },
            {
                "level": 9,
                "prerequisites": "Circle of the Land: Coast", 
                "name": "Conjure Elemental"
            },
            {
                "level": 9,
                "prerequisites": "Circle of the Land: Coast",
                "name": "Scrying"
            },
            {
                "level": 3,
                "prerequisites": "Circle of the Land: Desert",
                "name": "Blur"
            },
            {
                "level": 3,
                "prerequisites": "Circle of the Land: Desert",
                "name": "Silence"
            },
            {
                "level": 5,
                "prerequisites": "Circle of the Land: Desert",
                "name": "Create Food and Water"
            },
            {
                "level": 5,
                "prerequisites": "Circle of the Land: Desert",
                "name": "Protection From Energy"
            },
            {
                "level": 7,
                "prerequisites": "Circle of the Land: Desert",
                "name": "Blight"
            },
            {
                "level": 7,
                "prerequisites": "Circle of the Land: Desert",
                "name": "Hallucinatory Terrain"
            },
            {
                "level": 9,
                "prerequisites": "Circle of the Land: Desert",
                "name": "Insect Plague"
            },
            {
                "level": 9,
                "prerequisites": "Circle of the Land: Desert", 
                "name": "Wall of Stone"
            },
            {
                "level": 3,
                "prerequisites": "Circle of the Land: Forest",
                "name": "Barkskin"
            },
            {
                "level": 3,
                "prerequisites": "Circle of the Land: Forest",
                "name": "Spider Climb"
            },
            {
                "level": 5,
                "prerequisites": "Circle of the Land: Forest",
                "name": "Call Lightning"
            },
            {
                "level": 5,
                "prerequisites": "Circle of the Land: Forest",
                "name": "Plant Growth"
            },
            {
                "level": 7,
                "prerequisites": "Circle of the Land: Forest",
                "name": "Divination"
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-7",
                        "type": "level",
                        "name": "Druid 7",
                        "url": "/api/classes/druid/levels/7"
                    },
                    {
                        "index": "circle-of-the-land-forest",
                        "type": "feature",
                        "name": "Circle of the Land: Forest",
                        "url": "/api/features/circle-of-the-land-forest"
                    }
                ],
                "spell": {
                    "index": "freedom-of-movement",
                    "name": "Freedom of Movement",
                    "url": "/api/spells/freedom-of-movement"
                }
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-9",
                        "type": "level",
                        "name": "Druid 9",
                        "url": "/api/classes/druid/levels/9"
                    },
                    {
                        "index": "circle-of-the-land-forest",
                        "type": "feature",
                        "name": "Circle of the Land: Forest",
                        "url": "/api/features/circle-of-the-land-forest"
                    }
                ],
                "spell": {
                    "index": "commune-with-nature",
                    "name": "Commune With Nature",
                    "url": "/api/spells/commune-with-nature"
                }
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-9",
                        "type": "level",
                        "name": "Druid 9",
                        "url": "/api/classes/druid/levels/9"
                    },
                    {
                        "index": "circle-of-the-land-forest",
                        "type": "feature",
                        "name": "Circle of the Land: Forest",
                        "url": "/api/features/circle-of-the-land-forest"
                    }
                ],
                "spell": {
                    "index": "tree-stride",
                    "name": "Tree Stride",
                    "url": "/api/spells/tree-stride"
                }
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-3",
                        "type": "level",
                        "name": "Druid 3",
                        "url": "/api/classes/druid/levels/3"
                    },
                    {
                        "index": "circle-of-the-land-grassland",
                        "type": "feature",
                        "name": "Circle of the Land: Grassland",
                        "url": "/api/features/circle-of-the-land-grassland"
                    }
                ],
                "spell": {
                    "index": "invisibility",
                    "name": "Invisibility",
                    "url": "/api/spells/invisibility"
                }
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-3",
                        "type": "level",
                        "name": "Druid 3",
                        "url": "/api/classes/druid/levels/3"
                    },
                    {
                        "index": "circle-of-the-land-grassland",
                        "type": "feature",
                        "name": "Circle of the Land: Grassland",
                        "url": "/api/features/circle-of-the-land-grassland"
                    }
                ],
                "spell": {
                    "index": "pass-without-trace",
                    "name": "Pass Without Trace",
                    "url": "/api/spells/pass-without-trace"
                }
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-5",
                        "type": "level",
                        "name": "Druid 5",
                        "url": "/api/classes/druid/levels/5"
                    },
                    {
                        "index": "circle-of-the-land-grassland",
                        "type": "feature",
                        "name": "Circle of the Land: Grassland",
                        "url": "/api/features/circle-of-the-land-grassland"
                    }
                ],
                "spell": {
                    "index": "daylight",
                    "name": "Daylight",
                    "url": "/api/spells/daylight"
                }
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-5",
                        "type": "level",
                        "name": "Druid 5",
                        "url": "/api/classes/druid/levels/5"
                    },
                    {
                        "index": "circle-of-the-land-grassland",
                        "type": "feature",
                        "name": "Circle of the Land: Grassland",
                        "url": "/api/features/circle-of-the-land-grassland"
                    }
                ],
                "spell": {
                    "index": "haste",
                    "name": "Haste",
                    "url": "/api/spells/haste"
                }
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-7",
                        "type": "level",
                        "name": "Druid 7",
                        "url": "/api/classes/druid/levels/7"
                    },
                    {
                        "index": "circle-of-the-land-grassland",
                        "type": "feature",
                        "name": "Circle of the Land: Grassland",
                        "url": "/api/features/circle-of-the-land-grassland"
                    }
                ],
                "spell": {
                    "index": "divination",
                    "name": "Divination",
                    "url": "/api/spells/divination"
                }
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-7",
                        "type": "level",
                        "name": "Druid 7",
                        "url": "/api/classes/druid/levels/7"
                    },
                    {
                        "index": "circle-of-the-land-grassland",
                        "type": "feature",
                        "name": "Circle of the Land: Grassland",
                        "url": "/api/features/circle-of-the-land-grassland"
                    }
                ],
                "spell": {
                    "index": "freedom-of-movement",
                    "name": "Freedom of Movement",
                    "url": "/api/spells/freedom-of-movement"
                }
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-9",
                        "type": "level",
                        "name": "Druid 9",
                        "url": "/api/classes/druid/levels/9"
                    },
                    {
                        "index": "circle-of-the-land-grassland",
                        "type": "feature",
                        "name": "Circle of the Land: Grassland",
                        "url": "/api/features/circle-of-the-land-grassland"
                    }
                ],
                "spell": {
                    "index": "dream",
                    "name": "Dream",
                    "url": "/api/spells/dream"
                }
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-9",
                        "type": "level",
                        "name": "Druid 9",
                        "url": "/api/classes/druid/levels/9"
                    },
                    {
                        "index": "circle-of-the-land-grassland",
                        "type": "feature",
                        "name": "Circle of the Land: Grassland",
                        "url": "/api/features/circle-of-the-land-grassland"
                    }
                ],
                "spell": {
                    "index": "insect-plague",
                    "name": "Insect Plague",
                    "url": "/api/spells/insect-plague"
                }
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-3",
                        "type": "level",
                        "name": "Druid 3",
                        "url": "/api/classes/druid/levels/3"
                    },
                    {
                        "index": "circle-of-the-land-mountain",
                        "type": "feature",
                        "name": "Circle of the Land: Mountain",
                        "url": "/api/features/circle-of-the-land-mountain"
                    }
                ],
                "spell": {
                    "index": "spider-climb",
                    "name": "Spider Climb",
                    "url": "/api/spells/spider-climb"
                }
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-3",
                        "type": "level",
                        "name": "Druid 3",
                        "url": "/api/classes/druid/levels/3"
                    },
                    {
                        "index": "circle-of-the-land-mountain",
                        "type": "feature",
                        "name": "Circle of the Land: Mountain",
                        "url": "/api/features/circle-of-the-land-mountain"
                    }
                ],
                "spell": {
                    "index": "spike-growth",
                    "name": "Spike Growth",
                    "url": "/api/spells/spike-growth"
                }
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-5",
                        "type": "level",
                        "name": "Druid 5",
                        "url": "/api/classes/druid/levels/5"
                    },
                    {
                        "index": "circle-of-the-land-mountain",
                        "type": "feature",
                        "name": "Circle of the Land: Mountain",
                        "url": "/api/features/circle-of-the-land-mountain"
                    }
                ],
                "spell": {
                    "index": "lightning-bolt",
                    "name": "Lightning Bolt",
                    "url": "/api/spells/lightning-bolt"
                }
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-5",
                        "type": "level",
                        "name": "Druid 5",
                        "url": "/api/classes/druid/levels/5"
                    },
                    {
                        "index": "circle-of-the-land-mountain",
                        "type": "feature",
                        "name": "Circle of the Land: Mountain",
                        "url": "/api/features/circle-of-the-land-mountain"
                    }
                ],
                "spell": {
                    "index": "meld-into-stone",
                    "name": "Meld Into Stone",
                    "url": "/api/spells/meld-into-stone"
                }
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-7",
                        "type": "level",
                        "name": "Druid 7",
                        "url": "/api/classes/druid/levels/7"
                    },
                    {
                        "index": "circle-of-the-land-mountain",
                        "type": "feature",
                        "name": "Circle of the Land: Mountain",
                        "url": "/api/features/circle-of-the-land-mountain"
                    }
                ],
                "spell": {
                    "index": "stone-shape",
                    "name": "Stone Shape",
                    "url": "/api/spells/stone-shape"
                }
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-7",
                        "type": "level",
                        "name": "Druid 7",
                        "url": "/api/classes/druid/levels/7"
                    },
                    {
                        "index": "circle-of-the-land-mountain",
                        "type": "feature",
                        "name": "Circle of the Land: Mountain",
                        "url": "/api/features/circle-of-the-land-mountain"
                    }
                ],
                "spell": {
                    "index": "stoneskin",
                    "name": "Stoneskin",
                    "url": "/api/spells/stoneskin"
                }
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-9",
                        "type": "level",
                        "name": "Druid 9",
                        "url": "/api/classes/druid/levels/9"
                    },
                    {
                        "index": "circle-of-the-land-mountain",
                        "type": "feature",
                        "name": "Circle of the Land: Mountain",
                        "url": "/api/features/circle-of-the-land-mountain"
                    }
                ],
                "spell": {
                    "index": "passwall",
                    "name": "Passwall",
                    "url": "/api/spells/passwall"
                }
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-9",
                        "type": "level",
                        "name": "Druid 9",
                        "url": "/api/classes/druid/levels/9"
                    },
                    {
                        "index": "circle-of-the-land-mountain",
                        "type": "feature",
                        "name": "Circle of the Land: Mountain",
                        "url": "/api/features/circle-of-the-land-mountain"
                    }
                ],
                "spell": {
                    "index": "wall-of-stone",
                    "name": "Wall of Stone",
                    "url": "/api/spells/wall-of-stone"
                }
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-3",
                        "type": "level",
                        "name": "Druid 3",
                        "url": "/api/classes/druid/levels/3"
                    },
                    {
                        "index": "circle-of-the-land-swamp",
                        "type": "feature",
                        "name": "Circle of the Land: Swamp",
                        "url": "/api/features/circle-of-the-land-swamp"
                    }
                ],
                "spell": {
                    "index": "acid-arrow",
                    "name": "Acid Arrow",
                    "url": "/api/spells/acid-arrow"
                }
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-3",
                        "type": "level",
                        "name": "Druid 3",
                        "url": "/api/classes/druid/levels/3"
                    },
                    {
                        "index": "circle-of-the-land-swamp",
                        "type": "feature",
                        "name": "Circle of the Land: Swamp",
                        "url": "/api/features/circle-of-the-land-swamp"
                    }
                ],
                "spell": {
                    "index": "darkness",
                    "name": "Darkness",
                    "url": "/api/spells/darkness"
                }
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-5",
                        "type": "level",
                        "name": "Druid 5",
                        "url": "/api/classes/druid/levels/5"
                    },
                    {
                        "index": "circle-of-the-land-swamp",
                        "type": "feature",
                        "name": "Circle of the Land: Swamp",
                        "url": "/api/features/circle-of-the-land-swamp"
                    }
                ],
                "spell": {
                    "index": "water-walk",
                    "name": "Water Walk",
                    "url": "/api/spells/water-walk"
                }
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-5",
                        "type": "level",
                        "name": "Druid 5",
                        "url": "/api/classes/druid/levels/5"
                    },
                    {
                        "index": "circle-of-the-land-swamp",
                        "type": "feature",
                        "name": "Circle of the Land: Swamp",
                        "url": "/api/features/circle-of-the-land-swamp"
                    }
                ],
                "spell": {
                    "index": "stinking-cloud",
                    "name": "Stinking Cloud",
                    "url": "/api/spells/stinking-cloud"
                }
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-7",
                        "type": "level",
                        "name": "Druid 7",
                        "url": "/api/classes/druid/levels/7"
                    },
                    {
                        "index": "circle-of-the-land-swamp",
                        "type": "feature",
                        "name": "Circle of the Land: Swamp",
                        "url": "/api/features/circle-of-the-land-swamp"
                    }
                ],
                "spell": {
                    "index": "freedom-of-movement",
                    "name": "Freedom of Movement",
                    "url": "/api/spells/freedom-of-movement"
                }
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-7",
                        "type": "level",
                        "name": "Druid 7",
                        "url": "/api/classes/druid/levels/7"
                    },
                    {
                        "index": "circle-of-the-land-swamp",
                        "type": "feature",
                        "name": "Circle of the Land: Swamp",
                        "url": "/api/features/circle-of-the-land-swamp"
                    }
                ],
                "spell": {
                    "index": "locate-creature",
                    "name": "Locate Creature",
                    "url": "/api/spells/locate-creature"
                }
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-9",
                        "type": "level",
                        "name": "Druid 9",
                        "url": "/api/classes/druid/levels/9"
                    },
                    {
                        "index": "circle-of-the-land-swamp",
                        "type": "feature",
                        "name": "Circle of the Land: Swamp",
                        "url": "/api/features/circle-of-the-land-swamp"
                    }
                ],
                "spell": {
                    "index": "insect-plague",
                    "name": "Insect Plague",
                    "url": "/api/spells/insect-plague"
                }
            },
            {
                "prerequisites": [
                    {
                        "index": "druid-9",
                        "type": "level",
                        "name": "Druid 9",
                        "url": "/api/classes/druid/levels/9"
                    },
                    {
                        "index": "circle-of-the-land-swamp",
                        "type": "feature",
                        "name": "Circle of the Land: Swamp",
                        "url": "/api/features/circle-of-the-land-swamp"
                    }
                ],
                "spell": {
                    "index": "scrying",
                    "name": "Scrying",
                    "url": "/api/spells/scrying"
                }
            }
        ]
    },
    {
        "name": "Life",
        "class": "Cleric",
        "subclass_flavor": "Divine Domain",
        "desc": 
            "The Life domain focuses on the vibrant positive energy--one of the fundamental forces of the universe--that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities, sun gods, gods of healing or endurance, and gods of home and community.",
        "spells": [
            {
                "level": 1,
                "name": "Bless"
            },
            {
                "level": 1,
                "name": "Cure Wounds"
            },
            {
                "level": 3,
                "name": "Lesser Restoration"
            },
            {
                "level": 3,
                "name": "Spiritual Weapon"
            },
            {
                "level": 5,
                "name": "Beacon of Hope"
            },
            {
                "level": 5,
                "name": "Revivify"
            },
            {
                "level": 7,
                "name": "Death Ward"
            },
            {
                "level": 9,
                "name": "Mass Cure Wounds"
            },
            {
                "level": 9,
                "name": "Raise Dead"}
        ]
    },
    {
        "name": "Lore",
        "class": "Bard",
        "subclass_flavor": "Bard College",
        "desc": 
            "Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales. Whether singing folk ballads in taverns or elaborate compositions in royal courts, these bards use their gifts to hold audiences spellbound. When the applause dies down, the audience members might find themselves questioning everything they held to be true, from their faith in the priesthood of the local temple to their loyalty to the king. The loyalty of these bards lies in the pursuit of beauty and truth, not in fealty to a monarch or following the tenets of a deity. A noble who keeps such a bard as a herald or advisor knows that the bard would rather be honest than politic. The college's members gather in libraries and sometimes in actual colleges, complete with classrooms and dormitories, to share their lore with one another. They also meet at festivals or affairs of state, where they can expose corruption, unravel lies, and poke fun at self-important figures of authority."
    },
    {
        "name": "Open Hand",
        "class": "Monk",
        "subclass_flavor": "Monastic Tradition",
        "desc": 
            "Monks of the Way of the Open Hand are the ultimate masters of martial arts combat, whether armed or unarmed. They learn techniques to push and trip their opponents, manipulate ki to heal damage to their bodies, and practice advanced meditation that can protect them from harm.",
    },
    {
        "name": "Thief",
        "class": "Rogue",
        "subclass_flavor": "Roguish Archetype",
        "desc": 
            "You hone your skills in the larcenous arts. Burglars, bandits, cutpurses, and other criminals typically follow this archetype, but so do rogues who prefer to think of themselves as professional treasure seekers, explorers, delvers, and investigators. In addition to improving your agility and stealth, you learn skills useful for delving into ancient ruins, reading unfamiliar languages, and using magic items you normally couldn't employ.",
    }
]

export default subclasses