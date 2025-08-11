const $Direction = Java.loadClass('net.minecraft.core.Direction');

const fleshArrowFuncs = {};

/** @param {net.liopyu.entityjs.util.ContextUtils$ArrowBlockHitContex} context */
global["onChrysalisArrowHitSpawnEntity"] = context => {    
    /** @type {ArrowEntityJS} */
    const {entity} = context;

    if (entity.level.isClientSide()) {
        return;
    }

    /** @type {Internal.CompoundTag} */
    const stack_nbt = entity.pickUpStack.nbt

    if (!stack_nbt) {
        entity.discard();
        return;
    } 

    const block_entity_nbt = stack_nbt.getCompound("BlockEntityTag");

    if (!block_entity_nbt) {
        entity.discard();
        return;
    } 
    
    const entity_info = block_entity_nbt.getCompound("entity_info");

    if (!entity_info) {
        entity.discard();
        return;
    } 

    const entity_data = entity_info.getCompound("data");

    if (!entity_data) {
        entity.discard();
        return;
    }     
    
    const hit_pos = context.result.location;

    let new_x = hit_pos.x()
    let new_y = hit_pos.y()
    let new_z = hit_pos.z()

    const hit_direction = context.result.direction;    

    switch (hit_direction) {
        case $Direction.UP:
            new_y += 0.5;
            break;
        case $Direction.DOWN:            
            new_y -= 1.0;
            break;
        case $Direction.SOUTH:
            new_z += 1.0;
            break;
        case $Direction.NORTH:
            new_z -= 1.0;
            break;
        case $Direction.EAST:
            new_x += 1.0;
            break;
        case $Direction.WEST:
            new_x -= 1.0;
            break;
    }

    /** @type {Internal.Level} */
    const level = entity.level;

    const new_entity = level.createEntity(entity_data.getString("id"));
    new_entity.setNbt(entity_data)
    new_entity.setPosition(new_x, new_y, new_z);
    level.spawnParticles("biomancy:falling_blood", true, new_x, new_y, new_z, 1.0, 1.0, 1.0, 100, 0.5);
    level.spawnParticles("biomancy:falling_blood", true, new_x, new_y, new_z, 1.0, 1.0, 1.0, 90, 0.25);
    level.spawnParticles("biomancy:falling_blood", true, new_x, new_y, new_z, 1.2, 1.2, 1.2, 75, 0.1);
    level.addFreshEntity(new_entity);
    // new_entity.spawn();
    entity.discard();
    // Utils.server.tell("test method: " + entity.m_7941_().nbt);
};

// global["onChrysalisArrowEntitySpawn"] = entity => {
//     if (entity.level.isClientSide()) {
//         return;
//     }
// };

