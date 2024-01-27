## z-index: calc(inifinity)の検証
下記のことがわかりました

- スタッキングコンテキストは有効なので、infinityにしてもfreezerは勝てない
- (infinity + 1) vs (infinity)は、(infinity)が勝つ（後に置いた要素が勝つ）

## 元ネタ
[君は真に理解しているか？z-indexとスタッキングコンテキストの関係](https://ics.media/entry/200609/)