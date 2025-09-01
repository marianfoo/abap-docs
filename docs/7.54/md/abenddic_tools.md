  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) → 

Tools for Classic ABAP Dictionary

[Classic objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) can be edited using the ABAP Dictionary tool in ABAP Workbench or using the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). The ABAP Dictionary tool in ABAP Workbench covers all classic objects and their attributes. The ADT tools, on the other hand, currently only cover some of these objects.

-   [The ABAP Dictionary Tool in ABAP Workbench](#abenddic-tools-1--------tools-in-adt---@ITOC@@ABENDDIC_TOOLS_2)

-   [Form-Based Tools](#abenddic-tools-3--------source-code-based-tools---@ITOC@@ABENDDIC_TOOLS_4)

The ABAP Dictionary Tool in ABAP Workbench

The ABAP Dictionary tool is integrated into the SAP GUI-based [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry") and can be called as a standalone tool using the transaction SE11. In all other ABAP Workbench tools, the associated tool for a dictionary object can be called using forward navigation.

The ABAP Dictionary tool in ABAP Workbench includes all functions required to create and edit any classic ABAP Dictionary object. Dictionary objects are edited as form-based objects, which means that their attributes are entered on SAP GUI screens and stored as metadata in the associated system tables when saved.

More information about the ABAP Dictionary tool in ABAP Workbench can be found in the ABAP Dictionary documentation in SAP Help Portal.

Note

In the documentation here, the names of the attributes of classic ABAP Dictionary objects follow the names in the ABAP Dictionary tool in ABAP Workbench.

Tools in ADT

The following [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") cover some of the functions of the ABAP Dictionary tool in ABAP Workbench.

Form-Based Tools

For the following classic ABAP Dictionary objects, the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") offer form-based tools that work in a similar way to the ABAP Dictionary tools in ABAP Workbench:

-   [Data elements](javascript:call_link\('abenddic_data_elements.htm'\))

-   [Domains](javascript:call_link\('abenddic_domains.htm'\))

-   [Table types](javascript:call_link\('abenddic_table_types.htm'\))

-   [Standalone technical properties of database tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\))

-   [Lock objects](javascript:call_link\('abenlock_object_glosry.htm'\) "Glossary Entry")

A description of these tools can be found under Working with Classic Objects in ABAP Dictionary.

Source-code-based tools

The [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") offer source-code-based editors for the following class ABAP Dictionary objects:

-   [Structures](javascript:call_link\('abenddic_structures.htm'\))

-   [Database tables](javascript:call_link\('abenddic_database_tables.htm'\))

-   [Append structures](javascript:call_link\('abenddic_append_structures.htm'\))

-   [Type groups](javascript:call_link\('abenddic_type_groups.htm'\))

Type groups are edited in ABAP Editor in ADT. The other classic objects are edited in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"). The source code of the classic ABAP Dictionary objects is not, however, saved and transported. Instead, the source code of a classic object is generated from the metadata of the associated system tables. Conversely, the metadata itself is derived from source code directly and saved to the system tables. Like in ABAP CDS, the source code contains SQL parts that define the data structure and annotations (introduced using @) that define attributes.

A short description of the syntax of the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") for classic objects in ABAP Dictionary can be found under the following:

-   [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\))

-   [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\))

-   [EXTEND TYPE](javascript:call_link\('abenddicddl_extend_type.htm'\))

A more detailed description is available in the ADT documentation Syntax of ABAP Dictionary Objects.

The [standalone table-specific technical properties of database tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) are edited in a form-based tool in ADT and not in Dictionary DDL.

Note

Dictionary DDL also covers the language elements used to define [dependency rules](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry"). Unlike the source code for classic objects, the source code of these elements is saved and transported.

Example

The following source code shows a definition of the database table SCARR using [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"). The annotations defined the technical and semantic attributes of the table. The structure itself is defined after the statement DEFINE TABLE, with further annotations describing the attributes of database fields.

@EndUserText.label : 'Airline'
@AbapCatalog.enhancementCategory : #EXTENSIBLE\_CHARACTER\_NUMERIC
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #ALLOWED
define table scarr {
  @AbapCatalog.foreignKey.keyType : #KEY
  @AbapCatalog.foreignKey.screenCheck : true
  key mandt  : s\_mandt not null
    with foreign key \[0..\*,1\] t000
      where mandt = scarr.mandt;
  key carrid : s\_carr\_id not null;
  carrname   : s\_carrname not null;
  @AbapCatalog.foreignKey.keyType : #NON\_KEY
  @AbapCatalog.foreignKey.screenCheck : true
  currcode   : s\_currcode not null
    with foreign key \[0..\*,1\] scurx
      where currkey = scarr.currcode;
  url        : s\_carrurl not null; }