noflo-ui
--------

You should have grunt-cli installed (*npm install grunt-cli -g*).

    git clone noflo-ui
    cd noflo-ui
    npm install
    grunt build

For now, run a server by hand:

    python -m SimpleHTTPServer

And open http://localhost:8000/index.html

To add some module from a github repos (e.g. github.com/forresto/noflo-seriously), edit both *component.json* and *preview/component.json* and add:

    dependencies: {
       ...
       "forresto/noflo-seriously": "*"
    }

Now build preview:

    grunt exec:preview_build

It is handy to link a local copy of your component to noflo-ui/preview/components/ while in dev:

    ln -s path/to/component/foo noflo-ui/preview/components/foo

Now, as before, add foo to *preview/component.json* and run *grunt exec:preview_build*. Update your browser and it should work.

noflo-seriously
---------------


noflo-webaudio
--------------