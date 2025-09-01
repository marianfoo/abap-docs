  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) →  [DDIC - Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_table.htm) →  [DDIC DDL - DEFINE TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm) →  [DDIC DDL - DEFINE TABLE, field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_comps.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20TABLE%2C%20foreign_key_annos%2C%20ABENDDICDDL_DEFINE_TABLE_FKPRPS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

DDIC DDL - DEFINE TABLE, foreign\_key\_annos

Syntax

*\[*@AbapCatalog.foreignKey.label : '...'*\]*
*\[*@AbapCatalog.foreignKey.keyType : key\_type*\]*
*\[*@AbapCatalog.foreignKey.screenCheck : true*|*false*\]*
*\[*@AbapCatalog.foreignKey.messageClass : msg\_cls*\]*
*\[*@AbapCatalog.foreignKey.messageNumber : msg\_no*\]*

Effect

Annotations used to specify properties for a [foreign key dependency](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenforeign_key_dependency_glosry.htm "Glossary Entry") of a [table field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_comps.htm) defined using [foreign\_key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_forkey.htm) in the definition of a DDIC database table using the [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement [DEFINE TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm).

-   In quotation marks, @AbapCatalog.foreignKey.label defines the short text of the foreign key in the original language of the database table.
-   @AbapCatalog.foreignKey.keyType defines the [type of the foreign key fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkey.htm). key\_type can be specified as:
    -   #NON\_KEY - [No key fields/candidates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkey.htm)
    -   #KEY - [Key fields/candidates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkey.htm)
    -   #TEXT\_KEY - [Key fields of a text table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkey.htm)
-   @AbapCatalog.foreignKey.screenCheck enables or disables the foreign key dependency for the [input check](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkey.htm).
-   @AbapCatalog.foreignKey.messageClass and @AbapCatalog.foreignKey.messageNumber specify the message class msg\_class and message number msg\_no for the [message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_glosry.htm "Glossary Entry") of the [input check](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkey.htm).

Example

See [foreign\_key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_forkey.htm).