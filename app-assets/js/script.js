// Cursor Magic animation
const cursor = document.querySelector('.cursor');
const midCursor = document.querySelector('.cursor-mid');
const hoverCursor = document.querySelector('.cursor-hover');
const anchorTags = document.querySelectorAll('a');

document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseenter', handleMouseEnter);
document.addEventListener('mouseleave', handleMouseLeave);

function handleMouseMove(e) {
    const { clientX, clientY } = e;
    cursor.style.left = midCursor.style.left = hoverCursor.style.left = `${clientX}px`;
    cursor.style.top = midCursor.style.top = hoverCursor.style.top = `${clientY}px`;
}

function handleMouseEnter() {
    midCursor.style.opacity = '0.8';
}

function handleMouseLeave() {
    midCursor.style.opacity = '.8';
}

anchorTags.forEach((anchor) => {
    anchor.addEventListener('mouseenter', handleAnchorMouseEnter);
    anchor.addEventListener('mouseleave', handleAnchorMouseLeave);
});

function handleAnchorMouseEnter() {
    cursor.style.opacity = '0';
    midCursor.style.opacity = '0';
    hoverCursor.style.opacity = '1';
    hoverCursor.style.transform = 'scale(8)';
}

function handleAnchorMouseLeave() {
    cursor.style.opacity = '1';
    midCursor.style.opacity = '1';
    hoverCursor.style.transform = 'scale(0)';
    hoverCursor.style.opacity = '0';
}

// Navbar onScroll animation
// window.addEventListener('scroll', );
window.addEventListener('scroll', () => {
    onScrollTop();
});
// window.addEventListener('load', );
window.addEventListener('load', () => {
    onScrollTop();
});

function onScrollTop() {
    const header = document.querySelector('.header');
    const goTopBtn = document.getElementById('goTopBtn');
    const isScrolled = document.documentElement.scrollTop > 100 || document.body.scrollTop > 100;
    const HeaderScroll = document.querySelector('.PhoneHeaderOnScroll');

    header.style.background = isScrolled ? '#FFFFFF' : 'transparent';
    header.style.height = isScrolled ? '70px' : '80px';
    header.classList.toggle('h-shadow', isScrolled);
    goTopBtn.style.display = isScrolled ? 'block' : 'none';

    goTopBtn.addEventListener('click', () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });

    HeaderScroll.style.transform = isScrolled ? 'scaleY(1)' : 'scaleY(0)';

}

const text = document.querySelector('.services-changer');
const changerWebsitetitle = document.querySelector('.changerWebsitetitle');

const typewriterEffect = (element, text, speed, callback) => {
    let i = 0;

    const typeWriter = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            callback && callback();
        }
    };

    typeWriter();
};

const changerEffect = () => {
    const updates = [
        { text: 'Landing Page' },
        { text: 'Business Website' },
        { text: 'Portfolio Website' },
        { text: 'Blogging Website' },
        { text: 'Education Website' },
        { text: 'Non-Profit Website' },
        { text: 'Entertainment Website' },
    ];

    let index = 0;

    const updateText = () => {
        const update = updates[index];
        text.textContent = '';
        changerWebsitetitle.textContent = '';

        typewriterEffect(text, update.text, 100, () => {
            if (update.title) {
                setTimeout(() => {
                    typewriterEffect(changerWebsitetitle, update.title, 100, () => {
                        index = (index + 1) % updates.length;
                        setTimeout(updateText, 1000); // Add a delay before starting the next update
                    });
                }, 1000); // Add a delay before starting the title effect
            } else {
                index = (index + 1) % updates.length;
                setTimeout(updateText, 1000); // Add a delay before starting the next update
            }
        });
    };

    updateText();
};

// Typewriter Function
// changerEffect();
// setInterval(() => {
//     changerEffect();
// }, 28000); // Adjust interval as needed

// Scroll progress bar
const scrollProgressBar = document.getElementById('scrollProgressBar');
window.addEventListener('scroll', updateScrollProgressBar);

function updateScrollProgressBar() {
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (document.documentElement.scrollTop / scrollHeight) * 100;
    scrollProgressBar.style.width = `${scrolled}%`;
    scrollProgressBar.style.display = scrolled > 0 ? 'block' : 'none';
}
// Select the side menu element
const sideMenu = document.querySelector('.SidebarMenu');

// Add event listener to open the side menu
document.querySelector('.menu-icon').addEventListener('click', () => {
    sideMenu.style.transform = 'scaleX(1)';
});

function closeSidebar() {
    sideMenu.style.transform = 'scaleX(0)';
}

const PopUpProfile = document.getElementById('Header-N-PopUp');
const PopUpProfileIcon = document.getElementById('PopUpProfile');
const PopUpLogo = document.getElementById('PopUpLogo');
const PopUpImg = document.getElementById('ShaniPopUpImg');
const PopUpBG = document.querySelector('.PopUp-bg');
const PopUpContent = document.querySelector('.PopUpContent');
const PopUpBottom = document.querySelector('.BottomBar');

PopUpProfileIcon.addEventListener('click', () => {
    // PopUpProfile.style.display = 'block';
    PopUpProfile.style.height = '100vh';
    PopUpProfile.style.background = '#2D2D2D';
    
    PopUpLogo.style.display = 'none';

    PopUpImg.style.width = '80px';
    PopUpImg.style.marginLeft = '-5px';

    PopUpBG.style.transform = 'scaleY(1)';
    PopUpBG.style.background = 'var(--orange)';

    // Delay before setting visibility to 'visible'
    setTimeout(() => {
        PopUpBottom.style.visibility = 'visible';
        PopUpBottom.style.background = 'var(--orange)';
    }, 200); // Adjust the delay time (1000 milliseconds = 1 second)

    PopUpProfileIcon.style.cursor = 'default';
    PopUpProfileIcon.style.marginTop = '25px';
    PopUpProfileIcon.style.marginLeft = '5%';
    PopUpProfileIcon.style.width = '80px';
    PopUpProfileIcon.style.height = '80px';
    PopUpProfileIcon.style.background = '#2D2D2D';
    PopUpProfileIcon.style.border = '6px solid #FFFFFF';
    PopUpProfileIcon.style.boxShadow = '0 2px 15px #000000';
});

document.querySelector('.PopUpCancel').addEventListener('click', (e) => {
    // PopUpProfile.style.display = 'block';
    PopUpProfile.style.height = '60px';
    PopUpProfile.style.background = '#FFFFFF';
    
    PopUpLogo.style.display = 'block';

    PopUpImg.style.width = '45px';
    PopUpImg.style.marginLeft = '-2px';

    PopUpBG.style.transform = 'scaleY(0)';
    PopUpBG.style.background = 'transparent';

    PopUpBottom.style.visibility = 'hidden';
    PopUpBottom.style.background = '#2D2D2D';

    PopUpProfileIcon.style.cursor = 'pointer';
    PopUpProfileIcon.style.marginTop = '10px';
    PopUpProfileIcon.style.marginLeft = '80%';
    PopUpProfileIcon.style.width = '40px';
    PopUpProfileIcon.style.height = '40px';
    PopUpProfileIcon.style.background = 'var(--orange)';
    PopUpProfileIcon.style.border = '1px solid transparent';
    PopUpProfileIcon.style.boxShadow = '0 0 5px #888888';
});