进入我的厨房，首先展示食材列表接口
请求：http://localhost:8080/dufood/myzone/material
响应：
{"data":{
	"material":[{
		"name":"祖名豆腐干肉汁味", //食材名称
		"id":4921,
		"imgUrl":"http://s2.boohee.cn/house/upload_food/2008/6/13/39844_1213344222.jpg"}, // 图片url
		
		{"name":"醉猪肚",
		"id":4920,
		"imgUrl":"http://s2.boohee.cn/house/upload_food/2008/6/23/user_68302_1214206891.jpg"}]},
"result":"success",
"msg":""}
	
=====================================================	
从分类中添加食材的接口:
请求：http://localhost:8080/dufood/kitchen/addmaterial?ids=4906,4907
ids是要添加食材的id
响应：
{"data":null,"result":"success","msg":""}

=====================================================
删除我的厨房里的食材
请求：http://localhost:8080/dufood/kitchen/delmaterial?ids=4906,4907
响应：
{"data":null,"result":"success","msg":""}

=====================================================
列出食材的分类
请求：http://localhost:8080/dufood/category/list

响应：
{"data":{
	"category":[{          // 分类数组
		"name":"肉类",
	  	"id":2},
		{"name":"蔬菜","id":3},
		{"name":"水果","id":4},
		{"name":"蛋奶","id":5},
		{"name":"豆制品","id":6},
		{"name":"干货","id":7}]},
	
"result":"success",
"msg":""}

