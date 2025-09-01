  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) →  [ABAP CDS - DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) → 

ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_field\_definition

These language elements should be used only by specialists with in-depth knowledge of the corresponding environment.

Syntax

...  pfcg\_mapping\_field\_definition ...

Effect

Specifies the PFCG mapping field definition in the statement [DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) used to define a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry"). Currently, a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") containing the following [framework-specific annotation](javascript:call_link\('abencds_annotations_frmwrk.htm'\)) can be specified for the PFCG mapping field definition:

@ObjectModel.dataCategory:#HIERARCHY

CDS entities of this type provide a view of a hierarchy and are known as CDS hierarchy views. The following applies when using a CDS hierarchy view as a PFCG mapping field definition in a PFCG mapping:

-   The input fields of the PFCG mapping must be elements of the CDS hierarchy view.

-   Multiple hierarchies can be defined in a single CDS hierarchy view. Those input fields of a PFCG mapping that specify a unique hierarchy in this case are known as hierarchy key fields. A CDS hierarchy view that defines only one hierarchy does not have any hierarchy key fields. The following applies to any hierarchy key fields:

-   All hierarchy key fields must be used in the PFCG mapping.

-   A hierarchy key field can only be assigned those authorization fields of the authorization object that contain single values. Multiple values or patterns are not allowed (with the exception of full authorization using the value "\*"). If this condition is not met, the PFCG mapping produces the value "false" in the PFCG condition when evaluated.

-   Full authorization can be assigned only when applied to all input fields of the PFCG mapping.

-   If full authorization exists (an authorization with the value "\*" for the assigned authorization field of the authorization object) for all input fields of the PFCG mapping, the PFCG mapping returns the value "true" in the PFCG condition when evaluated. This enables entries to be read that are not part of any hierarchy.

-   When CDS elements are [assigned](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) to the PFCG mapping in a PFCG condition, the first element in the curly brackets specifies the CDS element on which the hierarchy is defined. This element has the annotation @ObjectModel.foreignKey.association in the CDS hierarchy view and in the target of the association it has the annotations @ObjectModel.representativeKey and @ObjectModel.Hierarchy.association.The latter has the CDS hierarchy view as a value. Any further fields can be specified in any order in the curly brackets.

Notes

-   Framework-specific knowledge is required when using a CDS hierarchy view as a PFCG mapping field definition in a PFCG mapping and this knowledge is not part of the DCL documentation in ABAP CDS. More information can be found, for example, in the framework-specific documentation of the annotation @ObjectModel.dataCategory:#HIERARCHY.

-   A field of a CDS hierarchy view is a hierarchy key field when it occurs in the ON condition of the association specified in the annotation @Hierarchy.parentChild.directory and is not defined as a date field in the target of the association using @Semantics.businessDate.

Example

A CDS entity has an element called "Cost Center". The PFCG authorizations of the users are defined on the "Controlling Area" level. These are not elements in the CDS entity, but a hierarchy exists in which the assignment of "Cost Centers” to "Controlling Areas” is defined. This assignment can be complex and can vary over time. To check the authorizations, a CDS hierarchy view that expresses this assignment can be used as a PFCG mapping field definition in a PFCG mapping for a CDS role of the CDS entity