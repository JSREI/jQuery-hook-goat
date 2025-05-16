// 获取 GitHub 仓库的 star 数量
async function getGitHubStars(repoUrl) {
    // 检查本地缓存
    const cacheKey = `github-stars-${repoUrl}`;
    const cachedData = localStorage.getItem(cacheKey);
    
    if (cachedData) {
        try {
            const { stars, timestamp } = JSON.parse(cachedData);
            const cacheTime = new Date(timestamp);
            const now = new Date();
            
            // 检查缓存是否在1小时内
            const hourInMs = 60 * 60 * 1000;
            if (now - cacheTime < hourInMs) {
                console.log(`使用缓存的 Star 数据: ${repoUrl}`);
                return stars;
            }
        } catch (e) {
            console.error('解析缓存数据出错:', e);
            // 缓存数据解析错误，继续请求新数据
        }
    }
    
    // 缓存不存在或已过期，发起新请求
    const apiUrl = `https://api.github.com/repos/${repoUrl}`;
    try {
        console.log(`获取 ${repoUrl} 的 Star 数据...`);
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.stargazers_count !== undefined) {
            // 将数据存入缓存
            const cacheData = {
                stars: data.stargazers_count,
                timestamp: new Date().toISOString()
            };
            localStorage.setItem(cacheKey, JSON.stringify(cacheData));
            
            return data.stargazers_count;
        } else {
            throw new Error('API 返回数据格式不正确');
        }
    } catch (error) {
        console.error('Error fetching GitHub stars:', error);
        
        // 如果请求失败但有缓存，返回过期的缓存数据
        if (cachedData) {
            try {
                const { stars } = JSON.parse(cachedData);
                console.log('使用过期的缓存数据');
                return stars;
            } catch (e) {
                // 忽略缓存解析错误
            }
        }
        
        return '加载失败';
    }
}

// 更新页面上的 star 数量
async function updateStars() {
    const jqueryHookStars = await getGitHubStars('JSREI/jQuery-hook');
    const jqueryHookGoatStars = await getGitHubStars('JSREI/jQuery-hook-goat');
    
    // 更新导航栏上的 star 数量
    document.getElementById('stars-jquery-hook').innerHTML = `<i class="far fa-star"></i> ${jqueryHookStars}`;
    document.getElementById('stars-jquery-hook-goat').innerHTML = `<i class="far fa-star"></i> ${jqueryHookGoatStars}`;
}

// 页面加载时更新 star 数量
updateStars();

// 处理页面导航点的激活状态
const sections = document.querySelectorAll('.section');
const navDots = document.querySelectorAll('.page-nav a');
const navMenuItems = document.querySelectorAll('.nav-menu-item');
let currentSection = 0;
let isScrolling = false;

// 滚动到指定部分
function scrollToSection(index) {
    if (index < 0 || index >= sections.length || isScrolling) return;
    
    isScrolling = true;
    currentSection = index;
    
    // 更新导航点
    navDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    // 更新导航菜单激活状态
    navMenuItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // 滚动到目标部分
    window.scrollTo({
        top: sections[index].offsetTop,
        behavior: 'smooth'
    });
    
    // 重置滚动状态
    setTimeout(() => {
        isScrolling = false;
    }, 800); // 滚动动画大约持续800ms
}

// 处理滚轮事件
window.addEventListener('wheel', function(e) {
    e.preventDefault();
    
    if (isScrolling) return;
    
    if (e.deltaY > 0) {
        // 向下滚动
        scrollToSection(Math.min(currentSection + 1, sections.length - 1));
    } else {
        // 向上滚动
        scrollToSection(Math.max(currentSection - 1, 0));
    }
}, { passive: false });

// 处理导航点点击
navDots.forEach((dot, index) => {
    dot.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToSection(index);
    });
});

// 处理导航菜单点击
navMenuItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToSection(index);
    });
});

// 初始化
function initFullpage() {
    // 检测当前页面位置并设置
    const currentScroll = window.scrollY;
    const windowHeight = window.innerHeight;
    
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (currentScroll >= sectionTop - windowHeight/2 && 
            currentScroll < sectionBottom - windowHeight/2) {
            currentSection = index;
            navDots[index].classList.add('active');
            
            // 激活对应的导航菜单
            navMenuItems.forEach((item, i) => {
                if (i === index) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
    });
}

// 监听滚动结束
window.addEventListener('scroll', function() {
    if (!isScrolling) {
        clearTimeout(window.scrollEndTimer);
        window.scrollEndTimer = setTimeout(function() {
            // 滚动结束后确保对齐到最近的section
            const closestSection = Math.round(window.scrollY / window.innerHeight);
            if (closestSection !== currentSection) {
                scrollToSection(closestSection);
            }
        }, 50);
    }
});

// 初始化
window.addEventListener('load', initFullpage);
initFullpage();

// 初始化 Lightbox2 配置
lightbox.option({
    'resizeDuration': 300,
    'wrapAround': true,
    'albumLabel': "图片 %1 / %2",
    'fadeDuration': 300,
    'positionFromTop': 100,
    'maxWidth': window.innerWidth < 768 ? window.innerWidth - 40 : 800,
    'maxHeight': window.innerHeight < 768 ? window.innerHeight - 120 : 800
}); 