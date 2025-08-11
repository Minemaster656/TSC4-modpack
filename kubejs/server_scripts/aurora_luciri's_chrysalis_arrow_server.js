ServerEvents.recipes(event => {
    event.shaped(
        Item.of("kubejs:chrysalis_arrow", 1),
        [
          ' C ',
          ' E ',
          'EBE'
    
        ],
        {
         B: 'biomancy:tough_fibers',
         C: 'biomancy:chrysalis',
         E: 'biomancy:elastic_fibers'
        }
      ).modifyResult((grid, result) => {
        let chrysalis_item = grid.findAll().find(item => (item.id == 'biomancy:chrysalis'));

        /** @type {Internal.CompoundTag} */
        const nbt = chrysalis_item.nbt;
        if (!nbt) {
          return Item.of("minecraft:air");
        }

        
        const block_entity_nbt = nbt.getCompound("BlockEntityTag");

        if (!block_entity_nbt) {
            return Item.of("minecraft:air");
        } 
        
        const entity_info = block_entity_nbt.getCompound("entity_info");

        if (!entity_info || !entity_info.getString("name")) {            
            return Item.of("minecraft:air");
        } 
        Utils.server.tell("NBT: " + entity_info.getString("name"));
                
        const translated_name = Text.translate(entity_info.getString("name")).string;
        Utils.server.tell("translated name: " + translated_name);        
        nbt.merge(NBT.toTagCompound({display:{Name:`{"text":"${translated_name} Chrysalis Arrow","color":"dark_purple"}`}}));
        return Item.of("kubejs:chrysalis_arrow", nbt).strongNBT();
      }).id("kubejs:chrysalis_arrow");

});