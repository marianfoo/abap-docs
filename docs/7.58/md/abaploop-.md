  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_extracts_extended.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LOOP%2C%20Extract%2C%20ABAPLOOP-%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LOOP, Extract

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_shortref.htm)

Obsolete Syntax

LOOP.
  ...
ENDLOOP.

Effect

The statements LOOP and ENDLOOP define a loop across a statement block. The loop is passed for each line from the [extract dataset](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenextract_dataset_glosry.htm "Glossary Entry"). In each loop pass, the statement LOOP assigns the content of the components from the current line of the extract dataset to the data objects that make up the field group of the line. If the extract dataset is not sorted, the order in which the lines are read is the same in which they were appended using the statement [EXTRACT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapextract.htm). If the extract dataset is sorted using [SORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsort_extract.htm), the read order is the same as the sort order.

A LOOP loop simultaneously ends the construction of the extract dataset. If the statement EXTRACT is executed after the statement LOOP, an uncatchable exception is raised. In addition, it is not possible to process the extract dataset using either LOOP or SORT within a LOOP block. LOOP blocks that read the extract dataset must not be nested.

The loop can be exited with one of the following statements:

-   [EXIT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexit_loop.htm) that exits a complete loop and resumes the program behind the closing statement of the loop.
-   A statement for [exiting the current processing block](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenleave_processing_blocks.htm)
-   A statement for [existing the current program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_leave_program.htm)

In order to exit the current loop pass and to continue with the next loop pass, the statements [CONTINUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcontinue.htm) and [CHECK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcheck_processing_blocks.htm) can be used.

System Fields

sy-subrc

Meaning

0

The loop was run at least once.

4

The loop was not run at all.

Hints

-   The statement LOOP for the extract dataset must not be confused with the statement [LOOP AT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab.htm) for internal tables.
-   No field groups can be defined or processed in global classes. In methods of local classes of programs other than class pools, the statement LOOP can be used for globally defined field groups there.
-   Extracts are obsolete. [Internal tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) should be used instead.

Executable Example

[Extracts, Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenextract_at_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: Nested loop across an extracted dataset.
    Runtime error: LOOP\_WITHIN\_LOOP