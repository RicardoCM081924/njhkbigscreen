//JavaScript Document By_hanwenyi@qq.com
/**
 * @ProjectName: 起重机智能监控云服务;
 * @FileName: global.js;
 * @Author: hanwenyi@qq.com;
 * @Date:   2021-07-06;
 */
;(function(W){
    let H = layui;
    if(!W.$) W.$ = layui.jquery;
    Object.assign(H,layui.layer);
    function page_init_fn(){
        if(self !== top) $('html').addClass('open-html');
        $(document).on('click','.head-menu li',function(){
            if(this.classList.contains('li-pop')) return;
            $('.head-menu li').removeClass('active');
            this.classList.add('active');
        })
        $(document).on('click','.nav-title',function(){
            let nav = this.nextElementSibling;
            if(this.classList.contains('active')){
                nav.classList.add('nav-hide');
                nav.classList.remove('nav-show');
            }else{
                nav.classList.add('nav-show')
                nav.classList.remove('nav-hide')
            }
            this.classList.toggle('active')
        })
        $(document).on('click','.view-nav li',function(){
            $('.view-nav li').removeClass('active');
            this.classList.add('active')
        })
        $(document).on('mouseleave','.view-nav',function(){
            let nav = this.querySelector('ul');
            if(!nav.classList.contains('nav-show')) return;
            nav.classList.add('nav-hide')
            nav.classList.remove('nav-show');
            this.querySelector('.nav-title').classList.remove('active')
        })
        $(document).on('click','.row-tab .layui-btn',function(){
            $('.row-tab .layui-btn').removeClass('active')
            this.classList.add('active')
        })
    };
    page_init_fn();
    // H.open = layui.open
    H.open= function(option){
        let obj = {
            type: 2,
            btn: false,
            move: false,
            resize: false,
            scrollbar: false,
            skin: 'show-open',
        };
        Object.assign(obj,option);
        if(!obj.area && obj.type==2){
            obj.area= ['70%','70%']
        }
        return H.layer.open(obj)
    };
    // H.openSide
    H.openSide = function(option){
        let obj = {
            btn: false,
            move: false,
            title: false,
            resize: false,
            scrollbar: false,
            offset: 'lt',
            area: ['auto','100%'],
            skin: 'show-sidebar',
            anim: 3,
        }
        Object.assign(obj,option);
        return H.layer.open(obj)
    }
    // echarts
    H.charts_setData = function(id,options){
        if(!H.charts) H.charts = {};
        if(!H.charts[id]) charts_init(id);
        if(typeof options !== 'object') return;
        let option = {
            legend: {},
            tooltip: {
                textStyle: {
                    color: '#fff'
                },
                backgroundColor: '#26282E',
                axisPointer: {type: 'cross'}
            },
            textStyle: {
                color: '#fff'
            },
            grid: [{
                top: 35,
                left: 15,
                right: 15,
                bottom: 0,
                containLabel: true,
            }],
            xAxis: [{
                axisLabel: {
                    interval: 0,
                },
                axisLine: {
                    lineStyle: {
                        color: '#08274c'
                    }
                }
            }],
            yAxis: [{
                splitLine: {
                    lineStyle: {
                        color: '#08274c'
                    }
                }
            }]
        };
        $.extend(true,option,options[id]);
        H.charts[id].resize();
        H.charts[id].setOption(option, true);
    }
    function charts_init(id){
        H.charts[id] = echarts.init(document.getElementById(id.replace('#','')));
        W.addEventListener('resize',()=>H.charts[id].resize())
    }
    W.H = H;
})(this);