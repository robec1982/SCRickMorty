<h2>You can find up to {{count}} characters here!!!</h2>
{{#each results}}
  <section class="rickmortymodule-info-card">
      <span class="rickmortymodule-info-card-content">
        <div><input type="checkbox" id="{{id}}" value="{{id}}">{{name}}</div>
        <div><img src="{{image}}"></div>
      </span>
  </section>
{{/each}}

<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->