# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ACCESSPOLICY

Included pages: 6


### abencds_f1_define_accesspolicy.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) → 

ABAP CDS - DEFINE ACCESSPOLICY

Syntax

*\[*[@access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\))*\]*
*\[*DEFINE*\]* ACCESSPOLICY access\_policy {
  *\[* [pfcg\_mapping\_definition](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))*\]* }

Effect

Defines a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") access\_policy in the [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") to be used as a framework for further definitions.

Currently, an access policy can contain precisely one definition of a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") with the statement [DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)). This definition must have the same name as the access policy.

DEFINE ACCESSPOLICY can be used to specify the optional annotation [@access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\)) in front of the actual definition of the access policy.

Notes

-   Separate [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") must be created for each CDS access policy.

-   The [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") of a CDS access policy must have the same name as this policy.

Continue
[ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\))
[ABAP CDS - DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))


### abencds_f1_dcl_ap_annotations.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as an access policy annotation in the definition of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") in front of the statement [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The character @ must be placed directly in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#abencds-f1-dcl-ap-annotations-1---the-first-column-displays-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-displays-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-value-set-implicitly-for-the-annotation-value-if-the-annotation-is-not-used-explicitly--the-fifth-column-displays-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---endusertext-annotations--translatable-texts-of-the-cds-role---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--endusertext-label--translatable-short-text-of-the-cds-access-policy--character-string-with-maximum-60-characters----------note--abap-annotations-introduced-using-endusertext-are-used-to-define-translatable-semantic-texts-for-a--cds-object--javascript-call-link---abencds-object-glosry-htm-----glossary-entry----the-value-of-an-annotation-like-this-is-saved-in-special-tables-that-have-a-language-key-and-that-are-translatable--the-value-specified-in-the-source-code-should-consist-of-text-in-the-original-language-of-the-cds-source-code-and-is-translated-into-the-required-languages--------abencds-f1-define-pfcg-mapping-htm-------------as-abap-release-753---copyright-2019-sap-ag--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---access-control--javascript-call-link---abencds-authorizations-htm---------abap-cds---dcl-statements--javascript-call-link---abencds-f1-dcl-syntax-htm---------abap-cds---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm---------abap-cds---define-pfcg--mapping--syntax-------pfcg--mapping--annot--javascript-call-link---abencds-f1-dcl-pm-annotations-htm-------------define-----pfcg--mapping-pfcg--mapping---between--pfcg--mapping--field--definition--javascript-call-link---abencds-f1-dcl-pm-mapping-spcl-htm---------and-auth--object-------using-pfcg--mapping--value--definition-----input1---auth--field1----------input2---auth--field2-------------effect--defines-a--pfcg-mapping--javascript-call-link---abencds-pfcg-mapping-glosry-htm-----glossary-entry---pfcg--mapping-as-part-of-a--cds-access-policy--javascript-call-link---abencds-access-policy-glosry-htm-----glossary-entry---defined-using--define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm------the-name-of-the-pfcg-mapping-must-match-the-name-of-the-cds-access-policy---the-definition-of-a-pcfg-mapping-contains-the-following-------a-pfcg-mapping-definition--pfcg--mapping--field--definition--javascript-call-link---abencds-f1-dcl-pm-mapping-spcl-htm-----specified-after-the-keyword-between-to-define-the-fields-used-in-the-mapping--this-definition-specifies-the-output-fields-of-the-mapping--currently-only-a-special-cds-entity-can-be-specified-here-------an--authorization-object--javascript-call-link---abenauthorization-object-glosry-htm-----glossary-entry---auth--object-specified-after-the-keyword-and--the-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-precisely-those--pfcg-conditions--javascript-call-link---abencds-f1-cond-pfcg-htm-----in-which-this-authorization-object-is-specified-after-aspect-pfcg--auth-------a-pfcg-mapping-value-definition-pfcg--mapping--value--definition-specified-after-the-keyword-using-that-creates-the-relationship-between-the---input-fields-and-output-fields-defined-using-pfcg--mapping--field--definition--this-is-a-suitable-type-of-cds-entity-------a-comma-separated-unordered-list-in-curly-brackets-that-associates-the-input-fields-input-of-the-mapping-with-authorization-fields-auth--field-of-the-authorization-object-auth--object---a-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-a--pfcg--javascript-call-link---abencds-f1-cond-pfcg-htm-----condition-of-the-same-authorization-object-and-is-transformed-to-specific-access-conditions-when-the-condition-is-evaluated---note--the-actual-output-fields-of-a-pfcg-mapping-cannot-be-viewed-directly-in-the-definition-of-the-mapping-or-in-any-cds-role-that-uses-the-mapping--they-are-defined-in-pfcg--mapping--field--definition-and-are-mapped-to-input-fields-pfcg--mapping--value--definition--which-are-themselves-associated-with-authorization-fields---example--the-following-abstract-example-shows-the-definition-of-a-pfcg-mapping-mapping-based-on-a-pfcg-mapping-field-definition-mapping--field--definition-and-a-pfcg-mapping-value-definition-mapping--field--definition--the-pfcg-mapping-value-definition-has-the-input-fields-in--1-and-in--2-used-as-the-left-sides-of-the-comma-separated-list-in-the-definition-of-the-pfcg-mapping--plus-the-output-field-out--which-is-not-visible-in-the-pfcg-mapping---define-pfcg--mapping-mapping---between-----mapping--field--definition-------and-auth---------using-mapping--value--definition-----in--1---f2------in--2---f3----continue--abap-cds---define-pfcg--mapping--pfcg--mapping--annot--javascript-call-link---abencds-f1-dcl-pm-annotations-htm------abap-cds---define-pfcg--mapping--pfcg--mapping--field--definition--javascript-call-link---abencds-f1-dcl-pm-mapping-spcl-htm-----------abencds-f1-dcl-pm-annotations-htm-------------as-abap-release-753---copyright-2019-sap-ag--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---access-control--javascript-call-link---abencds-authorizations-htm---------abap-cds---dcl-statements--javascript-call-link---abencds-f1-dcl-syntax-htm---------abap-cds---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm---------abap-cds---define-pfcg--mapping--javascript-call-link---abencds-f1-define-pfcg-mapping-htm---------abap-cds---define-pfcg--mapping--pfcg--mapping--annot--syntax------[annotation](javascript:call_link\('abencds_annotations.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a PFCG mapping annotation in front of the statement [PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) in the definition of a [CDS PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry"). The character @ must be placed in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#abencds-f1-dcl-pm-annotations-1---the-first-column-displays-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-displays-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-value-set-implicitly-for-the-annotation-value-if-the-annotation-is-not-used-explicitly--the-fifth-column-displays-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---endusertext-annotations--translatable-texts-of-the-cds-role---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--endusertext-label--translatable-short-text-of-the-pfcg-mapping--character-string-with-maximum-60-characters----------note--abap-annotations-introduced-using-endusertext-are-used-to-define-translatable-semantic-texts-for-a--cds-object--javascript-call-link---abencds-object-glosry-htm-----glossary-entry----the-value-of-an-annotation-like-this-is-saved-in-special-tables-that-have-a-language-key-and-that-are-translatable--the-value-specified-in-the-source-code-should-consist-of-text-in-the-original-language-of-the-cds-source-code-and-is-translated-into-the-required-languages--------abencds-f1-dcl-pm-mapping-spcl-htm-------------as-abap-release-753---copyright-2019-sap-ag--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---access-control--javascript-call-link---abencds-authorizations-htm---------abap-cds---dcl-statements--javascript-call-link---abencds-f1-dcl-syntax-htm---------abap-cds---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm---------abap-cds---define-pfcg--mapping--javascript-call-link---abencds-f1-define-pfcg-mapping-htm---------abap-cds---define-pfcg--mapping--pfcg--mapping--field--definition--these-language-elements-should-be-used-only-by-specialists-with-in-depth-knowledge-of-the-corresponding-environment---syntax-------pfcg--mapping--field--definition------effect--specifies-the-pfcg-mapping-field-definition-in-the-statement--define-pfcg--mapping--javascript-call-link---abencds-f1-define-pfcg-mapping-htm-----used-to-define-a--pfcg-mapping--javascript-call-link---abencds-pfcg-mapping-glosry-htm-----glossary-entry----currently--a--cds-entity--javascript-call-link---abencds-entity-glosry-htm-----glossary-entry---containing-the-following--framework-specific-annotation--javascript-call-link---abencds-annotations-frmwrk-htm-----can-be-specified-for-the-pfcg-mapping-field-definition---ObjectModel.dataCategory:#HIERARCHY

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