StartupEvents.registry('entity_type', event => {
    event.create('kubejs:chrysalis_arrow', 'entityjs:arrow')

        /**
         * One-Off values set at the startup of the game.
         */        
        // .onAddedToWorld(entity => {
        //     global["onChrysalisArrowEntitySpawn"](entity);
        // })
        .setKnockback(6) // Set knockback to 5
        .setBaseDamage(2) // Set base damage to 8
        .clientTrackingRange(16) // Set client tracking range to 8
        .isAttackable(true) // Make the arrow attackable
        .sized(1, 1) // Set size of arrow entity to 1x1
        .updateInterval(3) // Set update interval to 3 ticks
        //Setting .noItem() here will result in the builder skipping the item build altogether
        //Since the builder registers the item automatically this is the only way to prevent an item from being created here.
        //.noItem()
        .defaultHitGroundSoundEvent("biomancy:flesh_block.break") // Set default hit ground sound event
        .setWaterInertia(1) // Set water inertia to 1
        .mobCategory('misc') // Set mob category to 'misc'
        .item(item => {
            item.tag("minecraft:arrows");
            item.maxStackSize(64); // Set maximum stack size of arrow item to 64
        })

        /**
        * These methods below require a set return value, if the value does not match the required result
        * it will automatically default to the super method in the entity builder and output an error in logs>kubejs>startup.log.
        * This effectively prevents a crash and instead gives you info on the method.
        * 
        * Remember all callback functions are also able to be live-edited with global events!
        * 
        * Example: 
        * global.hit = entity => {
        * // Custom condition to determine if the arrow can hit a specific entity
        *  return entity.type == "minecraft:zombie"
        * }
        * 
        * .canHitEntity(entity => global.hit(entity)) // Reload this with /kubejs reload startup_scripts
        */

        .textureLocation(entity => {
            //Change texture resource location depending on certain information about the arrow entity.
            //Accepts both a new ResourceLocation or a String representation.
            //new ResourceLocation("kubejs:textures/entity/projectiles/arrow.png")
            return "kubejs:textures/entity/projectiles/chrysalis_arrow.png";
        })
        // .setDamageFunction(entity => {
        //     // Custom damage function based off the arrow entity
        //     return true;
        // })
        .canHitEntity(entity => {
            // Custom condition to determine if the arrow can hit a specific entity
            return true;//entity.type == "minecraft:zombie"; // Allow arrow to hit zombies only
        })
        .shouldRenderAtSqrDistance(context => {
            const { entity, distanceToPlayer } = context;
            // Custom logic to determine if the arrow should render based on distance, for example, rendering only if distance is less than 100 blocks
            return distanceToPlayer < 100;
        })
        .tryPickup(context => {
            // Custom logic to determine if a player can pick up the arrow, for example, allowing only non-creative mode players to pick it up
            // return !context.player.isCreative();
            return false;
        })

        /**
         * All methods below return void meaning they don't require a set return value to function.
         * These mostly are similar to KubeJS' normal events where you may do things on certain events your entities call!
         */

        .doPostHurtEffects(context => {
            const { entity, arrow } = context;
            // Custom post-hurt effects, for example, create an explosion
            // let explosion = entity.block.createExplosion()
            // explosion.strength(1)
            // explosion.explosionMode('block')
            // explosion.explode()
        })
        .lerpTo(context => {
            const { entity, yaw, x, y, z, teleport, posRotationIncrements, pitch } = context;
            // Custom lerping behavior, for example, teleporting the arrow to a new position
            entity.teleportTo(x, y, z);
        })
        .move(context => {
            const { entity, moverType, position } = context;
            // Custom movement logic, for example, applying velocity to the arrow
            entity.setDeltaMovement(0, 0.1, 0);
        })
        .onHitBlock(context => {
            global["onChrysalisArrowHitSpawnEntity"](context);
            // const { entity, result } = context;
            // Custom behavior when the arrow hits a block, for example, spawning particles
            // entity.getLevel().addParticle('minecraft:campfire_cosy_smoke', entity.getX(), entity.getY(), entity.getZ(), 0, 0, 0);
        })
        .onHitEntity(context => {
            global["onChrysalisArrowHitSpawnEntity"](context);
            // const { entity, result } = context;
            // // Custom behavior when the arrow hits an entity, for example, applying potion effects
            // if (result.entity.living) {
            //     let potion = result.entity.potionEffects
            //     potion.add('minecraft:luck', 200, 1, false, true)
            // }
        })
        // .playerTouch(context => {
        //     const { player, entity } = context;
            // Custom behavior when a player touches the arrow, for example, giving the player the arrow
            // if (entity.getLevel().isClientSide() && (entity.onGround() || entity.noPhysics)) {
            //     player.take(entity, 1);
            // }
            
            // if (!entity.getLevel().isClientSide() && (entity.onGround() || entity.noPhysics) && entity.shakeTime <= 0) {
            //     player.take(entity, 1);
            //     entity.discard();
            // }
        // })
        // .tick(entity => {
        //     // Custom tick logic, for example, checking if the arrow is in lava and setting it on fire
        //     if (entity.getLevel().getBlockState(entity.blockPosition()).getBlock().id == "minecraft:lava") {
        //         entity.setSecondsOnFire(5);
        //     }
        // })
        .tickDespawn(entity => {
            // Custom logic for arrow despawn, for example, checking if the arrow has traveled a certain distance and despawning it
            if (entity.getOwner() == null) return
            if (entity.distanceToEntity(entity.getOwner()) > 1000) {
                entity.remove('discarded');
            }
        });


});