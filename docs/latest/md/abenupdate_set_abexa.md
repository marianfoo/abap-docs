---
title: "UPDATE, Use of SET"
description: |
  The example demonstrates how the addition SET of the statement UPDATE is used. Source Code  Public class definition CLASS cl_demo_update DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS c
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenupdate_set_abexa.htm"
abapFile: "abenupdate_set_abexa.htm"
keywords: ["select", "insert", "update", "delete", "do", "if", "method", "class", "data", "abenupdate", "set", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Write Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_writing.htm) →  [UPDATE dbtab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate.htm) →  [UPDATE dbtab, source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate_source.htm) →  [UPDATE dbtab, set\_expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate_set_expression.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20UPDATE%2C%20Use%20of%20SET%2C%20ABENUPDATE_SET_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

UPDATE, Use of SET

The example demonstrates how the addition SET of the statement UPDATE is used.

Source Code   

\* Public class definition
CLASS cl\_demo\_update DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_update IMPLEMENTATION.
  METHOD main.
    CONSTANTS id TYPE demo\_update-id VALUE 'X'.
    DELETE FROM demo\_update WHERE id = @id.
    INSERT demo\_update FROM @( VALUE demo\_update( id = id
                                  col1 = 100
                                  col2 = 100
                                  col3 = 100
                                  col4 = 100 ) ).
    FINAL(num)   = 200.
    FINAL(diff)  = 10.
    FINAL(token) = \`col4 = col4 - demo\_update~col1\`.
    UPDATE demo\_update
           SET col1 = @num,
               col2 = col2 + @diff,
               col3 = col3 - @diff,
              (token)
           WHERE id = @id.
    SELECT SINGLE \*
           FROM demo\_update
           WHERE id = @id
           INTO @FINAL(wa).
    out->write( wa ).
  ENDMETHOD.
ENDCLASS.

Description   

It modifies the content of four columns of a row of the DDIC database table DEMO\_UPDATE:

-   The column COL1 is assigned the value 200.
-   The value of the column COL2 is raised by 10.
-   The value of the column COL3 is reduced by 10.
-   The value of the column COL4 is reduced dynamically by the value of the column COL1 as it was before the execution of the statement.