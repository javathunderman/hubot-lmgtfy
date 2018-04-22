# hubot-lmgtfy

A hubot script that replies with a link to [lmddgtfy](http://lmddgtfy.net/) (let me duckduckgo that for you)  

See [`src/lmddgtfy.coffee`](src/lmgtfy.coffee) for full documentation.

## Installation

In hubot project repo, run:

`npm install hubot-lmddgtfy --save`

Then add **hubot-lmddgtfy** to your `external-scripts.json`:

```json
[
  "hubot-lmddgtfy"
]
```

## Sample Interaction

```
user1>> hubot lmgtfy what is 2+2?
hubot>> http://lmddgtfy.net/?q=what%20is%202%2B2%3F
```

## Contributing

Pull requests are welcome! Please see [the CONTRIBUTING file](CONTRIBUTING.md) for details.
