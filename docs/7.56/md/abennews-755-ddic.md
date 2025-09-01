  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.55](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-755.htm) → 

ABAP Dictionary in Release 7.55

[1\. Internal Handling of the Name Table](#!ABAP_MODIFICATION_1@1@)
[2\. Load Unit](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Internal Handling of the Name Table

The internal handling of the [name table (nametab)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenname_table_glosry.htm "Glossary Entry") that stores the runtime objects of data types in the ABAP Dictionary has changed.

This has the following consequences:

-   The internal ABAP statement [EXPORT NAMETAB](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexport_nametab.htm) cannot be used any more and leads to a runtime error.
-   The internal ABAP statement [IMPORT NAMETAB](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapimport_nametab.htm) is still partly supported for reasons of downward compatibility. Any access to entries for [DDIC table types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_table_type_glosry.htm "Glossary Entry") leads to a runtime error. Any other access leads to errors from [ATC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenatc_glosry.htm "Glossary Entry").
-   The former native database table DDNTF for separate nametab field descriptions is not supported any more and will be deleted.

Modification 2   

Load Unit

In ABAP Dictionary, a new technical setting for database tables is available: the [load unit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_load_unit.htm). It specifies how the data of the table is loaded into the main memory of the SAP HANA database. It can be used to reduce the memory consumption in the HANA database server.