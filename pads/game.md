Phonegap (Apache Cordova)
=========================

Installing and using
--------------------

- Install Phonegap
```bash
sudo npm install -g phonegap
```
- Install the Android SDK
```bash
mkdir ~/Development
cd ~/Development
wget -c http://dl.google.com/android/adt/adt-bundle-mac-x86_64-20131030.zip
unzip adt-bundle-mac-x86_64-20131030.zip
ln -s ~/Development/adt-bundle-mac-x86_64-20131030 ~/Development/adt-bundle
echo "export PATH=${PATH}:~/Development/adt-bundle/sdk/platform-tools:~/Development/adt-bundle/sdk/tools" >> ~/.bash_profile
```
- Install Ant
```bash
brew install ant
```
- Creating a hello world app
```bash
phonegap create my-app
cd my-app
phonegap run android
```

Maybe it will be necessary to create an [AVD](http://developer.android.com/tools/devices/managing-avds-cmdline.html
) (Android Virtual Device) to run the emulator, so:

```bash
android create avd -n android4.4 -t 1
```


Plugins
-------

- A plugin to fast canvas rendering: https://github.com/phonegap/phonegap-app-fast-canvas
- A plugin to facebook connection: https://github.com/phonegap/phonegap-facebook-plugin

Tutorials
---------

- http://www.tricedesigns.com/2013/03/22/phonegap-legends-a-sample-game-app/

Inspiration Games
=================

- Naked on Pluto: http://www.youtube.com/watch?v=pbOnKqF9SLE

![Naked on Pluto](http://i.imgur.com/B2gZ3ZI.png)