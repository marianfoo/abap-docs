  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - SQL Operands sql\_elem](javascript:call_link\('abensql_operands.htm'\)) →  [ABAP SQL - @( expr )](javascript:call_link\('abenopen_sql_host_expressions.htm'\)) → 

Host Expressions, Use in the WHERE Condition

This example demonstrates [host expressions](javascript:call_link\('abenopen_sql_host_expressions.htm'\)) on the right side of a [relational expression](javascript:call_link\('abenwhere_logexp.htm'\)) of a [WHERE](javascript:call_link\('abenwhere_logexp.htm'\)) condition.

Source Code

REPORT demo\_select\_where\_tab\_exp.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA carriers TYPE HASHED TABLE OF scarr
                  WITH UNIQUE KEY carrid
                  WITH NON-UNIQUE SORTED KEY name COMPONENTS carrname.
    CLASS-METHODS:
      class\_constructor,
      main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA name TYPE scarr-carrname VALUE 'United Airlines'.
    cl\_demo\_input=>request( CHANGING field = name ).
    SELECT carrid, connid, cityfrom, cityto
           FROM spfli
           WHERE carrid =
             @( VALUE spfli-carrid( carriers\[ KEY name
                                              carrname = name \]-carrid
                                              OPTIONAL ) )
           INTO TABLE @DATA(result).
    cl\_demo\_output=>display( result ).  ENDMETHOD.
  METHOD class\_constructor.
    SELECT \*
           FROM scarr
           INTO TABLE carriers.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

A table expression is evaluated as a host expression on the right side of an [SQL condition](javascript:call_link\('abenwhere_logexp.htm'\)). The result is used for the comparison with the column specified on the left side.