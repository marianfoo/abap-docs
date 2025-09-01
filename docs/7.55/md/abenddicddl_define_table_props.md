---
title: "Syntax"
description: |
  @AbapCatalog.tableCategory : table_cat @AbapCatalog.dataMaintenance : data_maint @AbapCatalog.deliveryClass : deliv_class @AbapCatalog.activationType : act_type @AbapCatalog.replacementObject : '...' Effect Annotations for specifying table properties in the definition of a DDIC d
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_table_props.htm"
abapFile: "abenddicddl_define_table_props.htm"
keywords: ["do", "if", "try", "class", "data", "abenddicddl", "define", "table", "props"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables.htm) →  [DDIC - Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_define_table.htm) →  [DDIC DDL - DEFINE TABLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_table.htm) → 

DDIC DDL - DEFINE TABLE, table\_annos

Syntax

@AbapCatalog.tableCategory : table\_cat
@AbapCatalog.dataMaintenance : data\_maint
@AbapCatalog.deliveryClass : deliv\_class
*\[*@AbapCatalog.activationType : act\_type*\]*
*\[*@AbapCatalog.replacementObject : '...'*\]*

Effect

Annotations for specifying table properties in the definition of a DDIC database table using the statement [DEFINE TABLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_table.htm) in the [Dictionary DDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendictionary_ddl_glosry.htm "Glossary Entry").

Mandatory Definitions

-   @AbapCatalog.tableCategory defines the [table category](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_tab_type.htm). table\_cat can be specified as:

-   #TRANSPARENT - [transparent table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentransparent_table_glosry.htm "Glossary Entry")

-   #GLOBAL\_TEMPORARY - [Global Temporary Table (GTT)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenglobal_temporary_table_glosry.htm "Glossary Entry")

-   @AbapCatalog.dataMaintenance defines how [the DDIC database table is displayed and maintained](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_maint.htm). data\_maint can be specified as:

-   #NOT\_ALLOWED - [no display/maintenance](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_maint.htm)

-   #LIMITED - [limited display/maintenance](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_maint.htm)

-   #ALLOWED - [display/maintenance allowed](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_maint.htm)

-   @AbapCatalog.deliveryClass defines the [delivery class of the database table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_delivery.htm). deliv\_class can be specified as:

-   #A - [delivery class A](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_delivery.htm)

-   #C - [delivery class C](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_delivery.htm)

-   #L - [delivery class L](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_delivery.htm)

-   #G - [delivery class G](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_delivery.htm)

-   #E - [delivery class E](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_delivery.htm)

-   #S - [delivery class S](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_delivery.htm)

-   #W - [delivery class W](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_delivery.htm)

Optional Definitions

-   @AbapCatalog.tableCategory defines the [activation type of the database table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_act_type.htm). This setting is not relevant for DDIC database tables in application programming. act\_type can be specified as:

-   #NOT\_CLASSIFIED - [activation type 00](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_act_type.htm)

-   #NAMETAB\_GENERATION\_OFFLINE - [activation type 01](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_act_type.htm)

-   #ADAPT\_C\_STRUCTURES - [activation type 02](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_act_type.htm)

-   #INITIAL\_TABLE\_REQUIRED - [activation type 10](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_act_type.htm)

-   @AbapCatalog.replacementObject defines the name of a [replacement object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreplacement_object_glosry.htm "Glossary Entry") in quotation marks.

Example

Annotations in the definition of the DDIC database table DEMO\_SUMDIST in the [Dictionary DDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") of the [ABAP Development Tools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadt_glosry.htm "Glossary Entry"). This table has the CDS view DEMO\_CDS\_SUMDIST as its [replacement object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreplacement_object_glosry.htm "Glossary Entry").

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