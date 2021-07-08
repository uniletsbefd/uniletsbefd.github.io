!(function (i) {
  "use strict";
  i.fn.counterUp = function (t) {
    var e = i.extend({ time: 400, delay: 10 }, t);
    return this.each(function () {
      var l = i(this),
        d = e;
      l.waypoint(
        function () {
          var t = [],
            e = d.time / d.delay,
            i = l.text(),
            s = /[0-9]+,[0-9]+/.test(i);
          i = i.replace(/,/g, "");
          /^[0-9]+$/.test(i);
          for (
            var n = /^[0-9]+\.[0-9]+$/.test(i),
              a = n ? (i.split(".")[1] || []).length : 0,
              o = e;
            1 <= o;
            o--
          ) {
            var r = parseInt((i / e) * o);
            if ((n && (r = parseFloat((i / e) * o).toFixed(a)), s))
              for (; /(\d+)(\d{3})/.test(r.toString()); )
                r = r.toString().replace(/(\d+)(\d{3})/, "$1,$2");
            t.unshift(r);
          }
          l.data("counterup-nums", t), l.text("0");
          l.data("counterup-func", function () {
            l.text(l.data("counterup-nums").shift()),
              l.data("counterup-nums").length
                ? setTimeout(l.data("counterup-func"), d.delay)
                : (l.data("counterup-nums"),
                  l.data("counterup-nums", null),
                  l.data("counterup-func", null));
          }),
            setTimeout(l.data("counterup-func"), d.delay);
        },
        { offset: "100%", triggerOnce: !0 }
      );
    });
  };
})(jQuery),
  (function (c, o, g, m) {
    "use strict";
    function i(t, e) {
      var i,
        s,
        n = [],
        a = 0;
      (t && t.isDefaultPrevented()) ||
        (t.preventDefault(),
        (s =
          (i =
            (e = t && t.data ? t.data.options : e || {}).$target ||
            g(t.currentTarget)).attr("data-fancybox") || "")
          ? (a = (n = (n = e.selector
              ? g(e.selector)
              : t.data
              ? t.data.items
              : []).length
              ? n.filter('[data-fancybox="' + s + '"]')
              : g('[data-fancybox="' + s + '"]')).index(i)) < 0 && (a = 0)
          : (n = [i]),
        g.fancybox.open(n, e, a));
    }
    if (((c.console = c.console || { info: function (t) {} }), g)) {
      if (g.fn.fancybox) return console.info("fancyBox already initialized");
      var t = {
          loop: !1,
          gutter: 50,
          keyboard: !0,
          arrows: !0,
          infobar: !0,
          smallBtn: "auto",
          toolbar: "auto",
          buttons: ["zoom", "thumbs", "close"],
          idleTime: 3,
          protect: !1,
          modal: !1,
          image: { preload: !1 },
          ajax: { settings: { data: { fancybox: !0 } } },
          iframe: {
            tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
            preload: !0,
            css: {},
            attr: { scrolling: "auto" },
          },
          defaultType: "image",
          animationEffect: "zoom",
          animationDuration: 366,
          zoomOpacity: "auto",
          transitionEffect: "fade",
          transitionDuration: 366,
          slideClass: "",
          baseClass: "",
          baseTpl:
            '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',
          spinnerTpl: '<div class="fancybox-loading"></div>',
          errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
          btnTpl: {
            download:
              '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M13,16 L20,23 L27,16 M20,7 L20,23 M10,24 L10,28 L30,28 L30,24" /></svg></a>',
            zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M18,17 m-8,0 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0 M24,22 L31,29" /></svg></button>',
            close:
              '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',
            smallBtn:
              '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"><svg viewBox="0 0 32 32"><path d="M10,10 L22,22 M22,10 L10,22"></path></svg></button>',
            arrowLeft:
              '<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M18,12 L10,20 L18,28 M10,20 L30,20"></path></svg></a>',
            arrowRight:
              '<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 M22,12 L30,20 L22,28"></path></svg></a>',
          },
          parentEl: "body",
          autoFocus: !1,
          backFocus: !0,
          trapFocus: !0,
          fullScreen: { autoStart: !1 },
          touch: { vertical: !0, momentum: !0 },
          hash: null,
          media: {},
          slideShow: { autoStart: !1, speed: 4e3 },
          thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y",
          },
          wheel: "auto",
          onInit: g.noop,
          beforeLoad: g.noop,
          afterLoad: g.noop,
          beforeShow: g.noop,
          afterShow: g.noop,
          beforeClose: g.noop,
          afterClose: g.noop,
          onActivate: g.noop,
          onDeactivate: g.noop,
          clickContent: function (t, e) {
            return "image" === t.type && "zoom";
          },
          clickSlide: "close",
          clickOutside: "close",
          dblclickContent: !1,
          dblclickSlide: !1,
          dblclickOutside: !1,
          mobile: {
            idleTime: !1,
            clickContent: function (t, e) {
              return "image" === t.type && "toggleControls";
            },
            clickSlide: function (t, e) {
              return "image" === t.type ? "toggleControls" : "close";
            },
            dblclickContent: function (t, e) {
              return "image" === t.type && "zoom";
            },
            dblclickSlide: function (t, e) {
              return "image" === t.type && "zoom";
            },
          },
          lang: "en",
          i18n: {
            en: {
              CLOSE: "Close",
              NEXT: "Next",
              PREV: "Previous",
              ERROR:
                "The requested content cannot be loaded. <br/> Please try again later.",
              PLAY_START: "Start slideshow",
              PLAY_STOP: "Pause slideshow",
              FULL_SCREEN: "Full screen",
              THUMBS: "Thumbnails",
              DOWNLOAD: "Download",
              SHARE: "Share",
              ZOOM: "Zoom",
            },
            de: {
              CLOSE: "Schliessen",
              NEXT: "Weiter",
              PREV: "Zurück",
              ERROR:
                "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
              PLAY_START: "Diaschau starten",
              PLAY_STOP: "Diaschau beenden",
              FULL_SCREEN: "Vollbild",
              THUMBS: "Vorschaubilder",
              DOWNLOAD: "Herunterladen",
              SHARE: "Teilen",
              ZOOM: "Maßstab",
            },
          },
        },
        n = g(c),
        r = g(o),
        a = 0,
        p =
          c.requestAnimationFrame ||
          c.webkitRequestAnimationFrame ||
          c.mozRequestAnimationFrame ||
          c.oRequestAnimationFrame ||
          function (t) {
            return c.setTimeout(t, 1e3 / 60);
          },
        u = (function () {
          var t,
            e = o.createElement("fakeelement"),
            i = {
              transition: "transitionend",
              OTransition: "oTransitionEnd",
              MozTransition: "transitionend",
              WebkitTransition: "webkitTransitionEnd",
            };
          for (t in i) if (e.style[t] !== m) return i[t];
          return "transitionend";
        })(),
        f = function (t) {
          return t && t.length && t[0].offsetHeight;
        },
        l = function (t, e) {
          var i = g.extend(!0, {}, t, e);
          return (
            g.each(e, function (t, e) {
              g.isArray(e) && (i[t] = e);
            }),
            i
          );
        },
        s = function (t, e, i) {
          var s = this;
          (s.opts = l({ index: i }, g.fancybox.defaults)),
            g.isPlainObject(e) && (s.opts = l(s.opts, e)),
            g.fancybox.isMobile && (s.opts = l(s.opts, s.opts.mobile)),
            (s.id = s.opts.id || ++a),
            (s.currIndex = parseInt(s.opts.index, 10) || 0),
            (s.prevIndex = null),
            (s.prevPos = null),
            (s.currPos = 0),
            (s.firstRun = !0),
            (s.group = []),
            (s.slides = {}),
            s.addContent(t),
            s.group.length &&
              ((s.$lastFocus = g(o.activeElement).trigger("blur")), s.init());
        };
      g.extend(s.prototype, {
        init: function () {
          var t,
            e,
            i,
            s = this,
            n = s.group[s.currIndex].opts,
            a = g.fancybox.scrollbarWidth;
          g.fancybox.getInstance() ||
            !1 === n.hideScrollbar ||
            (g("body").addClass("fancybox-active"),
            !g.fancybox.isMobile &&
              o.body.scrollHeight > c.innerHeight &&
              (a === m &&
                ((t = g(
                  '<div style="width:100px;height:100px;overflow:scroll;" />'
                ).appendTo("body")),
                (a = g.fancybox.scrollbarWidth =
                  t[0].offsetWidth - t[0].clientWidth),
                t.remove()),
              g("head").append(
                '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' +
                  a +
                  "px; }</style>"
              ),
              g("body").addClass("compensate-for-scrollbar"))),
            (i = ""),
            g.each(n.buttons, function (t, e) {
              i += n.btnTpl[e] || "";
            }),
            (e = g(
              s.translate(
                s,
                n.baseTpl
                  .replace("{{buttons}}", i)
                  .replace(
                    "{{arrows}}",
                    n.btnTpl.arrowLeft + n.btnTpl.arrowRight
                  )
              )
            )
              .attr("id", "fancybox-container-" + s.id)
              .addClass("fancybox-is-hidden")
              .addClass(n.baseClass)
              .data("FancyBox", s)
              .appendTo(n.parentEl)),
            (s.$refs = { container: e }),
            [
              "bg",
              "inner",
              "infobar",
              "toolbar",
              "stage",
              "caption",
              "navigation",
            ].forEach(function (t) {
              s.$refs[t] = e.find(".fancybox-" + t);
            }),
            s.trigger("onInit"),
            s.activate(),
            s.jumpTo(s.currIndex);
        },
        translate: function (t, e) {
          var s = t.opts.i18n[t.opts.lang];
          return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
            var i = s[e];
            return i === m ? t : i;
          });
        },
        addContent: function (t) {
          var e,
            d = this,
            i = g.makeArray(t);
          g.each(i, function (t, e) {
            var i,
              s,
              n,
              a,
              o,
              r = {},
              l = {};
            g.isPlainObject(e)
              ? (l = (r = e).opts || e)
              : "object" === g.type(e) && g(e).length
              ? ((l = (i = g(e)).data() || {}),
                ((l = g.extend(!0, {}, l, l.options)).$orig = i),
                (r.src = d.opts.src || l.src || i.attr("href")),
                r.type || r.src || ((r.type = "inline"), (r.src = e)))
              : (r = { type: "html", src: e + "" }),
              (r.opts = g.extend(!0, {}, d.opts, l)),
              g.isArray(l.buttons) && (r.opts.buttons = l.buttons),
              (s = r.type || r.opts.type),
              (a = r.src || ""),
              !s &&
                a &&
                ((n = a.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i))
                  ? ((s = "video"),
                    r.opts.videoFormat ||
                      (r.opts.videoFormat =
                        "video/" + ("ogv" === n[1] ? "ogg" : n[1])))
                  : a.match(
                      /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                    )
                  ? (s = "image")
                  : a.match(/\.(pdf)((\?|#).*)?$/i)
                  ? (s = "iframe")
                  : "#" === a.charAt(0) && (s = "inline")),
              s ? (r.type = s) : d.trigger("objectNeedsType", r),
              r.contentType ||
                (r.contentType =
                  -1 < g.inArray(r.type, ["html", "inline", "ajax"])
                    ? "html"
                    : r.type),
              (r.index = d.group.length),
              "auto" == r.opts.smallBtn &&
                (r.opts.smallBtn =
                  -1 < g.inArray(r.type, ["html", "inline", "ajax"])),
              "auto" === r.opts.toolbar && (r.opts.toolbar = !r.opts.smallBtn),
              r.opts.$trigger &&
                r.index === d.opts.index &&
                (r.opts.$thumb = r.opts.$trigger.find("img:first")),
              (r.opts.$thumb && r.opts.$thumb.length) ||
                !r.opts.$orig ||
                (r.opts.$thumb = r.opts.$orig.find("img:first")),
              "function" === g.type(r.opts.caption) &&
                (r.opts.caption = r.opts.caption.apply(e, [d, r])),
              "function" === g.type(d.opts.caption) &&
                (r.opts.caption = d.opts.caption.apply(e, [d, r])),
              r.opts.caption instanceof g ||
                (r.opts.caption =
                  r.opts.caption === m ? "" : r.opts.caption + ""),
              "ajax" === r.type &&
                1 < (o = a.split(/\s+/, 2)).length &&
                ((r.src = o.shift()), (r.opts.filter = o.shift())),
              r.opts.modal &&
                (r.opts = g.extend(!0, r.opts, {
                  infobar: 0,
                  toolbar: 0,
                  smallBtn: 0,
                  keyboard: 0,
                  slideShow: 0,
                  fullScreen: 0,
                  thumbs: 0,
                  touch: 0,
                  clickContent: !1,
                  clickSlide: !1,
                  clickOutside: !1,
                  dblclickContent: !1,
                  dblclickSlide: !1,
                  dblclickOutside: !1,
                })),
              d.group.push(r);
          }),
            Object.keys(d.slides).length &&
              (d.updateControls(),
              (e = d.Thumbs) && e.isActive && (e.create(), e.focus()));
        },
        addEvents: function () {
          var s = this;
          s.removeEvents(),
            s.$refs.container
              .on("click.fb-close", "[data-fancybox-close]", function (t) {
                t.stopPropagation(), t.preventDefault(), s.close(t);
              })
              .on(
                "touchstart.fb-prev click.fb-prev",
                "[data-fancybox-prev]",
                function (t) {
                  t.stopPropagation(), t.preventDefault(), s.previous();
                }
              )
              .on(
                "touchstart.fb-next click.fb-next",
                "[data-fancybox-next]",
                function (t) {
                  t.stopPropagation(), t.preventDefault(), s.next();
                }
              )
              .on("click.fb", "[data-fancybox-zoom]", function (t) {
                s[s.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
              }),
            n.on("orientationchange.fb resize.fb", function (t) {
              t && t.originalEvent && "resize" === t.originalEvent.type
                ? p(function () {
                    s.update();
                  })
                : (s.$refs.stage.hide(),
                  setTimeout(
                    function () {
                      s.$refs.stage.show(), s.update();
                    },
                    g.fancybox.isMobile ? 600 : 250
                  ));
            }),
            r.on("focusin.fb", function (t) {
              var e = g.fancybox ? g.fancybox.getInstance() : null;
              e.isClosing ||
                !e.current ||
                !e.current.opts.trapFocus ||
                g(t.target).hasClass("fancybox-container") ||
                g(t.target).is(o) ||
                (e &&
                  "fixed" !== g(t.target).css("position") &&
                  !e.$refs.container.has(t.target).length &&
                  (t.stopPropagation(), e.focus()));
            }),
            r.on("keydown.fb", function (t) {
              var e = s.current,
                i = t.keyCode || t.which;
              if (
                e &&
                e.opts.keyboard &&
                !(
                  t.ctrlKey ||
                  t.altKey ||
                  t.shiftKey ||
                  g(t.target).is("input") ||
                  g(t.target).is("textarea")
                )
              )
                return 8 === i || 27 === i
                  ? (t.preventDefault(), void s.close(t))
                  : 37 === i || 38 === i
                  ? (t.preventDefault(), void s.previous())
                  : 39 === i || 40 === i
                  ? (t.preventDefault(), void s.next())
                  : void s.trigger("afterKeydown", t, i);
            }),
            s.group[s.currIndex].opts.idleTime &&
              ((s.idleSecondsCounter = 0),
              r.on(
                "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
                function (t) {
                  (s.idleSecondsCounter = 0),
                    s.isIdle && s.showControls(),
                    (s.isIdle = !1);
                }
              ),
              (s.idleInterval = c.setInterval(function () {
                s.idleSecondsCounter++,
                  s.idleSecondsCounter >= s.group[s.currIndex].opts.idleTime &&
                    !s.isDragging &&
                    ((s.isIdle = !0),
                    (s.idleSecondsCounter = 0),
                    s.hideControls());
              }, 1e3)));
        },
        removeEvents: function () {
          n.off("orientationchange.fb resize.fb"),
            r.off("focusin.fb keydown.fb .fb-idle"),
            this.$refs.container.off(".fb-close .fb-prev .fb-next"),
            this.idleInterval &&
              (c.clearInterval(this.idleInterval), (this.idleInterval = null));
        },
        previous: function (t) {
          return this.jumpTo(this.currPos - 1, t);
        },
        next: function (t) {
          return this.jumpTo(this.currPos + 1, t);
        },
        jumpTo: function (t, s) {
          var e,
            i,
            n,
            a,
            o,
            r,
            l,
            d = this,
            c = d.group.length;
          if (!(d.isDragging || d.isClosing || (d.isAnimating && d.firstRun))) {
            if (
              ((t = parseInt(t, 10)),
              !(i = d.current ? d.current.opts.loop : d.opts.loop) &&
                (t < 0 || c <= t))
            )
              return !1;
            if (
              ((e = d.firstRun = !Object.keys(d.slides).length),
              !(c < 2 && !e && d.isDragging))
            ) {
              if (
                ((a = d.current),
                (d.prevIndex = d.currIndex),
                (d.prevPos = d.currPos),
                (n = d.createSlide(t)),
                1 < c &&
                  ((i || 0 < n.index) && d.createSlide(t - 1),
                  (i || n.index < c - 1) && d.createSlide(t + 1)),
                (d.current = n),
                (d.currIndex = n.index),
                (d.currPos = n.pos),
                d.trigger("beforeShow", e),
                d.updateControls(),
                (r = g.fancybox.getTranslate(n.$slide)),
                (n.isMoved =
                  (0 !== r.left || 0 !== r.top) &&
                  !n.$slide.hasClass("fancybox-animated")),
                (n.forcedDuration = m),
                g.isNumeric(s)
                  ? (n.forcedDuration = s)
                  : (s =
                      n.opts[e ? "animationDuration" : "transitionDuration"]),
                (s = parseInt(s, 10)),
                e)
              )
                return (
                  n.opts.animationEffect &&
                    s &&
                    d.$refs.container.css("transition-duration", s + "ms"),
                  d.$refs.container.removeClass("fancybox-is-hidden"),
                  f(d.$refs.container),
                  d.$refs.container.addClass("fancybox-is-open"),
                  f(d.$refs.container),
                  n.$slide.addClass("fancybox-slide--previous"),
                  d.loadSlide(n),
                  n.$slide
                    .removeClass("fancybox-slide--previous")
                    .addClass("fancybox-slide--current"),
                  void d.preload("image")
                );
              g.each(d.slides, function (t, e) {
                g.fancybox.stop(e.$slide);
              }),
                n.$slide
                  .removeClass("fancybox-slide--next fancybox-slide--previous")
                  .addClass("fancybox-slide--current"),
                n.isMoved
                  ? ((o = Math.round(n.$slide.width())),
                    g.each(d.slides, function (t, e) {
                      var i = e.pos - n.pos;
                      g.fancybox.animate(
                        e.$slide,
                        { top: 0, left: i * o + i * e.opts.gutter },
                        s,
                        function () {
                          e.$slide
                            .removeAttr("style")
                            .removeClass(
                              "fancybox-slide--next fancybox-slide--previous"
                            ),
                            e.pos === d.currPos &&
                              ((n.isMoved = !1), d.complete());
                        }
                      );
                    }))
                  : d.$refs.stage.children().removeAttr("style"),
                n.isLoaded ? d.revealContent(n) : d.loadSlide(n),
                d.preload("image"),
                a.pos !== n.pos &&
                  ((l =
                    "fancybox-slide--" + (a.pos > n.pos ? "next" : "previous")),
                  a.$slide.removeClass(
                    "fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"
                  ),
                  (a.isComplete = !1),
                  s &&
                    (n.isMoved || n.opts.transitionEffect) &&
                    (n.isMoved
                      ? a.$slide.addClass(l)
                      : ((l =
                          "fancybox-animated " +
                          l +
                          " fancybox-fx-" +
                          n.opts.transitionEffect),
                        g.fancybox.animate(a.$slide, l, s, function () {
                          a.$slide.removeClass(l).removeAttr("style");
                        }))));
            }
          }
        },
        createSlide: function (t) {
          var e,
            i,
            s = this;
          return (
            (i = (i = t % s.group.length) < 0 ? s.group.length + i : i),
            !s.slides[t] &&
              s.group[i] &&
              ((e = g('<div class="fancybox-slide"></div>').appendTo(
                s.$refs.stage
              )),
              (s.slides[t] = g.extend(!0, {}, s.group[i], {
                pos: t,
                $slide: e,
                isLoaded: !1,
              })),
              s.updateSlide(s.slides[t])),
            s.slides[t]
          );
        },
        scaleToActual: function (t, e, i) {
          var s,
            n,
            a,
            o,
            r,
            l = this,
            d = l.current,
            c = d.$content,
            h = g.fancybox.getTranslate(d.$slide).width,
            p = g.fancybox.getTranslate(d.$slide).height,
            u = d.width,
            f = d.height;
          !l.isAnimating &&
            c &&
            "image" == d.type &&
            d.isLoaded &&
            !d.hasError &&
            (g.fancybox.stop(c),
            (l.isAnimating = !0),
            (t = t === m ? 0.5 * h : t),
            (e = e === m ? 0.5 * p : e),
            ((s = g.fancybox.getTranslate(c)).top -= g.fancybox.getTranslate(
              d.$slide
            ).top),
            (s.left -= g.fancybox.getTranslate(d.$slide).left),
            (o = u / s.width),
            (r = f / s.height),
            (n = 0.5 * h - 0.5 * u),
            (a = 0.5 * p - 0.5 * f),
            h < u &&
              (0 < (n = s.left * o - (t * o - t)) && (n = 0),
              n < h - u && (n = h - u)),
            p < f &&
              (0 < (a = s.top * r - (e * r - e)) && (a = 0),
              a < p - f && (a = p - f)),
            l.updateCursor(u, f),
            g.fancybox.animate(
              c,
              { top: a, left: n, scaleX: o, scaleY: r },
              i || 330,
              function () {
                l.isAnimating = !1;
              }
            ),
            l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop());
        },
        scaleToFit: function (t) {
          var e,
            i = this,
            s = i.current,
            n = s.$content;
          !i.isAnimating &&
            n &&
            "image" == s.type &&
            s.isLoaded &&
            !s.hasError &&
            (g.fancybox.stop(n),
            (i.isAnimating = !0),
            (e = i.getFitPos(s)),
            i.updateCursor(e.width, e.height),
            g.fancybox.animate(
              n,
              {
                top: e.top,
                left: e.left,
                scaleX: e.width / n.width(),
                scaleY: e.height / n.height(),
              },
              t || 330,
              function () {
                i.isAnimating = !1;
              }
            ));
        },
        getFitPos: function (t) {
          var e,
            i,
            s,
            n,
            a,
            o = t.$content,
            r = t.width || t.opts.width,
            l = t.height || t.opts.height,
            d = {};
          return (
            !!(t.isLoaded && o && o.length) &&
            ((n = {
              top: parseInt(t.$slide.css("paddingTop"), 10),
              right: parseInt(t.$slide.css("paddingRight"), 10),
              bottom: parseInt(t.$slide.css("paddingBottom"), 10),
              left: parseInt(t.$slide.css("paddingLeft"), 10),
            }),
            (e = parseInt(this.$refs.stage.width(), 10) - (n.left + n.right)),
            (i = parseInt(this.$refs.stage.height(), 10) - (n.top + n.bottom)),
            (r && l) || ((r = e), (l = i)),
            (s = Math.min(1, e / r, i / l)),
            (r = Math.floor(s * r)),
            (l = Math.floor(s * l)),
            "image" === t.type
              ? ((d.top = Math.floor(0.5 * (i - l)) + n.top),
                (d.left = Math.floor(0.5 * (e - r)) + n.left))
              : "video" === t.contentType &&
                (r /
                  (a =
                    t.opts.width && t.opts.height
                      ? r / l
                      : t.opts.ratio || 16 / 9) <
                l
                  ? (l = r / a)
                  : l * a < r && (r = l * a)),
            (d.width = r),
            (d.height = l),
            d)
          );
        },
        update: function () {
          var i = this;
          g.each(i.slides, function (t, e) {
            i.updateSlide(e);
          });
        },
        updateSlide: function (t, e) {
          var i = this,
            s = t && t.$content,
            n = t.width || t.opts.width,
            a = t.height || t.opts.height;
          s &&
            (n || a || "video" === t.contentType) &&
            !t.hasError &&
            (g.fancybox.stop(s),
            g.fancybox.setTranslate(s, i.getFitPos(t)),
            t.pos === i.currPos && ((i.isAnimating = !1), i.updateCursor())),
            t.$slide.trigger("refresh"),
            i.$refs.toolbar.toggleClass(
              "compensate-for-scrollbar",
              t.$slide.get(0).scrollHeight > t.$slide.get(0).clientHeight
            ),
            i.trigger("onUpdate", t);
        },
        centerSlide: function (t, e) {
          var i, s;
          this.current &&
            ((i = Math.round(t.$slide.width())),
            (s = t.pos - this.current.pos),
            g.fancybox.animate(
              t.$slide,
              { top: 0, left: s * i + s * t.opts.gutter, opacity: 1 },
              e === m ? 0 : e,
              null,
              !1
            ));
        },
        updateCursor: function (t, e) {
          var i,
            s = this,
            n = s.current,
            a = s.$refs.container.removeClass(
              "fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut"
            );
          n &&
            !s.isClosing &&
            ((i = s.isZoomable()),
            a.toggleClass("fancybox-is-zoomable", i),
            g("[data-fancybox-zoom]").prop("disabled", !i),
            i &&
            ("zoom" === n.opts.clickContent ||
              (g.isFunction(n.opts.clickContent) &&
                "zoom" === n.opts.clickContent(n)))
              ? s.isScaledDown(t, e)
                ? a.addClass("fancybox-can-zoomIn")
                : n.opts.touch
                ? a.addClass("fancybox-can-drag")
                : a.addClass("fancybox-can-zoomOut")
              : n.opts.touch &&
                "video" !== n.contentType &&
                a.addClass("fancybox-can-drag"));
        },
        isZoomable: function () {
          var t,
            e = this.current;
          if (e && !this.isClosing && "image" === e.type && !e.hasError) {
            if (!e.isLoaded) return !0;
            if (
              ((t = this.getFitPos(e)),
              e.width > t.width || e.height > t.height)
            )
              return !0;
          }
          return !1;
        },
        isScaledDown: function (t, e) {
          var i = !1,
            s = this.current,
            n = s.$content;
          return (
            t !== m && e !== m
              ? (i = t < s.width && e < s.height)
              : n &&
                (i =
                  (i = g.fancybox.getTranslate(n)).width < s.width &&
                  i.height < s.height),
            i
          );
        },
        canPan: function () {
          var t,
            e = !1,
            i = this.current;
          return (
            "image" === i.type &&
              (t = i.$content) &&
              !i.hasError &&
              ((e = this.getFitPos(i)),
              (e =
                1 < Math.abs(t.width() - e.width) ||
                1 < Math.abs(t.height() - e.height))),
            e
          );
        },
        loadSlide: function (i) {
          var t,
            e,
            s,
            n = this;
          if (!i.isLoading && !i.isLoaded) {
            switch (
              ((i.isLoading = !0),
              n.trigger("beforeLoad", i),
              (t = i.type),
              (e = i.$slide)
                .off("refresh")
                .trigger("onReset")
                .addClass(i.opts.slideClass),
              t)
            ) {
              case "image":
                n.setImage(i);
                break;
              case "iframe":
                n.setIframe(i);
                break;
              case "html":
                n.setContent(i, i.src || i.content);
                break;
              case "video":
                n.setContent(
                  i,
                  '<video class="fancybox-video" controls controlsList="nodownload"><source src="' +
                    i.src +
                    '" type="' +
                    i.opts.videoFormat +
                    "\">Your browser doesn't support HTML5 video</video"
                );
                break;
              case "inline":
                g(i.src).length ? n.setContent(i, g(i.src)) : n.setError(i);
                break;
              case "ajax":
                n.showLoading(i),
                  (s = g.ajax(
                    g.extend({}, i.opts.ajax.settings, {
                      url: i.src,
                      success: function (t, e) {
                        "success" === e && n.setContent(i, t);
                      },
                      error: function (t, e) {
                        t && "abort" !== e && n.setError(i);
                      },
                    })
                  )),
                  e.one("onReset", function () {
                    s.abort();
                  });
                break;
              default:
                n.setError(i);
            }
            return !0;
          }
        },
        setImage: function (e) {
          var t,
            i,
            s,
            n,
            a,
            o = this,
            r = e.opts.srcset || e.opts.image.srcset;
          if (
            ((e.timouts = setTimeout(function () {
              var t = e.$image;
              !e.isLoading ||
                (t && t[0].complete) ||
                e.hasError ||
                o.showLoading(e);
            }, 350)),
            r)
          ) {
            (n = c.devicePixelRatio || 1),
              (a = c.innerWidth * n),
              (s = r.split(",").map(function (t) {
                var s = {};
                return (
                  t
                    .trim()
                    .split(/\s+/)
                    .forEach(function (t, e) {
                      var i = parseInt(t.substring(0, t.length - 1), 10);
                      return 0 === e
                        ? (s.url = t)
                        : void (
                            i && ((s.value = i), (s.postfix = t[t.length - 1]))
                          );
                    }),
                  s
                );
              })).sort(function (t, e) {
                return t.value - e.value;
              });
            for (var l = 0; l < s.length; l++) {
              var d = s[l];
              if (
                ("w" === d.postfix && d.value >= a) ||
                ("x" === d.postfix && d.value >= n)
              ) {
                i = d;
                break;
              }
            }
            !i && s.length && (i = s[s.length - 1]),
              i &&
                ((e.src = i.url),
                e.width &&
                  e.height &&
                  "w" == i.postfix &&
                  ((e.height = (e.width / e.height) * i.value),
                  (e.width = i.value)),
                (e.opts.srcset = r));
          }
          (e.$content = g('<div class="fancybox-content"></div>')
            .addClass("fancybox-is-hidden")
            .appendTo(e.$slide.addClass("fancybox-slide--image"))),
            (t =
              e.opts.thumb ||
              (!(!e.opts.$thumb || !e.opts.$thumb.length) &&
                e.opts.$thumb.attr("src"))),
            !1 !== e.opts.preload &&
              e.opts.width &&
              e.opts.height &&
              t &&
              ((e.width = e.opts.width),
              (e.height = e.opts.height),
              (e.$ghost = g("<img />")
                .one("error", function () {
                  g(this).remove(), (e.$ghost = null);
                })
                .one("load", function () {
                  o.afterLoad(e);
                })
                .addClass("fancybox-image")
                .appendTo(e.$content)
                .attr("src", t))),
            o.setBigImage(e);
        },
        setBigImage: function (e) {
          var i = this,
            s = g("<img />");
          (e.$image = s
            .one("error", function () {
              i.setError(e);
            })
            .one("load", function () {
              var t;
              e.$ghost ||
                (i.resolveImageSlideSize(
                  e,
                  this.naturalWidth,
                  this.naturalHeight
                ),
                i.afterLoad(e)),
                e.timouts && (clearTimeout(e.timouts), (e.timouts = null)),
                i.isClosing ||
                  (e.opts.srcset &&
                    (((t = e.opts.sizes) && "auto" !== t) ||
                      (t =
                        (1 < e.width / e.height && 1 < n.width() / n.height()
                          ? "100"
                          : Math.round((e.width / e.height) * 100)) + "vw"),
                    s.attr("sizes", t).attr("srcset", e.opts.srcset)),
                  e.$ghost &&
                    setTimeout(function () {
                      e.$ghost && !i.isClosing && e.$ghost.hide();
                    }, Math.min(300, Math.max(1e3, e.height / 1600))),
                  i.hideLoading(e));
            })
            .addClass("fancybox-image")
            .attr("src", e.src)
            .appendTo(e.$content)),
            (s[0].complete || "complete" == s[0].readyState) &&
            s[0].naturalWidth &&
            s[0].naturalHeight
              ? s.trigger("load")
              : s[0].error && s.trigger("error");
        },
        resolveImageSlideSize: function (t, e, i) {
          var s = parseInt(t.opts.width, 10),
            n = parseInt(t.opts.height, 10);
          (t.width = e),
            (t.height = i),
            0 < s && ((t.width = s), (t.height = Math.floor((s * i) / e))),
            0 < n && ((t.width = Math.floor((n * e) / i)), (t.height = n));
        },
        setIframe: function (n) {
          var a,
            e = this,
            o = n.opts.iframe,
            t = n.$slide;
          (n.$content = g(
            '<div class="fancybox-content' +
              (o.preload ? " fancybox-is-hidden" : "") +
              '"></div>'
          )
            .css(o.css)
            .appendTo(t)),
            t.addClass("fancybox-slide--" + n.contentType),
            (n.$iframe = a =
              g(o.tpl.replace(/\{rnd\}/g, new Date().getTime()))
                .attr(o.attr)
                .appendTo(n.$content)),
            o.preload
              ? (e.showLoading(n),
                a.on("load.fb error.fb", function (t) {
                  (this.isReady = 1),
                    n.$slide.trigger("refresh"),
                    e.afterLoad(n);
                }),
                t.on("refresh.fb", function () {
                  var t,
                    e = n.$content,
                    i = o.css.width,
                    s = o.css.height;
                  if (1 === a[0].isReady) {
                    try {
                      t = a.contents().find("body");
                    } catch (t) {}
                    t &&
                      t.length &&
                      t.children().length &&
                      (e.css({ width: "", height: "" }),
                      i === m &&
                        (i = Math.ceil(
                          Math.max(t[0].clientWidth, t.outerWidth(!0))
                        )),
                      i && e.width(i),
                      s === m &&
                        (s = Math.ceil(
                          Math.max(t[0].clientHeight, t.outerHeight(!0))
                        )),
                      s && e.height(s)),
                      e.removeClass("fancybox-is-hidden");
                  }
                }))
              : this.afterLoad(n),
            a.attr("src", n.src),
            t.one("onReset", function () {
              try {
                g(this)
                  .find("iframe")
                  .hide()
                  .unbind()
                  .attr("src", "//about:blank");
              } catch (t) {}
              g(this).off("refresh.fb").empty(), (n.isLoaded = !1);
            });
        },
        setContent: function (t, e) {
          var i;
          this.isClosing ||
            (this.hideLoading(t),
            t.$content && g.fancybox.stop(t.$content),
            t.$slide.empty(),
            (i = e) && i.hasOwnProperty && i instanceof g && e.parent().length
              ? (e
                  .parent()
                  .parent(".fancybox-slide--inline")
                  .trigger("onReset"),
                (t.$placeholder = g("<div>").hide().insertAfter(e)),
                e.css("display", "inline-block"))
              : t.hasError ||
                ("string" === g.type(e) &&
                  3 ===
                    (e = g("<div>").append(g.trim(e)).contents())[0].nodeType &&
                  (e = g("<div>").html(e)),
                t.opts.filter && (e = g("<div>").html(e).find(t.opts.filter))),
            t.$slide.one("onReset", function () {
              g(this).find("video,audio").trigger("pause"),
                t.$placeholder &&
                  (t.$placeholder.after(e.hide()).remove(),
                  (t.$placeholder = null)),
                t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)),
                t.hasError || (g(this).empty(), (t.isLoaded = !1));
            }),
            g(e).appendTo(t.$slide),
            g(e).is("video,audio") &&
              (g(e).addClass("fancybox-video"),
              g(e).wrap("<div></div>"),
              (t.contentType = "video"),
              (t.opts.width = t.opts.width || g(e).attr("width")),
              (t.opts.height = t.opts.height || g(e).attr("height"))),
            (t.$content = t.$slide
              .children()
              .filter("div,form,main,video,audio")
              .first()
              .addClass("fancybox-content")),
            t.$slide.addClass("fancybox-slide--" + t.contentType),
            this.afterLoad(t));
        },
        setError: function (t) {
          (t.hasError = !0),
            t.$slide
              .trigger("onReset")
              .removeClass("fancybox-slide--" + t.contentType)
              .addClass("fancybox-slide--error"),
            (t.contentType = "html"),
            this.setContent(t, this.translate(t, t.opts.errorTpl)),
            t.pos === this.currPos && (this.isAnimating = !1);
        },
        showLoading: function (t) {
          (t = t || this.current) &&
            !t.$spinner &&
            (t.$spinner = g(
              this.translate(this, this.opts.spinnerTpl)
            ).appendTo(t.$slide));
        },
        hideLoading: function (t) {
          (t = t || this.current) &&
            t.$spinner &&
            (t.$spinner.remove(), delete t.$spinner);
        },
        afterLoad: function (t) {
          var e = this;
          e.isClosing ||
            ((t.isLoading = !1),
            (t.isLoaded = !0),
            e.trigger("afterLoad", t),
            e.hideLoading(t),
            t.pos === e.currPos && e.updateCursor(),
            !t.opts.smallBtn ||
              (t.$smallBtn && t.$smallBtn.length) ||
              (t.$smallBtn = g(
                e.translate(t, t.opts.btnTpl.smallBtn)
              ).prependTo(t.$content)),
            t.opts.protect &&
              t.$content &&
              !t.hasError &&
              (t.$content.on("contextmenu.fb", function (t) {
                return 2 == t.button && t.preventDefault(), !0;
              }),
              "image" === t.type &&
                g('<div class="fancybox-spaceball"></div>').appendTo(
                  t.$content
                )),
            e.revealContent(t));
        },
        revealContent: function (e) {
          var t,
            i,
            s,
            n,
            a = this,
            o = e.$slide,
            r = !1,
            l = !1;
          return (
            (t = e.opts[a.firstRun ? "animationEffect" : "transitionEffect"]),
            (s =
              e.opts[a.firstRun ? "animationDuration" : "transitionDuration"]),
            (s = parseInt(e.forcedDuration === m ? s : e.forcedDuration, 10)),
            e.pos === a.currPos &&
              (e.isComplete ? (t = !1) : (a.isAnimating = !0)),
            (!e.isMoved && e.pos === a.currPos && s) || (t = !1),
            "zoom" === t &&
              (e.pos === a.currPos &&
              s &&
              "image" === e.type &&
              !e.hasError &&
              (l = a.getThumbPos(e))
                ? (r = a.getFitPos(e))
                : (t = "fade")),
            "zoom" === t
              ? ((r.scaleX = r.width / l.width),
                (r.scaleY = r.height / l.height),
                "auto" == (n = e.opts.zoomOpacity) &&
                  (n = 0.1 < Math.abs(e.width / e.height - l.width / l.height)),
                n && ((l.opacity = 0.1), (r.opacity = 1)),
                g.fancybox.setTranslate(
                  e.$content.removeClass("fancybox-is-hidden"),
                  l
                ),
                f(e.$content),
                void g.fancybox.animate(e.$content, r, s, function () {
                  (a.isAnimating = !1), a.complete();
                }))
              : (a.updateSlide(e),
                t
                  ? (g.fancybox.stop(o),
                    (i =
                      "fancybox-animated fancybox-slide--" +
                      (e.pos >= a.prevPos ? "next" : "previous") +
                      " fancybox-fx-" +
                      t),
                    o
                      .removeAttr("style")
                      .removeClass(
                        "fancybox-slide--current fancybox-slide--next fancybox-slide--previous"
                      )
                      .addClass(i),
                    e.$content.removeClass("fancybox-is-hidden"),
                    f(o),
                    void g.fancybox.animate(
                      o,
                      "fancybox-slide--current",
                      s,
                      function (t) {
                        o.removeClass(i).removeAttr("style"),
                          e.pos === a.currPos && a.complete();
                      },
                      !0
                    ))
                  : (f(o),
                    e.$content.removeClass("fancybox-is-hidden"),
                    void (e.pos === a.currPos && a.complete())))
          );
        },
        getThumbPos: function (t) {
          var e,
            i = !1,
            s = t.opts.$thumb,
            n = s && s.length && s[0].ownerDocument === o ? s.offset() : 0;
          return (
            n &&
              (function (t) {
                for (
                  var e = t[0], s = e.getBoundingClientRect(), i = [];
                  null !== e.parentElement;

                )
                  ("hidden" !== g(e.parentElement).css("overflow") &&
                    "auto" !== g(e.parentElement).css("overflow")) ||
                    i.push(e.parentElement.getBoundingClientRect()),
                    (e = e.parentElement);
                return (
                  i.every(function (t) {
                    var e =
                        Math.min(s.right, t.right) - Math.max(s.left, t.left),
                      i = Math.min(s.bottom, t.bottom) - Math.max(s.top, t.top);
                    return 0 < e && 0 < i;
                  }) &&
                  0 < s.bottom &&
                  0 < s.right &&
                  s.left < g(c).width() &&
                  s.top < g(c).height()
                );
              })(s) &&
              ((e = this.$refs.stage.offset()),
              (i = {
                top: n.top - e.top + parseFloat(s.css("border-top-width") || 0),
                left:
                  n.left - e.left + parseFloat(s.css("border-left-width") || 0),
                width: s.width(),
                height: s.height(),
                scaleX: 1,
                scaleY: 1,
              })),
            i
          );
        },
        complete: function () {
          var i = this,
            t = i.current,
            s = {};
          !t.isMoved &&
            t.isLoaded &&
            (t.isComplete ||
              ((t.isComplete = !0),
              t.$slide.siblings().trigger("onReset"),
              i.preload("inline"),
              f(t.$slide),
              t.$slide.addClass("fancybox-slide--complete"),
              g.each(i.slides, function (t, e) {
                e.pos >= i.currPos - 1 && e.pos <= i.currPos + 1
                  ? (s[e.pos] = e)
                  : e && (g.fancybox.stop(e.$slide), e.$slide.off().remove());
              }),
              (i.slides = s)),
            (i.isAnimating = !1),
            i.updateCursor(),
            i.trigger("afterShow"),
            t.$slide
              .find("video,audio")
              .filter(":visible:first")
              .trigger("play"),
            (g(o.activeElement).is("[disabled]") ||
              (t.opts.autoFocus && "image" != t.type && "iframe" !== t.type)) &&
              i.focus());
        },
        preload: function (t) {
          var e = this,
            i = e.slides[e.currPos + 1],
            s = e.slides[e.currPos - 1];
          i && i.type === t && e.loadSlide(i),
            s && s.type === t && e.loadSlide(s);
        },
        focus: function () {
          var t,
            e = this.current;
          this.isClosing ||
            (e &&
              e.isComplete &&
              e.$content &&
              ((t = e.$content.find("input[autofocus]:enabled:visible:first"))
                .length ||
                (t = e.$content
                  .find("button,:input,[tabindex],a")
                  .filter(":enabled:visible:first")),
              (t = t && t.length ? t : e.$content).trigger("focus")));
        },
        activate: function () {
          var e = this;
          g(".fancybox-container").each(function () {
            var t = g(this).data("FancyBox");
            t &&
              t.id !== e.id &&
              !t.isClosing &&
              (t.trigger("onDeactivate"), t.removeEvents(), (t.isVisible = !1));
          }),
            (e.isVisible = !0),
            (e.current || e.isIdle) && (e.update(), e.updateControls()),
            e.trigger("onActivate"),
            e.addEvents();
        },
        close: function (t, e) {
          var i,
            s,
            n,
            a,
            o,
            r,
            l,
            d = this,
            c = d.current,
            h = function () {
              d.cleanUp(t);
            };
          return (
            !d.isClosing &&
            (!(d.isClosing = !0) === d.trigger("beforeClose", t)
              ? ((d.isClosing = !1),
                p(function () {
                  d.update();
                }),
                !1)
              : (d.removeEvents(),
                c.timouts && clearTimeout(c.timouts),
                (n = c.$content),
                (i = c.opts.animationEffect),
                (s = g.isNumeric(e) ? e : i ? c.opts.animationDuration : 0),
                c.$slide
                  .off(u)
                  .removeClass(
                    "fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"
                  ),
                c.$slide.siblings().trigger("onReset").remove(),
                s &&
                  d.$refs.container
                    .removeClass("fancybox-is-open")
                    .addClass("fancybox-is-closing"),
                d.hideLoading(c),
                d.hideControls(),
                d.updateCursor(),
                "zoom" !== i ||
                  (!0 !== t &&
                    n &&
                    s &&
                    "image" === c.type &&
                    !c.hasError &&
                    (l = d.getThumbPos(c))) ||
                  (i = "fade"),
                "zoom" === i
                  ? (g.fancybox.stop(n),
                    (r = {
                      top: (a = g.fancybox.getTranslate(n)).top,
                      left: a.left,
                      scaleX: a.width / l.width,
                      scaleY: a.height / l.height,
                      width: l.width,
                      height: l.height,
                    }),
                    "auto" == (o = c.opts.zoomOpacity) &&
                      (o =
                        0.1 <
                        Math.abs(c.width / c.height - l.width / l.height)),
                    o && (l.opacity = 0),
                    g.fancybox.setTranslate(n, r),
                    f(n),
                    g.fancybox.animate(n, l, s, h))
                  : i && s
                  ? !0 === t
                    ? setTimeout(h, s)
                    : g.fancybox.animate(
                        c.$slide.removeClass("fancybox-slide--current"),
                        "fancybox-animated fancybox-slide--previous fancybox-fx-" +
                          i,
                        s,
                        h
                      )
                  : h(),
                !0))
          );
        },
        cleanUp: function (t) {
          var e,
            i = this,
            s = g("body");
          i.current.$slide.trigger("onReset"),
            i.$refs.container.empty().remove(),
            i.trigger("afterClose", t),
            i.$lastFocus &&
              i.current.opts.backFocus &&
              i.$lastFocus.trigger("focus"),
            (i.current = null),
            (e = g.fancybox.getInstance())
              ? e.activate()
              : (s.removeClass("fancybox-active compensate-for-scrollbar"),
                g("#fancybox-style-noscroll").remove());
        },
        trigger: function (t, e) {
          var i,
            s = Array.prototype.slice.call(arguments, 1),
            n = this,
            a = e && e.opts ? e : n.current;
          return (
            a ? s.unshift(a) : (a = n),
            s.unshift(n),
            g.isFunction(a.opts[t]) && (i = a.opts[t].apply(a, s)),
            !1 === i
              ? i
              : void ("afterClose" !== t && n.$refs
                  ? n.$refs.container.trigger(t + ".fb", s)
                  : r.trigger(t + ".fb", s))
          );
        },
        updateControls: function (t) {
          var e = this,
            i = e.current,
            s = i.index,
            n = i.opts.caption,
            a = e.$refs.container,
            o = e.$refs.caption;
          i.$slide.trigger("refresh"),
            (e.$caption = n && n.length ? o.html(n) : null),
            e.isHiddenControls || e.isIdle || e.showControls(),
            a.find("[data-fancybox-count]").html(e.group.length),
            a.find("[data-fancybox-index]").html(s + 1),
            a
              .find("[data-fancybox-prev]")
              .toggleClass("disabled", !i.opts.loop && s <= 0),
            a
              .find("[data-fancybox-next]")
              .toggleClass("disabled", !i.opts.loop && s >= e.group.length - 1),
            "image" === i.type
              ? a
                  .find("[data-fancybox-zoom]")
                  .show()
                  .end()
                  .find("[data-fancybox-download]")
                  .attr("href", i.opts.image.src || i.src)
                  .show()
              : i.opts.toolbar &&
                a.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
        },
        hideControls: function () {
          (this.isHiddenControls = !0),
            this.$refs.container.removeClass(
              "fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav"
            );
        },
        showControls: function () {
          var t = this,
            e = t.current ? t.current.opts : t.opts,
            i = t.$refs.container;
          (t.isHiddenControls = !1),
            (t.idleSecondsCounter = 0),
            i
              .toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons))
              .toggleClass(
                "fancybox-show-infobar",
                !!(e.infobar && 1 < t.group.length)
              )
              .toggleClass(
                "fancybox-show-nav",
                !!(e.arrows && 1 < t.group.length)
              )
              .toggleClass("fancybox-is-modal", !!e.modal),
            t.$caption
              ? i.addClass("fancybox-show-caption ")
              : i.removeClass("fancybox-show-caption");
        },
        toggleControls: function () {
          this.isHiddenControls ? this.showControls() : this.hideControls();
        },
      }),
        (g.fancybox = {
          version: "3.3.5",
          defaults: t,
          getInstance: function (t) {
            var e = g(
                '.fancybox-container:not(".fancybox-is-closing"):last'
              ).data("FancyBox"),
              i = Array.prototype.slice.call(arguments, 1);
            return (
              e instanceof s &&
              ("string" === g.type(t)
                ? e[t].apply(e, i)
                : "function" === g.type(t) && t.apply(e, i),
              e)
            );
          },
          open: function (t, e, i) {
            return new s(t, e, i);
          },
          close: function (t) {
            var e = this.getInstance();
            e && (e.close(), !0 === t && this.close());
          },
          destroy: function () {
            this.close(!0), r.add("body").off("click.fb-start", "**");
          },
          isMobile:
            o.createTouch !== m &&
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            ),
          use3d:
            ((e = o.createElement("div")),
            c.getComputedStyle &&
              c.getComputedStyle(e) &&
              c.getComputedStyle(e).getPropertyValue("transform") &&
              !(o.documentMode && o.documentMode < 11)),
          getTranslate: function (t) {
            var e;
            return (
              !(!t || !t.length) && {
                top: (e = t[0].getBoundingClientRect()).top || 0,
                left: e.left || 0,
                width: e.width,
                height: e.height,
                opacity: parseFloat(t.css("opacity")),
              }
            );
          },
          setTranslate: function (t, e) {
            var i = "",
              s = {};
            if (t && e)
              return (
                (e.left === m && e.top === m) ||
                  ((i =
                    (e.left === m ? t.position().left : e.left) +
                    "px, " +
                    (e.top === m ? t.position().top : e.top) +
                    "px"),
                  (i = this.use3d
                    ? "translate3d(" + i + ", 0px)"
                    : "translate(" + i + ")")),
                e.scaleX !== m &&
                  e.scaleY !== m &&
                  (i =
                    (i.length ? i + " " : "") +
                    "scale(" +
                    e.scaleX +
                    ", " +
                    e.scaleY +
                    ")"),
                i.length && (s.transform = i),
                e.opacity !== m && (s.opacity = e.opacity),
                e.width !== m && (s.width = e.width),
                e.height !== m && (s.height = e.height),
                t.css(s)
              );
          },
          animate: function (e, i, t, s, n) {
            var a = !1;
            g.isFunction(t) && ((s = t), (t = null)),
              g.isPlainObject(i) || e.removeAttr("style"),
              g.fancybox.stop(e),
              e.on(u, function (t) {
                (!t ||
                  !t.originalEvent ||
                  (e.is(t.originalEvent.target) &&
                    "z-index" != t.originalEvent.propertyName)) &&
                  (g.fancybox.stop(e),
                  a && g.fancybox.setTranslate(e, a),
                  g.isPlainObject(i)
                    ? !1 === n && e.removeAttr("style")
                    : !0 !== n && e.removeClass(i),
                  g.isFunction(s) && s(t));
              }),
              g.isNumeric(t) && e.css("transition-duration", t + "ms"),
              g.isPlainObject(i)
                ? (i.scaleX !== m &&
                    i.scaleY !== m &&
                    ((a = g.extend({}, i, {
                      width: e.width() * i.scaleX,
                      height: e.height() * i.scaleY,
                      scaleX: 1,
                      scaleY: 1,
                    })),
                    delete i.width,
                    delete i.height,
                    e.parent().hasClass("fancybox-slide--image") &&
                      e.parent().addClass("fancybox-is-scaling")),
                  g.fancybox.setTranslate(e, i))
                : e.addClass(i),
              e.data(
                "timer",
                setTimeout(function () {
                  e.trigger("transitionend");
                }, t + 16)
              );
          },
          stop: function (t) {
            t &&
              t.length &&
              (clearTimeout(t.data("timer")),
              t.off("transitionend").css("transition-duration", ""),
              t.parent().removeClass("fancybox-is-scaling"));
          },
        }),
        (g.fn.fancybox = function (t) {
          var e;
          return (
            (e = (t = t || {}).selector || !1)
              ? g("body")
                  .off("click.fb-start", e)
                  .on("click.fb-start", e, { options: t }, i)
              : this.off("click.fb-start").on(
                  "click.fb-start",
                  { items: this, options: t },
                  i
                ),
            this
          );
        }),
        r.on("click.fb-start", "[data-fancybox]", i),
        r.on("click.fb-start", "[data-trigger]", function (t) {
          i(t, {
            $target: g(
              '[data-fancybox="' +
                g(t.currentTarget).attr("data-trigger") +
                '"]'
            ).eq(g(t.currentTarget).attr("data-index") || 0),
            $trigger: g(this),
          });
        });
    }
    var e;
  })(window, document, window.jQuery || jQuery),
  (function (u) {
    "use strict";
    var f = function (i, t, e) {
        if (i)
          return (
            (e = e || ""),
            "object" === u.type(e) && (e = u.param(e, !0)),
            u.each(t, function (t, e) {
              i = i.replace("$" + t, e || "");
            }),
            e.length && (i += (0 < i.indexOf("?") ? "&" : "?") + e),
            i
          );
      },
      s = {
        youtube: {
          matcher:
            /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "transparent",
            enablejsapi: 1,
            html5: 1,
          },
          paramPlace: 8,
          type: "iframe",
          url: "//www.youtube.com/embed/$4",
          thumb: "//img.youtube.com/vi/$4/hqdefault.jpg",
        },
        vimeo: {
          matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1,
            api: 1,
          },
          paramPlace: 3,
          type: "iframe",
          url: "//player.vimeo.com/video/$2",
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: "image",
          url: "//$1/p/$2/media/?size=l",
        },
        gmap_place: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
          type: "iframe",
          url: function (t) {
            return (
              "//maps.google." +
              t[2] +
              "/?ll=" +
              (t[9]
                ? t[9] +
                  "&z=" +
                  Math.floor(t[10]) +
                  (t[12] ? t[12].replace(/^\//, "&") : "")
                : t[12] + ""
              ).replace(/\?/, "&") +
              "&output=" +
              (t[12] && 0 < t[12].indexOf("layer=c") ? "svembed" : "embed")
            );
          },
        },
        gmap_search: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
          type: "iframe",
          url: function (t) {
            return (
              "//maps.google." +
              t[2] +
              "/maps?q=" +
              t[5].replace("query=", "q=").replace("api=1", "") +
              "&output=embed"
            );
          },
        },
      };
    u(document).on("objectNeedsType.fb", function (t, e, n) {
      var i,
        a,
        o,
        r,
        l,
        d,
        c,
        h = n.src || "",
        p = !1;
      (i = u.extend(!0, {}, s, n.opts.media)),
        u.each(i, function (t, e) {
          if ((o = h.match(e.matcher))) {
            if (
              ((p = e.type), (c = t), (d = {}), e.paramPlace && o[e.paramPlace])
            ) {
              "?" == (l = o[e.paramPlace])[0] && (l = l.substring(1)),
                (l = l.split("&"));
              for (var i = 0; i < l.length; ++i) {
                var s = l[i].split("=", 2);
                2 == s.length &&
                  (d[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")));
              }
            }
            return (
              (r = u.extend(!0, {}, e.params, n.opts[t], d)),
              (h =
                "function" === u.type(e.url)
                  ? e.url.call(this, o, r, n)
                  : f(e.url, o, r)),
              (a =
                "function" === u.type(e.thumb)
                  ? e.thumb.call(this, o, r, n)
                  : f(e.thumb, o)),
              "youtube" === t
                ? (h = h.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, i, s) {
                    return (
                      "&start=" +
                      ((i ? 60 * parseInt(i, 10) : 0) + parseInt(s, 10))
                    );
                  }))
                : "vimeo" === t && (h = h.replace("&%23", "#")),
              !1
            );
          }
        }),
        p
          ? (n.opts.thumb ||
              (n.opts.$thumb && n.opts.$thumb.length) ||
              (n.opts.thumb = a),
            "iframe" === p &&
              (n.opts = u.extend(!0, n.opts, {
                iframe: { preload: !1, attr: { scrolling: "no" } },
              })),
            u.extend(n, {
              type: p,
              src: h,
              origSrc: n.src,
              contentSource: c,
              contentType:
                "image" === p
                  ? "image"
                  : "gmap_place" == c || "gmap_search" == c
                  ? "map"
                  : "video",
            }))
          : h && (n.type = n.opts.defaultType);
    });
  })(window.jQuery || jQuery),
  (function (g, r, m) {
    "use strict";
    var v =
        g.requestAnimationFrame ||
        g.webkitRequestAnimationFrame ||
        g.mozRequestAnimationFrame ||
        g.oRequestAnimationFrame ||
        function (t) {
          return g.setTimeout(t, 1e3 / 60);
        },
      b =
        g.cancelAnimationFrame ||
        g.webkitCancelAnimationFrame ||
        g.mozCancelAnimationFrame ||
        g.oCancelAnimationFrame ||
        function (t) {
          g.clearTimeout(t);
        },
      c = function (t) {
        var e = [];
        for (var i in (t =
          (t = t.originalEvent || t || g.e).touches && t.touches.length
            ? t.touches
            : t.changedTouches && t.changedTouches.length
            ? t.changedTouches
            : [t]))
          t[i].pageX
            ? e.push({ x: t[i].pageX, y: t[i].pageY })
            : t[i].clientX && e.push({ x: t[i].clientX, y: t[i].clientY });
        return e;
      },
      y = function (t, e, i) {
        return e && t
          ? "x" === i
            ? t.x - e.x
            : "y" === i
            ? t.y - e.y
            : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
          : 0;
      },
      l = function (t) {
        if (
          t.is(
            'a,area,button,[role="button"],input,label,select,summary,textarea,video,audio'
          ) ||
          m.isFunction(t.get(0).onclick) ||
          t.data("selectable")
        )
          return !0;
        for (var e = 0, i = t[0].attributes, s = i.length; e < s; e++)
          if ("data-fancybox-" === i[e].nodeName.substr(0, 14)) return !0;
        return !1;
      },
      d = function (t) {
        for (
          var e = !1;
          ((i = t.get(0)),
          void 0,
          (s = g.getComputedStyle(i)["overflow-y"]),
          (n = g.getComputedStyle(i)["overflow-x"]),
          (a =
            ("scroll" === s || "auto" === s) &&
            i.scrollHeight > i.clientHeight),
          (o =
            ("scroll" === n || "auto" === n) && i.scrollWidth > i.clientWidth),
          !(e = a || o)) &&
          (t = t.parent()).length &&
          !t.hasClass("fancybox-stage") &&
          !t.is("body");

        );
        var i, s, n, a, o;
        return e;
      },
      i = function (t) {
        var e = this;
        (e.instance = t),
          (e.$bg = t.$refs.bg),
          (e.$stage = t.$refs.stage),
          (e.$container = t.$refs.container),
          e.destroy(),
          e.$container.on(
            "touchstart.fb.touch mousedown.fb.touch",
            m.proxy(e, "ontouchstart")
          );
      };
    (i.prototype.destroy = function () {
      this.$container.off(".fb.touch");
    }),
      (i.prototype.ontouchstart = function (t) {
        var e = this,
          i = m(t.target),
          s = e.instance,
          n = s.current,
          a = n.$content,
          o = "touchstart" == t.type;
        if (
          (o && e.$container.off("mousedown.fb.touch"),
          (!t.originalEvent || 2 != t.originalEvent.button) &&
            i.length &&
            !l(i) &&
            !l(i.parent()) &&
            (i.is("img") ||
              !(t.originalEvent.clientX > i[0].clientWidth + i.offset().left)))
        ) {
          if (!n || s.isAnimating || s.isClosing)
            return t.stopPropagation(), void t.preventDefault();
          if (((e.realPoints = e.startPoints = c(t)), e.startPoints.length)) {
            if (
              (t.stopPropagation(),
              (e.startEvent = t),
              (e.canTap = !0),
              (e.$target = i),
              (e.$content = a),
              (e.opts = n.opts.touch),
              (e.isPanning = !1),
              (e.isSwiping = !1),
              (e.isZooming = !1),
              (e.isScrolling = !1),
              (e.startTime = new Date().getTime()),
              (e.distanceX = e.distanceY = e.distance = 0),
              (e.canvasWidth = Math.round(n.$slide[0].clientWidth)),
              (e.canvasHeight = Math.round(n.$slide[0].clientHeight)),
              (e.contentLastPos = null),
              (e.contentStartPos = m.fancybox.getTranslate(e.$content) || {
                top: 0,
                left: 0,
              }),
              (e.sliderStartPos =
                e.sliderLastPos || m.fancybox.getTranslate(n.$slide)),
              (e.stagePos = m.fancybox.getTranslate(s.$refs.stage)),
              (e.sliderStartPos.top -= e.stagePos.top),
              (e.sliderStartPos.left -= e.stagePos.left),
              (e.contentStartPos.top -= e.stagePos.top),
              (e.contentStartPos.left -= e.stagePos.left),
              m(r)
                .off(".fb.touch")
                .on(
                  o
                    ? "touchend.fb.touch touchcancel.fb.touch"
                    : "mouseup.fb.touch mouseleave.fb.touch",
                  m.proxy(e, "ontouchend")
                )
                .on(
                  o ? "touchmove.fb.touch" : "mousemove.fb.touch",
                  m.proxy(e, "ontouchmove")
                ),
              m.fancybox.isMobile &&
                r.addEventListener("scroll", e.onscroll, !0),
              (!e.opts && !s.canPan()) ||
                (!i.is(e.$stage) && !e.$stage.find(i).length))
            )
              return void (i.is(".fancybox-image") && t.preventDefault());
            (m.fancybox.isMobile && (d(i) || d(i.parent()))) ||
              t.preventDefault(),
              (1 === e.startPoints.length || n.hasError) &&
                (e.instance.canPan()
                  ? (m.fancybox.stop(e.$content),
                    e.$content.css("transition-duration", ""),
                    (e.isPanning = !0))
                  : (e.isSwiping = !0),
                e.$container.addClass("fancybox-controls--isGrabbing")),
              2 === e.startPoints.length &&
                "image" === n.type &&
                (n.isLoaded || n.$ghost) &&
                ((e.canTap = !1),
                (e.isSwiping = !1),
                (e.isPanning = !1),
                (e.isZooming = !0),
                m.fancybox.stop(e.$content),
                e.$content.css("transition-duration", ""),
                (e.centerPointStartX =
                  0.5 * (e.startPoints[0].x + e.startPoints[1].x) -
                  m(g).scrollLeft()),
                (e.centerPointStartY =
                  0.5 * (e.startPoints[0].y + e.startPoints[1].y) -
                  m(g).scrollTop()),
                (e.percentageOfImageAtPinchPointX =
                  (e.centerPointStartX - e.contentStartPos.left) /
                  e.contentStartPos.width),
                (e.percentageOfImageAtPinchPointY =
                  (e.centerPointStartY - e.contentStartPos.top) /
                  e.contentStartPos.height),
                (e.startDistanceBetweenFingers = y(
                  e.startPoints[0],
                  e.startPoints[1]
                )));
          }
        }
      }),
      (i.prototype.onscroll = function (t) {
        (this.isScrolling = !0),
          r.removeEventListener("scroll", this.onscroll, !0);
      }),
      (i.prototype.ontouchmove = function (t) {
        var e = this,
          i = m(t.target);
        return void 0 !== t.originalEvent.buttons &&
          0 === t.originalEvent.buttons
          ? void e.ontouchend(t)
          : e.isScrolling || (!i.is(e.$stage) && !e.$stage.find(i).length)
          ? void (e.canTap = !1)
          : ((e.newPoints = c(t)),
            void (
              (e.opts || e.instance.canPan()) &&
              e.newPoints.length &&
              e.newPoints.length &&
              ((e.isSwiping && !0 === e.isSwiping) || t.preventDefault(),
              (e.distanceX = y(e.newPoints[0], e.startPoints[0], "x")),
              (e.distanceY = y(e.newPoints[0], e.startPoints[0], "y")),
              (e.distance = y(e.newPoints[0], e.startPoints[0])),
              0 < e.distance &&
                (e.isSwiping
                  ? e.onSwipe(t)
                  : e.isPanning
                  ? e.onPan()
                  : e.isZooming && e.onZoom()))
            ));
      }),
      (i.prototype.onSwipe = function (t) {
        var e,
          s = this,
          i = s.isSwiping,
          n = s.sliderStartPos.left || 0;
        if (!0 !== i)
          "x" == i &&
            (0 < s.distanceX &&
            (s.instance.group.length < 2 ||
              (0 === s.instance.current.index && !s.instance.current.opts.loop))
              ? (n += Math.pow(s.distanceX, 0.8))
              : s.distanceX < 0 &&
                (s.instance.group.length < 2 ||
                  (s.instance.current.index === s.instance.group.length - 1 &&
                    !s.instance.current.opts.loop))
              ? (n -= Math.pow(-s.distanceX, 0.8))
              : (n += s.distanceX)),
            (s.sliderLastPos = {
              top: "x" == i ? 0 : s.sliderStartPos.top + s.distanceY,
              left: n,
            }),
            s.requestId && (b(s.requestId), (s.requestId = null)),
            (s.requestId = v(function () {
              s.sliderLastPos &&
                (m.each(s.instance.slides, function (t, e) {
                  var i = e.pos - s.instance.currPos;
                  m.fancybox.setTranslate(e.$slide, {
                    top: s.sliderLastPos.top,
                    left:
                      s.sliderLastPos.left +
                      i * s.canvasWidth +
                      i * e.opts.gutter,
                  });
                }),
                s.$container.addClass("fancybox-is-sliding"));
            }));
        else if (10 < Math.abs(s.distance)) {
          if (
            ((s.canTap = !1),
            s.instance.group.length < 2 && s.opts.vertical
              ? (s.isSwiping = "y")
              : s.instance.isDragging ||
                !1 === s.opts.vertical ||
                ("auto" === s.opts.vertical && 800 < m(g).width())
              ? (s.isSwiping = "x")
              : ((e = Math.abs(
                  (180 * Math.atan2(s.distanceY, s.distanceX)) / Math.PI
                )),
                (s.isSwiping = 45 < e && e < 135 ? "y" : "x")),
            (s.canTap = !1),
            "y" === s.isSwiping &&
              m.fancybox.isMobile &&
              (d(s.$target) || d(s.$target.parent())))
          )
            return void (s.isScrolling = !0);
          (s.instance.isDragging = s.isSwiping),
            (s.startPoints = s.newPoints),
            m.each(s.instance.slides, function (t, e) {
              m.fancybox.stop(e.$slide),
                e.$slide.css("transition-duration", ""),
                (e.inTransition = !1),
                e.pos === s.instance.current.pos &&
                  (s.sliderStartPos.left =
                    m.fancybox.getTranslate(e.$slide).left -
                    m.fancybox.getTranslate(s.instance.$refs.stage).left);
            }),
            s.instance.SlideShow &&
              s.instance.SlideShow.isActive &&
              s.instance.SlideShow.stop();
        }
      }),
      (i.prototype.onPan = function () {
        var t = this;
        return y(t.newPoints[0], t.realPoints[0]) <
          (m.fancybox.isMobile ? 10 : 5)
          ? void (t.startPoints = t.newPoints)
          : ((t.canTap = !1),
            (t.contentLastPos = t.limitMovement()),
            t.requestId && (b(t.requestId), (t.requestId = null)),
            void (t.requestId = v(function () {
              m.fancybox.setTranslate(t.$content, t.contentLastPos);
            })));
      }),
      (i.prototype.limitMovement = function () {
        var t,
          e,
          i,
          s,
          n,
          a,
          o = this,
          r = o.canvasWidth,
          l = o.canvasHeight,
          d = o.distanceX,
          c = o.distanceY,
          h = o.contentStartPos,
          p = h.left,
          u = h.top,
          f = h.width,
          g = h.height;
        return (
          (n = r < f ? p + d : p),
          (a = u + c),
          (t = Math.max(0, 0.5 * r - 0.5 * f)),
          (e = Math.max(0, 0.5 * l - 0.5 * g)),
          (i = Math.min(r - f, 0.5 * r - 0.5 * f)),
          (s = Math.min(l - g, 0.5 * l - 0.5 * g)),
          0 < d && t < n && (n = t - 1 + Math.pow(-t + p + d, 0.8) || 0),
          d < 0 && n < i && (n = i + 1 - Math.pow(i - p - d, 0.8) || 0),
          0 < c && e < a && (a = e - 1 + Math.pow(-e + u + c, 0.8) || 0),
          c < 0 && a < s && (a = s + 1 - Math.pow(s - u - c, 0.8) || 0),
          { top: a, left: n }
        );
      }),
      (i.prototype.limitPosition = function (t, e, i, s) {
        var n = this.canvasWidth,
          a = this.canvasHeight;
        return (
          n < i
            ? (t = (t = 0 < t ? 0 : t) < n - i ? n - i : t)
            : (t = Math.max(0, n / 2 - i / 2)),
          a < s
            ? (e = (e = 0 < e ? 0 : e) < a - s ? a - s : e)
            : (e = Math.max(0, a / 2 - s / 2)),
          { top: e, left: t }
        );
      }),
      (i.prototype.onZoom = function () {
        var t = this,
          e = t.contentStartPos,
          i = e.width,
          s = e.height,
          n = e.left,
          a = e.top,
          o = y(t.newPoints[0], t.newPoints[1]) / t.startDistanceBetweenFingers,
          r = Math.floor(i * o),
          l = Math.floor(s * o),
          d = (i - r) * t.percentageOfImageAtPinchPointX,
          c = (s - l) * t.percentageOfImageAtPinchPointY,
          h = (t.newPoints[0].x + t.newPoints[1].x) / 2 - m(g).scrollLeft(),
          p = (t.newPoints[0].y + t.newPoints[1].y) / 2 - m(g).scrollTop(),
          u = h - t.centerPointStartX,
          f = {
            top: a + (c + (p - t.centerPointStartY)),
            left: n + (d + u),
            scaleX: o,
            scaleY: o,
          };
        (t.canTap = !1),
          (t.newWidth = r),
          (t.newHeight = l),
          (t.contentLastPos = f),
          t.requestId && (b(t.requestId), (t.requestId = null)),
          (t.requestId = v(function () {
            m.fancybox.setTranslate(t.$content, t.contentLastPos);
          }));
      }),
      (i.prototype.ontouchend = function (t) {
        var e = this,
          i = Math.max(new Date().getTime() - e.startTime, 1),
          s = e.isSwiping,
          n = e.isPanning,
          a = e.isZooming,
          o = e.isScrolling;
        return (
          (e.endPoints = c(t)),
          e.$container.removeClass("fancybox-controls--isGrabbing"),
          m(r).off(".fb.touch"),
          r.removeEventListener("scroll", e.onscroll, !0),
          e.requestId && (b(e.requestId), (e.requestId = null)),
          (e.isSwiping = !1),
          (e.isPanning = !1),
          (e.isZooming = !1),
          (e.isScrolling = !1),
          (e.instance.isDragging = !1),
          e.canTap
            ? e.onTap(t)
            : ((e.speed = 366),
              (e.velocityX = (e.distanceX / i) * 0.5),
              (e.velocityY = (e.distanceY / i) * 0.5),
              (e.speedX = Math.max(
                0.5 * e.speed,
                Math.min(1.5 * e.speed, (1 / Math.abs(e.velocityX)) * e.speed)
              )),
              void (n
                ? e.endPanning()
                : a
                ? e.endZooming()
                : e.endSwiping(s, o)))
        );
      }),
      (i.prototype.endSwiping = function (t, e) {
        var i = this,
          s = !1,
          n = i.instance.group.length;
        (i.sliderLastPos = null),
          "y" == t && !e && 50 < Math.abs(i.distanceY)
            ? (m.fancybox.animate(
                i.instance.current.$slide,
                {
                  top: i.sliderStartPos.top + i.distanceY + 150 * i.velocityY,
                  opacity: 0,
                },
                200
              ),
              (s = i.instance.close(!0, 200)))
            : "x" == t && 50 < i.distanceX && 1 < n
            ? (s = i.instance.previous(i.speedX))
            : "x" == t &&
              i.distanceX < -50 &&
              1 < n &&
              (s = i.instance.next(i.speedX)),
          !1 !== s ||
            ("x" != t && "y" != t) ||
            (e || n < 2
              ? i.instance.centerSlide(i.instance.current, 150)
              : i.instance.jumpTo(i.instance.current.index)),
          i.$container.removeClass("fancybox-is-sliding");
      }),
      (i.prototype.endPanning = function () {
        var t,
          e,
          i,
          s = this;
        s.contentLastPos &&
          (!1 === s.opts.momentum
            ? ((t = s.contentLastPos.left), (e = s.contentLastPos.top))
            : ((t = s.contentLastPos.left + s.velocityX * s.speed),
              (e = s.contentLastPos.top + s.velocityY * s.speed)),
          ((i = s.limitPosition(
            t,
            e,
            s.contentStartPos.width,
            s.contentStartPos.height
          )).width = s.contentStartPos.width),
          (i.height = s.contentStartPos.height),
          m.fancybox.animate(s.$content, i, 330));
      }),
      (i.prototype.endZooming = function () {
        var t,
          e,
          i,
          s,
          n = this,
          a = n.instance.current,
          o = n.newWidth,
          r = n.newHeight;
        n.contentLastPos &&
          ((t = n.contentLastPos.left),
          (s = {
            top: (e = n.contentLastPos.top),
            left: t,
            width: o,
            height: r,
            scaleX: 1,
            scaleY: 1,
          }),
          m.fancybox.setTranslate(n.$content, s),
          o < n.canvasWidth && r < n.canvasHeight
            ? n.instance.scaleToFit(150)
            : o > a.width || r > a.height
            ? n.instance.scaleToActual(
                n.centerPointStartX,
                n.centerPointStartY,
                150
              )
            : ((i = n.limitPosition(t, e, o, r)),
              m.fancybox.setTranslate(
                n.$content,
                m.fancybox.getTranslate(n.$content)
              ),
              m.fancybox.animate(n.$content, i, 150)));
      }),
      (i.prototype.onTap = function (i) {
        var t,
          s = this,
          e = m(i.target),
          n = s.instance,
          a = n.current,
          o = (i && c(i)) || s.startPoints,
          r = o[0] ? o[0].x - m(g).scrollLeft() - s.stagePos.left : 0,
          l = o[0] ? o[0].y - m(g).scrollTop() - s.stagePos.top : 0,
          d = function (t) {
            var e = a.opts[t];
            if ((m.isFunction(e) && (e = e.apply(n, [a, i])), e))
              switch (e) {
                case "close":
                  n.close(s.startEvent);
                  break;
                case "toggleControls":
                  n.toggleControls(!0);
                  break;
                case "next":
                  n.next();
                  break;
                case "nextOrClose":
                  1 < n.group.length ? n.next() : n.close(s.startEvent);
                  break;
                case "zoom":
                  "image" == a.type &&
                    (a.isLoaded || a.$ghost) &&
                    (n.canPan()
                      ? n.scaleToFit()
                      : n.isScaledDown()
                      ? n.scaleToActual(r, l)
                      : n.group.length < 2 && n.close(s.startEvent));
              }
          };
        if (
          (!i.originalEvent || 2 != i.originalEvent.button) &&
          (e.is("img") || !(r > e[0].clientWidth + e.offset().left))
        ) {
          if (
            e.is(
              ".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"
            )
          )
            t = "Outside";
          else if (e.is(".fancybox-slide")) t = "Slide";
          else {
            if (
              !n.current.$content ||
              !n.current.$content.find(e).addBack().filter(e).length
            )
              return;
            t = "Content";
          }
          if (s.tapped) {
            if (
              (clearTimeout(s.tapped),
              (s.tapped = null),
              50 < Math.abs(r - s.tapX) || 50 < Math.abs(l - s.tapY))
            )
              return this;
            d("dblclick" + t);
          } else
            (s.tapX = r),
              (s.tapY = l),
              a.opts["dblclick" + t] &&
              a.opts["dblclick" + t] !== a.opts["click" + t]
                ? (s.tapped = setTimeout(function () {
                    (s.tapped = null), d("click" + t);
                  }, 500))
                : d("click" + t);
          return this;
        }
      }),
      m(r).on("onActivate.fb", function (t, e) {
        e && !e.Guestures && (e.Guestures = new i(e));
      });
  })(window, document, window.jQuery || jQuery),
  (function (o, r) {
    "use strict";
    r.extend(!0, r.fancybox.defaults, {
      btnTpl: {
        slideShow:
          '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>',
      },
      slideShow: { autoStart: !1, speed: 3e3 },
    });
    var i = function (t) {
      (this.instance = t), this.init();
    };
    r.extend(i.prototype, {
      timer: null,
      isActive: !1,
      $button: null,
      init: function () {
        var t = this;
        (t.$button = t.instance.$refs.toolbar
          .find("[data-fancybox-play]")
          .on("click", function () {
            t.toggle();
          })),
          (t.instance.group.length < 2 ||
            !t.instance.group[t.instance.currIndex].opts.slideShow) &&
            t.$button.hide();
      },
      set: function (t) {
        var e = this;
        e.instance &&
        e.instance.current &&
        (!0 === t ||
          e.instance.current.opts.loop ||
          e.instance.currIndex < e.instance.group.length - 1)
          ? (e.timer = setTimeout(function () {
              e.isActive &&
                e.instance.jumpTo(
                  (e.instance.currIndex + 1) % e.instance.group.length
                );
            }, e.instance.current.opts.slideShow.speed))
          : (e.stop(),
            (e.instance.idleSecondsCounter = 0),
            e.instance.showControls());
      },
      clear: function () {
        clearTimeout(this.timer), (this.timer = null);
      },
      start: function () {
        var t = this.instance.current;
        t &&
          ((this.isActive = !0),
          this.$button
            .attr("title", t.opts.i18n[t.opts.lang].PLAY_STOP)
            .removeClass("fancybox-button--play")
            .addClass("fancybox-button--pause"),
          this.set(!0));
      },
      stop: function () {
        var t = this.instance.current;
        this.clear(),
          this.$button
            .attr("title", t.opts.i18n[t.opts.lang].PLAY_START)
            .removeClass("fancybox-button--pause")
            .addClass("fancybox-button--play"),
          (this.isActive = !1);
      },
      toggle: function () {
        this.isActive ? this.stop() : this.start();
      },
    }),
      r(o).on({
        "onInit.fb": function (t, e) {
          e && !e.SlideShow && (e.SlideShow = new i(e));
        },
        "beforeShow.fb": function (t, e, i, s) {
          var n = e && e.SlideShow;
          s
            ? n && i.opts.slideShow.autoStart && n.start()
            : n && n.isActive && n.clear();
        },
        "afterShow.fb": function (t, e, i) {
          var s = e && e.SlideShow;
          s && s.isActive && s.set();
        },
        "afterKeydown.fb": function (t, e, i, s, n) {
          var a = e && e.SlideShow;
          !a ||
            !i.opts.slideShow ||
            (80 !== n && 32 !== n) ||
            r(o.activeElement).is("button,a,input") ||
            (s.preventDefault(), a.toggle());
        },
        "beforeClose.fb onDeactivate.fb": function (t, e) {
          var i = e && e.SlideShow;
          i && i.stop();
        },
      }),
      r(o).on("visibilitychange", function () {
        var t = r.fancybox.getInstance(),
          e = t && t.SlideShow;
        e && e.isActive && (o.hidden ? e.clear() : e.set());
      });
  })(document, window.jQuery || jQuery),
  (function (a, i) {
    "use strict";
    var e = (function () {
      for (
        var t = [
            [
              "requestFullscreen",
              "exitFullscreen",
              "fullscreenElement",
              "fullscreenEnabled",
              "fullscreenchange",
              "fullscreenerror",
            ],
            [
              "webkitRequestFullscreen",
              "webkitExitFullscreen",
              "webkitFullscreenElement",
              "webkitFullscreenEnabled",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "webkitRequestFullScreen",
              "webkitCancelFullScreen",
              "webkitCurrentFullScreenElement",
              "webkitCancelFullScreen",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "mozRequestFullScreen",
              "mozCancelFullScreen",
              "mozFullScreenElement",
              "mozFullScreenEnabled",
              "mozfullscreenchange",
              "mozfullscreenerror",
            ],
            [
              "msRequestFullscreen",
              "msExitFullscreen",
              "msFullscreenElement",
              "msFullscreenEnabled",
              "MSFullscreenChange",
              "MSFullscreenError",
            ],
          ],
          e = {},
          i = 0;
        i < t.length;
        i++
      ) {
        var s = t[i];
        if (s && s[1] in a) {
          for (var n = 0; n < s.length; n++) e[t[0][n]] = s[n];
          return e;
        }
      }
      return !1;
    })();
    if (e) {
      var s = {
        request: function (t) {
          (t = t || a.documentElement)[e.requestFullscreen](
            t.ALLOW_KEYBOARD_INPUT
          );
        },
        exit: function () {
          a[e.exitFullscreen]();
        },
        toggle: function (t) {
          (t = t || a.documentElement),
            this.isFullscreen() ? this.exit() : this.request(t);
        },
        isFullscreen: function () {
          return Boolean(a[e.fullscreenElement]);
        },
        enabled: function () {
          return Boolean(a[e.fullscreenEnabled]);
        },
      };
      i.extend(!0, i.fancybox.defaults, {
        btnTpl: {
          fullScreen:
            '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 v16 h22 v-16 h-22 v8" /></svg></button>',
        },
        fullScreen: { autoStart: !1 },
      }),
        i(a).on({
          "onInit.fb": function (t, e) {
            e && e.group[e.currIndex].opts.fullScreen
              ? (e.$refs.container.on(
                  "click.fb-fullscreen",
                  "[data-fancybox-fullscreen]",
                  function (t) {
                    t.stopPropagation(), t.preventDefault(), s.toggle();
                  }
                ),
                e.opts.fullScreen &&
                  !0 === e.opts.fullScreen.autoStart &&
                  s.request(),
                (e.FullScreen = s))
              : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
          },
          "afterKeydown.fb": function (t, e, i, s, n) {
            e &&
              e.FullScreen &&
              70 === n &&
              (s.preventDefault(), e.FullScreen.toggle());
          },
          "beforeClose.fb": function (t, e) {
            e &&
              e.FullScreen &&
              e.$refs.container.hasClass("fancybox-is-fullscreen") &&
              s.exit();
          },
        }),
        i(a).on(e.fullscreenchange, function () {
          var t = s.isFullscreen(),
            e = i.fancybox.getInstance();
          e &&
            (e.current &&
              "image" === e.current.type &&
              e.isAnimating &&
              (e.current.$content.css("transition", "none"),
              (e.isAnimating = !1),
              e.update(!0, !0, 0)),
            e.trigger("onFullscreenChange", t),
            e.$refs.container.toggleClass("fancybox-is-fullscreen", t));
        });
    } else i && i.fancybox && (i.fancybox.defaults.btnTpl.fullScreen = !1);
  })(document, window.jQuery || jQuery),
  (function (t, a) {
    "use strict";
    var o = "fancybox-thumbs",
      r = o + "-active";
    a.fancybox.defaults = a.extend(
      !0,
      {
        btnTpl: {
          thumbs:
            '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>',
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y",
        },
      },
      a.fancybox.defaults
    );
    var s = function (t) {
      this.init(t);
    };
    a.extend(s.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: !1,
      isActive: !1,
      init: function (t) {
        var e,
          i,
          s = this;
        (((s.instance = t).Thumbs = s).opts = t.group[t.currIndex].opts.thumbs),
          (e =
            (e = t.group[0]).opts.thumb ||
            (!(!e.opts.$thumb || !e.opts.$thumb.length) &&
              e.opts.$thumb.attr("src"))),
          1 < t.group.length &&
            (i =
              (i = t.group[1]).opts.thumb ||
              (!(!i.opts.$thumb || !i.opts.$thumb.length) &&
                i.opts.$thumb.attr("src"))),
          (s.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]")),
          s.opts && e && i && e && i
            ? (s.$button.show().on("click", function () {
                s.toggle();
              }),
              (s.isActive = !0))
            : s.$button.hide();
      },
      create: function () {
        var i,
          t = this,
          e = t.instance,
          s = t.opts.parentEl,
          n = [];
        t.$grid ||
          ((t.$grid = a(
            '<div class="' + o + " " + o + "-" + t.opts.axis + '"></div>'
          ).appendTo(e.$refs.container.find(s).addBack().filter(s))),
          t.$grid.on("click", "li", function () {
            e.jumpTo(a(this).attr("data-index"));
          })),
          t.$list || (t.$list = a("<ul>").appendTo(t.$grid)),
          a.each(e.group, function (t, e) {
            (i =
              e.opts.thumb ||
              (e.opts.$thumb ? e.opts.$thumb.attr("src") : null)) ||
              "image" !== e.type ||
              (i = e.src),
              n.push(
                '<li data-index="' +
                  t +
                  '" tabindex="0" class="fancybox-thumbs-loading"' +
                  (i && i.length
                    ? ' style="background-image:url(' + i + ')" />'
                    : "") +
                  "></li>"
              );
          }),
          (t.$list[0].innerHTML = n.join("")),
          "x" === t.opts.axis &&
            t.$list.width(
              parseInt(t.$grid.css("padding-right"), 10) +
                e.group.length * t.$list.children().eq(0).outerWidth(!0)
            );
      },
      focus: function (t) {
        var e,
          i,
          s = this,
          n = s.$list,
          a = s.$grid;
        s.instance.current &&
          ((i = (e = n
            .children()
            .removeClass(r)
            .filter('[data-index="' + s.instance.current.index + '"]')
            .addClass(r)).position()),
          "y" === s.opts.axis &&
          (i.top < 0 || i.top > n.height() - e.outerHeight())
            ? n.stop().animate({ scrollTop: n.scrollTop() + i.top }, t)
            : "x" === s.opts.axis &&
              (i.left < a.scrollLeft() ||
                i.left > a.scrollLeft() + (a.width() - e.outerWidth())) &&
              n.parent().stop().animate({ scrollLeft: i.left }, t));
      },
      update: function () {
        var t = this;
        t.instance.$refs.container.toggleClass(
          "fancybox-show-thumbs",
          this.isVisible
        ),
          t.isVisible
            ? (t.$grid || t.create(),
              t.instance.trigger("onThumbsShow"),
              t.focus(0))
            : t.$grid && t.instance.trigger("onThumbsHide"),
          t.instance.update();
      },
      hide: function () {
        (this.isVisible = !1), this.update();
      },
      show: function () {
        (this.isVisible = !0), this.update();
      },
      toggle: function () {
        (this.isVisible = !this.isVisible), this.update();
      },
    }),
      a(t).on({
        "onInit.fb": function (t, e) {
          var i;
          e &&
            !e.Thumbs &&
            (i = new s(e)).isActive &&
            !0 === i.opts.autoStart &&
            i.show();
        },
        "beforeShow.fb": function (t, e, i, s) {
          var n = e && e.Thumbs;
          n && n.isVisible && n.focus(s ? 0 : 250);
        },
        "afterKeydown.fb": function (t, e, i, s, n) {
          var a = e && e.Thumbs;
          a && a.isActive && 71 === n && (s.preventDefault(), a.toggle());
        },
        "beforeClose.fb": function (t, e) {
          var i = e && e.Thumbs;
          i && i.isVisible && !1 !== i.opts.hideOnClose && i.$grid.hide();
        },
      });
  })(document, window.jQuery || jQuery),
  (function (t, o) {
    "use strict";
    o.extend(!0, o.fancybox.defaults, {
      btnTpl: {
        share:
          '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>',
      },
      share: {
        url: function (t, e) {
          return (
            (!t.currentHash &&
              "inline" !== e.type &&
              "html" !== e.type &&
              (e.origSrc || e.src)) ||
            window.location
          );
        },
        tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>',
      },
    }),
      o(t).on("click", "[data-fancybox-share]", function () {
        var t,
          e,
          i,
          s,
          n = o.fancybox.getInstance(),
          a = n.current || null;
        a &&
          ("function" === o.type(a.opts.share.url) &&
            (t = a.opts.share.url.apply(a, [n, a])),
          (e = a.opts.share.tpl
            .replace(
              /\{\{media\}\}/g,
              "image" === a.type ? encodeURIComponent(a.src) : ""
            )
            .replace(/\{\{url\}\}/g, encodeURIComponent(t))
            .replace(
              /\{\{url_raw\}\}/g,
              ((i = t),
              (s = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;",
              }),
              String(i).replace(/[&<>"'`=\/]/g, function (t) {
                return s[t];
              }))
            )
            .replace(
              /\{\{descr\}\}/g,
              n.$caption ? encodeURIComponent(n.$caption.text()) : ""
            )),
          o.fancybox.open({
            src: n.translate(n, e),
            type: "html",
            opts: {
              animationEffect: !1,
              afterLoad: function (t, e) {
                n.$refs.container.one("beforeClose.fb", function () {
                  t.close(null, 0);
                }),
                  e.$content
                    .find(".fancybox-share__links a")
                    .click(function () {
                      return (
                        window.open(
                          this.href,
                          "Share",
                          "width=550, height=450"
                        ),
                        !1
                      );
                    });
              },
            },
          }));
      });
  })(document, window.jQuery || jQuery),
  (function (a, o, n) {
    "use strict";
    function r() {
      var t = o.location.hash.substr(1),
        e = t.split("-"),
        i =
          (1 < e.length &&
            /^\+?\d+$/.test(e[e.length - 1]) &&
            parseInt(e.pop(-1), 10)) ||
          1;
      return { hash: t, index: i < 1 ? 1 : i, gallery: e.join("-") };
    }
    function e(t) {
      "" !== t.gallery &&
        n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']")
          .eq(t.index - 1)
          .trigger("click.fb-start");
    }
    function l(t) {
      var e, i;
      return (
        !!t &&
        "" !==
          (i =
            (e = t.current ? t.current.opts : t.opts).hash ||
            (e.$orig ? e.$orig.data("fancybox") : "")) &&
        i
      );
    }
    n.escapeSelector ||
      (n.escapeSelector = function (t) {
        return (t + "").replace(
          /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
          function (t, e) {
            return e
              ? "\0" === t
                ? "�"
                : t.slice(0, -1) +
                  "\\" +
                  t.charCodeAt(t.length - 1).toString(16) +
                  " "
              : "\\" + t;
          }
        );
      }),
      n(function () {
        !1 !== n.fancybox.defaults.hash &&
          (n(a).on({
            "onInit.fb": function (t, e) {
              var i, s;
              !1 !== e.group[e.currIndex].opts.hash &&
                ((i = r()),
                (s = l(e)) &&
                  i.gallery &&
                  s == i.gallery &&
                  (e.currIndex = i.index - 1));
            },
            "beforeShow.fb": function (t, e, i, s) {
              var n;
              i &&
                !1 !== i.opts.hash &&
                (n = l(e)) &&
                ((e.currentHash =
                  n + (1 < e.group.length ? "-" + (i.index + 1) : "")),
                o.location.hash !== "#" + e.currentHash &&
                  (e.origHash || (e.origHash = o.location.hash),
                  e.hashTimer && clearTimeout(e.hashTimer),
                  (e.hashTimer = setTimeout(function () {
                    "replaceState" in o.history
                      ? (o.history[s ? "pushState" : "replaceState"](
                          {},
                          a.title,
                          o.location.pathname +
                            o.location.search +
                            "#" +
                            e.currentHash
                        ),
                        s && (e.hasCreatedHistory = !0))
                      : (o.location.hash = e.currentHash),
                      (e.hashTimer = null);
                  }, 300))));
            },
            "beforeClose.fb": function (t, e, i) {
              !1 !== i.opts.hash &&
                (l(e),
                e.currentHash && e.hasCreatedHistory
                  ? o.history.back()
                  : e.currentHash &&
                    ("replaceState" in o.history
                      ? o.history.replaceState(
                          {},
                          a.title,
                          o.location.pathname +
                            o.location.search +
                            (e.origHash || "")
                        )
                      : (o.location.hash = e.origHash)),
                (e.currentHash = null),
                clearTimeout(e.hashTimer));
            },
          }),
          n(o).on("hashchange.fb", function () {
            var s,
              t = r();
            n.each(n(".fancybox-container").get().reverse(), function (t, e) {
              var i = n(e).data("FancyBox");
              if (i.currentHash) return (s = i), !1;
            }),
              s
                ? !s.currentHash ||
                  s.currentHash === t.gallery + "-" + t.index ||
                  (1 === t.index && s.currentHash == t.gallery) ||
                  ((s.currentHash = null), s.close())
                : "" !== t.gallery && e(t);
          }),
          setTimeout(function () {
            n.fancybox.getInstance() || e(r());
          }, 50));
      });
  })(document, window, window.jQuery || jQuery),
  (function (t, e) {
    "use strict";
    var n = new Date().getTime();
    e(t).on({
      "onInit.fb": function (t, s, e) {
        s.$refs.stage.on(
          "mousewheel DOMMouseScroll wheel MozMousePixelScroll",
          function (t) {
            var e = s.current,
              i = new Date().getTime();
            s.group.length < 2 ||
              !1 === e.opts.wheel ||
              ("auto" === e.opts.wheel && "image" !== e.type) ||
              (t.preventDefault(),
              t.stopPropagation(),
              e.$slide.hasClass("fancybox-animated") ||
                ((t = t.originalEvent || t),
                i - n < 250 ||
                  ((n = i),
                  s[
                    (-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0
                      ? "next"
                      : "previous"
                  ]())));
          }
        );
      },
    });
  })(document, window.jQuery || jQuery),
  (function (n) {
    "use strict";
    (n.fn.fitVids = function (t) {
      var i = { customSelector: null, ignore: null };
      if (!document.getElementById("fit-vids-style")) {
        var e = document.head || document.getElementsByTagName("head")[0],
          s = document.createElement("div");
        (s.innerHTML =
          '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>'),
          e.appendChild(s.childNodes[1]);
      }
      return (
        t && n.extend(i, t),
        this.each(function () {
          var t = [
            'iframe[src*="player.vimeo.com"]',
            'iframe[src*="youtube.com"]',
            'iframe[src*="youtube-nocookie.com"]',
            'iframe[src*="kickstarter.com"][src*="video.html"]',
            "object",
            "embed",
          ];
          i.customSelector && t.push(i.customSelector);
          var s = ".fitvidsignore";
          i.ignore && (s = s + ", " + i.ignore);
          var e = n(this).find(t.join(","));
          (e = (e = e.not("object object")).not(s)).each(function () {
            var t = n(this);
            if (
              !(
                0 < t.parents(s).length ||
                ("embed" === this.tagName.toLowerCase() &&
                  t.parent("object").length) ||
                t.parent(".fluid-width-video-wrapper").length
              )
            ) {
              t.css("height") ||
                t.css("width") ||
                (!isNaN(t.attr("height")) && !isNaN(t.attr("width"))) ||
                (t.attr("height", 9), t.attr("width", 16));
              var e =
                ("object" === this.tagName.toLowerCase() ||
                (t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)))
                  ? parseInt(t.attr("height"), 10)
                  : t.height()) /
                (isNaN(parseInt(t.attr("width"), 10))
                  ? t.width()
                  : parseInt(t.attr("width"), 10));
              if (!t.attr("name")) {
                var i = "fitvid" + n.fn.fitVids._count;
                t.attr("name", i), n.fn.fitVids._count++;
              }
              t
                .wrap('<div class="fluid-width-video-wrapper"></div>')
                .parent(".fluid-width-video-wrapper")
                .css("padding-top", 100 * e + "%"),
                t.removeAttr("height").removeAttr("width");
            }
          });
        })
      );
    }),
      (n.fn.fitVids._count = 0);
  })(window.jQuery || window.Zepto),
  (function (d) {
    "use strict";
    (d.picturefillBackgroundOptions = {
      selector: "picturefill-background",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 50%",
    }),
      (d.picturefillBackground = function () {
        for (
          var t = d.document.getElementsByClassName(
              d.picturefillBackgroundOptions.selector
            ),
            e = 0,
            i = t.length;
          e < i;
          e++
        ) {
          for (
            var s = t[e].getElementsByTagName("span"),
              n = [],
              a = 0,
              o = s.length;
            a < o;
            a++
          ) {
            var r = s[a].getAttribute("data-src"),
              l = s[a].getAttribute("data-media");
            r && (!l || (d.matchMedia && d.matchMedia(l).matches)) && n.push(r);
          }
          if (n.length)
            (r = n.pop()),
              new RegExp(r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).test(
                t[e].style.backgroundImage
              ) ||
                ((t[e].style.backgroundImage = "url('" + r + "')"),
                (t[e].style.backgroundSize =
                  d.picturefillBackgroundOptions.backgroundSize),
                (t[e].style.backgroundRepeat =
                  d.picturefillBackgroundOptions.backgroundRepeat),
                (t[e].style.backgroundPosition =
                  d.picturefillBackgroundOptions.backgroundPosition));
        }
      }),
      d.addEventListener
        ? (d.addEventListener("load", d.picturefillBackground, !1),
          d.addEventListener("resize", d.picturefillBackground, !1),
          d.addEventListener(
            "DOMContentLoaded",
            function () {
              d.picturefillBackground(),
                d.removeEventListener("load", d.picturefillBackground, !1);
            },
            !1
          ))
        : d.attachEvent && d.attachEvent("onload", d.picturefillBackground);
  })(this),
  (function (m, n, t, v) {
    function s(t, e) {
      (this.element = t),
        (this.options = m.extend({}, i, e)),
        (this._defaults = i),
        (this._name = a),
        this.init();
    }
    var a = "stellar",
      i = {
        scrollProperty: "scroll",
        positionProperty: "position",
        horizontalScrolling: !0,
        verticalScrolling: !0,
        horizontalOffset: 0,
        verticalOffset: 0,
        responsive: !1,
        parallaxBackgrounds: !0,
        parallaxElements: !0,
        hideDistantElements: !0,
        hideElement: function (t) {
          t.hide();
        },
        showElement: function (t) {
          t.show();
        },
      },
      r = {
        scroll: {
          getLeft: function (t) {
            return t.scrollLeft();
          },
          setLeft: function (t, e) {
            t.scrollLeft(e);
          },
          getTop: function (t) {
            return t.scrollTop();
          },
          setTop: function (t, e) {
            t.scrollTop(e);
          },
        },
        position: {
          getLeft: function (t) {
            return -1 * parseInt(t.css("left"), 10);
          },
          getTop: function (t) {
            return -1 * parseInt(t.css("top"), 10);
          },
        },
        margin: {
          getLeft: function (t) {
            return -1 * parseInt(t.css("margin-left"), 10);
          },
          getTop: function (t) {
            return -1 * parseInt(t.css("margin-top"), 10);
          },
        },
        transform: {
          getLeft: function (t) {
            var e = getComputedStyle(t[0])[o];
            return "none" !== e
              ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[4], 10)
              : 0;
          },
          getTop: function (t) {
            var e = getComputedStyle(t[0])[o];
            return "none" !== e
              ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[5], 10)
              : 0;
          },
        },
      },
      l = {
        position: {
          setLeft: function (t, e) {
            t.css("left", e);
          },
          setTop: function (t, e) {
            t.css("top", e);
          },
        },
        transform: {
          setPosition: function (t, e, i, s, n) {
            t[0].style[o] =
              "translate3d(" + (e - i) + "px, " + (s - n) + "px, 0)";
          },
        },
      },
      o = (function () {
        var t,
          e = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
          i = m("script")[0].style,
          s = "";
        for (t in i)
          if (e.test(t)) {
            s = t.match(e)[0];
            break;
          }
        return (
          "WebkitOpacity" in i && (s = "Webkit"),
          "KhtmlOpacity" in i && (s = "Khtml"),
          function (t) {
            return (
              s + (0 < s.length ? t.charAt(0).toUpperCase() + t.slice(1) : t)
            );
          }
        );
      })()("transform"),
      e =
        m("<div />", { style: "background:#fff" }).css(
          "background-position-x"
        ) !== v,
      b = e
        ? function (t, e, i) {
            t.css({ "background-position-x": e, "background-position-y": i });
          }
        : function (t, e, i) {
            t.css("background-position", e + " " + i);
          },
      y = e
        ? function (t) {
            return [
              t.css("background-position-x"),
              t.css("background-position-y"),
            ];
          }
        : function (t) {
            return t.css("background-position").split(" ");
          },
      d =
        n.requestAnimationFrame ||
        n.webkitRequestAnimationFrame ||
        n.mozRequestAnimationFrame ||
        n.oRequestAnimationFrame ||
        n.msRequestAnimationFrame ||
        function (t) {
          setTimeout(t, 1e3 / 60);
        };
    (s.prototype = {
      init: function () {
        (this.options.name = a + "_" + Math.floor(1e9 * Math.random())),
          this._defineElements(),
          this._defineGetters(),
          this._defineSetters(),
          this._handleWindowLoadAndResize(),
          this._detectViewport(),
          this.refresh({ firstLoad: !0 }),
          "scroll" === this.options.scrollProperty
            ? this._handleScrollEvent()
            : this._startAnimationLoop();
      },
      _defineElements: function () {
        this.element === t.body && (this.element = n),
          (this.$scrollElement = m(this.element)),
          (this.$element =
            this.element === n ? m("body") : this.$scrollElement),
          (this.$viewportElement =
            this.options.viewportElement !== v
              ? m(this.options.viewportElement)
              : this.$scrollElement[0] === n ||
                "scroll" === this.options.scrollProperty
              ? this.$scrollElement
              : this.$scrollElement.parent());
      },
      _defineGetters: function () {
        var t = this,
          e = r[t.options.scrollProperty];
        (this._getScrollLeft = function () {
          return e.getLeft(t.$scrollElement);
        }),
          (this._getScrollTop = function () {
            return e.getTop(t.$scrollElement);
          });
      },
      _defineSetters: function () {
        var a = this,
          t = r[a.options.scrollProperty],
          o = l[a.options.positionProperty],
          e = t.setLeft,
          i = t.setTop;
        (this._setScrollLeft =
          "function" == typeof e
            ? function (t) {
                e(a.$scrollElement, t);
              }
            : m.noop),
          (this._setScrollTop =
            "function" == typeof i
              ? function (t) {
                  i(a.$scrollElement, t);
                }
              : m.noop),
          (this._setPosition =
            o.setPosition ||
            function (t, e, i, s, n) {
              a.options.horizontalScrolling && o.setLeft(t, e, i),
                a.options.verticalScrolling && o.setTop(t, s, n);
            });
      },
      _handleWindowLoadAndResize: function () {
        var t = this,
          e = m(n);
        t.options.responsive &&
          e.bind("load." + this.name, function () {
            t.refresh();
          }),
          e.bind("resize." + this.name, function () {
            t._detectViewport(), t.options.responsive && t.refresh();
          });
      },
      refresh: function (t) {
        var i = this,
          e = i._getScrollLeft(),
          s = i._getScrollTop();
        (t && t.firstLoad) || this._reset(),
          this._setScrollLeft(0),
          this._setScrollTop(0),
          this._setOffsets(),
          this._findParticles(),
          this._findBackgrounds(),
          t &&
            t.firstLoad &&
            /WebKit/.test(navigator.userAgent) &&
            m(n).load(function () {
              var t = i._getScrollLeft(),
                e = i._getScrollTop();
              i._setScrollLeft(t + 1),
                i._setScrollTop(e + 1),
                i._setScrollLeft(t),
                i._setScrollTop(e);
            }),
          this._setScrollLeft(e),
          this._setScrollTop(s);
      },
      _detectViewport: function () {
        var t = this.$viewportElement.offset(),
          e = null !== t && t !== v;
        (this.viewportWidth = this.$viewportElement.width()),
          (this.viewportHeight = this.$viewportElement.height()),
          (this.viewportOffsetTop = e ? t.top : 0),
          (this.viewportOffsetLeft = e ? t.left : 0);
      },
      _findParticles: function () {
        var f = this;
        if ((this._getScrollLeft(), this._getScrollTop(), this.particles !== v))
          for (var t = this.particles.length - 1; 0 <= t; t--)
            this.particles[t].$element.data("stellar-elementIsActive", v);
        (this.particles = []),
          this.options.parallaxElements &&
            this.$element.find("[data-stellar-ratio]").each(function () {
              var t,
                e,
                i,
                s,
                n,
                a,
                o,
                r,
                l,
                d = m(this),
                c = 0,
                h = 0,
                p = 0,
                u = 0;
              if (d.data("stellar-elementIsActive")) {
                if (d.data("stellar-elementIsActive") !== this) return;
              } else d.data("stellar-elementIsActive", this);
              f.options.showElement(d),
                d.data("stellar-startingLeft")
                  ? (d.css("left", d.data("stellar-startingLeft")),
                    d.css("top", d.data("stellar-startingTop")))
                  : (d.data("stellar-startingLeft", d.css("left")),
                    d.data("stellar-startingTop", d.css("top"))),
                (i = d.position().left),
                (s = d.position().top),
                (n =
                  "auto" === d.css("margin-left")
                    ? 0
                    : parseInt(d.css("margin-left"), 10)),
                (a =
                  "auto" === d.css("margin-top")
                    ? 0
                    : parseInt(d.css("margin-top"), 10)),
                (r = d.offset().left - n),
                (l = d.offset().top - a),
                d.parents().each(function () {
                  var t = m(this);
                  return !0 === t.data("stellar-offset-parent")
                    ? ((c = p), (h = u), (o = t), !1)
                    : ((p += t.position().left), void (u += t.position().top));
                }),
                (t =
                  d.data("stellar-horizontal-offset") !== v
                    ? d.data("stellar-horizontal-offset")
                    : o !== v && o.data("stellar-horizontal-offset") !== v
                    ? o.data("stellar-horizontal-offset")
                    : f.horizontalOffset),
                (e =
                  d.data("stellar-vertical-offset") !== v
                    ? d.data("stellar-vertical-offset")
                    : o !== v && o.data("stellar-vertical-offset") !== v
                    ? o.data("stellar-vertical-offset")
                    : f.verticalOffset),
                f.particles.push({
                  $element: d,
                  $offsetParent: o,
                  isFixed: "fixed" === d.css("position"),
                  horizontalOffset: t,
                  verticalOffset: e,
                  startingPositionLeft: i,
                  startingPositionTop: s,
                  startingOffsetLeft: r,
                  startingOffsetTop: l,
                  parentOffsetLeft: c,
                  parentOffsetTop: h,
                  stellarRatio:
                    d.data("stellar-ratio") !== v ? d.data("stellar-ratio") : 1,
                  width: d.outerWidth(!0),
                  height: d.outerHeight(!0),
                  isHidden: !1,
                });
            });
      },
      _findBackgrounds: function () {
        var t,
          u = this,
          f = this._getScrollLeft(),
          g = this._getScrollTop();
        (this.backgrounds = []),
          this.options.parallaxBackgrounds &&
            ((t = this.$element.find("[data-stellar-background-ratio]")),
            this.$element.data("stellar-background-ratio") &&
              (t = t.add(this.$element)),
            t.each(function () {
              var t,
                e,
                i,
                s,
                n,
                a,
                o,
                r = m(this),
                l = y(r),
                d = 0,
                c = 0,
                h = 0,
                p = 0;
              if (r.data("stellar-backgroundIsActive")) {
                if (r.data("stellar-backgroundIsActive") !== this) return;
              } else r.data("stellar-backgroundIsActive", this);
              r.data("stellar-backgroundStartingLeft")
                ? b(
                    r,
                    r.data("stellar-backgroundStartingLeft"),
                    r.data("stellar-backgroundStartingTop")
                  )
                : (r.data("stellar-backgroundStartingLeft", l[0]),
                  r.data("stellar-backgroundStartingTop", l[1])),
                (i =
                  "auto" === r.css("margin-left")
                    ? 0
                    : parseInt(r.css("margin-left"), 10)),
                (s =
                  "auto" === r.css("margin-top")
                    ? 0
                    : parseInt(r.css("margin-top"), 10)),
                (n = r.offset().left - i - f),
                (a = r.offset().top - s - g),
                r.parents().each(function () {
                  var t = m(this);
                  return !0 === t.data("stellar-offset-parent")
                    ? ((d = h), (c = p), (o = t), !1)
                    : ((h += t.position().left), void (p += t.position().top));
                }),
                (t =
                  r.data("stellar-horizontal-offset") !== v
                    ? r.data("stellar-horizontal-offset")
                    : o !== v && o.data("stellar-horizontal-offset") !== v
                    ? o.data("stellar-horizontal-offset")
                    : u.horizontalOffset),
                (e =
                  r.data("stellar-vertical-offset") !== v
                    ? r.data("stellar-vertical-offset")
                    : o !== v && o.data("stellar-vertical-offset") !== v
                    ? o.data("stellar-vertical-offset")
                    : u.verticalOffset),
                u.backgrounds.push({
                  $element: r,
                  $offsetParent: o,
                  isFixed: "fixed" === r.css("background-attachment"),
                  horizontalOffset: t,
                  verticalOffset: e,
                  startingValueLeft: l[0],
                  startingValueTop: l[1],
                  startingBackgroundPositionLeft: isNaN(parseInt(l[0], 10))
                    ? 0
                    : parseInt(l[0], 10),
                  startingBackgroundPositionTop: isNaN(parseInt(l[1], 10))
                    ? 0
                    : parseInt(l[1], 10),
                  startingPositionLeft: r.position().left,
                  startingPositionTop: r.position().top,
                  startingOffsetLeft: n,
                  startingOffsetTop: a,
                  parentOffsetLeft: d,
                  parentOffsetTop: c,
                  stellarRatio:
                    r.data("stellar-background-ratio") === v
                      ? 1
                      : r.data("stellar-background-ratio"),
                });
            }));
      },
      _reset: function () {
        var t, e, i, s, n;
        for (n = this.particles.length - 1; 0 <= n; n--)
          (e = (t = this.particles[n]).$element.data("stellar-startingLeft")),
            (i = t.$element.data("stellar-startingTop")),
            this._setPosition(t.$element, e, e, i, i),
            this.options.showElement(t.$element),
            t.$element
              .data("stellar-startingLeft", null)
              .data("stellar-elementIsActive", null)
              .data("stellar-backgroundIsActive", null);
        for (n = this.backgrounds.length - 1; 0 <= n; n--)
          (s = this.backgrounds[n]).$element
            .data("stellar-backgroundStartingLeft", null)
            .data("stellar-backgroundStartingTop", null),
            b(s.$element, s.startingValueLeft, s.startingValueTop);
      },
      destroy: function () {
        this._reset(),
          this.$scrollElement
            .unbind("resize." + this.name)
            .unbind("scroll." + this.name),
          (this._animationLoop = m.noop),
          m(n)
            .unbind("load." + this.name)
            .unbind("resize." + this.name);
      },
      _setOffsets: function () {
        var t = this,
          e = m(n);
        e
          .unbind("resize.horizontal-" + this.name)
          .unbind("resize.vertical-" + this.name),
          "function" == typeof this.options.horizontalOffset
            ? ((this.horizontalOffset = this.options.horizontalOffset()),
              e.bind("resize.horizontal-" + this.name, function () {
                t.horizontalOffset = t.options.horizontalOffset();
              }))
            : (this.horizontalOffset = this.options.horizontalOffset),
          "function" == typeof this.options.verticalOffset
            ? ((this.verticalOffset = this.options.verticalOffset()),
              e.bind("resize.vertical-" + this.name, function () {
                t.verticalOffset = t.options.verticalOffset();
              }))
            : (this.verticalOffset = this.options.verticalOffset);
      },
      _repositionElements: function () {
        var t,
          e,
          i,
          s,
          n,
          a,
          o,
          r,
          l,
          d,
          c = this._getScrollLeft(),
          h = this._getScrollTop(),
          p = !0,
          u = !0;
        if (
          this.currentScrollLeft !== c ||
          this.currentScrollTop !== h ||
          this.currentWidth !== this.viewportWidth ||
          this.currentHeight !== this.viewportHeight
        ) {
          for (
            this.currentScrollLeft = c,
              this.currentScrollTop = h,
              this.currentWidth = this.viewportWidth,
              this.currentHeight = this.viewportHeight,
              d = this.particles.length - 1;
            0 <= d;
            d--
          )
            (e = (t = this.particles[d]).isFixed ? 1 : 0),
              this.options.horizontalScrolling
                ? (r =
                    (a =
                      (c +
                        t.horizontalOffset +
                        this.viewportOffsetLeft +
                        t.startingPositionLeft -
                        t.startingOffsetLeft +
                        t.parentOffsetLeft) *
                        -(t.stellarRatio + e - 1) +
                      t.startingPositionLeft) -
                    t.startingPositionLeft +
                    t.startingOffsetLeft)
                : ((a = t.startingPositionLeft), (r = t.startingOffsetLeft)),
              this.options.verticalScrolling
                ? (l =
                    (o =
                      (h +
                        t.verticalOffset +
                        this.viewportOffsetTop +
                        t.startingPositionTop -
                        t.startingOffsetTop +
                        t.parentOffsetTop) *
                        -(t.stellarRatio + e - 1) +
                      t.startingPositionTop) -
                    t.startingPositionTop +
                    t.startingOffsetTop)
                : ((o = t.startingPositionTop), (l = t.startingOffsetTop)),
              this.options.hideDistantElements &&
                ((u =
                  !this.options.horizontalScrolling ||
                  (r + t.width > (t.isFixed ? 0 : c) &&
                    r <
                      (t.isFixed ? 0 : c) +
                        this.viewportWidth +
                        this.viewportOffsetLeft)),
                (p =
                  !this.options.verticalScrolling ||
                  (l + t.height > (t.isFixed ? 0 : h) &&
                    l <
                      (t.isFixed ? 0 : h) +
                        this.viewportHeight +
                        this.viewportOffsetTop))),
              u && p
                ? (t.isHidden &&
                    (this.options.showElement(t.$element), (t.isHidden = !1)),
                  this._setPosition(
                    t.$element,
                    a,
                    t.startingPositionLeft,
                    o,
                    t.startingPositionTop
                  ))
                : t.isHidden ||
                  (this.options.hideElement(t.$element), (t.isHidden = !0));
          for (d = this.backgrounds.length - 1; 0 <= d; d--)
            (e = (i = this.backgrounds[d]).isFixed ? 0 : 1),
              (s = this.options.horizontalScrolling
                ? (c +
                    i.horizontalOffset -
                    this.viewportOffsetLeft -
                    i.startingOffsetLeft +
                    i.parentOffsetLeft -
                    i.startingBackgroundPositionLeft) *
                    (e - i.stellarRatio) +
                  "px"
                : i.startingValueLeft),
              (n = this.options.verticalScrolling
                ? (h +
                    i.verticalOffset -
                    this.viewportOffsetTop -
                    i.startingOffsetTop +
                    i.parentOffsetTop -
                    i.startingBackgroundPositionTop) *
                    (e - i.stellarRatio) +
                  "px"
                : i.startingValueTop),
              b(i.$element, s, n);
        }
      },
      _handleScrollEvent: function () {
        var t = this,
          e = !1,
          i = function () {
            t._repositionElements(), (e = !1);
          },
          s = function () {
            e || (d(i), (e = !0));
          };
        this.$scrollElement.bind("scroll." + this.name, s), s();
      },
      _startAnimationLoop: function () {
        var t = this;
        (this._animationLoop = function () {
          d(t._animationLoop), t._repositionElements();
        }),
          this._animationLoop();
      },
    }),
      (m.fn[a] = function (e) {
        var i = arguments;
        return e === v || "object" == typeof e
          ? this.each(function () {
              m.data(this, "plugin_" + a) ||
                m.data(this, "plugin_" + a, new s(this, e));
            })
          : "string" == typeof e && "_" !== e[0] && "init" !== e
          ? this.each(function () {
              var t = m.data(this, "plugin_" + a);
              t instanceof s &&
                "function" == typeof t[e] &&
                t[e].apply(t, Array.prototype.slice.call(i, 1)),
                "destroy" === e && m.data(this, "plugin_" + a, null);
            })
          : void 0;
      }),
      (m[a] = function () {
        var t = m(n);
        return t.stellar.apply(t, Array.prototype.slice.call(arguments, 0));
      }),
      (m[a].scrollProperty = r),
      (m[a].positionProperty = l),
      (n.Stellar = s);
  })(jQuery, this, document),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : (t.Swiper = e());
  })(this, function () {
    "use strict";
    var f =
        "undefined" == typeof document
          ? {
              body: {},
              addEventListener: function () {},
              removeEventListener: function () {},
              activeElement: { blur: function () {}, nodeName: "" },
              querySelector: function () {
                return null;
              },
              querySelectorAll: function () {
                return [];
              },
              getElementById: function () {
                return null;
              },
              createEvent: function () {
                return { initEvent: function () {} };
              },
              createElement: function () {
                return {
                  children: [],
                  childNodes: [],
                  style: {},
                  setAttribute: function () {},
                  getElementsByTagName: function () {
                    return [];
                  },
                };
              },
              location: { hash: "" },
            }
          : document,
      F =
        "undefined" == typeof window
          ? {
              document: f,
              navigator: { userAgent: "" },
              location: {},
              history: {},
              CustomEvent: function () {
                return this;
              },
              addEventListener: function () {},
              removeEventListener: function () {},
              getComputedStyle: function () {
                return {
                  getPropertyValue: function () {
                    return "";
                  },
                };
              },
              Image: function () {},
              Date: function () {},
              screen: {},
              setTimeout: function () {},
              clearTimeout: function () {},
            }
          : window,
      l = function (t) {
        for (var e = 0; e < t.length; e += 1) this[e] = t[e];
        return (this.length = t.length), this;
      };
    function L(t, e) {
      var i = [],
        s = 0;
      if (t && !e && t instanceof l) return t;
      if (t)
        if ("string" == typeof t) {
          var n,
            a,
            o = t.trim();
          if (0 <= o.indexOf("<") && 0 <= o.indexOf(">")) {
            var r = "div";
            for (
              0 === o.indexOf("<li") && (r = "ul"),
                0 === o.indexOf("<tr") && (r = "tbody"),
                (0 !== o.indexOf("<td") && 0 !== o.indexOf("<th")) ||
                  (r = "tr"),
                0 === o.indexOf("<tbody") && (r = "table"),
                0 === o.indexOf("<option") && (r = "select"),
                (a = f.createElement(r)).innerHTML = o,
                s = 0;
              s < a.childNodes.length;
              s += 1
            )
              i.push(a.childNodes[s]);
          } else
            for (
              n =
                e || "#" !== t[0] || t.match(/[ .<>:~]/)
                  ? (e || f).querySelectorAll(t.trim())
                  : [f.getElementById(t.trim().split("#")[1])],
                s = 0;
              s < n.length;
              s += 1
            )
              n[s] && i.push(n[s]);
        } else if (t.nodeType || t === F || t === f) i.push(t);
        else if (0 < t.length && t[0].nodeType)
          for (s = 0; s < t.length; s += 1) i.push(t[s]);
      return new l(i);
    }
    function a(t) {
      for (var e = [], i = 0; i < t.length; i += 1)
        -1 === e.indexOf(t[i]) && e.push(t[i]);
      return e;
    }
    (L.fn = l.prototype), (L.Class = l), (L.Dom7 = l);
    var e = {
      addClass: function (t) {
        if (void 0 === t) return this;
        for (var e = t.split(" "), i = 0; i < e.length; i += 1)
          for (var s = 0; s < this.length; s += 1)
            void 0 !== this[s].classList && this[s].classList.add(e[i]);
        return this;
      },
      removeClass: function (t) {
        for (var e = t.split(" "), i = 0; i < e.length; i += 1)
          for (var s = 0; s < this.length; s += 1)
            void 0 !== this[s].classList && this[s].classList.remove(e[i]);
        return this;
      },
      hasClass: function (t) {
        return !!this[0] && this[0].classList.contains(t);
      },
      toggleClass: function (t) {
        for (var e = t.split(" "), i = 0; i < e.length; i += 1)
          for (var s = 0; s < this.length; s += 1)
            void 0 !== this[s].classList && this[s].classList.toggle(e[i]);
        return this;
      },
      attr: function (t, e) {
        var i = arguments;
        if (1 === arguments.length && "string" == typeof t)
          return this[0] ? this[0].getAttribute(t) : void 0;
        for (var s = 0; s < this.length; s += 1)
          if (2 === i.length) this[s].setAttribute(t, e);
          else
            for (var n in t) (this[s][n] = t[n]), this[s].setAttribute(n, t[n]);
        return this;
      },
      removeAttr: function (t) {
        for (var e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
        return this;
      },
      data: function (t, e) {
        var i;
        if (void 0 !== e) {
          for (var s = 0; s < this.length; s += 1)
            (i = this[s]).dom7ElementDataStorage ||
              (i.dom7ElementDataStorage = {}),
              (i.dom7ElementDataStorage[t] = e);
          return this;
        }
        if ((i = this[0]))
          return i.dom7ElementDataStorage && t in i.dom7ElementDataStorage
            ? i.dom7ElementDataStorage[t]
            : i.getAttribute("data-" + t) || void 0;
      },
      transform: function (t) {
        for (var e = 0; e < this.length; e += 1) {
          var i = this[e].style;
          (i.webkitTransform = t), (i.transform = t);
        }
        return this;
      },
      transition: function (t) {
        "string" != typeof t && (t += "ms");
        for (var e = 0; e < this.length; e += 1) {
          var i = this[e].style;
          (i.webkitTransitionDuration = t), (i.transitionDuration = t);
        }
        return this;
      },
      on: function () {
        for (var t, e = [], i = arguments.length; i--; ) e[i] = arguments[i];
        var s = e[0],
          a = e[1],
          o = e[2],
          n = e[3];
        function r(t) {
          var e = t.target;
          if (e) {
            var i = t.target.dom7EventData || [];
            if ((i.indexOf(t) < 0 && i.unshift(t), L(e).is(a))) o.apply(e, i);
            else
              for (var s = L(e).parents(), n = 0; n < s.length; n += 1)
                L(s[n]).is(a) && o.apply(s[n], i);
          }
        }
        function l(t) {
          var e = (t && t.target && t.target.dom7EventData) || [];
          e.indexOf(t) < 0 && e.unshift(t), o.apply(this, e);
        }
        "function" == typeof e[1] &&
          ((s = (t = e)[0]), (o = t[1]), (n = t[2]), (a = void 0)),
          n || (n = !1);
        for (var d, c = s.split(" "), h = 0; h < this.length; h += 1) {
          var p = this[h];
          if (a)
            for (d = 0; d < c.length; d += 1) {
              var u = c[d];
              p.dom7LiveListeners || (p.dom7LiveListeners = {}),
                p.dom7LiveListeners[u] || (p.dom7LiveListeners[u] = []),
                p.dom7LiveListeners[u].push({ listener: o, proxyListener: r }),
                p.addEventListener(u, r, n);
            }
          else
            for (d = 0; d < c.length; d += 1) {
              var f = c[d];
              p.dom7Listeners || (p.dom7Listeners = {}),
                p.dom7Listeners[f] || (p.dom7Listeners[f] = []),
                p.dom7Listeners[f].push({ listener: o, proxyListener: l }),
                p.addEventListener(f, l, n);
            }
        }
        return this;
      },
      off: function () {
        for (var t, e = [], i = arguments.length; i--; ) e[i] = arguments[i];
        var s = e[0],
          n = e[1],
          a = e[2],
          o = e[3];
        "function" == typeof e[1] &&
          ((s = (t = e)[0]), (a = t[1]), (o = t[2]), (n = void 0)),
          o || (o = !1);
        for (var r = s.split(" "), l = 0; l < r.length; l += 1)
          for (var d = r[l], c = 0; c < this.length; c += 1) {
            var h = this[c],
              p = void 0;
            if (
              (!n && h.dom7Listeners
                ? (p = h.dom7Listeners[d])
                : n && h.dom7LiveListeners && (p = h.dom7LiveListeners[d]),
              p && p.length)
            )
              for (var u = p.length - 1; 0 <= u; u -= 1) {
                var f = p[u];
                a && f.listener === a
                  ? (h.removeEventListener(d, f.proxyListener, o),
                    p.splice(u, 1))
                  : a ||
                    (h.removeEventListener(d, f.proxyListener, o),
                    p.splice(u, 1));
              }
          }
        return this;
      },
      trigger: function () {
        for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
        for (var i = t[0].split(" "), s = t[1], n = 0; n < i.length; n += 1)
          for (var a = i[n], o = 0; o < this.length; o += 1) {
            var r = this[o],
              l = void 0;
            try {
              l = new F.CustomEvent(a, {
                detail: s,
                bubbles: !0,
                cancelable: !0,
              });
            } catch (t) {
              (l = f.createEvent("Event")).initEvent(a, !0, !0), (l.detail = s);
            }
            (r.dom7EventData = t.filter(function (t, e) {
              return 0 < e;
            })),
              r.dispatchEvent(l),
              (r.dom7EventData = []),
              delete r.dom7EventData;
          }
        return this;
      },
      transitionEnd: function (e) {
        var i,
          s = ["webkitTransitionEnd", "transitionend"],
          n = this;
        function a(t) {
          if (t.target === this)
            for (e.call(this, t), i = 0; i < s.length; i += 1) n.off(s[i], a);
        }
        if (e) for (i = 0; i < s.length; i += 1) n.on(s[i], a);
        return this;
      },
      outerWidth: function (t) {
        if (0 < this.length) {
          if (t) {
            var e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (t) {
        if (0 < this.length) {
          if (t) {
            var e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      offset: function () {
        if (0 < this.length) {
          var t = this[0],
            e = t.getBoundingClientRect(),
            i = f.body,
            s = t.clientTop || i.clientTop || 0,
            n = t.clientLeft || i.clientLeft || 0,
            a = t === F ? F.scrollY : t.scrollTop,
            o = t === F ? F.scrollX : t.scrollLeft;
          return { top: e.top + a - s, left: e.left + o - n };
        }
        return null;
      },
      css: function (t, e) {
        var i;
        if (1 === arguments.length) {
          if ("string" != typeof t) {
            for (i = 0; i < this.length; i += 1)
              for (var s in t) this[i].style[s] = t[s];
            return this;
          }
          if (this[0])
            return F.getComputedStyle(this[0], null).getPropertyValue(t);
        }
        if (2 === arguments.length && "string" == typeof t) {
          for (i = 0; i < this.length; i += 1) this[i].style[t] = e;
          return this;
        }
        return this;
      },
      each: function (t) {
        if (!t) return this;
        for (var e = 0; e < this.length; e += 1)
          if (!1 === t.call(this[e], e, this[e])) return this;
        return this;
      },
      html: function (t) {
        if (void 0 === t) return this[0] ? this[0].innerHTML : void 0;
        for (var e = 0; e < this.length; e += 1) this[e].innerHTML = t;
        return this;
      },
      text: function (t) {
        if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
        for (var e = 0; e < this.length; e += 1) this[e].textContent = t;
        return this;
      },
      is: function (t) {
        var e,
          i,
          s = this[0];
        if (!s || void 0 === t) return !1;
        if ("string" == typeof t) {
          if (s.matches) return s.matches(t);
          if (s.webkitMatchesSelector) return s.webkitMatchesSelector(t);
          if (s.msMatchesSelector) return s.msMatchesSelector(t);
          for (e = L(t), i = 0; i < e.length; i += 1) if (e[i] === s) return !0;
          return !1;
        }
        if (t === f) return s === f;
        if (t === F) return s === F;
        if (t.nodeType || t instanceof l) {
          for (e = t.nodeType ? [t] : t, i = 0; i < e.length; i += 1)
            if (e[i] === s) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        var t,
          e = this[0];
        if (e) {
          for (t = 0; null !== (e = e.previousSibling); )
            1 === e.nodeType && (t += 1);
          return t;
        }
      },
      eq: function (t) {
        if (void 0 === t) return this;
        var e,
          i = this.length;
        return new l(
          i - 1 < t
            ? []
            : t < 0
            ? (e = i + t) < 0
              ? []
              : [this[e]]
            : [this[t]]
        );
      },
      append: function () {
        for (var t, e = [], i = arguments.length; i--; ) e[i] = arguments[i];
        for (var s = 0; s < e.length; s += 1) {
          t = e[s];
          for (var n = 0; n < this.length; n += 1)
            if ("string" == typeof t) {
              var a = f.createElement("div");
              for (a.innerHTML = t; a.firstChild; )
                this[n].appendChild(a.firstChild);
            } else if (t instanceof l)
              for (var o = 0; o < t.length; o += 1) this[n].appendChild(t[o]);
            else this[n].appendChild(t);
        }
        return this;
      },
      prepend: function (t) {
        var e, i;
        for (e = 0; e < this.length; e += 1)
          if ("string" == typeof t) {
            var s = f.createElement("div");
            for (s.innerHTML = t, i = s.childNodes.length - 1; 0 <= i; i -= 1)
              this[e].insertBefore(s.childNodes[i], this[e].childNodes[0]);
          } else if (t instanceof l)
            for (i = 0; i < t.length; i += 1)
              this[e].insertBefore(t[i], this[e].childNodes[0]);
          else this[e].insertBefore(t, this[e].childNodes[0]);
        return this;
      },
      next: function (t) {
        return 0 < this.length
          ? t
            ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(t)
              ? new l([this[0].nextElementSibling])
              : new l([])
            : this[0].nextElementSibling
            ? new l([this[0].nextElementSibling])
            : new l([])
          : new l([]);
      },
      nextAll: function (t) {
        var e = [],
          i = this[0];
        if (!i) return new l([]);
        for (; i.nextElementSibling; ) {
          var s = i.nextElementSibling;
          t ? L(s).is(t) && e.push(s) : e.push(s), (i = s);
        }
        return new l(e);
      },
      prev: function (t) {
        if (0 < this.length) {
          var e = this[0];
          return t
            ? e.previousElementSibling && L(e.previousElementSibling).is(t)
              ? new l([e.previousElementSibling])
              : new l([])
            : e.previousElementSibling
            ? new l([e.previousElementSibling])
            : new l([]);
        }
        return new l([]);
      },
      prevAll: function (t) {
        var e = [],
          i = this[0];
        if (!i) return new l([]);
        for (; i.previousElementSibling; ) {
          var s = i.previousElementSibling;
          t ? L(s).is(t) && e.push(s) : e.push(s), (i = s);
        }
        return new l(e);
      },
      parent: function (t) {
        for (var e = [], i = 0; i < this.length; i += 1)
          null !== this[i].parentNode &&
            (t
              ? L(this[i].parentNode).is(t) && e.push(this[i].parentNode)
              : e.push(this[i].parentNode));
        return L(a(e));
      },
      parents: function (t) {
        for (var e = [], i = 0; i < this.length; i += 1)
          for (var s = this[i].parentNode; s; )
            t ? L(s).is(t) && e.push(s) : e.push(s), (s = s.parentNode);
        return L(a(e));
      },
      closest: function (t) {
        var e = this;
        return void 0 === t
          ? new l([])
          : (e.is(t) || (e = e.parents(t).eq(0)), e);
      },
      find: function (t) {
        for (var e = [], i = 0; i < this.length; i += 1)
          for (var s = this[i].querySelectorAll(t), n = 0; n < s.length; n += 1)
            e.push(s[n]);
        return new l(e);
      },
      children: function (t) {
        for (var e = [], i = 0; i < this.length; i += 1)
          for (var s = this[i].childNodes, n = 0; n < s.length; n += 1)
            t
              ? 1 === s[n].nodeType && L(s[n]).is(t) && e.push(s[n])
              : 1 === s[n].nodeType && e.push(s[n]);
        return new l(a(e));
      },
      remove: function () {
        for (var t = 0; t < this.length; t += 1)
          this[t].parentNode && this[t].parentNode.removeChild(this[t]);
        return this;
      },
      add: function () {
        for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
        var i, s;
        for (i = 0; i < t.length; i += 1) {
          var n = L(t[i]);
          for (s = 0; s < n.length; s += 1)
            (this[this.length] = n[s]), (this.length += 1);
        }
        return this;
      },
      styles: function () {
        return this[0] ? F.getComputedStyle(this[0], null) : {};
      },
    };
    Object.keys(e).forEach(function (t) {
      L.fn[t] = e[t];
    });
    var t,
      i,
      s,
      N = {
        deleteProps: function (t) {
          var e = t;
          Object.keys(e).forEach(function (t) {
            try {
              e[t] = null;
            } catch (t) {}
            try {
              delete e[t];
            } catch (t) {}
          });
        },
        nextTick: function (t, e) {
          return void 0 === e && (e = 0), setTimeout(t, e);
        },
        now: function () {
          return Date.now();
        },
        getTranslate: function (t, e) {
          var i, s, n;
          void 0 === e && (e = "x");
          var a = F.getComputedStyle(t, null);
          return (
            F.WebKitCSSMatrix
              ? (6 < (s = a.transform || a.webkitTransform).split(",").length &&
                  (s = s
                    .split(", ")
                    .map(function (t) {
                      return t.replace(",", ".");
                    })
                    .join(", ")),
                (n = new F.WebKitCSSMatrix("none" === s ? "" : s)))
              : (i = (n =
                  a.MozTransform ||
                  a.OTransform ||
                  a.MsTransform ||
                  a.msTransform ||
                  a.transform ||
                  a
                    .getPropertyValue("transform")
                    .replace("translate(", "matrix(1, 0, 0, 1,"))
                  .toString()
                  .split(",")),
            "x" === e &&
              (s = F.WebKitCSSMatrix
                ? n.m41
                : 16 === i.length
                ? parseFloat(i[12])
                : parseFloat(i[4])),
            "y" === e &&
              (s = F.WebKitCSSMatrix
                ? n.m42
                : 16 === i.length
                ? parseFloat(i[13])
                : parseFloat(i[5])),
            s || 0
          );
        },
        parseUrlQuery: function (t) {
          var e,
            i,
            s,
            n,
            a = {},
            o = t || F.location.href;
          if ("string" == typeof o && o.length)
            for (
              n = (i = (o = -1 < o.indexOf("?") ? o.replace(/\S*\?/, "") : "")
                .split("&")
                .filter(function (t) {
                  return "" !== t;
                })).length,
                e = 0;
              e < n;
              e += 1
            )
              (s = i[e].replace(/#\S+/g, "").split("=")),
                (a[decodeURIComponent(s[0])] =
                  void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "");
          return a;
        },
        isObject: function (t) {
          return (
            "object" == typeof t &&
            null !== t &&
            t.constructor &&
            t.constructor === Object
          );
        },
        extend: function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          for (var i = Object(t[0]), s = 1; s < t.length; s += 1) {
            var n = t[s];
            if (null != n)
              for (
                var a = Object.keys(Object(n)), o = 0, r = a.length;
                o < r;
                o += 1
              ) {
                var l = a[o],
                  d = Object.getOwnPropertyDescriptor(n, l);
                void 0 !== d &&
                  d.enumerable &&
                  (N.isObject(i[l]) && N.isObject(n[l])
                    ? N.extend(i[l], n[l])
                    : !N.isObject(i[l]) && N.isObject(n[l])
                    ? ((i[l] = {}), N.extend(i[l], n[l]))
                    : (i[l] = n[l]));
              }
          }
          return i;
        },
      },
      R =
        ((s = f.createElement("div")),
        {
          touch:
            (F.Modernizr && !0 === F.Modernizr.touch) ||
            !!(
              "ontouchstart" in F ||
              (F.DocumentTouch && f instanceof F.DocumentTouch)
            ),
          pointerEvents: !(!F.navigator.pointerEnabled && !F.PointerEvent),
          prefixedPointerEvents: !!F.navigator.msPointerEnabled,
          transition:
            ((i = s.style),
            "transition" in i ||
              "webkitTransition" in i ||
              "MozTransition" in i),
          transforms3d:
            (F.Modernizr && !0 === F.Modernizr.csstransforms3d) ||
            ((t = s.style),
            "webkitPerspective" in t ||
              "MozPerspective" in t ||
              "OPerspective" in t ||
              "MsPerspective" in t ||
              "perspective" in t),
          flexbox: (function () {
            for (
              var t = s.style,
                e =
                  "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(
                    " "
                  ),
                i = 0;
              i < e.length;
              i += 1
            )
              if (e[i] in t) return !0;
            return !1;
          })(),
          observer: "MutationObserver" in F || "WebkitMutationObserver" in F,
          passiveListener: (function () {
            var t = !1;
            try {
              var e = Object.defineProperty({}, "passive", {
                get: function () {
                  t = !0;
                },
              });
              F.addEventListener("testPassiveListener", null, e);
            } catch (t) {}
            return t;
          })(),
          gestures: "ongesturestart" in F,
        }),
      n = function (t) {
        void 0 === t && (t = {});
        var e = this;
        (e.params = t),
          (e.eventsListeners = {}),
          e.params &&
            e.params.on &&
            Object.keys(e.params.on).forEach(function (t) {
              e.on(t, e.params.on[t]);
            });
      },
      o = { components: { configurable: !0 } };
    (n.prototype.on = function (t, e, i) {
      var s = this;
      if ("function" != typeof e) return s;
      var n = i ? "unshift" : "push";
      return (
        t.split(" ").forEach(function (t) {
          s.eventsListeners[t] || (s.eventsListeners[t] = []),
            s.eventsListeners[t][n](e);
        }),
        s
      );
    }),
      (n.prototype.once = function (s, n, t) {
        var a = this;
        return "function" != typeof n
          ? a
          : a.on(
              s,
              function t() {
                for (var e = [], i = arguments.length; i--; )
                  e[i] = arguments[i];
                n.apply(a, e), a.off(s, t);
              },
              t
            );
      }),
      (n.prototype.off = function (t, s) {
        var n = this;
        return (
          n.eventsListeners &&
            t.split(" ").forEach(function (i) {
              void 0 === s
                ? (n.eventsListeners[i] = [])
                : n.eventsListeners[i].forEach(function (t, e) {
                    t === s && n.eventsListeners[i].splice(e, 1);
                  });
            }),
          n
        );
      }),
      (n.prototype.emit = function () {
        for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
        var i,
          s,
          n,
          a = this;
        return (
          a.eventsListeners &&
            ("string" == typeof t[0] || Array.isArray(t[0])
              ? ((i = t[0]), (s = t.slice(1, t.length)), (n = a))
              : ((i = t[0].events), (s = t[0].data), (n = t[0].context || a)),
            (Array.isArray(i) ? i : i.split(" ")).forEach(function (t) {
              if (a.eventsListeners && a.eventsListeners[t]) {
                var e = [];
                a.eventsListeners[t].forEach(function (t) {
                  e.push(t);
                }),
                  e.forEach(function (t) {
                    t.apply(n, s);
                  });
              }
            })),
          a
        );
      }),
      (n.prototype.useModulesParams = function (i) {
        var s = this;
        s.modules &&
          Object.keys(s.modules).forEach(function (t) {
            var e = s.modules[t];
            e.params && N.extend(i, e.params);
          });
      }),
      (n.prototype.useModules = function (s) {
        void 0 === s && (s = {});
        var n = this;
        n.modules &&
          Object.keys(n.modules).forEach(function (t) {
            var i = n.modules[t],
              e = s[t] || {};
            i.instance &&
              Object.keys(i.instance).forEach(function (t) {
                var e = i.instance[t];
                n[t] = "function" == typeof e ? e.bind(n) : e;
              }),
              i.on &&
                n.on &&
                Object.keys(i.on).forEach(function (t) {
                  n.on(t, i.on[t]);
                }),
              i.create && i.create.bind(n)(e);
          });
      }),
      (o.components.set = function (t) {
        this.use && this.use(t);
      }),
      (n.installModule = function (e) {
        for (var t = [], i = arguments.length - 1; 0 < i--; )
          t[i] = arguments[i + 1];
        var s = this;
        s.prototype.modules || (s.prototype.modules = {});
        var n =
          e.name || Object.keys(s.prototype.modules).length + "_" + N.now();
        return (
          (s.prototype.modules[n] = e).proto &&
            Object.keys(e.proto).forEach(function (t) {
              s.prototype[t] = e.proto[t];
            }),
          e.static &&
            Object.keys(e.static).forEach(function (t) {
              s[t] = e.static[t];
            }),
          e.install && e.install.apply(s, t),
          s
        );
      }),
      (n.use = function (t) {
        for (var e = [], i = arguments.length - 1; 0 < i--; )
          e[i] = arguments[i + 1];
        var s = this;
        return Array.isArray(t)
          ? (t.forEach(function (t) {
              return s.installModule(t);
            }),
            s)
          : s.installModule.apply(s, [t].concat(e));
      }),
      Object.defineProperties(n, o);
    var r = {
        updateSize: function () {
          var t,
            e,
            i = this.$el;
          (t =
            void 0 !== this.params.width
              ? this.params.width
              : i[0].clientWidth),
            (e =
              void 0 !== this.params.height
                ? this.params.height
                : i[0].clientHeight),
            (0 === t && this.isHorizontal()) ||
              (0 === e && this.isVertical()) ||
              ((t =
                t -
                parseInt(i.css("padding-left"), 10) -
                parseInt(i.css("padding-right"), 10)),
              (e =
                e -
                parseInt(i.css("padding-top"), 10) -
                parseInt(i.css("padding-bottom"), 10)),
              N.extend(this, {
                width: t,
                height: e,
                size: this.isHorizontal() ? t : e,
              }));
        },
        updateSlides: function () {
          var t = this.params,
            e = this.$wrapperEl,
            i = this.size,
            s = this.rtlTranslate,
            n = this.wrongRTL,
            a = this.virtual && t.virtual.enabled,
            o = a ? this.virtual.slides.length : this.slides.length,
            r = e.children("." + this.params.slideClass),
            l = a ? this.virtual.slides.length : r.length,
            d = [],
            c = [],
            h = [],
            p = t.slidesOffsetBefore;
          "function" == typeof p && (p = t.slidesOffsetBefore.call(this));
          var u = t.slidesOffsetAfter;
          "function" == typeof u && (u = t.slidesOffsetAfter.call(this));
          var f = this.snapGrid.length,
            g = this.snapGrid.length,
            m = t.spaceBetween,
            v = -p,
            b = 0,
            y = 0;
          if (void 0 !== i) {
            var w, x;
            "string" == typeof m &&
              0 <= m.indexOf("%") &&
              (m = (parseFloat(m.replace("%", "")) / 100) * i),
              (this.virtualSize = -m),
              s
                ? r.css({ marginLeft: "", marginTop: "" })
                : r.css({ marginRight: "", marginBottom: "" }),
              1 < t.slidesPerColumn &&
                ((w =
                  Math.floor(l / t.slidesPerColumn) ===
                  l / this.params.slidesPerColumn
                    ? l
                    : Math.ceil(l / t.slidesPerColumn) * t.slidesPerColumn),
                "auto" !== t.slidesPerView &&
                  "row" === t.slidesPerColumnFill &&
                  (w = Math.max(w, t.slidesPerView * t.slidesPerColumn)));
            for (
              var T,
                S = t.slidesPerColumn,
                E = w / S,
                C = E - (t.slidesPerColumn * E - l),
                $ = 0;
              $ < l;
              $ += 1
            ) {
              x = 0;
              var P = r.eq($);
              if (1 < t.slidesPerColumn) {
                var M = void 0,
                  k = void 0,
                  L = void 0;
                "column" === t.slidesPerColumnFill
                  ? ((L = $ - (k = Math.floor($ / S)) * S),
                    (C < k || (k === C && L === S - 1)) &&
                      (L += 1) >= S &&
                      ((L = 0), (k += 1)),
                    (M = k + (L * w) / S),
                    P.css({
                      "-webkit-box-ordinal-group": M,
                      "-moz-box-ordinal-group": M,
                      "-ms-flex-order": M,
                      "-webkit-order": M,
                      order: M,
                    }))
                  : (k = $ - (L = Math.floor($ / E)) * E),
                  P.css(
                    "margin-" + (this.isHorizontal() ? "top" : "left"),
                    0 !== L && t.spaceBetween && t.spaceBetween + "px"
                  )
                    .attr("data-swiper-column", k)
                    .attr("data-swiper-row", L);
              }
              if ("none" !== P.css("display")) {
                if ("auto" === t.slidesPerView) {
                  var z = F.getComputedStyle(P[0], null),
                    I = P[0].style.transform,
                    O = P[0].style.webkitTransform;
                  I && (P[0].style.transform = "none"),
                    O && (P[0].style.webkitTransform = "none"),
                    (x = this.isHorizontal()
                      ? P[0].getBoundingClientRect().width +
                        parseFloat(z.getPropertyValue("margin-left")) +
                        parseFloat(z.getPropertyValue("margin-right"))
                      : P[0].getBoundingClientRect().height +
                        parseFloat(z.getPropertyValue("margin-top")) +
                        parseFloat(z.getPropertyValue("margin-bottom"))),
                    I && (P[0].style.transform = I),
                    O && (P[0].style.webkitTransform = O),
                    t.roundLengths && (x = Math.floor(x));
                } else
                  (x = (i - (t.slidesPerView - 1) * m) / t.slidesPerView),
                    t.roundLengths && (x = Math.floor(x)),
                    r[$] &&
                      (this.isHorizontal()
                        ? (r[$].style.width = x + "px")
                        : (r[$].style.height = x + "px"));
                r[$] && (r[$].swiperSlideSize = x),
                  h.push(x),
                  t.centeredSlides
                    ? ((v = v + x / 2 + b / 2 + m),
                      0 === b && 0 !== $ && (v = v - i / 2 - m),
                      0 === $ && (v = v - i / 2 - m),
                      Math.abs(v) < 0.001 && (v = 0),
                      t.roundLengths && (v = Math.floor(v)),
                      y % t.slidesPerGroup == 0 && d.push(v),
                      c.push(v))
                    : (t.roundLengths && (v = Math.floor(v)),
                      y % t.slidesPerGroup == 0 && d.push(v),
                      c.push(v),
                      (v = v + x + m)),
                  (this.virtualSize += x + m),
                  (b = x),
                  (y += 1);
              }
            }
            if (
              ((this.virtualSize = Math.max(this.virtualSize, i) + u),
              s &&
                n &&
                ("slide" === t.effect || "coverflow" === t.effect) &&
                e.css({ width: this.virtualSize + t.spaceBetween + "px" }),
              (R.flexbox && !t.setWrapperSize) ||
                (this.isHorizontal()
                  ? e.css({ width: this.virtualSize + t.spaceBetween + "px" })
                  : e.css({
                      height: this.virtualSize + t.spaceBetween + "px",
                    })),
              1 < t.slidesPerColumn &&
                ((this.virtualSize = (x + t.spaceBetween) * w),
                (this.virtualSize =
                  Math.ceil(this.virtualSize / t.slidesPerColumn) -
                  t.spaceBetween),
                this.isHorizontal()
                  ? e.css({ width: this.virtualSize + t.spaceBetween + "px" })
                  : e.css({ height: this.virtualSize + t.spaceBetween + "px" }),
                t.centeredSlides))
            ) {
              T = [];
              for (var A = 0; A < d.length; A += 1) {
                var D = d[A];
                t.roundLengths && (D = Math.floor(D)),
                  d[A] < this.virtualSize + d[0] && T.push(D);
              }
              d = T;
            }
            if (!t.centeredSlides) {
              T = [];
              for (var H = 0; H < d.length; H += 1) {
                var B = d[H];
                t.roundLengths && (B = Math.floor(B)),
                  d[H] <= this.virtualSize - i && T.push(B);
              }
              (d = T),
                1 <
                  Math.floor(this.virtualSize - i) -
                    Math.floor(d[d.length - 1]) && d.push(this.virtualSize - i);
            }
            0 === d.length && (d = [0]),
              0 !== t.spaceBetween &&
                (this.isHorizontal()
                  ? s
                    ? r.css({ marginLeft: m + "px" })
                    : r.css({ marginRight: m + "px" })
                  : r.css({ marginBottom: m + "px" })),
              N.extend(this, {
                slides: r,
                snapGrid: d,
                slidesGrid: c,
                slidesSizesGrid: h,
              }),
              l !== o && this.emit("slidesLengthChange"),
              d.length !== f &&
                (this.params.watchOverflow && this.checkOverflow(),
                this.emit("snapGridLengthChange")),
              c.length !== g && this.emit("slidesGridLengthChange"),
              (t.watchSlidesProgress || t.watchSlidesVisibility) &&
                this.updateSlidesOffset();
          }
        },
        updateAutoHeight: function (t) {
          var e,
            i = [],
            s = 0;
          if (
            ("number" == typeof t
              ? this.setTransition(t)
              : !0 === t && this.setTransition(this.params.speed),
            "auto" !== this.params.slidesPerView &&
              1 < this.params.slidesPerView)
          )
            for (e = 0; e < Math.ceil(this.params.slidesPerView); e += 1) {
              var n = this.activeIndex + e;
              if (n > this.slides.length) break;
              i.push(this.slides.eq(n)[0]);
            }
          else i.push(this.slides.eq(this.activeIndex)[0]);
          for (e = 0; e < i.length; e += 1)
            if (void 0 !== i[e]) {
              var a = i[e].offsetHeight;
              s = s < a ? a : s;
            }
          s && this.$wrapperEl.css("height", s + "px");
        },
        updateSlidesOffset: function () {
          for (var t = this.slides, e = 0; e < t.length; e += 1)
            t[e].swiperSlideOffset = this.isHorizontal()
              ? t[e].offsetLeft
              : t[e].offsetTop;
        },
        updateSlidesProgress: function (t) {
          void 0 === t && (t = (this && this.translate) || 0);
          var e = this.params,
            i = this.slides,
            s = this.rtlTranslate;
          if (0 !== i.length) {
            void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
            var n = -t;
            s && (n = t), i.removeClass(e.slideVisibleClass);
            for (var a = 0; a < i.length; a += 1) {
              var o = i[a],
                r =
                  (n +
                    (e.centeredSlides ? this.minTranslate() : 0) -
                    o.swiperSlideOffset) /
                  (o.swiperSlideSize + e.spaceBetween);
              if (e.watchSlidesVisibility) {
                var l = -(n - o.swiperSlideOffset),
                  d = l + this.slidesSizesGrid[a];
                ((0 <= l && l < this.size) ||
                  (0 < d && d <= this.size) ||
                  (l <= 0 && d >= this.size)) &&
                  i.eq(a).addClass(e.slideVisibleClass);
              }
              o.progress = s ? -r : r;
            }
          }
        },
        updateProgress: function (t) {
          void 0 === t && (t = (this && this.translate) || 0);
          var e = this.params,
            i = this.maxTranslate() - this.minTranslate(),
            s = this.progress,
            n = this.isBeginning,
            a = this.isEnd,
            o = n,
            r = a;
          0 === i
            ? (a = n = !(s = 0))
            : ((n = (s = (t - this.minTranslate()) / i) <= 0), (a = 1 <= s)),
            N.extend(this, { progress: s, isBeginning: n, isEnd: a }),
            (e.watchSlidesProgress || e.watchSlidesVisibility) &&
              this.updateSlidesProgress(t),
            n && !o && this.emit("reachBeginning toEdge"),
            a && !r && this.emit("reachEnd toEdge"),
            ((o && !n) || (r && !a)) && this.emit("fromEdge"),
            this.emit("progress", s);
        },
        updateSlidesClasses: function () {
          var t,
            e = this.slides,
            i = this.params,
            s = this.$wrapperEl,
            n = this.activeIndex,
            a = this.realIndex,
            o = this.virtual && i.virtual.enabled;
          e.removeClass(
            i.slideActiveClass +
              " " +
              i.slideNextClass +
              " " +
              i.slidePrevClass +
              " " +
              i.slideDuplicateActiveClass +
              " " +
              i.slideDuplicateNextClass +
              " " +
              i.slideDuplicatePrevClass
          ),
            (t = o
              ? this.$wrapperEl.find(
                  "." + i.slideClass + '[data-swiper-slide-index="' + n + '"]'
                )
              : e.eq(n)).addClass(i.slideActiveClass),
            i.loop &&
              (t.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        a +
                        '"]'
                    )
                    .addClass(i.slideDuplicateActiveClass)
                : s
                    .children(
                      "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        a +
                        '"]'
                    )
                    .addClass(i.slideDuplicateActiveClass));
          var r = t
            .nextAll("." + i.slideClass)
            .eq(0)
            .addClass(i.slideNextClass);
          i.loop && 0 === r.length && (r = e.eq(0)).addClass(i.slideNextClass);
          var l = t
            .prevAll("." + i.slideClass)
            .eq(0)
            .addClass(i.slidePrevClass);
          i.loop && 0 === l.length && (l = e.eq(-1)).addClass(i.slidePrevClass),
            i.loop &&
              (r.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        r.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicateNextClass)
                : s
                    .children(
                      "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        r.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicateNextClass),
              l.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        l.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicatePrevClass)
                : s
                    .children(
                      "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        l.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicatePrevClass));
        },
        updateActiveIndex: function (t) {
          var e,
            i = this.rtlTranslate ? this.translate : -this.translate,
            s = this.slidesGrid,
            n = this.snapGrid,
            a = this.params,
            o = this.activeIndex,
            r = this.realIndex,
            l = this.snapIndex,
            d = t;
          if (void 0 === d) {
            for (var c = 0; c < s.length; c += 1)
              void 0 !== s[c + 1]
                ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2
                  ? (d = c)
                  : i >= s[c] && i < s[c + 1] && (d = c + 1)
                : i >= s[c] && (d = c);
            a.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
          }
          if (
            ((e =
              0 <= n.indexOf(i)
                ? n.indexOf(i)
                : Math.floor(d / a.slidesPerGroup)) >= n.length &&
              (e = n.length - 1),
            d !== o)
          ) {
            var h = parseInt(
              this.slides.eq(d).attr("data-swiper-slide-index") || d,
              10
            );
            N.extend(this, {
              snapIndex: e,
              realIndex: h,
              previousIndex: o,
              activeIndex: d,
            }),
              this.emit("activeIndexChange"),
              this.emit("snapIndexChange"),
              r !== h && this.emit("realIndexChange"),
              this.emit("slideChange");
          } else
            e !== l && ((this.snapIndex = e), this.emit("snapIndexChange"));
        },
        updateClickedSlide: function (t) {
          var e = this.params,
            i = L(t.target).closest("." + e.slideClass)[0],
            s = !1;
          if (i)
            for (var n = 0; n < this.slides.length; n += 1)
              this.slides[n] === i && (s = !0);
          if (!i || !s)
            return (
              (this.clickedSlide = void 0), void (this.clickedIndex = void 0)
            );
          (this.clickedSlide = i),
            this.virtual && this.params.virtual.enabled
              ? (this.clickedIndex = parseInt(
                  L(i).attr("data-swiper-slide-index"),
                  10
                ))
              : (this.clickedIndex = L(i).index()),
            e.slideToClickedSlide &&
              void 0 !== this.clickedIndex &&
              this.clickedIndex !== this.activeIndex &&
              this.slideToClickedSlide();
        },
      },
      d = {
        getTranslate: function (t) {
          void 0 === t && (t = this.isHorizontal() ? "x" : "y");
          var e = this.params,
            i = this.rtlTranslate,
            s = this.translate,
            n = this.$wrapperEl;
          if (e.virtualTranslate) return i ? -s : s;
          var a = N.getTranslate(n[0], t);
          return i && (a = -a), a || 0;
        },
        setTranslate: function (t, e) {
          var i = this.rtlTranslate,
            s = this.params,
            n = this.$wrapperEl,
            a = this.progress,
            o = 0,
            r = 0;
          this.isHorizontal() ? (o = i ? -t : t) : (r = t),
            s.roundLengths && ((o = Math.floor(o)), (r = Math.floor(r))),
            s.virtualTranslate ||
              (R.transforms3d
                ? n.transform("translate3d(" + o + "px, " + r + "px, 0px)")
                : n.transform("translate(" + o + "px, " + r + "px)")),
            (this.previousTranslate = this.translate),
            (this.translate = this.isHorizontal() ? o : r);
          var l = this.maxTranslate() - this.minTranslate();
          (0 === l ? 0 : (t - this.minTranslate()) / l) !== a &&
            this.updateProgress(t),
            this.emit("setTranslate", this.translate, e);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
      },
      c = {
        slideTo: function (t, e, i, s) {
          void 0 === t && (t = 0),
            void 0 === e && (e = this.params.speed),
            void 0 === i && (i = !0);
          var n = this,
            a = t;
          a < 0 && (a = 0);
          var o = n.params,
            r = n.snapGrid,
            l = n.slidesGrid,
            d = n.previousIndex,
            c = n.activeIndex,
            h = n.rtlTranslate;
          if (n.animating && o.preventIntercationOnTransition) return !1;
          var p = Math.floor(a / o.slidesPerGroup);
          p >= r.length && (p = r.length - 1),
            (c || o.initialSlide || 0) === (d || 0) &&
              i &&
              n.emit("beforeSlideChangeStart");
          var u,
            f = -r[p];
          if ((n.updateProgress(f), o.normalizeSlideIndex))
            for (var g = 0; g < l.length; g += 1)
              -Math.floor(100 * f) >= Math.floor(100 * l[g]) && (a = g);
          if (n.initialized && a !== c) {
            if (!n.allowSlideNext && f < n.translate && f < n.minTranslate())
              return !1;
            if (
              !n.allowSlidePrev &&
              f > n.translate &&
              f > n.maxTranslate() &&
              (c || 0) !== a
            )
              return !1;
          }
          return (
            (u = c < a ? "next" : a < c ? "prev" : "reset"),
            (h && -f === n.translate) || (!h && f === n.translate)
              ? (n.updateActiveIndex(a),
                o.autoHeight && n.updateAutoHeight(),
                n.updateSlidesClasses(),
                "slide" !== o.effect && n.setTranslate(f),
                "reset" !== u &&
                  (n.transitionStart(i, u), n.transitionEnd(i, u)),
                !1)
              : (0 !== e && R.transition
                  ? (n.setTransition(e),
                    n.setTranslate(f),
                    n.updateActiveIndex(a),
                    n.updateSlidesClasses(),
                    n.emit("beforeTransitionStart", e, s),
                    n.transitionStart(i, u),
                    n.animating ||
                      ((n.animating = !0),
                      n.onSlideToWrapperTransitionEnd ||
                        (n.onSlideToWrapperTransitionEnd = function (t) {
                          n &&
                            !n.destroyed &&
                            t.target === this &&
                            (n.$wrapperEl[0].removeEventListener(
                              "transitionend",
                              n.onSlideToWrapperTransitionEnd
                            ),
                            n.$wrapperEl[0].removeEventListener(
                              "webkitTransitionEnd",
                              n.onSlideToWrapperTransitionEnd
                            ),
                            n.transitionEnd(i, u));
                        }),
                      n.$wrapperEl[0].addEventListener(
                        "transitionend",
                        n.onSlideToWrapperTransitionEnd
                      ),
                      n.$wrapperEl[0].addEventListener(
                        "webkitTransitionEnd",
                        n.onSlideToWrapperTransitionEnd
                      )))
                  : (n.setTransition(0),
                    n.setTranslate(f),
                    n.updateActiveIndex(a),
                    n.updateSlidesClasses(),
                    n.emit("beforeTransitionStart", e, s),
                    n.transitionStart(i, u),
                    n.transitionEnd(i, u)),
                !0)
          );
        },
        slideToLoop: function (t, e, i, s) {
          void 0 === t && (t = 0),
            void 0 === e && (e = this.params.speed),
            void 0 === i && (i = !0);
          var n = t;
          return (
            this.params.loop && (n += this.loopedSlides),
            this.slideTo(n, e, i, s)
          );
        },
        slideNext: function (t, e, i) {
          void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
          var s = this.params,
            n = this.animating;
          return s.loop
            ? !n &&
                (this.loopFix(),
                (this._clientLeft = this.$wrapperEl[0].clientLeft),
                this.slideTo(this.activeIndex + s.slidesPerGroup, t, e, i))
            : this.slideTo(this.activeIndex + s.slidesPerGroup, t, e, i);
        },
        slidePrev: function (t, e, i) {
          void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
          var s = this.params,
            n = this.animating,
            a = this.snapGrid,
            o = this.slidesGrid,
            r = this.rtlTranslate;
          if (s.loop) {
            if (n) return !1;
            this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
          }
          function l(t) {
            return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t);
          }
          var d,
            c = l(r ? this.translate : -this.translate),
            h = a.map(function (t) {
              return l(t);
            }),
            p =
              (o.map(function (t) {
                return l(t);
              }),
              a[h.indexOf(c)],
              a[h.indexOf(c) - 1]);
          return (
            void 0 !== p &&
              (d = o.indexOf(p)) < 0 &&
              (d = this.activeIndex - 1),
            this.slideTo(d, t, e, i)
          );
        },
        slideReset: function (t, e, i) {
          return (
            void 0 === t && (t = this.params.speed),
            void 0 === e && (e = !0),
            this.slideTo(this.activeIndex, t, e, i)
          );
        },
        slideToClosest: function (t, e, i) {
          void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
          var s = this.activeIndex,
            n = Math.floor(s / this.params.slidesPerGroup);
          if (n < this.snapGrid.length - 1) {
            var a = this.rtlTranslate ? this.translate : -this.translate,
              o = this.snapGrid[n];
            a - o > (this.snapGrid[n + 1] - o) / 2 &&
              (s = this.params.slidesPerGroup);
          }
          return this.slideTo(s, t, e, i);
        },
        slideToClickedSlide: function () {
          var t,
            e = this,
            i = e.params,
            s = e.$wrapperEl,
            n =
              "auto" === i.slidesPerView
                ? e.slidesPerViewDynamic()
                : i.slidesPerView,
            a = e.clickedIndex;
          if (i.loop) {
            if (e.animating) return;
            (t = parseInt(
              L(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              i.centeredSlides
                ? a < e.loopedSlides - n / 2 ||
                  a > e.slides.length - e.loopedSlides + n / 2
                  ? (e.loopFix(),
                    (a = s
                      .children(
                        "." +
                          i.slideClass +
                          '[data-swiper-slide-index="' +
                          t +
                          '"]:not(.' +
                          i.slideDuplicateClass +
                          ")"
                      )
                      .eq(0)
                      .index()),
                    N.nextTick(function () {
                      e.slideTo(a);
                    }))
                  : e.slideTo(a)
                : a > e.slides.length - n
                ? (e.loopFix(),
                  (a = s
                    .children(
                      "." +
                        i.slideClass +
                        '[data-swiper-slide-index="' +
                        t +
                        '"]:not(.' +
                        i.slideDuplicateClass +
                        ")"
                    )
                    .eq(0)
                    .index()),
                  N.nextTick(function () {
                    e.slideTo(a);
                  }))
                : e.slideTo(a);
          } else e.slideTo(a);
        },
      },
      h = {
        loopCreate: function () {
          var s = this,
            t = s.params,
            e = s.$wrapperEl;
          e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove();
          var n = e.children("." + t.slideClass);
          if (t.loopFillGroupWithBlank) {
            var i = t.slidesPerGroup - (n.length % t.slidesPerGroup);
            if (i !== t.slidesPerGroup) {
              for (var a = 0; a < i; a += 1) {
                var o = L(f.createElement("div")).addClass(
                  t.slideClass + " " + t.slideBlankClass
                );
                e.append(o);
              }
              n = e.children("." + t.slideClass);
            }
          }
          "auto" !== t.slidesPerView ||
            t.loopedSlides ||
            (t.loopedSlides = n.length),
            (s.loopedSlides = parseInt(t.loopedSlides || t.slidesPerView, 10)),
            (s.loopedSlides += t.loopAdditionalSlides),
            s.loopedSlides > n.length && (s.loopedSlides = n.length);
          var r = [],
            l = [];
          n.each(function (t, e) {
            var i = L(e);
            t < s.loopedSlides && l.push(e),
              t < n.length && t >= n.length - s.loopedSlides && r.push(e),
              i.attr("data-swiper-slide-index", t);
          });
          for (var d = 0; d < l.length; d += 1)
            e.append(L(l[d].cloneNode(!0)).addClass(t.slideDuplicateClass));
          for (var c = r.length - 1; 0 <= c; c -= 1)
            e.prepend(L(r[c].cloneNode(!0)).addClass(t.slideDuplicateClass));
        },
        loopFix: function () {
          var t,
            e = this.params,
            i = this.activeIndex,
            s = this.slides,
            n = this.loopedSlides,
            a = this.allowSlidePrev,
            o = this.allowSlideNext,
            r = this.snapGrid,
            l = this.rtlTranslate;
          (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
          var d = -r[i] - this.getTranslate();
          i < n
            ? ((t = s.length - 3 * n + i),
              (t += n),
              this.slideTo(t, 0, !1, !0) &&
                0 !== d &&
                this.setTranslate((l ? -this.translate : this.translate) - d))
            : (("auto" === e.slidesPerView && 2 * n <= i) ||
                i >= s.length - n) &&
              ((t = -s.length + i + n),
              (t += n),
              this.slideTo(t, 0, !1, !0) &&
                0 !== d &&
                this.setTranslate((l ? -this.translate : this.translate) - d)),
            (this.allowSlidePrev = a),
            (this.allowSlideNext = o);
        },
        loopDestroy: function () {
          var t = this.$wrapperEl,
            e = this.params,
            i = this.slides;
          t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove(),
            i.removeAttr("data-swiper-slide-index");
        },
      },
      p = {
        setGrabCursor: function (t) {
          if (
            !(
              R.touch ||
              !this.params.simulateTouch ||
              (this.params.watchOverflow && this.isLocked)
            )
          ) {
            var e = this.el;
            (e.style.cursor = "move"),
              (e.style.cursor = t ? "-webkit-grabbing" : "-webkit-grab"),
              (e.style.cursor = t ? "-moz-grabbin" : "-moz-grab"),
              (e.style.cursor = t ? "grabbing" : "grab");
          }
        },
        unsetGrabCursor: function () {
          R.touch ||
            (this.params.watchOverflow && this.isLocked) ||
            (this.el.style.cursor = "");
        },
      },
      u = {
        appendSlide: function (t) {
          var e = this.$wrapperEl,
            i = this.params;
          if (
            (i.loop && this.loopDestroy(),
            "object" == typeof t && "length" in t)
          )
            for (var s = 0; s < t.length; s += 1) t[s] && e.append(t[s]);
          else e.append(t);
          i.loop && this.loopCreate(),
            (i.observer && R.observer) || this.update();
        },
        prependSlide: function (t) {
          var e = this.params,
            i = this.$wrapperEl,
            s = this.activeIndex;
          e.loop && this.loopDestroy();
          var n = s + 1;
          if ("object" == typeof t && "length" in t) {
            for (var a = 0; a < t.length; a += 1) t[a] && i.prepend(t[a]);
            n = s + t.length;
          } else i.prepend(t);
          e.loop && this.loopCreate(),
            (e.observer && R.observer) || this.update(),
            this.slideTo(n, 0, !1);
        },
        addSlide: function (t, e) {
          var i = this.$wrapperEl,
            s = this.params,
            n = this.activeIndex;
          s.loop &&
            ((n -= this.loopedSlides),
            this.loopDestroy(),
            (this.slides = i.children("." + s.slideClass)));
          var a = this.slides.length;
          if (t <= 0) this.prependSlide(e);
          else if (a <= t) this.appendSlide(e);
          else {
            for (var o = t < n ? n + 1 : n, r = [], l = a - 1; t <= l; l -= 1) {
              var d = this.slides.eq(l);
              d.remove(), r.unshift(d);
            }
            if ("object" == typeof e && "length" in e) {
              for (var c = 0; c < e.length; c += 1) e[c] && i.append(e[c]);
              o = t < n ? n + e.length : n;
            } else i.append(e);
            for (var h = 0; h < r.length; h += 1) i.append(r[h]);
            s.loop && this.loopCreate(),
              (s.observer && R.observer) || this.update(),
              s.loop
                ? this.slideTo(o + this.loopedSlides, 0, !1)
                : this.slideTo(o, 0, !1);
          }
        },
        removeSlide: function (t) {
          var e = this.params,
            i = this.$wrapperEl,
            s = this.activeIndex;
          e.loop &&
            ((s -= this.loopedSlides),
            this.loopDestroy(),
            (this.slides = i.children("." + e.slideClass)));
          var n,
            a = s;
          if ("object" == typeof t && "length" in t) {
            for (var o = 0; o < t.length; o += 1)
              (n = t[o]),
                this.slides[n] && this.slides.eq(n).remove(),
                n < a && (a -= 1);
            a = Math.max(a, 0);
          } else
            (n = t),
              this.slides[n] && this.slides.eq(n).remove(),
              n < a && (a -= 1),
              (a = Math.max(a, 0));
          e.loop && this.loopCreate(),
            (e.observer && R.observer) || this.update(),
            e.loop
              ? this.slideTo(a + this.loopedSlides, 0, !1)
              : this.slideTo(a, 0, !1);
        },
        removeAllSlides: function () {
          for (var t = [], e = 0; e < this.slides.length; e += 1) t.push(e);
          this.removeSlide(t);
        },
      },
      g = (function () {
        var t = F.navigator.userAgent,
          e = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            windows: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            cordova: F.cordova || F.phonegap,
            phonegap: F.cordova || F.phonegap,
          },
          i = t.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
          s = t.match(/(Android);?[\s\/]+([\d.]+)?/),
          n = t.match(/(iPad).*OS\s([\d_]+)/),
          a = t.match(/(iPod)(.*OS\s([\d_]+))?/),
          o = !n && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (
          (i && ((e.os = "windows"), (e.osVersion = i[2]), (e.windows = !0)),
          s &&
            !i &&
            ((e.os = "android"),
            (e.osVersion = s[2]),
            (e.android = !0),
            (e.androidChrome = 0 <= t.toLowerCase().indexOf("chrome"))),
          (n || o || a) && ((e.os = "ios"), (e.ios = !0)),
          o && !a && ((e.osVersion = o[2].replace(/_/g, ".")), (e.iphone = !0)),
          n && ((e.osVersion = n[2].replace(/_/g, ".")), (e.ipad = !0)),
          a &&
            ((e.osVersion = a[3] ? a[3].replace(/_/g, ".") : null),
            (e.iphone = !0)),
          e.ios &&
            e.osVersion &&
            0 <= t.indexOf("Version/") &&
            "10" === e.osVersion.split(".")[0] &&
            (e.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]),
          (e.desktop = !(e.os || e.android || e.webView)),
          (e.webView = (o || n || a) && t.match(/.*AppleWebKit(?!.*Safari)/i)),
          e.os && "ios" === e.os)
        ) {
          var r = e.osVersion.split("."),
            l = f.querySelector('meta[name="viewport"]');
          e.minimalUi =
            !e.webView &&
            (a || o) &&
            (1 * r[0] == 7 ? 1 <= 1 * r[1] : 7 < 1 * r[0]) &&
            l &&
            0 <= l.getAttribute("content").indexOf("minimal-ui");
        }
        return (e.pixelRatio = F.devicePixelRatio || 1), e;
      })();
    function m() {
      var t = this.params,
        e = this.el;
      if (!e || 0 !== e.offsetWidth) {
        t.breakpoints && this.setBreakpoint();
        var i = this.allowSlideNext,
          s = this.allowSlidePrev,
          n = this.snapGrid;
        if (
          ((this.allowSlideNext = !0),
          (this.allowSlidePrev = !0),
          this.updateSize(),
          this.updateSlides(),
          t.freeMode)
        ) {
          var a = Math.min(
            Math.max(this.translate, this.maxTranslate()),
            this.minTranslate()
          );
          this.setTranslate(a),
            this.updateActiveIndex(),
            this.updateSlidesClasses(),
            t.autoHeight && this.updateAutoHeight();
        } else
          this.updateSlidesClasses(),
            ("auto" === t.slidesPerView || 1 < t.slidesPerView) &&
            this.isEnd &&
            !this.params.centeredSlides
              ? this.slideTo(this.slides.length - 1, 0, !1, !0)
              : this.slideTo(this.activeIndex, 0, !1, !0);
        (this.allowSlidePrev = s),
          (this.allowSlideNext = i),
          this.params.watchOverflow &&
            n !== this.snapGrid &&
            this.checkOverflow();
      }
    }
    var v,
      b = {
        attachEvents: function () {
          var t = this.params,
            e = this.touchEvents,
            i = this.el,
            s = this.wrapperEl;
          (this.onTouchStart = function (t) {
            var e = this.touchEventsData,
              i = this.params,
              s = this.touches;
            if (!this.animating || !i.preventIntercationOnTransition) {
              var n = t;
              if (
                (n.originalEvent && (n = n.originalEvent),
                (e.isTouchEvent = "touchstart" === n.type),
                (e.isTouchEvent || !("which" in n) || 3 !== n.which) &&
                  (!e.isTouched || !e.isMoved))
              )
                if (
                  i.noSwiping &&
                  L(n.target).closest(
                    i.noSwipingSelector
                      ? i.noSwipingSelector
                      : "." + i.noSwipingClass
                  )[0]
                )
                  this.allowClick = !0;
                else if (!i.swipeHandler || L(n).closest(i.swipeHandler)[0]) {
                  (s.currentX =
                    "touchstart" === n.type
                      ? n.targetTouches[0].pageX
                      : n.pageX),
                    (s.currentY =
                      "touchstart" === n.type
                        ? n.targetTouches[0].pageY
                        : n.pageY);
                  var a = s.currentX,
                    o = s.currentY;
                  if (
                    !g.ios ||
                    g.cordova ||
                    !i.iOSEdgeSwipeDetection ||
                    !(
                      a <= i.iOSEdgeSwipeThreshold ||
                      a >= F.screen.width - i.iOSEdgeSwipeThreshold
                    )
                  ) {
                    if (
                      (N.extend(e, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0,
                      }),
                      (s.startX = a),
                      (s.startY = o),
                      (e.touchStartTime = N.now()),
                      (this.allowClick = !0),
                      this.updateSize(),
                      (this.swipeDirection = void 0),
                      0 < i.threshold && (e.allowThresholdMove = !1),
                      "touchstart" !== n.type)
                    ) {
                      var r = !0;
                      L(n.target).is(e.formElements) && (r = !1),
                        f.activeElement &&
                          L(f.activeElement).is(e.formElements) &&
                          f.activeElement !== n.target &&
                          f.activeElement.blur(),
                        r && this.allowTouchMove && n.preventDefault();
                    }
                    this.emit("touchStart", n);
                  }
                }
            }
          }.bind(this)),
            (this.onTouchMove = function (t) {
              var e = this.touchEventsData,
                i = this.params,
                s = this.touches,
                n = this.rtlTranslate,
                a = t;
              if ((a.originalEvent && (a = a.originalEvent), e.isTouched)) {
                if (!e.isTouchEvent || "mousemove" !== a.type) {
                  var o =
                      "touchmove" === a.type
                        ? a.targetTouches[0].pageX
                        : a.pageX,
                    r =
                      "touchmove" === a.type
                        ? a.targetTouches[0].pageY
                        : a.pageY;
                  if (a.preventedByNestedSwiper)
                    return (s.startX = o), void (s.startY = r);
                  if (!this.allowTouchMove)
                    return (
                      (this.allowClick = !1),
                      void (
                        e.isTouched &&
                        (N.extend(s, {
                          startX: o,
                          startY: r,
                          currentX: o,
                          currentY: r,
                        }),
                        (e.touchStartTime = N.now()))
                      )
                    );
                  if (e.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                    if (this.isVertical()) {
                      if (
                        (r < s.startY &&
                          this.translate <= this.maxTranslate()) ||
                        (r > s.startY && this.translate >= this.minTranslate())
                      )
                        return (e.isTouched = !1), void (e.isMoved = !1);
                    } else if (
                      (o < s.startX && this.translate <= this.maxTranslate()) ||
                      (o > s.startX && this.translate >= this.minTranslate())
                    )
                      return;
                  if (
                    e.isTouchEvent &&
                    f.activeElement &&
                    a.target === f.activeElement &&
                    L(a.target).is(e.formElements)
                  )
                    return (e.isMoved = !0), void (this.allowClick = !1);
                  if (
                    (e.allowTouchCallbacks && this.emit("touchMove", a),
                    !(a.targetTouches && 1 < a.targetTouches.length))
                  ) {
                    (s.currentX = o), (s.currentY = r);
                    var l,
                      d = s.currentX - s.startX,
                      c = s.currentY - s.startY;
                    if (
                      (void 0 === e.isScrolling &&
                        ((this.isHorizontal() && s.currentY === s.startY) ||
                        (this.isVertical() && s.currentX === s.startX)
                          ? (e.isScrolling = !1)
                          : 25 <= d * d + c * c &&
                            ((l =
                              (180 * Math.atan2(Math.abs(c), Math.abs(d))) /
                              Math.PI),
                            (e.isScrolling = this.isHorizontal()
                              ? l > i.touchAngle
                              : 90 - l > i.touchAngle))),
                      e.isScrolling && this.emit("touchMoveOpposite", a),
                      "undefined" == typeof startMoving &&
                        ((s.currentX === s.startX && s.currentY === s.startY) ||
                          (e.startMoving = !0)),
                      e.isScrolling)
                    )
                      e.isTouched = !1;
                    else if (e.startMoving) {
                      (this.allowClick = !1),
                        a.preventDefault(),
                        i.touchMoveStopPropagation &&
                          !i.nested &&
                          a.stopPropagation(),
                        e.isMoved ||
                          (i.loop && this.loopFix(),
                          (e.startTranslate = this.getTranslate()),
                          this.setTransition(0),
                          this.animating &&
                            this.$wrapperEl.trigger(
                              "webkitTransitionEnd transitionend"
                            ),
                          (e.allowMomentumBounce = !1),
                          !i.grabCursor ||
                            (!0 !== this.allowSlideNext &&
                              !0 !== this.allowSlidePrev) ||
                            this.setGrabCursor(!0),
                          this.emit("sliderFirstMove", a)),
                        this.emit("sliderMove", a),
                        (e.isMoved = !0);
                      var h = this.isHorizontal() ? d : c;
                      (s.diff = h),
                        (h *= i.touchRatio),
                        n && (h = -h),
                        (this.swipeDirection = 0 < h ? "prev" : "next"),
                        (e.currentTranslate = h + e.startTranslate);
                      var p = !0,
                        u = i.resistanceRatio;
                      if (
                        (i.touchReleaseOnEdges && (u = 0),
                        0 < h && e.currentTranslate > this.minTranslate()
                          ? ((p = !1),
                            i.resistance &&
                              (e.currentTranslate =
                                this.minTranslate() -
                                1 +
                                Math.pow(
                                  -this.minTranslate() + e.startTranslate + h,
                                  u
                                )))
                          : h < 0 &&
                            e.currentTranslate < this.maxTranslate() &&
                            ((p = !1),
                            i.resistance &&
                              (e.currentTranslate =
                                this.maxTranslate() +
                                1 -
                                Math.pow(
                                  this.maxTranslate() - e.startTranslate - h,
                                  u
                                ))),
                        p && (a.preventedByNestedSwiper = !0),
                        !this.allowSlideNext &&
                          "next" === this.swipeDirection &&
                          e.currentTranslate < e.startTranslate &&
                          (e.currentTranslate = e.startTranslate),
                        !this.allowSlidePrev &&
                          "prev" === this.swipeDirection &&
                          e.currentTranslate > e.startTranslate &&
                          (e.currentTranslate = e.startTranslate),
                        0 < i.threshold)
                      ) {
                        if (
                          !(Math.abs(h) > i.threshold || e.allowThresholdMove)
                        )
                          return void (e.currentTranslate = e.startTranslate);
                        if (!e.allowThresholdMove)
                          return (
                            (e.allowThresholdMove = !0),
                            (s.startX = s.currentX),
                            (s.startY = s.currentY),
                            (e.currentTranslate = e.startTranslate),
                            void (s.diff = this.isHorizontal()
                              ? s.currentX - s.startX
                              : s.currentY - s.startY)
                          );
                      }
                      i.followFinger &&
                        ((i.freeMode ||
                          i.watchSlidesProgress ||
                          i.watchSlidesVisibility) &&
                          (this.updateActiveIndex(),
                          this.updateSlidesClasses()),
                        i.freeMode &&
                          (0 === e.velocities.length &&
                            e.velocities.push({
                              position:
                                s[this.isHorizontal() ? "startX" : "startY"],
                              time: e.touchStartTime,
                            }),
                          e.velocities.push({
                            position:
                              s[this.isHorizontal() ? "currentX" : "currentY"],
                            time: N.now(),
                          })),
                        this.updateProgress(e.currentTranslate),
                        this.setTranslate(e.currentTranslate));
                    }
                  }
                }
              } else
                e.startMoving &&
                  e.isScrolling &&
                  this.emit("touchMoveOpposite", a);
            }.bind(this)),
            (this.onTouchEnd = function (t) {
              var e = this,
                i = e.touchEventsData,
                s = e.params,
                n = e.touches,
                a = e.rtlTranslate,
                o = e.$wrapperEl,
                r = e.slidesGrid,
                l = e.snapGrid,
                d = t;
              if (
                (d.originalEvent && (d = d.originalEvent),
                i.allowTouchCallbacks && e.emit("touchEnd", d),
                (i.allowTouchCallbacks = !1),
                !i.isTouched)
              )
                return (
                  i.isMoved && s.grabCursor && e.setGrabCursor(!1),
                  (i.isMoved = !1),
                  void (i.startMoving = !1)
                );
              s.grabCursor &&
                i.isMoved &&
                i.isTouched &&
                (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) &&
                e.setGrabCursor(!1);
              var c,
                h = N.now(),
                p = h - i.touchStartTime;
              if (
                (e.allowClick &&
                  (e.updateClickedSlide(d),
                  e.emit("tap", d),
                  p < 300 &&
                    300 < h - i.lastClickTime &&
                    (i.clickTimeout && clearTimeout(i.clickTimeout),
                    (i.clickTimeout = N.nextTick(function () {
                      e && !e.destroyed && e.emit("click", d);
                    }, 300))),
                  p < 300 &&
                    h - i.lastClickTime < 300 &&
                    (i.clickTimeout && clearTimeout(i.clickTimeout),
                    e.emit("doubleTap", d))),
                (i.lastClickTime = N.now()),
                N.nextTick(function () {
                  e.destroyed || (e.allowClick = !0);
                }),
                !i.isTouched ||
                  !i.isMoved ||
                  !e.swipeDirection ||
                  0 === n.diff ||
                  i.currentTranslate === i.startTranslate)
              )
                return (
                  (i.isTouched = !1),
                  (i.isMoved = !1),
                  void (i.startMoving = !1)
                );
              if (
                ((i.isTouched = !1),
                (i.isMoved = !1),
                (i.startMoving = !1),
                (c = s.followFinger
                  ? a
                    ? e.translate
                    : -e.translate
                  : -i.currentTranslate),
                s.freeMode)
              ) {
                if (c < -e.minTranslate()) return void e.slideTo(e.activeIndex);
                if (c > -e.maxTranslate())
                  return void (e.slides.length < l.length
                    ? e.slideTo(l.length - 1)
                    : e.slideTo(e.slides.length - 1));
                if (s.freeModeMomentum) {
                  if (1 < i.velocities.length) {
                    var u = i.velocities.pop(),
                      f = i.velocities.pop(),
                      g = u.position - f.position,
                      m = u.time - f.time;
                    (e.velocity = g / m),
                      (e.velocity /= 2),
                      Math.abs(e.velocity) < s.freeModeMinimumVelocity &&
                        (e.velocity = 0),
                      (150 < m || 300 < N.now() - u.time) && (e.velocity = 0);
                  } else e.velocity = 0;
                  (e.velocity *= s.freeModeMomentumVelocityRatio),
                    (i.velocities.length = 0);
                  var v = 1e3 * s.freeModeMomentumRatio,
                    b = e.velocity * v,
                    y = e.translate + b;
                  a && (y = -y);
                  var w,
                    x,
                    T = !1,
                    S =
                      20 * Math.abs(e.velocity) * s.freeModeMomentumBounceRatio;
                  if (y < e.maxTranslate())
                    s.freeModeMomentumBounce
                      ? (y + e.maxTranslate() < -S &&
                          (y = e.maxTranslate() - S),
                        (w = e.maxTranslate()),
                        (T = !0),
                        (i.allowMomentumBounce = !0))
                      : (y = e.maxTranslate()),
                      s.loop && s.centeredSlides && (x = !0);
                  else if (y > e.minTranslate())
                    s.freeModeMomentumBounce
                      ? (y - e.minTranslate() > S && (y = e.minTranslate() + S),
                        (w = e.minTranslate()),
                        (T = !0),
                        (i.allowMomentumBounce = !0))
                      : (y = e.minTranslate()),
                      s.loop && s.centeredSlides && (x = !0);
                  else if (s.freeModeSticky) {
                    for (var E, C = 0; C < l.length; C += 1)
                      if (l[C] > -y) {
                        E = C;
                        break;
                      }
                    y = -(y =
                      Math.abs(l[E] - y) < Math.abs(l[E - 1] - y) ||
                      "next" === e.swipeDirection
                        ? l[E]
                        : l[E - 1]);
                  }
                  if (
                    (x &&
                      e.once("transitionEnd", function () {
                        e.loopFix();
                      }),
                    0 !== e.velocity)
                  )
                    v = a
                      ? Math.abs((-y - e.translate) / e.velocity)
                      : Math.abs((y - e.translate) / e.velocity);
                  else if (s.freeModeSticky) return void e.slideToClosest();
                  s.freeModeMomentumBounce && T
                    ? (e.updateProgress(w),
                      e.setTransition(v),
                      e.setTranslate(y),
                      e.transitionStart(!0, e.swipeDirection),
                      (e.animating = !0),
                      o.transitionEnd(function () {
                        e &&
                          !e.destroyed &&
                          i.allowMomentumBounce &&
                          (e.emit("momentumBounce"),
                          e.setTransition(s.speed),
                          e.setTranslate(w),
                          o.transitionEnd(function () {
                            e && !e.destroyed && e.transitionEnd();
                          }));
                      }))
                    : e.velocity
                    ? (e.updateProgress(y),
                      e.setTransition(v),
                      e.setTranslate(y),
                      e.transitionStart(!0, e.swipeDirection),
                      e.animating ||
                        ((e.animating = !0),
                        o.transitionEnd(function () {
                          e && !e.destroyed && e.transitionEnd();
                        })))
                    : e.updateProgress(y),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses();
                } else if (s.freeModeSticky) return void e.slideToClosest();
                (!s.freeModeMomentum || p >= s.longSwipesMs) &&
                  (e.updateProgress(),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses());
              } else {
                for (
                  var $ = 0, P = e.slidesSizesGrid[0], M = 0;
                  M < r.length;
                  M += s.slidesPerGroup
                )
                  void 0 !== r[M + s.slidesPerGroup]
                    ? c >= r[M] &&
                      c < r[M + s.slidesPerGroup] &&
                      (P = r[($ = M) + s.slidesPerGroup] - r[M])
                    : c >= r[M] &&
                      (($ = M), (P = r[r.length - 1] - r[r.length - 2]));
                var k = (c - r[$]) / P;
                if (p > s.longSwipesMs) {
                  if (!s.longSwipes) return void e.slideTo(e.activeIndex);
                  "next" === e.swipeDirection &&
                    (k >= s.longSwipesRatio
                      ? e.slideTo($ + s.slidesPerGroup)
                      : e.slideTo($)),
                    "prev" === e.swipeDirection &&
                      (k > 1 - s.longSwipesRatio
                        ? e.slideTo($ + s.slidesPerGroup)
                        : e.slideTo($));
                } else {
                  if (!s.shortSwipes) return void e.slideTo(e.activeIndex);
                  "next" === e.swipeDirection &&
                    e.slideTo($ + s.slidesPerGroup),
                    "prev" === e.swipeDirection && e.slideTo($);
                }
              }
            }.bind(this)),
            (this.onClick = function (t) {
              this.allowClick ||
                (this.params.preventClicks && t.preventDefault(),
                this.params.preventClicksPropagation &&
                  this.animating &&
                  (t.stopPropagation(), t.stopImmediatePropagation()));
            }.bind(this));
          var n = "container" === t.touchEventsTarget ? i : s,
            a = !!t.nested;
          if (R.touch || (!R.pointerEvents && !R.prefixedPointerEvents)) {
            if (R.touch) {
              var o = !(
                "touchstart" !== e.start ||
                !R.passiveListener ||
                !t.passiveListeners
              ) && { passive: !0, capture: !1 };
              n.addEventListener(e.start, this.onTouchStart, o),
                n.addEventListener(
                  e.move,
                  this.onTouchMove,
                  R.passiveListener ? { passive: !1, capture: a } : a
                ),
                n.addEventListener(e.end, this.onTouchEnd, o);
            }
            ((t.simulateTouch && !g.ios && !g.android) ||
              (t.simulateTouch && !R.touch && g.ios)) &&
              (n.addEventListener("mousedown", this.onTouchStart, !1),
              f.addEventListener("mousemove", this.onTouchMove, a),
              f.addEventListener("mouseup", this.onTouchEnd, !1));
          } else
            n.addEventListener(e.start, this.onTouchStart, !1),
              f.addEventListener(e.move, this.onTouchMove, a),
              f.addEventListener(e.end, this.onTouchEnd, !1);
          (t.preventClicks || t.preventClicksPropagation) &&
            n.addEventListener("click", this.onClick, !0),
            this.on(
              g.ios || g.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              m,
              !0
            );
        },
        detachEvents: function () {
          var t = this.params,
            e = this.touchEvents,
            i = this.el,
            s = this.wrapperEl,
            n = "container" === t.touchEventsTarget ? i : s,
            a = !!t.nested;
          if (R.touch || (!R.pointerEvents && !R.prefixedPointerEvents)) {
            if (R.touch) {
              var o = !(
                "onTouchStart" !== e.start ||
                !R.passiveListener ||
                !t.passiveListeners
              ) && { passive: !0, capture: !1 };
              n.removeEventListener(e.start, this.onTouchStart, o),
                n.removeEventListener(e.move, this.onTouchMove, a),
                n.removeEventListener(e.end, this.onTouchEnd, o);
            }
            ((t.simulateTouch && !g.ios && !g.android) ||
              (t.simulateTouch && !R.touch && g.ios)) &&
              (n.removeEventListener("mousedown", this.onTouchStart, !1),
              f.removeEventListener("mousemove", this.onTouchMove, a),
              f.removeEventListener("mouseup", this.onTouchEnd, !1));
          } else
            n.removeEventListener(e.start, this.onTouchStart, !1),
              f.removeEventListener(e.move, this.onTouchMove, a),
              f.removeEventListener(e.end, this.onTouchEnd, !1);
          (t.preventClicks || t.preventClicksPropagation) &&
            n.removeEventListener("click", this.onClick, !0),
            this.off(
              g.ios || g.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              m
            );
        },
      },
      y = {
        setBreakpoint: function () {
          var t = this.activeIndex,
            e = this.initialized,
            i = this.loopedSlides;
          void 0 === i && (i = 0);
          var s = this.params,
            n = s.breakpoints;
          if (n && (!n || 0 !== Object.keys(n).length)) {
            var a = this.getBreakpoint(n);
            if (a && this.currentBreakpoint !== a) {
              var o = a in n ? n[a] : this.originalParams,
                r = s.loop && o.slidesPerView !== s.slidesPerView;
              N.extend(this.params, o),
                N.extend(this, {
                  allowTouchMove: this.params.allowTouchMove,
                  allowSlideNext: this.params.allowSlideNext,
                  allowSlidePrev: this.params.allowSlidePrev,
                }),
                (this.currentBreakpoint = a),
                r &&
                  e &&
                  (this.loopDestroy(),
                  this.loopCreate(),
                  this.updateSlides(),
                  this.slideTo(t - i + this.loopedSlides, 0, !1)),
                this.emit("breakpoint", o);
            }
          }
        },
        getBreakpoint: function (t) {
          if (t) {
            var e = !1,
              i = [];
            Object.keys(t).forEach(function (t) {
              i.push(t);
            }),
              i.sort(function (t, e) {
                return parseInt(t, 10) - parseInt(e, 10);
              });
            for (var s = 0; s < i.length; s += 1) {
              var n = i[s];
              n >= F.innerWidth && !e && (e = n);
            }
            return e || "max";
          }
        },
      },
      z = {
        isIE:
          !!F.navigator.userAgent.match(/Trident/g) ||
          !!F.navigator.userAgent.match(/MSIE/g),
        isSafari:
          ((v = F.navigator.userAgent.toLowerCase()),
          0 <= v.indexOf("safari") &&
            v.indexOf("chrome") < 0 &&
            v.indexOf("android") < 0),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
          F.navigator.userAgent
        ),
      },
      w = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        preventIntercationOnTransition: !1,
        iOSEdgeSwipeDetection: !1,
        iOSEdgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: 0.02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
      },
      x = {
        update: r,
        translate: d,
        transition: {
          setTransition: function (t, e) {
            this.$wrapperEl.transition(t), this.emit("setTransition", t, e);
          },
          transitionStart: function (t, e) {
            void 0 === t && (t = !0);
            var i = this.activeIndex,
              s = this.params,
              n = this.previousIndex;
            s.autoHeight && this.updateAutoHeight();
            var a = e;
            if (
              (a || (a = n < i ? "next" : i < n ? "prev" : "reset"),
              this.emit("transitionStart"),
              t && i !== n)
            ) {
              if ("reset" === a)
                return void this.emit("slideResetTransitionStart");
              this.emit("slideChangeTransitionStart"),
                "next" === a
                  ? this.emit("slideNextTransitionStart")
                  : this.emit("slidePrevTransitionStart");
            }
          },
          transitionEnd: function (t, e) {
            void 0 === t && (t = !0);
            var i = this.activeIndex,
              s = this.previousIndex;
            (this.animating = !1), this.setTransition(0);
            var n = e;
            if (
              (n || (n = s < i ? "next" : i < s ? "prev" : "reset"),
              this.emit("transitionEnd"),
              t && i !== s)
            ) {
              if ("reset" === n)
                return void this.emit("slideResetTransitionEnd");
              this.emit("slideChangeTransitionEnd"),
                "next" === n
                  ? this.emit("slideNextTransitionEnd")
                  : this.emit("slidePrevTransitionEnd");
            }
          },
        },
        slide: c,
        loop: h,
        grabCursor: p,
        manipulation: u,
        events: b,
        breakpoints: y,
        checkOverflow: {
          checkOverflow: function () {
            var t = this.isLocked;
            (this.isLocked = 1 === this.snapGrid.length),
              (this.allowSlideNext = !this.isLocked),
              (this.allowSlidePrev = !this.isLocked),
              t !== this.isLocked &&
                this.emit(this.isLocked ? "lock" : "unlock"),
              t &&
                t !== this.isLocked &&
                ((this.isEnd = !1), this.navigation.update());
          },
        },
        classes: {
          addClasses: function () {
            var e = this.classNames,
              i = this.params,
              t = this.rtl,
              s = this.$el,
              n = [];
            n.push(i.direction),
              i.freeMode && n.push("free-mode"),
              R.flexbox || n.push("no-flexbox"),
              i.autoHeight && n.push("autoheight"),
              t && n.push("rtl"),
              1 < i.slidesPerColumn && n.push("multirow"),
              g.android && n.push("android"),
              g.ios && n.push("ios"),
              z.isIE &&
                (R.pointerEvents || R.prefixedPointerEvents) &&
                n.push("wp8-" + i.direction),
              n.forEach(function (t) {
                e.push(i.containerModifierClass + t);
              }),
              s.addClass(e.join(" "));
          },
          removeClasses: function () {
            var t = this.$el,
              e = this.classNames;
            t.removeClass(e.join(" "));
          },
        },
        images: {
          loadImage: function (t, e, i, s, n, a) {
            var o;
            function r() {
              a && a();
            }
            t.complete && n
              ? r()
              : e
              ? (((o = new F.Image()).onload = r),
                (o.onerror = r),
                s && (o.sizes = s),
                i && (o.srcset = i),
                e && (o.src = e))
              : r();
          },
          preloadImages: function () {
            var t = this;
            function e() {
              null != t &&
                t &&
                !t.destroyed &&
                (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1),
                t.imagesLoaded === t.imagesToLoad.length &&
                  (t.params.updateOnImagesReady && t.update(),
                  t.emit("imagesReady")));
            }
            t.imagesToLoad = t.$el.find("img");
            for (var i = 0; i < t.imagesToLoad.length; i += 1) {
              var s = t.imagesToLoad[i];
              t.loadImage(
                s,
                s.currentSrc || s.getAttribute("src"),
                s.srcset || s.getAttribute("srcset"),
                s.sizes || s.getAttribute("sizes"),
                !0,
                e
              );
            }
          },
        },
      },
      T = {},
      S = (function (p) {
        function u() {
          for (var t, e, n, i = [], s = arguments.length; s--; )
            i[s] = arguments[s];
          1 === i.length && i[0].constructor && i[0].constructor === Object
            ? (n = i[0])
            : ((e = (t = i)[0]), (n = t[1])),
            n || (n = {}),
            (n = N.extend({}, n)),
            e && !n.el && (n.el = e),
            p.call(this, n),
            Object.keys(x).forEach(function (e) {
              Object.keys(x[e]).forEach(function (t) {
                u.prototype[t] || (u.prototype[t] = x[e][t]);
              });
            });
          var a = this;
          void 0 === a.modules && (a.modules = {}),
            Object.keys(a.modules).forEach(function (t) {
              var e = a.modules[t];
              if (e.params) {
                var i = Object.keys(e.params)[0],
                  s = e.params[i];
                if ("object" != typeof s) return;
                if (!(i in n && "enabled" in s)) return;
                !0 === n[i] && (n[i] = { enabled: !0 }),
                  "object" != typeof n[i] ||
                    "enabled" in n[i] ||
                    (n[i].enabled = !0),
                  n[i] || (n[i] = { enabled: !1 });
              }
            });
          var o = N.extend({}, w);
          a.useModulesParams(o),
            (a.params = N.extend({}, o, T, n)),
            (a.originalParams = N.extend({}, a.params)),
            (a.passedParams = N.extend({}, n));
          var r = (a.$ = L)(a.params.el);
          if ((e = r[0])) {
            if (1 < r.length) {
              var l = [];
              return (
                r.each(function (t, e) {
                  var i = N.extend({}, n, { el: e });
                  l.push(new u(i));
                }),
                l
              );
            }
            (e.swiper = a), r.data("swiper", a);
            var d,
              c,
              h = r.children("." + a.params.wrapperClass);
            return (
              N.extend(a, {
                $el: r,
                el: e,
                $wrapperEl: h,
                wrapperEl: h[0],
                classNames: [],
                slides: L(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function () {
                  return "horizontal" === a.params.direction;
                },
                isVertical: function () {
                  return "vertical" === a.params.direction;
                },
                rtl:
                  "rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction"),
                rtlTranslate:
                  "horizontal" === a.params.direction &&
                  ("rtl" === e.dir.toLowerCase() ||
                    "rtl" === r.css("direction")),
                wrongRTL: "-webkit-box" === h.css("display"),
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: a.params.allowSlideNext,
                allowSlidePrev: a.params.allowSlidePrev,
                touchEvents:
                  ((d = ["touchstart", "touchmove", "touchend"]),
                  (c = ["mousedown", "mousemove", "mouseup"]),
                  R.pointerEvents
                    ? (c = ["pointerdown", "pointermove", "pointerup"])
                    : R.prefixedPointerEvents &&
                      (c = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                  (a.touchEventsTouch = { start: d[0], move: d[1], end: d[2] }),
                  (a.touchEventsDesktop = {
                    start: c[0],
                    move: c[1],
                    end: c[2],
                  }),
                  R.touch || !a.params.simulateTouch
                    ? a.touchEventsTouch
                    : a.touchEventsDesktop),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  formElements:
                    "input, select, option, textarea, button, video",
                  lastClickTime: N.now(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0,
                },
                allowClick: !0,
                allowTouchMove: a.params.allowTouchMove,
                touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0,
                },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              a.useModules(),
              a.params.init && a.init(),
              a
            );
          }
        }
        p && (u.__proto__ = p);
        var t = {
          extendedDefaults: { configurable: !0 },
          defaults: { configurable: !0 },
          Class: { configurable: !0 },
          $: { configurable: !0 },
        };
        return (
          (((u.prototype = Object.create(p && p.prototype)).constructor =
            u).prototype.slidesPerViewDynamic = function () {
            var t = this.params,
              e = this.slides,
              i = this.slidesGrid,
              s = this.size,
              n = this.activeIndex,
              a = 1;
            if (t.centeredSlides) {
              for (
                var o, r = e[n].swiperSlideSize, l = n + 1;
                l < e.length;
                l += 1
              )
                e[l] &&
                  !o &&
                  ((a += 1), (r += e[l].swiperSlideSize) > s && (o = !0));
              for (var d = n - 1; 0 <= d; d -= 1)
                e[d] &&
                  !o &&
                  ((a += 1), (r += e[d].swiperSlideSize) > s && (o = !0));
            } else
              for (var c = n + 1; c < e.length; c += 1)
                i[c] - i[n] < s && (a += 1);
            return a;
          }),
          (u.prototype.update = function () {
            var i = this;
            if (i && !i.destroyed) {
              var t = i.snapGrid,
                e = i.params;
              e.breakpoints && i.setBreakpoint(),
                i.updateSize(),
                i.updateSlides(),
                i.updateProgress(),
                i.updateSlidesClasses(),
                i.params.freeMode
                  ? (s(), i.params.autoHeight && i.updateAutoHeight())
                  : (("auto" === i.params.slidesPerView ||
                      1 < i.params.slidesPerView) &&
                    i.isEnd &&
                    !i.params.centeredSlides
                      ? i.slideTo(i.slides.length - 1, 0, !1, !0)
                      : i.slideTo(i.activeIndex, 0, !1, !0)) || s(),
                e.watchOverflow && t !== i.snapGrid && i.checkOverflow(),
                i.emit("update");
            }
            function s() {
              var t = i.rtlTranslate ? -1 * i.translate : i.translate,
                e = Math.min(Math.max(t, i.maxTranslate()), i.minTranslate());
              i.setTranslate(e), i.updateActiveIndex(), i.updateSlidesClasses();
            }
          }),
          (u.prototype.init = function () {
            this.initialized ||
              (this.emit("beforeInit"),
              this.params.breakpoints && this.setBreakpoint(),
              this.addClasses(),
              this.params.loop && this.loopCreate(),
              this.updateSize(),
              this.updateSlides(),
              this.params.watchOverflow && this.checkOverflow(),
              this.params.grabCursor && this.setGrabCursor(),
              this.params.preloadImages && this.preloadImages(),
              this.params.loop
                ? this.slideTo(
                    this.params.initialSlide + this.loopedSlides,
                    0,
                    this.params.runCallbacksOnInit
                  )
                : this.slideTo(
                    this.params.initialSlide,
                    0,
                    this.params.runCallbacksOnInit
                  ),
              this.attachEvents(),
              (this.initialized = !0),
              this.emit("init"));
          }),
          (u.prototype.destroy = function (t, e) {
            void 0 === t && (t = !0), void 0 === e && (e = !0);
            var i = this,
              s = i.params,
              n = i.$el,
              a = i.$wrapperEl,
              o = i.slides;
            return (
              void 0 === i.params ||
                i.destroyed ||
                (i.emit("beforeDestroy"),
                (i.initialized = !1),
                i.detachEvents(),
                s.loop && i.loopDestroy(),
                e &&
                  (i.removeClasses(),
                  n.removeAttr("style"),
                  a.removeAttr("style"),
                  o &&
                    o.length &&
                    o
                      .removeClass(
                        [
                          s.slideVisibleClass,
                          s.slideActiveClass,
                          s.slideNextClass,
                          s.slidePrevClass,
                        ].join(" ")
                      )
                      .removeAttr("style")
                      .removeAttr("data-swiper-slide-index")
                      .removeAttr("data-swiper-column")
                      .removeAttr("data-swiper-row")),
                i.emit("destroy"),
                Object.keys(i.eventsListeners).forEach(function (t) {
                  i.off(t);
                }),
                !1 !== t &&
                  ((i.$el[0].swiper = null),
                  i.$el.data("swiper", null),
                  N.deleteProps(i)),
                (i.destroyed = !0)),
              null
            );
          }),
          (u.extendDefaults = function (t) {
            N.extend(T, t);
          }),
          (t.extendedDefaults.get = function () {
            return T;
          }),
          (t.defaults.get = function () {
            return w;
          }),
          (t.Class.get = function () {
            return p;
          }),
          (t.$.get = function () {
            return L;
          }),
          Object.defineProperties(u, t),
          u
        );
      })(n),
      E = { name: "device", proto: { device: g }, static: { device: g } },
      C = { name: "support", proto: { support: R }, static: { support: R } },
      $ = { name: "browser", proto: { browser: z }, static: { browser: z } },
      P = {
        name: "resize",
        create: function () {
          var t = this;
          N.extend(t, {
            resize: {
              resizeHandler: function () {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (t.emit("beforeResize"), t.emit("resize"));
              },
              orientationChangeHandler: function () {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  t.emit("orientationchange");
              },
            },
          });
        },
        on: {
          init: function () {
            F.addEventListener("resize", this.resize.resizeHandler),
              F.addEventListener(
                "orientationchange",
                this.resize.orientationChangeHandler
              );
          },
          destroy: function () {
            F.removeEventListener("resize", this.resize.resizeHandler),
              F.removeEventListener(
                "orientationchange",
                this.resize.orientationChangeHandler
              );
          },
        },
      },
      M = {
        func: F.MutationObserver || F.WebkitMutationObserver,
        attach: function (t, e) {
          void 0 === e && (e = {});
          var i = this,
            s = new M.func(function (t) {
              t.forEach(function (t) {
                i.emit("observerUpdate", t);
              });
            });
          s.observe(t, {
            attributes: void 0 === e.attributes || e.attributes,
            childList: void 0 === e.childList || e.childList,
            characterData: void 0 === e.characterData || e.characterData,
          }),
            i.observer.observers.push(s);
        },
        init: function () {
          if (R.observer && this.params.observer) {
            if (this.params.observeParents)
              for (var t = this.$el.parents(), e = 0; e < t.length; e += 1)
                this.observer.attach(t[e]);
            this.observer.attach(this.$el[0], { childList: !1 }),
              this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
          }
        },
        destroy: function () {
          this.observer.observers.forEach(function (t) {
            t.disconnect();
          }),
            (this.observer.observers = []);
        },
      },
      k = {
        name: "observer",
        params: { observer: !1, observeParents: !1 },
        create: function () {
          N.extend(this, {
            observer: {
              init: M.init.bind(this),
              attach: M.attach.bind(this),
              destroy: M.destroy.bind(this),
              observers: [],
            },
          });
        },
        on: {
          init: function () {
            this.observer.init();
          },
          destroy: function () {
            this.observer.destroy();
          },
        },
      },
      I = {
        update: function (t) {
          var e = this,
            i = e.params,
            s = i.slidesPerView,
            n = i.slidesPerGroup,
            a = i.centeredSlides,
            o = e.virtual,
            r = o.from,
            l = o.to,
            d = o.slides,
            c = o.slidesGrid,
            h = o.renderSlide,
            p = o.offset;
          e.updateActiveIndex();
          var u,
            f,
            g,
            m = e.activeIndex || 0;
          (u = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top"),
            a
              ? ((f = Math.floor(s / 2) + n), (g = Math.floor(s / 2) + n))
              : ((f = s + (n - 1)), (g = n));
          var v = Math.max((m || 0) - g, 0),
            b = Math.min((m || 0) + f, d.length - 1),
            y = (e.slidesGrid[v] || 0) - (e.slidesGrid[0] || 0);
          function w() {
            e.updateSlides(),
              e.updateProgress(),
              e.updateSlidesClasses(),
              e.lazy && e.params.lazy.enabled && e.lazy.load();
          }
          if (
            (N.extend(e.virtual, {
              from: v,
              to: b,
              offset: y,
              slidesGrid: e.slidesGrid,
            }),
            r === v && l === b && !t)
          )
            return (
              e.slidesGrid !== c && y !== p && e.slides.css(u, y + "px"),
              void e.updateProgress()
            );
          if (e.params.virtual.renderExternal)
            return (
              e.params.virtual.renderExternal.call(e, {
                offset: y,
                from: v,
                to: b,
                slides: (function () {
                  for (var t = [], e = v; e <= b; e += 1) t.push(d[e]);
                  return t;
                })(),
              }),
              void w()
            );
          var x = [],
            T = [];
          if (t) e.$wrapperEl.find("." + e.params.slideClass).remove();
          else
            for (var S = r; S <= l; S += 1)
              (S < v || b < S) &&
                e.$wrapperEl
                  .find(
                    "." +
                      e.params.slideClass +
                      '[data-swiper-slide-index="' +
                      S +
                      '"]'
                  )
                  .remove();
          for (var E = 0; E < d.length; E += 1)
            v <= E &&
              E <= b &&
              (void 0 === l || t
                ? T.push(E)
                : (l < E && T.push(E), E < r && x.push(E)));
          T.forEach(function (t) {
            e.$wrapperEl.append(h(d[t], t));
          }),
            x
              .sort(function (t, e) {
                return t < e;
              })
              .forEach(function (t) {
                e.$wrapperEl.prepend(h(d[t], t));
              }),
            e.$wrapperEl.children(".swiper-slide").css(u, y + "px"),
            w();
        },
        renderSlide: function (t, e) {
          var i = this.params.virtual;
          if (i.cache && this.virtual.cache[e]) return this.virtual.cache[e];
          var s = i.renderSlide
            ? L(i.renderSlide.call(this, t, e))
            : L(
                '<div class="' +
                  this.params.slideClass +
                  '" data-swiper-slide-index="' +
                  e +
                  '">' +
                  t +
                  "</div>"
              );
          return (
            s.attr("data-swiper-slide-index") ||
              s.attr("data-swiper-slide-index", e),
            i.cache && (this.virtual.cache[e] = s),
            s
          );
        },
        appendSlide: function (t) {
          this.virtual.slides.push(t), this.virtual.update(!0);
        },
        prependSlide: function (t) {
          if ((this.virtual.slides.unshift(t), this.params.virtual.cache)) {
            var e = this.virtual.cache,
              i = {};
            Object.keys(e).forEach(function (t) {
              i[t + 1] = e[t];
            }),
              (this.virtual.cache = i);
          }
          this.virtual.update(!0), this.slideNext(0);
        },
      },
      O = {
        name: "virtual",
        params: {
          virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
          },
        },
        create: function () {
          N.extend(this, {
            virtual: {
              update: I.update.bind(this),
              appendSlide: I.appendSlide.bind(this),
              prependSlide: I.prependSlide.bind(this),
              renderSlide: I.renderSlide.bind(this),
              slides: this.params.virtual.slides,
              cache: {},
            },
          });
        },
        on: {
          beforeInit: function () {
            if (this.params.virtual.enabled) {
              this.classNames.push(
                this.params.containerModifierClass + "virtual"
              );
              var t = { watchSlidesProgress: !0 };
              N.extend(this.params, t),
                N.extend(this.originalParams, t),
                this.virtual.update();
            }
          },
          setTranslate: function () {
            this.params.virtual.enabled && this.virtual.update();
          },
        },
      },
      A = {
        handle: function (t) {
          var e = this.rtlTranslate,
            i = t;
          i.originalEvent && (i = i.originalEvent);
          var s = i.keyCode || i.charCode;
          if (
            !this.allowSlideNext &&
            ((this.isHorizontal() && 39 === s) ||
              (this.isVertical() && 40 === s))
          )
            return !1;
          if (
            !this.allowSlidePrev &&
            ((this.isHorizontal() && 37 === s) ||
              (this.isVertical() && 38 === s))
          )
            return !1;
          if (
            !(
              i.shiftKey ||
              i.altKey ||
              i.ctrlKey ||
              i.metaKey ||
              (f.activeElement &&
                f.activeElement.nodeName &&
                ("input" === f.activeElement.nodeName.toLowerCase() ||
                  "textarea" === f.activeElement.nodeName.toLowerCase()))
            )
          ) {
            if (
              this.params.keyboard.onlyInViewport &&
              (37 === s || 39 === s || 38 === s || 40 === s)
            ) {
              var n = !1;
              if (
                0 < this.$el.parents("." + this.params.slideClass).length &&
                0 ===
                  this.$el.parents("." + this.params.slideActiveClass).length
              )
                return;
              var a = F.innerWidth,
                o = F.innerHeight,
                r = this.$el.offset();
              e && (r.left -= this.$el[0].scrollLeft);
              for (
                var l = [
                    [r.left, r.top],
                    [r.left + this.width, r.top],
                    [r.left, r.top + this.height],
                    [r.left + this.width, r.top + this.height],
                  ],
                  d = 0;
                d < l.length;
                d += 1
              ) {
                var c = l[d];
                0 <= c[0] && c[0] <= a && 0 <= c[1] && c[1] <= o && (n = !0);
              }
              if (!n) return;
            }
            this.isHorizontal()
              ? ((37 !== s && 39 !== s) ||
                  (i.preventDefault
                    ? i.preventDefault()
                    : (i.returnValue = !1)),
                ((39 === s && !e) || (37 === s && e)) && this.slideNext(),
                ((37 === s && !e) || (39 === s && e)) && this.slidePrev())
              : ((38 !== s && 40 !== s) ||
                  (i.preventDefault
                    ? i.preventDefault()
                    : (i.returnValue = !1)),
                40 === s && this.slideNext(),
                38 === s && this.slidePrev()),
              this.emit("keyPress", s);
          }
        },
        enable: function () {
          this.keyboard.enabled ||
            (L(f).on("keydown", this.keyboard.handle),
            (this.keyboard.enabled = !0));
        },
        disable: function () {
          this.keyboard.enabled &&
            (L(f).off("keydown", this.keyboard.handle),
            (this.keyboard.enabled = !1));
        },
      },
      D = {
        name: "keyboard",
        params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
        create: function () {
          N.extend(this, {
            keyboard: {
              enabled: !1,
              enable: A.enable.bind(this),
              disable: A.disable.bind(this),
              handle: A.handle.bind(this),
            },
          });
        },
        on: {
          init: function () {
            this.params.keyboard.enabled && this.keyboard.enable();
          },
          destroy: function () {
            this.keyboard.enabled && this.keyboard.disable();
          },
        },
      },
      H = {
        lastScrollTime: N.now(),
        event:
          -1 < F.navigator.userAgent.indexOf("firefox")
            ? "DOMMouseScroll"
            : (function () {
                var t = "onwheel" in f;
                if (!t) {
                  var e = f.createElement("div");
                  e.setAttribute("onwheel", "return;"),
                    (t = "function" == typeof e.onwheel);
                }
                return (
                  !t &&
                    f.implementation &&
                    f.implementation.hasFeature &&
                    !0 !== f.implementation.hasFeature("", "") &&
                    (t = f.implementation.hasFeature("Events.wheel", "3.0")),
                  t
                );
              })()
            ? "wheel"
            : "mousewheel",
        normalize: function (t) {
          var e = 0,
            i = 0,
            s = 0,
            n = 0;
          return (
            "detail" in t && (i = t.detail),
            "wheelDelta" in t && (i = -t.wheelDelta / 120),
            "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120),
            "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120),
            "axis" in t && t.axis === t.HORIZONTAL_AXIS && ((e = i), (i = 0)),
            (s = 10 * e),
            (n = 10 * i),
            "deltaY" in t && (n = t.deltaY),
            "deltaX" in t && (s = t.deltaX),
            (s || n) &&
              t.deltaMode &&
              (1 === t.deltaMode
                ? ((s *= 40), (n *= 40))
                : ((s *= 800), (n *= 800))),
            s && !e && (e = s < 1 ? -1 : 1),
            n && !i && (i = n < 1 ? -1 : 1),
            { spinX: e, spinY: i, pixelX: s, pixelY: n }
          );
        },
        handleMouseEnter: function () {
          this.mouseEntered = !0;
        },
        handleMouseLeave: function () {
          this.mouseEntered = !1;
        },
        handle: function (t) {
          var e = t,
            i = this,
            s = i.params.mousewheel;
          if (!i.mouseEntered && !s.releaseOnEdges) return !0;
          e.originalEvent && (e = e.originalEvent);
          var n = 0,
            a = i.rtlTranslate ? -1 : 1,
            o = H.normalize(e);
          if (s.forceToAxis)
            if (i.isHorizontal()) {
              if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
              n = o.pixelX * a;
            } else {
              if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
              n = o.pixelY;
            }
          else
            n =
              Math.abs(o.pixelX) > Math.abs(o.pixelY)
                ? -o.pixelX * a
                : -o.pixelY;
          if (0 === n) return !0;
          if ((s.invert && (n = -n), i.params.freeMode)) {
            i.params.loop && i.loopFix();
            var r = i.getTranslate() + n * s.sensitivity,
              l = i.isBeginning,
              d = i.isEnd;
            if (
              (r >= i.minTranslate() && (r = i.minTranslate()),
              r <= i.maxTranslate() && (r = i.maxTranslate()),
              i.setTransition(0),
              i.setTranslate(r),
              i.updateProgress(),
              i.updateActiveIndex(),
              i.updateSlidesClasses(),
              ((!l && i.isBeginning) || (!d && i.isEnd)) &&
                i.updateSlidesClasses(),
              i.params.freeModeSticky &&
                (clearTimeout(i.mousewheel.timeout),
                (i.mousewheel.timeout = N.nextTick(function () {
                  i.slideToClosest();
                }, 300))),
              i.emit("scroll", e),
              i.params.autoplay &&
                i.params.autoplayDisableOnInteraction &&
                i.autoplay.stop(),
              r === i.minTranslate() || r === i.maxTranslate())
            )
              return !0;
          } else {
            if (60 < N.now() - i.mousewheel.lastScrollTime)
              if (n < 0)
                if ((i.isEnd && !i.params.loop) || i.animating) {
                  if (s.releaseOnEdges) return !0;
                } else i.slideNext(), i.emit("scroll", e);
              else if ((i.isBeginning && !i.params.loop) || i.animating) {
                if (s.releaseOnEdges) return !0;
              } else i.slidePrev(), i.emit("scroll", e);
            i.mousewheel.lastScrollTime = new F.Date().getTime();
          }
          return (
            e.preventDefault ? e.preventDefault() : (e.returnValue = !1), !1
          );
        },
        enable: function () {
          if (!H.event) return !1;
          if (this.mousewheel.enabled) return !1;
          var t = this.$el;
          return (
            "container" !== this.params.mousewheel.eventsTarged &&
              (t = L(this.params.mousewheel.eventsTarged)),
            t.on("mouseenter", this.mousewheel.handleMouseEnter),
            t.on("mouseleave", this.mousewheel.handleMouseLeave),
            t.on(H.event, this.mousewheel.handle),
            (this.mousewheel.enabled = !0)
          );
        },
        disable: function () {
          if (!H.event) return !1;
          if (!this.mousewheel.enabled) return !1;
          var t = this.$el;
          return (
            "container" !== this.params.mousewheel.eventsTarged &&
              (t = L(this.params.mousewheel.eventsTarged)),
            t.off(H.event, this.mousewheel.handle),
            !(this.mousewheel.enabled = !1)
          );
        },
      },
      B = {
        update: function () {
          var t = this.params.navigation;
          if (!this.params.loop) {
            var e = this.navigation,
              i = e.$nextEl,
              s = e.$prevEl;
            s &&
              0 < s.length &&
              (this.isBeginning
                ? s.addClass(t.disabledClass)
                : s.removeClass(t.disabledClass),
              s[
                this.params.watchOverflow && this.isLocked
                  ? "addClass"
                  : "removeClass"
              ](t.lockClass)),
              i &&
                0 < i.length &&
                (this.isEnd
                  ? i.addClass(t.disabledClass)
                  : i.removeClass(t.disabledClass),
                i[
                  this.params.watchOverflow && this.isLocked
                    ? "addClass"
                    : "removeClass"
                ](t.lockClass));
          }
        },
        init: function () {
          var t,
            e,
            i = this,
            s = i.params.navigation;
          (s.nextEl || s.prevEl) &&
            (s.nextEl &&
              ((t = L(s.nextEl)),
              i.params.uniqueNavElements &&
                "string" == typeof s.nextEl &&
                1 < t.length &&
                1 === i.$el.find(s.nextEl).length &&
                (t = i.$el.find(s.nextEl))),
            s.prevEl &&
              ((e = L(s.prevEl)),
              i.params.uniqueNavElements &&
                "string" == typeof s.prevEl &&
                1 < e.length &&
                1 === i.$el.find(s.prevEl).length &&
                (e = i.$el.find(s.prevEl))),
            t &&
              0 < t.length &&
              t.on("click", function (t) {
                t.preventDefault(),
                  (i.isEnd && !i.params.loop) || i.slideNext();
              }),
            e &&
              0 < e.length &&
              e.on("click", function (t) {
                t.preventDefault(),
                  (i.isBeginning && !i.params.loop) || i.slidePrev();
              }),
            N.extend(i.navigation, {
              $nextEl: t,
              nextEl: t && t[0],
              $prevEl: e,
              prevEl: e && e[0],
            }));
        },
        destroy: function () {
          var t = this.navigation,
            e = t.$nextEl,
            i = t.$prevEl;
          e &&
            e.length &&
            (e.off("click"),
            e.removeClass(this.params.navigation.disabledClass)),
            i &&
              i.length &&
              (i.off("click"),
              i.removeClass(this.params.navigation.disabledClass));
        },
      },
      X = {
        update: function () {
          var t = this.rtl,
            n = this.params.pagination;
          if (
            n.el &&
            this.pagination.el &&
            this.pagination.$el &&
            0 !== this.pagination.$el.length
          ) {
            var a,
              e =
                this.virtual && this.params.virtual.enabled
                  ? this.virtual.slides.length
                  : this.slides.length,
              i = this.pagination.$el,
              s = this.params.loop
                ? Math.ceil(
                    (e - 2 * this.loopedSlides) / this.params.slidesPerGroup
                  )
                : this.snapGrid.length;
            if (
              (this.params.loop
                ? ((a = Math.ceil(
                    (this.activeIndex - this.loopedSlides) /
                      this.params.slidesPerGroup
                  )) >
                    e - 1 - 2 * this.loopedSlides &&
                    (a -= e - 2 * this.loopedSlides),
                  s - 1 < a && (a -= s),
                  a < 0 &&
                    "bullets" !== this.params.paginationType &&
                    (a = s + a))
                : (a =
                    void 0 !== this.snapIndex
                      ? this.snapIndex
                      : this.activeIndex || 0),
              "bullets" === n.type &&
                this.pagination.bullets &&
                0 < this.pagination.bullets.length)
            ) {
              var o,
                r,
                l,
                d = this.pagination.bullets;
              if (
                (n.dynamicBullets &&
                  ((this.pagination.bulletSize = d
                    .eq(0)
                    [this.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                  i.css(
                    this.isHorizontal() ? "width" : "height",
                    this.pagination.bulletSize * (n.dynamicMainBullets + 4) +
                      "px"
                  ),
                  1 < n.dynamicMainBullets &&
                    void 0 !== this.previousIndex &&
                    ((this.pagination.dynamicBulletIndex +=
                      a - this.previousIndex),
                    this.pagination.dynamicBulletIndex >
                    n.dynamicMainBullets - 1
                      ? (this.pagination.dynamicBulletIndex =
                          n.dynamicMainBullets - 1)
                      : this.pagination.dynamicBulletIndex < 0 &&
                        (this.pagination.dynamicBulletIndex = 0)),
                  (o = a - this.pagination.dynamicBulletIndex),
                  (l =
                    ((r = o + (Math.min(d.length, n.dynamicMainBullets) - 1)) +
                      o) /
                    2)),
                d.removeClass(
                  n.bulletActiveClass +
                    " " +
                    n.bulletActiveClass +
                    "-next " +
                    n.bulletActiveClass +
                    "-next-next " +
                    n.bulletActiveClass +
                    "-prev " +
                    n.bulletActiveClass +
                    "-prev-prev " +
                    n.bulletActiveClass +
                    "-main"
                ),
                1 < i.length)
              )
                d.each(function (t, e) {
                  var i = L(e),
                    s = i.index();
                  s === a && i.addClass(n.bulletActiveClass),
                    n.dynamicBullets &&
                      (o <= s &&
                        s <= r &&
                        i.addClass(n.bulletActiveClass + "-main"),
                      s === o &&
                        i
                          .prev()
                          .addClass(n.bulletActiveClass + "-prev")
                          .prev()
                          .addClass(n.bulletActiveClass + "-prev-prev"),
                      s === r &&
                        i
                          .next()
                          .addClass(n.bulletActiveClass + "-next")
                          .next()
                          .addClass(n.bulletActiveClass + "-next-next"));
                });
              else if (
                (d.eq(a).addClass(n.bulletActiveClass), n.dynamicBullets)
              ) {
                for (var c = d.eq(o), h = d.eq(r), p = o; p <= r; p += 1)
                  d.eq(p).addClass(n.bulletActiveClass + "-main");
                c
                  .prev()
                  .addClass(n.bulletActiveClass + "-prev")
                  .prev()
                  .addClass(n.bulletActiveClass + "-prev-prev"),
                  h
                    .next()
                    .addClass(n.bulletActiveClass + "-next")
                    .next()
                    .addClass(n.bulletActiveClass + "-next-next");
              }
              if (n.dynamicBullets) {
                var u = Math.min(d.length, n.dynamicMainBullets + 4),
                  f =
                    (this.pagination.bulletSize * u -
                      this.pagination.bulletSize) /
                      2 -
                    l * this.pagination.bulletSize,
                  g = t ? "right" : "left";
                d.css(this.isHorizontal() ? g : "top", f + "px");
              }
            }
            if (
              ("fraction" === n.type &&
                (i
                  .find("." + n.currentClass)
                  .text(n.formatFractionCurrent(a + 1)),
                i.find("." + n.totalClass).text(n.formatFractionTotal(s))),
              "progressbar" === n.type)
            ) {
              var m;
              m = n.progressbarOpposite
                ? this.isHorizontal()
                  ? "vertical"
                  : "horizontal"
                : this.isHorizontal()
                ? "horizontal"
                : "vertical";
              var v = (a + 1) / s,
                b = 1,
                y = 1;
              "horizontal" === m ? (b = v) : (y = v),
                i
                  .find("." + n.progressbarFillClass)
                  .transform(
                    "translate3d(0,0,0) scaleX(" + b + ") scaleY(" + y + ")"
                  )
                  .transition(this.params.speed);
            }
            "custom" === n.type && n.renderCustom
              ? (i.html(n.renderCustom(this, a + 1, s)),
                this.emit("paginationRender", this, i[0]))
              : this.emit("paginationUpdate", this, i[0]),
              i[
                this.params.watchOverflow && this.isLocked
                  ? "addClass"
                  : "removeClass"
              ](n.lockClass);
          }
        },
        render: function () {
          var t = this.params.pagination;
          if (
            t.el &&
            this.pagination.el &&
            this.pagination.$el &&
            0 !== this.pagination.$el.length
          ) {
            var e =
                this.virtual && this.params.virtual.enabled
                  ? this.virtual.slides.length
                  : this.slides.length,
              i = this.pagination.$el,
              s = "";
            if ("bullets" === t.type) {
              for (
                var n = this.params.loop
                    ? Math.ceil(
                        (e - 2 * this.loopedSlides) / this.params.slidesPerGroup
                      )
                    : this.snapGrid.length,
                  a = 0;
                a < n;
                a += 1
              )
                t.renderBullet
                  ? (s += t.renderBullet.call(this, a, t.bulletClass))
                  : (s +=
                      "<" +
                      t.bulletElement +
                      ' class="' +
                      t.bulletClass +
                      '"></' +
                      t.bulletElement +
                      ">");
              i.html(s),
                (this.pagination.bullets = i.find("." + t.bulletClass));
            }
            "fraction" === t.type &&
              ((s = t.renderFraction
                ? t.renderFraction.call(this, t.currentClass, t.totalClass)
                : '<span class="' +
                  t.currentClass +
                  '"></span> / <span class="' +
                  t.totalClass +
                  '"></span>'),
              i.html(s)),
              "progressbar" === t.type &&
                ((s = t.renderProgressbar
                  ? t.renderProgressbar.call(this, t.progressbarFillClass)
                  : '<span class="' + t.progressbarFillClass + '"></span>'),
                i.html(s)),
              "custom" !== t.type &&
                this.emit("paginationRender", this.pagination.$el[0]);
          }
        },
        init: function () {
          var i = this,
            t = i.params.pagination;
          if (t.el) {
            var e = L(t.el);
            0 !== e.length &&
              (i.params.uniqueNavElements &&
                "string" == typeof t.el &&
                1 < e.length &&
                1 === i.$el.find(t.el).length &&
                (e = i.$el.find(t.el)),
              "bullets" === t.type &&
                t.clickable &&
                e.addClass(t.clickableClass),
              e.addClass(t.modifierClass + t.type),
              "bullets" === t.type &&
                t.dynamicBullets &&
                (e.addClass("" + t.modifierClass + t.type + "-dynamic"),
                (i.pagination.dynamicBulletIndex = 0),
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
              "progressbar" === t.type &&
                t.progressbarOpposite &&
                e.addClass(t.progressbarOppositeClass),
              t.clickable &&
                e.on("click", "." + t.bulletClass, function (t) {
                  t.preventDefault();
                  var e = L(this).index() * i.params.slidesPerGroup;
                  i.params.loop && (e += i.loopedSlides), i.slideTo(e);
                }),
              N.extend(i.pagination, { $el: e, el: e[0] }));
          }
        },
        destroy: function () {
          var t = this.params.pagination;
          if (
            t.el &&
            this.pagination.el &&
            this.pagination.$el &&
            0 !== this.pagination.$el.length
          ) {
            var e = this.pagination.$el;
            e.removeClass(t.hiddenClass),
              e.removeClass(t.modifierClass + t.type),
              this.pagination.bullets &&
                this.pagination.bullets.removeClass(t.bulletActiveClass),
              t.clickable && e.off("click", "." + t.bulletClass);
          }
        },
      },
      Y = {
        setTranslate: function () {
          if (this.params.scrollbar.el && this.scrollbar.el) {
            var t = this.scrollbar,
              e = this.rtlTranslate,
              i = this.progress,
              s = t.dragSize,
              n = t.trackSize,
              a = t.$dragEl,
              o = t.$el,
              r = this.params.scrollbar,
              l = s,
              d = (n - s) * i;
            e
              ? 0 < (d = -d)
                ? ((l = s - d), (d = 0))
                : n < -d + s && (l = n + d)
              : d < 0
              ? ((l = s + d), (d = 0))
              : n < d + s && (l = n - d),
              this.isHorizontal()
                ? (R.transforms3d
                    ? a.transform("translate3d(" + d + "px, 0, 0)")
                    : a.transform("translateX(" + d + "px)"),
                  (a[0].style.width = l + "px"))
                : (R.transforms3d
                    ? a.transform("translate3d(0px, " + d + "px, 0)")
                    : a.transform("translateY(" + d + "px)"),
                  (a[0].style.height = l + "px")),
              r.hide &&
                (clearTimeout(this.scrollbar.timeout),
                (o[0].style.opacity = 1),
                (this.scrollbar.timeout = setTimeout(function () {
                  (o[0].style.opacity = 0), o.transition(400);
                }, 1e3)));
          }
        },
        setTransition: function (t) {
          this.params.scrollbar.el &&
            this.scrollbar.el &&
            this.scrollbar.$dragEl.transition(t);
        },
        updateSize: function () {
          if (this.params.scrollbar.el && this.scrollbar.el) {
            var t = this.scrollbar,
              e = t.$dragEl,
              i = t.$el;
            (e[0].style.width = ""), (e[0].style.height = "");
            var s,
              n = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
              a = this.size / this.virtualSize,
              o = a * (n / this.size);
            (s =
              "auto" === this.params.scrollbar.dragSize
                ? n * a
                : parseInt(this.params.scrollbar.dragSize, 10)),
              this.isHorizontal()
                ? (e[0].style.width = s + "px")
                : (e[0].style.height = s + "px"),
              (i[0].style.display = 1 <= a ? "none" : ""),
              this.params.scrollbarHide && (i[0].style.opacity = 0),
              N.extend(t, {
                trackSize: n,
                divider: a,
                moveDivider: o,
                dragSize: s,
              }),
              t.$el[
                this.params.watchOverflow && this.isLocked
                  ? "addClass"
                  : "removeClass"
              ](this.params.scrollbar.lockClass);
          }
        },
        setDragPosition: function (t) {
          var e,
            i = this.scrollbar,
            s = this.rtlTranslate,
            n = i.$el,
            a = i.dragSize,
            o = i.trackSize;
          (e =
            ((this.isHorizontal()
              ? "touchstart" === t.type || "touchmove" === t.type
                ? t.targetTouches[0].pageX
                : t.pageX || t.clientX
              : "touchstart" === t.type || "touchmove" === t.type
              ? t.targetTouches[0].pageY
              : t.pageY || t.clientY) -
              n.offset()[this.isHorizontal() ? "left" : "top"] -
              a / 2) /
            (o - a)),
            (e = Math.max(Math.min(e, 1), 0)),
            s && (e = 1 - e);
          var r =
            this.minTranslate() +
            (this.maxTranslate() - this.minTranslate()) * e;
          this.updateProgress(r),
            this.setTranslate(r),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
        },
        onDragStart: function (t) {
          var e = this.params.scrollbar,
            i = this.scrollbar,
            s = this.$wrapperEl,
            n = i.$el,
            a = i.$dragEl;
          (this.scrollbar.isTouched = !0),
            t.preventDefault(),
            t.stopPropagation(),
            s.transition(100),
            a.transition(100),
            i.setDragPosition(t),
            clearTimeout(this.scrollbar.dragTimeout),
            n.transition(0),
            e.hide && n.css("opacity", 1),
            this.emit("scrollbarDragStart", t);
        },
        onDragMove: function (t) {
          var e = this.scrollbar,
            i = this.$wrapperEl,
            s = e.$el,
            n = e.$dragEl;
          this.scrollbar.isTouched &&
            (t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
            e.setDragPosition(t),
            i.transition(0),
            s.transition(0),
            n.transition(0),
            this.emit("scrollbarDragMove", t));
        },
        onDragEnd: function (t) {
          var e = this.params.scrollbar,
            i = this.scrollbar.$el;
          this.scrollbar.isTouched &&
            ((this.scrollbar.isTouched = !1),
            e.hide &&
              (clearTimeout(this.scrollbar.dragTimeout),
              (this.scrollbar.dragTimeout = N.nextTick(function () {
                i.css("opacity", 0), i.transition(400);
              }, 1e3))),
            this.emit("scrollbarDragEnd", t),
            e.snapOnRelease && this.slideToClosest());
        },
        enableDraggable: function () {
          if (this.params.scrollbar.el) {
            var t = this.scrollbar,
              e = this.touchEvents,
              i = this.touchEventsDesktop,
              s = this.params,
              n = t.$el[0],
              a = !(!R.passiveListener || !s.passiveListener) && {
                passive: !1,
                capture: !1,
              },
              o = !(!R.passiveListener || !s.passiveListener) && {
                passive: !0,
                capture: !1,
              };
            R.touch || (!R.pointerEvents && !R.prefixedPointerEvents)
              ? (R.touch &&
                  (n.addEventListener(e.start, this.scrollbar.onDragStart, a),
                  n.addEventListener(e.move, this.scrollbar.onDragMove, a),
                  n.addEventListener(e.end, this.scrollbar.onDragEnd, o)),
                ((s.simulateTouch && !g.ios && !g.android) ||
                  (s.simulateTouch && !R.touch && g.ios)) &&
                  (n.addEventListener(
                    "mousedown",
                    this.scrollbar.onDragStart,
                    a
                  ),
                  f.addEventListener("mousemove", this.scrollbar.onDragMove, a),
                  f.addEventListener("mouseup", this.scrollbar.onDragEnd, o)))
              : (n.addEventListener(i.start, this.scrollbar.onDragStart, a),
                f.addEventListener(i.move, this.scrollbar.onDragMove, a),
                f.addEventListener(i.end, this.scrollbar.onDragEnd, o));
          }
        },
        disableDraggable: function () {
          if (this.params.scrollbar.el) {
            var t = this.scrollbar,
              e = this.touchEvents,
              i = this.touchEventsDesktop,
              s = this.params,
              n = t.$el[0],
              a = !(!R.passiveListener || !s.passiveListener) && {
                passive: !1,
                capture: !1,
              },
              o = !(!R.passiveListener || !s.passiveListener) && {
                passive: !0,
                capture: !1,
              };
            R.touch || (!R.pointerEvents && !R.prefixedPointerEvents)
              ? (R.touch &&
                  (n.removeEventListener(
                    e.start,
                    this.scrollbar.onDragStart,
                    a
                  ),
                  n.removeEventListener(e.move, this.scrollbar.onDragMove, a),
                  n.removeEventListener(e.end, this.scrollbar.onDragEnd, o)),
                ((s.simulateTouch && !g.ios && !g.android) ||
                  (s.simulateTouch && !R.touch && g.ios)) &&
                  (n.removeEventListener(
                    "mousedown",
                    this.scrollbar.onDragStart,
                    a
                  ),
                  f.removeEventListener(
                    "mousemove",
                    this.scrollbar.onDragMove,
                    a
                  ),
                  f.removeEventListener(
                    "mouseup",
                    this.scrollbar.onDragEnd,
                    o
                  )))
              : (n.removeEventListener(i.start, this.scrollbar.onDragStart, a),
                f.removeEventListener(i.move, this.scrollbar.onDragMove, a),
                f.removeEventListener(i.end, this.scrollbar.onDragEnd, o));
          }
        },
        init: function () {
          if (this.params.scrollbar.el) {
            var t = this.scrollbar,
              e = this.$el,
              i = this.params.scrollbar,
              s = L(i.el);
            this.params.uniqueNavElements &&
              "string" == typeof i.el &&
              1 < s.length &&
              1 === e.find(i.el).length &&
              (s = e.find(i.el));
            var n = s.find("." + this.params.scrollbar.dragClass);
            0 === n.length &&
              ((n = L(
                '<div class="' + this.params.scrollbar.dragClass + '"></div>'
              )),
              s.append(n)),
              N.extend(t, { $el: s, el: s[0], $dragEl: n, dragEl: n[0] }),
              i.draggable && t.enableDraggable();
          }
        },
        destroy: function () {
          this.scrollbar.disableDraggable();
        },
      },
      _ = {
        setTransform: function (t, e) {
          var i = this.rtl,
            s = L(t),
            n = i ? -1 : 1,
            a = s.attr("data-swiper-parallax") || "0",
            o = s.attr("data-swiper-parallax-x"),
            r = s.attr("data-swiper-parallax-y"),
            l = s.attr("data-swiper-parallax-scale"),
            d = s.attr("data-swiper-parallax-opacity");
          if (
            (o || r
              ? ((o = o || "0"), (r = r || "0"))
              : this.isHorizontal()
              ? ((o = a), (r = "0"))
              : ((r = a), (o = "0")),
            (o =
              0 <= o.indexOf("%")
                ? parseInt(o, 10) * e * n + "%"
                : o * e * n + "px"),
            (r =
              0 <= r.indexOf("%") ? parseInt(r, 10) * e + "%" : r * e + "px"),
            null != d)
          ) {
            var c = d - (d - 1) * (1 - Math.abs(e));
            s[0].style.opacity = c;
          }
          if (null == l) s.transform("translate3d(" + o + ", " + r + ", 0px)");
          else {
            var h = l - (l - 1) * (1 - Math.abs(e));
            s.transform(
              "translate3d(" + o + ", " + r + ", 0px) scale(" + h + ")"
            );
          }
        },
        setTranslate: function () {
          var s = this,
            t = s.$el,
            e = s.slides,
            n = s.progress,
            a = s.snapGrid;
          t
            .children(
              "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
            )
            .each(function (t, e) {
              s.parallax.setTransform(e, n);
            }),
            e.each(function (t, e) {
              var i = e.progress;
              1 < s.params.slidesPerGroup &&
                "auto" !== s.params.slidesPerView &&
                (i += Math.ceil(t / 2) - n * (a.length - 1)),
                (i = Math.min(Math.max(i, -1), 1)),
                L(e)
                  .find(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                  )
                  .each(function (t, e) {
                    s.parallax.setTransform(e, i);
                  });
            });
        },
        setTransition: function (n) {
          void 0 === n && (n = this.params.speed),
            this.$el
              .find(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
              )
              .each(function (t, e) {
                var i = L(e),
                  s =
                    parseInt(i.attr("data-swiper-parallax-duration"), 10) || n;
                0 === n && (s = 0), i.transition(s);
              });
        },
      },
      W = {
        getDistanceBetweenTouches: function (t) {
          if (t.targetTouches.length < 2) return 1;
          var e = t.targetTouches[0].pageX,
            i = t.targetTouches[0].pageY,
            s = t.targetTouches[1].pageX,
            n = t.targetTouches[1].pageY;
          return Math.sqrt(Math.pow(s - e, 2) + Math.pow(n - i, 2));
        },
        onGestureStart: function (t) {
          var e = this.params.zoom,
            i = this.zoom,
            s = i.gesture;
          if (
            ((i.fakeGestureTouched = !1),
            (i.fakeGestureMoved = !1),
            !R.gestures)
          ) {
            if (
              "touchstart" !== t.type ||
              ("touchstart" === t.type && t.targetTouches.length < 2)
            )
              return;
            (i.fakeGestureTouched = !0),
              (s.scaleStart = W.getDistanceBetweenTouches(t));
          }
          (s.$slideEl && s.$slideEl.length) ||
          ((s.$slideEl = L(t.target).closest(".swiper-slide")),
          0 === s.$slideEl.length &&
            (s.$slideEl = this.slides.eq(this.activeIndex)),
          (s.$imageEl = s.$slideEl.find("img, svg, canvas")),
          (s.$imageWrapEl = s.$imageEl.parent("." + e.containerClass)),
          (s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || e.maxRatio),
          0 !== s.$imageWrapEl.length)
            ? (s.$imageEl.transition(0), (this.zoom.isScaling = !0))
            : (s.$imageEl = void 0);
        },
        onGestureChange: function (t) {
          var e = this.params.zoom,
            i = this.zoom,
            s = i.gesture;
          if (!R.gestures) {
            if (
              "touchmove" !== t.type ||
              ("touchmove" === t.type && t.targetTouches.length < 2)
            )
              return;
            (i.fakeGestureMoved = !0),
              (s.scaleMove = W.getDistanceBetweenTouches(t));
          }
          s.$imageEl &&
            0 !== s.$imageEl.length &&
            (R.gestures
              ? (this.zoom.scale = t.scale * i.currentScale)
              : (i.scale = (s.scaleMove / s.scaleStart) * i.currentScale),
            i.scale > s.maxRatio &&
              (i.scale =
                s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, 0.5)),
            i.scale < e.minRatio &&
              (i.scale =
                e.minRatio + 1 - Math.pow(e.minRatio - i.scale + 1, 0.5)),
            s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
        },
        onGestureEnd: function (t) {
          var e = this.params.zoom,
            i = this.zoom,
            s = i.gesture;
          if (!R.gestures) {
            if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
            if (
              "touchend" !== t.type ||
              ("touchend" === t.type &&
                t.changedTouches.length < 2 &&
                !g.android)
            )
              return;
            (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
          }
          s.$imageEl &&
            0 !== s.$imageEl.length &&
            ((i.scale = Math.max(Math.min(i.scale, s.maxRatio), e.minRatio)),
            s.$imageEl
              .transition(this.params.speed)
              .transform("translate3d(0,0,0) scale(" + i.scale + ")"),
            (i.currentScale = i.scale),
            (i.isScaling = !1),
            1 === i.scale && (s.$slideEl = void 0));
        },
        onTouchStart: function (t) {
          var e = this.zoom,
            i = e.gesture,
            s = e.image;
          i.$imageEl &&
            0 !== i.$imageEl.length &&
            (s.isTouched ||
              (g.android && t.preventDefault(),
              (s.isTouched = !0),
              (s.touchesStart.x =
                "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX),
              (s.touchesStart.y =
                "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY)));
        },
        onTouchMove: function (t) {
          var e = this.zoom,
            i = e.gesture,
            s = e.image,
            n = e.velocity;
          if (
            i.$imageEl &&
            0 !== i.$imageEl.length &&
            ((this.allowClick = !1), s.isTouched && i.$slideEl)
          ) {
            s.isMoved ||
              ((s.width = i.$imageEl[0].offsetWidth),
              (s.height = i.$imageEl[0].offsetHeight),
              (s.startX = N.getTranslate(i.$imageWrapEl[0], "x") || 0),
              (s.startY = N.getTranslate(i.$imageWrapEl[0], "y") || 0),
              (i.slideWidth = i.$slideEl[0].offsetWidth),
              (i.slideHeight = i.$slideEl[0].offsetHeight),
              i.$imageWrapEl.transition(0),
              this.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)));
            var a = s.width * e.scale,
              o = s.height * e.scale;
            if (!(a < i.slideWidth && o < i.slideHeight)) {
              if (
                ((s.minX = Math.min(i.slideWidth / 2 - a / 2, 0)),
                (s.maxX = -s.minX),
                (s.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
                (s.maxY = -s.minY),
                (s.touchesCurrent.x =
                  "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX),
                (s.touchesCurrent.y =
                  "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY),
                !s.isMoved && !e.isScaling)
              ) {
                if (
                  this.isHorizontal() &&
                  ((Math.floor(s.minX) === Math.floor(s.startX) &&
                    s.touchesCurrent.x < s.touchesStart.x) ||
                    (Math.floor(s.maxX) === Math.floor(s.startX) &&
                      s.touchesCurrent.x > s.touchesStart.x))
                )
                  return void (s.isTouched = !1);
                if (
                  !this.isHorizontal() &&
                  ((Math.floor(s.minY) === Math.floor(s.startY) &&
                    s.touchesCurrent.y < s.touchesStart.y) ||
                    (Math.floor(s.maxY) === Math.floor(s.startY) &&
                      s.touchesCurrent.y > s.touchesStart.y))
                )
                  return void (s.isTouched = !1);
              }
              t.preventDefault(),
                t.stopPropagation(),
                (s.isMoved = !0),
                (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
                (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
                s.currentX < s.minX &&
                  (s.currentX =
                    s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
                s.currentX > s.maxX &&
                  (s.currentX =
                    s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
                s.currentY < s.minY &&
                  (s.currentY =
                    s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
                s.currentY > s.maxY &&
                  (s.currentY =
                    s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
                n.prevPositionX || (n.prevPositionX = s.touchesCurrent.x),
                n.prevPositionY || (n.prevPositionY = s.touchesCurrent.y),
                n.prevTime || (n.prevTime = Date.now()),
                (n.x =
                  (s.touchesCurrent.x - n.prevPositionX) /
                  (Date.now() - n.prevTime) /
                  2),
                (n.y =
                  (s.touchesCurrent.y - n.prevPositionY) /
                  (Date.now() - n.prevTime) /
                  2),
                Math.abs(s.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0),
                Math.abs(s.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0),
                (n.prevPositionX = s.touchesCurrent.x),
                (n.prevPositionY = s.touchesCurrent.y),
                (n.prevTime = Date.now()),
                i.$imageWrapEl.transform(
                  "translate3d(" + s.currentX + "px, " + s.currentY + "px,0)"
                );
            }
          }
        },
        onTouchEnd: function () {
          var t = this.zoom,
            e = t.gesture,
            i = t.image,
            s = t.velocity;
          if (e.$imageEl && 0 !== e.$imageEl.length) {
            if (!i.isTouched || !i.isMoved)
              return (i.isTouched = !1), void (i.isMoved = !1);
            (i.isTouched = !1), (i.isMoved = !1);
            var n = 300,
              a = 300,
              o = s.x * n,
              r = i.currentX + o,
              l = s.y * a,
              d = i.currentY + l;
            0 !== s.x && (n = Math.abs((r - i.currentX) / s.x)),
              0 !== s.y && (a = Math.abs((d - i.currentY) / s.y));
            var c = Math.max(n, a);
            (i.currentX = r), (i.currentY = d);
            var h = i.width * t.scale,
              p = i.height * t.scale;
            (i.minX = Math.min(e.slideWidth / 2 - h / 2, 0)),
              (i.maxX = -i.minX),
              (i.minY = Math.min(e.slideHeight / 2 - p / 2, 0)),
              (i.maxY = -i.minY),
              (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
              (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
              e.$imageWrapEl
                .transition(c)
                .transform(
                  "translate3d(" + i.currentX + "px, " + i.currentY + "px,0)"
                );
          }
        },
        onTransitionEnd: function () {
          var t = this.zoom,
            e = t.gesture;
          e.$slideEl &&
            this.previousIndex !== this.activeIndex &&
            (e.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            e.$imageWrapEl.transform("translate3d(0,0,0)"),
            (e.$slideEl = void 0),
            (e.$imageEl = void 0),
            (e.$imageWrapEl = void 0),
            (t.scale = 1),
            (t.currentScale = 1));
        },
        toggle: function (t) {
          var e = this.zoom;
          e.scale && 1 !== e.scale ? e.out() : e.in(t);
        },
        in: function (t) {
          var e,
            i,
            s,
            n,
            a,
            o,
            r,
            l,
            d,
            c,
            h,
            p,
            u,
            f,
            g,
            m,
            v = this.zoom,
            b = this.params.zoom,
            y = v.gesture,
            w = v.image;
          y.$slideEl ||
            ((y.$slideEl = this.clickedSlide
              ? L(this.clickedSlide)
              : this.slides.eq(this.activeIndex)),
            (y.$imageEl = y.$slideEl.find("img, svg, canvas")),
            (y.$imageWrapEl = y.$imageEl.parent("." + b.containerClass))),
            y.$imageEl &&
              0 !== y.$imageEl.length &&
              (y.$slideEl.addClass("" + b.zoomedSlideClass),
              void 0 === w.touchesStart.x && t
                ? ((e =
                    "touchend" === t.type
                      ? t.changedTouches[0].pageX
                      : t.pageX),
                  (i =
                    "touchend" === t.type
                      ? t.changedTouches[0].pageY
                      : t.pageY))
                : ((e = w.touchesStart.x), (i = w.touchesStart.y)),
              (v.scale = y.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio),
              (v.currentScale =
                y.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio),
              t
                ? ((g = y.$slideEl[0].offsetWidth),
                  (m = y.$slideEl[0].offsetHeight),
                  (s = y.$slideEl.offset().left + g / 2 - e),
                  (n = y.$slideEl.offset().top + m / 2 - i),
                  (r = y.$imageEl[0].offsetWidth),
                  (l = y.$imageEl[0].offsetHeight),
                  (d = r * v.scale),
                  (c = l * v.scale),
                  (u = -(h = Math.min(g / 2 - d / 2, 0))),
                  (f = -(p = Math.min(m / 2 - c / 2, 0))),
                  (a = s * v.scale) < h && (a = h),
                  u < a && (a = u),
                  (o = n * v.scale) < p && (o = p),
                  f < o && (o = f))
                : (o = a = 0),
              y.$imageWrapEl
                .transition(300)
                .transform("translate3d(" + a + "px, " + o + "px,0)"),
              y.$imageEl
                .transition(300)
                .transform("translate3d(0,0,0) scale(" + v.scale + ")"));
        },
        out: function () {
          var t = this.zoom,
            e = this.params.zoom,
            i = t.gesture;
          i.$slideEl ||
            ((i.$slideEl = this.clickedSlide
              ? L(this.clickedSlide)
              : this.slides.eq(this.activeIndex)),
            (i.$imageEl = i.$slideEl.find("img, svg, canvas")),
            (i.$imageWrapEl = i.$imageEl.parent("." + e.containerClass))),
            i.$imageEl &&
              0 !== i.$imageEl.length &&
              ((t.scale = 1),
              (t.currentScale = 1),
              i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
              i.$imageEl
                .transition(300)
                .transform("translate3d(0,0,0) scale(1)"),
              i.$slideEl.removeClass("" + e.zoomedSlideClass),
              (i.$slideEl = void 0));
        },
        enable: function () {
          var t = this.zoom;
          if (!t.enabled) {
            t.enabled = !0;
            var e = !(
              "touchstart" !== this.touchEvents.start ||
              !R.passiveListener ||
              !this.params.passiveListeners
            ) && { passive: !0, capture: !1 };
            R.gestures
              ? (this.$wrapperEl.on(
                  "gesturestart",
                  ".swiper-slide",
                  t.onGestureStart,
                  e
                ),
                this.$wrapperEl.on(
                  "gesturechange",
                  ".swiper-slide",
                  t.onGestureChange,
                  e
                ),
                this.$wrapperEl.on(
                  "gestureend",
                  ".swiper-slide",
                  t.onGestureEnd,
                  e
                ))
              : "touchstart" === this.touchEvents.start &&
                (this.$wrapperEl.on(
                  this.touchEvents.start,
                  ".swiper-slide",
                  t.onGestureStart,
                  e
                ),
                this.$wrapperEl.on(
                  this.touchEvents.move,
                  ".swiper-slide",
                  t.onGestureChange,
                  e
                ),
                this.$wrapperEl.on(
                  this.touchEvents.end,
                  ".swiper-slide",
                  t.onGestureEnd,
                  e
                )),
              this.$wrapperEl.on(
                this.touchEvents.move,
                "." + this.params.zoom.containerClass,
                t.onTouchMove
              );
          }
        },
        disable: function () {
          var t = this.zoom;
          if (t.enabled) {
            this.zoom.enabled = !1;
            var e = !(
              "touchstart" !== this.touchEvents.start ||
              !R.passiveListener ||
              !this.params.passiveListeners
            ) && { passive: !0, capture: !1 };
            R.gestures
              ? (this.$wrapperEl.off(
                  "gesturestart",
                  ".swiper-slide",
                  t.onGestureStart,
                  e
                ),
                this.$wrapperEl.off(
                  "gesturechange",
                  ".swiper-slide",
                  t.onGestureChange,
                  e
                ),
                this.$wrapperEl.off(
                  "gestureend",
                  ".swiper-slide",
                  t.onGestureEnd,
                  e
                ))
              : "touchstart" === this.touchEvents.start &&
                (this.$wrapperEl.off(
                  this.touchEvents.start,
                  ".swiper-slide",
                  t.onGestureStart,
                  e
                ),
                this.$wrapperEl.off(
                  this.touchEvents.move,
                  ".swiper-slide",
                  t.onGestureChange,
                  e
                ),
                this.$wrapperEl.off(
                  this.touchEvents.end,
                  ".swiper-slide",
                  t.onGestureEnd,
                  e
                )),
              this.$wrapperEl.off(
                this.touchEvents.move,
                "." + this.params.zoom.containerClass,
                t.onTouchMove
              );
          }
        },
      },
      V = {
        loadInSlide: function (t, l) {
          void 0 === l && (l = !0);
          var d = this,
            c = d.params.lazy;
          if (void 0 !== t && 0 !== d.slides.length) {
            var h =
                d.virtual && d.params.virtual.enabled
                  ? d.$wrapperEl.children(
                      "." +
                        d.params.slideClass +
                        '[data-swiper-slide-index="' +
                        t +
                        '"]'
                    )
                  : d.slides.eq(t),
              e = h.find(
                "." +
                  c.elementClass +
                  ":not(." +
                  c.loadedClass +
                  "):not(." +
                  c.loadingClass +
                  ")"
              );
            !h.hasClass(c.elementClass) ||
              h.hasClass(c.loadedClass) ||
              h.hasClass(c.loadingClass) ||
              (e = e.add(h[0])),
              0 !== e.length &&
                e.each(function (t, e) {
                  var s = L(e);
                  s.addClass(c.loadingClass);
                  var n = s.attr("data-background"),
                    a = s.attr("data-src"),
                    o = s.attr("data-srcset"),
                    r = s.attr("data-sizes");
                  d.loadImage(s[0], a || n, o, r, !1, function () {
                    if (null != d && d && (!d || d.params) && !d.destroyed) {
                      if (
                        (n
                          ? (s.css("background-image", 'url("' + n + '")'),
                            s.removeAttr("data-background"))
                          : (o &&
                              (s.attr("srcset", o),
                              s.removeAttr("data-srcset")),
                            r &&
                              (s.attr("sizes", r), s.removeAttr("data-sizes")),
                            a && (s.attr("src", a), s.removeAttr("data-src"))),
                        s.addClass(c.loadedClass).removeClass(c.loadingClass),
                        h.find("." + c.preloaderClass).remove(),
                        d.params.loop && l)
                      ) {
                        var t = h.attr("data-swiper-slide-index");
                        if (h.hasClass(d.params.slideDuplicateClass)) {
                          var e = d.$wrapperEl.children(
                            '[data-swiper-slide-index="' +
                              t +
                              '"]:not(.' +
                              d.params.slideDuplicateClass +
                              ")"
                          );
                          d.lazy.loadInSlide(e.index(), !1);
                        } else {
                          var i = d.$wrapperEl.children(
                            "." +
                              d.params.slideDuplicateClass +
                              '[data-swiper-slide-index="' +
                              t +
                              '"]'
                          );
                          d.lazy.loadInSlide(i.index(), !1);
                        }
                      }
                      d.emit("lazyImageReady", h[0], s[0]);
                    }
                  }),
                    d.emit("lazyImageLoad", h[0], s[0]);
                });
          }
        },
        load: function () {
          var s = this,
            e = s.$wrapperEl,
            i = s.params,
            n = s.slides,
            t = s.activeIndex,
            a = s.virtual && i.virtual.enabled,
            o = i.lazy,
            r = i.slidesPerView;
          function l(t) {
            if (a) {
              if (
                e.children(
                  "." + i.slideClass + '[data-swiper-slide-index="' + t + '"]'
                ).length
              )
                return !0;
            } else if (n[t]) return !0;
            return !1;
          }
          function d(t) {
            return a ? L(t).attr("data-swiper-slide-index") : L(t).index();
          }
          if (
            ("auto" === r && (r = 0),
            s.lazy.initialImageLoaded || (s.lazy.initialImageLoaded = !0),
            s.params.watchSlidesVisibility)
          )
            e.children("." + i.slideVisibleClass).each(function (t, e) {
              var i = a ? L(e).attr("data-swiper-slide-index") : L(e).index();
              s.lazy.loadInSlide(i);
            });
          else if (1 < r)
            for (var c = t; c < t + r; c += 1) l(c) && s.lazy.loadInSlide(c);
          else s.lazy.loadInSlide(t);
          if (o.loadPrevNext)
            if (1 < r || (o.loadPrevNextAmount && 1 < o.loadPrevNextAmount)) {
              for (
                var h = o.loadPrevNextAmount,
                  p = r,
                  u = Math.min(t + p + Math.max(h, p), n.length),
                  f = Math.max(t - Math.max(p, h), 0),
                  g = t + r;
                g < u;
                g += 1
              )
                l(g) && s.lazy.loadInSlide(g);
              for (var m = f; m < t; m += 1) l(m) && s.lazy.loadInSlide(m);
            } else {
              var v = e.children("." + i.slideNextClass);
              0 < v.length && s.lazy.loadInSlide(d(v));
              var b = e.children("." + i.slidePrevClass);
              0 < b.length && s.lazy.loadInSlide(d(b));
            }
        },
      },
      j = {
        LinearSpline: function (t, e) {
          var i, s, n, a, o;
          return (
            (this.x = t),
            (this.y = e),
            (this.lastIndex = t.length - 1),
            (this.interpolate = function (t) {
              return t
                ? ((o = (function (t, e) {
                    for (s = -1, i = t.length; 1 < i - s; )
                      t[(n = (i + s) >> 1)] <= e ? (s = n) : (i = n);
                    return i;
                  })(this.x, t)),
                  (a = o - 1),
                  ((t - this.x[a]) * (this.y[o] - this.y[a])) /
                    (this.x[o] - this.x[a]) +
                    this.y[a])
                : 0;
            }),
            this
          );
        },
        getInterpolateFunction: function (t) {
          this.controller.spline ||
            (this.controller.spline = this.params.loop
              ? new j.LinearSpline(this.slidesGrid, t.slidesGrid)
              : new j.LinearSpline(this.snapGrid, t.snapGrid));
        },
        setTranslate: function (t, e) {
          var i,
            s,
            n = this,
            a = n.controller.control;
          function o(t) {
            var e = n.rtlTranslate ? -n.translate : n.translate;
            "slide" === n.params.controller.by &&
              (n.controller.getInterpolateFunction(t),
              (s = -n.controller.spline.interpolate(-e))),
              (s && "container" !== n.params.controller.by) ||
                ((i =
                  (t.maxTranslate() - t.minTranslate()) /
                  (n.maxTranslate() - n.minTranslate())),
                (s = (e - n.minTranslate()) * i + t.minTranslate())),
              n.params.controller.inverse && (s = t.maxTranslate() - s),
              t.updateProgress(s),
              t.setTranslate(s, n),
              t.updateActiveIndex(),
              t.updateSlidesClasses();
          }
          if (Array.isArray(a))
            for (var r = 0; r < a.length; r += 1)
              a[r] !== e && a[r] instanceof S && o(a[r]);
          else a instanceof S && e !== a && o(a);
        },
        setTransition: function (e, t) {
          var i,
            s = this,
            n = s.controller.control;
          function a(t) {
            t.setTransition(e, s),
              0 !== e &&
                (t.transitionStart(),
                t.$wrapperEl.transitionEnd(function () {
                  n &&
                    (t.params.loop &&
                      "slide" === s.params.controller.by &&
                      t.loopFix(),
                    t.transitionEnd());
                }));
          }
          if (Array.isArray(n))
            for (i = 0; i < n.length; i += 1)
              n[i] !== t && n[i] instanceof S && a(n[i]);
          else n instanceof S && t !== n && a(n);
        },
      },
      G = {
        makeElFocusable: function (t) {
          return t.attr("tabIndex", "0"), t;
        },
        addElRole: function (t, e) {
          return t.attr("role", e), t;
        },
        addElLabel: function (t, e) {
          return t.attr("aria-label", e), t;
        },
        disableEl: function (t) {
          return t.attr("aria-disabled", !0), t;
        },
        enableEl: function (t) {
          return t.attr("aria-disabled", !1), t;
        },
        onEnterKey: function (t) {
          var e = this.params.a11y;
          if (13 === t.keyCode) {
            var i = L(t.target);
            this.navigation &&
              this.navigation.$nextEl &&
              i.is(this.navigation.$nextEl) &&
              ((this.isEnd && !this.params.loop) || this.slideNext(),
              this.isEnd
                ? this.a11y.notify(e.lastSlideMessage)
                : this.a11y.notify(e.nextSlideMessage)),
              this.navigation &&
                this.navigation.$prevEl &&
                i.is(this.navigation.$prevEl) &&
                ((this.isBeginning && !this.params.loop) || this.slidePrev(),
                this.isBeginning
                  ? this.a11y.notify(e.firstSlideMessage)
                  : this.a11y.notify(e.prevSlideMessage)),
              this.pagination &&
                i.is("." + this.params.pagination.bulletClass) &&
                i[0].click();
          }
        },
        notify: function (t) {
          var e = this.a11y.liveRegion;
          0 !== e.length && (e.html(""), e.html(t));
        },
        updateNavigation: function () {
          if (!this.params.loop) {
            var t = this.navigation,
              e = t.$nextEl,
              i = t.$prevEl;
            i &&
              0 < i.length &&
              (this.isBeginning
                ? this.a11y.disableEl(i)
                : this.a11y.enableEl(i)),
              e &&
                0 < e.length &&
                (this.isEnd ? this.a11y.disableEl(e) : this.a11y.enableEl(e));
          }
        },
        updatePagination: function () {
          var s = this,
            n = s.params.a11y;
          s.pagination &&
            s.params.pagination.clickable &&
            s.pagination.bullets &&
            s.pagination.bullets.length &&
            s.pagination.bullets.each(function (t, e) {
              var i = L(e);
              s.a11y.makeElFocusable(i),
                s.a11y.addElRole(i, "button"),
                s.a11y.addElLabel(
                  i,
                  n.paginationBulletMessage.replace(/{{index}}/, i.index() + 1)
                );
            });
        },
        init: function () {
          this.$el.append(this.a11y.liveRegion);
          var t,
            e,
            i = this.params.a11y;
          this.navigation &&
            this.navigation.$nextEl &&
            (t = this.navigation.$nextEl),
            this.navigation &&
              this.navigation.$prevEl &&
              (e = this.navigation.$prevEl),
            t &&
              (this.a11y.makeElFocusable(t),
              this.a11y.addElRole(t, "button"),
              this.a11y.addElLabel(t, i.nextSlideMessage),
              t.on("keydown", this.a11y.onEnterKey)),
            e &&
              (this.a11y.makeElFocusable(e),
              this.a11y.addElRole(e, "button"),
              this.a11y.addElLabel(e, i.prevSlideMessage),
              e.on("keydown", this.a11y.onEnterKey)),
            this.pagination &&
              this.params.pagination.clickable &&
              this.pagination.bullets &&
              this.pagination.bullets.length &&
              this.pagination.$el.on(
                "keydown",
                "." + this.params.pagination.bulletClass,
                this.a11y.onEnterKey
              );
        },
        destroy: function () {
          var t, e;
          this.a11y.liveRegion &&
            0 < this.a11y.liveRegion.length &&
            this.a11y.liveRegion.remove(),
            this.navigation &&
              this.navigation.$nextEl &&
              (t = this.navigation.$nextEl),
            this.navigation &&
              this.navigation.$prevEl &&
              (e = this.navigation.$prevEl),
            t && t.off("keydown", this.a11y.onEnterKey),
            e && e.off("keydown", this.a11y.onEnterKey),
            this.pagination &&
              this.params.pagination.clickable &&
              this.pagination.bullets &&
              this.pagination.bullets.length &&
              this.pagination.$el.off(
                "keydown",
                "." + this.params.pagination.bulletClass,
                this.a11y.onEnterKey
              );
        },
      },
      q = {
        init: function () {
          if (this.params.history) {
            if (!F.history || !F.history.pushState)
              return (
                (this.params.history.enabled = !1),
                void (this.params.hashNavigation.enabled = !0)
              );
            var t = this.history;
            (t.initialized = !0),
              (t.paths = q.getPathValues()),
              (t.paths.key || t.paths.value) &&
                (t.scrollToSlide(
                  0,
                  t.paths.value,
                  this.params.runCallbacksOnInit
                ),
                this.params.history.replaceState ||
                  F.addEventListener(
                    "popstate",
                    this.history.setHistoryPopState
                  ));
          }
        },
        destroy: function () {
          this.params.history.replaceState ||
            F.removeEventListener("popstate", this.history.setHistoryPopState);
        },
        setHistoryPopState: function () {
          (this.history.paths = q.getPathValues()),
            this.history.scrollToSlide(
              this.params.speed,
              this.history.paths.value,
              !1
            );
        },
        getPathValues: function () {
          var t = F.location.pathname
              .slice(1)
              .split("/")
              .filter(function (t) {
                return "" !== t;
              }),
            e = t.length;
          return { key: t[e - 2], value: t[e - 1] };
        },
        setHistory: function (t, e) {
          if (this.history.initialized && this.params.history.enabled) {
            var i = this.slides.eq(e),
              s = q.slugify(i.attr("data-history"));
            F.location.pathname.includes(t) || (s = t + "/" + s);
            var n = F.history.state;
            (n && n.value === s) ||
              (this.params.history.replaceState
                ? F.history.replaceState({ value: s }, null, s)
                : F.history.pushState({ value: s }, null, s));
          }
        },
        slugify: function (t) {
          return t
            .toString()
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .replace(/--+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, "");
        },
        scrollToSlide: function (t, e, i) {
          if (e)
            for (var s = 0, n = this.slides.length; s < n; s += 1) {
              var a = this.slides.eq(s);
              if (
                q.slugify(a.attr("data-history")) === e &&
                !a.hasClass(this.params.slideDuplicateClass)
              ) {
                var o = a.index();
                this.slideTo(o, t, i);
              }
            }
          else this.slideTo(0, t, i);
        },
      },
      Z = {
        onHashCange: function () {
          var t = f.location.hash.replace("#", "");
          t !== this.slides.eq(this.activeIndex).attr("data-hash") &&
            this.slideTo(
              this.$wrapperEl
                .children(
                  "." + this.params.slideClass + '[data-hash="' + t + '"]'
                )
                .index()
            );
        },
        setHash: function () {
          if (
            this.hashNavigation.initialized &&
            this.params.hashNavigation.enabled
          )
            if (
              this.params.hashNavigation.replaceState &&
              F.history &&
              F.history.replaceState
            )
              F.history.replaceState(
                null,
                null,
                "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""
              );
            else {
              var t = this.slides.eq(this.activeIndex),
                e = t.attr("data-hash") || t.attr("data-history");
              f.location.hash = e || "";
            }
        },
        init: function () {
          if (
            !(
              !this.params.hashNavigation.enabled ||
              (this.params.history && this.params.history.enabled)
            )
          ) {
            this.hashNavigation.initialized = !0;
            var t = f.location.hash.replace("#", "");
            if (t)
              for (var e = 0, i = this.slides.length; e < i; e += 1) {
                var s = this.slides.eq(e);
                if (
                  (s.attr("data-hash") || s.attr("data-history")) === t &&
                  !s.hasClass(this.params.slideDuplicateClass)
                ) {
                  var n = s.index();
                  this.slideTo(n, 0, this.params.runCallbacksOnInit, !0);
                }
              }
            this.params.hashNavigation.watchState &&
              L(F).on("hashchange", this.hashNavigation.onHashCange);
          }
        },
        destroy: function () {
          this.params.hashNavigation.watchState &&
            L(F).off("hashchange", this.hashNavigation.onHashCange);
        },
      },
      U = {
        run: function () {
          var t = this,
            e = t.slides.eq(t.activeIndex),
            i = t.params.autoplay.delay;
          e.attr("data-swiper-autoplay") &&
            (i = e.attr("data-swiper-autoplay") || t.params.autoplay.delay),
            (t.autoplay.timeout = N.nextTick(function () {
              t.params.autoplay.reverseDirection
                ? t.params.loop
                  ? (t.loopFix(),
                    t.slidePrev(t.params.speed, !0, !0),
                    t.emit("autoplay"))
                  : t.isBeginning
                  ? t.params.autoplay.stopOnLastSlide
                    ? t.autoplay.stop()
                    : (t.slideTo(t.slides.length - 1, t.params.speed, !0, !0),
                      t.emit("autoplay"))
                  : (t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay"))
                : t.params.loop
                ? (t.loopFix(),
                  t.slideNext(t.params.speed, !0, !0),
                  t.emit("autoplay"))
                : t.isEnd
                ? t.params.autoplay.stopOnLastSlide
                  ? t.autoplay.stop()
                  : (t.slideTo(0, t.params.speed, !0, !0), t.emit("autoplay"))
                : (t.slideNext(t.params.speed, !0, !0), t.emit("autoplay"));
            }, i));
        },
        start: function () {
          return (
            void 0 === this.autoplay.timeout &&
            !this.autoplay.running &&
            ((this.autoplay.running = !0),
            this.emit("autoplayStart"),
            this.autoplay.run(),
            !0)
          );
        },
        stop: function () {
          return (
            !!this.autoplay.running &&
            void 0 !== this.autoplay.timeout &&
            (this.autoplay.timeout &&
              (clearTimeout(this.autoplay.timeout),
              (this.autoplay.timeout = void 0)),
            (this.autoplay.running = !1),
            this.emit("autoplayStop"),
            !0)
          );
        },
        pause: function (t) {
          this.autoplay.running &&
            (this.autoplay.paused ||
              (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
              (this.autoplay.paused = !0),
              0 !== t && this.params.autoplay.waitForTransition
                ? (this.$wrapperEl[0].addEventListener(
                    "transitionend",
                    this.autoplay.onTransitionEnd
                  ),
                  this.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    this.autoplay.onTransitionEnd
                  ))
                : ((this.autoplay.paused = !1), this.autoplay.run())));
        },
      },
      Q = {
        setTranslate: function () {
          for (var t = this.slides, e = 0; e < t.length; e += 1) {
            var i = this.slides.eq(e),
              s = -i[0].swiperSlideOffset;
            this.params.virtualTranslate || (s -= this.translate);
            var n = 0;
            this.isHorizontal() || ((n = s), (s = 0));
            var a = this.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(i[0].progress), 0)
              : 1 + Math.min(Math.max(i[0].progress, -1), 0);
            i.css({ opacity: a }).transform(
              "translate3d(" + s + "px, " + n + "px, 0px)"
            );
          }
        },
        setTransition: function (t) {
          var i = this,
            e = i.slides,
            s = i.$wrapperEl;
          if ((e.transition(t), i.params.virtualTranslate && 0 !== t)) {
            var n = !1;
            e.transitionEnd(function () {
              if (!n && i && !i.destroyed) {
                (n = !0), (i.animating = !1);
                for (
                  var t = ["webkitTransitionEnd", "transitionend"], e = 0;
                  e < t.length;
                  e += 1
                )
                  s.trigger(t[e]);
              }
            });
          }
        },
      },
      K = {
        setTranslate: function () {
          var t,
            e = this.$el,
            i = this.$wrapperEl,
            s = this.slides,
            n = this.width,
            a = this.height,
            o = this.rtlTranslate,
            r = this.size,
            l = this.params.cubeEffect,
            d = this.isHorizontal(),
            c = this.virtual && this.params.virtual.enabled,
            h = 0;
          l.shadow &&
            (d
              ? (0 === (t = i.find(".swiper-cube-shadow")).length &&
                  ((t = L('<div class="swiper-cube-shadow"></div>')),
                  i.append(t)),
                t.css({ height: n + "px" }))
              : 0 === (t = e.find(".swiper-cube-shadow")).length &&
                ((t = L('<div class="swiper-cube-shadow"></div>')),
                e.append(t)));
          for (var p = 0; p < s.length; p += 1) {
            var u = s.eq(p),
              f = p;
            c && (f = parseInt(u.attr("data-swiper-slide-index"), 10));
            var g = 90 * f,
              m = Math.floor(g / 360);
            o && ((g = -g), (m = Math.floor(-g / 360)));
            var v = Math.max(Math.min(u[0].progress, 1), -1),
              b = 0,
              y = 0,
              w = 0;
            f % 4 == 0
              ? ((b = 4 * -m * r), (w = 0))
              : (f - 1) % 4 == 0
              ? ((b = 0), (w = 4 * -m * r))
              : (f - 2) % 4 == 0
              ? ((b = r + 4 * m * r), (w = r))
              : (f - 3) % 4 == 0 && ((b = -r), (w = 3 * r + 4 * r * m)),
              o && (b = -b),
              d || ((y = b), (b = 0));
            var x =
              "rotateX(" +
              (d ? 0 : -g) +
              "deg) rotateY(" +
              (d ? g : 0) +
              "deg) translate3d(" +
              b +
              "px, " +
              y +
              "px, " +
              w +
              "px)";
            if (
              (v <= 1 &&
                -1 < v &&
                ((h = 90 * f + 90 * v), o && (h = 90 * -f - 90 * v)),
              u.transform(x),
              l.slideShadows)
            ) {
              var T = d
                  ? u.find(".swiper-slide-shadow-left")
                  : u.find(".swiper-slide-shadow-top"),
                S = d
                  ? u.find(".swiper-slide-shadow-right")
                  : u.find(".swiper-slide-shadow-bottom");
              0 === T.length &&
                ((T = L(
                  '<div class="swiper-slide-shadow-' +
                    (d ? "left" : "top") +
                    '"></div>'
                )),
                u.append(T)),
                0 === S.length &&
                  ((S = L(
                    '<div class="swiper-slide-shadow-' +
                      (d ? "right" : "bottom") +
                      '"></div>'
                  )),
                  u.append(S)),
                T.length && (T[0].style.opacity = Math.max(-v, 0)),
                S.length && (S[0].style.opacity = Math.max(v, 0));
            }
          }
          if (
            (i.css({
              "-webkit-transform-origin": "50% 50% -" + r / 2 + "px",
              "-moz-transform-origin": "50% 50% -" + r / 2 + "px",
              "-ms-transform-origin": "50% 50% -" + r / 2 + "px",
              "transform-origin": "50% 50% -" + r / 2 + "px",
            }),
            l.shadow)
          )
            if (d)
              t.transform(
                "translate3d(0px, " +
                  (n / 2 + l.shadowOffset) +
                  "px, " +
                  -n / 2 +
                  "px) rotateX(90deg) rotateZ(0deg) scale(" +
                  l.shadowScale +
                  ")"
              );
            else {
              var E = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                C =
                  1.5 -
                  (Math.sin((2 * E * Math.PI) / 360) / 2 +
                    Math.cos((2 * E * Math.PI) / 360) / 2),
                $ = l.shadowScale,
                P = l.shadowScale / C,
                M = l.shadowOffset;
              t.transform(
                "scale3d(" +
                  $ +
                  ", 1, " +
                  P +
                  ") translate3d(0px, " +
                  (a / 2 + M) +
                  "px, " +
                  -a / 2 / P +
                  "px) rotateX(-90deg)"
              );
            }
          var k = z.isSafari || z.isUiWebView ? -r / 2 : 0;
          i.transform(
            "translate3d(0px,0," +
              k +
              "px) rotateX(" +
              (this.isHorizontal() ? 0 : h) +
              "deg) rotateY(" +
              (this.isHorizontal() ? -h : 0) +
              "deg)"
          );
        },
        setTransition: function (t) {
          var e = this.$el;
          this.slides
            .transition(t)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(t),
            this.params.cubeEffect.shadow &&
              !this.isHorizontal() &&
              e.find(".swiper-cube-shadow").transition(t);
        },
      },
      J = {
        setTranslate: function () {
          for (
            var t = this.slides, e = this.rtlTranslate, i = 0;
            i < t.length;
            i += 1
          ) {
            var s = t.eq(i),
              n = s[0].progress;
            this.params.flipEffect.limitRotation &&
              (n = Math.max(Math.min(s[0].progress, 1), -1));
            var a = -180 * n,
              o = 0,
              r = -s[0].swiperSlideOffset,
              l = 0;
            if (
              (this.isHorizontal()
                ? e && (a = -a)
                : ((l = r), (o = -a), (a = r = 0)),
              (s[0].style.zIndex = -Math.abs(Math.round(n)) + t.length),
              this.params.flipEffect.slideShadows)
            ) {
              var d = this.isHorizontal()
                  ? s.find(".swiper-slide-shadow-left")
                  : s.find(".swiper-slide-shadow-top"),
                c = this.isHorizontal()
                  ? s.find(".swiper-slide-shadow-right")
                  : s.find(".swiper-slide-shadow-bottom");
              0 === d.length &&
                ((d = L(
                  '<div class="swiper-slide-shadow-' +
                    (this.isHorizontal() ? "left" : "top") +
                    '"></div>'
                )),
                s.append(d)),
                0 === c.length &&
                  ((c = L(
                    '<div class="swiper-slide-shadow-' +
                      (this.isHorizontal() ? "right" : "bottom") +
                      '"></div>'
                  )),
                  s.append(c)),
                d.length && (d[0].style.opacity = Math.max(-n, 0)),
                c.length && (c[0].style.opacity = Math.max(n, 0));
            }
            s.transform(
              "translate3d(" +
                r +
                "px, " +
                l +
                "px, 0px) rotateX(" +
                o +
                "deg) rotateY(" +
                a +
                "deg)"
            );
          }
        },
        setTransition: function (t) {
          var i = this,
            e = i.slides,
            s = i.activeIndex,
            n = i.$wrapperEl;
          if (
            (e
              .transition(t)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(t),
            i.params.virtualTranslate && 0 !== t)
          ) {
            var a = !1;
            e.eq(s).transitionEnd(function () {
              if (!a && i && !i.destroyed) {
                (a = !0), (i.animating = !1);
                for (
                  var t = ["webkitTransitionEnd", "transitionend"], e = 0;
                  e < t.length;
                  e += 1
                )
                  n.trigger(t[e]);
              }
            });
          }
        },
      },
      tt = {
        setTranslate: function () {
          for (
            var t = this.width,
              e = this.height,
              i = this.slides,
              s = this.$wrapperEl,
              n = this.slidesSizesGrid,
              a = this.params.coverflowEffect,
              o = this.isHorizontal(),
              r = this.translate,
              l = o ? t / 2 - r : e / 2 - r,
              d = o ? a.rotate : -a.rotate,
              c = a.depth,
              h = 0,
              p = i.length;
            h < p;
            h += 1
          ) {
            var u = i.eq(h),
              f = n[h],
              g = ((l - u[0].swiperSlideOffset - f / 2) / f) * a.modifier,
              m = o ? d * g : 0,
              v = o ? 0 : d * g,
              b = -c * Math.abs(g),
              y = o ? 0 : a.stretch * g,
              w = o ? a.stretch * g : 0;
            Math.abs(w) < 0.001 && (w = 0),
              Math.abs(y) < 0.001 && (y = 0),
              Math.abs(b) < 0.001 && (b = 0),
              Math.abs(m) < 0.001 && (m = 0),
              Math.abs(v) < 0.001 && (v = 0);
            var x =
              "translate3d(" +
              w +
              "px," +
              y +
              "px," +
              b +
              "px)  rotateX(" +
              v +
              "deg) rotateY(" +
              m +
              "deg)";
            if (
              (u.transform(x),
              (u[0].style.zIndex = 1 - Math.abs(Math.round(g))),
              a.slideShadows)
            ) {
              var T = o
                  ? u.find(".swiper-slide-shadow-left")
                  : u.find(".swiper-slide-shadow-top"),
                S = o
                  ? u.find(".swiper-slide-shadow-right")
                  : u.find(".swiper-slide-shadow-bottom");
              0 === T.length &&
                ((T = L(
                  '<div class="swiper-slide-shadow-' +
                    (o ? "left" : "top") +
                    '"></div>'
                )),
                u.append(T)),
                0 === S.length &&
                  ((S = L(
                    '<div class="swiper-slide-shadow-' +
                      (o ? "right" : "bottom") +
                      '"></div>'
                  )),
                  u.append(S)),
                T.length && (T[0].style.opacity = 0 < g ? g : 0),
                S.length && (S[0].style.opacity = 0 < -g ? -g : 0);
            }
          }
          (R.pointerEvents || R.prefixedPointerEvents) &&
            (s[0].style.perspectiveOrigin = l + "px 50%");
        },
        setTransition: function (t) {
          this.slides
            .transition(t)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(t);
        },
      },
      et = [
        E,
        C,
        $,
        P,
        k,
        O,
        D,
        {
          name: "mousewheel",
          params: {
            mousewheel: {
              enabled: !1,
              releaseOnEdges: !1,
              invert: !1,
              forceToAxis: !1,
              sensitivity: 1,
              eventsTarged: "container",
            },
          },
          create: function () {
            N.extend(this, {
              mousewheel: {
                enabled: !1,
                enable: H.enable.bind(this),
                disable: H.disable.bind(this),
                handle: H.handle.bind(this),
                handleMouseEnter: H.handleMouseEnter.bind(this),
                handleMouseLeave: H.handleMouseLeave.bind(this),
                lastScrollTime: N.now(),
              },
            });
          },
          on: {
            init: function () {
              this.params.mousewheel.enabled && this.mousewheel.enable();
            },
            destroy: function () {
              this.mousewheel.enabled && this.mousewheel.disable();
            },
          },
        },
        {
          name: "navigation",
          params: {
            navigation: {
              nextEl: null,
              prevEl: null,
              hideOnClick: !1,
              disabledClass: "swiper-button-disabled",
              hiddenClass: "swiper-button-hidden",
              lockClass: "swiper-button-lock",
            },
          },
          create: function () {
            N.extend(this, {
              navigation: {
                init: B.init.bind(this),
                update: B.update.bind(this),
                destroy: B.destroy.bind(this),
              },
            });
          },
          on: {
            init: function () {
              this.navigation.init(), this.navigation.update();
            },
            toEdge: function () {
              this.navigation.update();
            },
            fromEdge: function () {
              this.navigation.update();
            },
            destroy: function () {
              this.navigation.destroy();
            },
            click: function (t) {
              var e = this.navigation,
                i = e.$nextEl,
                s = e.$prevEl;
              !this.params.navigation.hideOnClick ||
                L(t.target).is(s) ||
                L(t.target).is(i) ||
                (i && i.toggleClass(this.params.navigation.hiddenClass),
                s && s.toggleClass(this.params.navigation.hiddenClass));
            },
          },
        },
        {
          name: "pagination",
          params: {
            pagination: {
              el: null,
              bulletElement: "span",
              clickable: !1,
              hideOnClick: !1,
              renderBullet: null,
              renderProgressbar: null,
              renderFraction: null,
              renderCustom: null,
              progressbarOpposite: !1,
              type: "bullets",
              dynamicBullets: !1,
              dynamicMainBullets: 1,
              formatFractionCurrent: function (t) {
                return t;
              },
              formatFractionTotal: function (t) {
                return t;
              },
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
              modifierClass: "swiper-pagination-",
              currentClass: "swiper-pagination-current",
              totalClass: "swiper-pagination-total",
              hiddenClass: "swiper-pagination-hidden",
              progressbarFillClass: "swiper-pagination-progressbar-fill",
              progressbarOppositeClass:
                "swiper-pagination-progressbar-opposite",
              clickableClass: "swiper-pagination-clickable",
              lockClass: "swiper-pagination-lock",
            },
          },
          create: function () {
            N.extend(this, {
              pagination: {
                init: X.init.bind(this),
                render: X.render.bind(this),
                update: X.update.bind(this),
                destroy: X.destroy.bind(this),
                dynamicBulletIndex: 0,
              },
            });
          },
          on: {
            init: function () {
              this.pagination.init(),
                this.pagination.render(),
                this.pagination.update();
            },
            activeIndexChange: function () {
              this.params.loop
                ? this.pagination.update()
                : void 0 === this.snapIndex && this.pagination.update();
            },
            snapIndexChange: function () {
              this.params.loop || this.pagination.update();
            },
            slidesLengthChange: function () {
              this.params.loop &&
                (this.pagination.render(), this.pagination.update());
            },
            snapGridLengthChange: function () {
              this.params.loop ||
                (this.pagination.render(), this.pagination.update());
            },
            destroy: function () {
              this.pagination.destroy();
            },
            click: function (t) {
              this.params.pagination.el &&
                this.params.pagination.hideOnClick &&
                0 < this.pagination.$el.length &&
                !L(t.target).hasClass(this.params.pagination.bulletClass) &&
                this.pagination.$el.toggleClass(
                  this.params.pagination.hiddenClass
                );
            },
          },
        },
        {
          name: "scrollbar",
          params: {
            scrollbar: {
              el: null,
              dragSize: "auto",
              hide: !1,
              draggable: !1,
              snapOnRelease: !0,
              lockClass: "swiper-scrollbar-lock",
              dragClass: "swiper-scrollbar-drag",
            },
          },
          create: function () {
            N.extend(this, {
              scrollbar: {
                init: Y.init.bind(this),
                destroy: Y.destroy.bind(this),
                updateSize: Y.updateSize.bind(this),
                setTranslate: Y.setTranslate.bind(this),
                setTransition: Y.setTransition.bind(this),
                enableDraggable: Y.enableDraggable.bind(this),
                disableDraggable: Y.disableDraggable.bind(this),
                setDragPosition: Y.setDragPosition.bind(this),
                onDragStart: Y.onDragStart.bind(this),
                onDragMove: Y.onDragMove.bind(this),
                onDragEnd: Y.onDragEnd.bind(this),
                isTouched: !1,
                timeout: null,
                dragTimeout: null,
              },
            });
          },
          on: {
            init: function () {
              this.scrollbar.init(),
                this.scrollbar.updateSize(),
                this.scrollbar.setTranslate();
            },
            update: function () {
              this.scrollbar.updateSize();
            },
            resize: function () {
              this.scrollbar.updateSize();
            },
            observerUpdate: function () {
              this.scrollbar.updateSize();
            },
            setTranslate: function () {
              this.scrollbar.setTranslate();
            },
            setTransition: function (t) {
              this.scrollbar.setTransition(t);
            },
            destroy: function () {
              this.scrollbar.destroy();
            },
          },
        },
        {
          name: "parallax",
          params: { parallax: { enabled: !1 } },
          create: function () {
            N.extend(this, {
              parallax: {
                setTransform: _.setTransform.bind(this),
                setTranslate: _.setTranslate.bind(this),
                setTransition: _.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              this.params.parallax.enabled &&
                (this.params.watchSlidesProgress = !0);
            },
            init: function () {
              this.params.parallax && this.parallax.setTranslate();
            },
            setTranslate: function () {
              this.params.parallax && this.parallax.setTranslate();
            },
            setTransition: function (t) {
              this.params.parallax && this.parallax.setTransition(t);
            },
          },
        },
        {
          name: "zoom",
          params: {
            zoom: {
              enabled: !1,
              maxRatio: 3,
              minRatio: 1,
              toggle: !0,
              containerClass: "swiper-zoom-container",
              zoomedSlideClass: "swiper-slide-zoomed",
            },
          },
          create: function () {
            var e = this,
              i = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                  $slideEl: void 0,
                  slideWidth: void 0,
                  slideHeight: void 0,
                  $imageEl: void 0,
                  $imageWrapEl: void 0,
                  maxRatio: 3,
                },
                image: {
                  isTouched: void 0,
                  isMoved: void 0,
                  currentX: void 0,
                  currentY: void 0,
                  minX: void 0,
                  minY: void 0,
                  maxX: void 0,
                  maxY: void 0,
                  width: void 0,
                  height: void 0,
                  startX: void 0,
                  startY: void 0,
                  touchesStart: {},
                  touchesCurrent: {},
                },
                velocity: {
                  x: void 0,
                  y: void 0,
                  prevPositionX: void 0,
                  prevPositionY: void 0,
                  prevTime: void 0,
                },
              };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
              .split(" ")
              .forEach(function (t) {
                i[t] = W[t].bind(e);
              }),
              N.extend(e, { zoom: i });
          },
          on: {
            init: function () {
              this.params.zoom.enabled && this.zoom.enable();
            },
            destroy: function () {
              this.zoom.disable();
            },
            touchStart: function (t) {
              this.zoom.enabled && this.zoom.onTouchStart(t);
            },
            touchEnd: function (t) {
              this.zoom.enabled && this.zoom.onTouchEnd(t);
            },
            doubleTap: function (t) {
              this.params.zoom.enabled &&
                this.zoom.enabled &&
                this.params.zoom.toggle &&
                this.zoom.toggle(t);
            },
            transitionEnd: function () {
              this.zoom.enabled &&
                this.params.zoom.enabled &&
                this.zoom.onTransitionEnd();
            },
          },
        },
        {
          name: "lazy",
          params: {
            lazy: {
              enabled: !1,
              loadPrevNext: !1,
              loadPrevNextAmount: 1,
              loadOnTransitionStart: !1,
              elementClass: "swiper-lazy",
              loadingClass: "swiper-lazy-loading",
              loadedClass: "swiper-lazy-loaded",
              preloaderClass: "swiper-lazy-preloader",
            },
          },
          create: function () {
            N.extend(this, {
              lazy: {
                initialImageLoaded: !1,
                load: V.load.bind(this),
                loadInSlide: V.loadInSlide.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              this.params.lazy.enabled &&
                this.params.preloadImages &&
                (this.params.preloadImages = !1);
            },
            init: function () {
              this.params.lazy.enabled &&
                !this.params.loop &&
                0 === this.params.initialSlide &&
                this.lazy.load();
            },
            scroll: function () {
              this.params.freeMode &&
                !this.params.freeModeSticky &&
                this.lazy.load();
            },
            resize: function () {
              this.params.lazy.enabled && this.lazy.load();
            },
            scrollbarDragMove: function () {
              this.params.lazy.enabled && this.lazy.load();
            },
            transitionStart: function () {
              this.params.lazy.enabled &&
                (this.params.lazy.loadOnTransitionStart ||
                  (!this.params.lazy.loadOnTransitionStart &&
                    !this.lazy.initialImageLoaded)) &&
                this.lazy.load();
            },
            transitionEnd: function () {
              this.params.lazy.enabled &&
                !this.params.lazy.loadOnTransitionStart &&
                this.lazy.load();
            },
          },
        },
        {
          name: "controller",
          params: { controller: { control: void 0, inverse: !1, by: "slide" } },
          create: function () {
            N.extend(this, {
              controller: {
                control: this.params.controller.control,
                getInterpolateFunction: j.getInterpolateFunction.bind(this),
                setTranslate: j.setTranslate.bind(this),
                setTransition: j.setTransition.bind(this),
              },
            });
          },
          on: {
            update: function () {
              this.controller.control &&
                this.controller.spline &&
                ((this.controller.spline = void 0),
                delete this.controller.spline);
            },
            resize: function () {
              this.controller.control &&
                this.controller.spline &&
                ((this.controller.spline = void 0),
                delete this.controller.spline);
            },
            observerUpdate: function () {
              this.controller.control &&
                this.controller.spline &&
                ((this.controller.spline = void 0),
                delete this.controller.spline);
            },
            setTranslate: function (t, e) {
              this.controller.control && this.controller.setTranslate(t, e);
            },
            setTransition: function (t, e) {
              this.controller.control && this.controller.setTransition(t, e);
            },
          },
        },
        {
          name: "a11y",
          params: {
            a11y: {
              enabled: !0,
              notificationClass: "swiper-notification",
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
              firstSlideMessage: "This is the first slide",
              lastSlideMessage: "This is the last slide",
              paginationBulletMessage: "Go to slide {{index}}",
            },
          },
          create: function () {
            var e = this;
            N.extend(e, {
              a11y: {
                liveRegion: L(
                  '<span class="' +
                    e.params.a11y.notificationClass +
                    '" aria-live="assertive" aria-atomic="true"></span>'
                ),
              },
            }),
              Object.keys(G).forEach(function (t) {
                e.a11y[t] = G[t].bind(e);
              });
          },
          on: {
            init: function () {
              this.params.a11y.enabled &&
                (this.a11y.init(), this.a11y.updateNavigation());
            },
            toEdge: function () {
              this.params.a11y.enabled && this.a11y.updateNavigation();
            },
            fromEdge: function () {
              this.params.a11y.enabled && this.a11y.updateNavigation();
            },
            paginationUpdate: function () {
              this.params.a11y.enabled && this.a11y.updatePagination();
            },
            destroy: function () {
              this.params.a11y.enabled && this.a11y.destroy();
            },
          },
        },
        {
          name: "history",
          params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
          create: function () {
            N.extend(this, {
              history: {
                init: q.init.bind(this),
                setHistory: q.setHistory.bind(this),
                setHistoryPopState: q.setHistoryPopState.bind(this),
                scrollToSlide: q.scrollToSlide.bind(this),
                destroy: q.destroy.bind(this),
              },
            });
          },
          on: {
            init: function () {
              this.params.history.enabled && this.history.init();
            },
            destroy: function () {
              this.params.history.enabled && this.history.destroy();
            },
            transitionEnd: function () {
              this.history.initialized &&
                this.history.setHistory(
                  this.params.history.key,
                  this.activeIndex
                );
            },
          },
        },
        {
          name: "hash-navigation",
          params: {
            hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
          },
          create: function () {
            N.extend(this, {
              hashNavigation: {
                initialized: !1,
                init: Z.init.bind(this),
                destroy: Z.destroy.bind(this),
                setHash: Z.setHash.bind(this),
                onHashCange: Z.onHashCange.bind(this),
              },
            });
          },
          on: {
            init: function () {
              this.params.hashNavigation.enabled && this.hashNavigation.init();
            },
            destroy: function () {
              this.params.hashNavigation.enabled &&
                this.hashNavigation.destroy();
            },
            transitionEnd: function () {
              this.hashNavigation.initialized && this.hashNavigation.setHash();
            },
          },
        },
        {
          name: "autoplay",
          params: {
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
            },
          },
          create: function () {
            var e = this;
            N.extend(e, {
              autoplay: {
                running: !1,
                paused: !1,
                run: U.run.bind(e),
                start: U.start.bind(e),
                stop: U.stop.bind(e),
                pause: U.pause.bind(e),
                onTransitionEnd: function (t) {
                  e &&
                    !e.destroyed &&
                    e.$wrapperEl &&
                    t.target === this &&
                    (e.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      e.autoplay.onTransitionEnd
                    ),
                    e.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      e.autoplay.onTransitionEnd
                    ),
                    (e.autoplay.paused = !1),
                    e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
                },
              },
            });
          },
          on: {
            init: function () {
              this.params.autoplay.enabled && this.autoplay.start();
            },
            beforeTransitionStart: function (t, e) {
              this.autoplay.running &&
                (e || !this.params.autoplay.disableOnInteraction
                  ? this.autoplay.pause(t)
                  : this.autoplay.stop());
            },
            sliderFirstMove: function () {
              this.autoplay.running &&
                (this.params.autoplay.disableOnInteraction
                  ? this.autoplay.stop()
                  : this.autoplay.pause());
            },
            destroy: function () {
              this.autoplay.running && this.autoplay.stop();
            },
          },
        },
        {
          name: "effect-fade",
          params: { fadeEffect: { crossFade: !1 } },
          create: function () {
            N.extend(this, {
              fadeEffect: {
                setTranslate: Q.setTranslate.bind(this),
                setTransition: Q.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              if ("fade" === this.params.effect) {
                this.classNames.push(
                  this.params.containerModifierClass + "fade"
                );
                var t = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !0,
                };
                N.extend(this.params, t), N.extend(this.originalParams, t);
              }
            },
            setTranslate: function () {
              "fade" === this.params.effect && this.fadeEffect.setTranslate();
            },
            setTransition: function (t) {
              "fade" === this.params.effect && this.fadeEffect.setTransition(t);
            },
          },
        },
        {
          name: "effect-cube",
          params: {
            cubeEffect: {
              slideShadows: !0,
              shadow: !0,
              shadowOffset: 20,
              shadowScale: 0.94,
            },
          },
          create: function () {
            N.extend(this, {
              cubeEffect: {
                setTranslate: K.setTranslate.bind(this),
                setTransition: K.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              if ("cube" === this.params.effect) {
                this.classNames.push(
                  this.params.containerModifierClass + "cube"
                ),
                  this.classNames.push(
                    this.params.containerModifierClass + "3d"
                  );
                var t = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  resistanceRatio: 0,
                  spaceBetween: 0,
                  centeredSlides: !1,
                  virtualTranslate: !0,
                };
                N.extend(this.params, t), N.extend(this.originalParams, t);
              }
            },
            setTranslate: function () {
              "cube" === this.params.effect && this.cubeEffect.setTranslate();
            },
            setTransition: function (t) {
              "cube" === this.params.effect && this.cubeEffect.setTransition(t);
            },
          },
        },
        {
          name: "effect-flip",
          params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
          create: function () {
            N.extend(this, {
              flipEffect: {
                setTranslate: J.setTranslate.bind(this),
                setTransition: J.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              if ("flip" === this.params.effect) {
                this.classNames.push(
                  this.params.containerModifierClass + "flip"
                ),
                  this.classNames.push(
                    this.params.containerModifierClass + "3d"
                  );
                var t = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !0,
                };
                N.extend(this.params, t), N.extend(this.originalParams, t);
              }
            },
            setTranslate: function () {
              "flip" === this.params.effect && this.flipEffect.setTranslate();
            },
            setTransition: function (t) {
              "flip" === this.params.effect && this.flipEffect.setTransition(t);
            },
          },
        },
        {
          name: "effect-coverflow",
          params: {
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: !0,
            },
          },
          create: function () {
            N.extend(this, {
              coverflowEffect: {
                setTranslate: tt.setTranslate.bind(this),
                setTransition: tt.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              "coverflow" === this.params.effect &&
                (this.classNames.push(
                  this.params.containerModifierClass + "coverflow"
                ),
                this.classNames.push(this.params.containerModifierClass + "3d"),
                (this.params.watchSlidesProgress = !0),
                (this.originalParams.watchSlidesProgress = !0));
            },
            setTranslate: function () {
              "coverflow" === this.params.effect &&
                this.coverflowEffect.setTranslate();
            },
            setTransition: function (t) {
              "coverflow" === this.params.effect &&
                this.coverflowEffect.setTransition(t);
            },
          },
        },
      ];
    return (
      void 0 === S.use &&
        ((S.use = S.Class.use), (S.installModule = S.Class.installModule)),
      S.use(et),
      S
    );
  }),
  (function () {
    "use strict";
    function e(t) {
      if (!t) throw new Error("No options passed to Waypoint constructor");
      if (!t.element)
        throw new Error("No element option passed to Waypoint constructor");
      if (!t.handler)
        throw new Error("No handler option passed to Waypoint constructor");
      (this.key = "waypoint-" + i),
        (this.options = e.Adapter.extend({}, e.defaults, t)),
        (this.element = this.options.element),
        (this.adapter = new e.Adapter(this.element)),
        (this.callback = t.handler),
        (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
        (this.enabled = this.options.enabled),
        (this.triggerPoint = null),
        (this.group = e.Group.findOrCreate({
          name: this.options.group,
          axis: this.axis,
        })),
        (this.context = e.Context.findOrCreateByElement(this.options.context)),
        e.offsetAliases[this.options.offset] &&
          (this.options.offset = e.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        (a[this.key] = this),
        (i += 1);
    }
    var i = 0,
      a = {};
    (e.prototype.queueTrigger = function (t) {
      this.group.queueTrigger(this, t);
    }),
      (e.prototype.trigger = function (t) {
        this.enabled && this.callback && this.callback.apply(this, t);
      }),
      (e.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete a[this.key];
      }),
      (e.prototype.disable = function () {
        return (this.enabled = !1), this;
      }),
      (e.prototype.enable = function () {
        return this.context.refresh(), (this.enabled = !0), this;
      }),
      (e.prototype.next = function () {
        return this.group.next(this);
      }),
      (e.prototype.previous = function () {
        return this.group.previous(this);
      }),
      (e.invokeAll = function (t) {
        var e = [];
        for (var i in a) e.push(a[i]);
        for (var s = 0, n = e.length; s < n; s++) e[s][t]();
      }),
      (e.destroyAll = function () {
        e.invokeAll("destroy");
      }),
      (e.disableAll = function () {
        e.invokeAll("disable");
      }),
      (e.enableAll = function () {
        for (var t in (e.Context.refreshAll(), a)) a[t].enabled = !0;
        return this;
      }),
      (e.refreshAll = function () {
        e.Context.refreshAll();
      }),
      (e.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight;
      }),
      (e.viewportWidth = function () {
        return document.documentElement.clientWidth;
      }),
      (e.adapters = []),
      (e.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0,
      }),
      (e.offsetAliases = {
        "bottom-in-view": function () {
          return this.context.innerHeight() - this.adapter.outerHeight();
        },
        "right-in-view": function () {
          return this.context.innerWidth() - this.adapter.outerWidth();
        },
      }),
      (window.Waypoint = e);
  })(),
  (function () {
    "use strict";
    function e(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    function i(t) {
      (this.element = t),
        (this.Adapter = m.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + s),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (n[t.waypointContextKey] = this),
        (s += 1),
        m.windowContext ||
          ((m.windowContext = !0), (m.windowContext = new i(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var s = 0,
      n = {},
      m = window.Waypoint,
      t = window.onload;
    (i.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (i.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical),
          i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"), delete n[this.key]);
      }),
      (i.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        var e = this;
        this.adapter.on("resize.waypoints", function () {
          e.didResize || ((e.didResize = !0), m.requestAnimationFrame(t));
        });
      }),
      (i.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function () {
          (!e.didScroll || m.isTouch) &&
            ((e.didScroll = !0), m.requestAnimationFrame(t));
        });
      }),
      (i.prototype.handleResize = function () {
        m.Context.refreshAll();
      }),
      (i.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var i in e) {
          var s = e[i],
            n = s.newScroll > s.oldScroll ? s.forward : s.backward;
          for (var a in this.waypoints[i]) {
            var o = this.waypoints[i][a];
            if (null !== o.triggerPoint) {
              var r = s.oldScroll < o.triggerPoint,
                l = s.newScroll >= o.triggerPoint;
              ((r && l) || (!r && !l)) &&
                (o.queueTrigger(n), (t[o.group.id] = o.group));
            }
          }
        }
        for (var d in t) t[d].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (i.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? m.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (i.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (i.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? m.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (i.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints)
          for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var s = 0, n = t.length; s < n; s++) t[s].destroy();
      }),
      (i.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          s = {};
        for (var n in (this.handleScroll(),
        (t = {
          horizontal: {
            contextOffset: e ? 0 : i.left,
            contextScroll: e ? 0 : this.oldScroll.x,
            contextDimension: this.innerWidth(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left",
          },
          vertical: {
            contextOffset: e ? 0 : i.top,
            contextScroll: e ? 0 : this.oldScroll.y,
            contextDimension: this.innerHeight(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top",
          },
        }))) {
          var a = t[n];
          for (var o in this.waypoints[n]) {
            var r,
              l,
              d,
              c,
              h = this.waypoints[n][o],
              p = h.options.offset,
              u = h.triggerPoint,
              f = 0,
              g = null == u;
            h.element !== h.element.window &&
              (f = h.adapter.offset()[a.offsetProp]),
              "function" == typeof p
                ? (p = p.apply(h))
                : "string" == typeof p &&
                  ((p = parseFloat(p)),
                  -1 < h.options.offset.indexOf("%") &&
                    (p = Math.ceil((a.contextDimension * p) / 100))),
              (r = a.contextScroll - a.contextOffset),
              (h.triggerPoint = Math.floor(f + r - p)),
              (l = u < a.oldScroll),
              (d = h.triggerPoint >= a.oldScroll),
              (c = !l && !d),
              !g && l && d
                ? (h.queueTrigger(a.backward), (s[h.group.id] = h.group))
                : !g && c
                ? (h.queueTrigger(a.forward), (s[h.group.id] = h.group))
                : g &&
                  a.oldScroll >= h.triggerPoint &&
                  (h.queueTrigger(a.forward), (s[h.group.id] = h.group));
          }
        }
        return (
          m.requestAnimationFrame(function () {
            for (var t in s) s[t].flushTriggers();
          }),
          this
        );
      }),
      (i.findOrCreateByElement = function (t) {
        return i.findByElement(t) || new i(t);
      }),
      (i.refreshAll = function () {
        for (var t in n) n[t].refresh();
      }),
      (i.findByElement = function (t) {
        return n[t.waypointContextKey];
      }),
      (window.onload = function () {
        t && t(), i.refreshAll();
      }),
      (m.requestAnimationFrame = function (t) {
        (
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          e
        ).call(window, t);
      }),
      (m.Context = i);
  })(),
  (function () {
    "use strict";
    function o(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function r(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    function e(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (i[this.axis][this.name] = this);
    }
    var i = { vertical: {}, horizontal: {} },
      s = window.Waypoint;
    (e.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (e.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (e.prototype.flushTriggers = function () {
        for (var t in this.triggerQueues) {
          var e = this.triggerQueues[t],
            i = "up" === t || "left" === t;
          e.sort(i ? r : o);
          for (var s = 0, n = e.length; s < n; s += 1) {
            var a = e[s];
            (a.options.continuous || s === e.length - 1) && a.trigger([t]);
          }
        }
        this.clearTriggerQueues();
      }),
      (e.prototype.next = function (t) {
        this.waypoints.sort(o);
        var e = s.Adapter.inArray(t, this.waypoints);
        return e === this.waypoints.length - 1 ? null : this.waypoints[e + 1];
      }),
      (e.prototype.previous = function (t) {
        this.waypoints.sort(o);
        var e = s.Adapter.inArray(t, this.waypoints);
        return e ? this.waypoints[e - 1] : null;
      }),
      (e.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (e.prototype.remove = function (t) {
        var e = s.Adapter.inArray(t, this.waypoints);
        -1 < e && this.waypoints.splice(e, 1);
      }),
      (e.prototype.first = function () {
        return this.waypoints[0];
      }),
      (e.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (e.findOrCreate = function (t) {
        return i[t.axis][t.name] || new e(t);
      }),
      (s.Group = e);
  })(),
  (function () {
    "use strict";
    function i(t) {
      this.$element = s(t);
    }
    var s = window.jQuery,
      t = window.Waypoint;
    s.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (t, e) {
        i.prototype[e] = function () {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[e].apply(this.$element, t);
        };
      }
    ),
      s.each(["extend", "inArray", "isEmptyObject"], function (t, e) {
        i[e] = s[e];
      }),
      t.adapters.push({ name: "jquery", Adapter: i }),
      (t.Adapter = i);
  })(),
  (function () {
    "use strict";
    function t(s) {
      return function () {
        var e = [],
          i = arguments[0];
        return (
          s.isFunction(arguments[0]) &&
            ((i = s.extend({}, arguments[1])).handler = arguments[0]),
          this.each(function () {
            var t = s.extend({}, i, { element: this });
            "string" == typeof t.context &&
              (t.context = s(this).closest(t.context)[0]),
              e.push(new n(t));
          }),
          e
        );
      };
    }
    var n = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })(),
  function () {
    var s,
      e,
      i,
      l,
      n,
      a = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
      o =
        [].indexOf ||
        function (t) {
          for (var e = 0, i = this.length; e < i; e++)
            if (e in this && this[e] === t) return e;
          return -1;
        };
    (e = (function () {
      function t() {}
      return (
        (t.prototype.extend = function (t, e) {
          var i, s;
          for (i in e) (s = e[i]), null == t[i] && (t[i] = s);
          return t;
        }),
        (t.prototype.isMobile = function (t) {
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            t
          );
        }),
        (t.prototype.createEvent = function (t, e, i, s) {
          var n;
          return (
            null == e && (e = !1),
            null == i && (i = !1),
            null == s && (s = null),
            null != document.createEvent
              ? (n = document.createEvent("CustomEvent")).initCustomEvent(
                  t,
                  e,
                  i,
                  s
                )
              : null != document.createEventObject
              ? ((n = document.createEventObject()).eventType = t)
              : (n.eventName = t),
            n
          );
        }),
        (t.prototype.emitEvent = function (t, e) {
          return null != t.dispatchEvent
            ? t.dispatchEvent(e)
            : e in (null != t)
            ? t[e]()
            : "on" + e in (null != t)
            ? t["on" + e]()
            : void 0;
        }),
        (t.prototype.addEvent = function (t, e, i) {
          return null != t.addEventListener
            ? t.addEventListener(e, i, !1)
            : null != t.attachEvent
            ? t.attachEvent("on" + e, i)
            : (t[e] = i);
        }),
        (t.prototype.removeEvent = function (t, e, i) {
          return null != t.removeEventListener
            ? t.removeEventListener(e, i, !1)
            : null != t.detachEvent
            ? t.detachEvent("on" + e, i)
            : delete t[e];
        }),
        (t.prototype.innerHeight = function () {
          return "innerHeight" in window
            ? window.innerHeight
            : document.documentElement.clientHeight;
        }),
        t
      );
    })()),
      (i =
        this.WeakMap ||
        this.MozWeakMap ||
        (i = (function () {
          function t() {
            (this.keys = []), (this.values = []);
          }
          return (
            (t.prototype.get = function (t) {
              var e, i, s, n;
              for (e = i = 0, s = (n = this.keys).length; i < s; e = ++i)
                if (n[e] === t) return this.values[e];
            }),
            (t.prototype.set = function (t, e) {
              var i, s, n, a;
              for (i = s = 0, n = (a = this.keys).length; s < n; i = ++s)
                if (a[i] === t) return void (this.values[i] = e);
              return this.keys.push(t), this.values.push(e);
            }),
            t
          );
        })())),
      (s =
        this.MutationObserver ||
        this.WebkitMutationObserver ||
        this.MozMutationObserver ||
        (s = (function () {
          function t() {
            "undefined" != typeof console &&
              null !== console &&
              console.warn(
                "MutationObserver is not supported by your browser."
              ),
              "undefined" != typeof console &&
                null !== console &&
                console.warn(
                  "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
                );
          }
          return (
            (t.notSupported = !0), (t.prototype.observe = function () {}), t
          );
        })())),
      (l =
        this.getComputedStyle ||
        function (i, t) {
          return (
            (this.getPropertyValue = function (t) {
              var e;
              return (
                "float" === t && (t = "styleFloat"),
                n.test(t) &&
                  t.replace(n, function (t, e) {
                    return e.toUpperCase();
                  }),
                (null != (e = i.currentStyle) ? e[t] : void 0) || null
              );
            }),
            this
          );
        }),
      (n = /(\-([a-z]){1})/g),
      (this.WOW = (function () {
        function t(t) {
          null == t && (t = {}),
            (this.scrollCallback = a(this.scrollCallback, this)),
            (this.scrollHandler = a(this.scrollHandler, this)),
            (this.resetAnimation = a(this.resetAnimation, this)),
            (this.start = a(this.start, this)),
            (this.scrolled = !0),
            (this.config = this.util().extend(t, this.defaults)),
            null != t.scrollContainer &&
              (this.config.scrollContainer = document.querySelector(
                t.scrollContainer
              )),
            (this.animationNameCache = new i()),
            (this.wowEvent = this.util().createEvent(this.config.boxClass));
        }
        return (
          (t.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null,
          }),
          (t.prototype.init = function () {
            var t;
            return (
              (this.element = window.document.documentElement),
              "interactive" === (t = document.readyState) || "complete" === t
                ? this.start()
                : this.util().addEvent(
                    document,
                    "DOMContentLoaded",
                    this.start
                  ),
              (this.finished = [])
            );
          }),
          (t.prototype.start = function () {
            var n, t, e, i, o;
            if (
              ((this.stopped = !1),
              (this.boxes = function () {
                var t, e, i, s;
                for (
                  s = [],
                    t = 0,
                    e = (i = this.element.querySelectorAll(
                      "." + this.config.boxClass
                    )).length;
                  t < e;
                  t++
                )
                  (n = i[t]), s.push(n);
                return s;
              }.call(this)),
              (this.all = function () {
                var t, e, i, s;
                for (s = [], t = 0, e = (i = this.boxes).length; t < e; t++)
                  (n = i[t]), s.push(n);
                return s;
              }.call(this)),
              this.boxes.length)
            )
              if (this.disabled()) this.resetStyle();
              else
                for (t = 0, e = (i = this.boxes).length; t < e; t++)
                  (n = i[t]), this.applyStyle(n, !0);
            if (
              (this.disabled() ||
                (this.util().addEvent(
                  this.config.scrollContainer || window,
                  "scroll",
                  this.scrollHandler
                ),
                this.util().addEvent(window, "resize", this.scrollHandler),
                (this.interval = setInterval(this.scrollCallback, 50))),
              this.config.live)
            )
              return new s(
                ((o = this),
                function (t) {
                  var e, i, n, a, s;
                  for (s = [], e = 0, i = t.length; e < i; e++)
                    (a = t[e]),
                      s.push(
                        function () {
                          var t, e, i, s;
                          for (
                            s = [], t = 0, e = (i = a.addedNodes || []).length;
                            t < e;
                            t++
                          )
                            (n = i[t]), s.push(this.doSync(n));
                          return s;
                        }.call(o)
                      );
                  return s;
                })
              ).observe(document.body, { childList: !0, subtree: !0 });
          }),
          (t.prototype.stop = function () {
            if (
              ((this.stopped = !0),
              this.util().removeEvent(
                this.config.scrollContainer || window,
                "scroll",
                this.scrollHandler
              ),
              this.util().removeEvent(window, "resize", this.scrollHandler),
              null != this.interval)
            )
              return clearInterval(this.interval);
          }),
          (t.prototype.sync = function (t) {
            if (s.notSupported) return this.doSync(this.element);
          }),
          (t.prototype.doSync = function (t) {
            var e, i, s, n, a;
            if ((null == t && (t = this.element), 1 === t.nodeType)) {
              for (
                a = [],
                  i = 0,
                  s = (n = (t = t.parentNode || t).querySelectorAll(
                    "." + this.config.boxClass
                  )).length;
                i < s;
                i++
              )
                (e = n[i]),
                  o.call(this.all, e) < 0
                    ? (this.boxes.push(e),
                      this.all.push(e),
                      this.stopped || this.disabled()
                        ? this.resetStyle()
                        : this.applyStyle(e, !0),
                      a.push((this.scrolled = !0)))
                    : a.push(void 0);
              return a;
            }
          }),
          (t.prototype.show = function (t) {
            return (
              this.applyStyle(t),
              (t.className = t.className + " " + this.config.animateClass),
              null != this.config.callback && this.config.callback(t),
              this.util().emitEvent(t, this.wowEvent),
              this.util().addEvent(t, "animationend", this.resetAnimation),
              this.util().addEvent(t, "oanimationend", this.resetAnimation),
              this.util().addEvent(
                t,
                "webkitAnimationEnd",
                this.resetAnimation
              ),
              this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation),
              t
            );
          }),
          (t.prototype.applyStyle = function (t, e) {
            var i, s, n, a;
            return (
              (s = t.getAttribute("data-wow-duration")),
              (i = t.getAttribute("data-wow-delay")),
              (n = t.getAttribute("data-wow-iteration")),
              this.animate(
                ((a = this),
                function () {
                  return a.customStyle(t, e, s, i, n);
                })
              )
            );
          }),
          (t.prototype.animate =
            "requestAnimationFrame" in window
              ? function (t) {
                  return window.requestAnimationFrame(t);
                }
              : function (t) {
                  return t();
                }),
          (t.prototype.resetStyle = function () {
            var t, e, i, s, n;
            for (n = [], e = 0, i = (s = this.boxes).length; e < i; e++)
              (t = s[e]), n.push((t.style.visibility = "visible"));
            return n;
          }),
          (t.prototype.resetAnimation = function (t) {
            var e;
            if (0 <= t.type.toLowerCase().indexOf("animationend"))
              return ((e = t.target || t.srcElement).className = e.className
                .replace(this.config.animateClass, "")
                .trim());
          }),
          (t.prototype.customStyle = function (t, e, i, s, n) {
            return (
              e && this.cacheAnimationName(t),
              (t.style.visibility = e ? "hidden" : "visible"),
              i && this.vendorSet(t.style, { animationDuration: i }),
              s && this.vendorSet(t.style, { animationDelay: s }),
              n && this.vendorSet(t.style, { animationIterationCount: n }),
              this.vendorSet(t.style, {
                animationName: e ? "none" : this.cachedAnimationName(t),
              }),
              t
            );
          }),
          (t.prototype.vendors = ["moz", "webkit"]),
          (t.prototype.vendorSet = function (n, t) {
            var a, e, o, r;
            for (a in ((e = []), t))
              (o = t[a]),
                (n["" + a] = o),
                e.push(
                  function () {
                    var t, e, i, s;
                    for (
                      s = [], t = 0, e = (i = this.vendors).length;
                      t < e;
                      t++
                    )
                      (r = i[t]),
                        s.push(
                          (n["" + r + a.charAt(0).toUpperCase() + a.substr(1)] =
                            o)
                        );
                    return s;
                  }.call(this)
                );
            return e;
          }),
          (t.prototype.vendorCSS = function (t, e) {
            var i, s, n, a, o, r;
            for (
              a = (o = l(t)).getPropertyCSSValue(e),
                i = 0,
                s = (n = this.vendors).length;
              i < s;
              i++
            )
              (r = n[i]), (a = a || o.getPropertyCSSValue("-" + r + "-" + e));
            return a;
          }),
          (t.prototype.animationName = function (e) {
            var i;
            try {
              i = this.vendorCSS(e, "animation-name").cssText;
            } catch (t) {
              i = l(e).getPropertyValue("animation-name");
            }
            return "none" === i ? "" : i;
          }),
          (t.prototype.cacheAnimationName = function (t) {
            return this.animationNameCache.set(t, this.animationName(t));
          }),
          (t.prototype.cachedAnimationName = function (t) {
            return this.animationNameCache.get(t);
          }),
          (t.prototype.scrollHandler = function () {
            return (this.scrolled = !0);
          }),
          (t.prototype.scrollCallback = function () {
            var n;
            if (
              this.scrolled &&
              ((this.scrolled = !1),
              (this.boxes = function () {
                var t, e, i, s;
                for (s = [], t = 0, e = (i = this.boxes).length; t < e; t++)
                  (n = i[t]) && (this.isVisible(n) ? this.show(n) : s.push(n));
                return s;
              }.call(this)),
              !this.boxes.length && !this.config.live)
            )
              return this.stop();
          }),
          (t.prototype.offsetTop = function (t) {
            for (var e; void 0 === t.offsetTop; ) t = t.parentNode;
            for (e = t.offsetTop; (t = t.offsetParent); ) e += t.offsetTop;
            return e;
          }),
          (t.prototype.isVisible = function (t) {
            var e, i, s, n, a;
            return (
              (i = t.getAttribute("data-wow-offset") || this.config.offset),
              (n =
                (a =
                  (this.config.scrollContainer &&
                    this.config.scrollContainer.scrollTop) ||
                  window.pageYOffset) +
                Math.min(this.element.clientHeight, this.util().innerHeight()) -
                i),
              (e = (s = this.offsetTop(t)) + t.clientHeight),
              s <= n && a <= e
            );
          }),
          (t.prototype.util = function () {
            return null != this._util ? this._util : (this._util = new e());
          }),
          (t.prototype.disabled = function () {
            return (
              !this.config.mobile && this.util().isMobile(navigator.userAgent)
            );
          }),
          t
        );
      })());
  }.call(this);
$(function () {
  var n = $(document).height(),
    e = $(window).height();
  n > 2 * e &&
    $("body").waypoint(
      function () {
        $(".back-to-top-button").toggleClass("is-visible");
      },
      { offset: -1 * e }
    );
}),
  $(function () {
    $.getJSON(
      "https://api.coindesk.com/v1/bpi/currentprice.json",
      function (n) {
        var e = n.bpi.USD.rate_float;
        (e = parseFloat(e).toFixed(2)),
          (e = Number(e).toLocaleString("en")) &&
            $(".js-bitcoin-price").html(e);
      }
    ).fail(function () {});
  }),
  jQuery(function (n) {
    n.fn.extend({
      initCarousel: function (e) {
        (e = new Swiper(e[0], { speed: 1e3, autoHeight: !0 })).on(
          "slideChangeTransitionEnd",
          function () {
            n(".js-carousel-pagination-button").removeClass("is-active"),
              n(
                ".js-carousel-pagination-button[data-slide-index=" +
                  e.activeIndex +
                  "]"
              ).addClass("is-active"),
              e.updateAutoHeight();
          }
        );
      },
      initCarousels: function () {
        n(".js-carousel").each(function () {
          n.fn.initCarousel(n(this));
        });
      },
    }),
      n.fn.initCarousels(),
      n(document).on("click", ".js-carousel-pagination-button", function () {
        var e = n(this).data("slide-index");
        n(this).closest(".js-carousel")[0].swiper.slideTo(e),
          n(".js-carousel-pagination-button").removeClass("is-active");
      });
  }),
  $(function () {
    $.fn.extend({
      initContentTransitions: function () {
        $("[data-transition]").each(function () {
          var n = $(this).data("transition"),
            e = n || "fadeIn";
          $(this).addClass("js-content-transition " + e);
        }),
          (wow = new WOW({
            boxClass: "js-content-transition",
            animateClass: "animated",
            offset: 1,
            callback: function (n) {
              var e = $(n);
              setTimeout(function () {
                e.removeClass(
                  "js-content-transition animated fadeIn"
                ).removeAttr("style data-loading");
              }, 1050);
            },
            mobile: !1,
          })),
          wow.init();
      },
    }),
      $.fn.initContentTransitions();
  }),
  $(function () {
    $(".js-count-up").counterUp({ delay: 10, time: 700 });
  }),
  $(function () {
    $.fn.extend({
      openDrawer: function (n) {
        n.addClass("is-open"),
          $.fn.showOverlay(),
          $(".drawer").not(n).removeClass("is-open");
      },
      closeDrawer: function (n) {
        n.removeClass("is-open"), $.fn.hideOverlay();
      },
      closeDrawers: function () {
        $(".drawer").each(function () {
          $.fn.closeDrawer($(this));
        });
      },
      toggleDrawer: function (n) {
        n.is(".is-open") ? $.fn.closeDrawer(n) : $.fn.openDrawer(n);
      },
    }),
      $(".js-drawer-button").click(function (n) {
        n.preventDefault();
        var e = "." + $(this).data("drawer"),
          t = $(e);
        $.fn.toggleDrawer(t);
      });
  }),
  $(function () {
    $(document).on("click", ".js-lightbox", function (n) {
      n.preventDefault();
    }),
      $().fancybox({ selector: ".js-lightbox" });
  }),
  $(function () {}),
  $(function () {
    $(document).on(
      "click",
      ".mobile-nav .menu-item-has-children > a",
      function (n) {
        n.preventDefault();
        var e = $(this).closest(".menu-item-has-children");
        e.toggleClass("is-open"),
          e.find(".sub-menu").first().slideToggle({ duration: 250 });
        var t = e.siblings(".menu-item-has-children.is-open");
        t.removeClass("is-open"),
          t.children(".sub-menu").slideUp({ duration: 250 });
      }
    );
  }),
  $(function () {
    $.fn.extend({
      showOverlay: function () {
        0 == $(".content-overlay").length &&
          ($("main").prepend('<span class="content-overlay"></span>'),
          $("body").addClass("is-scroll-locked"));
      },
      hideOverlay: function () {
        $(".content-overlay").remove(),
          $("body").removeClass("is-scroll-locked");
      },
    }),
      $(document).on("click", ".content-overlay", function () {
        $.fn.hideOverlay(), $.fn.closeDrawers();
      });
  }),
  $(function () {
    $(
      ".page-header .tile-background, .page-header .animated-text-glow-effect"
    ).addClass("animate-in");
  }),
  $(function () {
    $(".content").fitVids();
  }),
  $(function () {}),
  $(function () {
    $(".content a").each(function () {
      1 == $(this).children().length &&
        1 == $(this).children("img").length &&
        $(this).addClass("image-link");
    });
  });
