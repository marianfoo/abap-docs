  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) → 

Obsolete Extracts

An extract dataset, or extract for short, is a dataset in the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of an ABAP program that is not handled as a data object and therefore has no data type. There is only one extract dataset for every ABAP program. It can be filled and read using ABAP statements. The content of the extract dataset cannot be deleted explicitly.

In the same way as an internal table, an extract dataset is made up of a dynamic number of lines. The size of the extract dataset is theoretically unlimited. If the size exceeds 500 KB, it is stored in a file of the operating system. Sizes of up to 2 GB (and larger for 64-bit processors) are workable. Unlike internal tables, the individual lines can have different structures. The row structures are declared as field groups using the statement [FIELD-GROUPS](javascript:call_link\('abapfield-groups.htm'\)).

The exact structure of each row is not determined until the program is executed using the statement [INSERT](javascript:call_link\('abapinsert_fg.htm'\)).

The statements used for processing extracts are:

-   [EXTRACT](javascript:call_link\('abapextract.htm'\))

-   [SORT](javascript:call_link\('abapsort_extract.htm'\))

-   [LOOP](javascript:call_link\('abaploop-.htm'\))

-   [AT](javascript:call_link\('abapat_extract.htm'\))

Notes

-   Field groups cannot be defined in class or interface pools. Their extract dataset, however, can be edited in methods of local classes of other programs.

-   Extracts are obsolete. [Internal tables](javascript:call_link\('abenitab.htm'\)) are recommended instead.

Continue
[FIELD-GROUPS](javascript:call_link\('abapfield-groups.htm'\))
[INSERT - field\_group](javascript:call_link\('abapinsert_fg.htm'\))
[EXTRACT](javascript:call_link\('abapextract.htm'\))
[SORT - Extract](javascript:call_link\('abapsort_extract.htm'\))
[LOOP - Extract](javascript:call_link\('abaploop-.htm'\))
[AT - Extract](javascript:call_link\('abapat_extract.htm'\))
[Examples of Extracts](javascript:call_link\('abenextract_abexas.htm'\))