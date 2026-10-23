from distutils.core import setup

setup(
    name='pasarpolis-python-sdk',
    packages=['pasarpolis', 'pasarpolis.request','pasarpolis.request.auth'],
    install_requires=['requests'],
    version='1.0',
    description='SDK for working with the Pasarpolis API',
    author='Paritosh Singh',
    author_email='paritosh.singh@pasarpolis.com',
    url='https://github.com/Medium/medium-sdk-python',
    download_url='https://github.com/Medium/medium-sdk-python',
    keywords=['pasarpolis', 'sdk'],
    classifiers=[],
)