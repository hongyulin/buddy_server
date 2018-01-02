export default {
    dbUrl: 'mongodb://127.0.0.1:27017/buddy',
    spiderUrl: 'http://tieba.baidu.com',
    port: 8989,
    session: {
        name: 'indentitykey',
        secret: 'safe',
        cookie: {
            // 防止xss攻击
            httpOnly: true,
            // 为true的时候，只能用https协议发送。
            secure: false,
            maxAge: 30 * 24 * 60 * 60 * 1000
        }
    }
}