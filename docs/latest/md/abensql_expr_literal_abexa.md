---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_sql_expr_literal DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_sql_expr_literal IMPLEMENTATION. METHOD main. DATA carrier TYPE scar
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_expr_literal_abexa.htm"
abapFile: "abensql_expr_literal_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abensql", "expr", "literal", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_elem](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_elem.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_exp%20-%20Constant%20in%20SELECT%20List%2C%20ABENSQL_EXPR_LITERAL_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

sql\_exp - Constant in SELECT List

This example demonstrates one way to use a constant value in the SELECT list.

Source Code   

\* Public class definition
CLASS cl\_demo\_sql\_expr\_literal DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_sql\_expr\_literal IMPLEMENTATION.
  METHOD main.
    DATA carrier TYPE scarr-carrid.
    cl\_demo\_input=>new( )->request( CHANGING field = carrier ).
    SELECT SINGLE @abap\_true
           FROM scarr
           WHERE carrid = @carrier
           INTO @FINAL(exists).
    IF exists = abap\_true.
      out->write(
        |Carrier { carrier } exists in SCARR| ).
    ELSE.
      out->write(
        |Carrier { carrier } does not exist in SCARR| ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Description   

It is to be determined whether a row exists for a WHERE condition, regardless of the content of the row. A constant is specified to make specifying a column of the database and transporting it unnecessary. The target object exists is created using an inline declaration.