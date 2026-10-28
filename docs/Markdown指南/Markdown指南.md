# Markdown 与 LaTeX 使用指南

本指南按基础 Markdown、扩展语法、数学公式写法和 LaTeX 符号参考组织内容。示例同时提供源码与展示效果，便于复制和对照。

当前知识库使用 VitePress，并已开启数学公式渲染。基础 Markdown 可以直接使用；表格、删除线、任务列表、数学公式等扩展的支持情况取决于具体解析器，不能仅凭文件扩展名 `.md` 判断。

---

## 第一部分：基础 Markdown 语法

### 1. 标题 (Headers)

行首使用 `#` 标记标题，数量表示层级，支持 1～6 级。`#` 与标题文字之间保留一个空格。文档通常以一个一级标题作为总标题，再按层级组织章节。

**源码：**

```markdown
# 一级标题示例
## 二级标题示例
### 三级标题示例
#### 四级标题示例
##### 五级标题示例
###### 六级标题示例
```

**展示效果：**

<div>
<h1>一级标题示例</h1>
<h2>二级标题示例</h2>
<h3>三级标题示例</h3>
<h4>四级标题示例</h4>
<h5>五级标题示例</h5>
<h6>六级标题示例</h6>
</div>

### 2. 段落与换行 (Paragraphs & Line Breaks)

两个段落之间留一个空行。通用 Markdown 中，单次回车通常是软换行，不保证在网页中另起一行；需要强制换行时，可在行尾加两个空格，或加一个反斜杠 `\`，然后回车。反斜杠必须是该行最后一个字符。

本站按个人写作习惯额外开启了“单次回车即换行”：普通正文直接回车即可，不需要在行尾添加符号；空一行仍然表示新段落。标准的反斜杠或两个空格写法也能使用，效果相同。普通正文无需缩进，连续空格按浏览器默认规则合并；代码块中的空白保持原样。下面先展示反斜杠硬换行，避免行尾空格在复制时被遗漏。

**源码：**

```markdown
这是第一段。

这是第二段的第一行。\
这是第二段的第二行。
```

**展示效果：**

这是第一段。

这是第二段的第一行。\
这是第二段的第二行。

**本站直接回车的源码：**

```markdown
这是直接回车的第一行。
这是直接回车的第二行。
```

**展示效果：**

这是直接回车的第一行。
这是直接回车的第二行。

### 3. 文本格式 (Text Formatting)

用成对的符号包裹文本。删除线属于扩展语法，当前站点支持。

**源码：**

```markdown
*斜体文本* 或 _斜体文本_

**加粗文本** 或 __加粗文本__

***加粗斜体***

~~删除线~~
```

**展示效果：**

*斜体文本* 或 _斜体文本_

**加粗文本** 或 __加粗文本__

***加粗斜体***

~~删除线~~

### 4. 列表 (Lists)

无序列表使用 `-`、`*` 或 `+`；有序列表使用数字加英文句点。标记后加一个空格。嵌套内容应缩进到父项正文开始的位置：下面无序列表缩进 2 个空格，有序列表缩进 3 个空格。

**源码：**

```markdown
- 知识库搭建
- 静态网站生成
  - 页面布局定制
  - 导航配置

1. 收集信息
2. 整理归档
   1. 按主题分类
   2. 补充标签
