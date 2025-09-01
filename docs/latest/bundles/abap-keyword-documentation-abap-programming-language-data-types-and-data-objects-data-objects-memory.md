# ABAP - Keyword Documentation / ABAP - Programming Language / Data Types and Data Objects / Data Objects / Memory Management of Deep Objects

Included pages: 6


### abenmemory_consumption.htm

---
title: "Memory Management of Deep Objects"
description: |
  All data types for which the content of their data objects represents the actual work data referred to as flat in ABAP. The elementary data types(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenelementary_data_type_glosry.htm 'Glossary Entry') of a fixed length are flat, as are
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption.htm"
abapFile: "abenmemory_consumption.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "internal-table", "abenmemory", "consumption"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_and_objects.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_objects.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Memory%20Management%20of%20Deep%20Objects%2C%20ABENMEMORY_CONSUMPTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Memory Management of Deep Objects

All data types for which the content of their data objects represents the actual work data referred to as flat in ABAP. The [elementary data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenelementary_data_type_glosry.htm "Glossary Entry") of a fixed length are flat, as are structures with exclusively flat components. The memory requirements of flat data objects are defined statically by the data type. Flat data objects are always [static data objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_data_object_glosry.htm "Glossary Entry").

On the other hand, data types where the content of their data objects consists of [references](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreference_glosry.htm "Glossary Entry"), which, in turn, refer to work data in another memory area, are referred to as deep. Types of [data reference variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") and [object reference variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry"), as well as the types of [strings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_glosry.htm "Glossary Entry"), [internal tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_table_glosry.htm "Glossary Entry"), and [boxed components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboxed_component_glosry.htm "Glossary Entry") are deep. Strings and internal tables are [dynamic data objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_data_object_glosry.htm "Glossary Entry") whose memory requirements can change at program runtime and are managed internally using references. Reference variables are static data objects since their actual size is fixed, whereas the size of the explicitly referenced objects is dynamic. Boxed components are a medium in between because their memory requirements in the internal session are not defined when the program is started in the internal session, but can be handled like static data objects with a fixed length. Structures are referred to as deep, regardless of [nesting](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennested_structure_glosry.htm "Glossary Entry") if they contain at least one deep component.

