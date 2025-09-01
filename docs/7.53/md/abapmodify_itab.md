---
title: "MODIFY itab"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab_shortref.htm) Syntax MODIFY  itab_line(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab_single.htm)  itab_lines(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-U
version: "7.53"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab.htm"
abapFile: "abapmodify_itab.htm"
keywords: ["select", "update", "loop", "do", "while", "if", "case", "try", "data", "internal-table", "field-symbol", "abapmodify", "itab"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_processing_statements.htm) → 

MODIFY itab

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab_shortref.htm)

Syntax

MODIFY *{* [itab\_line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab_single.htm) *|* [itab\_lines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab_multiple.htm) *}*.

Effect

This statement changes the content either of a single row [itab\_line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab_single.htm) or multiple rows [itab\_lines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab_multiple.htm), which can be specified using a table key or a table index.

The following restrictions apply with respect to modifications to key fields of the [primary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") and [secondary table keys](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"):

-   The key fields of the [primary table key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") of [sorted tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensorted_table_glosry.htm "Glossary Entry") and [hashed tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhashed_table_glosry.htm "Glossary Entry") are read-only and must not be modified. This would invalidate internal table administration. The processing statements for internal tables check whether writes are performed on individual key fields and a corresponding non-handleable exception raised. If writes are performed in writing positions across the entire table row (for example, as a target field of assignments or as actual parameters for output parameters), an exception is always raised.
    
-   The key fields of a [secondary table key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"), however, are only read-only while the secondary table is being used. This is the case in [LOOP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab.htm) loops and during the use of the [MODIFY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab.htm) statement, in which the secondary key is specified after USING KEY. Otherwise the key fields are not read-only.
    

The administration of unique secondary keys is updated directly after a modification using MODIFY, and raises a non-handleable exception if duplicate entries would otherwise be produced. The non-unique secondary keys are updated when the secondary table key is next used explicitly ([lazy update](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlazy_update_glosry.htm "Glossary Entry")).

System Fields

sy-subrc

Meaning

0

At least one row was changed.

4

No rows were changed, since no suitable row was found during the search using a table key or in the logical expression, or the specified index was greater than the current number of rows for the search using a table index.

The system field sy-tabix is not set.

Notes

-   Apart from using the MODIFY statement, the content of an individual table row can be changed using assignments to field symbols and dereferenced data references that point to the table row.
    
-   There is no implicit selection of a suitable key or index. The used table key or table index is always specified uniquely. The syntax check issues a warning if there is a suitable [secondary table key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") but this table key is not used. This warning should be removed through using the key. However, in exceptional cases, it can be bypassed using a [pragma](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpragma_glosry.htm "Glossary Entry").
    
-   Using a special variant [MODIFY mesh\_path](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_modify.htm), rows from the last path node of a [mesh path](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_glosry.htm "Glossary Entry") can be changed.
    

Example

Modifies a row in an internal table using a key access. A row with a specific key value is read to a work area wa. From this value, a structure with a different value is then constructed in a non-key component after the addition [FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab_single.htm) of the statement MODIFY. The table row with the appropriate key value is then modified.

DATA itab TYPE HASHED TABLE OF scarr WITH UNIQUE KEY carrid.
SELECT \*
       FROM scarr
       INTO TABLE @itab.
DATA(wa) = VALUE #( itab\[ carrid = 'LH' \] OPTIONAL ).
IF wa IS NOT INITIAL.
  MODIFY TABLE itab
         FROM VALUE #( BASE wa carrname = '...' ).
ENDIF.

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_ITAB\_DYN\_LOOP

-   Cause: Error in a dynamic WHERE condition
    Runtime error: DYN\_WHERE\_PARSE\_ERROR
    

Non-Handleable Exceptions

-   Cause: Invalid dynamic specification of a row component
    Runtime error: ITAB\_ILLEGAL\_COMPONENT
    
-   A read-only secondary table key would be overwritten
    Runtime error: ITAB\_ACTIVE\_KEY\_VIOLATION
    
-   Cause: [Memory area violated](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentables_parameters_restrictions.htm) when TABLES parameter accessed
    Runtime error: ITAB\_STRUC\_ACCESS\_VIOLATION
    

Continue
[MODIFY itab - itab\_line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab_single.htm)
[MODIFY itab - itab\_lines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab_multiple.htm)