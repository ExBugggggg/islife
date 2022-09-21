<template>
    <el-row :span="24">
        <el-col :span="8" :offset="8">
            <el-row justify="center" id="main-title">Cookies's House</el-row>
            <el-row justify="center" id="main-introduction">
                Code here and code there.
            </el-row>
        </el-col>
    </el-row>
    <el-row id="home-content">
        <el-col :span="10" :offset="7" id="card-content">
            <el-card id="article-card" shadow="hover">
                <el-row>
                    <el-col :span="20" :offset="2">
                        <h1>你好，世界！</h1>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" :offset="2">
                        <!-- <i-ep-calendar/> -->
                        <span style="color: rgb(119, 126, 144); font-size: 0.9em;">2022-02-02</span>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 16px">
                    <el-col :span="20" :offset="2">文章（1984年6月26日——）男，陕西省西安市人，2002年考入中央戏剧学院表演系，外表清纯，曾在叶京指导的《 于青春有关的日子》饰演“卓越”，在 赵宝刚指导的《奋斗》中饰演向南，都有着优秀的表现，并被大众所熟知。其他代表作包括《 海洋天堂》《雪豹》《蜗居》《裸婚时代》等。获得第31届大众电影百花奖最佳男主角、第12届四川电视节金熊猫奖长篇电视剧类最佳男演员。主演电影有《走着瞧》、《海洋天堂》、《失恋33天》、《 西游·降魔篇》等，参演 姜文导演电影《一步之遥》。电视剧作品有《雪豹》、《裸婚时代》、导演作《 小爸爸》以及早期的《与青春有关的日子》、《奋斗》、《国歌》等。 2006年毕业于中央戏剧学院表演系。2008年与 马伊琍结婚，两人育有一女。2010年，因出演《海洋天堂》中的自闭症患者大福，成立大福自闭症关爱基金。2011年后获得两届北京大学生电影节最受欢迎男演员奖、中国电视金鹰奖最具人气男演员奖。</el-col>
                </el-row>
                <el-row style="margin-top: "></el-row>
            </el-card>
        </el-col>
    </el-row>
</template>
<style scoped>
#main-title {
    font-size: 5em;
    margin-top: 120px;
    text-align: center;
}
#main-introduction {
    font-size: 1.25em;
    margin-top: 24px;
    text-align: center;
}

#home-content {
    margin-top: 130px;
    border-top: solid 1px var(--el-border-color-light)
}
#card-content {
    padding-top: 55px;
}

#article-card {
    border-radius: 16.5px;
    border: none;
    padding: 0px 20px 20px 20px;
}
#article-card:hover {
    border-radius: 16.5px;
}

#card-image {
    border-radius: 16.5px;
}

@media only screen and (min-width: 1440px) {
    .el-menu {
        margin: 32px 70px;
    }
}
@media only screen and (max-width: 1440px) and (min-width: 1024px) {
    .el-menu {
        margin: 32px 60px;
    }
}
</style>