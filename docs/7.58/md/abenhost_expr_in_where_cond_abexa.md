---
title: "Host Expressions, Use in the WHERE Condition"
description: |
  This example demonstrates host expressions(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_expressions.htm) on the right side of a relational expression(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_stmt_logexp.htm) of a WHERE(https://help
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhost_expr_in_where_cond_abexa.htm"
abapFile: "abenhost_expr_in_where_cond_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abenhost", "expr", "where", "cond", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Operands sql\_elem](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_operands.htm) →  [ABAP SQL - @( expr )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_expressions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Host%20Expressions%2C%20Use%20in%20the%20WHERE%20Condition%2C%20ABENHOST_EXPR_IN_WHERE_COND_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestio
n%20for%20improvement:)

Host Expressions, Use in the WHERE Condition

This example demonstrates [host expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_expressions.htm) on the right side of a [relational expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_stmt_logexp.htm) of a [WHERE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwhere.htm) condition.

Source Code   

\* Public class definition
CLASS cl\_demo\_select\_where\_tab\_exp DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    DATA carriers TYPE HASHED TABLE OF scarr
              WITH UNIQUE KEY carrid
              WITH NON-UNIQUE SORTED KEY name COMPONENTS carrname.
    METHODS constructor.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_select\_where\_tab\_exp IMPLEMENTATION.
  METHOD main.
    DATA name TYPE scarr-carrname VALUE 'United Airlines'.
    cl\_demo\_input=>new( )->request( CHANGING field = name ).
    SELECT carrid, connid, cityfrom, cityto
           FROM spfli
           WHERE carrid =
             @( VALUE spfli-carrid( carriers\[ KEY name
                                              carrname = name \]-carrid
                                              OPTIONAL ) )
           INTO TABLE @FINAL(result).
    out->write( result ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    SELECT \*
           FROM scarr
           INTO TABLE @carriers.
  ENDMETHOD.
ENDCLASS.

Description   

A table expression is evaluated as a host expression on the right side of an [SQL condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_stmt_logexp.htm). The result is used for the comparison with the column specified on the left side.