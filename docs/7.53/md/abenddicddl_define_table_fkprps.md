  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables.htm) →  [Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_define_table.htm) →  [DEFINE TABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddicddl_define_table.htm) →  [DEFINE TABLE - field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddicddl_define_table_comps.htm) → 

DEFINE TABLE - foreign\_key\_annos

Syntax

*\[*@@AbapCatalog.foreignKey.label : '...'*\]*
*\[*@@AbapCatalog.foreignKey.keyType : key\_type*\]*
*\[*@@AbapCatalog.foreignKey.screenCheck : true*|*false*\]*
*\[*@@AbapCatalog.foreignKey.messageClass : msg\_cls*\]*
*\[*@@AbapCatalog.foreignKey.messageNumber : msg\_no*\]*

Effect

Annotations used to specify properties for a [foreign key dependency](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenforeign_key_dependency_glosry.htm "Glossary Entry") of a [table field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddicddl_define_table_comps.htm) defined using [foreign\_key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddicddl_define_table_forkey.htm) in the definition of a database table using the [Dictionary DDL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement [DEFINE TABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddicddl_define_table.htm).

-   In quotation marks, @foreignKey.label defines the short text of the foreign key in the original language of the database table.

-   @AbapCatalog.foreignKey.keyType defines the [type of the foreign key fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_forkey.htm). key\_type can be specified as:

-   #NON\_KEY - [No key fields/candidates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_forkey.htm)

-   #KEY - [Key fields/candidates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_forkey.htm)

-   #TEXT\_KEY - [Key fields of a text table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_forkey.htm)

-   @AbapCatalog.foreignKey.screenCheck enables or disables the foreign key dependency for the [input check](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_forkey.htm).

-   @AbapCatalog.foreignKey.messageClass and @AbapCatalog.foreignKey.messageNumber specify the message class msg\_class and message number msg\_no for the [message](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmessage_glosry.htm "Glossary Entry") of the [input check](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_forkey.htm).

Example

See [foreign\_key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddicddl_define_table_forkey.htm).