  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_cluster.htm) → 

IMPORT DIRECTORY

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_directory_shortref.htm)

Syntax

IMPORT DIRECTORY INTO itab
  FROM DATABASE dbtab(ar) *\[*TO wa*\]* *\[*CLIENT cl*\]* ID id.

Effect

This statement passes a table of contents of all data objects of a [data cluster](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_cluster_glosry.htm "Glossary Entry") that was written to the database table dbtab in the area ar and under the ID specified in id using the statement EXPORT to the internal table itab. The database table dbtab must be [structured](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexport_data_cluster_indx.htm) in the same way as described for the [EXPORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexport_data_cluster_medium.htm) statement (as an [export/import table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexport_import_table_glosry.htm "Glossary Entry")). id expects a [flat](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_glosry.htm "Glossary Entry") [character-like data object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_data_object_glosry.htm "Glossary Entry") that contains the ID of the data cluster and the two-character area ar must be specified directly. The additions TO and CLIENT have the same relevance as described in the statement [IMPORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_medium.htm) for important data from the data cluster.

For itab, index tables whose row type matches the structure CDIR in ABAP Dictionary are allowed. The following table shows the components of the structure CDIR and their relevance.

Component

Type

Meaning

NAME

CHAR(30)

Name of the parameter under which a data object was saved.

OTYPE:

CHAR(1)

General type of the data object saved. The following values are permitted: "F" for elementary, flat data objects, "G" for strings, "R" for [flat structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_structure_glosry.htm "Glossary Entry"), "S" for [deep structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeep_structure_glosry.htm "Glossary Entry"), "T" for internal tables with flat row type and "C" for tables with a deep row type.

FTYPE

CHAR(1)

More specific type of the data object saved. For elementary data objects and internal tables with a elementary row type, the data or row type is returned in accordance with the tables of return values from [DESCRIBE FIELD ... TYPE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdescribe_field.htm). In the case of flat structures and internal tables with flat structured row types, "C" is returned. In the case of [deep](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeep_glosry.htm "Glossary Entry") structures and internal tables with deep structured row types, "v" is returned. In the case of a table that has an internal table as a row type, "h" is returned.

TFILL

INT4

Length filled of the saved data object. For strings the length of the content in bytes is returned and for internal tables the number of rows is returned. The value 0 is returned for other data objects.

FLENG

INT2

Length of saved data object or saved table row in bytes. The value 8 is returned for strings.

System Fields

sy-subrc

Meaning

0

The specified data cluster was found and a list of the exported data objects was passed to the internal table itab.

4

The specified data cluster was not found.

Example

Saving three data objects in a data cluster and reading the directory. Afterwards, the content of the table itab is as follows:

NAME

OTYPE:

FTYPE

TFILL

FLENG

"PAR1"

"F"

"a"

0

8

"PAR2"

"T"

"I"

10

4

"PAR3"

"R"

"C"

0

168

DATA: f1 TYPE decfloat16,
      f2 TYPE TABLE OF i,
      f3 TYPE spfli.
DATA itab TYPE STANDARD TABLE OF cdir.
f2 = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ).
EXPORT par1 = f1
       par2 = f2
       par3 = f3 TO DATABASE demo\_indx\_blob(hk) ID 'HK'.
IMPORT DIRECTORY INTO itab FROM DATABASE demo\_indx\_blob(hk) ID 'HK'.
cl\_demo\_output=>display( itab ).

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: Target table has an invalid structure.
    Runtime error: IMPORT\_DIR\_WRONG\_TABLE\_STRUC