### abencds_f1_define_pfcg_mapping.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

ABAP CDS - DEFINE PFCG\_MAPPING

Syntax

*\[*[pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))*\]*
*\[*DEFINE*\]* PFCG\_MAPPING pfcg\_mapping
  BETWEEN [pfcg\_mapping\_field\_definition](javascript:call_link\('abencds_f1_dcl_pm_mapping_spcl.htm'\))
    AND auth\_object
      USING pfcg\_mapping\_value\_definition
  { input1 = auth\_field1*\[*,
    input2 = auth\_field2 ... *\]* }

Effect

Defines a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") pfcg\_mapping as part of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") defined using [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The name of the PFCG mapping must match the name of the CDS access policy.

The definition of a PCFG mapping contains the following:

-   A PFCG mapping definition [pfcg\_mapping\_field\_definition](javascript:call_link\('abencds_f1_dcl_pm_mapping_spcl.htm'\)) specified after the keyword BETWEEN to define the fields used in the mapping. This definition specifies the output fields of the mapping. Currently only a special CDS entity can be specified here.

-   An [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") auth\_object specified after the keyword AND. The PFCG mapping can be [used](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) in precisely those [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) in which this authorization object is specified after ASPECT pfcg\_auth.

-   A PFCG mapping value definition pfcg\_mapping\_value\_definition specified after the keyword USING that creates the relationship between the , input fields and output fields defined using pfcg\_mapping\_field\_definition. This is a suitable type of CDS entity.

-   A comma-separated unordered list in curly brackets that associates the input fields input of the mapping with authorization fields auth\_field of the authorization object auth\_object.

A PFCG mapping can be [used](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) in a [PFCG](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) condition of the same authorization object and is transformed to specific access conditions when the condition is evaluated.

Note

The actual output fields of a PFCG mapping cannot be viewed directly in the definition of the mapping or in any CDS role that uses the mapping. They are defined in pfcg\_mapping\_field\_definition and are mapped to input fields pfcg\_mapping\_value\_definition, which are themselves associated with authorization fields.

Example

The following abstract example shows the definition of a PFCG mapping mapping based on a PFCG mapping field definition mapping\_field\_definition and a PFCG mapping value definition mapping\_field\_definition. The PFCG mapping value definition has the input fields IN\_1 and IN\_2 used as the left sides of the comma-separated list in the definition of the PFCG mapping, plus the output field out, which is not visible in the PFCG mapping.

DEFINE PFCG\_MAPPING mapping
  BETWEEN
    mapping\_field\_definition
      AND auth
        USING mapping\_value\_definition
  { IN\_1 = F2,
    IN\_2 = F3 }

Continue
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_field\_definition](javascript:call_link\('abencds_f1_dcl_pm_mapping_spcl.htm'\))
