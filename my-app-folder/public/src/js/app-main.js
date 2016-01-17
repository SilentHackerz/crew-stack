define(['react','reactDom','./components/home-page'],function(React, ReactDom, HomePage){	
	console.log('Loaded the Home Page');
	ReactDom.render(<HomePage />, document.getElementById('componentContainer'));
});

//webpack --progress --colors --watch (for development)
//webpack -p (for production)