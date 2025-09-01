  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  D

DESCRIBE FIELD - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdescribe_field.htm)

Syntax

DESCRIBE FIELD dobj
  *\[*TYPE typ *\[*COMPONENTS com*\]**\]*
  *\[*LENGTH ilen IN *{*BYTE*|*CHARACTER*}* MODE*\]*
  *\[*DECIMALS dec*\]*
  *\[*OUTPUT-LENGTH olen*\]*
  *\[*HELP-ID hlp*\]*
  *\[*EDIT MASK mask*\]*.

Effect

Determines the attributes of a data object dobj.

Additions

-   TYPE typ *\[*COMPONENTS com*\]*
    Returns the data type in typ and the number of components in com.
-   LENGTH ilen IN *{*BYTE*|*CHARACTER*}* MODE
    Returns the length in bytes or characters in ilen.
-   DECIMALS dec
    Returns the number of [decimal places](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendecimal_place_glosry.htm "Glossary Entry") in dec.
-   OUTPUT-LENGTH olen
    Returns the output length on the [screens](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_glosry.htm "Glossary Entry") in olen.
-   HELP-ID hlp
    Returns the name of the data element in ABAP Dictionary referred to by the type of dobj hlp.
-   EDIT MASK mask
    Returns the name of the conversion routine in ABAP Dictionary
    that is assigned to the type of dobj in mask.