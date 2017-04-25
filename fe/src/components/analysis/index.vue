<template>
    <div class="mt-20">
        <el-card>

            <div slot="header" class="clearfix">
                <span style="line-height: 36px;">数据分析</span>
                <br><br>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/analysis/index' }">热点话题</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </el-card>
        <el-row :gutter="20">
            <el-col :span="12" v-for="item in card">
                <div class="mt-8 box pd-10 clearfix" :body-style="{ padding: '10px'}">
                    <img class="left" :src="item.head_img">
                    <article style="margin-left:130px">
                        <div class="f-18 c-1">{{item.kw.toUpperCase()}}</div>
                        <div class="c-green f-16 mt-10"><i class="el-icon-delete"> </i>关注 : {{item.follow_sum}}</div>
                        <div class="c-green f-16 mt-10"><i class="el-icon-delete"> </i>帖子 : {{item.post_sum}}</div>
                        <router-link  :to="{ path: '/analysis/topic', query: { kw: item.kw }}">
                            <el-button class="mt-10">热点话题</el-button>
                        </router-link>
                    </article>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script type="javascript">
    export default{
        mounted: function () {
            this.$http.get('/api/tieba')
                    .then(function (res) {
                        console.log(res.body)
                        this.card = res.body.reverse();
                    }, function (res) {
                        // console.log(res)
                    })
        },
        data(){
            return{
                msg:'hello vue',
                card   : [],
                activeName: 'first'
            }
        },
        components:{
        }
    }
</script>
<style lang="less">
  
</style>