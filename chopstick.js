/*!
 * Chopstick Javascript Library
 * @version v1.0.1   
 * @author Yelaw (QQ:40041357)
 * Copyright yelaw.cn 2017-2018 
 */

(function(){
    
    // 自定义全局对象
    var Chopstick = {

        // 类库版本号
        version: '1.0.1',

        // 常用功能
        util: {

            // 是否字母
            isLetter: function(str) {  

                var regx = /^[A-Za-z]*$/;
                return this.regxTest(regx, str);
            },

            // 是否字母和下划线
            isLetterUnderline: function(str) {   

                var regx = /^[A-Za-z_]*$/;
                return this.regxTest(regx, str);
            },

            // 是否数字
            isNumber: function(str) {     

                var regx = /^[0-9]*$/;
                return this.regxTest(regx, str);
            },

            // 是否字母或数字
            isLetterNumber: function(str) {   

                var regx = /^[A-Za-z0-9]*$/;
                return this.regxTest(regx, str);
            },

            // 是否中文字符
            isChineseCharacter: function(str) {   

                var regx = /[\u4e00-\u9fa5]/gm;
                return this.regxTest(regx, str);
            },

            // 是否日期
            isDate: function(str) {

                if (str == null) return false;
                if (! /^(\d{4})\/(\d{1,2})\/(\d{1,2})$/.test(str))
                    return false;

                var year = RegExp.$1-0;
                var month = RegExp.$2-1;
                var date = RegExp.$3-0;
                var obj = new Date(year, month, date);
                return !!(obj.getFullYear() == year && obj.getMonth() == month && obj.getDate() == date);
            },

            // 是否手机号
            isMobile: function(str) {         

                var regx = /^[1][0-9][0-9]{9}$/;
                return this.regxTest(regx, str);
            },

            // 是否固话号码
            isPhone: function(str) { 
                               
                var regx = /^0\d{2,3}-?\d{7,8}$/;
                return this.regxTest(regx, str);
            },

            // 是否Email
            isEmail: function(str) {       

                var regx = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
                return this.regxTest(regx, str);
            },

            // 是否网址
            isUrl: function(str) {       

                var regx = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
                return this.regxTest(regx, str);
            },

            // 是否身份证号码
            isIDNo: function(str) {       

                var regx = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
                return this.regxTest(regx, str);
            },            

            // 正则检测
            regxTest: function(regx, str) {

                if (str == null) return false;

                if (regx.test(str)) {
                    return true;
                } else {
                    return false;
                }
            },

            // 是否为数组
            isArray: function(arr) {

                return arr instanceof Array ? true : false;
            },

            // 是否为对象
            isObject: function(obj) {

                return typeof(obj) == "object" ? true : false;
            },

            // 计算字符串长度(英文占1个字符，中文汉字占2个字符)
            strLen: function(str) {
                
                if (str == null) return 0;
                var realLength = 0, len = str.length, charCode = -1;
                for (var i = 0; i < len; i++) {
                    charCode = str.charCodeAt(i);
                    if (charCode >= 0 && charCode <= 128) {
                        realLength += 1;
                    } else {
                        realLength += 2;
                    }
                }
                return realLength;
            }
        },

        // layui插件功能封装
        layui: {
   
            // 公共弹框,与layui联合使用
            layOpen: function(title, 
                                content, 
                                callback, 
                                area = ['500px', '500px'], 
                                btnFunc = function(index){
                                              if (layer != null) {
                                                layer.closeAll();
                                              }                                                          
                                          }, 
                                type = 2, 
                                shade = 0.8,                                 
                                btn = ['确认','取消'], 
                                btnAlign = 'c' 
                               ) {
                                
                // layui原生弹框                              
                layer.open({
                            type: type,
                            title: title,
                            // shadeClose: true,
                            shade: shade,
                            area: area,
                            content: content, //iframe的url
                            btn: btn,
                            btnAlign: btnAlign,
                            yes: callback,
                            btn2: btnFunc,
                        });
            },            
    
            // 获取弹出页面的表单数据
            formData: function(index, layerObj, $) {

                return $(layerObj).find("iframe")[0].contentWindow.formData(); // 获取表单数据
            },

            // 公共提示弹框,与layui联合使用
            layConfirm: function(text, callback, btnFunc = function(){}, btnArr = ['确认','取消']) {

                layer.confirm(text, {
                        btn: btnArr //按钮
                    }, callback, btnFunc);  
            }  
      }

    };
    // 设置全局对象
    window.Chopstick = window.C = Chopstick; 
  })();