When using deep data objects, working memory is requested at program runtime. In the case of reference variables, this is the memory for administrative information and the objects created (instances of classes and [anonymous data objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry")). In the case of dynamic data objects (strings, internal tables) and boxed components, this is the memory for administrative information and for the data objects themselves. Objects referenced by reference variables can themselves, in turn, be dynamic, that is, be or contain strings or internal tables.

The requested memory must be available in the [session memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenroll_area_glosry.htm "Glossary Entry") of the current [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry"), since otherwise a runtime error occurs.

-   [Memory Requirements for Deep Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption_1.htm)
-   [Maximum Size of Dynamic Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption_2.htm)
-   [Sharing Between Dynamic Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption_3.htm)
-   [Complex Data Objects with Deep Components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption_4.htm)

Hint

The available session memory is controlled by the [profile parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") described under [Session Memory](https://help.sap.com/docs/ABAP_PLATFORM_NEW/f146e75588924fa4987b6c8f1a7a8c7e/11c6413c521e4a13adf7473af49e8291). A percentage of the available memory can also be defined as a limit, where a [runtime warning](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenruntime_warning_glosry.htm "Glossary Entry") occurs if it is exceeded.

Continue
[Memory Requirement for Deep Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption_1.htm)
[Maximum Size of Dynamic Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption_2.htm)
[Sharing Between Dynamic Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption_3.htm)
[Complex Data Objects with Deep Components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption_4.htm)
![Example](exa.gif "Example") [Deep Data Objects, Memory Consumption](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_usage_abexa.htm)


### abenmemory_consumption_1.htm

---
title: "Memory Requirement for Deep Data Objects"
description: |
  The memory requirement for a deep data object consists of a constant memory requirement for the reference and a dynamic memory required for the header and the actual objects. -   The memory requirement for the reference is 8 bytes. With data and object references, this is the memory requirement of t
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption_1.htm"
abapFile: "abenmemory_consumption_1.htm"
keywords: ["insert", "delete", "do", "if", "try", "class", "data", "types", "internal-table", "abenmemory", "consumption"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_and_objects.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_objects.htm) →  [Memory Management of Deep Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Memory%20Requirement%20for%20Deep%20Data%20Objects%2C%20ABENMEMORY_CONSUMPTION_1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

Memory Requirement for Deep Data Objects

The memory requirement for a deep data object consists of a constant memory requirement for the reference and a dynamic memory required for the header and the actual objects.

-   The memory requirement for the reference is 8 bytes. With data and object references, this is the memory requirement of the explicitly declared reference variable. In strings, internal tables, and boxed components, an implicit reference is created internally. For as long as no dynamic memory is requested, the memory requirement for a string, internal table, or boxed component is exactly 8 bytes.
-   The dynamic memory consists of a header (string header, table header, box header, or object header) and the actual data (string, table body, substructure, anonymous data object, or class instance). The reference refers to the header, which in turn contains the address of the actual data and additional administrative information. The following figure illustrates the memory usage of deep data objects.

![Figure](abdoc_deep_memory.gif)

Dynamic memory (header and data) is requested:

-   For data and object references by [creating objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencreate_objects.htm)
-   For [dynamic data objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_data_object_glosry.htm "Glossary Entry") (strings and internal tables) by inserting content. For internal tables, the memory is requested in blocks, whereby the initial size of a block is the [initial memory requirement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitial_mem_req_glosry.htm "Glossary Entry") that can be affected by the addition [INITIAL SIZE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_itab.htm) when defining an internal table.
-   For [boxed components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboxed_component_glosry.htm "Glossary Entry") by undoing the [initial value sharing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitial_value_sharing_glosry.htm "Glossary Entry").

When a deep data object is initialized using [CLEAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclear.htm), [REFRESH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaprefresh_itab.htm) (obsolete), or [FREE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfree_dataobject.htm), the actual data is deleted, but the reference variables and the header of dynamic data objects are preserved. The latter is reused when another memory request is made. The memory requirement of a dynamic data object that was used once and then deleted therefore consists of the reference and the memory requirement of the header, except for boxed components. Only when using the statement FREE on internal tables, the table headers may also be deleted if they would take up too much memory. For static boxed components, initialization does not currently cause memory to be released. Initializing a static box in which [initial value sharing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitial_value_sharing_glosry.htm "Glossary Entry") was canceled does not delete the instance in the [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") but assigns its type-dependent initial value to it.

The memory requirement of the different headers is approximately as follows:

-   For performance reasons, the memory usage of a string header depends on the length of the string. Strings with a length of less than approximately 30 characters/ or 60 bytes are referred to as short strings. The memory overhead of the string header of short strings is between approximately 10 and 40 bytes, depending on the length of the string. For all other strings, the overhead is approximately 50 bytes, regardless of the string length.
-   A table header of an internal table that dynamic memory has already been requested for is approximately 100 bytes, regardless of the line usage. For filled internal tables, approximately 50 or 100 bytes are added for pointers, depending on whether the architecture is 32 or 64-bit.
-   A box header of a boxed component always uses approximately 20 to 30 bytes.
-   An object header always uses approximately 30 bytes.

In internal tables, there are additional [line-related management costs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_key_memory.htm) in the header. This memory is not created in the table header but in parallel to the table body. This means that when lines are deleted, the corresponding administrative data is also deleted.

Hints

-   Deleting lines of internal tables using [DELETE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab.htm) does not usually release any memory in the internal table, statements such as [CLEAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclear.htm) or [FREE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfree_dataobject.htm) must be used to free memory in internal tables.
-   The exact memory requirement of a deep data object can be determined in the [ABAP Debugger](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_debugger_glosry.htm "Glossary Entry") using the memory consumption function.
-   It can also be determined by creating a [memory snapshot](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_snapshot_glosry.htm "Glossary Entry") for the [Memory Inspector](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_inspector_glosry.htm "Glossary Entry").

Executable Example

[Deep Data Objects, Memory Consumption](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_usage_abexa.htm)


### abenmemory_consumption_2.htm

---
title: "Maximum Size of Dynamic Data Objects"
description: |
  In addition to the maximum memory size that the current internal session(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm 'Glossary Entry') can request for dynamic data objects(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendyna
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption_2.htm"
abapFile: "abenmemory_consumption_2.htm"
keywords: ["delete", "loop", "do", "while", "if", "try", "catch", "class", "data", "types", "internal-table", "abenmemory", "consumption"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_and_objects.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_objects.htm) →  [Memory Management of Deep Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Maximum%20Size%20of%20Dynamic%20Data%20Objects%2C%20ABENMEMORY_CONSUMPTION_2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

Maximum Size of Dynamic Data Objects

In addition to the maximum memory size that the current [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") can request for [dynamic data objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_data_object_glosry.htm "Glossary Entry"), their maximum size is limited by the following factors:

-   An upper limit for the number of places in strings or lines of internal tables results from the fact that 4 byte integers are used to address them internally and in ABAP statements, which limits them to 2147483647.
-   The size of strings and hashed tables is limited by the biggest memory block that can be requested in one piece. This is a maximum of 2 GB but is usually further limited using the [profile parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") ztta/max\_memreq\_MB. For strings, the value of the profile parameter corresponds directly to the maximum size that can be occupied. The maximum number of lines in hashed tables depends on the required size of the hash administration that must be stored there. Currently, it is calculated from the largest power of two that fits into the value of the profile parameter divided by 8. For example, if the profile parameter specifies 250 MB, a hashed table can contain a maximum of about 16 million entries (128 times 1024 to the power of two divided by 8).

The actual maximum size is generally smaller than specified by the above limits since the overall available memory is normally not only used by a string or an internal table.

If an operation with a dynamic data object exceeds its maximum size, an exception occurs:

-   For internal tables, such an exception is uncatchable and always results in a [runtime error](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenruntime_error_glosry.htm "Glossary Entry"). There are different runtime errors for different situations, as for example [TSV\_TNEW\_PAGE\_ALLOC\_FAILED](https://launchpad.support.sap.com/#/notes/20527).
-   For strings, the exception is class-based and connected to exception class CX\_SY\_STRING\_SIZE\_TOO\_LARGE. The runtime error STRING\_SIZE\_TOO\_LARGE only occurs if the exception is not handled. After this exception is caught, the respective string contains the content it had directly before the exception. This is usually the content it had before the entire operation (statement, function). Exceptions from this rule are statements like [CONCATENATE LINES OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconcatenate.htm) or functions like [concat\_lines\_of](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconcatenation_functions.htm), which can change the string before the exception occurs.

Hints

-   If there is only little memory space available, it may be better to use an internal table, because its memory space is requested in blocks, while the entire memory space required for a string must always be free as a whole.
-   It is strongly recommended that the content of a string after catching an exception CX\_SY\_STRING\_SIZE\_TOO\_LARGE is regarded as undefined and that it is deleted as soon as possible.

Example

In the following DO loop of class CL\_DEMO\_STRING\_SIZE\_TOO\_LARGE, a string is concatenated with itself until it exceeds its maximum size and an exception occurs. After catching the exception, the byte-length of the string is determined before its content is deleted.

DATA(txt) = \`X\`.
TRY.
    DO.
      txt = txt && txt.
    ENDDO.
  CATCH cx\_sy\_string\_size\_too\_large INTO FINAL(exc).
    cl\_demo\_output=>display(
      |{ exc->get\_text( )
       }.\\nThe resulting string has a length of {
         xstrlen( cl\_abap\_codepage=>convert\_to(
                    source = txt
                    codepage = 'UTF-16' ) ) } bytes.| ).
    CLEAR txt.
ENDTRY.


### abenmemory_consumption_3.htm

---
title: "Sharing Between Dynamic Data Objects"
description: |
  When reference variables are assigned, only the references are copied. After an assignment, source and target variables point to the same data object or instance of a class (more precisely, to their headers). Sharing also takes place internally in assignments(https://help.sap.com/doc/abapdocu_late
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption_3.htm"
abapFile: "abenmemory_consumption_3.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "internal-table", "abenmemory", "consumption"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_and_objects.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_objects.htm) →  [Memory Management of Deep Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Sharing%20Between%20Dynamic%20Data%20Objects%2C%20ABENMEMORY_CONSUMPTION_3%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Sharing Between Dynamic Data Objects

When reference variables are assigned, only the references are copied. After an assignment, source and target variables point to the same data object or instance of a class (more precisely, to their headers).

Sharing also takes place internally in [assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassignment_glosry.htm "Glossary Entry") between similar [strings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_glosry.htm "Glossary Entry") and between similar [internal tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_table_glosry.htm "Glossary Entry") whose line types do not themselves contain table types. This means that the actual data values are not copied at first. Only the necessary administration entries are copied, so that the target object refers to the same data as the source object.

For strings, a new internal reference is created that points to the existing string header. For internal tables, a new internal reference and a new table header, which refers to the existing [table body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_body_glosry.htm "Glossary Entry"), are created.

Sharing between dynamic data objects is, of course, only active for as long as multiple dynamic data objects are involved, or more than one internal reference refers to the data values. As soon as only one internal reference refers to the data, sharing no longer takes place. Such cases occur, for example, if involved dynamic data objects only exist during the lifetime of a procedure, or if they are recorded as anonymous data objects by the Garbage Collector.

Active sharing between existing dynamic data objects is canceled when either the source object or target object is accessed in change mode (copy-on-write semantics). The actual copy process for the data values then takes place and the references and headers are changed accordingly.

The following figure illustrates the sharing of dynamic data objects. The upper section shows how strings are shared on the left and how internal tables are shared on the right side. The lower section shows how sharing is canceled when the source or target object is changed.

![Figure](abdoc_sharing.gif)

Hints

-   Table sharing usually only occurs for tables whose line types do not themselves contain table types. Otherwise, the prerequisite for "similar tables" is kept deliberately vague. Tables are similar if they at least have the exact same table type, that is the same line type, table category, and keys. There are other table combinations that are also considered to be similar and in which sharing can take place. However, this is an internal optimization measure that may be changed between releases. Therefore, programming should never be based on when table sharing occurs and when it is canceled again.
-   Sharing also occurs during [pass by value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpass_by_value_glosry.htm "Glossary Entry") to procedures.
-   Sharing is not canceled by changes to the objects for reference variables that point to the same data object or the same instance of a class.
-   Another type of sharing is the [initial value sharing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitial_value_sharing_glosry.htm "Glossary Entry") of [boxed components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboxed_component_glosry.htm "Glossary Entry") for which the initial value is stored only once per AS instance.
-   Sharing is also supported when accessing [shared objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshared_objects_glosry.htm "Glossary Entry"), for as long as an [area instance version](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") is bound to the current [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") using an [area handle](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarea_handle_glosry.htm "Glossary Entry").


### abenmemory_consumption_4.htm

---
title: "Complex Data Objects with Deep Components"
description: |
  If data objects of complex data types(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomplex_data_type_glosry.htm 'Glossary Entry') have many deep components, which often, for example, applies to internal tables with a deep line type for example, the administrative costs in th
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption_4.htm"
abapFile: "abenmemory_consumption_4.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "internal-table", "abenmemory", "consumption"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_and_objects.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_objects.htm) →  [Memory Management of Deep Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Complex%20Data%20Objects%20with%20Deep%20Components%2C%20ABENMEMORY_CONSUMPTION_4%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

Complex Data Objects with Deep Components

If data objects of [complex data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomplex_data_type_glosry.htm "Glossary Entry") have many deep components, which often, for example, applies to internal tables with a deep line type for example, the administrative costs in the form of memory for references and headers must be prevented from growing disproportionately large compared to the actual data content.

For complex data objects with relatively little data content, three basic cases can be distinguished:

1.  Complex data objects with a sparse fill level
    
    A complex deep data object is sparsely populated if it contains many deep components of which most are initial. The memory requirement of such a deep initial component like this is 8 bytes for as long as the component does not yet refer to a header.
    
2.  Complex data objects with a duplicative fill level
    
    A complex deep data object has a duplicative fill level if it contains many deep components of which most refer to the same data. Such components share the dynamic memory and only contribute to the memory requirement of their references. For [dynamic data objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_data_object_glosry.htm "Glossary Entry"), this is achieved by [sharing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption_3.htm).
    
3.  Complex data objects with a low fill level
    
    A complex deep data object has a low fill level if it contains many deep components that refer to different objects, strings, or internal tables, but the objects only require very little memory or are empty.
    

Deep data objects with a fill level that is sparse, duplicative, and not too low can usually be used without any concerns.

For deep data objects with a sparse fill level and few duplicates, it is vital to consider the memory requirements for references and headers. Unlike other programming languages, ABAP is not suitable for the massive use of such data objects. If the dataset is low, a class wrapper can also be used as an alternative to internal tables, since the additional costs for objects are comparatively low.

Example

An example of a duplicative data object with a low fill level is an internal table whose line type itself is table-like or contains table-like components. Even if the inner internal tables are initialized after previous use, they still occupy memory for reference and header, which can cause considerable memory requirements for little or no work data in the case of a large outer internal table.

Executable Example

See [Deep Data Objects, Memory Usage](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_usage_abexa.htm).


### abenmemory_usage_abexa.htm

---
title: "Deep Data Objects, Memory Consumption"
description: |
  The example illustrates the administrative costs of deep components with low data content. Source Code  CCDEF CLASS lcl DEFINITION. PUBLIC SECTION. DATA atab TYPE TABLE OF i. ENDCLASS.  Public class definition CLASS cl_demo_memory_usage DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CRE
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_usage_abexa.htm"
abapFile: "abenmemory_usage_abexa.htm"
keywords: ["delete", "loop", "do", "if", "case", "method", "class", "data", "types", "internal-table", "abenmemory", "usage", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_and_objects.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_objects.htm) →  [Memory Management of Deep Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Deep%20Data%20Objects%2C%20Memory%20Consumption%2C%20ABENMEMORY_USAGE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

Deep Data Objects, Memory Consumption

The example illustrates the administrative costs of deep components with low data content.

Source Code   

\* CCDEF
CLASS lcl DEFINITION.
  PUBLIC SECTION.
    DATA atab TYPE TABLE OF i.
ENDCLASS.
\* Public class definition
CLASS cl\_demo\_memory\_usage DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_memory\_usage IMPLEMENTATION.
  METHOD main.
    CONSTANTS n TYPE i VALUE 1000.
    DATA: itab TYPE TABLE OF i,
          dref TYPE REF   TO i,
          rtab TYPE TABLE OF REF TO i,
          ltab TYPE TABLE OF i,
          ttab LIKE TABLE OF ltab,
          oref TYPE REF   TO lcl,
          otab TYPE TABLE OF REF TO lcl.
    FIELD-SYMBOLS <line> TYPE any.
    DO n TIMES.
      APPEND sy-index TO itab.
      CLEAR dref.
      CREATE DATA dref.
      dref->\* = sy-index.
      APPEND dref TO rtab.
      CLEAR ltab.
      APPEND sy-index TO ltab.
      APPEND ltab TO ttab.
      CLEAR oref.
      CREATE OBJECT oref.
      APPEND sy-index TO oref->atab.
      APPEND oref TO otab.
    ENDDO.
    BREAK-POINT ##no\_break.
    LOOP AT itab ASSIGNING <line>.
      FREE <line>.
    ENDLOOP.
    LOOP AT rtab ASSIGNING <line>.
      FREE <line>.
    ENDLOOP.
    LOOP AT ttab ASSIGNING <line>.
      FREE <line>.
    ENDLOOP.
    LOOP AT otab ASSIGNING <line>.
      FREE <line>.
    ENDLOOP.
    BREAK-POINT ##no\_break.
  ENDMETHOD.
ENDCLASS.

Description   

At the breakpoints, the memory requirements of the four internal tables itab, rtab, ttab, and otab can be displayed by the ABAP Debugger.

At the first breakpoint, the four tables have the same dynamic but not duplicate data content, that is, 1000 different integers. In itab, the data content of about 4 KB is only increased by the administrative costs for itab itself (around 100 bytes); in all other tables, administrative costs are created for each table line. In the case of the deep line types in rtab, ttab, and otab, the data content size of 4 KB compares with administrative costs of 100, 200, and 300 KB. The costs for the inner internal table in ttab are higher than that for the data reference in rtab and the administrative costs for otab consist of the costs for the object references and for the internal tables in the referenced objects.

At the second breakpoint, all lines of each of the four tables were initialized using FREE. Of course, this has no effect on the memory requirements of itab. In the case of rtab, all data and all administrative information of the individual reference variables was deleted, leaving memory requirements of about 8 KB for the initial references as well as the administrative costs for rtab itself. In the case of ttab, all data was deleted but the individual table headers were retained, which means that, even though they are less than before, there are still administrative costs of about 100 KB. For otab however, the same applies as to rtab, leaving only the costs for the initial references.

This example shows, for example, that for internal tables with deep line types the administrative costs may easily exceed the data content and, on the other hand, that a table with object references is less expensive after the deletion of data than a table with inner tables.
