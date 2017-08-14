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
    }*/

    function toggleClassTest() {
        var obj = document.getElementById('test');
        toggleClass(obj, "testClass");
    }
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
        //user.setAttribute('data-site', 'hhhh');


        var el = document.querySelector('#z-coupon-cfm');

        //console.log(el.dataset.info);

        _couponFooter.style.display = 'none';
        _bgMask.style.display = 'none';

    }
    function filter(type,status) {

        /*var _parkingId = document.querySelector('#z-parking-btn'),
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
        console.log(_parkingId.dataset.info);*/
        var _couponId = _TApi.$id('z-coupon');

        var _list = _couponId.getElementsByClassName('z-coupon-list');
        var _len = _list.length;
        console.log(_list);
        console.log(_len);
        var _list1 = _list[0].getAttribute('data-info');
        console.log(_list1);

        console.log('---------------');


        if(type && status){


            var typeInfo = type.getAttribute('data-info');
            var statusInfo = status.getAttribute('data-status');

            console.log(type);
            console.log(status);
            console.log('--------zzzzzzzzzzzzz-------');
            console.log(typeInfo);
            console.log(statusInfo);
            for(var i = 0; i < _len; i++){
                var _listInfo = _list[i].getAttribute('data-info'),
                    _listStatus = _list[i].getAttribute('data-status');
                _list[i].style.display = 'none';

                if(typeInfo == _listInfo && statusInfo == _listStatus){

                    _list[i].style.display = 'block';
                    //this.style.display = 'block';
                }
            }

        }else if(type){
            var typeInfo = type.getAttribute('data-info');

            console.log(type);
            console.log('--------zzzzzzzzzzzzz-------');
            console.log(typeInfo);
            for(var i = 0; i < _len; i++){
                var _listInfo = _list[i].getAttribute('data-info');
                _list[i].style.display = 'none';

                if(typeInfo == _listInfo){
                    _list[i].style.display = 'block';

                }
            }

        }else if(status){
            var statusInfo = status.getAttribute('data-status');

            console.log(type);
            console.log(status);
            console.log('--------zzzzzzzzzzzzz-------');
            console.log(statusInfo);
            for(var i = 0; i < _len; i++){
                var _listStatus = _list[i].getAttribute('data-status');
                _list[i].style.display = 'none';

                if(statusInfo == _listStatus){

                    _list[i].style.display = 'block';
                }
            }
        }


/////////////////
        /*var typeInfo = type.getAttribute('data-info');
        var statusInfo = status.getAttribute('data-status');

        console.log(type);
        console.log(status);
        console.log('--------zzzzzzzzzzzzz-------');
        console.log(typeInfo);
        console.log(statusInfo);
        for(var i = 0; i < _len; i++){
            var _listInfo = _list[i].getAttribute('data-info'),
                _listStatus = _list[i].getAttribute('data-status');
            _list[i].style.display = 'none';

            if(typeInfo == _listInfo && statusInfo == _listStatus){

                _list[i].style.display = 'block';
            }else if(typeInfo == _listInfo){
                _list[i].style.display = 'block';

            }
        }*/
        ///////////////////////

    }

    /*function getInfo() {
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
    }*/
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
                //a = _target;
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
                //b = _target;
                break;
            //取消
            case 'z-coupon-cancel':
                hideFooter();
                break;
            //重置
            case 'z-coupon-resetting':
                var _couponType = _TApi.$id('z-coupon-type'),
                    _couponStatus = _TApi.$id('z-coupon-status'),
                    _typeActive = _couponType.getElementsByClassName('curr'),
                    _statusActive = _couponStatus.getElementsByClassName('curr');
                for (var j = 0; j < _typeActive.length; j++){
                    if (_TApi.hasClass(_typeActive[j], 'curr')) {
                        _TApi.removeClass(_typeActive[j], 'curr');
                    }
                }
                for (var i = 0; i < _statusActive.length; i++){
                    if (_TApi.hasClass(_statusActive[i], 'curr')) {
                        _TApi.removeClass(_statusActive[i], 'curr');
                    }
                }
                //hideFooter();
                break;
            //确定
            case 'z-coupon-confirm':

                var _couponType = _TApi.$id('z-coupon-type'),
                    _couponStatus = _TApi.$id('z-coupon-status'),
                    _typeActive = _couponType.getElementsByClassName('curr'),
                    _statusActive = _couponStatus.getElementsByClassName('curr');

                for (var i = 0; i < _typeActive.length; i++){
                    if (_TApi.hasClass(_typeActive[i], 'curr')) {
                        //var _typeInfo = _typeActive[i].getAttribute('data-info');
                        console.log(_typeActive[i]);
                        _typeInfo = _typeActive[i];
                    }
                }
                for (var j = 0; j < _statusActive.length; j++){
                    if (_TApi.hasClass(_statusActive[j], 'curr')) {
                        //var _statusInfo = _statusActive[j].getAttribute('data-status');
                        console.log(_statusActive[j]);
                        _statusInfo = _statusActive[j];

                    }
                }

                filter(_typeInfo,_statusInfo);
                hideFooter();
                //getInfo();
                break;
            default:
                if (_target.className.indexOf("z-coupon") < 0)
                    hideFooter();
        }
    })

})(window.TApi || {});