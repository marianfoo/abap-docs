# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ACCESSPOLICY

Included pages: 6



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencds_f1_define_accesspolicy.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm)
- [abencds_f1_dcl_ap_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_ap_annotations.htm)
- [abencds_f1_define_pfcg_mapping.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm)
- [abencds_f1_dcl_pm_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_pm_annotations.htm)
- [abencds_f1_define_generic_aspect.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_generic_aspect.htm)

**Bundle Contains**: 5 documentation pages
**Version**: ABAP 7.54
**Generated**: 2025-09-01T11:25:45.891Z

---

### abencds_f1_define_accesspolicy.htm

> **📖 Official SAP Documentation**: [abencds_f1_define_accesspolicy.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) → 

ABAP CDS - DEFINE ACCESSPOLICY

Syntax

*\[*[@access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\))*\]*
*\[*DEFINE*\]* ACCESSPOLICY access\_policy {
  [pfcg\_mapping\_definition](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) *|* generic\_aspect\_definition
}

Effect

Defines a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") access\_policy in the [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") to be used as a framework for further definitions.

An ACCESSPOLICY contains the definition of one of the following objects (which must have the same name as the access policy):

-   A [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") [DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))

-   A generic aspect DEFINE GENERIC\_ASPECT.

DEFINE ACCESSPOLICY can be used to specify the optional annotation [@access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\)) in front of the actual definition of the access policy.

Notes

-   Separate [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") must be created for each CDS access policy.

-   The [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") of a CDS access policy must have the same name as this policy.

Continue
[ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\))
[ABAP CDS - DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))
[ABAP CDS - DEFINE ASPECT](javascript:call_link\('abencds_f1_define_generic_aspect.htm'\))



**📖 Source**: [abencds_f1_define_accesspolicy.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm)

### abencds_f1_dcl_ap_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_dcl_ap_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_ap_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as an access policy annotation in the definition of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") in front of the statement [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The character @ must be placed directly in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the CDS role.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the CDS access policy

Character string with maximum 60 characters

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages.



**📖 Source**: [abencds_f1_dcl_ap_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_ap_annotations.htm)

### abencds_f1_define_pfcg_mapping.htm

> **📖 Official SAP Documentation**: [abencds_f1_define_pfcg_mapping.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

ABAP CDS - DEFINE PFCG\_MAPPING

Syntax

*\[*[pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))*\]*
*\[*DEFINE*\]* PFCG\_MAPPING pfcg\_mapping(output1*\[*, output2 ...*\]*)
  BETWEEN mapping\_entity AND auth\_object *\[*IN SCENARIO scenario\_name*\]*
  { input1 = auth\_field1 *\[*CONSTRAINT ID*\]**\[*,
    input2 = auth\_field2 *\[*CONSTRAINT ID*\]* ... *\]* }

Effect

