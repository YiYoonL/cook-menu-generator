// import {main} from '../index'
// console.log('axios', axios)
const app = Vue.createApp({
    data () {
        return {
            vegeMainTitle: [],
            protMainTitle: [],
            carbMainTitle: [],
            vegeObj: {},
            protObj: {},
            carbObj: {},
            weekArr: [{
                day: '周一',
                lunch: [],
                dinner: []
            },{
                day: '周二',
                lunch: [],
                dinner: []
            },{
                day: '周三',
                lunch: [],
                dinner: []
            },{
                day: '周四',
                lunch: [],
                dinner: []
            },{
                day: '周五',
                lunch: [],
                dinner: []
            },{
                day: '周六',
                lunch: [],
                dinner: []
            },{
                day: '周日',
                lunch: [],
                dinner: []
            },]
        }
    },
    mounted() {
        this.getAllData()
    },
    methods: {
        async getAllData () {
            console.log('get');
            const res = await axios.get('/api/menu')
            const {
                vegetableTagObj,
                protainTagObj,
                carbohydrateTagObj
            } = res.data.data
            this.vegeObj = vegetableTagObj
            this.protObj = protainTagObj
            this.carbObj = carbohydrateTagObj
            console.log(vegetableTagObj);
            for (const key in vegetableTagObj) {
                const menuObj = {
                    name: key
                }
                const tagObj = vegetableTagObj[key]
                // console.log('tagobj', this.vegeMainTitle)
                const tagArr = []
                for (const tag in tagObj) {
                    // console.log('tagobj',tag, tagObj[tag])
                    const obj = {
                        name: tag,
                        children: tagObj[tag]
                    }
                    switch (tag) {
                        case '菠菜':
                            this.weekArr[0].dinner.push(tagObj[tag][0])
                            this.weekArr[2].dinner.push(tagObj[tag][0])
                            break;
                        case '生菜/油麦菜':
                            this.weekArr[5].lunch.push(tagObj[tag][0])
                            this.weekArr[3].dinner.push(tagObj[tag][0])
                            break;
                        case '菜心':
                            this.weekArr[1].lunch.push(tagObj[tag][0])
                            this.weekArr[3].lunch.push(tagObj[tag][0])
                            break;
                        case '青菜':
                            this.weekArr[4].lunch.push(tagObj[tag][0])
                            this.weekArr[6].dinner.push(tagObj[tag][0])
                            break;
                        case '白菜':
                            this.weekArr[0].lunch.push(tagObj[tag][0])
                            this.weekArr[1].dinner.push(tagObj[tag][0])
                            break;
                        case '根茎':
                            this.weekArr[5].dinner.push(tagObj[tag][0])
                            this.weekArr[6].lunch.push(tagObj[tag][0])
                            break;
                        case '包菜':
                            this.weekArr[2].lunch.push(tagObj[tag][0])
                            this.weekArr[4].dinner.push(tagObj[tag][0])
                            break;


                        case '花菜':
                            this.weekArr[4].lunch.push(tagObj[tag][0])
                            this.weekArr[6].lunch.push(tagObj[tag][0])
                            break;
                        case '西红柿':
                            this.weekArr[1].lunch.push(tagObj[tag][0])
                            this.weekArr[2].dinner.push(tagObj[tag][0])
                            break;
                        case '长绿':
                            this.weekArr[4].dinner.push(tagObj[tag][0])
                            this.weekArr[6].dinner.push(tagObj[tag][0])
                            break;
                        case '高热量瓜':
                            this.weekArr[2].lunch.push(tagObj[tag][0])
                            this.weekArr[0].dinner.push(tagObj[tag][0])
                            break;
                        case '白瓜':
                            this.weekArr[1].dinner.push(tagObj[tag][0])
                            this.weekArr[3].dinner.push(tagObj[tag][0])
                            break;
                        case '绿瓜':
                            this.weekArr[5].dinner.push(tagObj[tag][0])
                            this.weekArr[3].lunch.push(tagObj[tag][0])
                            break;
                        case '粉瓜':
                            this.weekArr[0].lunch.push(tagObj[tag][0])
                            this.weekArr[5].lunch.push(tagObj[tag][0])
                            break;
                        

                        case '青椒':
                            this.weekArr[4].lunch.push(tagObj[tag][0])
                            break;
                        case '配菜':
                            this.weekArr[0].dinner.push(tagObj[tag][0])
                            this.weekArr[1].dinner.push(tagObj[tag][1])
                            this.weekArr[2].dinner.push(tagObj[tag][2])
                            this.weekArr[3].dinner.push(tagObj[tag][0])
                            this.weekArr[5].dinner.push(tagObj[tag][1])
                            this.weekArr[6].dinner.push(tagObj[tag][2])
                            break;
                        case '菇类':
                            this.weekArr[0].lunch.push(tagObj[tag][0])
                            this.weekArr[1].lunch.push(tagObj[tag][1])
                            this.weekArr[2].lunch.push(tagObj[tag][2])
                            this.weekArr[3].lunch.push(tagObj[tag][0])
                            this.weekArr[4].dinner.push(tagObj[tag][1])
                            this.weekArr[5].lunch.push(tagObj[tag][2])
                            this.weekArr[6].lunch.push(tagObj[tag][0])
                            break;
                    }
                    tagArr.push(obj)
                        // const element = tagObj[tag];
                }
                menuObj.content = tagArr
                this.vegeMainTitle.push(menuObj)
            }

            for (const key in protainTagObj) {
                const menuObj = {
                    name: key
                }
                const tagObj = protainTagObj[key]
                // console.log('tagobj', this.protMainTitle)
                const tagArr = []
                for (const tag in tagObj) {
                    // console.log('tagobj',tag, tagObj[tag])
                    const obj = {
                        name: tag,
                        children: tagObj[tag]
                    }
                    
                    switch (tag) {
                        case '鸡肉':
                            this.weekArr[0].lunch.push(tagObj[tag][0])
                            this.weekArr[2].lunch.push(tagObj[tag][0])
                            this.weekArr[4].dinner.push(tagObj[tag][0])
                            this.weekArr[1].dinner.push(tagObj[tag][1])
                            this.weekArr[3].lunch.push(tagObj[tag][1])
                            break;
                        case '豆类':
                            this.weekArr[6].lunch.push(tagObj[tag][0])
                            this.weekArr[0].dinner.push(tagObj[tag][0])
                            break;
                        case '深海鱼':
                            this.weekArr[2].dinner.push(tagObj[tag][0])
                            break;
                        case '虾':
                            this.weekArr[3].dinner.push(tagObj[tag][0])
                            break;
                        case '淡水鱼':
                            this.weekArr[5].dinner.push(tagObj[tag][0])
                            this.weekArr[6].dinner.push(tagObj[tag][0])
                            break;
                        case '鸡蛋':
                            this.weekArr[1].lunch.push(tagObj[tag][0])
                            break;
                        case '牛肉':
                            this.weekArr[4].lunch.push(tagObj[tag][0])
                            break;
                        case '海鲜':
                            this.weekArr[5].lunch.push(tagObj[tag][0])
                            break;
                    }
                    tagArr.push(obj)
                        // const element = tagObj[tag];
                }
                menuObj.content = tagArr
                this.protMainTitle.push(menuObj)
            }

            for (const key in carbohydrateTagObj) {
                const menuObj = {
                    name: key
                }
                const tagObj = carbohydrateTagObj[key]
                // console.log('tagobj', this.carbMainTitle)
                const tagArr = []
                for (const tag in tagObj) {
                    // console.log('tagobj',tag, tagObj[tag])
                    const obj = {
                        name: tag,
                        children: tagObj[tag]
                    }
                    
                    switch (tag) {
                        case '米':
                            this.weekArr[0].lunch.push(tagObj[tag][0])
                            this.weekArr[1].lunch.push(tagObj[tag][0])
                            this.weekArr[2].lunch.push(tagObj[tag][0])
                            this.weekArr[3].lunch.push(tagObj[tag][0])
                            this.weekArr[4].lunch.push(tagObj[tag][0])
                            break;
                        case '粉丝':
                            this.weekArr[5].dinner.push(tagObj[tag][0])
                            this.weekArr[6].dinner.push(tagObj[tag][0])
                            break;
                        case '块茎':
                            this.weekArr[0].dinner.push(tagObj[tag][0])
                            this.weekArr[1].dinner.push(tagObj[tag][1])
                            this.weekArr[2].dinner.push(tagObj[tag][2])
                            this.weekArr[3].dinner.push(tagObj[tag][3])
                            break;
                        case '玉米':
                            this.weekArr[4].dinner.push(tagObj[tag][0])
                            this.weekArr[5].lunch.push(tagObj[tag][0])
                            break;
                        case '面条':
                            this.weekArr[6].lunch.push(tagObj[tag][1])
                            break;
                        case '鸡蛋':
                            this.weekArr[1].lunch.push(tagObj[tag][0])
                            break;
                        case '牛肉':
                            this.weekArr[4].lunch.push(tagObj[tag][0])
                            break;
                        case '海鲜':
                            this.weekArr[5].dinner.push(tagObj[tag][0])
                            break;
                    }
                    tagArr.push(obj)
                        // const element = tagObj[tag];
                }
                menuObj.content = tagArr
                this.carbMainTitle.push(menuObj)
            }
        },
        getMenu () {
            const greenVege = this.vegeMainTitle.find(item => {
                return item.name === '绿叶菜'
            })
            console.log(greenVege);
            // this.weekArr.dinner.push()
        }
    }
})

const vm = app.mount('#app')