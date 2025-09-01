---
title: "Substring Access"
description: |
  In operand positions, subareas of certain data objects can be accessed by specifying an offset/length: Syntax dobj+off(len) <fs>+off(len) dref->+off(len) Effect A specified offset or length is directly appended to either the dobj descriptor of the da
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoffset_length.htm"
abapFile: "abenoffset_length.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "field-symbol", "abenoffset", "length"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands.htm) →  [Data Objects in Operand Positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands_data_objects.htm) → 

Substring Access

In operand positions, subareas of certain data objects can be accessed by specifying an offset/length:

Syntax

dobj*\[*+off*\]**\[*(len)*\]*

<fs>*\[*+off*\]**\[*(len)*\]*

dref->\**\[*+off*\]**\[*(len)*\]*

Effect

A specified offset or length is directly appended to either the dobj descriptor of the data object, an <fs> field symbol, or a dereferenced data reference variable dref->\*. Offsets/lengths can be specified for:

-   [Elementary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenelementary_data_object_glosry.htm "Glossary Entry") [byte-like data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbyte_like_data_object_glosry.htm "Glossary Entry")

-   [Elementary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenelementary_data_object_glosry.htm "Glossary Entry") [character-like data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_data_object_glosry.htm "Glossary Entry")

-   [Flat structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_structure_glosry.htm "Glossary Entry") where one of the following prerequisites must be met:

-   The structure contains flat character-like components only.

-   The first fragment of the [structure fragment view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") is flat and character-like, and the substring addressed by specifying the offset and length is located within this fragment.

The following restrictions apply:

-   In [write positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwriting_position_glosry.htm "Glossary Entry"), only flat data objects are permitted; it is not possible to write to substrings of strings.

-   Access to substrings of strings is also not possible in the following [reading positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreading_position_glosry.htm "Glossary Entry"):

-   dobj*\[*+off*\]**\[*(len)*\]* specified as a memory area [mem\_area](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_mem_area_static_dobj.htm) of the statement [ASSIGN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign.htm).

-   dobj*\[*+off*\]**\[*(len)*\]* specified as an argument of the statement [GET REFERENCE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_reference.htm) or the reference operator [REF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_ref.htm).

-   dobj*\[*+off*\]**\[*(len)*\]* specified as an actual parameter for input parameters in calls of [methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_calls.htm), [function modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function.htm) , and [subroutines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapperform.htm) .

-   Offsets/lengths cannot be specified for literals or text symbols.

-   A specified offset/length cannot be appended directly to a table expression [itab\[ ... \]](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_expressions.htm), but this is possible after a [chaining](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_chaining.htm) whose final place is a suitable structure component after a structure component selector.

-   No offset or length can be specified for an [enumerated object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_object_glosry.htm "Glossary Entry") with an [enumerated type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_type_glosry.htm "Glossary Entry"), regardless of the [base type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbase_type_glosry.htm "Glossary Entry").

-   In the case of dynamically [specified operands](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands_specifying.htm) in parentheses, no lengths can be specified.

-   A dereferenced data reference variable dref->\* must be typed in full.

-   For a [writable expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwritable_expression_glosry.htm "Glossary Entry"), offsets/lengths cannot be specified as [memory areas](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_mem_area_writable_exp.htm) in the statement ASSIGN or as arguments of the reference operator [REF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_ref.htm) (table expressions only).

The segment of the data object is used that has the offset specified in off and the length (in characters or bytes) specified in len. A memory area must not be addressed outside the field boundaries, except in the case of the statement [ASSIGN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign.htm). In an offset specified without a length, the entire substring is addressed from off characters; for a length specified without an offset, the first len characters are addressed (different rules apply to the statement [ASSIGN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign.htm)).

The operands off and len expect data objects of the type i. These data objects must contain positive integers, with the following exceptions.

-   The length 0 can be specified for [strings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_glosry.htm "Glossary Entry").

-   A negative offset (but never length 0) can be specified if an <fs> field symbol is specified in the statement [ASSIGN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_mem_area_static_dobj.htm) for dobj.

-   If off is less than the length of dobj, an asterisk (\*) can be specified for len. The upper limit of dobj then determines the upper limit of the memory area.

If the prerequisites are not met or if the subarea defined by off and len is not completely contained in the data object (except in the case of [ASSIGN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign.htm)), a syntax error occurs (if statically identifiable). Otherwise, an exception of the class CX\_SY\_RANGE\_OUT\_OF\_BOUNDS is raised. If off is specified as a numeric literal, this literal cannot be prefixed with a sign.

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

-   For reads on substrings of character-like data objects, built-in [substring functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubstring_functions.htm) that allow searches by specifying both substring and offset/lengths are available. The substring functions can also be used to edit arguments where offsets and lengths cannot be specified, such as data objects with an [enumerated type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_type_glosry.htm "Glossary Entry"). This is because an implicit conversion to string is performed here.

-   It is a good idea to specify offsets with the value 0 explicitly too (that is, dobj+0(len) instead of dobj(len)). This distinguishes a substring access in the source code clearly from other language constructs that also use parentheses, such as dynamic specifications, method calls, or inline declarations.

-   dobj+0(\*), dobj+0, or dobj(\*) are always interpreted as dobj. In this case, dobj can also be a data object where substring access according to the rules above is not possible.

-   No substring access cnt(len), sum(len) can be performed on data objects called cnt and sum unless an offset is specified explicitly. The compiler always interprets this as a [number](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcnt.htm) or [sum](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsum.htm) of a field len in the group level processing of an [extract dataset](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_dataset_glosry.htm "Glossary Entry").

-   [Obsolete syntax forms](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentokenization_obsolete.htm) can still occur with substring access (apart from with classes).

-   The statement [MOVE PERCENTAGE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmove_percentage.htm) indicates an obsolete form of substring access.

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

The [fragment view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") splits the structure into five areas, F1 - F5.

\[ aaa | bbbb | cccccccc | ddd | AAA | eeee | fffffffffffff | gg \]
\[            F1               |  F2 |  F3  |       F4      | F5 \]

Offset/length accesses are possible on the character-like initial fragment F1 only, for example struc(21) or struc+7(14). An access such as struc+57(2), for example, is not permitted.

Executable Example

[Substrings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_process_fields_abexa.htm)

Continue
![Example](exa.gif "Example") [Substrings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_process_fields_abexa.htm)