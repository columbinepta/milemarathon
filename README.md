# milemarathon (GitHub Pages)

A static copy of milemarathon.com, served by GitHub Pages at
<https://columbinepta.github.io/milemarathon/>.

This repository holds only built files. The source, the build script and the
full backup live in the private repository
[`columbinepta/milemarathon-website`](https://github.com/columbinepta/milemarathon-website).
To rebuild, from that repository:

```sh
python3 -I tools/build_pages.py site wp-json media ../milemarathon
python3 -I tools/check_links.py ../milemarathon --ignore 'assets/fonts/'
```

The Contact and Sponsorship forms are replaced with the PTA email address,
because a static host cannot take a form post.
