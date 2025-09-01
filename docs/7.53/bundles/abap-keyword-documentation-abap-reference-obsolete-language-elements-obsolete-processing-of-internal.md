# ABAP Keyword Documentation / ABAP − Reference / Obsolete Language Elements / Obsolete Processing of Internal Data / Obsolete Extracts

Included pages: 17


### abenabap_extracts_extended.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) → 

Obsolete Extracts

An extract dataset, or extract for short, is a dataset in the [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry") of an ABAP program that is not handled as a data object and therefore has no data type. There is only one extract dataset for every ABAP program. It can be filled and read using ABAP statements. The content of the extract dataset cannot be deleted explicitly.

In the same way as an internal table, an extract dataset is made up of a dynamic number of lines. The size of the extract dataset is theoretically unlimited. If the size exceeds 500 KB, it is stored in a file of the operating system. Sizes of up to 2 GB (and larger for 64-bit processors) are workable. Unlike internal tables, the individual lines can have different structures. The row structures are declared as field groups using the statement [FIELD-GROUPS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfield-groups.htm).

The exact structure of each row is not determined until the program is executed using the statement [INSERT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_fg.htm).

The statements used for processing extracts are:

-   [EXTRACT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapextract.htm)

-   [SORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_extract.htm)

-   [LOOP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop-.htm)

-   [AT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_extract.htm)

Notes

-   Field groups cannot be defined in class or interface pools. Their extract dataset, however, can be edited in methods of local classes of other programs.

-   Extracts are obsolete. [Internal tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) are recommended instead.

Continue
[FIELD-GROUPS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfield-groups.htm)
[INSERT - field\_group](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_fg.htm)
[EXTRACT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapextract.htm)
[SORT - Extract](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_extract.htm)
[LOOP - Extract](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop-.htm)
[AT - Extract](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_extract.htm)
[Examples of Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_abexas.htm)


### abapfield-groups.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_extracts_extended.htm) → 

FIELD-GROUPS

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfield-groups_shortref.htm)

Obsolete Syntax

FIELD-GROUPS *{* header *|* field\_group *}*.

Effect

Declares a field group for the [extract dataset](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_dataset_glosry.htm "Glossary Entry") of the program. Each field group represents the name of a row structure of the extract dataset. As many field groups as required can be created in a program. The actual components of a field group are defined using the statement [INSERT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_fg.htm).

The name of a field group is either the predefined name header or any name field\_group. If a field group header is declared, it automatically becomes the initial part of all remaining field groups of the program and its components constitute the standard sort key of the extract dataset for the statement [SORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_extract.htm).

The statement FIELD-GROUPS is possible in the global declaration part of an executable program, of a function group, of a module pool, or of a subroutine pool, as well as in the subroutines and function modules. Field groups that are declared in [procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocedure_glosry.htm "Glossary Entry") are visible only there.

Notes

-   Since global data objects can only be defined as components of field groups using the statement INSERT, it is best to declare field groups only in the global declaration part of a program.
    
-   The FIELD-GROUPS statement is forbidden in class pools or interface pools and in the methods of local classes of other programs.
    

Example

See [INSERT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_fg.htm).


### abapinsert_fg.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_extracts_extended.htm) → 

INSERT - field\_group

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_field-group_shortref.htm)

Obsolete Syntax

INSERT dobj1 dobj2 ... INTO *{* header *|* field\_group *}*.

Effect

This statement is used to build a structure of a field group of the [extract dataset](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_dataset_glosry.htm "Glossary Entry") of the program, where the field group is defined using [FIELD-GROUPS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfield-groups.htm) . A list of global [flat](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_glosry.htm "Glossary Entry") data objects dobj can be inserted after INSERT. Specifying local data objects raises an exception. The list defines the components of the field group header or field\_group. Any name can be specified directly for field\_group, whereas header is a predefined name of a special field group whose components are automatically a part and a key of all other field groups. The components of a field group have the function of a pointer to data objects whose contents can be attached as a line to the extract dataset when executing the statement [EXTRACT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapextract.htm).

The statement INSERT can be used in any [processing block](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocessing_block_glosry.htm "Glossary Entry") of a program and is executed at the given time during the program execution. A field group can have different INSERT statements. Additional components can be added to a field group until the first corresponding line with EXTRACT is attached to the extract dataset. More specifically, components can only be added to the field group header until a field group of the program is extracted because it is a part of all field groups. An INSERT statement for an already extracted field group raises a non-handleable exception.

Field symbols can be specified for dobj but not dereferenced data references. A field symbol is ignored if no data object is assigned to it. Specifying a data reference raises a non-handleable exception.

Notes

-   A field group field\_group to which no fields are explicitly added still contains the field of the special field group header.
    
