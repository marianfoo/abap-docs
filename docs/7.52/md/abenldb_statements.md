  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (Obsolete)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb.htm) →  [Logical Databases - Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_abap_statements.htm) → 

Statements in Logical Databases

The following statements or additions for statements can be used in logical databases only. If you no longer create logical databases, then you no longer require these statements.

Database programm

The database program of a logical database provides other programs with data about interface work areas. The name of a database program is SAPDBldb, where ldb stands for the name of the logical database. A special addition and statement both exist for the database program of a logical database.

-   Addition [DEFINING DATABASE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport_defining.htm) for the statement REPORT

-   Statement [PUT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapput.htm)

Selection Include

A [standard selection screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_selscreen_glosry.htm "Glossary Entry") can be defined in the selection include of a [logical database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"). The standard selection screen of the logical database is grouped together with the standard selection screen of an [executable program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexecutable_program_glosry.htm "Glossary Entry") that is linked to the logical database, to form a shared standard selection screen. The name of this selection include is DBldbSEL, where ldb stands for the name of the logical database.

The elements of the standard selection screen of a logical database are defined using the usual commands: [PARAMETERS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapparameters.htm), [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options.htm) and [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen.htm).

The following elements are using exclusively for creating the selection screen of a logical database:

-   Special variants of the statement [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_ldb.htm)

-   Special additions of the statement [PARAMETERS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapparameters_ldb.htm)

-   Special additions of the statement [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_ldb.htm)

Continue
[REPORT - DEFINING DATABASE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport_defining.htm)
[PUT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapput.htm)
[SELECTION-SCREEN - ldb\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_ldb.htm)
[PARAMETERS - ldb\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapparameters_ldb.htm)
[SELECT-OPTIONS - ldb\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_ldb.htm)