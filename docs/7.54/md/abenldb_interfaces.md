  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (Obsolete)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenldb.htm) →  [Logical Databases - Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenldb_abap_statements.htm) → 

Interface Work Areas for Logical Databases

The following statement declares an [interface work area](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") intended for use with logical databases only:

-   [NODES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapnodes.htm)

The statement NODES must be specified both in the [database program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_program_glosry.htm "Glossary Entry") of the logical database and in the [executable program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexecutable_program_glosry.htm "Glossary Entry") associated with the logical database. In the database program, NODES determines which data can be passed from the logical database. In the executable program, NODES determines the data received and also controls the creation of the selection screen of the logical database.

If flat structures are used, the statement [TABLES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptables.htm) can also be used.

Notes

-   If logical databases are no longer used, the statement NODES is obsolete.

-   If logical databases are still used, NODES should be used instead of TABLES. This specifies clearly that the interface is intended for logical databases.

Continue
[NODES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapnodes.htm)