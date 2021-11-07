import { EditorView } from '@codemirror/view';
import { Extension } from '@codemirror/state';
import { HighlightStyle, tags as t } from '@codemirror/highlight';

// Using https://github.com/one-dark/vscode-one-dark-theme/ as reference for the colors

const chalky = '#e5c07b',
  coral = '#e06c75',
  cyan = '#56b6c2',
  ivory = '#abb2bf',
  stone = '#7d8799', // Brightened compared to original to increase contrast
  malibu = '#61afef',
  sage = '#98c379',
  whiskey = '#d19a66',
  violet = '#c678dd',
  invalid = '#ffffff',
  darkBackground = '#21252b',
  highlightBackground = '#2c313a',
  background = '#292d3e',
  tooltipBackground = '#353a42',
  selection = '#3E4451',
  cursor = '#ffcc00';

/// The editor theme styles for One Dark.
export const materialPalenightTheme = EditorView.theme(
  {
    // done
    '&': {
      color: '#ffffff',
      backgroundColor: background
    },

    // done
    '.cm-content': {
      caretColor: cursor
    },

    // done
    '&.cm-focused .cm-cursor': {
      borderLeftColor: cursor
    },
    '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
      { backgroundColor: selection },

    '.cm-panels': { backgroundColor: darkBackground, color: '#ffffff' },
    '.cm-panels.cm-panels-top': { borderBottom: '2px solid black' },
    '.cm-panels.cm-panels-bottom': { borderTop: '2px solid black' },

    // done, use onedarktheme
    '.cm-searchMatch': {
      backgroundColor: '#72a1ff59',
      outline: '1px solid #457dff'
    },
    '.cm-searchMatch.cm-searchMatch-selected': {
      backgroundColor: '#6199ff2f'
    },

    '.cm-activeLine': { backgroundColor: highlightBackground },
    '.cm-selectionMatch': { backgroundColor: '#aafe661a' },

    '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
      backgroundColor: '#bad0f847',
      outline: '1px solid #515a6b'
    },

    // done
    '.cm-gutters': {
      background: '#292d3e',
      color: '#676e95',
      border: 'none'
    },

    '.cm-activeLineGutter': {
      backgroundColor: highlightBackground
    },

    '.cm-foldPlaceholder': {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#ddd'
    },

    '.cm-tooltip': {
      border: 'none',
      backgroundColor: tooltipBackground
    },
    '.cm-tooltip .cm-tooltip-arrow:before': {
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent'
    },
    '.cm-tooltip .cm-tooltip-arrow:after': {
      borderTopColor: tooltipBackground,
      borderBottomColor: tooltipBackground
    },
    '.cm-tooltip-autocomplete': {
      '& > ul > li[aria-selected]': {
        backgroundColor: highlightBackground,
        color: ivory
      }
    }
  },
  { dark: true }
);

/// The highlighting style for code in the One Dark theme.
export const materialPalenightHighlightStyle = HighlightStyle.define([
  { tag: t.keyword, color: '#c792ea' },
  { tag: t.operator, color: '#89ddff' },
  { tag: t.special(t.variableName), color: '#eeffff' },
  { tag: t.typeName, color: '#f07178' },
  { tag: t.atom, color: '#f78c6c' },
  { tag: t.number, color: '#ff5370' },
  { tag: t.definition, color: '#82aaff' },
  { tag: t.string, color: '#c3e88d' },
  { tag: t.special(t.string), color: '#f07178' },
  { tag: t.comment, color: stone },
  { tag: t.variableName, color: '#f07178' },
  { tag: t.tagName, color: '#ff5370' },
  { tag: t.bracket, color: '#a2a1a4' },
  { tag: t.meta, color: '#ffcb6b' },
  { tag: t.attributeName, color: '#c792ea' },
  { tag: t.propertyName, color: '#c792ea' },
  { tag: t.invalid, color: invalid }
]);

/// Extension to enable the One Dark theme (both the editor theme and
/// the highlight style).
export const materialPalenight: Extension = [
  materialPalenightTheme,
  materialPalenightHighlightStyle
];
