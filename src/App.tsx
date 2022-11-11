import React, { useState } from 'react';
import { Box, CssBaseline, useMediaQuery } from '@material-ui/core';
import HomePage from './components/homepage/HomePage';
import LandingPage from './components/landing-page/LandingPage';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { colorPalette } from './styles/utils/themes';
import { useStyles } from './styles/App.style';
import { Route, Routes } from 'react-router-dom';

const App = (): React.ReactElement => {
	const [currentTab, setCurrentTab] = useState(0);
	const palette = colorPalette();
	const themeWithColors = createTheme(palette);
	const classes = useStyles(themeWithColors);
	const isMobile = useMediaQuery(themeWithColors.breakpoints.down('sm'));

	const handleTabChange = (event: React.ChangeEvent<{}>, tabIndex: number): void => {
		setCurrentTab(tabIndex);
	};

	return (
		<ThemeProvider theme={ themeWithColors }>
			<CssBaseline/>
			<Box className={ classes.rootContainer }>
				<Routes>
					<Route path="/home" element={ <HomePage { ...{ isMobile, currentTab, handleTabChange } } /> }/>
					<Route path="/" element={ <LandingPage/> }/>
				</Routes>
			</Box>
		</ThemeProvider>
	);
};

export default App;
