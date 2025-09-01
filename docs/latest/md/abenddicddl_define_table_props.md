  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Dictionary DDL for Defining Database Tables](javascript:call_link\('abenddic_define_table.htm'\)) →  [DDIC DDL - DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20TABLE%2C%20table_annos%2C%20ABENDDICDDL_DEFINE_TABLE_PROPS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

DDIC DDL - DEFINE TABLE, table\_annos

Syntax

@AbapCatalog.tableCategory : table\_cat
@AbapCatalog.dataMaintenance : data\_maint
@AbapCatalog.deliveryClass : deliv\_class
*\[*@AbapCatalog.activationType : act\_type*\]*
*\[*@AbapCatalog.replacementObject : '...'*\]*

Effect

Annotations for specifying table properties in the definition of a DDIC database table using the statement [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) in the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry").

Mandatory Definitions

-   @AbapCatalog.tableCategory defines the [table category](javascript:call_link\('abenddic_database_tables_tab_cat.htm'\)). table\_cat can be specified as:
    -   #TRANSPARENT - [transparent table](javascript:call_link\('abentransparent_table_glosry.htm'\) "Glossary Entry")
    -   #GLOBAL\_TEMPORARY - [Global Temporary Table (GTT)](javascript:call_link\('abenglobal_temporary_table_glosry.htm'\) "Glossary Entry")
-   @AbapCatalog.dataMaintenance defines how [the DDIC database table is displayed and maintained](javascript:call_link\('abenddic_database_tables_maint.htm'\)). data\_maint can be specified as:
    -   #NOT\_ALLOWED - [Display/maintenance not allowed](javascript:call_link\('abenddic_database_tables_maint.htm'\))
    -   #RESTRICTED - [Display/maintenance allowed with restrictions](javascript:call_link\('abenddic_database_tables_maint.htm'\))
    -   #ALLOWED - [Display/maintenance allowed](javascript:call_link\('abenddic_database_tables_maint.htm'\))
    -   #DISPLAY - [Only display allowed](javascript:call_link\('abenddic_database_tables_maint.htm'\))
-   @AbapCatalog.deliveryClass defines the [delivery class of the database table](javascript:call_link\('abenddic_database_tables_delivery.htm'\)). deliv\_class can be specified as:
    -   #A - [delivery class A](javascript:call_link\('abenddic_database_tables_delivery.htm'\))
    -   #C - [delivery class C](javascript:call_link\('abenddic_database_tables_delivery.htm'\))
    -   #L - [delivery class L](javascript:call_link\('abenddic_database_tables_delivery.htm'\))
    -   #G - [delivery class G](javascript:call_link\('abenddic_database_tables_delivery.htm'\))
    -   #E - [delivery class E](javascript:call_link\('abenddic_database_tables_delivery.htm'\))
    -   #S - [delivery class S](javascript:call_link\('abenddic_database_tables_delivery.htm'\))
    -   #W - [delivery class W](javascript:call_link\('abenddic_database_tables_delivery.htm'\))

Optional Definitions

-   @AbapCatalog.tableCategory defines the [activation type of the database table](javascript:call_link\('abenddic_database_tables_act_type.htm'\)). This setting is not relevant for DDIC database tables in application programming. act\_type can be specified as:
    -   #NOT\_CLASSIFIED - [activation type 00](javascript:call_link\('abenddic_database_tables_act_type.htm'\))
    -   #NAMETAB\_GENERATION\_OFFLINE - [activation type 01](javascript:call_link\('abenddic_database_tables_act_type.htm'\))
    -   #ADAPT\_C\_STRUCTURES - [activation type 02](javascript:call_link\('abenddic_database_tables_act_type.htm'\))
    -   #INITIAL\_TABLE\_REQUIRED - [activation type 10](javascript:call_link\('abenddic_database_tables_act_type.htm'\))
-   @AbapCatalog.replacementObject defines the name of a [replacement object](javascript:call_link\('abenreplacement_object_glosry.htm'\) "Glossary Entry") in quotation marks.
-   @AbapCatalog.primaryKey.invertedIndividualIndex defines the type of the [primary index](javascript:call_link\('abenprimary_index_glosry.htm'\) "Glossary Entry"):
    -   true - [INVERTED INDIVIDUAL](javascript:call_link\('abenddic_database_tables_index.htm'\)) as of HANA2, SPS 03, [INVERTED HASH](javascript:call_link\('abenddic_database_tables_index.htm'\)) before HANA2, SPS 03
    -   false - [INVERTED VALUE](javascript:call_link\('abenddic_database_tables_index.htm'\)) (default)

Example

Annotations in the definition of the DDIC database table DEMO\_SUMDIST in the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") of the [ABAP development tools for Eclipse](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). This table has the CDS view DEMO\_CDS\_SUMDIST as its [replacement object](javascript:call_link\('abenreplacement_object_glosry.htm'\) "Glossary Entry").

@EndUserText.label : 'Aggregation Table with Replacement Object'
@AbapCatalog.enhancement.category : #NOT\_EXTENSIBLE
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