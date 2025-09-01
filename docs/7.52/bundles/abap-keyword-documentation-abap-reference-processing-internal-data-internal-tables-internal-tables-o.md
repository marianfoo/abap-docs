# ABAP - Keyword Documentation / ABAP - Reference / Processing Internal Data / Internal Tables / Internal Tables - Overview / Table Keys / Secondary Table Key

Included pages: 4


### abenitab_key_secondary.htm

---
title: "Secondary Table Key"
description: |
  Hash keys(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhash_key_glosry.htm 'Glossary Entry') and sorted keys(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_key_glosry.htm 'Glossary Entry') can be declared as secondary table keys(https://help.sap.com/doc
version: "7.52"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_secondary.htm"
abapFile: "abenitab_key_secondary.htm"
keywords: ["select", "insert", "update", "delete", "loop", "do", "if", "try", "data", "types", "internal-table", "abenitab", "key", "secondary"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Internal Tables - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_oview.htm) →  [Table Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key.htm) → 

Secondary Table Key

[Hash keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhash_key_glosry.htm "Glossary Entry") and [sorted keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_key_glosry.htm "Glossary Entry") can be declared as [secondary table keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") for each internal table. For each sorted key, an additional [secondary table index](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_index_glosry.htm "Glossary Entry") is created.

Access to an internal table using a secondary key is always optimized. This allows additional optimized keys to be introduced for sorted and hashed tables as well as optimized key accesses for standard tables.

-   Declaration of secondary table keys

For data types declared in ABAP programs, a secondary table key is declared using additions [UNIQUE*|*NON-UNIQUE KEY key\_name COMPONENTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_secondary_key.htm) of statements [TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_secondary_key.htm), [DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_secondary_key.htm) and so on. For table types created in ABAP Dictionary, the tool provides the corresponding functions.

-   Access using secondary keys

In key accesses to internal tables, the addition WITH *\[*TABLE*\]* KEY key\_name can be used in [processing statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm) to specify which secondary table key to use. In index accesses, USING KEY keyname can be used to specify the [table index](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_index_glosry.htm "Glossary Entry") of which secondary key to use. In [table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm), this is specified using the addition [KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_itab_line.htm). Secondary keys are not selected automatically. If no secondary key is specified in a processing statement, the primary key or primary table index is always used. If no explicit key is specified for a table expression, a [free search key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_free.htm) is used to perform reads.

Statements where secondary keys can be specified are:

-   [READ TABLE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table.htm)
    The rows to be read can be specified using a secondary key.

-   [LOOP AT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab.htm)
    The processing order and conditions can be controlled using a secondary table key.

-   [INSERT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_itab.htm)
    Only a secondary key for the source table can be specified here, from which multiple rows are copied. The position they are inserted at is determined solely using the primary key and the primary index.

-   [APPEND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapappend.htm)
    Only a secondary key for the source table can be specified here, onto which multiple rows are appended.

-   [MODIFY itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab.htm)
    The rows to be modified can be specified using a secondary key.

-   [DELETE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab.htm)
    The rows to be deleted can be specified using a secondary key.

-   [TYPES ... ASSOCIATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_mesh_association.htm), [\\\_assoc\[ ... \]](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_assoc_cond.htm)
    The secondary key used in the evaluation of a [mesh path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_glosry.htm "Glossary Entry") can be specified using USING KEY.

If the system field sy-tabix is set by this type of access, and a sorted secondary key is used, the row number refers to the associated [secondary table index](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_index_glosry.htm "Glossary Entry"). In statements that these additions has not been introduced for, like [SORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsort_itab.htm), [COLLECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcollect.htm), or [PROVIDE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprovide.htm), secondary keys are not explicitly supported.

The key fields of a secondary table key are only write-protected if the secondary table key is in use in a LOOP loop or in a MODIFY statement. Otherwise, the secondary key fields are not write-protected.

Programming Guideline

[Secondary Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_key_guidl.htm "Guideline")

Notes

-   Optimized access times for the individual rows using secondary keys are [bought](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_memory.htm) in exchange for the fact that the ABAP runtime environment then needs to administer the additional keys. For hash keys, this means additional hash administration. For each sorted key, it means an additional [secondary table index](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_index_glosry.htm "Glossary Entry").

-   When working with internal tables for which a secondary key is declared, it must be ensured that the required key or table index is used in the processing statements.

Example

Declaration of a hash table with a unique primary key and a non-unique sorted secondary key cities. The table is filled with data from a database table, read using a [table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expression_glosry.htm "Glossary Entry") with values specified for the secondary key. The first row found is read.

DATA cityfrom TYPE spfli-cityfrom VALUE 'FRANKFURT'.
cl\_demo\_input=>add\_field( CHANGING field = cityfrom ).
DATA cityto TYPE spfli-cityto VALUE 'NEW YORK'.
cl\_demo\_input=>request( CHANGING field = cityto ).
DATA spfli\_tab
  TYPE HASHED TABLE OF spfli
       WITH UNIQUE KEY primary\_key        COMPONENTS carrid connid
       WITH NON-UNIQUE SORTED KEY cities  COMPONENTS cityfrom cityto.
SELECT \*
       FROM spfli
       INTO TABLE @spfli\_tab.
cl\_demo\_output=>display(
  VALUE #( spfli\_tab\[ KEY cities
                      cityfrom = cityfrom
                      cityto   = cityto \] OPTIONAL ) ).

