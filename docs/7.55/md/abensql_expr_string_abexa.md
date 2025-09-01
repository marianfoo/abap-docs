  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_string](javascript:call_link\('abensql_string.htm'\)) → 

sql\_exp - Concatenations

This example demonstrates how strings are concatenated .in [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)).

Source Code

REPORT demo\_sql\_expr\_string.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    SELECT FROM spfli
           FIELDS concat( concat( carrid,'\_' ), connid ) AS key,
                  'from' && ' ' && cityfrom &&
                  ' to' && ' ' && cityto AS connection
           INTO TABLE @DATA(results).
    cl\_demo\_output=>display( results ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In a SELECT list, two columns of a result set of a query are created using concatenations of strings.

-   The first column key cannot be created using the operator [&&](javascript:call_link\('abensql_string.htm'\)). The column CONNID does not have the required data type and [cast expressions](javascript:call_link\('abensql_cast.htm'\)) cannot be used either. The built-in function [CONCAT](javascript:call_link\('abensql_string_func.htm'\)) is used instead.

-   The second column connection can be constructed from columns and literals using the operator [&&](javascript:call_link\('abensql_string.htm'\)).