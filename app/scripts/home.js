export function createHome() {
    const contentDiv = `<section class="box_container">
    <h1 id="mainTitle">Pokémon Team Builder</h1>
    <div>
      <h2>Build your dream Pokémon team!</h2>
      <p>
        Pokémon Team Builder is designed to help you design your dream team.
      </p>
      <p>
        Create and design custom Pokémon teams for better battle
        organizations
      </p>
      <h5 id="disclosure">
        Disclosure: This app is created as a team learning project and is
        not intended for marketing purposes or external use.
        <p>All rights belong to GameFreak and Nintendo.</p>
      </h5>
    </div>
</section>

<!-- This adds the music and controls -->
<figure id="audio">
  <figcaption>Pokémon Theme Song<sup>(TM)</sup>:</figcaption>
  <!-- autoplay  -->
  <audio  
  controls 
  src="./app/Audio/Pokémon_Theme_Song.mp4">
    Your browser does not support the
    <code>audio</code> element.
  </audio>
</figure>`

    return contentDiv;
}