3. 发布输出
```

**展示效果：**

- 知识库搭建
- 静态网站生成
  - 页面布局定制
  - 导航配置

1. 收集信息
2. 整理归档
   1. 按主题分类
   2. 补充标签
3. 发布输出

同一列表中的有序编号通常由渲染器连续生成；源码中的后续编号不用于任意跳号。列表项内放多段文字或代码块时，也应保持相应缩进。

### 5. 链接与图片 (Links & Images)

链接格式为 `[显示文字](地址)`，图片格式为 `![替代文字](图片地址)`。图片的替代文字应描述图片内容，便于无障碍阅读，也可在图片加载失败时提供信息。

**链接源码：**

```markdown
[GitHub](https://github.com/)

[GitHub](https://github.com/ "访问 GitHub")

[查看示例图片](./markdown-example.svg)
```

**展示效果：**

[GitHub](https://github.com/)

[GitHub](https://github.com/ "访问 GitHub")

[查看示例图片](./markdown-example.svg)

双引号中的内容是可选标题，部分浏览器会在悬停时显示。必要说明应直接写在正文中。

**图片源码：**

```markdown
![Markdown 源码经渲染后生成 HTML 页面](./markdown-example.svg)
```

**展示效果：**

![Markdown 源码经渲染后生成 HTML 页面](./markdown-example.svg)

`./` 表示当前文档所在目录，`../` 表示上一级目录。远程图片可以使用可直接访问图片文件的 HTTPS 地址；本地文件的相对路径写法和发布后的资源处理规则也需要站点工具支持。

### 6. 引用 (Blockquotes)

在行首添加 `>`，嵌套引用再增加一层 `>`。引用内可以继续使用强调、列表等语法。

**源码：**

```markdown
> 引用内容可以包含 **加粗文字**。
>
> > 这是嵌套引用。
```

**展示效果：**

> 引用内容可以包含 **加粗文字**。
>
> > 这是嵌套引用。

### 7. 行内代码与代码块 (Code)

行内代码使用一对反引号。代码块使用至少三个反引号作为围栏，语言标识紧接在开始围栏后，例如 `c`、`python`、`javascript`、`markdown`、`yaml`、`latex`、`text`。是否高亮及其配色取决于渲染器，语言标识本身不会执行代码。

**行内代码源码：**

```markdown
使用 `printf("Hello\n");` 输出一行文字。
```

**展示效果：**

使用 `printf("Hello\n");` 输出一行文字。

**代码块源码：**

````markdown
```c
struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};
```
````

**展示效果：**

```c
struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};
```

展示含有三反引号围栏的 Markdown 源码时，外层可使用四个反引号，如上所示。结束围栏应与开始围栏使用同一种字符，且长度不短于开始围栏。

代码的运行结果需要单独提供。例如，下面的 C 程序在编译运行后输出 `Hello`：

```c
#include <stdio.h>

int main(void) {
    printf("Hello\n");
    return 0;
}
```

**运行输出：**

```text
Hello
```

如果行内代码本身包含反引号，可用两个反引号包围：

```markdown
`` `code` ``
```

**展示效果：** `` `code` ``

### 8. 分隔线与字符转义 (Thematic Breaks & Escapes)

独立一行使用三个或更多的 `-`、`*` 或 `_` 可以生成分隔线。建议在分隔线前后留空行，避免与列表或标题语法混淆。

**源码：**

```markdown
分隔线之前。

---

分隔线之后。
```

**展示效果：**

分隔线之前。

---

分隔线之后。

要显示具有语法作用的标点本身，可在前面加反斜杠。代码块和行内代码中的 Markdown 标记一般不需要转义。

**源码：**

```markdown
\*这段文字不会变成斜体\*

\# 这行不是标题

