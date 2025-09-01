  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

CLEAR - Short Reference

[Reference](javascript:call_link\('abapclear.htm'\))

Syntax

CLEAR dobj *\[* *{*WITH val *\[*IN *{*CHARACTER*|*BYTE *}* MODE*\]**}*
           *|* *{*WITH NULL*}* *\]*.

Effect

Initializes a data object dobj by assigning the type-dependent [initial value](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry").

Additions

-   WITH val
    Fills the data object with the characters or bytes specified in val.
-   IN *{*CHARACTER*|*BYTE*}* MODE
    Specifies character string or byte string processing.
-   [WITH NULL](javascript:call_link\('abapclear_with_null.htm'\))
    Obsolete: Replaces all the bytes in dobj with the hexadecimal value 0.