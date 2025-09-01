  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobjects_statements.htm) →  [DATA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata.htm) → 

DATA - data\_options

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_shortref.htm)

Syntax

... *\[* VALUE val*|**{*IS INITIAL*}* *\]*
    *\[* READ-ONLY *\]*.

Extras:

[1\. ... VALUE val*|**{*IS INITIAL*}*](#!ABAP_ADDITION_1@1@)
[2\. ... READ-ONLY](#!ABAP_ADDITION_2@2@)

Effect

The additions VALUE and READ-ONLY are specifically for data objects. They distinguish the DATA syntax from the TYPES syntax.

Note

As well as the additions VALUE and READ-ONLY, the syntax also allows the obsolete addition [COMMON PART](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_common.htm).

Addition 1

... VALUE val*|**{*IS INITIAL*}*

Effect

The addition VALUE can be used to define a [start value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstart_value_glosry.htm "Glossary Entry") val for the content of a variable for regardless of how the variable is declared. This value is used to initialize the variable if it is created before [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapload-of-program.htm). The addition VALUE is not allowed in the declaration part of an interface in the statement DATA.

The start value val can either be specified as a literal or as a predefined constant. Where constants are involved, they work like the literal specified after VALUE when the constant is declared, rather than their actual values being used. A check is usually performed to verify whether the length of the specified value matches the data type. Any deviations produce a warning from the syntax check. If the data type of the literal does not match the data type of the declaration, it is usually converted (when the program is generated and activated) in accordance with the [conversion rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_elementary.htm) for elementary data types. If the literal cannot be converted to the data type, an exception is raised when the program is generated and there is no syntax error.

Without the addition VALUE, or if IS INITIAL is specified, the content is set to an initial value. The [initial values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninitial_value_glosry.htm "Glossary Entry") are dependent on the data type.

In the case of initial structures, the components are initial, initial reference variables contain the [null reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_reference_glosry.htm "Glossary Entry") (which does not point to an object), and initial internal tables do not contain any rows.

The addition VALUE is possible for all data types, in particular for the [deep](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeep_glosry.htm "Glossary Entry") types (strings, reference types, table types, or structured types with deep components, including [boxed components](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenboxed_component_glosry.htm "Glossary Entry")). A start value val, however, can only be specified for the ABAP types string and xstring. Otherwise, only IS INITIAL is possible. IS INITIAL is also the only possible start value for structures with components that are not just character-like and flat.

Programming Guideline

[Specifying Type-Friendly Start Values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstart_values_guidl.htm "Guideline")

Notes

-   A start value should be specified according to type. In particular, no values that are longer should be specified and, in the case of certain data types such as d and t, the length must match exactly.
    
-   If numbers with [decimal places](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfractional_portion_glosry.htm "Glossary Entry") are specified or if an exponent is used as a start value for data objects of the data types p or f in scientific notation with mantissa, this means there are no literals for these numbers. Instead, the character literals must be specified with the appropriate content. These are then converted into the numeric data type in accordance with the conversion rules for elementary data types. The same applies to byte-like data objects.
    
-   If the data object is a character-like object, the [enumeration constants](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_constant_glosry.htm "Glossary Entry") val1, val2, ... of the value set of an [enumerative type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_enum.htm) enum can also be specified for val. The constant is then given the name of the enumerative constant as its value.
    
-   The [value operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_operator_glosry.htm "Glossary Entry") [VALUE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_value.htm) can also be used to construct the content of complex data objects (structures, internal tables).
    

Example

Declares data by specifying the initial value. One value is specified by a constant.

CONSTANTS underscores TYPE string VALUE \`\_\_\_\_\_\_\_\_\_\_\`.
DATA:
  num TYPE i       VALUE 123,
  txt TYPE string  VALUE underscores,
  hex TYPE xstring VALUE \`0123456789ABCDE\`.

Example

The following example demonstrates that, whenever a constant is used after VALUE, the literal specified after the VALUE addition of this constant is evaluated. The variable text1 is given the full content of the literal. The variable text2, on the other hand, is assigned the value of the constant that containing only the digits of the literal and any leading zeroes in accordance with the [conversion rule](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharacter_source_fields.htm) from c to n.

CONSTANTS
  const TYPE n LENGTH 10 VALUE 'x1x1x1x'.
TYPES
  text TYPE c LENGTH 10.
DATA:
  text1 type text VALUE const,
  text2 TYPE text.
text2 = const.
cl\_demo\_output=>display(
  |text1: { text1 }\\ntext2: { text2 }| ).

Addition 2

... READ-ONLY

Effect

This addition is always possible in the [public](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpublic_glosry.htm "Glossary Entry") visibility section of a class or in an interface. This addition makes an attribute declared using DATA readable from outside of the class, but can only be changed using methods of the class or its subclasses. This addition is ignored by the [friends](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfriend_glosry.htm "Glossary Entry") of the class.

A class attribute defined using READ-ONLY can be used outside of the class, its friends, and subclasses only in [reading](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreading_position_glosry.htm "Glossary Entry") positions in ABAP statements.

Notes

-   The declaration of attributes using the addition READ-ONLY does not prevent methods of the class from passing [references](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreference_glosry.htm "Glossary Entry") to these attributes externally as [reference variables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreference_variable_glosry.htm "Glossary Entry") or [field symbols](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfield_symbol_glosry.htm "Glossary Entry") and therefore making the attributes modifiable outside of the class.
    
-   The addition READ-ONLY is always recommended if attributes need to be invisible, but a GET method for every read is to be avoided.
    

Example

Uses the static constructor as the factory method of a class with instances created privately. The reference to the Singleton objects created is available in the READ-ONLY attribute clsref.

CLASS cls DEFINITION CREATE PRIVATE.
  PUBLIC SECTION.
    CLASS-DATA clsref TYPE REF TO cls READ-ONLY.
    CLASS-METHODS
      class\_constructor.
    ...
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD class\_constructor.
    IF clsref IS INITIAL.
      clsref = NEW #( ).
    ENDIF.
  ENDMETHOD.
  ...
ENDCLASS.