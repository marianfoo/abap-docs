# ABAP - Keyword Documentation / ABAP - Programming Language / ABAP Syntax / ABAP Statements / Operands / Data Objects in Operand Positions

Included pages: 6



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.55](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenoperands_data_objects.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands_data_objects.htm)
- [abendata_objects_usage_reading.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_objects_usage_reading.htm)
- [abendata_objects_usage_writing.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_objects_usage_writing.htm)
- [abenoffset_length.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoffset_length.htm)
- [abendata_process_fields_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_process_fields_abexa.htm)

**Bundle Contains**: 5 documentation pages
**Version**: ABAP 7.55
**Generated**: 2025-09-01T11:25:45.721Z

---

### abenoperands_data_objects.htm

> **📖 Official SAP Documentation**: [abenoperands_data_objects.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands_data_objects.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) → 

Data Objects in Operand Positions

When using data objects in operand positions, read positions and write positions must be distinguished. The data type and content of the specified data objects must also be appropriate for the operand position.

-   [Read Positions](javascript:call_link\('abendata_objects_usage_reading.htm'\))

-   [Write Positions](javascript:call_link\('abendata_objects_usage_writing.htm'\))

-   [Substring Access](javascript:call_link\('abenoffset_length.htm'\))

Continue
[Read Positions](javascript:call_link\('abendata_objects_usage_reading.htm'\))
[Write Positions](javascript:call_link\('abendata_objects_usage_writing.htm'\))
[Substring Access](javascript:call_link\('abenoffset_length.htm'\))



**📖 Source**: [abenoperands_data_objects.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands_data_objects.htm)

### abendata_objects_usage_reading.htm

> **📖 Official SAP Documentation**: [abendata_objects_usage_reading.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_objects_usage_reading.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) → 

Read Positions

At a read position, the content of an operand is read but not changed when the statement is executed. Data objects can be specified as follows at read positions:

-   Specification of a [literal](javascript:call_link\('abenliteral_glosry.htm'\) "Glossary Entry").
    

-   Specification of a [data object visible](javascript:call_link\('abenlifetime_and_visibility.htm'\)) at this position using the identifier dobj, a [field symbol](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") <fs>, or a data reference dref->\* dereferenced using the [dereferencing operator](javascript:call_link\('abendereferencing_operat_glosry.htm'\) "Glossary Entry") \->\* if dref is typed completely.
    Here, the identifiers of data objects also include the specification of [text symbols](javascript:call_link\('abentext_symbol_glosry.htm'\) "Glossary Entry") using the following:
    ... text-idf ...,
    Here, idf is the three-character ID of the text symbol or chaining of reference variables. If a field symbol is used, it must be assigned to a memory area and a data reference must point to a data object, otherwise an uncatchable exception is raised. As an alternative to specifying a text symbol using text-idf, the three-character ID of a text symbol can also be appended to the [text field literal](javascript:call_link\('abentext_field_literal_glosry.htm'\) "Glossary Entry") in parentheses:
    ... '...'(idf) ...
    If the text symbol exists in the currently loaded [text pool](javascript:call_link\('abentext_pool_glosry.htm'\) "Glossary Entry"), then the content of the corresponding text symbol is used instead of the text field literal, otherwise the literal is used.

-   If the data object is an internal table, the expressions dobj\[\], <fs>\[\], or dref->\*\[\] can also be used. An exception to this is specification of the internal table of a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), where \[\] cannot be appended to the name. When specifying dobj\[\], this guarantees that the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry") is addressed and no possible [header lines](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"). If an internal table does not have a header line, its very name dobj (without \[\]) is interpreted as the table body in all operand positions. However, if an internal table does have a header line, its very name dobj (without \[\]) is interpreted as the header line and not as the table body in almost all operand positions. The operand positions in which the name of an internal table with a header line is interpreted as the internal table are listed in [internal tables with headers](javascript:call_link\('abenitab_header_line.htm'\)).

-   Specification of a [subarea](javascript:call_link\('abenoffset_length.htm'\)) of a character-like or byte-like data object -or a character-like initial part of a structure- by specifying an [offset/length](javascript:call_link\('abenoffset_length_specific_glosry.htm'\) "Glossary Entry").

