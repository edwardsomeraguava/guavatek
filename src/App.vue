<template>
  <div id="app">
    <!-- header -->
    <div class="container">
      <img class="img-fluid logo" src="./assets/guavatek-logo.png" alt="guavatek">  
    </div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link active" to='/'>Home <span class="sr-only">(current)</span></router-link>
            <router-link class="nav-item nav-link" to='/about'>About Us</router-link>
            <router-link class="nav-item nav-link" to='/contact'>Contact Us</router-link>
          </div>
          <div class="navbar-nav ml-auto">
            <router-link class="nav-item btn btn-danger btn-quote" to='/'>REQUEST QUOTE <icon name="caret-right"></icon></router-link>
          </div>
        </div>
      </div>
    </nav>
    <!-- end header -->
    
    <!-- content -->
    <router-view/> 
    <!-- end content -->

    <!-- footer -->
    <footer>
      <div class="container"> 
        <div class="row">
          <div class="col-md-6">  
            <img class="img-fluid logo" src="./assets/guavatek-logo.png" alt="guavatek">  
          </div>
        </div>
        <div class="row"> 
          <div class="col-md-12">  
            <ul class="foot_nav"> 
              <li><a href="/">HOME</a></li>
              <li><a href="/about">ABOUT US</a></li>
              <li><a href="/contact">CONTACT US</a></li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">  
            <p class="">© 2018 GuavaTek. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    <!-- end footer -->
    
  </div>
</template>

<script>
import Index from './components/Index.vue'
import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'app',
  components: {
    Index, Icon
  }
}
</script>

<style lang="scss">
  #app {
    >.container {padding-top:10px;padding-bottom:10px;}
    .logo { max-width:250px; }
    .navbar-light { background:#06641A; padding: 0rem 1rem;
      .nav-link { color:#fff; margin-right:2rem; margin-top:0.5rem; margin-bottom:0.5rem; transition: all .2s linear;}
      .nav-link.active, .nav-link:hover { border-bottom: 2px solid #fff; }
      .btn-quote {border-radius:0px;
        .fa-icon {position: relative;top: 2px;font-size:20px;}
      }
    }
    footer{ min-height: 165px;color:#fff;background-color: #1D1D1D;
      >.container {padding-top:20px;}
      li { list-style-type: none; display: inline-block; }
      a, a:hover { text-decoration: none;}
      ul{padding-left:0px;}
      .foot_nav { margin-top: 15px;
        li { margin-right: 20px; 
          a { font-size: 1.325em; color: #fff; transition: all .2s linear; }
          a:hover, a:focus, a:active { color: #EF6B6B; }
        }
      }

    }
  }

</style>
