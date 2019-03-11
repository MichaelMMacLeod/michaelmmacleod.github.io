site: clean
	scribble --htmls index.scrbl
	mv index/* .
	rmdir index

clean:
	rm -f *.html *.js *.css
