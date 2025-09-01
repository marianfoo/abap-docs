---
title: "Creating Data Objects with Implicit Type"
description: |
  This example demonstrates how data objects are created with an implicit type. Source Code REPORT demo_create_data_implicit. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. TYPES t_itab TYPE TABLE OF i WITH NON-UNIQUE KEY table_line. D
version: "7.53"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencreate_data_implicit_abexa.htm"
abapFile: "abencreate_data_implicit_abexa.htm"
keywords: ["select", "loop", "do", "if", "try", "method", "class", "data", "types", "internal-table", "abencreate", "implicit", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_data.htm) →  [CREATE DATA dref](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_data_implicit.htm) → 

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

Creates an internal table and a data object of type i. The data types of the objects in question are the static types of the reference variables tab\_ref and i\_ref. The data objects are created directly before they are used and are then initialized by the reference variables and passed to the [garbage collector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengarbage_collector_glosry.htm "Glossary Entry"). The data objects are accessed by dereferencing the data references.