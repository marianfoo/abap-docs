---
title: "COLLECT - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcollect.htm) Syntax COLLECT wa INTO itab  ASSIGNING <fs> CASTING  REFERENCE INTO dref . Effect Inserts work areas wa as lines in an internal table itab. Here, the primary table key already exi
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcollect_shortref.htm"
abapFile: "abapcollect_shortref.htm"
keywords: ["insert", "do", "if", "try", "data", "internal-table", "field-symbol", "abapcollect", "shortref"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  C

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: COLLECT, ABAPCOLLECT_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestio
n for improvement:)

COLLECT - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcollect.htm)

Syntax

COLLECT wa INTO itab *{* *\[*ASSIGNING <fs> *\[*CASTING*\]**\]*
                     *|* *\[*REFERENCE INTO dref*\]* *}*.

Effect

Inserts work areas wa as lines in an internal table itab. Here, the primary table key already exists for some lines and the values of the remaining components are added to the values of the existing lines.

Additions   

-   [ASSIGNING <fs> *\[*CASTING*\]*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcollect_itab_result.htm)
    Assigns the inserted line to the field symbol <fs>. A [casting](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencast_casting_glosry.htm "Glossary Entry") can be performed here.
-   [REFERENCE INTO dref](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcollect_itab_result.htm)
    The data reference in dref is set to the inserted line.