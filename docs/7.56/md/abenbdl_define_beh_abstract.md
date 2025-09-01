  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - CDS abstract behavior definitions](javascript:call_link\('abenbdl_abstract.htm'\)) → 

CDS BDL - entity behavior definition, abstract BDEF

Syntax

*{**{* define behavior for AbstractEntity *\[*alias AliasName*\]* *\[*with control*\]*
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

Defines the behavior for a [CDS abstract behavior definition](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry") in the [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry"). The abstract behavior definition must be based on a root [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") AbstractEntity and it can define the behavior for one or more of the nodes of the [CDS composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry").

For each node of the CDS composition tree, there are two possibilities how to include them in the behavior definition:

-   A node can be integrated into the hierarchical type as a structured type using the syntax define behavior for. In this case, an [entity behavior body](javascript:call_link\('abencds_entity_body_glosry.htm'\) "Glossary Entry") is mandatory.
-   A node can be integrated into the hierarchical type as a scalar type using the syntax scalar entity.

Both alternatives are described with their additions below.

Example

The following example shows an abstract BDEF with two nodes, one of them being a scalar entity.

CDS source code was not found

Alternative 1   

... define behavior for ...

Effect

[Entity behavior definition](javascript:call_link\('abencds_entity_bdef_glosry.htm'\) "Glossary Entry") for a CDS abstract entity. It can consist of the following additions and components:

-   alias: an alias name can be specified using the keyword alias. The length of an alias name AliasName is restricted to 30 characters.
-   with control is an optional addition that adds a [%control](javascript:call_link\('abapderived_types_comp.htm'\)) structure to the corresponding derived type structure. That means that for each component of the hierarchical type, stemming either from an entity field or from an association, an identically named component of the [built-in ABAP type x(1)](javascript:call_link\('abenbuiltin_types_byte.htm'\)) is added as part of the structure %control which is appended at the end. As a result, all or some levels of the hierarchical types contain %control components which may be used by applications to indicate the provisioning of the equally named payload components.
    
    As a prerequisite to use with control, the abstract BDEF must use the addition [with hierarchy](javascript:call_link\('abenbdl_bdef_abstract_header.htm'\)).
    
-   An [entity behavior body](javascript:call_link\('abenbdl_body_abstract.htm'\)) is mandatory and it can define field characteristics, associations, or type mapping. Transactional behavior is not possible in an abstract BDEF.

Hint

[Entity behavior characteristics](javascript:call_link\('abencds_entity_properties_glosry.htm'\) "Glossary Entry") can't be specified for abstract BDEFs.

Alternative 2   

... scalar entity ...

Effect

An entity in the CDS composition tree can be integrated into the hierarchical type not as a structured type, but as a scalar type, for example, an integer or a character. This is often defined for [leaf entities](javascript:call_link\('abenleaf_entity_glosry.htm'\) "Glossary Entry"). For a scalar type, the following syntax must be used instead of the usual define behavior for syntax:

... scalar entity AbstractEntity field FieldName;

The specified field FieldName of the scalar entity AbstractEntity is taken for the scalar type. All other entity fields are ignored. Suppressing unwanted fields and type mappings are irrelevant.

It is also possible to declare the root node as scalar entity. Then the complete hierarchical type turns into one scalar type. This enables entity-based action parameter types which are [elementary](javascript:call_link\('abenelementary_data_type_glosry.htm'\) "Glossary Entry") or [internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry") with elementary [line types](javascript:call_link\('abenrow_type_glosry.htm'\) "Glossary Entry").

As a prerequisite to use with control, the abstract BDEF must use the addition [with hierarchy](javascript:call_link\('abenbdl_bdef_abstract_header.htm'\)).

Continue
[CDS BDL - entity behavior body, abstract BDEF](javascript:call_link\('abenbdl_body_abstract.htm'\))