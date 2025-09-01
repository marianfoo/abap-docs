---
title: "SELECT, Dynamic ORDER-BY Clause"
description: |
  This example demonstrates how sorting is specified dynamically for SELECT. Source Code REPORT demo_select_dynamic_order_by. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. TYPES flag TYPE c LENGTH 1. DATA: flag_tab  TYPE TABLE OF flag
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynamic_order_by_abexa.htm"
abapFile: "abendynamic_order_by_abexa.htm"
keywords: ["select", "loop", "do", "if", "try", "catch", "method", "class", "data", "types", "abendynamic", "order", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_clauses.htm) →  [SELECT - ORDER BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaporderby_clause.htm) → 

SELECT, Dynamic ORDER-BY Clause

This example demonstrates how sorting is specified dynamically for SELECT.

Source Code

REPORT demo\_select\_dynamic\_order\_by.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES flag TYPE c LENGTH 1.
    DATA: flag\_tab  TYPE TABLE OF flag WITH EMPTY KEY,
          order\_by  TYPE string,
          spfli\_tab TYPE TABLE OF spfli WITH EMPTY KEY.
    "Input screen for columns
    DATA(components) = CAST cl\_abap\_structdescr(
      cl\_abap\_typedescr=>describe\_by\_name( 'SPFLI' ) )->components.
    LOOP AT components FROM 2 ASSIGNING FIELD-SYMBOL(<component>).
      APPEND INITIAL LINE TO flag\_tab ASSIGNING FIELD-SYMBOL(<flag>).
      cl\_demo\_input=>add\_field(
        EXPORTING text = CONV string( <component>-name )
        CHANGING  field =  <flag> ).
    ENDLOOP.
    cl\_demo\_input=>request( ).
    "Create ORDER BY clause
    LOOP AT components FROM 2 ASSIGNING <component>.
      DATA(idx) = sy-tabix.
      DATA(flag) = flag\_tab\[ idx - 1 \].
      order\_by = order\_by &&
        COND string( WHEN to\_upper( flag ) = \`X\` OR
                          to\_upper( flag ) = \`A\`
                            THEN |, { <component>-name } ASCENDING|
                     WHEN to\_upper( flag ) = \`D\`
                            THEN |, { <component>-name } DESCENDING|
                     ELSE \`\` ).
    ENDLOOP.
    SHIFT order\_by BY 2 PLACES LEFT.
    "Database access
    TRY.
        SELECT \*
               FROM spfli
               ORDER BY (order\_by)
               INTO TABLE @spfli\_tab.
      CATCH cx\_sy\_dynamic\_osql\_error INTO DATA(exc).
        cl\_demo\_output=>display( exc->get\_text( ) ).
        RETURN.
    ENDTRY.
    cl\_demo\_output=>display( spfli\_tab ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

[RTTI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry") is used to create input fields for all columns of the table SPFLI except for the client column. The values X or A for ascending sorts and D for descending sorts can be entered in these columns. A dynamic ORDER BY clause is generated from the input as a character string and used in a SELECT statement.