<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import Swiper from 'swiper';
  import type { CSSSelector } from 'swiper/types';
  import { NewCoverSongIds, YoutubeUrlSrc } from '@/const/url';

	register();

	let swiperEl: HTMLElement|CSSSelector;
	let swiperObj:Swiper|undefined;

	onMount(() => {
		swiperObj = new Swiper(swiperEl, {
			navigation: true,
			pagination: true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: true,
			},
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
		});
	});

	let VideoIds:string[] = Object.values(NewCoverSongIds);

</script>

<div>
	<swiper-container class="swiper" 
		navigation="true" loop="true" 
		effect="cards" 
		grab-cursor="true" 
		bind:this={swiperEl}>
		{#each VideoIds as item}
			<swiper-slide class="swiper-slide">
				<a href={YoutubeUrlSrc.Movie.url + item} target="blank">
					<img src={YoutubeUrlSrc.Thumbnail.PreUrl + item + YoutubeUrlSrc.Thumbnail.PostSize.sddefault} alt="An alt text" />
				</a>
			</swiper-slide>
		{/each}
	</swiper-container>
</div>

<style>
  .swiper {
		color: black;
	}
	.swiper-slide::before {
		content: '';
		position: absolute;
		top: 0;
		left: -75%;
		width: 50%;
		height: 100%;
		background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
		transform: skewX(-25deg);
	}
	.swiper-slide:hover::before {
		animation: shine 0.7s;
	}

	@keyframes shine {
		100% {
			left: 125%;
		}
	}
	.swiper-slide {
		position: relative;
		margin: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 18px;
		font-size: 22px;
		font-weight: bold;
		color: #fff;
	}
	
	.swiper-slide:nth-child(odd) {
		background-color: #2d87f7;
	}

	.swiper-slide:nth-child(even) {
		background-color: #ff82c9;
	}
	
	::part(button-prev)  {
		color: black;
	}
	::part(button-next) {
		color: black;
	}
</style>
