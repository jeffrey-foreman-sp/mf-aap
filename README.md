mfa-aap
=======

Tool for "Aufbewahrungs- und Archivierungsplanung"

# Getting started

1. Checkout the source code:

    git clone https://github.com/geoadmin/mf-aap.git

or when you're using ssh key (see https://help.github.com/articles/generating-ssh-keys):

    git clone git@github.com:geoadmin/mf-aap.git


2. Bootstrap your build environment:

    python bootstrap.py --version 1.5.2 --distribute --download-base http://pypi.camptocamp.net/distribute-0.6.22_fix-issue-227/ \
                 --setup-source http://pypi.camptocamp.net/distribute-0.6.22_fix-issue-227/distribute_setup.py

                 
3. Copy the credentials and personal files which are not stored in git

- boto.cfg AWS credentials for user "mf-aap" (S3 and SDB)
- client_secrets.json Google Auth linked to the webgis@swisstopo.ch GMail account
- users.txt List of users entitled to edit


4. Boto

The application has read/write access to a bucket `mf-aap` and a SDB domain `mf-aap`:

Add a `boto.cfg` file with your credentials.

    aws_access_key_id = XXXXXXXXXXXXXXXXXXXX
    aws_secret_key = xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    
5. Google Auth

The authentification is done through a Google account. Any users willing to edit
has to have an Google account.

Go to https://cloud.google.com/console and look for project:
-  Project ID:  aap-tools
-  Project Number:  995902937401

You may event. have to update web-origin, consent screen, redirect url and keys,
before downloading the OAuth 2.0 Client ID json file


6. Autorisation

Only users found in the users.txt may edit data. This file has the following structure:

    email,name
    guillaume-henri.dufour@procrastinatio.org,Guillaume-Henri Dufour

    
7. Build

Use the `standard zc.buildout` script:

    ./buildout/bin/buildout -c buildout_dev.cfg

9. Deploy

Again, standard procedure:

    sudo -u deploy deploy -r deploy/deploy.cfg <int|prod>

    
8. Developer specific build configuration:

The procedure is the same as for all MapFish project, but you have to modifiy/add
the `client_secrets.json` file from 5.

    cp buildout_ltmom.cfg buildout_<username>.cfg 

Where "username" is your specific buildout configuration. Don't forget to add this to git. To create the specific build:

    buildout/bin/buildout -c buildout_<username>.cfg

If you do this on _mf0.dev.bgdi.ch_, you need to make sure that a correct configuration exists under
    
    /var/www/vhosts/mf-aap/conf

that points to your working directory. If all is well, you can reach your pages at:

    http://mf-aap.dev.bgdi.ch/<username>/
