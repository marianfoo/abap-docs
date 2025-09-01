  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Abstract Behavior Definitions](javascript:call_link\('abenbdl_abstract.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Entity%20Behavior%20Definition%2C%20Abstract%20BDEF%2C%20ABENBDL_DEFINE_BEH_ABSTRACT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%2
0for%20improvement:)

RAP - Entity Behavior Definition, Abstract BDEF

Syntax

*{**{* define behavior for AbstractEntity *\[*alias AliasName*\]*
  *\[*[extensible](javascript:call_link\('abenbdl_extensible.htm'\))*\]*
  *\[*with control*\]*
  {
   [entity behavior body](javascript:call_link\('abenbdl_body_projection.htm'\))
  }
*}*
*|* scalar entity AbstractEntity field FieldName *}*
*\[*behavior for ChildEntity1*\]**\[*, behavior for ChildEntity2*\]**\[*, ...
*\]*

Alternatives:

[1\. ... define behavior for](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... scalar entity ...](#!ABAP_ALTERNATIVE_2@2@)

Effect

Defines the behavior for a [RAP abstract behavior definition](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry") in the [RAP BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry"). The abstract behavior definition must be based on a root [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") AbstractEntity and it can define the behavior for one or more of the nodes of the [CDS composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry").

For each node of the CDS composition tree, there are two possibilities how to include them in the behavior definition:

-   A node can be integrated into the hierarchical type as a structured type using the syntax define behavior for. In this case, an [entity behavior body](javascript:call_link\('abencds_entity_body_glosry.htm'\) "Glossary Entry") is mandatory.
-   A node can be integrated into the hierarchical type as a scalar type using the syntax scalar entity.

Both alternatives are described with their additions below.

Example

The following example shows an abstract BDEF with two nodes, one of them being a scalar entity.

abstract;
strict(2);
with hierarchy;
define behavior for DEMO\_CDS\_SCALAR\_ROOT\_1 alias Root
{
mapping for demo\_cds\_scalar\_1 corresponding
  {
    field1 = r\_fd1;
    field2 = r\_fd2;
    field3  = r\_sib;
  }
    association \_item1;
}
scalar entity demo\_cds\_scalar\_child\_1 field i1fd2;

Alternative 1   

... define behavior for ...

Effect

[Entity behavior definition](javascript:call_link\('abencds_entity_bdef_glosry.htm'\) "Glossary Entry") for a CDS abstract entity. It can consist of the following additions and components:

-   alias: an alias name can be specified using the keyword alias. The length of an alias name AliasName is restricted to 30 characters.
-   [extensible](javascript:call_link\('abenbdl_extensible.htm'\)): To enable [BDEF extensions](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry"), a declaration in the abstract BDEF header is required and the keyword extensible must also be declared after the statement define behavior for for each entity that allows BDEF extensions. For details, see the topic [RAP - Extensibility Enabling for Abstract BDEFs](javascript:call_link\('abenbdl_ext_enabling_abstract.htm'\)).
-   with control is an optional addition that adds a [%control](javascript:call_link\('abapderived_types_comp.htm'\)) structure to the corresponding derived type structure. That means that for each component of the hierarchical type, stemming either from an entity field or from an association, an identically named component of the [built-in ABAP type x(1)](javascript:call_link\('abenbuiltin_types_byte.htm'\)) is added as part of the structure %control which is appended at the end. As a result, all or some levels of the hierarchical types contain %control components which may be used by applications to indicate the provisioning of the equally named payload components.
    
    As a prerequisite to use with control, the abstract BDEF must use the addition [with hierarchy](javascript:call_link\('abenbdl_bdef_abstract_header.htm'\)).
    
-   An [entity behavior body](javascript:call_link\('abenbdl_body_abstract.htm'\)) is mandatory and it can define field characteristics, associations, or type mapping. Transactional behavior is not possible in an abstract BDEF.

Hint

[Entity behavior characteristics](javascript:call_link\('abencds_entity_properties_glosry.htm'\) "Glossary Entry") cannot be specified for abstract BDEFs.

Alternative 2   

... scalar entity ...

Effect

An entity in the CDS composition tree can be integrated into the hierarchical type not as a structured type, but as a scalar type, for example, an integer or a character. This is often defined for [leaf entities](javascript:call_link\('abenleaf_entity_glosry.htm'\) "Glossary Entry"). For a scalar type, the following syntax must be used instead of the usual define behavior for syntax:

... scalar entity AbstractEntity field FieldName;

The specified field FieldName of the scalar entity AbstractEntity is taken for the scalar type. All other entity fields are ignored. Suppressing unwanted fields and type mappings are irrelevant.

It is also possible to declare the root node as scalar entity. Then the complete hierarchical type turns into one scalar type. This enables entity-based action parameter types which are [elementary](javascript:call_link\('abenelementary_data_type_glosry.htm'\) "Glossary Entry") or [internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry") with elementary [line types](javascript:call_link\('abenrow_type_glosry.htm'\) "Glossary Entry").

Continue
[RAP - Entity Behavior Body, Abstract BDEF](javascript:call_link\('abenbdl_body_abstract.htm'\))