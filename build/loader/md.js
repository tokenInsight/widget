const hljs = require('highlight.js');
const { marked } = require('marked');

module.exports = function transformMd(code) {
  const tokens = marked.lexer(code);
  let jsCode = '';
  let jsCodeText = '';
  let htmlCodeText = '';

  const codeIndex = tokens.findIndex(token => token.type === 'code' && token.lang === 'js');

  if (codeIndex > -1) {
    jsCodeText = hljs.highlight(tokens[codeIndex].text, { language: 'js' }).value;
    jsCode = JSON.stringify(tokens[codeIndex].text);
    tokens.splice(codeIndex, 1);
  }

  const htmlIndex = tokens.findIndex(token => token.type === 'code' && token.lang === 'html');

  if (htmlIndex > -1) {
    htmlCodeText = tokens[htmlIndex].text;
    tokens.splice(htmlIndex, 1);
  }

  const docMainTemplate = marked.parser(tokens);

  const docTemplate = `
    <template>
      <div class="doc">
        ${docMainTemplate}
        ${htmlCodeText}
        ${
          jsCodeText && ` <div class='pre-js'>
          <pre>${jsCodeText}</pre>
        </div>`
        }
       
      </div>
    </template>
    <script setup>
    import { onMounted } from 'vue';

onMounted(()=>{
  ${eval(jsCode)}
});
 
</script>
  `;
  return docTemplate;
};
