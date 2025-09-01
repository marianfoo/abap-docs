  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_agg](javascript:call_link\('abapselect_aggregate.htm'\)) →  [sql\_agg - Examples of Aggregate Expressions](javascript:call_link\('abensql_agg_expr_abexas.htm'\)) → 

sql\_agg - Aggregate Function ALLOW\_PRECISION\_LOSS

This example demonstrates the [aggregate function](javascript:call_link\('abensql_agg_func.htm'\)) ALLOW\_PRECISION\_LOSS.

Source Code

REPORT demo\_allow\_precision\_loss.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES result\_type TYPE p LENGTH 6 DECIMALS 2.
    DATA: allow\_precision\_loss\_result TYPE result\_type,
          normal\_sum\_result           TYPE result\_type.
    DELETE FROM demo\_expressions.
    INSERT demo\_expressions FROM TABLE @(
      VALUE #( ( id = 'X' dec2 = '2.119999' )
               ( id = 'Y' dec2 = '2.118888' )
               ( id = 'A' dec2 = '1.13999' )
               ( id = 'Z' dec2 = '2.668888' )
      ) ).
    SELECT SUM( CAST( dec2 AS DEC( 10,2 ) ) ) AS sum1
    FROM demo\_expressions INTO @normal\_sum\_result.
    SELECT allow\_precision\_loss( SUM( CAST( dec2 AS DEC( 10,2 ) ) ) )
           AS sum1
    FROM demo\_expressions INTO @allow\_precision\_loss\_result.
    cl\_demo\_output=>write\_data( allow\_precision\_loss\_result ).
    cl\_demo\_output=>write\_data( normal\_sum\_result ).
    cl\_demo\_output=>display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Sums up decimal values with five or more decimal places and converts them to a decimal number with two decimal places. The result of the aggregate expression differs when using ALLOW\_PRECISION\_LOSS.

In this example, ALLOW\_PRECISION\_LOSS first sums up all decimals and then converts them, which is why it performs fewer operations. Without ALLOW\_PRECISION\_LOSS, each decimal is converted individually and then added up.