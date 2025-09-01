  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - CDS Abstract Behavior Definitions](javascript:call_link\('abenbdl_abstract.htm'\)) →  [CDS BDL - Entity Behavior Definition, Abstract BDEF](javascript:call_link\('abenbdl_define_beh_abstract.htm'\)) →  [CDS BDL - Entity Behavior Body, Abstract BDEF](javascript:call_link\('abenbdl_body_abstract.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Associations, Abstract BDEF, ABENBDL_ASSOCIATION_ABSTRACT, 757%0D%0A%0D%0AE
rror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - Associations, Abstract BDEF

Syntax

... association \_Assoc *\[*with hierarchy*\]*;

Effect

Includes a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") in the hierarchical [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry"). The keyword association is used for associations, [compositions](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry"), and [to-parent associations](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry"). An entity whose child entity is included in the same [abstract BDEF](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry") must specify the respective composition using the keyword association. If no behavior is defined for a subnode, then the respective composition must not be specified.

The optional addition with hierarchy can be used for associations only if [with hierarchy](javascript:call_link\('abenbdl_bdef_abstract_header.htm'\)) is also specified in the BDEF header. It can be used for to-parent associations and for [cross-BO associations](javascript:call_link\('abencds_cross_bo_assoc_glosry.htm'\) "Glossary Entry"). An association with this addition is handled like a composition: the target type is integrated (as structure or table, depending on the cardinality) into the source type. As a result, the association in question is included several times in the type structure. The definable structure thus generalizes from type tree to DAG (directed acyclic graph).

The [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of an association with the addition with hierarchy must be covered by an abstract BDEF with hierarchy. Typically, to-parent associations with hierarchy are used for local sub-structures, while cross-BO associations serve reuse.

[Type mappings](javascript:call_link\('abenbdl_type_mapping_abstract.htm'\)) to other DDIC types continue to be defined in the BDEF containing the respective entity. Thus, if a hierarchical type is defined with cross-BO associations, its mapping to a hierarchical DDIC type spreads out across multiple abstract BDEFs.

Example

The following abstract BDEF defines behavior for four nodes, including intra- and cross-BO associations.

abstract;
strict(2);
with hierarchy;
define behavior for DEMO\_CDS\_SCALAR\_ROOT alias Root
with control
{
  association \_sibling;
  association \_item1;
  // key field, unwanted in dTypes
  field ( suppress ) key\_field;
  deep mapping for demo\_cds\_scalar\_1 corresponding
  {
    field1 = r\_fd1;
    field2 = r\_fd2;
    field3 = r\_sib;
    sub \_Item1 = sub\_1;
  }
}
define behavior for DEMO\_CDS\_SCALAR\_CHILD alias Child
with control
{
  // foreign key field for parent, unwanted in dTypes
  field ( suppress ) key\_field, i1pfk;
  // hierarchy-enabled \[\*\]-assoc to foreign entity
  association \_i1\_r2 with hierarchy;
  association \_sub1;
  association \_sub3;
  deep mapping for DEMO\_CDS\_SCALAR\_3 corresponding
  {
    i1fd1 = i1\_fd1;
    i1fd2 = i1\_fd2;
    sub \_sub1 = sub\_1;
    sub \_sub3 = sub\_3;  // scalar (table)
    sub \_i1\_r2 = root2;  // cross-BO assoc \[\*\] "with hierarchy"
  }
}
define behavior for DEMO\_CDS\_SCALAR\_GRANDCHILD\_1 alias Grandchild1
with control
{
  field ( suppress ) s1key, s1pfk, s1rfk;
  mapping for DEMO\_CDS\_SCALAR\_5 corresponding
  {
    s1fd1 = s1\_fd1;
    s1fd2 = s1\_fd2;
  }
}
scalar entity DEMO\_CDS\_SCALAR\_GRANDCHILD\_2 field s3val;