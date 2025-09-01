  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Extracts](javascript:call_link\('abenabap_extracts_extended.htm'\)) → 

LOOP, Extract

[Short Reference](javascript:call_link\('abaploop_shortref.htm'\))

Obsolete Syntax

LOOP.
  ...
ENDLOOP.

Effect

The statements LOOP and ENDLOOP define a loop across a statement block. The loop is passed for each line from the [extract dataset](javascript:call_link\('abenextract_dataset_glosry.htm'\) "Glossary Entry") until it is exited using one of the statements from the section [Exit Loops](javascript:call_link\('abenleave_loops.htm'\)). In each loop pass, the statement LOOP assigns the contents of the components from the current line of the extract dataset to the data objects that make up the field group of the line. If the extract dataset is not sorted, the order in which the lines are read is the same in which they were appended using the statement [EXTRACT](javascript:call_link\('abapextract.htm'\)). If the extract dataset is sorted using [SORT](javascript:call_link\('abapsort_extract.htm'\)), the read order is the same as the sort order.

A LOOP loop also ends the process of structuring the extract dataset. If the statement EXTRACT is executed after the statement LOOP, an uncatchable exception is raised. In addition, it is not possible to process the extract dataset using either LOOP or SORT within a LOOP block. LOOP blocks that read the extract dataset cannot be nested.

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

-   Extracts are obsolete. [Internal tables](javascript:call_link\('abenitab.htm'\)) are recommended instead.
    

Executable Example

[Extracts, Processing](javascript:call_link\('abenextract_at_abexa.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Uncatchable Exceptions

-   Cause: Nested loop at an extracted dataset.
    Runtime error: LOOP\_WITHIN\_LOOP