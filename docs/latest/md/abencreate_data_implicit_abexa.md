  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcreate_data.htm) →  [CREATE DATA dref](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcreate_data_implicit.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Creating%20Data%20Objects%20with%20Implicit%20Type%2C%20ABENCREATE_DATA_IMPLICIT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

Creating Data Objects with Implicit Type

This example demonstrates how data objects are created with an implicit type.

Source Code   

\* Public class definition
CLASS cl\_demo\_create\_data\_implicit DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_create\_data\_implicit IMPLEMENTATION.
  METHOD main.
    TYPES t\_itab TYPE TABLE OF i WITH NON-UNIQUE KEY table\_line.
    DATA: tab\_ref TYPE REF TO t\_itab,
          i\_ref   TYPE REF TO i.
    IF tab\_ref IS INITIAL.
      CREATE DATA tab\_ref.
    ENDIF.
    tab\_ref->\* = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ).
    IF tab\_ref IS NOT INITIAL.
      IF i\_ref IS INITIAL.
        CREATE DATA i\_ref.
      ENDIF.
      LOOP AT tab\_ref->\* INTO i\_ref->\*.
        out->write( |{ i\_ref->\* }| ).
      ENDLOOP.
    ENDIF.
    CLEAR: tab\_ref, i\_ref.
  ENDMETHOD.
ENDCLASS.

Description   

Creation of an internal table and a data object of type i. The data types of the created objects are the static types of the reference variables tab\_ref and i\_ref. The data objects are created directly before they are used and are then passed to the [Garbage Collector](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengarbage_collector_glosry.htm "Glossary Entry") by the initialization of the reference variable. The data objects are accessed by dereferencing the data references.