<template>
  <div class="article flex mt-6 rout">
    <div class="article-body flex-1 mr-6">
      <div class="article-contents py-6 px-8">
        <div class="article-title">
          {{ news.title }}
        </div>
        <div class="article-info mb-4">
          <Tags class="space" :items="news.tag_names">
            <li>
              <span class="article-pub_time">{{ news.pub_time | displayTime }}</span>
            </li>
            <li>
              <span class="article-category_name">{{ news.category_name }}</span>
            </li>
          </Tags>
        </div>
        <div
          v-if="news.instruction"
          class="mb-4 py-3 rounded-md px-6 text-base bg-gray-200 text-gray-700"
        >
          {{ news.instruction }}
        </div>
        <div v-html="news.content" class="article-content text-sm"></div>
      </div>
    </div>
    <div class="tabs w-1/4 shrink-0 article-recommend">
      <div class="bg-white">推荐内容</div>
    </div>
  </div>
</template>
<script>
import Tags from '@/components/partials/Tags.vue';
export default {
  components: {
    Tags,
  },
  head() {
    return {
      title: this.news.title + '| 渣男厨房',

      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.32.0/codemirror.min.js' },
        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.32.0/mode/javascript/javascript.min.js',
        },
      ],
      link: [
        {
          href: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.32.0/codemirror.min.css',
          rel: 'stylesheet',
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      try {
        console.log('--CodeMirror--');
        //editor.setValue(`const a=0`);
        let languageJavascripts = document.body.querySelectorAll('.language-javascript');
        for (let i = 0; i < languageJavascripts.length; i++) {
          //editor.setValue(`const a=0`);
          let $code = languageJavascripts[i];
          let codeValue = $code.querySelector('code').innerText;
          let editor = CodeMirror($code, {
            mode: 'javascript', //设置编译器编程语言关联内容，需要引入mode/javascript/javascript.js
            lineNumbers: true, //显示行号
            smartIndent: true, //自动缩进是否开启
            indentUnit: 4, //缩进单位
            value: codeValue,
            readOnly: true,
            //height: '500px',
            scrollbarStyle: null,
            //lineWrapping: true,
            viewportMargin: 500,
            // viewportMargin:'infinity'
            // theme: 'monokai', //设置主题
            // styleActiveLine: true, //设置光标所在行高亮，需要引入addon/selection/active-line.js
            //keyMap: 'sublime', // 快捷键，default使用默认快捷键，除此之外包括emacs，sublime，vim快捷键，使用需引入工具,keymap/sublime.js
            // extraKeys: { 'Ctrl-Q': 'autocomplete' }, //设置快捷键
          });
        }
        //$code.remove();
        // }
      } catch (e) {
        console.log(e);
      }
    });
  },
  async asyncData({ app, params }) {
    let { id } = params;
    let newApi = app.$api.getApi('news');

    let news = await newApi.getById(id);

    console.log(news);
    return { news: news };
  },
};
</script>
<style lang="scss">
@import '@/assets/css/pages/article.scss';

.CodeMirror {
  overflow: visible;
  height: auto !important;
  margin-bottom: 50px;
  .CodeMirror-scroll {
    overflow: visible !important;
    //padding-bottom:0px;
  }
}
</style>
