*Tear* or Weaving Code
======================

> It is not about tears, it's about looms (*tear* is loom in Brazilian Portuguese)

Me and my partner [@gabithume](http://twitter.com/gabithume) are interested in hand-made sustainable looms and how to program them using the computer.

Our first hand-made cardboard loom:

<img src="http://farm4.staticflickr.com/3701/12773771233_360623ce7e_b_d.jpg" />

![hand-made cardboard loom](http://farm4.staticflickr.com/3755/12773668945_29a6322988_b_d.jpg)

While experimenting with that simple loom and based on some research we ended with this *model*:

```
        urdumes
    
      | | | | | | |
    ==|=|=|=|=|=|=|=.
    .=|=|=|===|=|=|='
    '=|=|=======|=|=.   tramas
    .=|=|=======|=|='   
    '=|=|=|===|=|=|=.
    ==|=|=|=|=|=|=|='
      | | | | | | |
```

And the following algorithm:

1. open the *cala*: select which *urdume* threads will stay up and which will stay down
2. insert the *trama* thread
3. push the *pente*

We are preserving the original Brazilian Portuguese words because I really like how their sounds and because of its mnemonic nature. Here a quick glossary:

- *urdumes*: vertical threads that should be manipulated up and down
- *tramas*: horizontal threads we pass in and out, crossing the urdumes
- *pente*: a grid used to push all threads together, We don't need it for a first prototype
- *cala*: the weaving pattern

Now we are imagining a simple cardboard built mechanism to pull and push *urdumes* using some servo motors plugged to an Arduino board. We are also thinking about a weaving pattern language to encode patterns as pull-and-push *urdumes*/*tramas* actions.

Inspiration
-----------

- http://www.katefarina.com/portfolio-item/augmented-weaving/
- http://pt.wikipedia.org/wiki/Tecelagem
- laser loom: http://laserloom.tumblr.com/
- http://makezine.com/craft/how-to-beginner-weaving-tutorial/
- cardboard loom: http://www.instructables.com/id/how-to-weave-on-a-cardboard-loom/?ALLSTEPS
- http://www.youtube.com/watch?v=LbtKnvc_9No
- http://www.osloom.org/
- http://www.craftleftovers.com/projects/cardboard-box-looms-diy-weaving-at-its-finest/
- filetador de garrafa PET: http://www.sempresustentavel.com.br/outrosprojetos/filetador/filetador.htm

Weaving Morse code:

![morse code](http://v2.nl/files/2009/lab/media-vintage-documentation/alpha_morse-test.jpg)