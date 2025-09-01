---
title: "SORT itab - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsort_itab.htm) Syntax SORT itab STABLE   ASCENDINGDESCENDING AS TEXT BY comp1 ASCENDINGDESCENDING AS TEXT comp2 ASCENDINGDESCENDING AS TEXT
version: "7.58"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsort_itab_shortref.htm"
abapFile: "abapsort_itab_shortref.htm"
keywords: ["do", "if", "try", "internal-table", "abapsort", "itab", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  S

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SORT%20itab%2C%20ABAPSORT_ITAB_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SORT itab - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsort_itab.htm)

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
    Ensures stable sorting by preserving the relative order of non-affected lines.
-   ASCENDING
    Sorts in ascending order.
-   DESCENDING
    Sorts in descending order.
-   AS TEXT
    Sorts text-like components in accordance with the [locale](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlocale_glosry.htm "Glossary Entry") of the current [text environment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_environment_glosry.htm "Glossary Entry").
-   BY comp1 ... comp2 ...
    Sorts by the specified components comp1, comp2, ... instead of by the primary table key.
-   BY (otab)
    Sorts by the order specified in the table otab of type ABAP\_SORTORDER\_TAB instead of by the primary table key.
-   BY expr
    Sorts by an internal table returned by an expression.