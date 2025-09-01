  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Internal Tables - Overview](javascript:call_link\('abenitab_oview.htm'\)) →  [Table Keys](javascript:call_link\('abenitab_key.htm'\)) →  [Primary Table Keys](javascript:call_link\('abenitab_key_primary.htm'\)) → 

Empty Table Key

The [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") of a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") can be empty. An empty table key does not contain any key fields.

-   [Declaration](#@@ITOC@@ABENITAB_EMPTY_KEY_1)

-   [Notes on Use](#@@ITOC@@ABENITAB_EMPTY_KEY_2)

-   [Uncritical use](#@@ITOC@@ABENITAB_EMPTY_KEY_3)

-   [Critical use](#@@ITOC@@ABENITAB_EMPTY_KEY_4)

-   [Example](#@@ITOC@@ABENITAB_EMPTY_KEY_5)

Note

[Sorted keys](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") and [hash keys](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry") are never empty, regardless of whether they are primary or [secondary](javascript:call_link\('abensecondary_key_glosry.htm'\) "Glossary Entry").

Declaration

An empty primary table key can be created as follows:

-   Explicitly with the addition [EMPTY KEY](javascript:call_link\('abaptypes_primary_key.htm'\)) of the statements [TYPES](javascript:call_link\('abaptypes_primary_key.htm'\)), [DATA](javascript:call_link\('abapdata_primary_key.htm'\)), and so on.

-   Explicitly using an inline declaration [INTO TABLE @DATA(itab)](javascript:call_link\('abapinto_clause.htm'\)) in the statement SELECT

-   Implicitly when using the [standard key](javascript:call_link\('abenitab_standard_key.htm'\)) if a structured row type does not contain any non-numeric elementary components or if an unstructured row type is table-like.

Notes on Use

Uncritical use

An empty primary table key can be used to handle a table like an array. This means that filling the table and other access do not rely on an order determined by key values. In this case, an empty internal table key can be used in all statements that determine (implicitly or explicitly) the order in which the internal table is accessed.

Notes

-   Developers should always be aware of the fact that they are handling an empty primary table key. This is really achieved only when the empty key is declared explicitly. This implicit declaration using the [standard key](javascript:call_link\('abenitab_standard_key.htm'\)) (in which the row type determines whether the primary table key is empty or not) is not usually suitable.

-   Even an empty primary key in a standard table has the order specified by the [primary index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry"), which can be exploited in related index accesses or loops.

Example

A particularly prominent example is the statement [LOOP AT itab](javascript:call_link\('abaploop_at_itab.htm'\)), which when used implicitly or explicitly (using [USING primary\_key](javascript:call_link\('abaploop_at_itab_cond.htm'\))) defines the processing order with respect to the [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry"), but is otherwise ignored.

Critical use

In the following statements, which work with the primary table key without specifying the key fields explicitly, specifying an empty primary table key is critical and generally produces unexpected behavior. An empty table key that is known statically produces a syntax check warning.

-   Primary table key specified by a work area:

-   If [FROM wa](javascript:call_link\('abapread_table_key.htm'\)) is used to specify an empty table key for the statement [READ TABLE](javascript:call_link\('abapread_table.htm'\)), the first row of the internal table is read.

-   If [FROM wa](javascript:call_link\('abapmodify_itab_single.htm'\)) is used to specify an empty table key for the statement [MODIFY](javascript:call_link\('abapmodify_itab.htm'\)), the first row of the internal table is modified.

-   If [FROM wa](javascript:call_link\('abapdelete_itab_key.htm'\)) is used to specify an empty table key for the statement [DELETE](javascript:call_link\('abapdelete_itab.htm'\)), the first row of the internal table is deleted.

-   If the statement [SORT itab](javascript:call_link\('abapsort_itab.htm'\)) is executed without the addition BY and the primary table key is empty, the statement is ignored and the table is not sorted.

-   If the statement [DELETE ADJACENT DUPLICATES](javascript:call_link\('abapdelete_duplicates.htm'\)) is executed and the primary table key is empty, no rows are deleted.

-   If the primary table key is empty and the statement [COLLECT](javascript:call_link\('abapcollect.htm'\)) is executed, the first row of the internal table is compressed. In this case, all components of the row type must be numeric.

Note

The statements described above can be particularly unpredictable when using the [standard key](javascript:call_link\('abenitab_standard_key.htm'\)) (which itself can be declared implicitly) to declare an empty internal table key.

Example

Example

Typical use of a table with an empty table key, in which the order of the rows should not be changed by sorting. A SORT source statement would have no effect.

DATA source
  TYPE STANDARD TABLE OF string
       WITH EMPTY KEY.
READ REPORT 'DEMO\_TAB\_EXP\_LINE' INTO source.
cl\_demo\_output=>display( source ).