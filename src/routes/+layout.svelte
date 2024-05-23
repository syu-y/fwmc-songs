<script lang="ts">
  import "@/app.css";
  import Header from '@/components/layout/Header.svelte';
  import Footer from '@/components/layout/Footer.svelte';
  import Main from '@/components/layout/Main.svelte';
</script>

<div class="flex flex-col h-screen text-black font-NikkyouSans theme">
  <div class="sticky top-0 z-50 theme-fww">
    <Header />
  </div>

  <div class="flex-grow p-3 font-semibold ">
    <Main>
      <slot />
    </Main>
  </div>
  
  <div class="sticky top-0 z-50 theme-mcc">
    <Footer />
  </div>
</div>
