# ABAP - Keyword Documentation / ABAP - Programming Guidelines / Robust ABAP / Internal Tables

Included pages: 8


### abenitab_gdl.htm

---
title: "Internal Tables"
description: |
  An internal table is a dynamic data object consisting of a sequence of lines with the same data type. The data type of an internal table is a table type that has the following basic properties of every internal table: -   Line Type The line type can be any data type. In particular, tables of element
version: "7.57"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_gdl.htm"
abapFile: "abenitab_gdl.htm"
keywords: ["select", "loop", "do", "if", "try", "method", "data", "types", "internal-table", "abenitab", "gdl"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrobust_abap_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Internal Tables, ABENITAB_GDL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestio
n for improvement:)

Internal Tables

An internal table is a dynamic data object consisting of a sequence of lines with the same data type. The data type of an internal table is a table type that has the following basic properties of every internal table:

-   Line Type
    
    The line type can be any data type. In particular, tables of
    
    elementary types, tables of structures, tables of tables, and
    
    tables or references are all possible.
    
-   Table category
    
    The table category specifies the storage method and primary access method. The possible table categories are:
    
    -   Standard tables administered using a primary table index and which cannot have a unique primary table key.
    -   Sorted tables administered using a primary table index and that can have a unique or non-unique primary table key (used to sort the table).
    -   Hashed tables whose primary table key always has to be unique and which use a hash algorithm (distributed memory management) to administer their lines. A hashed table does not have a primary table index.
-   Primary table key
    
    Every internal table has a primary table key. A table key consists of columns from the internal table. The content of these columns identifies table lines. The table category determines whether a key is unique or non-unique.
    

