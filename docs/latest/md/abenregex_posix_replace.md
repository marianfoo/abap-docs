  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_internal_obsolete.htm) →  [Obsolete Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharacter_string_obsolete.htm) →  [Obsolete Regular Expression Syntax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregular_expressions_obsolete.htm) →  [regex - POSIX Syntax (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_posix_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20POSIX%20regex%20-%20Replacement%20Patterns%20%28obsolete%29%2C%20ABENREGEX_POSIX_REPLACE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

POSIX regex - Replacement Patterns (obsolete)

In addition to [searching](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_posix_search.htm), the replacement of substrings in character strings is the most important application of regular expressions. When replacing, the occurrences of a search, that is, the substrings that match a regular expression, are replaced by one or more different character strings. In ABAP, the replacement is implemented using regular expressions with the addition [REGEX](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind_pattern.htm) of the statement [REPLACE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreplace.htm).

In contrast to regular text replacements, when regular expressions are used, operators can be used in the replacement text that refer to the relevant occurrence.

-   [Operators for Replacement Texts](#@@ITOC@@ABENREGEX_POSIX_REPLACE_1)
    -   [Addressing the Full Occurrence](#@@ITOC@@ABENREGEX_POSIX_REPLACE_2)
    -   [Addressing the Registers of Subgroups](#@@ITOC@@ABENREGEX_POSIX_REPLACE_3)
    -   [Addressing the Text Before the Occurrence](#@@ITOC@@ABENREGEX_POSIX_REPLACE_4)
    -   [Addressing the Text After the Occurrence](#@@ITOC@@ABENREGEX_POSIX_REPLACE_5)

Operators for Replacement Texts   

The following operators can be specified in the replacement text. These operators consist of the special characters $, &, \`, and ´. The special characters can be converted into literal characters by prefixing the escape character \\ or by using the addition [VERBATIM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreplace_options.htm) of the [REPLACE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreplace.htm) statement, where the latter improves the performance.

Addressing the Full Occurrence   

The operators $0 and $& can be specified in the replacement text as placeholders for the entire current occurrence.

Example

After replacement, text contains the content Yeah Yeah Yeah!.

DATA text TYPE string.
text = \`Yeah!\`.
REPLACE REGEX \`\\w+\` IN text WITH \`$0 $0 $&\` ##regex\_posix.

Addressing the Registers of Subgroups   

The operators $1, $2, $3, ... can be used in the replacement text as placeholders for the character strings stored in the registers of [subgroups](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_posix_syntax_operators.htm) for the current occurrence. If the n-th subgroup is not available, or it was not supplied with a value in the match, the corresponding operator $n is replaced by the empty character string.

Example

After replacement, text has the content Roll'n'Rock.

DATA text TYPE string.
text = \`Rock'n'Roll\`.
REPLACE REGEX \`(\\w+)(\\W\\w\\W)(\\w+)\` IN text WITH \`$3$2$1\` ##regex\_posix.

Addressing the Text Before the Occurrence   

The operator $\` can be used in the replacement text as a placeholder in front of the current occurrence. If multiple occurrences are replaced using REPLACE ALL OCCURRENCES, $\` contains the unchanged text from the beginning of the text to the start of the occurrence, for every occurrence.

Example

After replacement, text contains the content again and again.

DATA text TYPE string.
text = \`again and\`.
REPLACE REGEX 'and' IN text WITH '$0 $\`' ##regex\_posix.

Addressing the Text After the Occurrence   

The operator $' can be used in the replacement text as a placeholder for the entire text after the current occurrence.

Example

After replacement, text contains the content and again and.

DATA: text TYPE string.
text = \`again and\`.
REPLACE REGEX \`again \` IN text WITH \`$' $0\` ##regex\_posix.