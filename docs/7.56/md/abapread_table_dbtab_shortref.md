---
title: "READ TABLE dbtab - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_table_dbtab.htm) Syntax READ TABLE dbtab WITH KEY key SEARCH FKEQFKGEGKEQGKGE VERSION vers. Effect Obsolete: Reads a single row from a database table or view dbtab. Additions -   WI
version: "7.56"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_table_dbtab_shortref.htm"
abapFile: "abapread_table_dbtab_shortref.htm"
keywords: ["do", "if", "try", "data", "abapread", "table", "dbtab", "shortref"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  R

READ TABLE dbtab - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_table_dbtab.htm)

Syntax

READ TABLE dbtab *\[*WITH KEY key*\]*
                 *\[*SEARCH *{*FKEQ*|*FKGE*|*GKEQ*|*GKGE*}**\]*
                 *\[*VERSION vers*\]*.

Effect

Obsolete: Reads a single row from a database table or view dbtab.

Additions

-   WITH KEY key
    Determines the search key using the content of the data object key. Otherwise, the content of the [table work area](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_work_area_glosry.htm "Glossary Entry") dbtab is used.
-   SEARCH *{*FKEQ*|*FKGE*|*GKEQ*|*GKGE*}*
    Determines the search mode in the database table.
-   VERSION vers
    Specifies a different database table in vers.