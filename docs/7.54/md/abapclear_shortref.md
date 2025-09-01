  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

CLEAR - Quick reference

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