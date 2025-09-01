  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  T

TRANSLATE - Short Reference

[Reference](javascript:call_link\('abaptranslate.htm'\))

Syntax

TRANSLATE dobj *{*TO *{*UPPER*|*LOWER*}* CASE*}*
             *|* *{*USING mask*}*.

Effect

Translates the content of a data object dobj.

Additions

-   [TO *{*UPPER*|*LOWER*}* CASE](javascript:call_link\('abaptranslate.htm'\))
    Translates all lowercase letters to uppercase letters, or vice versa.
-   [USING mask](javascript:call_link\('abaptranslate.htm'\))
    Translates characters in accordance with the rule specified by character pairs in the data object mask.