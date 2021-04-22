<template>
    <div>
        <menu-bar class="editor__header" :editor="editor" />
        <editor-content :editor="editor" />
    </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2';
import { defaultExtensions } from '@tiptap/starter-kit';
import MenuBar from './MenuBar.vue';

export default {
    components: {
        EditorContent,
        MenuBar
    },

    data() {
        return {
            editor: null,
        }
    },

    mounted() {
        this.editor = new Editor({
            content: null,
            extensions: defaultExtensions(),
        })
    },

    beforeDestroy() {
        this.editor.destroy()
    },
}
</script>
