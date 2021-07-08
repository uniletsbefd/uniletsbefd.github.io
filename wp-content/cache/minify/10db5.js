!(function () {
  for (
    var e,
      n = function () {},
      o = [
        "assert",
        "clear",
        "count",
        "debug",
        "dir",
        "dirxml",
        "error",
        "exception",
        "group",
        "groupCollapsed",
        "groupEnd",
        "info",
        "log",
        "markTimeline",
        "profile",
        "profileEnd",
        "table",
        "time",
        "timeEnd",
        "timeline",
        "timelineEnd",
        "timeStamp",
        "trace",
        "warn",
      ],
      i = o.length,
      r = (window.console = window.console || {});
    i--;

  )
    r[(e = o[i])] || (r[e] = n);
})();
(function ($, root, undefined) {
  "use strict";
  $(function () {
    var windowWidth = $(window).width();
    if (windowWidth < 1024) {
      $(".uc-desktop").addClass("hide");
    }
    var status;
    var mobilestatus;
    $("span.icon-uc-close").on("click", function () {
      status = "closed";
      $(".uc-desktop").addClass("hide");
      $(".site-header").css("top", "0");
      localStorage.setItem("state", status);
    });
    $("span.icon-uc-close-mobile").on("click", function () {
      mobilestatus = "closed";
      $(".uc-mobile").addClass("hide");
      $(".mobile-site-header").css("height", "64px");
      $("body").css("padding-top", "64px");
      localStorage.setItem("state-mobile", mobilestatus);
    });
    $(window).on("load", function () {
      if (windowWidth < 1000) {
        var getStateMobile = localStorage.getItem("state-mobile");
      } else {
        var getState = localStorage.getItem("state");
      }
      if (getState === "closed") {
        $(".uc-desktop").addClass("hide");
        $(".site-header").css("top", "0");
      } else {
        $(".uc-desktop").removeClass("hide");
        $(".site-header").css("top", "64px");
      }
      if (getStateMobile === "closed") {
        $(".uc-mobile").addClass("hide");
        $(".mobile-site-header").css("height", "64px");
        $("body").css("padding-top", "64px");
      } else {
        $(".uc-mobile").removeClass("hide");
      }
    });
  });
})(jQuery, this);
