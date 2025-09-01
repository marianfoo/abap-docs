---
title: "Obsolete Syntax"
description: |
  SORT(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsort_itab.htm) itab BY <fs1> <fs2> ... Effect In internal tables with header lines(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenheader_line_glosry.htm 'Glossary Entry'), field symbols can also be specified as a
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsort_itab_obsolete.htm"
abapFile: "abapsort_itab_obsolete.htm"
keywords: ["do", "if", "try", "catch", "data", "internal-table", "field-symbol", "abapsort", "itab", "obsolete"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_internal_obsolete.htm) →  [Obsolete Internal Table Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SORT itab BY field_symbol, ABAPSORT_ITAB_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

SORT itab BY field\_symbol

Obsolete Syntax

[SORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsort_itab.htm) itab BY <fs1> <fs2> ...

Effect

In internal tables with [header lines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenheader_line_glosry.htm "Glossary Entry"), field symbols can also be specified as a sort criterion for comp1 comp2 ... after [SORT ... BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsort_itab.htm). If a component of the header line or the entire header line is assigned to the field symbol when the statement is executed, the table is sorted by the corresponding component or the entire line. If no data object is assigned to a field symbol, the specification is ignored. If a different data object is assigned to a field symbol, an uncatchable exception is raised.

Hint

Instead of using field symbols for dynamic component specifications, it is best to specify parenthesized character-like data objects or an internal table, which contain the name of the components.

Bad Example

name = 'ITAB-COL1'.
ASSIGN (name) TO <fs>.
SORT itab BY <fs>.

Good Example

name = 'COL1'.
SORT itab BY (name).