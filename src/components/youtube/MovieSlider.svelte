<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import Swiper from 'swiper';
  import type { CSSSelector } from 'swiper/types';
  import { NewCoverSongIds, YoutubeUrlSrc } from '@/const/youtube';

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
	<h1>New MV</h1>
	<swiper-container class="swiper" loop="true" effect="cards" grab-cursor="true" bind:this={swiperEl}>
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
		width: 50%;
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
	
	.swiper-slide:nth-child(1n) {
		background-color: rgb(206, 17, 17);
	}

	.swiper-slide:nth-child(2n) {
		background-color: rgb(0, 140, 255);
	}

	.swiper-slide:nth-child(3n) {
		background-color: rgb(218, 12, 218);
	}

	.swiper-slide:nth-child(4n) {
		background-color: rgb(10, 184, 111);
	}

	.swiper-slide:nth-child(5n) {
		background-color: rgb(211, 122, 7);
	}

	.swiper-slide:nth-child(6n) {
		background-color: rgb(180, 10, 47);
	}

	.swiper-slide:nth-child(7n) {
		background-color: rgb(0, 68, 255);
	}

</style>
