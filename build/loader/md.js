const hljs = require('highlight.js');
const { marked } = require('marked');

module.exports = function transformMd(code, path) {
  console.log(path);
  const tokens = marked.lexer(code);
  console.log(tokens);
  const titleIndex = tokens.findIndex((token)=>token.type === 'heading' && token.depth === 1);
  let jsCode = '';
  if (titleIndex > -1){
    const title = JSON.stringify(tokens[titleIndex].text);
    const titleTemplate = `<h1 v-html='${title}'></h1>`;
    tokens.splice(titleIndex, 1, {
        type: 'html',
        pre: false,
        text: titleTemplate
      });
  }

  const codeIndex = tokens.findIndex((token)=>token.type === 'code' && token.lang === 'js');

  if (codeIndex > -1){
    jsCode = JSON.stringify(tokens[codeIndex].text);
    console.log(hljs);
  }

  const docMainTemplate = marked.parser(tokens);

  const docTemplate = `
    <template>
    <div class="doc">
       ${docMainTemplate}
       <div id='btc'></div>
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