Continue
[Updating Secondary Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_secondary_update.htm)
[Using Secondary Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_secondary_usage.htm)
[Restrictions for Secondary Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_secondary_restrict.htm)


### abenitab_key_secondary_update.htm

---
title: "Updating Secondary Keys"
description: |
  For all statements that change the content and structure of an internal table, the internal administration of the secondary keys is updated automatically as follows: -   For all operations that insert rows into tables or delete rows from tables, the secondary key administration for unique keys is up
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_secondary_update.htm"
abapFile: "abenitab_key_secondary_update.htm"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "try", "method", "class", "data", "internal-table", "field-symbol", "abenitab", "key", "secondary"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Internal Tables - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_oview.htm) →  [Table Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key.htm) →  [Secondary Table Key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_secondary.htm) → 

Updating Secondary Keys

For all statements that change the content and structure of an internal table, the internal administration of the secondary keys is updated automatically as follows:

-   For all operations that insert rows into tables or delete rows from tables, the secondary key administration for unique keys is updated immediately. This means that a unique secondary key is up-to-date immediately after the operation ([direct update](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendirect_update_glosry.htm "Glossary Entry")). Non-unique secondary table keys are not updated immediately. Instead, they are updated when the secondary key is next used explicitly using USING KEY or WITH KEY ... COMPONENTS ([lazy update](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlazy_update_glosry.htm "Glossary Entry")). If updating the administration causes a secondary key uniqueness violation, a [handled exception or runtime error occurs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_duplicates.htm).

Inserting operations include table statements such as [INSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_itab.htm) and [APPEND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapappend.htm) and block operations for which the entire body of the table is filled at once, like for statements between internal tables, passing parameters to procedures, filling internal tables with SELECT, importing with [IMPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapimport_data_cluster.htm), and so on. The operation for deleting table rows is the [DELETE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab.htm) table statement.

-   For operations that change the components of secondary table keys in existing rows, the secondary key administration is either updated directly or when a specified synchronization point is reached.

-   If [MODIFY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab.htm) is used to modify individual rows, any unique secondary keys are updated directly ([direct update](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendirect_update_glosry.htm "Glossary Entry")). If the modification produces duplicate entries, a non-handleable exception is raised.

-   If field symbols or data references are used to modify individual rows, and these symbols or references point to table rows, any unique secondary keys are updated the next time the internal table is accessed ([delayed update](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendelayed_update_glosry.htm "Glossary Entry")). The uniqueness check also waits until the synchronization point is reached. An internal table can therefore be in an inconsistent state with respect to the secondary key following a modification to existing rows using field symbols or data references. The corresponding [exception](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_duplicates.htm) is only raised when the table is next used.

In both cases, a non-unique key not updated until the secondary table key is next used explicitly ([lazy update](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlazy_update_glosry.htm "Glossary Entry")).

The methods FLUSH\_ITAB\_KEY and FLUSH\_ITAB\_KEYS of the class CL\_ABAP\_ITAB\_UTILITIES can be used to update individual secondary keys or all secondary keys of an internal table explicitly in exceptional circumstances. These methods can be used for analysis and test purposes. It might also make sense to use them after making changes if the next access does not take place immediately afterwards to handle possible exceptions there and then.

Executable Example

The example of [Deletion Using Table Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendelete_itab_using_key_abexa.htm) demonstrates the runtimes that are required to create the secondary key and when they occur.


### abenitab_key_secondary_usage.htm

