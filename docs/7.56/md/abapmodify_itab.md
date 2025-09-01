  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_processing_statements.htm) → 

MODIFY itab

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_itab_shortref.htm)

Syntax

MODIFY *{* [itab\_line](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_itab_single.htm) *|* [itab\_lines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_itab_multiple.htm) *}*.

Effect

This statement changes the content either of a single line [itab\_line](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_itab_single.htm) or multiple lines [itab\_lines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_itab_multiple.htm), which can be specified using a table key or a table index.

The following restrictions apply with respect to modifications to key fields of the [primary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") and [secondary table keys](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"):

-   The key fields of the [primary table key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") of [sorted tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensorted_table_glosry.htm "Glossary Entry") and [hashed tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhashed_table_glosry.htm "Glossary Entry") are read-only and must not be modified, since this would invalidate internal table administration. The processing statements for internal tables check whether writes are performed on individual key fields and a corresponding attempt raises an uncatchable exception. If writes are performed in write positions across the entire table line, for example, as a target field of assignments or as actual parameters for output parameters, an exception is always raised.
-   The key fields of a [secondary table key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"), however, are only read-only, while the secondary table is used. This is the case for [LOOP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab.htm) and when using the [MODIFY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_itab.htm) statement where the secondary key is specified after USING KEY. Otherwise the key fields are not read-only.

The administration of unique secondary keys is updated directly after a modification using MODIFY, and raises a uncatchable exception if duplicate entries would otherwise be produced. The non-unique secondary keys are updated when the secondary table key is next used explicitly ([lazy update](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlazy_update_glosry.htm "Glossary Entry")).

System Fields

sy-subrc

Meaning

0

At least one line was changed.

4

No lines were changed, since no suitable line was found in the search using a table key or in the logical expression, or the specified index was greater than the current number of lines for the search using a table index.

The system field sy-tabix is not set.

Hints

-   Apart from using the MODIFY statement, the content of an individual table line can be changed using assignments to field symbols and dereferenced data references that point to the table line.
-   There is no implicit selection of a suitable key or index. The used table key or table index is always specified uniquely. A syntax check warning occurs if there is a suitable [secondary table key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"), but it is not used. This warning should be removed by using the key. However, in exceptional cases, it can also be bypassed using a [pragma](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpragma_glosry.htm "Glossary Entry").
-   Using a special variant [MODIFY mesh\_path](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_modify.htm), lines from the last path node of a [mesh path](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_glosry.htm "Glossary Entry") can be changed.

Example

Modification of a line in an internal table using a key access. A line with a specific key value is read to a work area wa and a structure with a different value is then constructed in a non-key component after the addition [FROM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_itab_single.htm) of the statement MODIFY. The table line with the appropriate key value is then modified.

DATA itab TYPE HASHED TABLE OF scarr WITH UNIQUE KEY carrid.
SELECT \*
       FROM scarr
       INTO TABLE @itab.
DATA(wa) = VALUE #( itab\[ carrid = 'LH' \] OPTIONAL ).
IF wa IS NOT INITIAL.
  MODIFY TABLE itab
         FROM VALUE #( BASE wa carrname = '...' ).
ENDIF.

[Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_ITAB\_DYN\_LOOP

-   Cause: Error in a dynamic WHERE condition
    Runtime error: DYN\_WHERE\_PARSE\_ERROR

Uncatchable Exceptions

-   Cause: Invalid dynamic specification of a line component
    Runtime error: ITAB\_ILLEGAL\_COMPONENT
-   A read-only secondary table key would be overwritten
    Runtime error: ITAB\_ACTIVE\_KEY\_VIOLATION
-   Cause: [Memory area violated](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentables_parameters_restrictions.htm) when TABLES parameter accessed
    Runtime error: ITAB\_STRUC\_ACCESS\_VIOLATION

Continue
[MODIFY itab, itab\_line](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_itab_single.htm)
[MODIFY itab, itab\_lines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_itab_multiple.htm)