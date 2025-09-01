---
title: "Enumerated Objects (Enums)"
description: |
  This section summarizes the use of enumerated objects(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_object_glosry.htm 'Glossary Entry'), that is, data objects with enumerated types(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_type_glosry.h
version: "7.55"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_types_usage.htm"
abapFile: "abenenumerated_types_usage.htm"
keywords: ["select", "loop", "do", "while", "if", "case", "try", "method", "class", "data", "types", "internal-table", "field-symbol", "abenenumerated", "usage"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) → 

Enumerated Objects (Enums)

This section summarizes the use of [enumerated objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_object_glosry.htm "Glossary Entry"), that is, data objects with [enumerated types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_type_glosry.htm "Glossary Entry").

-   [Declaration](#abenenumerated-types-usage-1--------processing-of-enumerated-objects---@ITOC@@ABENENUMERATED_TYPES_USAGE_2)

-   [Operand Positions for Enumerated Objects](#abenenumerated-types-usage-3--------value-assignments---@ITOC@@ABENENUMERATED_TYPES_USAGE_4)

-   [Comparisons](#abenenumerated-types-usage-5--------typing-of-formal-parameters-and-field-symbols---@ITOC@@ABENENUMERATED_TYPES_USAGE_6)

-   [Access to the Enumerated Value](#abenenumerated-types-usage-7--------type-descriptions---@ITOC@@ABENENUMERATED_TYPES_USAGE_8)

-   [Data Interfaces](#abenenumerated-types-usage-9--------forbidden-uses---@ITOC@@ABENENUMERATED_TYPES_USAGE_10)

Executable Example

[Enumerated Objects, Use](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenum_usage_abexa.htm)

Declaration

An enumerated object is a data object with an [enumerated type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_type_glosry.htm "Glossary Entry") defined by one of the following TYPES statements:

[TYPES BEGIN OF ENUM enum\_type ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_enum.htm)
  [TYPES val1 ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_enum.htm)
  [TYPES val2 ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_enum.htm)
  ...
[TYPES END OF ENUM enum\_type ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_enum.htm)

The technical data type of the content of an enumerated object is the [base type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbase_type_glosry.htm "Glossary Entry") of the enumerated type. The possible content is defined by the [enumerated values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_value_glosry.htm "Glossary Entry") defined using TYPES val1, TYPES val2, ..., of which exactly one value must have the type-specific initial value. The base type is i by default, but it can also be a different elementary data type. The following enumerated objects exist:

-   Enumerated variables

An [enumerated variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_variable_glosry.htm "Glossary Entry") is a variable defined using

[DATA enum\_var TYPE enum\_type ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata_enum.htm)

that can contain only [enumerated values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_value_glosry.htm "Glossary Entry") of the enumerated type. This is ensured by the ABAP runtime environment and the rules for using enumerated types.

-   Enumerated constants

An [enumerated constant](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_constant_glosry.htm "Glossary Entry") is used to define a value in the value set of an enumerated type. It is defined in the definition of an enumerated type with

[TYPES val ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_enum.htm)

under the name val. It is a constant of the context of its definition and contains the [enumerated value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_value_glosry.htm "Glossary Entry") assigned in the definition. It can be specified in all read positions in which enumerated objects are possible. Its enumerated value is either determined automatically as an integer or can be specified explicitly in the definition.

-   Components of enumerated structures

A component of an [enumerated structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_structure_glosry.htm "Glossary Entry") is a special form of an enumerated constant that exists as a component of a constant structure and not as a single data object. The enumerated structure struc is defined using

[TYPES BEGIN OF ENUM enum\_type STRUCTURE struc ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_enum.htm)

This makes the enumerated constants defined using

[TYPES val ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_enum.htm)

into their structure components. Otherwise, the same applies as to regular enumerated constants.

Hints

-   Enumerated objects are mainly used to check allowed values. This usually restricts the actual parameters passed to methods to the enumerated values defined in the class.

-   The base type and the actual enumerated value are almost always ignored when enumerated objects are used. Assignments and comparisons are usually only made between enumerated objects with the same enumerated type.

-   Base types other than i and the actual enumerated values may be significant in transformations between enumerated type or in migrations of previous concepts.

-   Enumerated structures can be used to avoid naming conflicts if there are multiple enumerated types in a namespace. Enumerated structures can be used to enable the use of the same enumerated constant name in multiple enumerated types.

Example

Declaration of an enumerated type size in a class. The method parameter size has the enumerated type and only enumerated objects of this type can be passed to this parameter. This example show how the enumerated constant demo=>l is passed. This guarantees that only enumerated values of the enumerated type can be passed to the parameter. These can be evaluated in comparisons with the enumerated constants. In the CASE control structure shown here, the statement block after WHEN OTHERS can be reached only when demo=>xl and demo=>xxl are passed.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    TYPES:
      BEGIN OF ENUM size,
        s, m, l, xl, xxl,
      END OF ENUM size.
    CLASS-METHODS main
      IMPORTING size TYPE size.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    CASE size.
      WHEN s.
        ...
      WHEN m.
        ...
      WHEN l.
        ...
      WHEN OTHERS.
        ...
    ENDCASE.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( demo=>l ).

Processing of Enumerated Objects

The processing of enumerated objects is usually independent of the base type of the enumerated type. Only the enumerated type itself is relevant for all rules specified here. Assignments of enumerated objects with a numeric base type, for example, cannot be assigned to numeric target fields and cannot be compared with numeric fields. The enumerated value in the base type can be accessed using the constructor operators [CONV](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconv_constructor_enum.htm) and [EXACT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexact_constructor_enum.htm) only.

Operand Positions for Enumerated Objects

-   Read positions

Enumerated objects can be used in all [read positions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_objects_usage_reading.htm) in which the operand type is their enumerated type or in which the operand is converted to one of the character-like types c or string. [Substring access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoffset_length.htm) is not possible.

-   Write positions

Enumerated variables can only be used in [write positions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_objects_usage_writing.htm) in which the operand type is the enumerated type and only the associated enumerated values can be written. If known statically, an attempt to assign a value other than a valid enumerated value to an enumerated variable produces a syntax error. If not known statically, an exception is raised.

Example

In the first assignment, the enumerated constant xl in a read position is assigned to the enumerated variable size in a write position. The string expression in the second half exploits the fact that the enumerated constants are converted implicitly to the type string before the concatenation. The result is SMLXLXXL.

TYPES:
  BEGIN OF ENUM size,
    s, m, l, xl, xxl,
  END OF ENUM size.
DATA size TYPE size.
size = xl.
DATA(str) = s && m && l && xl && xxl.

Value Assignments

Only enumerated objects with the same enumerated type can be assigned to an enumerated variable. In the assignment, the target field is given the enumerated value of the source field.

The initial value of the base type is always a valid enumerated value of an enumerated type. Accordingly, an enumerated variable can be set to the initial value of its base type using [CLEAR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclear.htm). Assignments of [VALUE enum\_type( )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_constructor_params_init.htm) are also possible.

Conversely, enumerated objects can only be assigned to compatible enumerated variables, with the following exception: There is a [conversion rule](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_enumerated.htm) for assignments of enumerated objects to character-like variables of the types c and string. In this case, the target field is assigned the name of the enumerated constant or the component of the enumerated structure under which the enumerated value of the source field is defined in the enumerated type. Since this rule can produce unexpected results, conversions of this type lead to a message from the extended program check that can be hidden using the pragma ##types.

In structures, each component with an enumerated type forms a separate fragment of the [structure fragment view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenunicode_fragment_view.htm). In assignments between structures of this type, the fragment views must match so that only components with the same enumerated type can be assigned to each other.

Example

In the first assignment, the enumerated constant sz-xl is assigned to the enumerated variable size of its enumerated type. This variable then contains the associated enumerated value 3. In the second assignment, the enumerated constant is assigned to the text string size\_string. This string is given the value XL in accordance with the conversion rule.

TYPES:
  BEGIN OF ENUM size STRUCTURE sz,
    s, m, l, xl, xxl,
  END OF ENUM size STRUCTURE sz.
DATA size TYPE size.
size = sz-xl.
DATA size\_string TYPE string.
size\_string = sz-xl.

Comparisons

For comparisons between enumerated objects, the [comparison rule](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_rules_operands_enum.htm) applies that an enumerated object can only be compared with an enumerated object with the same enumerated type. Here, the values of the operands are compared in accordance with their base type.

Each enumerated type has an initial enumerated value, which makes checks with the predicate expression [IS INITIAL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_initial.htm) possible.

Hint

Comparisons do not perform an implicit conversion of an enumerated object to the character-like types c and string. Conversions of this type must be performed explicitly, for example with the conversion operator [CONV](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_conv.htm). This difference between assignments and comparisons is particularly significant when reading from internal tables using the statement [READ TABLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_table.htm) or [table expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_expression_glosry.htm "Glossary Entry") and the statement [LOOP AT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_variants.htm) or a [FOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor_itab.htm) statement. When individual lines are read, the comparison fields of conditions are converted implicitly; this is not the case when multiple lines are read. Implicit conversions produce the message from the extended program check mentioned above.

Example

The first comparison shows a typical case where an enumerated variable is compared with an enumerated constant. The syntax of the second comparison that is in a comment is not possible. In the third comparison, the enumerated variable is converted explicitly to the type string before the comparison with a text string.

TYPES:
  BEGIN OF ENUM size,
    s, m, l, xl, xxl,
  END OF ENUM size.
DATA size TYPE size.
...
IF size = xl.
ENDIF.
"IF size = \`XL\`. "<--- Syntax error
"ENDIF.
IF CONV string( size ) = \`XL\`.
ENDIF.

Typing of Formal Parameters and Field Symbols

If [formal parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenformal_parameter_glosry.htm "Glossary Entry") of procedures or [field symbols](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfield_symbol_glosry.htm "Glossary Entry") are [typed](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentyping.htm) with an enumerated type, only enumerated objects with the same enumerated type can be assigned to them. As usual, an exception to this are return values of functional methods that can also be converted to character-like objects of the types c and string.

Enumerated types are covered by the generic types [any](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in_types_generic.htm), [data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in_types_generic.htm), and [simple](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in_types_generic.htm). When an enumerated object is passed to generically typed formal parameters or in assignments to generically typed field symbols, they inherit the enumerated type. In assignments to field symbols, no castings with the [CASTING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapassign_casting.htm) addition can be performed and an enumerated type cannot be specified after this addition.

When generically typed formal parameters or field symbols are used for enumerated objects, the restriction applies that only statically known operands with the same [enumerated type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_type_glosry.htm "Glossary Entry") are allowed in [read positions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreading_position_glosry.htm "Glossary Entry") in which an [enumerated object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_object_glosry.htm "Glossary Entry") is expected to be known statically. This affects, for example, the source field of an assignment to an [enumerated variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_variable_glosry.htm "Glossary Entry") or an operand that is compared with an enumerated object. In [write positions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwriting_position_glosry.htm "Glossary Entry") for enumerated objects, however, generic formal parameters or field symbols are allowed for enumerated types. If the operand type is not known statically, the check is only made at runtime in read positions as well.

Example

The field symbol fs1 typed generically with simple cannot be assigned to an enumerated variable size known statically or compared with it. An assignment of size to the field symbol and fully generic handling is, however, possible.

TYPES:
  BEGIN OF ENUM size,
    s, m, l, xl, xxl,
  END OF ENUM size.
FIELD-SYMBOLS <fs1> TYPE simple.
FIELD-SYMBOLS <fs2> TYPE simple.
DATA(size) = xl.
ASSIGN size TO <fs1>.
ASSIGN size TO <fs2>.
<fs1> = size.
"size = <fs1>.        "<--- Syntax error
"ASSERT size = <fs1>. "<--- Syntax error
<fs2> = <fs1>.
ASSERT <fs1> = <fs2>.

Access to the Enumerated Value

A special [rule](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconv_constructor_enum.htm) for the conversion operator [CONV](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_conv.htm) applies when accessing the enumerated value of an enumerated object:

[... CONV base\_type( enum\_dobj ) ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconv_constructor_enum.htm)

If the base type base\_type of an enumerated object enum\_dobj specified as an argument is specified directly or indirectly, CONV returns its enumerated value.

Conversely, a valid enumerated value can be converted to an enumerated object:

[... CONV enum\_type( dobj ) ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconv_constructor_enum.htm)

The argument dobj is converted to the base type of the enumerated type enum\_type and CONV returns an enumerated object with this value. Any invalid values raise an exception.

In combinations of these two variants where CONV base\_type( enum\_dobj ) is used as an argument dobj of CONV enum\_type( dobj ), there is a short form:

[... CONV enum\_type( enum\_dobj ) ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconv_constructor_enum.htm)

Provided that different enumerated types can have the same base type, an enumerated object of an enumerated type can be converted to the corresponding enumerated object of a different enumerated type.

Hint

The corresponding [rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexact_constructor_enum.htm) applies to the lossless operator [EXACT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_exact.htm), whereby additional losslessness checks are made.

Example

The inner conversion operator CONV accesses the current enumerated value of the enumerated object size and returns it in the type i. The outer conversion operator CONV converts the result of the addition back to an enumerated type and assigns this enumerated value to the enumerated variable size. The enumerated value in size is raised by one for each iteration. The final result is the value of the enumerated constant xxl.

TYPES:
  BEGIN OF ENUM size,
    s, m, l, xl, xxl,
  END OF ENUM size.
DATA size TYPE size.
DO 4 TIMES.
  size = CONV #( CONV i( size ) + 1 ).
ENDDO.

Type Descriptions

The type returned by the statement [DESCRIBE FIELD](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_field.htm) for an enumerated object is k. The length is the length of the enumerated values in the basis type in bytes.

In [RTTS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry"), enumerated objects are described by objects of the class CL\_ABAP\_ENUMDESCR. This class can be used for [RTTI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry") and [RTTC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrun_time_type_creation_glosry.htm "Glossary Entry") purposes. Like any enumerated type, an enumerated type created using RTTC is only compatible with itself.

The following attributes exist in a type description of the class CL\_ABAP\_ENUMDESCR:

-   KIND always has the value E for the elementary base type

-   TYPE\_KIND always has the value k as in the statement DESCRIBE FIELD

-   BASE\_TYPE\_KIND describes the base type

-   MEMBERS is a table of the enumerated constants and the associated enumerated values

Executable Example

[Enumerated Objects, Type Description](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenum_description_abexa.htm)

Data Interfaces

The following data interfaces support enumerated types:

The character-like representation of enumerated objects, that is, the result of a c or string, is used for their output and serialization. The output consists of the name with a maximum of thirty characters of the enumerated constant of the current enumerated value in uppercase. Deserializations are performed in the reverse direction. The following are supported:

-   [Data clusters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_cluster_glosry.htm "Glossary Entry") with the statements [EXPORT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_data_cluster.htm) and [IMPORT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapimport_data_cluster.htm). When an enumerated object is exported, the enumerated value is stored in the base type and flagged as an enumerated value. Enumerated objects and exported data objects of the base type can be imported to a suitable enumerated object (the value is checked here). No exported enumerated objects, however, can be imported to data objects of the base type.

-   [ABAP file interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfile_interface_glosry.htm "Glossary Entry") with the statements [TRANSFER](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptransfer.htm) and [READ DATASET](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_dataset.htm). In writes and reads to and from a file, enumerated objects are handled like data objects of their base type. In reads from a file to an enumerated object, the system checks whether it is a valid enumerated value.

-   Serializations and deserializations from and to [XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenxml_glosry.htm "Glossary Entry") and [JSON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenjson_glosry.htm "Glossary Entry"). The formats [asXML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xslt_asxml_enum.htm) and [asJSON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_asjson_abap_types_enum.htm) represent the content of enumerated objects in their character-like representation, that is, the name of the enumerated constant of the current enumerated value. Only valid names are allowed in deserializations to an enumerated object.

-   List output with the statement [WRITE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite-.htm). Like [WRITE TO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to.htm), this statement converts an enumerated object to its character-like representation, that is, the name of the enumerated constant of the current enumerated value. The [output length](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwrite_output_length.htm) corresponds to the maximum length of the name of 30 characters.

Hint

A deserialization of a name of an enumerated constant is one of the few ways of creating an enumerated value from the name completely dynamically.

Example

WRITE output of the enumerated constants of an enumerated structure.

TYPES:
  BEGIN OF ENUM size STRUCTURE sz,
    s, m, l, xl, xxl,
  END OF ENUM size STRUCTURE sz.
WHILE sy-subrc = 0.
  ASSIGN COMPONENT sy-index OF STRUCTURE sz TO FIELD-SYMBOL(<fs>).
  IF sy-subrc = 0.
    WRITE / <fs>.
  ENDIF.
ENDWHILE.

Executable Example

[Enumerated Objects, Deserialization](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenum_deserialization_abexa.htm)

Forbidden Uses

The following uses are forbidden to ensure that an enumerated object always only contains a single valid enumerated value:

-   Within ABAP, enumerated objects are never interpreted in accordance with their base type. This means that they cannot be used in operand positions that expect numeric, character-like, or byte-like data types. The only exception to this are the operand positions in which an implicit conversion to a character-like type takes place.

-   Enumerated types are not currently supported by the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm). Accordingly, no database tables whose columns have an enumerated type can be defined in the ABAP Dictionary.

-   In both ABAP SQL and Native SQL ([EXEC SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexec.htm), [ADBC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadbc_glosry.htm "Glossary Entry")), no [host variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_variable_glosry.htm "Glossary Entry") or references to ABAP variables with enumerated type can be used. The actual parameters of [AMDP methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_method_glosry.htm "Glossary Entry") cannot be typed using enumerated types.

-   No enumerated types are supported for the input fields of [selection screens](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_screen_glosry.htm "Glossary Entry").

-   It is not possible to copy enumerated values from [lists in the list buffer](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_lists_complex.htm), since there are no conversion rules between character-like types and enumerated types.

If an enumerated object is provided with an invalid value due to a gap in the rules, this results in the following behavior:

-   The result of a conversion to c or string is the string <illegal enum value>, which is displayed accordingly in the ABAP Debugger.

-   An enumerated object with an invalid value can be assigned to other enumerated objects with the same enumerated type without being checked.

-   The expressions [CONV base\_type( enum\_dobj )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconv_constructor_enum.htm) and [EXACT base\_type( enum\_dobj )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexact_constructor_enum.htm) return the invalid value.

An invalid value is to be regarded as an error and should never occur.

Hint

Classic [Dynpros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_glosry.htm "Glossary Entry") represent a known gap. Enumerated types are not supported by dynpros. If dynpro input fields are copied from a program by using enumerated objects, they are handled like an object of the base type. Any invalid values are passed to the associated enumerated object at the event [PAI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpai_glosry.htm "Glossary Entry") without being checked. For this reason, enumerated objects should never be associated with classic dynpros.

Example

The program DEMO\_ENUM\_DYNPRO uses an enumerated object on a dynpro. This can produce invalid values in the program.

Continue
![Example](exa.gif "Example") [Enums, Use](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenum_usage_abexa.htm)
![Example](exa.gif "Example") [Enums, Type Description](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenum_description_abexa.htm)
![Example](exa.gif "Example") [Enums, Deserialization](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenum_deserialization_abexa.htm)