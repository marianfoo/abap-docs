# ABAP - Keyword Documentation / ABAP - Reference / ABAP Syntax / ABAP Statements / Operands / Data Objects in Operand Positions

Included pages: 6


### abenoperands_data_objects.htm

---
title: "Data Objects in Operand Positions"
description: |
  For data objects in operand positions, you must distinguish between read and write positions. The data type and content of the specified data objects must also be appropriate for the operand position. -   Read positions(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects_us
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands_data_objects.htm"
abapFile: "abenoperands_data_objects.htm"
keywords: ["do", "if", "data", "abenoperands", "objects"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands.htm) → 

Data Objects in Operand Positions

For data objects in operand positions, you must distinguish between read and write positions. The data type and content of the specified data objects must also be appropriate for the operand position.

-   [Read positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects_usage_reading.htm)

-   [Write positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects_usage_writing.htm)

-   [Subfield access](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoffset_length.htm)

Continue
[Reading Positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects_usage_reading.htm)
[Writing Positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects_usage_writing.htm)
[Substring Access](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoffset_length.htm)


### abendata_objects_usage_reading.htm

---
title: "Reading Positions"
description: |
  In a reading position, the content of an operand is only read, and not changed, when the statement is executed. Data objects can be specified as followed in reading positions: -   As a literal(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenliteral_glosry.htm 'Glossary Entry'). -
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects_usage_reading.htm"
abapFile: "abendata_objects_usage_reading.htm"
keywords: ["do", "if", "case", "try", "data", "types", "internal-table", "field-symbol", "abendata", "objects", "usage", "reading"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands.htm) →  [Data Objects in Operand Positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands_data_objects.htm) → 

Reading Positions

In a reading position, the content of an operand is only read, and not changed, when the statement is executed. Data objects can be specified as followed in reading positions:

-   As a [literal](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenliteral_glosry.htm "Glossary Entry").
    

-   As a [data object visible](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlifetime_and_visibility.htm) in this place using a name dobj, a [field symbol](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfield_symbol_glosry.htm "Glossary Entry") <fs>, or a data reference dref->\* dereferenced using the [dereferencing operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendereferencing_operat_glosry.htm "Glossary Entry") \->\* (providing dref is specified in full).
    Here, the names of data objects also include any [text symbols](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_symbol_glosry.htm "Glossary Entry") specified using the following:
    ... text-idf ...,
    Here, idf is the three-character ID of the text symbol or chainings of reference variables. If a field symbol is used, it must be assigned to a memory area and a data reference must point to a data object. Otherwise a non-handleable exception is raised. As an alternative to specifying a text symbol using text-idf, the three-character code of a text symbol can be appended to the [text field literal](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_field_literal_glosry.htm "Glossary Entry") in parentheses:
    ... '...'(idf) ...
    If the text symbol exists in the currently loaded [text pool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_pool_glosry.htm "Glossary Entry"), the content of the text symbol is used instead of the text field literal, otherwise the literal is used.

-   If the data object is an internal table, the expressions dobj\[\], <fs>\[\], or dref->\*\[\] can also be used. An exception to this is when specifying the internal table of a [table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expression_glosry.htm "Glossary Entry"), where \[\] cannot be appended to the name. In the case of dobj\[\], this ensures that the [table body](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_body_glosry.htm "Glossary Entry") is addressed and no [header lines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheader_line_glosry.htm "Glossary Entry"). If an internal table does not have a header line, its simple name dobj (without \[\]) is interpreted as the table body in all operand positions. However, if an internal table does have a header line, its simple name dobj (without \[\]) is interpreted as the header line and not the table body in almost all operand positions. The operand positions in which the name of an internal table with a header line is interpreted as the internal table are specified under [internal tables with headers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_header_line.htm).

-   As a [subarea](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoffset_length.htm) of a character-like or byte-like data object (or a character-like initial part of a structure) by specifying an [offset/length](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry").

-   In some positions, number values must be specified directly as digits, although it is often not possible to specify a sign (which is not the case with [numeric literals](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumeric_literal_glosry.htm "Glossary Entry")). Examples are numbers specified in declarative statements for the length of elementary data objects or for the initial memory requirements of internal tables.

Notes

-   Text symbols cannot be specified in all reading positions. For example, they are not permitted for specifying the target of dynamic [executions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_execution.htm).

-   A [system field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_field_glosry.htm "Glossary Entry") should only be specified as an operand in a reading position if its content is not set by the same statement, since otherwise undefined behavior may occur.

-   The predicate expressions [IS ASSIGNED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_assigned.htm) and [IS BOUND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_assigned.htm) can be used to check whether field symbols or data references.

-   A data reference variable with a generic static type can only be deserialized using the statement [ASSIGN dref->\* TO <fs>](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area_dynamic_dobj.htm).

-   In many reading positions, [functions or expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands_expressions.htm) can be specified as well as data objects.

-   [Enumerated objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_object_glosry.htm "Glossary Entry") with an [enumerated type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_type_glosry.htm "Glossary Entry") can be used in all reading positions in which the operand type is their enumerated type or in which the operand is converted to one of the character-like types c or string.


### abendata_objects_usage_writing.htm

---
title: "Writing Positions"
description: |
  In a writing position, the content of the operand is changed when the statement is executed. Only modifiable data objects (that is, no literals, text symbols, constants, or non-modifiable formal parameters) can be specified as follows in writing positions: -   A visible data object(https://help.sa
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects_usage_writing.htm"
abapFile: "abendata_objects_usage_writing.htm"
keywords: ["do", "if", "try", "data", "types", "internal-table", "field-symbol", "abendata", "objects", "usage", "writing"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands.htm) →  [Data Objects in Operand Positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands_data_objects.htm) → 

Writing Positions

In a writing position, the content of the operand is changed when the statement is executed. Only modifiable data objects (that is, no literals, text symbols, constants, or non-modifiable formal parameters) can be specified as follows in writing positions:

-   A [visible data object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlifetime_and_visibility.htm) specified in this place using a name dobj, a field symbol <fs>, or a dereferenced data reference dref->\* (if dref is typed in full). Like in [reading positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreading_position_glosry.htm "Glossary Entry"), \[\] can be appended in internal tables, to address the [table body](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_body_glosry.htm "Glossary Entry").

-   A [subarea](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoffset_length.htm) of a [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry") character-like or byte-like data object specified using an [offset/length](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry"). An offset or length cannot be specified in writing positions for data objects of the [deep](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeep_glosry.htm "Glossary Entry") data types string and xstring.

-   In a [declaration position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclaration_position_glosry.htm "Glossary Entry"), an [inline declaration](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninline_declaration_glosry.htm "Glossary Entry") of a data object or field symbol can be made using a [declaration expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclaration_expression_glosry.htm "Glossary Entry").

-   [Writable expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwritable_expression_glosry.htm "Glossary Entry") can be specified in a [result position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenresult_position_glosry.htm "Glossary Entry").

Also available are writing-only positions, where an operand is overwritten without being read, and writing positions where an operand is read and written.

Notes

-   In [some writing positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_positions_write.htm), certain expressions can also be specified.

-   [Enumerated variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_variable_glosry.htm "Glossary Entry") can only be used in writing positions in which the operand type is the enumerated type and only the associated [enumerated values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_value_glosry.htm "Glossary Entry") can be written.


### abenoffset_length.htm

---
title: "Substring Access"
description: |
  In operand positions, subareas of certain data objects can be accessed by specifying an offset/length: Syntax dobj+off(len) <fs>+off(len) dref->+off(len) Effect A specified offset or length is directly appended to either the dobj descriptor of the da
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoffset_length.htm"
abapFile: "abenoffset_length.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "field-symbol", "abenoffset", "length"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands.htm) →  [Data Objects in Operand Positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands_data_objects.htm) → 

Substring Access

In operand positions, subareas of certain data objects can be accessed by specifying an offset/length:

Syntax

dobj*\[*+off*\]**\[*(len)*\]*

<fs>*\[*+off*\]**\[*(len)*\]*

dref->\**\[*+off*\]**\[*(len)*\]*

Effect

A specified offset or length is directly appended to either the dobj descriptor of the data object, an <fs> field symbol, or a dereferenced data reference variable dref->\*. Offsets/lengths can be specified for:

-   [Elementary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenelementary_data_object_glosry.htm "Glossary Entry") [byte-like data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbyte_like_data_object_glosry.htm "Glossary Entry")

-   [Elementary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenelementary_data_object_glosry.htm "Glossary Entry") [character-like data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencharlike_data_object_glosry.htm "Glossary Entry")

-   [Flat structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_structure_glosry.htm "Glossary Entry") where one of the following prerequisites must be met:

-   The structure contains flat character-like components only.

-   The first fragment of the [structure fragment view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") is flat and character-like, and the substring addressed by specifying the offset and length is located within this fragment.

The following restrictions apply:

-   In [write positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwriting_position_glosry.htm "Glossary Entry"), only flat data objects are permitted; it is not possible to write to substrings of strings.

-   Access to substrings of strings is also not possible in the following [reading positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreading_position_glosry.htm "Glossary Entry"):

-   dobj*\[*+off*\]**\[*(len)*\]* specified as a memory area [mem\_area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area_static_dobj.htm) of the statement [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm).

-   dobj*\[*+off*\]**\[*(len)*\]* specified as an argument of the statement [GET REFERENCE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_reference.htm) or the reference operator [REF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_ref.htm).

-   dobj*\[*+off*\]**\[*(len)*\]* specified as an actual parameter for input parameters in calls of [methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_calls.htm), [function modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function.htm), and [subroutines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform.htm).

-   Offsets/lengths cannot be specified for literals or text symbols.

-   A specified offset/length cannot be appended directly to a table expression [itab\[ ... \]](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm), but this is possible after a [chaining](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_chaining.htm) whose final place is a suitable structure component after a structure component selector.

-   No offset or length can be specified for an [enumerated object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_object_glosry.htm "Glossary Entry") with an [enumerated type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_type_glosry.htm "Glossary Entry"), regardless of the [base type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbase_type_glosry.htm "Glossary Entry").

-   In the case of dynamically [specified operands](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands_specifying.htm) in parentheses, no lengths can be specified.

-   A dereferenced data reference variable dref->\* must be typed in full.

-   For a [writable expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwritable_expression_glosry.htm "Glossary Entry"), offsets/lengths cannot be specified as [memory areas](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area_writable_exp.htm) in the statement ASSIGN or as arguments of the reference operator [REF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_ref.htm) (table expressions only).

The segment of the data object is used that has the offset specified in off and the length (in characters or bytes) specified in len. A memory area must not be addressed outside the field boundaries, except in the case of the statement [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm). In an offset specified without a length, the entire substring is addressed from off characters; for a length specified without an offset, the first len characters are addressed (different rules apply to the statement [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm)).

The operands off and len expect data objects of the type i. These data objects must contain positive integers, with the following exceptions.

-   The length 0 can be specified for [strings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_glosry.htm "Glossary Entry").

-   A negative offset (but never length 0) can be specified if an <fs> field symbol is specified in the statement [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area_static_dobj.htm) for dobj.

-   If off is less than the length of dobj, an asterisk (\*) can be specified for len. The upper limit of dobj then determines the upper limit of the memory area.

If the prerequisites are not met or if the subarea defined by off and len is not completely contained in the data object (except in the case of [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm)), a syntax error occurs (if statically identifiable). Otherwise, an exception of the class CX\_SY\_RANGE\_OUT\_OF\_BOUNDS is raised. If off is specified as a numeric literal, this literal cannot be prefixed with a sign.

The offset and length specified are counted in characters for character-like data objects and in bytes for all other data objects.

A substring specified by an offset or length is handled like a data object of the specified length whose data type depends on the data type of the original data object, the field symbol, or the data reference variable, as shown below:

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

-   For reads on substrings of character-like data objects, predefined [substring functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubstring_functions.htm) that allow searches by specifying both substring and offset/lengths are available. The substring functions can also be used to edit arguments where offsets and lengths cannot be specified, such as data objects with an [enumerated type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_type_glosry.htm "Glossary Entry"). This is because an implicit conversion to string is performed here.

-   It is a good idea to specify offsets with the value 0 explicitly too (that is, dobj+0(len) instead of dobj(len)). This distinguishes a substring access in the source code clearly from other language constructs that also use parentheses, such as dynamic specifications, method calls, or inline declarations.

-   dobj+0(\*), dobj+0, or dobj(\*) are always interpreted as dobj. In this case, dobj can also be a data object where substring access according to the rules above is not possible.

-   No substring access cnt(len), sum(len) can be performed on data objects called cnt and sum unless an offset is specified explicitly. The compiler always interprets this as a [number](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcnt.htm) or [sum](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsum.htm) of a field len in the control level processing of an [extract dataset](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenextract_dataset_glosry.htm "Glossary Entry").

-   [Obsolete syntax forms](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentokenization_obsolete.htm) can still occur with substring access (apart from with classes).

-   The statement [MOVE PERCENTAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove_percentage.htm) indicates an obsolete form of substring access.

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

The [fragment view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") splits the structure into five areas, F1 - F5.

\[ aaa | bbbb | cccccccc | ddd | AAA | eeee | fffffffffffff | gg \]
\[            F1               |  F2 |  F3  |       F4      | F5 \]

Offset/length accesses are possible on the character-like initial fragment F1 only, for example struc(21) or struc+7(14). An access such as struc+57(2), for example, is not permitted.

Executable Example

[Substrings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_process_fields_abexa.htm)

Continue
![Example](exa.gif "Example") [Substrings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_process_fields_abexa.htm)


### abendata_process_fields_abexa.htm

---
title: "Substrings"
description: |
  This example demonstrates how substrings can be accessed. Source Code REPORT demo_data_process_fields. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA time TYPE t VALUE '172545'. DATA: f1(8)  TYPE c VALUE 'ABCDEFGH', f2(20) TYPE c
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_process_fields_abexa.htm"
abapFile: "abendata_process_fields_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abendata", "process", "fields", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands.htm) →  [Data Objects in Operand Positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands_data_objects.htm) →  [Substring Access](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoffset_length.htm) → 

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
      )->begin\_section( |Example 1|
      )->write( time
      )->write( time+2(2)
      )->write( time+2(4) ).
    CLEAR time+2(4).
    out->write( time ).
    out->next\_section( |Example 2| ).
    f2+6(5) = f1+3(5).
    out->write( f1
      )->write( f2 ).
    out->next\_section( |Example 3| ).
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
    out->next\_section( |Example 4| ).
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

In part four, the WRITE TO statement is used. The first six positions of the field number are written left-justified, centered, and right-justified into the last 12 positions of the string field.


### abenoffset_length.htm

---
title: "Substring Access"
description: |
  In operand positions, subareas of certain data objects can be accessed by specifying an offset/length: Syntax dobj+off(len) <fs>+off(len) dref->+off(len) Effect A specified offset or length is directly appended to either the dobj descriptor of the da
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoffset_length.htm"
abapFile: "abenoffset_length.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "field-symbol", "abenoffset", "length"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands.htm) →  [Data Objects in Operand Positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands_data_objects.htm) → 

Substring Access

In operand positions, subareas of certain data objects can be accessed by specifying an offset/length:

Syntax

dobj*\[*+off*\]**\[*(len)*\]*

<fs>*\[*+off*\]**\[*(len)*\]*

dref->\**\[*+off*\]**\[*(len)*\]*

Effect

A specified offset or length is directly appended to either the dobj descriptor of the data object, an <fs> field symbol, or a dereferenced data reference variable dref->\*. Offsets/lengths can be specified for:

-   [Elementary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenelementary_data_object_glosry.htm "Glossary Entry") [byte-like data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbyte_like_data_object_glosry.htm "Glossary Entry")

-   [Elementary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenelementary_data_object_glosry.htm "Glossary Entry") [character-like data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencharlike_data_object_glosry.htm "Glossary Entry")

-   [Flat structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_structure_glosry.htm "Glossary Entry") where one of the following prerequisites must be met:

-   The structure contains flat character-like components only.

-   The first fragment of the [structure fragment view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") is flat and character-like, and the substring addressed by specifying the offset and length is located within this fragment.

The following restrictions apply:

-   In [write positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwriting_position_glosry.htm "Glossary Entry"), only flat data objects are permitted; it is not possible to write to substrings of strings.

-   Access to substrings of strings is also not possible in the following [reading positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreading_position_glosry.htm "Glossary Entry"):

-   dobj*\[*+off*\]**\[*(len)*\]* specified as a memory area [mem\_area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area_static_dobj.htm) of the statement [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm).

-   dobj*\[*+off*\]**\[*(len)*\]* specified as an argument of the statement [GET REFERENCE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_reference.htm) or the reference operator [REF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_ref.htm).

-   dobj*\[*+off*\]**\[*(len)*\]* specified as an actual parameter for input parameters in calls of [methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_calls.htm), [function modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function.htm), and [subroutines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform.htm).

-   Offsets/lengths cannot be specified for literals or text symbols.

-   A specified offset/length cannot be appended directly to a table expression [itab\[ ... \]](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm), but this is possible after a [chaining](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_chaining.htm) whose final place is a suitable structure component after a structure component selector.

-   No offset or length can be specified for an [enumerated object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_object_glosry.htm "Glossary Entry") with an [enumerated type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_type_glosry.htm "Glossary Entry"), regardless of the [base type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbase_type_glosry.htm "Glossary Entry").

-   In the case of dynamically [specified operands](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands_specifying.htm) in parentheses, no lengths can be specified.

-   A dereferenced data reference variable dref->\* must be typed in full.

-   For a [writable expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwritable_expression_glosry.htm "Glossary Entry"), offsets/lengths cannot be specified as [memory areas](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area_writable_exp.htm) in the statement ASSIGN or as arguments of the reference operator [REF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_ref.htm) (table expressions only).

The segment of the data object is used that has the offset specified in off and the length (in characters or bytes) specified in len. A memory area must not be addressed outside the field boundaries, except in the case of the statement [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm). In an offset specified without a length, the entire substring is addressed from off characters; for a length specified without an offset, the first len characters are addressed (different rules apply to the statement [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm)).

The operands off and len expect data objects of the type i. These data objects must contain positive integers, with the following exceptions.

-   The length 0 can be specified for [strings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_glosry.htm "Glossary Entry").

-   A negative offset (but never length 0) can be specified if an <fs> field symbol is specified in the statement [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area_static_dobj.htm) for dobj.

-   If off is less than the length of dobj, an asterisk (\*) can be specified for len. The upper limit of dobj then determines the upper limit of the memory area.

If the prerequisites are not met or if the subarea defined by off and len is not completely contained in the data object (except in the case of [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm)), a syntax error occurs (if statically identifiable). Otherwise, an exception of the class CX\_SY\_RANGE\_OUT\_OF\_BOUNDS is raised. If off is specified as a numeric literal, this literal cannot be prefixed with a sign.

The offset and length specified are counted in characters for character-like data objects and in bytes for all other data objects.

A substring specified by an offset or length is handled like a data object of the specified length whose data type depends on the data type of the original data object, the field symbol, or the data reference variable, as shown below:

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

-   For reads on substrings of character-like data objects, predefined [substring functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubstring_functions.htm) that allow searches by specifying both substring and offset/lengths are available. The substring functions can also be used to edit arguments where offsets and lengths cannot be specified, such as data objects with an [enumerated type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_type_glosry.htm "Glossary Entry"). This is because an implicit conversion to string is performed here.

-   It is a good idea to specify offsets with the value 0 explicitly too (that is, dobj+0(len) instead of dobj(len)). This distinguishes a substring access in the source code clearly from other language constructs that also use parentheses, such as dynamic specifications, method calls, or inline declarations.

-   dobj+0(\*), dobj+0, or dobj(\*) are always interpreted as dobj. In this case, dobj can also be a data object where substring access according to the rules above is not possible.

-   No substring access cnt(len), sum(len) can be performed on data objects called cnt and sum unless an offset is specified explicitly. The compiler always interprets this as a [number](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcnt.htm) or [sum](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsum.htm) of a field len in the control level processing of an [extract dataset](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenextract_dataset_glosry.htm "Glossary Entry").

-   [Obsolete syntax forms](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentokenization_obsolete.htm) can still occur with substring access (apart from with classes).

-   The statement [MOVE PERCENTAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove_percentage.htm) indicates an obsolete form of substring access.

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

The [fragment view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") splits the structure into five areas, F1 - F5.

\[ aaa | bbbb | cccccccc | ddd | AAA | eeee | fffffffffffff | gg \]
\[            F1               |  F2 |  F3  |       F4      | F5 \]

Offset/length accesses are possible on the character-like initial fragment F1 only, for example struc(21) or struc+7(14). An access such as struc+57(2), for example, is not permitted.

Executable Example

[Substrings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_process_fields_abexa.htm)

Continue
![Example](exa.gif "Example") [Substrings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_process_fields_abexa.htm)
