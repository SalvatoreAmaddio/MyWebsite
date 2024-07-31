class Webpage 
{
    #isOpen = false;

    constructor()
    {
        this.Contact = new Contact();
        this.hamburger = document.getElementById("hamburger");
        this.hamburger.addEventListener("click",(e)=>this.OnHamburgerClicked(e))
        this.navLinks = document.querySelectorAll('nav a:not(#hamburger)');
        document.addEventListener('click', (e) => this.OnDomClicked(e));
        var currentYear = new Date().getFullYear();
        this.footer = document.getElementsByTagName("footer")[0].getElementsByTagName("p");
        this.footer.innerText = "Copyright © " + currentYear + " Salvatore Amaddio Rivolta All rights reserved.";
    }

    OnDomClicked(e) 
    {
        var onHamburgerClicked = hamburger.contains(e.target);
        if (!onHamburgerClicked)
        {
            if (this.#isOpen)
                this.OnHamburgerClicked(e);
        }
    }

    OnHamburgerClicked(e) 
    {
        if (!this.#isOpen)
            this.#isOpen = true;
        else
            this.#isOpen = false;

        this.navLinks.forEach(link => {
            if (this.#isOpen) 
                {
                    link.style.display="block";
                }
                else
                {
                    link.style.display="none";
                }
          });
    }
}

class Index extends Webpage 
{
    constructor()
    {
        super()
    }
}


const index = new Index();