-   In global classes, no field groups can be defined or edited. In methods of local classes of programs other than class pools, the statement INSERT is possible for globally defined field groups.
    
-   Extracts are obsolete. [Internal tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) are recommended instead.
    

Example

In this example, three field groups are declared in the global declaration part of an [executable program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexecutable_program_glosry.htm "Glossary Entry") and its components are specified in the event block START-OF-SELECTION. The field group flight\_info contains five components of the field group header and its own. The field group flight\_date contains only the components of the field group header.

REPORT ...
DATA: spfli\_wa    TYPE spfli,
      sflight\_wa TYPE sflight.
FIELD-GROUPS: header, flight\_info, flight\_date.
START-OF-SELECTION.
  INSERT: spfli\_wa-carrid spfli\_wa-connid sflight\_wa-fldate
            INTO header,
          spfli\_wa-cityfrom spfli\_wa-cityto
            INTO flight\_info.

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: Inserts local data objects into a field group.
    Runtime error: EXTRACT\_INSERT\_LOCAL\_DATA
    
-   Cause: Field group contains INSERT after sets of this set type have been extracted using EXTRACT.
    Runtime error: INSERT\_INTO\_LOCKED\_FIELD\_GROUP


### abapextract.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_extracts_extended.htm) → 

EXTRACT

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapextract_shortref.htm)

Obsolete Syntax

EXTRACT *\[* header *|* field\_group *\]*.

Effect

This statement appends the current content of the fields previously included in the field group header or field\_group using the statement [INSERT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_fg.htm) to the [extract dataset](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_dataset_glosry.htm "Glossary Entry") of the program. If there is no field group specified after EXTRACT, the field group header is added implicitly.

The extract dataset is created the first time EXTRACT is executed and the first row added. Once an EXTRACT statement is executed, no other fields can be included in the specified field group field\_group using INSERT. If not, a non-handleable exception is raised by the next EXTRACT statement for the same field group.

Fields of the types [s](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm), [i](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm), and [int8](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm) with the minimum value -32768, -2147483648, or -9223372036854775808 respectively are set to the value 0 when extracted to the field group header.

Notes

-   The field group header is the initial part and sort key of every field group, which means that no more fields can be included in header after EXTRACT is executed for the first time.
    
-   The rows of an extract dataset cannot be deleted explicitly and are persisted as long as the [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the program.
    
-   In global classes, no field groups can be defined or edited. In methods of local classes of programs other than class pools, the statement EXTRACT is possible for globally defined field groups.
    
-   Extracts are obsolete. [Internal tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) are recommended instead.
    

Example

This example continues the example under [INSERT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_fg.htm). The fields of the field groups flight\_info and flight\_date are filled in a nested LOOP and appended to the extract dataset.

REPORT ...
DATA: spfli\_wa    TYPE spfli,
      sflight\_wa  TYPE sflight,
      spfli\_tab   LIKE TABLE OF spfli\_wa,
      sflight\_tab LIKE TABLE OF sflight\_wa.
FIELD-GROUPS: header, flight\_info, flight\_date.
START-OF-SELECTION.
  INSERT: spfli\_wa-carrid spfli\_wa-connid sflight\_wa-fldate
            INTO header,
          spfli\_wa-cityfrom spfli\_wa-cityto
            INTO flight\_info.
  SELECT \*
         FROM spfli
         INTO TABLE @spfli\_tab.
  SELECT \*
         FROM sflight
         INTO TABLE @sflight\_tab.
  LOOP AT spfli\_tab INTO spfli\_wa.
    sflight\_wa-fldate ='--------'.
    EXTRACT flight\_info.
    LOOP AT sflight\_tab INTO sflight\_wa
            WHERE carrid = spfli\_wa-carrid AND
                  connid = spfli\_wa-connid.
      EXTRACT flight\_date.
    ENDLOOP.
  ENDLOOP.

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: EXTRACT after SORT or LOOP.
    Runtime error: EXTRACT\_AFTER\_SORT/LOOP
    
-   Cause: Not enough roll memory to create the extracts.
    Runtime error: EXTRACT\_BUFFER\_NO\_ROLL
    Runtime error: EXTRACT\_NO\_ROLL\_OLD\_KEY
    
-   Cause: Too much length of a single field is occupied.
    Runtime error: EXTRACT\_FIELD\_TOO\_LARGE
    
-   Cause: Problems when creating the extract dataset master file.
    Runtime error: EXTRACT\_FILE\_PTR\_NOT\_EMPTY
    Runtime error: EXTRACT\_INIT\_DIR\_EXTRACT
    Runtime error: EXTRACT\_INIT\_FILEMASK\_INVALID
    Runtime error: EXTRACT\_INIT\_FILEMASK\_TOO\_LARG
    Runtime error: EXTRACT\_INIT\_FN\_EXTRACT
    
-   Cause: The field group HEADER was modified after EXTRACT was used to extract records.
    Runtime error: EXTRACT\_HEADER\_NOT\_UNIQUE
    
-   Cause: Local data is not allowed in field groups.
    Runtime error: EXTRACT\_INSERT\_LOCAL\_DATA
    
-   Cause: Error when opening the external dataset file.
    Runtime error: EXTRACT\_OPEN\_EXTRACTFILE\_OPEN
    
-   Cause: Total data length of a record to be extracted (including HEADER fields) is too big.
    Runtime error: EXTRACT\_TOO\_LARGE


### abapsort_extract.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_extracts_extended.htm) → 

SORT - Extract

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_shortref.htm)

