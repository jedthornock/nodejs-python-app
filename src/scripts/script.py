#!/usr/bin/python

import sys, getopt, time

def main(argv):
    arguments = ''
    usage = 'usage: script.py -f <sometext> <sometext>'
    try:
        opts, args = getopt.getopt(argv,"hf:",["foo=","bar="])
    except getopt.GetoptError:
        print(usage)
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
            print(usage)
            sys.exit()
        elif opt in ("-f", "--foo", "--bar"):
            arguments = args
        
    itemList = ["Item 1", "Item 2", "Item 3"]

    print("Start : %s" % time.ctime())
    print('Python script doing something awesome')
    time.sleep( 1 )
    print('More awesomeness')
    time.sleep( 1 )
    print('Now doing something cool with a list of items...')
    for item in itemList:
        print('Doing coolness on item: ' + item)
        time.sleep( 1 )
    print('Finishing up')
    time.sleep( 1 )
    print('Almost Done')
    time.sleep( 1 )
    print("End : %s" % time.ctime())

if __name__ == "__main__":
    main(sys.argv[2:])