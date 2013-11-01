mf-aap
=====
Tool for "Aufbewahrungs- und Archivierungsplanung"

# Getting started

Checkout the source code:

    git clone https://github.com/geoadmin/mf-aap.git

or when you're using ssh key (see https://help.github.com/articles/generating-ssh-keys):

    git clone git@github.com:geoadmin/mf-aap.git


Bootstrap your build environment:

    python bootstrap.py --version 1.5.2 --distribute --download-base http://pypi.camptocamp.net/distribute-0.6.22_fix-issue-227/ --setup-source http://pypi.camptocamp.net/distribute-0.6.22_fix-issue-227/distribute_setup.py

Create a developer specific build configuration:

    cp buildout_ltgal.cfg buildout_<username>.cfg 


Where "username" is your specific buildout configuration. Don't forget to add this to git. To create the specific build:

    buildout/bin/buildout -c buildout_<username>.cfg

If you do this on mf1t, you need to make sure that a correct configuration exists under
    
    /var/www/vhosts/mf-aap/conf

that points to your working directory. If all is well, you can reach your pages at:

    http://mf-aap.dev.bgdi.ch/<username>/
