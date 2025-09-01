  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Overview](javascript:call_link\('abenitab_oview.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: itab - Initial Memory Requirement, ABENITAB_INITIAL_MEM_REQ, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

itab - Initial Memory Requirement

The initial memory requirement is a type property of a [table type](javascript:call_link\('abentable_type_glosry.htm'\) "Glossary Entry") that is not part of its [technical type properties](javascript:call_link\('abentechnical_type_prpt_glosry.htm'\) "Glossary Entry") and does not affect its compatibility to other table types.

As for all dynamic data objects, [memory](javascript:call_link\('abenmemory_consumption_1.htm'\)) is requested for internal tables by inserting content. The data of an internal table is stored in the memory in blocks and the memory is requested block by block. The first block is allocated in the memory even before the table is filled with lines. This block is called the [initial memory requirement](javascript:call_link\('abeninitial_mem_req_glosry.htm'\) "Glossary Entry") of an internal table

If the initial memory requirement becomes insufficient for adding more lines, further blocks are created using an internal duplication strategy until a threshold is reached. After this, all blocks are requested with a constant size between eight and 16 kilobytes.

The size of the internal memory requirement can be affected by addition [INITIAL SIZE](abaptypes_itab.htm#!ABAP_ONE_ADD@1@). Normally, this is not necessary, but can make sense for nested internal tables.

When an internal table is initialized with [CLEAR](javascript:call_link\('abapclear.htm'\)), the initial memory requirement is not released. When an internal table is initialized with [FREE](javascript:call_link\('abapfree_dataobject.htm'\)), the initial memory requirement is released. The latter is necessary only in case of memory bottlenecks. Normally, performance is improved by reusing the allocated memory when refilling the internal table.