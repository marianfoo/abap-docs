---
title: "Notes on Use"
description: |
  Uncritical use An empty primary table key can be used to handle a table like an array. This means that filling the table and other access take place in such a way that no order is based on key values. In this case, an empty internal table key can be used in all statements in which its implicit or ex
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_empty_key.htm"
abapFile: "abenitab_empty_key.htm"
keywords: ["select", "delete", "loop", "do", "if", "case", "try", "data", "types", "internal-table", "abenitab", "empty", "key"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) →  [itab - Overview](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_oview.htm) →  [itab - Table Key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_key.htm) →  [itab - Primary Table Key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_key_primary.htm) → 

itab - Empty Table Key

The [primary table key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") of a [standard table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_table_glosry.htm "Glossary Entry") can be empty. An empty table key does not contain any key fields.

-   [Declaration](#abenitab-empty-key-1--------notes-on-use---@ITOC@@ABENITAB_EMPTY_KEY_2)

-   [Uncritical use](#abenitab-empty-key-3--------critical-use---@ITOC@@ABENITAB_EMPTY_KEY_4)

-   [Example](#abenitab-empty-key-5---hint---sorted-keys--https---help-sap-com-doc-abapdocu-755-index-htm-7-55-en-us-abensorted-key-glosry-htm--glossary-entry---and--hash-keys--https---help-sap-com-doc-abapdocu-755-index-htm-7-55-en-us-abenhash-key-glosry-htm--glossary-entry---are-never-empty--regardless-of-whether-they-are-primary-or--secondary--https---help-sap-com-doc-abapdocu-755-index-htm-7-55-en-us-abensecondary-key-glosry-htm--glossary-entry-----declaration--an-empty-primary-table-key-can-be-created-as-follows-------explicitly--with-the-addition--empty-key--https---help-sap-com-doc-abapdocu-755-index-htm-7-55-en-us-abaptypes-primary-key-htm--of-the-statements--types--https---help-sap-com-doc-abapdocu-755-index-htm-7-55-en-us-abaptypes-primary-key-htm----data--https---help-sap-com-doc-abapdocu-755-index-htm-7-55-en-us-abapdata-primary-key-htm---and-so-on-------explicitly--using-an-inline-declaration--into-table-DATA(itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm) in the statement SELECT

-   Implicitly, when using the [standard key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_standard_key.htm) if a structured line type does not contain any non-numeric elementary components or if an unstructured line type is table-like.

Notes on Use

Uncritical use

An empty primary table key can be used to handle a table like an array. This means that filling the table and other access take place in such a way that no order is based on key values. In this case, an empty internal table key can be used in all statements in which its implicit or explicit specification determines the order in which the internal table is accessed.

Hints

-   Developers should always be aware if they are handling an empty primary table key. This can only be achieved when the empty key is declared explicitly. An implicit declaration using the [standard key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_standard_key.htm), in which the line type determines whether the primary table key is empty or not, is not usually suitable.

-   Even an empty primary key in a standard table has the order specified by the [primary index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprimary_table_index_glosry.htm "Glossary Entry"), which can be exploited in related index accesses or loop processing.

Example

A prominent example is the statement [LOOP AT itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab.htm), where implicit or explicit use (using [USING primary\_key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_cond.htm)) defines the processing order with respect to the [primary table index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprimary_table_index_glosry.htm "Glossary Entry"), but has no other effect.

Critical use

In the following statements, which work with the primary table key without specifying the key fields explicitly, the specification of an empty primary table key is critical and generally produces unexpected behavior. An empty table key that is known statically produces a syntax check warning.

-   Primary table key specification using a work area:

-   If [FROM wa](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_table_key.htm) is used to specify an empty table key for the statement [READ TABLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_table.htm), the first line of the internal table is read.

-   If [FROM wa](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmodify_itab_single.htm) is used to specify an empty table key for the statement [MODIFY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmodify_itab.htm), the first line of the internal table is modified.

-   If [FROM wa](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_itab_key.htm) is used to specify an empty table key for the statement [DELETE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_itab.htm), the first line of the internal table is deleted.

-   If the statement [SORT itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsort_itab.htm) is executed without the addition BY and the primary table key is empty, the statement is ignored, which means no sorting takes place.

-   If the statement [DELETE ADJACENT DUPLICATES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_duplicates.htm) contains an empty primary table key, no lines are deleted.

-   If the primary table key is empty, the statement [COLLECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcollect.htm) always compresses the first line of the internal table. In this case, all components of the line type must be numeric.

Hint

The statements described above can be particularly unpredictable when using the [standard key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_standard_key.htm), which itself can be declared implicitly, to declare an empty internal table key.

Example

Example

Typical use of a table with an empty table key, in which the order of the lines should not change due to sorting. A SORT source statement would have no effect.

DATA source
  TYPE STANDARD TABLE OF string
       WITH EMPTY KEY.
READ REPORT 'DEMO\_TAB\_EXP\_LINE' INTO source.
cl\_demo\_output=>display( source ).