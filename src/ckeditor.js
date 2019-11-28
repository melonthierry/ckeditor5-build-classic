/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';

import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import Link from '@ckeditor/ckeditor5-link/src/link';
import Emoji from '@wwalc/ckeditor5-emoji/src/emoji';
import Image from '@ckeditor/ckeditor5-image/src/image';
import InsertImage from './insertImage';


export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	Autoformat,
	Paragraph,
	Bold,
	Italic,
	Underline,
	FontFamily,
	FontSize,
	Link,
	Image,
	InsertImage,
	Emoji
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'bold',
			'italic',
			'underline',
			'|',
			'FontFamily',
			'FontSize',
			'|',
			'link',
			'insertImage',
			'emoji'
		]
	},
	emoji: [
		{ name: 'smile', text: '🙂' },
		{ name: 'sad', text: '🙁' },
		{ name: 'wink', text: '😉' },
		{ name: 'happy', text: '😄' },
		{ name: 'confusion', text: '😕' },
		{ name: 'tongue', text: '😜' },
		{ name: 'flushed', text: '😳' },
		{ name: 'neutral', text: '😐' },
		{ name: 'angry', text: '😠' },
		{ name: 'pouting', text: '😡' },
		{ name: 'holy', text: '😇' },
		{ name: 'nerd', text: '🤓' },
		{ name: 'evil', text: '😈' },
		{ name: 'cry', text: '😭' },
		{ name: 'idea', text: '💡' },
		{ name: 'down', text: '👎' },
		{ name: 'up', text: '👍' },
		{ name: 'heart', text: '❤️' },
		{ name: 'broken', text: '💔' },
		{ name: 'kiss', text: '😘' },
		{ name: 'letter', text: '📧' },
	],
	fontSize: {
		options: [8,9,10,11,12,14,16,18,20,22,24,26,28,36,48,72]
	},
	uiColor: '#F2F2F2',
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
