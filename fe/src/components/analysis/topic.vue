<template>
    <div class="mt-20">
        <el-card>
            <div slot="header" class="clearfix">

                <span style="line-height: 36px;">{{kw.toUpperCase()}}吧热点话题</span>
                <br><br>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/analysis/index' }">热点话题</el-breadcrumb-item>
                    <el-breadcrumb-item>{{kw.toUpperCase()}}吧热点话题</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            </el-collapse>
            <el-collapse @change="handleChange">
                <el-collapse-item  v-for="(item, index) in result">
                    <template slot="title">
                        热点话题{{index+1}}-{{item.title}}
                    </template>
                    <div v-for="doc in item.cluster"><i class="el-icon-star-on"></i>{{doc.address}}</div>
                </el-collapse-item>
            </el-collapse>
        </el-card>
    </div>
</template>
<style>

</style>
<script type="javascript">
    export default{
        data(){
            return {
                kw:this.$route.query.kw,
                result:[
                    { 
                        title: "小哥哥小姐姐",
                        cluster: [{
                            address: '电子科大的小哥哥小姐姐们，我又来了'
                        }, {
                            address: '有小姐姐聊天吗'
                        }, {
                            address: '来个小哥哥小姐姐带路好吗'
                        }, {
                            address: '漂亮的小姐姐小哥哥'
                        }]
                    },
                    {
                        title: "英语考研",
                        cluster: [{
                            address: '上海市普陀区金沙江路 1518 弄'
                        }, {
                            address: '上海市普陀区金沙江路 1517 弄'
                        }, {
                            address: '上海市普陀区金沙江路 1519 弄'
                        }, {
                            address: '上海市普陀区金沙江路 1516 弄'
                        }]
                    },
                    {
                        title: "通信工程",
                        cluster: [{
                            address: '上海市普陀区金沙江路 1518 弄'
                        }, {
                            address: '上海市普陀区金沙江路 1517 弄'
                        }, {
                            address: '上海市普陀区金沙江路 1519 弄'
                        }, {
                            address: '上海市普陀区金沙江路 1516 弄'
                        }]
                    },
                    {
                        title: "有做兼职的吗",
                        cluster: [{
                            address: '上海市普陀区金沙江路 1518 弄'
                        }, {
                            address: '上海市普陀区金沙江路 1517 弄'
                        }, {
                            address: '上海市普陀区金沙江路 1519 弄'
                        }, {
                            address: '上海市普陀区金沙江路 1516 弄'
                        }]
                    },
                    {
                        title: "曾老师的辅导班",
                        cluster: [{
                            address: '上海市普陀区金沙江路 1518 弄'
                        }, {
                            address: '上海市普陀区金沙江路 1517 弄'
                        }, {
                            address: '上海市普陀区金沙江路 1519 弄'
                        }, {
                            address: '上海市普陀区金沙江路 1516 弄'
                        }]
                    },
                    {
                        title: "租房",
                        cluster: [{
                            address: '上海市普陀区金沙江路 1518 弄'
                        }, {
                            address: '上海市普陀区金沙江路 1517 弄'
                        }, {
                            address: '上海市普陀区金沙江路 1519 弄'
                        }, {
                            address: '上海市普陀区金沙江路 1516 弄'
                        }]
                    },
                    {
                        title: "萌新求助",
                        cluster: [{
                            address: '上海市普陀区金沙江路 1518 弄'
                        }, {
                            address: '上海市普陀区金沙江路 1517 弄'
                        }, {
                            address: '上海市普陀区金沙江路 1519 弄'
                        }, {
                            address: '上海市普陀区金沙江路 1516 弄'
                        }]
                    }
                ]
            }
        },
        components: {},
    }

</script>
