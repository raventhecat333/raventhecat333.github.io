'use strict';

(function() {
        function n(e) {
            "@babel/helpers - typeof"; n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(c) {
                return typeof c
            }

            :function(c) {
                return c&&"function"===typeof Symbol&&c.constructor===Symbol&&c !==Symbol.prototype?"symbol":typeof c
            }

            ; return n(e)
        }

        function K(e, c) {
            if( !(e instanceof c))throw new TypeError("Cannot call a class as a function");
        }

        function L(e, c) {
            for(var b=0; b<c.length; b++) {
                var a=c[b]; a.enumerable=a.enumerable|| !1; a.configurable= !0; "value"in a&&(a.writable= !0); Object.defineProperty(e, a.key, a)
            }
        }

        function V(e, c, b) {
            c&&L(e.prototype, c); b&&L(e, b); return e
        }

        function M(e, c) {
            var b=Object.keys(e); if(Object.getOwnPropertySymbols) {
                var a=Object.getOwnPropertySymbols(e); c&&(a=a.filter(function(a) {
                            return Object.getOwnPropertyDescriptor(e, a).enumerable
                        }

                    )); b.push.apply(b, a)
            }

            return b
        }

        function y(e) {
            for(var c=1; c<arguments.length; c++) {
                var b=null !=arguments[c]?arguments[c]: {}

                ; c%2?M(Object(b),  !0).forEach(function(a) {
                        var c=b[a]; a in e?Object.defineProperty(e, a, {
                                value:c, enumerable: !0,
                                configurable: !0, writable: !0
                            }

                        ):e[a]=c
                    }

                ):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(b)):M(Object(b)).forEach(function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(b, a))
                    }

                )
            }

            return e
        }

        function W(e, c) {
            if("function" !==typeof c&&null !==c)throw new TypeError("Super expression must either be null or a function"); e.prototype=Object.create(c&&c.prototype, {
                    constructor: {
                        value:e, writable: !0, configurable: !0
                    }
                }

            ); c&&B(e, c)
        }

        function C(e) {
            C=Object.setPrototypeOf? Object.getPrototypeOf:function(c) {
                return c.__proto__||Object.getPrototypeOf(c)
            }

            ; return C(e)
        }

        function B(e, c) {
            B=Object.setPrototypeOf||function(b, a) {
                b.__proto__=a; return b
            }

            ; return B(e, c)
        }

        function N() {
            if("undefined"===typeof Reflect|| !Reflect.construct||Reflect.construct.sham)return !1; if("function"===typeof Proxy)return !0; try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {}

                    )),  !0
            }

            catch(e) {
                return !1
            }
        }

        function D(e, c, b) {
            D=N()?Reflect.construct:function(a, b, c) {
                var d=[null]; d.push.apply(d,
                    b); a=new (Function.bind.apply(a, d)); c&&B(a, c.prototype); return a
            }

            ; return D.apply(null, arguments)
        }

        function E(e) {
            var c="function"===typeof Map?new Map:void 0; E=function(b) {
                function a() {
                    return D(b, arguments, C(this).constructor)
                }

                if(null===b||-1===Function.toString.call(b).indexOf("[native code]"))return b; if("function" !==typeof b)throw new TypeError("Super expression must either be null or a function"); if("undefined" !==typeof c) {
                    if(c.has(b))return c.get(b); c.set(b, a)
                }

                a.prototype=Object.create(b.prototype,
                        {
                        constructor: {
                            value:a, enumerable: !1, writable: !0, configurable: !0
                        }
                    }

                ); return B(a, b)
            }

            ; return E(e)
        }

        function X(e) {
            var c=N(); return function() {
                var b=C(e); if(c) {
                    var a=C(this).constructor; b=Reflect.construct(b, arguments, a)
                }

                else b=b.apply(this, arguments); if( !b||"object" !==typeof b&&"function" !==typeof b) {
                    if(void 0===this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); b=this
                }

                return b
            }
        }

        function O(e, c, b) {
            return b= {
                path:c, exports: {}

                , require:function(a, b) {
                    throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
                }
            }

            , e(b, b.exports), b.exports
        }

        var F=Object.prototype.hasOwnProperty, u=Array.isArray, m=function() {
            for(var e=[], c=0; 256>c; ++c)e.push("%"+((16>c?"0":"")+c.toString(16)).toUpperCase()); return e
        }

        (), P=function(e, c) {
            c=c&&c.plainObjects?Object.create(null): {}

            ; for(var b=0; b<e.length; ++b)"undefined" !==typeof e[b]&&(c[b]=e[b]); return c
        }

        , w= {
            arrayToObject:P, assign:function(e, c) {
                return Object.keys(c).reduce(function(b, a) {
                        b[a]=c[a]; return b
                    }

                    , e)
            }

            , combine:function(e, c) {
                return[].concat(e, c)
            }

            , compact:function(e) {
                for(var c=[ {
                        obj: {
                            o:e
                        }

                        , prop:"o"
                    }

                    ], b=[], a=0; a<c.length; ++a) {
                    var d=c[a]; d=d.obj[d.prop]; for(var f=Object.keys(d), k=0; k<f.length; ++k) {
                        var g=f[k], h=d[g]; "object"===n(h)&&null !==h&&-1===b.indexOf(h)&&(c.push( {
                                    obj:d, prop:g
                                }

                            ), b.push(h))
                    }
                }

                for(; 1<c.length; )if(b=c.pop(), a=b.obj[b.prop], u(a)) {
                    d=[]; for(f=0; f<a.length; ++f)"undefined" !==typeof a[f]&&d.push(a[f]); b.obj[b.prop]=d
                }

                return e
            }

            , decode:function(e, c, b) {
                e=e.replace(/\+/g, " "); if("iso-8859-1"===b)return e.replace(/%[0-9a-f] {
                        2
                    }

                    /gi, unescape); try {
                    return decodeURIComponent(e)
                }

                catch(a) {
                    return e
                }
            }

            ,
            encode:function(e, c, b) {
                if(0===e.length)return e; c=e; "symbol"===n(e)?c=Symbol.prototype.toString.call(e):"string" !==typeof e&&(c=String(e)); if("iso-8859-1"===b)return escape(c).replace(/%u[0-9a-f] {
                        4
                    }

                    /gi, function(a) {
                        return"%26%23"+parseInt(a.slice(2), 16)+"%3B"
                    }

                ); e=""; for(b=0; b<c.length; ++b) {
                    var a=c.charCodeAt(b); 45===a||46===a||95===a||126===a||48<=a&&57>=a||65<=a&&90>=a||97<=a&&122>=a?e+=c.charAt(b):128>a?e+=m[a]:2048>a?e+=m[192|a>>6]+m[128|a&63]:55296>a||57344<=a?e+=m[224|a>>12]+m[128|a>>6&63]+m[128| a&63]:(b+=1, a=65536+((a&1023)<<10|c.charCodeAt(b)&1023), e+=m[240|a>>18]+m[128|a>>12&63]+m[128|a>>6&63]+m[128|a&63])
                }

                return e
            }

            , isBuffer:function(e) {
                return e&&"object"===n(e)? ! !(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e)): !1
            }

            , isRegExp:function(e) {
                return"[object RegExp]"===Object.prototype.toString.call(e)
            }

            , maybeMap:function(e, c) {
                if(u(e)) {
                    for(var b=[], a=0; a<e.length; a+=1)b.push(c(e[a])); return b
                }

                return c(e)
            }

            , merge:function d(c, b, a) {
                if( !b)return c; if("object" !==n(b)) {
                    if(u(c))c.push(b);

                    else if(c&&"object"===n(c)) {
                        if(a&&(a.plainObjects||a.allowPrototypes)|| !F.call(Object.prototype, b))c[b]= !0
                    }

                    else return[c, b]; return c
                }

                if( !c||"object" !==n(c))return[c].concat(b); var f=c; u(c)&& !u(b)&&(f=P(c, a)); return u(c)&&u(b)?(b.forEach(function(b, g) {
                            if(F.call(c, g)) {
                                var h=c[g]; h&&"object"===n(h)&&b&&"object"===n(b)?c[g]=d(h, b, a):c.push(b)
                            }

                            else c[g]=b
                        }

                    ), c):Object.keys(b).reduce(function(c, g) {
                        var h=b[g]; F.call(c, g)?c[g]=d(c[g], h, a):c[g]=h; return c
                    }

                    , f)
            }
        }

        , Y=String.prototype.replace, Z=/%20/g, x= {
            RFC1738:"RFC1738",
            RFC3986:"RFC3986"
        }

        , z=w.assign( {
                "default":x.RFC3986, formatters: {
                    RFC1738:function(c) {
                        return Y.call(c, Z, "+")
                    }

                    , RFC3986:function(c) {
                        return String(c)
                    }
                }
            }

            , x), aa=Object.prototype.hasOwnProperty, Q= {
            brackets:function(c) {
                return c+"[]"
            }

            , comma:"comma", indices:function(c, b) {
                return c+"["+b+"]"
            }

            , repeat:function(c) {
                return c
            }
        }

        , A=Array.isArray, ba=Array.prototype.push, R=function(c, b) {
            ba.apply(c, A(b)?b:[b])
        }

        , ca=Date.prototype.toISOString; x=z["default"]; var p= {

            addQueryPrefix: !1, allowDots: !1, charset:"utf-8", charsetSentinel: !1,
            delimiter:"&", encode: !0, encoder:w.encode, encodeValuesOnly: !1, format:x, formatter:z.formatters[x], indices: !1, serializeDate:function(c) {
                return ca.call(c)
            }

            , skipNulls: !1, strictNullHandling: !1
        }

        , da=function(c) {
            return"string"===typeof c||"number"===typeof c||"boolean"===typeof c||"symbol"===n(c)||"bigint"===typeof c
        }

        , fa=function ea(b, a, d, f, k, g, h, q, l, n, r, v, t) {
            "function"===typeof h?b=h(a, b):b instanceof Date?b=n(b):"comma"===d&&A(b)&&(b=w.maybeMap(b, function(a) {
                        return a instanceof Date?n(a):a
                    }

                ).join(","));

            if(null===b) {
                if(f)return g&& !v?g(a, p.encoder, t, "key"):a; b=""
            }

            if(da(b)||w.isBuffer(b))return g?(a=v?a:g(a, p.encoder, t, "key"), [r(a)+"="+r(g(b, p.encoder, t, "value"))]):[r(a)+"="+r(String(b))]; var H=[]; if("undefined"===typeof b)return H; if(A(h))var m=h; else m=Object.keys(b), m=q?m.sort(q):m; for(var G=0; G<m.length; ++G) {
                var u=m[G], x=b[u]; k&&null===x||(u=A(b)?"function"===typeof d?d(a, u):a:a+(l?"."+u:"["+u+"]"), R(H, ea(x, u, d, f, k, g, h, q, l, n, r, v, t)))
            }

            return H
        }

        , I=Object.prototype.hasOwnProperty, ha=Array.isArray,
        t= {
            allowDots: !1, allowPrototypes: !1, arrayLimit:20, charset:"utf-8", charsetSentinel: !1, comma: !1, decoder:w.decode, delimiter:"&", depth:5, ignoreQueryPrefix: !1, interpretNumericEntities: !1, parameterLimit:1E3, parseArrays: !0, plainObjects: !1, strictNullHandling: !1
        }

        , ia=function(b) {
            return b.replace(/&#(\d+); /g, function(a, b) {
                    return String.fromCharCode(parseInt(b, 10))
                }

            )
        }

        , S=function(b, a) {
            return b&&"string"===typeof b&&a.comma&&-1<b.indexOf(",")?b.split(","):b
        }

        , ja=function(b, a) {
            var d= {}

            ; b=(a.ignoreQueryPrefix?b.replace(/^\?/,
                    ""):b).split(a.delimiter, Infinity===a.parameterLimit?void 0:a.parameterLimit); var f=-1, k, g=a.charset; if(a.charsetSentinel)for(k=0; k<b.length; ++k)0===b[k].indexOf("utf8=")&&("utf8=%E2%9C%93"===b[k]?g="utf-8":"utf8=%26%2310003%3B"===b[k]&&(g="iso-8859-1"), f=k, k=b.length); for(k=0; k<b.length; ++k)if(k !==f) {
                var h=b[k], q=h.indexOf("]="), l=-1===q?h.indexOf("="):q+1; -1===l?(q=a.decoder(h, t.decoder, g, "key"), l=a.strictNullHandling?null:""):(q=a.decoder(h.slice(0, l), t.decoder, g, "key"), l=w.maybeMap(S(h.slice(l+ 1), a), function(b) {
                            return a.decoder(b, t.decoder, g, "value")
                        }

                    )); l&&a.interpretNumericEntities&&"iso-8859-1"===g&&(l=ia(l)); -1<h.indexOf("[]=")&&(l=ha(l)?[l]:l); I.call(d, q)?d[q]=w.combine(d[q], l):d[q]=l
            }

            return d
        }

        , T= {
            formats:z, parse:function(b, a) {
                if(a) {
                    if(null !==a.decoder&&void 0 !==a.decoder&&"function" !==typeof a.decoder)throw new TypeError("Decoder has to be a function."); if("undefined" !==typeof a.charset&&"utf-8" !==a.charset&&"iso-8859-1" !==a.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");

                    a= {
                        allowDots:"undefined"===typeof a.allowDots?t.allowDots: ! !a.allowDots, allowPrototypes:"boolean"===typeof a.allowPrototypes?a.allowPrototypes:t.allowPrototypes, arrayLimit:"number"===typeof a.arrayLimit?a.arrayLimit:t.arrayLimit, charset:"undefined"===typeof a.charset?t.charset:a.charset, charsetSentinel:"boolean"===typeof a.charsetSentinel?a.charsetSentinel:t.charsetSentinel, comma:"boolean"===typeof a.comma?a.comma:t.comma, decoder:"function"===typeof a.decoder?a.decoder:t.decoder, delimiter:"string"===typeof a.delimiter||w.isRegExp(a.delimiter)?a.delimiter:t.delimiter, depth:"number"===typeof a.depth|| !1===a.depth?+a.depth:t.depth, ignoreQueryPrefix: !0===a.ignoreQueryPrefix, interpretNumericEntities:"boolean"===typeof a.interpretNumericEntities?a.interpretNumericEntities:t.interpretNumericEntities, parameterLimit:"number"===typeof a.parameterLimit?a.parameterLimit:t.parameterLimit, parseArrays: !1 !==a.parseArrays, plainObjects:"boolean"===typeof a.plainObjects?a.plainObjects:t.plainObjects, strictNullHandling:"boolean"===typeof a.strictNullHandling?a.strictNullHandling:t.strictNullHandling
                    }
                }

                else a=t; if(""===b||null===b||"undefined"===typeof b)return a.plainObjects?Object.create(null): {}

                ; for(var d="string"===typeof b?ja(b, a):b, f=a.plainObjects?Object.create(null): {}

                    , k=Object.keys(d), g=0; g<k.length; ++g) {
                    var h=k[g]; a: {
                        var q=h; h=d[h]; var l=a, n="string"===typeof b; if(q) {
                            q=l.allowDots?q.replace(/\.([^.[]+)/g, "[$1]"):q; var r=/(\[[^[\]]*])/, v=/(\[[^[\]]*])/g, m=(r=0<l.depth&&r.exec(q))?q.slice(0, r.index):q, p=[]; if(m) {
                                if( !l.plainObjects&& I.call(Object.prototype, m)&& !l.allowPrototypes) {
                                    h=void 0; break a
                                }

                                p.push(m)
                            }

                            for(m=0; 0<l.depth&&null !==(r=v.exec(q))&&m<l.depth; ) {
                                m+=1; if( !l.plainObjects&&I.call(Object.prototype, r[1].slice(1, -1))&& !l.allowPrototypes) {
                                    h=void 0; break a
                                }

                                p.push(r[1])
                            }

                            r&&p.push("["+q.slice(r.index)+"]"); q=p; h=n?h:S(h, l); for(n=q.length-1; 0<=n; --n)r=q[n], "[]"===r&&l.parseArrays?v=[].concat(h):(v=l.plainObjects?Object.create(null): {}

                                , p="["===r.charAt(0)&&"]"===r.charAt(r.length-1)?r.slice(1, -1):r, m=parseInt(p, 10), l.parseArrays|| "" !==p? !isNaN(m)&&r !==p&&String(m)===p&&0<=m&&l.parseArrays&&m<=l.arrayLimit?(v=[], v[m]=h):v[p]=h:v= {
                                    0:h
                                }

                            ), h=v
                        }

                        else h=void 0
                    }

                    f=w.merge(f, h, a)
                }

                return w.compact(f)
            }

            , stringify:function(b, a) {
                if(a) {
                    if(null !==a.encoder&&void 0 !==a.encoder&&"function" !==typeof a.encoder)throw new TypeError("Encoder has to be a function."); var d=a.charset||p.charset; if("undefined" !==typeof a.charset&&"utf-8" !==a.charset&&"iso-8859-1" !==a.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");

                    var f=z["default"]; if("undefined" !==typeof a.format) {
                        if( !aa.call(z.formatters, a.format))throw new TypeError("Unknown format option provided."); f=a.format
                    }

                    f=z.formatters[f]; var k=p.filter; if("function"===typeof a.filter||A(a.filter))k=a.filter; d= {
                        addQueryPrefix:"boolean"===typeof a.addQueryPrefix?a.addQueryPrefix:p.addQueryPrefix, allowDots:"undefined"===typeof a.allowDots?p.allowDots: ! !a.allowDots, charset:d, charsetSentinel:"boolean"===typeof a.charsetSentinel?a.charsetSentinel:p.charsetSentinel, delimiter:"undefined"===typeof a.delimiter?p.delimiter:a.delimiter, encode:"boolean"===typeof a.encode?a.encode:p.encode, encoder:"function"===typeof a.encoder?a.encoder:p.encoder, encodeValuesOnly:"boolean"===typeof a.encodeValuesOnly?a.encodeValuesOnly:p.encodeValuesOnly, filter:k, formatter:f, serializeDate:"function"===typeof a.serializeDate?a.serializeDate:p.serializeDate, skipNulls:"boolean"===typeof a.skipNulls?a.skipNulls:p.skipNulls, sort:"function"===typeof a.sort?a.sort:null, strictNullHandling:"boolean"===typeof a.strictNullHandling? a.strictNullHandling:p.strictNullHandling
                    }
                }

                else d=p; if("function"===typeof d.filter)f=d.filter, b=f("", b); else if(A(d.filter))var g=f=d.filter; f=[]; if("object" !==n(b)||null===b)return""; a=Q[a&&a.arrayFormat in Q?a.arrayFormat:a&&"indices"in a?a.indices?"indices":"repeat":"indices"]; g||(g=Object.keys(b)); d.sort&&g.sort(d.sort); for(k=0; k<g.length; ++k) {
                    var h=g[k]; d.skipNulls&&null===b[h]||R(f, fa(b[h], h, a, d.strictNullHandling, d.skipNulls, d.encode?d.encoder:null, d.filter, d.sort, d.allowDots, d.serializeDate,
                            d.formatter, d.encodeValuesOnly, d.charset))
                }

                g=f.join(d.delimiter); b= !0===d.addQueryPrefix?"?":""; d.charsetSentinel&&(b="iso-8859-1"===d.charset?b+"utf8=%26%2310003%3B&":b+"utf8=%E2%9C%93&"); return 0<g.length?b+g:""
            }
        }

        , ka=O(function(b, a) {
                a.__esModule= !0; a["default"]=function(a, b) {
                    var d=a.split("?"); a=d[0]; var g=d[1]; d=(g||"").split("#")[0]; g=g&&1<g.split("#").length?"#"+g.split("#")[1]:""; d=T.parse(d); for(var h in b)d[h]=b[h]; d=T.stringify(d); "" !==d&&(d="?"+d); return a+d+g
                }
            }

        ), la=function() {

            function b(a,
                b, f, k) {
                if("number" !==typeof a)throw new TypeError("statusCode must be a number but was "+n(a)); if(null===b)throw new TypeError("headers cannot be null"); if("object" !==n(b))throw new TypeError("headers must be an object but was "+n(b)); this.statusCode=a; a= {}

                ; for(var d in b)a[d.toLowerCase()]=b[d]; this.headers=a; this.body=f; this.url=k
            }

            b.prototype.isError=function() {
                return 0===this.statusCode||400<=this.statusCode
            }

            ; b.prototype.getBody=function(a) {
                if(0===this.statusCode)throw a=Error("This request to "+ this.url+" resulted in a status code of 0. This usually indicates some kind of network error in a browser (e.g. CORS not being set up or the DNS failing to resolve):\n"+this.body.toString()), a.statusCode=this.statusCode, a.headers=this.headers, a.body=this.body, a.url=this.url, a; if(300<=this.statusCode)throw a=Error("Server responded to "+this.url+" with status code "+this.statusCode+":\n"+this.body.toString()), a.statusCode=this.statusCode, a.headers=this.headers, a.body=this.body, a.url=this.url, a; return a&& "string" !==typeof this.body?this.body.toString(a):this.body
            }

            ; return b
        }

        (), ma=O(function(b, a) {
                function d(a, b, d) {
                    var f=new XMLHttpRequest; if("string" !==typeof a)throw new TypeError("The method must be a string."); b&&"object"===n(b)&&(b=b.href); if("string" !==typeof b)throw new TypeError("The URL/path must be a string."); if(null===d||void 0===d)d= {}

                    ; if("object" !==n(d))throw new TypeError("Options must be an object (or null)."); a=a.toUpperCase(); d.headers=d.headers|| {}

                    ; var g; (g=/^([\w-]+:)?\/\/([^\/]+)/.exec(b))&& g[2] !=location.host||(d.headers["X-Requested-With"]="XMLHttpRequest"); d.qs&&(b=ka["default"](b, d.qs)); d.json&&(d.body=JSON.stringify(d.json), d.headers["content-type"]="application/json"); d.form&&(d.body=d.form); f.open(a, b,  !1); for(var h in d.headers)f.setRequestHeader(h.toLowerCase(), ""+d.headers[h]); f.send(d.body?d.body:null); var k= {}

                    ; f.getAllResponseHeaders().split("\r\n").forEach(function(a) {
                            a=a.split(":"); 1<a.length&&(k[a[0].toLowerCase()]=a.slice(1).join(":").trim())
                        }

                    ); return new la(f.status,
                        k, f.responseText, b)
                }

                a.__esModule= !0; var f=FormData; a.FormData=f; a["default"]=d; b.exports=d; b.exports["default"]=d; b.exports.FormData=f
            }

        ), J=function(b) {
            function a(b, k) {
                K(this, a); b=d.call(this, b); b.name="HTTPError"; b.statusCode=k; return b
            }

            W(a, b); var d=X(a); return a
        }

        (E(Error)), na=function(b) {
            var a=1<arguments.length&&void 0 !==arguments[1]?arguments[1]: {}

            ; a=y( {
                    method:"get", prefixUrl:"", retry: {
                        limit:2, delay:0
                    }

                    , timeout:1E4, responseType:a.json?"json":"text", throwHttpErrors: !0
                }

                , a); var d= {
                qs:a.searchParams,
                headers:a.headers, body:a.body, json:a.json, timeout:a.timeout
            }

            ; a.prefixUrl&&(b=(new URL(a.prefixUrl,b)).href); 0<a.retry.limit&&(d.retry= !0, d.maxRetries=a.retry.limit, d.retryDelay=a.retry.delay); d=ma(a.method, b, d); if(["text", "json"].includes(a.responseType))try {
                var f=d.getBody("utf8")
            }

            catch(k) {
                if(k.statusCode&& !a.throwHttpErrors)f=""; else {
                    if(400<=k.statusCode)throw new J("Server responded with status code ".concat(d.statusCode, "."), d.statusCode); throw k;
                }
            }

            "json"===a.responseType&&(f=JSON.parse(f)); if("none"===a.responseType&&400<=d.statusCode&&a.throwHttpErrors)throw new J("Server responded with status code ".concat(d.statusCode, "."), d.statusCode); return {
                statusCode:d.statusCode, headers:d.headers, body:void 0===f?"":f
            }
        }

        , U=function a() {
            for(var d=0<arguments.length&&void 0 !==arguments[0]?arguments[0]: {}

                , f=function(a, f) {
                    return na(a, y(y( {}

                                , d), f))
                }

                , k=function() {
                    var a=h[g]; f[a]=function(d) {
                        return f(d, y( {
                                    method:a
                                }

                                , 1<arguments.length&&void 0 !==arguments[1]?arguments[1]: {}

                            ))
                    }
                }

                , g=0, h="get post put patch head delete".split(" "); g< h.length; g++)k(); f.create=function(d) {
                return a(d)
            }

            ; f.extend=function(f) {
                return a(y(y( {}

                            , d), f))
            }

            ; return f
        }

        (); U.HTTPError=J; x=function() {
            function a() {
                K(this, a)
            }

            V(a, [ {
                    key:"getInfo", value:function() {
                        return {
                            id:"ScratchHTTP", name:"HTTP Requests", blocks:[ {
                                opcode:"httpRequest", blockType:Scratch.BlockType.REPORTER, text:"HTTP [method] [url]", arguments: {
                                    method: {
                                        type:Scratch.ArgumentType.STRING, defaultValue:"GET"
                                    }

                                    , url: {
                                        type:Scratch.ArgumentType.STRING, defaultValue:"https://www.random.org/strings/?num=1&len=10&digits=on&upperalpha=on&loweralpha=on&format=plain"
                                    }
                                }
                            }

                            ]
                        }
                    }
                }

                ,
                    {
                    key:"httpRequest", value:function(a) {
                        return U(a.url, {
                                method:a.method
                            }

                        ).body
                    }
                }

                ]); return a
        }

        (); Scratch.extensions.register(new x)
    }

)()
