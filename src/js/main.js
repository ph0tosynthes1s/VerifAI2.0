document.addEventListener("DOMContentLoaded", function(event){
    const tl = gsap.timeline();
    // Header elements
    const headerLogo = document.querySelector(".header__logo")
    const headerMenuItem = document.querySelectorAll(".header__menu-item")
    const headerMenuButton = document.querySelector(".header__menu-button")
    const headerMenuMobile = document.querySelector(".header__menu-mobile")
    // Main elements
    const mainContent = document.querySelector(".main__content")
    const mainBottom = document.querySelector(".main__bottom")
    const mainBottomButton = document.querySelector(".main__bottom-button")
    const mainBottomButtonSrc = document.querySelector(".main__bottom-button-src")
    const mainContentTitleLetterBefore = document.querySelector(".main__content-title-letter_before")
    const mainContentTitleLetterAfter = document.querySelectorAll(".main__content-title-letter_after")
    // About elements
    const aboutTitle = document.querySelector(".about__title")
    const aboutContentTxt = document.querySelector(".about__content-txt")
    const aboutContentPic = document.querySelector(".about__content-pic")
    // App elements
    const appTitle = document.querySelector(".app__title")
    const appContentBlock = document.querySelectorAll(".app__content-block")
    const appContentButton = document.querySelector(".app__content-button")
    const appContentBullet = document.querySelectorAll(".app__content-bullet")
    const appHand = document.querySelector(".app__hand")
    // Bullet elements
    const appContentBulletTop = document.querySelector(".app__content-bullet_top")
    const appContentBulletMiddle = document.querySelector(".app__content-bullet_middle")
    const appContentBulletBottom = document.querySelector(".app__content-bullet_bottom")
    // Documentation elements
    const documentationBlock = document.querySelector(".documentation__block")
    // Tariff elements
    const tariffTitle = document.querySelector(".tariff__title")
    const tariffTxt = document.querySelector(".tariff__txt")
    const tariffPlansItems = document.querySelectorAll(".tariff__plans-items")
    // Footer elements
    const footerConnectBlockTitle = document.querySelector(".footer__connect-block-title")
    const footerConnectBlockTxt = document.querySelector(".footer__connect-block-txt")
    const footerConnectBlockButton = document.querySelector(".footer__connect-button")
    const footerDivider = document.querySelector(".footer__divider")
    const footerContentLogo = document.querySelector(".footer__content-logo")
    const footerContentMenu = document.querySelectorAll(".footer__content-menu")
    const footerContentButtonsMail = document.querySelectorAll(".footer__content-buttons-mail")
    const footerContentButtonsTelegramm = document.querySelectorAll(".footer__content-buttons-telegramm")
    // All links 
    const allLinks = document.querySelectorAll('a[href]')
    // Header animation
    gsap.set(headerLogo, {opacity: 0});
    gsap.to(headerLogo, {opacity: 1,duration: 2});
    // Header ScrollTo
    function getSamePageAnchor (link) {
        if (
            link.protocol !== window.location.protocol ||
            link.host !== window.location.host ||
            link.pathname !== window.location.pathname ||
            link.search !== window.location.search
        ) {
        return false;
        }
    
        return link.hash;
    }
    function scrollToHash(hash, e) {
        const elem = hash ? document.querySelector(hash) : false;
        if(elem) {
        if(e) e.preventDefault();
        gsap.to(window, {duration: 0.5,scrollTo: elem});
        }
    }
    allLinks.forEach(a => {
        a.addEventListener('click', e => {
            scrollToHash(getSamePageAnchor(a), e);
        });
    });
    scrollToHash(window.location.hash);
    gsap.set(headerMenuItem, {opacity: 0});
    gsap.to(headerMenuItem, {opacity: 1,duration: 0.5, stagger:0.5});
    // Main animation
    let mainTl = gsap.timeline()
    gsap.set(mainContent, {opacity: 0});
    gsap.to(mainContent, {opacity: 1,duration: 5});
    gsap.set(mainContentTitleLetterAfter, {opacity: 0});
    mainTl.from(mainContentTitleLetterBefore, {opacity: 1, display: 'inline'})
    mainTl.to(mainContentTitleLetterBefore, {opacity: 0, display: 'none', duration: 3});
    mainTl.from(mainContentTitleLetterAfter, {opacity: 0})
    mainTl.to(mainContentTitleLetterAfter, {opacity: 1, duration: 3});
    gsap.set(mainBottom, {opacity: 0});
    gsap.to(mainBottom, {opacity: 1,duration: 5});
    gsap.to(mainBottomButtonSrc, {
        keyframes: {
          "0%": { yPercent: 0},
          "25%": { yPercent: 10},
          "65%": { yPercent: 30},
          "100%": { yPercent: 0},
          easeEach: "sine.out"
        },
        duration: 3,
        repeat: -1,
      });
    // Main ScrollTo
    mainBottomButton.addEventListener('click', () => {
        gsap.to(window, {
            duration: 0.5,
            scrollTo: '#about'
        });
    });

    headerMenuButton.addEventListener('click', () => {
        gsap.set(headerMenuMobile, {display: "block"});
        gsap.set(document.body, {overflowY: "hidden"});
    });
    // About Animation
    gsap.set(aboutTitle, {opacity: 0});
    gsap.set(aboutContentTxt, {opacity: 0});
    gsap.set(aboutContentPic, {opacity: 0});
    let aboutTl = gsap.timeline()
        .from(aboutTitle, {opacity: 0})
        .to(aboutTitle, {opacity: 1,duration: 0.5})
        .from(aboutContentTxt, {opacity: 0})
        .to(aboutContentTxt, {opacity: 1,duration: 0.5})
        .from(aboutContentPic, {opacity: 0})
        .to(aboutContentPic, {opacity: 1,duration: 0.5})
    // About ScrollTrigger
    ScrollTrigger.create({
        trigger:'#about',
        start:"center center",
        animation:aboutTl 
    });
    // App Animation
    gsap.set(appHand, {opacity: 0});
    gsap.set(appTitle, {opacity: 0});
    gsap.set(appContentBlock, {opacity: 0});
    gsap.set(appContentButton, {opacity: 0});
    gsap.set(appContentBullet, {opacity: 0});
    let appTl = gsap.timeline()
        .from(appTitle, {opacity: 0})
        .to(appTitle, {opacity: 1,duration: 0.5})
        .from(appContentBlock, {opacity: 0})
        .to(appContentBlock, {opacity: 1,duration: 0.5, stagger:0.5})
        .from(appContentButton, {opacity: 0})
        .to(appContentButton, {opacity: 1,duration: 0.3})
        .from(appContentBullet, {opacity: 0})
        .to(appContentBullet, {opacity: 1,duration: 0.3, stagger:0.5})
        .from(appHand, {opacity: 0})
        .to(appHand, {opacity: 1,duration: 0.5})
    // App ScrollTrigger
    ScrollTrigger.create({
        trigger:'#app',
        start:"center center",
        animation:appTl 
    });
    // App ScrollTo
    appContentButton.addEventListener('click', () => {
        gsap.to(window, {
            duration: 0.5,
            scrollTo: '#tariff-items'
        });
    });
    // Hand animation
    appContentBulletTop.onmouseover = function bulletTopHover(){
        appHand.style.top = "0px";
    };
    appContentBulletMiddle.onmouseover = function bulletMiddleHover(){
        appHand.style.top = "180px";
    };
    appContentBulletBottom.onmouseover = function bulletBottomHover(){
        appHand.style.top = "380px";
    };
    // Documentation Animation
    gsap.set(documentationBlock, {opacity: 0, x: -500});
    let documentationTl = gsap.timeline()
        .from(documentationBlock, {opacity: 0, x: -500})
        .to(documentationBlock, {opacity: 1, x: 0,duration: 0.5})
    // Documentation ScrollTrigger
    ScrollTrigger.create({
        trigger:'#documentation',
        start:"center center",
        animation:documentationTl
    });
    // Tariff Animation
    gsap.set(tariffTitle, {opacity: 0});
    let tariffTl = gsap.timeline()
        .from(tariffTitle, {opacity: 0})
        .to(tariffTitle, {opacity: 1, duration: 0.5})
        .from(tariffTxt, {opacity: 0})
        .to(tariffTxt, {opacity: 1, duration: 0.5})
        .from(tariffPlansItems, {opacity: 0})
        .to(tariffPlansItems, {opacity: 1, duration: 0.5, stagger:0.5})
    // Documentation ScrollTrigger
    ScrollTrigger.create({
        trigger:'#tariff',
        start:"center center",
        animation:tariffTl
    });
    // Footer Animation
    gsap.set(footerConnectBlockTitle, {opacity: 0});
    gsap.set(footerConnectBlockTxt, {opacity: 0});
    gsap.set(footerConnectBlockButton, {opacity: 0});
    gsap.set(footerDivider, {opacity: 1});
    gsap.set(footerContentLogo, {opacity: 0});
    gsap.set(footerContentMenu, {opacity: 0});
    gsap.set(footerContentButtonsMail, {opacity: 0});
    gsap.set(footerContentButtonsTelegramm, {opacity: 0});
    let connectTl = gsap.timeline()
        .from(footerConnectBlockTitle, {opacity: 0})
        .to(footerConnectBlockTitle, {opacity: 1, duration: 0.5})
        .from(footerConnectBlockTxt, {opacity: 0})
        .to(footerConnectBlockTxt, {opacity: 1, duration: 0.5})
        .from(footerConnectBlockButton, {opacity: 0})
        .to(footerConnectBlockButton, {opacity: 1, duration: 0.5})
        .from(footerDivider, {opacity: 1, width:'0%'})
        .to(footerDivider, {opacity: 1, width:'100%' , duration: 1})
        .from(footerContentLogo, {opacity: 0})
        .to(footerContentLogo, {opacity: 1, duration: 0.3})
        .from(footerContentMenu, {opacity: 0})
        .to(footerContentMenu, {opacity: 1,duration: 0.3, stagger:0.5})
        .from(footerContentButtonsMail, {opacity: 0})
        .to(footerContentButtonsMail, {opacity: 1,duration: 0.3})
        .from(footerContentButtonsTelegramm, {opacity: 0})
        .to(footerContentButtonsTelegramm, {opacity: 1,duration: 0.3})
    ScrollTrigger.create({
        trigger:'#connect',
        start:"center center",
        animation:connectTl
    });
});
