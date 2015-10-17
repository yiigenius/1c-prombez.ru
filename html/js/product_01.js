/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
var pathObj = {
    "product_01": {
        "strokepath": [
            {
                "path": "M171.028641,103.306667 C171.653286,126.614608 165.639954,147.321086 149.217859,164.067249 C144.70786,168.665905 143.335035,173.973049 143.149734,179.865422 C142.892702,188.015535 146.136475,192.37569 153.981901,195.169557 C174.699802,202.547048 194.671517,211.390617 211.745156,225.696656 C215.160282,228.557664 218.25661,231.891664 221.0979,235.343913 C231.593336,248.094687 231.682002,274.686523 210.340451,283.956989 C196.133008,290.127947 181.425449,293.794646 166.24866,295.192581 C148.60218,296.818996 130.842128,298.085656 113.139859,297.995467 C86.1376465,297.858178 58.9610913,297.432284 32.8465329,289.338289 C24.3156907,286.693736 16.1684028,282.166229 8.5570944,277.361139 C2.73304874,273.684419 0.939808544,267.168738 0.211553776,260.050792 C-1.26488065,245.629511 5.11307698,235.361951 15.3933245,226.582516 C32.598468,211.889665 52.7783976,202.669304 73.5690252,194.618399 C79.7158541,192.238402 83.6111703,188.087687 84.6462684,181.665201 C85.6066481,175.708694 84.5576026,170.226182 79.9788627,165.597462 C63.0576489,148.49455 56.4605175,127.514497 57.2903892,103.306667 L171.028641,103.306667 Z",
                "duration": 1800
            },
            {
                "path": "M102.659709,9.76226595 C102.66967,1.45936016 104.093186,0.0133598015 112.113286,0.00125938015 C125.000633,-0.0178996204 125.030518,0.0133598015 125.031514,13.3318903 L125.031514,53.5698248 C125.338332,53.6283102 125.64515,53.6867955 125.951968,53.7452809 C127.230044,47.7969154 128.403523,41.8223324 129.817076,35.9052263 C131.292392,29.7309863 133.058587,23.6283405 134.582715,17.4651925 C135.562939,13.5043213 137.425762,12.4092331 141.374548,14.0972419 C163.371796,23.4992693 176.679524,39.4173736 178.936827,64.0508064 C179.124105,66.0927525 180.708999,69.2580211 182.263012,69.706745 C190.365793,72.049185 193.053438,77.8926801 193.651135,85.5240125 C193.793587,87.3431092 194.046612,89.1531306 194.295652,91.3866667 L34.0649918,91.3866667 C32.4820904,80.6425009 36.0772389,74.2565035 45.4949542,69.7662388 C47.0858249,69.0079457 48.5820601,66.35392 48.7364652,64.4591956 C50.7457239,39.7622356 64.0335284,23.8098468 85.9291685,14.2253047 C89.9516705,12.4657018 92.0784764,13.3379405 93.0816115,17.6577909 C95.612859,28.5703542 98.2496998,39.4577084 100.856656,50.3521211 C101.118646,51.4492259 101.46033,52.5281802 101.765155,53.6152014 C102.062012,53.6010842 102.357872,53.586967 102.654728,53.5728499 C102.654728,38.9686497 102.641778,24.3654578 102.659709,9.76226595 Z",
                "duration": 1800
            }
        ],
        "dimensions": {
            "width": 230,
            "height": 300
        }
    }
}; 
 
 
/* 
 Setup and Paint your lazyline! 
 */ 
 
 $(document).ready(function(){ 
 $('#product_01').lazylinepainter( 
 {
    "svgData": pathObj,
    "strokeWidth": 2,
    "strokeColor": "#1B76AA"
}).lazylinepainter('paint'); 
 });