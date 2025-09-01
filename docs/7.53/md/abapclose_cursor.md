---
title: "CLOSE CURSOR"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclose_cursor_shortref.htm) Syntax CLOSE CURSOR @dbcur. Effect This ABAP SQL(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm 'Glossary Entry') statement CLOSE CURSOR closes the datab
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclose_cursor.htm"
abapFile: "abapclose_cursor.htm"
keywords: ["select", "do", "while", "if", "try", "data", "abapclose", "cursor"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_reading.htm) →  [OPEN CURSOR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapopen_cursor.htm) → 

CLOSE CURSOR

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclose_cursor_shortref.htm)

Syntax

CLOSE CURSOR @dbcur.

Effect

This [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry") statement CLOSE CURSOR closes the [database cursor](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_cursor_glosry.htm "Glossary Entry")and initializes the cursor variable dbcur, with which the database cursor is linked. The cursor variable dbcur is a [host variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_host_variables.htm) that must be declared using the special predefined data type cursor and that was opened using the statement [OPEN CURSOR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapopen_cursor.htm) or was assigned an open cursor.

Notes

-   Since only a limited number of 17 database cursors can be open simultaneously in ABAP SQL, all database cursors no longer required should be closed.
    
-   Initializing a cursor variable using the statement CLEAR is not enough to close a database cursor. If the value of the cursor variable in the program is known, the database cursor can be further processed using [FETCH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfetch.htm).
    
-   Once a database cursor has been closed, it can no longer be accessed. Other cursor variables that were associated with the database cursor are not initialized, but become invalid and accessing them would raise a handleable exception.
    
-   The name of the host variable dbcur should be prefixed with the escape character @. If the associated statement [OPEN CURSOR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapopen_cursor.htm) is checked in accordance with the [strict mode](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_750.htm) from Release 7.50, the escape character @ must be specified.
    

Example

Closes a previously opened and used database cursor.

DATA wa TYPE scarr.
OPEN CURSOR WITH HOLD @DATA(dbcur) FOR
  SELECT \*
         FROM scarr.
WHILE sy-subrc = 0.
  FETCH NEXT CURSOR @dbcur INTO @wa.
ENDWHILE.
CLOSE CURSOR @dbcur.