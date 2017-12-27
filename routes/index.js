import level0 from "./level_zero_page";
import level1 from "./level_one_page";
import level2 from "./level_two_page";

export default (app) => {
    // 中间件，每个接口都要经过这个。
    app.use('/api/level0', level0);
    app.use('/api/level1', level1);
    app.use('/api/level2', level2);
}
