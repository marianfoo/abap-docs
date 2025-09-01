  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobjects_statements.htm) →  [DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DATA, data_options, ABAPDATA_OPTIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion for improvement:)

DATA, data\_options

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_shortref.htm)

Syntax

... *\[* VALUE val*|**{*IS INITIAL*}* *\]*
    *\[* READ-ONLY *\]*.

Additions:

[1\. ... VALUE val*|**{*IS INITIAL*}*](#!ABAP_ADDITION_1@1@)
[2\. ... READ-ONLY](#!ABAP_ADDITION_2@2@)

Effect

The additions VALUE and READ-ONLY are specifically for data objects and distinguish the DATA syntax from the TYPES syntax.

Hint

As well as the additions VALUE and READ-ONLY, the syntax also allows the obsolete addition [COMMON PART](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_common.htm).

Addition 1   

... VALUE val*|**{*IS INITIAL*}*

Effect

The addition VALUE can be used to define a [start value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstart_value_glosry.htm "Glossary Entry") val for the content of a variable for all forms of the variable declaration. This value is used to initialize the variable when it is created before [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapload-of-program.htm). The addition VALUE is not allowed in the declaration part of an interface for the statement DATA.

The start value val can either be specified as a literal or as a predefined constant. Constants, rather than using the actual value, work like the literal that is specified after VALUE when it is declared. A check is usually only performed to check whether the length of the specified value matches the data type and that a syntax check warning occurs if there are any derivations. Only for time stamp type utclong does a character literal that contains a [valid representation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abents_value.htm) of a time stamp need to be specified. If the data type of the literal does not match the data type of the declaration, it is usually converted in accordance with the [conversion rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_elementary.htm) for elementary data types during program generation when the program is activated. If the literal cannot be converted to the data type, no syntax error occurs and exception is raised when the program is generated instead.

Without the addition VALUE, or if IS INITIAL is specified, the content is initial. The [initial values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitial_value_glosry.htm "Glossary Entry") depend on the data type.

The initial values of elementary types are dependent on the [built-in ABAP types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_types_complete.htm). In the case of initial structures, the components are initial, initial reference variables contain the [null reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_reference_glosry.htm "Glossary Entry"), which does not point to an object, and initial internal tables do not contain any lines.

The addition VALUE is possible for all data types, particularly for the [deep](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeep_glosry.htm "Glossary Entry") types (strings, reference types, table types, or structured types with deep components, including [boxed components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenboxed_component_glosry.htm "Glossary Entry")). A start value val, however, can only be specified for the ABAP types string and xstring. Otherwise, only IS INITIAL is possible. IS INITIAL is also the only possible start value for structures with non-character-like and flat components.

Programming Guideline

[Specifying Type-Friendly Start Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstart_values_guidl.htm "Guideline")

Hints

-   A start value should be specified according to type. In particular, no values that are longer can be specified and, in the case of certain data types such as d and t, the length must match exactly.
-   If numbers with [decimal places](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendecimal_place_glosry.htm "Glossary Entry") are specified or specified as a start value for data objects of the data types p or f in scientific notation with mantissa and exponents, it should be ensured that there are no literals for these numbers. Instead, the character literals must be specified with the appropriate content. These are then converted into the numeric data type in accordance with the conversion rules for elementary data types. The same applies to byte-like data objects.
-   If the data object is character-like, the [enumerated constants](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenumerated_constant_glosry.htm "Glossary Entry") val1, val2, ... of the value set of an [enumerated type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_enum.htm) enum can also be specified for val. The constant then is given the name of the enumerated constant as its value.
-   The [value operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_operator_glosry.htm "Glossary Entry") [VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_value.htm) can also be used to construct the content of complex data objects (structures, internal tables).

Example

Declaration of data by specifying the initial value, where one value is specified by a constant.

CONSTANTS underscores TYPE string VALUE \`\_\_\_\_\_\_\_\_\_\_\`.
DATA:
  num TYPE i       VALUE 123,
  txt TYPE string  VALUE underscores,
  hex TYPE xstring VALUE \`0123456789ABCDE\`.

Example

The following example demonstrates that if a constant is used after VALUE, the literal that is specified after the VALUE addition is evaluated. The variable text1 is given the full content of the literal while the variable text2 is assigned the value of the constant that contains only the digits of the literal and any leading zeros in accordance with the [conversion rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharacter_source_fields.htm) from c to n.

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

This addition is always possible in the [public](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpublic_glosry.htm "Glossary Entry") visibility section class or in an interface. This addition ensures that an attribute declared using DATA can be read from outside of the class but can only be changed using methods of the class or its subclasses. This addition has no effect on the [friends](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfriend_glosry.htm "Glossary Entry") of the class.

A class attribute defined using READ-ONLY can be used outside of the class, its friends, and subclasses only in [reading](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenread_position_glosry.htm "Glossary Entry") positions in ABAP statements.

Hints

-   The declaration of attributes using the addition READ-ONLY does not prevent methods of the class from passing [references](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreference_glosry.htm "Glossary Entry") to these attributes externally as [reference variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreference_variable_glosry.htm "Glossary Entry") or [field symbols](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfield_symbol_glosry.htm "Glossary Entry") and therefore making the attributes modifiable outside of the class.
-   The addition READ-ONLY is always recommended if attributes need to be invisible, but a GET method is not executed for every read for performance reasons.

Example

Use of the static constructor as the factory method of a class with instances created privately. The reference to the created singleton objects is available in the READ-ONLY attribute clsref.

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