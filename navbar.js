export const generateNav = () => {
    
    
    const navbar = document.createElement("div");
    navbar.classList = "navbar";
    root.appendChild(navbar);
    
    const navLinks = document.createElement("div");
    navLinks.classList = "nav-links";
    navbar.appendChild(navLinks);
    
    const userLinks = document.createElement("div");
    userLinks.classList = "user-links";
    navbar.appendChild(userLinks);
    
    const logo = document.createElement("img");
    logo.src = "./images/logo.svg";
    logo.classList = "logo";
    navLinks.appendChild(logo);
    
    const featuresDiv = document.createElement("div");
    featuresDiv.classList = "features-div";
    navLinks.appendChild(featuresDiv);
    
    const features = document.createElement("p");
    features.classList = "features";
    features.textContent = "Features";
    featuresDiv.appendChild(features);
    
    const featuresIcon = document.createElement("img");
    featuresIcon.src = "./images/icon-arrow-down.svg";
    featuresIcon.classList = "menu-icon-down";
    featuresDiv.appendChild(featuresIcon);
    
    const companyDiv = document.createElement("div");
    companyDiv.classList = "company-div";
    navLinks.appendChild(companyDiv);
    
    const company = document.createElement("p");
    company.classList = "company";
    company.textContent = "Company";
    companyDiv.appendChild(company);
    
    const companyIcon = document.createElement("img");
    companyIcon.src = "./images/icon-arrow-down.svg";
    companyIcon.classList = "menu-icon-down";
    companyDiv.appendChild(companyIcon);
    
    const careers = document.createElement("p");
    careers.classList = "careers";
    careers.textContent = "Careers";
    navLinks.appendChild(careers);
    
    const about = document.createElement("p");
    about.classList = "about";
    about.textContent = "About";
    navLinks.appendChild(about);
    
    const login = document.createElement("p");
    login.classList = "login";
    login.textContent = "Login";
    userLinks.appendChild(login);
    
    const register = document.createElement("button");
    register.classList = "register";
    register.textContent = "Register";
    userLinks.appendChild(register);

    const featuresDrop = document.createElement("div");
    featuresDrop.classList = "drop";
    featuresDiv.appendChild(featuresDrop);

    const todo = document.createElement("div");
    todo.classList = "todo";
    featuresDrop.appendChild(todo);

    const todoImg = document.createElement("img");
    todoImg.id = "todo-img";
    todoImg.classList = "drop-img";
    todoImg.src = "./images/icon-todo.svg";
    todo.appendChild(todoImg);

    const todoText = document.createElement("p");
    todoText.classList = "drop-txt";
    todoText.innerText = "Todo List";
    todo.appendChild(todoText);

    const calendar = document.createElement("div");
    calendar.classList = "calendar";
    featuresDrop.appendChild(calendar);

    const calendarImg = document.createElement("img");
    calendarImg.id = "calendar-img";
    calendarImg.classList = "drop-img";
    calendarImg.src = "./images/icon-calendar.svg";
    calendar.appendChild(calendarImg);

    const calendarText = document.createElement("p");
    calendarText.classList = "drop-txt";
    calendarText.innerText = "Calendar";
    calendar.appendChild(calendarText);

    const reminders = document.createElement("div");
    reminders.classList = "reminders";
    featuresDrop.appendChild(reminders);

    const remindersImg = document.createElement("img");
    remindersImg.id = "reminders-img";
    remindersImg.classList = "drop-img";
    remindersImg.src = "./images/icon-reminders.svg";
    reminders.appendChild(remindersImg);

    const remindersTxt = document.createElement("p");
    remindersTxt.classList = "drop-txt";
    remindersTxt.innerText = "Reminders";
    reminders.appendChild(remindersTxt);

    const planning = document.createElement("div");
    planning.classList = "planning";
    featuresDrop.appendChild(planning);

    const planningImg = document.createElement("img");
    planningImg.id = "planning-img";
    planningImg.classList = "drop-img";
    planningImg.src = "./images/icon-planning.svg";
    planning.appendChild(planningImg);

    const planningTxt = document.createElement("p");
    planningTxt.classList = "drop-txt";
    planningTxt.innerText = "Planning";
    planning.appendChild(planningTxt);

    const dropCompany = document.createElement("div");
    dropCompany.classList = "drop-c";
    companyDiv.appendChild(dropCompany);

    const history = document.createElement("p");
    history.classList = "drop-txts";
    history.innerText = "History";
    dropCompany.appendChild(history);

    const team = document.createElement("p");
    team.classList = "drop-txts";
    team.innerText = "Our Team";
    dropCompany.appendChild(team);

    const blog = document.createElement("p");
    blog.classList = "drop-txts";
    blog.innerText = "Blog";
    dropCompany.appendChild(blog);

    featuresDiv.addEventListener("mouseover", () => {
        featuresIcon.src = "/images/icon-arrow-up.svg";
    })

    featuresDiv.addEventListener("mouseout", () => {
        featuresIcon.src = "/images/icon-arrow-down.svg";
    })

    companyDiv.addEventListener("mouseover", () => {
        companyIcon.src = "/images/icon-arrow-up.svg";
    })

    companyDiv.addEventListener("mouseout", () => {
        companyIcon.src = "/images/icon-arrow-down.svg";
    })



    const rNav = document.createElement("div");
    rNav.id = "r-nav";
    root.appendChild(rNav);

    const hamburger = document.createElement("img");
    hamburger.id = "hamburger";
    hamburger.src = "./images/icon-menu.svg";
    navbar.appendChild(hamburger);

    hamburger.addEventListener("click", () => {
        shadow.style.display = "block";
        rNav.style.right = "0";
        hamburger.style.display = "none";

    })

    const shadow = document.createElement("div");
    shadow.id = "shadow";
    root.appendChild(shadow);

    const rNavCont = document.createElement("div");
    rNavCont.id = "r-nav-cont";
    rNav.appendChild(rNavCont);

    const x = document.createElement("img");
    x.id = "x";
    x.src = "./images/icon-close-menu.svg";
    rNav.appendChild(x);

    x.addEventListener("click", ()=> {
        shadow.style.display = "none";
        rNav.style.right = "-300px";
        hamburger.style.display = "block";
    })

    shadow.addEventListener("click", ()=> {
        shadow.style.display = "none";
        rNav.style.right = "-300px";
        hamburger.style.display = "block";
    })

    const rFeaturesDiv = document.createElement("div");
    rFeaturesDiv.classList = "r-features-div";
    rNavCont.appendChild(rFeaturesDiv);
    
    const rFeatures = document.createElement("p");
    rFeatures.classList = "r-features";
    rFeatures.textContent = "Features";
    rFeaturesDiv.appendChild(rFeatures);
    
    const rFeaturesIcon = document.createElement("img");
    rFeaturesIcon.src = "./images/icon-arrow-down.svg";
    rFeaturesIcon.classList = "menu-icon-down";
    rFeaturesDiv.appendChild(rFeaturesIcon);
   
    const rCompanyDiv = document.createElement("div");
    rCompanyDiv.classList = "r-company-div";
    rNavCont.appendChild(rCompanyDiv);
    
    const rCompany = document.createElement("p");
    rCompany.classList = "company";
    rCompany.textContent = "Company";
    rCompanyDiv.appendChild(rCompany);
    
    const rCompanyIcon = document.createElement("img");
    rCompanyIcon.src = "./images/icon-arrow-down.svg";
    rCompanyIcon.classList = "menu-icon-down";
    rCompanyDiv.appendChild(rCompanyIcon);

    const rCareers = document.createElement("p");
    rCareers.classList = "r-careers";
    rCareers.textContent = "Careers";
    rNavCont.appendChild(rCareers);
    
    const rAbout = document.createElement("p");
    rAbout.classList = "r-about";
    rAbout.textContent = "About";
    rNavCont.appendChild(rAbout);

    const rLogin = document.createElement("p");
    rLogin.classList = "login";
    rLogin.textContent = "Login";
    rNavCont.appendChild(rLogin);
    
    const rRegister = document.createElement("button");
    rRegister.classList = "register";
    rRegister.textContent = "Register";
    rNavCont.appendChild(rRegister);

    const rFeatureDown = document.createElement("div");
    rFeatureDown.classList = "r-feature-down";
    rFeaturesDiv.appendChild(rFeatureDown);

    rFeatureDown.appendChild(todo);
    rFeatureDown.appendChild(calendar);
    rFeatureDown.appendChild(reminders);
    rFeatureDown.appendChild(planning);

    const rCompanyDown = document.createElement("div");
    rCompanyDown.classList = "r-company-down";
    rCompanyDiv.appendChild(rCompanyDown);

    rCompanyDown.appendChild(history);
    rCompanyDown.appendChild(team);
    rCompanyDown.appendChild(blog);

    rFeaturesDiv.addEventListener("click", () => {
        if (rFeatureDown.style.display === "none") {
            rFeatureDown.style.display = "block";
            rFeaturesIcon.src = "./images/icon-arrow-up.svg";
        } else {
            rFeatureDown.style.display = "none";
            rFeaturesIcon.src = "./images/icon-arrow-down.svg";
        }
        
    });

    rCompanyDiv.addEventListener("click", () => {
        if (rCompanyDown.style.display === "none") {
            rCompanyDown.style.display = "block";
            rCompanyIcon.src = "./images/icon-arrow-up.svg";
        } else {
            rCompanyDown.style.display = "none";
            rCompanyIcon.src = "./images/icon-arrow-down.svg";
        }
    });

}

