  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [CONV, Conversion Operator](javascript:call_link\('abenconstructor_expression_conv.htm'\)) →  [CONV, Conversion of Enumerated Types](javascript:call_link\('abenconv_constructor_enum.htm'\)) → 

Conversion Operator, Enumerated Types

This example demonstrates the use of the conversion operator [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) for enumerated types.

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

The inner conversion operator [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) return the value of the enumerated constant earth in the base type i of the [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") planet. An input value is added to this. Applying the conversion operator to the result determines a planet, which has the specified distance of earth.