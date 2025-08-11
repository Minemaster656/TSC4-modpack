ServerEvents.recipes(event => {
    event.custom({
        type: "biomancy:bio_forging",
        bio_forge_tab: "biomancy:components",
        ingredients: [
            { item: "biomancy:mineral_fragment", count: 2 },
            { item: "biomancy:elastic_fibers", count: 4 }
        ],
        nutrientsCost: 1,
        result: {
            item: "cold_sweat:chameleon_molt"
        }
    });
    event.custom({
        type: "biomancy:bio_forging",
        bio_forge_tab: "biomancy:components",
        ingredients: [
            { item: "biomancy:exotic_dust", count: 16 },
            { item: "biomancy:elastic_fibers", count: 16 }
        ],
        nutrientsCost: 5,
        result: {
            item: "alexsmobs:elastic_tendon"
        }
    });
    event.custom({
        type: "biomancy:bio_forging",
        bio_forge_tab: "biomancy:components",
        ingredients: [
            { item: "biomancy:mineral_fragment", count: 10 },
            { item: "biomancy:tough_fibers", count: 12 }
        ],
        nutrientsCost: 1,
        result: {
            item: "alexsmobs:dropbear_claw"
        }
    });
    event.custom({
        type: "biomancy:bio_forging",
        bio_forge_tab: "biomancy:components",
        ingredients: [
            { item: "biomancy:mineral_fragment", count: 4 },
            { item: "biomancy:elastic_fibers", count: 8 }
        ],
        nutrientsCost: 4,
        result: {
            item: "cold_sweat:goat_fur"
        }
    });
    event.custom({
        type: "biomancy:bio_forging",
        bio_forge_tab: "biomancy:components",
        ingredients: [
            { item: "biomancy:flesh_bits", count: 10 },
            { item: "biomancy:elastic_fibers", count: 30 }
        ],
        nutrientsCost: 5,
        result: {
            item: "alexsmobs:lost_tentacle"
        }
    });
    event.custom({
        type: "biomancy:bio_forging",
        bio_forge_tab: "biomancy:components",
        ingredients: [
            { item: "biomancy:stone_powder", count: 8 },
            { item: "biomancy:organic_matter", count: 8 },
            { item: "biomancy:hormone_secretion", count: 8 },
            { item: "biomancy:exotic_dust", count: 12 }
        ],
        nutrientsCost: 50,
        result: {
            item: "minecraft:sniffer_egg"
        
        }
    });
    event.custom({
        type: "biomancy:bio_forging",
        bio_forge_tab: "biomancy:components",
        ingredients: [
            { item: "biomancy:organic_matter", count: 4 },
            { item: "biomancy:hormone_secretion", count: 2 }
        ],
        nutrientsCost: 10,
        result: {
            item: "minecraft:egg"
        
        }
    });
    event.custom({
        type: "biomancy:bio_forging",
        bio_forge_tab: "biomancy:components",
        ingredients: [
            { item: "biomancy:organic_matter", count: 4 },
            { item: "biomancy:hormone_secretion", count: 2 }
        ],
        nutrientsCost: 10,
        result: {
            item: "alexsmobs:terrapin_egg"
        
        }
    });
    event.custom({
        type: "biomancy:bio_forging",
        bio_forge_tab: "biomancy:components",
        ingredients: [
            { item: "biomancy:organic_matter", count: 4 },
            { item: "biomancy:hormone_secretion", count: 2 }
        ],
        nutrientsCost: 10,
        result: {
            item: "alexsmobs:crocodile_egg"
        
        }
    });
    event.custom({
        type: "biomancy:bio_forging",
        bio_forge_tab: "biomancy:components",
        ingredients: [
            { item: "biomancy:organic_matter", count: 6 },
            { item: "biomancy:hormone_secretion", count: 3 }
        ],
        nutrientsCost: 20,
        result: {
            item: "alexsmobs:emu_egg"
        
        }
    });
    event.custom({
        type: "biomancy:bio_forging",
        bio_forge_tab: "biomancy:components",
        ingredients: [
            { item: "biomancy:organic_matter", count: 4 },
            { item: "biomancy:hormone_secretion", count: 2 }
        ],
        nutrientsCost: 10,
        result: {
            item: "alexsmobs:platypus_egg"
        
        }
    });
});