\[这段文字不是链接\]
```

**展示效果：**

\*这段文字不会变成斜体\*

\# 这行不是标题

\[这段文字不是链接\]

---

## 第二部分：扩展 Markdown 与站点语法

表格、删除线和任务列表属于常见的 GFM（GitHub Flavored Markdown）语法；Frontmatter、HTML 折叠内容及站点专用容器各有自己的支持条件。以下会区分这些情况。

### 1. 表格 (Tables)

使用 `|` 分隔列，表头下的分隔行用 `-`，每列建议至少写三个。冒号控制对齐方式：`:---` 左对齐、`:---:` 居中、`---:` 右对齐。

**源码：**

```markdown
| 引擎 | 语言支持 | 特点 |
| :--- | :---: | ---: |
| Unity | C# | 生态完善 |
| Godot | GDScript/C# | 开源轻量 |
```

**展示效果：**

| 引擎 | 语言支持 | 特点 |
| :--- | :---: | ---: |
| Unity | C# | 生态完善 |
| Godot | GDScript/C# | 开源轻量 |

单元格中需要显示竖线时，写成 `\|`，包括竖线位于行内代码的情况；数学绝对值也可写成 `\lvert x\rvert`，避免与列分隔符冲突。

**源码：**

```markdown
| 内容 | 示例 |
| --- | --- |
| 竖线 | a \| b |
| 代码中的竖线 | `a \| b` |
| 绝对值 | $\lvert x\rvert$ |
```

**展示效果：**

| 内容 | 示例 |
| --- | --- |
| 竖线 | a \| b |
| 代码中的竖线 | `a \| b` |
| 绝对值 | $\lvert x\rvert$ |

### 2. 任务列表 (Task Lists)

任务列表用 `- [ ]` 表示未完成，用 `- [x]` 表示已完成；方括号后需要一个空格。

**源码：**

```markdown
- [x] 配置本地代理路由规则
- [x] 部署图床工具
- [ ] 完善卡牌游戏核心逻辑
```

**支持任务列表扩展时的展示效果：**

<ul>
<li><label><input type="checkbox" checked disabled> 配置本地代理路由规则</label></li>
<li><label><input type="checkbox" checked disabled> 部署图床工具</label></li>
<li><label><input type="checkbox" disabled> 完善卡牌游戏核心逻辑</label></li>
</ul>

当前站点尚未配置任务列表扩展，上面的勾选效果使用 HTML 展示。直接使用这段 Markdown 时，当前配置会保留 `[x]` 和 `[ ]` 文本。静态文档中的任务框通常仅用于展示，点击后是否能保存状态取决于平台功能。

### 3. YAML Frontmatter (文档属性)

Frontmatter 是文档最开头、由两行 `---` 包围的 YAML 元数据。在当前 VitePress 站点中，可以设置页面标题、描述及布局等属性；具体字段由站点工具决定。

**源码：**

```yaml
---
title: "Markdown 与 LaTeX 使用指南"
description: "常用 Markdown 语法与数学公式排版示例"
outline: [2, 3]
---
```

**生效结果：**

- `title`：设置页面标题，可用于浏览器标签页等位置；不等同于自动在正文插入一个一级标题。
- `description`：提供页面描述元数据。
- `outline: [2, 3]`：让本页大纲包含二级和三级标题。

Frontmatter 不作为正文显示。只有放在文件开头并被工具识别时才会作为元数据处理；写在代码块中只会展示源码。

### 4. 引用式链接与页内链接 (Reference Links & Anchors)

同一个地址多次出现时，可将链接文字与地址定义分开。引用定义的标签不作为正文显示。

**源码：**

```markdown
[访问 GitHub][github-home]，也可以[打开 GitHub 首页][github-home]。

[github-home]: https://github.com/ "GitHub 首页"
```

**展示效果：**

[访问 GitHub][github-home]，也可以[打开 GitHub 首页][github-home]。

[github-home]: https://github.com/ "GitHub 首页"

页内链接使用 `#锚点`。标题自动生成的锚点规则因工具而异；当前 VitePress 支持用 `{#标识}` 指定标题锚点。建议使用唯一的英文标识。

**源码：**

```markdown
[跳转到锚点示例](#anchor-example)

#### 锚点目标示例 {#anchor-example}
```

**展示效果：**

