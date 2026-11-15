---
title: "Python：用字典统计单词出现次数"
date: 2026-11-15 12:12:00
updated: 2026-11-15 12:12:00
categories:
  - "C / Python"
tags:
  - "Python"
---

字典适合表达“一个键对应一个值”。下面用它记录单词与次数。

<!-- more -->

```python
text = "learn by doing learn by writing"
counts = {}
for word in text.split():
    counts[word] = counts.get(word, 0) + 1
print(counts)
```

`get(word, 0)` 在单词第一次出现时提供初始值。这里 `learn` 和 `by` 各出现两次。

## 例子的边界

这个版本按空白分词，区分大小写，也不去标点。下一步可以先转小写，再讨论中文文本为什么不能直接用空白分词。
