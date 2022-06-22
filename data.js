var APP_DATA = {
  "scenes": [
    {
      "id": "0-blick_von_hinten_zur_buehne_1",
      "name": "blick_von_hinten_zur_buehne_1",
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
          "yaw": -0.024421659818731456,
          "pitch": 0.18435512807147703,
          "rotation": 0,
          "target": "2-mitte_erhht"
        },
        {
          "yaw": 0.5530587128856794,
          "pitch": 0.17578291868833418,
          "rotation": 0,
          "target": "4-vor_der_buehne_seitlich_1"
        },
        {
          "yaw": 0.0063012350570001985,
          "pitch": -0.04224184746194837,
          "rotation": 0,
          "target": "1-buehne_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-buehne_1",
      "name": "buehne_1",
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
          "yaw": -0.8376154009045216,
          "pitch": 0.41565281205850013,
          "rotation": 0,
          "target": "4-vor_der_buehne_seitlich_1"
        },
        {
          "yaw": 0.02217571634325921,
          "pitch": 0.2719628220943697,
          "rotation": 0,
          "target": "2-mitte_erhht"
        },
        {
          "yaw": -0.01779767234213736,
          "pitch": 0.0638301286199372,
          "rotation": 0,
          "target": "0-blick_von_hinten_zur_buehne_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-mitte_erhht",
      "name": "mitte_erhöht",
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
          "yaw": 3.059214769494975,
          "pitch": 0.2902046482859877,
          "rotation": 0,
          "target": "0-blick_von_hinten_zur_buehne_1"
        },
        {
          "yaw": -0.04116565190977184,
          "pitch": 0.30106635483855726,
          "rotation": 0,
          "target": "1-buehne_1"
        },
        {
          "yaw": 1.2498874115866183,
          "pitch": 0.48119650593265106,
          "rotation": 0,
          "target": "4-vor_der_buehne_seitlich_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-vor_der_buehne_1",
      "name": "vor_der_buehne_1",
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
          "yaw": 0.04875125517062173,
          "pitch": 0.33359796836241884,
          "rotation": 0,
          "target": "2-mitte_erhht"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-vor_der_buehne_seitlich_1",
      "name": "vor_der_buehne_seitlich_1",
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
          "yaw": 0.8204893904925932,
          "pitch": 0.10049703879612792,
          "rotation": 0,
          "target": "1-buehne_1"
        },
        {
          "yaw": -0.3819050320979702,
          "pitch": 0.1394589669940398,
          "rotation": 0,
          "target": "2-mitte_erhht"
        },
        {
          "yaw": -1.1777777238113707,
          "pitch": 0.04841273090205078,
          "rotation": 0,
          "target": "0-blick_von_hinten_zur_buehne_1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
