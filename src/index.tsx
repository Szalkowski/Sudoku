import React from 'react'
import ReactDOM from 'react-dom/client'
import {Card, Content, Grid, Title} from 'components'
import {ThemeProvider} from 'styled-components'
import {reportWebVitals} from 'core'
import {GlobalStyles, theme} from 'styles'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Content data-cy={'content'}>
            <Title data-cy={'title'}>Sudoku</Title>
            <Card data-cy={'card'}>
                <Grid/>
            </Card>
        </Content>
    </ThemeProvider>
)

reportWebVitals()
