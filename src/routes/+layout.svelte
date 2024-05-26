<script lang="ts">
  import "@/app.css";
  import Header from '@/components/layout/Header.svelte';
  import Footer from '@/components/layout/Footer.svelte';
  import Main from '@/components/layout/Main.svelte';
</script>

<div class="flex flex-col h-screen text-black">
  <div class="sticky top-0 z-50 font-NikkyouSans theme-fww content">
    <Header />
  </div>

  <div class="flex-grow p-3 font-semibold content">
    <Main>
      <slot />
    </Main>
  </div>
  
  <div class="sticky top-0 z-50 font-NikkyouSans content theme-mcc">
    <Footer />
  </div>
</div>

<style>
@media (width < 600px) {
    .content {
        padding-top: 20px;
        padding-bottom: 35px;
    }
  }
  .content {
      /* padding-top: 30px;
      padding-bottom: 45px; */
      position: relative;
  }
</style>
