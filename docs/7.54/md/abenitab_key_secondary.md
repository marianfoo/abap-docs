---
title: "Secondary Table Key"
description: |
  Hash keys(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhash_key_glosry.htm 'Glossary Entry') and sorted keys(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensorted_key_glosry.htm 'Glossary Entry') can be declared as secondary table keys(https://help.sap.com/doc
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_key_secondary.htm"
abapFile: "abenitab_key_secondary.htm"
keywords: ["select", "insert", "update", "delete", "loop", "do", "if", "try", "data", "types", "internal-table", "abenitab", "key", "secondary"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) →  [Internal Tables - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_oview.htm) →  [Table Keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_key.htm) → 

Secondary Table Key

[Hash keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhash_key_glosry.htm "Glossary Entry") and [sorted keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensorted_key_glosry.htm "Glossary Entry") can be declared as [secondary table keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") for each internal table. For each sorted key, an additional [secondary table index](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_table_index_glosry.htm "Glossary Entry") is created.

Access to an internal table using a secondary key is always optimized. This allows additional optimized keys to be introduced for sorted and hashed tables as well as optimized key accesses for standard tables.

-   Declaration of secondary table keys

For data types declared in ABAP programs, a secondary table key is declared using additions [UNIQUE*|*NON-UNIQUE KEY key\_name COMPONENTS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_secondary_key.htm) of statements [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_secondary_key.htm), [DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_secondary_key.htm) and so on. For table types created in ABAP Dictionary, the tool provides the corresponding functions.

-   Access using secondary keys

In key accesses to internal tables, the addition WITH *\[*TABLE*\]* KEY key\_name can be used in [processing statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_processing_statements.htm) to specify which secondary table key to use. In index accesses, USING KEY keyname can be used to specify the [table index](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_index_glosry.htm "Glossary Entry") of which secondary key to use. In [table expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expressions.htm), this is specified using the addition [KEY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_exp_itab_line.htm). Secondary keys are not selected automatically. If no secondary key is specified in a processing statement, the primary key or primary table index is always used. If no explicit key is specified for a table expression, a [free search key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table_free.htm) is used to perform reads.

Statements where secondary keys can be specified are:

-   [READ TABLE itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table.htm)
    The rows to be read can be specified using a secondary key.

-   [LOOP AT itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab.htm)
    The processing order and conditions can be controlled using a secondary table key.

-   [INSERT itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab.htm)
    Only a secondary key for the source table can be specified here, from which multiple rows are copied. The position they are inserted at is determined solely using the primary key and the primary index.

-   [APPEND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapappend.htm)
    Only a secondary key for the source table can be specified here, onto which multiple rows are appended.

-   [MODIFY itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab.htm)
    The rows to be modified can be specified using a secondary key.

-   [DELETE itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_itab.htm)
    The rows to be deleted can be specified using a secondary key.

-   [TYPES ... ASSOCIATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_mesh_association.htm), [\\\_assoc\[ ... \]](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_assoc_cond.htm)
    The secondary key used in the evaluation of a [mesh path](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_glosry.htm "Glossary Entry") can be specified using USING KEY.

If the system field sy-tabix is set by this type of access, and a sorted secondary key is used, the row number refers to the associated [secondary table index](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_table_index_glosry.htm "Glossary Entry"). In statements that these additions has not been introduced for, like [SORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsort_itab.htm), [COLLECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcollect.htm), or [PROVIDE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapprovide.htm), secondary keys are not explicitly supported.

The key fields of a secondary table key are only write-protected if the secondary table key is in use in a LOOP loop or in a MODIFY statement. Otherwise, the secondary key fields are not write-protected.

Programming Guideline

[Secondary Keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_key_guidl.htm "Guideline")

Notes

-   Optimized access times for the individual rows using secondary keys are [bought](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_key_memory.htm) in exchange for the fact that the ABAP runtime environment then needs to administer the additional keys. For hash keys, this means additional hash administration. For each sorted key, it means an additional [secondary table index](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_table_index_glosry.htm "Glossary Entry").

-   When working with internal tables for which a secondary key is declared, it must be ensured that the required key or table index is used in the processing statements.

Example

Declaration of a hashed table with a unique primary key and a non-unique sorted secondary key cities. The table is filled with data from a database table, read using a [table expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expression_glosry.htm "Glossary Entry") with values specified for the secondary key. The first row found is read.

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
[Updating Secondary Keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_key_secondary_update.htm)
[Using Secondary Keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_key_secondary_usage.htm)
[Restrictions for Secondary Keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_key_secondary_restrict.htm)