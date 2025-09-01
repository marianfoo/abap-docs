---
title: "Obsolete Extracts"
description: |
  An extract dataset, or extract for short, is a dataset in the internal session(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm 'Glossary Entry') of an ABAP program that is not handled as a data object and therefore has no data type. There is only one
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_extracts_extended.htm"
abapFile: "abenabap_extracts_extended.htm"
keywords: ["insert", "delete", "loop", "do", "if", "try", "method", "class", "data", "internal-table", "abenabap", "extracts", "extended"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_internal_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Obsolete%20Extracts%2C%20ABENABAP_EXTRACTS_EXTENDED%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Obsolete Extracts

An extract dataset, or extract for short, is a dataset in the [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") of an ABAP program that is not handled as a data object and therefore has no data type. There is only one extract dataset for each ABAP program. It can be filled and read using ABAP statements. The content of the extract dataset cannot be deleted explicitly.

Like an internal table, an extract dataset consists of a dynamic number of lines and the size of the extract dataset is theoretically unlimited. If the size exceeds 500 KB, it is stored in a file in the operating system. Sizes of up to 2 GB (and larger for 64-bit processors) are practicable. Unlike internal tables, the individual lines can have different structures. The line structures are declared as field groups using the statement [FIELD-GROUPS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfield-groups.htm).

The exact structure of each line is not determined until the program is executed using the statement [INSERT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_fg.htm).

The statements used for processing extracts are:

-   [EXTRACT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapextract.htm)
-   [SORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsort_extract.htm)
-   [LOOP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop-.htm)
-   [AT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_extract.htm)

Hints

-   Field groups cannot be defined in class pools or interface pools. Their extract dataset, however, can be processed in methods of local classes of other programs.
-   Extracts are obsolete. [Internal tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) should be used instead.

Continue
[FIELD-GROUPS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfield-groups.htm)
[INSERT, field\_group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_fg.htm)
[EXTRACT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapextract.htm)
[SORT, Extract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsort_extract.htm)
[LOOP, Extract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop-.htm)
[AT, Extract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_extract.htm)
[Examples of Extracts](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenextract_abexas.htm)