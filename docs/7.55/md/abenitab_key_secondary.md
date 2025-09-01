  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) →  [itab - Overview](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_oview.htm) →  [itab - Table Key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_key.htm) → 

itab - Secondary Table Key

[Hash keys](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhash_key_glosry.htm "Glossary Entry") and [sorted keys](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensorted_key_glosry.htm "Glossary Entry") can be declared as [secondary table keys](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") for each internal table. For each sorted key, an additional [secondary table index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_table_index_glosry.htm "Glossary Entry") is created.

Access to an internal table using a secondary key is always optimized. This allows additional optimized keys to be introduced for sorted and hashed tables as well as optimized key accesses for standard tables.

-   Declaration of Secondary Table Keys

For data types declared in ABAP programs, a secondary table is declared using the additions [UNIQUE*|*NON-UNIQUE KEY key\_name COMPONENTS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_secondary_key.htm) of the statements [TYPES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_secondary_key.htm), [DATA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata_secondary_key.htm), and so on. The ABAP Dictionary provides corresponding functions for the table types created in the tool.

-   Access Using Secondary Keys

In key accesses to internal tables, the addition WITH *\[*TABLE*\]* KEY key\_name can be used in [processing statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_processing_statements.htm) to specify which secondary table key to use. In index accesses, the specification USING KEY keyname can be used to specify the [table index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_index_glosry.htm "Glossary Entry") of which secondary key to use. In [table expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_expressions.htm), this is specified using the addition [KEY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_exp_itab_line.htm). Secondary keys are not selected automatically. If no secondary key is specified in a processing statement, the primary key or primary table index is always used. If no explicit key is specified for a table expression, a [free search key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_table_free.htm) is used to perform reads.

Statements where secondary keys can be specified are:

-   [READ TABLE itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_table.htm)
    The lines to be read can be specified using a secondary key.

-   [LOOP AT itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab.htm)
    The processing sequence and conditions can be controlled using a secondary table key.

-   [INSERT itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinsert_itab.htm)
    Only a secondary key for the source table can be specified here, from which multiple lines are copied. The insertion position is determined solely using the primary key and the primary index.

-   [APPEND](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapappend.htm)
    Only a secondary key for the source table can be specified here, onto which multiple lines are appended.

-   [MODIFY itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmodify_itab.htm)
    The lines to be modified can be specified using a secondary key.

-   [DELETE itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_itab.htm)
    The lines to be deleted can be specified using a secondary key.

-   [TYPES ... ASSOCIATION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_mesh_association.htm), [\\\_assoc\[ ... \]](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_assoc_cond.htm)
    The secondary key used in the evaluation of a [mesh path](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_glosry.htm "Glossary Entry") can be specified using USING KEY.

If the system field sy-tabix is set in this type of access, and a sorted secondary key is used, the line number refers to the associated [secondary table index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_table_index_glosry.htm "Glossary Entry"). In statements that have not been enhanced by these additions, like [SORT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsort_itab.htm), [COLLECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcollect.htm), or [PROVIDE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapprovide.htm), secondary keys are not explicitly supported.

The key fields of a secondary table key are only write-protected if the secondary table key is in use within a LOOP loop or a MODIFY statement. Otherwise, the secondary key fields are not write-protected.

Programming Guideline

[Secondary Key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_key_guidl.htm "Guideline")

Hints

-   Optimized access times to the individual lines using secondary keys are [bought](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_key_memory.htm) in exchange for the fact that the ABAP runtime environment then needs to administer the additional keys. For hash keys, this means additional hash administration and an additional [secondary table index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_table_index_glosry.htm "Glossary Entry") for each sorted key.

-   When working with internal tables for which a secondary key is declared, it must be ensured that the required key or table index is used in the processing statements.

Example

Declaration of a hashed table with a unique primary key and a non-unique sorted secondary key cities. The table is filled with data from a database table and accessed using a [table expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_expression_glosry.htm "Glossary Entry") with values specified for the secondary key. The first line found is read.

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
[itab - Updating Secondary Table Keys](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_key_secondary_update.htm)
[itab - Using Secondary Keys](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_key_secondary_usage.htm)
[itab - Restrictions for Secondary Keys](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_key_secondary_restrict.htm)