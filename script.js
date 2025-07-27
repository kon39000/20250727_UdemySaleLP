// 講座データ（CSVから取得）
const courses = [
    {
        id: "6676447",
        name: "WhisperとChatGPTでできる！音声入力×AIで記事作成入門講座",
        couponCode: "250728",
        price: "¥1,300",
        originalPrice: "¥2,600",
        url: "https://www.udemy.com/course/whisper-chatgpt/?couponCode=250728",
        duration: "57分",
        students: "30人",
        rating: "5.0",
        reviews: "1",
        image: "image/Udemy_whisper.jpg"
    },
    {
        id: "6540977",
        name: "ChatGPTで始める画像生成デザイン｜チラシ・ロゴ・マンガまでつくれるAIクリエイティブ講座",
        couponCode: "250728",
        price: "¥1,300",
        originalPrice: "¥15,800",
        url: "https://www.udemy.com/course/chatgptai-design/?couponCode=250728",
        duration: "2時間43分",
        students: "225人",
        rating: "3.9",
        reviews: "16",
        image: "image/Udemy_Design.webp"
    },
    {
        id: "6501279",
        name: "AI時代のスライド作成！Felo & Canvaで最速資料作成術",
        couponCode: "250728",
        price: "¥1,300",
        originalPrice: "¥15,800",
        url: "https://www.udemy.com/course/aifelo-canva/?couponCode=250728",
        duration: "2時間9分",
        students: "316人",
        rating: "4.7",
        reviews: "11",
        image: "image/Udemy_Felo.webp"
    },
    {
        id: "6469133",
        name: "ChatGPT×note活用術！SEOで目立つ記事を効率的に作る講座",
        couponCode: "250728",
        price: "¥1,300",
        originalPrice: "¥9,800",
        url: "https://www.udemy.com/course/chatgptnoteseoai/?couponCode=250728",
        duration: "3時間2分",
        students: "516人",
        rating: "4.6",
        reviews: "25",
        image: "image/Udemy_note.jpg"
    },
    {
        id: "6427725",
        name: "初心者でもできる！ChatGPTでゼロからはじめるKindle出版：テーマ決め・文章作成・表紙デザイン完全攻略",
        couponCode: "250728",
        price: "¥1,300",
        originalPrice: "¥9,800",
        url: "https://www.udemy.com/course/chatgpt-kindle/?couponCode=250728",
        duration: "2時間45分",
        students: "184人",
        rating: "4.3",
        reviews: "13",
        image: "image/Udemy_Kindle.webp"
    }
];

// セール終了日時（日本時間）
const saleEndDate = new Date('2025-08-01T23:59:59+09:00');

// カウントダウンタイマー
function updateCountdown() {
    const now = new Date();
    const timeLeft = saleEndDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    } else {
        // セール終了
        document.getElementById('countdown').innerHTML = '<div class="time-unit"><span class="time-value">セール終了</span></div>';
    }
}

// 星の表示を生成
function generateStars(rating) {
    const fullStars = Math.floor(parseFloat(rating));
    const hasHalfStar = parseFloat(rating) % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '⭐';
    }
    if (hasHalfStar) {
        starsHTML += '⭐';
    }
    
    return starsHTML;
}

// 講座の学習ポイントを生成
function getCourseHighlights(courseId) {
    const highlights = {
        "6676447": ["音声ファイルの自動文字起こし", "AIによる記事構成の作成", "効率的なコンテンツ制作フロー"],
        "6540977": ["ChatGPTでのデザイン指示方法", "チラシ・ロゴデザインの実践", "マンガ風イラスト生成テクニック"],
        "6501279": ["Feloでの音声入力活用法", "Canvaとの連携ワークフロー", "プレゼン資料の高速作成術"],
        "6469133": ["SEOに強い記事構造の作り方", "noteでの効果的な発信方法", "読者エンゲージメントの向上"],
        "6427725": ["Kindle出版の全工程を習得", "魅力的な表紙デザイン制作", "収益化のためのマーケティング"]
    };
    return highlights[courseId] || ["実践的なAIスキルの習得", "効率的な作業フローの構築", "創造性とテクノロジーの融合"];
}

