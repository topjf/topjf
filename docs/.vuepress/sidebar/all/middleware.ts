/**
 * 中间件 侧边栏json数据
 */
export const middlewareJson =
    //  {
    //     text: "中间件",
    //    icon: "tool",
    //     prefix: "middleware/",
    //     collapsable: true,
//        children: [
    [{
        text: "消息中间件",
        icon: "tool",
        prefix: "mq/",
        children: "structure",
        //children: [
        //    "mq-rabbit",
        //    "mq-rocket",
        //    "kafka",
        //   "mq-active",
        //  ],
    },
        "nginx",
        {
            text: "Redis",
            icon: "redis",
            prefix: "redis/",
            children: "structure",
            //children: [
            //   "redis",
            //  ]
        },
        "elastic-search",
    ]
//     ],
//   }

