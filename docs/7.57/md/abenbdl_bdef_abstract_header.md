  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) →  [CDS BDL - CDS Abstract Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_abstract.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - CDS Behavior Definition Header, Abstract BDEF, ABENBDL_BDEF_ABSTRACT_HEADER
, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - CDS Behavior Definition Header, Abstract BDEF

Syntax

[implementation type;](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_impl_type.htm)
*\[*[strict*\[*(version)*\]*;](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_strict.htm)*\]*
*\[*with hierarchy;*\]*
[entity behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_define_beh_abstract.htm) ...

Effect

The [CDS behavior definition header](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef_header_glosry.htm "Glossary Entry") of an [abstract BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_abstract_bdef_glosry.htm "Glossary Entry") can define the attributes listed below. The [implementation type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef_impl_type_glosry.htm "Glossary Entry") is mandatory; strict*\[*(version)*\]* and with hierarchy are strongly recommended for the following reasons: [strict mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_strict_mode_glosry.htm "Glossary Entry") ensures that no outdated syntax can be used. When leaving out with hierarchy, the abstract BDEF represents the same derived type as a single [CDS abstract entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") and does not offer any additional value.

-   [implementation type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_impl_type.htm): an abstract BDEF must start with the keyword abstract.
-   [strict*\[*(version)*\]*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_strict.htm): It is strongly recommended that [BDEF strict mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_strict_mode_glosry.htm "Glossary Entry") is used.
-   with hierarchy: causes the construction of a new kind of [BDEF derived type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") for the entities that are part of the BDEF: Beginning at the [root entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenroot_entity_glosry.htm "Glossary Entry"), such a type contains all entity fields, plus a component for every composition. For a composition with cardinality <= 1, this component is a structure; otherwise, the component is a table. The type of the component (or its line type) is defined recursively in the same way, down to [leaf level](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleaf_entity_glosry.htm "Glossary Entry") in the [CDS composition hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_composition_tree_glosry.htm "Glossary Entry").

The behavior definition header is followed by an [entity behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_define_beh_abstract.htm).

Hint

The addition with hierarchy is a precondition for the following components of an abstract BDEF:

-   [association \_Assoc with hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_association_abstract.htm)