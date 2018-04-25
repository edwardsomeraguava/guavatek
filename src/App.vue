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
            <router-link class="nav-item btn btn-danger btn-quote" to='/'>REQUEST QUOTE <icon name="envelope"></icon></router-link>
          </div>
        </div>
      </div>
    </nav>
    <!-- end header -->
    
    <!-- content -->
    <router-view/> 
    <!-- end content -->

    <!-- footer -->
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
        .fa-icon {position: relative;top: 2px;}
      }
    }
  }

</style>