---
title: "Using Secondary Keys"
description: |
  Notes on Using Secondary Table Keys -   The standard scenario for sensibly using secondary table keys relates to a very large internal table that is created in the memory and whose content is changed very infrequently. Costs(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_m
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_secondary_usage.htm"
abapFile: "abenitab_key_secondary_usage.htm"
keywords: ["insert", "update", "delete", "do", "while", "if", "case", "try", "data", "internal-table", "abenitab", "key", "secondary", "usage"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Internal Tables - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_oview.htm) →  [Table Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key.htm) →  [Secondary Table Key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_secondary.htm) → 

Using Secondary Keys

Notes on Using Secondary Table Keys

-   The standard scenario for sensibly using secondary table keys relates to a very large internal table that is created in the memory and whose content is changed very infrequently. [Costs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_memory.htm) for administrating the secondary keys are then only incurred when setting up the internal table.

-   As a matter of principle, secondary hash keys should not have too many components, since otherwise the system has to deal with a high system load for the additional hash management. Sorted keys are preferable for secondary keys with a large number of components.

-   For an index table with secondary keys, the primary index of the table is updated immediately when rows are inserted or deleted using a secondary key. Note deleting a row from a standard table using a secondary key cannot be optimized because the index entry to be deleted must be searched linearly.

-   Secondary keys might be useful for small internal tables in some circumstances because they ensure unique table entries in relation to particular components. Primary keys do not allow this, especially in the case of standard tables.

-   In the case of read-only reads (where ensuring unique table entries is not relevant), non-unique secondary keys are usually sufficient. Performing reads here is almost as quick as for unique keys, while the update following a table modification is quicker and is performed using a lazy update.

-   Secondary table keys should not be used in the following situations:

-   For small internal tables (less than 50 rows), the performance benefits in the case of reads are far outweighed by the increased memory and administration costs.

-   In tables where a large number of changes are made, the load incurred by updating the secondary keys outweighs the performance benefits in the case of reads. In delayed updates and lazy updates in particular, the update load can actually be incurred by the read for which the optimization was actually required.

-   Unless the uniqueness of table entries is of absolute importance, it is better to avoid using secondary hash keys.

Example

The program DEMO\_SECONDARY\_KEYS demonstrates how a secondary table key is specified and the resulting performance gain.


### abenitab_key_secondary_restrict.htm

---
title: "Restrictions for Secondary Keys"
description: |
  Internal tables with secondary keys can be used in all processing statements for internal tables(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm) and other statements that work with internal tables. However, there are also operand positions for intern
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_secondary_restrict.htm"
abapFile: "abenitab_key_secondary_restrict.htm"
keywords: ["select", "insert", "update", "delete", "do", "if", "data", "internal-table", "abenitab", "key", "secondary", "restrict"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Internal Tables - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_oview.htm) →  [Table Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key.htm) →  [Secondary Table Key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_secondary.htm) → 

Restrictions for Secondary Keys

Internal tables with secondary keys can be used in all [processing statements for internal tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm) and other statements that work with internal tables. However, there are also operand positions for internal tables for which it does not make sense to use secondary keys. Secondary keys are therefore not supported for those operand positions.

The use of tables with secondary keys causes syntax or runtime errors for the following operand positions:

-   An internal table as an actual parameter for a [TABLES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function_destination_para.htm) parameter for RFC can have any table type but no secondary key.

-   Only standard tables without secondary keys are possible for the following:

-   rspar in [SUBMIT WITH rspar](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit_selscreen_parameters.htm) and rtab in [SUBMIT WITH sel IN rtab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit_selscreen_parameters.htm)

-   itab in [FIND IN TABLE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfind_itab.htm) and [REPLACE IN TABLE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreplace_itab.htm)

-   result\_tab in [SPLIT INTO TABLE result\_tab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsplit.htm)

-   column\_syntax in the [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm), in [GROUP BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapgroupby_clause.htm), and in [ORDER BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaporderby_clause.htm)

-   cond\_syntax in [WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_dynamic.htm)

-   source\_syntax in [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfrom_clause.htm)

-   target\_syntax in [INSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_target.htm), [UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate_target.htm), [MODIFY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_target.htm), and [DELETE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_target.htm)

-   expr\_syntax in [UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate_set_expression.htm)

-   IN, OUT, INOUT parameters in [EXEC SQL - EXECUTE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexec_procedure.htm)

-   itab in [EXPORT TO INTERNAL TABLE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexport_data_cluster_medium.htm) and [IMPORT FROM INTERNAL TABLE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapimport_medium.htm)

-   itab in [GENERATE SUBROUTINE POOL itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapgenerate_subroutine_pool.htm), [READ REPORT INTO itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_report.htm), [INSERT REPORT FROM itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_report.htm), and [SYNTAX-CHECK FOR itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsyntax-check_for_itab.htm).

-   itab in [EDITOR-CALL FOR itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapeditor-call_for_itab.htm)

-   itab in [WRITE TO itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to_itab.htm)
