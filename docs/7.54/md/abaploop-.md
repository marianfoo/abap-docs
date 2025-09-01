  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_extracts_extended.htm) → 

LOOP - Extract

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_shortref.htm)

Obsolete Syntax

LOOP.
  ...
ENDLOOP.

Effect

The statements LOOP and ENDLOOP define a loop across a statement block. The loop is passed for each row from the [extract dataset](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenextract_dataset_glosry.htm "Glossary Entry") until it is exited using one of the statements from the section [Exit Loops](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenleave_loops.htm). In each loop pass, the statement LOOP assigns the contents of the components from the current row of the extract dataset to the data objects that make up the field group of the row. If the extract dataset is not sorted, the order in which the rows are read is the same in which they were appended using the statement [EXTRACT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapextract.htm). If the extract dataset is sorted using [SORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsort_extract.htm), the read order is the same as the sort order.

A LOOP loop also ends the process of structuring the extract dataset. If the statement EXTRACT is executed after the statement LOOP, a non-handleable exception is raised. In addition, it is not possible to edit the extract dataset using either LOOP or SORT within a LOOP block. LOOP blocks that read the extract dataset cannot be nested.

System Fields

sy-subrc

Meaning

0

The loop was run at least once.

4

The loop was not run at all.

Notes

-   The statement LOOP for the extract dataset must not be confused with the statement [LOOP AT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab.htm) for internal tables.
    
-   In global classes, no field groups can be defined or edited. In methods of local classes of programs other than class pools, the statement LOOP can be used for field groups defined in these methods.
    
-   Extracts are obsolete. [Internal tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) are recommended instead.
    

Executable Example

[Extracts, Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenextract_at_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: Nested loop at an extracted dataset.
    Runtime error: LOOP\_WITHIN\_LOOP