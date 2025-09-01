---
title: "RAP - Mapping, Abstract BDEF"
description: |
  Syntax Forms Type Mapping ... mapping for PartnerType(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_type_mapping.htm) ... Deep Mapping ... deep mapping for NestedDeepDDICType corresponding  extensible(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_type_mapping_abstract.htm"
abapFile: "abenbdl_type_mapping_abstract.htm"
keywords: ["do", "if", "try", "data", "types", "abenbdl", "type", "mapping", "abstract"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - Abstract Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_abstract.htm) →  [RAP - Entity Behavior Definition, Abstract BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh_abstract.htm) →  [RAP - Entity Behavior Body, Abstract BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_body_abstract.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Mapping%2C%20Abstract%20BDEF%2C%20ABENBDL_TYPE_MAPPING_ABSTRACT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Mapping, Abstract BDEF

Syntax Forms

Type Mapping

... [mapping for PartnerType](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_type_mapping.htm) ...

Deep Mapping

... deep mapping for NestedDeepDDICType *\[*corresponding *\[* [extensible](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensible.htm)*\]**\]*
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

[RAP type mapping](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_type_mapping_glosry.htm "Glossary Entry") maps data types of the abstract BDEF to DDIC partner types. If the DDIC partner type is a [flat structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_structures.htm) and only elementary data types are mapped, flat type mapping can be used. If the DDIC partner type is a [nested or deep structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_structures.htm), deep mapping can be used. It defines a mapping for nested table components or substructures.

Alternative 1   

mapping for PartnerType ...

Effect

To map elements to flat DDIC structures, type mapping using the syntax mapping for PartnerType can be used. The syntax is the same as for [managed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry") and [unmanaged RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry") and it is described in topic [RAP BDL - type mapping](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_type_mapping.htm).

Alternative 2   

deep mapping for NestedDeepDDICType ...

Effect

In an abstract BDEF with hierarchy, mappings can be defined between the generated hierarchical derived types and nested or deep DDIC types. These mappings must be introduced with the keyword deep.

The optional addition sub can be used for sub specifications. Child entities with a composition cardinality > 1 can be mapped to nested table components. If the composition cardinality is <= 1, a mapping to a substructure can be defined.

Syntax for sub specification:

sub \_Compos1 = Partnersub1

The left-hand side of a sub equation sub \_Compos1 contains the name of a composition association of the entity. The right-hand side contains the name of a component PartnerComp1 of the nested or deep partner type NestedDeepDDICType. The components that are mapped onto each other must match, both must be either tables or structures. To cover the full hierarchical derived type, such a mapping must be defined for every entity in the abstract composition hierarchy and its corresponding partner type, with sub specifications for child entities at each level.

The optional addition extensible enables [BDEF extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_extension_glosry.htm "Glossary Entry") for the type mapping in question. That means that [RAP BO consumers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") are allowed to add extension fields to that particular type mapping. extensible can only be used in combination with corresponding, so that components with the same name are automatically mapped to each other.

Example: deep mapping for NestedDeepDDICType corresponding extensible;.

For details on extensibility enabling, see topic [RAP - Extensibility Enabling for Abstract BDEFs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_ext_enabling_abstract.htm).

Example

The following abstract BDEF defines the behavior for three nodes of a CDS composition tree. For each entity, a mapping to a partner type is defined.

abstract;
strict(2);
with hierarchy;
define behavior for DEMO\_CDS\_ABSTRACT\_ROOT alias Root
{
  field ( suppress ) Dummy;
  deep mapping for DEMO\_CDS\_ABSTRACT\_STRUC
  {
    char10 = char\_10;
    Integer4 = integer\_4;
    sub \_itemStructure = struktur;
    sub \_itemTable = tabelle;
  }
  association \_itemTable;
  association \_itemStructure;
}
define behavior for DEMO\_CDS\_ABSTRACT\_ITEMSTRUCT alias ItemStructure
{
  field ( suppress ) Dummy, ToRoot;
  deep mapping for DEMO\_ABSTRACT\_ITEMSTRUCT
  {
    Char10 = char\_10;
    Integer4 = integer\_4;
  }
  association \_parent;
}
define behavior for DEMO\_CDS\_ABSTRACT\_ITEMTABLE alias ItemTable
{
  field ( suppress ) Dummy, ToRoot;
  deep mapping for DEMO\_ABSTRACT\_ITEMTABLE corresponding
  {
    Char10 = char\_10;
    Integer4 = integer\_4;
  }
  association \_parent;
}