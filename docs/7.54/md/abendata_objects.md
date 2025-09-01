---
title: "Data Objects"
description: |
  Data objects are instances of data types(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_types.htm) and contain the concrete data that a program uses at runtime. This is done by specifying data objects in operand positions(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/
version: "7.54"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_objects.htm"
abapFile: "abendata_objects.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "internal-table", "abendata", "objects"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_and_objects.htm) →  [Types and Objects - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_objects_oview.htm) → 

Data Objects

Data objects are instances of [data types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_types.htm) and contain the concrete data that a program uses at runtime. This is done by specifying [data objects in operand positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands_data_objects.htm).

-   [Creating and Addressing Data Objects](#abendata-objects-1--------data-types-of-data-objects---@ITOC@@ABENDATA_OBJECTS_2)

-   [Variable and Constant Data Objects](#abendata-objects-3--------static-and-dynamic-data-objects---@ITOC@@ABENDATA_OBJECTS_4)

-   [Flat and Deep Data Objects](#@@ITOC@@ABENDATA_OBJECTS_5)

Creating and Addressing Data Objects

The following objects are distinguished:

-   [Named data objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennamed_data_object_glosry.htm "Glossary Entry"), which are agreed statically using a data-defining statement and are addressed using a name. The typical data-defining statement is [DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata.htm). Named objects are created at the start of the lifetime of a context (a program, class, object, or procedure) by the ABAP runtime environment, and exist for as long as their context exists.

-   [Anonymous data objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry"), which are created in the [heap](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenheap_glosry.htm "Glossary Entry") by the statement [CREATE DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data.htm) or the instance operator [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_new.htm) and are addressed using [data reference variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_reference_variable_glosry.htm "Glossary Entry"). Anonymous data objects exist in the [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the program in which they were created, and are subject to [garbage collection](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengarbage_collector_glosry.htm "Glossary Entry").

-   [Literals](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenliteral_glosry.htm "Glossary Entry"), which are defined in the source code of a program and are fully defined by their value.

In addition to data objects declared in programs, there is a set of [built-in data objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_objects.htm) that can always be accessed in ABAP programs. Also, some statements create data objects implicitly, which are then available for special purposes. Examples include [sum( )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsum_extract.htm), [cnt( )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcnt.htm) in group level processing for [extracts](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenextract_glosry.htm "Glossary Entry") and [title](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen_normal.htm) when [selection screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_glosry.htm "Glossary Entry") are created.

Example

In the following example, dref is a named data object whose content points to an anonymous data object after the instance operator [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_new.htm) is used. 555 is a numeric literal.

DATA dref TYPE REF TO i.
dref = NEW #( 555 ).

Data Types of Data Objects

Every data object has a specific data type, and every data object uses memory to store the data. The data type of a data object is defined either with reference to a [standalone data type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstand-alone_data_type_glosry.htm "Glossary Entry") or, when the data object is created, as a [bound data type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbound_data_type_glosry.htm "Glossary Entry").

The data type of a data object is always defined uniquely at runtime of the program and cannot be changed. In the case of anonymous data objects, this data type determines the [dynamic type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynamic_type_glosry.htm "Glossary Entry") of the related reference variables.

Example

In the following example, c\_20 is a standalone data type used to declare the data object text1. The data object text2, on the other hand, has a bound data type.

TYPES c\_20 TYPE c LENGTH 20.
DATA: text1 TYPE c\_20,
      text2 TYPE c LENGTH 20.

Variable and Constant Data Objects

Variable data objects are distinguished from constant data objects. [Variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvariable_glosry.htm "Glossary Entry") can change their value at runtime. [Constants](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstant_glosry.htm "Glossary Entry") always keep their initial value. [Literals](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenliteral_glosry.htm "Glossary Entry") and [text symbols](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_symbol_glosry.htm "Glossary Entry") are also constant. [Input parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninput_parameter_glosry.htm "Glossary Entry") in [procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocedure_glosry.htm "Glossary Entry") are generally not modifiable either, if this would cause the assigned [actual parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenactual_parameter_glosry.htm "Glossary Entry") to be changed.

Example

In the following example, true and false are constants that can be assigned to the variable flag.

TYPES bool TYPE c LENGTH 1.
CONSTANTS: true  TYPE bool VALUE 'X',
           false TYPE bool VALUE ' '.
DATA flag TYPE bool.
IF ...
  flag = true.
ELSE.
  flag = false.
ENDIF.

Static and Dynamic Data Objects

Static data objects, for which all technical attributes need to be defined when declared, are distinguished from dynamic data objects, whose memory requirement or size is not defined until runtime. [Strings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_glosry.htm "Glossary Entry") and [internal tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_table_glosry.htm "Glossary Entry") are dynamic data objects.

After declaration, the length of a string is 0 and changes at runtime depending on the content assigned to it. When declared, internal tables do not contain any rows. Any number of rows is possible, and the rows are defined dynamically at runtime when the internal table is filled.

Structures that contain dynamic components are also dynamic data objects.

Example

In the following example, text\_field is a static data object and text\_string is a dynamic data object. When the system field sy-abcde is assigned to text\_field, it is truncated from the tenth character. text\_string is given all characters and has the same length as sy-abcde after the assignment.

DATA: text\_field  TYPE c LENGTH 10,
      text\_string TYPE string.
text\_field  = sy-abcde.
text\_string = sy-abcde.

Flat and Deep Data Objects

All static data objects except reference variables are flat. Their content corresponds to the actual work data. Dynamic data objects and reference variables are deep and contain references that point to the actual content.The handling of references is implicit for dynamic data objects (strings and internal tables), and explicit for reference variables.

Structures that do not contain any deep components are flat structures. Structures that contain at least one deep component are deep structures.

Example

In the following example, struct1 is a flat structure and struct2 is a deep structure. In the flat structure, character-like components can be saved consecutively in the memory and [substring access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoffset_length.htm) is possible. In the deep structure, the components contain pointers to the actual data and substring access is not possible.

DATA:
  BEGIN OF struct1,
    col1 TYPE c LENGTH 5 VALUE '12345',
    col2 TYPE c LENGTH 5 VALUE 'abcde',
  END OF struct1,
  BEGIN OF struct2,
    col1 TYPE string VALUE \`12345\`,
    col2 TYPE string VALUE \`abcde\`,
  END OF struct2.
DATA(section1) = struct1+3(4).

DATA(section2) = struct2+3(4). "Syntax error

Continue
[Byte Order](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbyteorder.htm)
[Alignment of Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenalignment.htm)
[Strings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring.htm)
[References](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_references.htm)
[Memory Management of Deep Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmemory_consumption.htm)