#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u''
SITENAME = u'LOG-a-TEC by SensorLab'
SITEURL = 'http://log-a-tec.eu'

PATH = 'content'

TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = u'en'

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True

DEFAULT_PAGINATION = False

MD_EXTENSIONS = { 'markdown.extensions.toc': {} }

THEME = 'theme/'
THEME_STATIC_DIR = '.'

STATIC_PATHS = ['img']

# Take HTML filename from markdown filename instead of the page title.
# e.g. content from foo.md is written to foo.html
SLUGIFY_SOURCE = "basename"
PAGE_SAVE_AS = "{slug}.html"

# Disable everything related to blog posts - we only have static currently pages
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

TAGS_SAVE_AS = None
AUTHORS_SAVE_AS = None
CATEGORIES_SAVE_AS = None
ARCHIVES_SAVE_AS = None
INDEX_SAVE_AS = None
