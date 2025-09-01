---
title: "SORT, Extract"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsort_shortref.htm) Obsolete Syntax SORT ASCENDINGDESCENDING AS TEXT STABLE sort_key(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsort_key.htm). Additions: 1. ...
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsort_extract.htm"
abapFile: "abapsort_extract.htm"
keywords: ["insert", "loop", "do", "if", "try", "catch", "method", "class", "data", "types", "internal-table", "abapsort", "extract"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_extracts_extended.htm) → 

SORT, Extract

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsort_shortref.htm)

Obsolete Syntax

SORT *\[*ASCENDING*|*DESCENDING*\]*
     *\[*AS TEXT*\]*
     *\[*STABLE*\]*
     *\[*[sort\_key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsort_key.htm)*\]*.

Additions:

[1\. ... ASCENDING*|*DESCENDING](#!ABAP_ADDITION_1@1@)
[2\. ... AS TEXT](#!ABAP_ADDITION_2@2@)
[3\. ... STABLE](#!ABAP_ADDITION_3@3@)

Effect

This statement sorts the [extract dataset](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenextract_dataset_glosry.htm "Glossary Entry") of the program. A prerequisite for executing the statement is that the field group header is defined using the statement [FIELD-GROUPS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfield-groups.htm), and is therefore a component of all field groups. If no explicit sort key [sort\_key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsort_key.htm) is specified, the extract dataset is sorted by the components of the field group header. Numeric and byte-like components are sorted according to their value and character-like components are sorted by default according to their binary representation ([code page](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencodepage_glosry.htm "Glossary Entry")). Here, components containing hexadecimal 0 are placed in front of other entries. Text sorting for character-like components can be done using the addition AS TEXT.

The priority of sorting is based on the order in which the components are inserted into the field group header using [INSERT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinsert_fg.htm).

Sorting is unstable by default, which means that the relative order of rows that do not differ in their sort keys is not preserved when they are sorted, and can change when a sort is performed multiple times. The addition STABLE can be used for stable sorting.

The statement SORT also completes the structure of the extract dataset. Executing the statement [EXTRACT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapextract.htm) after executing the statement SORT raises an uncatchable exception.

Hints

-   The only difference between the syntax of the statement SORT for the [extract dataset](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenextract_dataset_glosry.htm "Glossary Entry") and the statement [SORT for internal tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsort_itab.htm) is that no internal table is specified. Regardless of this, the two should not be confused with one another.
-   If components with the content hexadecimal 0 are placed in front of other entries, this can lead to unexpected behavior when sorting numeric data types.
-   In global classes, no field groups can be defined or processed. In methods of local classes of programs other than class pools, the statement SORT is possible for globally defined field groups.
-   Extracts are obsolete. [Internal tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab.htm) should be used instead.

Addition 1   

... ASCENDING*|*DESCENDING

Effect

The addition ASCENDING or DESCENDING can be used to specify the sort direction explicitly as ascending or descending. If neither addition is specified, the data is sorted in ascending order by default. The sort direction can be overwritten for individual components in the explicit sort key sort\_key.

Addition 2   

... AS TEXT

Effect

The addition AS TEXT specifies that [text-like](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentextlike_data_type_glosry.htm "Glossary Entry") components are sorted according to the [locale](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlocale_glosry.htm "Glossary Entry") of the current text environment. If AS TEXT is not specified, text-like components are sorted according to the encoding in the code page of the current text environment. For more information, see [SORT for internal tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsort_itab.htm).

Addition 3   

... STABLE

Effect

STABLE can be used to perform stable sorting. The relative order of rows, which is the same in the sort key, remains unchanged during sorting. Without the addition STABLE, the order is not stable and repeated sorting of the extract dataset with the same sort key can change the order in each sort.

Executable Example

[Extracts, Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenextract_at_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: A sort field with the explicit addition AS TEXT is not text-like.
    Runtime error: SORT\_AS\_TEXT\_EX\_BAD\_TYPE
-   Cause: More than 50 sort criteria.
    Runtime error: SORT\_EXTRACT\_TOO\_MANY\_FIELDS
-   Cause: The field group HEADER does not contain a sort criterion.
    Runtime error: SORT\_FIELD\_NOT\_IN\_HEADER
-   Cause: The field group HEADER is not defined.
    Runtime error: SORT\_NO\_HEADER
-   Cause: It is not possible to use SORT in a loop across an extract dataset.
    Runtime error: SORT\_WITHIN\_LOOP
-   Cause: Insufficient memory space.
    Runtime error: SORT\_EXTRACT\_INDEX\_NO\_ROLL

Continue
[SORT, sort\_key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsort_key.htm)