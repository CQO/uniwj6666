<template>
    <view style="height: 100%;position: absolute;">
        <scroll-view scroll-x scroll-y class="container" @scrolltolower="scrolltolower">
            <uni-table stripe border :loading="loading" style="min-height: 100%;">
                <uni-tr id="lyy-thead" :class="headerFixed?'fixed-head':''" style="display: flex;z-index:1 ;">
                    <uni-th v-for="(item,index) in headers" :key="index" :width="item.width" align="center" :style="{
        		  display:item.hidden?'none':'flex',width:item.width,justifyContent: item.align ? item.align : 'center',
                  left:fixedLeft(index),
                  position:index<=columnFixed-1?'sticky':'unset',
                  zIndex:index<=columnFixed-1?999:99,
                  backgroundColor:'inherit'
        		  }">
                        <view @click="doSort(item)" style="display: flex;flex-direction: row;justify-content: center;">
                            <text :style="{lineHeight:'20px',color:'#828095'}" style="font-size: 25rpx;font-weight: bold;">{{item.label}}</text>
                            <view class="header-icon"
                                style="line-height:8px;display:flex;flex-direction:column;margin-left:10px;justify-content: center;"
                                v-if="item.sort">
                                <text class="iconfont icon-arrow-up"
                                    :style="{fontSize:'8px',height:'10px',color:lastSortItem===item.key&&sortWay=='asc'?'#333':'#bcbcbc'}" />

                                <text class="iconfont icon-arrow-down"
                                    :style="{fontSize:'8px',height:'10px',color:lastSortItem===item.key&&sortWay=='desc'?'#333':'#bcbcbc'}" />
                            </view>
                        </view>
                    </uni-th>
                </uni-tr>
                <view v-if="contents.length<1" class="no_data">暂无数据</view>
                <uni-tr v-else v-for="(content,sindex) in sortContents" :key="sindex"
                    style="display:flex;table-layout: fixed;min-width: 100%;" @click.native="rowClick(content)">
                    <uni-td v-for="(header,hindex) in headers" :key="hindex" align="center" :color="header.color?header.color:'#333333'" :style="{display:header.hidden?'none':'table-cell',textAlign:header.text_align?header.text_align : 'center',width:header.width,
                  left:fixedLeft(hindex),
                  position:hindex<=columnFixed-1?'sticky':'unset',
                  zIndex:hindex<=columnFixed-1?9:'unset',
                  backgroundColor:'#fff'}">
                        <template v-if="header.format!==undefined">
                            <lyy-progress
                                v-if="header.format.type==='progress'&&!isNaN(parseFloat(content[header.key]))"
                                :percent="content[header.key].toFixed(2)" show-info round></lyy-progress>
                            <view v-else-if="header.format.type==='html'" v-html="content[header.key]"></view>
                            <text v-else>{{content[header.key]||emptyString}}</text>
                        </template>
						<view v-if="header.type =='fluctuation'"  class="vcenter-hcenter">
							<view v-if="content['zd'] == 1" class="hright-vcenter"  style="width:90rpx;padding:5rpx 30rpx;border-radius: 10rpx;">
								<text  style="font-size: 27rpx;font-weight: bold;color: #4e9984;" >
								{{content[header.key]||emptyString}}
									<text style="padding-left: 2rpx;">{{headers[2].suffix}}</text>
								</text>
							</view>
							<view v-if="content['zd'] == 0" class="hright-vcenter"  style="width:90rpx;padding:5rpx 30rpx;border-radius: 10rpx;">
								<text  style="font-size: 27rpx;font-weight: bold;color: #ce0000;" >
								{{content[header.key]||emptyString}}
									<text style="padding-left: 2rpx;">{{headers[2].suffix}}</text>
								</text>
							</view>
						</view>
                        <text v-else style="font-size: 27rpx;font-weight: bold;">{{content[header.key]||emptyString}}</text>
                    </uni-td>
                </uni-tr>
                <uni-tr v-if="totalRow.length>0" style="min-width: 100%;display: flex;">
                    <uni-td v-for="(header,index) in headers" :key="Math.random()" align="center" :style="{textAlign: 'center',display:header.hidden?'none':'table-cell',width:header.width,
                  left:fixedLeft(index),
                  zIndex:index<=columnFixed-1?9:'unset',
                  position:index<=columnFixed-1?'sticky':'unset',
                  backgroundColor:'inherit'}">
                        <text v-if="index==0">合计</text>
                        <view v-else>
                            <!--<progress v-if="typeof header.format!=='undefined'&& header.format.type==='progress'" :percent="renderTotalRow(header)" :show-info="true" stroke-width="10" :active="true"></progress>-->
                            <lyy-progress
                                v-if="typeof header.format!=='undefined'&& header.format.type==='progress'&&!isNaN(parseFloat(renderTotalRow(header)))"
                                :percent="renderTotalRow(header)" :show-info="true" round></lyy-progress>
                            <text v-else>{{ renderTotalRow(header)}}</text>
                        </view>
                    </uni-td>
                </uni-tr>
            </uni-table>
            <uni-load-more v-show="showLoadMore" :status="loadMore"></uni-load-more>
        </scroll-view>
    </view>
