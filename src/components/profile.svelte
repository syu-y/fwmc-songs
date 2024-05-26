<script lang="ts">
  import fwmcSilhouette from '@/asset/fwmc_silhouette.png';
  import xLogo from '@/asset/logo-black.png';
  import youtubeLogo from '@/asset/youtube_social_squircle_red.png';
  import { OtherUrlSrc, YoutubeUrlSrc } from '@/const/url';
</script>

<div class="profile">
  <img
    class="fwmc-silhouette profileBody"
    src={fwmcSilhouette}
    alt="An alt text"
    decoding="async"
  />
  <div class="profileDetail">
    <div class="profileDetailHeader">
      <h3 class="name">
        <p>
          <span class="px-1 text-fww">フワワ・アビスガード</span>
          / <span class="px-1 text-mcc">モココ・アビスガード</span>
        </p>
        <p>
          <span class="px-1 name-en text-fww">Fuwawa Abyssgard</span>
          / <span class="px-1 name-en text-mcc">Mococo Abyssgard</span>
        </p>
      </h3>
      <ul class="sns">
        <li>
          <a
            href={OtherUrlSrc.x.account}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <img src={xLogo} alt="Twitter" decoding="async" />
          </a>
        </li>
        <li>
          <a
            href={YoutubeUrlSrc.Channel}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <img src={youtubeLogo} alt="YouTube" decoding="async" />
          </a>
        </li>
      </ul>
    </div>
    <div class="profileDetailTags">
      <dl>
        <dt>TwitterTags</dt>
        <dd class="tags">
          <a
            href={OtherUrlSrc.x.tag.streaming}
            target="_blank"
            rel="nofollow noopener noreferrer"
            class="tag-stream">Stream</a
          >
          <a
            href={OtherUrlSrc.x.tag.fanArt}
            target="_blank"
            rel="nofollow noopener noreferrer"
            class="tag-fa">FA</a
          >
          <a
            href={OtherUrlSrc.x.tag.clip}
            target="_blank"
            rel="nofollow noopener noreferrer"
            class="tag-clip">Clip</a
          >
          <a
            href={OtherUrlSrc.x.tag.music}
            target="_blank"
            rel="nofollow noopener noreferrer"
            class="tag-music">Music</a
          >
        </dd>
      </dl>
    </div>
  </div>
</div>

<style>
  .profile {
    margin-top: 120px;
    background-color: #fdfcf5;
    border: 4px solid black;
    position: relative;
  }

  .profileBody {
    position: absolute;
    bottom: 0;
    height: 300px;
    left: 25px;
  }

  .profileDetail {
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 225px;
  }

  .profileDetailHeader {
    display: flex;
    padding-left: 30px;
  }

  .profileDetailHeader .name {
    font-size: 25px;
    display: flex;
    flex-direction: column;
  }

  .profileDetailHeader .sns {
    margin-left: 30px;
    display: flex;
  }

  .profileDetailHeader .sns img {
    margin-left: 20px;
    height: 41px;
  }

  .profileDetailTags {
    margin-top: 50px;
  }

  .profileDetailTags dl {
    display: flex;
  }

  .profileDetailTags dd.tags {
    padding-left: 20px;
    display: flex;
  }
  .profileDetailTags dd a {
    padding: 5px 8px;
    border: 1px solid black;
    display: flex;
    width: 120px;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .profileDetailTags dd a + a {
    margin-left: 15px;
  }

  .profileDetailTags dd a:hover {
    color: #fdfcf5;
  }

  .profileDetailTags dd a:hover::after {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  .profileDetailTags dd a::after {
    color: black;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% + 10px));
    transition: all 0.3s;
    white-space: nowrap;
  }

  .profileDetailTags dd .tag-stream::after {
    content: '#FUWAMOCO';
  }
  .profileDetailTags dd .tag-fa::after {
    content: '#FWMCpix';
  }
  .profileDetailTags dd .tag-clip::after {
    content: '#lilFWMC';
  }
  .profileDetailTags dd .tag-music::after {
    content: '#FWMCbeats';
  }
</style>
