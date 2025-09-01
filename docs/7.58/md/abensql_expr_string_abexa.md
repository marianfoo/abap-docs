  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_string](javascript:call_link\('abensql_string.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_exp%20-%20Concatenations%2C%20ABENSQL_EXPR_STRING_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_exp - Concatenations

This example demonstrates how strings are concatenated in [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)).

Source Code   

\* Public class definition
CLASS cl\_demo\_sql\_expr\_string DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_sql\_expr\_string IMPLEMENTATION.
  METHOD main.
    SELECT FROM spfli
           FIELDS concat( concat( carrid,'\_' ), connid ) AS key,
                  'from' && ' ' && cityfrom &&
                  ' to' && ' ' && cityto AS connection
           INTO TABLE @FINAL(results).
    out->write( results ).
  ENDMETHOD.
ENDCLASS.

Description   

In a SELECT list, two columns of a result set of a query are created using concatenations of strings.

-   The first column key cannot be created using the operator [&&](javascript:call_link\('abensql_string.htm'\)). The column CONNID does not have the required data type and [cast expressions](javascript:call_link\('abensql_cast.htm'\)) cannot be used either. The built-in function [CONCAT](javascript:call_link\('abensql_string_func.htm'\)) is used instead.
-   The second column connection can be constructed from columns and literals using the operator [&&](javascript:call_link\('abensql_string.htm'\)).