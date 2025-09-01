  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm) →  [DDIC - Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_define_table.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC DDL - DEFINE TABLE, ABENDDICDDL_DEFINE_TABLE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

DDIC DDL - DEFINE TABLE

Syntax

[structure\_annos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_struct_props.htm)
[table\_annos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_props.htm)
DEFINE TABLE dbtab {
  ...
  [field;](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_comps.htm)
  ...
  [include;](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_incl.htm)
  ...
}

Effect

[Dictionary DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement for defining an ABAP Dictionary [DDIC database table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm) dbtab in the [ABAP Development Tools](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry").

-   A DDIC database table is defined using the statement DEFINE TABLE. The restrictions for [DDIC database tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_data_types.htm) apply to the name dbtab.
-   In front of the statement DEFINE TABLE,
    -   the same mandatory structure properties must be specified as annotations [structure\_annos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_struct_props.htm) as in the statement [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_structure.htm).
    -   any mandatory table properties must be specified as annotations [table\_annos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_props.htm). Any other properties are optional.
-   The table fields are defined in a semicolon-separated list in curly brackets { } using one of the following methods:
    -   by defining single fields [field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_comps.htm)
    -   by including include structures [include](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_incl.htm).

Hints

-   As in the [CDS syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_general_syntax_rules.htm), an ABAP Dictionary structure definition can contain comments after // and between /\* ... \*/.
-   For a more detailed description of the syntax, see the ADT documentation Syntax of ABAP Dictionary Objects.

Example

Defines the DDIC database table DEMO\_BLOB\_TABLE in the [Dictionary DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") of the [ABAP Development Tools](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry").

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
[DDIC DDL - DEFINE TABLE, table\_annos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_props.htm)
[DDIC DDL - DEFINE TABLE, field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_comps.htm)
[DDIC DDL - DEFINE TABLE, include](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_incl.htm)