  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [Regular Expressions](javascript:call_link\('abenregular_expressions.htm'\)) →  [Syntax of Regular Expressions](javascript:call_link\('abenregex_syntax.htm'\)) → 

Replace String

After [searching](javascript:call_link\('abenregex_search.htm'\)), the replacement of substrings in character strings is the most important application of regular expressions. When replacing, the occurrences of a search (or the substrings that match a regular expression), are replaced by one or more different character strings. In ABAP, the replacement is realized using regular expressions with the addition [REGEX](javascript:call_link\('abapfind_pattern.htm'\)) of the statement [REPLACE](javascript:call_link\('abapreplace.htm'\)).

In contrast to normal text replacements, when regular expressions are used, operators can be used in the replacement text that refer to the relevant occurrence.

-   [Operators for Replacement Texts](#abenregex-replace-1--------addressing-the-full-occurrence---@ITOC@@ABENREGEX_REPLACE_2)

-   [Addressing the Registers of Subgroups](#abenregex-replace-3--------addressing-the-text-before-the-occurrence---@ITOC@@ABENREGEX_REPLACE_4)

-   [Addressing the Text After the Occurrence](#@@ITOC@@ABENREGEX_REPLACE_5)

Operators for Replacement Texts

The following operators can be specified in the replacement text. These operators are made up of the special characters $, &, \`, and ´. The special characters can be made into literal characters using the prefix \\.

Addressing the Full Occurrence

The operators $0 and $& can be entered in the replacement text as placeholders for the full current occurrence.

Example

After replacement, text has the content "Yeah Yeah Yeah!".

DATA text TYPE string.
text = \`Yeah!\`.
REPLACE REGEX \`\\w+\` IN text WITH \`$0 $0 $&\`.

Addressing the Registers of Subgroups

The operators $1, $2, $3, ... can be used in the replacement text as placeholders for the character strings stored in the registers of [subgroups](javascript:call_link\('abenregex_syntax_operators.htm'\)) for the current occurrence. If the n-th subgroup is not available, or it is not supplied with a value in the match, the corresponding operator $n is replaced by the empty character string.

Example

After replacement, text has the content "Roll'n'Rock".

DATA text TYPE string.
text = \`Rock'n'Roll\`.
REPLACE REGEX \`(\\w+)(\\W\\w\\W)(\\w+)\` IN text WITH \`$3$2$1\`.

Addressing the Text Before the Occurrence

The operator $\` can be used in the replacement text as a placeholder before the current occurrence. If multiple occurrences are replaced using REPLACE ALL OCCURRENCES, $\` contains the unchanged text from the beginning of the text to the start of the occurrence, for every occurrence.

Example

After replacement, text has the content "again and again".

DATA text TYPE string.
text = \`again and\`.
REPLACE REGEX 'and' IN text WITH '$0 $\`'.

Addressing the Text After the Occurrence

The operator $' can be used in the replacement text as a placeholder after the current occurrence.

Example

After replacement, text has the content "and again and".

DATA: text TYPE string.
text = \`again and\`.
REPLACE REGEX \`again \` IN text WITH \`$' $0\`.