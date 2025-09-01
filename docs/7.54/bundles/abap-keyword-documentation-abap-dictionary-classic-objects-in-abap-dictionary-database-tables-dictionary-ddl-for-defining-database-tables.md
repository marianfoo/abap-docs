# ABAP Keyword Documentation / ABAP - Dictionary / Classic Objects in ABAP Dictionary / Database Tables / Dictionary DDL for Defining Database Tables

Included pages: 8


### abenddic_define_table.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) → 

Dictionary DDL for Defining Database Tables

In the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), a database table can be displayed and modified using source-code-based methods in the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"). Here, the source code of a database table is not saved and transported. Instead, the source code of an existing database table is generated from the metadata of the associated system tables. When saved, the metadata is derived directly from the source code and saved to the system tables.

-   [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\))

Note

All properties of a database table described in the preceding sections can be defined using DEFINE TABLE or in transaction SE11, with the following exceptions. The [technical properties](javascript:call_link\('abenddic_database_tables_techspec.htm'\)), which are activated and transported separately from the database table, and [secondary indexes](javascript:call_link\('abenddic_database_tables_index.htm'\)) cannot be defined using the Dictionary DDL:

-   The [standalone table-specific technical properties of database tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) can be edited in a form-based tool in ADT.

-   [Secondary indexes](javascript:call_link\('abenddic_database_tables_index.htm'\)) must be edited using transaction SE11 as before.

Continue
[DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\))


### abenddicddl_define_table.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [Dictionary DDL for Defining Database Tables](javascript:call_link\('abenddic_define_table.htm'\)) → 

DEFINE TABLE

Syntax

[structure\_annos](javascript:call_link\('abenddicddl_define_struct_props.htm'\))
[table\_annos](javascript:call_link\('abenddicddl_define_table_props.htm'\))
DEFINE TABLE dbtab {
  ...
  [field;](javascript:call_link\('abenddicddl_define_table_comps.htm'\))
  ...
  [include;](javascript:call_link\('abenddicddl_define_struct_incl.htm'\))
  ...
}

Effect

[Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement for defining an ABAP Dictionary [database table](javascript:call_link\('abenddic_database_tables.htm'\)) dbtab in the [ABAP Development Tools](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

-   A database table is defined using the statement DEFINE TABLE. The restrictions for [database tables](javascript:call_link\('abenddic_data_types.htm'\)) apply to the name dbtab.

-   In front of the statement DEFINE TABLE,

-   the same mandatory structure properties must be specified as annotations [structure\_annos](javascript:call_link\('abenddicddl_define_struct_props.htm'\)) as in the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)).

-   any mandatory table properties must be specified as annotations [table\_annos](javascript:call_link\('abenddicddl_define_table_props.htm'\)). Any other properties are optional.

-   The table fields are defined in a semicolon-separated list in curly brackets { } using one of the following methods:

-   by defining single fields [field](javascript:call_link\('abenddicddl_define_table_comps.htm'\))

-   by including include structures [include](javascript:call_link\('abenddicddl_define_struct_incl.htm'\)). The same applies when including include structures as to the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)), except that the include structures must be suitable for database tables.

Notes

-   As in the [CDS syntax](javascript:call_link\('abencds_general_syntax_rules.htm'\)), an ABAP Dictionary structure definition can contain comments after // and between /\* ... \*/.

-   A more detailed description of the syntax is available in the ADT documentation Syntax of ABAP Dictionary Objects.

Example

Defines the database table DEMO\_BLOB\_TABLE in the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") of the [ABAP Development Tools](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

@EndUserText.label : 'Table with a BLOB Column'
@AbapCatalog.enhancementCategory : #NOT\_EXTENSIBLE
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #LIMITED
define table demo\_blob\_table {
  key name : abap.sstring(255) not null;
  picture  : abap.rawstring(0); }

Continue
[DEFINE TABLE - table\_annos](javascript:call_link\('abenddicddl_define_table_props.htm'\))
[DEFINE TABLE - field](javascript:call_link\('abenddicddl_define_table_comps.htm'\))


