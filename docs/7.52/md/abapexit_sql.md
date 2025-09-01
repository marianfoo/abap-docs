---
title: "EXEC SQL - EXIT FROM SQL"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexit_from_sql_shortref.htm) Obsolete Syntax EXIT FROM SQL. Effect This statement, forbidden in classes, is only executed during processing of subroutines called using the obsolete addition PERFORMING(https://help.sap.
version: "7.52"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexit_sql.htm"
abapFile: "abapexit_sql.htm"
keywords: ["do", "if", "class", "data", "abapexit", "sql"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_storage_obsolete.htm) →  [Obsolete Database Access](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_access_obsolete.htm) →  [Obsolete Cursor Processing in Native SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexec_sql_cursor_implicit.htm) → 

EXEC SQL - EXIT FROM SQL

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexit_from_sql_shortref.htm)

Obsolete Syntax

EXIT FROM SQL.

Effect

This statement, forbidden in classes, is only executed during processing of subroutines called using the obsolete addition [PERFORMING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexec_implicit.htm) of the statement [EXEC SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexec.htm). Otherwise it is ignored.

The statement terminates [implicit cursor processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexec_implicit.htm) after the current subroutine has finished. Processing of the called ABAP program is resumed after ENDEXEC, where sy-dbcnt contains the number of rows read up until that point and sy-subrc is set to the value 4. If an overflow occurs because the number or rows is greater than 2,147,483,647, sy-dbcnt is set to -1.