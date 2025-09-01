# ABAP Keyword Documentation / ABAP − Reference / ABAP Syntax / ABAP Statements / Operands / Data Objects in Operand Positions

Included pages: 6


### abenoperands_data_objects.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) → 

Data Objects in Operand Positions

For data objects in operand positions, you must distinguish between read and write positions. The data type and content of the specified data objects must also be appropriate for the operand position.

-   [Read positions](javascript:call_link\('abendata_objects_usage_reading.htm'\))

-   [Write positions](javascript:call_link\('abendata_objects_usage_writing.htm'\))

-   [Subfield access](javascript:call_link\('abenoffset_length.htm'\))

Continue
[Read Positions](javascript:call_link\('abendata_objects_usage_reading.htm'\))
[Writer Positions](javascript:call_link\('abendata_objects_usage_writing.htm'\))
[Substring Access](javascript:call_link\('abenoffset_length.htm'\))


### abendata_objects_usage_reading.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) → 

Read Positions

At a read position, the content of an operand is only read, and not changed, when the statement is executed. Data objects can be specified as followed at read positions:

-   As a [literal](javascript:call_link\('abenliteral_glosry.htm'\) "Glossary Entry").
    

-   As a [data object visible](javascript:call_link\('abenlifetime_and_visibility.htm'\)) in this place using a name dobj, a [field symbol](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") <fs>, or a data reference dref->\* dereferenced using the [dereferencing operator](javascript:call_link\('abendereferencing_operat_glosry.htm'\) "Glossary Entry") \->\* (providing dref is specified in full).
    Here, the names of data objects also include any [text symbols](javascript:call_link\('abentext_symbol_glosry.htm'\) "Glossary Entry") specified using the following:
    ... text-idf ...,
    Here, idf is the three-character ID of the text symbol or chainings of reference variables. If a field symbol is used, it must be assigned to a memory area and a data reference must point to a data object. Otherwise an unhandleable exception is raised. As an alternative to specifying a text symbol using text-idf, the three-character code of a text symbol can be appended to the [text field literal](javascript:call_link\('abentext_field_literal_glosry.htm'\) "Glossary Entry") in parentheses:
    ... '...'(idf) ...
    If the text symbol exists in the currently loaded [text pool](javascript:call_link\('abentext_pool_glosry.htm'\) "Glossary Entry"), the content of the text symbol is used instead of the text field literal, otherwise the literal is used.

-   If the data object is an internal table, the expressions dobj\[\], <fs>\[\], or dref->\*\[\] can also be used. An exception to this is when specifying the internal table of a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), where \[\] cannot be appended to the name. In the case of dobj\[\], this ensures that the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry") is addressed and no [header lines](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"). If an internal table does not have a header line, its simple name dobj (without \[\]) is interpreted as the table body in all operand positions. However, if an internal table does have a header line, its simple name dobj (without \[\]) is interpreted as the header line and not the table body in almost all operand positions. The operand positions in which the name of an internal table with a header line is interpreted as the internal table are specified under [internal tables with headers](javascript:call_link\('abenitab_header_line.htm'\)).

-   As a [subarea](javascript:call_link\('abenoffset_length.htm'\)) of a character-like or byte-like data object (or a character-like initial part of a structure) by specifying an [offset/length](javascript:call_link\('abenoffset_length_specific_glosry.htm'\) "Glossary Entry").

-   In some positions, number values must be specified directly as digits, although it is often not possible to specify a sign (which is not the case with [numeric literals](javascript:call_link\('abennumeric_literal_glosry.htm'\) "Glossary Entry")). Examples are numbers specified in declarative statements for the length of elementary data objects or for the initial memory requirements of internal tables.

Notes

-   Text symbols cannot be listed at all read positions. For example, they are not permitted for specifying the target of dynamic [executions](javascript:call_link\('abenabap_execution.htm'\)).

