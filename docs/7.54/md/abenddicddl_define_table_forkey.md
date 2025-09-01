  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables.htm) →  [Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_define_table.htm) →  [DEFINE TABLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_table.htm) →  [DEFINE TABLE - field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_table_comps.htm) → 

DEFINE TABLE - foreign\_key

Syntax

...  WITH FOREIGN KEY *\[*\[n,m\]*\]* check\_table
       WHERE check\_field1 = dbtab.field1
         *\[*AND check\_field2 = dbtab.field2 ...*\]* ...

Effect

Assigns a [check table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_checktab.htm) to a [table field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_table_comps.htm) whose data type is defined by a data element in the definition of a database table using the [Dictionary DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement [DEFINE TABLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_table.htm). Here, check\_table is an existing database table in ABAP Dictionary. This statement turns check\_table into a check table and turns the current database table into a [foreign key table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenforeign_key_table_glosry.htm "Glossary Entry"). The current table field is turned into a [foreign key field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenforeign_key_field_glosry.htm "Glossary Entry") of the [foreign key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_forkey.htm) of the current table.

-   The associated fields of the check table must be assigned to the foreign key fields of the foreign key table after WHERE.

-   \[n,m\] can be used to define the [cardinality](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_forkey.htm) of the foreign key.

-   The possible values for n are 1 for [1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_forkey.htm) and \[0..1\] for [C](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_forkey.htm).

-   The possible values for m are 1 for [1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_forkey.htm), \[0..1\] for [C](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_forkey.htm), \[1..\*\] for [N](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_forkey.htm), and \[0..\*\] for [CN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_forkey.htm).

Further properties of the foreign key can be specified using [foreign\_key\_annos](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_table_fkprps.htm).

Note

The addition WITH FOREIGN KEY can be used, with the same meaning, in the definition of a structure using [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_structure.htm).

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