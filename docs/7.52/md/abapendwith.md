---
title: "ENDWITH"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwith_shortref.htm) Syntax ENDWITH. Effect The Open SQL(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm 'Glossary Entry') statement ENDWITH closes a loop started using WITH(https://
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapendwith.htm"
abapFile: "abapendwith.htm"
keywords: ["select", "loop", "do", "try", "data", "internal-table", "abapendwith"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Reads](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_reading.htm) →  [WITH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwith.htm) → 

ENDWITH

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwith_shortref.htm)

Syntax

ENDWITH.

Effect

The [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") statement ENDWITH closes a loop started using [WITH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwith.htm).

Example

The example shows a WITH statement, whose main query creates a tabular result set. As the data is written into work area wa rather than to an internal table, a SELECT loop is opened, which must be closed with ENDWITH.

WITH
  +carriers AS ( SELECT FROM scarr
                        FIELDS carrid, carrname )
  SELECT FROM spfli AS s
           INNER JOIN +carriers AS c
             ON s~carrid = c~carrid
         FIELDS c~carrname, s~connid
         WHERE s~carrid = 'UA'
         INTO @DATA(wa)
         UP TO 10 ROWS.
  cl\_demo\_output=>write( wa ).
ENDWITH.
cl\_demo\_output=>display( ).