-   At some positions, numeric values must be specified directly as digits. In contrast to [numeric literals](javascript:call_link\('abennumeric_literal_glosry.htm'\) "Glossary Entry"), it is often not possible to specify a plus/minus sign. Examples are numbers specified in declarative statements for the length of elementary data objects or for the initial memory requirements of internal tables.

Hints

-   Text symbols cannot be listed at all read positions. For example, they are not allowed for specifying the target of dynamic [executions](javascript:call_link\('abenabap_execution.htm'\)).

-   A [system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") should only be specified as an operand in a read position if its content is not set by the same statement. Otherwise, this can lead to undefined system behavior.

-   The predicate expressions [IS ASSIGNED](javascript:call_link\('abenlogexp_assigned.htm'\)) and [IS BOUND](javascript:call_link\('abenlogexp_assigned.htm'\)) can be used to check the usability of field symbols and data references.

-   A data reference variable with a generic static type can only be deserialized using the statement [ASSIGN dref->\* TO <fs>](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)).

-   At many read positions, [functions or expressions](javascript:call_link\('abenoperands_expressions.htm'\)) can be specified instead of data objects.

-   [Enumerated objects](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") with an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") can be used in all read positions in which the operand type is their enumerated type or in which the operand is converted to one of the character-like types c or string.



**📖 Source**: [abendata_objects_usage_reading.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_objects_usage_reading.htm)

### abendata_objects_usage_writing.htm

> **📖 Official SAP Documentation**: [abendata_objects_usage_writing.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_objects_usage_writing.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) → 

Write Positions

At a write position, the content of an operand is changed when the statement is executed. Only modifiable data objects (that is, no literals, text symbols, constants, or non-modifiable formal parameters) can be specified as follows at write positions:

-   Specification of a [visible data object](javascript:call_link\('abenlifetime_and_visibility.htm'\)) specified at this position using the identifier dobj, a field symbol <fs>, or a dereferenced data reference dref->\* if dref is typed completely. Like in [read positions](javascript:call_link\('abenreading_position_glosry.htm'\) "Glossary Entry"), \[\] can be appended to internal tables to address the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry").

-   Specification of a [subarea](javascript:call_link\('abenoffset_length.htm'\)) of a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") character-like or byte-like data object using an [offset/length](javascript:call_link\('abenoffset_length_specific_glosry.htm'\) "Glossary Entry") specification. An offset or length specification can not be made in write positions for data objects of the [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data types string and xstring.

-   At a [declaration position](javascript:call_link\('abendeclaration_position_glosry.htm'\) "Glossary Entry"), an [inline declaration](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry") of a data object or field symbol can be made using a [declaration expression](javascript:call_link\('abendeclaration_expression_glosry.htm'\) "Glossary Entry").

-   [Writable expressions](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") can be listed in a [result position](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry").

There are write-only positions, where an operand is overwritten without being read first, and write positions where an operand is read and written are both available.

Hints

-   In [some write positions](javascript:call_link\('abenexpression_positions_write.htm'\)), certain expressions can also be specified.

-   [Enumerated variables](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry") can only be used in write positions where the operand type is the enumerated type and only the associated [enumerated values](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry") can be written.



**📖 Source**: [abendata_objects_usage_writing.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_objects_usage_writing.htm)

### abenoffset_length.htm

> **📖 Official SAP Documentation**: [abenoffset_length.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoffset_length.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) → 

Substring Access

In operand positions, it is only possible to access subareas of certain data objects by specifying an offset or length:

Syntax

dobj*\[*+off*\]**\[*(len)*\]*

<fs>*\[*+off*\]**\[*(len)*\]*

dref->\**\[*+off*\]**\[*(len)*\]*

Effect

An offset or length specification is directly appended directly to the identifier dobj of the data object, an <fs> field symbol, or a dereferenced data reference variable dref->\*. Offsets or lengths can be specified for:

-   [Elementary](javascript:call_link\('abenelementary_data_object_glosry.htm'\) "Glossary Entry") [byte-like data objects](javascript:call_link\('abenbyte_like_data_object_glosry.htm'\) "Glossary Entry")

-   [Elementary](javascript:call_link\('abenelementary_data_object_glosry.htm'\) "Glossary Entry") [character-like data objects](javascript:call_link\('abencharlike_data_object_glosry.htm'\) "Glossary Entry")

-   [Flat structures](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry") where one of the following prerequisites must be met:

-   The structure only contains flat character-like components.

-   The first fragment of the [structural fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") is flat and character-like, and the substring addressed by specifying the offset and length is located within this fragment.

The following restrictions apply:

-   At [write positions](javascript:call_link\('abenwriting_position_glosry.htm'\) "Glossary Entry"), only flat data objects are allowed, that is, write access to substrings of strings is not possible.

-   Access to substrings of strings is also not possible in the following [read positions](javascript:call_link\('abenreading_position_glosry.htm'\) "Glossary Entry"):

-   Specification of dobj*\[*+off*\]**\[*(len)*\]* as a memory area [mem\_area](javascript:call_link\('abapassign_mem_area_static_dobj.htm'\)) of the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)).

-   Specification of dobj*\[*+off*\]**\[*(len)*\]* as an argument of the statement [GET REFERENCE](javascript:call_link\('abapget_reference.htm'\)) or of the reference operator [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\)).

