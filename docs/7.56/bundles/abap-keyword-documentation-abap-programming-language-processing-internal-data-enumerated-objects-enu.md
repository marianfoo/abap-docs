# ABAP - Keyword Documentation / ABAP - Programming Language / Processing Internal Data / Enumerated Objects (Enums)

Included pages: 4



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenenumerated_types_usage.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenumerated_types_usage.htm)
- [abenenum_usage_abexa.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenum_usage_abexa.htm)
- [abenenum_description_abexa.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenum_description_abexa.htm)
- [abenenum_deserialization_abexa.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenum_deserialization_abexa.htm)

**Bundle Contains**: 4 documentation pages
**Version**: ABAP 7.56
**Generated**: 2025-09-01T11:25:45.491Z

---

### abenenumerated_types_usage.htm

> **📖 Official SAP Documentation**: [abenenumerated_types_usage.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenumerated_types_usage.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) → 

Enumerated Objects (Enums)

This section summarizes the use of [enumerated objects](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry"), that is, data objects with [enumerated types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry").

-   [Declaration](#abenenumerated-types-usage-1-------processing-of-enumerated-objects---@ITOC@@ABENENUMERATED_TYPES_USAGE_2)
    -   [Operand Positions for Enumerated Objects](#abenenumerated-types-usage-3-----------value-assignments---@ITOC@@ABENENUMERATED_TYPES_USAGE_4)
    -   [Comparisons](#abenenumerated-types-usage-5-----------typing-of-formal-parameters-and-field-symbols---@ITOC@@ABENENUMERATED_TYPES_USAGE_6)
    -   [Access to the Enumerated Value](#abenenumerated-types-usage-7-----------type-descriptions---@ITOC@@ABENENUMERATED_TYPES_USAGE_8)
    -   [Data Interfaces](#abenenumerated-types-usage-9-----------forbidden-uses---@ITOC@@ABENENUMERATED_TYPES_USAGE_10)

Executable Example

[Enumerated Objects, Use](javascript:call_link\('abenenum_usage_abexa.htm'\))

Declaration

An enumerated object is a data object with an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") defined by one of the following TYPES statements:

[TYPES BEGIN OF ENUM enum\_type ...](javascript:call_link\('abaptypes_enum.htm'\))
  [TYPES val1 ...](javascript:call_link\('abaptypes_enum.htm'\))
  [TYPES val2 ...](javascript:call_link\('abaptypes_enum.htm'\))
  ...
[TYPES END OF ENUM enum\_type ...](javascript:call_link\('abaptypes_enum.htm'\))

The technical data type of the content of an enumerated object is the [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry") of the enumerated type. The possible content is defined by the [enumerated values](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry") defined using TYPES val1, TYPES val2, ..., of which exactly one value must have the type-specific initial value. The base type is i by default, but it can also be a different elementary data type. The following enumerated objects exist:

-   Enumerated variables
    
    An [enumerated variable](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry") is a variable defined using
    
    [DATA enum\_var TYPE enum\_type ...](javascript:call_link\('abapdata_enum.htm'\))
    
    that can contain only [enumerated values](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry") of the enumerated type. This is ensured by the ABAP runtime framework and the rules for using enumerated types.
    
-   Enumerated constants
    
    An [enumerated constant](javascript:call_link\('abenenumerated_constant_glosry.htm'\) "Glossary Entry") is used to define a value in the value set of an enumerated type. It is defined in the definition of an enumerated type with
    
    [TYPES val ...](javascript:call_link\('abaptypes_enum.htm'\))
    
    under the name val. It is a constant of the context of its definition and contains the [enumerated value](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry") assigned in the definition. It can be specified in all read positions in which enumerated objects are possible. Its enumerated value is either determined automatically as an integer or can be specified explicitly in the definition.
    
-   Components of enumerated structures
    
    A component of an [enumerated structure](javascript:call_link\('abenenumerated_structure_glosry.htm'\) "Glossary Entry") is a special form of an enumerated constant that exists as a component of a constant structure and not as a single data object. The enumerated structure struc is defined using
    
    [TYPES BEGIN OF ENUM enum\_type STRUCTURE struc ...](javascript:call_link\('abaptypes_enum.htm'\))
    
    This makes the enumerated constants defined using
    
    [TYPES val ...](javascript:call_link\('abaptypes_enum.htm'\))
    
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

The processing of enumerated objects is usually independent of the base type of the enumerated type. Only the enumerated type itself is relevant for all rules specified here. Assignments of enumerated objects with a numeric base type, for example, cannot be assigned to numeric target fields and cannot be compared with numeric fields. The enumerated value in the base type can be accessed using the constructor operators [CONV](javascript:call_link\('abenconv_constructor_enum.htm'\)) and [EXACT](javascript:call_link\('abenexact_constructor_enum.htm'\)) only.

Operand Positions for Enumerated Objects

-   Read positions
    
    Enumerated objects can be used in all [read positions](javascript:call_link\('abendata_objects_usage_reading.htm'\)) in which the operand type is their enumerated type or in which the operand is converted to one of the character-like types c or string. [Substring access](javascript:call_link\('abenoffset_length.htm'\)) is not possible.
    
-   Write positions
    
    Enumerated variables can only be used in [write positions](javascript:call_link\('abendata_objects_usage_writing.htm'\)) in which the operand type is the enumerated type and only the associated enumerated values can be written. If known statically, an attempt to assign a value other than a valid enumerated value to an enumerated variable produces a syntax error. If not known statically, an exception is raised.
    

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

The initial value of the base type is always a valid enumerated value of an enumerated type. Accordingly, an enumerated variable can be set to the initial value of its base type using [CLEAR](javascript:call_link\('abapclear.htm'\)). Assignments of [VALUE enum\_type( )](javascript:call_link\('abenvalue_constructor_params_init.htm'\)) are also possible.

Conversely, enumerated objects can only be assigned to compatible enumerated variables, with the following exception: There is a [conversion rule](javascript:call_link\('abenconversion_enumerated.htm'\)) for assignments of enumerated objects to character-like variables of the types c and string. In this case, the target field is assigned the name of the enumerated constant or the component of the enumerated structure under which the enumerated value of the source field is defined in the enumerated type. Since this rule can produce unexpected results, conversions of this type lead to a message from the extended program check that can be hidden using the pragma ##types.

In structures, each component with an enumerated type forms a separate fragment of the [structure fragment view](javascript:call_link\('abenunicode_fragment_view.htm'\)). In assignments between structures of this type, the fragment views must match so that only components with the same enumerated type can be assigned to each other.

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

For comparisons between enumerated objects, the [comparison rule](javascript:call_link\('abenlogexp_rules_operands_enum.htm'\)) applies that an enumerated object can only be compared with an enumerated object with the same enumerated type. Here, the values of the operands are compared in accordance with their base type.

Each enumerated type has an initial enumerated value, which makes checks with the predicate expression [IS INITIAL](javascript:call_link\('abenlogexp_initial.htm'\)) possible.

Hint

Comparisons do not perform an implicit conversion of an enumerated object to the character-like types c and string. Conversions of this type must be performed explicitly, for example with the conversion operator [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)). This difference between assignments and comparisons is particularly significant when reading from internal tables using the statement [READ TABLE](javascript:call_link\('abapread_table.htm'\)) or [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") and the statement [LOOP AT](javascript:call_link\('abaploop_at_itab_variants.htm'\)) or a [FOR](javascript:call_link\('abenfor_itab.htm'\)) statement. When individual lines are read, the comparison fields of conditions are converted implicitly; this is not the case when multiple lines are read. Implicit conversions produce the message from the extended program check mentioned above.

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

If [formal parameters](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry") of procedures or [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") are [typed](javascript:call_link\('abentyping.htm'\)) with an enumerated type, only enumerated objects with the same enumerated type can be assigned to them. As usual, an exception to this are return values of functional methods that can also be converted to character-like objects of the types c and string.

Enumerated types are covered by the generic types [any](javascript:call_link\('abenbuilt_in_types_generic.htm'\)), [data](javascript:call_link\('abenbuilt_in_types_generic.htm'\)), and [simple](javascript:call_link\('abenbuilt_in_types_generic.htm'\)). When an enumerated object is passed to generically typed formal parameters or in assignments to generically typed field symbols, they inherit the enumerated type. In assignments to field symbols, no castings with the [CASTING](javascript:call_link\('abapassign_casting.htm'\)) addition can be performed and an enumerated type cannot be specified after this addition.

When generically typed formal parameters or field symbols are used for enumerated objects, the restriction applies that only statically known operands with the same [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") are allowed in [read positions](javascript:call_link\('abenread_position_glosry.htm'\) "Glossary Entry") in which an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") is expected to be known statically. This affects, for example, the source field of an assignment to an [enumerated variable](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry") or an operand that is compared with an enumerated object. In [write positions](javascript:call_link\('abenwrite_position_glosry.htm'\) "Glossary Entry") for enumerated objects, however, generic formal parameters or field symbols are allowed for enumerated types. If the operand type is not known statically, the check is only made at runtime in read positions as well.

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
"size = <fs1>.        "<--- Syntax error
"ASSERT size = <fs1>. "<--- Syntax error
<fs2> = <fs1>.
ASSERT <fs1> = <fs2>.

Access to the Enumerated Value

A special [rule](javascript:call_link\('abenconv_constructor_enum.htm'\)) for the conversion operator [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) applies when accessing the enumerated value of an enumerated object:

[... CONV base\_type( enum\_dobj ) ...](javascript:call_link\('abenconv_constructor_enum.htm'\))

If the base type base\_type of an enumerated object enum\_dobj specified as an argument is specified directly or indirectly, CONV returns its enumerated value.

Conversely, a valid enumerated value can be converted to an enumerated object:

[... CONV enum\_type( dobj ) ...](javascript:call_link\('abenconv_constructor_enum.htm'\))

The argument dobj is converted to the base type of the enumerated type enum\_type and CONV returns an enumerated object with this value. Any invalid values raise an exception.

In combinations of these two variants where CONV base\_type( enum\_dobj ) is used as an argument dobj of CONV enum\_type( dobj ), there is a short form:

[... CONV enum\_type( enum\_dobj ) ...](javascript:call_link\('abenconv_constructor_enum.htm'\))

Provided that different enumerated types can have the same base type, an enumerated object of an enumerated type can be converted to the corresponding enumerated object of a different enumerated type.

Hint

The corresponding [rules](javascript:call_link\('abenexact_constructor_enum.htm'\)) applies to the lossless operator [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)), whereby additional losslessness checks are made.

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

The type returned by the statement [DESCRIBE FIELD](javascript:call_link\('abapdescribe_field.htm'\)) for an enumerated object is k. The length is the length of the enumerated values in the basis type in bytes.

In [RTTS](javascript:call_link\('abenrun_time_type_services_glosry.htm'\) "Glossary Entry"), enumerated objects are described by objects of the class CL\_ABAP\_ENUMDESCR. This class can be used for [RTTI](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry") and [RTTC](javascript:call_link\('abenrun_time_type_creation_glosry.htm'\) "Glossary Entry") purposes. Like any enumerated type, an enumerated type created using RTTC is only compatible with itself.

The following attributes exist in a type description of the class CL\_ABAP\_ENUMDESCR:

-   KIND always has the value E for the elementary base type
-   TYPE\_KIND always has the value k as in the statement DESCRIBE FIELD
-   BASE\_TYPE\_KIND describes the base type
-   MEMBERS is a table of the enumerated constants and the associated enumerated values

Executable Example

[Enumerated Objects, Type Description](javascript:call_link\('abenenum_description_abexa.htm'\))

Data Interfaces

The following data interfaces support enumerated types:

The character-like representation of enumerated objects, that is, the result of a c or string, is used for their output and serialization. The output consists of the name with a maximum of thirty characters of the enumerated constant of the current enumerated value in uppercase. Deserializations are performed in the reverse direction. The following are supported:

-   [Data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") with the statements [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) and [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)). When an enumerated object is exported, the enumerated value is stored in the base type and flagged as an enumerated value. Enumerated objects and exported data objects of the base type can be imported to a suitable enumerated object (the value is checked here). No exported enumerated objects, however, can be imported to data objects of the base type.
-   [ABAP file interface](javascript:call_link\('abenfile_interface_glosry.htm'\) "Glossary Entry") with the statements [TRANSFER](javascript:call_link\('abaptransfer.htm'\)) and [READ DATASET](javascript:call_link\('abapread_dataset.htm'\)). In writes and reads to and from a file, enumerated objects are handled like data objects of their base type. In reads from a file to an enumerated object, the system checks whether it is a valid enumerated value.
-   Serializations and deserializations from and to [XML](javascript:call_link\('abenxml_glosry.htm'\) "Glossary Entry") and [JSON](javascript:call_link\('abenjson_glosry.htm'\) "Glossary Entry"). The formats [asXML](javascript:call_link\('abenabap_xslt_asxml_enum.htm'\)) and [asJSON](javascript:call_link\('abenabap_asjson_abap_types_enum.htm'\)) represent the content of enumerated objects in their character-like representation, that is, the name of the enumerated constant of the current enumerated value. Only valid names are allowed in deserializations to an enumerated object.
-   List output with the statement [WRITE](javascript:call_link\('abapwrite-.htm'\)). Like [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)), this statement converts an enumerated object to its character-like representation, that is, the name of the enumerated constant of the current enumerated value. The [output length](javascript:call_link\('abenwrite_output_length.htm'\)) corresponds to the maximum length of the name of 30 characters.

Hint

A deserialization of a name of an enumerated constant is one of the few ways of creating an enumerated value from the name fully dynamically.

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

[Enumerated Objects, Deserialization](javascript:call_link\('abenenum_deserialization_abexa.htm'\))

Forbidden Uses

The following uses are forbidden to ensure that an enumerated object always contains only a single valid enumerated value:

-   Within ABAP, enumerated objects are never interpreted in accordance with their base type. This means that they cannot be used in operand positions that expect numeric, character-like, or byte-like data types. The only exception to this are the operand positions in which an implicit conversion to a character-like type takes place.
-   Enumerated types are not currently supported by the [ABAP Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)). Accordingly, no database tables whose columns have an enumerated type can be defined in the ABAP Dictionary.
-   In both ABAP SQL and Native SQL ([EXEC SQL](javascript:call_link\('abapexec.htm'\)), [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry")), no [host variables](javascript:call_link\('abenhost_variable_glosry.htm'\) "Glossary Entry") or references to ABAP variables with enumerated type can be used. The actual parameters of [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") cannot be typed using enumerated types.
-   No enumerated types are supported for the input fields of [selection screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry").
-   It is not possible to inherit enumerated values from [lists in the list buffer](javascript:call_link\('abenabap_lists_complex.htm'\)), since there are no conversion rules between character-like types and enumerated types.

If an enumerated object is provided with an invalid value due to a gap in the rules, this results in the following behavior:

-   The result of a conversion to c or string is the string <illegal enum value>, which is displayed accordingly in the ABAP Debugger.
-   An enumerated object with an invalid value can be assigned to other enumerated objects with the same enumerated type without being checked.
-   The expressions [CONV base\_type( enum\_dobj )](javascript:call_link\('abenconv_constructor_enum.htm'\)) and [EXACT base\_type( enum\_dobj )](javascript:call_link\('abenexact_constructor_enum.htm'\)) return the invalid value.

An invalid value is to be regarded as an error and should never occur.

Hint

Classic [Dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") represent a known gap. Enumerated types are not supported by dynpros. If dynpro input fields are inherited from a program by using enumerated objects, they are handled like an object of the base type. Any invalid values are passed to the associated enumerated object at the event [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") without being checked. For this reason, enumerated objects should never be linked with classic dynpros.

Example

The program DEMO\_ENUM\_DYNPRO uses an enumerated object on a dynpro. This can produce invalid values in the program.

Continue
![Example](exa.gif "Example") [Enums, Use](javascript:call_link\('abenenum_usage_abexa.htm'\))
![Example](exa.gif "Example") [Enums, Type Description](javascript:call_link\('abenenum_description_abexa.htm'\))
![Example](exa.gif "Example") [Enums, Deserialization](javascript:call_link\('abenenum_deserialization_abexa.htm'\))



**📖 Source**: [abenenumerated_types_usage.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenumerated_types_usage.htm)

### abenenum_usage_abexa.htm

> **📖 Official SAP Documentation**: [abenenum_usage_abexa.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenum_usage_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Enumerated Objects (Enums)](javascript:call_link\('abenenumerated_types_usage.htm'\)) → 

Enums, Use

This example demonstrates the use of [enumerated types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry").

Source Code

REPORT demo\_enumerated\_types.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA html TYPE string.
    CLASS-METHODS:
      class\_constructor,
      main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: size   TYPE  cl\_demo\_wrap\_browser=>size
                 VALUE cl\_demo\_wrap\_browser=>sz-l,
          format TYPE  cl\_demo\_wrap\_browser=>format
                 VALUE cl\_demo\_wrap\_browser=>fmt-l.
    cl\_demo\_input=>add\_field( EXPORTING text = \`Size (S, M, L, XL)\`
                              CHANGING  field = size ).
    cl\_demo\_input=>request(   EXPORTING text  = \`Format (L, P)\`
                              CHANGING  field = format ).
    cl\_demo\_wrap\_browser=>show( html   = html
                                size   = size
                                format = format ).  ENDMETHOD.
  METHOD class\_constructor.
    html = cl\_abap\_docu\_external=>get\_abap\_docu\_for\_adt(
       EXPORTING
        language = COND #( WHEN sy-langu = 'D' THEN 'DE' ELSE 'EN' )
        version  = if\_abap\_docu=>unicode ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The program calls the method SHOW of class CL\_DEMO\_WRAP\_BROWSER . Two enumerated types are defined as follows in this class:

TYPES:
  BEGIN OF ENUM size STRUCTURE sz,
    s, m, l, xl,
  END OF ENUM size STRUCTURE sz.
TYPES:
  BEGIN OF ENUM format STRUCTURE fmt,
    l, p,
  END OF ENUM format STRUCTURE fmt.

The use of [enumerated structures](javascript:call_link\('abenenumerated_structure_glosry.htm'\) "Glossary Entry") means that the same name l can occur twice. The method SHOW wraps the method SHOW\_HTML of the class CL\_ABAP\_BROWSER:

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

Enumerated values can be entered for the size and format when the program is executed. The internal transfer to the program takes place by deserializing the character-like values to the local enumerated variables size and format. The exception for invalid values is caught internally, whereby the enumerated variables are initialized, which corresponds to the values of the enumerated constants sz-s and fmt-l.



**📖 Source**: [abenenum_usage_abexa.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenum_usage_abexa.htm)

### abenenum_description_abexa.htm

> **📖 Official SAP Documentation**: [abenenum_description_abexa.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenum_description_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Enumerated Objects (Enums)](javascript:call_link\('abenenumerated_types_usage.htm'\)) → 

Enums, Type Description

This example demonstrates type description in [enumerated objects](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry").

Source Code

REPORT demo\_describe\_enums.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    TYPES:
      BEGIN OF ENUM size,
        s, m, l, xl, xxl,
      END OF ENUM size.
    DATA(size) = VALUE size( ).
    out->begin\_section( 'DESCRIBE FIELD' ).
    DESCRIBE FIELD size TYPE DATA(type)
                        LENGTH DATA(length) IN BYTE MODE
                        OUTPUT-LENGTH DATA(output\_length).
    out->write\_data( type
      )->write\_data( length
      )->write\_data( output\_length ).
    out->next\_section( 'CL\_ABAP\_ENUMDESCR' ).
    DATA(enum\_descr) = CAST cl\_abap\_enumdescr(
      cl\_abap\_typedescr=>describe\_by\_data( size ) ).
    out->write\_data( enum\_descr->kind
      )->write\_data( enum\_descr->type\_kind
      )->write\_data( enum\_descr->base\_type\_kind
      )->write\_data( enum\_descr->members ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The statement [DESCRIBE FIELD](javascript:call_link\('abapdescribe_field.htm'\)) and the type description class CL\_ABAP\_ENUMDESCR are applied to an enumerated variable size of the identically named enumerated type.



**📖 Source**: [abenenum_description_abexa.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenum_description_abexa.htm)

### abenenum_deserialization_abexa.htm

> **📖 Official SAP Documentation**: [abenenum_deserialization_abexa.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenum_deserialization_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenenum_deserialization_abexa.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenum_deserialization_abexa.htm)


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Enumerated Objects (Enums)](javascript:call_link\('abenenumerated_types_usage.htm'\)) → 

Enums, Deserialization

This example demonstrates how a dynamically created XML file is deserialized to an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry").

Source Code

REPORT.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA input TYPE c LENGTH 3 VALUE 'XL'.
    cl\_demo\_input=>request( CHANGING field = input ).
    input = to\_upper( input ).
    TYPES:
      BEGIN OF ENUM size,
        s, m, l, xl, xxl,
      END OF ENUM size.
    DATA(xml) =
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
      CATCH cx\_transformation\_error INTO DATA(exc).
        cl\_demo\_output=>display( exc->previous->get\_text( ) ).
        RETURN.
    ENDTRY.
    cl\_demo\_output=>display( |Name:  { size
                           }\\nValue: { CONV i( size ) }| ).
    FIELD-SYMBOLS <fs> TYPE size.
    ASSIGN (input) TO <fs>.
    IF sy-subrc <> 0.
      cl\_demo\_output=>display( \`Wrong name\` ).
      RETURN.
    ENDIF.
    ASSERT size = <fs>.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

A byte string is composed in such a way that it represents an XML file in asXML format for an enumerated object of the enumerated type size and is deserialized as such. Any invalid entries raise an exception.

Next, the dynamic assignment of a name to a field symbol is displayed. This is successful but the prerequisite here is that the enumerated type size is known in the current context. However, the XML file can be deserialized in an enumerated object without static knowledge of the enumerated type.