-   A [system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") should only be specified as an operand in a reading position if its content is not set by the same statement, since otherwise undefined behavior may occur.

-   The predicate expressions [IS ASSIGNED](javascript:call_link\('abenlogexp_assigned.htm'\)) and [IS BOUND](javascript:call_link\('abenlogexp_assigned.htm'\)) can be used to check whether field symbols or data references.

-   A data reference variable with a generic static type can only be deserialized using the statement [ASSIGN dref->\* TO <fs>](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)).

-   In many reading positions, [functions or expressions](javascript:call_link\('abenoperands_expressions.htm'\)) can be specified as well as data objects.

-   [Enumerated objects](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") with an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") can be used in all reading positions in which the operand type is their enumerated type or in which the operand is converted to one of the character-like types c or string.


### abendata_objects_usage_writing.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) → 

Writer Positions

In a writer position, the content of the operand is changed when the statement is executed. Only modifiable data objects (that is, no literals, text symbols, constants, or non-modifiable formal parameters) can be specified as follows in writer positions:

-   A [visible data object](javascript:call_link\('abenlifetime_and_visibility.htm'\)) specified in this place using a name dobj, a field symbol <fs>, or a dereferenced data reference dref->\* (if dref is typed in full). Like in [reading positions](javascript:call_link\('abenreading_position_glosry.htm'\) "Glossary Entry"), \[\] can be appended in internal tables, to address the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry").

-   A [subarea](javascript:call_link\('abenoffset_length.htm'\)) of a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") character-like or byte-like data object specified using an [offset/length](javascript:call_link\('abenoffset_length_specific_glosry.htm'\) "Glossary Entry"). An offset or length cannot be specified in writing positions for data objects of the [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data types string and xstring.

-   In a [declaration position](javascript:call_link\('abendeclaration_position_glosry.htm'\) "Glossary Entry"), an [inline declaration](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry") of a data object or field symbol can be made using a [declaration expression](javascript:call_link\('abendeclaration_expression_glosry.htm'\) "Glossary Entry").

-   [Writable expressions](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") can be specified in a [result position](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry").

Writer-only positions, where an operand is overwritten without being read, and writer positions where an operand is read and written are both available.

Notes

-   In [some writing positions](javascript:call_link\('abenexpression_positions_write.htm'\)), certain expressions can also be specified.

-   [Enumerated variables](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry") can only be used in writing positions in which the operand type is the enumerated type and only the associated [enumerated values](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry") can be written.


### abenoffset_length.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) → 

Substring Access

In operand positions, subareas of certain data objects can be accessed by specifying an offset/length:

Syntax

dobj*\[*+off*\]**\[*(len)*\]*

<fs>*\[*+off*\]**\[*(len)*\]*

dref->\**\[*+off*\]**\[*(len)*\]*

Effect

A specified offset or length is directly appended to either the dobj descriptor of the data object, an <fs> field symbol, or a dereferenced data reference variable dref->\*. Offsets/lengths can be specified for:

-   [Elementary](javascript:call_link\('abenelementary_data_object_glosry.htm'\) "Glossary Entry") [byte-like data objects](javascript:call_link\('abenbyte_like_data_object_glosry.htm'\) "Glossary Entry")

-   [Elementary](javascript:call_link\('abenelementary_data_object_glosry.htm'\) "Glossary Entry") [character-like data objects](javascript:call_link\('abencharlike_data_object_glosry.htm'\) "Glossary Entry")

-   [Flat structures](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry") where one of the following prerequisites must be met:

-   The structure contains flat character-like components only.

-   The first fragment of the [structure fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") is flat and character-like, and the substring addressed by specifying the offset and length is located within this fragment.

The following restrictions apply:

-   In [write positions](javascript:call_link\('abenwriting_position_glosry.htm'\) "Glossary Entry"), only flat data objects are permitted; it is not possible to write to substrings of strings.

-   Access to substrings of strings is also not possible in the following [reading positions](javascript:call_link\('abenreading_position_glosry.htm'\) "Glossary Entry"):

-   dobj*\[*+off*\]**\[*(len)*\]* specified as a memory area [mem\_area](javascript:call_link\('abapassign_mem_area_static_dobj.htm'\)) of the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)).

-   dobj*\[*+off*\]**\[*(len)*\]* specified as an argument of the statement [GET REFERENCE](javascript:call_link\('abapget_reference.htm'\)) or the reference operator [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\)).

