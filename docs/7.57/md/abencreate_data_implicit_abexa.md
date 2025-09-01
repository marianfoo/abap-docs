  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) →  [CREATE DATA dref](javascript:call_link\('abapcreate_data_implicit.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Creating Data Objects with Implicit Type, ABENCREATE_DATA_IMPLICIT_ABEXA, 757%0D%0A%0
D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Creating Data Objects with Implicit Type

This example demonstrates how data objects are created with an implicit type.

Source Code   

REPORT demo\_create\_data\_implicit.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
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
        cl\_demo\_output=>write( |{ i\_ref->\* }| ).
      ENDLOOP.
    ENDIF.
    cl\_demo\_output=>display( ).
    CLEAR: tab\_ref, i\_ref.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Creation of an internal table and a data object of type i. The data types of the created objects are the static types of the reference variables tab\_ref and i\_ref. The data objects are created directly before they are used and are then passed to the [Garbage Collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry") by the initialization of the reference variable. The data objects are accessed by dereferencing the data references.