// 講座カードを生成
function createCourseCard(course) {
    const stars = generateStars(course.rating);
    const highlights = getCourseHighlights(course.id);
    
    return `
        <div class="course-card">
            <div class="course-image">
                <img src="${course.image}" alt="${course.name}" class="course-thumbnail" loading="lazy">
            </div>
            
            <div class="course-header">
                <h3 class="course-title">${course.name}</h3>
            </div>
            
            <div class="course-content">
                <div class="course-stats">
                    <div class="stat-item">
                        <span class="stat-icon">⏱️</span>
                        <span class="stat-value">${course.duration}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-icon">👥</span>
                        <span class="stat-value">${course.students}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-icon">${stars}</span>
                        <span class="stat-value">${course.rating} (${course.reviews}件)</span>
                    </div>
                </div>
                
                <div class="course-highlights">
                    <h4 class="highlights-title">📚 学習内容</h4>
                    <ul class="highlights-list">
                        ${highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="course-pricing">
                    <div class="pricing-left">
                        <div class="original-price-card">通常価格 ${course.originalPrice}</div>
                        <div class="current-price">${course.price}</div>
                    </div>
                    <div class="coupon-code" onclick="copyCouponCode('${course.couponCode}')" title="クリックでコピー">${course.couponCode}</div>
                </div>
                
                <a href="${course.url}" target="_blank" rel="noopener noreferrer" class="coupon-btn">
                    🚀 今すぐ申し込む
                </a>
            </div>
        </div>
    `;
}

// 講座一覧を表示
function displayCourses() {
    const coursesGrid = document.getElementById('courses-grid');
    const coursesHTML = courses.map(course => createCourseCard(course)).join('');
    coursesGrid.innerHTML = coursesHTML;
}

// クリック追跡
function trackCourseClick(courseId, courseName) {
    // Google Analytics などの追跡コードをここに追加可能
    console.log(`Course clicked: ${courseId} - ${courseName}`);
}

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    // 講座一覧を表示
    displayCourses();
    
    // カウントダウンタイマーを開始
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // 講座カードのクリックイベントを追加
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('coupon-btn')) {
            const courseCard = e.target.closest('.course-card');
            const courseTitle = courseCard.querySelector('.course-title').textContent;
            trackCourseClick('', courseTitle);
        }
    });
});

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// パフォーマンス最適化：画像の遅延読み込み
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ページ読み込み完了後に遅延読み込みを初期化
window.addEventListener('load', lazyLoadImages);

// クーポンコードをクリップボードにコピーする関数
function copyCouponCode(couponCode) {
    // モダンブラウザ用のClipboard API
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(couponCode).then(function() {
            showCopySuccess();
        }).catch(function(err) {
            console.error('クリップボードへのコピーに失敗しました: ', err);
            // フォールバック実行
            fallbackCopyToClipboard(couponCode);
        });
    } else {
        // 古いブラウザ用のフォールバック
        fallbackCopyToClipboard(couponCode);
    }
}

// フォールバック用のコピー関数（古いブラウザ対応）
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopySuccess();
        } else {
            showCopyError();
        }
    } catch (err) {
        console.error('フォールバックコピーに失敗しました: ', err);
        showCopyError();
    } finally {
        document.body.removeChild(textArea);
    }
}

// コピー成功時の表示
function showCopySuccess() {
    // 既存の通知があれば削除
    const existingNotification = document.querySelector('.copy-notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // 成功通知を作成
    const notification = document.createElement('div');
    notification.className = 'copy-notification copy-success';
    notification.innerHTML = '🎉 クーポンコードをコピーしました！';
    
    // 通知をページに追加
    document.body.appendChild(notification);
    
    // アニメーション開始
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // 3秒後に削除
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// コピー失敗時の表示
function showCopyError() {
    // 既存の通知があれば削除
    const existingNotification = document.querySelector('.copy-notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // エラー通知を作成
    const notification = document.createElement('div');
    notification.className = 'copy-notification copy-error';
    notification.innerHTML = '❌ コピーに失敗しました。手動でコピーしてください。';
    
    // 通知をページに追加
    document.body.appendChild(notification);
    
    // アニメーション開始
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // 5秒後に削除
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}