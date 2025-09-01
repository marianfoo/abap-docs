  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Types and Objects, Overview](javascript:call_link\('abentypes_objects_oview.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Data Objects, ABENDATA_OBJECTS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on for improvement:)

Data Objects

Data objects are instances of [data types](javascript:call_link\('abendata_types.htm'\)) and contain the concrete data that a program uses at runtime. This is done by specifying [data objects in operand positions](javascript:call_link\('abenoperands_data_objects.htm'\)).

-   [Creating and Addressing Data Objects](#abendata-objects-1-------data-types-of-data-objects---@ITOC@@ABENDATA_OBJECTS_2)
-   [Variable and Constant Data Objects](#abendata-objects-3-------static-and-dynamic-data-objects---@ITOC@@ABENDATA_OBJECTS_4)
-   [Flat and Deep Data Objects](#@@ITOC@@ABENDATA_OBJECTS_5)

Creating and Addressing Data Objects   

There is a distinction between:

-   [Named data objects](javascript:call_link\('abennamed_data_object_glosry.htm'\) "Glossary Entry") that are declared statically using a data-defining statement and are addressed using a name. The typical data-defining statement is [DATA](javascript:call_link\('abapdata.htm'\)). Named objects are created at the start of the lifetime of a context (a program, class, object, or procedure) by the ABAP runtime framework and live for as long as their context exists.
-   [Anonymous data objects](javascript:call_link\('abenanonymous_data_object_glosry.htm'\) "Glossary Entry") that are created in the [heap](javascript:call_link\('abenheap_glosry.htm'\) "Glossary Entry") by the statement [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) or the instance operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) and are addressed using [data reference variables](javascript:call_link\('abendata_reference_variable_glosry.htm'\) "Glossary Entry"). Anonymous data objects exist in the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of the program in which they were created and are subject to [garbage collection](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry").
-   [Literals](javascript:call_link\('abenabap_literal_glosry.htm'\) "Glossary Entry") that are defined in the source code of a program and are fully defined by their value.

In addition to data objects declared in programs, there is a set of [built-in data objects](javascript:call_link\('abenbuilt_in_objects.htm'\)) that can always be accessed in ABAP programs. Furthermore, some statements create data objects implicitly that are then available for special purposes. Examples are [sum( )](javascript:call_link\('abapsum_extract.htm'\)), [cnt( )](javascript:call_link\('abapcnt.htm'\)) in group level processing for [extracts](javascript:call_link\('abenextract_glosry.htm'\) "Glossary Entry") and [title](javascript:call_link\('abapselection-screen_normal.htm'\)) when [selection screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") are created.

Example

In the following example, dref is a named data object whose content points to an anonymous data object after the instance operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) is used. 555 is a numeric literal.

DATA dref TYPE REF TO i.
dref = NEW #( 555 ).

Data Types of Data Objects   

Every data object has a specific data type, and every data object occupies memory for the data. The data type of a data object is defined either with reference to a [standalone data type](javascript:call_link\('abenstand-alone_data_type_glosry.htm'\) "Glossary Entry") or as a [bound data type](javascript:call_link\('abenbound_data_type_glosry.htm'\) "Glossary Entry") when the data object is created.

The data type of a data object is always defined uniquely and cannot be changed at runtime of a program. In the case of anonymous data objects, this data type determines the [dynamic type](javascript:call_link\('abendynamic_type_glosry.htm'\) "Glossary Entry") of the associated reference variables.

Example

In the following example, c\_20 is a standalone data type used to declare the data object text1. The data object text2, on the other hand, has a bound data type.

TYPES c\_20 TYPE c LENGTH 20.
DATA: text1 TYPE c\_20,
      text2 TYPE c LENGTH 20.

Variable and Constant Data Objects   

Variable data objects are distinguished from constant data objects in how they can change. [Variables](javascript:call_link\('abenvariable_glosry.htm'\) "Glossary Entry") can change their value at runtime. [Constants](javascript:call_link\('abenconstant_glosry.htm'\) "Glossary Entry") always keep their initial value.

[Literals](javascript:call_link\('abenabap_literal_glosry.htm'\) "Glossary Entry") and [text symbols](javascript:call_link\('abentext_symbol_glosry.htm'\) "Glossary Entry") are also constant. [Input parameters](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry") in [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") usually cannot be changed if this would cause the assigned [actual parameter](javascript:call_link\('abenactual_parameter_glosry.htm'\) "Glossary Entry") to be changed.

[Immutable variables](javascript:call_link\('abenimmutable_variable_glosry.htm'\) "Glossary Entry") are a special kind of variables. A value can be assigned to an immutable variable at exactly one [write position](javascript:call_link\('abenwrite_position_glosry.htm'\) "Glossary Entry") of a [context](javascript:call_link\('abencontext_glosry.htm'\) "Glossary Entry"). Immutable variables are declared inline with the declaration operator [FINAL(var)](javascript:call_link\('abenfinal_inline.htm'\)). Although one and the same declaration can appear only one time in a context, it can be processed multiple times - for example in a loop - and different values can be assigned then.

Hint

Immutable variables can improve the robustness of programs whenever a variable is filled at a write position only once and after that only read accesses occur.

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

Static data objects, for which all technical properties must be defined when declared, are distinguished from dynamic data objects, whose memory requirement or size is not defined until runtime. [Strings](javascript:call_link\('abenstring_glosry.htm'\) "Glossary Entry") and [internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry") are dynamic data objects.

The length of a string is 0 after declaration and changes at runtime depending on the content assigned to it. Internal tables do not contain any lines after their declaration. There can be any number of lines and the number is defined dynamically at runtime when the internal table is filled.

Structures that contain dynamic components are also dynamic data objects.

Example

In the following example, text\_field is a static data object and text\_string is a dynamic data object. When the system field sy-abcde is assigned to text\_field, it is truncated from the tenth character. text\_string is given all characters and has the same length as sy-abcde after the assignment.

DATA: text\_field  TYPE c LENGTH 10,
      text\_string TYPE string.
text\_field  = sy-abcde.
text\_string = sy-abcde.

Flat and Deep Data Objects   

All static data objects except reference variables are flat. Their content corresponds to the actual work data. Dynamic data objects and reference variables are deep, and they contain references that refer to the actual content. The handling of references is implicit for dynamic data objects (strings and internal tables), and explicit for reference variables.

Structures that do not contain any deep components are flat structures. Structures that contain at least one deep component are deep structures.

Example

In the following example, struct1 is a flat structure and struct2 is a deep structure. In the flat structure, character-like components are stored consecutively in the memory and [substring access](javascript:call_link\('abenoffset_length.htm'\)) is possible. In the deep structure, the components contain pointers to the actual data and substring access is not possible.

DATA:
  BEGIN OF struct1,
    col1 TYPE c LENGTH 5 VALUE '12345',
    col2 TYPE c LENGTH 5 VALUE 'abcde',
  END OF struct1,
  BEGIN OF struct2,
    col1 TYPE string VALUE \`12345\`,
    col2 TYPE string VALUE \`abcde\`,
  END OF struct2.
FINAL(section1) = struct1+3(4).

DATA(section2) = struct2+3(4). "Syntax error

Continue
[Byte Order](javascript:call_link\('abenbyteorder.htm'\))
[Alignment of Data Objects](javascript:call_link\('abenalignment.htm'\))
[Strings](javascript:call_link\('abenstring.htm'\))
[References](javascript:call_link\('abendata_references.htm'\))
[Memory Management of Deep Objects](javascript:call_link\('abenmemory_consumption.htm'\))
[Excursion Down to Bits and Bytes](javascript:call_link\('abapsheet_bits_and_bytes.htm'\))