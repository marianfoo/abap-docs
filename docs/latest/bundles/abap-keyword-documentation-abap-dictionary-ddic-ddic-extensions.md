# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Extensions

Included pages: 9


### abenddic_enhancements.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Extensions%2C%20ABENDDIC_ENHANCEMENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Extensions

ABAP Dictionary offers [customizing includes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencustomizing_include_glosry.htm "Glossary Entry"), [append structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenappend_structure_glosry.htm "Glossary Entry"), and [DDIC append views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_append_view_glosry.htm "Glossary Entry") to extend existing [DDIC structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm), [DDIC database tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm), [DDIC database views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_views.htm), or [DDIC domains](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains.htm) without modifying the original object. Customizing includes indicate points already marked by SAP for extensions, whereas append structures can be appended anywhere.

-   [Customizing includes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_customizing_includes.htm)
-   [Append structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_append_structures.htm)
-   [DDIC append views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_append_views.htm)
-   [Fixed value appends](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_fixed_value_appends.htm)

[Indexes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenindex_glosry.htm "Glossary Entry") of a [DDIC database table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_db_table_glosry.htm "Glossary Entry") can be extended by [extension indexes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenextension_index_glosry.htm "Glossary Entry").

[Search helps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensearch_help_glosry.htm "Glossary Entry") can be extended using [append search helps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenappend_search_help_glosry.htm "Glossary Entry").

[DDIC extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_extension_glosry.htm "Glossary Entry") are connected to [Switch Framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenswitch_framework_glosry.htm "Glossary Entry") whenever they are defined in a [package](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpackage_glosry.htm "Glossary Entry") that is assigned a [switch](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenswitch_glosry.htm "Glossary Entry").

Hint

