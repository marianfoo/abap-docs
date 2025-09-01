  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) →  [Internal Tables - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_oview.htm) →  [Table Keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_key.htm) →  [Primary Table Keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_key_primary.htm) → 

Empty Table Key

The [primary table key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") of a [standard table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_table_glosry.htm "Glossary Entry") can be empty. An empty table key does not contain any key fields.

-   [Declaration](#@@ITOC@@ABENITAB_EMPTY_KEY_1)

-   [Notes on Use](#@@ITOC@@ABENITAB_EMPTY_KEY_2)

-   [Uncritical use](#@@ITOC@@ABENITAB_EMPTY_KEY_3)

-   [Critical use](#@@ITOC@@ABENITAB_EMPTY_KEY_4)

-   [Example](#@@ITOC@@ABENITAB_EMPTY_KEY_5)

Note

[Sorted keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensorted_key_glosry.htm "Glossary Entry") and [hash keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhash_key_glosry.htm "Glossary Entry") are never empty, regardless of whether they are primary or [secondary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_key_glosry.htm "Glossary Entry").

Declaration

An empty primary table key can be created as follows:

-   Explicitly with the addition [EMPTY KEY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_primary_key.htm) of the statements [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_primary_key.htm), [DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_primary_key.htm), and so on.

-   Explicitly using an inline declaration [INTO TABLE @DATA(itab)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) in the statement SELECT

-   Implicitly when using the [standard key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_standard_key.htm) if a structured row type does not contain any non-numeric elementary components or if an unstructured row type is table-like.

Notes on Use

Uncritical use

An empty primary table key can be used to handle a table like an array. This means that filling the table and other access do not rely on an order determined by key values. In this case, an empty internal table key can be used in all statements that determine (implicitly or explicitly) the order in which the internal table is accessed.

Notes

-   Developers should always be aware of the fact that they are handling an empty primary table key. This is really achieved only when the empty key is declared explicitly. This implicit declaration using the [standard key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_standard_key.htm) (in which the row type determines whether the primary table key is empty or not) is not usually suitable.

-   Even an empty primary key in a standard table has the order specified by the [primary index](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprimary_table_index_glosry.htm "Glossary Entry"), which can be exploited in related index accesses or loops.

Example

A particularly prominent example is the statement [LOOP AT itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab.htm), which when used implicitly or explicitly (using [USING primary\_key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_cond.htm)) defines the processing order with respect to the [primary table index](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprimary_table_index_glosry.htm "Glossary Entry"), but is otherwise ignored.

Critical use

In the following statements, which work with the primary table key without specifying the key fields explicitly, specifying an empty primary table key is critical and generally produces unexpected behavior. An empty table key that is known statically produces a syntax check warning.

-   Primary table key specified by a work area:

-   If [FROM wa](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table_key.htm) is used to specify an empty table key for the statement [READ TABLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table.htm), the first row of the internal table is read.

-   If [FROM wa](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab_single.htm) is used to specify an empty table key for the statement [MODIFY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab.htm), the first row of the internal table is modified.

-   If [FROM wa](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_itab_key.htm) is used to specify an empty table key for the statement [DELETE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_itab.htm), the first row of the internal table is deleted.

-   If the statement [SORT itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsort_itab.htm) is executed without the addition BY and the primary table key is empty, the statement is ignored and the table is not sorted.

-   If the statement [DELETE ADJACENT DUPLICATES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_duplicates.htm) is executed and the primary table key is empty, no rows are deleted.

-   If the primary table key is empty and the statement [COLLECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcollect.htm) is executed, the first row of the internal table is compressed. In this case, all components of the row type must be numeric.

Note

The statements described above can be particularly unpredictable when using the [standard key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_standard_key.htm) (which itself can be declared implicitly) to declare an empty internal table key.

Example

Example

Typical use of a table with an empty table key, in which the order of the rows should not be changed by sorting. A SORT source statement would have no effect.

DATA source
  TYPE STANDARD TABLE OF string
       WITH EMPTY KEY.
READ REPORT 'DEMO\_TAB\_EXP\_LINE' INTO source.
cl\_demo\_output=>display( source ).