const spells_categories = [
		{
			"name": "Acid Arrow",
			"desc": "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.",
			"higher_level": "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.",
			"range": "90",
			"components": "V, S, M",
			"material": "Powdered rhubarb leaf and an adder's stomach.",
			"ritual": false,
			"duration": "Instantaneous",
			"concentration": false,
			"casting_time": "1 action",
			"level": 2,
			"attack_type": "ranged",
			"damage_type": "Acid",
			"damage_at_slot_level": "2: 4d4, 3: 5d4, 4: 6d4, 5: 7d4, 6: 8d4, 7: 9d4, 8: 10d4, 9: 11d4",
			"school": "Evocation",
			"classes": ["Wizard"],
			"subclasses": ["Lore","Land"]
		},
		{
			"name": "Acid Splash",
			"desc": "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a dexterity saving throw or take 1d6 acid damage. This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
			"range": "60",
			"components": "V, S",
			"ritual": false,
			"duration": "Instantaneous",
			"concentration": false,
			"casting_time": "1 action",
			"level": 0,
			"damage_type": "Acid",
			"damage_at_character_level": "1: 1d6, 5: 2d6, 11: 3d6, 17: 4d6",
			"dc_type": "DEX",
			"dc_success": "none",
			"school": "Conjuration",
			"classes": ["Sorcerer","Wizard"],
			"subclasses": ["Lore"]
		},
		{
			"name": "Aid",
			"desc": "Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration.",
			"higher_level": "When you cast this spell using a spell slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd.",
			"range": "30",
			"components": "V, S, M",
			"material": "A tiny strip of white cloth.",
			"ritual": false,
			"duration": "8 hours",
			"concentration": false,
			"casting_time": "1 action",
			"level": 2,
			"heal_at_slot_level": "2: 5, 3: 10, 4: 15, 5: 20, 6: 25, 7: 30, 8: 35, 9: 40",
			"school": "Abjuration",
			"classes": ["Cleric","Paladin"],
			"subclasses": ["Lore"]
		},
		{
			"name": "Alarm",
			"desc": "You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible. A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.",
			"range": "30",
			"components": "V, S, M",
			"material": "A tiny bell and a piece of fine silver wire.",
			"ritual": true,
			"duration": "8 hours",
			"concentration": false,
			"casting_time": "1 minute",
			"level": 1,
			"area_of_effect_type": "cube",
			"area_of_effect_size": 20,
			"school": "Abjuration",
			"classes": ["Ranger","Wizard"],
			"subclasses": ["Lore"]
		},
		{
			"name": "Alter Self",
			"desc": "You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one. Aquatic Adaptation. You adapt your body to an aquatic environment, sprouting gills and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed. Change Appearance. You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. You can make yourself appear as a member of another race, though none of your statistics change. You also can't appear as a creature of a different size than you, and your basic shape stays the same; if you're bipedal, you can't use this spell to become quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way again. Natural Weapons. You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 bludgeoning, piercing, or slashing damage, as appropriate to the natural weapon you chose, and you are proficient with your unarmed strikes. Finally, the natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it.",
			"range": "Self",
			"components": "V, S",
			"ritual": false,
			"duration": "Up to 1 hour",
			"concentration": true,
			"casting_time": "1 action",
			"level": 2,
			"school": "Transmutation",
			"classes": ["Sorcerer","Wizard"],
			"subclasses": ["Lore"]
		},
		{
			"name": "Animal Friendship",
			"desc": "This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spells ends.",
			"range": "30",
			"components": "V, S, M",
			"material": "A morsel of food.",
			"ritual": false,
			"duration": "24 hours",
			"concentration": false,
			"casting_time": "1 action",
			"level": 1,
			"dc_type": "WIS",
			"dc_success": "none",
			"school": "Enchantment",
			"classes": ["Bard","Cleric","Druid","Ranger"],
			"subclasses": []
		},
		{
			"name": "Animal Messenger",
			"desc": "By means of this spell, you use an animal to deliver a message. Choose a Tiny beast you can see within range, such as a squirrel, a blue jay, or a bat. You specify a location, which you must have visited, and a recipient who matches a general description, such as \"a man or woman dressed in the uniform of the town guard\" or \"a red-haired dwarf wearing a pointed hat.\" You also speak a message of up to twenty-five words. The target beast travels for the duration of the spell toward the specified location, covering about 50 miles per 24 hours for a flying messenger, or 25 miles for other animals. When the messenger arrives, it delivers your message to the creature that you described, replicating the sound of your voice. The messenger speaks only to a creature matching the description you gave. If the messenger doesn't reach its destination before the spell ends, the message is lost, and the beast makes its way back to where you cast this spell.",
			"higher_level": "If you cast this spell using a spell slot of 3nd level or higher, the duration of the spell increases by 48 hours for each slot level above 2nd.",
			"range": "30",
			"components": "V, S, M",
			"material": "A morsel of food.",
			"ritual": true,
			"duration": "24 hours",
			"concentration": false,
			"casting_time": "1 action",
			"level": 2,
			"school": "Enchantment",
			"classes": ["Bard","Druid","Ranger"],
			"subclasses": ["Lore"]
		},
		{
			"name": "Animal Shapes",
			"desc": "Your magic turns others into beasts. Choose any number of willing creatures that you can see within range. You transform each target into the form of a Large or smaller beast with a challenge rating of 4 or lower. On subsequent turns, you can use your action to transform affected creatures into new forms. The transformation lasts for the duration for each target, or until the target drops to 0 hit points or dies. You can choose a different form for each target. A target's game statistics are replaced by the statistics of the chosen beast, though the target retains its alignment and Intelligence, Wisdom, and Charisma scores. The target assumes the hit points of its new form, and when it reverts to its normal form, it returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it can't speak or cast spells. The target's gear melds into the new form. The target can't activate, wield, or otherwise benefit from any of its equipment.",
			"range": "30",
			"components": "V, S",
			"ritual": false,
			"duration": "Up to 24 hours",
			"concentration": true,
			"casting_time": "1 action",
			"level": 8,
			"school": "Transmutation",
			"classes": ["Druid"],
			"subclasses": []
		},
		{
			"name": "Animate Dead",
			"desc": "This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becomes a skeleton if you chose bones or a zombie if you chose a corpse (the DM has the creature's game statistics). On each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. The creature is under your control for 24 hours, after which it stops obeying any command you've given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell, rather than animating a new one.",
			"higher_level": "When you cast this spell using a spell slot of 4th level or higher, you animate or reassert control over two additional undead creatures for each slot level above 3rd. Each of the creatures must come from a different corpse or pile of bones.",
			"range": "10",
			"components": "V, S, M",
			"material": "A drop of blood, a piece of flesh, and a pinch of bone dust.",
			"ritual": false,
			"duration": "Instantaneous",
			"concentration": false,
			"casting_time": "1 minute",
			"level": 3,
			"school": "Necromancy",
			"classes": ["Cleric","Wizard"],
			"subclasses": ["Lore"]
		},
		{
			"name": "Animate Objects",
			"desc": "Objects come to life at your command. Choose up to ten nonmagical objects within range that are not being worn or carried. Medium targets count as two objects, Large targets count as four objects, Huge targets count as eight objects. You can't animate any object larger than Huge. Each target animates and becomes a creature under your control until the spell ends or until reduced to 0 hit points. As a bonus action, you can mentally command any creature you made with this spell if the creature is within 500 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. An animated object is a construct with AC, hit points, attacks, Strength, and Dexterity determined by its size. Its Constitution is 10 and its Intelligence and Wisdom are 3, and its Charisma is 1. Its speed is 30 feet; if the object lacks legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or a larger object, such as a chain bolted to a wall, its speed is 0. It has blindsight with a radius of 30 feet and is blind beyond that distance. When the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form. If you command an object to attack, it can make a single melee attack against a creature within 5 feet of it. It makes a slam attack with an attack bonus and bludgeoning damage determined by its size. The DM might rule that a specific object inflicts slashing or piercing damage based on its form.",
			"higher_level": "If you cast this spell using a spell slot of 6th level or higher, you can animate two additional objects for each slot level above 5th.",
			"range": "120",
			"components": "V, S",
			"ritual": false,
			"duration": "Up to 1 minute",
			"concentration": true,
			"casting_time": "1 action",
			"level": 5,
			"school": "Transmutation",
			"classes": ["Bard","Sorcerer","Wizard"],
			"subclasses": []
		},
		{
			"name": "Antilife Shell",
			"desc": "A shimmering barrier extends out from you in a 10-foot radius and moves with you, remaining centered on you and hedging out creatures other than undead and constructs. The barrier lasts for the duration. The barrier prevents an affected creature from passing or reaching through. An affected creature can cast spells or make attacks with ranged or reach weapons through the barrier. If you move so that an affected creature is forced to pass through the barrier, the spell ends.",
			"range": "Self",
			"components": "V, S",
			"ritual": false,
			"duration": "Up to 1 hour",
			"concentration": true,
			"casting_time": "1 action",
			"level": 5,
			"area_of_effect_type": "sphere",
			"area_of_effect_size": 10,
			"school": "Abjuration",
			"classes": ["Druid"],
			"subclasses": []
		},
		{
			"name": "Antimagic Field",
			"desc": "A 10-foot-radius invisible sphere of antimagic surrounds you. This area is divorced from the magical energy that suffuses the multiverse. Within the sphere, spells can't be cast, summoned creatures disappear, and even magic items become mundane. Until the spell ends, the sphere moves with you, centered on you. Spells and other magical effects, except those created by an artifact or a deity, are suppressed in the sphere and can't protrude into it. A slot expended to cast a suppressed spell is consumed. While an effect is suppressed, it doesn't function, but the time it spends suppressed counts against its duration. Targeted Effects. Spells and other magical effects, such as magic missile and charm person, that target a creature or an object in the sphere have no effect on that target. Areas of Magic. The area of another spell or magical effect, such as fireball, can't extend into the sphere. If the sphere overlaps an area of magic, the part of the area that is covered by the sphere is suppressed. For example, the flames created by a wall of fire are suppressed within the sphere, creating a gap in the wall if the overlap is large enough. Spells. Any active spell or other magical effect on a creature or an object in the sphere is suppressed while the creature or object is in it. Magic Items. The properties and powers of magic items are suppressed in the sphere. For example, a +1 longsword in the sphere functions as a nonmagical longsword. A magic weapon's properties and powers are suppressed if it is used against a target in the sphere or wielded by an attacker in the sphere. If a magic weapon or a piece of magic ammunition fully leaves the sphere (for example, if you fire a magic arrow or throw a magic spear at a target outside the sphere), the magic of the item ceases to be suppressed as soon as it exits. Magical Travel. Teleportation and planar travel fail to work in the sphere, whether the sphere is the destination or the departure point for such magical travel. A portal to another location, world, or plane of existence, as well as an opening to an extradimensional space such as that created by the rope trick spell, temporarily closes while in the sphere. Creatures and Objects. A creature or object summoned or created by magic temporarily winks out of existence in the sphere. Such a creature instantly reappears once the space the creature occupied is no longer within the sphere. Dispel Magic. Spells and magical effects such as dispel magic have no effect on the sphere. Likewise, the spheres created by different antimagic field spells don't nullify each other.",
			"range": "Self",
			"components": "V, S, M",
			"material": "A pinch of powdered iron or iron filings.",
			"ritual": false,
			"duration": "Up to 1 hour",
			"concentration": true,
			"casting_time": "1 action",
			"level": 8,
			"area_of_effect_type": "sphere",
			"area_of_effect_size": 10,
			"school": "Abjuration",
			"classes": ["Cleric","Wizard"],
			"subclasses": []
		},
		{
			"name": "Antipathy/Sympathy",
			"desc": "This spell attracts or repels creatures of your choice. You target something within range, either a Huge or smaller object or creature or an area that is no larger than a 200-foot cube. Then specify a kind of intelligent creature, such as red dragons, goblins, or vampires. You invest the target with an aura that either attracts or repels the specified creatures for the duration. Choose antipathy or sympathy as the aura's effect. Antipathy. The enchantment causes creatures of the kind you designated to feel an intense urge to leave the area and avoid the target. When such a creature can see the target or comes within 60 feet of it, the creature must succeed on a wisdom saving throw or become frightened. The creature remains frightened while it can see the target or is within 60 feet of it. While frightened by the target, the creature must use its movement to move to the nearest safe spot from which it can't see the target. If the creature moves more than 60 feet from the target and can't see it, the creature is no longer frightened, but the creature becomes frightened again if it regains sight of the target or moves within 60 feet of it. Sympathy. The enchantment causes the specified creatures to feel an intense urge to approach the target while within 60 feet of it or able to see it. When such a creature can see the target or comes within 60 feet of it, the creature must succeed on a wisdom saving throw or use its movement on each of its turns to enter the area or move within reach of the target. When the creature has done so, it can't willingly move away from the target. If the target damages or otherwise harms an affected creature, the affected creature can make a wisdom saving throw to end the effect, as described below. Ending the Effect. If an affected creature ends its turn while not within 60 feet of the target or able to see it, the creature makes a wisdom saving throw. On a successful save, the creature is no longer affected by the target and recognizes the feeling of repugnance or attraction as magical. In addition, a creature affected by the spell is allowed another wisdom saving throw every 24 hours while the spell persists. A creature that successfully saves against this effect is immune to it for 1 minute, after which time it can be affected again.",
			"range": "60",
			"components": "V, S, M",
			"material": "Either a lump of alum soaked in vinegar for the antipathy effect or a drop of honey for the sympathy effect.",
			"ritual": false,
			"duration": "10 days",
			"concentration": false,
			"casting_time": "1 hour",
			"level": 8,
			"area_of_effect_type": "cube",
			"area_of_effect_size": 200,
			"school": "Enchantment",
			"classes": ["Druid","Wizard"],
			"subclasses": []
		},
		{
			"name": "Arcane Eye",
			"desc": "You create an invisible, magical eye within range that hovers in the air for the duration. You mentally receive visual information from the eye, which has normal vision and darkvision out to 30 feet. The eye can look in every direction. As an action, you can move the eye up to 30 feet in any direction. There is no limit to how far away from you the eye can move, but it can't enter another plane of existence. A solid barrier blocks the eye's movement, but the eye can pass through an opening as small as 1 inch in diameter.",
			"range": "30",
			"components": "V, S, M",
			"material": "A bit of bat fur.",
			"ritual": false,
			"duration": "Up to 1 hour",
			"concentration": true,
			"casting_time": "1 action",
			"level": 4,
			"area_of_effect_type": "sphere",
			"area_of_effect_size": 30,
			"school": "Divination",
			"classes": ["Cleric","Wizard"],
			"subclasses": []
		},
		{
			"name": "Arcane Hand",
			"desc": "You create a Large hand of shimmering, translucent force in an unoccupied space that you can see within range. The hand lasts for the spell's duration, and it moves at your command, mimicking the movements of your own hand. The hand is an object that has AC 20 and hit points equal to your hit point maximum. If it drops to 0 hit points, the spell ends. It has a Strength of 26 (+8) and a Dexterity of 10 (+0). The hand doesn't fill its space. When you cast the spell and as a bonus action on your subsequent turns, you can move the hand up to 60 feet and then cause one of the following effects with it. Clenched Fist. The hand strikes one creature or object within 5 feet of it. Make a melee spell attack for the hand using your game statistics. On a hit, the target takes 4d8 force damage. Forceful Hand. The hand attempts to push a creature within 5 feet of it in a direction you choose. Make a check with the hand's Strength contested by the Strength (Athletics) check of the target. If the target is Medium or smaller, you have advantage on the check. If you succeed, the hand pushes the target up to 5 feet plus a number of feet equal to five times your spellcasting ability modifier. The hand moves with the target to remain within 5 feet of it. Grasping Hand. The hand attempts to grapple a Huge or smaller creature within 5 feet of it. You use the hand's Strength score to resolve the grapple. If the target is Medium or smaller, you have advantage on the check. While the hand is grappling the target, you can use a bonus action to have the hand crush it. When you do so, the target takes bludgeoning damage equal to 2d6 + your spellcasting ability modifier. Interposing Hand. The hand interposes itself between you and a creature you choose until you give the hand a different command. The hand moves to stay between you and the target, providing you with half cover against the target. The target can't move through the hand's space if its Strength score is less than or equal to the hand's Strength score. If its Strength score is higher than the hand's Strength score, the target can move toward you through the hand's space, but that space is difficult terrain for the target.",
			"higher_level": "When you cast this spell using a spell slot of 6th level or higher, the damage from the clenched fist option increases by 2d8 and the damage from the grasping hand increases by 2d6 for each slot level above 5th.",
			"range": "120",
			"components": "V, S, M",
			"material": "An eggshell and a snakeskin glove.",
			"ritual": false,
			"duration": "Up to 1 minute",
			"concentration": true,
			"casting_time": "1 action",
			"level": 5,
			"school": "Evocation",
			"classes": ["Wizard"],
			"subclasses": []
		},
		{
			"name": "Arcane Lock",
			"desc": "You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration. You and the creatures you designate when you cast this spell can open the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute. Otherwise, it is impassable until it is broken or the spell is dispelled or suppressed. Casting knock on the object suppresses arcane lock for 10 minutes. While affected by this spell, the object is more difficult to break or force open; the DC to break it or pick any locks on it increases by 10.",
			"range": "Touch",
			"components": "V, S, M",
			"material": "Gold dust worth at least 25gp, which the spell consumes.",
			"ritual": false,
			"duration": "Until dispelled",
			"concentration": false,
			"casting_time": "1 action",
			"level": 2,
			"school": "Abjuration",
			"classes": ["Wizard"],
			"subclasses": ["Lore"]
		},
		{
			"name": "Arcane Sword",
			"desc": "You create a sword-shaped plane of force that hovers within range. It lasts for the duration. When the sword appears, you make a melee spell attack against a target of your choice within 5 feet of the sword. On a hit, the target takes 3d10 force damage. Until the spell ends, you can use a bonus action on each of your turns to move the sword up to 20 feet to a spot you can see and repeat this attack against the same target or a different one.",
			"range": "60",
			"components": "V, S, M",
			"material": "A miniature platinum sword with a grip and pommel of copper and zinc, worth 250 gp.",
			"ritual": false,
			"duration": "Up to 1 minute",
			"concentration": true,
			"casting_time": "1 action",
			"level": 7,
			"attack_type": "melee",
			"damage_type": "Force",
			"damage_at_slot_level": "7: 3d10",
			"school": "Evocation",
			"classes": ["Bard","Wizard"],
			"subclasses": []
		},
		{
			"name": "Arcanist's Magic Aura",
			"desc": "You place an illusion on a creature or an object you touch so that divination spells reveal false information about it. The target can be a willing creature or an object that isn't being carried or worn by another creature. When you cast the spell, choose one or both of the following effects. The effect lasts for the duration. If you cast this spell on the same creature or object every day for 30 days, placing the same effect on it each time, the illusion lasts until it is dispelled. False Aura. You change the way the target appears to spells and magical effects, such as detect magic, that detect magical auras. You can make a nonmagical object appear magical, a magical object appear nonmagical, or change the object's magical aura so that it appears to belong to a specific school of magic that you choose. When you use this effect on an object, you can make the false magic apparent to any creature that handles the item. Mask. You change the way the target appears to spells and magical effects that detect creature types, such as a paladin's Divine Sense or the trigger of a symbol spell. You choose a creature type and other spells and magical effects treat the target as if it were a creature of that type or of that alignment.",
			"range": "Touch",
			"components": "V, S, M",
			"material": "A small square of silk.",
			"ritual": false,
			"duration": "24 hours",
			"concentration": false,
			"casting_time": "1 action",
			"level": 2,
			"school": "Illusion",
			"classes": ["Wizard"],
			"subclasses": ["Lore"]
		},
		{
			"name": "Astral Projection",
			"desc": "You and up to eight willing creatures within range project your astral bodies into the Astral Plane (the spell fails and the casting is wasted if you are already on that plane). The material body you leave behind is unconscious and in a state of suspended animation; it doesn't need food or air and doesn't age. Your astral body resembles your mortal form in almost every way, replicating your game statistics and possessions. The principal difference is the addition of a silvery cord that extends from between your shoulder blades and trails behind you, fading to invisibility after 1 foot. This cord is your tether to your material body. As long as the tether remains intact, you can find your way home. If the cord is cut--something that can happen only when an effect specifically states that it does--your soul and body are separated, killing you instantly. Your astral form can freely travel through the Astral Plane and can pass through portals there leading to any other plane. If you enter a new plane or return to the plane you were on when casting this spell, your body and possessions are transported along the silver cord, allowing you to re-enter your body as you enter the new plane. Your astral form is a separate incarnation. Any damage or other effects that apply to it have no effect on your physical body, nor do they persist when you return to it. The spell ends for you and your companions when you use your action to dismiss it. When the spell ends, the affected creature returns to its physical body, and it awakens. The spell might also end early for you or one of your companions. A successful dispel magic spell used against an astral or physical body ends the spell for that creature. If a creature's original body or its astral form drops to 0 hit points, the spell ends for that creature. If the spell ends and the silver cord is intact, the cord pulls the creature's astral form back to its body, ending its state of suspended animation. If you are returned to your body prematurely, your companions remain in their astral forms and must find their own way back to their bodies, usually by dropping to 0 hit points.",
			"range": "10",
			"components": "V, S, M",
			"material": "For each creature you affect with this spell, you must provide one jacinth worth at least 1,000gp and one ornately carved bar of silver worth at least 100gp, all of which the spell consumes.",
			"ritual": false,
			"duration": "Special",
			"concentration": false,
			"casting_time": "1 hour",
			"level": 9,
			"school": "Necromancy",
			"classes": ["Cleric","Warlock", "Wizard"],
			"subclasses": []
		},
		{
			"name": "Augury",
			"desc": "By casting gem-inlaid sticks, rolling dragon bones, laying out ornate cards, or employing some other divining tool, you receive an omen from an otherworldly entity about the results of a specific course of action that you plan to take within the next 30 minutes. The DM chooses from the following possible omens:- Weal, for good results, - Woe, for bad results, - Weal and woe, for both good and bad results, - Nothing, for results that aren't especially good or bad. The spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion. If you cast the spell two or more times before completing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The DM makes this roll in secret.",
			"range": "Self",
			"components": "V, S, M",
			"material": "Specially marked sticks, bones, or similar tokens worth at least 25gp.",
			"ritual": true,
			"duration": "Instantaneous",
			"concentration": false,
			"casting_time": "1 minute",
			"level": 2,
			"school": "Divination",
			"classes": ["Cleric"],
			"subclasses": ["Lore"]
		},
		{
			"name": "Awaken",
			"desc": "After spending the casting time tracing magical pathways within a precious gemstone, you touch a Huge or smaller beast or plant. The target must have either no Intelligence score or an Intelligence of 3 or less. The target gains an Intelligence of 10. The target also gains the ability to speak one language you know. If the target is a plant, it gains the ability to move its limbs, roots, vines, creepers, and so forth, and it gains senses similar to a human's. Your DM chooses statistics appropriate for the awakened plant, such as the statistics for the awakened shrub or the awakened tree. The awakened beast or plant is charmed by you for 30 days or until you or your companions do anything harmful to it. When the charmed condition ends, the awakened creature chooses whether to remain friendly to you, based on how you treated it while it was charmed.",
			"range": "Touch",
			"components": "V, S, M",
			"material": "An agate worth at least 1,000 gp, which the spell consumes.",
			"ritual": false,
			"duration": "Instantaneous",
			"concentration": false,
			"casting_time": "8 hours",
			"level": 5,
			"school": "Transmutation",
			"classes": ["Bard","Druid"],
			"subclasses": []
		},
		{
			"name": "Bane",
			"desc": "Up to three creatures of your choice that you can see within range must make charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw.",
			"higher_level": "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
			"range": "30",
			"components": "V, S, M",
			"material": "A drop of blood.",
			"ritual": false,
			"duration": "Up to 1 minute",
			"concentration": true,
			"casting_time": "1 action",
			"level": 1,
			"dc_type": "CHA",
			"dc_success": "none",
			"school": "Enchantment",
			"classes": ["Bard","Cleric"],
			"subclasses": ["Lore"]
		},
		{
			"name": "Banishment",
			"desc": "You attempt to send one creature that you can see within range to another plane of existence. The target must succeed on a charisma saving throw or be banished. If the target is native to the plane of existence you're on, you banish the target to a harmless demiplane. While there, the target is incapacitated. The target remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. If the target is native to a different plane of existence than the one you're on, the target is banished with a faint popping noise, returning to its home plane. If the spell ends before 1 minute has passed, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. Otherwise, the target doesn't return.",
			"higher_level": "When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th.",
			"range": "60",
			"components": "V, S, M",
			"material": "An item distasteful to the target.",
			"ritual": false,
			"duration": "Up to 1 minute",
			"concentration": true,
			"casting_time": "1 action",
			"level": 4,
			"dc_type": "CHA",
			"dc_success": "none",
			"school": "Abjuration",
			"classes": ["Cleric","Paladin","Sorcerer","Warlock","Wizard"],
			"subclasses": []
		},
		{
			"name": "Barkskin",
			"desc": "You touch a willing creature. Until the spell ends, the target's skin has a rough, bark-like appearance, and the target's AC can't be less than 16, regardless of what kind of armor it is wearing.",
			"range": "Touch",
			"components": "V, S, M",
			"material": "A handful of oak bark.",
			"ritual": false,
			"duration": "Up to 1 hour",
			"concentration": true,
			"casting_time": "1 action",
			"level": 2,
			"school": "Transmutation",
			"classes": ["Druid","Ranger"],
			"subclasses": ["Lore","Land"]
		},
		{
			"name": "Beacon of Hope",
		},
		{
			"name": "Bestow Curse",
		},
		{
			"name": "Black Tentacles",
		},
		{
			"name": "Blade Barrier",
		},
		{
			"name": "Bless",
		},
		{
			"name": "Blight",
		},
		{
			"name": "Blindness/Deafness",
		},
		{
			"name": "Blink",
		},
		{
			"name": "Blur",
		},
		{
			"name": "Branding Smite",
		},
		{
			"name": "Burning Hands",
		},
		{
			"name": "Call Lightning",
		},
		{
			"name": "Calm Emotions",
		},
		{
			"name": "Chain Lightning",
		},
		{
			"name": "Charm Person",
		},
		{
			"name": "Chill Touch",
		},
		{
			"name": "Circle of Death",
		},
		{
			"name": "Clairvoyance",
		},
		{
			"name": "Clone",
		},
		{
			"name": "Cloudkill",
		},
		{
			"name": "Color Spray",
		},
		{
			"name": "Command",
		},
		{
			"name": "Commune",
		},
		{
			"name": "Commune with Nature",
		},
		{
			"name": "Comprehend Languages",
		},
		{
			"name": "Compulsion",
		},
		{
			"name": "Cone of Cold",
		},
		{
			"name": "Confusion",
		},
		{
			"name": "Conjure Animals",
		},
		{
			"name": "Conjure Celestial",
		},
		{
			"name": "Conjure Elemental",
		},
		{
			"name": "Conjure Fey",
		},
		{
			"name": "Conjure Minor Elementals",
		},
		{
			"name": "Conjure Woodland Beings",
		},
		{
			"name": "Contact Other Plane",
		},
		{
			"name": "Contagion",
		},
		{
			"name": "Contingency",
		},
		{
			"name": "Continual Flame",
		},
		{
			"name": "Control Water",
		},
		{
			"name": "Control Weather",
		},
		{
			"name": "Counterspell",
		},
		{
			"name": "Create Food and Water",
		},
		{
			"name": "Create or Destroy Water",
		},
		{
			"name": "Create Undead",
		},
		{
			"name": "Creation",
		},
		{
			"name": "Cure Wounds",
		},
		{
			"name": "Dancing Lights",
		},
		{
			"name": "Darkness",
		},
		{
			"name": "Darkvision",
		},
		{
			"name": "Daylight",
		},
		{
			"name": "Death Ward",
		},
		{
			"name": "Delayed Blast Fireball",
		},
		{
			"name": "Demiplane",
		},
		{
			"name": "Detect Evil and Good",
		},
		{
			"name": "Detect Magic",
		},
		{
			"name": "Detect Poison and Disease",
		},
		{
			"name": "Detect Thoughts",
		},
		{
			"name": "Dimension Door",
		},
		{
			"name": "Disguise Self",
		},
		{
			"name": "Disintegrate",
		},
		{
			"name": "Dispel Evil and Good",
		},
		{
			"name": "Dispel Magic",
		},
		{
			"name": "Divination",
		},
		{
			"name": "Divine Favor",
		},
		{
			"name": "Divine Word",
		},
		{
			"name": "Dominate Beast",
		},
		{
			"name": "Dominate Monster",
		},
		{
			"name": "Dominate Person",
		},
		{
			"name": "Dream",
		},
		{
			"name": "Druidcraft",
		},
		{
			"name": "Earthquake",
		},
		{
			"name": "Eldritch Blast",
		},
		{
			"name": "Enhance Ability",
		},
		{
			"name": "Enlarge/Reduce",
		},
		{
			"name": "Entangle",
		},
		{
			"name": "Enthrall",
		},
		{
			"name": "Etherealness",
		},
		{
			"name": "Expeditious Retreat",
		},
		{
			"name": "Eyebite",
		},
		{
			"name": "Fabricate",
		},
		{
			"name": "Faerie Fire",
		},
		{
			"name": "Faithful Hound",
		},
		{
			"name": "False Life",
		},
		{
			"name": "Fear",
		},
		{
			"name": "Feather Fall",
		},
		{
			"name": "Feeblemind",
		},
		{
			"name": "Find Familiar",
		},
		{
			"name": "Find Steed",
		},
		{
			"name": "Find the Path",
		},
		{
			"name": "Find Traps",
		},
		{
			"name": "Finger of Death",
		},
		{
			"name": "Fire Bolt",
		},
		{
			"name": "Fire Shield",
		},
		{
			"name": "Fire Storm",
		},
		{
			"name": "Fireball",
		},
		{
			"name": "Flame Blade",
		},
		{
			"name": "Flame Strike",
		},
		{
			"name": "Flaming Sphere",
		},
		{
			"name": "Flesh to Stone",
		},
		{
			"name": "Floating Disk",
		},
		{
			"name": "Fly",
		},
		{
			"name": "Fog Cloud",
		},
		{
			"name": "Forbiddance",
		},
		{
			"name": "Forcecage",
		},
		{
			"name": "Foresight",
		},
		{
			"name": "Freedom of Movement",
		},
		{
			"name": "Freezing Sphere",
		},
		{
			"name": "Gaseous Form",
		},
		{
			"name": "Gate",
		},
		{
			"name": "Geas",
		},
		{
			"name": "Gentle Repose",
		},
		{
			"name": "Giant Insect",
		},
		{
			"name": "Glibness",
		},
		{
			"name": "Globe of Invulnerability",
		},
		{
			"name": "Glyph of Warding",
		},
		{
			"name": "Goodberry",
		},
		{
			"name": "Grease",
		},
		{
			"name": "Greater Invisibility",
		},
		{
			"name": "Greater Restoration",
		},
		{
			"name": "Guardian of Faith",
		},
		{
			"name": "Guards and Wards",
		},
		{
			"name": "Guidance",
		},
		{
			"name": "Guiding Bolt",
		},
		{
			"name": "Gust of Wind",
		},
		{
			"name": "Hallow",
		},
		{
			"name": "Hallucinatory Terrain",
		},
		{
			"name": "Harm",
		},
		{
			"name": "Haste",
		},
		{
			"name": "Heal",
		},
		{
			"name": "Healing Word",
		},
		{
			"name": "Heat Metal",
		},
		{
			"name": "Hellish Rebuke",
		},
		{
			"name": "Heroes' Feast",
		},
		{
			"name": "Heroism",
		},
		{
			"name": "Hideous Laughter",
		},
		{
			"name": "Hold Monster",
		},
		{
			"name": "Hold Person",
		},
		{
			"name": "Holy Aura",
		},
		{
			"name": "Hunter's Mark",
		},
		{
			"name": "Hypnotic Pattern",
		},
		{
			"name": "Ice Storm",
		},
		{
			"name": "Identify",
		},
		{
			"name": "Illusory Script",
		},
		{
			"name": "Imprisonment",
		},
		{
			"name": "Incendiary Cloud",
		},
		{
			"name": "Inflict Wounds",
		},
		{
			"name": "Insect Plague",
		},
		{
			"name": "Instant Summons",
		},
		{
			"name": "Invisibility",
		},
		{
			"name": "Irresistible Dance",
		},
		{
			"name": "Jump",
		},
		{
			"name": "Knock",
		},
		{
			"name": "Legend Lore",
		},
		{
			"name": "Lesser Restoration",
		},
		{
			"name": "Levitate",
		},
		{
			"name": "Light",
		},
		{
			"name": "Lightning Bolt",
		},
		{
			"name": "Locate Animals or Plants",
		},
		{
			"name": "Locate Creature",
		},
		{
			"name": "Locate Object",
		},
		{
			"name": "Longstrider",
		},
		{
			"name": "Mage Armor",
		},
		{
			"name": "Mage Hand",
		},
		{
			"name": "Magic Circle",
		},
		{
			"name": "Magic Jar",
		},
		{
			"name": "Magic Missile",
		},
		{
			"name": "Magic Mouth",
		},
		{
			"name": "Magic Weapon",
		},
		{
			"name": "Magnificent Mansion",
		},
		{
			"name": "Major Image",
		},
		{
			"name": "Mass Cure Wounds",
		},
		{
			"name": "Mass Heal",
		},
		{
			"name": "Mass Healing Word",
		},
		{
			"name": "Mass Suggestion",
		},
		{
			"name": "Maze",
		},
		{
			"name": "Meld into Stone",
		},
		{
			"name": "Mending",
		},
		{
			"name": "Message",
		},
		{
			"name": "Meteor Swarm",
		},
		{
			"name": "Mind Blank",
		},
		{
			"name": "Minor Illusion",
		},
		{
			"name": "Mirage Arcane",
		},
		{
			"name": "Mirror Image",
		},
		{
			"name": "Mislead",
		},
		{
			"name": "Misty Step",
		},
		{
			"name": "Modify Memory",
		},
		{
			"name": "Moonbeam",
		},
		{
			"name": "Move Earth",
		},
		{
			"name": "Nondetection",
		},
		{
			"name": "Pass without Trace",
		},
		{
			"name": "Passwall",
		},
		{
			"name": "Phantasmal Killer",
		},
		{
			"name": "Phantom Steed",
		},
		{
			"name": "Planar Ally",
		},
		{
			"name": "Planar Binding",
		},
		{
			"name": "Plane Shift",
		},
		{
			"name": "Plant Growth",
		},
		{
			"name": "Poison Spray",
		},
		{
			"name": "Polymorph",
		},
		{
			"name": "Power Word Kill",
		},
		{
			"name": "Power Word Stun",
		},
		{
			"name": "Prayer of Healing",
		},
		{
			"name": "Prestidigitation",
		},
		{
			"name": "Prismatic Spray",
		},
		{
			"name": "Prismatic Wall",
		},
		{
			"name": "Private Sanctum",
		},
		{
			"name": "Produce Flame",
		},
		{
			"name": "Programmed Illusion",
		},
		{
			"name": "Project Image",
		},
		{
			"name": "Protection from Energy",
		},
		{
			"name": "Protection from Evil and Good",
		},
		{
			"name": "Protection from Poison",
		},
		{
			"name": "Purify Food and Drink",
		},
		{
			"name": "Raise Dead",
		},
		{
			"name": "Ray of Enfeeblement",
		},
		{
			"name": "Ray of Frost",
		},
		{
			"name": "Regenerate",
		},
		{
			"name": "Reincarnate",
		},
		{
			"name": "Remove Curse",
		},
		{
			"name": "Resilient Sphere",
		},
		{
			"name": "Resistance",
		},
		{
			"name": "Resurrection",
		},
		{
			"name": "Reverse Gravity",
		},
		{
			"name": "Revivify",
		},
		{
			"name": "Rope Trick",
		},
		{
			"name": "Sacred Flame",
		},
		{
			"name": "Sanctuary",
		},
		{
			"name": "Scorching Ray",
		},
		{
			"name": "Scrying",
		},
		{
			"name": "Secret Chest",
		},
		{
			"name": "See Invisibility",
		},
		{
			"name": "Seeming",
		},
		{
			"name": "Sending",
		},
		{
			"name": "Sequester",
		},
		{
			"name": "Shapechange",
		},
		{
			"name": "Shatter",
		},
		{
			"name": "Shield",
		},
		{
			"name": "Shield of Faith",
		},
		{
			"name": "Shillelagh",
		},
		{
			"name": "Shocking Grasp",
		},
		{
			"name": "Silence",
		},
		{
			"name": "Silent Image",
		},
		{
			"name": "Simulacrum",
		},
		{
			"name": "Sleep",
		},
		{
			"name": "Sleet Storm",
		},
		{
			"name": "Slow",
		},
		{
			"name": "Spare the Dying",
		},
		{
			"name": "Speak with Animals",
		},
		{
			"name": "Speak with Dead",
		},
		{
			"name": "Speak with Plants",
		},
		{
			"name": "Spider Climb",
		},
		{
			"name": "Spike Growth",
		},
		{
			"name": "Spirit Guardians",
		},
		{
			"name": "Spiritual Weapon",
		},
		{
			"name": "Stinking Cloud",
		},
		{
			"name": "Stone Shape",
		},
		{
			"name": "Stoneskin",
		},
		{
			"name": "Storm of Vengeance",
		},
		{
			"name": "Suggestion",
		},
		{
			"name": "Sunbeam",
		},
		{
			"name": "Sunburst",
		},
		{
			"name": "Symbol",
		},
		{
			"name": "Telekinesis",
		},
		{
			"name": "Telepathic Bond",
		},
		{
			"name": "Teleport",
		},
		{
			"name": "Teleportation Circle",
		},
		{
			"name": "Thaumaturgy",
		},
		{
			"name": "Thunderwave",
		},
		{
			"name": "Time Stop",
		},
		{
			"name": "Tiny Hut",
		},
		{
			"name": "Tongues",
		},
		{
			"name": "Transport via Plants",
		},
		{
			"name": "Tree Stride",
		},
		{
			"name": "True Polymorph",
		},
		{
			"name": "True Resurrection",
		},
		{
			"name": "True Seeing",
		},
		{
			"name": "True Strike",
		},
		{
			"name": "Unseen Servant",
		},
		{
			"name": "Vampiric Touch",
		},
		{
			"name": "Vicious Mockery",
		},
		{
			"name": "Wall of Fire",
		},
		{
			"name": "Wall of Force",
		},
		{
			"name": "Wall of Ice",
		},
		{
			"name": "Wall of Stone",
		},
		{
			"name": "Wall of Thorns",
		},
		{
			"name": "Warding Bond",
		},
		{
			"name": "Water Breathing",
		},
		{
			"name": "Water Walk",
		},
		{
			"name": "Web",
		},
		{
			"name": "Weird",
		},
		{
			"name": "Wind Walk",
		},
		{
			"name": "Wind Wall",
		},
		{
			"name": "Wish",
		},
		{
			"name": "Word of Recall",
		},
		{
			"name": "Zone of Truth",
		}
	]

export default spells_categories