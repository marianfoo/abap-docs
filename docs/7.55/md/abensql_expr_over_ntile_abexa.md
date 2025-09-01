---
title: "Source Code"
description: |
  REPORT demo_select_over_ntile. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: class_constructor, main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. SELECT name, salary, NTILE( 5 ) OVER( ORDER BY salary ) AS ntile FROM demo_employees INTO TABLE @DATA(result). cl_demo_output=>displa
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_expr_over_ntile_abexa.htm"
abapFile: "abensql_expr_over_ntile_abexa.htm"
keywords: ["select", "insert", "delete", "do", "try", "method", "class", "data", "abensql", "expr", "over", "ntile", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_win](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_over.htm) →  [sql\_win - Examples of Window Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_expr_over_abexas.htm) → 

sql\_win - Window Function NTILE

This example demonstrates the [window expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_over.htm) with the [window function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwindow_function_glosry.htm "Glossary Entry") [NTILE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_win_func.htm).

Source Code

REPORT demo\_select\_over\_ntile.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    SELECT name,
           salary,
           NTILE( 5 ) OVER( ORDER BY salary ) AS ntile
           FROM demo\_employees
           INTO TABLE @DATA(result).
    cl\_demo\_output=>display( result ).  ENDMETHOD.
  METHOD class\_constructor.
    DELETE FROM demo\_employees.
    INSERT demo\_employees FROM TABLE @(
       VALUE #( ( name = 'Lothar Sudhoff' salary = '1354.00' )
       ( name = 'Christa Martin' salary = '3247.00' )
       ( name = 'Illya Gueldenpfennig' salary = '7453.00' )
       ( name = 'Johannes Legrand' salary = '1468.00' )
       ( name = 'Johann Buchholm' salary = '3245.00' )
       ( name = 'Holm Trensch' salary = '2324.00' )
       ( name = 'Laura Lindwurm' salary = '3247.00' )
       ( name = 'Thilo Eichbaum' salary = '5436.00' )
       ( name = 'Amelie Babilon' salary = '3485.00' )
       ( name = 'Ulla Babilon' salary = '5489.00' )
       ( name = 'Anna Picard' salary = '7453.00' )
       ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

All employees from the DEMO\_EMPLOYEES table are sorted by their salary, starting with the lowest, and distributed into five salary groups by the NTILE function. The first group, group 1, has one entry more than the other four groups, as the number of employees (11) cannot be distributed equally into the number of buckets (five in this example).