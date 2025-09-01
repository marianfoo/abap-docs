---
title: "SORT itab - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsort_itab.htm) Syntax SORT itab STABLE   ASCENDINGDESCENDING AS TEXT BY comp1 ASCENDINGDESCENDING AS TEXT comp2 ASCENDINGDESCENDING AS TEXT
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsort_itab_shortref.htm"
abapFile: "abapsort_itab_shortref.htm"
keywords: ["do", "if", "try", "internal-table", "abapsort", "itab", "shortref"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  S

SORT itab - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsort_itab.htm)

Syntax

SORT itab *\[*STABLE*\]*
          *{* *{* *\[*ASCENDING*|*DESCENDING*\]*
              *\[*AS TEXT*\]*
              *\[*BY *{*comp1 *\[*ASCENDING*|*DESCENDING*\]* *\[*AS TEXT*\]**}*
                  *{*comp2 *\[*ASCENDING*|*DESCENDING*\]* *\[*AS TEXT*\]**}*
                  ... *\]* *}*
          *|* *{* *\[*BY (otab)*\]* *}*
          *|* *{* *\[*BY expr*\]* *}* *}*.

Effect

Sorts an internal table itab by the primary table key or a specified sort key.

Additions

-   STABLE
    Ensures stable sorting by preserving the relative order of non-affected rows.
    
-   ASCENDING
    Sorts in ascending order.
    
-   DESCENDING
    Sorts in descending order.
    
-   AS TEXT
    Sorts text-like components in accordance with the [locale](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlocale_glosry.htm "Glossary Entry") of the current [text environment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_environment_glosry.htm "Glossary Entry").
    
-   BY comp1 ... comp2 ...
    Sorts by the specified components comp1, comp2, ... instead of by the primary table key.
    
-   BY (otab)
    Sorts by the order specified in the table otab of type ABAP\_SORTORDER\_TAB instead of by the primary table key.
    
-   BY expr
    Sorts by an internal table returned by an expression.