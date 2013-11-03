import os
from setuptools import setup, find_packages

here = os.path.abspath(os.path.dirname(__file__))
README = open(os.path.join(here, 'README.md')).read()
CHANGES = open(os.path.join(here, 'CHANGES.txt')).read()

requires = [
    'webtest',
    'pyramid',
    'pyramid_debugtoolbar',
    'pyramid_beaker',
    'google-api-python-client',
    'waitress',
    'boto',
    'python-openid',
    'transaction',
    'pyramid_tm',
    'Babel',
    'httplib2',
    'nose',
    'coverage',
    'PyYAML',
    'pep8',
    'autopep8',
    ]

setup(name='aap',
      version='0.0.1',
      description='aap',
      long_description=README + '\n\n' + CHANGES,
      classifiers=[
        "Programming Language :: Python",
        "Framework :: Pyramid",
        "Topic :: Internet :: WWW/HTTP",
        "Topic :: Internet :: WWW/HTTP :: WSGI :: Application",
        ],
      author='',
      author_email='',
      url='',
      keywords='web pyramid pylons',
      packages=find_packages(),
      package_data = {'aap': ['locale/*/LC_MESSAGES/*.mo']},
      include_package_data=True,
      zip_safe=False,
      install_requires=requires,
      tests_require=requires,
      test_suite="aap",
      entry_points="""\
      [paste.app_factory]
      main = aap:main
      """,
      )

