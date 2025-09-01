  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Extensions](javascript:call_link\('abenddic_enhancements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Append Structures, ABENDDIC_APPEND_STRUCTURES, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Append Structures

An append structure is a structure in ABAP Dictionary appended to another [DDIC structure](javascript:call_link\('abenddic_structures.htm'\)) or [DDIC database table](javascript:call_link\('abenddic_database_tables.htm'\)) and which adds its components to this structure or table. In customer systems, append structures can be added to structures and DDIC database tables delivered by SAP. An append structure is assigned to exactly one table or structure. There can, however, be more than one append structure for a table or structure. The components of append structures must meet the [prerequisites](javascript:call_link\('abenddic_database_tables_techstruc.htm'\)) for table fields.

The following extensions can be made to a DDIC database table or structure using an append structure:

-   New components inserted (if allowed by the [enhancement category](javascript:call_link\('abenddic_structures_enh_cat.htm'\)))
-   [Foreign keys](javascript:call_link\('abenforeign_key_glosry.htm'\) "Glossary Entry") defined for existing fields of a DDIC database table
-   [Search helps](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry") bound to existing components

All extensions are part of the append structure, which means that any changes made to these enhancements are made only using the append structure. The same applies to transports. When a DDIC database table or structure is activated, all associated append structures are found and their components are appended to the DDIC database table or structure. Any foreign keys or search help bindings added using the append structure are also appended. When an append structure is activated, the assigned DDIC database table or DDIC structure is adjusted to the changes made. Any existing tables are not [adjusted](javascript:call_link\('abenddic_database_tables_adj.htm'\)), which can put the fields in the dictionary in a different order from the order on the database. When a DDIC structure or DDIC database table with an append structure is copied, the appended fields, foreign keys, and search helps become real elements of the target of the copy.

The following must be noted when using append structures to enhance DDIC database tables:

-   Append structures can only be appended to [transparent tables](javascript:call_link\('abentransparent_table_glosry.htm'\) "Glossary Entry").
-   No append structures can be appended to DDIC database tables with fields of the type LCHR or LRAW, since these fields must always be the last field of the table.
-   Any fields appended to a DDIC database table using an append structure can be added to its [secondary indexes](javascript:call_link\('abenddic_database_tables_index.htm'\)). No secondary index can be defined for the append structure itself.
-   A binding of a check table or search help that already exists for a field of the DDIC database table cannot be modified using the append structure.

Extensions of SAP structures or SAP tables using append structures in customer systems do not constitute modifications. Append structures created for SAP objects in customer systems are in the customer namespace (or in the namespace of a partner of a special development project) and hence are protected from being overwritten by upgrades. It is advisable to also create the components of append structures of this type with names from the customer namespace to avoid naming conflicts. After an upgrade, the associated append structures are again appended to tables modified by SAP.

Append structures can be defined as form-based structures in transaction SE11 or as source-code-based structures using [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") in the [ABAP Development Tools](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). The following section is a summary of the syntax of the source code-based definition:

-   [Dictionary DDL for Structure Extensions](javascript:call_link\('abenddic_extend_type.htm'\))

Hint

The same structure can be appended to multiple DDIC database tables or structures by including it in the individual append structures as an include structure.

Example

The append structure DEMO\_APPEND\_STRUCTURE extends the structure DEMO\_STRUCTURE.

Continue
[DDIC - Dictionary DDL for Structure Extensions](javascript:call_link\('abenddic_extend_type.htm'\))