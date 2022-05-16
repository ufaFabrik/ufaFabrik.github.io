var APP_DATA = {
  "scenes": [
    {
      "id": "0-lila_1",
      "name": "lila_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10517894475120038,
          "pitch": 0.37347865192246665,
          "rotation": 0,
          "target": "1-lila_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-lila_2",
      "name": "lila_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.129173410123741,
          "pitch": 0.41694779810795524,
          "rotation": 0,
          "target": "0-lila_1"
        },
        {
          "yaw": 0.05376466774636768,
          "pitch": 0.7283816459360821,
          "rotation": 0,
          "target": "2-lila_3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-lila_3",
      "name": "lila_3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.100214562334262,
          "pitch": 0.6171567999983871,
          "rotation": 0,
          "target": "1-lila_2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
