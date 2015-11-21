          <h1>{{title}}</h1> 
          {{#each languages}}
          <ul>
            <li>{{@index}} {{{formatLanguage name}}}</li>
          </ul>
          {{/each}}