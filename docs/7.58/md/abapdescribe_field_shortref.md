---
title: "DESCRIBE FIELD - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdescribe_field.htm) Syntax DESCRIBE FIELD dobj TYPE typ COMPONENTS com LENGTH ilen IN BYTECHARACTER MODE DECIMALS dec OUTPUT-LENGTH olen HELP-ID hlp EDIT MASK mask
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdescribe_field_shortref.htm"
abapFile: "abapdescribe_field_shortref.htm"
keywords: ["do", "if", "try", "data", "abapdescribe", "field", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  D

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DESCRIBE%20FIELD%2C%20ABAPDESCRIBE_FIELD_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DESCRIBE FIELD - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdescribe_field.htm)

Syntax

DESCRIBE FIELD dobj
  *\[*TYPE typ *\[*COMPONENTS com*\]**\]*
  *\[*LENGTH ilen IN *{*BYTE*|*CHARACTER*}* MODE*\]*
  *\[*DECIMALS dec*\]*
  *\[*OUTPUT-LENGTH olen*\]*
  *\[*HELP-ID hlp*\]*
  *\[*EDIT MASK mask*\]*.

Effect

Determines the properties of a data object dobj.

Additions   

-   TYPE typ *\[*COMPONENTS com*\]*
    Returns the data type in typ and the number of components in com.
-   LENGTH ilen IN *{*BYTE*|*CHARACTER*}* MODE
    Returns the length in bytes or characters in ilen.
-   DECIMALS dec
    Returns the number of [decimal places](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendecimal_place_glosry.htm "Glossary Entry") in dec.
-   OUTPUT-LENGTH olen
    Returns the output length on the [screens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_glosry.htm "Glossary Entry") in olen.
-   HELP-ID hlp
    Returns the name of the data element in ABAP Dictionary referred to by the type of dobj hlp.
-   EDIT MASK mask
    Returns the name of the [conversion exit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_exit_glosry.htm "Glossary Entry") that is assigned to the type of dobj in mask.