  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: database schema, ABENDATABASE_SCHEMA_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

database schema

A database schema groups [database objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_object_glosry.htm "Glossary Entry") in a [database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_glosry.htm "Glossary Entry"). Within a database schema, [SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_glosry.htm "Glossary Entry") can be used to access the objects of the same schema directly. [Database users](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_user_glosry.htm "Glossary Entry") implicitly access the database schema assigned to their [database user names](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_user_name_glosry.htm "Glossary Entry"). Objects in a different schema can be accessed only by specifying their schema name. Access to a database schema by a database user is regulated by individual authorizations. The objects managed by the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") for a database and the implementations of [AMDP methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_method_glosry.htm "Glossary Entry") are located in the [ABAP database schema](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") that is assigned the database user name when the [standard connection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") in [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry") is accessed.