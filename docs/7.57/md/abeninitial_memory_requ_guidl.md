---
title: "Initial Memory Requirement"
description: |
  Background Internal tables are stored in the memory block by block. The ABAP runtime framework allocates a suitable memory area for the data of the table by default as the initial memory requirement(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitial_mem_req_glosry.htm 'Glossary
version: "7.57"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitial_memory_requ_guidl.htm"
abapFile: "abeninitial_memory_requ_guidl.htm"
keywords: ["do", "if", "try", "class", "data", "types", "internal-table", "abeninitial", "memory", "requ", "guidl"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrobust_abap_gdl.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Initial Memory Requirement, ABENINITIAL_MEMORY_REQU_GUIDL, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Initial Memory Requirement

Background   

Internal tables are stored in the memory block by block. The ABAP runtime framework allocates a suitable memory area for the data of the table by default as the [initial memory requirement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitial_mem_req_glosry.htm "Glossary Entry"). If the initial memory requirement is insufficient, further blocks are created using an internal duplication strategy until a threshold is reached. After this, all blocks are requested with a constant size between eight and 16 kilobytes.

The [INITIAL SIZE](abaptypes_itab.htm#!ABAP_ONE_ADD@1@) addition can be used to predefine a number of table lines when declaring an internal table, to override the number of initially allocated lines set by the system.

Rule   

Modify the initial memory requirement only for nested tables

Only use the INITIAL SIZE addition for the declaration of inner tables in nested tables if you can avoid using a large amount of memory unnecessarily.

Details   

The INITIAL SIZE addition is not necessary for external or non-nested tables since the automatic memory location by the runtime framework leads to the required result. Automatic memory allocation only results in excessive memory consumption in nested inner tables if more memory is allocated for a number of inner tables than they actually use. If the number of entries in the inner tables is known from the outset, the initial main memory requirement can be set accordingly using INITIAL SIZE.

Hint

Instance attributes of classes that are declared as inner tables can also be considered as nested tables. If many instances of a class with tabular attributes are expected, it can be useful to specify INITIAL SIZE.

Bad Example

The following source text shows the declaration of a nested table, where the initial memory requirement is specified incorrectly for the outer large table, not the inner small table.

TYPES small\_table TYPE STANDARD TABLE OF ...
  WITH NON-UNIQUE KEY ...
TYPES: BEGIN OF line\_structure,
         ...
         int\_table TYPE small\_table,
         ...
       END OF line\_structure,
       big\_table TYPE SORTED TABLE OF line\_structure
                 WITH UNIQUE KEY ...
                 INITIAL SIZE 10000.

Good Example

The following source text shows the declaration of a nested table, where the initial memory requirement is specified according to the above rule: for the inner small table and not the outer large table.

TYPES small\_table TYPE STANDARD TABLE OF ...
  WITH NON-UNIQUE KEY ...
  INITIAL SIZE 4.
TYPES: BEGIN OF line\_structure,
         ...
         int\_table TYPE small\_table,
         ...
       END OF line\_structure,
       big\_table TYPE SORTED TABLE OF line\_structure
                 WITH UNIQUE KEY ...