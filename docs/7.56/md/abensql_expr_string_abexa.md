  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_string](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_string.htm) → 

sql\_exp - Concatenations

This example demonstrates how strings are concatenated .in [SQL expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm).

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

-   The first column key cannot be created using the operator [&&](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_string.htm). The column CONNID does not have the required data type and [cast expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_cast.htm) cannot be used either. The built-in function [CONCAT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_string_func.htm) is used instead.
-   The second column connection can be constructed from columns and literals using the operator [&&](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_string.htm).