  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Structures](javascript:call_link\('abenddic_structures.htm'\)) → 

Include Structures

Components of a structure can be defined by including the components of other structures in ABAP Dictionary, such as database tables or views. These included structures are known as include structures (or includes for short). From a technical perspective, the structure in which an include structure is included references the included structure and is modified accordingly whenever changes are made to this structure. An include structure can itself contain include structures, with the maximum nesting depth being nine includes.

When an include structure is included, all components of an existing structure are added to the including structure as a replacement for a component. No substructure is created, which means that the components are inserted as if they were specified individually at this position and they are handled like directly defined components. Regular components and include structures can be combined as required.

When a structure is included as an include structure, it can be assigned a name of a group and a three-character suffix.

-   In ABAP programs, the name of a group is an additional addressing option for data objects declared with reference to the structure. All components of the included structure can be addressed together using this name or individual components can be addressed using the structure component selector (\-) after the name.

-   A suffix is appended to the component name to rename each component and avoid naming conflicts between components. The original name of a component of an include structure included in a structure with a suffix cannot have more than 27 characters.

Group names and suffixes are assigned in the same way as with the additions AS name *\[*RENAMING WITH SUFFIX suffix*\]* of the statement [INCLUDE TYPE](javascript:call_link\('abapinclude_type.htm'\)) in ABAP programs. Unlike in the statement INCLUDE TYPE, an include structure in ABAP Dictionary can have a suffix without a specified name.

The fields of an included include structure are still part of the structure. They can only be edited using the structure and any changes made to the structure are applied to all including structures. The fields of an included include structure can, however, also be transformed to direct fields of the including structure. These fields are then no longer associated with the originally included structure.

The components of an include structure can be assigned [check tables](javascript:call_link\('abenddic_structures_sema.htm'\)) and [search helps](javascript:call_link\('abenddic_structures_sema.htm'\)) in the context of the binding structure. These assignments supplement the components of the bound structure or replace existing assignments.

Notes

-   The potential for naming conflicts between components when including structures makes these actions highly error-prone, particularly in any enhancements made to the included structure. If possible, substructures should be used instead. If this is not an option (for example, in [database tables](javascript:call_link\('abenddic_database_tables.htm'\))), suffixes should be used to avoid naming conflicts.

-   Including structures should not be confused with the adding of components as performed in ABAP Dictionary. Here, the definition of the components is simply copied to a different structure and no binding is persisted. Similarly, an existing include can be resolved to individual component definitions.

-   The name of a group is just an additional addressing option and does not resolve any naming conflicts. In particular, group names in statements like [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\)) or [SELECT INTO CORRESPONDING](javascript:call_link\('abapinto_clause.htm'\)) are ignored. Components renamed with a suffix, on the other hand, really do have this name and are not ignored.

-   Group names cannot be used in the [specified columns](javascript:call_link\('abenopen_sql_columns.htm'\)) of [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry").

-   A [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") (such as a [CDS view](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"), [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), or [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")) cannot be included as an include structure. A [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") of a [CDS view](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") can, however, be included.

Example

The structure DEMO\_WEEK includes the structure DEMO\_DAY five times as an include structure with group names and suffixes. The program DEMO\_INCLUDE\_STRUCTURE shows how its components can be accessed in ABAP.