列出分类中的食材
请求：http://localhost:8080/dufood/category/2/show
cid=2
响应：
{"data":{
	"matOverviews":    //分类下的食材数组
		[{"name":"牛肉(瘦)", //食材名称
		  "id":3853,       //食材ID
		  "imgUrl":"http://s2.boohee.cn/house/food_big/big_photo2010224753.jpg"},   //食材图片
		{"name":"羊肉(瘦)","id":4618,"imgUrl":"http://s2.boohee.cn/house/food_big/big_photo2010317142110778.jpg"},
		{"name":"猪肉(腿)","id":4878,"imgUrl":"http://s2.boohee.cn/house/food_big/big_photo2010426172141685.jpg"}],
"result":"success",
"msg":""}
	
	
=====================================================

食材介绍页面接口
请求：http://localhost:8080/dufood/material/{id}/show/
id是食材ID，例如3848
响应：
{"data":{"material": // 营养素关系
	{"matNutRels":[
		{"nutName":"热量(大卡)",   // 营养素名称
		"id":6920,        
		"content":11.6,      // 营养素含量
		"matId":3848,
		"nutId":1},
		{"nutName":"碳水化合物(克)","id":6921,"content":2.7,"matId":3848,"nutId":2},
		{"nutName":"脂肪(克)","id":6922,"content":0.0,"matId":3848,"nutId":3},
		{"nutName":"蛋白质(克)","id":6923,"content":0.2,"matId":3848,"nutId":4},
		{"nutName":"纤维素(克)","id":6924,"content":1.69,"matId":3848,"nutId":5},
		{"nutName":"热量(大卡)","id":19655,"content":125.0,"matId":3848,"nutId":1},
	
	"relatedMenu":   // 关联菜谱
		[{"name":"酱牛肉",  
		  "imgUrl":"http://s2.boohee.cn/house/food_big/1161088025718.jpg"},  //菜谱图片
		 {"name":"炖牛肉", "imgUrl":"http://s2.boohee.cn/house/food_big/1161088025718.jpg"}],
	"name":"牛肉(肥瘦)",  // 食材名称
	"id":3848, 		   // ID
	"imgUrl":"http://s2.boohee.cn/house/food_big/1161088025718.jpg",   // 图片ULR
	"createTime":1418106026000,
	"modifyTime":1418106026000,
	"summary":" 牛肉是中国人的第二大肉类食品，仅次于猪肉，牛肉蛋白质含量高，而脂肪含量低，所以味道鲜美，受人喜爱，享有“肉中骄子”的美称。 ",   // 描述
	"efficiency":"味甘、性平，归脾、胃经；牛肉具有补脾胃、益气血、强筋骨、消水肿等功效。老年人将牛肉与仙人掌同食，可起到抗癌止痛、提高机体免疫功能的效果；牛肉加红枣炖服，则有助肌肉生长和促伤口愈合之功效。",     // 功效
	"suitableCrowd":null, // 适合人群
	"taboo":null,         // 禁忌
	"pickSkill":null}},   // 挑选技巧
"result":"success",
"msg":""}

=====================================================

菜谱列表页面接口
请求：http://localhost:8080/dufood/menu/getByMaterialIds?materialIds=4924,3373&categoryId=
materialIds是食材ID列表，例如4924,3373;categoryId是方案ID
响应：
{
    "data": {
        "menus": [
            {
            	"id":1567,
            	"name": "西红柿炒鸡蛋（又名，番茄炒鸡蛋）",
                "imgUrl": "http://cp1.douguo.net/upload/caiku/a/0/9/yuan_a03bec309c0448ca1fd739ef71c70809.jpg",
                "mainMaterials": [
                    {
                        "material": {
                            "name": "西红柿",
                            "id": 4924,
                            "imgUrl": null,
                            "createTime": null,
                            "modifyTime": null,
                            "summary": null,
                            "efficiency": null,
                            "suitableCrowd": null,
                            "taboo": null,
                            "pickSkill": null
                        },
                        "id": 12044,
                        "type": "MAIN",
                        "menuId": 1567,
                        "materialId": 4924,
                        "amount": "一个"
                    },
                    {
                        "material": {
                            "name": "鸡蛋",
                            "id": 3373,
                            "imgUrl": "http://s2.boohee.cn/house/food_big/1160630022250.jpg",
                            "createTime": 1418106017000,
                            "modifyTime": 1418106017000,
                            "summary": " 鸡蛋被认为是营养丰富的食品，含有蛋白质、脂肪、卵黄素、卵磷脂、维生素和铁、钙、钾等人体所需要的矿物质。 ",
                            "efficiency": "鸡蛋味甘，性平；具有养心安神，补血，滋阴润燥之功效。",
                            "suitableCrowd": null,
                            "taboo": null,
                            "pickSkill": null
                        },
                        "id": 12045,
                        "type": "MAIN",
                        "menuId": 1567,
                        "materialId": 3373,
                        "amount": "1个"
                    }
                ],
                "assistMaterials": [
                    {
                        "material": {
                            "name": "糖",
                            "id": 4958,
                            "imgUrl": null,
                            "createTime": null,
                            "modifyTime": null,
                            "summary": null,
                            "efficiency": null,
                            "suitableCrowd": null,
                            "taboo": null,
                            "pickSkill": null
                        },
                        "id": 12046,
                        "type": "ASSIST",
                        "menuId": 1567,
                        "materialId": 4958,
                        "amount": ""
                    },
                    {
                        "material": {
                            "name": "盐",
                            "id": 4928,
                            "imgUrl": null,
                            "createTime": null,
                            "modifyTime": null,
                            "summary": null,
                            "efficiency": null,
                            "suitableCrowd": null,
                            "taboo": null,
                            "pickSkill": null
                        },
                        "id": 12047,
                        "type": "ASSIST",
                        "menuId": 1567,
                        "materialId": 4928,
                        "amount": ""
                    }
                ]
            }
            .........         
        ]
    },
    "result": "success",
    "msg": ""
}


=====================================================

套餐列表页面接口
请求：http://localhost:8080/dufood/menu/getGroupsByMaterialIds?materialIds=4924,3373&categoryId=
materialIds是食材ID列表，例如4924,3373;categoryId是方案ID
响应：

{
    "data": {
        "menuGroups": [
            {
                "name": "a",
                "id": 1,
                "menus": [
                    {
                        "name": "番茄鸡蛋羹 家的味道",
                        "id": 1145,
                        "imgUrl": "http://cp1.douguo.net/upload/caiku/c/7/3/yuan_c7da0e7d7c695b0910dbc1198078a983.jpg",
                        "mainMaterials": [
                            {
                                "material": {
                                    "name": "西红柿",
                                    "id": 4924,
                                    "imgUrl": null,
                                    "createTime": null,
                                    "modifyTime": null,
                                    "summary": null,
                                    "efficiency": null,
                                    "suitableCrowd": null,
                                    "taboo": null,
                                    "pickSkill": null
                                },
                                "id": 8829,
                                "type": "MAIN",
                                "menuId": 1145,
                                "materialId": 4924,
                                "amount": "半个"
                            },
                            {
                                "material": {
                                    "name": "鸡蛋",
                                    "id": 3373,
                                    "imgUrl": "http://s2.boohee.cn/house/food_big/1160630022250.jpg",
                                    "createTime": 1418106017000,
                                    "modifyTime": 1418106017000,
                                    "summary": " 鸡蛋被认为是营养丰富的食品，含有蛋白质、脂肪、卵黄素、卵磷脂、维生素和铁、钙、钾等人体所需要的矿物质。 ",
                                    "efficiency": "鸡蛋味甘，性平；具有养心安神，补血，滋阴润燥之功效。",
                                    "suitableCrowd": null,
                                    "taboo": null,
                                    "pickSkill": null
                                },
                                "id": 8830,
                                "type": "MAIN",
                                "menuId": 1145,
                                "materialId": 3373,
                                "amount": "2个"
                            },
                            {
                                "material": {
                                    "name": "温水",
                                    "id": 4925,
                                    "imgUrl": null,
                                    "createTime": null,
                                    "modifyTime": null,
                                    "summary": null,
                                    "efficiency": null,
                                    "suitableCrowd": null,
                                    "taboo": null,
                                    "pickSkill": null
                                },
                                "id": 8831,
                                "type": "MAIN",
                                "menuId": 1145,
                                "materialId": 4925,
                                "amount": ""
                            }
                        ],
                        "assistMaterials": [
                            {
                                "material": {
                                    "name": "葱",
                                    "id": 4926,
                                    "imgUrl": null,
                                    "createTime": null,
                                    "modifyTime": null,
                                    "summary": null,
                                    "efficiency": null,
                                    "suitableCrowd": null,
                                    "taboo": null,
                                    "pickSkill": null
                                },
                                "id": 8832,
                                "type": "ASSIST",
                                "menuId": 1145,
                                "materialId": 4926,
                                "amount": "1根"
                            },
                            {
                                "material": {
                                    "name": "酱油",
                                    "id": 3318,
                                    "imgUrl": "http://s2.boohee.cn/house/food_big/big_photo20102241366.jpg",
                                    "createTime": 1418106016000,
                                    "modifyTime": 1418106016000,
                                    "summary": " 酱油俗称豉油，主要由大豆，淀粉、小麦、食盐经过制油、发酵等程序酿制而成的。酱油的成分比较复杂，除食盐的成分外，还有多种氨基酸、糖类、有机酸、色素及香料民分。以咸味为主，亦有鲜味、香味等。它能增加和改善菜肴的口味，还能增添或改变菜肴的色泽。我国人民在数千年前就已经掌握酿制工艺了。酱油一般有老抽和生抽两种：老抽较咸，用于提色；生抽用于提鲜。 ",
                                    "efficiency": null,
                                    "suitableCrowd": null,
                                    "taboo": null,
                                    "pickSkill": null
                                },
                                "id": 8833,
                                "type": "ASSIST",
                                "menuId": 1145,
                                "materialId": 3318,
                                "amount": "适量"
                            }
                        ]
                    }
                    .......
                ]
            }
            ......
        ]
    },
    "result": "success",
    "msg": ""
}

=====================================================

方案接口
请求：http://localhost:8080/dufood/menu/categorys
响应：

{
    "data": {
        "categorys": [
            {
                "name": "早餐",
                "id": 1
            },
            {
                "name": "午餐",
                "id": 2
            },
            {
                "name": "晚餐",
                "id": 3
            },
            {
                "name": "二人世界",
                "id": 4
            },
            {
                "name": "朋友聚餐",
                "id": 5
            },
            {
                "name": "养生",
                "id": 6
            },
            {
                "name": "西餐",
                "id": 7
            },
            {
                "name": "家常便饭",
                "id": 8
            },
            {
                "name": "下午茶",
                "id": 9
            },
            {
                "name": "中餐",
                "id": 10
            }
        ]
    },
    "result": "success",
    "msg": ""
}

=====================================================

菜谱介绍页面接口
请求：http://localhost:8080/dufood/menu/{id}/show/
id是菜谱ID，例如1145
响应：
{
    "data": {
        "menu": {
        	"name": "番茄鸡蛋羹 家的味道",
            "id": 1145,
            "imgUrl": "http://cp1.douguo.net/upload/caiku/c/7/3/yuan_c7da0e7d7c695b0910dbc1198078a983.jpg",
            "steps": [
                {
                    "id": 10545,
                    "type": "STEP",
                    "imgUrl": "http://cp1.douguo.net/upload/caiku/8/e/8/yuan_8ecc15ca4c27c32e35e7263c4251bee8.jpg",
                    "menuId": 1145,
                    "text": "鸡蛋打散，加入1.5~2倍的温水，打匀，用筛子过滤一遍，放入碗中。蒸锅的水烧开后，上锅改小火蒸，约15分钟",
                    "title": null
                },
                {
                    "id": 10546,
                    "type": "STEP",
                    "imgUrl": "http://cp1.douguo.net/upload/caiku/d/5/6/yuan_d5ef35a6db946b626d9803b94c60e8c6.jpg",
                    "menuId": 1145,
                    "text": "蒸鸡蛋的时候准备配料。西红柿切丁，葱切花",
                    "title": null
                },
                {
                    "id": 10547,
                    "type": "STEP",
                    "imgUrl": "http://cp1.douguo.net/upload/caiku/f/0/9/yuan_f04634a898b795a393727950167ff9a9.jpg",
                    "menuId": 1145,
                    "text": "锅放少许油，烧热后下西红柿丁翻炒片刻至出汁，捞起备用",
                    "title": null
                },
                {
                    "id": 10548,
                    "type": "STEP",
                    "imgUrl": "http://cp1.douguo.net/upload/caiku/d/1/6/yuan_d1347e8fc922753b3d0e98a3467a2ae6.jpg",
                    "menuId": 1145,
                    "text": "鸡蛋羹蒸好后，放上炒熟的西红柿和少量葱花",
                    "title": null
                },
                {
                    "id": 10549,
                    "type": "STEP",
                    "imgUrl": "http://cp1.douguo.net/upload/caiku/e/6/7/yuan_e608775498570d36206dee753094b347.jpg",
                    "menuId": 1145,
                    "text": "撒少许酱油，即完成。",
                    "title": null
                }
            ],
            "tips": [],
            "mainMaterials": [
                {
                    "material": {
                        "name": "西红柿",
                        "id": 4924,
                        "imgUrl": null,
                        "createTime": null,
                        "modifyTime": null,
                        "summary": null,
                        "efficiency": null,
                        "suitableCrowd": null,
                        "taboo": null,
                        "pickSkill": null
                    },
                    "id": 8829,
                    "type": "MAIN",
                    "menuId": 1145,
                    "materialId": 4924,
                    "amount": "半个"
                },
                {
                    "material": {
                        "name": "鸡蛋",
                        "id": 3373,
                        "imgUrl": "http://s2.boohee.cn/house/food_big/1160630022250.jpg",
                        "createTime": 1418106017000,
                        "modifyTime": 1418106017000,
                        "summary": " 鸡蛋被认为是营养丰富的食品，含有蛋白质、脂肪、卵黄素、卵磷脂、维生素和铁、钙、钾等人体所需要的矿物质。 ",
                        "efficiency": "鸡蛋味甘，性平；具有养心安神，补血，滋阴润燥之功效。",
                        "suitableCrowd": null,
                        "taboo": null,
                        "pickSkill": null
                    },
                    "id": 8830,
                    "type": "MAIN",
                    "menuId": 1145,
                    "materialId": 3373,
                    "amount": "2个"
                },
                {
                    "material": {
                        "name": "温水",
                        "id": 4925,
                        "imgUrl": null,
                        "createTime": null,
                        "modifyTime": null,
                        "summary": null,
                        "efficiency": null,
                        "suitableCrowd": null,
                        "taboo": null,
                        "pickSkill": null
                    },
                    "id": 8831,
                    "type": "MAIN",
                    "menuId": 1145,
                    "materialId": 4925,
                    "amount": ""
                }
            ],
            "assistMaterials": [
                {
                    "material": {
                        "name": "葱",
                        "id": 4926,
                        "imgUrl": null,
                        "createTime": null,
                        "modifyTime": null,
                        "summary": null,
                        "efficiency": null,
                        "suitableCrowd": null,
                        "taboo": null,
                        "pickSkill": null
                    },
                    "id": 8832,
                    "type": "ASSIST",
                    "menuId": 1145,
                    "materialId": 4926,
                    "amount": "1根"
                },
                {
                    "material": {
                        "name": "酱油",
                        "id": 3318,
                        "imgUrl": "http://s2.boohee.cn/house/food_big/big_photo20102241366.jpg",
                        "createTime": 1418106016000,
                        "modifyTime": 1418106016000,
                        "summary": " 酱油俗称豉油，主要由大豆，淀粉、小麦、食盐经过制油、发酵等程序酿制而成的。酱油的成分比较复杂，除食盐的成分外，还有多种氨基酸、糖类、有机酸、色素及香料民分。以咸味为主，亦有鲜味、香味等。它能增加和改善菜肴的口味，还能增添或改变菜肴的色泽。我国人民在数千年前就已经掌握酿制工艺了。酱油一般有老抽和生抽两种：老抽较咸，用于提色；生抽用于提鲜。 ",
                        "efficiency": null,
                        "suitableCrowd": null,
                        "taboo": null,
                        "pickSkill": null
                    },
                    "id": 8833,
                    "type": "ASSIST",
                    "menuId": 1145,
                    "materialId": 3318,
                    "amount": "适量"
                }
            ]
        }
    },
    "result": "success",
    "msg": ""
}

===============================================
我的厨房查看我的厨具接口
请求：http://localhost:8080/dufood/myzone/cooker

响应：
{"data":{
	"cooker":[{
		"id":1,          // 厨具ID
		"name":"豆浆机",    // 名称
		"description":" 豆浆机"}]},     //介绍
"result":"success",
"msg":""}

===========================================
查看我的厨具下的食谱
请求：http://cp01-qa-junheng2-qa197.cp01.baidu.com:8080/dufood/cooker/1/show

响应：
{
"data": {
"cookerMenu": {
"menus": [
	{
	"steps": null,
	"materialRels": null,
	"menu": {
		"name": "番茄鸡蛋羹 家的味道",
		"id": 1145,
		"status": "ENABLED",
		"imgUrl": "http://cp1.douguo.net/upload/caiku/c/7/3/yuan_c7da0e7d7c695b0910dbc1198078a983.jpg",
		"mainMaterialCount": 3,
		"assistMaterialCount": 2,
		"createUserId": null,
		"recommendValue": null
	},
	"tips": null,
	"mainMaterials": [
		{
		"material": {
			"name": "西红柿",
			"id": 4924,
			"imgUrl": null,
			"createTime": null,
			"modifyTime": null,
			"summary": null,
			"efficiency": null,
			"suitableCrowd": null,
			"taboo": null,
			"pickSkill": null
		},
		"id": 8829,
		"type": "MAIN",
		"menuId": 1145,
		"materialId": 4924,
		"amount": "半个"
		},
		{
		"material": {
		"name": "鸡蛋",
			"id": 3373,
			"imgUrl": "http://s2.boohee.cn/house/food_big/1160630022250.jpg",
			"createTime": 1418106017000,
			"modifyTime": 1418106017000,
			"summary": " 鸡蛋被认为是营养丰富的食品，含有蛋白质、脂肪、卵黄素、卵磷脂、维生素和铁、钙、钾等人体所需要的矿物质。 ",
			"efficiency": "鸡蛋味甘，性平；具有养心安神，补血，滋阴润燥之功效。",
			"suitableCrowd": null,
			"taboo": null,
			"pickSkill": null
		},
		"id": 8830,
		"type": "MAIN",
		"menuId": 1145,
		"materialId": 3373,
		"amount": "2个"
		},
		{
		"material": {
			"name": "温水",
			"id": 4925,
			"imgUrl": null,
			"createTime": null,
			"modifyTime": null,
			"summary": null,
			"efficiency": null,
			"suitableCrowd": null,
			"taboo": null,
			"pickSkill": null
		},
		"id": 8831,
		"type": "MAIN",
		"menuId": 1145,
		"materialId": 4925,
		"amount": ""
		}
		],
		"assistMaterials": [
		{
		"material": {
			"name": "葱",
			"id": 4926,
			"imgUrl": null,
			"createTime": null,
			"modifyTime": null,
			"summary": null,
			"efficiency": null,
			"suitableCrowd": null,
			"taboo": null,
			"pickSkill": null
			},
			"id": 8832,
			"type": "ASSIST",
			"menuId": 1145,
			"materialId": 4926,
			"amount": "1根"
			},
			{
			"material": {
			"name": "酱油",
			"id": 3318,
			"imgUrl": "http://s2.boohee.cn/house/food_big/big_photo20102241366.jpg",
			"createTime": 1418106016000,
			"modifyTime": 1418106016000,
			"summary": " 酱油俗称豉油，主要由大豆，淀粉、小麦、食盐经过制油、发酵等程序酿制而成的。酱油的成分比较复杂，除食盐的成分外，还有多种氨基酸、糖类、有机酸、色素及香料民分。以咸味为主，亦有鲜味、香味等。它能增加和改善菜肴的口味，还能增添或改变菜肴的色泽。我国人民在数千年前就已经掌握酿制工艺了。酱油一般有老抽和生抽两种：老抽较咸，用于提色；生抽用于提鲜。 ",
			"efficiency": null,
			"suitableCrowd": null,
			"taboo": null,
			"pickSkill": null
			},
			"id": 8833,
			"type": "ASSIST",
			"menuId": 1145,
			"materialId": 3318,
			"amount": "适量"
			}
		],
		"categorys": null,
		"name": "番茄鸡蛋羹 家的味道",
		"id": 1145,
		"status": "ENABLED",
		"imgUrl": "http://cp1.douguo.net/upload/caiku/c/7/3/yuan_c7da0e7d7c695b0910dbc1198078a983.jpg",
		"mainMaterialCount": 3,
		"assistMaterialCount": 2,
		"createUserId": null,
		"recommendValue": null
		}
		],
	"name": " 豆浆机",
	"id": 1,
	"description": " 豆浆机"
}
},
"result": "success",
"msg": ""
}


=============================================
用户登录页面交互接口
请求：http://localhost:8080/dufood/login?phoneNumber=13810494799

响应：
{"data":{"user":
{"name":null,
"id":12,"username":null,"status":"ENABLED","password":"123456",
"authorities":[{"authority":"ROLE_USER"}],"phoneNumber":"13810494799",
"nameType":"PHONE","enabled":true,"accountNonExpired":true,"accountNonLocked":true,
"credentialsNonExpired":true,"createTime":1418357031683,
"modifyTime":1418357031683,"email":null,"sex":null}},
"result":"success","msg":""}

===========================================

用户登录提交手机号接口
请求：http://cp01-qa-junheng2-qa197.cp01.baidu.com:8080/dufood/j_spring_security_check
post参数：
phoneNumber=13810694710

响应：重定向到http://cp01-qa-junheng2-qa197.cp01.baidu.com:8080/dufood 页面


==============================================
搜索食材suggest接口：
请求： http://localhost:8080/dufood/material/search?queryWord=%E7%89%9B%E8%82%89

响应：
{"data":{
	"totalRecord":40, // 总记录数
	"totalPage":2,    // 总页数
	"matOverviews":[
		{"name":"牛肉粉", 
		"id":5706,
		"imgUrl":null},
	{"name":"牛肉酱","id":5637,"imgUrl":null},
	{"name":"瘦牛肉","id":5459,"imgUrl":null},
	{"name":"卤牛肉","id":5017,"imgUrl":null},
	
"result":"success",
"msg":""}

============================================================