-   Specification of dobj*\[*+off*\]**\[*(len)*\]* as an actual parameter for input parameters when calling [methods](javascript:call_link\('abenmethod_calls.htm'\)), [function modules](javascript:call_link\('abapcall_function.htm'\)) , and [subroutines](javascript:call_link\('abapperform.htm'\)) .

-   Offsets and lengths cannot be specified for literals or text symbols.

-   An offset/length specification cannot be attached directly to a table expression [itab\[ ... \]](javascript:call_link\('abentable_expressions.htm'\)), but to a [chaining](javascript:call_link\('abentable_exp_chaining.htm'\)) whose last position is a suitable structure component after a structure component selector.

-   No offset or length can be specified for an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") with an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry"), regardless of the [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry").

-   In case of dynamically [specified operands](javascript:call_link\('abenoperands_specifying.htm'\)) in parentheses, no length specification can be made.

-   A dereferenced data reference variable dref->\* must be typed completely.

-   For a [writable expression](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry"), no offsets or lengths can be specified as [memory areas](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)) of the statement ASSIGN or as arguments of the reference operator [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\)) (table expressions only).

The segment of the data object is used that has the offset specified in off and the length specified in len in characters or bytes. No memory area outside the field boundaries can be addressed, except for in the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)). In the case of an offset specification without a length, the entire substring is addressed from off characters; in the case of a length specification without an offset, the first len characters are addressed (different rules apply to the statement [ASSIGN](javascript:call_link\('abapassign.htm'\))).

The operands off and len expect data objects of the type i, which must contain positive integers, with the following exceptions.

-   The length 0 can be specified for [strings](javascript:call_link\('abenstring_glosry.htm'\) "Glossary Entry").

-   A negative offset, but never length 0, can be specified if an <fs> field symbol is specified in the statement [ASSIGN](javascript:call_link\('abapassign_mem_area_static_dobj.htm'\)) for dobj.

-   If off is smaller than the length of dobj, an asterisk (\*) can be entered for len. The upper limit of dobj then determines the upper limit of the memory area.

If the prerequisites are not met, or if the subarea defined by off and len is not fully included in the data object, except in the case of [ASSIGN](javascript:call_link\('abapassign.htm'\)), a syntax error occurs if statically identifiable. Otherwise, an exception of the class CX\_SY\_RANGE\_OUT\_OF\_BOUNDS is raised. If off is specified as a numeric literal, it cannot be preceded by a plus/minus sign.

The offset and length specifications are counted in characters for character-like data objects and otherwise in bytes.

A substring specified by an offset or length specification is treated like a data object of the specified length. The data type depends on the data type of the original data object, the field symbol, or the data reference variable, as shown below:

Original Data Type

Data Type of Substring

c

c

n

n

d

n

t

n

string

string

x

x

xstring

xstring

Structure type

c

In a substring access, if the length of the substring matches the length of the structure to a structure exactly, the substring does not have data type c but is handled like the structure itself.

Hints

-   For reads on substrings of character-like data objects, built-in [substring functions](javascript:call_link\('abensubstring_functions.htm'\)) that allow searches for substrings and offsets/lengths are also available. The substring functions can also be used to process arguments where offsets and lengths cannot be specified, such as data objects with an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") because there is an implicit conversion to string.

