---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_sql_expr_null DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_sql_expr_null IMPLEMENTATION. METHOD main. TYPES: BEGIN OF result, carr
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_expr_null_abexa.htm"
abapFile: "abensql_expr_null_abexa.htm"
keywords: ["select", "delete", "do", "if", "case", "try", "method", "class", "data", "types", "abensql", "expr", "null", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_null](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_null.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_exp%20-%20Null%20Expression%2C%20ABENSQL_EXPR_NULL_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_exp - Null Expression

This example demonstrates [null expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_null.htm) in ABAP SQL.

Source Code   

\* Public class definition
CLASS cl\_demo\_sql\_expr\_null DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_sql\_expr\_null IMPLEMENTATION.
  METHOD main.
    TYPES: BEGIN OF result,
             carrid   TYPE scarr-carrid,
             distid   TYPE spfli-distid,
             distance TYPE string,
             null     TYPE string,
           END OF result.
    DATA result TYPE TABLE OF result
                WITH NON-UNIQUE SORTED KEY skey COMPONENTS table\_line.
    SELECT FROM scarr
             LEFT OUTER JOIN spfli
               ON scarr~carrid = spfli~carrid
           FIELDS scarr~carrid,
                  distid,
                  CASE distid
                     WHEN 'MI' THEN 'Miles'
                     WHEN 'KM' THEN 'Kilometers'
                     ELSE NULL
                  END AS distance,
                  CASE distid
                     WHEN 'MI' THEN NULL
                     WHEN NULL THEN 'Kilometers'
                     ELSE NULL
                  END AS null
           ORDER BY scarr~carrid
           INTO TABLE @result.
    DELETE ADJACENT DUPLICATES FROM result.
    out->write( result ).
  ENDMETHOD.
ENDCLASS.

Description   

In the SELECT list, two [simple case distinctions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_simple_case.htm) are made which both explicitly specify the null expression NULL after ELSE.

-   The column distance returns the result of all matches and if there is no match returns the null value.
-   The column null returns an unknown result for the first comparison, which is true, and the null value for the second comparison, which is not true.

The [null value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_value_glosry.htm "Glossary Entry") is converted to the type-dependent [initial value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninitial_value_glosry.htm "Glossary Entry") in both cases when passed to the result table.