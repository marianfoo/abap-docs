  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrobust_abap_guidl.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_guidl.htm) → 

Secondary Key

Background

Secondary keys can be declared for internal tables. The following options are possible:

-   Sorted keys (non-unique or unique)

-   Hash keys that can only be unique

These keys are assigned a name when they are declared and can be created for any table category. The primary key (nameless up to this point) is assigned a predefined name (primary\_key), which allows it to be explicitly addressed. A secondary table index is created internally for each sorted secondary key. This enables index access to hashed tables. When internal tables are accessed, a table key or index must be specified. If nothing is explicitly specified, the internal table is accessed using the primary key or primary index by default.

Access to internal tables using secondary keys is always optimized. This generally increases read performance significantly. Previously, no optimized key access was possible for this. On the other hand, secondary keys also incur additional administration costs due to memory consumption and runtime. Additional runtime costs arise, if a secondary table index needs to be updated after changes to table content. The ABAP runtime environment delays these runtime costs for as long as possible, until they are actually required (lazy update and delayed update). The [administration costs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadmin_costs_dyn_mem_obj_guidl.htm "Guideline") for a secondary key are just as high as for the primary table keys: on average, 6 bytes for each secondary index line and 18 or 30 bytes for each hash key line. On average, another 8 bytes per line are required if the table has at least one non-unique sorted secondary key. Additional memory costs are incurred if a secondary key needs to be updated after changes to internal table content. These memory costs are on the same scale as the costs above and also depend on the number of lines.

Rule

Use secondary keys in a way that benefits the table.

Use secondary keys sparingly and only in cases where the benefits outweigh the extra costs.

Details

The internal management of secondary keys in an internal table can involve significant memory consumption and updates. Secondary keys are useful for accelerating reads in the following cases:

-   The standard scenario for sensibly using secondary table keys relates to a very large internal table that is filled once and the content is changed very infrequently. In this case, runtime costs for secondary key administration are only incurred when the internal table is created and in a few other rare situations. These costs are more than outweighed by more efficient, more frequent reads.

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