  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables.htm) → 

DDIC - Dictionary DDL for Defining Database Tables

In the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadt_glosry.htm "Glossary Entry"), a database table can be displayed and modified using source-code-based methods in the [Dictionary DDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"). Here, the source code of a DDIC database table is not saved and transported. Instead, the source code of an existing DDIC database table is generated from the metadata of the associated system tables. When saved, the metadata is derived directly from the source code and saved to the system tables.

-   [DEFINE TABLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_table.htm)

Hint

All properties of a DDIC database table described in the preceding sections can be defined using DEFINE TABLE or in transaction SE11, with the following exceptions. The [technical properties](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_techspec.htm), which are activated and transported separately from the DDIC database table, and [secondary indexes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_index.htm) cannot be defined using the Dictionary DDL:

-   The [standalone table-specific technical properties of DDIC database tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_techspec.htm) can be maintained in a form-based tool in ADT.

-   [Secondary indexes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_index.htm) must be edited using transaction SE11 as before.

Continue
[DDIC DDL - DEFINE TABLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_table.htm)