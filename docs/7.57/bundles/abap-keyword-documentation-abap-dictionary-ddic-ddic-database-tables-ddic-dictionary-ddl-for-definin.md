# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Database Tables / DDIC - Dictionary DDL for Defining Database Tables

Included pages: 10


### abenddic_define_table.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Dictionary DDL for Defining Database Tables, ABENDDIC_DEFINE_TABLE, 757%0D%0A%
0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Dictionary DDL for Defining Database Tables

In the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry"), a database table can be displayed and modified using source-code-based methods in the [Dictionary DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"). Here, the source code of a DDIC database table is not saved and transported. Instead, the source code of an existing DDIC database table is generated from the metadata of the associated system tables. Conversely, when saved, the metadata is derived directly from the source code and saved to the system tables.

-   [DEFINE TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table.htm)

Hint

All properties of a DDIC database table described in the preceding sections can be defined using DEFINE TABLE or in transaction SE11, with the following exceptions. The [technical properties](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_techspec.htm), which are activated and transported separately from the DDIC database table, and [secondary indexes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_index.htm) cannot be defined using the Dictionary DDL:

-   The [standalone table-specific technical properties of DDIC database tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_techspec.htm) can be maintained in a form-based tool in ADT.
-   [Secondary indexes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_index.htm) must be edited using transaction SE11 as before.

Continue
[DDIC DDL - DEFINE TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table.htm)


### abenddicddl_define_table.htm

  

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


### abenddicddl_define_table_props.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm) →  [DDIC - Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_define_table.htm) →  [DDIC DDL - DEFINE TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC DDL - DEFINE TABLE, table_annos, ABENDDICDDL_DEFINE_TABLE_PROPS, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC DDL - DEFINE TABLE, table\_annos

Syntax

@AbapCatalog.tableCategory : table\_cat
@AbapCatalog.dataMaintenance : data\_maint
@AbapCatalog.deliveryClass : deliv\_class
*\[*@AbapCatalog.activationType : act\_type*\]*
*\[*@AbapCatalog.replacementObject : '...'*\]*

Effect

Annotations for specifying table properties in the definition of a DDIC database table using the statement [DEFINE TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table.htm) in the [Dictionary DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendictionary_ddl_glosry.htm "Glossary Entry").

Mandatory Definitions

-   @AbapCatalog.tableCategory defines the [table category](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_tab_cat.htm). table\_cat can be specified as:
    -   #TRANSPARENT - [transparent table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransparent_table_glosry.htm "Glossary Entry")
    -   #GLOBAL\_TEMPORARY - [Global Temporary Table (GTT)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenglobal_temporary_table_glosry.htm "Glossary Entry")
-   @AbapCatalog.dataMaintenance defines how [the DDIC database table is displayed and maintained](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_maint.htm). data\_maint can be specified as:
    -   #NOT\_ALLOWED - [no display/maintenance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_maint.htm)
    -   #LIMITED - [limited display/maintenance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_maint.htm)
    -   #ALLOWED - [display/maintenance allowed](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_maint.htm)
-   @AbapCatalog.deliveryClass defines the [delivery class of the database table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_delivery.htm). deliv\_class can be specified as:
    -   #A - [delivery class A](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_delivery.htm)
    -   #C - [delivery class C](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_delivery.htm)
    -   #L - [delivery class L](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_delivery.htm)
    -   #G - [delivery class G](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_delivery.htm)
    -   #E - [delivery class E](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_delivery.htm)
    -   #S - [delivery class S](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_delivery.htm)
    -   #W - [delivery class W](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_delivery.htm)

Optional Definitions

-   @AbapCatalog.tableCategory defines the [activation type of the database table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_act_type.htm). This setting is not relevant for DDIC database tables in application programming. act\_type can be specified as:
    -   #NOT\_CLASSIFIED - [activation type 00](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_act_type.htm)
    -   #NAMETAB\_GENERATION\_OFFLINE - [activation type 01](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_act_type.htm)
    -   #ADAPT\_C\_STRUCTURES - [activation type 02](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_act_type.htm)
    -   #INITIAL\_TABLE\_REQUIRED - [activation type 10](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_act_type.htm)
-   @AbapCatalog.replacementObject defines the name of a [replacement object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreplacement_object_glosry.htm "Glossary Entry") in quotation marks.

Example

