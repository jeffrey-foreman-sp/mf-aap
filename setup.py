from setuptools import setup

requires = [
    'pyramid',
    ]

setup(name='aap',
      entry_points="""\
      [paste.app_factory]
      main = aap:main
      """,
      )
