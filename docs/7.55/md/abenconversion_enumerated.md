  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_rules.htm) → 

Conversion Rules for Enumerated Types

An [enumerated type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_type_glosry.htm "Glossary Entry") is a special elementary data type. Variables of this type are [enumerated variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_variable_glosry.htm "Glossary Entry"), which can only contain the [enumerated values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_value_glosry.htm "Glossary Entry") that are defined for the enumerated type. For this reason, source fields and target fields must be fully compatible in assignments between enumerated types, with one exception. The compatibility must apply to the enumerated type itself. The [base type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbase_type_glosry.htm "Glossary Entry") of the enumerated type is not relevant.

The only exception to this rule is the assignment of source fields with enumerated types to character-like variables of the types c and string. In this case, the following conversion rule applies:

The name and length of the [enumerated constant](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_constant_glosry.htm "Glossary Entry") or the component of the [enumerated structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_structure_glosry.htm "Glossary Entry") in which the current value of the source field is stored during the definition of the enumerated type, are assigned to the target field in uppercase letters.

This type of conversion to a character-like type can produce unexpected results. This is particularly common in operand positions in which implicit conversions take place. For this reason, a conversion of this type produces a message from the extended program check if it is known statically. This message can be hidden using the pragma ##types.

There is no reverse conversion rule for assignments between character-like source fields and enumerated variables. There is however, a special rule for the conversion operator [CONV](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconv_constructor_enum.htm) that enables the actual value of an [enumerated object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_object_glosry.htm "Glossary Entry") to be read in accordance with its [basis type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbase_type_glosry.htm "Glossary Entry").

Hints

-   The following [enumerated objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_object_glosry.htm "Glossary Entry") are possible as operands in assignments between enumerated types:

-   Source fields can be [enumerated constants](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_constant_glosry.htm "Glossary Entry") or components of [enumerated structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_structure_glosry.htm "Glossary Entry") and [enumerated variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_variable_glosry.htm "Glossary Entry").

-   Target fields can be [enumerated variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_variable_glosry.htm "Glossary Entry").

-   To be compatible, the source field and target field must have exactly the same enumerated type. An enumerated type created using [RTTC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrun_time_type_creation_glosry.htm "Glossary Entry") methods is never identical to a type defined using [TYPES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_enum.htm). A type description object created for an existing enumerated type using [RTTC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrun_time_type_creation_glosry.htm "Glossary Entry") methods, however, describes this type.

-   [Enumerated objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_object_glosry.htm "Glossary Entry") with enumerated types can be listed in all [read positions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_objects_usage_reading.htm) where an implicit conversion to a character-like data type c or string takes place. They cannot be listed in operand positions where the operand must have a character-like data type.

-   The [ABAP Debugger](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_debugger_glosry.htm "Glossary Entry") displays the name of the value that is converted into a character-like type, for an [enumerated object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_object_glosry.htm "Glossary Entry").

-   When converting to a character-like type, the direct name of the enumerated constant is always used in the context of the declaration with a maximum of 30 characters. It is not prefixed with the name of an [enumerated structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_structure_glosry.htm "Glossary Entry") with the structure component selector (\-), nor with any class name with the class component selector (\=>). Therefore, the conversion of enumerated objects of different enumerated types can have the same result if the names of the enumerated constants match.

-   To assign a type-dependent initial value to enumerated variables, the statement [CLEAR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclear.htm) or a constructor expression [VALUE #( )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_value.htm) can be used on the right side of an assignment.

Example

The enumerated values of the enumerated structure p of an enumerated type planet are loaded into an internal table whose line type is the enumerated type. Each line is then converted to the character-like type string and this is added to the internal table planet\_names.

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