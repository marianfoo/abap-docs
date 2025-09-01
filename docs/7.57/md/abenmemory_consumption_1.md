  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentypes_and_objects.htm) →  [Types and Objects, Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentypes_objects_oview.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_objects.htm) →  [Memory Management of Deep Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmemory_consumption.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Memory Requirement for Deep Data Objects, ABENMEMORY_CONSUMPTION_1, 757%0D%0A%0D%0AEr
ror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Memory Requirement for Deep Data Objects

The memory requirement for a deep data object consists of a constant memory requirement for the reference and a dynamic memory required for the header and the actual objects.

-   The memory requirement for the reference is 8 bytes. With data and object references, this is the memory requirement of the explicitly declared reference variable. In strings, internal tables, and boxed components, an implicit reference is created internally. For as long as no dynamic memory is requested, the memory requirement for a string, internal table, or boxed component is exactly 8 bytes.
-   The dynamic memory consists of a header (string header, table header, box header, or object header) and the actual data (string, table body, substructure, anonymous data object, or class instance). The reference refers to the header, which in turn contains the address of the actual data and additional administrative information. The following figure illustrates the memory usage of deep data objects.

![Figure](abdoc_deep_memory.gif)

Dynamic memory (header and data) is requested:

-   For data and object references by [creating objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencreate_objects.htm)
-   For [dynamic data objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynamic_data_object_glosry.htm "Glossary Entry") (strings and internal tables) by inserting content. For internal tables, the memory is requested in blocks, whereby the initial size of a block is the [initial memory requirement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitial_mem_req_glosry.htm "Glossary Entry") that can be affected by the addition [INITIAL SIZE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_itab.htm) when defining an internal table.
-   For [boxed components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenboxed_component_glosry.htm "Glossary Entry") by undoing the [initial value sharing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitial_value_sharing_glosry.htm "Glossary Entry").

When a deep data object is initialized using [CLEAR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclear.htm), [REFRESH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprefresh_itab.htm) (obsolete), or [FREE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfree_dataobject.htm), the actual data is deleted, but the reference variables and the header of dynamic data objects are preserved. The latter is reused when another memory request is made. The memory requirement of a dynamic data object that was used once and then deleted therefore consists of the reference and the memory requirement of the header, except for boxed components. Only when using the statement FREE on internal tables, the table headers may also be deleted if they would take up too much memory. For static boxed components, initialization does not currently cause memory to be released. Initializing a static box in which [initial value sharing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitial_value_sharing_glosry.htm "Glossary Entry") was canceled does not delete the instance in the [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry") but assigns its type-dependent initial value to it.

The memory requirement of the different headers is approximately as follows:

-   For performance reasons, the memory usage of a string header depends on the length of the string. Strings with a length of less than approximately 30 characters/ or 60 bytes are referred to as short strings. The memory overhead of the string header of short strings is between approximately 10 and 40 bytes, depending on the length of the string. For all other strings, the overhead is approximately 50 bytes, regardless of the string length.
-   A table header of an internal table that dynamic memory has already been requested for is approximately 100 bytes, regardless of the line usage. For filled internal tables, approximately 50 or 100 bytes are added for pointers, depending on whether the architecture is 32 or 64-bit.
-   A box header of a boxed component always uses approximately 20 to 30 bytes.
-   An object header always uses approximately 30 bytes.

In internal tables, there are additional [line-related management costs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_key_memory.htm) in the header. This memory is not created in the table header but in parallel to the table body. This means that when lines are deleted, the corresponding administrative data is also deleted.

Hints

-   The exact memory requirement of a deep data object can be determined in the [ABAP Debugger](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_debugger_glosry.htm "Glossary Entry") using the memory consumption function and by creating a [memory snapshot](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmemory_snapshot_glosry.htm "Glossary Entry") for the [Memory Inspector](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmemory_inspector_glosry.htm "Glossary Entry").
-   Deleting lines of internal tables using [DELETE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_itab.htm) does not usually release any memory in the internal table, statements such as [CLEAR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclear.htm) or [FREE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfree_dataobject.htm) must be used to free memory in internal tables.

Executable Example

[Deep Data Objects, Memory Consumption](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmemory_usage_abexa.htm)