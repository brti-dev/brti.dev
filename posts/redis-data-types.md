---
title: Redis data types
date: '2014-07-28'
tags:
  - redis
  - backend
---
Redis is pretty great! Here are some examples of the data types in action. <!-- more -->If you're new to Redis check out [Try Redis](http://try.redis.io).

##Command Line

Start the server

    $ redis-server

Open a new terminal and check for a response from Redis

    $ redis-cli ping

Open commands

    $ redis-cli
    redis 127.0.0.1:6379> ping
    PONG
    redis 127.0.0.1:6379> set mykey somevalue
    OK
    redis 127.0.0.1:6379> get mykey
    "somevalue"

Redis is super fast because it holds all data in memory. If the size of an application's data is too large for that, then Redis is probably not an appropriate solution. [Mongo](http://www.mongodb.org/), [Couch](http://couchdb.apache.org/), or a [relational database](http://en.wikipedia.org/wiki/Relational_model) like MySQL might be a better choice, though you could potentially use a combination of Redis for fast data store-retrieval and another model for more persistent, deep operations. 

Redis saves snapshots at predefined intervals, which may also depend on the number of changes. Any changes between these intervals will be lost at a power failure or crash.

To save a snapshot:

    $ redis-cli save

Or to save and shutdown:

    $ redis-cli shutdown

Get all keys

    $ redis-cli keys '*'

On to the data types!

##Key-String

The most basic data type.

````bash
$ set user:id:tobi "100"
  OK
$ setnx user:id:tobi "999" // "SET if Not eXists" so it won't work here
  0
$ get user:id:tobi
  "100"
$ set server:name "fido"
  OK
$ expire server:name 120 // the string will be deleted in 120 seconds
  1
$ ttl server:name
  119
$ mset key1 "hello" key2 "world" // multiples
  OK
$ mget key1 key2
  1) "hello"
  2) "world"
$ incr user:ids //increment
  1
$ incrby user:ids 10
  11
$ decr user:ids
  10
$ decrby user:ids 9
  1
$ incr counter
  1
$ getset counter 0 // get the old value ["1"], set a new value ["0"]
  "1"
$ exists counter // check to see if the key `counter` exists; in this case true (outputs `integer 1`)
  1
$ del counter
  1
$ exists counter // nope
  0
````

##List
A list is a series of ordered values

````bash
$ rpush posts "Hello World"
  OK
$ lpush posts "I'm back"
  OK
$ lrange posts 0 -1
  1) "I'm back"
  2) "Hello world"
$ llen posts
  2
$ lpush mylist a b c
  1) c
  2) b
  3) a
````

##Set
An unordered collections of unique strings. Sets have useful functions like intersection, union and difference to compare multiple sets.

````bash
$ sadd posts:id:1:tags "new york" "burritos"
  OK
$ smembers posts:id:1:tags
  1) "new york"
  2) "burritos"
$ sismember posts:id:1:tags "ice cream"
  0
$ sadd posts:id:2:tags "new york" "gyros"
  OK
$ sunion posts:id:1:tags posts:id:2:tags
  1) "new york"
  2) "burritos"
  3) "gyros"
$ sinter posts:id:1:tags posts:id:2:tags
  1) "new york"
$ sunionstore tags posts:id:1:tags posts:id:2:tags
  OK
$ smembers tags
  1) "new york"
  2) "burritos"
  3) "gyros"
$ scard tags // card as in cardinality
  3
````

An example poker game:

````bash
$ sadd deck CA C2 C3 C4 C5 C6 C7 C8 C9 C10 CJ CQ CK DA D2 D3 D4 D5 D6 D7 D8 D9 D10 DJ DQ
DK HA H2 H3 H4 H5 H6 H7 H8 H9 H10 HJ HQ HK SA S2 S3 S4 S5 S6 S7 S8 S9 S10 SJ SQ SK
  52
$ sunionstore game:1:deck deck // copy
  52
$ spop game:1:deck // random item
  C6
$ spop game:1:deck
  D3
$ spop game:1:deck
  H6
$ spop game:1:deck
  CA
$ spop game:1:deck
  DA
$ scard game:1:deck
  47
$ srandmember // get a random item without removing it
  OK
````

##Sorted Set

Similar to a regular set, but now each value has an associated _score_ which is used to sort the elements

````bash
$ zadd hackers 1912 "Alan Turing" 1906 "Grace Hopper"
  OK
$ zrange hackers 0 -1
  1) "Grace Hopper"
  2) "Alan Turing"
$ zRevRange hackers 0 -1 WITHSCORES
  1) "Alan Turing"
  2) 1912 
  3) "Grace Hopper" 
  4) 1906
$ zcard hackers
  2
````

Sorted lists could be used for autocomplete form fields. Each item gets a score of `0` because we'll be sorting the items and picking from them using the `ZRANGEBYLEX` command. Each item is formatted as "input|output|type" (ie `teris|Tetris|game`) where input is the input text in the form field that will use to match the key, output is the actual title, and type is the data type.

````bash
$ zadd autocomplete 0 "bioshock infinite|Bioshock Infinite|game" 0 "shigeru miyamoto|Shigeru Miyamoto|person" 0 "kirby's dream land|Kirby's Dream Land|game" 0 "kirby's adventure|Kirby's Adventure|game" 0 "killer instinct|Killer Instinct|game" 0 "game boy|Game Boy|console"
$ zrange autocomplete 0 -1
  1) "bioshock infinite|Bioshock Infinite|game"
  2) "game boy|Game Boy|console"
  3) "killer instinct|Killer Instinct|game"
  4) "kirby's adventure|Kirby's Adventure|game"
  5) "kirby's dream land|Kirby's Dream Land|game"
  6) "shigeru miyamoto|Shigeru Miyamoto|person"
````

If the user inputs "kir", we'll search for everything between kir - kirz:

````bash
$ zRangeByLex autocomplete [kir (kirz
  1) "kirby's adventure|Kirby's Adventure|game"
  2) "kirby's dream land|Kirby's Dream Land|game"
````

Another implementation could be high scores.

````bash
$ zadd scores 1 stanley 1 philys 1 creed
  OK
$ zIncrBy scores 5 creed
  6
$ zRevRange scores 0 -1
  1) Creed
  2) Philys
  3) Stanley
$ zRevRank scores creed
  0
$ zcount scores -infinity 1 // with scores between negative infinity and 1
  2
$ zRevRangeByScore scores +infinity (1 withscores //show all (withschores) above 1
````

##Hashes
Finally, hashes are maps between string fields and string values, so they are the perfect data type to represent objects (ie: A User with a number of fields)

````bash
$ hset game:1 title "Tetris" // single field
  OK
$ hget game:1 title
  "Tetris"
$ hmset game:2 title "Super Mario World" platform "SNES"
  OK
$ hgetall game:2
  1) "title"
  2) "Super Mario World"
  3) "platform" 
  4) "SNES"
$ hincrby game:1 fans 1
  1
$ hdel game:1 fans
````