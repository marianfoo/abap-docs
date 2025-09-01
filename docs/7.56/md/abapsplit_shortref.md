---
title: "SPLIT - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsplit.htm) Syntax SPLIT dobj AT sep INTO  result1 result2 ...  TABLE result_tab  IN CHARACTERBYTE MODE. Effect Splits a character string or byte string dobj. Additions -   AT sep Specifi
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsplit_shortref.htm"
abapFile: "abapsplit_shortref.htm"
keywords: ["do", "if", "internal-table", "abapsplit", "shortref"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  S

SPLIT - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsplit.htm)

Syntax

SPLIT dobj AT sep INTO
      *{* *{*result1 result2 ...*}* *|* *{*TABLE result\_tab*}* *}*
      *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*.

Effect

Splits a character string or byte string dobj.

Additions

-   AT sep
    Specifies the separator sequence sep where the split is made.
-   INTO *{* *{*result1 result2 ...*}* *|* *{*TABLE result\_tab*}* *}*
    Specifies the target fields either as a list result1 result2 ... or as lines of the internal table result\_tab.
-   IN *{*CHARACTER*|*BYTE*}* MODE
    Specifies character string or byte string processing.