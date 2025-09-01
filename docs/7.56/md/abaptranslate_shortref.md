  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  T

TRANSLATE - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptranslate.htm)

Syntax

TRANSLATE dobj *{*TO *{*UPPER*|*LOWER*}* CASE*}*
             *|* *{*USING mask*}*.

Effect

Translates the content of a data object dobj.

Additions

-   [TO *{*UPPER*|*LOWER*}* CASE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptranslate.htm)
    Translates all lowercase letters to uppercase letters, or vice versa.
-   [USING mask](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptranslate.htm)
    Translates characters in accordance with the rule specified by character pairs in the data object mask.