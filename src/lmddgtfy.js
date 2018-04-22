// Description
//   A hubot script that replies with a link to http://lmddgtfy.com/ (let me duckduckgo that for you)
//
// Configuration:
//   None
//
// Commands:
//   hubot lmddgtfy <query> - responds with a 'let me google that for you' link: http://lmddgtfy.com/?q=query
//
// Notes:
//   None
//
// Author:
//   javathunderman <javathunderman@nomik.xyz>
//   Monica Granbois <mgranbois@outlook.com>

module.exports = robot =>
  robot.respond(/lmddgtfy (.*)/i, function(res) {
    const topic = encodeURIComponent(res.match[1]).replace(/[!'()*]/g, escape);
    return res.send(`http://lmddgtfy.net/?q=${topic}`);
  })
;