Annotations in the definition of the DDIC database table DEMO\_SUMDIST in the [Dictionary DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") of the [ABAP Development Tools](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry"). This table has the CDS view DEMO\_CDS\_SUMDIST as its [replacement object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreplacement_object_glosry.htm "Glossary Entry").

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

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm) →  [DDIC - Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_define_table.htm) →  [DDIC DDL - DEFINE TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC DDL - DEFINE TABLE, field, ABENDDICDDL_DEFINE_TABLE_COMPS, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC DDL - DEFINE TABLE, field

Syntax

*\[*[component\_annos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_struct_cmpprps.htm)*\]*
*\[*[foreign\_key\_annos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_fkprps.htm)*\]*
*\[*[geo\_annos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_srprps.htm)*\]*
*\[*KEY*\]* field : *{*data\_element *\[*[foreign\_key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_forkey.htm)*\]*
*\[*[value\_help](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_struct_valuhelp.htm)*\]**}*
              *|*abap. [type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm)*\[*(n)*|*(n,m)*\]*
              *\[*NOT NULL*\]*;

Effect

Defines a single [database field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_techstruc.htm) in the definition of a DDIC database table using the [Dictionary DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement [DEFINE TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table.htm).

-   In front of the field, annotations [component\_annos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_struct_cmpprps.htm) can be used to specify the same optional component properties as in the definition of a structure using [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_structure.htm).
-   [foreign\_key\_annos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_fkprps.htm) can be used to specify the properties of a foreign key dependency defined with [foreign\_key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_forkey.htm).
-   [geo\_annos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_srprps.htm) is used to specify special properties of a component with the [geodata type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengeo_data_type_glosry.htm "Glossary Entry") GEOM\_EWKB.
-   The addition KEY defines the table field as a [key field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_key.htm).
-   field indicates the name of the database field.
-   data\_element or abap.type is used to define the data type of the table field. The same rules apply as in the definition of a [structure component](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_struct_comps.htm), except that only elementary types can be specified here.
-   The addition NOT NULL is used to set the [flag for initial values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_init.htm).
-   The addition [foreign\_key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_forkey.htm) can be used to define a [foreign key dependency](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_forkeyrel.htm) for a table field whose data type is defined using a data element.
-   The addition [value\_help](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_struct_valuhelp.htm) can be used to assign a search help to a table field whose data type is defined using a data element. This is only applicable to table fields used for input fields of dynpros or Web Dynpros (which is not recommended) and the same applies as in the definition of a [structure component](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_struct_comps.htm).

Example

Defines the DDIC database table DEMO\_EXPRESSIONS in the [Dictionary DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") of the [ABAP Development Tools](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry"). The types of all fields are determined directly using built-in data types in the ABAP Dictionary.

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
[DDIC DDL - DEFINE TABLE, foreign\_key\_annos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_fkprps.htm)
[DDIC DDL - DEFINE TABLE, foreign\_key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_forkey.htm)
[DDIC DDL - DEFINE TABLE, geo\_annos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_srprps.htm)


### abenddicddl_define_table_fkprps.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm) →  [DDIC - Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_define_table.htm) →  [DDIC DDL - DEFINE TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table.htm) →  [DDIC DDL - DEFINE TABLE, field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_comps.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC DDL - DEFINE TABLE, foreign_key_annos, ABENDDICDDL_DEFINE_TABLE_FKPRPS, 757%0D%0
A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC DDL - DEFINE TABLE, foreign\_key\_annos

Syntax

*\[*@AbapCatalog.foreignKey.label : '...'*\]*
*\[*@AbapCatalog.foreignKey.keyType : key\_type*\]*
*\[*@AbapCatalog.foreignKey.screenCheck : true*|*false*\]*
*\[*@AbapCatalog.foreignKey.messageClass : msg\_cls*\]*
*\[*@AbapCatalog.foreignKey.messageNumber : msg\_no*\]*

Effect

Annotations used to specify properties for a [foreign key dependency](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenforeign_key_dependency_glosry.htm "Glossary Entry") of a [table field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_comps.htm) defined using [foreign\_key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_forkey.htm) in the definition of a DDIC database table using the [Dictionary DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement [DEFINE TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table.htm).

-   In quotation marks, @AbapCatalog.foreignKey.label defines the short text of the foreign key in the original language of the database table.
-   @AbapCatalog.foreignKey.keyType defines the [type of the foreign key fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_forkey.htm). key\_type can be specified as:
    -   #NON\_KEY - [No key fields/candidates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_forkey.htm)
    -   #KEY - [Key fields/candidates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_forkey.htm)
    -   #TEXT\_KEY - [Key fields of a text table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_forkey.htm)
-   @AbapCatalog.foreignKey.screenCheck enables or disables the foreign key dependency for the [input check](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_forkey.htm).
-   @AbapCatalog.foreignKey.messageClass and @AbapCatalog.foreignKey.messageNumber specify the message class msg\_class and message number msg\_no for the [message](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_glosry.htm "Glossary Entry") of the [input check](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_forkey.htm).

Example

See [foreign\_key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_forkey.htm).


### abenddicddl_define_table_forkey.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm) →  [DDIC - Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_define_table.htm) →  [DDIC DDL - DEFINE TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table.htm) →  [DDIC DDL - DEFINE TABLE, field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_comps.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC DDL - DEFINE TABLE, foreign_key, ABENDDICDDL_DEFINE_TABLE_FORKEY, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC DDL - DEFINE TABLE, foreign\_key

Syntax

...  WITH FOREIGN KEY *\[*\[n,m\]*\]* check\_table
       WHERE check\_field1 = dbtab.field1
         *\[*AND check\_field2 = dbtab.field2 ...*\]* ...

Effect

Assigns a [check table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_checktab.htm) to a [table field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_comps.htm) whose data type is defined by a data element in the definition of a DDIC database table using the [Dictionary DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement [DEFINE TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table.htm). Here, check\_table is an existing DDIC database table in the ABAP Dictionary. This statement turns check\_table into a check table and turns the current DDIC database table into a [foreign key table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenforeign_key_table_glosry.htm "Glossary Entry"). The current table field is turned into a [foreign key field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenforeign_key_field_glosry.htm "Glossary Entry") of the [foreign key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_forkey.htm) of the current table.

-   The associated fields of the check table must be assigned to the foreign key fields of the foreign key table after WHERE.
-   \[n,m\] can be used to define the [cardinality](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencardinality_glosry.htm "Glossary Entry") of the [foreign key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_forkey.htm).
    -   The possible values for n are 1 for [1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_forkey.htm) and \[0..1\] for [C](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_forkey.htm).
    -   The possible values for m are 1 for [1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_forkey.htm), \[0..1\] for [C](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_forkey.htm), \[1..\*\] for [N](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_forkey.htm), and \[0..\*\] for [CN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_forkey.htm).

Further properties of the foreign key can be specified using [foreign\_key\_annos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_fkprps.htm).

Hint

The addition WITH FOREIGN KEY can be used, with the same meaning, in the definition of a structure using [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_structure.htm).

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


### abenddicddl_define_table_srprps.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm) →  [DDIC - Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_define_table.htm) →  [DDIC DDL - DEFINE TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table.htm) →  [DDIC DDL - DEFINE TABLE, field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_comps.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC DDL - DEFINE TABLE, geo_annos, ABENDDICDDL_DEFINE_TABLE_SRPRPS, 757%0D%0A%0D%0AE
rror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC DDL - DEFINE TABLE, geo\_annos

Syntax

@AbapCatalog.geo.spatialRefSystem : 'id'

Effect

Specifies a special property for table fields with the [geodata type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengeo_data_type_glosry.htm "Glossary Entry") GEOM\_EWKB.

Currently, the annotation @AbapCatalog.geo.spatialRefSystem is possible. This annotation is used to specify the ID id of a [spatial reference system](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_sptlrf.htm) as an integer value in quotation marks. If the annotation is not specified when the DDIC database table (or DDIC structure) is specified, the default value 0 is used implicitly and the annotation inserted accordingly. The spatial reference system can no longer be modified after activation.

Hints

-   The program ABAP\_DOCU\_SHOW\_SPATIAL\_REF\_SYS shows the spatial reference systems that are available in the current system.
-   Spatial reference systems are not managed by ABAP. A spatial reference system that is available in one system is not necessarily available in a follow-up system.

Example

Annotation @AbapCatalog.geo.spatialRefSystem for a table field LOCATION of a DDIC database table.

...
define table ... {
  ...
  @AbapCatalog.geo.spatialRefSystem : '4326'
  location  : abap.geom\_ewkb;
  ...
}


### abenddicddl_define_table_comps.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm) →  [DDIC - Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_define_table.htm) →  [DDIC DDL - DEFINE TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC DDL - DEFINE TABLE, field, ABENDDICDDL_DEFINE_TABLE_COMPS, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC DDL - DEFINE TABLE, field

Syntax

*\[*[component\_annos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_struct_cmpprps.htm)*\]*
*\[*[foreign\_key\_annos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_fkprps.htm)*\]*
*\[*[geo\_annos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_srprps.htm)*\]*
*\[*KEY*\]* field : *{*data\_element *\[*[foreign\_key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_forkey.htm)*\]*
*\[*[value\_help](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_struct_valuhelp.htm)*\]**}*
              *|*abap. [type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm)*\[*(n)*|*(n,m)*\]*
              *\[*NOT NULL*\]*;

Effect

Defines a single [database field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_techstruc.htm) in the definition of a DDIC database table using the [Dictionary DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement [DEFINE TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table.htm).

-   In front of the field, annotations [component\_annos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_struct_cmpprps.htm) can be used to specify the same optional component properties as in the definition of a structure using [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_structure.htm).
-   [foreign\_key\_annos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_fkprps.htm) can be used to specify the properties of a foreign key dependency defined with [foreign\_key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_forkey.htm).
-   [geo\_annos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_srprps.htm) is used to specify special properties of a component with the [geodata type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengeo_data_type_glosry.htm "Glossary Entry") GEOM\_EWKB.
-   The addition KEY defines the table field as a [key field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_key.htm).
-   field indicates the name of the database field.
-   data\_element or abap.type is used to define the data type of the table field. The same rules apply as in the definition of a [structure component](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_struct_comps.htm), except that only elementary types can be specified here.
-   The addition NOT NULL is used to set the [flag for initial values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_init.htm).
-   The addition [foreign\_key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_forkey.htm) can be used to define a [foreign key dependency](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_forkeyrel.htm) for a table field whose data type is defined using a data element.
-   The addition [value\_help](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_struct_valuhelp.htm) can be used to assign a search help to a table field whose data type is defined using a data element. This is only applicable to table fields used for input fields of dynpros or Web Dynpros (which is not recommended) and the same applies as in the definition of a [structure component](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_struct_comps.htm).

Example

Defines the DDIC database table DEMO\_EXPRESSIONS in the [Dictionary DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") of the [ABAP Development Tools](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry"). The types of all fields are determined directly using built-in data types in the ABAP Dictionary.

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
[DDIC DDL - DEFINE TABLE, foreign\_key\_annos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_fkprps.htm)
[DDIC DDL - DEFINE TABLE, foreign\_key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_forkey.htm)
[DDIC DDL - DEFINE TABLE, geo\_annos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table_srprps.htm)


### abenddicddl_define_table_incl.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm) →  [DDIC - Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_define_table.htm) →  [DDIC DDL - DEFINE TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC DDL - DEFINE TABLE, include, ABENDDICDDL_DEFINE_TABLE_INCL, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC DDL - DEFINE TABLE, include

Syntax

*\[*KEY*\]* *\[*group :*\]* INCLUDE struct *\[*WITH SUFFIX suffix*\]* *\[*NOT NULL*\]*
                  *\[*...
                   [extend](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_struct_comp_ext.htm)
                   ...*\]*;

Effect

Includes an [include structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_include_structure.htm) in the definition of a DDIC database table with the statement [DEFINE TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table.htm) in [Dictionary DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"). The same applies as to [including](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_struct_incl.htm) include structures into structures with the statement [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_structure.htm), except that the include structures must be suitable for DDIC database tables.

Additionally, the additions KEY and NOT NULL can be used:

-   By using KEY all fields of the included structure are flagged as [key fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_key.htm). The include structure must then be inserted between the existing key fields or directly after them. The corresponding attribute of the individual fields of an included structure does not have an effect. Either all fields are included as key fields or none.
-   By using NOT NULL the [flag for initial values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_init.htm) is set for the included structure. In this case, those fields in the include structure for which this attribute is set also keep their attribute, but it is not switched on for fields where the attribute is not set. If the flag for initial values is not set for the included include structure, this attribute is removed for all fields.


### abenddicddl_define_table.htm

  

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
