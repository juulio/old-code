{

  "metadata": {
    "formatVersion": 3.99,
    "type": "zordon_scene"
  },

  "urlBaseType": "",

  "objects": {

    "main_group": {
      "position": [0, -50, 0],
      "rotation": [0, 0, 0],
      "scale": [1, 1, 1],
      "visible": true,
      "children": {

        "mts_bg": {
          "geometry": "mts_bg",
          "material": "mat_bg",
          "position": [0, 1, 0],
          "rotation": [-1.57, 0, 0],
          "scale": [0.75, 0.75, 0.75],
          "visible": true,
          "userData": {
            "comp_vn": false
          }
        },

        "mts_body": {
          "geometry": "mts_body",
          "material": "mat_body1",
          "position": [0, 0, 0],
          "rotation": [-1.57, 0, 0],
          "scale": [1, 1, 1],
          "visible": true,
          "userData": {
            "comp_fn": false
          }
        },
        
        "mts_ext_uv": {
          "geometry": "mts_ext_uv",
          "material": "mat_ext_uv",
          "position": [0, 0, 0],
          "rotation": [-1.57, 0, 0],
          "scale": [1, 1, 1],
          "visible": true,
          "userData": {
                "comp_vn": false
          }
        },
        
        "mts_door": {
          "geometry": "mts_door",
          "material": "mat_body1",
          "position": [0, 0, 0],
          "rotation": [-1.57, 0, 0],
          "scale": [1, 1, 1],
          "visible": true,
          "userData": {
                "comp_vn": false
          }
        },
        
        "mts_hatch": {
          "geometry": "mts_hatch",
          "material": "mat_body1",
          "position": [0, 0, 0],
          "rotation": [-1.57, 0, 0],
          "scale": [1, 1, 1],
          "visible": true,
          "userData": {
                "comp_vn": false
          }
        },

        "mts_sh": {
          "geometry": "mts_sh",
          "material": "mat_sh",
          "position": [0, 2, 0],
          "rotation": [-1.57, 0, 0],
          "scale": [1, 1, 1],
          "visible": true,
          "userData": {

          }
        }
      }
    },

    "Default": {
      "type": "PerspectiveCamera",
      "fov": 35,
      "aspect": 1.33333,
      "near": 1,
      "far": 10000,
      "position": [460, 120, 340],
      "target": [0, 0, 0],
      "children": {

        "light_cam": {
          "type": "PointLight",
          "position": [0, 55, 2.5],
          "color": 12635388,
          "intensity": 0.4
        },

        "light_left": {
          "type": "PointLight",
          "position": [-16.5, 3, -15],
          "color": 12635388,
          "intensity": 0.6
        },

        "lightl_right_low": {
          "type": "PointLight",
          "position": [30, -4, -10],
          "color": 15267260,
          "intensity": 0.5
        },

        "lightl_am": {
          "type": "AmbientLight",
          "color": 0
        }

      }

    },
    
    "Interior_1": {
      "type": "PerspectiveCamera",
      "fov": 35,
      "aspect": 1.33333,
      "near": 1,
      "far": 5000,
      "position": [-15.744, 71.802, 15.52],
      "target": [-8.205, 64.913, 30.37],
      "children": {}

    },
    
    "Interior_2": {
      "type": "PerspectiveCamera",
      "fov": 45,
      "aspect": 1.33333,
      "near": 1,
      "far": 5000,
      "position": [-30.825, 76.902, -17.148],
      "target": [-26.909, 76.372, -13.266],
      "children": {}

    },
    
    "Interior_3": {
      "type": "PerspectiveCamera",
      "fov": 55,
      "aspect": 1.33333,
      "near": 1,
      "far": 5000,
      "position": [48, 93, -18],
      "target": [35, 85, -2],
      "children": {}

    },
    
    "Interior_4": {
      "type": "PerspectiveCamera",
      "fov": 65,
      "aspect": 1.33333,
      "near": 1,
      "far": 5000,
      "position": [36, 86, -5],
      "target": [35, 85, -2],
      "children": {}

    },

    "Wheel_1": {
      "type": "PerspectiveCamera",
      "fov": 15,
      "aspect": 1.33333,
      "near": 1,
      "far": 5000,
      "position": [-287.2, -10.5, -43.5],
      "target": [-106.5, -19, 138.3],
      "children": {}

    },

    "Wheel_2": {
      "type": "PerspectiveCamera",
      "fov": 25,
      "aspect": 1.33333,
      "near": 1,
      "far": 5000,
      "position": [-203.6, -17.6, 0],
      "target": [-100, -20, 135],
      "children": {}

    },
    
    "Wheel_3": {
      "type": "PerspectiveCamera",
      "fov": 35,
      "aspect": 1.33333,
      "near": 1,
      "far": 5000,
      "position": [-151.8, -11, 40.7],
      "target": [-99.46, -18.2, 134],
      "children": {}

    },
    
    "Wheel_4": {
      "type": "PerspectiveCamera",
      "fov": 55,
      "aspect": 1.33333,
      "near": 1,
      "far": 5000,
      "position": [-141, -12, 79],
      "target": [-98, -17, 131],
      "children": {}

    },
    
    "Roof_0": {
      "type": "PerspectiveCamera",
      "fov": 15,
      "aspect": 1.33333,
      "near": 1,
      "far": 5000,
      "position": [0, 190, 258],
      "target": [0, 114, -40],
      "children": {}

    },
    
    "Roof_1": {
      "type": "PerspectiveCamera",
      "fov": 25,
      "aspect": 1.33333,
      "near": 1,
      "far": 5000,
      "position": [0, 167, 167],
      "target": [0, 103, -38],
      "children": {}

    },

    "Roof_2": {
      "type": "PerspectiveCamera",
      "fov": 35,
      "aspect": 1.33333,
      "near": 1,
      "far": 5000,
      "position": [-7.8, 161.2, 127],
      "target": [1, 96.5, -40.4],
      "children": {}

    },

    "Roof_3": {
      "type": "PerspectiveCamera",
      "fov": 55,
      "aspect": 1.33333,
      "near": 1,
      "far": 5000,
      "position": [-7.3, 171.42, 76.85],
      "target": [0, 92.4, -37.3],
      "children": {}

    },
    
    "Roof_4": {
      "type": "PerspectiveCamera",
      "fov": 65,
      "aspect": 1.33333,
      "near": 1,
      "far": 5000,
      "position": [-5.55, 150.5, 66.5],
      "target": [0, 88.9, -35.5],
      "children": {}

    },
    
    "Roof_5": {
      "type": "PerspectiveCamera",
      "fov": 75,
      "aspect": 1.33333,
      "near": 1,
      "far": 5000,
      "position": [-3.16, 151.93, 58.44],
      "target": [1.5, 87, -34.2],
      "children": {}

    }

  },

  "geometries": {

    "plane": {
      "type": "plane",
      "width": 5,
      "height": 5,
      "widthSegments": 10,
      "heightSegments": 10
    },

    "mts_body": {
      "type": "ctm",
      "url": "_3d/mts_body_01.ctm"
    },

    "mts_bg": {
      "type": "ctm",
      "url": "_3d/mts_bg2.ctm"
    },
    
    "mts_ext_uv": {
      "type": "ctm",
      "url": "_3d/mts_ext_uv.ctm"
    },
    
    "mts_door": {
      "type": "ctm",
      "url": "_3d/mts_door.ctm"
    },
    
    "mts_hatch": {
      "type": "ctm",
      "url": "_3d/mts_hatch.ctm"
    },
    
    "mts_no_depth": {
      "type": "ctm",
      "url": "_3d/mts_no_depth.ctm"
    },
    
    "mts_sh": {
      "type": "plane",
      "width": 800,
      "height": 800,
      "widthSegments": 10,
      "heightSegments": 10
    },


    "sprite_geo": {
      "type": "plane",
      "width": 16,
      "height": 16,
      "widthSegments": 1,
      "heightSegments": 1
    },

    "mts_an": {
      "type": "ctm",
      "url": "_3d/mts_an.ctm"
    }
  },

  "embeds": {

  },

  "materials": {

    "basic_gray": {
      "type": "MeshBasicMaterial",
      "parameters": {
        "color": 2236962,
        "wireframe": true,
        "opacity": 0.15,
        "transparent": true
      }
    },

    "wire_orange": {
      "type": "MeshBasicMaterial",
      "parameters": {
        "color": 10515753,
        "wireframe": true
      }
    },

    "mat_lights": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 0,
        "envMap": "my_cubemap2",
        "reflectivity": 3.0,
        "specular": 1778729,
        "shininess": 14,
        "opacity": 0.225,
        "combine": "MixOperation",
        "transparent": true,
        "blending": "NormalBlending"
      }
    },
    
    "mat_lights2": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 8947848,
        "envMap": "my_cubemap2",
        "reflectivity": 0.8,
        "specular": 1778729,
        "shininess": 14,
        "opacity": 0.625,
        "combine": "MixOperation",
        "transparent": true,
        "blending": "AdditiveBlending"
      }
    },

    "mat_red_lights": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 655616,
        "specular": 1311232,
        "opacity": 0.775,
        "shininess": 28,
        "transparent": true,
        "envMap": "my_cubemap2",
        "reflectivity": 0.075,
        "blending": "NormalBlending",
        "combine": "MixOperation"
      }
    },
    
    "mat_red_lights_on": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 655616,
        "emissive": 655616,
        "emissiveIntensity": 10.0,
        "specular": 16752640,
        "shininess": 18
        
        
      }
    },
    
    "mat_red_lights_on2": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 655616,
        "emissive": 655616,
        "emissiveIntensity": 10.0,
        "specular": 16752640,
        "shininess": 18,
        "transparent": true,
        "opacity": 0.8
        
        
      }
    },
    
    "mat_orange_lights_on": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 655616,
        "emissive": 655616,
        "emissiveIntensity": 1.0,
        "specular": 16752640,
        "shininess": 18,
        "transparent": true,
        "opacity": 1.0,
        "blending": "AdditiveBlending",
        "combine": "AddOperation",
        "side": "double"
        
        
        
      }
    },
    
    "mat_red_light_int": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 1310977,
        "specular": 5374980,
        "shininess": 45,
        "combine": "AddOperation",
        "envMap": "my_cubemap2",
        "reflectivity": 0.05,
        "combine": "Mixperation"
      }
    },
    
    "basic_orange": {
      "type": "MeshBasicMaterial",
      "parameters": {
        "color": 2788850,
        "opacity": 0.05,
        "transparent": true,
        "side": "double",
        "blending": "AdditiveBlending"
      }
    },
    
    "mat_int_l": {
      "type": "MeshBasicMaterial",
      "parameters": {
        "color": 14409925,
        "specular": 1778729,
        "shininess": 14,
        "opacity": 1.0,
        "combine": "MixOperation",
        "transparent": false,
        "blending": "AdditiveBlending",
        "side": "double"
      }
    },
    
    "mat_int_r": {
      "type": "MeshBasicMaterial",
      "parameters": {
        "color": 13376256,
        "emissive": 16777215,
        "specular": 1778729,
        "shininess": 14,
        "opacity": 1.0,
        "combine": "AdditiveOperation",
        "transparent": false,
        "blending": "AdditiveBlending",
        "side": "double"
      }
    },
    
    "mat_hemi": {
      "type": "MeshBasicMaterial",
      "parameters": {
        "color": 16777215,
        "map": "tex_hemi",
        "side": "double",
        "blending": "AdditiveBlending"
      }
    },
    
    "mat_ext_uv": {
      "type": "MeshFaceMaterial",
      "parameters": {
        "materials": [
            "mat_tires", 
            "mat_breaks",
            "mat_none",
            "mat_rad"]
      }
    },

    "mat_body1": {
      "type": "MeshFaceMaterial",
      "parameters": {
        "materials": [
            "mat_c_white1", 
            "mat_rubber", 
            "mat_alu", 
            "mat_alu_dark", 
            "mat_chrome",
            
            "mat_glass", 
            "mat_lights", 
            "mat_red_lights", 
            "mat_dark", 
            "mat_red_light_int",
            
            "mat_reflector", 
            "mat_glass", 
            "mat_red_lights_on",
            "mat_tires2",
            "mat_red_lights_on",
            
            "mat_lights2"
            
            ]
      }
    },

    "mat_body2": {
      "type": "MeshFaceMaterial",
      "parameters": {
        "materials": [
            "mat_c_white2", 
            "mat_rubber", 
            "mat_alu", 
            "mat_alu_dark", 
            "mat_chrome",
            
            "mat_glass", 
            "mat_lights", 
            "mat_red_lights", 
            "mat_dark", 
            "mat_red_light_int",
            
            "mat_reflector", 
            "mat_glass", 
            "mat_red_lights_on",
            "mat_tires2",
            "mat_red_lights_on",
            
            "mat_lights2"
            
            ]
      }
    },

    "mat_body3": {
      "type": "MeshFaceMaterial",
      "parameters": {
        "materials": [
            "mat_c_red", 
            "mat_rubber", 
            "mat_alu", 
            "mat_alu_dark", 
            "mat_chrome",
            
            "mat_glass", 
            "mat_lights", 
            "mat_red_lights", 
            "mat_dark", 
            "mat_red_light_int",
            
            "mat_reflector", 
            "mat_glass", 
            "mat_red_lights_on",
            "mat_tires2",
            "mat_red_lights_on",
            
            "mat_lights2"
            
            ]
      }
    },

    "mat_body4": {
      "type": "MeshFaceMaterial",
      "parameters": {
        "materials": [
            "mat_c_red2", 
            "mat_rubber", 
            "mat_alu", 
            "mat_alu_dark", 
            "mat_chrome",
            
            "mat_glass", 
            "mat_lights", 
            "mat_red_lights", 
            "mat_dark", 
            "mat_red_light_int",
            
            "mat_reflector", 
            "mat_glass", 
            "mat_red_lights_on",
            "mat_tires2",
            "mat_red_lights_on",
            
            "mat_lights2"
            
            ]
      }
    },
    
    "mat_body5": {
      "type": "MeshFaceMaterial",
      "parameters": {
        "materials": [
            "mat_c_red3", 
            "mat_rubber", 
            "mat_alu", 
            "mat_alu_dark", 
            "mat_chrome",
            
            "mat_glass", 
            "mat_lights", 
            "mat_red_lights", 
            "mat_dark", 
            "mat_red_light_int",
            
            "mat_reflector", 
            "mat_glass", 
            "mat_red_lights_on",
            "mat_tires2",
            "mat_red_lights_on",
            
            "mat_lights2"
            
            ]
      }
    },
    
    "mat_seats": {
      "type": "MeshFaceMaterial",
      "parameters": {
        "materials": ["mat_leather1", "mat_leather2"]
      }
    },
    
    "mat_leather1": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 2033928,
        "map": "tex_leather1",
        "aoMap": "tex_int_lm",
        "aoMapIntensity": 2.0,
        "lightMap": "tex_int_lm",
        "lightMapIntensity": 0.5,
        "specularMap": "tex_leather1",
        "specular": 263172,
        "shininess": 20,
        "envMap": "my_cubemap",
        "reflectivity": 0.01,
        "bumpMap": "tex_leather1",
        "bumpScale": 0.02,
        "combine": "MixOperation",
        "side": "double"
      }
    },
    
    "mat_leather2": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 65793,
        "map": "tex_leather1",
        "aoMap": "tex_int_lm",
        "aoMapIntensity": 2.0,
        "lightMap": "tex_int_lm",
        "lightMapIntensity ": 0.5,
        "specularMap": "tex_leather1",
        "specular": 263172,
        "shininess": 25,
        "envMap": "my_cubemap",
        "reflectivity": 0.01,
        "bumpMap": "tex_leather1",
        "bumpScale": 0.05,
        "combine": "MixOperation",
        "side": "double"
      }
    },

    "mat_rubber": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 131586,
        "specular": 197379,
        "emissive": 65793,
        "shininess": 50,
        "envMap": "my_cubemap",
        "reflectivity": 0.01,
        "combine": "MixOperation",
        "side": "double"
      }
    },
    
    
    
    "mat_nav": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 15658734,
        "map": "tex_nav",
        "specular": 1052688,
        "shininess": 14,
        "envMap": "my_cubemap",
        "reflectivity": 0.025,
        "combine": "MixOperation",
        "side": "double",
        "blending": "AdditiveBlending"
      }
    },
    
    "mat_tires": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 65793,
        "specular": 197379,
        "shininess": 9,
        "envMap": "my_cubemap",
        "reflectivity": 0.005,
        "combine": "MixOperation",
        "side": "front",
        "bumpMap": "tex_tires",
        "bumpScale": 0.09
      }
    },
    
    "mat_tires2": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 65793,
        "specular": 197379,
        "shininess": 9,
        "envMap": "my_cubemap",
        "reflectivity": 0.01,
        "combine": "MixOperation",
        "side": "double"
      }
    },
    
    "mat_breaks": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 12303291,
        "map": "tex_tires",
        "specular": 2236962,
        "specularMap": "tex_tires",
        "shininess": 120,
        "envMap": "my_cubemap",
        "reflectivity": 0.95,
        "combine": "MultiplyOperation",
        "blending": "NormalBlending",
        "side": "double",
        "bumpMap": "tex_tires",
        "bumpScale": 0.03
      }
    },
    
    "mat_rad": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 12303291,
        "map": "tex_rad",
        "specular": 2236962,
        "specularMap": "tex_rad",
        "shininess": 120,
        "envMap": "my_cubemap",
        "reflectivity": 0.95,
        "combine": "MultiplyOperation",
        "blending": "NormalBlending",
        "side": "double",
        "bumpMap": "tex_rad",
        "bumpScale": 0.08
      }
    },

    "mat_glass": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 0,
        "envMap": "my_cubemap2",
        "reflectivity": 0.045,
        "specular": 1317663,
        "shininess": 14,
        "opacity": 1.825,
        "combine": "MixOperation",
        "transparent": false,
        "blending": "NormalBlending",
        "side": "front"
      }
    },
    
    "mat_glass_ds": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 0,
        "envMap": "my_cubemap2",
        "reflectivity": 0.01,
        "specular": 1317663,
        "shininess": 14,
        "opacity": 0.625,
        "combine": "MixOperation",
        "transparent": true,
        "blending": "NormalBlending",
        "side": "back",
        "deptWrite":false
      }
    },
    
    "mat_glass2": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 0,
        "envMap": "my_cubemap2",
        "reflectivity": 0.045,
        "specular": 1317663,
        "shininess": 14,
        "opacity": 0.825,
        "combine": "MixOperation",
        "transparent": true,
        "blending": "AdditiveBlending",
        "side": "front"
      }
    },

    "mat_alu": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 8947848,
        "specular": 3355443,
        "shininess": 60,
        "envMap": "my_cubemap",
        "reflectivity": 0.975,
        "combine": "MultiplyOperation",
        "blending": "NormalBlending",
        "side": "double"
      }
    },

    "mat_alu_dark": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 0,
        "specular": 1184274,
        "shininess": 60,
        "envMap": "my_cubemap",
        "reflectivity": 0.125,
        "combine": "MixOperation",
        "blending": "NormalBlending",
        "side": "double"
      }
    },
    
    "mat_dark": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 65793,
        "specular": 131586,
        "shininess": 20,
        "envMap": "my_cubemap",
        "reflectivity": 0.001,
        "combine": "MixOperation",
        "blending": "NormalBlending",
        "side": "double"
      }
    },

    "mat_chrome": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 1118481,
        "specular": 12303291,
        "shininess": 80,
        "envMap": "my_cubemap2",
        "reflectivity": 0.675,
        "combine": "MixOperation",
        "blending": "NormalBlending",
        "side": "double"
      }
    },
    
    
    "mat_reflector": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 1118481,
        "specular": 16777215,
        "shininess": 20,
        "envMap": "my_cubemap2",
        "reflectivity": 0.1,
        "combine": "AddOperation",
        "blending": "AdditiveBlending",
        "side": "double"
      }
    },

    "mat_c_white1": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 11184810,
        "specular": 1184274,
        "emissive": 2368548,
        "shininess": 0.1,
        "envMap": "my_cubemap2",
        "reflectivity": 0.175,
        "combine": "Mixperation",
        "side": "double"
      }
    },

    "mat_c_white2": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 8947848,
        "specular": 7829367,
        "shininess": 1,
        "envMap": "my_cubemap2",
        "reflectivity": 0.15,
        "combine": "Mixperation",
        "side": "double"
      }
    },

    "mat_c_red": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 2490625,
        "specular": 8391949,
        "shininess": 8,
        "envMap": "my_cubemap2",
        "reflectivity": 0.5,
        "combine": "Mixperation",
        "side": "double"
      }
    },

    "mat_c_red2": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 1310977,
        "specular": 8391949,
        "shininess": 8,
        "envMap": "my_cubemap2",
        "reflectivity": 0.5,
        "combine": "Mixperation",
        "side": "double"
      }
    },
    
    "mat_c_red3": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 1310977,
        "specular": 8391949,
        "shininess": 8,
        "envMap": "my_cubemap2",
        "reflectivity": 0.75,
        "combine": "Mixperation",
        "side": "double"
      }
    },

    "mat_sh": {
      "type": "MeshBasicMaterial",
      "parameters": {
        "color": 0,
        "alphaMap": "tex_sh",
        "transparent": true,
        "blending": "NormalBlending",
        "opacity": 1.05
      }
    },
    
    "mat_sh_u": {
      "type": "MeshBasicMaterial",
      "parameters": {
        "color": 0,
        "alphaMap": "tex_sh_u",
        "transparent": true,
        "blending": "MultiplyBlending",
        "opacity": 1.05
      }
    },

    "mat_bg": {
      "type": "MeshBasicMaterial",
      "parameters": {
        "map": "tex_bg",
        "shininess":20, 
        "combine":"MixOperation", 
        "blending": "NormalBlending", 
        "bumpMap": "tex_bg", 
        "bumpScale": -0.05
      }
    },
    
    "mat_bg2": {
      "type": "MeshBasicMaterial",
      "parameters": {
        "map": "tex_bg2"
      }
    },

    "mat_none": {
      "type": "MeshPhongMaterial",
      "parameters": {
        "color": 0,
        "opacity": 0.0,
        "transparent": true
      }
    },

    "mat_spr1": {
      "type": "MeshBasicMaterial",
      "parameters": {
        "color": 6710886,
        "alphaMap": "tex_sprite",
        "transparent": true,
        "blending": "NormalBlending",
        "opacity": 2,
        "side": "front",
        "alphaTest": 0.0001
      }
    },
    
    "mat_spr2": {
      "type": "MeshBasicMaterial",
      "parameters": {
        "color": 6710886,
        "alphaMap": "tex_sprite",
        "transparent": true,
        "blending": "NormalBlending",
        "opacity": 2,
        "side": "front",
        "alphaTest": 0.0001
      }
    },
    
    "mat_spr3": {
      "type": "MeshBasicMaterial",
      "parameters": {
        "color": 6710886,
        "alphaMap": "tex_sprite",
        "transparent": true,
        "blending": "NormalBlending",
        "opacity": 2,
        "side": "front",
        "alphaTest": 0.0001
      }
    },
    
    "mat_spr4": {
      "type": "MeshBasicMaterial",
      "parameters": {
        "color": 6710886,
        "alphaMap": "tex_sprite",
        "transparent": true,
        "blending": "NormalBlending",
        "opacity": 2,
        "side": "front",
        "alphaTest": 0.0001
      }
    },

    "mat_an1": {
      "type": "MeshBasicMaterial",
      "parameters": {
        "map": "tex_an1",
        "transparent": true,
        "blending": "NormalBlending",
        "opacity": 0.0,
        "side": "double",
        "alphaTest": 0.0001,
        "depthWrite":false
      }
    },
    
    "mat_an2": {
      "type": "MeshBasicMaterial",
      "parameters": {
        "map": "tex_an2",
        "transparent": true,
        "blending": "NormalBlending",
        "opacity": -0.2,
        "side": "double",
        "alphaTest": 0.0001,
        "depthWrite":false
      }
    }

  },

  "textures": {

    "my_cubemap": {
      "url": [
        "_tex/s3c_06.jpg",
        "_tex/s3c_04.jpg",
        "_tex/s3c_02.jpg",
        "_tex/s3c_08.jpg",
        "_tex/s3c_05.jpg",
        "_tex/s3c_11.jpg"
      ]
    },

    "my_cubemap2": {
            "url":[
                "_tex/c13_px.jpg",
                "_tex/c13_nx.jpg",
                "_tex/c13_py.jpg",
                "_tex/c13_ny.jpg",
                "_tex/c13_pz.jpg",
                "_tex/c13_nz.jpg"
            ]
        },

    "tex_sh": {
      "url": "_tex/mts_sh.jpg",
      "anisotropy": 2,
      "repeat": [1.0, 1.0],
      "magFilter": "LinearFilter",
      "minFilter": "LinearMipMapLinearFilter",
      "wrapAround": true
    },
    
   

    "tex_sprite": {
      "url": "_tex/sprite2.png",
      "anisotropy": 2,
      "repeat": [1.0, 1.0],
      "magFilter": "LinearFilter",
      "minFilter": "LinearMipMapLinearFilter"
    },

    
    
    "tex_an_a": {
      "url": "_tex/preloader2.png",
      "anisotropy": 2,
      "repeat": [1.0, 1.0],
      "offset": [0.0, 0.0],
      "magFilter": "LinearMipMapLinearFilter",
      "minFilter": "LinearMipMapLinearFilter",
      "wrapS": "ClampToEdgeWrapping",
      "wrapT": "ClampToEdgeWrapping"
    },

    "tex_bg": {
      "url": "_tex/bg.jpg",
      "anisotropy": 8,
      "repeat": [1.0, 1.0],
      "offset": [0.0, 0.0],
      "magFilter": "LinearMipMapLinearFilter",
      "minFilter": "LinearMipMapLinearFilter"
    },
    
    "tex_bg2": {
      "url": "_tex/bg2.jpg",
      "anisotropy": 2,
      "repeat": [1.0, 1.0],
      "offset": [0.0, 0.0],
      "magFilter": "LinearMipMapLinearFilter",
      "minFilter": "LinearMipMapLinearFilter",
      "wrapS": "ClampToEdgeWrapping",
      "wrapT": "ClampToEdgeWrapping"
    },
    
   
    
    "tex_tires": {
      "url": "_tex/mts_tire.jpg",
      "anisotropy": 4,
      "repeat": [1.0, 1.0],
      "offset": [0.0, 0.0],
      "magFilter": "LinearMipMapLinearFilter",
      "minFilter": "LinearMipMapLinearFilter"
    },

    
    "tex_rad": {
      "url": "_tex/mts_rad.jpg",
      "anisotropy": 4,
      "repeat": [1.0, 1.0],
      "offset": [0.0, 0.0],
      "magFilter": "LinearMipMapLinearFilter",
      "minFilter": "LinearMipMapLinearFilter"
    }

  },

  "fogs": {
    "basic": {
      "type": "exp2",
      "color": [1, 1, 1],
      "near": 0,
      "far": 500
    }
  },

  "defaults": {
    "bgcolor": [0, 0, 0],
    "bgalpha": 1,
    "camera": "my_camera"
  }

}