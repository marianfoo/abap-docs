# ABAP - Keyword Documentation / ABAP - Reference / Creating Objects and Values / CREATE DATA / CREATE DATA dref

Included pages: 2


### abapcreate_data_implicit.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data.htm) → 

CREATE DATA dref

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data_shortref.htm)

Syntax

CREATE DATA dref *\[*[area\_handle](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data_area_handle.htm)*\]*.

Effect

Creates an anonymous data object with an implicit type. If none of the additions TYPE or LIKE is specified, data reference variable dref must be fully typed. The data object is then created with the static data type of the data reference variable.

Note

When the character # is used in an operand position with the operand type of a data reference variable, the [instance operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninstance_operator_glosry.htm "Glossary Entry") [NEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_new.htm) works like the statement CREATE DATA dref.

Example

Creates an anonymous data object of the type SCARR from ABAP Dictionary. The type is implicitly determined using the static data type of the data reference variable.

DATA dref TYPE REF TO scarr.
CREATE DATA dref.
SELECT SINGLE \*
       FROM scarr
       WHERE  carrid = 'LH'
       INTO @dref->\*.
cl\_demo\_output=>display( |{ dref->carrid }, { dref->carrname }| ).

Executable Example

[Creating Data Objects with Implicit Type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_data_implicit_abexa.htm)

Continue
![Example](exa.gif "Example") [Creating Data Objects with Implicit Type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_data_implicit_abexa.htm)


### abencreate_data_implicit_abexa.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data.htm) →  [CREATE DATA dref](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data_implicit.htm) → 

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

Creates an internal table and a data object of type i. The data types of the objects in question are the static types of the reference variables tab\_ref and i\_ref. The data objects are created directly before they are used and are then initialized by the reference variables and passed to the [garbage collector](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengarbage_collector_glosry.htm "Glossary Entry"). The data objects are accessed by dereferencing the data references.
