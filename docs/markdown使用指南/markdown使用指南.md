这份指南旨在为你提供一个全面、结构清晰且易于查阅的参考手册，无论是用于日常的个人知识管理、构建静态博客，还是编写技术文档，都能得心应手。

为了实现最佳的可查阅性，本指南分为 **基础 Markdown**、**扩展 Markdown**、**LaTeX 结合方式** 以及 **LaTeX 符号参考大全** 四个部分。

---

## 第一部分：基础 Markdown 语法

### 1. 标题 (Headers)

使用 `#` 号来标记标题，`#` 的数量代表标题的层级（支持 1-6 级）。

Markdown

```
# 一级标题 (通常用于文档大标题)
## 二级标题 (章节标题)
### 三级标题 (子章节)
#### 四级标题
```

### 2. 文本格式 (Text Formatting)

通过特定的符号包裹文本来实现强调效果。

Markdown

```
*斜体文本* 或 _斜体文本_
**加粗文本** 或 __加粗文本__
***加粗斜体***
~~删除线~~
```

### 3. 列表 (Lists)

分为无序列表和有序列表，支持嵌套。

Markdown

```
无序列表：
* 知识库搭建
* 静态网站生成
  * 页面布局定制 (缩进两个或四个空格实现嵌套)

有序列表：
1. 收集信息
2. 整理归档
3. 发布输出
```

### 4. 链接与图片 (Links & Images)

图片的语法仅比链接多一个 `!`。在配置图床（如腾讯云 COS）后，这里通常会填入云端直链。

Markdown

```
[我的 Markdown 笔记仓库](https://github.com/your-username/Markdown-Notes)

![网络拓扑图示例](https://your-bucket.cos.ap-region.myqcloud.com/images/topology.png)
```

### 5. 引用与代码 (Blockquotes & Code)

引用用于摘录，代码块用于展示具体的编程语言，支持语法高亮。

Markdown

````
> 保持好奇心，持续构建个人的数字花园。
> > 这是嵌套引用。

行内代码：使用 `printf("Hello");` 进行输出。

