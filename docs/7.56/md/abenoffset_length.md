---
title: "Syntax"
description: |
  dobj+off(len) <fs>+off(len) dref->+off(len) Effect An offset off can be appended directly with the character + to the identifier dobj of a data object, <fs> of a field symbol, or to a dereferenced data reference variable dref->. A length len can be
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoffset_length.htm"
abapFile: "abenoffset_length.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "field-symbol", "abenoffset", "length"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Operands](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoperands.htm) →  [Data Objects in Operand Positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoperands_data_objects.htm) →  [Notations for Single Operands](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoperands_names.htm) → 

Offset/Length Specifications for Substring Access

In operand positions, it is possible to access subareas of certain data objects by specifying an offset and a length:

Syntax

dobj*\[*+off*\]**\[*(len)*\]*

<fs>*\[*+off*\]**\[*(len)*\]*

dref->\**\[*+off*\]**\[*(len)*\]*

Effect

An offset off can be appended directly with the character + to the identifier dobj of a data object, <fs> of a field symbol, or to a dereferenced data reference variable dref->\*. A length len can be appended to the offset specification directly in parentheses ( ) or directly to the identifier. Offsets or lengths can be specified for:

-   [Elementary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenelementary_data_object_glosry.htm "Glossary Entry") [byte-like data objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbyte_like_data_object_glosry.htm "Glossary Entry")
-   [Elementary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenelementary_data_object_glosry.htm "Glossary Entry") [character-like data objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencharlike_data_object_glosry.htm "Glossary Entry")
-   [Flat structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenflat_structure_glosry.htm "Glossary Entry") where one of the following prerequisites must be met:
    -   The structure only contains flat character-like components.
    -   The first fragment of the [structural fragment view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") is flat and character-like, and the substring addressed by specifying the offset and length is located within this fragment.

The segment of the data object is used that has the offset specified in off and the length specified in len in characters or bytes. No memory area outside the field boundaries can be addressed, except for in the statement [ASSIGN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign.htm). In the case of an offset specification without a length, the entire substring is addressed from off characters; in the case of a length specification without an offset, the first len characters are addressed (different rules apply to the statement [ASSIGN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign.htm)).

The operands off and len expect data objects of the type i, which must contain positive integers, with the following exceptions.

-   The length 0 can be specified for [strings](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_glosry.htm "Glossary Entry").
-   A negative offset, but never length 0, can be specified if an <fs> field symbol is specified in the statement [ASSIGN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_mem_area_static_dobj.htm) for dobj.
-   If off is smaller than the length of dobj, an asterisk (\*) can be entered for len. The upper limit of dobj then determines the upper limit of the memory area.

If the prerequisites are not met, or if the substring defined by off and len is not fully included in the data object, except in the case of [ASSIGN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign.htm), a syntax error occurs if statically identifiable. Otherwise, an exception of the class CX\_SY\_RANGE\_OUT\_OF\_BOUNDS is raised. If off is specified as a numeric literal, it cannot be preceded by a plus/minus sign.

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

The following restrictions apply:

-   At [write positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwrite_position_glosry.htm "Glossary Entry"), only flat data objects are allowed, that is, write access to substrings of strings is not possible.
-   Access to substrings of strings is also not possible in the following [read positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenread_position_glosry.htm "Glossary Entry"):
    -   Specification of dobj*\[*+off*\]**\[*(len)*\]* as a memory area [mem\_area](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_mem_area_static_dobj.htm) of the statement [ASSIGN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign.htm).
    -   Specification of dobj*\[*+off*\]**\[*(len)*\]* as an argument of the statement [GET REFERENCE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_reference.htm) or of the reference operator [REF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_ref.htm).
    -   Specification of dobj*\[*+off*\]**\[*(len)*\]* as an actual parameter for input parameters when calling [methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmethod_calls.htm), [function modules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function.htm) , and [subroutines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapperform.htm) .
-   Offsets and lengths cannot be specified for literals or text symbols.
-   An offset/length specification cannot be attached directly to a table expression [itab\[ ... \]](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_expressions.htm), but to a [chaining](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_exp_chaining.htm) whose last position is a suitable structure component after a structure component selector.
-   No offset or length can be specified for an [enumerated object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenumerated_object_glosry.htm "Glossary Entry") with an [enumerated type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenumerated_type_glosry.htm "Glossary Entry"), regardless of the [base type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbase_type_glosry.htm "Glossary Entry").
-   In case of dynamically [specified operands](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoperands_specifying.htm) in parentheses, no length specification can be made.
-   A dereferenced data reference variable dref->\* must be typed completely.
-   For a [writable expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwritable_expression_glosry.htm "Glossary Entry"), no offsets or lengths can be specified as [memory areas](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_mem_area_writable_exp.htm) of the statement ASSIGN or as arguments of the reference operator [REF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_ref.htm) (table expressions only).
-   The following applies when [assigning](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenequals_operator.htm) data objects of fixed length with offset/length specifications to an [inline declaration](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninline_declaration_glosry.htm "Glossary Entry") with the declaration operator [DATA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_inline.htm):
    -   If the offset/length specification is applied to a data object that is directly assigned to the inline declaration, off and len must be literals or constants. Variables are not allowed.
    -   If the offset/length specification is applied to a data object that is the result of chaining that involves a [constructor expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") or a [table expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_expression_glosry.htm "Glossary Entry"), the data type of the declared data object is the data type of the assigned data object in its full length and the substring is assigned according to the respective [conversion rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconversion_rules.htm).

Hints

-   For reads on substrings of character-like data objects, built-in [substring functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensubstring_functions.htm) that allow searches for substrings and offsets/lengths are also available. The substring functions can also be used to process arguments where offsets and lengths cannot be specified, such as data objects with an [enumerated type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenumerated_type_glosry.htm "Glossary Entry") because there is an implicit conversion to string.
-   It is recommended to always explicitly specify offsets with the value 0,that is, dobj+0(len) instead of dobj(len) to differentiates substring access in the source code clearly from other language constructs that also contain parentheses, such as dynamic specifications, method calls, or inline declarations.
-   A specification of dobj+0(\*), dobj+0, or dobj(\*) is always interpreted as dobj. In this case, dobj can also be a data object where substring access according to the rules above is not possible.
-   The above restriction regarding offset/length specifications for results of chainings involving table or constructor expressions is not valid for types that are inferred at runtime, e.g. when passing to generic parameters of procedures. Then the data type of the substring is used.
-   No substring access cnt(len), sum(len) can be performed on data objects named cnt and sum unless an offset is specified explicitly. The compiler always interprets such an entry as a [number](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcnt.htm) or [sum](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsum.htm) of a field len in the group level processing of an [extract dataset](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenextract_dataset_glosry.htm "Glossary Entry").
-   [Obsolete syntax forms](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentokenization_obsolete.htm) can still occur outside of classes in connection with substring accesses.
-   The statement [MOVE PERCENTAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmove_percentage.htm) represents an obsolete form of substring access.

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

The [fragment view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") splits the structure into five areas, F1 - F5.

\[ aaa | bbbb | cccccccc | ddd | AAA | eeee | fffffffffffff | gg \]
\[            F1               |  F2 |  F3  |       F4      | F5 \]

Offset and length accesses are only possible on the character-like initial fragment F1 only, for example struc(21) or struc+7(14). An access such as struc+57(2) is not allowed.

Executable Example

[Substrings](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_process_fields_abexa.htm)

Continue
![Example](exa.gif "Example") [Substrings](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_process_fields_abexa.htm)