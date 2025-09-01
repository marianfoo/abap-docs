  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Abstract Behavior Definitions](javascript:call_link\('abenbdl_abstract.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Behavior%20Definition%20Header%2C%20Abstract%20BDEF%2C%20ABENBDL_BDEF_ABSTRACT_HEADER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

RAP - Behavior Definition Header, Abstract BDEF

Syntax

[implementation type;](javascript:call_link\('abenbdl_impl_type.htm'\))
*\[*[strict*\[*(version)*\]*;](javascript:call_link\('abenbdl_strict.htm'\))*\]*
*\[*[extensible;](javascript:call_link\('abenbdl_extensible.htm'\))*\]*
*\[*with hierarchy;*\]*
[entity behavior definition](javascript:call_link\('abenbdl_define_beh_abstract.htm'\)) ...

Effect

The [RAP behavior definition header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry") of an [abstract BDEF](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry") can define the attributes listed below. The [implementation type](javascript:call_link\('abencds_bdef_impl_type_glosry.htm'\) "Glossary Entry") is mandatory; strict*\[*(version)*\]* and with hierarchy are strongly recommended for the following reasons: [strict mode](javascript:call_link\('abenrap_strict_mode_glosry.htm'\) "Glossary Entry") ensures that no outdated syntax can be used. When leaving out with hierarchy, the abstract BDEF represents the same derived type as a single [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") and does not offer any additional value.

-   [implementation type](javascript:call_link\('abenbdl_impl_type.htm'\)): an abstract BDEF must start with the keyword abstract.
-   [strict*\[*(version)*\]*](javascript:call_link\('abenbdl_strict.htm'\)): It is strongly recommended that [BDEF strict mode](javascript:call_link\('abenrap_strict_mode_glosry.htm'\) "Glossary Entry") is used.
-   [extensible](javascript:call_link\('abenbdl_extensible.htm'\)): If specified, [BDEF extensions](javascript:call_link\('abenbdl_extension.htm'\)) are allowed. As a prerequisite, [BDEF strict mode](javascript:call_link\('abenbdl_strict.htm'\)) must be switched on. In abstract BDEFs, only the keyword extensible is available, without the additions described in the topic [RAP - extensible](javascript:call_link\('abenbdl_extensible.htm'\)).
-   with hierarchy: causes the construction of a new kind of [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") for the entities that are part of the BDEF: Beginning at the [RAP BO root entity](javascript:call_link\('abenrap_bo_root_entity_glosry.htm'\) "Glossary Entry"), such a type contains all entity fields, plus a component for every [CDS composition](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry"). For a composition with cardinality <= 1, this component is a structure; otherwise, the component is a table. The type of the component (or its line type) is defined recursively in the same way, down to [leaf level](javascript:call_link\('abenleaf_entity_glosry.htm'\) "Glossary Entry") in the [CDS composition hierarchy](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry").

The behavior definition header is followed by an [entity behavior definition](javascript:call_link\('abenbdl_define_beh_abstract.htm'\)).

Hint

The addition with hierarchy is a precondition for the following components of an abstract BDEF:

-   [with control](abenbdl_define_beh_abstract.htm#!ABAP_ALTERNATIVE_1@1@)
-   [deep mapping](abenbdl_type_mapping_abstract.htm#!ABAP_ALTERNATIVE_2@2@)
-   [scalar entity](abenbdl_define_beh_abstract.htm#!ABAP_ALTERNATIVE_2@2@)
-   [association \_Assoc with hierarchy](javascript:call_link\('abenbdl_association_abstract.htm'\))