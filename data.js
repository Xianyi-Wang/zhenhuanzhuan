// 甄嬛传题库 - 分为普通难度和地狱难度

// 普通难度题库 - 基础题目，相对简单
const normalQuestionBank = [
    {
        question: "甄嬛最初入宫时的位分是什么？",
        options: ["答应", "常在", "贵人", "嫔"],
        correct: 1
    },
    {
        question: "甄嬛最初的封号是什么？",
        options: ["莞", "熹", "纯", "端"],
        correct: 0
    },
    {
        question: "甄嬛回宫后的封号是什么？",
        options: ["莞", "熹", "纯", "端"],
        correct: 1
    },
    {
        question: "华妃的哥哥是谁？",
        options: ["年羹尧", "隆科多", "鄂尔泰", "张廷玉"],
        correct: 0
    },
 
    {
        question: "华妃最后是怎么死的？",
        options: ["撞墙", "服毒", "上吊", "被赐死"],
        correct: 0
    },
    {
        question: "安陵容最初入宫时的位分是什么？",
        options: ["答应", "常在", "贵人", "嫔"],
        correct: 0
    },
    {
        question: "安陵容的封号是什么？",
        options: ["安", "鹂", "容", "没有封号"],
        correct: 1
    },
    {
        question: "安陵容最擅长制作什么？",
        options: ["香料", "刺绣", "点心", "药膳"],
        correct: 0
    },
    {
        question: "安陵容最后是怎么死的？",
        options: ["服毒", "上吊", "跳井", "被赐死"],
        correct: 0
    },
    {
        question: "安陵容的父亲是什么官？",
        options: ["县丞", "知府", "知县", "县令"],
        correct: 0
    },
    {
        question: "沈眉庄的封号是什么？",
        options: ["惠", "敬", "端", "和"],
        correct: 0
    },
    {
        question: "谁害死了沈眉庄？",
        options: ["安陵容", "皇后", "华妃", "祺贵人"],
        correct: 0
    },
    {
        question: "沈眉庄的孩子叫什么名字？",
        options: ["胧月", "灵犀", "弘曕", "静和"],
        correct: 3
    },
    {
        question: "沈眉庄的孩子是谁的？",
        options: ["皇上", "果郡王", "温实初", "没有孩子"],
        correct: 2
    },
    {
        question: "皇后乌拉那拉氏的闺名是什么？",
        options: ["宜修", "纯元", "柔则", "青樱"],
        correct: 0
    },
    {
        question: "谁害死了纯元皇后？",
        options: ["皇后", "华妃", "端妃", "太后"],
        correct: 0
    },
    {
        question: "甄嬛的父亲叫什么名字？",
        options: ["甄远道", "甄远志", "甄远明", "甄远德"],
        correct: 0
    },
    {
        question: "甄嬛的妹妹叫什么名字？",
        options: ["甄玉娆", "甄玉婉", "甄玉婷", "甄玉娴"],
        correct: 0
    },
    {
        question: "甄嬛的第一个孩子叫什么名字？",
        options: ["胧月", "灵犀", "弘曕", "静和"],
        correct: 0
    },
    {
        question: "甄嬛的第一个孩子胧月是谁的？",
        options: ["皇上", "果郡王", "温实初", "没有孩子"],
        correct: 0
    },
    {
        question: "果郡王的名字是什么？",
        options: ["允礼", "允禵", "允祥", "允禩"],
        correct: 0
    },
    {
        question: "果郡王和甄嬛有几个孩子？",
        options: ["一个", "两个", "三个", "没有"],
        correct: 1
    },
    {
        question: "果郡王和甄嬛第一次见面在哪里？",
        options: ["御花园", "甘露寺", "圆明园", "太液池"],
        correct: 2
    },
    {
        question: "果郡王和甄嬛最后一次见面在哪里？",
        options: ["甘露寺", "圆明园", "桐花台", "没有见面"],
        correct: 2
    },
    {
        question: "谁帮皇上追查甄嬛和果郡王的事情？",
        options: ["夏刈", "夏冬春", "夏常在", "夏贵人"],
        correct: 0
    },
    {
        question: "甄嬛在甘露寺时，谁陷害她？",
        options: ["静白", "静岸", "静慧", "静心"],
        correct: 0
    },
    {
        question: "谁被华妃灌下红花不能生育？",
        options: ["端妃", "敬妃", "沈眉庄", "槿汐"],
        correct: 0
    },
    {
        question: "谁告诉甄嬛皇后杀了皇后？",
        options: ["安陵容", "敬妃", "沈眉庄", "槿汐"],
        correct: 0
    },
    {
        question: "甄嬛的侍女流朱是怎么死的？",
        options: ["撞刀", "服毒", "上吊", "跳井"],
        correct: 0
    },
    {
        question: "甄嬛的侍女流朱是为了什么死的？",
        options: ["救甄嬛", "救沈眉庄", "救安陵容", "救皇后"],
        correct: 0
    },
    {
        question: "甄嬛的侍女浣碧最后和谁在一起？",
        options: ["果郡王", "温实初", "小允子", "没有和任何人"],
        correct: 0
    },
    {
        question: "甄嬛的侍女浣碧最后是怎么死的？",
        options: ["撞棺", "服毒", "上吊", "跳井"],
        correct: 0
    },
    {
        question: "甄嬛的侍女槿汐最后和谁在一起？",
        options: ["苏培盛", "温实初", "小允子", "没有和任何人"],
        correct: 0
    },
    {
        question: "甄嬛最初入宫时住在哪个宫？",
        options: ["碎玉轩", "延禧宫", "景仁宫", "永寿宫"],
        correct: 0
    },
    {
        question: "甄嬛回宫后住在哪个宫？",
        options: ["碎玉轩", "延禧宫", "景仁宫", "永寿宫"],
        correct: 3
    },
    {
        question: "皇后的宫殿叫什么？",
        options: ["碎玉轩", "延禧宫", "景仁宫", "永寿宫"],
        correct: 2
    },
    {
        question: "华妃的宫殿叫什么？",
        options: ["碎玉轩", "延禧宫", "翊坤宫", "永寿宫"],
        correct: 2
    },
    {
        question: "沈眉庄住的宫殿叫什么？",
        options: ["碎玉轩", "延禧宫", "咸福宫", "永寿宫"],
        correct: 2
    },
    {
        question: "甄嬛最初入宫时，谁和她一起住在碎玉轩？",
        options: ["沈眉庄", "安陵容", "淳常在", "没有"],
        correct: 2
    },
    {
        question: "安陵容的宫殿叫什么？",
        options: ["碎玉轩", "延禧宫", "咸福宫", "永寿宫"],
        correct: 1
    },
    {
        question: "淳常在是怎么死的？",
        options: ["被淹死", "被毒死", "被杀死", "被赐死"],
        correct: 0
    },
    {
        question: "谁害死了淳常在？",
        options: ["华妃", "皇后", "安陵容", "祺贵人"],
        correct: 0
    },
    {
        question: "甄嬛最初入宫时，在哪里发现有人给她下毒？",
        options: ["碎玉轩的桂花树下", "延禧宫", "景仁宫", "没有发现"],
        correct: 0
    },
    {
        question: "果郡王的母亲是谁？",
        options: ["德妃", "舒太妃", "惠妃", "温僖贵妃"],
        correct: 1
    }
];

