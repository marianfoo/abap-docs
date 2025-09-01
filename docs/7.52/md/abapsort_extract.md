  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Extracts](javascript:call_link\('abenabap_extracts_extended.htm'\)) → 

SORT - Extract

[Quick Reference](javascript:call_link\('abapsort_shortref.htm'\))

Obsolete Syntax

SORT *\[*ASCENDING*|*DESCENDING*\]*
     *\[*AS TEXT*\]*
     *\[*STABLE*\]*
     *\[*[sort\_key](javascript:call_link\('abapsort_key.htm'\))*\]*.

Extras:

[1\. ... ASCENDING*|*DESCENDING](#!ABAP_ADDITION_1@1@)
[2\. ... AS TEXT](#!ABAP_ADDITION_2@2@)
[3\. ... STABLE](#!ABAP_ADDITION_3@3@)

Effect

This statement sorts the [extract dataset](javascript:call_link\('abenextract_dataset_glosry.htm'\) "Glossary Entry") of the program. A prerequisite for executing the statement is that the field group header is defined using the statement [FIELD-GROUPS](javascript:call_link\('abapfield-groups.htm'\)), and is therefore a component of all field groups. If no explicit sort key [sort\_key](javascript:call_link\('abapsort_key.htm'\)) is specified, the extract dataset is sorted by the components of the field group header. Numeric and byte-like components are sorted according to their value and character-like components are sorted by default according to their binary representation ([code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry")). Here, components containing hexadecimal 0 are placed before other entries. Text sorting for character-like components can be done using the addition AS TEXT.

The priority of sorting is based on the order in which the components are inserted into the field group header using [INSERT](javascript:call_link\('abapinsert_fg.htm'\)).

Sorting is unstable by default, which means that the relative order of rows that do not have different sort keys is not preserved when they are sorted, and can change when a sort is performed multiple times. The addition STABLE can be used for stable sorting.

The statement SORT also finalizes the structure of the extract dataset. Executing the statement [EXTRACT](javascript:call_link\('abapextract.htm'\)) after executing the statement SORT raises an non-handleable exception.

Notes

-   The only difference in the syntax of the statement SORT for the [extract dataset](javascript:call_link\('abenextract_dataset_glosry.htm'\) "Glossary Entry") and the statement [SORT for internal tables](javascript:call_link\('abapsort_itab.htm'\)) is that no internal table is specified. Regardless of this, the two should not be confused with one another.
    
-   If components with the content hexadecimal 0 are placed before other entries, this can lead to unexpected behavior when sorting numeric data types.
    
-   In global classes, no field groups can be defined or edited. In methods of local classes of programs other than class pools, the statement SORT is possible for globally defined field groups.
    
-   Extracts are obsolete. [Internal tables](javascript:call_link\('abenitab.htm'\)) are recommended instead.
    

Addition 1

... ASCENDING*|*DESCENDING

Effect

-   The addition ASCENDING or DESCENDING can be used to specify the sort direction explicitly as ascending or descending. If neither addition is specified, the data is sorted in ascending order by default. The sort direction can be overwritten for individual components in the explicit sort key sort\_key.
    

Addition 2

... AS TEXT

Effect

The addition AS TEXT specifies that [text-like](javascript:call_link\('abentextlike_data_type_glosry.htm'\) "Glossary Entry") components are sorted according to the [locale](javascript:call_link\('abenlocale_glosry.htm'\) "Glossary Entry") of the current text environment. If AS TEXT is not specified, text-like components are sorted according to the encoding in the code page of the current text environment. For more information, see [SORT for internal tables](javascript:call_link\('abapsort_itab.htm'\)).

Addition 3

... STABLE

Effect

STABLE can be used to perform stable sorting. The relative order of rows, which is the same in the sort key, remains unchanged when sorting. Without the addition STABLE, the order is not stable and repeated sorting of the extract dataset with the same sort key can change the order in each sort.

Executable Example

[Extracts, Processing](javascript:call_link\('abenextract_at_abexa.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: A sort field with the explicit addition AS TEXT is not text-like.
    Runtime error: SORT\_AS\_TEXT\_EX\_BAD\_TYPE
    
-   Cause: More than 50 sort criteria.
    Runtime error: SORT\_EXTRACT\_TOO\_MANY\_FIELDS
    
-   Cause: The field group HEADER does not contain a sort criterion.
    Runtime error: SORT\_FIELD\_NOT\_IN\_HEADER
    
-   Cause: The field group HEADER is not defined.
    Runtime error: SORT\_NO\_HEADER
    
-   Cause: It is not possible to use SORT in a loop through an extract dataset.
    Runtime error: SORT\_WITHIN\_LOOP
    
-   Cause: Insufficient memory space.
    Runtime error: SORT\_EXTRACT\_INDEX\_NO\_ROLL
    

Continue
[SORT - sort\_key](javascript:call_link\('abapsort_key.htm'\))