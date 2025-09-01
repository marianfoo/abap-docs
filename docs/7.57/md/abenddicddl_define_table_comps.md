  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Dictionary DDL for Defining Database Tables](javascript:call_link\('abenddic_define_table.htm'\)) →  [DDIC DDL - DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC DDL - DEFINE TABLE, field, ABENDDICDDL_DEFINE_TABLE_COMPS, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC DDL - DEFINE TABLE, field

Syntax

*\[*[component\_annos](javascript:call_link\('abenddicddl_define_struct_cmpprps.htm'\))*\]*
*\[*[foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\))*\]*
*\[*[geo\_annos](javascript:call_link\('abenddicddl_define_table_srprps.htm'\))*\]*
*\[*KEY*\]* field : *{*data\_element *\[*[foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\))*\]*
*\[*[value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\))*\]**}*
              *|*abap. [type](javascript:call_link\('abenddic_builtin_types.htm'\))*\[*(n)*|*(n,m)*\]*
              *\[*NOT NULL*\]*;

Effect

Defines a single [database field](javascript:call_link\('abenddic_database_tables_techstruc.htm'\)) in the definition of a DDIC database table using the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)).

-   In front of the field, annotations [component\_annos](javascript:call_link\('abenddicddl_define_struct_cmpprps.htm'\)) can be used to specify the same optional component properties as in the definition of a structure using [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)).
-   [foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\)) can be used to specify the properties of a foreign key dependency defined with [foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\)).
-   [geo\_annos](javascript:call_link\('abenddicddl_define_table_srprps.htm'\)) is used to specify special properties of a component with the [geodata type](javascript:call_link\('abengeo_data_type_glosry.htm'\) "Glossary Entry") GEOM\_EWKB.
-   The addition KEY defines the table field as a [key field](javascript:call_link\('abenddic_database_tables_key.htm'\)).
-   field indicates the name of the database field.
-   data\_element or abap.type is used to define the data type of the table field. The same rules apply as in the definition of a [structure component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\)), except that only elementary types can be specified here.
-   The addition NOT NULL is used to set the [flag for initial values](javascript:call_link\('abenddic_database_tables_init.htm'\)).
-   The addition [foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\)) can be used to define a [foreign key dependency](javascript:call_link\('abenddic_database_tables_forkeyrel.htm'\)) for a table field whose data type is defined using a data element.
-   The addition [value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\)) can be used to assign a search help to a table field whose data type is defined using a data element. This is only applicable to table fields used for input fields of dynpros or Web Dynpros (which is not recommended) and the same applies as in the definition of a [structure component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\)).

Example

Defines the DDIC database table DEMO\_EXPRESSIONS in the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") of the [ABAP Development Tools](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). The types of all fields are determined directly using built-in data types in the ABAP Dictionary.

@EndUserText.label : 'Database table for Expression Examples'
@AbapCatalog.enhancementCategory : #NOT\_EXTENSIBLE
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #ALLOWED
define table demo\_expressions {
  key mandt  : mandt not null;
  key id     : char1 not null;
  num1       : abap.int4;
  num2       : abap.int4;
  numlong1   : abap.int8;
  numlong2   : abap.int8;
  dec1       : abap.dec(31,0);
  dec2       : abap.dec(31,10);
  dec3       : abap.dec(10,3);
  fltp1      : abap.fltp;
  fltp2      : abap.fltp;
  decf1      : abap.df34\_dec(31,0);
  decf2      : abap.df34\_dec(31,0);
  char1      : abap.char(10);
  char2      : abap.char(10);
  numc1      : abap.numc(10);
  numc2      : abap.numc(10);
  string1    : abap.string(0);
  string2    : abap.string(0);
  raw1       : abap.raw(10);
  raw2       : abap.raw(10);
  xstring1   : abap.rawstring(0);
  xstring2   : abap.rawstring(0);
  dats1      : abap.dats;
  dats2      : abap.dats;
  tims1      : abap.tims;
  tims2      : abap.tims;
  timestamp1 : abap.dec(15,0);
  timestamp2 : abap.dec(15,0); }

Continue
[DDIC DDL - DEFINE TABLE, foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\))
[DDIC DDL - DEFINE TABLE, foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\))
[DDIC DDL - DEFINE TABLE, geo\_annos](javascript:call_link\('abenddicddl_define_table_srprps.htm'\))