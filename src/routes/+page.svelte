<script lang="ts">
  import PageTitle from "@/components/layout/PageTitle.svelte";
  import MovieSlider from "@/components/youtube/MovieSlider.svelte";
  import SongsList from "@/components/youtube/SongsList.svelte";
  import type { PageData } from './$types';
  import Profile from "@/components/profile.svelte";
  export let data: PageData;
  const songs = data.songs;
  songs.sort((a, b) => a.id - b.id);

</script>

<div>
  <div class="py-2 inner">
    <Profile></Profile>
  </div>
  <div class="py-2 inner">
    <div class="text-fww">
      <PageTitle>New MVs</PageTitle>
    </div>
    <MovieSlider></MovieSlider>
  </div>
  <div class="py-2 inner">
    <div class="text-mcc">
      <PageTitle>List</PageTitle>
    </div>
    <SongsList songs={songs}></SongsList>
  </div>
</div>

<style>
  img.fwmc-silhouette {
    /* width: var(--size); */
    width: 120px;
    height: auto;
  }
</style>
