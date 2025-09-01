  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) → 

DDIC - Tools for Dictionary Objects

[Dictionary objects](javascript:call_link\('abendictionary_object_glosry.htm'\) "Glossary Entry") are maintained using the ABAP Dictionary tool in ABAP Workbench and the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). The ABAP Dictionary tool in ABAP Workbench and the ADT tools each cover parts of the set of dictionary objects. But most objects can be maintained using both methods.

-   [The ABAP Dictionary Tool in ABAP Workbench](#abenddic-tools-1--------tools-in-adt---@ITOC@@ABENDDIC_TOOLS_2)

-   [Form-Based Tools](#abenddic-tools-3--------source-code-based-tools---@ITOC@@ABENDDIC_TOOLS_4)

The ABAP Dictionary Tool in ABAP Workbench

The ABAP Dictionary tool is integrated into the SAP GUI-based [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry") and can be called as a standalone tool using the transaction SE11. In all other ABAP Workbench tools, the associated tool for a dictionary object can be called using forward navigation.

The ABAP Dictionary tool in ABAP Workbench includes the functions required to create and maintain the following dictionary objects:

-   [Data types](javascript:call_link\('abenddic_data_types.htm'\))

-   [DDIC database tables](javascript:call_link\('abenddic_database_tables.htm'\))

-   [DDIC table views](javascript:call_link\('abenddic_table_views.htm'\))

-   [Enhancements](javascript:call_link\('abenddic_enhancements.htm'\))

-   [Replacement objects](javascript:call_link\('abenddic_replacement_objects.htm'\))

-   [Lock objects](javascript:call_link\('abenlock_object_glosry.htm'\) "Glossary Entry")

-   [Search helps](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry")

Dictionary objects are maintained in form-based tools, which means that their attributes are entered on SAP GUI screens and stored as metadata in the associated system tables when saved.

More information about the ABAP Dictionary tool in ABAP Workbench can be found in the ABAP Dictionary documentation in SAP Help Portal.

Hint

The names of the attributes of dictionary objects that can be maintained in the ABAP Dictionary tool of the ABAP Workbench follow the names used in that tool.

Tools in ADT

The [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") provide form-based and source-code-based tools for maintaining dictionary objects.

Form-Based Tools

For the following ABAP Dictionary objects, the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") offer form-based tools that work in a similar way to the ABAP Dictionary tools in ABAP Workbench:

-   [Data elements](javascript:call_link\('abenddic_data_elements.htm'\))

-   [Domains](javascript:call_link\('abenddic_domains.htm'\))

-   [DDIC table types](javascript:call_link\('abenddic_table_types.htm'\))

-   [Technical attributes of database tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\))

-   [DDIC external views](javascript:call_link\('abenddic_external_views.htm'\))

-   [Lock objects](javascript:call_link\('abenlock_object_glosry.htm'\) "Glossary Entry")

A description of these tools can be found under Working with Classic Objects in ABAP Dictionary.

Source-Code-Based Tools

The [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") offer source-code-based editors for the following ABAP Dictionary objects:

-   [DDIC structures](javascript:call_link\('abenddic_structures.htm'\)), [DDIC database tables](javascript:call_link\('abenddic_database_tables.htm'\)), [append structures](javascript:call_link\('abenddic_append_structures.htm'\))

These dictionary objects are edited using the following [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statements:

-   [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\))

-   [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\))

-   [EXTEND TYPE](javascript:call_link\('abenddicddl_extend_type.htm'\))

Here, however, the source code of the dictionary objects is not saved and transported. Instead, the source code of a dictionary object of this type is generated from the metadata of the associated system tables. Conversely, the metadata itself is derived from source code directly and saved to the system tables. Like in ABAP CDS, the source code contains SQL parts that define the data structure and annotations (introduced using @) that define attributes.

-   [Type pools](javascript:call_link\('abenddic_type_groups.htm'\))

Type pools are edited in ABAP Editor in ADT.

-   [Dependency rules](javascript:call_link\('abenddic_dependency_rules.htm'\))

Dependency rules are defined using the following [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement:

-   [DEFINE DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_drul.htm'\))

The source text for dependency rules is saved and transported and a dependency rule is created from the source code.

-   [Dynamic caches](javascript:call_link\('abenddic_dynamic_caches.htm'\))

Dynamic caches are defined using the following [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement:

-   [DEFINE DYNAMIC CACHE](javascript:call_link\('abenddicddl_define_dynamic_cache.htm'\))

The source code for dynamic caches is saved and transported.

Hints

-   The standalone transportable [table-specific technical attributes of DDIC database tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) are maintained in a form-based tool in ADT and not in Dictionary DDL.

-   A description of the Dictionary DDL for structures, DDIC database tables, and append structures can also be found in the ADT documentation Syntax of ABAP Dictionary Objects.

Example

The following source code shows a definition of the DDIC database table SCARR using [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"). The annotations defined the technical and semantic attributes of the table. The structure itself is defined after the statement DEFINE TABLE, with further annotations describing the attributes of database fields.

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