  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables.htm) → 

Dictionary DDL for Defining Database Tables

In the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadt_glosry.htm "Glossary Entry"), a database table can be displayed and modified using source-code-based methods in the [Dictionary DDL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"). Here, the source code of a database table is not saved and transported. Instead, the source code of an existing database table is generated from the metadata of the associated system tables. When saved, the metadata is derived directly from the source code and saved to the system tables.

-   [DEFINE TABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddicddl_define_table.htm)

Note

All properties of a database table described in the preceding sections can be defined using DEFINE TABLE or in transaction SE11, with the following exceptions. The [technical properties](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_techspec.htm), which are activated and transported separately from the database table, and [secondary indexes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_index.htm) cannot be defined using the Dictionary DDL. They must be edited using transaction SE11 as before.

Continue
[DEFINE TABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddicddl_define_table.htm)