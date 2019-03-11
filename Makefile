site: clean
	scribble --htmls index.scrbl
	mv index/* .
	rmdir index

clean:
	rm -f Contact.html Site_Source_Code.html index.html manual-fonts.css manual-racket.css manual-racket.js manual-style.css scribble.css scribble-common.js
