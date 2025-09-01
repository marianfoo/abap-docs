  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_and_objects.htm) →  [Types and Objects - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_objects_oview.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects.htm) →  [Memory Management of Deep Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory_consumption.htm) → 

Memory Requirement for Deep Data Objects

The memory requirement for a deep data object consists of constantly required memory for the reference and dynamically required memory for the header and the actual objects.

-   The memory requirement for the reference is 8 byte. With data and object references, this is the memory requirement of the explicitly declared reference variable. With strings, internal tables, and boxed components, an implicit reference is created internally. As long as no dynamic memory is requested, the memory requirement for a string, internal table, or boxed component is exactly 8 bytes.

-   The dynamic memory consists of a header (string header, table header, box header, or object header) and the actual data (string, table body, substructure, anonymous data object, or class instance). The reference points to the header, which in turn contains the address of the actual data and additional administrative information. The following graphic illustrates the memory usage of deep data objects.

![Figure](abdoc_deep_memory.gif)

Dynamic memory (header and data) is requested:

-   For data and object references by [creating objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_objects.htm)

-   For [dynamic data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynamic_data_object_glosry.htm "Glossary Entry") (strings and internal tables) by inserting content. For internal tables, the memory is requested in blocks. The initial size of a block can be modified by the addition [INITIAL SIZE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_itab.htm) when defining an internal table.

-   For [boxed components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboxed_component_glosry.htm "Glossary Entry") by canceling [initial value sharing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninitial_value_sharing_glosry.htm "Glossary Entry").

When a deep data object is initialized using [CLEAR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclear.htm), [REFRESH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaprefresh_itab.htm) (obsolete), or [FREE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfree_dataobject.htm), the actual data is deleted, but the reference variables and (for dynamic data objects) the header are preserved. The latter is reused when memory is requested again. The memory requirement of a dynamic data object that is used once and then deleted therefore consists of the reference and the memory requirement of the header, with the exception of boxed components. Only when using the statement FREE on internal tables are table headers sometimes deleted if they would take up too much memory. For static components, initialization does not currently lead to memory being released. Initializing a static box in which [initial value sharing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninitial_value_sharing_glosry.htm "Glossary Entry") was canceled does not delete the instance in the [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry") and assigns its type-dependent initial value to the instance instead.

The memory requirement of the different headers is approximately as follows:

-   For performance reasons, the memory usage of a string header depends on the length of the string. Strings with a length of less than around 30 characters/60 bytes are called short strings. The memory overhead of the string header of short strings is between approximately 10 and 40 bytes, depending on the length of the string. For all other strings, the overhead is approximately 50 bytes, regardless of the string length.

-   A table header of an internal table that dynamic memory has already been requested for is around 100 bytes, regardless of the line usage. For filled internal tables, about another 50 or 100 bytes is required for pointers, depending on whether the architecture is 32 or 64-bit.

-   A box header of a boxed component always uses approximately 20 to 30 bytes.

-   An object header always uses around 30 bytes.

For internal tables, there are additional [row-related management costs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_memory.htm) in the header. This memory is not created in the table header, but is created in parallel to the table body. This means that when rows are deleted, the corresponding administration data is also deleted.

The exact memory requirement of a deep data object can be determined in [ABAP Debugger](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_debugger_glosry.htm "Glossary Entry") using the memory consumption function and by creating a [memory snapshot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory_snapshot_glosry.htm "Glossary Entry") for [Memory Inspector](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory_inspector_glosry.htm "Glossary Entry").

Note

Deleting rows in internal tables using [DELETE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab.htm) does not usually free any memory in the internal table. Statements such as [CLEAR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclear.htm) or [FREE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfree_dataobject.htm) must be used to free memory in internal tables.

Executable Example

[Deep Data Objects, Memory Consumption](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory_usage_abexa.htm)