-   dobj*\[*+off*\]**\[*(len)*\]* specified as an actual parameter for input parameters in calls of [methods](javascript:call_link\('abenmethod_calls.htm'\)), [function modules](javascript:call_link\('abapcall_function.htm'\)) , and [subroutines](javascript:call_link\('abapperform.htm'\)) .

-   Offsets/lengths cannot be specified for literals or text symbols.

-   A specified offset/length cannot be appended directly to a table expression [itab\[ ... \]](javascript:call_link\('abentable_expressions.htm'\)), but this is possible after a [chaining](javascript:call_link\('abentable_exp_chaining.htm'\)) whose final place is a suitable structure component after a structure component selector.

-   No offset or length can be specified for an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") with an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry"), regardless of the [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry").

-   In the case of dynamically [specified operands](javascript:call_link\('abenoperands_specifying.htm'\)) in parentheses, no lengths can be specified.

-   A dereferenced data reference variable dref->\* must be typed in full.

-   For a [writable expression](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry"), offsets/lengths cannot be specified as [memory areas](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)) in the statement ASSIGN or as arguments of the reference operator [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\)) (table expressions only).

The segment of the data object is used that has the offset specified in off and the length (in characters or bytes) specified in len. A memory area must not be addressed outside the field boundaries, except in the case of the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)). In an offset specified without a length, the entire substring is addressed from off characters; for a length specified without an offset, the first len characters are addressed (different rules apply to the statement [ASSIGN](javascript:call_link\('abapassign.htm'\))).

The operands off and len expect data objects of the type i. These data objects must contain positive integers, with the following exceptions.

-   The length 0 can be specified for [strings](javascript:call_link\('abenstring_glosry.htm'\) "Glossary Entry").

-   A negative offset (but never length 0) can be specified if an <fs> field symbol is specified in the statement [ASSIGN](javascript:call_link\('abapassign_mem_area_static_dobj.htm'\)) for dobj.

-   If off is less than the length of dobj, an asterisk (\*) can be specified for len. The upper limit of dobj then determines the upper limit of the memory area.

If the prerequisites are not met or if the subarea defined by off and len is not completely contained in the data object (except in the case of [ASSIGN](javascript:call_link\('abapassign.htm'\))), a syntax error occurs (if statically identifiable). Otherwise, an exception of the class CX\_SY\_RANGE\_OUT\_OF\_BOUNDS is raised. If off is specified as a numeric literal, this literal cannot be prefixed with a sign.

The offset and length specifications are counted in characters for character-like data objects and in bytes for all other data objects.

A substring specified by an offset or length specification is treated like a data object of the specified length for which the data type depends on the data type of the original data object, the field symbol, or the data reference variable, as shown below:

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

If the length of the substring matches the length of the structure in a substring access to a structure exactly, the substring does not have data type c and is handled like the structure itself instead.

Notes

-   For reads on substrings of character-like data objects, built-in [substring functions](javascript:call_link\('abensubstring_functions.htm'\)) that allow searches by specifying both substring and offset/lengths are available. The substring functions can also be used to edit arguments where offsets and lengths cannot be specified, such as data objects with an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry"). This is because an implicit conversion to string is performed here.

-   It is a good idea to specify offsets with the value 0 explicitly too (that is, dobj+0(len) instead of dobj(len)). This distinguishes a substring access in the source code clearly from other language constructs that also use parentheses, such as dynamic specifications, method calls, or inline declarations.

-   dobj+0(\*), dobj+0, or dobj(\*) are always interpreted as dobj. In this case, dobj can also be a data object where substring access according to the rules above is not possible.

-   No substring access cnt(len), sum(len) can be performed on data objects called cnt and sum unless an offset is specified explicitly. The compiler always interprets this as a [number](javascript:call_link\('abapcnt.htm'\)) or [sum](javascript:call_link\('abapsum.htm'\)) of a field len in the group level processing of an [extract dataset](javascript:call_link\('abenextract_dataset_glosry.htm'\) "Glossary Entry").

