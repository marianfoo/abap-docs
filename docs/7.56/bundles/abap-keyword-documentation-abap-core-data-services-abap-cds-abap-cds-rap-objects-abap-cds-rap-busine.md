# ABAP - Keyword Documentation / ABAP - Core Data Services (ABAP CDS) / ABAP CDS - RAP Objects / ABAP CDS - RAP Business Objects (RAP BO) / ABAP CDS - Behavior Definitions / ABAP CDS - BDL for Behavior Definitions / CDS BDL - CDS abstract behavior definitions

Included pages: 9


### abenbdl_abstract.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) → 

CDS BDL - CDS abstract behavior definitions

[CDS abstract behavior definitions](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry") in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") are created using the behavior definition language [CDS BDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") in [BDL source code](javascript:call_link\('abenbdl_source_code_glosry.htm'\) "Glossary Entry").

A [CDS abstract behavior definition](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry") mainly serves as typing mechanism for deep [action](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") or [function](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry") parameters. Only a limited range of syntax elements is available, such as associations and type mapping. It is not possible to define any transactional behavior in an abstract behavior definition.

Related Information

-   How to use an abstract BDEF as [input parameter](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry") for a [RAP action](javascript:call_link\('abenbdl_action.htm'\)) or a [RAP function](javascript:call_link\('abenbdl_function.htm'\)) in a managed or unmanaged RAP BO is described in topic [CDS BDL - InputParameter](javascript:call_link\('abenbdl_action_input_param.htm'\)).
-   How to use an abstract BDEF as [output parameter](javascript:call_link\('abenoutput_parameter_glosry.htm'\) "Glossary Entry") for a RAP action or a RAP function in a managed or unmanaged RAP BO is described in topic [CDS BDL - OutputParameter](javascript:call_link\('abenbdl_action_output_para.htm'\)).

Example

The following example shows an abstract BDEF with three nodes that is constructed as hierarchy.

CDS source code was not found

The managed BDEF DEMO\_CDS\_DEEP\_PARAMETER uses the abstract BDEF as action parameter in three actions.

CDS source code was not found

The abstract BDEF is used as flat parameter, as structure, or as table, depending on the keywords used.

-   Usage as flat parameter in action a2\_from\_flat
    ![Figure](bdoc_abstract_flat.jpg)
-   Usage as structure in action a2\_from\_deep
    ![Figure](bdoc_abstract_structure.jpg)
-   Usage as table in action a2\_from\_deep\_table
    ![Figure](bdoc_abstract_table.jpg)

Continue
[CDS BDL - CDS behavior definition header, abstract BDEF](javascript:call_link\('abenbdl_bdef_abstract_header.htm'\))
[CDS BDL - entity behavior definition, abstract BDEF](javascript:call_link\('abenbdl_define_beh_abstract.htm'\))


### abenbdl_bdef_abstract_header.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - CDS abstract behavior definitions](javascript:call_link\('abenbdl_abstract.htm'\)) → 

CDS BDL - CDS behavior definition header, abstract BDEF

Syntax

[implementation type;](javascript:call_link\('abenbdl_impl_type.htm'\))
*\[*[strict;](javascript:call_link\('abenbdl_strict.htm'\))*\]*
*\[*with hierarchy;*\]*
[entity behavior definition](javascript:call_link\('abenbdl_define_beh_abstract.htm'\)) ...

Effect

The [CDS behavior definition header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry") of an [abstract BDEF](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry") can define the attributes listed below. The [implementation type](javascript:call_link\('abencds_bdef_impl_type_glosry.htm'\) "Glossary Entry") is mandatory, strict and with hierarchy are strongly recommended for the following reasons: [strict mode](javascript:call_link\('abenrap_strict_mode_glosry.htm'\) "Glossary Entry") ensures that no outdated syntax can be used. When leaving out with hierarchy, the abstract BDEF represents the same derived type as a single [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") and doesn't offer any additional value.

-   [implementation type](javascript:call_link\('abenbdl_impl_type.htm'\)): an abstract BDEF must start with the keyword abstract.
-   [strict](javascript:call_link\('abenbdl_strict.htm'\)): It is strongly recommended to use BDEF strict mode.
-   with hierarchy: causes the construction of a new kind of [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") for the entities that are part of the BDEF: Beginning at the [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry"), such a type contains all entity fields, plus a component for every composition. For a composition with cardinality <= 1, this component is a structure; otherwise, the component is a table. The type of the component (or its line type) is defined recursively in the same way, down to [leaf level](javascript:call_link\('abenleaf_entity_glosry.htm'\) "Glossary Entry") in the [CDS composition hierarchy](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry").

The behavior definition header is followed by an [entity behavior definition](javascript:call_link\('abenbdl_define_beh_abstract.htm'\)).

Hint

The addition with hierarchy is a precondition for the following components of an abstract BDEF:

-   [association \_Assoc with hierarchy](javascript:call_link\('abenbdl_association_abstract.htm'\))


### abenbdl_define_beh_abstract.htm

  

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


### abenbdl_body_abstract.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - CDS abstract behavior definitions](javascript:call_link\('abenbdl_abstract.htm'\)) →  [CDS BDL - entity behavior definition, abstract BDEF](javascript:call_link\('abenbdl_define_beh_abstract.htm'\)) → 

CDS BDL - entity behavior body, abstract BDEF

Syntax

... *{**\[*[field characteristics](javascript:call_link\('abenbdl_field_abstract.htm'\))*\]*;
     *\[*[associations](javascript:call_link\('abenbdl_association_abstract.htm'\))*\]*;
     *\[*[mapping](javascript:call_link\('abenbdl_type_mapping_abstract.htm'\))*\]*;*}*
...

Effect

In the [entity behavior body](javascript:call_link\('abencds_entity_body_glosry.htm'\) "Glossary Entry") of an [abstract BDEF](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry"), the following elements can be specified:

-   [field characteristics](javascript:call_link\('abenbdl_field_abstract.htm'\)): there's only one field characteristic available: field(suppress).
-   [Associations](javascript:call_link\('abenbdl_association_abstract.htm'\)) can be included in the hierarchical BDEF derived type.
-   [Mapping](javascript:call_link\('abenbdl_type_mapping_abstract.htm'\)): data types of the abstract BDEF can be mapped to DDIC partner types. There are two possibilities: type mapping or deep mapping.

Continue
[CDS BDL - field characteristics, abstract BDEF](javascript:call_link\('abenbdl_field_abstract.htm'\))
[CDS BDL - associations, abstract BDEF](javascript:call_link\('abenbdl_association_abstract.htm'\))
[CDS BDL - mapping, abstract BDEF](javascript:call_link\('abenbdl_type_mapping_abstract.htm'\))


### abenbdl_field_abstract.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - CDS abstract behavior definitions](javascript:call_link\('abenbdl_abstract.htm'\)) →  [CDS BDL - entity behavior definition, abstract BDEF](javascript:call_link\('abenbdl_define_beh_abstract.htm'\)) →  [CDS BDL - entity behavior body, abstract BDEF](javascript:call_link\('abenbdl_body_abstract.htm'\)) → 

CDS BDL - field characteristics, abstract BDEF

Syntax

... field(suppress) Field1, Field2, ...;

Effect

In an [abstract BDEF](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry"), there's only one field characteristic available: field(suppress). It can be used to remove a field from all [derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") generated for the BDEF. In particular, the redundancy is avoided in the [TYPE TABLE FOR HIERARCHY](javascript:call_link\('abaptype_table_for.htm'\)) / [TYPE STRUCTURE FOR HIERARCHY](javascript:call_link\('abaptype_structure_for.htm'\)) types.

Commas can be used to classify multiple fields in the same way. Example: field(suppress) Field1, Field2, Field3;

Hint

A typical use case for field(suppress) was to exclude foreign-key fields used in the ON condition of the [to-parent association](javascript:call_link\('abencds_absent_to_parent_assoc.htm'\)) to appear redundantly in the hierarchical type. This was particularly useful when it was still mandatory to define an ON condition in to-parent associations of CDS abstract entities. However, since release 7.56, the ON condition can be left out.

Example

The following abstract BDEF suppresses one field from its derived type.

CDS source code was not found


### abenbdl_association_abstract.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - CDS abstract behavior definitions](javascript:call_link\('abenbdl_abstract.htm'\)) →  [CDS BDL - entity behavior definition, abstract BDEF](javascript:call_link\('abenbdl_define_beh_abstract.htm'\)) →  [CDS BDL - entity behavior body, abstract BDEF](javascript:call_link\('abenbdl_body_abstract.htm'\)) → 

CDS BDL - associations, abstract BDEF

Syntax

... association \_Assoc *\[*with hierarchy*\]*;

Effect

Includes a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") in the hierarchical [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry"). The keyword association is used for associations, [compositions](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry"), and [to-parent associations](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry"). An entity whose child entity is included in the same [abstract BDEF](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry") must specify the respective composition using the keyword association. If no behavior is defined for a subnode, then the respective composition must not be specified.

The optional addition with hierarchy can be used for associations only if [with hierarchy](javascript:call_link\('abenbdl_bdef_abstract_header.htm'\)) is also specified in the BDEF header. It can be used for to-parent associations and for [cross-BO associations](javascript:call_link\('abencds_cross_bo_assoc_glosry.htm'\) "Glossary Entry"). An association with this addition is treated like a composition: the target type is integrated (as structure or table, depending on the cardinality) into the source type. As a result, the association in question is included several times in the type structure. The definable structure thus generalizes from type tree to DAG (directed acyclic graph).

The [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of an association with the addition with hierarchy must be covered by an abstract BDEF with hierarchy. Typically, to-parent associations with hierarchy are used for local sub-structures, while cross-BO associations serve reuse.

[Type mappings](javascript:call_link\('abenbdl_type_mapping_abstract.htm'\)) to other DDIC types continue to be defined in the BDEF containing the respective entity. Thus, if a hierarchical type is defined with cross-BO associations, its mapping to a hierarchical DDIC type spreads out across multiple abstract BDEFs.

Example

The following abstract BDEF defines behavior for four nodes, including intra- and cross-BO associations.

CDS source code was not found


### abenbdl_type_mapping_abstract.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - CDS abstract behavior definitions](javascript:call_link\('abenbdl_abstract.htm'\)) →  [CDS BDL - entity behavior definition, abstract BDEF](javascript:call_link\('abenbdl_define_beh_abstract.htm'\)) →  [CDS BDL - entity behavior body, abstract BDEF](javascript:call_link\('abenbdl_body_abstract.htm'\)) → 

CDS BDL - mapping, abstract BDEF

Syntax Forms

Type mapping

... [mapping for PartnerType](javascript:call_link\('abenbdl_type_mapping.htm'\)) ...

Deep mapping
... deep mapping for NestedDeepDDICType *\[*corresponding*\]*
   {
      EntityComp1 = PartnerComp1
     *\[*...*\]*
     *\[*sub \_Compos1 = Partnersub1*\]**\[*,
      sub \_Compos2 = Partnersub2*\]*
     *\[*...*\]*
    }
...

Alternatives:

[1\. mapping for PartnerType ...](#!ABAP_ALTERNATIVE_1@1@)
[2\. deep mapping for NestedDeepDDICType ...](#!ABAP_ALTERNATIVE_2@2@)

Effect

[RAP type mapping](javascript:call_link\('abenrap_type_mapping_glosry.htm'\) "Glossary Entry") maps data types of the abstract BDEF to DDIC partner types. If the DDIC partner type is a [flat structure](javascript:call_link\('abenddic_structures.htm'\)) and only elementary data types are mapped, flat type mapping can be used. If the DDIC partner type is a [nested or deep structure](javascript:call_link\('abenddic_structures.htm'\)), deep mapping can be used. It allows to define a mapping for nested table components or substructures.

Alternative 1   

mapping for PartnerType ...

Effect

To map elements to flat DDIC structures, type mapping using the syntax mapping for PartnerType can be used. The syntax is the same as for [managed](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") and [unmanaged RAP BOs](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry") and it is described in topic [CDS BDL - type mapping](javascript:call_link\('abenbdl_type_mapping.htm'\)).

Alternative 2   

deep mapping for NestedDeepDDICType ...

Effect

In an abstract BDEF with hierarchy, mappings can be defined between the generated hierarchical derived types and nested or deep DDIC types.

Such a mapping must be introduced with the keyword deep.

The optional addition sub can be used for sub specifications. Child entities with a composition cardinality > 1 can be mapped to nested table components. If the composition cardinality is <= 1, a mapping to a substructure can be defined.

Syntax for sub specification:

sub \_Compos1 = Partnersub1

The left-hand side of a sub equation sub \_Compos1 contains the name of a composition association of the entity. The right-hand side contains the name of a component PartnerComp1 of the nested or deep partner type NestedDeepDDICType. The components that are mapped onto each other must match, both must be either tables or structures. To cover the full hierarchical derived type, such a mapping must be defined for every entity in the abstract composition hierarchy and its corresponding partner type, with sub specifications for child entities at each level.

Example

The following abstract BDEF defines the behavior for three nodes of a CDS composition tree. For each entity, a mapping to a partner type is defined.

CDS source code was not found


### abenbdl_body_abstract.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - CDS abstract behavior definitions](javascript:call_link\('abenbdl_abstract.htm'\)) →  [CDS BDL - entity behavior definition, abstract BDEF](javascript:call_link\('abenbdl_define_beh_abstract.htm'\)) → 

CDS BDL - entity behavior body, abstract BDEF

Syntax

... *{**\[*[field characteristics](javascript:call_link\('abenbdl_field_abstract.htm'\))*\]*;
     *\[*[associations](javascript:call_link\('abenbdl_association_abstract.htm'\))*\]*;
     *\[*[mapping](javascript:call_link\('abenbdl_type_mapping_abstract.htm'\))*\]*;*}*
...

Effect

In the [entity behavior body](javascript:call_link\('abencds_entity_body_glosry.htm'\) "Glossary Entry") of an [abstract BDEF](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry"), the following elements can be specified:

-   [field characteristics](javascript:call_link\('abenbdl_field_abstract.htm'\)): there's only one field characteristic available: field(suppress).
-   [Associations](javascript:call_link\('abenbdl_association_abstract.htm'\)) can be included in the hierarchical BDEF derived type.
-   [Mapping](javascript:call_link\('abenbdl_type_mapping_abstract.htm'\)): data types of the abstract BDEF can be mapped to DDIC partner types. There are two possibilities: type mapping or deep mapping.

Continue
[CDS BDL - field characteristics, abstract BDEF](javascript:call_link\('abenbdl_field_abstract.htm'\))
[CDS BDL - associations, abstract BDEF](javascript:call_link\('abenbdl_association_abstract.htm'\))
[CDS BDL - mapping, abstract BDEF](javascript:call_link\('abenbdl_type_mapping_abstract.htm'\))


### abenbdl_define_beh_abstract.htm

  

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