Defines a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") pfcg\_mapping as part of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") defined using [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The name of the PFCG mapping must match the name of the CDS access policy.

The definition of a PCFG mapping contains the following:

-   A comma-separated list after the name pfcg\_mapping in which the output fields of the PFCG mapping are defined. These fields must be elements of the CDS entity mapping\_entity specified after BETWEEN. The specified order applies.

-   A CDS entity mapping\_entity specified after the keyword BETWEEN to define the fields used in the mapping. This definition specifies the input and output fields of the mapping.

-   An [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") auth\_object specified after the keyword AND. The PFCG mapping can be [used](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) in precisely those [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) in which this authorization object is specified after ASPECT pfcg\_auth.

-   A comma-separated unordered list in curly brackets that associates the input fields input1, input2, ... of the mapping with [authorization fields](javascript:call_link\('abenauthorization_field_glosry.htm'\) "Glossary Entry") auth\_field of the authorization object auth\_object.

-   The input fields on the left sides must be elements of the CDS entity mapping\_entity specified after BETWEEN.

-   Authorization fields of the authorization object auth\_object must be specified on the right sides.

-   Any number of optional assignments can be flagged using the addition CONSTRAINT ID.

A PFCG mapping can be [used](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) in a [PFCG](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) condition of the same authorization object. It is transformed to specific access conditions as follows when the condition is evaluated:

-   The values of the current user for the authorization fields assigned to the input fields fill the input fields of the mapping.

-   The output fields of the mapping are assigned to the elements within the [curly brackets](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) of the PFCG condition in the specified order.

-   The following applies to the input fields flagged with CONSTRAINT ID:

-   Only those authorization fields of the authorization object can be assigned that contain a single value in a specific authorization. Multiple values or patterns are not allowed (with the exception of full authorization using the value "\*"). Otherwise the PFCG mapping in the PFCG condition returns the value "false" for the authorization in question.

-   Full authorization can be assigned only when applied to all input fields of the PFCG mapping.

-   If full authorization exists for all input fields of the PFCG mapping (value "\*"), the PFCG mapping in the PFCG condition returns the value "true" when evaluated. This makes it possible to read entries of the protected entity for which there are no output fields in the mapping.

Addition

... IN SCENARIO

To use a PFCG mapping in a PFCG condition where the authorization object is subject to the switchable authorization check, the PFCG mapping must also name the same scenario (as well as the same authorization object). For more information, see the [PFCG condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) of the statement DEFINE ROLE.

Note

In ABAP SQL access to a CDS entity assigned a role of this type, PFCG mappings are defined internally using a subquery after EXISTS. This can be seen in an [SQL trace](javascript:call_link\('abensql_trace_glosry.htm'\) "Glossary Entry").

Example

The following example shows the definition of a PFCG mapping demo\_cds\_auth\_pfcg\_mapping based on the CDS entity demo\_cds\_mapping\_entity below. The output fields of the PFCG mapping are the authorization fields OBJECT, OBJ\_NAME, and DEVCLASS of the authorization object S\_DEVELOP. The input fields of the PFCG mapping are the elements of the CDS entity to which the output fields are assigned. The [example](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) that demonstrates how a PFCG mapping is specified in a role shows how the mapping is used.

-   PFCG Mapping

define accesspolicy demo\_cds\_pfcg\_mapping  {
  define pfcg\_mapping demo\_cds\_pfcg\_mapping( map\_object,  
                                             map\_obj\_name,  
                                             map\_devclass )
    between demo\_cds\_mapping\_entity
      and S\_DEVELOP
      { map\_devclass = devclass,
        map\_object   = objtype,
        map\_obj\_name = objname } }

-   CDS Entity

@AbapCatalog.sqlViewName: 'DEMOCDSMAPPENT'
define view demo\_cds\_mapping\_entity
  as select from
    tadir
    {
      devclass as map\_devclass,
      object   as map\_object,
      obj\_name as map\_obj\_name
    }
    where
          devclass =    'SABAPDEMOS'
      and object   =    'PROG'
      and obj\_name like 'DEMO%'

Continue
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))



**📖 Source**: [abencds_f1_define_pfcg_mapping.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm)