Internal tables enable variable datasets (a variable number of lines) with a fixed structure (the line type) to be processed in the working memory of the [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry") of a program. The content of an internal table can either be accessed sequentially in a LOOP or by accessing individual lines (for example, by using READ TABLE or a table expression).

There are two ways of accessing individual lines:

-   By specifying a key (a table key or a free key)
-   By specifying a line index

Primary table access is possible for all three table categories. Access using the primary key, however, is optimized only for sorted tables and hashed tables. In standard tables, primary key access uses a linear search. Access using the primary line index, on the other hand, is possible for standard tables and sorted tables only. As well as its primary key, an internal key can also have further secondary keys. These keys enhance and optimize access options to the various table categories.

-   [Selecting the Table Category](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_table_type_guidl.htm "Guideline")
-   [Secondary Keys](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_key_guidl.htm "Guideline")
-   [Initial Memory Requirement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitial_memory_requ_guidl.htm "Guideline")
-   [Sorted Filling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensort_guidl.htm "Guideline")
-   [Compressed Filling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencollect_guidl.htm "Guideline")
-   [Target Area](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_output_guidl.htm "Guideline")
-   [Loop Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenloop_guidl.htm "Guideline")

Continue
[Selecting the Table Category](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_table_type_guidl.htm)
[Secondary Key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_key_guidl.htm)
[Initial Memory Requirement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitial_memory_requ_guidl.htm)
[Sorted Filling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensort_guidl.htm)
[Collected Filling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencollect_guidl.htm)
[Target Area](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_output_guidl.htm)
[Loop Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenloop_guidl.htm)


### abenselect_table_type_guidl.htm

---
title: "Selecting the Table Category"
description: |
  Background The table category specifies the internal administration for an internal table and the primary access type: -   Standard tables that are managed with a primary table index. When inserting or deleting table lines, only the table index is reorganized, but not the remaining table lines. If l
version: "7.57"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_table_type_guidl.htm"
abapFile: "abenselect_table_type_guidl.htm"
keywords: ["select", "insert", "delete", "loop", "do", "if", "case", "try", "data", "types", "internal-table", "abenselect", "table", "type", "guidl"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrobust_abap_gdl.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Selecting the Table Category, ABENSELECT_TABLE_TYPE_GUIDL, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Selecting the Table Category

Background   

The table category specifies the internal administration for an internal table and the primary access type:

-   Standard tables that are managed with a primary table index. When inserting or deleting table lines, only the table index is reorganized, but not the remaining table lines. If lines are only appended (APPEND) at the end or deleted, no reorganization of the table index is required. However, access using the primary key is not optimized. It triggers a linear search across all lines.
-   Sorted tables are also managed using their primary table index, which is always available in the memory, sorted according to the primary table key. This means that the table index must usually be reorganized each time a table line is inserted or deleted. When accessing using the primary key, a binary search is performed, causing the time required for the search to be merely logarithmically dependent on the number of lines.
-   Hashed tables are based on distributed memory management. They are therefore optimized for access using the primary table key and attain a constant access time, regardless of the number of lines. In return, the distributed memory management requires additional memory space and does not allow for non-unique primary table keys. There is no primary table index, and a respective index access is not possible.

Standard tables and sorted tables can be summarized under the term index tables. An index access is always the fastest way to access table entries. The prerequisite for an index access is that the value for the index specification has been determined in advance. This usually requires a previous key access, for example, using READ TABLE, where the sy-tabix system field is set.

Rule   

Use a suitable table category

Select the table category according to the primary requirements. As a rule of thumb, if the tables are large, the following selection criteria apply:

-   Mainly index accesses: standard tables
-   Index accesses and key accesses: sorted tables
-   Only key accesses: hashed tables

Details   

Particularly for tables with a lot of lines, you have to select the appropriate table category carefully. The following recommendations are mainly derived from the processing speed requirements:

-   Standard Tables
    
    This table category can always be used if the primary access types are sequential processing or index access. You should fill standard tables by appending lines using APPEND and implement the other accesses using an index specification (the addition INDEX of the respective statements). Ideally, the filling process is decoupled from other accesses. After explicit sorting has taken place, you can also use an optimized key access (free key) using BINARY SEARCH, which enables you to identify an entry point for sequential processing (LOOP), for example. However, due to the linear search, large standard tables (more than 100 lines) are not the appropriate table category, if the primary access type for an internal table is through key accesses.
    
-   Sorted Tables
    
    This table category is useful if both a fast key access and an index access are necessary, and if the lines are supposed to be sorted when the table is filled. In addition, sorted tables are also suited for partially sequential access in a LOOP loop, where the first part of the table key is specified in the WHERE condition. Finally, sorted tables with an ambiguous key are the only alternative to hashed tables if no unique key can be defined.
    
-   Hashed Tables
    
    This table category is useful if key accesses are the central operation for table entries, if the tables are large, and if a unique key can be defined.
    

In addition to the processing speed, memory requirements can also play an important role. If this is supposed to be optimized according to [Consider the Ratio of Administration and Application Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadmin_costs_dyn_mem_obj_guidl.htm "Guideline"), you must also take into account the administration costs of the table categories.

-   Standard tables and sorted tables (index tables) that are managed using a table index, incur the least [administration costs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadmin_costs_dyn_mem_obj_guidl.htm "Guideline") (6 bytes for each line on average). As long as the logical order in the table index corresponds to the physical order in the table body, a standard table does not incur any line-related administration costs. This is the case if you always append lines after the last line or delete only the last line.
-   Hashed tables require considerably more space for their [administration data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadmin_costs_dyn_mem_obj_guidl.htm "Guideline") than index tables (18 or 30 bytes for each line on average).

Depending on the length of the key and the number of lines in an internal table, access using a sorted key can be as fast as or even faster than using a hashed table. In cases like this, and if the memory space is critical, you should work with a sorted table instead of a hashed table.

If you use [secondary keys](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_key_guidl.htm "Guideline"), the rules mentioned here may be qualified to a certain degree, as the overall costs need to be considered in this case.


### abensecondary_key_guidl.htm

---
title: "Secondary Key"
description: |
  Background Secondary keys can be declared for internal tables. The following options are possible: -   Sorted keys (non-unique or unique) -   Hash keys that can only be unique These keys are assigned a name when they are declared and can be created for any table category. The primary key (nameless u
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_key_guidl.htm"
abapFile: "abensecondary_key_guidl.htm"
keywords: ["update", "delete", "loop", "do", "if", "case", "data", "types", "internal-table", "abensecondary", "key", "guidl"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrobust_abap_gdl.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Secondary Key, ABENSECONDARY_KEY_GUIDL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0A
Suggestion for improvement:)

Secondary Key

Background   

Secondary keys can be declared for internal tables. The following options are possible:

-   Sorted keys (non-unique or unique)
-   Hash keys that can only be unique

These keys are assigned a name when they are declared and can be created for any table category. The primary key (nameless up to this point) is assigned a predefined name (primary\_key), which allows it to be explicitly addressed. A secondary table index is created internally for each sorted secondary key. This enables index access to hashed tables. When internal tables are accessed, a table key or index must be specified. If nothing is explicitly specified, the internal table is accessed using the primary key or primary index by default.

Access to internal tables using secondary keys is always optimized. This generally increases read performance significantly. Previously, no optimized key access was possible for this. On the other hand, secondary keys also incur additional administration costs due to memory consumption and runtime. Additional runtime costs arise, if a secondary table index needs to be updated after changes to table content. The ABAP runtime framework delays these runtime costs for as long as possible, until they are actually required (lazy update and delayed update). The [administration costs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadmin_costs_dyn_mem_obj_guidl.htm "Guideline") for a secondary key are just as high as for the primary table keys: on average, 6 bytes for each secondary index line and 18 or 30 bytes for each hash key line. On average, another 8 bytes per line are required if the table has at least one non-unique sorted secondary key. Additional memory costs are incurred if a secondary key needs to be updated after changes to internal table content. These memory costs are on the same scale as the costs above and also depend on the number of lines.

Rule   

Use secondary keys in a way that benefits the table.

Use secondary keys sparingly and only in cases where the benefits outweigh the extra costs.

Details   

The internal management of secondary keys in an internal table can involve significant memory consumption and updates. Secondary keys are useful for accelerating reads in the following cases:

-   The standard scenario for the profitable use of secondary table keys is a very large internal table that is filled once and the content is changed very infrequently. In this case, runtime costs for secondary key administration are only incurred when the internal table is created and in a few other rare situations. These costs are more than outweighed by more efficient, more frequent reads.
-   Secondary keys might be useful for small internal tables in some circumstances because they ensure unique table entries in relation to particular components. This justifies the extra costs for the secondary key. This applies to standard tables in particular, whose primary keys can never be unique.

When using secondary keys, remember:

-   As a matter of principle, secondary hash keys should not have too many components. Otherwise, the system has to deal with a high system load caused by the additional hash management. Sorted keys are preferable for secondary keys with a large number of components. The same applies to primary keys.
-   In the case of read-only access where unique table entries are not relevant, non-unique secondary keys are usually sufficient. Read access is either just as fast or if duplicate entries exist almost as fast as for unique keys. Updates are only performed after table modifications if necessary.
-   If index table lines are deleted using secondary key accesses, the primary index of the table must be updated. This cannot be optimized for standard tables; a linear search needs to be performed instead.

Secondary table keys should not be used in the following situations:

-   For small internal tables (less than 50 lines), the performance gain for reads is greatly outweighed by the increased memory and administration costs.
-   In tables where a large number of writes are performed, the load incurred by updating the secondary keys outweighs the performance benefits in the case of reads. Delayed updates and lazy updates in particular can incur update costs for exactly those reads for which the optimization was actually intended. This results in either no gain or a negative gain.

Hints

-   It is relatively easy to provide secondary keys later on for existing internal table types in ABAP programs, especially for table types that are defined in ABAP Dictionary. It must be remembered that the secondary key of an internal table, unlike database access, must be specified at the position where it was used, so that it can be evaluated. In these cases, only non-unique sorted keys are usually defined, otherwise programs that use tables of this type and fill these tables with non-unique lines based on these components will no longer function properly.
-   Note that the sy-tabix system field is populated by the assigned secondary index, if sorted secondary keys are used. If this value is used for the subsequent index access to the internal table, the same table index must be explicitly used here. If used implicitly, the value would be interpreted as a primary index.

Bad Example

In the following source code, a large hashed table is accessed using a free key, which does not correspond to the primary key of the table. Therefore, a linear search is required for this access. This is very time-intensive.

DATA itab TYPE HASHED TABLE OF dbtab
  WITH UNIQUE KEY col1 col2 ...
  "fill itab with a large amount of data
  ...
READ TABLE itab
           WITH KEY col3 = ... col4 = ...
           ASSIGNING ...

Good Example

The following source code optimizes the above example by adding a secondary table key to the table declaration and replacing the use of the free key during access. Sequential processing in the order defined with this key is now also possible.

DATA itab TYPE HASHED TABLE OF dbtab
  WITH UNIQUE KEY col1 col2 ...
  WITH NON-UNIQUE SORTED KEY second\_key
    COMPONENTS col3 col4 ...
  "fill itab with a large amount of data
  ...
ASSIGN itab\[ KEY second\_key
             COMPONENTS col3 = ... col4 = ... \]
             TO ...
...
LOOP AT itab USING KEY second\_key.
...
ENDLOOP.


### abeninitial_memory_requ_guidl.htm

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


### abensort_guidl.htm

---
title: "Sorted Filling"
description: |
  Background The statement APPEND for attaching lines to an internal table has the addition SORTED BY. This addition can be used to fill a standard table by using sorted filling. The prerequisites are: -   A value greater than zero must be specified for the addition INITIAL SIZE(https://help.sap.com
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensort_guidl.htm"
abapFile: "abensort_guidl.htm"
keywords: ["loop", "do", "if", "data", "internal-table", "abensort", "guidl"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrobust_abap_gdl.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Sorted Filling, ABENSORT_GUIDL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on for improvement:)

Sorted Filling

Background   

The statement APPEND for attaching lines to an internal table has the addition SORTED BY. This addition can be used to fill a standard table by using sorted filling. The prerequisites are:

-   A value greater than zero must be specified for the addition [INITIAL SIZE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitial_memory_requ_guidl.htm "Guideline").
-   Only the statement APPEND with the addition SORTED BY can be used to fill the internal table.

Once these prerequisites have been met, a ranking list is created that contains at most the same number of lines as specified with INITIAL SIZE. This list is sorted by the component specified after SORTED BY in descending order.

Rule   

Create ranking lists with unsorted filling

Do not use the addition SORTED BY of the statement APPEND to create ranking lists. Use the statement SORT instead.

Details   

If the statement APPEND is used with the addition SORTED BY, you cannot simply append lines (contrary to what the name implies). Instead, a complicated process is started that only creates a ranking list if specific prerequisites are met. Otherwise incomprehensible results are returned. In addition, it is not possible to sort by more than one column.

The statement SORT is more robust, more powerful and easier to comprehend when used in this scenario.

Bad Example

The following source code shows how to create a ranking list of the ten longest distances from a table of flight connections, by using the rule APPEND SORTED BY. This rule is no longer recommended, as described above. When declaring the ranking list table, you need to specify the addition INITIAL SIZE.

...
DATA distance\_list TYPE TABLE OF spfli-distance
                   INITIAL SIZE 10.
FIELD-SYMBOLS <spfli\_wa> LIKE LINE OF spfli\_tab.
...
LOOP AT spfli\_tab ASSIGNING <spfli\_wa>.
  APPEND <spfli\_wa>-distance TO distance\_list
    SORTED BY table\_line.
ENDLOOP.
...

Good Example

The following source code shows how to create the same ranking list in the previous example, but using the more robust statement SORT.

...
DATA distance\_list TYPE TABLE OF spfli-distance.
FIELD-SYMBOLS <spfli\_wa> LIKE LINE OF spfli\_tab.
...
SORT spfli\_tab BY distance DESCENDING.
LOOP AT spfli\_tab TO 10 ASSIGNING <spfli\_wa>.
  APPEND <spfli\_wa>-distance TO distance\_list.
ENDLOOP.
...


### abencollect_guidl.htm

---
title: "Collected Filling"
description: |
  Background The statement COLLECT can be used to collect lines and insert them in an internal table. If a line with the relevant primary key already exists in the target table, the values of numeric components are added to the values in the existing table line. Otherwise, a new line is inserted in th
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencollect_guidl.htm"
abapFile: "abencollect_guidl.htm"
keywords: ["insert", "do", "if", "internal-table", "abencollect", "guidl"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrobust_abap_gdl.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Collected Filling, ABENCOLLECT_GUIDL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion for improvement:)

Collected Filling

Background   

The statement COLLECT can be used to collect lines and insert them in an internal table. If a line with the relevant primary key already exists in the target table, the values of numeric components are added to the values in the existing table line. Otherwise, a new line is inserted in the table.

Rule   

Do not fill standard tables with collections of lines

Only use the statement COLLECT for hashed tables or sorted tables with a unique key. Do not use it any more for standard tables.

Details   

The statement COLLECT is based on unique entries with respect to the primary key and stable key administration. This means that not all categories of internal tables are suitable for COLLECT:

-   If the statement COLLECT is applied to a standard table, this table first needs its own internal hash administration. Change operations on the table can invalidate this temporary hash administration. After a change operation of this type, the following COLLECT statements must resort to a linear search, which can affect performance considerably. The primary key of a standard table is also never unique.
-   COLLECT can be used for sorted tables and hashed tables without any problems since these, unlike standard tables, always have a separate, stable key administration that can be utilized by COLLECT. COLLECT can work properly for sorted tables only if the primary key is unique. If a sorted table has a non-unique key, only COLLECT can be used to fill the table, which is difficult to guarantee. In hashed tables, the key values are always unique.


### abentable_output_guidl.htm

---
title: "Target Area"
description: |
  Background Internal tables can be read by accessing individual lines using READ TABLE or table expressions(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expression_glosry.htm 'Glossary Entry'), or sequentially using LOOP AT. In both cases, the following output behavior can b
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_output_guidl.htm"
abapFile: "abentable_output_guidl.htm"
keywords: ["select", "insert", "loop", "do", "if", "case", "try", "data", "internal-table", "field-symbol", "abentable", "output", "guidl"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrobust_abap_gdl.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Target Area, ABENTABLE_OUTPUT_GUIDL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

Target Area

Background   

Internal tables can be read by accessing individual lines using READ TABLE or [table expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expression_glosry.htm "Glossary Entry"), or sequentially using LOOP AT. In both cases, the following output behavior can be defined by using the statements with the following additions:

-   The addition INTO copies the content of the line to an appropriate data object.
-   The addition ASSIGNING assigns the read line to a [field symbol](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendyn_access_data_obj_guidl.htm "Guideline"), which enables the line to be addressed directly.
-   The REFERENCE INTO addition sets a [data reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendyn_access_data_obj_guidl.htm "Guideline") to the read line.

In the case of [table expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expressions.htm), the output behavior is controlled by the [category of the result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_exp_result.htm).

As well as for exports, the ASSIGNING and REFERENCE INTO additions can also be used for the APPEND, COLLECT, INSERT, and MODIFY statements, where they create references to the line being processed.

Rule   

Choose appropriate output behavior

When reading lines of internal tables, select an appropriate output behavior. The rule of thumb is:

-   Copy to a work area if the line type is narrow and the read line is not to be modified.
-   Assign to a field symbol if the line type is wide or deep and the read line is to be modified.
-   Set a data reference if the line type is wide or deep and a reference to the read line is to be passed.

Details   

The criteria for selecting the output behavior are the processing speed, on the one hand, and what is to be done with the read line, on the other hand:

-   If the content of the read line is to be modified, the addition ASSIGNING or (in the case of table expressions) the appropriate [result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_exp_result.htm) should usually be used. This allows direct access to the line using the value semantics and removes the need for a MODIFY operation later on.
-   If a reference to the read line is required that can be processed using reference semantics, the addition REFERENCE INTO or (in the case of table expressions) the appropriate [result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_exp_result.htm) is to be used.
-   If the content of the read line is not to be modified, any of these procedures can be used. The line type of the table is significant for performance. If the table line is wide or contains deep components (for example, strings or other tables), reads are usually faster if ASSIGNING or REFERENCE INTO is used instead of INTO. The [way they are used](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendyn_access_data_obj_guidl.htm "Guideline") is the determining factor for selecting which of the two should be used.
    
    When working with tables whose lines are flat and do not occupy more than approximately 1KB, copying with INTO is faster (at least for the READ statement) than configuring the administration that is required for dynamic access. For the statement LOOP, these costs are incurred only once, so that using ASSIGNING or REFERENCE INTO is always recommended above a certain number of lines. In contrast, INTO should always be used if the target area is to be modified without this affecting the internal table.
    

Besides the processing speed, it is also important that the source code can be understood. If the recommendations mentioned are kept, reading a table with the addition ASSIGNING (but also REFERENCE INTO) indicates to the reader that the table content is potentially changed. Reading a table with the INTO addition, on the other hand, indicates that the table will not be modified.

For table expressions, the information here applies to the selection of the appropriate [result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_exp_result.htm).

Bad Example

The following source code shows the assignment of lines of an internal table to a work area with the aim of modifying the read lines. For this modification, however, an additional statement, MODIFY, is required, and two unnecessary copy processes take place for each loop pass.

LOOP AT itab INTO wa.
   ...
   wa = ...
   MODIFY itab FROM wa.
ENDLOOP.

Good Example

The following source code corrects the above example; here, a field symbol is used for direct access to modify the read lines. No unnecessary copy costs are incurred.

LOOP AT itab ASSIGNING <fs>.
   ...
   <fs> = ...
ENDLOOP.


### abenloop_guidl.htm

---
title: "Loop Processing"
description: |
  Background Alongside the statements for processing individual lines in internal tables, other statements can be used to address and modify the entire body of the table. Examples: -   All categories of assignments applying to whole internal tables -   Deleting the whole of an internal table using CLE
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenloop_guidl.htm"
abapFile: "abenloop_guidl.htm"
keywords: ["select", "loop", "do", "if", "class", "types", "internal-table", "abenloop", "guidl"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrobust_abap_gdl.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Loop Processing, ABENLOOP_GUIDL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion for improvement:)

Loop Processing

Background   

Alongside the statements for processing individual lines in internal tables, other statements can be used to address and modify the entire body of the table. Examples:

-   All categories of assignments applying to whole internal tables
-   Deleting the whole of an internal table using CLEAR or FREE
-   Operations in target ranges such as SELECT INTO TABLE

These types of accesses to the table body cause problems by producing a loop across the internal table

Rule   

Do not modify the entire table body in a loop

You cannot use a loop across an internal table to perform accesses to the table that modify the entire table body at once.

Details   

A modifying access to the entire table body usually produces a runtime error and at the very least unpredictable program behavior. If this is known statically, a syntax error occurs within classes. This error also occurs in LOOP statements with a secondary key known statically when the table operations in question are used. Otherwise, the syntax check simply returns a warning for compatibility reasons.

Hints

-   This rule is mainly intended to make you more aware of the problem. If you only work with [ABAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") or if no [syntax check warnings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensyntax_check_guidl.htm "Guideline") are ignored, the rule above should be met automatically.
-   For more information, see [Changing Internal Tables in a Loop](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_loop_change.htm).
