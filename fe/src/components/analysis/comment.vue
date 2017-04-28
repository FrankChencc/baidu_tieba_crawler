<template>
    <div class="mt-20">
        <el-card>

            <div slot="header" class="clearfix">

                <span style="line-height: 36px;">{{kw.toUpperCase()}}吧</span>
                <br><br>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>{{kw.toUpperCase()}}吧</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <el-button @click="start">开始爬取</el-button>
            <el-button @click="close">停止爬取</el-button>
            <router-link class="right"  :to="{ path: '/index/listMember', query: { kw: this.$route.query.kw }}">
                <el-button type="primary" >会员列表</el-button>
            </router-link>
            <br><br>
            <el-card v-show="process_start">
                <el-row>
                    <div class="f-16 c-2">爬取进度</div>
                    <el-col :span="24">
                        <el-progress :text-inside="false" :stroke-width="10" :percentage="process"></el-progress>

                    </el-col>
                </el-row>
            </el-card>
            <br><br>
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="title" label="帖子"></el-table-column>
                <el-table-column prop="user_name" width="150" label="发帖人"></el-table-column>
                <el-table-column inline-template :context="_self" label="操作" width="70">
                    <span>
                        <router-link target="_blank" :to="{path:'p/:id',name:'p',params:{id:row._id},query: { kw:kw}}"> 
                            <el-button type="text" size="small">详情</el-button>
                        </router-link>
                    </span>
                </el-table-column>
            </el-table>
            <div class="block t-center mt-20">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="1"
                        :page-sizes="[30, 50, 100, 200]"
                        :page-size="page_size"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="count">
                </el-pagination>
            </div>
        </el-card>
        <br><br><br>
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