-   It is recommended to always explicitly specify offsets with the value 0,that is, dobj+0(len) instead of dobj(len) to differentiates substring access in the source code clearly from other language constructs that also contain parentheses, such as dynamic specifications, method calls, or inline declarations.

-   A specification of dobj+0(\*), dobj+0, or dobj(\*) is always interpreted as dobj. In this case, dobj can also be a data object where substring access according to the rules above is not possible.

-   No substring access cnt(len), sum(len) can be performed on data objects named cnt and sum unless an offset is specified explicitly. The compiler always interprets such an entry as a [number](javascript:call_link\('abapcnt.htm'\)) or [sum](javascript:call_link\('abapsum.htm'\)) of a field len in the group level processing of an [extract dataset](javascript:call_link\('abenextract_dataset_glosry.htm'\) "Glossary Entry").

-   [Obsolete syntax forms](javascript:call_link\('abentokenization_obsolete.htm'\)) can still occur outside of classes in connection with substring accesses.

-   The statement [MOVE PERCENTAGE](javascript:call_link\('abapmove_percentage.htm'\)) represents an obsolete form of substring access.

Example

The following structure has character-like and non-character-like components:

DATA:
  BEGIN OF struc,
    a TYPE c LENGTH 3,    "Length 3 characters
    b TYPE n LENGTH 4,    "Length 4 characters
    c TYPE d,             "Length 8 characters
    d TYPE t,             "Length 6 characters
    e TYPE decfloat16,    "Length 8 bytes
    f TYPE c LENGTH 28,   "Length 28 characters
    g TYPE x LENGTH 2,    "Length 2 bytes
  END OF struc.

