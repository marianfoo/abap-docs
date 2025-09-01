---
title: "LOOP, Extract"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_shortref.htm) Obsolete Syntax LOOP. ... ENDLOOP. Effect The statements LOOP and ENDLOOP define a loop across a statement block. The loop is passed for each line from the extract dataset(https://help.sap.com/doc/a
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop-.htm"
abapFile: "abaploop-.htm"
keywords: ["loop", "do", "if", "try", "catch", "method", "class", "data", "internal-table", "abaploop"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_extracts_extended.htm) → 

LOOP, Extract

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_shortref.htm)

Obsolete Syntax

LOOP.
  ...
ENDLOOP.

Effect

The statements LOOP and ENDLOOP define a loop across a statement block. The loop is passed for each line from the [extract dataset](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenextract_dataset_glosry.htm "Glossary Entry") until it is exited using one of the statements from the section [Exit Loops](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenleave_loops.htm). In each loop pass, the statement LOOP assigns the contents of the components from the current line of the extract dataset to the data objects that make up the field group of the line. If the extract dataset is not sorted, the order in which the lines are read is the same in which they were appended using the statement [EXTRACT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapextract.htm). If the extract dataset is sorted using [SORT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsort_extract.htm), the read order is the same as the sort order.

A LOOP loop also ends the process of structuring the extract dataset. If the statement EXTRACT is executed after the statement LOOP, an uncatchable exception is raised. In addition, it is not possible to process the extract dataset using either LOOP or SORT within a LOOP block. LOOP blocks that read the extract dataset cannot be nested.

System Fields

sy-subrc

Meaning

0

The loop was run at least once.

4

The loop was not run at all.

Hints

-   The statement LOOP for the extract dataset must not be confused with the statement [LOOP AT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab.htm) for internal tables.

-   No field groups can be defined or processed in global classes. In methods of local classes of programs other than class pools, the statement LOOP can be used for globally defined field groups there.

-   Extracts are obsolete. [Internal tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) are recommended instead.
    

Executable Example

[Extracts, Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenextract_at_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: Nested loop at an extracted dataset.
    Runtime error: LOOP\_WITHIN\_LOOP