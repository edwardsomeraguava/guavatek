<template>
  <div class="index">
    <div class="banner">
    	<div class="foot">
    		<center>
    			<ul>
	    			<li><img class="img-fluid" src="https://www.graphicsprings.com/filestorage/stencils/fe3f592efea143715d74b036095ea2bb.svg" alt=""></li>
	    			<li><img class="img-fluid" src="https://www.graphicsprings.com/filestorage/stencils/1bc2633c53bb7418ac9d66b1d9f0d684.svg" alt=""></li>
	    			<li><img class="img-fluid" src="https://www.graphicsprings.com/filestorage/stencils/fe3f592efea143715d74b036095ea2bb.svg" alt=""></li>
	    			<li><img class="img-fluid" src="https://www.graphicsprings.com/filestorage/stencils/1bc2633c53bb7418ac9d66b1d9f0d684.svg" alt=""></li>
	    			<li><img class="img-fluid" src="https://www.graphicsprings.com/filestorage/stencils/fe3f592efea143715d74b036095ea2bb.svg" alt=""></li>
	    		</ul>
    		</center>
    	</div>	
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.index {
		.banner { height:500px; background: url('../assets/banners/banner1.jpg') no-repeat center center fixed;  -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; position:relative;
			.foot {
				height:100px; background: rgba(125, 127, 133, 0.55); position:absolute; bottom:0px;width: 100%;
				li {list-style-type: none; display: inline-block; margin-left:120px;
					img { max-width:200px; max-height:200px; width:100px;height:100px;}
				}
			}
		}
	}
</style>
