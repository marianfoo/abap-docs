---
title: "COLLECT - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcollect.htm) Syntax COLLECT wa INTO itab  ASSIGNING <fs> CASTING  REFERENCE INTO dref . Effect Inserts work areas wa as rows in an internal table itab. Here, the primary table key already exis
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcollect_shortref.htm"
abapFile: "abapcollect_shortref.htm"
keywords: ["insert", "do", "try", "data", "internal-table", "field-symbol", "abapcollect", "shortref"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  C

COLLECT - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcollect.htm)

Syntax

COLLECT wa INTO itab *{* *\[*ASSIGNING <fs> *\[*CASTING*\]**\]*
                     *|* *\[*REFERENCE INTO dref*\]* *}*.

Effect

Inserts work areas wa as rows in an internal table itab. Here, the primary table key already exists for some rows and the values of the remaining components are added to the values of the existing rows.

Additions

-   [ASSIGNING <fs> *\[*CASTING*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcollect_itab_result.htm)
    Assigns the inserted row to the field symbol <fs>. A [casting](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencast_casting_glosry.htm "Glossary Entry") can be performed here.
    
-   [REFERENCE INTO dref](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcollect_itab_result.htm)
    The data reference in dref is set to the inserted row.