// 地狱难度题库（50道题）- 更细节、更难的题目
const hellQuestionBank = [
    // {
    //     question: "纯元皇后的名字是什么？",
    //     options: ["宜修", "纯元", "柔则", "青樱"],
    //     correct: 2
    // },
    {
        question: "太医章弥最后的结局是什么？",
        options: ["被处死", "被流放", "自尽", "告老还乡"],
        correct: 3
    },
    {
        question: "皇后最开始要把甄嬛分到哪个宫？",
        options: ["碎玉轩", "延禧宫", "承乾宫", "永寿宫"],
        correct: 2
    },
    {
        question: "棋嫔和欣贵人住的宫殿叫什么？",
        options: ["储秀宫", "延禧宫", "咸福宫", "永寿宫"],
        correct: 0
    },
 
    {
        question: "甄嬛最初入宫时，谁教她宫规？",
        options: ["芳若", "槿汐", "流朱", "浣碧"],
        correct: 0
    },
    {
        question: "甄嬛发现碎玉轩的桂花树下有毒，是谁下的？",
        options: ["华妃", "皇后", "安陵容", "富察贵人"],
        correct: 1
    },
    {
        question: "淳常在是多少岁进宫的？",
        options: ["13岁", "14岁", "15岁", "16岁"],
        correct: 1
    },
    {
        question: "眉庄给皇后请安因故迟误，被罚俸几个月？",
        options: ["一个月", "两个月", "三个月", "四个月"],
        correct: 0
    },
    {
        question: "安嫔冰舞复宠是哪一天？",
        options: ["正月十五", "除夕夜", "二月初二", "二月初九"],
        correct: 0
    },
    {
        question: "甄嬛被赐浴汤泉宫是什么时候？",
        options: ["三月十三", "三月初三", "四月十六", "三月十七"],
        correct: 0
    },
    {
        question: "陵容流产时，怀孕几个月了？",
        options: ["3个月", "4个月", "5个月", "6个月"],
        correct: 2
    },
    {
        question: "弘瞻、灵犀是几月几日出生的？",
        options: ["八月十五", "十月十四", "九月十五", "九月十六"],
        correct: 0
    },
    {
        question: "年羹尧平定西北回来，皇上请年羹尧华妃一同用午膳时，皇上说自己爱吃什么菜？",
        options: ["鸭子汤", "炙羊肉", "燕窝鸭子", "糟鹅"],
        correct: 1
    },
    {
        question: "莞贵人和安常在一起写香料方子，哪个字写错了被安常在笑？",
        options: ["棠", "熏", "麝", "藿"],
        correct: 3
    },
    {
        question: "皇上送莞贵人的蜀锦玉鞋上的花样是什么？",
        options: ["鸳鸯", "大雁", "杜鹃", "凤凰"],
        correct: 0
    },
    {
        question: "华妃送了墨狐皮做成的大氅送给太后，因为太后潜心礼佛，里子上是什么花纹？",
        options: ["西番莲", "万年青", "蔷薇宝相", "佛手"],
        correct: 0
    },
    {
        question: "被年羹尧参奏不可用，于是被皇上下旨革除的直隶巡抚是谁？",
        options: ["汪景祺", "赵之垣", "胡期恒", "钱名世"],
        correct: 1
    },
    {
        question: "甄嬛封贵妃，沛国公府送了什么贺礼？",
        options: ["泥金真丝绡麋竹扇", "文犀辟毒筷", "珊瑚手钏", "鸽子血红宝石"],
        correct: 1
    },
    {
        question: "安陵容送了甄嬛什么东西，被甄嬛转送给了浣碧？",
        options: ["浮光锦", "蜀锦", "云锦", "织锦缎"],
        correct: 0
    },
    {
        question: "长相守是什么乐器？",
        options: ["琵琶", "笛子", "古琴", "箫"],
        correct: 1
    },
    {
        question: "华妃看到内务府把哪种新品种的菊花都搬到沈眉庄宫中而大发雷霆？",
        options: ["紫菊", "蓝菊", "红菊", "绿菊"],
        correct: 3
    },
    {
        question: "内务府给安陵容拟的三个封号是什么？",
        options: ["俪、肃、文", "鹂、音、丽", "婉、慧、静", "柔、温、淑"],
        correct: 0
    },
    {
        question: "皇后赏给菀贵人的鸳鸯和合屏风，是哪位总督进献的？",
        options: ["两江总督", "两广总督", "直隶总督", "两湖总督"],
        correct: 1
    },
    {
        question: "淳小主在碎玉轩玩骰子砸坏了皇上赏的什么花瓶？",
        options: ["翡翠花瓶", "琉璃花瓶", "珐琅花瓶", "玻璃花瓶"],
        correct: 2
    },
    {
        question: "端妃见皇上嘴角起皮，让皇上在水里加一些什么去去火？",
        options: ["金银花", "菊花", "莲子心", "薄荷叶"],
        correct: 1
    },
    {
        question: "除夕夜甄嬛佯病与槿汐等人剪纸，瑾汐剪的什么图案？",
        options: ["和合二仙", "孔雀开屏", "鸳鸯戏水", "西施浣衣"],
        correct: 0
    },
    {
        question: "安陵容封鹂妃时，苏培盛让内务府送多少只黄鹂鸟给她'祝贺'？",
        options: ["10只", "30只", "50只", "70只"],
        correct: 2
    },
    {
        question: "安陵容进宫时被留下，是因为甄嬛给她头上簪了什么花？",
        options: ["玫瑰", "秋海棠", "芍药", "栀子"],
        correct: 1
    },
    {
        question: "金缕衣有两件，一件给了舒太妃，另一件在谁那里？",
        options: ["安陵容", "沈眉庄", "皇后", "华妃"],
        correct: 0
    },
    {
        question: "四阿哥在圆明园里伺候他的嬷嬷姓什么？",
        options: ["李", "张", "夏", "王"],
        correct: 1
    },
    {
        question: "温宜周岁宴的时候果郡王见甄嬛的脚后引用了哪位古人的诗句？",
        options: ["蔡伸", "李白", "李煜", "杜甫"],
        correct: 2
    },
    {
        question: "沈眉庄爱吃甄嬛宫中的哪种点心？",
        options: ["牛乳菱粉甜糕", "藕粉桂花糖糕", "枣泥山药糕", "蟹粉酥"],
        correct: 1
    },
    {
        question: "华妃最喜欢吃哪种点心？",
        options: ["牛乳菱粉甜糕", "藕粉桂花糖糕", "枣泥山药糕", "蟹粉酥"],
        correct: 1
    },
    {
        question: "以下哪个不是舒痕胶里的成分？",
        options: ["琥珀", "珍珠粉", "蜂蜜", "牡丹粉"],
        correct: 3
    },
    {
        question: "夏冬春参加选秀时穿的衣服是什么料子？",
        options: ["苏绣", "蜀绣", "粤绣", "湘绣"],
        correct: 0
    },
    {
        question: "温实初最开始私下向甄嬛提亲想送给她什么？",
        options: ["玉簪", "玉壶", "玉镯", "玉佩"],
        correct: 1
    },
    {
        question: "鹅梨帐中香遇到什么花迷情效果大增？",
        options: ["玫瑰花", "依兰花", "百合花", "丁香花"],
        correct: 1
    }, 
    {
        question: "叶澜依做百骏园驯马女之前是做什么的？",
        options: ["喂马女", "驯兽女", "兽医", "戏子"],
        correct: 1
    },
    {
        question: "三阿哥初遇瑛贵人时，他们谈论了什么花？",
        options: ["美人面", "玉兰花", "合欢花", "芍药"],
        correct: 0
    },
    {
        question: "安陵容最喜欢什么花？",
        options: ["梨花", "梅花", "海棠", "桃花"],
        correct: 3
    },
    {
        question: "玉娆和慎贝勒比画技，以什么为题？",
        options: ["春景", "夏景", "秋景", "冬景"],
        correct: 0
    },
    {
        question: "余莺儿在太后那里唱了什么，皇帝觉得不错？",
        options: ["牡丹亭", "桃花扇", "长生殿", "永团圆"],
        correct: 3
    },
    {
        question: "甄嬛刚进宫时收到惊吓，流朱提出做什么吃的哄甄嬛开心？",
        options: ["藕粉桂花糖糕", "桂花蜜糖", "梅花糕", "枣泥山药糕"],
        correct: 1
    },
    {
        question: "管慎刑司的嬷嬷是哪位",
        options: ["精心", "精奇", "净心", "净水"],
        correct: 1
    },
    {
        question: "皇上送给甄嬛的蜀锦玉鞋上缀着什么？",
        options: ["合浦明珠", "进贡的东珠", "大井珍珠", "琼州珍珠"],
        correct: 0
    },
    {
        question: "三阿哥是几岁开始上书房？",
        options: ["3岁", "4岁", "5岁", "6岁"],
        correct: 2
    },
    {
        question: "浣碧在果郡王府住处叫什么？",
        options: ["珍宝阁", "文渊阁", "雨花阁", "常青阁"],
        correct: 3
    },
    {
        question: "颂芝姓什么？",
        options: ["乔", "周", "肖", "曹"],
        correct: 0
    },
    {
        question: "年羹尧最后被贬到哪里做城门看守？",
        options: ["扬州", "苏州", "济州", "杭州"],
        correct: 3
    },
    {
        question: "以下哪位参加过与嬛嬛同一批的选秀？",
        options: ["刘莲子", "方淳意", "齐月宾", "孟静娴"],
        correct: 0
    },
    {
        question: "沈眉庄用了谁的茶具感染的时疫？",
        options: ["小何子", "小德子", "小安子", "小六子"],
        correct: 1
    },
    {
        question: "皇帝觉得宫里谁的琵琶最好？",
        options: ["端妃", "敬妃", "安陵容", "瑛贵人"],
        correct: 0
    },
    {
        question: "皇帝觉得瑛贵人什么乐器弹得最好？",
        options: ["琵琶", "古琴", "古筝", "笛子"],
        correct: 2
    },
    {
        question: "荣敦亲王的儿子叫什么名字？",
        options: ["弘暄", "弘轩", "弘烜", "弘玹"],
        correct: 0
    },
    {
        question: "静白建议宁贵人供奉几斤海灯？",
        options: ["两斤", "四斤", "五斤", "十斤"],
        correct: 0
    },
    {
        question: "陪安陵容选秀的姨娘姓什么？",
        options: ["云", "萧", "林", "苏"],
        correct: 1
    },
    {
        question: "安嫔冰舞复宠是哪一天？",
        options: ["正月十五", "除夕夜", "二月初二", "二月初九"],
        correct: 0
    },
    {
        question: "甄嬛与允礼合奏长相思是什么节日？",
        options: ["元宵节", "中秋节", "重阳节", "上巳节"],
        correct: 3
    },
    {
        question: "甄嬛在甘露寺修行时，果郡王经常给甄嬛送信说谁的消息？",
        options: ["甄远道", "沈眉庄", "胧月", "安陵容"],
        correct: 2
    },
    {
        question: "甄嬛刚生下胧月时给她取的名字是什么？",
        options: ["晚晚", "婉婉", "绾绾", "宛宛"],
        correct: 2
    },
    {
        question: "皇后将福子安排去服侍华妃的时候福子几岁？",
        options: ["15岁", "16岁", "17岁", "18岁"],
        correct: 2
    }
];

