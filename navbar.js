export const generateNav = () => {
    ;
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
    logo.src = "/images/logo.svg";
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
}

