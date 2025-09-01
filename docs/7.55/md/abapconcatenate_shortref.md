---
title: "CONCATENATE - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapconcatenate.htm) Syntax CONCATENATE dobj1 dobj2 ...LINES OF itab INTO result IN CHARACTERBYTE MODE SEPARATED BY sep RESPECTING BLANKS. Effect Concatenates the contents of dobj1
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapconcatenate_shortref.htm"
abapFile: "abapconcatenate_shortref.htm"
keywords: ["do", "if", "internal-table", "abapconcatenate", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  C

CONCATENATE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapconcatenate.htm)

Syntax

CONCATENATE *{*dobj1 dobj2 ...*}**|**{*LINES OF itab*}*
            INTO result
            *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*
            *\[*SEPARATED BY sep*\]*
            *\[*RESPECTING BLANKS*\]*.

Effect

Concatenates the contents of dobj1 dobj2 ... or the lines of an internal table itab and assigns the result result.

Additions

-   IN *{*CHARACTER*|*BYTE*}* MODE
    Specifies character string or byte string processing.
    

-   SEPARATED BY sep
    Specifies a separator character or a separator byte in sep.
    

-   RESPECTING BLANKS
    Respects trailing blanks in dobj1 dobj2 ... or in the lines of itab.