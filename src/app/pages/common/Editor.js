'use client';
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import { EditorContent, EditorProvider } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import ReactMarkdown from 'react-markdown';
import TurndownService from 'turndown';
import { MenuBar } from './Menubar';
import { useEffect, useState } from 'react';

const turndownService = new TurndownService();
const convertHtmlToMarkdown = (html) => {
  return turndownService.turndown(html);
};

const MarkdownPreview = ({ content }) => {
  const markdownContent = convertHtmlToMarkdown(content);

  return (
    <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50 prose">
      <h3 className="text-lg font-semibold mb-2">Markdown Preview</h3>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
];

const TiptapEditor = ({ onChange, value }) => {
  const [editorContent, setEditorContent] = useState(value || '');

  useEffect(() => {
    setEditorContent(value || ''); 
  }, [value]);

  return (
    <div className="w-full">
    <EditorProvider
      slotBefore={<MenuBar />}
      extensions={[StarterKit]}
      content={editorContent}
      onUpdate={({ editor }) => {
        const html = editor.getHTML();
        setEditorContent(html);
        onChange(html); 
      }}
      immediatelyRender={false}
    >
     
    </EditorProvider>
  </div>
);
};


export default TiptapEditor;