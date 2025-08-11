ServerEvents.recipes(event => {
    event.shaped(
        Item.of('wardrobe:taiga_helmet', 1), //"Cool crafts(indeedy)" 
        [
            ' B ',
            'BAB'
        ],
        {
            A: 'minecraft:leather_helmet',
            B: '#minecraft:wool'
        }
    );
    event.shaped(
        Item.of('wardrobe:taiga_helmet', 1), 
        [
            ' B ',
            'BAB'
        ],
        {
            A: 'minecraft:leather_helmet',
            B: 'cold_sweat:goat_fur'
        }
    );
    event.shaped(
        Item.of('wardrobe:taiga_chestplate', 1), 
        [
            ' B ',
            'BAB'
        ],
        {
            A: 'minecraft:leather_chestplate',
            B: '#minecraft:wool'
        }
    );
    event.shaped(
        Item.of('wardrobe:taiga_chestplate', 1), 
        [
            ' B ',
            'BAB'
        ],
        {
            A: 'minecraft:leather_chestplate',
            B: 'cold_sweat:goat_fur'
        }
    );
    event.shaped(
        Item.of('wardrobe:taiga_leggings', 1), 
        [
            ' B ',
            'BAB'
        ],
        {
            A: 'minecraft:leather_leggings',
            B: '#minecraft:wool'
        }
    );
    event.shaped(
        Item.of('wardrobe:taiga_leggings', 1), 
        [
            ' B ',
            'BAB'
        ],
        {
            A: 'minecraft:leather_leggings',
            B: 'cold_sweat:goat_fur'
        }
    );
    event.shaped(
        Item.of('wardrobe:taiga_boots', 1), 
        [
            ' B ',
            'BAB'
        ],
        {
            A: 'minecraft:leather_boots',
            B: '#minecraft:wool'
        }
    );
    event.shaped(
        Item.of('wardrobe:taiga_boots', 1), 
        [
            ' B ',
            'BAB'
        ],
        {
            A: 'minecraft:leather_boots',
            B: 'cold_sweat:goat_fur'
        }
    );
    event.shaped(
        Item.of('cold_sweat:hearth', 1), 
        [
            ' A ',
            'BBB',
            'CDC'
        ],
        {
            A: 'cold_sweat:smokestack',
            B: 'minecraft:leather',
            C: 'kubejs:sealed_mechanism',
            D: 'cold_sweat:boiler'
        }
    );
    event.shaped(
        Item.of('simpleradio:spuddie_talkie', 1), //radio stuff bzz bzz welcum Alastor
        [
            ' B ',
            'CA '
        ],
        {
            A: 'minecraft:potato',
            B: 'createaddition:copper_wire',
            C: 'minecraft:iron_nugget'
        }
    );
    event.shaped(
        Item.of('simpleradio:radiosmither', 1), 
        [
            ' A ',
            ' B '
        ],
        {
            A: 'create:display_link',
            B: 'minecraft:polished_andesite'
        }
    );
    event.shaped(
        Item.of('create:transmitter', 1), 
        [
            ' C ',
            ' B ',
            ' A '
        ],
        {
            A: 'kubejs:radio_mechanism',
            B: 'vintageimprovements:copper_spring',
            C: 'minecraft:redstone_torch',
        }
    );
    event.shaped(
        Item.of('simpleradio:transceiver', 1), 
        [
            'CAC',
            'ABA',
            ' A '
        ],
        {
            A: '#minecraft:planks',
            B: 'kubejs:radio_mechanism',
            C: 'minecraft:redstone_torch',
        }
    );
    event.shaped(
        Item.of('simpleradio:frequencer', 1), 
        [
            ' A ',
            ' B '
        ],
        {
            A: 'kubejs:radio_mechanism',
            B: 'minecraft:polished_deepslate'
        }
    );
    event.shaped(
        Item.of('simpleradio:speaker', 1), 
        [
            ' B ',
            'BAB',
            ' B '
        ],
        {
            A: 'kubejs:radio_mechanism',
            B: 'create:iron_sheet'
        }
    );
    event.shaped(
        Item.of('simpleradio:microphone', 1), 
        [
            ' A ',
            ' B '
        ],
        {
            A: 'kubejs:radio_mechanism',
            B: 'create:andesite_alloy'
        }
    );
    event.shaped(
        Item.of('simpleradio:radio', 1), 
        [
            '   ',
            'CD ',
            'AB '
        ],
        {
            A: 'create:brass_casing',
            B: 'simpleradio:speaker',
            C: 'minecraft:redstone_torch',
            D: 'simpleradio:microphone'
        }
    );
    event.shaped(
        Item.of('kubejs:kinetic_mechanism', 1), //kinetic stuff(boring)
        [
            'AB ',
            'CD ',
            '   '
        ],
        {
            A: 'create:large_cogwheel',
            B: 'create:cogwheel',
            C: '#minecraft:wooden_slabs',
            D: 'create:andesite_alloy'
        }
    );
    event.shaped(
        Item.of('kubejs:sealed_mechanism', 1), 
        [
            'BAB',
            'CD ',
            '   '
        ],
        {
            A: 'kubejs:kinetic_mechanism',
            B: 'thermal:cured_rubber',
            C: 'create:cogwheel',
            D: 'create:large_cogwheel'
        }
    );
    event.shaped(
        Item.of('create:packager', 1), 
        [
            ' C ',
            'CDC',
            'BAB'
        ],
        {
            A: 'kubejs:kinetic_mechanism',
            B: 'minecraft:redstone',
            C: 'minecraft:iron_ingot',
            D: 'create:cardboard_block'
        }
    );
    event.shaped(
        Item.of('create:deployer', 1), 
        [
            'EAE',
            'DBD',
            ' C '
        ],
        {
            A: 'create:piston_extension_pole',
            B: 'create:andesite_casing',
            C: 'create:brass_hand',
            D: 'kubejs:kinetic_mechanism',
            E: 'vintageimprovements:iron_spring'
        }
    );
    event.shaped(
        Item.of('create:mechanical_harvester', 1), 
        [
            'CAC',
            'CAC',
            'DBD'
        ],
        {
            A: '#forge:plates/iron',
            B: 'create:andesite_casing',
            C: 'create:andesite_alloy',
            D: 'kubejs:kinetic_mechanism'
        }
    );
    event.shaped(
        Item.of('create:mechanical_mixer', 1), 
        [
            ' A ',
            'DBD',
            ' C '
        ],
        {
            A: 'create:cogwheel',
            B: 'create:andesite_casing',
            C: 'create:whisk',
            D: 'kubejs:kinetic_mechanism'
        }
    );
    event.shaped(
        Item.of('create:encased_fan', 1), 
        [
            ' A ',
            'DBD',
            ' C '
        ],
        {
            A: 'create:shaft',
            B: 'create:andesite_casing',
            C: 'create:propeller',
            D: 'kubejs:kinetic_mechanism'
        }
    );
    event.shaped(
        Item.of('create:windmill_bearing', 1), 
        [
            ' A ',
            'DBD',
            ' C '
        ],
        {
            A: '#minecraft:wooden_slabs',
            B: '#balm:stones',
            C: 'create:shaft',
            D: 'kubejs:kinetic_mechanism'

        }
    );
    event.shaped(
        Item.of('create:mechanical_drill', 1), 
        [
            ' A ',
            'DBD',
            ' C '
        ],
        {
            A: 'thermal:drill_head',
            B: 'create:andesite_casing',
            C: 'create:shaft',
            D: 'kubejs:kinetic_mechanism'

        }
    );
    event.shaped(
        Item.of('create:mechanical_saw', 1), 
        [
            ' A ',
            'DBD',
            ' C '
        ],
        {
            A: 'thermal:saw_blade',
            B: 'create:andesite_casing',
            C: 'create:shaft',
            D: 'kubejs:kinetic_mechanism'

        }
    );
    event.shaped(
        Item.of('sliceanddice:slicer', 1), 
        [
            ' A ',
            'DBD',
            ' C '
        ],
        {
            A: 'create:cogwheel',
            B: 'create:andesite_casing',
            C: 'create:turntable',
            D: 'kubejs:kinetic_mechanism'

        }
    );
    event.shaped(
        Item.of('create:mechanical_press', 1), 
        [
            'EAE',
            'DBD',
            ' C '
        ],
        {
            A: 'create:piston_extension_pole',
            B: 'create:andesite_casing',
            C: 'minecraft:iron_block',
            D: 'kubejs:kinetic_mechanism',
            E: 'vintageimprovements:iron_spring'

        }
    );
    event.shaped(
        Item.of('create:rope_pulley', 1), 
        [
            ' A ',
            'DBD',
            ' C '
        ],
        {
            A: 'create:andesite_casing',
            B: '#scguns:weak_filter',
            C: '#forge:plates/iron',
            D: 'kubejs:kinetic_mechanism'

        }
    );
    event.shaped(
        Item.of('create:mechanical_bearing', 1), 
        [
            ' A ',
            'DBD',
            ' C '
        ],
        {
            A: '#minecraft:wooden_slabs',
            B: 'create:andesite_casing',
            C: 'create:shaft',
            D: 'kubejs:kinetic_mechanism'

        }
    );
    event.shaped(
        Item.of('vintageimprovements:curving_press', 1), 
        [
            '   ',
            ' A ',
            'CBC'
        ],
        {
            A: 'create:piston_extension_pole',
            B: 'create:andesite_casing',
            C: 'kubejs:kinetic_mechanism'

        }
    );
    event.shaped(
        Item.of('create:elevator_pulley', 1), 
        [
            'DBD',
            ' C ',
            ' A '
        ],
        {
            A: 'create:iron_sheet',
            B: 'create:brass_casing',
            C: 'minecraft:dried_kelp_block',
            D: 'create:precision_mechanism'

        }
    );
    event.shaped(
        Item.of('create:clockwork_bearing', 1), 
        [
            ' C ',
            'DBD',
            ' A '
        ],
        {
            A: 'create:electron_tube',
            B: 'create:brass_casing',
            C: '#minecraft:wooden_slabs',
            D: 'create:precision_mechanism'

        }
    );
    event.shaped(
        Item.of('create:mechanical_piston', 1), 
        [
            ' A ',
            'DBD',
            'ECE'
        ],
        {
            A: '#minecraft:wooden_slabs',
            B: 'create:andesite_casing',
            C: 'create:piston_extension_pole',
            D: 'kubejs:kinetic_mechanism',
            E: 'vintageimprovements:iron_spring'

        }
    );
    event.shaped(
        Item.of('thermal:drill_head', 1), 
        [
            ' A ',
            'ABA',
            '   '
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'create:andesite_alloy',
        }
    );
    event.shaped(
        Item.of('vintageimprovements:spring_coiling_machine_wheel', 1), 
        [
            ' B ',
            'BAB',
            ' B '
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'create:andesite_alloy',
        }
    );
    event.shaped(
        Item.of('thermal:saw_blade', 1), 
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'create:iron_sheet',
            B: 'create:andesite_alloy',
        }
    );
    event.shaped(
        Item.of('create:weighted_ejector', 1), 
        [
            ' A ',
            'DBD',
            ' C '
        ],
        {
            A: '#forge:plates/gold',
            B: 'create:andesite_casing',
            C: 'create:cogwheel',
            D: 'kubejs:kinetic_mechanism'
        }
    );
    event.shaped(
        Item.of('create:mechanical_crafter', 1), 
        [
            ' A ',
            'DBD',
            'ECE'
        ],
        {
            A: 'create:electron_tube',
            B: 'create:brass_casing',
            C: 'minecraft:crafting_table',
            D: 'create:precision_mechanism',
            E: 'create:cogwheel'
        }
    );
    event.shaped(
        Item.of('vintageimprovements:belt_grinder', 1), 
        [
            ' A ',
            'DBD',
            ' C '
        ],
        {
            A: 'vintageimprovements:grinder_belt',
            B: 'create:andesite_casing',
            C: 'create:shaft',
            D: 'kubejs:kinetic_mechanism'

        }
    );
    event.shaped(
        Item.of('create:mechanical_roller', 1), 
        [
            ' A ',
            'DBD',
            ' C '
        ],
        {
            A: 'create:electron_tube',
            B: 'create:andesite_casing',
            C: 'create:crushing_wheel',
            D: 'kubejs:kinetic_mechanism'

        }
    );
    event.shaped(
        Item.of('thermal:device_fisher', 1), 
        [
            ' A ',
            'DBD',
            ' C '
        ],
        {
            A: 'thermal:device_fisher',
            B: 'create:andesite_casing',
            C: 'create:cogwheel',
            D: 'kubejs:kinetic_mechanism'

        }
    );
    event.shaped(
        Item.of('thermal:device_composter', 1), 
        [
            'A A',
            'A A',
            'DBD'
        ],
        {
            A: '#minecraft:planks',
            B: 'create:propeller',
            C: 'create:andesite_alloy',
            D: 'kubejs:kinetic_mechanism'
        }
    );
    event.shaped(
        Item.of('thermal:device_tree_extractor', 1), 
        [
            ' A ',
            'DCD',
            ' B '
        ],
        {
            A: 'create:fluid_pipe',
            B: 'create:andesite_casing',
            C: 'create:fluid_tank',
            D: 'kubejs:kinetic_mechanism'

        }
    );
    event.shaped(
        Item.of('create:portable_storage_interface', 1), 
        [
            'BA ',
            'C  ',
            '   '
        ],
        {
            A: 'create:chute',
            B: 'create:andesite_casing',
            C: 'kubejs:kinetic_mechanism'
        }
    );
    event.shaped(
        Item.of('create:portable_fluid_interface', 1), //LIQUIDY STUFF ~~MM,  no male liquid tho ):
        [
            'BA ',
            'C  ',
            '   '
        ],
        {
            A: 'create:chute',
            B: 'create:copper_casing',
            C: 'kubejs:sealed_mechanism'
        }
    );
    event.shaped(
        Item.of('sliceanddice:sprinkler', 1), 
        [
            ' D ',
            'ACA',
            'ABA'
        ],
        {
            A: 'create:copper_sheet',
            B: 'minecraft:iron_bars',
            C: 'create:fluid_pipe',
            D: 'kubejs:sealed_mechanism'
        }
    );
    event.shaped(
        Item.of('create:hose_pulley', 1), 
        [
            'DBD',
            ' C ',
            ' A '
        ],
        {
            A: 'create:copper_sheet',
            B: 'create:copper_casing',
            C: 'minecraft:dried_kelp_block',
            D: 'kubejs:sealed_mechanism'

        }
    );
    event.shaped(
        Item.of('create:smart_fluid_pipe', 1), 
        [
            ' C ',
            ' BD',
            ' A '
        ],
        {
            A: 'create:electron_tube',
            B: 'create:fluid_pipe',
            C: 'create:brass_sheet',
            D: 'kubejs:sealed_mechanism'

        }
    );
    event.shaped(
        Item.of('create:spout', 1), 
        [
            'CAC',
            ' B ',
            '   '
        ],
        {
            A: 'create:fluid_tank',
            B: 'minecraft:dried_kelp',
            C: 'kubejs:sealed_mechanism'
        }
    );
    event.shaped(
        Item.of('create:cuckoo_clock', 1), 
        [
            ' C ',
            'DBD',
            ' A '
        ],
        {
            A: 'minecraft:clock',
            B: 'create:andesite_casing',
            C: '#minecraft:planks',
            D: 'create:precision_mechanism'
        }
    );
    event.shaped(
        Item.of('create:steam_engine', 1), 
        [
            ' C ',
            'EBE',
            'DAD'
        ],
        {
            A: 'minecraft:copper_block',
            B: 'create:andesite_alloy',
            C: 'create:golden_sheet',
            D: 'kubejs:sealed_mechanism',
            E: 'create:precision_mechanism'
        }
    );
    event.shaped(
        Item.of('create_enchantment_industry:printer', 1), 
        [
            'DAD',
            ' B ',
            ' C '
        ],
        {
            A: 'create:fluid_tank',
            B: 'minecraft:dried_kelp',
            C: 'create:iron_sheet',
            D: 'kubejs:sealed_mechanism'

        }
    );
    event.shaped(
        Item.of('computercraft:computer_normal', 1), //WOHOOO INFORMATICS!Lets print some hentai magazines
        [
            'AAA',
            'ABA',
            'DCD'
        ],
        {
            A: 'create:andesite_alloy',
            B: 'kubejs:informatic_mechanism',
            C: '#forge:panes/glass',
            D: 'kubejs:kinetic_mechanism'
        }
    );
    event.shaped(
        Item.of('computercraft:computer_advanced', 1), 
        [
            'ADA',
            'ABA',
            'ECE'
        ],
        {
            A: 'create:andesite_alloy',
            B: 'kubejs:informatic_mechanism',
            C: '#forge:panes/glass',
            D: 'create:electron_tube',
            E: 'kubejs:kinetic_mechanism'
        }
    );
    event.shaped(
        Item.of('computercraft:monitor_normal', 1), 
        [
            'AAA',
            'ABC',
            'AAA'
        ],
        {
            A: 'create:andesite_alloy',
            B: 'kubejs:informatic_mechanism',
            C: '#forge:panes/glass'
        }
    );
    event.shaped(
        Item.of('computercraft:monitor_advanced', 1), 
        [
            'ADA',
            'ABC',
            'AAA'
        ],
        {
            A: 'create:andesite_alloy',
            B: 'kubejs:informatic_mechanism',
            C: '#forge:panes/glass',
            D: 'create:electron_tube'
        }
    );
    event.shaped(
        Item.of('computercraft:speaker', 1), 
        [
            'AAA',
            'ACA',
            'ABA'
        ],
        {
            A: 'create:andesite_alloy',
            B: 'kubejs:informatic_mechanism',
            C: 'minecraft:note_block'
        }
    );
    event.shaped(
        Item.of('computercraft:disk_drive', 1), 
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: 'create:andesite_alloy',
            B: 'kubejs:informatic_mechanism',
            C: 'kubejs:kinetic_mechanism'
        }
    );
    event.shaped(
        Item.of('computercraft:cable', 6), 
        [
            ' B ',
            'BAB',
            ' B '
        ],
        {
            A: 'create:andesite_alloy',
            B: 'createaddition:copper_wire'
        }
    );
    event.shaped(
        Item.of('computercraft:wired_modem', 1), 
        [
            '   ',
            ' A ',
            ' C '
        ],
        {
            A: 'createaddition:copper_wire',
            C: 'create:andesite_alloy'
        }
    );
    event.shaped(
        Item.of('computercraft:wireless_modem_normal', 1), 
        [
            '   ',
            ' A ',
            ' C '
        ],
        {
            A: 'createaddition:copper_wire',
            C: 'create:andesite_alloy'
        }
    );
    event.shaped(
        Item.of('computercraft:printer', 1), 
        [
            'AAA',
            'ABC',
            'AAA'
        ],
        {
            A: 'create:andesite_alloy',
            B: 'kubejs:informatic_mechanism',
            C: 'kubejs:kinetic_mechanism'
        }
    );
    event.shaped(
        Item.of('storagedrawers:controller', 1), //computer sorting (sorta)
        [
            'ABA',
            'CDC',
            'AAA'
        ],
        {
            A: 'create:andesite_alloy',
            B: 'kubejs:informatic_mechanism',
            C: 'kubejs:kinetic_mechanism',
            D: '#storagedrawers:drawers'
        }
    );
    event.shaped(
        Item.of('storagedrawers:controller_slave', 1), 
        [
            'ABA',
            'CDC',
            'AAA'
        ],
        {
            A: 'create:andesite_alloy',
            B: 'kubejs:informatic_mechanism',
            C: 'kubejs:kinetic_mechanism',
            D: '#storagedrawers:trim'
        }
    );
    event.shaped(
        Item.of('storagedrawers:compacting_drawers_2', 1), 
        [
            'ACA',
            'ADA',
            'AAA'
        ],
        {
            A: 'create:andesite_alloy',
            C: 'kubejs:kinetic_mechanism',
            D: '#storagedrawers:drawers'
        }
    );
    event.shaped(
        Item.of('storagedrawers:compacting_drawers_3', 1), 
        [
            'AAA',
            'CDC',
            'AAA'
        ],
        {
            A: 'create:andesite_alloy',
            C: 'kubejs:kinetic_mechanism',
            D: '#storagedrawers:drawers'
        }
    );
    event.shaped(
        Item.of('storagedrawers:compacting_half_drawers_2', 1), 
        [
            'ACA',
            'ADA',
            'AAA'
        ],
        {
            A: 'create:andesite_alloy',
            C: 'kubejs:kinetic_mechanism',
            D: '#storagedrawers:half_drawers'
        }
    );
    event.shaped(
        Item.of('storagedrawers:compacting_half_drawers_3', 1), 
        [
            'AAA',
            'CDC',
            'AAA'
        ],
        {
            A: 'create:andesite_alloy',
            C: 'kubejs:kinetic_mechanism',
            D: '#storagedrawers:half_drawers'
        }
    );
    event.shaped(
        Item.of('firstaid:plaster', 1), 
        [
            'AA ',
            'BB '
        ],
        {
            A: 'minecraft:paper',
            B: 'minecraft:string',
        }
    );
        event.shaped(
        Item.of('scguns:flintlock_pistol', 1), /// guns
        [
            'BED',
            'A C'
        ],
        {
            A: 'scguns:gun_grip',
            B: 'minecraft:flint',
            C: 'minecraft:smooth_stone',
            D: 'scguns:stone_gun_barrel',
            E: '#minecraft:planks'
        }
    );
    event.shaped(
        Item.of('scguns:handcannon', 1), 
        [
            '  D',
            'BED',
            'A C'
        ],
        {
            A: 'scguns:gun_grip',
            B: 'minecraft:flint',
            C: 'minecraft:smooth_stone',
            D: 'scguns:stone_gun_barrel',
            E: '#minecraft:planks'
        }
    );
    event.shaped(
        Item.of('scguns:pax', 1), 
        [
            'GF ',
            'BCD',
            'A E'
        ],
        {
            A: 'scguns:gun_grip',
            B: 'scguns:firing_unit',
            C: 'scguns:gun_magazine',
            D: 'scguns:stone_gun_barrel',
            E: '#minecraft:planks',
            F: 'minecraft:iron_ingot',
            G: 'scguns:gun_parts'
        }
    );
    event.shaped(
        Item.of('create_mobile_packages:robo_bee', 1), 
        [
            ' E ',
            'CDC',
            'BAB'
        ],
        {
            A: 'create:item_vault',
            B: 'kubejs:kinetic_mechanism',
            C: 'create:propeller',
            D: 'create:andesite_alloy',
            E: 'create:transmitter'
        }
    );
     event.shaped(
        Item.of('firstaid:bandage', 1), 
        [
            'B B',
            'AAA',
            'B B'
        ],
        {
            A: '#minecraft:wool',
            B: '#forge:string'
        }
    );
    event.shaped(
        Item.of('create:factory_gauge', 4), 
        [
            'CB ',
            'A  '
        ],
        {
            A: 'create:transmitter',
            B: 'create:precision_mechanism',
            C: 'create:andesite_alloy'
        }
    );
    event.shaped(
        Item.of('extra_gauges:logic_gauge', 4), 
        [
            'CB ',
            'AD '
        ],
        {
            A: 'create:transmitter',
            B: 'create:precision_mechanism',
            C: 'create:andesite_alloy',
            D: 'kubejs:informatic_mechanism'
        }
    );
    event.shaped(
        Item.of('extra_gauges:integer_gauge', 4), 
        [
            'CEB',
            'AD '
        ],
        {
            A: 'create:transmitter',
            B: 'create:precision_mechanism',
            C: 'create:andesite_alloy',
            D: 'kubejs:informatic_mechanism',
            E: 'minecraft:comparator'
        }
    );
    event.shaped(
        Item.of('extra_gauges:comparator_gauge', 4), 
        [
            'CD ',
            'AB '
        ],
        {
            A: 'create:transmitter',
            B: 'create:precision_mechanism',
            C: 'create:andesite_alloy',
            D: 'minecraft:comparator'
        }
    );
    event.shaped(
        Item.of('extra_gauges:counter_gauge', 4), 
        [
            'CD ',
            'AB '
        ],
        {
            A: 'create:transmitter',
            B: 'create:precision_mechanism',
            C: 'create:andesite_alloy',
            D: 'kubejs:kinetic_mechanism'
        }
    );
     event.shaped(
        Item.of('kubejs:brass_mix', 1), 
        [
            'AB '
        ],
        {
            A: 'create:zinc_nugget',
            B: 'create:copper_nugget'
        }
    );
    event.shaped(
        Item.of('cccbridge:source_block', 2), 
        [
            'CDC',
            'DAD',
            'CBC'
        ],
        {
            A: 'create:rose_quartz_lamp',
            B: 'kubejs:informatic_mechanism',
            C: 'create:andesite_alloy',
            D: 'minecraft:glass_pane'
        }
    );
    event.shaped(
        Item.of('cccbridge:redrouter_block', 1), 
        [
            'CAC',
            'ABA',
            'CAC'
        ],
        {
            A: 'minecraft:redstone_torch',
            B: 'kubejs:informatic_mechanism',
            C: 'create:andesite_alloy',
        }
    );
    event.shaped(
        Item.of('create:copper_backtank', 1), 
        [
            'DCD',
            'BAB',
            ' B '
        ],
        {
            A: 'minecraft:copper_block',
            B: 'minecraft:copper_ingot',
            C: 'create:shaft',
            D: 'kubejs:sealed_mechanism'
        }
    );
    event.shaped(
        Item.of('createdieselgenerators:pumpjack_hole', 1), 
        [
            ' A ',
            'DAC',
            ' A '
        ],
        {
            A: 'create:fluid_pipe',
            B: 'create:copper_casing',
            C: 'minecraft:chain',
            D: 'kubejs:sealed_mechanism'
        }
    );
    event.shaped(
        Item.of('createdieselgenerators:diesel_engine', 1), 
        [
            ' E ',
            'DCD',
            'BAB'
        ],
        {
            A: 'create:fluid_tank',
            B: 'kubejs:sealed_mechanism',
            C: 'create:brass_block',
            D: 'createdieselgenerators:engine_piston',
            E: 'minecraft:flint_and_steel'
        }
    );
     event.shaped(
        Item.of('cyberspace:quantum_core', 1), 
        [
            'ACA',
            'ABA',
            'AAA'
        ],
        {
            A: 'cyberspace:carbon_fiber_mesh',
            B: 'alexscaves:block_of_uranium',
            C: 'thermal:redstone_bucket'
        }
    );
    event.shaped(
        Item.of('cyberspace:terminal', 1), 
        [
            'ACA',
            'CDC',
            'ABA'
        ],
        {
            A: 'cyberspace:carbon_fiber_mesh',
            B: 'cyberspace:quantum_core',
            C: 'kubejs:informatic_mechanism',
            D: 'computercraft:monitor_normal'
        }
    );
});
ServerEvents.recipes(event => {
    event.remove({ output: 'computercraft:disk' })
    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            { item: 'kubejs:disk_base' },
            { item: 'minecraft:paper' },
            { item: 'minecraft:yellow_dye' }
        ],
        result: {
            item: 'computercraft:disk',
            nbt: { Color: 14605932 }
        }
    });

    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            { item: 'kubejs:disk_base' },
            { item: 'minecraft:paper' },
            { item: 'minecraft:light_blue_dye' }
        ],
        result: {
            item: 'computercraft:disk',
            nbt: { Color: 10072818 }
        }
    });

    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            { item: 'kubejs:disk_base' },
            { item: 'minecraft:paper' },
            { item: 'minecraft:magenta_dye' }
        ],
        result: {
            item: 'computercraft:disk',
            nbt: { Color: 15040472 }
        }
    });

    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            { item: 'kubejs:disk_base' },
            { item: 'minecraft:paper' },
            { item: 'minecraft:orange_dye' }
        ],
        result: {
            item: 'computercraft:disk',
            nbt: { Color: 15905331 }
        }
    });

    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            { item: 'kubejs:disk_base' },
            { item: 'minecraft:paper' },
            { item: 'minecraft:white_dye' }
        ],
        result: {
            item: 'computercraft:disk',
            nbt: { Color: 15790320 }
        }
    });

    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            { item: 'kubejs:disk_base' },
            { item: 'minecraft:paper' },
            { item: 'minecraft:black_dye' }
        ],
        result: {
            item: 'computercraft:disk',
            nbt: { Color: 1118481 }
        }
    });

    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            { item: 'kubejs:disk_base' },
            { item: 'minecraft:paper' },
            { item: 'minecraft:red_dye' }
        ],
        result: {
            item: 'computercraft:disk',
            nbt: { Color: 13388876 }
        }
    });

    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            { item: 'kubejs:disk_base' },
            { item: 'minecraft:paper' },
            { item: 'minecraft:green_dye' }
        ],
        result: {
            item: 'computercraft:disk',
            nbt: { Color: 5744206 }
        }
    });

    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            { item: 'kubejs:disk_base' },
            { item: 'minecraft:paper' },
            { item: 'minecraft:brown_dye' }
        ],
        result: {
            item: 'computercraft:disk',
            nbt: { Color: 8349260 }
        }
    });

    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            { item: 'kubejs:disk_base' },
            { item: 'minecraft:paper' },
            { item: 'minecraft:blue_dye' }
        ],
        result: {
            item: 'computercraft:disk',
            nbt: { Color: 3368652 }
        }
    });

    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            { item: 'kubejs:disk_base' },
            { item: 'minecraft:paper' },
            { item: 'minecraft:purple_dye' }
        ],
        result: {
            item: 'computercraft:disk',
            nbt: { Color: 11691749 }
        }
    });

    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            { item: 'kubejs:disk_base' },
            { item: 'minecraft:paper' },
            { item: 'minecraft:cyan_dye' }
        ],
        result: {
            item: 'computercraft:disk',
            nbt: { Color: 5020082 }
        }
    });

    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            { item: 'kubejs:disk_base' },
            { item: 'minecraft:paper' },
            { item: 'minecraft:light_gray_dye' }
        ],
        result: {
            item: 'computercraft:disk',
            nbt: { Color: 10066329 }
        }
    });

    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            { item: 'kubejs:disk_base' },
            { item: 'minecraft:paper' },
            { item: 'minecraft:gray_dye' }
        ],
        result: {
            item: 'computercraft:disk',
            nbt: { Color: 5000268 }
        }
    });

    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            { item: 'kubejs:disk_base' },
            { item: 'minecraft:paper' },
            { item: 'minecraft:pink_dye' }
        ],
        result: {
            item: 'computercraft:disk',
            nbt: { Color: 15905484 }
        }
    });

    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            { item: 'kubejs:disk_base' },
            { item: 'minecraft:paper' },
            { item: 'minecraft:lime_dye' }
        ],
        result: {
            item: 'computercraft:disk',
            nbt: { Color: 8375321 }
        }
    });
})