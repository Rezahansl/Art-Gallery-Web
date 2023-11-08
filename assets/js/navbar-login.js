class Navbar extends HTMLElement {
    constructor() {
      super(); // harus selalu pake ini
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
          .navbar {
            transition: all 0.5s;
            border-bottom: 1px solid #ABABAB;
          }
          
          nav span {
              font-family: 'Charis SIL', serif;
          }
          
          .navbar .navbar-nav .nav-item {
              position: relative;
          }
          
          .navbar .navbar-nav .nav-item::after {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              margin: 0 auto;
              content: "";
              background-color: black;
              width: 0%;
              height: 4px;
              transition: all 0.3s;
          }
          
          .navbar .navbar-nav .nav-item:hover::after {
              width: 100%;
          }  
          
          .mask-custom {
              backdrop-filter: blur(5px);
              background-color: rgba(255, 255, 255, .15);
          }
          
          .maps a {
              color: black;
          }
          
          .maps a:hover {
              color: #1023d7;
          }
        </style>
        

        <header>
          <nav class="navbar bg-white fixed-top navbar-expand-lg p-md-3 mask-custom">
            <div class="container">
              <a class="navbar-brand text-dark fw-semibold" href="home.html"><span class="fs-4">Arts</span>.iD</a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="input-group row-gap-2 collapse navbar-collapse" id="navbarNav">
                <div class="mx-auto"></div>
                <input type="search" aria-label="Search" class="form-control fw-semibold opacity-75 me-3" placeholder="Search here" aria-describedby="addon-wrapping">
                <i class="bi bi-search me-3 fs-5"></i>
                <ul class="navbar-nav hstack gap-4">
                  <li class="nav-item">
                    <a class="nav-link text-dark fw-semibold" href="sell.html">Sell</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-dark fw-semibold" href="artist2.html">Artists</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-dark fw-semibold" href="artwork2.html">Artworks</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-dark fw-semibold" href="partnership2.html">Partnership</a>
                  </li>
                  <div class="dropdown text-end ps-3">
                    <a href="#" class="d-block link-light text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="assets/img/profile.png" alt="user" width="32" height="32" class="rounded-circle">
                    </a>
                    <ul class="dropdown-menu text-small" 
                        style="position: absolute; inset: 0px 0px auto auto; 
                              margin: 0px; 
                              transform: translate3d(10px, 50px, 0px);" 
                        data-popper-placement="bottom-end">
                      <li><a class="dropdown-item" href="my-collection.html">My Collection</a></li>
                      <li><a class="dropdown-item" href="settings.html">Settings</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="index.html">Sign out</a></li>
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      `;
    }
  }
  
  customElements.define('navbar-login', Navbar);