  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Dictionary DDL for Defining Database Tables](javascript:call_link\('abenddic_define_table.htm'\)) → 

DDIC DDL - DEFINE TABLE

Syntax

[structure\_annos](javascript:call_link\('abenddicddl_define_struct_props.htm'\))
[table\_annos](javascript:call_link\('abenddicddl_define_table_props.htm'\))
DEFINE TABLE dbtab {
  ...
  [field;](javascript:call_link\('abenddicddl_define_table_comps.htm'\))
  ...
  [include;](javascript:call_link\('abenddicddl_define_table_incl.htm'\))
  ...
}

Effect

[Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement for defining an ABAP Dictionary [DDIC database table](javascript:call_link\('abenddic_database_tables.htm'\)) dbtab in the [ABAP Development Tools](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

-   A DDIC database table is defined using the statement DEFINE TABLE. The restrictions for [DDIC database tables](javascript:call_link\('abenddic_data_types.htm'\)) apply to the name dbtab.
-   In front of the statement DEFINE TABLE,
    -   the same mandatory structure properties must be specified as annotations [structure\_annos](javascript:call_link\('abenddicddl_define_struct_props.htm'\)) as in the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)).
    -   any mandatory table properties must be specified as annotations [table\_annos](javascript:call_link\('abenddicddl_define_table_props.htm'\)). Any other properties are optional.
-   The table fields are defined in a semicolon-separated list in curly brackets { } using one of the following methods:
    -   by defining single fields [field](javascript:call_link\('abenddicddl_define_table_comps.htm'\))
    -   by including include structures [include](javascript:call_link\('abenddicddl_define_table_incl.htm'\)).

Hints

-   As in the [CDS syntax](javascript:call_link\('abencds_general_syntax_rules.htm'\)), an ABAP Dictionary structure definition can contain comments after // and between /\* ... \*/.
-   For a more detailed description of the syntax, see the ADT documentation Syntax of ABAP Dictionary Objects.

Example

Defines the DDIC database table DEMO\_BLOB\_TABLE in the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") of the [ABAP Development Tools](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

@EndUserText.label : 'Table with a BLOB Column'
@AbapCatalog.enhancementCategory : #NOT\_EXTENSIBLE
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #LIMITED
define table demo\_blob\_table {
  key name : abap.sstring(255) not null;
  picture  : abap.rawstring(0); }

Continue
[DDIC DDL - DEFINE TABLE, table\_annos](javascript:call_link\('abenddicddl_define_table_props.htm'\))
[DDIC DDL - DEFINE TABLE, field](javascript:call_link\('abenddicddl_define_table_comps.htm'\))
[DDIC DDL - DEFINE TABLE, include](javascript:call_link\('abenddicddl_define_table_incl.htm'\))