### abenddicddl_define_table_props.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [Dictionary DDL for Defining Database Tables](javascript:call_link\('abenddic_define_table.htm'\)) →  [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) → 

DEFINE TABLE - table\_annos

Syntax

@AbapCatalog.tableCategory : table\_cat
@AbapCatalog.dataMaintenance : data\_maint
@AbapCatalog.deliveryClass : deliv\_class
*\[*@AbapCatalog.activationType : act\_type*\]*
*\[*@AbapCatalog.replacementObject : '...'*\]*

Effect

Annotations for specifying table properties in the definition of a database table using the statement [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) in the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry").

Mandatory Definitions

-   @AbapCatalog.tableCategory defines the [table category](javascript:call_link\('abenddic_database_tables_tab_type.htm'\)). table\_cat can be specified as:

-   #TRANSPARENT - [transparent table](javascript:call_link\('abentransparent_table_glosry.htm'\) "Glossary Entry")

-   #GLOBAL\_TEMPORARY - [global temporary table (GTT)](javascript:call_link\('abenglobal_temporary_table_glosry.htm'\) "Glossary Entry")

-   @AbapCatalog.dataMaintenance defines how [the database table is displayed and edited](javascript:call_link\('abenddic_database_tables_maint.htm'\)). data\_maint can be specified as:

-   #NOT\_ALLOWED - [no display/editing](javascript:call_link\('abenddic_database_tables_maint.htm'\))

-   #LIMITED - [limited display/editing](javascript:call_link\('abenddic_database_tables_maint.htm'\))

-   #ALLOWED - [display/editing allowed](javascript:call_link\('abenddic_database_tables_maint.htm'\))

-   @AbapCatalog.deliveryClass defines the [delivery class of the database table](javascript:call_link\('abenddic_database_tables_delivery.htm'\)). deliv\_class can be specified as:

-   #A - [delivery class A](javascript:call_link\('abenddic_database_tables_delivery.htm'\))

-   #C - [delivery class C](javascript:call_link\('abenddic_database_tables_delivery.htm'\))

-   #L - [delivery class L](javascript:call_link\('abenddic_database_tables_delivery.htm'\))

-   #G - [delivery class G](javascript:call_link\('abenddic_database_tables_delivery.htm'\))

-   #E - [delivery class E](javascript:call_link\('abenddic_database_tables_delivery.htm'\))

-   #S - [delivery class S](javascript:call_link\('abenddic_database_tables_delivery.htm'\))

-   #W - [delivery class W](javascript:call_link\('abenddic_database_tables_delivery.htm'\))

Optional Definitions

-   @AbapCatalog.tableCategory defines the [activation type of the database table](javascript:call_link\('abenddic_database_tables_act_type.htm'\)). This setting is not relevant for database tables in application programming. act\_type can be specified as:

-   #NOT\_CLASSIFIED - [activation type 00](javascript:call_link\('abenddic_database_tables_act_type.htm'\))

-   #NAMETAB\_GENERATION\_OFFLINE - [activation type 01](javascript:call_link\('abenddic_database_tables_act_type.htm'\))

-   #ADAPT\_C\_STRUCTURES - [activation type 02](javascript:call_link\('abenddic_database_tables_act_type.htm'\))

-   #INITIAL\_TABLE\_REQUIRED - [activation type 10](javascript:call_link\('abenddic_database_tables_act_type.htm'\))

-   @AbapCatalog.replacementObject defines the name of a [replacement object](javascript:call_link\('abenreplacement_object_glosry.htm'\) "Glossary Entry") in quotation marks.

Example

Annotations in the definition of the database table DEMO\_SUMDIST in the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") of the [ABAP Development Tools](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). This table has the CDS view DEMO\_CDS\_SUMDIST as its [replacement object](javascript:call_link\('abenreplacement_object_glosry.htm'\) "Glossary Entry").

