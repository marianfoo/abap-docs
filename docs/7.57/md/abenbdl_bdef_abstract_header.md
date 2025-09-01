  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - CDS Abstract Behavior Definitions](javascript:call_link\('abenbdl_abstract.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - CDS Behavior Definition Header, Abstract BDEF, ABENBDL_BDEF_ABSTRACT_HEADER
, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - CDS Behavior Definition Header, Abstract BDEF

Syntax

[implementation type;](javascript:call_link\('abenbdl_impl_type.htm'\))
*\[*[strict*\[*(version)*\]*;](javascript:call_link\('abenbdl_strict.htm'\))*\]*
*\[*with hierarchy;*\]*
[entity behavior definition](javascript:call_link\('abenbdl_define_beh_abstract.htm'\)) ...

Effect

The [CDS behavior definition header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry") of an [abstract BDEF](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry") can define the attributes listed below. The [implementation type](javascript:call_link\('abencds_bdef_impl_type_glosry.htm'\) "Glossary Entry") is mandatory; strict*\[*(version)*\]* and with hierarchy are strongly recommended for the following reasons: [strict mode](javascript:call_link\('abenrap_strict_mode_glosry.htm'\) "Glossary Entry") ensures that no outdated syntax can be used. When leaving out with hierarchy, the abstract BDEF represents the same derived type as a single [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") and does not offer any additional value.

-   [implementation type](javascript:call_link\('abenbdl_impl_type.htm'\)): an abstract BDEF must start with the keyword abstract.
-   [strict*\[*(version)*\]*](javascript:call_link\('abenbdl_strict.htm'\)): It is strongly recommended that [BDEF strict mode](javascript:call_link\('abenrap_strict_mode_glosry.htm'\) "Glossary Entry") is used.
-   with hierarchy: causes the construction of a new kind of [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") for the entities that are part of the BDEF: Beginning at the [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry"), such a type contains all entity fields, plus a component for every composition. For a composition with cardinality <= 1, this component is a structure; otherwise, the component is a table. The type of the component (or its line type) is defined recursively in the same way, down to [leaf level](javascript:call_link\('abenleaf_entity_glosry.htm'\) "Glossary Entry") in the [CDS composition hierarchy](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry").

The behavior definition header is followed by an [entity behavior definition](javascript:call_link\('abenbdl_define_beh_abstract.htm'\)).

Hint

The addition with hierarchy is a precondition for the following components of an abstract BDEF:

-   [association \_Assoc with hierarchy](javascript:call_link\('abenbdl_association_abstract.htm'\))