The [fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") splits the structure into five areas, F1 - F5.

\[ aaa | bbbb | cccccccc | ddd | AAA | eeee | fffffffffffff | gg \]
\[            F1               |  F2 |  F3  |       F4      | F5 \]

Offset and length accesses are only possible on the character-like initial fragment F1 only, for example struc(21) or struc+7(14). An access such as struc+57(2) is not allowed.

Executable Example

[Substrings](javascript:call_link\('abendata_process_fields_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Substrings](javascript:call_link\('abendata_process_fields_abexa.htm'\))



**📖 Source**: [abenoffset_length.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoffset_length.htm)

### abendata_process_fields_abexa.htm

> **📖 Official SAP Documentation**: [abendata_process_fields_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_process_fields_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) →  [Substring Access](javascript:call_link\('abenoffset_length.htm'\)) → 

Substrings

This example demonstrates how substrings can be accessed.

Source Code

REPORT demo\_data\_process\_fields.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA time TYPE t VALUE '172545'.
    DATA: f1(8)  TYPE c VALUE 'ABCDEFGH',
          f2(20) TYPE c VALUE '12345678901234567890'.
    DATA: f3(8) TYPE c VALUE 'ABCDEFGH',
          f4(8) TYPE c.
    DATA: o     TYPE i VALUE 2,
          l     TYPE i VALUE 4.
    DATA: string(20) TYPE c,
          number(8)  TYPE c VALUE '123456',
          offset     TYPE i VALUE 8,
          length     TYPE i VALUE 12.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( \`Example 1\`
      )->write( time
      )->write( time+2(2)
      )->write( time+2(4) ).
    CLEAR time+2(4).
    out->write( time ).
    out->next\_section( \`Example 2\` ).
    f2+6(5) = f1+3(5).
    out->write( f1
      )->write( f2 ).
    out->next\_section( \`Example 3\` ).
    f4 = f3.
    out->write( f4 ).
    f4 = f3+o(l).
    out->write( f4 ).
    f4+o(l) = f3.
    out->write( f4 ).
    CLEAR f4.
    f4+o(l) = f3.
    out->write( f4 ).
    f4+o(l) = f3+o(l).
    out->write( f4 ).
    out->next\_section( \`Example 4\` ).
    WRITE number(6) TO string+offset(length) LEFT-JUSTIFIED.
    out->write( string ).
    CLEAR string.
    WRITE number(6) TO string+offset(length) CENTERED.
    out->write( string ).
    CLEAR string.
    WRITE number TO string+offset(length) RIGHT-JUSTIFIED.
    out->display( string ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In the first part, the minutes of a time field are selected by specifying an offset. Then the minutes and seconds are set to their initial values by specifying an offset in the CLEAR statement.

In the second part, the five digit sequence 78901 from the field f2 is replaced with DEFGH from f1 by specifying offsets and lengths.

In the third part, assignments are used. First, the content of f1 is assigned to f2 without offset specifications. The same is then done with offsets and lengths for f1. The next three assignments overwrite the content of f2 with an offset of 2. Note that f2 is padded on the right with blanks, in accordance with the conversion rule for source type c.

In the fourth part, the WRITE TO statement is used. The first six digits of the field number are written to the last 12 digits of the string field as left-aligned, centered, and right-aligned places.



**📖 Source**: [abendata_process_fields_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_process_fields_abexa.htm)

### abenoffset_length.htm

> **📖 Official SAP Documentation**: [abenoffset_length.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoffset_length.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenoffset_length.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoffset_length.htm)


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) → 

Substring Access

In operand positions, it is only possible to access subareas of certain data objects by specifying an offset or length:

Syntax

dobj*\[*+off*\]**\[*(len)*\]*

<fs>*\[*+off*\]**\[*(len)*\]*

dref->\**\[*+off*\]**\[*(len)*\]*

Effect

An offset or length specification is directly appended directly to the identifier dobj of the data object, an <fs> field symbol, or a dereferenced data reference variable dref->\*. Offsets or lengths can be specified for:

-   [Elementary](javascript:call_link\('abenelementary_data_object_glosry.htm'\) "Glossary Entry") [byte-like data objects](javascript:call_link\('abenbyte_like_data_object_glosry.htm'\) "Glossary Entry")

-   [Elementary](javascript:call_link\('abenelementary_data_object_glosry.htm'\) "Glossary Entry") [character-like data objects](javascript:call_link\('abencharlike_data_object_glosry.htm'\) "Glossary Entry")

-   [Flat structures](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry") where one of the following prerequisites must be met:

-   The structure only contains flat character-like components.

-   The first fragment of the [structural fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") is flat and character-like, and the substring addressed by specifying the offset and length is located within this fragment.

The following restrictions apply:

-   At [write positions](javascript:call_link\('abenwriting_position_glosry.htm'\) "Glossary Entry"), only flat data objects are allowed, that is, write access to substrings of strings is not possible.

-   Access to substrings of strings is also not possible in the following [read positions](javascript:call_link\('abenreading_position_glosry.htm'\) "Glossary Entry"):

-   Specification of dobj*\[*+off*\]**\[*(len)*\]* as a memory area [mem\_area](javascript:call_link\('abapassign_mem_area_static_dobj.htm'\)) of the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)).

-   Specification of dobj*\[*+off*\]**\[*(len)*\]* as an argument of the statement [GET REFERENCE](javascript:call_link\('abapget_reference.htm'\)) or of the reference operator [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\)).

-   Specification of dobj*\[*+off*\]**\[*(len)*\]* as an actual parameter for input parameters when calling [methods](javascript:call_link\('abenmethod_calls.htm'\)), [function modules](javascript:call_link\('abapcall_function.htm'\)) , and [subroutines](javascript:call_link\('abapperform.htm'\)) .

-   Offsets and lengths cannot be specified for literals or text symbols.

-   An offset/length specification cannot be attached directly to a table expression [itab\[ ... \]](javascript:call_link\('abentable_expressions.htm'\)), but to a [chaining](javascript:call_link\('abentable_exp_chaining.htm'\)) whose last position is a suitable structure component after a structure component selector.

-   No offset or length can be specified for an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") with an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry"), regardless of the [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry").

-   In case of dynamically [specified operands](javascript:call_link\('abenoperands_specifying.htm'\)) in parentheses, no length specification can be made.

-   A dereferenced data reference variable dref->\* must be typed completely.

-   For a [writable expression](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry"), no offsets or lengths can be specified as [memory areas](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)) of the statement ASSIGN or as arguments of the reference operator [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\)) (table expressions only).

The segment of the data object is used that has the offset specified in off and the length specified in len in characters or bytes. No memory area outside the field boundaries can be addressed, except for in the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)). In the case of an offset specification without a length, the entire substring is addressed from off characters; in the case of a length specification without an offset, the first len characters are addressed (different rules apply to the statement [ASSIGN](javascript:call_link\('abapassign.htm'\))).

The operands off and len expect data objects of the type i, which must contain positive integers, with the following exceptions.

-   The length 0 can be specified for [strings](javascript:call_link\('abenstring_glosry.htm'\) "Glossary Entry").

-   A negative offset, but never length 0, can be specified if an <fs> field symbol is specified in the statement [ASSIGN](javascript:call_link\('abapassign_mem_area_static_dobj.htm'\)) for dobj.

-   If off is smaller than the length of dobj, an asterisk (\*) can be entered for len. The upper limit of dobj then determines the upper limit of the memory area.

If the prerequisites are not met, or if the subarea defined by off and len is not fully included in the data object, except in the case of [ASSIGN](javascript:call_link\('abapassign.htm'\)), a syntax error occurs if statically identifiable. Otherwise, an exception of the class CX\_SY\_RANGE\_OUT\_OF\_BOUNDS is raised. If off is specified as a numeric literal, it cannot be preceded by a plus/minus sign.

The offset and length specifications are counted in characters for character-like data objects and otherwise in bytes.

A substring specified by an offset or length specification is treated like a data object of the specified length. The data type depends on the data type of the original data object, the field symbol, or the data reference variable, as shown below:

Original Data Type

Data Type of Substring

c

c

n

n

d

n

t

n

string

string

x

x

xstring

xstring

Structure type

c

In a substring access, if the length of the substring matches the length of the structure to a structure exactly, the substring does not have data type c but is handled like the structure itself.

Hints

-   For reads on substrings of character-like data objects, built-in [substring functions](javascript:call_link\('abensubstring_functions.htm'\)) that allow searches for substrings and offsets/lengths are also available. The substring functions can also be used to process arguments where offsets and lengths cannot be specified, such as data objects with an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") because there is an implicit conversion to string.

-   It is recommended to always explicitly specify offsets with the value 0,that is, dobj+0(len) instead of dobj(len) to differentiates substring access in the source code clearly from other language constructs that also contain parentheses, such as dynamic specifications, method calls, or inline declarations.

-   A specification of dobj+0(\*), dobj+0, or dobj(\*) is always interpreted as dobj. In this case, dobj can also be a data object where substring access according to the rules above is not possible.

-   No substring access cnt(len), sum(len) can be performed on data objects named cnt and sum unless an offset is specified explicitly. The compiler always interprets such an entry as a [number](javascript:call_link\('abapcnt.htm'\)) or [sum](javascript:call_link\('abapsum.htm'\)) of a field len in the group level processing of an [extract dataset](javascript:call_link\('abenextract_dataset_glosry.htm'\) "Glossary Entry").

-   [Obsolete syntax forms](javascript:call_link\('abentokenization_obsolete.htm'\)) can still occur outside of classes in connection with substring accesses.

-   The statement [MOVE PERCENTAGE](javascript:call_link\('abapmove_percentage.htm'\)) represents an obsolete form of substring access.

Example

The following structure has character-like and non-character-like components:

DATA:
  BEGIN OF struc,
    a TYPE c LENGTH 3,    "Length 3 characters
    b TYPE n LENGTH 4,    "Length 4 characters
    c TYPE d,             "Length 8 characters
    d TYPE t,             "Length 6 characters
    e TYPE decfloat16,    "Length 8 bytes
    f TYPE c LENGTH 28,   "Length 28 characters
    g TYPE x LENGTH 2,    "Length 2 bytes
  END OF struc.

The [fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") splits the structure into five areas, F1 - F5.

\[ aaa | bbbb | cccccccc | ddd | AAA | eeee | fffffffffffff | gg \]
\[            F1               |  F2 |  F3  |       F4      | F5 \]

Offset and length accesses are only possible on the character-like initial fragment F1 only, for example struc(21) or struc+7(14). An access such as struc+57(2) is not allowed.

Executable Example

[Substrings](javascript:call_link\('abendata_process_fields_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Substrings](javascript:call_link\('abendata_process_fields_abexa.htm'\))