@EndUserText.label : 'Aggregation Table with Replacement Object'
@AbapCatalog.enhancementCategory : #NOT\_EXTENSIBLE
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #LIMITED
@AbapCatalog.replacementObject : 'demo\_cds\_sumdist'
define table demo\_sumdist {
  key client   : mandt not null;
  key carrname : s\_carrname not null;
  key distid   : s\_distid not null;
  @Semantics.quantity.unitOfMeasure : 'demo\_sumdist.distid'
  sum\_distance : s\_distance; }


### abenddicddl_define_table_comps.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [Dictionary DDL for Defining Database Tables](javascript:call_link\('abenddic_define_table.htm'\)) →  [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) → 

DEFINE TABLE - field

Syntax

*\[*component\_annos*\]*
*\[*[foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\))*\]*
*\[*KEY*\]* field : *{*data\_element *\[*[foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\))*\]*
                            *\[*[value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\))*\]**}*
              *|*abap. [type](javascript:call_link\('abenddic_builtin_types.htm'\))*\[*(n)*|*(n,m)*\]*
              *\[*NOT NULL*\]*;

Effect

Defines a single [database field](javascript:call_link\('abenddic_database_tables_techstruc.htm'\)) in the definition of a database table using the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)).

-   In front of the field, annotations [component\_annos](javascript:call_link\('abenddicddl_define_struct_cmpprps.htm'\)) can be used to specify the same optional component properties as in the definition of a structure using [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)).

-   [foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\)) can be used to specify the properties of a foreign key dependency defined with [foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\)).

-   The addition KEY defines the table field as a [key field](javascript:call_link\('abenddic_database_tables_key.htm'\)).

-   field indicates the name of the database field.

-   data\_element or abap.type is used to define the data type of the table field. The same rules apply as in the definition of a [structure component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\)), except that only elementary types can be specified here.

-   The addition NOT NULL is used to set the [flag for initial values](javascript:call_link\('abenddic_database_tables_init.htm'\)).

-   The addition [foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\)) can be used to define a [foreign key dependency](javascript:call_link\('abenddic_database_tables_forkeyrel.htm'\)) for a table field whose data type is defined using a data element.

-   The addition [value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\)) can be used to assign a search help to a table field whose data type is defined using a data element. This is only applicable to table fields used for input fields of dynpros or Web Dynpros (which is not recommended) and the same applies as in the definition of a [structure component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\)).

Example

Defines the database table DEMO\_EXPRESSIONS in the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") of the [ABAP Development Tools](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). The types of all fields are determined directly using built-in data types in ABAP Dictionary.

@EndUserText.label : 'Database Table for Expression Examples'
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
[DEFINE TABLE - foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\))
[DEFINE TABLE - foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\))


### abenddicddl_define_table_fkprps.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [Dictionary DDL for Defining Database Tables](javascript:call_link\('abenddic_define_table.htm'\)) →  [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) →  [DEFINE TABLE - field](javascript:call_link\('abenddicddl_define_table_comps.htm'\)) → 

DEFINE TABLE - foreign\_key\_annos

Syntax

*\[*@@AbapCatalog.foreignKey.label : '...'*\]*
*\[*@@AbapCatalog.foreignKey.keyType : key\_type*\]*
*\[*@@AbapCatalog.foreignKey.screenCheck : true*|*false*\]*
*\[*@@AbapCatalog.foreignKey.messageClass : msg\_cls*\]*
*\[*@@AbapCatalog.foreignKey.messageNumber : msg\_no*\]*

Effect

Annotations used to specify properties for a [foreign key dependency](javascript:call_link\('abenforeign_key_dependency_glosry.htm'\) "Glossary Entry") of a [table field](javascript:call_link\('abenddicddl_define_table_comps.htm'\)) defined using [foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\)) in the definition of a database table using the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)).

-   In quotation marks, @foreignKey.label defines the short text of the foreign key in the original language of the database table.

-   @AbapCatalog.foreignKey.keyType defines the [type of the foreign key fields](javascript:call_link\('abenddic_database_tables_forkey.htm'\)). key\_type can be specified as:

-   #NON\_KEY - [No key fields/candidates](javascript:call_link\('abenddic_database_tables_forkey.htm'\))

-   #KEY - [Key fields/candidates](javascript:call_link\('abenddic_database_tables_forkey.htm'\))

-   #TEXT\_KEY - [Key fields of a text table](javascript:call_link\('abenddic_database_tables_forkey.htm'\))

-   @AbapCatalog.foreignKey.screenCheck enables or disables the foreign key dependency for the [input check](javascript:call_link\('abenddic_database_tables_forkey.htm'\)).

-   @AbapCatalog.foreignKey.messageClass and @AbapCatalog.foreignKey.messageNumber specify the message class msg\_class and message number msg\_no for the [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") of the [input check](javascript:call_link\('abenddic_database_tables_forkey.htm'\)).

Example

See [foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\)).


### abenddicddl_define_table_forkey.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [Dictionary DDL for Defining Database Tables](javascript:call_link\('abenddic_define_table.htm'\)) →  [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) →  [DEFINE TABLE - field](javascript:call_link\('abenddicddl_define_table_comps.htm'\)) → 

DEFINE TABLE - foreign\_key

Syntax

...  WITH FOREIGN KEY *\[*\[n,m\]*\]* check\_table
       WHERE check\_field1 = dbtab.field1
         *\[*AND check\_field2 = dbtab.field2 ...*\]* ...

Effect

Assigns a [check table](javascript:call_link\('abenddic_database_tables_checktab.htm'\)) to a [table field](javascript:call_link\('abenddicddl_define_table_comps.htm'\)) whose data type is defined by a data element in the definition of a database table using the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)). Here, check\_table is an existing database table in ABAP Dictionary. This statement turns check\_table into a check table and turns the current database table into a [foreign key table](javascript:call_link\('abenforeign_key_table_glosry.htm'\) "Glossary Entry"). The current table field is turned into a [foreign key field](javascript:call_link\('abenforeign_key_field_glosry.htm'\) "Glossary Entry") of the [foreign key](javascript:call_link\('abenddic_database_tables_forkey.htm'\)) of the current table.

-   The associated fields of the check table must be assigned to the foreign key fields of the foreign key table after WHERE.

-   \[n,m\] can be used to define the [cardinality](javascript:call_link\('abenddic_database_tables_forkey.htm'\)) of the foreign key.

-   The possible values for n are 1 for [1](javascript:call_link\('abenddic_database_tables_forkey.htm'\)) and \[0..1\] for [C](javascript:call_link\('abenddic_database_tables_forkey.htm'\)).

-   The possible values for m are 1 for [1](javascript:call_link\('abenddic_database_tables_forkey.htm'\)), \[0..1\] for [C](javascript:call_link\('abenddic_database_tables_forkey.htm'\)), \[1..\*\] for [N](javascript:call_link\('abenddic_database_tables_forkey.htm'\)), and \[0..\*\] for [CN](javascript:call_link\('abenddic_database_tables_forkey.htm'\)).

Further properties of the foreign key can be specified using [foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\)).

Note

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


### abenddicddl_define_table_comps.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [Dictionary DDL for Defining Database Tables](javascript:call_link\('abenddic_define_table.htm'\)) →  [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) → 

DEFINE TABLE - field

Syntax

*\[*component\_annos*\]*
*\[*[foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\))*\]*
*\[*KEY*\]* field : *{*data\_element *\[*[foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\))*\]*
                            *\[*[value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\))*\]**}*
              *|*abap. [type](javascript:call_link\('abenddic_builtin_types.htm'\))*\[*(n)*|*(n,m)*\]*
              *\[*NOT NULL*\]*;

Effect

Defines a single [database field](javascript:call_link\('abenddic_database_tables_techstruc.htm'\)) in the definition of a database table using the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)).

-   In front of the field, annotations [component\_annos](javascript:call_link\('abenddicddl_define_struct_cmpprps.htm'\)) can be used to specify the same optional component properties as in the definition of a structure using [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)).