For [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry"), [CDS entity extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_extend_glosry.htm "Glossary Entry") are an option for extensions that is based on the [CDS DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddl_glosry.htm "Glossary Entry") of [ABAP CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cds_glosry.htm "Glossary Entry").

Continue
[DDIC - Customizing Includes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_customizing_includes.htm)
[DDIC - Append Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_append_structures.htm)
[DDIC - Append Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_append_views.htm)
[DDIC - Fixed Value Appends](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_fixed_value_appends.htm)


### abenddic_customizing_includes.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_enhancements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Customizing%20Includes%2C%20ABENDDIC_CUSTOMIZING_INCLUDES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Customizing Includes

A customizing include is a DDIC structure whose name has the prefix CI\_ for customers and SI\_ for partners and is in the customer namespace. SAP-delivered [DDIC structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) and [DDIC database tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) may contain customizing includes when delivered. These customizing includes in SAP-delivered objects are usually empty. They are not linked with existing structures, they are only intended to reserve names. In customer or partner systems, these includes can be extended according to the [enhancement category](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_enh_cat.htm). This is done by creating the included but empty customizing includes and adding components using customizing transactions. If a customizing include is extended in a transparent DDIC database table, no [adjustment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_adj.htm) takes place. As a result, the order of fields in ABAP Dictionary and on the database might differ.

A customizing include can be included in multiple DDIC database tables or DDIC structures. Its extension is then applied to all DDIC database tables or DDIC structures in which it is included. It is not mandatory to extend an empty customizing include of a DDIC database table or DDIC structure.

Extending an SAP-delivered DDIC structure or DDIC database table using a customizing include does not modify the original object. If a customizing include is used to add fields to a standard DDIC database table or DDIC structure, these fields are inserted automatically into DDIC structures or DDIC database tables delivered by SAP in an upgrade.


### abenddic_append_structures.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_enhancements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Append%20Structures%2C%20ABENDDIC_APPEND_STRUCTURES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Append Structures

An append structure is a structure in ABAP Dictionary appended to another [DDIC structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) or to a [DDIC database table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) which adds its components to this structure or table. In customer systems, append structures can be added to DDIC structures and DDIC database tables delivered by SAP. An append structure is assigned to exactly one table or structure. There can, however, be more than one append structure for a table or structure. The components of append structures must meet the [prerequisites](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_techstruc.htm) for table fields.

The following extensions can be made to a DDIC database table or DDIC structure using an append structure:

-   New components can be inserted (if allowed by the [enhancement category](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_enh_cat.htm))
-   [Foreign keys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenforeign_key_glosry.htm "Glossary Entry") can be added to existing fields of a DDIC database table.
-   [Search helps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensearch_help_glosry.htm "Glossary Entry") can be bound to existing components.

The append structure is a standalone object and changes to components of the append structure as well as transporting the append structure are made only using the append structure. When a DDIC database table or a DDIC structure is activated, all associated append structures are found and their components are appended to the DDIC database table or structure. Any foreign keys or search help bindings added by the append structure are also appended. When an append structure is activated, the assigned DDIC database table or DDIC structure is adjusted to the changes made. Any existing tables are not [adjusted](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_adj.htm), which can put the fields in the dictionary in a different order from the order on the database. When a DDIC structure or DDIC database table with an append structure is copied, the appended fields, foreign keys, and search helps become real elements of the target of the copy.

The following must be noted when using append structures to extend DDIC database tables:

-   Append structures can only be appended to [transparent tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransparent_table_glosry.htm "Glossary Entry").
-   No append structures can be appended to DDIC database tables with fields of the type LCHR or LRAW, since these fields must always be the last field of the table.
-   Any fields appended to a DDIC database table using an append structure can be added to its [secondary indexes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_index.htm). No secondary index can be defined for the append structure itself.
-   A binding of a check table or search help that already exists for a field of the DDIC database table cannot be modified by an append structure.

Extensions of SAP structures or SAP tables using append structures in customer systems do not modify the original object. Append structures created for SAP objects in customer systems are in the customer namespace (or in the namespace of a partner of a special development project) and hence are protected from being overwritten by upgrades. It is advisable to also create the components of append structures with names from the customer namespace to avoid naming conflicts. After an upgrade, the append structures are again appended to tables modified by SAP.

Append structures can be defined as form-based structures in transaction SE11 or as source-code-based structures using [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") in the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"). The following section describes the syntax of the source code-based definition:

-   [Dictionary DDL for Structure Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_extend_type.htm)

Further Information

Rules for extending DDIC structures or DDIC database tables from a [restricted ABAP language version](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_version_glosry.htm "Glossary Entry") by means of developer extensibility are described in section [C0 Contract Rules for DDIC Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_contract_rules_ddic.htm).

Hint

The same structure can be appended to multiple DDIC database tables or structures by including it in the individual append structures as an include structure.

Example

The append structure DEMO\_APPEND\_STRUCTURE extends the structure DEMO\_STRUCTURE.

Continue
[DDIC - Dictionary DDL for Structure Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_extend_type.htm)


### abenddic_extend_type.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_enhancements.htm) →  [DDIC - Append Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_append_structures.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Dictionary%20DDL%20for%20Structure%20Extensions%2C%20ABENDDIC_EXTEND_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

DDIC - Dictionary DDL for Structure Extensions

A DDIC structure or DDIC database table can be given a source-code-based extension known as an append structure in [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"). The source code of an append structure is not saved and transported. Instead, the source code of an existing append structure is generated from the metadata of the associated system tables. When saved, the metadata is derived directly from the append structure and saved to the system tables.

-   [EXTEND TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_extend_type.htm)

Hint

Each property of an append structure can be defined using either EXTEND TYPE or in the transaction SE11.

Continue
[DDIC DDL - EXTEND TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_extend_type.htm)


### abenddicddl_extend_type.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_enhancements.htm) →  [DDIC - Append Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_append_structures.htm) →  [DDIC - Dictionary DDL for Structure Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_extend_type.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20EXTEND%20TYPE%2C%20ABENDDICDDL_EXTEND_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC DDL - EXTEND TYPE

Syntax

[structure\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_props.htm)
EXTEND TYPE struct*|*dbtab WITH append\_struct {
  ...
  [component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comps.htm)
  *\[*...
  [extend](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comp_ext.htm)
  ...*\]*;
  ...
  [include;](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_incl.htm)
  ...
}

Effect

[Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement for defining an ABAP Dictionary [append structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_append_structures.htm) append\_struct in the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry").

-   The statement EXTEND TYPE adds the append structure append\_struct either to an existing structure struct or to a DDIC database table dbtab.
-   The mandatory properties of the append structure must be specified in front of the statement EXTEND TYPE using the same annotations [structure\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_props.htm) as in the definition of a structure.
-   As in the definition of a structure using [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm), the components of the append structure are defined in a semicolon-separated list in curly brackets { }, either as individual components [component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comps.htm) or by including include structures [include](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_incl.htm).
-   As when including structures, an assignment to a search help and a definition of a foreign key dependency can be overwritten using the addition [extend](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comp_ext.htm) in a blank-separated list.

Hints

-   As in the [CDS syntax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_general_syntax_rules.htm), the definition of an ABAP Dictionary append structure can contain comments after // and between /\* ... \*/.
-   A more detailed description of the syntax is available in the ADT documentation [Syntax of ABAP Dictionary Objects](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/fc6cd6f7d02f4546a33feb3f5fc9dd66).

Example

Adds the append structure DEMO\_APPEND\_STRUCTURE to the structure DEMO\_STRUCTURE in the ADT.

@EndUserText.label : 'Demo append structure'
@AbapCatalog.enhancement.category : #EXTENSIBLE\_CHARACTER\_NUMERIC
extend type demo\_structure with demo\_append\_structure {
  comp3 : dats;
  comp4 : tims; }

The source code used to define the structure DEMO\_STRUCTURE is not modified by this extension. In the ADT, however, an icon indicates that the structure is extended using DEMO\_APPEND\_STRUCTURE.


### abenddic_extend_type.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_enhancements.htm) →  [DDIC - Append Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_append_structures.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Dictionary%20DDL%20for%20Structure%20Extensions%2C%20ABENDDIC_EXTEND_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

DDIC - Dictionary DDL for Structure Extensions

A DDIC structure or DDIC database table can be given a source-code-based extension known as an append structure in [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"). The source code of an append structure is not saved and transported. Instead, the source code of an existing append structure is generated from the metadata of the associated system tables. When saved, the metadata is derived directly from the append structure and saved to the system tables.

-   [EXTEND TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_extend_type.htm)

Hint

Each property of an append structure can be defined using either EXTEND TYPE or in the transaction SE11.

Continue
[DDIC DDL - EXTEND TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_extend_type.htm)


### abenddic_append_structures.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_enhancements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Append%20Structures%2C%20ABENDDIC_APPEND_STRUCTURES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Append Structures

An append structure is a structure in ABAP Dictionary appended to another [DDIC structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) or to a [DDIC database table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) which adds its components to this structure or table. In customer systems, append structures can be added to DDIC structures and DDIC database tables delivered by SAP. An append structure is assigned to exactly one table or structure. There can, however, be more than one append structure for a table or structure. The components of append structures must meet the [prerequisites](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_techstruc.htm) for table fields.

The following extensions can be made to a DDIC database table or DDIC structure using an append structure:

-   New components can be inserted (if allowed by the [enhancement category](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_enh_cat.htm))
-   [Foreign keys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenforeign_key_glosry.htm "Glossary Entry") can be added to existing fields of a DDIC database table.
-   [Search helps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensearch_help_glosry.htm "Glossary Entry") can be bound to existing components.

The append structure is a standalone object and changes to components of the append structure as well as transporting the append structure are made only using the append structure. When a DDIC database table or a DDIC structure is activated, all associated append structures are found and their components are appended to the DDIC database table or structure. Any foreign keys or search help bindings added by the append structure are also appended. When an append structure is activated, the assigned DDIC database table or DDIC structure is adjusted to the changes made. Any existing tables are not [adjusted](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_adj.htm), which can put the fields in the dictionary in a different order from the order on the database. When a DDIC structure or DDIC database table with an append structure is copied, the appended fields, foreign keys, and search helps become real elements of the target of the copy.

The following must be noted when using append structures to extend DDIC database tables:

-   Append structures can only be appended to [transparent tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransparent_table_glosry.htm "Glossary Entry").
-   No append structures can be appended to DDIC database tables with fields of the type LCHR or LRAW, since these fields must always be the last field of the table.
-   Any fields appended to a DDIC database table using an append structure can be added to its [secondary indexes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_index.htm). No secondary index can be defined for the append structure itself.
-   A binding of a check table or search help that already exists for a field of the DDIC database table cannot be modified by an append structure.

Extensions of SAP structures or SAP tables using append structures in customer systems do not modify the original object. Append structures created for SAP objects in customer systems are in the customer namespace (or in the namespace of a partner of a special development project) and hence are protected from being overwritten by upgrades. It is advisable to also create the components of append structures with names from the customer namespace to avoid naming conflicts. After an upgrade, the append structures are again appended to tables modified by SAP.

Append structures can be defined as form-based structures in transaction SE11 or as source-code-based structures using [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") in the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"). The following section describes the syntax of the source code-based definition:

-   [Dictionary DDL for Structure Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_extend_type.htm)

Further Information

Rules for extending DDIC structures or DDIC database tables from a [restricted ABAP language version](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_version_glosry.htm "Glossary Entry") by means of developer extensibility are described in section [C0 Contract Rules for DDIC Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_contract_rules_ddic.htm).

Hint

The same structure can be appended to multiple DDIC database tables or structures by including it in the individual append structures as an include structure.

Example

The append structure DEMO\_APPEND\_STRUCTURE extends the structure DEMO\_STRUCTURE.

Continue
[DDIC - Dictionary DDL for Structure Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_extend_type.htm)


### abenddic_append_views.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_enhancements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Append%20Views%2C%20ABENDDIC_APPEND_VIEWS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Append Views

[DDIC database views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_views.htm) delivered by SAP can be extended by partners and customers using views known as DDIC append views, without modifying the original object. The name of a DDIC append view is subject to the same rules as the name of a [DDIC view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_views.htm) and should be located in the customer namespace (or in the namespace of a partner or special development) to protect it against being overwritten by upgrades or new releases.

A DDIC append view can add further fields from one of the basis tables of a DDIC database view to the database view in question. Append views cannot be used to add further basis tables to the view or to modify the join conditions or selection conditions of a DDIC database view. A DDIC append view is assigned to exactly one DDIC database view. More than one DDIC append view can be created for a DDIC database view.

When a DDIC append view is activated, an [append structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenappend_structure_glosry.htm "Glossary Entry") with this name is created in ABAP Dictionary. Its components are the additional view fields of the append view.

If a DDIC database view is activated, all DDIC append views for this view are found and their fields are appended to the DDIC database view. The append structure of the append view is added to the structure of the DDIC database view. If an append view is created or modified, the associated DDIC database view is changed automatically when the append view is activated.

Hints

-   DDIC append views are possible only for DDIC database views and not for any other kind of [DDIC views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_views.htm).
-   In [ABAP CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cds_glosry.htm "Glossary Entry"), [CDS entity extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_extend_glosry.htm "Glossary Entry") are available to extend [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry").

Example

The DDIC append view DEMO\_APPEND\_VIEW is added to the DDIC database view DEMO\_ORIGINAL. The program DEMO\_APPEND\_VIEW uses [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) to access the extended view. It displays the components of the original view and of the append view and the result set.


### abenddic_fixed_value_appends.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_enhancements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Fixed%20Value%20Appends%2C%20ABENDDIC_FIXED_VALUE_APPENDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Fixed Value Appends

[Domains](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains.htm) delivered by SAP can be extended by partners and customers using appends known as fixed value appends, without modifying the original object. The name of a fixed value append is subject to the same rules as the name of a domain and should be located in the customer namespace (or in the namespace of a partner or special development) to protect it against being overwritten by upgrades or new releases.

A fixed value append adds further [fixed values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfixed_value_glosry.htm "Glossary Entry") or intervals to the value range of a domain. A domain can have more than one fixed value append.

When a domain is activated, all fixed value appends for this domain are found and their fixed values and intervals added to the domain. When a fixed value append is created or modified, the associated domain is adjusted to this change automatically when the fixed value append is activated.

Example

The fixed value append DEMO\_FIXED\_VALUE\_APPEND is added to the domain DEMO\_ORIGINAL. The program DEMO\_FIXED\_VALUE\_APPEND reads the fixed values and intervals of the extended domain and displays them. In the table, the column APPVAL indicates which fixed values and intervals come from the fixed value append.