[跳转到锚点示例](#anchor-example)

#### 锚点目标示例 {#anchor-example}

### 5. 折叠内容 (Details)

允许 HTML 的渲染环境可以用 `<details>` 与 `<summary>` 创建折叠内容。标题放在 `<summary>` 内；内部的 Markdown 内容前后保留空行。禁用或过滤 HTML 的平台可能不会保留这种效果。

**源码：**

```markdown
<details>
<summary>查看补充说明</summary>

折叠区域中可以包含 **加粗文字** 和列表。

- 第一条说明
- 第二条说明

</details>
```

**展示效果：**

<details>
<summary>查看补充说明</summary>

折叠区域中可以包含 **加粗文字** 和列表。

- 第一条说明
- 第二条说明

</details>

### 6. VitePress 自定义容器 (Custom Containers)

当前站点支持 `:::` 容器。下面的 `info` 用于补充说明，标题可以自定义。这属于 VitePress 扩展，不能假定其他 Markdown 工具也支持。

**源码：**

```markdown
::: info 使用说明
代码块只展示源码；数学公式需要放在代码块外才能渲染。
:::
```

**展示效果：**

::: info 使用说明
代码块只展示源码；数学公式需要放在代码块外才能渲染。
:::

脚注、Mermaid 图和自动目录等语法也依赖额外支持。仅给代码块添加 `mermaid` 标识并不代表站点会把它渲染成图。

---

## 第三部分：Markdown 中的 LaTeX 使用方式

当前站点已启用 MathJax。其他环境需要先确认是否支持数学公式；Markdown 本身并不规定数学公式语法。下面的公式源码采用 `latex` 语言标识，放在代码块外的对应内容才会被渲染。

### 1. 行内公式 (Inline Math)

使用单个 `$` 包裹公式，使公式嵌入当前文本行。公式定界符内侧不要留空格。

**源码：**

```latex
一元二次方程的一般形式是 $ax^2 + bx + c = 0$，其中 $a \ne 0$。
```

**展示效果：**

一元二次方程的一般形式是 $ax^2 + bx + c = 0$，其中 $a \ne 0$。

### 2. 块级公式 (Display Math)

使用 `$$` 包裹公式，使其单独成块显示。建议将起止定界符各放一行，并在公式块前后留空行。

**源码：**

```latex
$$
f(x) = \int_{-\infty}^{\infty} \hat{f}(\xi)\,e^{2\pi i\xi x}\,d\xi
$$
```

**展示效果：**

$$
f(x) = \int_{-\infty}^{\infty} \hat{f}(\xi)\,e^{2\pi i\xi x}\,d\xi
$$

### 3. 分组、文字与定界符

`{...}` 用于将多个字符作为一个整体，花括号本身不显示。例如 `x^{n+1}` 中整个 `n+1` 都是指数；`x^n+1` 则表示先取幂再加一。普通说明文字使用 `\text{...}`；常用函数使用 `\sin`、`\cos`、`\log` 等命令，避免被当成多个变量相乘。

**源码：**

```latex
$$
x_{i+1}^{n+1},\qquad
\sin^2 x + \cos^2 x = 1,\qquad
\text{error} = \lvert y - \hat{y}\rvert
$$
```

**展示效果：**

$$
x_{i+1}^{n+1},\qquad
\sin^2 x + \cos^2 x = 1,\qquad
\text{error} = \lvert y - \hat{y}\rvert
$$

`\left` 与 `\right` 配对使用，使括号随内部表达式调整大小。需要显示花括号时写 `\{` 和 `\}`；范数可使用 `\lVert` 和 `\rVert`。

**源码：**

```latex
$$
\left(\frac{a+b}{c}\right)^2,\qquad
\left\{x \in \mathbb{R} \mid x > 0\right\},\qquad
\lVert \mathbf{v}\rVert
$$
```

**展示效果：**

$$
\left(\frac{a+b}{c}\right)^2,\qquad
\left\{x \in \mathbb{R} \mid x > 0\right\},\qquad
\lVert \mathbf{v}\rVert
$$

`\,`、`\quad`、`\qquad` 分别提供不同宽度的数学间距。数学模式中的普通空格通常不会按原样保留。

### 4. 多行公式与对齐 (Aligned Equations)

在块级公式中使用 `aligned` 环境。`&` 标记对齐位置，`\\` 表示换行；不要用 Markdown 的普通回车代替数学环境中的换行命令。

**源码：**

```latex
$$
\begin{aligned}
(a+b)^2 &= (a+b)(a+b) \\
        &= a^2 + 2ab + b^2
\end{aligned}
$$
```

**展示效果：**

$$
\begin{aligned}
(a+b)^2 &= (a+b)(a+b) \\
        &= a^2 + 2ab + b^2
\end{aligned}
$$

---


## 第四部分：LaTeX 常用符号参考

为了方便查阅，以下将 LaTeX 中最常用的数学、科学符号及字母进行分类梳理。

### 1. 希腊字母 (Greek Letters)

对下表中具有独立大写命令的希腊字母，可将命令的首字母大写，例如 `\gamma` 对应 `\Gamma`。与拉丁大写字母同形的通常直接输入相应字母，例如 `$A$`；不要据此推断每个小写命令都有对应的大写命令。

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
|绝对值|$\lvert x\rvert$|`\lvert x\rvert`|
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

多行结构使用 `\begin{...}` 与 `\end{...}` 配对包裹。在矩阵中，`&` 分隔列，`\\` 分隔行，每一行的列数应保持一致。

**矩阵源码：**

```latex
$$
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
$$
```

**展示效果：**

$$
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
$$

`bmatrix` 使用方括号，`pmatrix` 使用圆括号，`vmatrix` 使用单竖线，`matrix` 不添加外层括号。

**分段函数源码：**

```latex
$$
f(n) =
\begin{cases}
n/2,  & \text{if } n \text{ is even} \\
3n+1, & \text{if } n \text{ is odd}
\end{cases}
$$
```

**展示效果：**

$$
f(n) =
\begin{cases}
n/2,  & \text{if } n \text{ is even} \\
3n+1, & \text{if } n \text{ is odd}
\end{cases}
$$

这里 `cases` 中的 `&` 将表达式与条件分为两列；示例以整数 $n$ 为定义域，按奇偶性分类。

**方程组源码：**

```latex
$$
\begin{cases}
x + y = 3 \\
2x - y = 0
\end{cases}
$$
```

**展示效果：**

$$
\begin{cases}
x + y = 3 \\
2x - y = 0
\end{cases}
$$

### 8. 常用函数、字体与省略号

| 说明 | 效果 | LaTeX 代码 |
| --- | --- | --- |
| 三角函数 | $\sin x,\ \cos x,\ \tan x$ | `\sin x,\ \cos x,\ \tan x` |
| 对数 | $\log x,\ \ln x$ | `\log x,\ \ln x` |
| 最大值与最小值 | $\max_i x_i,\ \min_i x_i$ | `\max_i x_i,\ \min_i x_i` |
| 正体字符 | $\mathrm{d}x$ | `\mathrm{d}x` |
| 粗体拉丁字母 | $\mathbf{v}$ | `\mathbf{v}` |
| 黑板粗体 | $\mathbb{R},\ \mathbb{C}$ | `\mathbb{R},\ \mathbb{C}` |
| 花体字母 | $\mathcal{F}$ | `\mathcal{F}` |
| 基线省略号 | $x_1, x_2, \ldots, x_n$ | `x_1, x_2, \ldots, x_n` |
| 居中省略号 | $1 + 2 + \cdots + n$ | `1 + 2 + \cdots + n` |
| 竖直与对角省略号 | $\vdots,\ \ddots$ | `\vdots,\ \ddots` |

---

## 第五部分：常见排版问题

- **语法原样显示：** 先检查内容是否位于代码块中，再确认解析器是否支持该扩展。为代码块添加语言标识只影响源码展示。
- **后面的整段文字都变成代码：** 检查围栏是否闭合；展示代码围栏本身时，外层围栏应比内部更长。
- **列表嵌套失败：** 检查缩进是否与父项正文起始位置对齐，并检查标记后的空格。
- **段落没有换行：** 普通回车不一定产生强制换行；使用空行分段，或使用行尾反斜杠换行。
- **表格出现多余列：** 检查单元格中的竖线是否已转义；公式中的绝对值优先使用 `\lvert`、`\rvert`。
- **公式显示错误：** 检查 `$`、`$$`、花括号和 `\begin` / `\end` 是否配对，并确认所用命令受数学渲染器支持。
- **图片无法加载：** 检查路径大小写、相对目录、文件是否存在，以及远程地址是否直接指向可访问的图片。
- **本地预览与发布结果不同：** 使用站点自己的预览或构建命令验证，尤其检查图片、页内链接和扩展语法。
