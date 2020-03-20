#lang pollen

◊(define (make-fancy-text id opacity)
   ◊div[#:class "fancy-text"
        #:id id
        #:style (format "text-shadow: 0.5vw 0.5vw black; color: white; opacity: ~a;" opacity)]{
     MICHAEL MACLEOD
   })

◊div[#:class "fancy-container"]{
  ◊make-fancy-text["name1" "0.25"]
  ◊make-fancy-text["name2" "0.50"]
  ◊make-fancy-text["name3" "0.75"]
  ◊make-fancy-text["name4" "1.00"]
}

◊div[#:class "link-container"]{
  ◊a[#:class "link"
     #:href "https://github.com/michaelmmacleod"]{github}
}

◊div[#:class "spinner-container"]{
  ◊img[#:id "spinner-image"
       #:class "spinner"
       #:src "Y-transparent.png"]
  ◊script[#:type "text/javascript"
          #:src "fancy-text.js"]
}
