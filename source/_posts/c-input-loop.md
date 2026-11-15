---
title: "C 语言：用循环计算一组数的平均值"
date: 2026-11-15 12:11:00
updated: 2026-11-15 12:11:00
categories:
  - "C / Python"
tags:
  - "C"
---

把输入、循环和类型转换放在一个小例子里：读入三个整数，计算平均值。

<!-- more -->

## 可运行的例子

```c
#include <stdio.h>

int main(void) {
    int value;
    double sum = 0;
    for (int i = 0; i < 3; ++i) {
        if (scanf("%d", &value) != 1) {
            return 1;
        }
        sum += value;
    }
    printf("%.2f\n", sum / 3);
    return 0;
}
```

输入 `1 2 4`，应输出 `2.33`。把累加器设为 `double`，除法就保留小数部分。

## 自己试一试

把固定的三个数改成先输入数量 n。思考 n 为零或输入不完整时应该怎样处理。
