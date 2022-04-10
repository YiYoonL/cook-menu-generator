const carbohydrateData = `
Name,price,tags,intake,quality
白米,,米,,
黑米,,米,,
紫米,,米,,
糙米,,米,,
燕麦,,米,,
红薯,,块茎,,
紫薯,,块茎,,
土豆,,块茎,100,半个
南瓜,,块茎,100,
玉米,,玉米,,
白面条,,面条,,
荞麦面,,面条,,
意面,,面条,,
粉丝,,面条,25,半捆
白面,,面粉,,
全麦吐司,,面粉,,
杂面窝窝头,,面粉,,
`

const vegetableData = `
Name,price,energy,tags,intake,quality
菠菜,3,,"绿叶菜, 菠菜",100,小半盒
生菜,,,"油麦菜/生菜, 绿叶菜",,
油麦菜,,,"油麦菜/生菜, 绿叶菜",,
菜心,,,"绿叶菜, 菜心",,
小青菜,,,"绿叶菜, 青菜",,
鸡毛菜,,,"绿叶菜, 青菜",,
上海青,,,"绿叶菜, 青菜",,
大白菜,,,"白菜, 绿叶菜",,
小白菜,2.5,,"白菜, 绿叶菜",100,5颗左右
娃娃菜,,,"白菜, 绿叶菜",,
银丝白,,,"白菜, 绿叶菜",,
芹菜,3,,"绿叶菜, 茎类",150,1把
空心菜,,,"绿叶菜, 茎类",,
红苋菜,,,"绿叶菜, 茎类",,
包菜,,,"包菜, 绿叶菜",,
紫包菜,,,"包菜, 绿叶菜",,
西兰花,,,"花菜, 非叶菜",,
花菜,,,"花菜, 非叶菜",,
西红柿,2,15,"西红柿, 非叶菜",250,1个
荷兰豆,,30,"绿绿, 非叶菜",100,一大把
秋葵,1,25,"绿绿, 非叶菜",50," 4个"
四季豆,,24,"绿绿, 非叶菜",,
胡萝卜,,32,"非叶菜, 高热量瓜",100,半个
莲藕,,47,"非叶菜, 高热量瓜",,
白萝卜,,16,"白瓜, 非叶菜",,
冬瓜,,10,"白瓜, 非叶菜",,
黄瓜,1.2,16,"绿瓜, 非叶菜",100,三分之一根
莴笋,3.5,15,"绿瓜, 非叶菜",180,一根
丝瓜,,20,"粉瓜, 非叶菜",,
茄子,,23,"粉瓜, 非叶菜",,
青椒,1.5,22,配菜,50,1个
豆芽,,,配菜,,
木耳,,,配菜,5,10颗
紫菜,,,配菜,,
海带,,,配菜,,
魔芋,,,配菜,,
香菇,1,,菇类,50,4个
金针菇,,,菇类,,
口菇,,,菇类,,
秀珍菇,,,菇类,,
海鲜菇,1,,菇类,50,4根
鸡腿菇,,,菇类,,
茶树菇,,,菇类,,
杏鲍菇,,,菇类,,
`

function createDocumentArr (str, num) {
    let splitArr = str.split('\n')
    splitArr = splitArr.map(group => {
        const groupArr = group.split(',')
        return groupArr
    })
    splitArr.pop()
    splitArr.shift()
    return splitArr
}

function createDocumentObj(docArr) {
    const titleArr = docArr.shift()
    const res = []
    docArr.forEach(itemArr => {
        const item = {}
        itemArr.forEach((val, index) => {
            item[titleArr[index]] = val
        }) 
        res.push(item)
    })
    return res
}

const docArr = createDocumentArr(vegetableData, 6)

console.log(createDocumentObj(docArr));