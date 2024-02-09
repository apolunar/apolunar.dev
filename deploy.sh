#!/bin/bash

# TODO: RUN TESTS!!

npm run build

scp -r dist scp://root@racknerd:22222/root/
