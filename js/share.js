(function() {
    var d=document, w=window, p=parseInt, dd=d.documentElement, db=d.body, dc=d.compatMode=='CSS1Compat', dx=dc?dd:db, ec=encodeURIComponent, params= {}, ua=navigator.userAgent.toLowerCase(), iopa=ua.indexOf('opera')!=-1&&opera.version(), iie=(ua.indexOf('msie')!=-1&&!iopa)&&ua.substr(ua.indexOf('msie')+5, 3), conf=(typeof(uyan_config)=='undefined')? {}: uyan_config, s=d.getElementsByTagName('script');
    for(var i=0, ss;
    ss=s[i++];
    ) {
        if(ss.src&&((ss.src.indexOf('uyan.js')!=-1)||(ss.src.indexOf('uyan.cc/js/iframe.js')!=-1))) {
            ss.src.replace(/(uid|UYUserId|style|lang|footmark)=([^&]+)/g, function(a, p, v) {
                params[p]=v
            }
            )
        }
    }
    try {
        if(typeof(w.uyan_loaded)=='undefined') {
            w.UYAN= {
                apiHost: 'http://jsapi.uyan.cc/', imgHost: 'http://v2.uyan.cc/code/images/', tmpS: '', sort: '', ct: '', msgS: true, vStar: 0, mName: '', creElm: function(o, t, a) {
                    var b=d.createElement(t||'div');
                    for(var p in o) {
                        p=='style'?(b[p].cssText=o[p]): (b[p]=o[p])
                    }
                    return(a||db).insertBefore(b,
                    (a||db).firstChild)
                }
                ,
                creFrm:function(t,
                w,
                h) {
                    if(conf.inifr!=true) {
                        UYAN.showBox();
                        var a=d.createElement('iframe'), bc=d.getElementById('uyan_box_cnt')
                    }
                    var c=d.getElementById('uyan_comment'),
                    u=ec(location.href);
                    if(conf.inifr!=true) {
                        a.id='uyan_iframe'
                    }
                    if(t=='sso') {
                        var b='http://api.uyan.cc/?mode=login&type='+t+'&url='+u+'&py='+UYAN.getY()+'&cmt='+(c.value!=UYAN.lang.iptCmt?ec(c.value): '')+'&lurl='+UYAN.conf.dslogin+'&lcb='+ec(UYAN.conf.lcb)+'&urlhash='+UYAN.conf.urlhash+(conf.inifr==true?'&inifr=true': '')
                    }
                    else {
                        var b='http://api.uyan.cc/?mode=login&type='+t+'&url='+u+'&py='+UYAN.getY()+'&cmt='+(c.value!=UYAN.lang.iptCmt?ec(c.value): '')+'&lcb='+ec(UYAN.conf.lcb)+'&urlhash='+UYAN.conf.urlhash+(conf.inifr==true?'&inifr=true': '')
                    }
                    if(conf.inifr!=true) {
                        a.src=b;
                        a.width=w;
                        a.height=h;
                        a.style.border=0;
                        bc.appendChild(a)
                    }
                    else {
                        window.childWin=window.open(b, "", "alwaysRaised=yes,left=0,top=0,width="+w+",height="+h+",scrollbars=no,z-look=yes")
                    }
                }
                ,
                creSye:function(s) {
                    var b=d.createElement('style');
                    b.type='text/css';
                    if(b.styleSheet) {
                        b.styleSheet.cssText=s
                    }
                    else {
                        b.appendChild(d.createTextNode(s))
                    }
                    d.getElementsByTagName('head')[0].appendChild(b)
                }
                ,
                reqItf:function(v,
                t) {
                    try {
                        var A=d.getElementById('uyan_script'), B="http://api.uyan.cc/";
                        B+="?url="+ec(String(conf.url||d.location));
                        B+="&title="+ec(String(conf.title||d.title));
                        B+="&du="+ec(UYAN.getDu());
                        B+="&su="+ec(UYAN.getSu());
                        B+="&lang="+(params['lang']?params['lang']: 'zh-cn')+'&';
                        for(var k in v) {
                            B+=k+'='+ec(v[k])+'&'
                        }
                        if(t==null) {
                            B+='urlhash='+UYAN.conf.urlhash+'&';
                            if(UYAN.conf.style=='side') {
                                B+='style='+UYAN.conf.style+'&'
                            }
                            if(UYAN.conf.cb=='test') {
                                B+='cb='+UYAN.conf.cb+'&'
                            }
                            if(UYAN.conf.md) {
                                B+='md='+UYAN.conf.md+'&'
                            }
                            if(UYAN.conf.ct) {
                                B+='ct='+UYAN.conf.ct+'&'
                            }
                            if(UYAN.conf.uid) {
                                B+='uid='+UYAN.conf.uid+'&'
                            }
                        }
                        B+=UYAN.randNum();
                        UYAN.creElm( {
                            src: B, charset: 'utf-8', id: 'uyan_script'
                        }
                        ,
                        'script',
                        d.getElementsByTagName('head')[0]||dd);
                        if(iie==6) {}else {
                            setTimeout(function() {
                                A.parentNode.removeChild(A)
                            }
                            ,
                            1000)
                        }
                    }
                    catch(e) {}
                }
                ,
                randNum:function() {
                    var r='', n=10;
                    for(var i=0;
                    i<n;
                    i++)r+=Math.floor(Math.random()*10);
                    return r
                }
                ,
                getWH:function(e) {
                    var r=new Array();
                    r.sW=dx.clientWidth;
                    r.sH=dx.clientHeight;
                    if(typeof(e)=='object') {
                        r.psW=(dx.scrollLeft==0?db.scrollLeft: dx.scrollLeft)+dx.clientWidth/2-e.clientWidth/2;
                        r.psH=(dx.scrollTop==0?db.scrollTop: dx.scrollTop)+dx.clientHeight/2-e.clientHeight/2;
                        r.oW=e.clientWidth;
                        r.oH=e.clientHeight
                    }
                    return r
                }
                ,
                getY:function() {
                    var y=0;
                    if(typeof(w.pageYOffset)=='number') {
                        y=w.pageYOffset
                    }
                    else if(db&&(db.scrollLeft||db.scrollTop)) {
                        y=db.scrollTop
                    }
                    else if(dd&&(dd.scrollLeft||dd.scrollTop)) {
                        y=dd.scrollTop
                    }
                    return y
                }
                ,
                yTo:function(y) {
                    var g=null;
                    g=setInterval(function() {
                        if(y!=null) {
                            w.scrollTo(0, (((UYAN.getY()==0?1: UYAN.getY())*2)>y?y: ((UYAN.getY()==0?1: UYAN.getY())*2)));
                            if(UYAN.getY()>=y) {
                                clearInterval(g)
                            }
                        }
                        else {
                            w.scrollTo(0, (UYAN.getY()/2));
                            if(UYAN.getY()<=0) {
                                clearInterval(g)
                            }
                        }
                    }
                    ,
                    1);
                    setTimeout(function() {
                        clearInterval(g)
                    }
                    ,
                    3000)
                }
                ,
                getEvent:function(e) {
                    var a=window.event||e||null, c, ct=0;
                    if(!a) {
                        c=arguments.callee;
                        while(c&&ct<10) {
                            if((a=c.arguments[0])&&(typeof(a.button)!='undefined'&&typeof(a.ctrlKey)!='undefined')) {
                                break
                            }
                            ++ct;
                            c=c.caller
                        }
                    }
                    return a
                }
                ,
                getMP:function() {
                    var a=UYAN.getEvent(), c=new Array();
                    c.x=a.clientX;
                    c.y=a.clientY;
                    return c
                }
                ,
                setCookie:function(n,
                v,
                e,
                p,
                d,
                s) {
                    var a=0, date=new Date();
                    a=(!e)?a: (e*24*60*60*1000);
                    date.setTime(date.getTime()+a);
                    var b=n+'='+escape(v);
                    b+=(e)?'; expires='+date.toGMTString(): '';
                    b+=(p)?'; path='+p: '';
                    b+=(d)?'; domain='+d: '';
                    b+=(s)?'; secure': '';
                    document.cookie=b
                }
                ,
                getCookie:function(n) {
                    var s=d.cookie.indexOf(n+'='), l=s+n.length+1, e=d.cookie.indexOf(';', l);
                    if((!s)&&(n!=d.cookie.substring(0, n.length)))return'';
                    if(s==-1)return'';
                    if(e==-1)e=d.cookie.length;
                    return unescape(d.cookie.substring(l, e))
                }
                ,
                delCookie:function(n) {
                    UYAN.setCookie(n, null, -1)
                }
                ,
                trim:function(s) {
                    return s.replace(/(^\s*)|(\s*$)/g, '')
                }
                ,
                getSu:function() {
                    var a=location.href, loc=a.indexOf('#'), al=d.getElementsByTagName('link'), am=d.getElementsByTagName('meta'), p=/\?p=\d+$/, du=UYAN.getDu();
                    if(loc!=-1)a=a.substr(0, loc);
                    loc=a.indexOf('//');
                    if(loc!=-1)a=a.substr(loc+2);
                    for(var i=0;
                    i<al.length;
                    i++) {
                        if(al[i].rel=='shortlink') {
                            if(p.test(al[i].href)) {
                                loc=al[i].href.indexOf('//');
                                if(loc!=-1)a=al[i].href.substr(loc+2);
                                break
                            }
                        }
                    }
                    try {
                        if(UYId&&UYId.content==null) {
                            a=UYId
                        }
                    }
                    catch(e) {}for(var j=0;
                    j<am.length;
                    j++) {
                        if(am[j].name) {
                            if(am[j].name=='UYId'&&am[j].content) {
                                a=am[j].content
                            }
                        }
                    }
                    if(du!=''&&du!=window.location.host) {
                        a=du+a.split(window.location.host)[1]
                    }
                    a=String(conf.su||a);
                    loc=a.indexOf('//');
                    if(loc!=-1)a=a.substr(loc+2);
                    return a
                }
                ,
                getDu:function() {
                    var a='';
                    a=String(conf.du||a);
                    return a
                }
                ,
                getPic:function() {
                    var a=d.getElementsByTagName('img'), pic='';
                    if(a.length>0) {
                        for(var i=0;
                        i<a.length;
                        i++) {
                            if((a[i].width!=null&&p(a[i].width)>=270&&a[i].height!=null&&p(a[i].height)>=270)||(a[i].width!=null&&p(a[i].width)>=350&&a[i].height!=null&&p(a[i].height)>=130)||(a[i].width!=null&&p(a[i].width)>=200&&a[i].height!=null&&p(a[i].height)>=400)) {
                                pic=a[i].src;
                                break
                            }
                        }
                    }
                    if(conf.pic=='') {
                        pic=conf.pic
                    }
                    else {
                        pic=String(conf.pic||pic)
                    }
                    return pic
                }
                ,
                getCb:function() {
                    var u=window.location.href||'', ai, q=null, cm= {
                        'uyan_qq': 'qq', 'uyan_tsina': 'tsina', 'uyan_tqq': 'tqq', 'uyan_test': 'test'
                    }
                    ,
                    an=u?u.indexOf('uyan-'):-1;
                    if(an>-1) {
                        ai=u.substr(an);
                        q=ai.split('#').pop().split('-').pop().split('=').pop();
                        q=cm['uyan_'+q]?q: ''
                    }
                    return q;
                    if(q) {
                        var s='f='+q+'&u='+ec(u)+'&c=123456';
                        (new Image).src='http://api.uyan.cc/c.gif?'+s
                    }
                }
                ,
                getCount:function() {
                    var a=d.getElementsByTagName('a');
                    for(var i=0;
                    i<a.length;
                    i++) {
                        if(a[i].getAttribute('uyan_identify')=='true'||a[i].id=='uyan_count_unit') {
                            UYAN.reqItf( {
                                mode: 'count', url: ec(a[i].href), du: ec(a[i].getAttribute('du')!=null?a[i].getAttribute('du'): ''), su: ec(a[i].getAttribute('su')!=null?a[i].getAttribute('su'): ''), txt: ec(a[i].innerHTML)
                            }
                            ,
                            'count')
                        }
                        if(a[i].id=='uyan_vup_unit') {
                            UYAN.reqItf( {
                                mode: 'vup', url: ec(a[i].href), du: ec(a[i].getAttribute('du')!=null?a[i].getAttribute('du'): ''), su: ec(a[i].getAttribute('su')!=null?a[i].getAttribute('su'): ''), txt: ec(a[i].innerHTML)
                            }
                            ,
                            'vup')
                        }
                    }
                }
                ,
                getACL:function() {
                    var a=d.getElementsByTagName('div'), acl='';
                    for(var i=0;
                    i<a.length;
                    i++) {
                        if(a[i].id=='uyan_list_hotness_frame'||a[i].id=='uyan_hotcmt_unit') {
                            acl+='hc,'
                        }
                        if(a[i].id=='uyan_list_time_frame'||a[i].id=='uyan_newcmt_unit') {
                            acl+='nc,'
                        }
                        if(a[i].id=='uyan_list_article_hotness_frame'||a[i].id=='uyan_hotate_unit') {
                            acl+='ha,'
                        }
                        if(a[i].id=='uyan_list_article_time_frame'||a[i].id=='uyan_newate_unit') {
                            acl+='na,'
                        }
                    }
                    return acl
                }
                ,
                init:function() {
                    var A="?url="+ec(String(conf.url||d.location)), B="&title="+ec(String(conf.title||d.title)), C="&du="+ec(UYAN.getDu()), D="&su="+ec(UYAN.getSu()), E="&pic="+ec(UYAN.getPic()), F="&vid="+ec(String(conf.vid?conf.vid: '')), G="&tag="+ec(String(conf.tag?conf.tag: '')), H="&uid="+(conf.uid||(params['uid']?params['uid']: (params['UYUserId']?params['UYUserId']: ''))), I="&acl="+ec(UYAN.getACL()), J="&lang="+(params['lang']?params['lang']: 'zh-cn'), SRC=UYAN.apiHost+A+B+C+D+E+F+G+H+I+J;
                    if(params['style']) {
                        SRC+="&style="+ec(params['style'])
                    }
                    if(conf.ct!=null) {
                        SRC+="&ct="+ec(conf.ct)
                    }
                    if(conf.md!=null) {
                        SRC+="&md="+ec(conf.md)
                    }
                    if(UYAN.getCb()) {
                        SRC+="&cb="+ec(UYAN.getCb())
                    }
                    if(conf.lcb!=null) {
                        SRC+="&lcb="+ec(conf.lcb)
                    }
                    if(UYAN.getCookie('syncuyan')) {
                        SRC+="&sui="+ec(UYAN.getCookie('syncuyan'))
                    }
                    SRC+="&t="+UYAN.randNum();
                    UYAN.creElm( {
                        src: SRC, charset: 'utf-8', id: 'uyan_script'
                    }
                    ,
                    'script',
                    d.getElementsByTagName('head')[0]||dd);
                    UYAN.getCount()
                }
                ,
                voteUD:function(a) {
                    if(a=='uu'||a=='uc'||a=='du'||a=='dc') {
                        UYAN.reqItf( {
                            mode: 'vud', type: a
                        }
                        )
                    }
                }
                ,
                voteCUD:function(a) {
                    var b=d.getElementById('uyan_vu'), vd=d.getElementById('uyan_vd'), vun=d.getElementById('uyan_vun'), vl=d.getElementById('uyan_like'), ss=UYAN.conf.style=='facebook'?'2': '';
                    if(UYAN.conf.style=='color') {
                        if(a=='uu') {
                            vun.innerHTML=p(vun.innerHTML)+1;
                            vl.style.background='url("'+UYAN.imgHost+'linkbg_'+UYAN.conf.colortype+'.png") repeat-x';
                            vl.style.border='1px solid #'+UYAN.conf.color;
                            b.style.color='#ffffff';
                            vun.style.color='#ffffff';
                            b.onclick=function() {
                                UYAN.voteUD('uc')
                            }
                        }
                        else if(a=='uc') {
                            vun.innerHTML=p(vun.innerHTML)-1;
                            vl.style.background='url("'+UYAN.imgHost+'linkbg.png") repeat-x';
                            vl.style.border='1px solid #D7D7D7';
                            b.style.color='#424242';
                            vun.style.color='#424242';
                            b.onclick=function() {
                                UYAN.voteUD('uu')
                            }
                        }
                        return
                    }
                    if(a=='uu') {
                        b.firstChild.src=''+UYAN.imgHost+'upDig'+ss+'Color.png';
                        b.onclick=function() {
                            UYAN.voteUD('uc')
                        }
                        ;
                        vd.firstChild.src=''+UYAN.imgHost+'downDig'+ss+'.png';
                        vd.onclick=function() {
                            UYAN.voteUD('du')
                        }
                        ;
                        vun.innerHTML=p(vun.innerHTML)+1
                    }
                    else if(a=='uc') {
                        b.firstChild.src=''+UYAN.imgHost+'upDig'+ss+'.png';
                        b.onclick=function() {
                            UYAN.voteUD('uu')
                        }
                        ;
                        vd.onclick=function() {
                            UYAN.voteUD('du')
                        }
                        ;
                        vun.innerHTML=p(vun.innerHTML)-1
                    }
                    else if(a=='du') {
                        b.firstChild.src=''+UYAN.imgHost+'upDig'+ss+'.png';
                        b.onclick=function() {
                            UYAN.voteUD('uu')
                        }
                        ;
                        vd.firstChild.src=''+UYAN.imgHost+'downDig'+ss+'Color.png';
                        vd.onclick=function() {
                            UYAN.voteUD('dc')
                        }
                    }
                    else if(a=='dc') {
                        b.onclick=function() {
                            UYAN.voteUD('uu')
                        }
                        ;
                        vd.firstChild.src=''+UYAN.imgHost+'downDig'+ss+'.png';
                        vd.onclick=function() {
                            UYAN.voteUD('du')
                        }
                    }
                }
                ,
                voteStar:function(n) {
                    if(n>0&&n<6) {
                        UYAN.reqItf( {
                            mode: 'vstar', level: n
                        }
                        );
                        UYAN.vStar=n
                    }
                }
                ,
                voteCStar:function(n) {
                    if(n>0&&n<6) {
                        for(var i=1;
                        i<6;
                        i++) {
                            var a=d.getElementById('uyan_vs_'+i);
                            a.onmouseout=function() {
                                UYAN.cagStar(n)
                            }
                        }
                    }
                }
                ,
                cagStar:function(n) {
                    if(n==0) {
                        for(var i=1;
                        i<6;
                        i++) {
                            var a=d.getElementById('uyan_vs_'+i);
                            if(UYAN.conf.style!='facebook'&&UYAN.conf.style!='disqus') {
                                a.style.background='url("'+UYAN.imgHost+'star_un.png") no-repeat scroll 0 0 transparent'
                            }
                            else {
                                a.style.background='url("'+UYAN.imgHost+'star_b_un.png") no-repeat scroll 0 0 transparent'
                            }
                        }
                    }
                    else if(n>0&&n<6) {
                        for(var i=1;
                        i<6;
                        i++) {
                            var a=d.getElementById('uyan_vs_'+i);
                            if(i<=n) {
                                if(UYAN.conf.style!='facebook'&&UYAN.conf.style!='disqus') {
                                    a.style.background='url("'+UYAN.imgHost+'star_done.png") no-repeat scroll 0 0 transparent'
                                }
                                else {
                                    a.style.background='url("'+UYAN.imgHost+'star_b_done.png") no-repeat scroll 0 0 transparent'
                                }
                            }
                            else {
                                if(UYAN.conf.style!='facebook'&&UYAN.conf.style!='disqus') {
                                    a.style.background='url("'+UYAN.imgHost+'star_un.png") no-repeat scroll 0 0 transparent'
                                }
                                else {
                                    a.style.background='url("'+UYAN.imgHost+'star_b_un.png") no-repeat scroll 0 0 transparent'
                                }
                            }
                        }
                    }
                }
                ,
                cmtUD:function(a,
                b) {
                    if(a=='uu'||a=='uc'||a=='du'||a=='dc') {
                        UYAN.reqItf( {
                            mode: 'cud', type: a, cid: b
                        }
                        )
                    }
                }
                ,
                cmtCUD:function(a,
                b) {
                    var c=d.getElementById('uyan_cu_'+b), cuw=d.getElementById('uyan_cuw_'+b), cd=d.getElementById('uyan_cd_'+b), cdw=d.getElementById('uyan_cdw_'+b), cun=p(c.innerHTML==''?0: c.innerHTML), cdn=p(cd.innerHTML==''?0: cd.innerHTML);
                    if(a=='uu') {
                        c.innerHTML=cun+1;
                        cuw.style.background='url("'+UYAN.imgHost+'upDig2Color.png") no-repeat scroll 0 0 transparent';
                        c.parentElement.onclick=function() {
                            UYAN.cmtUD('uc', b)
                        }
                        ;
                        cuw.onclick=function() {
                            UYAN.cmtUD('uc', b)
                        }
                        ;
                        if(cdw.style.background.indexOf('downDig2Color')!=-1)cd.innerHTML=cdn?cdn-1:0;
                        cdw.style.background='url("'+UYAN.imgHost+'downDig2.png") no-repeat scroll 0 0 transparent';
                        cd.parentElement.onclick=function() {
                            UYAN.cmtUD('du', b)
                        }
                        ;
                        cdw.onclick=function() {
                            UYAN.cmtUD('du', b)
                        }
                    }
                    else if(a=='uc') {
                        c.innerHTML=cun-1;
                        cuw.style.background='url("'+UYAN.imgHost+'upDig2.png") no-repeat scroll 0 0 transparent';
                        c.parentElement.onclick=function() {
                            UYAN.cmtUD('uu', b)
                        }
                        ;
                        cuw.onclick=function() {
                            UYAN.cmtUD('uu', b)
                        }
                        ;
                        cd.parentElement.onclick=function() {
                            UYAN.cmtUD('du', b)
                        }
                        ;
                        cdw.onclick=function() {
                            UYAN.cmtUD('du', b)
                        }
                    }
                    else if(a=='du') {
                        if(cuw.style.background.indexOf('upDig2Color')!=-1)c.innerHTML=cun?cun-1: 0;
                        cuw.style.background='url("'+UYAN.imgHost+'upDig2.png") no-repeat scroll 0 0 transparent';
                        c.parentElement.onclick=function() {
                            UYAN.cmtUD('uu', b)
                        }
                        ;
                        cuw.onclick=function() {
                            UYAN.cmtUD('uu', b)
                        }
                        ;
                        cd.innerHTML=cdn+1;
                        cdw.style.background='url("'+UYAN.imgHost+'downDig2Color.png") no-repeat scroll 0 0 transparent';
                        cd.parentElement.onclick=function() {
                            UYAN.cmtUD('dc', b)
                        }
                        ;
                        cdw.onclick=function() {
                            UYAN.cmtUD('dc', b)
                        }
                    }
                    else if(a=='dc') {
                        c.parentElement.onclick=function() {
                            UYAN.cmtUD('uu', b)
                        }
                        ;
                        cuw.onclick=function() {
                            UYAN.cmtUD('uu', b)
                        }
                        ;
                        cd.innerHTML=cdn-1;
                        cdw.style.background='url("'+UYAN.imgHost+'downDig2.png") no-repeat scroll 0 0 transparent';
                        cd.parentElement.onclick=function() {
                            UYAN.cmtUD('du', b)
                        }
                        ;
                        cdw.onclick=function() {
                            UYAN.cmtUD('du', b)
                        }
                    }
                }
                ,
                hidIntro:function(e,
                a) {
                    var b=UYAN.getWH(e.parentNode), sm=d.getElementById('uyan_smile'+(a!=null?'_'+a: '')), ss=d.getElementById('uyan_ssmile'+(a!=null?'_'+a: ''));
                    if(e.style.width=='') {
                        if(iie) {
                            e.style.width=b.oW-20+'px'
                        }
                        else {
                            e.style.width=b.oW-10+'px'
                        }
                        e.style.height=b.oH-10+'px'
                    }
                    if(e.value==UYAN.lang.iptCmt) {
                        e.value='';
                        e.style.color='#272727'
                    }
                    else {
                        e.style.color='#272727'
                    }
                    if(UYAN.conf.style!='side'&&UYAN.conf.style!='color') {
                        sm.style.display=''
                    }
                    ss.style.display='none';
                    e.focus()
                }
                ,
                shoIntro:function(e,
                a) {
                    var b=d.getElementById('uyan_smile'+(a!=null?'_'+a: ''));
                    if(e.value=='') {
                        e.value=UYAN.lang.iptCmt;
                        e.style.color='#BDBBBB'
                    }
                    setTimeout(function() {
                        if(UYAN.conf.style!='color')b.style.display='none'
                    }
                    ,
                    200)
                }
                ,
                shoSmile:function(e,
                t,
                a) {
                    var b='', cs=a!=null?'_'+a: '', ss=d.getElementById('uyan_ssmile'+cs), ssd=d.getElementById('uyan_ssmile_df'+cs), ssa=d.getElementById('uyan_ssmile_al'+cs), ssl=d.getElementById('uyan_ssmile_list'+cs);
                    ss.style.display='';
                    if(t=='al') {
                        ssd.style.background='none repeat scroll 0 center transparent';
                        ssd.style.color='';
                        ssa.style.background='url("'+UYAN.imgHost+'smileb.gif") no-repeat scroll 0 0 transparent';
                        ssa.style.color='#fff'
                    }
                    else {
                        ssd.style.background='url("'+UYAN.imgHost+'smileb.gif") no-repeat scroll 0 0 transparent';
                        ssd.style.color='#fff';
                        ssa.style.background='none repeat scroll 0 center transparent';
                        ssa.style.color=''
                    }
                    for(var i=1;
                    i<=40;
                    i++) {
                        if(t=='al') {
                            b+='<li style="list-style: none; border: 1px solid #d3e4f0; border-top: 1px solid #fff; border-left: 1px solid #fff; width: 29px; height: 29px; overflow: hidden; float: left; background: none repeat scroll 0 center transparent; margin: 0; padding: 0;"><img onclick="UYAN.addSmile(this, \'al\''+(a!=null?', '+a: '')+');" style="cursor: pointer; display: block; margin: 4px auto 0;" title="'+UYAN.smile.al[(i-1)]+'" src="'+UYAN.imgHost+'smile/al/'+i+'.gif"/></li>'
                        }
                        else {
                            b+='<li style="list-style: none; border: 1px solid #d3e4f0; border-top: 1px solid #fff; border-left: 1px solid #fff; width: 29px; height: 29px; overflow: hidden; float: left; background: none repeat scroll 0 center transparent; margin: 0; padding: 0;"><img onclick="UYAN.addSmile(this, \'df\''+(a!=null?', '+a: '')+');" style="cursor: pointer; display: block; margin: 4px auto 0;" title="'+UYAN.smile.df[(i-1)]+'" src="'+UYAN.imgHost+'smile/df/'+i+'.png"/></li>'
                        }
                    }
                    b+='<div style="clear: both"></div>';
                    ssl.innerHTML=b
                }
                ,
                cagBtn:function(t,
                e) {
                    if(t=='on'&&(UYAN.conf.style=='disqus'||UYAN.conf.style=='fresh'||UYAN.conf.style=='color')) {
                        e.style.background='url("'+UYAN.imgHost+'buttonLarge.png") repeat-x scroll 0 -28px transparent'
                    }
                    else if(t=='out'&&(UYAN.conf.style=='disqus'||UYAN.conf.style=='fresh'||UYAN.conf.style=='color')) {
                        e.style.background='url("'+UYAN.imgHost+'buttonLarge.png") repeat-x scroll 0 0 transparent'
                    }
                }
                ,
                addCmt:function(e,
                a,
                b) {
                    if(UYAN.conf.login||UYAN.conf.style=='color') {
                        var f=a!=null?'_'+a: '', c=d.getElementById('uyan_comment'+f), s=d.getElementById('uyan_sync'+f), t=d.getElementById('uyan_tts'+f), cu=d.getElementById('uyan_cmt_uname'+f), lu=d.getElementById('uyan_l_uname'+f), le=d.getElementById('uyan_l_email'+f), ll=d.getElementById('uyan_l_ulink'+f), send= {};
                        try {
                            if(UYAN.conf.isvis) {
                                if(UYAN.conf.style=='color'&&(lu.value==''||lu.value==UYAN.lang.iptUname)) {
                                    UYAN.showMsg(t, UYAN.lang.unameErr, '#FF7878', '12px');
                                    return
                                }
                                if(UYAN.conf.style=='color'&&le.value!=''&&le.value!=UYAN.lang.iptEmail) {
                                    if(le.value.match(/^[\w][\w+\.\_\-]*@\w+(\.\w+)*\.[A-z] {
                                        2,
                                    }
                                    $/g)===null) {
                                        UYAN.showMsg(t, UYAN.lang.emailErr, '#FF7878', '12px');
                                        return
                                    }
                                }
                                if(UYAN.conf.style=='color'&&ll.value!=''&&ll.value!=UYAN.lang.iptUlink) {
                                    var g=new RegExp("^((https|http|ftp|rtsp|mms)?://)?(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+\.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z]\.[a-zA-Z]{2,6})(:[0-9]{1,4})?((/?)|(/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+/?)$");
                                    if(!g.test(ll.value)) {
                                        UYAN.showMsg(t, UYAN.lang.ulinkErr, '#FF7878', '12px');
                                        return
                                    }
                                }
                            }
                        }
                        catch(e) {}if(a!=null) {
                            if(c.value=='@'+cu.innerHTML+': ') {
                                if(UYAN.conf.style=='color') {
                                    UYAN.showMsg(t, UYAN.lang.iptCmt, '#FF7878', '12px')
                                }
                                else {
                                    UYAN.showMsg(c, UYAN.lang.iptCmt, '#424242', '13px')
                                }
                                return
                            }
                        }
                        if(!UYAN.conf.login&&UYAN.conf.style=='color'&&!UYAN.conf.isvis) {
                            UYAN.login();
                            return
                        }
                        if(p(t.innerHTML)<0) {
                            if(UYAN.conf.style=='color') {
                                UYAN.showMsg(t, UYAN.lang.ttsWarn, '#FF7878', '12px')
                            }
                            else {
                                UYAN.showMsg(c, UYAN.lang.ttsWarn, '#424242', '13px')
                            }
                            return
                        }
                        else if(c.value!=UYAN.lang.iptCmt&&UYAN.trim(c.value)!='') {
                            try {
                                if(a!=null) {
                                    send= {
                                        mode: 'addcmt', ctt: c.value, isr: (b!=null?b: a), rf: (b!=null?a: 0), vs: UYAN.vStar, pic: ec(UYAN.getPic()), vid: ec(String(conf.vid?conf.vid: '')), tag: ec(String(conf.tag?conf.tag: '')), uname: ec(lu.value==UYAN.lang.iptUname?'': lu.value), email: ec(le.value==UYAN.lang.iptEmail?'': le.value), ulink: (ll.value==UYAN.lang.iptUlink?'': ll.value)
                                    }
                                    ;
                                    if(s.checked||p(s.value)==1) {
                                        send= {
                                            mode: 'addcmt', ctt: c.value, isr: (b!=null?b: a), rf: (b!=null?a: 0), sync: 1, vs: UYAN.vStar, pic: ec(UYAN.getPic()), vid: ec(String(conf.vid?conf.vid: '')), tag: ec(String(conf.tag?conf.tag: '')), uname: ec(lu.value==UYAN.lang.iptUname?'': lu.value), email: ec(le.value==UYAN.lang.iptEmail?'': le.value), ulink: (ll.value==UYAN.lang.iptUlink?'': ll.value)
                                        }
                                    }
                                }
                                else {
                                    send= {
                                        mode: 'addcmt', ctt: c.value, vs: UYAN.vStar, pic: ec(UYAN.getPic()), vid: ec(String(conf.vid?conf.vid: '')), tag: ec(String(conf.tag?conf.tag: '')), uname: ec(lu.value==UYAN.lang.iptUname?'': lu.value), email: ec(le.value==UYAN.lang.iptEmail?'': le.value), ulink: (ll.value==UYAN.lang.iptUlink?'': ll.value)
                                    }
                                    ;
                                    if(s.checked||p(s.value)==1) {
                                        send= {
                                            mode: 'addcmt', ctt: c.value, sync: 1, vs: UYAN.vStar, pic: ec(UYAN.getPic()), vid: ec(String(conf.vid?conf.vid: '')), tag: ec(String(conf.tag?conf.tag: '')), uname: ec(lu.value==UYAN.lang.iptUname?'': lu.value), email: ec(le.value==UYAN.lang.iptEmail?'': le.value), ulink: (ll.value==UYAN.lang.iptUlink?'': ll.value)
                                        }
                                    }
                                }
                            }
                            catch(e) {
                                if(a!=null) {
                                    send= {
                                        mode: 'addcmt', ctt: c.value, isr: (b!=null?b: a), rf: (b!=null?a: 0), vs: UYAN.vStar, pic: ec(UYAN.getPic()), vid: ec(String(conf.vid?conf.vid: '')), tag: ec(String(conf.tag?conf.tag: ''))
                                    }
                                    ;
                                    if(s.checked||p(s.value)==1) {
                                        send= {
                                            mode: 'addcmt', ctt: c.value, isr: (b!=null?b: a), rf: (b!=null?a: 0), sync: 1, vs: UYAN.vStar, pic: ec(UYAN.getPic()), vid: ec(String(conf.vid?conf.vid: '')), tag: ec(String(conf.tag?conf.tag: ''))
                                        }
                                    }
                                }
                                else {
                                    send= {
                                        mode: 'addcmt', ctt: c.value, vs: UYAN.vStar, pic: ec(UYAN.getPic()), vid: ec(String(conf.vid?conf.vid: '')), tag: ec(String(conf.tag?conf.tag: ''))
                                    }
                                    ;
                                    if(s.checked||p(s.value)==1) {
                                        send= {
                                            mode: 'addcmt', ctt: c.value, sync: 1, vs: UYAN.vStar, pic: ec(UYAN.getPic()), vid: ec(String(conf.vid?conf.vid: '')), tag: ec(String(conf.tag?conf.tag: ''))
                                        }
                                    }
                                }
                            }
                            e.onclick=function() {};
                            UYAN.reqItf(send);
                            e.innerHTML=UYAN.lang.sending
                        }
                        else {
                            if(UYAN.conf.style=='color') {
                                UYAN.showMsg(t, UYAN.lang.iptCmt, '#FF7878', '12px')
                            }
                            else {
                                UYAN.showMsg(c, UYAN.lang.iptCmt, '#424242', '13px')
                            }
                            return
                        }
                    }
                    else {
                        UYAN.login()
                    }
                }
                ,
                addCCmt:function(a,
                t) {
                    var b=d.getElementById('uyan_cmt_list'), clw=d.getElementById('uyan_cmt_list_warn'), c=d.getElementById('uyan_comment'), ct=d.getElementById('uyan_tts'), acn=d.getElementById('uyan_acn'), mc=d.getElementById('uyan_more_cmt'), cb=d.getElementById('uyan_cmt_btn');
                    a=UYAN.cSmile(a);
                    if(t=='add') {
                        try {
                            b.innerHTML=(clw.innerHTML!=UYAN.lang.noCmt&&clw.innerHTML!=UYAN.lang.loadData)?b.innerHTML: '';
                            acn.innerHTML=p(acn.innerHTML)+1
                        }
                        catch(e) {}b.innerHTML=a+b.innerHTML;
                        c.value=UYAN.lang.sendSucc;
                        c.style.color='#0000ff';
                        cb.innerHTML=UYAN.lang.addCmt;
                        setTimeout(function() {
                            c.style.color='#BDBBBB';
                            c.value=UYAN.lang.iptCmt
                        }
                        ,
                        1000);
                        cb.onclick=function() {
                            UYAN.addCmt(this)
                        }
                        ;
                        UYAN.vStar=0
                    }
                    else if(t=='spam'||t=='again'||t=='short') {
                        if(UYAN.conf.style=='color') {
                            UYAN.showMsg(ct, eval('UYAN.lang.'+t+'Warn'), '#FF7878', '12px')
                        }
                        else {
                            UYAN.showMsg(c, eval('UYAN.lang.'+t+'Warn'), '#FF7878', '13px')
                        }
                        cb.innerHTML=UYAN.lang.addCmt;
                        cb.onclick=function() {
                            UYAN.addCmt(this)
                        }
                    }
                    else if(t=='more') {
                        b.removeChild(mc);
                        b.innerHTML=b.innerHTML+a
                    }
                    else if(t=='page') {
                        b.innerHTML=a
                    }
                    else if(a=='') {
                        try {
                            clw.innerHTML=UYAN.lang.noCmt
                        }
                        catch(e) {
                            b.innerHTML='<div id="uyan_cmt_list_warn" style="margin-top: 10px; padding-top: 10px; font-size: 12px; color: #303030; text-align: center;">'+UYAN.lang.noCmt+'</div>'
                        }
                    }
                    else {
                        b.innerHTML=a
                    }
                }
                ,
                addCRpy:function(a,
                b,
                f,
                t) {
                    var g=d.getElementById('uyan_cmt_'+b), n=d.createTextNode('uyan_tmp_txt'), acn=d.getElementById('uyan_acn'), cl=d.getElementById('uyan_cmt_list'), c=d.getElementById('uyan_comment_'+b), rt=d.getElementById('uyan_tts_'+b), cb=d.getElementById('uyan_cmt_btn_'+b), mr=d.getElementById('uyan_more_rpy_'+b);
                    a=UYAN.cSmile(a);
                    if(t=='more') {
                        g.parentNode.insertBefore(n, mr);
                        cl.removeChild(mr);
                        cl.innerHTML=cl.innerHTML.replace('uyan_tmp_txt', a)
                    }
                    else if(t=='spam'||t=='again'||t=='short') {
                        if(UYAN.conf.style=='color') {
                            UYAN.showMsg(rt, eval('UYAN.lang.'+t+'Warn'), '#FF7878', '12px')
                        }
                        else {
                            UYAN.showMsg(c, eval('UYAN.lang.'+t+'Warn'), '#FF7878', '13px')
                        }
                        cb.innerHTML=UYAN.lang.addRpy;
                        if(f!=null&&f!='') {
                            cb.onclick=function() {
                                UYAN.addCmt(this, b, f)
                            }
                        }
                        else {
                            cb.onclick=function() {
                                UYAN.addCmt(this, b)
                            }
                        }
                    }
                    else {
                        try {
                            acn.innerHTML=p(acn.innerHTML)+1
                        }
                        catch(e) {}if(f!=null&&f!='') {
                            g=d.getElementById('uyan_cmt_'+f)
                        }
                        UYAN.addRpy(b);
                        g.parentNode.insertBefore(n,
                        g.nextSibling);
                        cl.innerHTML=cl.innerHTML.replace('uyan_tmp_txt',
                        a);
                        UYAN.vStar=0
                    }
                }
                ,
                addRpy:function(a,
                b) {
                    try {
                        var f=d.getElementById('uyan_cmt_'+a), cu=d.getElementById('uyan_cmt_uname_'+a), r=d.getElementById('uyan_rpy'), ri=d.getElementById('uyan_rpy_'+a), A=(b!=null)?'<div id="uyan_rpy_'+a+'" style="padding-top: 10px;">': (UYAN.conf.style=='side'?'<div id="uyan_rpy_'+a+'" style="opacity: 0; padding-top: 10px;">': '<div id="uyan_rpy_'+a+'" style="opacity: 0; padding-left: 60px; padding-top: 10px;">');
                        if(ri!=null) {
                            f.removeChild(ri)
                        }
                        else {
                            f.innerHTML=f.innerHTML+A+r.innerHTML.replace('uyan_comment_region', a+(b!=null?', '+b: '')).replace('uyan_comment', 'uyan_comment_'+a).replace('uyan_cmt_cnt', 'uyan_cmt_cnt_'+a).replace('uyan_cmt_btn', 'uyan_cmt_btn_'+a).replace(/uyan_tts_region/g, a).replace('uyan_tts', 'uyan_tts_'+a).replace(/uyan_smile_region/g, a).replace('uyan_ssmile_list', 'uyan_ssmile_list_'+a).replace('uyan_ssmile_df', 'uyan_ssmile_df_'+a).replace('uyan_ssmile_al', 'uyan_ssmile_al_'+a).replace('uyan_ssmile', 'uyan_ssmile_'+a).replace('uyan_smile', 'uyan_smile_'+a).replace(/uyan_sync/g, 'uyan_sync_'+a).replace(/uyan_slog/g, 'uyan_slog_'+a).replace(UYAN.lang.iptCmt, '@'+cu.innerHTML+': ').replace('uyan_lb_uname', 'uyan_lb_uname_'+a).replace('uyan_lb_email', 'uyan_lb_email_'+a).replace('uyan_lb_ulink', 'uyan_lb_ulink_'+a).replace(/uyan_lb_region/g, a).replace('uyan_l_uname', 'uyan_l_uname_'+a).replace('uyan_l_email', 'uyan_l_email_'+a).replace('uyan_l_ulink', 'uyan_l_ulink_'+a).replace('uyan_ml_kaixin001', 'uyan_ml_kaixin001_'+a).replace('uyan_ml_t163', 'uyan_ml_t163_'+a).replace(/uyan_ml_region/g, a)+'</div>';
                            UYAN.scrollBox.alpha(d.getElementById('uyan_rpy_'+a));
                            if(UYAN.conf.style=='color') {
                                d.getElementById('uyan_l_uname_'+a).value=d.getElementById('uyan_l_uname').value;
                                d.getElementById('uyan_l_email_'+a).value=d.getElementById('uyan_l_email').value;
                                d.getElementById('uyan_l_ulink_'+a).value=d.getElementById('uyan_l_ulink').value
                            }
                            var c=d.getElementById('uyan_comment_'+a),
                            tv=c.value;
                            c.focus();
                            c.value='';
                            c.value=tv
                        }
                    }
                    catch(e) {}
                }
                ,
                optCmt:function(t,
                a) {
                    if(a==null) {
                        a=UYAN.changeAll(true)
                    }
                    if(a!=''&&t!=null) {
                        UYAN.reqItf( {
                            mode: t, cid: a
                        }
                        )
                    }
                }
                ,
                optCCmt:function(a,
                b,
                t) {
                    var c=d.getElementsByTagName('a');
                    for(var i=0;
                    i<c.length;
                    i++) {
                        if(t=='delcmt'&&c[i].getAttribute('uyanopt')==('uyan_'+t+'_'+a)) {
                            c[i].innerHTML=UYAN.lang.rsrS;
                            c[i].onclick=function() {
                                UYAN.optCmt('rsrcmt', a)
                            }
                            ;
                            c[i].setAttribute('uyanopt',
                            'uyan_rsrcmt_'+a);
                            c[i].style.color='#3030ff';
                            var e=c[i];
                            e.style.color='#3030ff';
                            setTimeout(function() {
                                e.style.color='#303030'
                            }
                            ,
                            1000)
                        }
                        else if(t=='rsrcmt'&&c[i].getAttribute('uyanopt')==('uyan_'+t+'_'+a)) {
                            c[i].innerHTML=UYAN.lang.delS;
                            c[i].onclick=function() {
                                UYAN.optCmt('delcmt', a)
                            }
                            ;
                            c[i].setAttribute('uyanopt',
                            'uyan_delcmt_'+a);
                            var e=c[i];
                            e.style.color='#3030ff';
                            setTimeout(function() {
                                e.style.color='#303030'
                            }
                            ,
                            1000)
                        }
                        else if(t=='topcmt'&&c[i].getAttribute('uyanopt')==('uyan_'+t+'_'+a)) {
                            c[i].innerHTML=UYAN.lang.dopS;
                            c[i].onclick=function() {
                                UYAN.optCmt('dopcmt', a)
                            }
                            ;
                            c[i].setAttribute('uyanopt',
                            'uyan_dopcmt_'+a);
                            var e=c[i];
                            e.style.color='#3030ff';
                            setTimeout(function() {
                                e.style.color='#303030'
                            }
                            ,
                            1000)
                        }
                        else if(t=='dopcmt'&&c[i].getAttribute('uyanopt')==('uyan_'+t+'_'+a)) {
                            c[i].innerHTML=UYAN.lang.topS;
                            c[i].onclick=function() {
                                UYAN.optCmt('topcmt', a)
                            }
                            ;
                            c[i].setAttribute('uyanopt',
                            'uyan_topcmt_'+a);
                            var e=c[i];
                            e.style.color='#3030ff';
                            setTimeout(function() {
                                e.style.color='#303030'
                            }
                            ,
                            1000)
                        }
                        else if(t=='viycmt'&&c[i].getAttribute('uyanopt')==('uyan_'+t+'_'+a)) {
                            c[i].innerHTML=UYAN.lang.delS;
                            c[i].onclick=function() {
                                UYAN.optCmt('delcmt', a)
                            }
                            ;
                            c[i].setAttribute('uyanopt',
                            'uyan_delcmt_'+a);
                            var e=c[i];
                            e.style.color='#3030ff';
                            setTimeout(function() {
                                e.style.color='#303030'
                            }
                            ,
                            1000)
                        }
                        else if(t=='bckcmt'&&c[i].getAttribute('uyanopt')==('uyan_'+t+'_'+a)) {
                            c[i].innerHTML=UYAN.lang.rsrS;
                            c[i].onclick=function() {
                                UYAN.optCmt('rsrcmt', a)
                            }
                            ;
                            c[i].setAttribute('uyanopt',
                            'uyan_rsrcmt_'+a);
                            var e=c[i];
                            e.style.color='#3030ff';
                            setTimeout(function() {
                                e.style.color='#303030'
                            }
                            ,
                            1000)
                        }
                    }
                }
                ,
                show:function(e) {
                    clearTimeout(UYAN.tmpS);
                    var o=e;
                    if(typeof(e)!='object') {
                        o=d.getElementById(e)
                    }
                    o.style.display=''
                }
                ,
                hide:function(e) {
                    var o=e;
                    if(typeof(e)!='object') {
                        o=d.getElementById(e)
                    }
                    UYAN.tmpS=setTimeout(function() {
                        o.style.display='none'
                    }
                    ,
                    200)
                }
                ,
                showBox:function() {
                    var a=d.getElementById('uyan_box'), nb=d.createElement('div');
                    nb.id='uyan_box';
                    nb.style.fontFamily=UYAN.lang.font;
                    nb.style.display='none';
                    nb.style.top='0px';
                    nb.style.left='0px';
                    nb.style.zIndex='9999999';
                    nb.style.opacity=1;
                    nb.style.emptyCells='show';
                    nb.style.position='absolute';
                    nb.style.background='none repeat scroll 0 0 #FFFFFF';
                    nb.style.textAlign='left';
                    nb.innerHTML=a.innerHTML;
                    a.parentNode.removeChild(a);
                    db.appendChild(nb);
                    var a=d.getElementById('uyan_box'), bc=d.getElementById('uyan_box_cnt');
                    bc.innerHTML='';
                    a.style.display='';
                    a.style.visibility='hidden';
                    setTimeout(function() {
                        var s=UYAN.getWH(a), sc=UYAN.getWH(bc);
                        a.style.left=s.psW+'px';
                        a.style.top=(s.psH<=0?100: s.psH)+'px';
                        if(sc.oW!=0)a.style.width=(sc.oW+20)+'px';
                        a.style.visibility=''
                    }
                    ,
                    1)
                }
                ,
                hideBox:function() {
                    var a=d.getElementById('uyan_box'), bc=d.getElementById('uyan_box_cnt');
                    a.style.display='none';
                    bc.innerHTML=''
                }
                ,
                cmty:function() {
                    UYAN.showBox();
                    var c=d.getElementById('uyan_cmty'), bc=d.getElementById('uyan_box_cnt');
                    bc.innerHTML=c.innerHTML.replace('uyan_cmty_info_tmp', 'uyan_cmty_info');
                    UYAN.reqItf( {
                        mode: 'getcmty'
                    }
                    )
                }
                ,
                cmtyC:function(a) {
                    var b=d.getElementById('uyan_cmty_info');
                    b.innerHTML=a
                }
                ,
                cmtSort:function(a,
                t) {
                    var b=d.getElementById('uyan_sort_box'), sn=d.getElementById('uyan_sort_name'), st=d.getElementById('uyan_sort_time'), sh=d.getElementById('uyan_sort_hot');
                    if(a!=null) {
                        if(t!=null) {
                            UYAN.ct=t;
                            UYAN.reqItf( {
                                mode: 'getcmt', sort: a, ct: t
                            }
                            )
                        }
                        else {
                            UYAN.ct='';
                            UYAN.reqItf( {
                                mode: 'getcmt', sort: a
                            }
                            )
                        }
                        UYAN.sort=a;
                        if(a==1) {
                            sn.innerHTML=UYAN.lang.hotSort;
                            st.style.background='';
                            st.style.fontWeight='';
                            sh.style.background='url("'+UYAN.imgHost+'currentSort.png") no-repeat scroll 8px 8px transparent';
                            sh.style.fontWeight='bold'
                        }
                        else {
                            sn.innerHTML=UYAN.lang.timeSort;
                            st.style.background='url("'+UYAN.imgHost+'currentSort.png") no-repeat scroll 8px 8px transparent';
                            st.style.fontWeight='bold';
                            sh.style.background='';
                            sh.style.fontWeight=''
                        }
                    }
                    if(t==null) {
                        if(b.style.display=='') {
                            b.style.display='none'
                        }
                        else {
                            b.style.display=''
                        }
                    }
                    else {
                        b.style.display='none'
                    }
                    try {
                        var c=d.getElementById('uyan_sort_tsina'), stq=d.getElementById('uyan_sort_tqq');
                        if(t=='tsina') {
                            c.parentNode.style.borderBottom='2px solid #'+UYAN.conf.color;
                            c.parentNode.style.fontWeight='600';
                            stq.parentNode.style.borderBottom='';
                            stq.parentNode.style.fontWeight='';
                            sn.parentNode.style.borderBottom='';
                            sn.parentNode.style.fontWeight=''
                        }
                        else if(t=='tqq') {
                            c.parentNode.style.borderBottom='';
                            c.parentNode.style.fontWeight='';
                            stq.parentNode.style.borderBottom='2px solid #'+UYAN.conf.color;
                            stq.parentNode.style.fontWeight='600';
                            sn.parentNode.style.borderBottom='';
                            sn.parentNode.style.fontWeight=''
                        }
                        else if(b.style.display=='none'&&UYAN.conf.style=='color') {
                            c.parentNode.style.borderBottom='';
                            c.parentNode.style.fontWeight='';
                            stq.parentNode.style.borderBottom='';
                            stq.parentNode.style.fontWeight='';
                            sn.parentNode.style.borderBottom='2px solid #'+UYAN.conf.color;
                            sn.parentNode.style.fontWeight='600'
                        }
                    }
                    catch(e) {}
                }
                ,
                login:function() {
                    UYAN.showBox();
                    var l=d.getElementById('uyan_login'), bc=d.getElementById('uyan_box_cnt');
                    bc.innerHTML=l.innerHTML.replace('uyan_email_tmp', 'uyan_email').replace('uyan_uname_tmp', 'uyan_uname').replace('uyan_login_warn_tmp', 'uyan_login_warn')
                }
                ,
                logout:function() {
                    UYAN.reqItf( {
                        mode: 'logout', py: UYAN.getY()
                    }
                    )
                }
                ,
                logoutCU:function() {
                    var u=UYAN.conf.ufrom=='sso'&&UYAN.conf.dslogout?UYAN.conf.dslogout: location.href, loc=u.indexOf('#');
                    if(loc!=-1)u=u.substr(0, loc);
                    u=u.replace(/amp;
                    /gi, '');
                    window.location.href=u
                }
                ,
                syncEN:function() {
                    d.getElementById('uyan_uname').value=d.getElementById('uyan_email').value.split('@')[0]
                }
                ,
                nnbg:function(t) {
                    if(t=='s') {
                        d.getElementById('uyan_uname').style.background='#f2f2f2'
                    }
                    else if(t=='h') {
                        d.getElementById('uyan_uname').style.background=''
                    }
                }
                ,
                writeLog:function() {
                    if(!conf.do_not_track&&w.location.host&&typeof(_gnayTrack)!='object') {
                        d.write('<script type="text/javascript" src="http://v3.jiathis.com/code/plugin.client.js" charset="utf-8"></script>')
                    }
                }
                ,
                loginEmail:function() {
                    var a=d.getElementById('uyan_email').value, uname=d.getElementById('uyan_uname').value, c=d.getElementById('uyan_comment'), warn=d.getElementById('uyan_login_warn');
                    if(a!='') {
                        if(a.match(/^[\w][\w+\.\_\-]*@\w+(\.\w+)*\.[A-z] {
                            2,
                        }
                        $/g)===null) {
                            warn.innerHTML=UYAN.lang.emailErr
                        }
                        else {
                            if(uname!='') {
                                UYAN.reqItf( {
                                    mode: 'login', type: 'email', email: a, uname: uname, py: UYAN.getY(), cmt: (c.value!=UYAN.lang.iptCmt?c.value: '')
                                }
                                );
                                warn.innerHTML=''
                            }
                            else {
                                warn.innerHTML=UYAN.lang.unameEpy
                            }
                        }
                    }
                    else {
                        warn.innerHTML=UYAN.lang.emailEpy
                    }
                }
                ,
                loginCEmail:function() {
                    var u=UYAN.conf.lcb?UYAN.conf.lcb: location.href, loc=u.indexOf('#');
                    if(loc!=-1)u=u.substr(0, loc);
                    window.location.href=u
                }
                ,
                loginQq:function() {
                    UYAN.creFrm('qq', 600, 360)
                }
                ,
                loginTSina:function() {
                    UYAN.creFrm('tsina', 600, 432)
                }
                ,
                loginTSohu:function() {
                    UYAN.creFrm('tsohu', 900, 460)
                }
                ,
                loginT163:function() {
                    UYAN.creFrm('t163', 820, 500)
                }
                ,
                loginTQq:function() {
                    UYAN.creFrm('tqq', 660, 500)
                }
                ,
                loginDouban:function() {
                    UYAN.creFrm('douban', 550, 450)
                }
                ,
                loginRenren:function() {
                    UYAN.creFrm('renren', 450, 330)
                }
                ,
                loginKaixin001:function() {
                    UYAN.creFrm('kaixin001', 500, 460)
                }
                ,
                loginMsn:function() {
                    UYAN.creFrm('msn', 500, 350)
                }
                ,
                loginTwitter:function() {
                    UYAN.creFrm('twitter', 500, 350)
                }
                ,
                loginFacebook:function() {
                    UYAN.creFrm('facebook', 500, 350)
                }
                ,
                loginSso:function() {
                    UYAN.creFrm('sso', UYAN.conf.dswidth, UYAN.conf.dsheight);
                    var g=null;
                    g=setInterval(function() {
                        if(UYAN.getCookie('syncuyan')) {
                            clearInterval(g);
                            UYAN.loginCEmail()
                        }
                    }
                    ,
                    1000)
                }
                ,
                checkTxt:function(e,
                a,
                b) {
                    var s=d.getElementById('uyan_tts'+(b!=null?'_'+b: '')), cc=d.getElementById('uyan_cmt_cnt'+(b!=null?'_'+b: '')), sc, ch, k=e.value.match(/[^\x00-\xff]/g), f=Math.floor((a*2-e.value.length-(k&&k.length||0))/2);
                    if(f>=0) {
                        s.innerHTML=f;
                        s.style.color=''
                    }
                    else {
                        if(a==0) {
                            s.innerHTML=Math.abs(f);
                            s.style.color=''
                        }
                        else {
                            s.innerHTML=-Math.abs(f);
                            s.style.color='#FF7878'
                        }
                    }
                    cc.innerHTML=e.value;
                    sc=UYAN.getWH(cc),
                    ch=Math.max(UYAN.conf.style=='side'||UYAN.conf.style=='facebook'||UYAN.conf.style=='color'?40:60,
                    sc.oH+18);
                    e.style.height=ch+'px';
                    e.parentNode.style.height=ch+'px';
                    e.parentNode.parentNode.parentNode.style.height=ch+18+'px';
                    return p(s.innerHTML)
                }
                ,
                showMore:function(e,
                a,
                b,
                t) {
                    e.onclick=function() {};
                    if(b!=null) {
                        UYAN.reqItf( {
                            mode: 'getrpy', type: 'more', sort: UYAN.sort, ct: UYAN.ct, pagenum: a, cid: b
                        }
                        );
                        e.innerHTML=UYAN.lang.loadRpy;
                        var i=0,
                        d='',
                        sI=setInterval(function() {
                            d='';
                            i++;
                            for(var j=0;
                            j<i;
                            j++) {
                                d+='.'
                            }
                            if(i==6) {
                                e.innerHTML=UYAN.lang.loadHold
                            }
                            else {
                                e.innerHTML=UYAN.lang.loadRpy+d
                            }
                        }
                        ,
                        1000);
                        setTimeout(function() {
                            clearInterval(sI)
                        }
                        ,
                        6000)
                    }
                    else {
                        if(t=='page') {
                            UYAN.reqItf( {
                                mode: 'getcmt', type: 'page', sort: UYAN.sort, ct: UYAN.ct, pagenum: a
                            }
                            )
                        }
                        else {
                            UYAN.reqItf( {
                                mode: 'getcmt', type: 'more', sort: UYAN.sort, ct: UYAN.ct, pagenum: a
                            }
                            );
                            e.innerHTML=UYAN.lang.loadCmt;
                            var i=0,
                            d='',
                            sI=setInterval(function() {
                                d='';
                                i++;
                                for(var j=0;
                                j<i;
                                j++) {
                                    d+='.'
                                }
                                if(i==6) {
                                    e.innerHTML=UYAN.lang.loadHold
                                }
                                else {
                                    e.innerHTML=UYAN.lang.loadCmt+d
                                }
                            }
                            ,
                            1000);
                            setTimeout(function() {
                                clearInterval(sI)
                            }
                            ,
                            6000)
                        }
                    }
                }
                ,
                changeMore:function(t,
                e) {
                    try {
                        if(UYAN.conf.tmpuh!=null) {
                            UYAN.conf.urlhash=UYAN.conf.tmpuh
                        }
                    }
                    catch(e) {}if(t=='on') {
                        e.style.background='none repeat scroll 0 0 #f8f8f8'
                    }
                    else if(t=='out') {
                        e.style.background='none repeat scroll 0 0 #fcfcfc'
                    }
                }
                ,
                changeUtname:function() {
                    var a=d.getElementById('uyan_utname_txt'), ue=d.getElementById('uyan_utname_edit');
                    if(a.style.display=='') {
                        a.style.display='none';
                        ue.style.display=''
                    }
                    else {
                        a.style.display='';
                        ue.style.display='none'
                    }
                }
                ,
                setUtname:function() {
                    var u=d.getElementById('uyan_utname');
                    UYAN.reqItf( {
                        mode: 'utname', utname: u.value
                    }
                    )
                }
                ,
                setCUtname:function(n) {
                    var u=d.getElementById('uyan_utname'), us=d.getElementById('uyan_utname_show');
                    u.value=n;
                    us.innerHTML=n;
                    UYAN.changeUtname()
                }
                ,
                changeFemail:function() {
                    var a=d.getElementById('uyan_femail_txt'), ue=d.getElementById('uyan_femail_edit');
                    if(a.style.display=='') {
                        a.style.display='none';
                        ue.style.display=''
                    }
                    else {
                        a.style.display='';
                        ue.style.display='none'
                    }
                }
                ,
                setFemail:function() {
                    var u=d.getElementById('uyan_femail');
                    UYAN.reqItf( {
                        mode: 'femail', femail: u.value
                    }
                    )
                }
                ,
                setCFemail:function(n) {
                    var u=d.getElementById('uyan_femail'), us=d.getElementById('uyan_femail_show');
                    u.value=n;
                    us.innerHTML=n;
                    UYAN.changeFemail()
                }
                ,
                noUface:function(e,
                u) {
                    e.onerror=function() {};
                    if(u!=null&&u!='') {
                        e.src=u
                    }
                }
                ,
                loadUface:function(e,
                u,
                d) {
                    if(u!=null&&d!=null&&u!=''&&d!='') {
                        setTimeout(function() {
                            e.src=u
                        }
                        ,
                        1000)
                    }
                    e.onload=function() {};
                    e.onerror=function() {
                        UYAN.noUface(e, d)
                    }
                }
                ,
                cSmile:function(c) {
                    var a, cnt=c;
                    for(var i=1;
                    i<=40;
                    i++) {
                        a=new RegExp("([\\(\\[]"+UYAN.smile.df[(i-1)]+"[\\]\\)])", "g");
                        cnt=cnt.replace(a, '<img src="'+UYAN.imgHost+'smile/df/'+i+'.png"/>');
                        a=new RegExp("([\\(\\[]al"+UYAN.smile.al[(i-1)]+"[\\]\\)])", "g");
                        cnt=cnt.replace(a, '<img src="'+UYAN.imgHost+'smile/al/'+i+'.gif"/>')
                    }
                    return cnt
                }
                ,
                addSmile:function(e,
                t,
                a) {
                    var c=d.getElementById('uyan_comment'+(a!=null?'_'+a: '')), cc=d.getElementById('uyan_cmt_cnt'+(a!=null?'_'+a: '')), ss=d.getElementById('uyan_ssmile'+(a!=null?'_'+a: ''));
                    c.style.color='#272727';
                    c.focus();
                    c.value=(c.value!=UYAN.lang.iptCmt?c.value: '')+'['+(t=='al'?'al': '')+e.title+']';
                    cc.innerHTML=c.value;
                    ss.style.display='none'
                }
                ,
                cUrlhash:function(s) {
                    try {
                        if(UYAN.conf.tmpuh==null) {
                            UYAN.conf.tmpuh=UYAN.conf.urlhash
                        }
                    }
                    catch(e) {}UYAN.conf.urlhash=s
                }
                ,
                ctlWhole:function(t) {
                    var b=document.getElementById('uyan_whole'), g=null;
                    g=setInterval(function() {
                        if(t=='h') {
                            var a=p(b.style.right.replace('px', ''));
                            if(a<=-315) {
                                b.style.right='-315px';
                                clearInterval(g)
                            }
                            else {
                                b.style.right=(a-30)+'px'
                            }
                        }
                        else if(t=='s') {
                            var a=p(b.style.right.replace('px', ''));
                            if(a>=0) {
                                b.style.right='0px';
                                clearInterval(g)
                            }
                            else {
                                b.style.right=(a+30)+'px'
                            }
                        }
                    }
                    ,
                    1);
                    setTimeout(function() {
                        clearInterval(g)
                    }
                    ,
                    3000)
                }
                ,
                sideH:function() {
                    document.getElementById('uyan_cmt_list').style.height=(dx.clientHeight-(iie==6||iie==7?205: 190))+'px';
                    if(iie==6) {
                        document.getElementById('uyan_whole').style.position='absolute';
                        document.getElementById('uyan_whole').style.clear='both'
                    }
                    else {
                        document.getElementById('uyan_whole').style.top='20px'
                    }
                }
                ,
                cCount:function(k,
                t) {
                    var a=d.getElementsByTagName('a');
                    for(var i=0;
                    i<a.length;
                    i++) {
                        if(a[i].getAttribute('uyan_identify')=='true'||a[i].id=='uyan_count_unit') {
                            if(a[i].href==k) {
                                a[i].innerHTML=t
                            }
                        }
                    }
                }
                ,
                cVup:function(k,
                t) {
                    var a=d.getElementsByTagName('a');
                    for(var i=0;
                    i<a.length;
                    i++) {
                        if(a[i].id=='uyan_vup_unit') {
                            if(a[i].href==k) {
                                a[i].innerHTML=t
                            }
                        }
                    }
                }
                ,
                cACL:function(a,
                t) {
                    var b=d.getElementsByTagName('div');
                    for(var i=0;
                    i<b.length;
                    i++) {
                        if(t=='hc'&&(b[i].id=='uyan_list_hotness_frame'||b[i].id=='uyan_hotcmt_unit')) {
                            b[i].innerHTML=a
                        }
                        if(t=='nc'&&(b[i].id=='uyan_list_time_frame'||b[i].id=='uyan_newcmt_unit')) {
                            b[i].innerHTML=a
                        }
                        if(t=='ha'&&(b[i].id=='uyan_list_article_hotness_frame'||b[i].id=='uyan_hotate_unit')) {
                            b[i].innerHTML=a
                        }
                        if(t=='na'&&(b[i].id=='uyan_list_article_time_frame'||b[i].id=='uyan_newate_unit')) {
                            b[i].innerHTML=a
                        }
                    }
                }
                ,
                changeAll:function(r) {
                    var a=d.getElementsByTagName('input'), rs='';
                    for(var i=0;
                    i<a.length;
                    i++) {
                        if(r!=null) {
                            if(a[i].checked==true) {
                                rs+=a[i].value+','
                            }
                        }
                        else {
                            if(UYAN.tmpC==true) {
                                if(a[i].id=='uyan_change'&&a[i].type=='checkbox') {
                                    a[i].checked=false
                                }
                            }
                            else {
                                if(a[i].id=='uyan_change'&&a[i].type=='checkbox') {
                                    a[i].checked=true
                                }
                            }
                        }
                    }
                    if(r!=null) {
                        return rs
                    }
                    else {
                        if(UYAN.tmpC==true) {
                            UYAN.tmpC=false
                        }
                        else {
                            UYAN.tmpC=true
                        }
                    }
                }
                ,
                getItem:function(a,
                b,
                c,
                d) {
                    var o=a.getElementsByTagName(b);
                    var e=[];
                    for(var i=0, k=o.length;
                    i<k;
                    i+=1) {
                        if(o[i].className===c&&(d==null||d=='class')) {
                            e.push(o[i])
                        }
                        else if(o[i].id===c&&d=='id') {
                            e.push(o[i])
                        }
                    }
                    return e
                }
                ,
                scrollBox: {
                    sid: [], tag: [], itn: [], time: [], height: [], oa: [], ob: [], ap: [], sliding: function(a) {
                        clearInterval(UYAN.scrollBox.ob[a]);
                        var o=d.getElementById(UYAN.scrollBox.sid[a]), item=UYAN.getItem(o, UYAN.scrollBox.tag[a], UYAN.scrollBox.itn[a]), len=item.length, cl=item[len-1].cloneNode(true);
                        o.removeChild(item[len-1]);
                        if(iie) {
                            cl.style.filter='alpha(opacity=0)'
                        }
                        else {
                            cl.style.opacity=0
                        }
                        cl.style.height='0px';
                        o.insertBefore(cl,
                        o.firstChild);
                        var i=0,
                        at=15,
                        step=(UYAN.scrollBox.height[a]/at);
                        UYAN.scrollBox.oa[a]=setInterval(function() {
                            UYAN.scrollBox.ap[a]=false;
                            if(i==at) {
                                clearInterval(UYAN.scrollBox.oa[a]);
                                UYAN.scrollBox.ap[a]=true;
                                i=0;
                                cl.style.height=UYAN.scrollBox.height[a]+'px';
                                UYAN.scrollBox.alpha(cl);
                                UYAN.scrollBox.start(a)
                            }
                            else {
                                var n=Math.round(step*i++);
                                cl.style.height=n+'px'
                            }
                        }
                        ,
                        at)
                    }
                    ,
                    stop:function(a) {
                        clearInterval(UYAN.scrollBox.ob[a]);
                        clearInterval(UYAN.scrollBox.oa[a])
                    }
                    ,
                    pause:function(a) {
                        if(UYAN.scrollBox.ap[a]) {
                            UYAN.scrollBox.stop(a)
                        }
                    }
                    ,
                    restart:function(a) {
                        if(UYAN.scrollBox.ap[a]) {
                            UYAN.scrollBox.stop(a);
                            UYAN.scrollBox.start(a)
                        }
                    }
                    ,
                    alpha:function(o) {
                        var a=0, handle=setInterval(function() {
                            a+=2;
                            if(a>=100) {
                                clearInterval(handle);
                                o.style.opacity=1;
                                if(iie) {
                                    o.style.filter='alpha(opacity=100)'
                                }
                                else {
                                    o.style.opacity=1
                                }
                            }
                            else {
                                if(iie) {
                                    o.style.filter='alpha(opacity='+a+')'
                                }
                                else {
                                    o.style.opacity=a/100
                                }
                            }
                        }
                        ,
                        20)
                    }
                    ,
                    start:function(a,
                    b,
                    c,
                    d,
                    e,
                    f) {
                        if(b!=null)UYAN.scrollBox.sid[a]=b;
                        if(c!=null)UYAN.scrollBox.itn[a]=c;
                        if(d!=null)UYAN.scrollBox.tag[a]=d;
                        if(e!=null)UYAN.scrollBox.time[a]=e;
                        if(f!=null)UYAN.scrollBox.height[a]=f;
                        UYAN.scrollBox.ob[a]=setInterval(function() {
                            UYAN.scrollBox.sliding(a)
                        }
                        ,
                        UYAN.scrollBox.time[a]*1000)
                    }
                }
                ,
                slowSH:function(a,
                e,
                t) {
                    var h=[], oa=[], i=[], at=[], step=[];
                    h[a]=p(e.style.height.split('px'));
                    i[a]=t=='h'?h[a]: 0;
                    at[a]=15;
                    step[a]=(h[a]/at[a]);
                    if(t=='s') {
                        if(iie) {
                            e.style.filter='alpha(opacity=0)'
                        }
                        else {
                            e.style.opacity=0
                        }
                        e.style.height='0px'
                    }
                    oa[a]=setInterval(function() {
                        if(i[a]==at[a]&&t=='s') {
                            clearInterval(oa[a]);
                            i[a]=0;
                            e.style.height=h[a]+'px';
                            UYAN.scrollBox.alpha(e)
                        }
                        else if(i[a]==0&&t=='h') {
                            clearInterval(oa[a]);
                            e.style.height=h[a]+'px';
                            UYAN.scrollBox.alpha(e);
                            e.style.display='none'
                        }
                        else {
                            var n=t=='h'?(i[a]--): Math.round(step[a]*i[a]++);
                            e.style.height=n+'px'
                        }
                    }
                    ,
                    at[a]);
                    if(t=='s') {
                        e.style.display=''
                    }
                }
                ,
                changeML:function(e,
                t,
                a) {
                    var b=a!=null?'_'+a: '';
                    if(t=='s') {
                        UYAN.slowSH('uyan_ml_kaixin001'+b, d.getElementById('uyan_ml_kaixin001'+b), 's');
                        UYAN.slowSH('uyan_ml_t163'+b, d.getElementById('uyan_ml_t163'+b), 's');
                        e.onclick=function() {
                            UYAN.changeML(e, 'h', a)
                        }
                        ;
                        e.style.background='url("'+UYAN.imgHost+'sorttype2.png") no-repeat scroll right 11px transparent'
                    }
                    else if(t=='h') {
                        UYAN.slowSH('uyan_ml_kaixin001'+b, d.getElementById('uyan_ml_kaixin001'+b), 'h');
                        UYAN.slowSH('uyan_ml_t163'+b, d.getElementById('uyan_ml_t163'+b), 'h');
                        e.onclick=function() {
                            UYAN.changeML(e, 's', a)
                        }
                        ;
                        e.style.background='url("'+UYAN.imgHost+'sorttype.png") no-repeat scroll right 11px transparent'
                    }
                }
                ,
                changeLB:function(e,
                t,
                a) {
                    var b=a!=null?'_'+a: '';
                    if(t=='s') {
                        UYAN.slowSH('uyan_lb_email'+b, d.getElementById('uyan_lb_email'+b), 's');
                        UYAN.slowSH('uyan_lb_ulink'+b, d.getElementById('uyan_lb_ulink'+b), 's');
                        e.onclick=function() {
                            UYAN.changeLB(e, 'h', a)
                        }
                        ;
                        e.style.background='url("'+UYAN.imgHost+'sorttype2.png") no-repeat'
                    }
                    else if(t=='h') {
                        UYAN.slowSH('uyan_lb_email'+b, d.getElementById('uyan_lb_email'+b), 'h');
                        UYAN.slowSH('uyan_lb_ulink'+b, d.getElementById('uyan_lb_ulink'+b), 'h');
                        e.onclick=function() {
                            UYAN.changeLB(e, 's', a)
                        }
                        ;
                        e.style.background='url("'+UYAN.imgHost+'sorttype.png") no-repeat'
                    }
                }
                ,
                mouseOO:function(e,
                t) {
                    if(e.id.indexOf('uyan_smile')!=-1) {
                        if(t=='on') {
                            e.style.background='url("'+UYAN.imgHost+'emotion2.png") no-repeat 0 -16px'
                        }
                        else {
                            e.style.background='url("'+UYAN.imgHost+'emotion2.png") no-repeat'
                        }
                    }
                    else {
                        e.style.background=e.style.background.replace(/\/\w+\.png/g, '/'+t)
                    }
                }
                ,
                changeBn:function(e,
                a) {
                    if(UYAN.trim(e.value)!=''&&UYAN.trim(e.value)==a) {
                        e.style.color='#000000';
                        e.value=''
                    }
                    else if(UYAN.trim(e.value)=='') {
                        if(UYAN.conf.colortype=='white') {
                            e.style.color='#f6f6f6'
                        }
                        else {
                            e.style.color='#999999'
                        }
                        e.value=a
                    }
                }
                ,
                changeS:function(e,
                t,
                a) {
                    var b=d.getElementById('uyan_star_'+a), er=d.getElementById('uyan_exp_rpy_'+a);
                    if(t=='on') {
                        b.style.display='';
                        try {
                            if(UYAN.conf.style=='color') {
                                er.style.display='';
                                er.previousSibling.style.display='';
                                er.nextSibling.style.display='';
                                er.nextSibling.nextSibling.style.display='';
                                er.nextSibling.nextSibling.nextSibling.style.display='';
                                er.nextSibling.nextSibling.nextSibling.nextSibling.style.display=''
                            }
                        }
                        catch(e) {}
                    }
                    else {
                        b.style.display='none';
                        try {
                            if(UYAN.conf.style=='color'&&iie!=6&&iie!=7) {
                                er.style.display='none';
                                er.previousSibling.style.display='none';
                                er.nextSibling.style.display='none';
                                er.nextSibling.nextSibling.style.display='none';
                                er.nextSibling.nextSibling.nextSibling.style.display='none';
                                er.nextSibling.nextSibling.nextSibling.nextSibling.style.display='none'
                            }
                        }
                        catch(e) {}
                    }
                }
                ,
                showMsg:function(e,
                a,
                b,
                c) {
                    if(UYAN.msgS==true) {
                        UYAN.msgS=false;
                        var d=e.type=='textarea'?e.value: e.innerHTML, ec=e.style.color, es=e.style.fontSize;
                        if(e.type=='textarea') {
                            e.value=a
                        }
                        else {
                            e.innerHTML=a
                        }
                        e.style.color=b;
                        e.style.fontSize=c;
                        setTimeout(function() {
                            e.style.color=ec;
                            e.style.fontSize=es;
                            if(e.type=='textarea') {
                                e.value=d
                            }
                            else {
                                e.innerHTML=d
                            }
                            UYAN.msgS=true
                        }
                        ,
                        1000)
                    }
                }
                ,
                getOmStr:function(a) {
                    var b='', len=a.length;
                    if(UYAN.conf.issso) {
                        b+='<span style="height: 16px; float: left; display: block; line-height: 16px; overflow: hidden; width: 60px; margin: 15px 22px 0 25px; display: inline;"><a title="'+UYAN.lang.use+UYAN.conf.dname+UYAN.lang.account+'" onclick="UYAN.loginSso();" style="cursor: pointer; font-size: 14px; color: #666; text-decoration: none;"><img title="'+UYAN.lang.use+UYAN.conf.dname+UYAN.lang.account+'" border="0" style="display: block; float: left; width: 16px; height: 16px;" src="'+UYAN.conf.dsicon+'">&nbsp;&nbsp;'+UYAN.conf.dname+'</a></span>'
                    }
                    for(var i=0;
                    i<len;
                    i++) {
                        switch(a.charAt(i)) {
                            case'0': b+='';
                            break;
                            case'1': b+='<span style="height: 16px; float: left; display: block; line-height: 16px; overflow: hidden; width: 60px; margin: 15px 22px 0 25px; display: inline;"><a title="'+UYAN.lang.use+UYAN.lang.tsina+UYAN.lang.account+'" onclick="UYAN.loginTSina();" style="cursor: pointer; font-size: 14px; color: #666; text-decoration: none;"><img title="'+UYAN.lang.use+UYAN.lang.tsina+UYAN.lang.account+'" border="0" style="display: block; float: left; width: 16px; height: 16px;" src="'+UYAN.imgHost+'tsina.png">&nbsp;&nbsp;'+UYAN.lang.tsina+'</a></span>';
                            break;
                            case'2': b+='<span style="height: 16px; float: left; display: block; line-height: 16px; overflow: hidden; width: 60px; margin: 15px 22px 0 25px; display: inline;"><a title="'+UYAN.lang.use+UYAN.lang.tqq+UYAN.lang.account+'" onclick="UYAN.loginTQq();" style="cursor: pointer; font-size: 14px; color: #666; text-decoration: none;"><img title="'+UYAN.lang.use+UYAN.lang.tqq+UYAN.lang.account+'" border="0" style="display: block; float: left; width: 16px; height: 16px;" src="'+UYAN.imgHost+'tqq.png">&nbsp;&nbsp;'+UYAN.lang.tqq+'</a></span>';
                            break;
                            case'3': b+='<span style="height: 16px; float: left; display: block; line-height: 16px; overflow: hidden; width: 60px; margin: 15px 22px 0 25px; display: inline;"><a title="'+UYAN.lang.use+UYAN.lang.renren+UYAN.lang.account+'" onclick="UYAN.loginRenren();" style="cursor: pointer; font-size: 14px; color: #666; text-decoration: none;"><img title="'+UYAN.lang.use+UYAN.lang.renren+UYAN.lang.account+'" border="0" style="display: block; float: left; width: 16px; height: 16px;" src="'+UYAN.imgHost+'renren.png">&nbsp;&nbsp;'+UYAN.lang.renren+'</a></span>';
                            break;
                            case'4': b+='<span style="height: 16px; float: left; display: block; line-height: 16px; overflow: hidden; width: 60px; margin: 15px 22px 0 25px; display: inline;"><a title="'+UYAN.lang.use+UYAN.lang.qq+UYAN.lang.account+'" onclick="UYAN.loginQq();" style="cursor: pointer; font-size: 14px; color: #666; text-decoration: none;"><img title="'+UYAN.lang.use+UYAN.lang.qq+UYAN.lang.account+'" border="0" style="display: block; float: left; width: 16px; height: 16px;" src="'+UYAN.imgHost+'qq.png">&nbsp;&nbsp;'+UYAN.lang.qq+'</a></span>';
                            break;
                            case'5': b+='<span style="height: 16px; float: left; display: block; line-height: 16px; overflow: hidden; width: 60px; margin: 15px 22px 0 25px; display: inline;"><a title="'+UYAN.lang.use+UYAN.lang.t163+UYAN.lang.account+'" onclick="UYAN.loginT163();" style="cursor: pointer; font-size: 14px; color: #666; text-decoration: none;"><img title="'+UYAN.lang.use+UYAN.lang.t163+UYAN.lang.account+'" border="0" style="display: block; float: left; width: 16px; height: 16px;" src="'+UYAN.imgHost+'t163.png">&nbsp;&nbsp;'+UYAN.lang.t163+'</a></span>';
                            break;
                            case'6': b+='<span style="height: 16px; float: left; display: block; line-height: 16px; overflow: hidden; width: 60px; margin: 15px 22px 0 25px; display: inline;"><a title="'+UYAN.lang.use+UYAN.lang.tsohu+UYAN.lang.account+'" onclick="UYAN.loginTSohu();" style="cursor: pointer; font-size: 14px; color: #666; text-decoration: none;"><img title="'+UYAN.lang.use+UYAN.lang.tsohu+UYAN.lang.account+'" border="0" style="display: block; float: left; width: 16px; height: 16px;" src="'+UYAN.imgHost+'tsohu.png">&nbsp;&nbsp;'+UYAN.lang.tsohu+'</a></span>';
                            break;
                            case'7': b+='<span style="height: 16px; float: left; display: block; line-height: 16px; overflow: hidden; width: 60px; margin: 15px 22px 0 25px; display: inline;"><a title="'+UYAN.lang.use+UYAN.lang.kaixin001+UYAN.lang.account+'" onclick="UYAN.loginKaixin001();" style="cursor: pointer; font-size: 14px; color: #666; text-decoration: none;"><img title="'+UYAN.lang.use+UYAN.lang.kaixin001+UYAN.lang.account+'" border="0" style="display: block; float: left; width: 16px; height: 16px;" src="'+UYAN.imgHost+'kaixin001.png">&nbsp;&nbsp;'+UYAN.lang.kaixin001+'</a></span>';
                            break;
                            case'8': b+='';
                            break;
                            case'9': b+='<span style="height: 16px; float: left; display: block; line-height: 16px; overflow: hidden; width: 60px; margin: 15px 22px 0 25px; display: inline;"><a title="'+UYAN.lang.use+UYAN.lang.douban+UYAN.lang.account+'" onclick="UYAN.loginDouban();" style="cursor: pointer; font-size: 14px; color: #666; text-decoration: none;"><img title="'+UYAN.lang.use+UYAN.lang.douban+UYAN.lang.account+'" border="0" style="display: block; float: left; width: 16px; height: 16px;" src="'+UYAN.imgHost+'douban.png">&nbsp;&nbsp;'+UYAN.lang.douban+'</a></span>';
                            break;
                            default: b+='';
                            break
                        }
                    }
                    b+='<div style=\"clear: both;\"></div>';
                    return b
                }
                ,
                getOtStr:function(a,
                t) {
                    var b='', len=a.length;
                    if(UYAN.conf.issso) {
                        switch(t) {
                            case'1': b+='<a onclick="UYAN.loginSso();" style="padding: 0; cursor: pointer; display: block; float: left; height: 24px; margin-bottom: 2px; margin-right: 5px; width: 57px; background: url(\''+UYAN.conf.dsbtn+'\') no-repeat scroll 0 0 transparent;"></a>';
                            break;
                            case'2': b+='<a onclick="UYAN.loginSso();" style="padding: 0; cursor: pointer; display: block; float: left; height: 24px; margin-bottom: 2px; margin-right: 3px; width: 25px; background: url(\''+UYAN.conf.dsbtn+'\') no-repeat scroll 0 0 transparent;"></a>';
                            break;
                            case'3': b+='<a onclick="UYAN.loginSso();" style="padding: 0; cursor: pointer; display: block; float: left; height: 23px; margin-bottom: 2px; margin-right: 3px; width: 59px; background: url(\''+UYAN.conf.dsbtn+'\') no-repeat scroll 0 0 transparent;"></a>';
                            break;
                            default: b+='';
                            break
                        }
                    }
                    for(var i=0;
                    i<len;
                    i++) {
                        switch(a.charAt(i)) {
                            case'0': switch(t) {
                                case'1': b+='<a onclick="UYAN.login();" style="padding: 0; cursor: pointer; display: block; float: left; height: 24px; margin-bottom: 2px; margin-right: 5px; width: 57px; background: url(\''+UYAN.imgHost+'aoybtn.png\') no-repeat scroll 0 0 transparent;"></a>';
                                break;
                                case'2': b+='<a onclick="UYAN.login();" style="padding: 0; cursor: pointer; display: block; float: left; height: 24px; margin-bottom: 2px; margin-right: 3px; width: 25px; background: url(\''+UYAN.imgHost+'aoysbtn.png\') no-repeat scroll 0 0 transparent;"></a>';
                                break;
                                case'3': b+='<a onclick="UYAN.login();" style="padding: 0; cursor: pointer; display: block; float: left; height: 23px; margin-bottom: 2px; margin-right: 3px; width: 59px; background: url(\''+UYAN.imgHost+'bbtn.png\') no-repeat scroll -549px 0 transparent;"></a>';
                                break;
                                default: b+='';
                                break
                            }
                            break;
                            case'1':switch(t) {
                                case'1': b+='<a onclick="UYAN.loginTSina();" style="padding: 0; cursor: pointer; display: block; float: left; height: 24px; margin-bottom: 2px; margin-right: 5px; width: 57px; background: url(\''+UYAN.imgHost+'tsinabtn.png\') no-repeat scroll 0 0 transparent;"></a>';
                                break;
                                case'2': b+='<a onclick="UYAN.loginTSina();" style="padding: 0; cursor: pointer; display: block; float: left; height: 24px; margin-bottom: 2px; margin-right: 3px; width: 25px; background: url(\''+UYAN.imgHost+'tsinasbtn.png\') no-repeat scroll 0 0 transparent;"></a>';
                                break;
                                case'3': b+='<a onclick="UYAN.loginTSina();" style="padding: 0; cursor: pointer; display: block; float: left; height: 23px; margin-bottom: 2px; margin-right: 3px; width: 59px; background: url(\''+UYAN.imgHost+'bbtn.png\') no-repeat scroll -61px 0 transparent;"></a>';
                                break;
                                default: b+='';
                                break
                            }
                            break;
                            case'2':switch(t) {
                                case'1': b+='<a onclick="UYAN.loginTQq();" style="padding: 0; cursor: pointer; display: block; float: left; height: 24px; margin-bottom: 2px; margin-right: 5px; width: 57px; background: url(\''+UYAN.imgHost+'tqqbtn.png\') no-repeat scroll 0 0 transparent;"></a>';
                                break;
                                case'2': b+='<a onclick="UYAN.loginTQq();" style="padding: 0; cursor: pointer; display: block; float: left; height: 24px; margin-bottom: 2px; margin-right: 3px; width: 25px; background: url(\''+UYAN.imgHost+'tqqsbtn.png\') no-repeat scroll 0 0 transparent;"></a>';
                                break;
                                case'3': b+='<a onclick="UYAN.loginTQq();" style="padding: 0; cursor: pointer; display: block; float: left; height: 23px; margin-bottom: 2px; margin-right: 3px; width: 59px; background: url(\''+UYAN.imgHost+'bbtn.png\') no-repeat scroll -122px 0 transparent;"></a>';
                                break;
                                default: b+='';
                                break
                            }
                            break;
                            case'3':switch(t) {
                                case'1': b+='<a onclick="UYAN.loginRenren();" style="padding: 0; cursor: pointer; display: block; float: left; height: 24px; margin-bottom: 2px; margin-right: 5px; width: 68px; background: url(\''+UYAN.imgHost+'renrenbtn.png\') no-repeat scroll 0 0 transparent;"></a>';
                                break;
                                case'2': b+='<a onclick="UYAN.loginRenren();" style="padding: 0; cursor: pointer; display: block; float: left; height: 24px; margin-bottom: 2px; margin-right: 3px; width: 29px; background: url(\''+UYAN.imgHost+'renrensbtn.png\') no-repeat scroll 0 0 transparent;"></a>';
                                break;
                                case'3': b+='<a onclick="UYAN.loginRenren();" style="padding: 0; cursor: pointer; display: block; float: left; height: 23px; margin-bottom: 2px; margin-right: 3px; width: 59px; background: url(\''+UYAN.imgHost+'bbtn.png\') no-repeat scroll -244px 0 transparent;"></a>';
                                break;
                                default: b+='';
                                break
                            }
                            break;
                            case'4':switch(t) {
                                case'1': b+='<a onclick="UYAN.loginQq();" style="padding: 0; cursor: pointer; display: block; float: left; height: 24px; margin-bottom: 2px; margin-right: 5px; width: 70px; background: url(\''+UYAN.imgHost+'qqbtn.png\') no-repeat scroll 0 0 transparent;"></a>';
                                break;
                                case'2': b+='<a onclick="UYAN.loginQq();" style="padding: 0; cursor: pointer; display: block; float: left; height: 24px; margin-bottom: 2px; margin-right: 3px; width: 25px; background: url(\''+UYAN.imgHost+'qqsbtn.png\') no-repeat scroll 0 0 transparent;"></a>';
                                break;
                                case'3': b+='<a onclick="UYAN.loginQq();" style="padding: 0; cursor: pointer; display: block; float: left; height: 23px; margin-bottom: 2px; margin-right: 3px; width: 59px; background: url(\''+UYAN.imgHost+'bbtn.png\') no-repeat scroll 0 0 transparent;"></a>';
                                break;
                                default: b+='';
                                break
                            }
                            break;
                            case'5':switch(t) {
                                case'1': b+='<a onclick="UYAN.loginT163();" style="padding: 0; cursor: pointer; display: block; float: left; height: 24px; margin-bottom: 2px; margin-right: 5px; width: 57px; background: url(\''+UYAN.imgHost+'t163btn.png\') no-repeat scroll 0 0 transparent;"></a>';
                                break;
                                case'2': b+='<a onclick="UYAN.loginT163();" style="padding: 0; cursor: pointer; display: block; float: left; height: 24px; margin-bottom: 2px; margin-right: 3px; width: 25px; background: url(\''+UYAN.imgHost+'t163sbtn.png\') no-repeat scroll 0 0 transparent;"></a>';
                                break;
                                case'3': b+='<a onclick="UYAN.loginT163();" style="padding: 0; cursor: pointer; display: block; float: left; height: 23px; margin-bottom: 2px; margin-right: 3px; width: 59px; background: url(\''+UYAN.imgHost+'bbtn.png\') no-repeat scroll -488px 0 transparent;"></a>';
                                break;
                                default: b+='';
                                break
                            }
                            break;
                            case'6':switch(t) {
                                case'1': b+='<a onclick="UYAN.loginTSohu();" style="padding: 0; cursor: pointer; display: block; float: left; height: 24px; margin-bottom: 2px; margin-right: 5px; width: 57px; background: url(\''+UYAN.imgHost+'tsohubtn.png\') no-repeat scroll 0 0 transparent;"></a>';
                                break;
                                case'2': b+='<a onclick="UYAN.loginTSohu();" style="padding: 0; cursor: pointer; display: block; float: left; height: 24px; margin-bottom: 2px; margin-right: 3px; width: 25px; background: url(\''+UYAN.imgHost+'tsohusbtn.png\') no-repeat scroll 0 0 transparent;"></a>';
                                break;
                                case'3': b+='<a onclick="UYAN.loginTSohu();" style="padding: 0; cursor: pointer; display: block; float: left; height: 23px; margin-bottom: 2px; margin-right: 3px; width: 59px; background: url(\''+UYAN.imgHost+'bbtn.png\') no-repeat scroll -427px 0 transparent;"></a>';
                                break;
                                default: b+='';
                                break
                            }
                            break;
                            case'7':switch(t) {
                                case'1': b+='<a onclick="UYAN.loginKaixin001();" style="padding: 0; cursor: pointer; display: block; float: left; height: 24px; margin-bottom: 2px; margin-right: 5px; width: 57px; background: url(\''+UYAN.imgHost+'kaixin001btn.png\') no-repeat scroll 0 0 transparent;"></a>';
                                break;
                                case'2': b+='<a onclick="UYAN.loginKaixin001();" style="padding: 0; cursor: pointer; display: block; float: left; height: 24px; margin-bottom: 2px; margin-right: 3px; width: 25px; background: url(\''+UYAN.imgHost+'kaixin001sbtn.png\') no-repeat scroll 0 0 transparent;"></a>';
                                break;
                                case'3': b+='<a onclick="UYAN.loginKaixin001();" style="padding: 0; cursor: pointer; display: block; float: left; height: 23px; margin-bottom: 2px; margin-right: 3px; width: 59px; background: url(\''+UYAN.imgHost+'bbtn.png\') no-repeat scroll -305px 0 transparent;"></a>';
                                break;
                                default: b+='';
                                break
                            }
                            break;
                            case'8':switch(t) {
                                case'1': break;
                                case'2': break;
                                case'3': break;
                                default: b+='';
                                break
                            }
                            b+='';
                            break;
                            default:b+='';
                            break
                        }
                    }
                    b+='<div style=\"clear: both;\"></div>';
                    return b
                }
                ,
                getCmt:function(s) {
                    var a=eval('('+s+')'), str='';
                    for(var i=0;
                    i<a.length;
                    i++) {
                        var b=a[i];
                        if(b.isrpy==true) {
                            var c=new Array();
                            c[0]=b;
                            str+=UYAN.getRpy(c)
                        }
                        else if(b.more=='cmt') {
                            str+=UYAN.getMC(b)
                        }
                        else if(b.more=='rpy') {
                            str+=UYAN.getMR(b)
                        }
                        else {
                            str+='	<div id="uyan_cmt_'+b.cid+'" onmouseover="UYAN.changeS(this, \'on\', \''+b.cid+'\');" onmouseout="UYAN.changeS(this, \'out\', \''+b.cid+'\');" style="'+((b.style=='facebook')?('padding-left: 10px; '): (''))+((b.style!='disqus')?('border-top: 1px solid #D7D7D7; '): (''))+'padding: 15px 0;">';
                            str+='		<div style="position: relative; float: left; border-radius: 6px 6px 6px 6px; width: '+((b.style=='side')?('38px'): ('50px'))+'; height: '+((b.style=='side')?('38px'): ('50px'))+'; margin-right: 10px;">';
                            str+='			<a href="'+b.ufromurl+'" style="cursor: pointer; text-decoration: none; white-space: inherit;" target="_blank">';
                            str+='				<img style="border: 0 none; box-shadow: 0 1px 5px rgba(0, 0, 0, 0.22); border-radius: 4px; width: '+((b.style=='side')?('38px'): ('50px'))+'; height: '+((b.style=='side')?('38px'): ('50px'))+';" onload="UYAN.loadUface(this, \''+((b.uface=='')?(b.duface): (b.uface))+'\', \''+b.duface+'\');" src="'+b.duface+'" onerror="UYAN.noUface(this, \''+b.duface+'\');">';
                            str+='			</a>';
                            str+='			<span style="bottom: -4px; position: absolute; right: -5px;">';
                            str+='				<a title="'+b.ufromname+'" style="cursor: pointer; text-decoration: none; background: url(\''+b.ufromicon+'\') no-repeat scroll 0 0 transparent; background-position: 0 0; opacity: 1; display: block; float: left; height: 16px !important; line-height: 100px; opacity: 0.8; overflow: hidden; width: 16px !important;" href="'+b.ufromurl+'" target="_blank"></a>';
                            str+='			</span>';
                            str+='		</div>';
                            str+='		<div style="padding-left: '+((b.style=='side')?('48px'): ('60px'))+';">';
                            str+='			<div style="color: #303030; font-size: 13px; line-height: 18px;'+((b.style=='disqus')?(' height: 26px; background: url(\''+UYAN.imgHost+'tbbg.png\') repeat-x scroll 0 0 transparent; border: 1px solid #CCCCCC; border-radius: 3px 3px 3px 3px; margin: 0 0 1em; max-height: 36px; overflow: hidden; padding: 6px 5px 0; position: relative; text-overflow: ellipsis; white-space: nowrap; -moz-border-radius: 3px; -webkit-border-radius: 3px;'): (' height: 20px;'))+'">';
                            str+='				<a id="uyan_cmt_uname_'+b.cid+'" class="uyan_cmt_uname" href="'+b.ufromurl+'" target="_blank" style="'+((b.style=='disqus'||b.style=='color')?('font-weight: bold; '): (''))+'color: #2B8CE6; cursor: pointer; float: left; text-decoration: none; padding-right: 6px;">'+b.uname+'</a>';
                            str+='				'+((b.utname!='')?('<span class="uyan_cmt_utname" style="background: url(\''+UYAN.imgHost+'medalIcon.png\') no-repeat 0 2px; display: block; float: left; padding-left: 14px; padding-right: 6px;">'+b.utname+'</span>'): (''))+'';
                            str+='				<span class="uyan_cmt_ufromname" style="color: #aaaaaa; float: left;">(<a style="color: #aaaaaa; text-decoration: none;" href="'+b.ufromurl+'" target="_blank">'+b.ufromname+'</a>)</span>';
                            if(b.isstar==1&&b.admin!='master') {
                                str+='				<div id="uyan_star_'+b.cid+'" style="float: right; display: none;">';
                                str+='					<a style="background: url(\''+UYAN.imgHost+'star.png\') no-repeat scroll 0 -'+(b.vstar*19)+'px transparent; cursor: pointer; float: left; height: 16px; padding-right: 5px; width: 100px;"></a>';
                                str+='					<div style="clear: both;"></div>';
                                str+='				</div>'
                            }
                            else {
                                str+='				<div id="uyan_star_'+b.cid+'" style="float: right; display: none;"></div>'
                            }
                            str+='			</div>';
                            str+='			<div class="uyan_cmt_txt" style="color: #303030; font-size: 13px; line-height: 18px; word-wrap: break-word; text-align: left;">'+b.comment+'</div>';
                            str+='			<div class="uyan_cmt_exp" style="padding: 5px 5px 0 0; line-height: 14px;">';
                            if(b.admin!='master'&&b.style!='color') {
                                str+='				<a id="uyan_exp_rpy_'+b.cid+'" onclick="UYAN.addRpy('+b.cid+');" onmouseover="UYAN.mouseOO(this.nextSibling, \'rpy.png\');" onmouseout="UYAN.mouseOO(this.nextSibling, \'rpy2.png\');" style="color: #999999; cursor: pointer; display: block; float: right; font-size: 11px; padding: 0 4px 0 0;">'+((b.style=='side')?(UYAN.lang.cmtS): (UYAN.lang.rpyS))+'</a>';
                                str+='<a onclick="UYAN.addRpy('+b.cid+');" onmouseover="UYAN.mouseOO(this, \'rpy.png\');" onmouseout="UYAN.mouseOO(this, \'rpy2.png\');" style="background: url(\''+UYAN.imgHost+'rpy2.png\') no-repeat scroll 0 0 transparent; cursor: pointer; display: '+((b.style=='side')?('none'): ('block'))+'; float: right; height: 13px; margin-right: 4px; margin-top: 0px; width: 14px;"></a>';
                                str+='				<a onclick="UYAN.cmtUD(\'du\', '+b.cid+');" style="color: #999999; cursor: pointer; display: '+((b.isud)?('block'): ('none'))+'; float: right; font-size: 11px; padding: 0 10px 0 0;">'+b.downname+'<span id="uyan_cd_'+b.cid+'" style="padding-left: 3px;">'+((b.votedown>0)?(b.votedown): (''))+'</span></a>';
                                str+='				<a id="uyan_cdw_'+b.cid+'" onclick="UYAN.cmtUD(\'du\', '+b.cid+');" style="background: url(\''+UYAN.imgHost+'downDig2.png\') no-repeat scroll 0 0 transparent; cursor: pointer; display: '+((b.isud)?('block'): ('none'))+'; float: right; height: 13px; margin-right: 4px; margin-top: 3px; width: 13px;"></a>';
                                str+='				<a onclick="UYAN.cmtUD(\'uu\', '+b.cid+');" style="color: #999999; cursor: pointer; display: '+((b.style=='side')?('none'): ('block'))+'; float: right; font-size: 11px; padding: 0 10px 0 0;">'+b.upname+'<span id="uyan_cu_'+b.cid+'" style="padding-left: 3px;">'+((b.voteup>0)?(b.voteup): (''))+'</span></a>';
                                str+='				<a id="uyan_cuw_'+b.cid+'" onclick="UYAN.cmtUD(\'uu\', '+b.cid+');" style="background: url(\''+UYAN.imgHost+'upDig2.png\') no-repeat scroll 0 0 transparent; cursor: pointer; display: '+((b.style=='side')?('none'): ('block'))+'; float: right; height: 13px; margin-right: 4px; margin-top: 0px; width: 13px;"></a>';
                                str+='				'+((b.style=='side')?('<a href="'+b.ufrommmurl+'" target="_blank;" style="color: #999999; cursor: pointer; display: block; float: right; font-size: 11px; padding: 0 14px 0 0; text-decoration: none;">'+UYAN.lang.traS+'</a>'): (''))+''
                            }
                            str+='				<div style="color: #999999; float: left; font-size: 11px; padding: 0 10px 0 0;">'+b.timediff+'</div>';
                            if(b.style=='color') {
                                str+='				<a id="uyan_cuw_'+b.cid+'" onclick="UYAN.cmtUD(\'uu\', '+b.cid+');" style="background: url(\''+UYAN.imgHost+'upDig2.png\') no-repeat scroll 0 0 transparent; cursor: pointer; display: '+((b.style=='side')?('none'): ('block'))+'; float: left; height: 13px; margin-right: 4px; margin-top: 0px; width: 13px;"></a>';
                                str+='				<a onclick="UYAN.cmtUD(\'uu\', '+b.cid+');" style="color: #999999; cursor: pointer; display: '+((b.style=='side')?('none'): ('block'))+'; float: left; font-size: 11px; padding: 0 10px 0 0;">'+b.upname+'<span id="uyan_cu_'+b.cid+'" style="padding-left: 3px;">'+((b.voteup>0)?(b.voteup): (''))+'</span></a>';
                                str+='				<a id="uyan_cdw_'+b.cid+'" onclick="UYAN.cmtUD(\'du\', '+b.cid+');" style="background: url(\''+UYAN.imgHost+'downDig2.png\') no-repeat scroll 0 0 transparent; cursor: pointer; display: '+((b.isud)?('block'): ('none'))+'; float: left; height: 13px; margin-right: 4px; margin-top: 3px; width: 13px;"></a>';
                                str+='				<a onclick="UYAN.cmtUD(\'du\', '+b.cid+');" style="color: #999999; cursor: pointer; display: '+((b.isud)?('block'): ('none'))+'; float: left; font-size: 11px; padding: 0 10px 0 0;">'+b.downname+'<span id="uyan_cd_'+b.cid+'" style="padding-left: 3px;">'+((b.votedown>0)?(b.votedown): (''))+'</span></a>';
                                if(b.admin!='master') {
                                    str+='				<a onclick="UYAN.addRpy('+b.cid+');" onmouseover="UYAN.mouseOO(this, \'rpy.png\');" onmouseout="UYAN.mouseOO(this, \'rpy2.png\');" style="background: url(\''+UYAN.imgHost+'rpy2.png\') no-repeat scroll 0 0 transparent; cursor: pointer; display: '+((b.style=='side')?('none'): ('none'))+'; float: left; height: 13px; margin-right: 4px; margin-top: 0px; width: 14px;"></a>';
                                    str+='<a id="uyan_exp_rpy_'+b.cid+'" onclick="UYAN.addRpy('+b.cid+');" onmouseover="UYAN.mouseOO(this.previousSibling, \'rpy.png\');" onmouseout="UYAN.mouseOO(this.previousSibling, \'rpy2.png\');" style="color: #999999; cursor: pointer; display: none; float: left; font-size: 11px; margin-right: 10px; padding: 0 4px 0 0;">'+((b.style=='side')?(UYAN.lang.cmtS): (UYAN.lang.rpyS))+'</a>'
                                }
                            }
                            str+='				<div style="clear: both;"></div>';
                            str+='			</div>';
                            str+='		</div>';
                            str+='		<div style="clear: both;"></div>';
                            str+='	</div>'
                        }
                    }
                    return str
                }
                ,
                getRpy:function(s) {
                    if(typeof(s)=='object') {
                        var a=s, str=''
                    }
                    else {
                        var a=eval('('+s+')'), str=''
                    }
                    for(var i=0;
                    i<a.length;
                    i++) {
                        var b=a[i];
                        if(b.more=='rpy') {
                            str+=UYAN.getMR(b)
                        }
                        else {
                            str+='	<div id="uyan_cmt_'+b.cid+'" onmouseover="UYAN.changeS(this, \'on\', \''+b.cid+'\');" onmouseout="UYAN.changeS(this, \'out\', \''+b.cid+'\');" style="'+((b.style=='facebook')?('padding-left: 10px; '): (''))+((b.style!='disqus')?('border-top: 1px solid #D7D7D7; '): (''))+'padding: 15px 0; margin-left: 60px;">';
                            str+='		<div style="position: relative; float: left; border-radius: 6px 6px 6px 6px; width: 38px; height: 38px; margin-right: 10px;">';
                            str+='			<a href="'+b.ufromurl+'" style="cursor: pointer; text-decoration: none; white-space: inherit;" target="_blank">';
                            str+='				<img style="border: 0 none; box-shadow: 0 1px 5px rgba(0, 0, 0, 0.22); border-radius: 4px; width: 38px; height: 38px;" onload="UYAN.loadUface(this, \''+((b.uface=='')?(b.duface): (b.uface))+'\', \''+b.duface+'\');" src="'+b.duface+'" onerror="UYAN.noUface(this, \''+b.duface+'\');">';
                            str+='			</a>';
                            str+='			<span style="bottom: -4px; position: absolute; right: -5px;">';
                            str+='				<a title="'+b.ufromname+'" style="cursor: pointer; text-decoration: none; background: url(\''+b.ufromicon+'\') no-repeat scroll 0 0 transparent; background-position: 0 0; opacity: 1; display: block; float: left; height: 16px !important; line-height: 100px; opacity: 0.8; overflow: hidden; width: 16px !important;" href="'+b.ufromurl+'" target="_blank"></a>';
                            str+='			</span>';
                            str+='		</div>';
                            str+='		<div style="padding-left: 48px;">';
                            str+='			<div style="color: #303030; font-size: 13px; line-height: 18px;'+((b.style=='disqus')?(' height: 26px; background: url(\''+UYAN.imgHost+'tbbg.png\') repeat-x scroll 0 0 transparent; border: 1px solid #CCCCCC; border-radius: 3px 3px 3px 3px; margin: 0 0 1em; max-height: 36px; overflow: hidden; padding: 6px 5px 0; position: relative; text-overflow: ellipsis; white-space: nowrap; -moz-border-radius: 3px; -webkit-border-radius: 3px;'): (' height: 20px;'))+'">';
                            str+='				<a id="uyan_cmt_uname_'+b.cid+'" class="uyan_cmt_uname" href="'+b.ufromurl+'" target="_blank" style="'+((b.style=='disqus'||b.style=='color')?('font-weight: bold; '): (''))+'color: #2B8CE6; cursor: pointer; float: left; text-decoration: none; padding-right: 6px;">'+b.uname+'</a>';
                            str+='				'+((b.utname!='')?('<span class="uyan_cmt_utname" style="background: url(\''+UYAN.imgHost+'medalIcon.png\') no-repeat 0 2px; display: block; float: left; padding-left: 14px; padding-right: 6px;">'+b.utname+'</span>'): (''))+'';
                            str+='				<span class="uyan_cmt_ufromname" style="color: #aaaaaa; float: left;">(<a style="color: #aaaaaa; text-decoration: none;" href="'+b.ufromurl+'" target="_blank">'+b.ufromname+'</a>)</span>';
                            if(b.isstar==1&&b.admin!='master') {
                                str+='				<div id="uyan_star_'+b.cid+'" style="float: right; display: none;">';
                                str+='					<a style="background: url(\''+UYAN.imgHost+'star.png\') no-repeat scroll 0 -'+(b.vstar*19)+'px transparent; cursor: pointer; float: left; height: 16px; padding-right: 5px; width: 100px;"></a>';
                                str+='					<div style="clear: both;"></div>';
                                str+='				</div>'
                            }
                            else {
                                str+='				<div id="uyan_star_'+b.cid+'" style="float: right; display: none;"></div>'
                            }
                            str+='			</div>';
                            str+='			<div class="uyan_cmt_txt" style="color: #303030; font-size: 13px; line-height: 18px; word-wrap: break-word; text-align: left;">'+b.comment+'</div>';
                            str+='			<div class="uyan_cmt_exp" style="padding: 5px 5px 0 0; line-height: 14px;">';
                            if(b.admin!='master'&&b.style!='color') {
                                str+='				<a id="uyan_exp_rpy_'+b.cid+'" onclick="UYAN.addRpy('+b.cid+', '+b.pcid+');" onmouseover="UYAN.mouseOO(this.nextSibling, \'rpy.png\');" onmouseout="UYAN.mouseOO(this.nextSibling, \'rpy2.png\');" style="color: #999999; cursor: pointer; display: block; float: right; font-size: 11px; padding: 0 4px 0 0;">'+((b.style=='side')?(UYAN.lang.cmtS): (UYAN.lang.rpyS))+'</a>';
                                str+='<a onclick="UYAN.addRpy('+b.cid+', '+b.pcid+');" onmouseover="UYAN.mouseOO(this, \'rpy.png\');" onmouseout="UYAN.mouseOO(this, \'rpy2.png\');" style="background: url(\''+UYAN.imgHost+'rpy2.png\') no-repeat scroll 0 0 transparent; cursor: pointer; display: '+((b.style=='side')?('none'): ('block'))+'; float: right; height: 13px; margin-right: 4px; margin-top: 0px; width: 14px;"></a>';
                                str+='				<a onclick="UYAN.cmtUD(\'du\', '+b.cid+');" style="color: #999999; cursor: pointer; display: '+((b.isud)?('block'): ('none'))+'; float: right; font-size: 11px; padding: 0 10px 0 0;">'+b.downname+'<span id="uyan_cd_'+b.cid+'" style="padding-left: 3px;">'+((b.votedown>0)?(b.votedown): (''))+'</span></a>';
                                str+='				<a id="uyan_cdw_'+b.cid+'" onclick="UYAN.cmtUD(\'du\', '+b.cid+');" style="background: url(\''+UYAN.imgHost+'downDig2.png\') no-repeat scroll 0 0 transparent; cursor: pointer; display: '+((b.isud)?('block'): ('none'))+'; float: right; height: 13px; margin-right: 4px; margin-top: 3px; width: 13px;"></a>';
                                str+='				<a onclick="UYAN.cmtUD(\'uu\', '+b.cid+');" style="color: #999999; cursor: pointer; display: '+((b.style=='side')?('none'): ('block'))+'; float: right; font-size: 11px; padding: 0 10px 0 0;">'+b.upname+'<span id="uyan_cu_'+b.cid+'" style="padding-left: 3px;">'+((b.voteup>0)?(b.voteup): (''))+'</span></a>';
                                str+='				<a id="uyan_cuw_'+b.cid+'" onclick="UYAN.cmtUD(\'uu\', '+b.cid+');" style="background: url(\''+UYAN.imgHost+'upDig2.png\') no-repeat scroll 0 0 transparent; cursor: pointer; display: '+((b.style=='side')?('none'): ('block'))+'; float: right; height: 13px; margin-right: 4px; margin-top: 0px; width: 13px;"></a>';
                                str+='				'+((b.style=='side')?('<a href="'+b.ufrommmurl+'" target="_blank;" style="color: #999999; cursor: pointer; display: block; float: right; font-size: 11px; padding: 0 14px 0 0; text-decoration: none;">'+UYAN.lang.traS+'</a>'): (''))+''
                            }
                            str+='				<div style="color: #999999; float: left; font-size: 11px; padding: 0 10px 0 0;">'+b.timediff+'</div>';
                            if(b.style=='color') {
                                str+='				<a id="uyan_cuw_'+b.cid+'" onclick="UYAN.cmtUD(\'uu\', '+b.cid+');" style="background: url(\''+UYAN.imgHost+'upDig2.png\') no-repeat scroll 0 0 transparent; cursor: pointer; display: '+((b.style=='side')?('none'): ('block'))+'; float: left; height: 13px; margin-right: 4px; margin-top: 0px; width: 13px;"></a>';
                                str+='				<a onclick="UYAN.cmtUD(\'uu\', '+b.cid+');" style="color: #999999; cursor: pointer; display: '+((b.style=='side')?('none'): ('block'))+'; float: left; font-size: 11px; padding: 0 10px 0 0;">'+b.upname+'<span id="uyan_cu_'+b.cid+'" style="padding-left: 3px;">'+((b.voteup>0)?(b.voteup): (''))+'</span></a>';
                                str+='				<a id="uyan_cdw_'+b.cid+'" onclick="UYAN.cmtUD(\'du\', '+b.cid+');" style="background: url(\''+UYAN.imgHost+'downDig2.png\') no-repeat scroll 0 0 transparent; cursor: pointer; display: '+((b.isud)?('block'): ('none'))+'; float: left; height: 13px; margin-right: 4px; margin-top: 3px; width: 13px;"></a>';
                                str+='				<a onclick="UYAN.cmtUD(\'du\', '+b.cid+');" style="color: #999999; cursor: pointer; display: '+((b.isud)?('block'): ('none'))+'; float: left; font-size: 11px; padding: 0 10px 0 0;">'+b.downname+'<span id="uyan_cd_'+b.cid+'" style="padding-left: 3px;">'+((b.votedown>0)?(b.votedown): (''))+'</span></a>';
                                if(b.admin!='master') {
                                    str+='				<a onclick="UYAN.addRpy('+b.cid+', '+b.pcid+');" onmouseover="UYAN.mouseOO(this, \'rpy.png\');" onmouseout="UYAN.mouseOO(this, \'rpy2.png\');" style="background: url(\''+UYAN.imgHost+'rpy2.png\') no-repeat scroll 0 0 transparent; cursor: pointer; display: '+((b.style=='side')?('none'): ('none'))+'; float: left; height: 13px; margin-right: 4px; margin-top: 0px; width: 14px;"></a>';
                                    str+='<a id="uyan_exp_rpy_'+b.cid+'" onclick="UYAN.addRpy('+b.cid+', '+b.pcid+');" onmouseover="UYAN.mouseOO(this.previousSibling, \'rpy.png\');" onmouseout="UYAN.mouseOO(this.previousSibling, \'rpy2.png\');" style="color: #999999; cursor: pointer; display: none; float: left; font-size: 11px; margin-right: 10px; padding: 0 4px 0 0;">'+((b.style=='side')?(UYAN.lang.cmtS): (UYAN.lang.rpyS))+'</a>'
                                }
                            }
                            str+='				<div style="clear: both;"></div>';
                            str+='			</div>';
                            str+='		</div>';
                            str+='		<div style="clear: both;"></div>';
                            str+='	</div>'
                        }
                    }
                    return str
                }
                ,
                getMC:function(a) {
                    var b='';
                    b+='<div id="uyan_more_cmt" onclick="UYAN.showMore(this, '+a.pagenum+');" onmouseover="UYAN.changeMore(\'on\', this);" onmouseout="UYAN.changeMore(\'out\', this);" style="cursor: pointer; background: none repeat scroll 0 0 #fcfcfc; height: 28px; line-height: 28px; display: block; border: 1px solid #dcdcdc; margin-top: 15px; margin-bottom: 10px; text-align: center; border-radius: 3px; font-size: 13px; color: #424242; text-decoration: none;">'+UYAN.lang.mCmtS+'<img src="'+UYAN.imgHost+'arrow.png" style="padding-left: 4px; border: none; display: inline;"></div>';
                    return b
                }
                ,
                getMR:function(a) {
                    var b='';
                    b+='<div id="uyan_more_rpy_'+a.cid+'" onclick="UYAN.showMore(this, '+a.pagenum+', '+a.cid+');" onmouseover="UYAN.changeMore(\'on\', this);" onmouseout="UYAN.changeMore(\'out\', this);" style="cursor: pointer; background: none repeat scroll 0 0 #fcfcfc; height: 28px; line-height: 28px; display: block; border: 1px solid #dcdcdc; margin-top: 15px; margin-bottom: 10px; text-align: center; border-radius: 3px; font-size: 13px; color: #424242; text-decoration: none; margin-left: 60px;">'+UYAN.lang.mRpyS+'<img src="'+UYAN.imgHost+'arrow.png" style="padding-left: 4px; border: none; display: inline;"></div>';
                    return b
                }
                ,
                isMob:function() {
                    var a=ua.match(/ucweb|ios|mobile|ipad|ipod|blackberry|motorola|YahooSeeker|symbian|nokia|android|iphone os|windows ce|rv: 1.2.3.4|midp/i), sw=p(window.screen.width), sh=p(window.screen.height), ret=false;
                    if(a) {
                        UYAN.mName=a;
                        if(sw<sh) {
                            ret=true
                        }
                    }
                    return ret
                }
                ,
                changeSet:function() {
                    try {
                        var a=d.getElementsByTagName('div');
                        for(var i=0;
                        i<a.length;
                        i++) {
                            if(a[i].id=='uyan_frame'||a[i].id=='pinglunla_here') {
                                try {
                                    d.getElementById('logo-pinglunla').style.display='none'
                                }
                                catch(e) {}a[i].innerHTML=UYAN.sjs;
                                window.uyan_style_loaded_over=1
                            }
                        }
                    }
                    catch(e) {}try {
                        d.getElementById('uyan_cmt_tit').innerHTML=UYAN.conf.cmttit
                    }
                    catch(e) {}try {
                        d.getElementById('uyan_vun').innerHTML=UYAN.conf.svun
                    }
                    catch(e) {}try {
                        d.getElementById('uyan_acn').innerHTML=UYAN.conf.sacn
                    }
                    catch(e) {}try {
                        d.getElementById('uyan_tts').innerHTML=UYAN.conf.txtsize=='0'?'': UYAN.conf.txtsize
                    }
                    catch(e) {}try {
                        d.getElementById('uyan_ddword_info').innerHTML=UYAN.conf.ddword
                    }
                    catch(e) {}try {
                        d.getElementById('uyan_utname').value=UYAN.conf.utname
                    }
                    catch(e) {}try {
                        d.getElementById('uyan_utname_show').innerHTML=UYAN.conf.utname
                    }
                    catch(e) {}try {
                        d.getElementById('uyan_femail').value=UYAN.conf.femail
                    }
                    catch(e) {}try {
                        d.getElementById('uyan_femail_show').innerHTML=UYAN.conf.femail
                    }
                    catch(e) {}try {
                        d.getElementById('uyan_uacn').innerHTML=UYAN.conf.uacns
                    }
                    catch(e) {}try {
                        d.getElementById('uyan_uvon').innerHTML=UYAN.conf.uvons
                    }
                    catch(e) {}try {
                        d.getElementById('uyan_sort_name').innerHTML=UYAN.conf.sortname
                    }
                    catch(e) {}try {
                        d.getElementById('uyan_sort_time').style.background=UYAN.conf.sorttime;
                        d.getElementById('uyan_sort_time').style.fontWeight='bold'
                    }
                    catch(e) {}try {
                        d.getElementById('uyan_sort_hot').style.background=UYAN.conf.sorthot;
                        d.getElementById('uyan_sort_time').style.fontWeight='bold'
                    }
                    catch(e) {}try {
                        d.getElementById('uyan_loginot').innerHTML=UYAN.getOtStr(UYAN.conf.loginot, UYAN.conf.ottype)
                    }
                    catch(e) {}try {
                        d.getElementById('uyan_loginom').innerHTML=UYAN.getOmStr(UYAN.conf.loginom)
                    }
                    catch(e) {}try {
                        d.getElementById('uyan_comment').onkeyup=function() {
                            UYAN.checkTxt(this, UYAN.conf.txtsize)
                        }
                        ;
                        d.getElementById('uyan_comment').onkeydown=function() {
                            UYAN.checkTxt(this, UYAN.conf.txtsize)
                        }
                    }
                    catch(e) {}try {
                        d.getElementById('uyan_sdm_name').innerHTML=UYAN.conf.subdomain
                    }
                    catch(e) {}try {
                        d.getElementById('uyan_dacn').innerHTML=UYAN.conf.dacn
                    }
                    catch(e) {}try {
                        d.getElementById('uyan_dvun').innerHTML=UYAN.conf.dvun
                    }
                    catch(e) {}try {
                        d.getElementById('uyan_daun').innerHTML=UYAN.conf.daun
                    }
                    catch(e) {}if(UYAN.conf.loginuid) {
                        try {
                            d.getElementById('uyan_stat_btn').nextSibling.parentNode.removeChild(d.getElementById('uyan_stat_btn').nextSibling)
                        }
                        catch(e) {}try {
                            d.getElementById('uyan_stat_btn').parentNode.removeChild(d.getElementById('uyan_stat_btn'))
                        }
                        catch(e) {}try {
                            d.getElementById('uyan_stat_btn_r').nextSibling.parentNode.removeChild(d.getElementById('uyan_stat_btn_r').nextSibling)
                        }
                        catch(e) {}try {
                            d.getElementById('uyan_stat_btn_r').parentNode.removeChild(d.getElementById('uyan_stat_btn_r'))
                        }
                        catch(e) {}
                    }
                    else {
                        try {
                            d.getElementById('uyan_stat_info').parentNode.removeChild(d.getElementById('uyan_stat_info'))
                        }
                        catch(e) {}try {
                            d.getElementById('uyan_stat_info_r').parentNode.removeChild(d.getElementById('uyan_stat_info_r'))
                        }
                        catch(e) {}
                    }
                    try {
                        d.getElementById('uyan_uname_txt').innerHTML=UYAN.conf.uname
                    }
                    catch(e) {}try {
                        d.getElementById('uyan_uname_txt_t').innerHTML=UYAN.conf.uname
                    }
                    catch(e) {}try {
                        d.getElementById('uyan_uname_txt_r').innerHTML=UYAN.conf.uname
                    }
                    catch(e) {}if(UYAN.conf.loginuid&&UYAN.conf.loginuid!=100) {
                        try {
                            d.getElementById('uyan_uname_txt').target='_blank'
                        }
                        catch(e) {}try {
                            d.getElementById('uyan_uname_txt').href=UYAN.conf.ufromurl
                        }
                        catch(e) {}try {
                            d.getElementById('uyan_uname_txt_t').target='_blank'
                        }
                        catch(e) {}try {
                            d.getElementById('uyan_uname_txt_t').href=UYAN.conf.ufromurl
                        }
                        catch(e) {}try {
                            d.getElementById('uyan_uname_txt_r').target='_blank'
                        }
                        catch(e) {}try {
                            d.getElementById('uyan_uname_txt_r').href=UYAN.conf.ufromurl
                        }
                        catch(e) {}
                    }
                    try {
                        d.getElementById('uyan_sns_name').innerHTML=UYAN.conf.ufromnames
                    }
                    catch(e) {}try {
                        d.getElementById('uyan_sns_name_r').innerHTML=UYAN.conf.ufromnames
                    }
                    catch(e) {}if(UYAN.conf.loginuid&&UYAN.conf.uface) {
                        try {
                            d.getElementById('uyan_uface').src=UYAN.conf.uface
                        }
                        catch(e) {}try {
                            d.getElementById('uyan_uface_r').src=UYAN.conf.uface
                        }
                        catch(e) {}
                    }
                    else {
                        try {
                            d.getElementById('uyan_uface').src=UYAN.conf.duface
                        }
                        catch(e) {}try {
                            d.getElementById('uyan_uface_r').src=UYAN.conf.duface
                        }
                        catch(e) {}
                    }
                    d.getElementById('uyan_uface').onerror=function() {
                        try {
                            UYAN.noUface(this, UYAN.conf.duface)
                        }
                        catch(e) {}
                    }
                    ;
                    d.getElementById('uyan_uface_r').onerror=function() {
                        try {
                            UYAN.noUface(this, UYAN.conf.duface)
                        }
                        catch(e) {}
                    }
                    ;
                    d.getElementById('uyan_uface').onload=function() {
                        if(UYAN.conf.loginuid) {
                            try {
                                UYAN.loadUface(this, UYAN.conf.uface, UYAN.conf.duface)
                            }
                            catch(e) {}
                        }
                        else {
                            try {
                                UYAN.loadUface(this, UYAN.conf.duface, UYAN.conf.duface)
                            }
                            catch(e) {}
                        }
                    }
                    ;
                    d.getElementById('uyan_uface_r').onload=function() {
                        if(UYAN.conf.loginuid) {
                            try {
                                UYAN.loadUface(this, UYAN.conf.uface, UYAN.conf.duface)
                            }
                            catch(e) {}
                        }
                        else {
                            try {
                                UYAN.loadUface(this, UYAN.conf.duface, UYAN.conf.duface)
                            }
                            catch(e) {}
                        }
                    }
                    ;
                    try {
                        var b=d.getElementsByTagName('input');
                        for(var i=0;
                        i<b.length;
                        i++) {
                            if(b[i].className=='uyan_st_sync') {
                                if(UYAN.conf.loginuid&&UYAN.conf.loginuid!=100&&UYAN.conf.ufrom!='SSO'&&UYAN.conf.ufrom!='sso') {
                                    b[i].checked=true
                                }
                                else {
                                    b[i].checked=false
                                }
                            }
                        }
                    }
                    catch(e) {}try {
                        if(UYAN.conf.isrcmd=='1'||UYAN.conf.isrcmd=='2') {
                            var c=d.createElement('div'), f=d.getElementById('uyan_cmt_list');
                            c.className='ujian-uyan';
                            if(f.parentNode.lastChild==f) {
                                f.parentNode.insertBefore(c)
                            }
                            else {
                                f.parentNode.insertBefore(c, f.nextSibling)
                            }
                            UYAN.creElm( {
                                src: 'http://v1.ujian.cc/code/ujian.js?uid='+UYAN.conf.uid+(UYAN.conf.isrcmd=='2'?'&om=1': ''), charset: 'utf-8', id: 'uyan_script'
                            }
                            ,
                            'script',
                            d.getElementsByTagName('head')[0]||dd)
                        }
                    }
                    catch(e) {}try {
                        if(params['footmark']=='0') {
                            var f=d.getElementById('uyan_cmt_list');
                            if(f.nextSibling.className=='ujian-uyan') {
                                f.nextSibling.nextSibling.innerHTML=''
                            }
                            else {
                                f.nextSibling.innerHTML=''
                            }
                        }
                    }
                    catch(e) {}
                }
            }
            ;
            w.uyan_loaded=1;
            UYAN.writeLog();
            if(iie==6) {
                setTimeout(function() {
                    UYAN.init()
                }
                ,
                2000)
            }
            else {
                setTimeout(function() {
                    UYAN.init()
                }
                ,
                100)
            }
            try {
                if(!conf.do_not_track&&w.location.host&&typeof(_gnayTrack)!='object'&&!UYAN.isMob()) {}
            }
            catch(e) {}
        }
        else {
            w.uyan_loaded+=1
        }
    }
    catch(e) {}
}
)();