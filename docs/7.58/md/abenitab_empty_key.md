  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentypes_and_objects.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_objects.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendobj_itab.htm) →  [itab - Table Key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab_key.htm) →  [itab - Primary Table Key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab_key_primary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Empty%20Table%20Key%2C%20ABENITAB_EMPTY_KEY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

itab - Empty Table Key

The [primary table key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") of a [standard table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_table_glosry.htm "Glossary Entry") can be empty. An empty table key does not contain any key fields.

-   [Declaration](#@@ITOC@@ABENITAB_EMPTY_KEY_1)
-   [Notes on Use](#@@ITOC@@ABENITAB_EMPTY_KEY_2)
    -   [Uncritical Use](#@@ITOC@@ABENITAB_EMPTY_KEY_3)
    -   [Critical Use](#@@ITOC@@ABENITAB_EMPTY_KEY_4)

Hint

[Sorted keys](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensorted_key_glosry.htm "Glossary Entry") and [hash keys](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhash_key_glosry.htm "Glossary Entry") are never empty, regardless of whether they are primary or [secondary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_key_glosry.htm "Glossary Entry").

Declaration   

An empty primary table key can be created as follows:

-   Explicitly, with the addition [EMPTY KEY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_primary_key.htm) of the statements [TYPES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_primary_key.htm), [DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_primary_key.htm), and so on.
-   Explicitly, using an inline declaration [INTO TABLE @DATA*|*@FINAL(itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm) in the statement SELECT
-   Implicitly, when using the [standard key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab_standard_key.htm) if a structured line type does not contain any non-numeric elementary components or if an unstructured line type is table-like.

Notes on Use   

Uncritical Use   

An empty primary table key can be used to handle a table like an array. This means that filling the table and other accesses take place in such a way that no order is based on key values. In this case, an empty internal table key can be used in all statements in which its implicit or explicit specification determines the order in which the internal table is accessed.

Hints

-   Developers should always be aware that they are handling an empty primary table key. This can only be achieved when the empty key is declared explicitly. An implicit declaration using the [standard key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab_standard_key.htm), in which the line type determines whether the primary table key is empty or not, is not usually suitable.
-   Even an empty primary key in a standard table has the order specified by the [primary index](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprimary_table_index_glosry.htm "Glossary Entry"), which can be exploited in related index accesses or loop processing.

Example

A prominent example is the statement [LOOP AT itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab.htm), where implicit or explicit use (using [USING primary\_key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_cond.htm)) defines the processing order with respect to the [primary table index](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprimary_table_index_glosry.htm "Glossary Entry"), but has no other effect.

Critical Use   

In the following statements, which work with the primary table key without specifying the key fields explicitly, the specification of an empty primary table key is critical and generally produces unexpected behavior. An empty table key that is known statically produces a syntax check warning.

-   Primary table key specification using a work area:
    -   If [FROM wa](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_key.htm) is used to specify an empty table key for the statement [READ TABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table.htm), the first line of the internal table is read.
    -   If [FROM wa](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_itab_single.htm) is used to specify an empty table key for the statement [MODIFY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_itab.htm), the first line of the internal table is modified.
    -   If [FROM wa](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_itab_key.htm) is used to specify an empty table key for the statement [DELETE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_itab.htm), the first line of the internal table is deleted.
-   If the statement [SORT itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsort_itab.htm) is executed without the addition BY and the primary table key is empty, the statement is ignored, which means no sorting takes place.
-   If the statement [DELETE ADJACENT DUPLICATES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_duplicates.htm) contains an empty primary table key, no lines are deleted.
-   If the primary table key is empty, the statement [COLLECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcollect.htm) always compresses the first line of the internal table. In this case, all components of the line type must be numeric.

Hint

The statements described above can be particularly unpredictable when using the [standard key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab_standard_key.htm), which itself can be declared implicitly, to declare an empty internal table key.

Example

Typical use of a table with an empty table key, in which the order of the lines should not change due to sorting. A SORT source statement would have no effect.

DATA source
  TYPE STANDARD TABLE OF string
       WITH EMPTY KEY.
READ REPORT 'DEMO\_TAB\_EXP\_LINE' INTO source.
cl\_demo\_output=>display( source ).