0. install Emacs Yamamoto Mitsuharu version from Homebrew
```
    brew tap railwaycat/emacsmacport
    brew install emacs-mac
    brew linkapps
```
1. install Cask (a dependencies manager)
```
    curl -fsSkL https://raw.github.com/cask/cask/master/go | python
    cask upgrade
```
2. install Pallet (a package manager)
```
    echo -e "(source melpa)\n\n(depends-on \"pallet\")" > ~/.emacs.d/Cask
    cd ~/.emacs.d/
    cask install
    echo -e "(require 'cask \"~/.cask/cask.el\")\n(cask-initialize)" >> ~/.emacs.d/init.el
```
3. install Graphene running Emacs and typing M-x list-packages then search for graphene (type: C-s graphene) and install it (type: I x).
```
    echo -e "(require 'graphene)" >> ~/.emacs.d
```
4. restart Emacs