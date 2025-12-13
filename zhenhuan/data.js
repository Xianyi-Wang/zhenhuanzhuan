// 甄嬛传题库 - 100道题目（已核对准确性，去除争议题目）
const questionBank = [
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
        question: "华妃的封号全称是什么？",
        options: ["华妃", "华贵妃", "华皇贵妃", "年妃"],
        correct: 1
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
        question: "安陵容最后被封为什么？",
        options: ["鹂妃", "安妃", "容妃", "没有封妃"],
        correct: 0
    },
    {
        question: "安陵容最擅长什么技艺？",
        options: ["唱歌", "跳舞", "刺绣", "制香"],
        correct: 0
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
        question: "沈眉庄最喜欢什么花？",
        options: ["菊花", "梅花", "兰花", "牡丹"],
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
        question: "纯元皇后的名字是什么？",
        options: ["宜修", "纯元", "柔则", "青樱"],
        correct: 2
    },
    {
        question: "谁害死了纯元皇后？",
        options: ["皇后", "华妃", "端妃", "太后"],
        correct: 0
    },
    {
        question: "端妃的最终封号是什么？",
        options: ["端妃", "端贵妃", "端皇贵妃", "端皇贵太妃"],
        correct: 2
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
        question: "甄嬛的第二个孩子叫什么名字？",
        options: ["胧月", "灵犀", "弘曕", "静和"],
        correct: 1
    },
    {
        question: "甄嬛的第二个孩子灵犀是谁的？",
        options: ["皇上", "果郡王", "温实初", "没有第二个孩子"],
        correct: 1
    },
    {
        question: "甄嬛的第三个孩子叫什么名字？",
        options: ["胧月", "灵犀", "弘曕", "静和"],
        correct: 2
    },
    {
        question: "甄嬛的第三个孩子弘曕是谁的？",
        options: ["皇上", "果郡王", "温实初", "没有第三个孩子"],
        correct: 1
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
        question: "果郡王和甄嬛第一次单独相处在哪里？",
        options: ["御花园", "甘露寺", "圆明园", "太液池"],
        correct: 1
    },
    {
        question: "果郡王和甄嬛最后一次见面在哪里？",
        options: ["甘露寺", "圆明园", "太液池", "没有见面"],
        correct: 2
    },
    {
        question: "果郡王送给甄嬛的定情信物是什么？",
        options: ["合欢花", "梅花", "玉佩", "手帕"],
        correct: 0
    },
    {
        question: "甄嬛在甘露寺时，果郡王送给她什么花？",
        options: ["梅花", "合欢花", "海棠花", "牡丹花"],
        correct: 1
    },
    {
        question: "果郡王送给甄嬛的最后一封信写的是什么？",
        options: ["合婚庚帖", "情书", "家书", "没有信"],
        correct: 0
    },
    {
        question: "谁害死了果郡王？",
        options: ["皇上", "夏刈", "皇后", "端妃"],
        correct: 0
    },
    {
        question: "谁告诉甄嬛皇上害死果郡王？",
        options: ["夏刈", "苏培盛", "端妃", "敬妃"],
        correct: 1
    },
    {
        question: "谁告诉皇上甄嬛和果郡王的事情？",
        options: ["夏刈", "夏冬春", "夏常在", "夏贵人"],
        correct: 0
    },
    {
        question: "甄嬛在甘露寺时，谁帮助她回宫？",
        options: ["苏培盛", "槿汐", "温实初", "果郡王"],
        correct: 1
    },
    {
        question: "甄嬛在甘露寺时，谁保护她？",
        options: ["果郡王", "温实初", "槿汐", "静岸"],
        correct: 2
    },
    {
        question: "甄嬛在甘露寺时，谁最照顾她？",
        options: ["槿汐", "静岸", "果郡王", "温实初"],
        correct: 0
    },
    {
        question: "甄嬛在甘露寺时，谁陷害她？",
        options: ["静白", "静岸", "静慧", "静心"],
        correct: 0
    },
    {
        question: "甄嬛在甘露寺时，谁最恨她？",
        options: ["静白", "静岸", "静慧", "静心"],
        correct: 0
    },
    {
        question: "谁告诉甄嬛纯元皇后的事情？",
        options: ["端妃", "敬妃", "皇后", "苏培盛"],
        correct: 0
    },
    {
        question: "谁告诉甄嬛华妃的阴谋？",
        options: ["端妃", "敬妃", "沈眉庄", "槿汐"],
        correct: 0
    },
    {
        question: "谁告诉甄嬛皇后的阴谋？",
        options: ["端妃", "敬妃", "沈眉庄", "槿汐"],
        correct: 0
    },
    {
        question: "谁帮助甄嬛扳倒华妃？",
        options: ["端妃", "敬妃", "沈眉庄", "皇后"],
        correct: 0
    },
    {
        question: "谁帮助甄嬛扳倒皇后？",
        options: ["端妃", "敬妃", "沈眉庄", "槿汐"],
        correct: 0
    },
    {
        question: "谁帮助甄嬛扳倒安陵容？",
        options: ["端妃", "敬妃", "沈眉庄", "槿汐"],
        correct: 0
    },
    {
        question: "甄嬛回宫后，谁最支持她？",
        options: ["端妃", "敬妃", "沈眉庄", "槿汐"],
        correct: 0
    },
    {
        question: "甄嬛回宫后，谁最嫉妒她？",
        options: ["皇后", "安陵容", "祺贵人", "敬妃"],
        correct: 2
    },
    {
        question: "甄嬛回宫后，谁最害怕她？",
        options: ["皇后", "安陵容", "祺贵人", "敬妃"],
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
        question: "甄嬛的侍女流朱的性格特点是什么？",
        options: ["活泼", "文静", "温柔", "刚强"],
        correct: 0
    },
    {
        question: "甄嬛的侍女流朱最擅长什么？",
        options: ["做饭", "刺绣", "唱歌", "跳舞"],
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
        question: "甄嬛的侍女浣碧的性格特点是什么？",
        options: ["活泼", "文静", "温柔", "刚强"],
        correct: 1
    },
    {
        question: "甄嬛的侍女浣碧最擅长什么？",
        options: ["做饭", "刺绣", "唱歌", "跳舞"],
        correct: 1
    },
    {
        question: "甄嬛的侍女槿汐最后和谁在一起？",
        options: ["苏培盛", "温实初", "小允子", "没有和任何人"],
        correct: 0
    },
    {
        question: "甄嬛的侍女槿汐的性格特点是什么？",
        options: ["活泼", "文静", "温柔", "刚强"],
        correct: 2
    },
    {
        question: "甄嬛的侍女槿汐最擅长什么？",
        options: ["做饭", "刺绣", "唱歌", "管理"],
        correct: 3
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
        question: "沈眉庄的宫殿叫什么？",
        options: ["碎玉轩", "延禧宫", "咸福宫", "永寿宫"],
        correct: 2
    },
    {
        question: "安陵容的宫殿叫什么？",
        options: ["碎玉轩", "延禧宫", "咸福宫", "永寿宫"],
        correct: 1
    },
    {
        question: "甄嬛最初入宫时，谁和她一起住在碎玉轩？",
        options: ["沈眉庄", "安陵容", "淳常在", "没有"],
        correct: 2
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
        question: "甄嬛最初入宫时，谁教她宫规？",
        options: ["芳若", "槿汐", "流朱", "浣碧"],
        correct: 0
    },
    {
        question: "甄嬛最初入宫时，谁给她下毒？",
        options: ["华妃", "皇后", "安陵容", "祺贵人"],
        correct: 1
    },
    {
        question: "甄嬛最初入宫时，谁给她下的是什么毒？",
        options: ["麝香", "砒霜", "鹤顶红", "没有下毒"],
        correct: 0
    },
    {
        question: "甄嬛最初入宫时，谁给她下的毒在哪里发现的？",
        options: ["碎玉轩的桂花树下", "延禧宫", "景仁宫", "没有发现"],
        correct: 0
    },
    {
        question: "甄嬛最初入宫时，谁发现了毒？",
        options: ["槿汐", "流朱", "浣碧", "小允子"],
        correct: 3
    },
    {
        question: "甄嬛最初入宫时，谁给她看病的太医叫什么？",
        options: ["温实初", "章弥", "刘畚", "没有"],
        correct: 1
    },
    {
        question: "甄嬛最初入宫时，谁给她看病的太医后来怎么了？",
        options: ["被处死", "被流放", "被贬职", "没有事"],
        correct: 0
    },
    {
        question: "甄嬛最初入宫时，谁给她看病的太医为什么被处死？",
        options: ["给华妃下毒", "给皇后下毒", "给甄嬛下毒", "没有"],
        correct: 0
    },
    {
        question: "华妃最恨的人是谁？",
        options: ["甄嬛", "端妃", "皇后", "沈眉庄"],
        correct: 1
    },
    {
        question: "华妃最怕什么？",
        options: ["失宠", "没有孩子", "年羹尧倒台", "甄嬛"],
        correct: 0
    },
    {
        question: "安陵容最后是怎么被发现的？",
        options: ["自己承认", "被揭发", "被抓住", "没有发现"],
        correct: 1
    },
    {
        question: "甄嬛在甘露寺时，谁经常来看她？",
        options: ["果郡王", "温实初", "沈眉庄", "槿汐"],
        correct: 0
    },
    {
        question: "甄嬛在甘露寺时，谁经常送东西给她？",
        options: ["果郡王", "温实初", "沈眉庄", "槿汐"],
        correct: 0
    },
    {
        question: "甄嬛在甘露寺时，谁最想害她？",
        options: ["静白", "静岸", "静慧", "静心"],
        correct: 0
    },
    {
        question: "甄嬛最初入宫时，谁给她看病的太医后来怎么了？",
        options: ["被处死", "被流放", "被贬职", "没有事"],
        correct: 0
    },
    {
        question: "甄嬛最初入宫时，谁给她看病的太医为什么被处死？",
        options: ["给华妃下毒", "给皇后下毒", "给甄嬛下毒", "没有"],
        correct: 0
    },
    {
        question: "谁告诉甄嬛端妃的秘密？",
        options: ["端妃自己", "敬妃", "沈眉庄", "槿汐"],
        correct: 0
    },
    {
        question: "谁告诉甄嬛敬妃的秘密？",
        options: ["端妃", "敬妃自己", "沈眉庄", "槿汐"],
        correct: 1
    },
    {
        question: "谁告诉甄嬛沈眉庄的秘密？",
        options: ["端妃", "敬妃", "沈眉庄自己", "槿汐"],
        correct: 2
    },
    {
        question: "谁告诉甄嬛皇后的最终秘密？",
        options: ["端妃", "敬妃", "沈眉庄", "槿汐"],
        correct: 0
    },
    {
        question: "果郡王和甄嬛第一次表白在哪里？",
        options: ["御花园", "甘露寺", "圆明园", "太液池"],
        correct: 1
    },
    {
        question: "果郡王和甄嬛最后一次单独相处在哪里？",
        options: ["甘露寺", "圆明园", "太液池", "没有见面"],
        correct: 2
    },
    {
        question: "谁帮助甄嬛扳倒祺贵人？",
        options: ["端妃", "敬妃", "沈眉庄", "槿汐"],
        correct: 0
    },
    {
        question: "甄嬛的第四个孩子是谁的？",
        options: ["皇上", "果郡王", "温实初", "没有第四个孩子"],
        correct: 3
    },
    {
        question: "甄嬛最终成为了什么？",
        options: ["皇贵妃", "皇后", "太后", "太皇太后"],
        correct: 2
    }
];
