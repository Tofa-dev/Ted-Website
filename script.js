 var navItems = document.querySelectorAll('.nav-item');
        var contentSections = document.querySelectorAll('.content-section');

        navItems.forEach(function(item) {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                navItems.forEach(function(nav) {
                    nav.classList.remove('active');
                });
                
                this.classList.add('active');
                
                var pageName = this.getAttribute('data-page');
                
                contentSections.forEach(function(section) {
                    section.classList.remove('active');
                });
                
                var targetSection = document.getElementById(pageName);
                if (targetSection) {
                    targetSection.classList.add('active');
                }
                
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });

        window.addEventListener('load', function() {
            document.body.style.opacity = '0';
            setTimeout(function() {
                document.body.style.transition = 'opacity 0.5s ease';
                document.body.style.opacity = '1';
            }, 100);
        });

        document.addEventListener('mousemove', function(e) {
            var decorations = document.querySelectorAll('.bg-decoration');
            var mouseX = e.clientX / window.innerWidth;
            var mouseY = e.clientY / window.innerHeight;
            
            decorations.forEach(function(decoration, index) {
                var speed = (index + 1) * 20;
                var x = (mouseX - 0.5) * speed;
                var y = (mouseY - 0.5) * speed;
                decoration.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
            });
        });
