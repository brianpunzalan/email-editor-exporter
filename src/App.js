import React, { useState } from 'react';
import EmailEditor from 'react-email-editor'
import styled from 'styled-components'
import Navbar from './Navbar'
import axios from 'axios'
import './global.css'

const options = {
  appearance: {
    theme: 'dark',
    panels: {
      tools: {
        dock: 'left'
      }
    }
  },
  mergeTags: {
    first_name: {
      name: "First Name",
      value: '${first_name}'
    },
    last_name: {
      name: "Last Name",
      value: '${last_name}'
    }
  }
}

const Container = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
`

const triggerDownload = (result, fileName, type) => {
  const downloadLink = URL.createObjectURL(new Blob([result], { type }))
  let link = document.createElement("a");
  link.href = downloadLink;
  link.download = fileName;
  link.style = "position: absolute;"
  document.body.appendChild(link);
  link.click();
  window.URL.revokeObjectURL(downloadLink);
  document.body.removeChild(link);
}

function App() {
  let editorRef = React.createRef()
  const [isSaving, setSaveLoading] = useState(false);
  const [isExporting, setExportLoading] = useState(false);

  const handleExport = (e) => {
    setExportLoading(true)
    editorRef.exportHtml(async (data) => {
      const { html } = data
      try {
        const result = await axios.post('export', { html })
          .then(response => response.data)
        triggerDownload(result, "exported.htm", "text/html")
        setExportLoading(false)
      } catch (e) {
        alert('Failed')
      }
    })
  }

  const handleSave = (e) => {
    setSaveLoading(true)
    editorRef.exportHtml(async (data) => {
      const { design } = data
      try {
        const result = await axios.post('template/save', { design })
          .then(response => JSON.stringify(response.data))
        triggerDownload(result, "template.json", "application/json")
        setSaveLoading(false)
      } catch (e) {
        alert('Failed')
      }
    })
  }

  return (
    <Container>
      <Navbar onExport={handleExport} onSave={handleSave} isSaving={isSaving} isExporting={isExporting} />
      <EmailEditor 
        minHeight="100%"
        options={options}
        ref={editor => editorRef = editor} 
      />
    </Container>
  );
}

export default App;
