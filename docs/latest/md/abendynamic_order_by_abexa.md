---
title: "SELECT, Dynamic ORDER BY Clause"
description: |
  This example demonstrates how sorting is specified dynamically for SELECT. Source Code  Public class definition CLASS cl_demo_select_dynamic_ordr_by DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class impleme
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_order_by_abexa.htm"
abapFile: "abendynamic_order_by_abexa.htm"
keywords: ["select", "loop", "do", "if", "try", "catch", "method", "class", "data", "types", "abendynamic", "order", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_clauses.htm) →  [SELECT, ORDER BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaporderby_clause.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20Dynamic%20ORDER%20BY%20Clause%2C%20ABENDYNAMIC_ORDER_BY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECT, Dynamic ORDER BY Clause

This example demonstrates how sorting is specified dynamically for SELECT.

Source Code   

\* Public class definition
CLASS cl\_demo\_select\_dynamic\_ordr\_by DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_select\_dynamic\_ordr\_by IMPLEMENTATION.
  METHOD main.
    TYPES flag TYPE c LENGTH 1.
    DATA: flag\_tab  TYPE TABLE OF flag WITH EMPTY KEY,
          order\_by  TYPE string,
          spfli\_tab TYPE TABLE OF spfli WITH EMPTY KEY.
    "Input screen for columns
    FINAL(components) = CAST cl\_abap\_structdescr(
      cl\_abap\_typedescr=>describe\_by\_name( 'SPFLI' ) )->components.
    FINAL(in) = cl\_demo\_input=>new( ).
    LOOP AT components FROM 2 ASSIGNING FIELD-SYMBOL(<component>).
      APPEND INITIAL LINE TO flag\_tab ASSIGNING FIELD-SYMBOL(<flag>).
      in->add\_field(
        EXPORTING text = CONV string( <component>-name )
        CHANGING  field =  <flag> ).
    ENDLOOP.
    in->request( ).
    "Create ORDER BY clause
    LOOP AT components FROM 2 ASSIGNING <component>.
      FINAL(idx) = sy-tabix.
      FINAL(flag) = flag\_tab\[ idx - 1 \].
      order\_by &&=
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
      CATCH cx\_sy\_dynamic\_osql\_error INTO FINAL(exc).
        out->write( exc->get\_text( ) ).
        RETURN.
    ENDTRY.
    out->write( spfli\_tab ).
  ENDMETHOD.
ENDCLASS.

Description   

[RTTI](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry") is used to create input fields for all columns of the table SPFLI except for the client column. The values X or A for ascending sorts and D for descending sorts can be entered in these columns. A dynamic ORDER BY clause is generated from the input as a character string and used in a SELECT statement.