  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_assignments.htm) →  [CONV, Conversion Operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_conv.htm) →  [CONV, Conversion of Enumerated Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconv_constructor_enum.htm) → 

Conversion Operator, Enumerated Types

This example demonstrates the use of the conversion operator [CONV](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_conv.htm) for enumerated types.

Source Code

REPORT demo\_conv\_enum.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF ENUM planet,
        mercury,
        venus,
        earth,
        mars,
        jupiter,
        saturn,
        uranus,
        neptune,
      END OF ENUM planet.
    DATA number TYPE i.
    cl\_demo\_input=>request( CHANGING field = number ).
    TRY.
        DATA(planet) = CONV planet( CONV i( earth ) + number ).
        cl\_demo\_output=>display( planet ).
      CATCH cx\_sy\_conversion\_no\_enum\_value.
        cl\_demo\_output=>display( 'Enter a number between -2 and 5' ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The inner conversion operator [CONV](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_conv.htm) return the value of the enumerated constant earth in the base type i of the [enumerated type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_type_glosry.htm "Glossary Entry") planet. An input value is added to this. Applying the conversion operator to the result determines a planet, which has the specified distance of earth.