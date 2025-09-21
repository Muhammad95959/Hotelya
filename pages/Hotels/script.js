document.addEventListener("DOMContentLoaded", function () {
    // تأثير التحويل عند تمرير الماوس على كروت الفنادق
    const hotelCards = document.querySelectorAll(".hotel-card");

    hotelCards.forEach(card => {
        card.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.08)";
            this.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.3)";
        });

        card.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.1)";
        });
    });

    // تشغيل وإيقاف الفيديو عند الضغط عليه
    const videos = document.querySelectorAll(".hotel-video");

    videos.forEach(video => {
        video.addEventListener("click", function () {
            if (this.paused) {
                this.play();
            } else {
                this.pause();
            }
        });
    });

            if (!confirmBooking) {
                event.preventDefault(); // يمنع الانتقال لصفحة الحجز لو المستخدم رفض
            }
        });

        // تأثير عند تمرير الماوس على الزر
        button.addEventListener("mouseenter", function () {
            this.style.background = "#000"; // يتحول للأسود عند تمرير الماوس
            this.style.color = "#FFF"; // النص يبقى أبيض
        });

        button.addEventListener("mouseleave", function () {
            this.style.background = "#8B5E3B"; // يرجع لونه الأساسي البني الفاتح
            this.style.color = "#FFF";
        });
          
        //الوضع الداكن و الفاتح
        function toggleDarkMode() {
            const body = document.body;
            const button = document.querySelector(".dark-mode-btn");
        
            body.classList.toggle("dark-mode");
        
            // تغيير نص الزر بالكامل
            if (body.classList.contains("dark-mode")) {
                button.innerHTML = "Light Mode";
            } else {
                button.innerHTML = "Dark Mode";
            }
        }