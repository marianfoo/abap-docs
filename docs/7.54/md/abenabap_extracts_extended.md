  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_internal_obsolete.htm) → 

Obsolete Extracts

An extract dataset, or extract for short, is a dataset in the [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") of an ABAP program that is not handled as a data object and therefore has no data type. There is only one extract dataset for every ABAP program. It can be filled and read using ABAP statements. The content of the extract dataset cannot be deleted explicitly.

In the same way as an internal table, an extract dataset is made up of a dynamic number of lines. The size of the extract dataset is theoretically unlimited. If the size exceeds 500 KB, it is stored in a file of the operating system. Sizes of up to 2 GB (and larger for 64-bit processors) are workable. Unlike internal tables, the individual lines can have different structures. The row structures are declared as field groups using the statement [FIELD-GROUPS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfield-groups.htm).

The exact structure of each row is not determined until the program is executed using the statement [INSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_fg.htm).

The statements used for processing extracts are:

-   [EXTRACT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapextract.htm)

-   [SORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsort_extract.htm)

-   [LOOP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop-.htm)

-   [AT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_extract.htm)

Notes

-   Field groups cannot be defined in class or interface pools. Their extract dataset, however, can be edited in methods of local classes of other programs.

-   Extracts are obsolete. [Internal tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) are recommended instead.

Continue
[FIELD-GROUPS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfield-groups.htm)
[INSERT - field\_group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_fg.htm)
[EXTRACT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapextract.htm)
[SORT - Extract](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsort_extract.htm)
[LOOP - Extract](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop-.htm)
[AT - Extract](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_extract.htm)
[Examples of Extracts](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenextract_abexas.htm)