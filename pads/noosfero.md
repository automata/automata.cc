Noosfero Dev Box
================

- Installed Virtualbox
- Installed Vangrant
- Created a Vangrant project based on a Debian Wheezy box and setup Noosfero
```bash
mkdir noosfero-box
cd noosfero-box
vagrant box add debian-wheezy64 https://dl.dropboxusercontent.com/s/xymcvez85i29lym/vagrant-debian-wheezy64.box
vagrant init debian-wheezy64
vagrant up
vagrant ssh
```

```bash
git clone git://gitorious.org/noosfero/noosfero.git
cd noosfero
./script/quick-start
```
- Running in dev mode
```bash
./script/development -p 3000
```

I also created a Vagrantfile to make this setup automatic: