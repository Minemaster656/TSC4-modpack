ServerEvents.recipes(event => {
    event.custom({
      "type": "vintageimprovements:coiling",
      "springColor": "b87333",
      "ingredients": [
        {
          "tag": "forge:ingots/copper"
        }
      ],
      "results": [
        {
          "item": "tfmg:copper_wire",
          "count": 1
        }
      ],
      "processingTime": 60,
      "conditions": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:ingots/copper"
          }
        }
      ]
    });
    event.custom({
      "type": "vintageimprovements:coiling",
      "springColor": "b87333",
      "ingredients": [
        {
          "tag": "minecraft:wool"
        }
      ],
      "results": [
        {
          "item": "kubejs:gauze",
          "count": 1
        }
      ],
      "processingTime": 60,
      "conditions": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "minecraft:wool"
          }
        }
      ]
    });
  });
  