-   [Obsolete syntax forms](javascript:call_link\('abentokenization_obsolete.htm'\)) can still occur with substring access (apart from with classes).

-   The statement [MOVE PERCENTAGE](javascript:call_link\('abapmove_percentage.htm'\)) indicates an obsolete form of substring access.

Example

The following structure has both character-like and non-character-like components:

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

Offset/length accesses are possible on the character-like initial fragment F1 only, for example struc(21) or struc+7(14). An access such as struc+57(2), for example, is not permitted.

Executable Example

[Substrings](javascript:call_link\('abendata_process_fields_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Substrings](javascript:call_link\('abendata_process_fields_abexa.htm'\))


### abendata_process_fields_abexa.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) →  [Substring Access](javascript:call_link\('abenoffset_length.htm'\)) → 

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

In the second part, the five character sequence 78901 from the field f2 is replaced with DEFGH from f1 by specifying offsets and lengths.

In the third part, assignments are used. First, the content of f1 is assigned to f2 without offsets. This is repeated with offsets and lengths for f1. The next three assignments overwrite the content of f2 with an offset of 2. Note that f2 is padded on the right with blanks, in accordance with the conversion rules for source type c.

In part four, the WRITE TO statement is used. The first six places in the field number are written to the last 12 places of the string field as left-justified, centered, and right-justified places.


### abenoffset_length.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) → 

Substring Access

In operand positions, subareas of certain data objects can be accessed by specifying an offset/length:

Syntax

dobj*\[*+off*\]**\[*(len)*\]*

<fs>*\[*+off*\]**\[*(len)*\]*

dref->\**\[*+off*\]**\[*(len)*\]*

Effect

A specified offset or length is directly appended to either the dobj descriptor of the data object, an <fs> field symbol, or a dereferenced data reference variable dref->\*. Offsets/lengths can be specified for:

-   [Elementary](javascript:call_link\('abenelementary_data_object_glosry.htm'\) "Glossary Entry") [byte-like data objects](javascript:call_link\('abenbyte_like_data_object_glosry.htm'\) "Glossary Entry")

-   [Elementary](javascript:call_link\('abenelementary_data_object_glosry.htm'\) "Glossary Entry") [character-like data objects](javascript:call_link\('abencharlike_data_object_glosry.htm'\) "Glossary Entry")

-   [Flat structures](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry") where one of the following prerequisites must be met:

-   The structure contains flat character-like components only.

-   The first fragment of the [structure fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") is flat and character-like, and the substring addressed by specifying the offset and length is located within this fragment.

The following restrictions apply:

-   In [write positions](javascript:call_link\('abenwriting_position_glosry.htm'\) "Glossary Entry"), only flat data objects are permitted; it is not possible to write to substrings of strings.

-   Access to substrings of strings is also not possible in the following [reading positions](javascript:call_link\('abenreading_position_glosry.htm'\) "Glossary Entry"):

-   dobj*\[*+off*\]**\[*(len)*\]* specified as a memory area [mem\_area](javascript:call_link\('abapassign_mem_area_static_dobj.htm'\)) of the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)).

-   dobj*\[*+off*\]**\[*(len)*\]* specified as an argument of the statement [GET REFERENCE](javascript:call_link\('abapget_reference.htm'\)) or the reference operator [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\)).

-   dobj*\[*+off*\]**\[*(len)*\]* specified as an actual parameter for input parameters in calls of [methods](javascript:call_link\('abenmethod_calls.htm'\)), [function modules](javascript:call_link\('abapcall_function.htm'\)) , and [subroutines](javascript:call_link\('abapperform.htm'\)) .

-   Offsets/lengths cannot be specified for literals or text symbols.

-   A specified offset/length cannot be appended directly to a table expression [itab\[ ... \]](javascript:call_link\('abentable_expressions.htm'\)), but this is possible after a [chaining](javascript:call_link\('abentable_exp_chaining.htm'\)) whose final place is a suitable structure component after a structure component selector.

-   No offset or length can be specified for an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") with an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry"), regardless of the [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry").

-   In the case of dynamically [specified operands](javascript:call_link\('abenoperands_specifying.htm'\)) in parentheses, no lengths can be specified.

-   A dereferenced data reference variable dref->\* must be typed in full.

-   For a [writable expression](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry"), offsets/lengths cannot be specified as [memory areas](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)) in the statement ASSIGN or as arguments of the reference operator [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\)) (table expressions only).

The segment of the data object is used that has the offset specified in off and the length (in characters or bytes) specified in len. A memory area must not be addressed outside the field boundaries, except in the case of the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)). In an offset specified without a length, the entire substring is addressed from off characters; for a length specified without an offset, the first len characters are addressed (different rules apply to the statement [ASSIGN](javascript:call_link\('abapassign.htm'\))).

