  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - CDS Abstract Behavior Definitions](javascript:call_link\('abenbdl_abstract.htm'\)) →  [CDS BDL - Entity Behavior Definition, Abstract BDEF](javascript:call_link\('abenbdl_define_beh_abstract.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Entity Behavior Body, Abstract BDEF, ABENBDL_BODY_ABSTRACT, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - Entity Behavior Body, Abstract BDEF

Syntax

... *{**\[*[field characteristics](javascript:call_link\('abenbdl_field_abstract.htm'\))*\]*;
     *\[*[associations](javascript:call_link\('abenbdl_association_abstract.htm'\))*\]*;
     *\[*[mapping](javascript:call_link\('abenbdl_type_mapping_abstract.htm'\))*\]*;*}*
...

Effect

In the [entity behavior body](javascript:call_link\('abencds_entity_body_glosry.htm'\) "Glossary Entry") of an [abstract BDEF](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry"), the following elements can be specified:

-   [field characteristics](javascript:call_link\('abenbdl_field_abstract.htm'\)): there is only one field characteristic available: field(suppress).
-   [Associations](javascript:call_link\('abenbdl_association_abstract.htm'\)) can be included in the hierarchical BDEF derived type.
-   [Mapping](javascript:call_link\('abenbdl_type_mapping_abstract.htm'\)): data types of the abstract BDEF can be mapped to DDIC partner types. There are two possibilities: type mapping or deep mapping.

Continue
[CDS BDL - Field Characteristics, Abstract BDEF](javascript:call_link\('abenbdl_field_abstract.htm'\))
[CDS BDL - Associations, Abstract BDEF](javascript:call_link\('abenbdl_association_abstract.htm'\))
[CDS BDL - Mapping, Abstract BDEF](javascript:call_link\('abenbdl_type_mapping_abstract.htm'\))