### abencds_f1_dcl_pm_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_dcl_pm_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_pm_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) →  [ABAP CDS - DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) → 

ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a PFCG mapping annotation in front of the statement [PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) in the definition of a [CDS PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry"). The character @ must be placed in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#abencds-f1-dcl-pm-annotations-1---the-first-column-of-the-table-displays-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-displays-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-value-set-implicitly-for-the-annotation-value-if-the-annotation-is-not-used-explicitly--the-fifth-column-displays-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---endusertext-annotations--translatable-texts-of-the-cds-role---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--endusertext-label--translatable-short-text-of-the-pfcg-mapping--character-string-with-maximum-60-characters----------note--abap-annotations-introduced-using-endusertext-are-used-to-define-translatable-semantic-texts-for-a--cds-object--javascript-call-link---abencds-object-glosry-htm-----glossary-entry----the-value-of-an-annotation-like-this-is-saved-in-special-tables-that-have-a-language-key-and-that-are-translatable--the-value-specified-in-the-source-code-should-consist-of-text-in-the-original-language-of-the-cds-source-code-and-is-translated-into-the-required-languages--------abencds-f1-define-pfcg-mapping-htm-------------as-abap-release-754---copyright-2019-sap-se--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---access-control--javascript-call-link---abencds-authorizations-htm---------abap-cds---dcl-statements--javascript-call-link---abencds-f1-dcl-syntax-htm---------abap-cds---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm---------abap-cds---define-pfcg--mapping--syntax-------pfcg--mapping--annot--javascript-call-link---abencds-f1-dcl-pm-annotations-htm-------------define-----pfcg--mapping-pfcg--mapping-output1------output2------------between-mapping--entity-and-auth--object-----in-scenario-scenario--name---------input1---auth--field1-----constraint-id--------------input2---auth--field2-----constraint-id-----------------effect--defines-a--pfcg-mapping--javascript-call-link---abencds-pfcg-mapping-glosry-htm-----glossary-entry---pfcg--mapping-as-part-of-a--cds-access-policy--javascript-call-link---abencds-access-policy-glosry-htm-----glossary-entry---defined-using--define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm------the-name-of-the-pfcg-mapping-must-match-the-name-of-the-cds-access-policy---the-definition-of-a-pcfg-mapping-contains-the-following-------a-comma-separated-list-after-the-name-pfcg--mapping-in-which-the-output-fields-of-the-pfcg-mapping-are-defined--these-fields-must-be-elements-of-the-cds-entity-mapping--entity-specified-after-between--the-specified-order-applies-------a-cds-entity-mapping--entity-specified-after-the-keyword-between-to-define-the-fields-used-in-the-mapping--this-definition-specifies-the-input-and-output-fields-of-the-mapping-------an--authorization-object--javascript-call-link---abenauthorization-object-glosry-htm-----glossary-entry---auth--object-specified-after-the-keyword-and--the-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-precisely-those--pfcg-conditions--javascript-call-link---abencds-f1-cond-pfcg-htm-----in-which-this-authorization-object-is-specified-after-aspect-pfcg--auth-------a-comma-separated-unordered-list-in-curly-brackets-that-associates-the-input-fields-input1--input2------of-the-mapping-with--authorization-fields--javascript-call-link---abenauthorization-field-glosry-htm-----glossary-entry---auth--field-of-the-authorization-object-auth--object-------the-input-fields-on-the-left-sides-must-be-elements-of-the-cds-entity-mapping--entity-specified-after-between-------authorization-fields-of-the-authorization-object-auth--object-must-be-specified-on-the-right-sides-------any-number-of-optional-assignments-can-be-flagged-using-the-addition-constraint-id---a-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-a--pfcg--javascript-call-link---abencds-f1-cond-pfcg-htm-----condition-of-the-same-authorization-object--it-is-transformed-to-specific-access-conditions-as-follows-when-the-condition-is-evaluated-------the-values-of-the-current-user-for-the-authorization-fields-assigned-to-the-input-fields-fill-the-input-fields-of-the-mapping-------the-output-fields-of-the-mapping-are-assigned-to-the-elements-within-the--curly-brackets--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----of-the-pfcg-condition-in-the-specified-order-------the-following-applies-to-the-input-fields-flagged-with-constraint-id-------only-those-authorization-fields-of-the-authorization-object-can-be-assigned-that-contain-a-single-value-in-a-specific-authorization--multiple-values-or-patterns-are-not-allowed--with-the-exception-of-full-authorization-using-the-value--------otherwise-the-pfcg-mapping-in-the-pfcg-condition-returns-the-value--false--for-the-authorization-in-question-------full-authorization-can-be-assigned-only-when-applied-to-all-input-fields-of-the-pfcg-mapping-------if-full-authorization-exists-for-all-input-fields-of-the-pfcg-mapping--value--------the-pfcg-mapping-in-the-pfcg-condition-returns-the-value--true--when-evaluated--this-makes-it-possible-to-read-entries-of-the-protected-entity-for-which-there-are-no-output-fields-in-the-mapping---addition------in-scenario--to-use-a-pfcg-mapping-in-a-pfcg-condition-where-the-authorization-object-is-subject-to-the-switchable-authorization-check--the-pfcg-mapping-must-also-name-the-same-scenario--as-well-as-the-same-authorization-object---for-more-information--see-the--pfcg-condition--javascript-call-link---abencds-f1-cond-pfcg-htm-----of-the-statement-define-role---note--in-abap-sql-access-to-a-cds-entity-assigned-a-role-of-this-type--pfcg-mappings-are-defined-internally-using-a-subquery-after-exists--this-can-be-seen-in-an--sql-trace--javascript-call-link---abensql-trace-glosry-htm-----glossary-entry-----example--the-following-example-shows-the-definition-of-a-pfcg-mapping-demo--cds--auth--pfcg--mapping-based-on-the-cds-entity-demo--cds--mapping--entity-below--the-output-fields-of-the-pfcg-mapping-are-the-authorization-fields-object--obj--name--and-devclass-of-the-authorization-object-s--develop--the-input-fields-of-the-pfcg-mapping-are-the-elements-of-the-cds-entity-to-which-the-output-fields-are-assigned--the--example--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----that-demonstrates-how-a-pfcg-mapping-is-specified-in-a-role-shows-how-the-mapping-is-used-------pfcg-mapping--define-accesspolicy-demo--cds--pfcg--mapping------define-pfcg--mapping-demo--cds--pfcg--mapping--map--object-------------------------------------------------map--obj--name-------------------------------------------------map--devclass-------between-demo--cds--mapping--entity-------and-s--develop---------map--devclass---devclass----------map--object-----objtype----------map--obj--name---objname----------cds-entity--AbapCatalog.sqlViewName: 'DEMOCDSMAPPENT'
define view demo\_cds\_mapping\_entity
  as select from
    tadir
    {
      devclass as map\_devclass,
      object   as map\_object,
      obj\_name as map\_obj\_name
    }
    where
          devclass =    'SABAPDEMOS'
      and object   =    'PROG'
      and obj\_name like 'DEMO%'

Continue
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))