代码块 (指定 C 语言)：
```c
struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};
````

---

## 第二部分：扩展 Markdown 语法 (GFM)

这些语法在大多数现代解析器（如静态博客生成器）中都得到了完美支持。

### 1. 表格 (Tables)

使用 `|` 分隔列，使用 `-` 分隔表头和内容。`:` 用于控制对齐方式。

Markdown

```
| 引擎 | 语言支持 | 特点 |
| :--- | :---: | ---: |
| Unity | C# | 生态完善 |
| Godot | GDScript/C# | 开源轻量 |
```

### 2. 任务列表 (Task Lists)

常用于代办事项。

Markdown

```
- [x] 配置本地代理路由规则
- [x] 部署图床工具
- [ ] 完善卡牌游戏核心逻辑
```

### 3. YAML Frontmatter (文档属性)

在很多解析 `.md` 文件为静态网页的工具中，文件顶部的 YAML 块用于定义页面的元数据。

Markdown

```
---
title: "Markdown 与 LaTeX 排版指南"
date: 2026-04-23
tags: [知识管理, 排版]
---
```

---

## 第三部分：Markdown 中的 LaTeX 使用方式

在支持数学公式渲染的环境中（如使用 MathJax 或 KaTeX），LaTeX 公式通过 `$` 符号与 Markdown 结合。

1. **行内公式 (Inline Math)：** 使用单个 `$` 包裹，公式会嵌入在当前文本行中。
    
    - 示例：二叉树的深度为 $O(\log n)$。
        
    - 源码：`二叉树的深度为 $O(\log n)$。`
        
2. **块级公式 (Display Math)：** 使用双 `$$` 包裹，公式会单独占据一行并居中显示。
    
    - 示例：
        
        $$f(x) = \int_{-\infty}^\infty \hat{f}(\xi)\,e^{2 \pi i \xi x} \,d\xi$$
        
    - 源码：
        
        代码段
        
        ```
        $$f(x) = \int_{-\infty}^\infty \hat{f}(\xi)\,e^{2 \pi i \xi x} \,d\xi$$
        ```
        

---

## 第四部分：LaTeX 符号参考大全

为了方便查阅，以下将 LaTeX 中最常用的数学、科学符号及字母进行分类梳理。

### 1. 希腊字母 (Greek Letters)

大写希腊字母只需将首字母大写即可（若大写字母与英文字母相同则无特殊命令，如 Alpha 就是 A）。

|**小写**|**LaTeX 代码**|**大写**|**LaTeX 代码**|**变体**|**LaTeX 代码**|
|---|---|---|---|---|---|
|$\alpha$|`\alpha`|$A$|`A`|||
|$\beta$|`\beta`|$B$|`B`|||
|$\gamma$|`\gamma`|$\Gamma$|`\Gamma`|||
|$\delta$|`\delta`|$\Delta$|`\Delta`|||
|$\epsilon$|`\epsilon`|$E$|`E`|$\varepsilon$|`\varepsilon`|
|$\zeta$|`\zeta`|$Z$|`Z`|||
|$\eta$|`\eta`|$H$|`H`|||
|$\theta$|`\theta`|$\Theta$|`\Theta`|$\vartheta$|`\vartheta`|
|$\iota$|`\iota`|$I$|`I`|||
|$\kappa$|`\kappa`|$K$|`K`|||
|$\lambda$|`\lambda`|$\Lambda$|`\Lambda`|||
|$\mu$|`\mu`|$M$|`M`|||
|$\nu$|`\nu`|$N$|`N`|||
|$\xi$|`\xi`|$\Xi$|`\Xi`|||
|$\pi$|`\pi`|$\Pi$|`\Pi`|||
|$\rho$|`\rho`|$P$|`P`|$\varrho$|`\varrho`|
|$\sigma$|`\sigma`|$\Sigma$|`\Sigma`|||
|$\tau$|`\tau`|$T$|`T`|||
|$\upsilon$|`\upsilon`|$\Upsilon$|`\Upsilon`|||
|$\phi$|`\phi`|$\Phi$|`\Phi`|$\varphi$|`\varphi`|
|$\chi$|`\chi`|$X$|`X`|||
|$\psi$|`\psi`|$\Psi$|`\Psi`|||
|$\omega$|`\omega`|$\Omega$|`\Omega`|||

### 2. 基础数学结构 (Basic Math Structures)

|**说明**|**效果**|**LaTeX 代码**|
|---|---|---|
|上标 / 幂|$x^2$|`x^2`|
|下标|$x_i$|`x_i`|
|分数|$\frac{a}{b}$|`\frac{a}{b}`|
|平方根|$\sqrt{x}$|`\sqrt{x}`|
|n次方根|$\sqrt[n]{x}$|`\sqrt[n]{x}`|
|绝对值|$|x|
|矢量 (带箭头)|$\vec{v}$|`\vec{v}`|
|均值 (带横线)|$\bar{x}$|`\bar{x}`|
|估计值 (戴帽)|$\hat{y}$|`\hat{y}`|

### 3. 二元运算符与关系符 (Operators & Relations)

|**符号**|**LaTeX 代码**|**符号**|**LaTeX 代码**|
|---|---|---|---|
|$\pm$|`\pm`|$\mp$|`\mp`|
|$\times$|`\times`|$\div$|`\div`|
|$\cdot$|`\cdot`|$\ast$|`\ast`|
|$\circ$|`\circ`|$\approx$|`\approx`|
|$\neq$|`\neq`|$\equiv$|`\equiv`|
|$\leq$|`\leq`|$\geq$|`\geq`|
|$\ll$|`\ll`|$\gg$|`\gg`|
|$\propto$|`\propto`|$\sim$|`\sim`|

### 4. 集合与逻辑 (Sets & Logic)

|**符号**|**LaTeX 代码**|**符号**|**LaTeX 代码**|
|---|---|---|---|
|$\in$|`\in`|$\notin$|`\notin`|
|$\subset$|`\subset`|$\subseteq$|`\subseteq`|
|$\cup$|`\cup`|$\cap$|`\cap`|
|$\emptyset$|`\emptyset` 或 `\varnothing`|$\forall$|`\forall`|
|$\exists$|`\exists`|$\nexists$|`\nexists`|
|$\therefore$|`\therefore`|$\because$|`\because`|
|$\mathbb{R}$|`\mathbb{R}` (实数集)|$\mathbb{N}$|`\mathbb{N}` (自然数集)|

### 5. 微积分与大型运算符 (Calculus & Large Operators)

|**效果**|**LaTeX 代码**|**说明**|
|---|---|---|
|$\sum_{i=1}^{n} x_i$|`\sum_{i=1}^{n} x_i`|求和|
|$\prod_{i=1}^{n} x_i$|`\prod_{i=1}^{n} x_i`|求积|
|$\int_a^b f(x) dx$|`\int_a^b f(x) dx`|积分|
|$\iint_D f(x,y) dA$|`\iint_D f(x,y) dA`|二重积分|
|$\oint_C F \cdot dr$|`\oint_C F \cdot dr`|环路积分|
|$\lim_{x \to 0}$|`\lim_{x \to 0}`|极限|
|$\infty$|`\infty`|无穷大|
|$\partial$|`\partial`|偏导数|
|$\nabla$|`\nabla`|梯度 (Nabla)|

### 6. 箭头 (Arrows)

|**符号**|**LaTeX 代码**|**符号**|**LaTeX 代码**|
|---|---|---|---|
|$\rightarrow$|`\rightarrow` 或 `\to`|$\leftarrow$|`\leftarrow`|
|$\Rightarrow$|`\Rightarrow`|$\Leftarrow$|`\Leftarrow`|
|$\leftrightarrow$|`\leftrightarrow`|$\Leftrightarrow$|`\Leftrightarrow`|
|$\uparrow$|`\uparrow`|$\downarrow$|`\downarrow`|
|$\longmapsto$|`\longmapsto`|$\implies$|`\implies`|

### 7. 矩阵与方程组 (Matrices & Equations)

构建多行结构通常需要使用环境（Environment），以 `\begin{...}` 和 `\end{...}` 包裹。列用 `&` 分隔，行用 `\\` 换行。

**矩阵 (Matrix)：**

使用 `bmatrix` (方括号) 或 `pmatrix` (圆括号)。

$$\begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{bmatrix}$$

代码段

```
$$
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
$$
```

**分段函数 (Cases)：**

$$f(n) = \begin{cases} n/2, & \text{if } n \text{ is even} \\ 3n+1, & \text{if } n \text{ is odd} \end{cases}$$

代码段

```
$$
f(n) =
\begin{cases}
n/2,  & \text{if } n \text{ is even} \\
3n+1, & \text{if } n \text{ is odd}
\end{cases}
$$
```