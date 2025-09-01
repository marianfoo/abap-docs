  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Extracts](javascript:call_link\('abenabap_extracts_extended.htm'\)) → 

LOOP, Extract

[Short Reference](javascript:call_link\('abaploop_shortref.htm'\))

Obsolete Syntax

LOOP.
  ...
ENDLOOP.

Effect

The statements LOOP and ENDLOOP define a loop across a statement block. The loop is passed for each line from the [extract dataset](javascript:call_link\('abenextract_dataset_glosry.htm'\) "Glossary Entry"). In each loop pass, the statement LOOP assigns the content of the components from the current line of the extract dataset to the data objects that make up the field group of the line. If the extract dataset is not sorted, the order in which the lines are read is the same in which they were appended using the statement [EXTRACT](javascript:call_link\('abapextract.htm'\)). If the extract dataset is sorted using [SORT](javascript:call_link\('abapsort_extract.htm'\)), the read order is the same as the sort order.

A LOOP loop simultaneously ends the construction of the extract dataset. If the statement EXTRACT is executed after the statement LOOP, an uncatchable exception is raised. In addition, it is not possible to process the extract dataset using either LOOP or SORT within a LOOP block. LOOP blocks that read the extract dataset must not be nested.

The loop can be exited with one of the following statements:

-   [EXIT](javascript:call_link\('abapexit_loop.htm'\)) that exits a complete loop and resumes the program behind the closing statement of the loop.
-   A statement for [exiting the current processing block](javascript:call_link\('abenleave_processing_blocks.htm'\))
-   A statement for [existing the current program](javascript:call_link\('abenabap_leave_program.htm'\))

In order to exit the current loop pass and to continue with the next loop pass, the statements [CONTINUE](javascript:call_link\('abapcontinue.htm'\)) and [CHECK](javascript:call_link\('abapcheck_processing_blocks.htm'\)) can be used.

System Fields

sy-subrc

Meaning

0

The loop was run at least once.

4

The loop was not run at all.

Hints

-   The statement LOOP for the extract dataset must not be confused with the statement [LOOP AT](javascript:call_link\('abaploop_at_itab.htm'\)) for internal tables.
-   No field groups can be defined or processed in global classes. In methods of local classes of programs other than class pools, the statement LOOP can be used for globally defined field groups there.
-   Extracts are obsolete. [Internal tables](javascript:call_link\('abenitab.htm'\)) should be used instead.

Executable Example

[Extracts, Processing](javascript:call_link\('abenextract_at_abexa.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Uncatchable Exceptions

-   Cause: Nested loop across an extracted dataset.
    Runtime error: LOOP\_WITHIN\_LOOP