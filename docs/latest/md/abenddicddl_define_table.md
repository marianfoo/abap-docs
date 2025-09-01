  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Dictionary DDL for Defining Database Tables](javascript:call_link\('abenddic_define_table.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20TABLE%2C%20ABENDDICDDL_DEFINE_TABLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC DDL - DEFINE TABLE

Syntax

[structure\_annos](javascript:call_link\('abenddicddl_define_struct_props.htm'\))
[ext\_annos](javascript:call_link\('abenddicddl_define_ext_annos.htm'\))
[table\_annos](javascript:call_link\('abenddicddl_define_table_props.htm'\))
DEFINE TABLE dbtab {
  ...
  [field;](javascript:call_link\('abenddicddl_define_table_comps.htm'\))
  ...
  [include;](javascript:call_link\('abenddicddl_define_table_incl.htm'\))
  ...
}

Effect

[Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement for defining an ABAP Dictionary [DDIC database table](javascript:call_link\('abenddic_database_tables.htm'\)) dbtab in the [ABAP development tools for Eclipse](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

-   A DDIC database table is defined using the statement DEFINE TABLE. The name dbtab must comply with the naming rules for DDIC database tables.
-   In front of the statement DEFINE TABLE,
    -   the same mandatory structure properties must be specified as [annotations](javascript:call_link\('abenddic_annotation_glosry.htm'\) "Glossary Entry") [structure\_annos](javascript:call_link\('abenddicddl_define_struct_props.htm'\)) as in the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)).
    -   the same optional extensibility annotations [ext\_annos](javascript:call_link\('abenddicddl_define_ext_annos.htm'\)) as in the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) are available for [C0 developer extensibility](javascript:call_link\('abendev_extensibility_glosry.htm'\) "Glossary Entry").
    -   any mandatory table properties must be specified as annotations [table\_annos](javascript:call_link\('abenddicddl_define_table_props.htm'\)). Any other properties are optional.
-   The table fields are defined in a semicolon-separated list in curly brackets { } using one of the following methods:
    -   by defining single fields [field](javascript:call_link\('abenddicddl_define_table_comps.htm'\))
    -   by including include structures [include](javascript:call_link\('abenddicddl_define_table_incl.htm'\)).

Hints

-   As in the [CDS syntax](javascript:call_link\('abencds_general_syntax_rules.htm'\)), an ABAP Dictionary structure definition can contain comments after // and between /\* ... \*/.
-   For a more detailed description of the syntax, see the ADT documentation [Syntax of ABAP Dictionary Objects](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/fc6cd6f7d02f4546a33feb3f5fc9dd66).

Example

Definition of DDIC database table DEMO\_BLOB\_TABLE in the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") of the [ABAP development tools for Eclipse](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

@EndUserText.label : 'Table with a BLOB Column'
@AbapCatalog.enhancement.category : #NOT\_EXTENSIBLE
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #RESTRICTED
define table demo\_blob\_table {
  key name : abap.sstring(255) not null;
  picture  : abap.rawstring(0);
}

Continue
[DDIC DDL - DEFINE TABLE, table\_annos](javascript:call_link\('abenddicddl_define_table_props.htm'\))
[DDIC DDL - DEFINE TABLE, field](javascript:call_link\('abenddicddl_define_table_comps.htm'\))
[DDIC DDL - DEFINE TABLE, include](javascript:call_link\('abenddicddl_define_table_incl.htm'\))