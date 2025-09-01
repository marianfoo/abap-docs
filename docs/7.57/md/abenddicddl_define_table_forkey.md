  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Dictionary DDL for Defining Database Tables](javascript:call_link\('abenddic_define_table.htm'\)) →  [DDIC DDL - DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) →  [DDIC DDL - DEFINE TABLE, field](javascript:call_link\('abenddicddl_define_table_comps.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC DDL - DEFINE TABLE, foreign_key, ABENDDICDDL_DEFINE_TABLE_FORKEY, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC DDL - DEFINE TABLE, foreign\_key

Syntax

...  WITH FOREIGN KEY *\[*\[n,m\]*\]* check\_table
       WHERE check\_field1 = dbtab.field1
         *\[*AND check\_field2 = dbtab.field2 ...*\]* ...

Effect

Assigns a [check table](javascript:call_link\('abenddic_database_tables_checktab.htm'\)) to a [table field](javascript:call_link\('abenddicddl_define_table_comps.htm'\)) whose data type is defined by a data element in the definition of a DDIC database table using the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)). Here, check\_table is an existing DDIC database table in the ABAP Dictionary. This statement turns check\_table into a check table and turns the current DDIC database table into a [foreign key table](javascript:call_link\('abenforeign_key_table_glosry.htm'\) "Glossary Entry"). The current table field is turned into a [foreign key field](javascript:call_link\('abenforeign_key_field_glosry.htm'\) "Glossary Entry") of the [foreign key](javascript:call_link\('abenddic_database_tables_forkey.htm'\)) of the current table.

-   The associated fields of the check table must be assigned to the foreign key fields of the foreign key table after WHERE.
-   \[n,m\] can be used to define the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of the [foreign key](javascript:call_link\('abenddic_database_tables_forkey.htm'\)).
    -   The possible values for n are 1 for [1](javascript:call_link\('abenddic_database_tables_forkey.htm'\)) and \[0..1\] for [C](javascript:call_link\('abenddic_database_tables_forkey.htm'\)).
    -   The possible values for m are 1 for [1](javascript:call_link\('abenddic_database_tables_forkey.htm'\)), \[0..1\] for [C](javascript:call_link\('abenddic_database_tables_forkey.htm'\)), \[1..\*\] for [N](javascript:call_link\('abenddic_database_tables_forkey.htm'\)), and \[0..\*\] for [CN](javascript:call_link\('abenddic_database_tables_forkey.htm'\)).

Further properties of the foreign key can be specified using [foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\)).

Hint

The addition WITH FOREIGN KEY can be used, with the same meaning, in the definition of a structure using [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)).

Example

Dictionary DDL for specifying the check table SCARR of the foreign key field CARRID of the foreign key table SPFLI.

...
define table spfli {
  ...
  @AbapCatalog.foreignKey.label : 'Check Against Airline'
  @AbapCatalog.foreignKey.keyType : #KEY
  @AbapCatalog.foreignKey.screenCheck : true
  key carrid : s\_carr\_id not null
    with foreign key \[0..\*,1\] scarr
      where mandt = spfli.mandt
        and carrid = spfli.carrid;
  ...
}