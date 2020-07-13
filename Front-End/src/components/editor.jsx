import React , { Component } from 'react';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import "./css/editor.css";


class GrapesEditor extends Component {
constructor(props){
super(props);
}

shouldComponentUpdate(){
    return false
}

componentDidMount(){
  const editor = grapesjs.init({
    container: '#gjs',
    fromElement: true,
    height: '300px',
    width: 'auto',
    storageManager: false,

    blockManager: {
      appendTo: '#blocks',
      blocks: [
        {
          id: 'section',
          label: '<b>Section</b>', 
          attributes: { class:'gjs-block-section' },
          content: `<section>
            <h1>This is a simple title</h1>
            <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
          </section>`,
        }, {
          id: 'text',
          label: 'Text',
          content: '<div data-gjs-type="text">Insert your text here</div>',
        }, {
          id: 'image',
          label: 'Image',
          select: true,
          content: { type: 'image' },
          activate: true,
        }
      ]
    },

    layerManager: {
      appendTo: '.layers-container'
    },

    selectorManager: {
      appendTo: '.styles-container'
    },

    selectorManager: {
      appendTo: '.styles-container'
    },

    styleManager: {
      appendTo: '.styles-container',
      sectors: [{
          name: 'Dimension',
          open: false,
          buildProps: ['width', 'min-height', 'padding'],
          properties: [
            {
              
              type: 'integer',
              name: 'The width',
              property: 'width',
              units: ['px', '%'],
              defaults: 'auto',
              min: 0, 
            }
          ]
        },{
          name: 'Extra',
          open: false,
          buildProps: ['background-color', 'box-shadow', 'custom-prop'],
          properties: [
            {
              id: 'custom-prop',
              name: 'Custom Label',
              property: 'font-size',
              type: 'select',
              defaults: '32px',
              options: [
                { value: '12px', name: 'Tiny' },
                { value: '18px', name: 'Medium' },
                { value: '32px', name: 'Big' },
              ],
           }
          ]
        }]
    },
    traitManager: {
      appendTo: '.traits-container',
    },

    storageManager: {
      id: 'gjs-',             // Prefix identifier that will be used inside storing and loading
      type: 'local',          // Type of the storage
      autosave: true,         // Store data automatically
      autoload: true,         // Autoload stored data on init
      stepsBeforeSave: 1,     // If autosave enabled, indicates how many changes are necessary before store method is triggered
      storeComponents: true,  // Enable/Disable storing of components in JSON format
      storeStyles: true,      // Enable/Disable storing of rules in JSON format
      storeHtml: true,        // Enable/Disable storing of components as HTML string
      storeCss: true,         // Enable/Disable storing of rules as CSS string
    },


  panels: {
    
    defaults: [

            {
                  id: 'layers',
                  el: '.panel__right',
                  resizable: {
                    maxDim: 350,
                    minDim: 200,
                    tc: 0,
                    cl: 1,
                    cr: 0, 
                    bc: 0, 
                    keyWidth: 'flex-basis',
                  }
            },
    
      {
        id: 'panel-switcher',
        el: '.panel__switcher',
              buttons: [
                {
                  id: 'show-layers',
                  active: true,
                  label: 'Layers',
                  command: 'show-layers',
                  // Once activated disable the possibility to turn it off
                  togglable: false,
                }, 
                
            {
            id: 'show-style',
            active: true,
            label: 'Styles',
            command: 'show-styles',
            togglable: false,
           },
        
         {
          id: 'show-traits',
          active: true,
          label: 'Traits',
          command: 'show-traits',
          togglable: false,
        },

       ]
      
      }
      
    ]
  },
  

});

editor.BlockManager.add('my-block-id', {
  content: {
    tagName: 'div',
    draggable: false,
    attributes: { 'some-attribute': 'some-value' },
    components: [
      {
        tagName: 'span',
        content: '<b>Some static content</b>',
      }, {
        tagName: 'div',
       
        components: '<span>HTML at some point</span>',
      }
    ]
  }
})

editor.Panels.addPanel({
  id: 'panel-top',
  el: '.panel__top',
});
editor.Panels.addPanel({
  id: 'basic-actions',
  el: '.panel__basic-actions',
  buttons: [
    {
      id: 'visibility',
      active: true, // active by default
      className: 'btn-toggle-borders',
      label: '<u>B</u>',
      command: 'sw-visibility', // Built-in command
    }, {
      id: 'export',
      className: 'btn-open-export',
      label: 'Exp',
      command: 'export-template',
      context: 'export-template', // For grouping context of buttons from the same panel
    }, {
      id: 'show-json',
      className: 'btn-show-json',
      label: 'JSON',
      context: 'show-json',
      command(editor) {
        editor.Modal.setTitle('Components JSON')
          .setContent(`<textarea style="width:100%; height: 250px;">
            ${JSON.stringify(editor.getComponents())}
          </textarea>`)
          .open();
      },
    }
  ],
});

editor.Commands.add('show-layers', {
  getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
  getLayersEl(row) { return row.querySelector('.layers-container') },

  run(editor, sender) {
    const lmEl = this.getLayersEl(this.getRowEl(editor));
    lmEl.style.display = '';
  },
  stop(editor, sender) {
    const lmEl = this.getLayersEl(this.getRowEl(editor));
    lmEl.style.display = 'none';
  },
});
editor.Commands.add('show-styles', {
  getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
  getStyleEl(row) { return row.querySelector('.styles-container') },

  run(editor, sender) {
    const smEl = this.getStyleEl(this.getRowEl(editor));
    smEl.style.display = '';
  },
  stop(editor, sender) {
    const smEl = this.getStyleEl(this.getRowEl(editor));
    smEl.style.display = 'none';
  },
});

editor.Commands.add('show-traits', {
  getTraitsEl(editor) {
    const row = editor.getContainer().closest('.editor-row');
    return row.querySelector('.traits-container');
  },
  run(editor, sender) {
    this.getTraitsEl(editor).style.display = '';
  },
  stop(editor, sender) {
    this.getTraitsEl(editor).style.display = 'none';
  },
});


}
render() {

return (
  <React.Fragment>

    <div class="panel__top" >
    <div class="panel__basic-actions"></div>
    <div class="panel__switcher"></div>

  </div>
  <div class="editor-row">
    <div class="editor-canvas">
      <div id="gjs">
        <h1>Hello World Component!</h1>
        </div>
   </div>
    <div class="panel__right">
      <div class="layers-container"></div>
      <div class="styles-container"></div>
      <div class="traits-container"></div>
    </div>
  </div>
  <div id="blocks"></div>
  </React.Fragment>
);
}
}

export default GrapesEditor;