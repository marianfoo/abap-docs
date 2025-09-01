  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_and_objects.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_objects.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendobj_itab.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Initial%20Memory%20Requirement%2C%20ABENITAB_INITIAL_MEM_REQ%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

itab - Initial Memory Requirement

The initial memory requirement is a type property of a [table type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_type_glosry.htm "Glossary Entry") that is not part of its [technical type properties](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentechnical_type_prpt_glosry.htm "Glossary Entry") and does not affect its compatibility to other table types.

As for all dynamic data objects, [memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption_1.htm) is requested for internal tables by inserting content. The data of an internal table is stored in the memory in blocks and the memory is requested block by block. The first block is allocated in the memory even before the table is filled with lines. This block is called the [initial memory requirement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitial_mem_req_glosry.htm "Glossary Entry") of an internal table

If the initial memory requirement becomes insufficient for adding more lines, further blocks are created using an internal duplication strategy until a threshold is reached. After this, all blocks are requested with a constant size between eight and 16 kilobytes.

The size of the internal memory requirement can be affected by addition [INITIAL SIZE](abaptypes_itab.htm#!ABAP_ONE_ADD@1@). Normally, this is not necessary, but can make sense for nested internal tables.

When an internal table is initialized with [CLEAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclear.htm), the initial memory requirement is not released. When an internal table is initialized with [FREE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfree_dataobject.htm), the initial memory requirement is released. The latter is necessary only in case of memory bottlenecks. Normally, performance is improved by reusing the allocated memory when refilling the internal table.