**📖 Source**: [abencds_f1_dcl_pm_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_pm_annotations.htm)

### abencds_f1_define_generic_aspect.htm

> **📖 Official SAP Documentation**: [abencds_f1_define_generic_aspect.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_generic_aspect.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencds_f1_define_generic_aspect.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_generic_aspect.htm)


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

ABAP CDS - DEFINE ASPECT

Syntax

*\[*DEFINE*\]* ASPECT generic\_aspect AS SELECT FROM aspect\_entity
  WITH USER ELEMENT user\_element
{
    output1 *\[*BYPASS WHEN aspect\_bypass\_condition*\]*
    *\[*, ... *\]*
}

Effect

Defines a generic aspect generic\_aspect as part of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") defined using [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The name of the generic aspect must be the same as the name of the CDS access policy.

The definition of a generic aspect contains the following:

-   An aspect entity aspect\_entity, specified after the name generic\_aspect, which is used as a data source.

-   An element user\_element of the aspect entity that is used as an input field for the user name of the logged on user.

-   A comma-separated list that specifies the output fields output1, output2, ... of the generic aspect. The specified order applies.

-   Any number of output fields that can be tagged with a condition using the addition BYPASS WHEN aspect\_bypass\_condition. Typical bypass values are \* or an empty value. The following are possible as aspect bypass conditions aspect\_bypass\_condition: [IS NULL](javascript:call_link\('abencds_cond_expr_null.htm'\)) *|* [IS *\[*NOT*\]* NULL](javascript:call_link\('abencds_cond_expr_initial.htm'\)) *|* \= [Literal](javascript:call_link\('abencds_f1_literal.htm'\))

At runtime, the field user\_element is filled with the user name of the current user. The rows produced in the aspect entity are matched with their output fields in the specified order and with the elements on the left side of the access condition to which the generic aspect is assigned. This means those rows in the protected entity meet the condition for which a row exists for the current user in the aspect entity.

When the bypass condition is used, the match with this field is not used if this condition exists in a row of the aspect entity. A specified value, therefore, (such as an asterisk) can be used to indicate that any values of the protected entity are allowed.

Special Requirements in the Aspect Entity

The content of the aspect entity has a particular relevance for audits by being used in a generic aspect in access control.

To determine which user had access to particular data at a particular time in a system, it must be possible to reconstruct the state of the data of the aspect entity. Existing mechanisms (such as version management or change documents) cover this requirement in the case of development objects or PFCG roles, aspect entities do not specify their data sources and whether these sources are themselves auditable.

The development and runtime systems for CDS access control cannot check whether data sources are auditable. To highlight this requirement, however, the aspect entity must have the following annotations:

-   An auditing type with the annotation @AccessControl.auditing.type. Currently only the value #CUSTOM is possible.

-   A component with the annotation @AccessControl.auditing.specification specifying (as text) how the content of the entity is audited.
    

Notes

-   Just adding the annotations, however, does not activate auditing. It must first be ensure that auditing is actually possible.

-   Auditing must respect all data sources of the aspect entity.

-   If auditing cannot be ensured, the aspect entity cannot be used in a generic aspect.

-   In ABAP SQL access to a CDS entity assigned a role of this type, generic aspects are defined internally using a [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") after EXISTS. This can be seen in an SQL trace.
