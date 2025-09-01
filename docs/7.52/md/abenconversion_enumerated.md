  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) → 

Conversion Rules for Enumerated Types

An [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") is a special elementary data type. Variables of this type are [enumerated variables](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry"), which can only contain the [enumerated values](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry") that are defined for the enumerated type. For this reason, source fields and target fields must be fully compatible in assignments between enumerated types, with one exception. The compatibility applies to the enumerated type itself. The [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry") of the enumerated type is not relevant.

The only exception to this rule is the assignment of source fields with enumerated types to character-like variables of the types c and string. In this case, the following conversion rule applies:

The name (in uppercase) of the [enumerated constant](javascript:call_link\('abenenumerated_constant_glosry.htm'\) "Glossary Entry") or the component of the [enumerated structure](javascript:call_link\('abenenumerated_structure_glosry.htm'\) "Glossary Entry") in which the current value of the source field is saved during the definition of the enumerated type, and the length of the name, are assigned to the target field.

There is no reverse conversion rule for assignments between character-like source fields and enumerated variables.

Notes

-   The following [enumerated objects](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") are possible as operands in assignments between enumerated types:

-   Source fields can be [enumerated constants](javascript:call_link\('abenenumerated_constant_glosry.htm'\) "Glossary Entry") or components of [enumerated structures](javascript:call_link\('abenenumerated_structure_glosry.htm'\) "Glossary Entry") and [enumerated variables](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry").

-   Target fields can be [enumerated variables](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry").

-   To be compatible, the source field and target field must have exactly the same enumerated type. An enumerated type generated using the methods of the [RTTC](javascript:call_link\('abenrttc_glosry.htm'\) "Glossary Entry") is never identical to a type defined with [TYPES](javascript:call_link\('abaptypes_enum.htm'\)). However, a type description object generated using the methods of the [RTTI](javascript:call_link\('abenrttc_glosry.htm'\) "Glossary Entry") for an existing enumerated type describes this type.

-   [Enumerated objects](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") with enumerated types can be used in all [reading positions](javascript:call_link\('abendata_objects_usage_reading.htm'\)) where an implicit conversion to a character-like data type c or string takes place. They cannot be used in operand positions where the operand has to have a character-like data type.

-   The [ABAP Debugger](javascript:call_link\('abenabap_debugger_glosry.htm'\) "Glossary Entry") displays the name of the value, converted into a character-like type, for an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry").

-   When converted to a character-like type, the direct name of the enumerated constant is always used in the context of the declaration with a maximum of 30 characters. It is not prefixed with the name of an [enumerated structure](javascript:call_link\('abenenumerated_structure_glosry.htm'\) "Glossary Entry") with the structure component selector (\-), nor with any class name with the class component selector (\=>). Therefore, the conversion of enumerated objects of different enumerated types can have the same result if the names of the enumerated constants match.

-   The actual value of an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") can be read, according to its [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry"), using the conversion operator [CONV](javascript:call_link\('abenconv_constructor_enum.htm'\)).

-   To assign a type-dependent initial value to enumerated variables, the statement [CLEAR](javascript:call_link\('abapclear.htm'\)) or a constructor expression [VALUE #( )](javascript:call_link\('abenconstructor_expression_value.htm'\)) can be used on the right side of an assignment.

Example

The enumerated values of the enumerated structure p of an enumerated type planet are loaded into an internal table whose row type is the enumerated type. Each row is then converted to the character-like type string and this is added to the internal table planet\_names.

TYPES:
  BEGIN OF ENUM planet STRUCTURE p,
    mercury,
    venus,
    earth,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune,
  END OF ENUM planet STRUCTURE p.
DATA planets TYPE SORTED TABLE OF planet
             WITH UNIQUE KEY table\_line.
DO.
  ASSIGN COMPONENT sy-index OF STRUCTURE p TO FIELD-SYMBOL(<p>).
  IF sy-subrc <> 0.
    EXIT.
  ENDIF.
  planets = VALUE #( BASE planets ( <p> ) ).
ENDDO.
DATA planet\_names TYPE SORTED TABLE OF string
                  WITH UNIQUE KEY table\_line.
planet\_names = VALUE #(
  BASE planet\_names FOR enum IN planets ( CONV string( enum ) ) ).
cl\_demo\_output=>display( planet\_names ).