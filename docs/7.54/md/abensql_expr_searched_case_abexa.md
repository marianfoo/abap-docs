  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_case](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_case.htm) →  [sql\_exp - sql\_searched\_case](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_searched_case.htm) → 

SQL Expressions, Complex CASE

This example demonstrates complex case distinctions in [SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm).

Source Code

REPORT demo\_sql\_expr\_searched\_case.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    CONSTANTS: both\_l  TYPE c LENGTH 20 VALUE 'Both < 50',
               both\_gt TYPE c LENGTH 20 VALUE 'Both >= 50',
               others  TYPE c LENGTH 20 VALUE 'Others'.
    DATA(rnd) = cl\_abap\_random\_int=>create(
      seed = CONV i( sy-uzeit ) min = 1 max = 100 ).
    DELETE FROM demo\_expressions.
    INSERT demo\_expressions FROM TABLE @( VALUE #(
      FOR i = 0 UNTIL i > 9
      ( id = i
        num1 = rnd->get\_next( )
        num2 = rnd->get\_next( ) ) ) ).
    SELECT num1, num2,
           CASE WHEN num1 <  50 AND num2 <  50 THEN @both\_l
                WHEN num1 >= 50 AND num2 >= 50 THEN @both\_gt
                ELSE @others
           END AS group
           FROM demo\_expressions
           ORDER BY group
           INTO TABLE @DATA(results).
    cl\_demo\_output=>write( results ).
    LOOP AT results ASSIGNING FIELD-SYMBOL(<wa>)
                    GROUP BY ( key = <wa>-group size = GROUP SIZE )
                    INTO DATA(group).
      cl\_demo\_output=>write( group ).
    ENDLOOP.
    cl\_demo\_output=>display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In a list of columns specified after SELECT, [CASE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_simple_case.htm) is used to make a complex case distinction for the content of two columns. The result is a string taken from a [host variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_variables.htm). Using the alias name defined after AS, the result is assigned to the column with the same name in an internal table declared inline, results. [GROUP BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_group_by.htm) is used to group this table by the results column.