</template>

<script>
    import lyyProgress from './lyy-progress'
    /**
     * lyyTable ver1.3.3
     * @description lyyTable表格组件 ver1.3.3
     */
    export default {
        name: "lyyTable",
        components: {
            lyyProgress
        },
        data() {
            return {
                lastSortItem: '', //上一次排序列
                sortWay: 'none', //默认无排序
                sortIndex: 0,
                sortContents: [], //排序时的表格内容
                footContent: {},
                scrollHeight: '',
                theadHeight: ''
            }
        },
        props: {
            //显示加载
            loading: {
                type: Boolean,
                default: false
            },
            //上拉加载文字，参考uni-load-more
            loadMore: {
                type: String,
                default: 'more'
            },
            //是否显示上拉加载组件
            showLoadMore: {
                default: Boolean,
                default: false
            },
            //固定表头
            headerFixed: {
                type: Boolean,
                default: false
            },
            //固定首列 ver1.3.3弃用
            /*firstColumnFixed: {
                type: Boolean,
                default: false
            },*/
            //固定列数 ver1.3.3新增
            columnFixed:{
                type:Number,
                default:0
            },
            //排序方式
            sortWays: {
                type: Array,
                default: () => ['none', 'asc', 'desc']
            },
            //数据为空时的占位符
            emptyString: {
                type: String,
                default: '-'
            },
            //表头
            headers: {
                type: Array,
                default: [],
            },
            //表格数据
            contents: {
                type: Array,
                default: []
            },
            //合计列
            totalRow: {
                type: Array,
                default: []
            }
        },
        mounted() {
            //uni.setStorageSync('contents',this.contents)
            this.sortContents = JSON.parse(JSON.stringify(this.contents))
            this.renderContents()
            this.createTotalRow()
            //ver 1.2.0 修复 uni-table width 问题
            /*this.$nextTick(() => {
                console.log('abc',this.$refs)
                const query = uni.createSelectorQuery().in(this)
                query.select('.uni-table').boundingClientRect(dom=>{
                    console.log(123456,dom)
                }).exec()
                this.$refs['uni-table'].removeAttribute('style')
            })*/
            //ver 1.2.0 新增 固定表头
            /*if (this.headerFixed) {
                /*var wHeight = document.body.clientHeight
                var tablePoseY = document.getElementById('lyy-tbody').getBoundingClientRect().y
                document.getElementById('lyy-tbody').style.height = wHeight - tablePoseY + 'px'
                const query = uni.createSelectorQuery().in(this)

                query.select('#lyy-thead').boundingClientRect(dom => {
                    console.log(dom)
                    this.theadHeight = dom.height + 'px'
                }).exec()
            }*/
        },
        watch: {
            contents: {
                //console.log(value)
                handler(value) {
                    this.sortContents = JSON.parse(JSON.stringify(value))
					// console.log(JSON.stringify(this.sortContents))
                    this.renderContents()
                    this.createTotalRow()
                    this.lastSortItem = ''
                    this.sortWay = 'none'
                    for (var header of this.headers) {
                        this.renderTotalRow(header)
                    }
                    this.$forceUpdate()
                },
                deep: true

            },
            //监听排序变化
            sortChange(value) {
                var that = this
                var contents = JSON.parse(JSON.stringify(that.contents))
                switch (value.sortWay) {
                    case 'none':
                        that.sortContents = contents
                        this.renderContents()
                        break
                    case 'asc': //正序
                        that.sortContents = that.sortContents.sort(function(a, b) {
                            //需要排序的列为数字时直接计算
                            if (!isNaN(parseFloat(a[that.lastSortItem])) && !isNaN(parseFloat(b[that
                                    .lastSortItem]))) {
                                return a[that.lastSortItem] - b[that.lastSortItem]
                            }
                            //非数字转为ASCII排序
                            else {
                                return a[that.lastSortItem].charCodeAt() - b[that.lastSortItem].charCodeAt()
                            }
                        })
                        break
                    case 'desc': //倒序
                        that.sortContents = that.sortContents.sort(function(a, b) {
                            if (!isNaN(parseFloat(a[that.lastSortItem])) && !isNaN(parseFloat(b[that
                                    .lastSortItem]))) {
                                return b[that.lastSortItem] - a[that.lastSortItem]
                            } else {
                                return b[that.lastSortItem].charCodeAt() - a[that.lastSortItem].charCodeAt()
                            }
                        })
                        break
                }
                that.$forceUpdate()
            }
        },
        computed: {
            //将排序方式、上次排序列作为一个整体进行监听，不然会出现切换排序列不排序的现象
            sortChange() {
                var {
                    sortWay,
                    lastSortItem
                } = this
                return {
                    sortWay,
                    lastSortItem
                }
            }
        },
        methods: {
            //点击排序表头时存储上次排序列名，并循环切换排序方式
            doSort(item) {
                if (item.sort) {
                    if (this.lastSortItem !== item.key) {
                        this.lastSortItem = item.key
                        this.sortIndex = 0
                        this.sortIndex++
                        this.sortWay = this.sortWays[this.sortIndex]
                    } else {
                        if (this.sortIndex < 2) {
                            this.sortIndex++
                            this.sortWay = this.sortWays[this.sortIndex]
                        } else {
                            this.sortIndex = 0
                            this.sortWay = this.sortWays[0]
                        }
                    }
                }
            },
            //表格内容渲染
            renderContents() {
                const headers = this.headers
                //防止修改穿透
                var contents = JSON.parse(JSON.stringify(this.contents))
                //var contents=uni.getStorageSync('contents')
                let sortContents = JSON.parse(JSON.stringify(this.sortContents))
                var newArr = []
                var result = ''
                sortContents.forEach(function(content, index) {
                    var item = content
                    headers.forEach(function(header) {
                        //字符类型格式化
                        if (typeof header.format !== 'undefined' && (header.format.type === 'string' ||
                                header.format.type === 'html')) {
                            var template = header.format.template
                            var keys = header.format.keys
                            //console.log(typeof template)
                            if (typeof template === 'function') {
                                var arg = []
                                keys.forEach((el, i) => {
                                    arg.push(contents[index][el])
                                })
                                result = template(arg)
                                //console.log(result)
                            } else {
                                keys.forEach((el, i) => {
                                    var value = contents[index][el]
                                    var reg = new RegExp('\\{' + i + '}', 'g')
                                    template = template.replace(reg, value)
                                })
                                result = template
                            }
                            item[header.key] = result
                        }
                        //计算类型格式化
                        else if (typeof header.format !== 'undefined' && (header.format.type ===
                                'compute' || header.format.type === 'progress')) {
                            //console.log(header.format.template)
                            var temp = header.format.template
                            var keys = header.format.keys
                            keys.forEach((el, i) => {
                                var reg = new RegExp('\\{' + i + '}', 'g')
                                temp = temp.replace(reg, contents[index][el])
                            })
                            //console.log(temp)
                            item[header.key] = eval(temp)
                            //this.sortContents[index][header.key]=result
                        }
                    })
                    newArr.push(item)
                })
                this.sortContents = newArr
            },
            createTotalRow() {
                if (this.totalRow.length > 0 && this.sortContents[0] !== undefined) {
                    /*var obj = {...this.contents[0]}
                    console.log(obj)
                    for (var i in obj) {
                        this.footContent[i] = obj[i]
                    }*/
                    this.footContent = JSON.parse(JSON.stringify(this.sortContents[0]))
                    for (var i in this.footContent) {
                        var result = 0
                        if (this.sortContents.length > 0) {
                            for (var j in this.sortContents) {
                                result += parseFloat(this.sortContents[j][i]) || 0
                            }
                        }
                        this.footContent[i] = result
                    }
                }
            },
            //合计列渲染
            renderTotalRow(header) {
                var content = JSON.parse(JSON.stringify(this.footContent))
                var result = this.emptyString
                if (this.totalRow.indexOf(header.key) > -1) {
                    if (typeof header.format !== 'undefined' && header.format.type === 'progress') {
                        var temp = header.format.template
                        var keys = header.format.keys
                        for (var index in keys) {
                            var reg = new RegExp('\\{' + index + '}', 'g')
                            temp = temp.replace(reg, content[keys[index]])
                        }
                        result = eval(temp)
                        result = isNaN(result) ? 0 : result.toFixed(2)
                    } else {
                        if (content[header.key] != null && !isNaN(content[header.key])) {
                            result = content[header.key]
                        }
                    }
                }
                return result
            },
            //行点击事件
            rowClick(data) {
                this.$emit('rowClick', data)
            },
            //上拉加载事件
            scrolltolower(e) {
                // if (e.detail.direction == 'bottom') {
                    // this.$emit('onPullup')
                // }
            },
            //固定列left计算
            fixedLeft(index){
                var headers = this.headers.filter(item=>!item.hidden)
                var left = 'calc(0px'
                for(var i = 1;i<index+1;i++){
                    left+=' + '+headers[i-1].width
                }
                left+=')'
                return left
            }
        }
    }
</script>

<style scoped>
    @import './css/iconfont.css';

    .container {
        width: 100vw;
        height: 100%;
    }

    .uni-table-scroll {
        overflow: unset !important;
    }

    .no_data {
        position: absolute;
        width: 100%;
        /* background-color: #fff; */
        height: 50px;
        text-align: center;
        line-height: 50px;
    }

    #lyy-thead {
        /*min-width: 750upx;*/
        display: table;
        background-color: #fff;
    }

    .fixed-head {
        position: sticky;
        top:0;
        z-index: 99;
    }
    /*修复滑动时偏移1px问题*/
    .table--border{
        border-top:none;
        border-left: none;
		border:none;
    }
    .uni-table-tr {
        background-color: #fff;
    }
</style>
