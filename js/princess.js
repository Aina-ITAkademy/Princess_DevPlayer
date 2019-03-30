

function init() {

    
}
function alertTest(msg) {
    alert(msg)
}


function scrollCtrl() {
    //Animation dans la section SectionAboutMe sur les skillbar
    var headerList = document.getElementsByTagName('header')
    var header = headerList[0]
    
    var posY = window.scrollY + (header.offsetHeight)*2;
    var limit = (window.innerHeight)-posY;
    if(posY > limit) {
        var skill1 = document.getElementById("Divskill1_sub")
        var skill2 = document.getElementById("Divskill2_sub")
        var skill3 = document.getElementById("Divskill3_sub")

        skill1.classList.remove("animation-pause");
        skill2.classList.remove("animation-pause");
        skill3.classList.remove("animation-pause");

        skill1.classList.add("animation-start");
        skill2.classList.add("animation-start");
        skill3.classList.add("animation-start");
    }

    //Souligner selon notre section
    var limit_Intro = document.getElementById("SectionIntro").offsetTop;
    var limit_AboutMe = document.getElementById("SectionAboutMe").offsetTop;
    var limit_Service = document.getElementById("SectionService").offsetTop;
    var limit_Portefolio = document.getElementById("SectionPortefolio").offsetTop;
    var limit_Testimonial= document.getElementById("SectionTestimonial").offsetTop;
    var limit_OurBlog = document.getElementById("SectionOurBlog").offsetTop;
    var limit_ContactForm = document.getElementById("ContactForm").offsetTop;

    var aIntro = document.getElementById("aIntro")
    var aAboutMe = document.getElementById("aAboutMe")
    var aService = document.getElementById("aService")
    var aPortefolio = document.getElementById("aPortefolio")
    var aTestimonial = document.getElementById("aTestimonial")
    var aOurBlog = document.getElementById("aOurBlog")
    var aContact = document.getElementById("aContact")

    decorationAllNone()
    decorationAddUnderline(aIntro)
    if (posY >= limit_AboutMe) {
        decorationAddUnderline(aAboutMe)
        if (posY >= limit_Service) {
            decorationAddUnderline(aService)
            if (posY >= limit_Portefolio) {
                decorationAddUnderline(aPortefolio)
                if (posY >= limit_Testimonial) {
                    decorationAddUnderline(aTestimonial)
                    if (posY >= limit_OurBlog) {
                        decorationAddUnderline(aOurBlog)
                        if (posY >= limit_ContactForm) {
                            decorationAddUnderline(aContact)
                        }
                    }
                }
            }
        }
    }

}

function decorationAllNone() {
    var aIntro = document.getElementById("aIntro")
    var aAboutMe = document.getElementById("aAboutMe")
    var aService = document.getElementById("aService")
    var aPortefolio = document.getElementById("aPortefolio")
    var aTestimonial = document.getElementById("aTestimonial")
    var aOurBlog = document.getElementById("aOurBlog")
    var aContact = document.getElementById("aContact")

    
    aIntro.style.textDecoration = 'none'
    aAboutMe.style.textDecoration = 'none'
    aService.style.textDecoration = 'none'
    aPortefolio.style.textDecoration = 'none'
    aTestimonial.style.textDecoration = 'none'
    aOurBlog.style.textDecoration = 'none'
    aContact.style.textDecoration = 'none'

}

function decorationAddUnderline(e) {
    decorationAllNone()
    e.style.textDecoration = 'underline'
}

function burgerClick() {
    var NavMenu = document.getElementById('NavMenu')
    // if (NavMenu.classList.contains('Invisible')) {
    //     NavMenu.classList.remove('Invisible')
    //     NavMenu.classList.add('Visible')
    // }
    // else {
    //     NavMenu.classList.add('Invisible')
    //     NavMenu.classList.remove('Visible')
    // }

    if (NavMenu.classList.contains('DispNone')) {
        NavMenu.classList.remove('DispNone')
        
    }
    else {
        NavMenu.classList.add('DispNone')
        // NavMenu.classList.remove('Visible')
    }
    //monmenu.style.visibility = (monmenu.style.visibility =="hidden") ? "initial" : "hidden"
}

function menuStick() {
    var posY = window.scrollY;
    var limit = window.innerHeight;
    var headerList = document.getElementsByTagName('header')
    var header = headerList[0]
    var NavMenu = document.getElementById('NavMenu')

    if(posY >= limit) {
        header.classList.add("PosFixed")
        header.classList.remove("PosAbsolute")
        header.style.color='black'
        header.style.backgroundColor='white'
    }
    else {
        header.classList.remove("PosFixed")
        header.classList.add("PosAbsolute")
        header.style.color='white'
        header.style.backgroundColor='transparent'
    }
}