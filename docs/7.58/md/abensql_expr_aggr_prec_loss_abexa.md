  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_agg](javascript:call_link\('abapselect_aggregate.htm'\)) →  [sql\_agg - Examples of Aggregate Expressions](javascript:call_link\('abensql_agg_expr_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_agg%20-%20Aggregate%20Function%20ALLOW_PRECISION_LOSS%2C%20ABENSQL_EXPR_AGGR_PREC_LOSS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
%20for%20improvement:)

sql\_agg - Aggregate Function ALLOW\_PRECISION\_LOSS

This example demonstrates the [aggregate function](javascript:call_link\('abensql_agg_func.htm'\)) ALLOW\_PRECISION\_LOSS.

Source Code   

\* Public class definition
CLASS cl\_demo\_allow\_precision\_loss DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_allow\_precision\_loss IMPLEMENTATION.
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
    out->write\_data( allow\_precision\_loss\_result ).
    out->write\_data( normal\_sum\_result ).
  ENDMETHOD.
ENDCLASS.

Description   

Sums up decimal values with five or more decimal places and converts them to a decimal number with two decimal places. The result of the aggregate expression differs when using ALLOW\_PRECISION\_LOSS.

In this example, ALLOW\_PRECISION\_LOSS first sums up all decimals and then converts them, which is why it performs fewer operations. Without ALLOW\_PRECISION\_LOSS, each decimal is converted individually and then added up.