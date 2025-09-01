# ABAP - Keyword Documentation / ABAP - Programming Language / Processing Internal Data / Enumerated Objects (enum)

Included pages: 6


### abenenumerated_types_usage.htm

---
title: "Enumerated Objects (enum)"
description: |
  This section summarizes the use of enumerated objects(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_object_glosry.htm 'Glossary Entry'), that is, data objects with enumerated types(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_type_glosry.htm 'Gl
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_types_usage.htm"
abapFile: "abenenumerated_types_usage.htm"
keywords: ["select", "loop", "do", "while", "if", "case", "try", "method", "class", "data", "types", "internal-table", "field-symbol", "abenenumerated", "usage"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Enumerated%20Objects%20%28enum%29%2C%20ABENENUMERATED_TYPES_USAGE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Enumerated Objects (enum)

This section summarizes the use of [enumerated objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_object_glosry.htm "Glossary Entry"), that is, data objects with [enumerated types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_type_glosry.htm "Glossary Entry").

-   [Declaration](#abenenumerated-types-usage-1-------processing-of-enumerated-objects---@ITOC@@ABENENUMERATED_TYPES_USAGE_2)
    -   [Operand Positions for Enumerated Objects](#abenenumerated-types-usage-3-----------value-assignments---@ITOC@@ABENENUMERATED_TYPES_USAGE_4)
    -   [Comparisons](#abenenumerated-types-usage-5-----------typing-of-formal-parameters-and-field-symbols---@ITOC@@ABENENUMERATED_TYPES_USAGE_6)
    -   [Access to the Enumerated Value](#abenenumerated-types-usage-7-----------type-descriptions---@ITOC@@ABENENUMERATED_TYPES_USAGE_8)
    -   [Data Interfaces](#abenenumerated-types-usage-9-----------abap-sql---@ITOC@@ABENENUMERATED_TYPES_USAGE_10)
    -   [Forbidden Uses](#abenenumerated-types-usage-11-----------example-for-general-use---@ITOC@@ABENENUMERATED_TYPES_USAGE_12)

Declaration   

An enumerated object is a data object with an [enumerated type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_type_glosry.htm "Glossary Entry").

Enumerated types can be defined as follows:

-   In the ABAP language, an enumerated type is defined using the following TYPES statements:
    
    [TYPES BEGIN OF ENUM enum\_type ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_enum.htm)
      [TYPES val1 *\[*VALUE IS INITIAL*\]*.](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_enum.htm)
      [TYPES val2 *\[*VALUE val*\]*.](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_enum.htm)
      ...
    [TYPES END OF ENUM enum\_type ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_enum.htm)
    
    An enumerated type defined in ABAP can be used within the same program. Enumerated types defined as components of [interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoo_intf_glosry.htm "Glossary Entry") or [classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_glosry.htm "Glossary Entry") can be used in all ABAP programs that are allowed to access them. The definition of an enumerated type in ABAP also declares its [enumerated constants](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_constant_glosry.htm "Glossary Entry") and optionally an [enumerated structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_structure_glosry.htm "Glossary Entry") in the context of the declaration. [Enumerated variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_variable_glosry.htm "Glossary Entry") can be declared by referring to the enumerated type.
    
-   In ABAP CDS, an enumerated type is defined using the following CDS TDL statement:
    
    [DEFINE TYPE ... ENUM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_enum_type.htm)
    
    Enumerated types defined in ABAP CDS can be used in all ABAP CDS objects and ABAP programs that are allowed to access them. In an ABAP program, an CDS enumerated type is handled like an ABAP enumerated type with an [enumerated structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_structure_glosry.htm "Glossary Entry") that has the same name as the enumerated type:
    
    -   The CDS enumerated type can be used directly for the declaration of [enumerated variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_variable_glosry.htm "Glossary Entry").
    -   The enumerated structure and its components can be used in read positions.
    
    The enumerated structure is implicitly created in the global context of the current ABAP program before the first read access. After its creation, it can be used like an enumerated structure defined in ABAP. Especially, it can be referred to by LIKE which is not possible before the access to the CDS enumerated type. In contrast to an ABAP enumeration type, the components of the enumerated structure derived from an CDS enumerated structure are ordered alphabetically instead of following the order of the definition.
    

The technical data type of the content of an enumerated object is the [base type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbase_type_glosry.htm "Glossary Entry") of the enumerated type. The possible content is defined by the [enumerated values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_value_glosry.htm "Glossary Entry") defined using [TYPES ... *\[*VALUE*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_enum.htm) in ABAP or by [EnumConstant = EnumValue](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_enum_type.htm) in ABAP CDS. Exactly one value must have the type-specific initial value. In ABAP, the base type is i by default, but it can also be a different elementary data type. In ABAP CDS, the base type must be specified and there is no default.

The following enumerated objects can be used in ABAP programs:

-   Enumerated variables
    
    An [enumerated variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_variable_glosry.htm "Glossary Entry") is a variable defined using
    
    [DATA enum\_var TYPE enum\_type ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_enum.htm)
    
    that can contain only [enumerated values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_value_glosry.htm "Glossary Entry") of the enumerated type. This is ensured by the ABAP runtime framework and the rules for using enumerated types described below.
    
-   Enumerated constants
    
    An [enumerated constant](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_constant_glosry.htm "Glossary Entry") is used to define a value in the value set of an enumerated type.
    
    -   In ABAP, an enumerated constant is defined in the definition of an enumerated type with
        
        [TYPES val ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_enum.htm)
        
        under the name val. It exists as val in the context where the enumerated type is defined.
        
    -   In ABAP CDS, an enumerated constant is defined by the syntax
        
        [EnumConstant = EnumValue](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_enum_type.htm)
        
        An enumerated constant defined in ABAP CDS is handled in an ABAP program as a component of an [enumerated structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_structure_glosry.htm "Glossary Entry") that has the name of the CDS enumerated type EnumName. This enumerated structure is created implicitly as an ABAP data object before a first read access.
        
    
    An enumerated constant contains the [enumerated value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_value_glosry.htm "Glossary Entry") assigned in the definition. It can be specified in all read positions in which enumerated objects are possible. Its enumerated value is either determined automatically as an integer or is specified explicitly in the definition.
    
-   Components of enumerated structures
    
    A component of an [enumerated structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_structure_glosry.htm "Glossary Entry") is a special form of an enumerated constant that exists as a component of a constant structure and not as a single data object.
    
    -   For an ABAP enumerated type, an enumerated structure struc can be declared optionally using
        
        [TYPES BEGIN OF ENUM enum\_type STRUCTURE struc ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_enum.htm)
        
        Enumerated constants that are not components of an enumerated structure are elementary constants in their context.
        
    -   For an CDS enumerated type, there is always an enumerated structure created in the ABAP program with the same name as the enumerated type EnumName before the first read access.
    
    Enumerated constants that are components of an enumerated structure must be addressed like any structure component with a component selector ( [structure component selector](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstructure_component_sel_glosry.htm "Glossary Entry") (\- or [object component selector](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_component_select_glosry.htm "Glossary Entry") \->). The enumerated constants of a CDS enumerated type can only be accessed in ABAP as structure components. Otherwise, the same rules apply as to enumerated constants that are not components of enumerated structures.
    

Hints

-   Enumerated objects are mainly used to check allowed values. This usually restricts the actual parameters passed to methods to the enumerated values defined in the class.
-   The base type and the actual enumerated value are almost always ignored when enumerated objects are used. Assignments and comparisons are usually only made between enumerated objects with the same enumerated type.
-   As a rule, the base type and the actual enumerated values do not matter when enumerated objects are used. Base types other than i and the actual enumerated values may be significant in transformations between enumerated type or in migrations of previous concepts.
-   Enumerated structures can be used to avoid naming conflicts if there are multiple enumerated types in a namespace. With enumerated structures, it is possible to use the same enumerated constant name in multiple enumerated types.
-   An enumerated type is always an elementary type independent from an enumerated structure. This is true for ABAP and especially for CDS enumerated types that are always connected to an enumerated structure.
-   Normally, an enumerated structure should not be accessed as a whole and the order of its components is not important. Otherwise, the different order in ABAP enumerated types and CDS enumerated types must be respected.

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
CLASS user DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS user IMPLEMENTATION.
  METHOD main.
    demo=>main( demo=>l ).
  ENDMETHOD.
ENDCLASS.

Executable Example

[enum, Declaration](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_declaration_abexa.htm)

Processing of Enumerated Objects   

The processing of enumerated objects is usually independent of the base type of the enumerated type. Only the enumerated type itself is relevant for all rules specified here. Assignments of enumerated objects with a numeric base type, for example, cannot be assigned to numeric target fields and cannot be compared with numeric fields. The enumerated value in the base type can be accessed using the constructor operators [CONV](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconv_constructor_enum.htm) and [EXACT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexact_constructor_enum.htm) only.

Operand Positions for Enumerated Objects   

-   Read positions
    
    Enumerated objects can be used in all [read positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_objects_usage_reading.htm) in which the operand type is their enumerated type or in which the operand is converted to one of the character-like types c or string. [Substring access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoffset_length.htm) is not possible.
    
-   Write positions
    
    Enumerated variables can only be used in [write positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_objects_usage_writing.htm) in which the operand type is the enumerated type and only the associated enumerated values can be written. If known statically, an attempt to assign a value other than a valid enumerated value to an enumerated variable produces a syntax error. If not known statically, an exception is raised.
    

Example

In the first assignment, the enumerated constant xl in a read position is assigned to the enumerated variable size in a write position. The string expression in the second half exploits the fact that the enumerated constants are converted implicitly to the type string before the concatenation. The result is SMLXLXXL.

TYPES:
  BEGIN OF ENUM size,
    s, m, l, xl, xxl,
  END OF ENUM size.
DATA size TYPE size.
size = xl.
FINAL(str) = s && m && l && xl && xxl.

Value Assignments   

Only enumerated objects with the same enumerated type can be assigned to an enumerated variable. In the assignment, the target field is given the enumerated value of the source field.

The initial value of the base type is always a valid enumerated value of an enumerated type. Accordingly, an enumerated variable can be set to the initial value of its base type using [CLEAR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclear.htm). Assignments of [VALUE enum\_type( )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_constructor_params_init.htm) are also possible.

Conversely, enumerated objects can only be assigned to compatible enumerated variables, with the following exception: There is a [conversion rule](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_enumerated.htm) for assignments of enumerated objects to character-like variables of the types c and string. In this case, the target field is assigned the name of the enumerated constant or the component of the enumerated structure under which the enumerated value of the source field is defined in the enumerated type. Since this rule can produce unexpected results, conversions of this type lead to a message from the extended program check that can be hidden using the pragma ##types.

In structures, each component with an enumerated type forms a separate fragment of the [structure fragment view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunicode_fragment_view.htm). In assignments between structures of this type, the fragment views must match so that only components with the same enumerated type can be assigned to each other.

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

For comparisons between enumerated objects, the [comparison rule](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_rules_operands_enum.htm) applies that an enumerated object can only be compared with an enumerated object with the same enumerated type. Here, the values of the operands are compared in accordance with their base type.

Each enumerated type has an initial enumerated value, which makes checks with the predicate expression [IS INITIAL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_initial.htm) possible.

Hint

Comparisons do not perform an implicit conversion of an enumerated object to the character-like types c and string. Conversions of this type must be performed explicitly, for example with the conversion operator [CONV](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_conv.htm). This difference between assignments and comparisons is particularly significant when reading from internal tables using the statement [READ TABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table.htm) or [table expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_expression_glosry.htm "Glossary Entry") and the statement [LOOP AT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_variants.htm) or a [FOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_itab.htm) statement. When individual lines are read, the comparison fields of conditions are converted implicitly; this is not the case when multiple lines are read. Implicit conversions produce the message from the extended program check mentioned above.

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

If [formal parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenformal_parameter_glosry.htm "Glossary Entry") of procedures or [field symbols](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfield_symbol_glosry.htm "Glossary Entry") are [typed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping.htm) with an enumerated type, only enumerated objects with the same enumerated type can be assigned to them. As usual, an exception to this are return values of functional methods that can also be converted to character-like objects of the types c and string.

Enumerated types are covered by the generic types [any](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_generic.htm), [data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_generic.htm), and [simple](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_generic.htm). When an enumerated object is passed to generically typed formal parameters or in assignments to generically typed field symbols, they inherit the enumerated type. In assignments to field symbols, no castings with the [CASTING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_casting.htm) addition can be performed and an enumerated type cannot be specified after this addition.

When using generically typed formal parameters or field symbols for enumerated objects, the restriction applies that at [read positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenread_position_glosry.htm "Glossary Entry") where a statically known [enumerated object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_object_glosry.htm "Glossary Entry") is expected, only statically known operands of the same [enumerated type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_type_glosry.htm "Glossary Entry") are allowed. This affects, for example, the source field of an assignment to an [enumerated variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_variable_glosry.htm "Glossary Entry") or an operand that is compared with an enumerated object. In [write positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwrite_position_glosry.htm "Glossary Entry") for enumerated objects, however, generic formal parameters or field symbols are allowed for enumerated types. If the operand type is not known statically, the check is only made at runtime in read positions as well.

Executable Example

[enum, Parameter Passing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_formal_para_abexa.htm)

Example

The field symbol fs1 typed generically with simple cannot be assigned to an enumerated variable size known statically or compared with it. An assignment of size to the field symbol and fully generic handling is, however, possible.

TYPES:
  BEGIN OF ENUM size,
    s, m, l, xl, xxl,
  END OF ENUM size.
FIELD-SYMBOLS <fs1> TYPE simple.
FIELD-SYMBOLS <fs2> TYPE simple.
FINAL(size) = xl.
ASSIGN size TO <fs1>.
ASSIGN size TO <fs2>.
<fs1> = size.
"size = <fs1>.        "<--- Syntax error
"ASSERT size = <fs1>. "<--- Syntax error
<fs2> = <fs1>.
ASSERT <fs1> = <fs2>.

Access to the Enumerated Value   

A special [rule](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconv_constructor_enum.htm) for the conversion operator [CONV](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_conv.htm) applies when accessing the enumerated value of an enumerated object:

[... CONV base\_type( enum\_dobj ) ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconv_constructor_enum.htm)

If the base type base\_type of an enumerated object enum\_dobj specified as an argument is specified directly or indirectly, CONV returns its enumerated value.

Conversely, a valid enumerated value can be converted to an enumerated object:

[... CONV enum\_type( dobj ) ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconv_constructor_enum.htm)

The argument dobj is converted to the base type of the enumerated type enum\_type and CONV returns an enumerated object with this value. Any invalid values raise an exception.

In combinations of these two variants where CONV base\_type( enum\_dobj ) is used as an argument dobj of CONV enum\_type( dobj ), there is a short form:

[... CONV enum\_type( enum\_dobj ) ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconv_constructor_enum.htm)

Provided that different enumerated types can have the same base type, an enumerated object of an enumerated type can be converted to the corresponding enumerated object of a different enumerated type.

Hint

The corresponding [rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexact_constructor_enum.htm) applies to the lossless operator [EXACT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_exact.htm), whereby additional losslessness checks are made.

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

The type returned by the statement [DESCRIBE FIELD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdescribe_field.htm) for an enumerated object is k. The length is the length of the enumerated values in the basis type in bytes.

In [RTTS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry"), enumerated objects are described by objects of the class CL\_ABAP\_ENUMDESCR. This class can be used for [RTTI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry") and [RTTC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_creation_glosry.htm "Glossary Entry") purposes. Like any enumerated type, an enumerated type created using RTTC is only compatible with itself.

The following attributes exist in a type description of the class CL\_ABAP\_ENUMDESCR:

-   KIND always has the value E for the elementary base type
-   TYPE\_KIND always has the value k as in the statement DESCRIBE FIELD
-   BASE\_TYPE\_KIND describes the base type
-   MEMBERS is a table of the enumerated constants and the associated enumerated values

Hint

A [CDS enumerated type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_type_glosry.htm "Glossary Entry") can be described directly with the RTTI method DESCRIBE\_BY\_NAME.

Executable Example

[Enumerated Objects, Type Description](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_description_abexa.htm)

Data Interfaces   

The following data interfaces support enumerated types:

The character-like representation of enumerated objects, that is, the result of a c or string, is used for their output and serialization. The output consists of the name with a maximum of thirty characters of the enumerated constant of the current enumerated value in uppercase. Deserializations are performed in the reverse direction. The following are supported:

-   [Data clusters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_cluster_glosry.htm "Glossary Entry") with the statements [EXPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster.htm) and [IMPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_data_cluster.htm). When an enumerated object is exported, the enumerated value is stored in the base type and flagged as an enumerated value. Enumerated objects and exported data objects of the base type can be imported to a suitable enumerated object (the value is checked here). No exported enumerated objects, however, can be imported to data objects of the base type.
-   [ABAP file interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfile_interface_glosry.htm "Glossary Entry") with the statements [TRANSFER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptransfer.htm) and [READ DATASET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_dataset.htm). In writes and reads to and from a file, enumerated objects are handled like data objects of their base type. In reads from a file to an enumerated object, the system checks whether it is a valid enumerated value.
-   Serializations and deserializations from and to [XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenxml_glosry.htm "Glossary Entry") and [JSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjson_glosry.htm "Glossary Entry"). The formats [asXML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xslt_asxml_enum.htm) and [asJSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_asjson_abap_types_enum.htm) represent the content of enumerated objects in their character-like representation, that is, the name of the enumerated constant of the current enumerated value. Only valid names are allowed in deserializations to an enumerated object.
-   List output with the statement [WRITE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite-.htm). Like [WRITE TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to.htm), this statement converts an enumerated object to its character-like representation, that is, the name of the enumerated constant of the current enumerated value. The [output length](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwrite_output_length.htm) corresponds to the maximum length of the name of 30 characters.

Hint

A deserialization of a name of an enumerated constant is one of the few ways of creating an enumerated value from the name fully dynamically.

Example

WRITE output of the enumerated constants of an enumerated structure.

TYPES:
  BEGIN OF ENUM size STRUCTURE sz,
    s, m, l, xl, xxl,
  END OF ENUM size STRUCTURE sz.
WHILE sy-subrc = 0.
  ASSIGN sz-(sy-index) TO FIELD-SYMBOL(<fs>).
  IF sy-subrc = 0.
    WRITE / <fs>.
  ENDIF.
ENDWHILE.

Executable Example

[Enumerated Objects, Deserialization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_deserialization_abexa.htm)

ABAP SQL   

[CDS enumerated elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_element_glosry.htm "Glossary Entry"), [CDS enumerated constants](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_constant_glosry.htm "Glossary Entry"), and [host variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhost_variable_glosry.htm "Glossary Entry") typed with a [CDS enumerated type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_type_glosry.htm "Glossary Entry") can be used in ABAP SQL as elementary operand (column specifications, host variables and operands of host expressions). They can also be used in cast expressions.

Restriction

Host variables and operands of host expressions can have a [CDS enumerated type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_type_glosry.htm "Glossary Entry") but not an [ABAP enumerated type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_type_glosry.htm "Glossary Entry").

Example

The following SELECT statement uses CDS enumerated elements, CDS enumerated constants, and a host variable typed with a CDS enumerated type in different operand positions.

DATA fri TYPE demo\_cds\_enum\_weekday.
SELECT Id, friday, EnumConstantField, @fri as HostEnum
       FROM demo\_cds\_enum\_type\_usage\_2(
         p1 = @demo\_cds\_enum\_char-first\_value )
       WHERE friday = @demo\_cds\_enum\_weekday-fri
       ORDER BY @demo\_cds\_enum\_char-initial\_value
       INTO TABLE @FINAL(itab).

The following example defines an enumerated variable with reference to an ABAP enumerated type. This enumerated variable cannot be used as host variable in a SELECT statement.

TYPES:
  BEGIN OF ENUM abap\_wd STRUCTURE abap\_wd BASE TYPE int1,
    mon,
    tue,
    wed,
    thu,
    fri,
    sat,
    sun,
  END OF ENUM abap\_wd STRUCTURE abap\_wd.
DATA fri TYPE abap\_wd.
\*syntax error because host variables with an ABAP enumerated type
\*are not possible.
\*SELECT @fri AS MyEnum FROM scarr INTO TABLE @FINAL(itab).

Forbidden Uses   

The following uses are forbidden to ensure that an enumerated object always contains only a single valid enumerated value:

-   Within ABAP, enumerated objects are never interpreted in accordance with their base type. This means that they cannot be used in operand positions that expect numeric, character-like, or byte-like data types. The only exception to this are the operand positions in which an implicit conversion to a character-like type takes place.
-   Enumerated types are not currently supported by the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm). Accordingly, no database tables whose columns have an enumerated type can be defined in the ABAP Dictionary.
-   In Native SQL ([EXEC SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexec.htm), [ADBC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_glosry.htm "Glossary Entry")), no [host variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhost_variable_glosry.htm "Glossary Entry") or references to ABAP variables with enumerated type can be used. The actual parameters of [AMDP methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_method_glosry.htm "Glossary Entry") cannot be typed using enumerated types.
-   No enumerated types are supported for the input fields of [selection screens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_screen_glosry.htm "Glossary Entry").
-   It is not possible to inherit enumerated values from [lists in the list buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_lists_complex.htm), since there are no conversion rules between character-like types and enumerated types.

If an enumerated object is provided with an invalid value due to a gap in the rules, this results in the following behavior:

-   The result of a conversion to c or string is the string <illegal enum value>, which is displayed accordingly in the ABAP Debugger.
-   An enumerated object with an invalid value can be assigned to other enumerated objects with the same enumerated type without being checked.
-   The expressions [CONV base\_type( enum\_dobj )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconv_constructor_enum.htm) and [EXACT base\_type( enum\_dobj )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexact_constructor_enum.htm) return the invalid value.

An invalid value is to be regarded as an error and should never occur.

Hint

Classic [Dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm "Glossary Entry") represent a known gap. Enumerated types are not supported by dynpros. If dynpro input fields are defined by referring to enumerated objects of a program, they are handled like an object of the base type. Any invalid values are passed to the associated enumerated object at the event [PAI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpai_glosry.htm "Glossary Entry") without being checked. For this reason, enumerated objects should never be linked with classic dynpros.

Example

The program DEMO\_ENUM\_DYNPRO uses an enumerated object on a dynpro. This can produce invalid values in the program.

Example for General Use   

Executable Example

[enum, General Use](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_usage_abexa.htm)

Continue
![Example](exa.gif "Example") [enum, Declaration](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_declaration_abexa.htm)
![Example](exa.gif "Example") [enum, Parameter Passing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_formal_para_abexa.htm)
![Example](exa.gif "Example") [enum, Type Description](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_description_abexa.htm)
![Example](exa.gif "Example") [enum, Deserialization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_deserialization_abexa.htm)
![Example](exa.gif "Example") [enum, General Use](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_usage_abexa.htm)


### abenenum_declaration_abexa.htm

---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_declare_enums DEFINITION PUBLIC INHERITING FROM cl_demo_classrun CREATE PUBLIC . PUBLIC SECTION. METHODS main REDEFINITION . ENDCLASS.  Public class implementation CLASS cl_demo_declare_enums IMPLEMENTATION. METHOD main. out->next_section( 'ABAP En
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_declaration_abexa.htm"
abapFile: "abenenum_declaration_abexa.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abenenum", "declaration", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Enumerated Objects (enum)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_types_usage.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20enum%2C%20Declaration%2C%20ABENENUM_DECLARATION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

enum, Declaration

This example demonstrates the declaration of [enumerated objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_object_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_declare\_enums DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main
      REDEFINITION .
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_declare\_enums IMPLEMENTATION.
  METHOD main.
    out->next\_section( 'ABAP Enumerated Type' ).
    "ABAP enumerated type with enumerated structure
    TYPES:
      BEGIN OF ENUM abap\_wd STRUCTURE abap\_wd BASE TYPE int1,
        mon,
        tue,
        wed,
        thu,
        fri,
        sat,
        sun,
      END OF ENUM abap\_wd STRUCTURE abap\_wd.
    "Addressing the enumerated structure and its components
    DATA abap\_wd\_struc LIKE abap\_wd.
    out->write( abap\_wd
      )->write( abap\_wd-fri
      )->write( abap\_wd\_struc
      )->write( abap\_wd\_struc-fri ).
    "Declaring an enumerated variable of the ABAP enumerated type
    DATA wd\_abap TYPE abap\_wd.
    "Assigning an enumerated constant
    wd\_abap = abap\_wd-tue.
    "Assigning an enumerated constant to an inline declaration
    FINAL(wd\_abap\_wed) = abap\_wd-wed.
    "Assigning enumerated constants to the variable structure
    abap\_wd\_struc = abap\_wd.
    out->write( wd\_abap
      )->write( wd\_abap\_wed
      )->write( abap\_wd\_struc ).
    out->next\_section( 'CDS Enumerated Type' ).
    "Addressing the enumerated structure and its components
    "DATA cds\_wd\_struc LIKE demo\_cds\_enum\_weekday. "Syntax error
    out->write( demo\_cds\_enum\_weekday
      )->write( demo\_cds\_enum\_weekday-fri ).
    DATA cds\_wd\_struc LIKE demo\_cds\_enum\_weekday. "No syntax error
    out->write( cds\_wd\_struc
      )->write( cds\_wd\_struc-fri ).
    "Declaring an enumerated variable of the CDS enumerated type
    DATA wd\_cds TYPE demo\_cds\_enum\_weekday.
    "Assigning an enumerated constant
    wd\_cds = demo\_cds\_enum\_weekday-tue.
    "Assigning an enumerated constant to an inline declaration
    FINAL(wd\_cds\_wed) = demo\_cds\_enum\_weekday-wed.
    "Assigning enumerated constants to the variable structure
    cds\_wd\_struc = CORRESPONDING #( demo\_cds\_enum\_weekday ).
    out->write( wd\_cds
      )->write( wd\_cds\_wed
      )->write( cds\_wd\_struc ).
  ENDMETHOD.
ENDCLASS.

Description   

This example shows enumerated objects defined with reference to an [ABAP enumerated type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_type_glosry.htm "Glossary Entry") and to an [CDS enumerated type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_type_glosry.htm "Glossary Entry"):

-   ABAP enumerated type
    -   The ABAP enumerated type abap\_wd is defined with an [enumerated structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_structure_glosry.htm "Glossary Entry") that has the same name.
    -   The enumerated structure abap\_wd is created by the declaration and can be referred to by LIKE to create a second structure with the same components. The second structure is not a constant structure.
    -   The components of the constant structure abap\_wd contain the [enumerated values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_value_glosry.htm "Glossary Entry") of the enumerated type.
    -   The components of the variable structure declared by LIKE contain their initial value 0 or MON respectively.
    -   A variable wd\_abap is declared with reference to the ABAP enumerated type and assigned the enumerated constant abap\_wd-tue.
    -   An [immutable variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenimmutable_variable_glosry.htm "Glossary Entry") wd\_abap\_wed is declared inline and assigned the enumerated constant abap\_wd-wed.
    -   The enumerated constant structure abap\_wd is assigned to the variable structure abap\_wd\_struc declared by LIKE. Each component is assigned a different enumerated constant.
-   CDS enumerated type
    
    The CDS enumerated type DEMO\_CDS\_ENUM\_WEEKDAY is defined as follows:
    
    @EndUserText.label: 'Days of the week'
    define type DEMO\_CDS\_ENUM\_WEEKDAY : abap.int1 enum
    {
      @EndUserText.label: 'Monday'
      MON = initial;
      @EndUserText.label: 'Tuesday'
      TUE =       1;
      @EndUserText.label: 'Wednesday'
      WED =       2;
      @EndUserText.label: 'Thursday'
      THU =       3;
      @EndUserText.label: 'Friday'
      FRI =       4;
      @EndUserText.label: 'Saturday'
      SAT =       5;
      @EndUserText.label: 'Sunday'
      SUN =       6;
    }
    
    It can be used in ABAP in the same way as the ABAP enumerated type with two major differences:
    
    -   The enumerated structure demo\_cds\_enum\_weekday is created with the first read access. It cannot be used after LIKE before it is used for the first time.
    -   The components of the enumerated structure demo\_cds\_enum\_weekday are ordered alphabetically and not according to the definition.

Note that only enumerated constants or variables with the same enumerated type are assigned to enumerated variables.


### abenenum_formal_para_abexa.htm

---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_enum_para_pass DEFINITION PUBLIC INHERITING FROM cl_demo_classrun CREATE PUBLIC . PUBLIC SECTION. METHODS main REDEFINITION . PRIVATE SECTION. METHODS meth IMPORTING VALUE(psimple) TYPE simple VALUE(penum)   TYPE demo_cds_enum_weekday . ENDCLASS.
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_formal_para_abexa.htm"
abapFile: "abenenum_formal_para_abexa.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "field-symbol", "abenenum", "formal", "para", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Enumerated Objects (enum)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_types_usage.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20enum%2C%20Parameter%20Passing%2C%20ABENENUM_FORMAL_PARA_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

enum, Parameter Passing

This example demonstrates the passing [enumerated objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_object_glosry.htm "Glossary Entry") to a method.

Source Code   

\* Public class definition
CLASS cl\_demo\_enum\_para\_pass DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main
      REDEFINITION .
  PRIVATE SECTION.
    METHODS meth
      IMPORTING
        VALUE(psimple) TYPE simple
        VALUE(penum)   TYPE demo\_cds\_enum\_weekday .
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_enum\_para\_pass IMPLEMENTATION.
  METHOD main.
    meth( psimple = demo\_cds\_enum\_weekday-sat
          penum   = demo\_cds\_enum\_weekday-fri ).
  ENDMETHOD.
  METHOD meth.
\*    IF psimple = demo\_cds\_enum\_weekday-mon. "Syntax error
\*      out->write( \`Sunday Bloody Sunday\` ).
\*    ENDIF.
    psimple = demo\_cds\_enum\_weekday-mon.
    FIELD-SYMBOLS <enum> TYPE demo\_cds\_enum\_weekday.
    ASSIGN psimple TO <enum>.
    IF <enum> = demo\_cds\_enum\_weekday-mon.
      out->write( \`I Don't Like Mondays\` ).
    ENDIF.
    IF penum = demo\_cds\_enum\_weekday-fri.
      out->write( \`Thank God It's Friday\` ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Description   

The method meth has a parameter psimple of generic type simple and a parameter penum of CDS enumerated type DEMO\_CDS\_ENUM\_WEEKDAY. To both, enumerated objects of that enumerated type can be passed. psimple cannot be used in a comparison, where the other operand is an enumerated object. But it is possible to use psimple at a write position and to assign it to a field symbol that is typed with the enumerated type and use that in the comparison. Note that the assignment to the field symbol works since the operand position after ASSIGN is not handled as a read position.


### abenenum_description_abexa.htm

---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_describe_enums DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_describe_enums IMPLEMENTATION. METHOD main. TYPES: BEGIN OF ENUM size, s
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_description_abexa.htm"
abapFile: "abenenum_description_abexa.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abenenum", "description", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Enumerated Objects (enum)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_types_usage.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20enum%2C%20Type%20Description%2C%20ABENENUM_DESCRIPTION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

enum, Type Description

This example demonstrates type description for [enumerated objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_object_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_describe\_enums DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_describe\_enums IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF ENUM size,
        s, m, l, xl, xxl,
      END OF ENUM size.
    FINAL(size) = VALUE size( ).
    out->begin\_section( 'DESCRIBE FIELD' ).
    DESCRIBE FIELD size TYPE FINAL(type)
                        LENGTH FINAL(length) IN BYTE MODE
                        OUTPUT-LENGTH FINAL(output\_length).
    out->write\_data( type
      )->write\_data( length
      )->write\_data( output\_length ).
    out->next\_section( 'CL\_ABAP\_ENUMDESCR' ).
    FINAL(enum\_descr) = CAST cl\_abap\_enumdescr(
      cl\_abap\_typedescr=>describe\_by\_data( size ) ).
    out->write\_data( enum\_descr->kind
      )->write\_data( enum\_descr->type\_kind
      )->write\_data( enum\_descr->base\_type\_kind
      )->write\_data( enum\_descr->members ).
  ENDMETHOD.
ENDCLASS.

Description   

The statement [DESCRIBE FIELD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdescribe_field.htm) and the type description class CL\_ABAP\_ENUMDESCR return properties of an enumerated variable size of an identically named enumerated type.

See also [CDS Enumerated Type, Type Description](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_description_abexa.htm)


### abenenum_deserialization_abexa.htm

---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_deserialize_enums DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_deserialize_enums IMPLEMENTATION. METHOD main. DATA input TYPE c LENG
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_deserialization_abexa.htm"
abapFile: "abenenum_deserialization_abexa.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "types", "field-symbol", "abenenum", "deserialization", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Enumerated Objects (enum)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_types_usage.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20enum%2C%20Deserialization%2C%20ABENENUM_DESERIALIZATION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

enum, Deserialization

This example demonstrates how a dynamically created XML file is deserialized to an [enumerated object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_object_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_deserialize\_enums DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_deserialize\_enums IMPLEMENTATION.
  METHOD main.
    DATA input TYPE c LENGTH 3 VALUE 'XL'.
    cl\_demo\_input=>new( )->request( CHANGING field = input ).
    input = to\_upper( input ).
    TYPES:
      BEGIN OF ENUM size,
        s, m, l, xl, xxl,
      END OF ENUM size.
    FINAL(xml) =
      cl\_abap\_conv\_codepage=>create\_out( )->convert(
        \`<asx:abap version="1.0"\` &&
        \` xmlns:asx="http://www.sap.com/abapxml">\` &&
        \`  <asx:values>\` &&
        \`  <ENUM>\` && input && \`</ENUM>\` &&
        \`  </asx:values>\` &&
        \`</asx:abap>\` ) ##no\_text.
    DATA size TYPE size.
    TRY.
        CALL TRANSFORMATION id
                            SOURCE XML xml
                            RESULT enum = size.
      CATCH cx\_transformation\_error INTO FINAL(exc).
        out->write( exc->previous->get\_text( ) ).
        RETURN.
    ENDTRY.
    out->write( |Name:  { size
                           }\\nValue: { CONV i( size ) }| ).
    FIELD-SYMBOLS <fs> TYPE size.
    ASSIGN (input) TO <fs>.
    IF sy-subrc <> 0.
      out->write( \`Wrong name\` ).
      RETURN.
    ENDIF.
    ASSERT size = <fs>.
  ENDMETHOD.
ENDCLASS.

Description   

A byte string is composed in such a way that it represents an XML file in asXML format for an enumerated object of the enumerated type size and is deserialized as such. Any invalid entries raise an exception.

The dynamic assignment of the name to a field symbol shown in the following also produces the required result, but requires that the enumeration type size is known in the current context. The XML file, on the other hand, can be deserialized into an enumeration object without static knowledge of the enumeration type.


### abenenum_usage_abexa.htm

---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_enumerated_types DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. DATA html TYPE string. METHODS constructor. ENDCLASS.  Public class implementation CLASS cl_demo_enumerated_types IMPLEMENT
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_usage_abexa.htm"
abapFile: "abenenum_usage_abexa.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abenenum", "usage", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Enumerated Objects (enum)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_types_usage.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20enum%2C%20General%20Use%2C%20ABENENUM_USAGE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

enum, General Use

This example demonstrates the general use of [enumerated types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_type_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_enumerated\_types DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    DATA html TYPE string.
    METHODS constructor.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_enumerated\_types IMPLEMENTATION.
  METHOD main.
    DATA: size   TYPE  cl\_demo\_wrap\_browser=>size
                 VALUE cl\_demo\_wrap\_browser=>sz-l,
          format TYPE  cl\_demo\_wrap\_browser=>format
                 VALUE cl\_demo\_wrap\_browser=>fmt-l.
    cl\_demo\_input=>new(
     )->add\_field( EXPORTING text = \`Size (S, M, L, XL)\`
                   CHANGING  field = size
     )->request(   EXPORTING text  = \`Format (L, P)\`
                   CHANGING  field = format ).
    cl\_demo\_wrap\_browser=>show( html   = html
                                size   = size
                                format = format ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    html = cl\_abap\_docu\_external=>get\_abap\_docu\_for\_adt(
       EXPORTING
        language = COND #( WHEN sy-langu = 'D' THEN 'DE' ELSE 'EN' )
        version  = if\_abap\_docu=>unicode ).
  ENDMETHOD.
ENDCLASS.

Description   

The class calls the method SHOW of class CL\_DEMO\_WRAP\_BROWSER. Two enumerated types are defined as follows in this class:

TYPES:
  BEGIN OF ENUM size STRUCTURE sz,
    s, m, l, xl,
  END OF ENUM size STRUCTURE sz.
TYPES:
  BEGIN OF ENUM format STRUCTURE fmt,
    l, p,
  END OF ENUM format STRUCTURE fmt.

By using [enumerated structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_structure_glosry.htm "Glossary Entry"), the same name l can occur twice. The method SHOW wraps the method SHOW\_HTML of the class CL\_ABAP\_BROWSER:

METHOD show.
  cl\_abap\_browser=>show\_html(
    html\_string = html
    size    = SWITCH #(  size
                         WHEN sz-s  THEN cl\_abap\_browser=>small
                         WHEN sz-m  THEN cl\_abap\_browser=>medium
                         WHEN sz-l  THEN cl\_abap\_browser=>large
                         WHEN sz-xl THEN cl\_abap\_browser=>xlarge )
    format  = SWITCH #(  format
                         WHEN fmt-l THEN cl\_abap\_browser=>landscape
                         WHEN fmt-p THEN cl\_abap\_browser=>portrait )
    buttons = abap\_true ).
ENDMETHOD.

The input parameters size and format format of the method have the identically named enumerated types and can only contain their enumerated values. These are mapped to the corresponding constants of class CL\_ABAP\_BROWSER. These constants are to be regarded as a workaround for real enumerated types, which did not exist when CL\_ABAP\_BROWSER was developed.

Enumerated values can be entered for the size and format when the class is executed. The internal transfer to the program takes place by deserializing the character-like values to the local enumerated variables size and format. The exception for invalid values is caught internally, whereby the enumerated variables are initialized, which corresponds to the values of the enumerated constants sz-s and fmt-l.
