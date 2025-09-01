---
title: "Internal Table as a Data Source of a SELECT Statement"
description: |
  This example demonstrates how an internal table is accessed using an ABAP SQL query(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm 'Glossary Entry'). Source Code REPORT demo_select_from_itab. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. C
version: "7.53"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_from_itab_abexa.htm"
abapFile: "abenselect_from_itab_abexa.htm"
keywords: ["select", "do", "try", "method", "class", "data", "types", "internal-table", "abenselect", "from", "itab", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_clauses.htm) →  [SELECT - FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm) →  [SELECT - FROM data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) →  [SELECT - FROM @itab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_itab.htm) → 

Internal Table as a Data Source of a SELECT Statement

This example demonstrates how an internal table is accessed using an ABAP SQL [query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry").

Source Code

REPORT demo\_select\_from\_itab.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF struct,
        key1 TYPE c LENGTH 1,
        key2 TYPE c LENGTH 1,
        num1 TYPE i,
        num2 TYPE i,
      END OF struct,
      itab TYPE SORTED TABLE OF struct
                WITH NON-UNIQUE KEY key1 key2.
    DATA(rnd) = cl\_abap\_random\_int=>create(
      seed = CONV i( sy-uzeit ) min = 1 max = 5 ).
    DATA(out) = cl\_demo\_output=>new( ).
    DATA(itab) = VALUE itab(
      FOR i = 1 UNTIL i > 100
        LET off1 = rnd->get\_next( ) - 1
            off2 = rnd->get\_next( ) - 1 IN
            ( key1 = sy-abcde+off1(1)
              key2 = sy-abcde+off2(1)
              num1 = rnd->get\_next( )
              num2 = rnd->get\_next( ) ) ).
    out->write( itab ).
    SELECT FROM @itab AS itab
           FIELDS key1,
                  key2,
                  SUM( num1 ) AS sum1,
                  SUM( num2 ) AS sum2,
                  SUM( num1 + num2 ) AS sum
           GROUP BY key1, key2
           ORDER BY key1, key2
           INTO TABLE @DATA(result)
           ##itab\_db\_select.
    out->write( result ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

An internal table is filled with random values and is used as a [data source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_itab.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) statement. Aggregate expressions, an SQL expression, GROUP BY, and ORDER BY are all used when doing this. The statement cannot, however, be executed on the AS ABAP since it does not meet the [restrictions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuffer_restrictions.htm) in force. For this example, the pragma ##itab\_db\_select is used to hide the corresponding syntax check warning.