-   [foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\)) can be used to specify the properties of a foreign key dependency defined with [foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\)).

-   The addition KEY defines the table field as a [key field](javascript:call_link\('abenddic_database_tables_key.htm'\)).

-   field indicates the name of the database field.

-   data\_element or abap.type is used to define the data type of the table field. The same rules apply as in the definition of a [structure component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\)), except that only elementary types can be specified here.

-   The addition NOT NULL is used to set the [flag for initial values](javascript:call_link\('abenddic_database_tables_init.htm'\)).

-   The addition [foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\)) can be used to define a [foreign key dependency](javascript:call_link\('abenddic_database_tables_forkeyrel.htm'\)) for a table field whose data type is defined using a data element.

-   The addition [value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\)) can be used to assign a search help to a table field whose data type is defined using a data element. This is only applicable to table fields used for input fields of dynpros or Web Dynpros (which is not recommended) and the same applies as in the definition of a [structure component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\)).

Example

Defines the database table DEMO\_EXPRESSIONS in the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") of the [ABAP Development Tools](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). The types of all fields are determined directly using built-in data types in ABAP Dictionary.

@EndUserText.label : 'Database Table for Expression Examples'
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
[DEFINE TABLE - foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\))
[DEFINE TABLE - foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\))


### abenddicddl_define_table.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [Dictionary DDL for Defining Database Tables](javascript:call_link\('abenddic_define_table.htm'\)) → 

DEFINE TABLE

Syntax

[structure\_annos](javascript:call_link\('abenddicddl_define_struct_props.htm'\))
[table\_annos](javascript:call_link\('abenddicddl_define_table_props.htm'\))
DEFINE TABLE dbtab {
  ...
  [field;](javascript:call_link\('abenddicddl_define_table_comps.htm'\))
  ...
  [include;](javascript:call_link\('abenddicddl_define_struct_incl.htm'\))
  ...
}

Effect

[Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement for defining an ABAP Dictionary [database table](javascript:call_link\('abenddic_database_tables.htm'\)) dbtab in the [ABAP Development Tools](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

-   A database table is defined using the statement DEFINE TABLE. The restrictions for [database tables](javascript:call_link\('abenddic_data_types.htm'\)) apply to the name dbtab.

-   In front of the statement DEFINE TABLE,

-   the same mandatory structure properties must be specified as annotations [structure\_annos](javascript:call_link\('abenddicddl_define_struct_props.htm'\)) as in the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)).

-   any mandatory table properties must be specified as annotations [table\_annos](javascript:call_link\('abenddicddl_define_table_props.htm'\)). Any other properties are optional.

-   The table fields are defined in a semicolon-separated list in curly brackets { } using one of the following methods:

-   by defining single fields [field](javascript:call_link\('abenddicddl_define_table_comps.htm'\))

-   by including include structures [include](javascript:call_link\('abenddicddl_define_struct_incl.htm'\)). The same applies when including include structures as to the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)), except that the include structures must be suitable for database tables.

Notes

-   As in the [CDS syntax](javascript:call_link\('abencds_general_syntax_rules.htm'\)), an ABAP Dictionary structure definition can contain comments after // and between /\* ... \*/.

-   A more detailed description of the syntax is available in the ADT documentation Syntax of ABAP Dictionary Objects.

Example

Defines the database table DEMO\_BLOB\_TABLE in the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") of the [ABAP Development Tools](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

@EndUserText.label : 'Table with a BLOB Column'
@AbapCatalog.enhancementCategory : #NOT\_EXTENSIBLE
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #LIMITED
define table demo\_blob\_table {
  key name : abap.sstring(255) not null;
  picture  : abap.rawstring(0); }

Continue
[DEFINE TABLE - table\_annos](javascript:call_link\('abenddicddl_define_table_props.htm'\))
[DEFINE TABLE - field](javascript:call_link\('abenddicddl_define_table_comps.htm'\))
