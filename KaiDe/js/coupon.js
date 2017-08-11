/**********07-11-zb**********/
(function (_TApi) {

    /*1.addClass:为指定的dom元素添加样式
     2.removeClass:删除指定dom元素的样式
     3.toggleClass:如果存在(不存在)，就删除(添加)一个样式
     4.hasClass:判断样式是否存在*/

    /*function hasClass(obj, cls) {
     return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
     }

     function addClass(obj, cls) {
     if (!this.hasClass(obj, cls)) obj.className += " " + cls;
     }

     function removeClass(obj, cls) {
     if (hasClass(obj, cls)) {
     var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
     obj.className = obj.className.replace(reg, ' ');
     }
     }

     function toggleClass(obj, cls) {
     if (hasClass(obj, cls)) {
     removeClass(obj, cls);
     } else {
     addClass(obj, cls);
     }
     }

     function toggleClassTest() {
     var obj = document.getElementById('test');
     toggleClass(obj, "testClass");
     }
     */
    var _couponCfm = _TApi.$id("z-coupon-cfm"),
        _couponFooter = _TApi.$id('z-coupon-footer'),
        _couponFilter = _TApi.$id('nav-custom'),
        _bgMask = _TApi.$id('bg-mask');

    function hideFooter() {

        // 使用getAttribute获取 data- 属性
        /*var user = document.getElementById('user');
        var userName = user.getAttribute('data-uname');
        var userId = user.getAttribute('data-uid');
        */

        // 使用setAttribute设置 data- 属性
        //user.setAttribute('data-site', 'http://www.css88.com');


        var el = document.querySelector('#z-coupon-cfm');

        //console.log(el.dataset.info);

        _couponFooter.style.display = 'none';
        _bgMask.style.display = 'none';

    }
    function test(type,status) {

        var _parkingId = document.querySelector('#z-parking-btn'),
            _couponId = _TApi.$id('z-coupon-cfm'),
            _parkingListId = _TApi.$id('z-coupon-list'),
            _parkingListInfo;
        var _parkingListInfo = _parkingListId.getAttribute('data-info');
        var userName = _couponId.getAttribute('data-info');
        var _couponInfo = _couponId.getAttribute('data-info');
        console.log(userName);
        var _parkingInfo = _parkingId.dataset.info;
        var _list = _TApi.$id('z-coupon');
        if(_couponInfo == _parkingListInfo)
        _TApi.addClass(_parkingListId, 'active');
        console.log(_couponId.dataset.info);
        console.log(_parkingId.dataset.info);

        ///////////////////////
        console.log('---------------');

        var typeInfo = type.getAttribute('data-info');
        var statusInfo = status.getAttribute('data-info');
        console.log(typeInfo);
        console.log(statusInfo);

    }

    function getInfo() {
        //获取筛选信息
        TAjax.request({
            path: PosServicePath.CONTENT_MASKASREAD,
            jsonData: {
                vipcode: TApi.vip.getVipCode(),
                queueId: _commentCon
            },
            success: function (response) {
                console.log(response);
                var responseObj = JSON.parse(response.responseText);
                console.log(responseObj);
            }
        });
    }

    document.addEventListener('click', function (e) {
        var _target = e.target;
        switch (_target.className) {
            case 'z-coupon-custom':
                _couponFooter.style.display = 'block';
                _bgMask.style.display = 'block';

            case 'z-coupon-cfm':
                var _type = _TApi.$tag('span', _target.parentNode);
                for (var i = 0; i < _type.length; i++) {

                    if (!_TApi.hasClass(_type[i], 'curr')) {
                        _TApi.addClass(_target, 'curr');
                    } else {
                        _TApi.removeClass(_type[i], 'curr');
                        _TApi.addClass(_target, 'curr');
                    }
                }
                a = _target;
                break;
            case 'z-coupon-stabtn':
                var _status = _TApi.$tag('span', _target.parentNode);
                for (var j = 0; j < _status.length; j++){
                    if (!_TApi.hasClass(_status[j], 'curr')) {
                        _TApi.addClass(_target, 'curr');

                    } else {
                        _TApi.removeClass(_status[j], 'curr');
                        _TApi.addClass(_target, 'curr');
                    }
                }
                b = _target;
                break;
            case 'z-coupon-cancel':
                hideFooter();
                break;
            case 'z-coupon-resetting':

                break;
            case 'z-coupon-confirm':
                console.log(a);
                console.log(b);
                test(a,b);
                hideFooter();
                //getInfo();

                break;
            default:
                /*if (_target.className.indexOf("a-store-dropbtn") < 0)
                    hideFooter();*/
        }
    })


})(window.TApi || {});