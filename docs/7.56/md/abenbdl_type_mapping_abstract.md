  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [CDS BDL - CDS abstract behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_abstract.htm) →  [CDS BDL - entity behavior definition, abstract BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh_abstract.htm) →  [CDS BDL - entity behavior body, abstract BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_body_abstract.htm) → 

CDS BDL - mapping, abstract BDEF

Syntax Forms

Type mapping

... [mapping for PartnerType](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_type_mapping.htm) ...

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

[RAP type mapping](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_type_mapping_glosry.htm "Glossary Entry") maps data types of the abstract BDEF to DDIC partner types. If the DDIC partner type is a [flat structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_structures.htm) and only elementary data types are mapped, flat type mapping can be used. If the DDIC partner type is a [nested or deep structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_structures.htm), deep mapping can be used. It allows to define a mapping for nested table components or substructures.

Alternative 1   

mapping for PartnerType ...

Effect

To map elements to flat DDIC structures, type mapping using the syntax mapping for PartnerType can be used. The syntax is the same as for [managed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry") and [unmanaged RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry") and it is described in topic [CDS BDL - type mapping](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_type_mapping.htm).

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