<script lang="ts">
	import playImg from '@/asset/play.png'
	export let url = '/';
</script>

<span>
	<a href={url} target="blank">
    <img class="play-image" src={playImg} alt="An alt text"  />
  </a>
  
</span>

<style>
	img.play-image {
		/* width: var(--size); */
		width: 20px;
		height: auto;
	}
</style>
