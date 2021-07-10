export const allowedTags = {
  a: ['class', 'href', 'id', 'style', 'target'],
  address: ['class', 'id', 'style'],
  b: ['class', 'id', 'style'],
  blockquote: ['class', 'id', 'style'],
  br: ['class', 'id', 'style'],
  caption: ['class', 'id', 'style'],
  cite: ['class', 'id', 'style'],
  code: ['class', 'id', 'style'],
  col: [
    'align',
    'bgcolor',
    'char',
    'charoff',
    'class',
    'id',
    'style',
    'valign',
    'width',
  ],
  colgroup: [
    'align',
    'bgcolor',
    'char',
    'charoff',
    'class',
    'id',
    'style',
    'valign',
    'width',
  ],
  center: ['class', 'id', 'style'],
  dd: ['class', 'id', 'style'],
  div: ['align', 'class', 'dir', 'id', 'style'],
  dt: ['class', 'id', 'style'],
  em: ['class', 'id', 'style'],
  font: ['class', 'color', 'face', 'id', 'size', 'style'],
  h1: ['align', 'class', 'dir', 'id', 'style'],
  h2: ['align', 'class', 'dir', 'id', 'style'],
  h3: ['align', 'class', 'dir', 'id', 'style'],
  h4: ['align', 'class', 'dir', 'id', 'style'],
  h5: ['align', 'class', 'dir', 'id', 'style'],
  h6: ['align', 'class', 'dir', 'id', 'style'],
  hr: ['align', 'size', 'width'],
  i: ['class', 'id', 'style'],
  img: [
    'align',
    'alt',
    'border',
    'class',
    'height',
    'hspace',
    'id',
    'src',
    'style',
    'usemap',
    'vspace',
    'width',
  ],
  label: ['class', 'id', 'style'],
  legend: ['class', 'id', 'style'],
  li: ['class', 'dir', 'id', 'style', 'type'],
  ol: ['class', 'dir', 'id', 'style', 'type', 'start', 'reversed'],
  p: ['align', 'class', 'dir', 'id', 'style'],
  pre: ['class', 'id', 'style'],
  span: ['class', 'id', 'style'],
  strong: ['class', 'id', 'style'],
  style: [],
  sub: ['class', 'id', 'style'],
  sup: ['class', 'id', 'style'],
  table: [
    'align',
    'bgcolor',
    'border',
    'cellpadding',
    'cellspacing',
    'class',
    'dir',
    'frame',
    'id',
    'rules',
    'style',
    'width',
  ],
  tbody: ['class', 'id', 'style'],
  td: [
    'abbr',
    'align',
    'bgcolor',
    'class',
    'colspan',
    'dir',
    'height',
    'id',
    'lang',
    'rowspan',
    'scope',
    'style',
    'valign',
    'width',
  ],
  tfoot: [
    'align',
    'bgcolor',
    'char',
    'charoff',
    'class',
    'id',
    'style',
    'valign',
  ],
  th: [
    'abbr',
    'align',
    'bgcolor',
    'class',
    'colspan',
    'dir',
    'height',
    'id',
    'lang',
    'rowspan',
    'scope',
    'style',
    'valign',
    'width',
  ],
  thead: [
    'align',
    'bgcolol',
    'char',
    'charoff',
    'class',
    'id',
    'style',
    'valign',
  ],
  tr: [
    'align',
    'bgcolor',
    'char',
    'charoff',
    'class',
    'dir',
    'id',
    'style',
    'valign',
  ],
  u: ['class', 'id', 'style'],
  ul: ['class', 'dir', 'id', 'style'],
} as { [k: string]: string[] };

export const removeWithContents = [
  'script',
  'iframe',
  'textarea',
  'title',
  'noscript',
  'noembed',
  'svg',
];

export const allowedCssProperties = [
  'azimuth',
  'background',
  'background-blend-mode',
  'background-clip',
  'background-color',
  'background-image',
  'background-origin',
  'background-position',
  'background-position-x',
  'background-position-y',
  'background-repeat',
  'background-repeat-x',
  'background-repeat-y',
  'background-size',
  'border',
  'border-bottom',
  'border-bottom-color',
  'border-bottom-left-radius',
  'border-bottom-right-radius',
  'border-bottom-style',
  'border-bottom-width',
  'border-collapse',
  'border-color',
  'border-left',
  'border-left-color',
  'border-left-style',
  'border-left-width',
  'border-radius',
  'border-right',
  'border-right-color',
  'border-right-style',
  'border-right-width',
  'border-spacing',
  'border-style',
  'border-top',
  'border-top-color',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-top-style',
  'border-top-width',
  'border-width',
  'box-sizing',
  'break-after',
  'break-before',
  'break-inside',
  'caption-side',
  'clear',
  'color',
  'column-count',
  'column-fill',
  'column-gap',
  'column-rule',
  'column-rule-color',
  'column-rule-style',
  'column-rule-width',
  'column-span',
  'column-width',
  'columns',
  'direction',
  'display',
  'elevation',
  'empty-cells',
  'float',
  'font',
  'font-family',
  'font-feature-settings',
  'font-kerning',
  'font-size',
  'font-size-adjust',
  'font-stretch',
  'font-style',
  'font-synthesis',
  'font-variant',
  'font-variant-alternates',
  'font-variant-caps',
  'font-variant-east-asian',
  'font-variant-ligatures',
  'font-variant-numeric',
  'font-weight',
  'height',
  'image-orientation',
  'image-resolution',
  'ime-mode',
  'isolation',
  'layout-flow',
  'layout-grid',
  'layout-grid-char',
  'layout-grid-char-spacing',
  'layout-grid-line',
  'layout-grid-mode',
  'layout-grid-type',
  'letter-spacing',
  'line-break',
  'line-height',
  'list-style',
  'list-style-position',
  'list-style-type',
  'margin',
  'margin-bottom',
  'margin-left',
  'margin-right',
  'margin-top',
  'marker-offset',
  'max-height',
  'max-width',
  'min-height',
  'min-width',
  'mix-blend-mode',
  'object-fit',
  'object-position',
  'opacity',
  'outline',
  'outline-color',
  'outline-style',
  'outline-width',
  'overflow',
  'overflow-x',
  'overflow-y',
  'padding',
  'padding-bottom',
  'padding-left',
  'padding-right',
  'padding-top',
  'page-break-after',
  'page-break-before',
  'page-break-inside',
  'pause',
  'pause-after',
  'pause-before',
  'pitch',
  'pitch-range',
  'quotes',
  'richness',
  'speak',
  'speak-header',
  'speak-numeral',
  'speak-punctuation',
  'speech-rate',
  'stress',
  'table-layout',
  'text-align',
  'text-align-last',
  'text-autospace',
  'text-combine-upright',
  'text-decoration',
  'text-decoration-color',
  'text-decoration-line',
  'text-decoration-skip',
  'text-decoration-style',
  'text-emphasis',
  'text-emphasis-color',
  'text-emphasis-style',
  'text-indent',
  'text-justify',
  'text-kashida-space',
  'text-orientation',
  'text-overflow',
  'text-transform',
  'text-underline-position',
  'unicode-bidi',
  'vertical-align',
  'voice-family',
  'white-space',
  'width',
  'word-break',
  'word-spacing',
  'word-wrap',
  'writing-mode',
  'zoom',
];
