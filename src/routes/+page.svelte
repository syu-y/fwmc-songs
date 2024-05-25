<script lang="ts">
  import PageTitle from "@/components/layout/PageTitle.svelte";
  import MovieSlider from "@/components/youtube/MovieSlider.svelte";
  import type { PageData } from './$types';
  import SongsList from "@/components/youtube/SongsList.svelte";
  export let data: PageData;
  const songs = data.songs;
  songs.sort((a, b) => a.id - b.id);

</script>

<div>
  <div class="py-2">
    <div class="text-fww">
      <PageTitle>New MVs</PageTitle>
    </div>
    <MovieSlider></MovieSlider>
  </div>
  <div class="w-full py-2">
    <div class="text-mcc">
      <PageTitle>List</PageTitle>
    </div>
    <SongsList songs={songs}></SongsList>
  </div>
</div>
