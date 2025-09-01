  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Dictionary DDL for Defining Database Tables](javascript:call_link\('abenddic_define_table.htm'\)) →  [DDIC DDL - DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) →  [DDIC DDL - DEFINE TABLE, field](javascript:call_link\('abenddicddl_define_table_comps.htm'\)) → 

DDIC DDL - DEFINE TABLE, foreign\_key\_annos

Syntax

*\[*@AbapCatalog.foreignKey.label : '...'*\]*
*\[*@AbapCatalog.foreignKey.keyType : key\_type*\]*
*\[*@AbapCatalog.foreignKey.screenCheck : true*|*false*\]*
*\[*@AbapCatalog.foreignKey.messageClass : msg\_cls*\]*
*\[*@AbapCatalog.foreignKey.messageNumber : msg\_no*\]*

Effect

Annotations used to specify properties for a [foreign key dependency](javascript:call_link\('abenforeign_key_dependency_glosry.htm'\) "Glossary Entry") of a [table field](javascript:call_link\('abenddicddl_define_table_comps.htm'\)) defined using [foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\)) in the definition of a DDIC database table using the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)).

-   In quotation marks, @AbapCatalog.foreignKey.label defines the short text of the foreign key in the original language of the database table.
-   @AbapCatalog.foreignKey.keyType defines the [type of the foreign key fields](javascript:call_link\('abenddic_database_tables_forkey.htm'\)). key\_type can be specified as:
    -   #NON\_KEY - [No key fields/candidates](javascript:call_link\('abenddic_database_tables_forkey.htm'\))
    -   #KEY - [Key fields/candidates](javascript:call_link\('abenddic_database_tables_forkey.htm'\))
    -   #TEXT\_KEY - [Key fields of a text table](javascript:call_link\('abenddic_database_tables_forkey.htm'\))
-   @AbapCatalog.foreignKey.screenCheck enables or disables the foreign key dependency for the [input check](javascript:call_link\('abenddic_database_tables_forkey.htm'\)).
-   @AbapCatalog.foreignKey.messageClass and @AbapCatalog.foreignKey.messageNumber specify the message class msg\_class and message number msg\_no for the [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") of the [input check](javascript:call_link\('abenddic_database_tables_forkey.htm'\)).

Example

See [foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\)).