Obsolete Syntax

SORT *\[*ASCENDING*|*DESCENDING*\]*
     *\[*AS TEXT*\]*
     *\[*STABLE*\]*
     *\[*[sort\_key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_key.htm)*\]*.

Extras:

[1\. ... ASCENDING*|*DESCENDING](#!ABAP_ADDITION_1@1@)
[2\. ... AS TEXT](#!ABAP_ADDITION_2@2@)
[3\. ... STABLE](#!ABAP_ADDITION_3@3@)

Effect

This statement sorts the [extract dataset](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_dataset_glosry.htm "Glossary Entry") of the program. A prerequisite for executing the statement is that the field group header is defined using the statement [FIELD-GROUPS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfield-groups.htm), and is therefore a component of all field groups. If no explicit sort key [sort\_key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_key.htm) is specified, the extract dataset is sorted by the components of the field group header. Numeric and byte-like components are sorted according to their value and character-like components are sorted by default according to their binary representation ([code page](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencodepage_glosry.htm "Glossary Entry")). Here, components containing hexadecimal 0 are placed before other entries. Text sorting for character-like components can be done using the addition AS TEXT.

The priority of sorting is based on the order in which the components are inserted into the field group header using [INSERT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_fg.htm).

Sorting is unstable by default, which means that the relative order of rows that do not have different sort keys is not preserved when they are sorted, and can change when a sort is performed multiple times. The addition STABLE can be used for stable sorting.

The statement SORT also finalizes the structure of the extract dataset. Executing the statement [EXTRACT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapextract.htm) after executing the statement SORT raises an non-handleable exception.

Notes

-   The only difference in the syntax of the statement SORT for the [extract dataset](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_dataset_glosry.htm "Glossary Entry") and the statement [SORT for internal tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_itab.htm) is that no internal table is specified. Regardless of this, the two should not be confused with one another.
    
-   If components with the content hexadecimal 0 are placed before other entries, this can lead to unexpected behavior when sorting numeric data types.
    
-   In global classes, no field groups can be defined or edited. In methods of local classes of programs other than class pools, the statement SORT is possible for globally defined field groups.
    
-   Extracts are obsolete. [Internal tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) are recommended instead.
    

Addition 1

... ASCENDING*|*DESCENDING

Effect

-   The addition ASCENDING or DESCENDING can be used to specify the sort direction explicitly as ascending or descending. If neither addition is specified, the data is sorted in ascending order by default. The sort direction can be overwritten for individual components in the explicit sort key sort\_key.
    

Addition 2

... AS TEXT

Effect

The addition AS TEXT specifies that [text-like](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentextlike_data_type_glosry.htm "Glossary Entry") components are sorted according to the [locale](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlocale_glosry.htm "Glossary Entry") of the current text environment. If AS TEXT is not specified, text-like components are sorted according to the encoding in the code page of the current text environment. For more information, see [SORT for internal tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_itab.htm).

Addition 3

... STABLE

Effect

STABLE can be used to perform stable sorting. The relative order of rows, which is the same in the sort key, remains unchanged when sorting. Without the addition STABLE, the order is not stable and repeated sorting of the extract dataset with the same sort key can change the order in each sort.

Executable Example

[Extracts, Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_at_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

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
[SORT - sort\_key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_key.htm)


### abapsort_key.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_extracts_extended.htm) →  [SORT - Extract](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_extract.htm) → 

SORT - sort\_key

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_shortref.htm)

Obsolete Syntax

... BY field1 *\[*ASCENDING*|*DESCENDING*\]* *\[*AS TEXT*\]*
       field2 *\[*ASCENDING*|*DESCENDING*\]* *\[*AS TEXT*\]*
       ...

Extras:

[1\. ... ASCENDING*|*DESCENDING](#!ABAP_ADDITION_1@1@)
[2\. ... AS TEXT](#!ABAP_ADDITION_2@2@)

Effect

When a sort key is specified using the addition BY, sorting is not done by field group header, but by the field1 field2 ... fields specified after it. For field1 field2 ..., only components of field group header or field groups that contain solely fields of field group header can be specified. The sort order depends on the order in which the components field1 field2 ... are specified. The number of fields to be used for sorting is limited to 50.

For field1 field2 ..., field symbols can also be specified. If a component of the field group header is assigned to a field symbol when the statement is executed, sorting takes place according to the respective component. If no data object is assigned to a field symbol, the specification is ignored. If a different data object is assigned to a field symbol, a non-handleable exception is raised.

Note

No [customizing includes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencustomizing_include_glosry.htm "Glossary Entry") may be specified for field1 field2 ... if they are empty.

Addition 1

... ASCENDING*|*DESCENDING

If, after a component field1 field2 ..., neither of the ASCENDING or DESCENDING additions is specified, the predefined sort direction is applied. If one of the additions ASCENDING or DESCENDING is specified, it overwrites the default for this component.

Addition 2

... AS TEXT

Without the addition AS TEXT after a text-like component field1 field2 ..., the default is applied. If the addition AS TEXT is specified after a text-like component, it overwrites the default for this component. In the case of non-text-like components, AS TEXT cannot be specified. If AS TEXT is specified after a field group, the addition is only applied to the text-like components of this group.


### abapsort_extract.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_extracts_extended.htm) → 

SORT - Extract

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_shortref.htm)

Obsolete Syntax

SORT *\[*ASCENDING*|*DESCENDING*\]*
     *\[*AS TEXT*\]*
     *\[*STABLE*\]*
     *\[*[sort\_key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_key.htm)*\]*.

Extras:

[1\. ... ASCENDING*|*DESCENDING](#!ABAP_ADDITION_1@1@)
[2\. ... AS TEXT](#!ABAP_ADDITION_2@2@)
[3\. ... STABLE](#!ABAP_ADDITION_3@3@)

Effect

This statement sorts the [extract dataset](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_dataset_glosry.htm "Glossary Entry") of the program. A prerequisite for executing the statement is that the field group header is defined using the statement [FIELD-GROUPS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfield-groups.htm), and is therefore a component of all field groups. If no explicit sort key [sort\_key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_key.htm) is specified, the extract dataset is sorted by the components of the field group header. Numeric and byte-like components are sorted according to their value and character-like components are sorted by default according to their binary representation ([code page](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencodepage_glosry.htm "Glossary Entry")). Here, components containing hexadecimal 0 are placed before other entries. Text sorting for character-like components can be done using the addition AS TEXT.

The priority of sorting is based on the order in which the components are inserted into the field group header using [INSERT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_fg.htm).

Sorting is unstable by default, which means that the relative order of rows that do not have different sort keys is not preserved when they are sorted, and can change when a sort is performed multiple times. The addition STABLE can be used for stable sorting.

The statement SORT also finalizes the structure of the extract dataset. Executing the statement [EXTRACT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapextract.htm) after executing the statement SORT raises an non-handleable exception.

Notes

-   The only difference in the syntax of the statement SORT for the [extract dataset](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_dataset_glosry.htm "Glossary Entry") and the statement [SORT for internal tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_itab.htm) is that no internal table is specified. Regardless of this, the two should not be confused with one another.
    
-   If components with the content hexadecimal 0 are placed before other entries, this can lead to unexpected behavior when sorting numeric data types.
    
-   In global classes, no field groups can be defined or edited. In methods of local classes of programs other than class pools, the statement SORT is possible for globally defined field groups.
    
-   Extracts are obsolete. [Internal tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) are recommended instead.
    

Addition 1

... ASCENDING*|*DESCENDING

Effect

-   The addition ASCENDING or DESCENDING can be used to specify the sort direction explicitly as ascending or descending. If neither addition is specified, the data is sorted in ascending order by default. The sort direction can be overwritten for individual components in the explicit sort key sort\_key.
    

Addition 2

... AS TEXT

Effect

The addition AS TEXT specifies that [text-like](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentextlike_data_type_glosry.htm "Glossary Entry") components are sorted according to the [locale](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlocale_glosry.htm "Glossary Entry") of the current text environment. If AS TEXT is not specified, text-like components are sorted according to the encoding in the code page of the current text environment. For more information, see [SORT for internal tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_itab.htm).

Addition 3

... STABLE

Effect

STABLE can be used to perform stable sorting. The relative order of rows, which is the same in the sort key, remains unchanged when sorting. Without the addition STABLE, the order is not stable and repeated sorting of the extract dataset with the same sort key can change the order in each sort.

Executable Example

[Extracts, Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_at_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

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
[SORT - sort\_key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_key.htm)


### abaploop-.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_extracts_extended.htm) → 

LOOP - Extract

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_shortref.htm)

Obsolete Syntax

LOOP.
  ...
ENDLOOP.

Effect

The statements LOOP and ENDLOOP define a loop across a statement block. The loop is passed for each row from the [extract dataset](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_dataset_glosry.htm "Glossary Entry") until it is exited using one of the statements from the section [Exit Loops](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenleave_loops.htm). In each loop pass, the statement LOOP assigns the contents of the components from the current row of the extract dataset to the data objects that make up the field group of the row. If the extract dataset is not sorted, the order in which the rows are read is the same in which they were appended using the statement [EXTRACT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapextract.htm). If the extract dataset is sorted using [SORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_extract.htm), the read order is the same as the sort order.

A LOOP loop also ends the process of structuring the extract dataset. If the statement EXTRACT is executed after the statement LOOP, a non-handleable exception is raised. In addition, it is not possible to edit the extract dataset using either LOOP or SORT within a LOOP block. LOOP blocks that read the extract dataset cannot be nested.

System Fields

sy-subrc

Meaning

0

The loop was run at least once.

4

The loop was not run at all.

Notes

-   The statement LOOP for the extract dataset must not be confused with the statement [LOOP AT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab.htm) for internal tables.
    
-   In global classes, no field groups can be defined or edited. In methods of local classes of programs other than class pools, the statement LOOP can be used for field groups defined in these methods.
    
-   Extracts are obsolete. [Internal tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) are recommended instead.
    

Executable Example

[Extracts, Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_at_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: Nested loop at an extracted dataset.
    Runtime error: LOOP\_WITHIN\_LOOP


### abapat_extract.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_extracts_extended.htm) → 

AT - Extract

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_shortref.htm)

Obsolete Syntax

LOOP.
  *\[*AT FIRST.
     ...
   ENDAT.*\]*
  *\[*AT field\_groupi *\[*WITH field\_groupj*\]*
     ...
   ENDAT.*\]*
    *\[*AT NEW field1.
       ...
     ENDAT.
      *\[*AT NEW field2.
         ...
       ENDAT.
         *\[*...*\]**\]**\]*
           *\[* ... *\]*
        *\[**\[**\[*...*\]*
        AT END OF field2.
         ...
       ENDAT.*\]*
     AT END OF field1.
       ...
     ENDAT.*\]*
  *\[*AT LAST.
     ...
  ENDAT.*\]*
ENDLOOP.

Extras:

[1\. ... FIRST](#!ABAP_ADDITION_1@1@)
[2\. ... field\_groupi *\[*WITH field\_groupj*\]*](#!ABAP_ADDITION_2@2@)
[3\. ... *{*NEW*}**|**{*END OF*}* fieldi](#!ABAP_ADDITION_3@3@)
[4\. ... LAST](#!ABAP_ADDITION_4@4@)

Effect

The statement block of a [LOOP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop-.htm) for extracts can contain control structures for [group level processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencontrol_level_processin_glosry.htm "Glossary Entry"). The corresponding control statement is AT. The statements AT and ENDAT define statement blocks that are executed at [group breaks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencontrol_break_glosry.htm "Glossary Entry"). Group breaks between group levels are a result of the row structure and the processing order in which the LOOP reads the rows of the [extract dataset](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_dataset_glosry.htm "Glossary Entry"). Within some of the statement blocks, it is possible to access the automatically created data objects [sum(field)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsum_extract.htm) and [cnt(field)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcnt.htm).

Apart from the special variants AT FIRST, AT field\_group, and AT LAST, group levels are defined using the variant AT NEW and the sequence of rows in the extract. These are the rows that have the same content in a group key defined in their initial parts. It is possible, from a syntax point of view, to arrange AT control structures in any order and to nest them, however effective group level processing is usually only achieved by the arrangement above. Here, the control structures are specified in accordance with the arrangement of the components in the group key and are not nested.

The statement blocks within the AT\-ENDAT control structures are executed if an appropriate group break is made in the current row. Statements in the LOOP\-ENDLOOP control structure that are not executed within an AT\-ENDAT control structure are executed in each pass of the loop.

Notes

-   In one very common case, the extract dataset is sorted exactly in accordance with the group key.
    
-   Extracts are obsolete. [Internal tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) are recommended instead.
    

Addition 1

...  FIRST

Effect

The control level is defined by the first row of the extract dataset.

Addition 2

... field\_groupi *\[*WITH field\_groupj*\]*

Effect

A row that is attached to the extract dataset using the statement [EXTRACT field\_groupi](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapextract.htm). If the WITH addition is specified, the next row must be defined by the field group field\_groupj.

Addition 3

... *{*NEW*}**|**{*END OF*}* fieldi

Effect

The group level is defined by the beginning or end of a group of rows with the same content in the component fieldi and in the component links of fieldi. The content of these components determines the control key. The component field must be part of the field group header. Components whose content is hexadecimal 0 are not included as a control break criterion.

For fieldi, a field symbol can also be specified. If a component of field group header is assigned to the field symbol when the statement is executed, this has the same effect as specifying the respective component. If no data object is assigned to the field symbol, the specification is ignored. If another data object is assigned to the field symbol, a non-handleable exception is raised.

Addition 4

... LAST

Effect

The control level is defined by the last row of the extraction dataset.

Executable Example

[Extracts, Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_at_abexa.htm)

Continue
[cnt( )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcnt.htm)
[sum( )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsum_extract.htm)


### abapcnt.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_extracts_extended.htm) →  [AT - Extract](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_extract.htm) → 

cnt( )

Obsolete Syntax

... cnt(field) ....

Effect

For the fields field1, field2, ... of the field groups of an [extract dataset](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_dataset_glosry.htm "Glossary Entry"), automatically data objects named cnt(field1), cnt(field2), ... of data type i are created. These fields can be accessed only within a LOOP and are filled with values for sorted extract datasets using the statements [AT END OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_extract.htm) and [AT LAST](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_extract.htm).

If field1, field2, ... are fields with a non-numeric data type of the field group header and the extract dataset was sorted by field1, field2, ... , then cnt(field1), cnt(field2), ... contain the number of different values that field1, field2, ... have within the group level or the entire dataset.

If the fields cnt(field1), cnt(field2), ... are accessed without the extract dataset first being sorted, a non-handleable exception can be raised.

Notes

-   No [substring access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoffset_length.htm) cnt(len) can be made on a data object called cnt without an offset being specified explicitly. The compiler always interprets an offset specified like this as a field for an extract dataset.
    
-   No [customizing include](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencustomizing_include_glosry.htm "Glossary Entry") may be specified for field if it is empty.


### abapsum_extract.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_extracts_extended.htm) →  [AT - Extract](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_extract.htm) → 

sum( )

Obsolete Syntax

... sum(field) ....

Effect

For the fields field1, field2, ... of the field groups of an [extract dataset](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_dataset_glosry.htm "Glossary Entry"), automatically data objects named sum(field1), sum(field2), ... of the same data type as field1, field2, ... are created. These fields can be accessed only within a LOOP and are filled with values for sorted extract datasets using the statements [AT END OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_extract.htm) and [AT LAST](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_extract.htm): If field1, field2, ... are fields with numeric data type, sum(field1), sum(field2), ... contain the total of the values of field1, field2, ... within the group level or the full dataset.

If the fields sum(field1), sum(field1), ... are accessed without the extract dataset first being sorted, a non-handleable exception can be raised.

Notes

-   No [substring access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoffset_length.htm) sum(len) can be made on a data object called sum without an offset being specified explicitly. The compiler always interprets an offset specified like this as a field for an extract dataset.
    
-   No [customizing include](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencustomizing_include_glosry.htm "Glossary Entry") may be specified for field if it is empty.


### abapat_extract.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_extracts_extended.htm) → 

AT - Extract

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_shortref.htm)

Obsolete Syntax

LOOP.
  *\[*AT FIRST.
     ...
   ENDAT.*\]*
  *\[*AT field\_groupi *\[*WITH field\_groupj*\]*
     ...
   ENDAT.*\]*
    *\[*AT NEW field1.
       ...
     ENDAT.
      *\[*AT NEW field2.
         ...
       ENDAT.
         *\[*...*\]**\]**\]*
           *\[* ... *\]*
        *\[**\[**\[*...*\]*
        AT END OF field2.
         ...
       ENDAT.*\]*
     AT END OF field1.
       ...
     ENDAT.*\]*
  *\[*AT LAST.
     ...
  ENDAT.*\]*
ENDLOOP.

Extras:

[1\. ... FIRST](#!ABAP_ADDITION_1@1@)
[2\. ... field\_groupi *\[*WITH field\_groupj*\]*](#!ABAP_ADDITION_2@2@)
[3\. ... *{*NEW*}**|**{*END OF*}* fieldi](#!ABAP_ADDITION_3@3@)
[4\. ... LAST](#!ABAP_ADDITION_4@4@)

Effect

The statement block of a [LOOP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop-.htm) for extracts can contain control structures for [group level processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencontrol_level_processin_glosry.htm "Glossary Entry"). The corresponding control statement is AT. The statements AT and ENDAT define statement blocks that are executed at [group breaks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencontrol_break_glosry.htm "Glossary Entry"). Group breaks between group levels are a result of the row structure and the processing order in which the LOOP reads the rows of the [extract dataset](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_dataset_glosry.htm "Glossary Entry"). Within some of the statement blocks, it is possible to access the automatically created data objects [sum(field)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsum_extract.htm) and [cnt(field)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcnt.htm).

Apart from the special variants AT FIRST, AT field\_group, and AT LAST, group levels are defined using the variant AT NEW and the sequence of rows in the extract. These are the rows that have the same content in a group key defined in their initial parts. It is possible, from a syntax point of view, to arrange AT control structures in any order and to nest them, however effective group level processing is usually only achieved by the arrangement above. Here, the control structures are specified in accordance with the arrangement of the components in the group key and are not nested.

The statement blocks within the AT\-ENDAT control structures are executed if an appropriate group break is made in the current row. Statements in the LOOP\-ENDLOOP control structure that are not executed within an AT\-ENDAT control structure are executed in each pass of the loop.

Notes

-   In one very common case, the extract dataset is sorted exactly in accordance with the group key.
    
-   Extracts are obsolete. [Internal tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) are recommended instead.
    

Addition 1

...  FIRST

Effect

The control level is defined by the first row of the extract dataset.

Addition 2

... field\_groupi *\[*WITH field\_groupj*\]*

Effect

A row that is attached to the extract dataset using the statement [EXTRACT field\_groupi](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapextract.htm). If the WITH addition is specified, the next row must be defined by the field group field\_groupj.

Addition 3

... *{*NEW*}**|**{*END OF*}* fieldi

Effect

The group level is defined by the beginning or end of a group of rows with the same content in the component fieldi and in the component links of fieldi. The content of these components determines the control key. The component field must be part of the field group header. Components whose content is hexadecimal 0 are not included as a control break criterion.

For fieldi, a field symbol can also be specified. If a component of field group header is assigned to the field symbol when the statement is executed, this has the same effect as specifying the respective component. If no data object is assigned to the field symbol, the specification is ignored. If another data object is assigned to the field symbol, a non-handleable exception is raised.

Addition 4

... LAST

Effect

The control level is defined by the last row of the extraction dataset.

Executable Example

[Extracts, Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_at_abexa.htm)

Continue
[cnt( )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcnt.htm)
[sum( )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsum_extract.htm)


### abenextract_abexas.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_extracts_extended.htm) → 

Examples of Extracts

Continue
![Example](exa.gif "Example") [Extracts, Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_at_abexa.htm)
![Example](exa.gif "Example") [Extracts, Control Level Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_group_abexa.htm)
![Example](exa.gif "Example") [Extracts, Determining Numbers and Totals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_sum_abexa.htm)


### abenextract_at_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_extracts_extended.htm) →  [Examples of Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_abexas.htm) → 

Extracts, Processing

This example demonstrates how extracts are processed.

Source Code

REPORT demo\_extract\_at.
DATA: spfli\_wa    TYPE spfli,
      sflight\_wa  TYPE sflight.
FIELD-GROUPS: header, flight\_info, flight\_date.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: spfli\_tab   LIKE TABLE OF spfli\_wa,
          sflight\_tab LIKE TABLE OF sflight\_wa.
    INSERT: spfli\_wa-carrid spfli\_wa-connid sflight\_wa-fldate
              INTO header,
            spfli\_wa-cityfrom spfli\_wa-cityto
              INTO flight\_info.
    SELECT \*
           FROM spfli
           INTO TABLE @spfli\_tab.
    SELECT \*
           FROM sflight
           INTO TABLE @sflight\_tab.
    LOOP AT spfli\_tab INTO spfli\_wa.
      sflight\_wa-fldate = '--------'.
      EXTRACT flight\_info.
      LOOP AT sflight\_tab INTO sflight\_wa
              WHERE carrid = spfli\_wa-carrid AND
                    connid = spfli\_wa-connid.
        EXTRACT flight\_date.
      ENDLOOP.
    ENDLOOP.
    SORT STABLE.
    LOOP.
      AT FIRST.
        DATA(out) = cl\_demo\_output=>new(
          )->begin\_section( \`Flight list\`
          )->begin\_section( \`--------------------\` ).
      ENDAT.
      AT flight\_info WITH flight\_date.
        out->next\_section( |{ spfli\_wa-carrid   } {
                              spfli\_wa-connid   } {
                              spfli\_wa-cityfrom } {
                              spfli\_wa-cityto   }| ).
      ENDAT.
      AT flight\_date.
        out->write( |{ spfli\_wa-carrid   } {
                       spfli\_wa-connid   } {
                       sflight\_wa-fldate }| ).
      ENDAT.
      AT LAST.
        out->line( )->write( |{ cnt(spfli\_wa-carrid) } Airlines| ).
      ENDAT.
    ENDLOOP.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example continues the example given under [EXTRACT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapextract.htm). After the extract dataset is filled, it is sorted by field group header and, afterwards, control level processing is executed in a LOOP. Here, structured output is created.


### abenextract_group_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_extracts_extended.htm) →  [Examples of Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_abexas.htm) → 

Extracts, Control Level Processing

This example demonstrates control level processing of extracts.

Source Code

REPORT demo\_extract\_at\_new.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
DATA: t1 TYPE c LENGTH 4,
      t2 TYPE i.
FIELD-GROUPS header.
CLASS demo IMPLEMENTATION.
  METHOD main.
    INSERT t2 t1 INTO header.
    t1 ='AABB'. t2 = 1. EXTRACT header.
    t1 ='BBCC'. t2 = 2. EXTRACT header.
    t1 ='AAAA'. t2 = 2. EXTRACT header.
    t1 ='AABB'. t2 = 1. EXTRACT header.
    t1 ='BBBB'. t2 = 2. EXTRACT header.
    t1 ='BBCC'. t2 = 2. EXTRACT header.
    t1 ='AAAA'. t2 = 1. EXTRACT header.
    t1 ='BBBB'. t2 = 1. EXTRACT header.
    t1 ='AAAA'. t2 = 3. EXTRACT header.
    t1 ='AABB'. t2 = 1. EXTRACT header.
    SORT BY t1 t2.
    DATA(out) = cl\_demo\_output=>new( ).
    LOOP.
      AT FIRST.
        out->write( 'Start of LOOP' ).
        out->line( ).
      ENDAT.
      AT NEW t1.
        out->write( 'New T1' ).
      ENDAT.
      AT NEW t2.
        out->write( 'New T2' ).
      ENDAT.
      out->write( |{ t1 } { t2 }| ).
      AT END OF t2.
        out->write( 'End of T2' ).
      ENDAT.
      AT END OF t1.
        out->write( 'End of T1' ).
      ENDAT.
      AT LAST.
        out->line( ).
      ENDAT.
    ENDLOOP.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

An example extract is created that contains only the fields from the field group header and is sorted by these fields. The content of the data set and the resulting group level change are produced in the LOOP.


### abenextract_sum_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_extracts_extended.htm) →  [Examples of Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_abexas.htm) → 

Extracts, Determining Numbers and Totals

This example demonstrates how numbers and totals are determined in extracts.

Source Code

REPORT demo\_extract\_cnt\_sum.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
DATA: t1 TYPE c LENGTH 4,
      t2 TYPE i.
FIELD-GROUPS: header, test.
CLASS demo IMPLEMENTATION.
  METHOD main.
    INSERT t2 t1 INTO header.
    t1 ='AABB'. t2 = 1. EXTRACT test.
    t1 ='BBCC'. t2 = 2. EXTRACT test.
    t1 ='AAAA'. t2 = 2. EXTRACT test.
    t1 ='AABB'. t2 = 1. EXTRACT test.
    t1 ='BBBB'. t2 = 2. EXTRACT test.
    t1 ='BBCC'. t2 = 2. EXTRACT test.
    t1 ='AAAA'. t2 = 1. EXTRACT test.
    t1 ='BBBB'. t2 = 1. EXTRACT test.
    t1 ='AAAA'. t2 = 3. EXTRACT test.
    t1 ='AABB'. t2 = 1. EXTRACT test.
    SORT BY t1 t2.
    DATA(out) = cl\_demo\_output=>new( ).
    LOOP.
      out->write( |{ t1 } { t2 }| ).
      AT END OF t2.
        out->line( ).
        out->write( |Sum: { sum(t2) }| ).
        out->line( ).
      ENDAT.
      AT END OF t1.
        out->write( |Different values: { cnt(t1) }| ).
        out->line( ).
      ENDAT.
      AT LAST.
        out->line( ).
        out->write( |Sum: { sum(t2) }| ).
        out->write( |Different values: { cnt(t1) }| ).
      ENDAT.
    ENDLOOP.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

An example extract is created that contains only fields from the field group header. After being sorted, the contents of the data set, plus the numbers from the different fields t1 and the sums of the fields t2, are produced at the end of every control level and at the end of the loop.


### abenextract_abexas.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_extracts_extended.htm) → 

Examples of Extracts

Continue
![Example](exa.gif "Example") [Extracts, Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_at_abexa.htm)
![Example](exa.gif "Example") [Extracts, Control Level Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_group_abexa.htm)
![Example](exa.gif "Example") [Extracts, Determining Numbers and Totals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_sum_abexa.htm)
