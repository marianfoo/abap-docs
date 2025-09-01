---
title: "CLEAR - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclear.htm) Syntax CLEAR dobj  WITH val IN CHARACTERBYTE  MODE  WITH NULL . Effect Initializes a data object dobj by assigning the type-dependent initial value(https://help.sap.com/doc
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclear_shortref.htm"
abapFile: "abapclear_shortref.htm"
keywords: ["do", "if", "try", "data", "abapclear", "shortref"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  C

CLEAR - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclear.htm)

Syntax

CLEAR dobj *\[* *{*WITH val *\[*IN *{*CHARACTER*|*BYTE *}* MODE*\]**}*
           *|* *{*WITH NULL*}* *\]*.

Effect

Initializes a data object dobj by assigning the type-dependent [initial value](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninitial_value_glosry.htm "Glossary Entry").

Additions

-   WITH val
    Fills the data object with the characters or bytes specified in val.
-   IN *{*CHARACTER*|*BYTE*}* MODE
    Specifies character string or byte string processing.
-   [WITH NULL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclear_with_null.htm)
    Obsolete: Replaces all the bytes in dobj with the hexadecimal value 0.