The operands off and len expect data objects of the type i. These data objects must contain positive integers, with the following exceptions.

-   The length 0 can be specified for [strings](javascript:call_link\('abenstring_glosry.htm'\) "Glossary Entry").

-   A negative offset (but never length 0) can be specified if an <fs> field symbol is specified in the statement [ASSIGN](javascript:call_link\('abapassign_mem_area_static_dobj.htm'\)) for dobj.

-   If off is less than the length of dobj, an asterisk (\*) can be specified for len. The upper limit of dobj then determines the upper limit of the memory area.

If the prerequisites are not met or if the subarea defined by off and len is not completely contained in the data object (except in the case of [ASSIGN](javascript:call_link\('abapassign.htm'\))), a syntax error occurs (if statically identifiable). Otherwise, an exception of the class CX\_SY\_RANGE\_OUT\_OF\_BOUNDS is raised. If off is specified as a numeric literal, this literal cannot be prefixed with a sign.

The offset and length specifications are counted in characters for character-like data objects and in bytes for all other data objects.

A substring specified by an offset or length specification is treated like a data object of the specified length for which the data type depends on the data type of the original data object, the field symbol, or the data reference variable, as shown below:

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

If the length of the substring matches the length of the structure in a substring access to a structure exactly, the substring does not have data type c and is handled like the structure itself instead.

Notes

-   For reads on substrings of character-like data objects, built-in [substring functions](javascript:call_link\('abensubstring_functions.htm'\)) that allow searches by specifying both substring and offset/lengths are available. The substring functions can also be used to edit arguments where offsets and lengths cannot be specified, such as data objects with an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry"). This is because an implicit conversion to string is performed here.

-   It is a good idea to specify offsets with the value 0 explicitly too (that is, dobj+0(len) instead of dobj(len)). This distinguishes a substring access in the source code clearly from other language constructs that also use parentheses, such as dynamic specifications, method calls, or inline declarations.

-   dobj+0(\*), dobj+0, or dobj(\*) are always interpreted as dobj. In this case, dobj can also be a data object where substring access according to the rules above is not possible.

-   No substring access cnt(len), sum(len) can be performed on data objects called cnt and sum unless an offset is specified explicitly. The compiler always interprets this as a [number](javascript:call_link\('abapcnt.htm'\)) or [sum](javascript:call_link\('abapsum.htm'\)) of a field len in the group level processing of an [extract dataset](javascript:call_link\('abenextract_dataset_glosry.htm'\) "Glossary Entry").

-   [Obsolete syntax forms](javascript:call_link\('abentokenization_obsolete.htm'\)) can still occur with substring access (apart from with classes).

-   The statement [MOVE PERCENTAGE](javascript:call_link\('abapmove_percentage.htm'\)) indicates an obsolete form of substring access.

Example

The following structure has both character-like and non-character-like components:

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

Offset/length accesses are possible on the character-like initial fragment F1 only, for example struc(21) or struc+7(14). An access such as struc+57(2), for example, is not permitted.

Executable Example

[Substrings](javascript:call_link\('abendata_process_fields_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Substrings](javascript:call_link\('abendata_process_fields_abexa.htm'\))
