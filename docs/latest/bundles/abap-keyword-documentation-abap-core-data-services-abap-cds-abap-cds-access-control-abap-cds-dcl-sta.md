# ABAP - Keyword Documentation / ABAP - Core Data Services (ABAP CDS) / ABAP CDS - Access Control / ABAP CDS - DCL Statements / CDS DCL - DEFINE ACCESSPOLICY

Included pages: 8



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation latest](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencds_f1_define_accesspolicy.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_accesspolicy.htm)
- [abencds_f1_dcl_ap_annotations.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_ap_annotations.htm)
- [abencds_f1_define_pfcg_mapping.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_pfcg_mapping.htm)
- [abencds_f1_dcl_pm_annotations.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_pm_annotations.htm)
- [abencds_f1_define_generic_aspect.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_generic_aspect.htm)
- [abencds_f1_dcl_as_annotations.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_as_annotations.htm)

**Bundle Contains**: 6 documentation pages
**Version**: ABAP latest
**Generated**: 2025-09-01T11:25:44.866Z

---

### abencds_f1_define_accesspolicy.htm

> **📖 Official SAP Documentation**: [abencds_f1_define_accesspolicy.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_accesspolicy.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DCL%20-%20DEFINE%20ACCESSPOLICY%2C%20ABENCDS_F1_DEFINE_ACCESSPOLICY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS DCL - DEFINE ACCESSPOLICY

Syntax

*\[*[@access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\))*\]*
*\[*DEFINE*\]* ACCESSPOLICY access\_policy {
  [pfcg\_mapping\_definition](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) *|* [aspect\_definition](javascript:call_link\('abencds_f1_define_generic_aspect.htm'\))
}

Effect

Defines a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") access\_policy in the [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") to be used as a medium for further definitions.

An ACCESSPOLICY contains the definition of one of the following objects (which must have the same name as the access policy):

-   A [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") [DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))
-   A user-defined aspect [DEFINE ASPECT](javascript:call_link\('abencds_f1_define_generic_aspect.htm'\)).

DEFINE ACCESSPOLICY can be used to specify the optional annotation [@access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\)) in front of the actual definition of the access policy.

Hints

-   Separate [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") must be created for each CDS access policy.
-   The [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") of a CDS access policy must have the same name as this policy.

Continue
[CDS DCL - DEFINE ACCESSPOLICY, access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\))
[CDS DCL - DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))
[CDS DCL - DEFINE ASPECT](javascript:call_link\('abencds_f1_define_generic_aspect.htm'\))



**📖 Source**: [abencds_f1_define_accesspolicy.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_accesspolicy.htm)

### abencds_f1_dcl_ap_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_dcl_ap_annotations.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_ap_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [CDS DCL - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DCL%20-%20DEFINE%20ACCESSPOLICY%2C%20access_policy_annot%2C%20ABENCDS_F1_DCL_AP_ANNOTATIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestio
n%20for%20improvement:)

CDS DCL - DEFINE ACCESSPOLICY, access\_policy\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as an access policy annotation in the definition of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") in front of the statement [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The character @ must be placed directly in front of the name annotation of the annotation.

The table below shows the possible [ABAP annotations](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

The first column of the table shows the (possibly structured) name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the default value which is used if the annotation is not used at all. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations   

Translatable texts of the CDS role.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

See the note

\-

\-

\-

Hint

The EndUserText.label annotation is not recommended for CDS access policies, since its value is overwritten by the identically named annotation of the [PFCG mapping](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\)) or [aspect](javascript:call_link\('abencds_f1_dcl_as_annotations.htm'\)) in question.

This means that the short text for these objects should be entered here directly and not in the CDS access policy.



**📖 Source**: [abencds_f1_dcl_ap_annotations.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_ap_annotations.htm)

### abencds_f1_define_pfcg_mapping.htm

> **📖 Official SAP Documentation**: [abencds_f1_define_pfcg_mapping.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_pfcg_mapping.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [CDS DCL - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DCL%20-%20DEFINE%20PFCG_MAPPING%2C%20ABENCDS_F1_DEFINE_PFCG_MAPPING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS DCL - DEFINE PFCG\_MAPPING

Syntax

*\[*[pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))*\]*
*\[*DEFINE*\]* PFCG\_MAPPING pfcg\_mapping(output1*\[*, output2 ...*\]*)
  BETWEEN mapping\_entity AND auth\_object *\[*IN SCENARIO scenario\_name*\]*
  { input1 = auth\_field1 *\[*CONSTRAINT ID*\]**\[*,
    input2 = auth\_field2 *\[*CONSTRAINT ID*\]* ... *\]* }

Addition:

[... IN SCENARIO](#!ABAP_ONE_ADD@1@)

Effect

Defines a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") pfcg\_mapping as part of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") defined using [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The name of the PFCG mapping must match the name of the CDS access policy.

The definition of a PCFG mapping contains the following:

-   A comma-separated list after the name pfcg\_mapping in which the output fields of the PFCG mapping are defined. These fields must be elements of the CDS entity mapping\_entity specified after BETWEEN. The specified order is relevant.
-   A CDS entity mapping\_entity specified after the keyword BETWEEN to define the fields used in the mapping. This definition specifies the input and output fields of the mapping.
-   An [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") auth\_object specified after the keyword AND. The PFCG mapping can be [used](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) in exactly those [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) in which this authorization object is specified after ASPECT pfcg\_auth.
-   A comma-separated unordered list in curly brackets that associates the input fields input1, input2, ... of the mapping with [authorization fields](javascript:call_link\('abenauthorization_field_glosry.htm'\) "Glossary Entry") auth\_field of the authorization object auth\_object.
    -   The input fields on the left sides must be elements of the CDS entity mapping\_entity specified after BETWEEN.
    -   Authorization fields of the authorization object auth\_object must be specified on the right sides.
    -   Any number of optional assignments can be flagged using the addition CONSTRAINT ID.

A PFCG mapping can be [used](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) in a [PFCG](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) condition of the same authorization object. It is transformed to specific access conditions as follows when the condition is evaluated:

-   The values of the current user for the authorization fields assigned to the input fields fill the input fields of the mapping.
-   The output fields of the mapping are assigned to the elements within the [curly brackets](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) of the PFCG condition in the specified order.
-   The following applies to the input fields flagged with CONSTRAINT ID:
    -   Only those authorization fields of the authorization object can be assigned that contain a single value in a specific authorization. Multiple values or patterns are not allowed (with the exception of full authorization using the value \*). Otherwise the PFCG mapping in the PFCG condition returns the value false for the authorization in question.
    -   Full authorization can be assigned only when applied to all input fields of the PFCG mapping.
-   If full authorization exists for all input fields of the PFCG mapping (value \*), the PFCG mapping in the PFCG condition returns the value true when evaluated. This makes it possible to read entries of the protected entity for which there are no output fields in the mapping.

Addition   

... IN SCENARIO

Effect

To use a PFCG mapping in a PFCG condition where the authorization object is subject to the switchable authorization check, the PFCG mapping must also name the same scenario (as well as the same authorization object). For more information, see the [PFCG condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) of the statement DEFINE ROLE.

Hint

In ABAP SQL access to a CDS entity assigned a role of this type, PFCG mappings are defined internally using a subquery after EXISTS.

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
    
    define view entity demo\_cds\_mapping\_entity
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
[CDS DCL - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))



**📖 Source**: [abencds_f1_define_pfcg_mapping.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_pfcg_mapping.htm)

### abencds_f1_dcl_pm_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_dcl_pm_annotations.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_pm_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [CDS DCL - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) →  [CDS DCL - DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DCL%20-%20DEFINE%20PFCG_MAPPING%2C%20pfcg_mapping_annot%2C%20ABENCDS_F1_DCL_PM_ANNOTATIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
%20for%20improvement:)

CDS DCL - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a PFCG mapping annotation in front of the statement [PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) in the definition of a [CDS PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry"). The character @ must be placed in front of the name annotation of the annotation.

The table below shows the possible [ABAP annotations](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#abencds-f1-dcl-pm-annotations-1---the-first-column-of-the-table-shows-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-shows-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-default-value-which-is-used-if-the-annotation-is-not-used-at-all--the-fifth-column-shows-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---endusertext-annotations-----translatable-texts-of-the-cds-role---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--endusertext-label--translatable-short-text-of-the-pfcg-mapping--character-string-with-maximum-60-characters----------hint--abap-annotations-introduced-using-endusertext-are-used-to-define-translatable-semantic-texts-for-a--cds-object--javascript-call-link---abencds-object-glosry-htm-----glossary-entry----the-value-of-an-annotation-like-this-is-saved-in-special-tables-that-have-a-language-key-and-that-are-translatable--the-value-specified-in-the-source-code-should-consist-of-text-in-the-original-language-of-the-cds-source-code-and-is-translated-into-the-required-languages--------abencds-f1-define-pfcg-mapping-htm-------------as-abap-release-758---copyright-2024-sap-se--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---core-data-services--abap-cds---javascript-call-link---abencds-htm---------abap-cds---access-control--javascript-call-link---abencds-access-control-htm---------abap-cds---dcl-statements--javascript-call-link---abencds-f1-dcl-syntax-htm---------cds-dcl---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm---------------mail-gif-object-mail-gif--feedback-mail-for-displayed-topic---mail-feedback--mailto-f1-helpsap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DCL%20-%20DEFINE%20PFCG_MAPPING%2C%20ABENCDS_F1_DEFINE_PFCG_MAPPING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS DCL - DEFINE PFCG\_MAPPING

Syntax

*\[*[pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))*\]*
*\[*DEFINE*\]* PFCG\_MAPPING pfcg\_mapping(output1*\[*, output2 ...*\]*)
  BETWEEN mapping\_entity AND auth\_object *\[*IN SCENARIO scenario\_name*\]*
  { input1 = auth\_field1 *\[*CONSTRAINT ID*\]**\[*,
    input2 = auth\_field2 *\[*CONSTRAINT ID*\]* ... *\]* }

Addition:

[... IN SCENARIO](#!ABAP_ONE_ADD@1@)

Effect

Defines a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") pfcg\_mapping as part of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") defined using [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The name of the PFCG mapping must match the name of the CDS access policy.

The definition of a PCFG mapping contains the following:

-   A comma-separated list after the name pfcg\_mapping in which the output fields of the PFCG mapping are defined. These fields must be elements of the CDS entity mapping\_entity specified after BETWEEN. The specified order is relevant.
-   A CDS entity mapping\_entity specified after the keyword BETWEEN to define the fields used in the mapping. This definition specifies the input and output fields of the mapping.
-   An [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") auth\_object specified after the keyword AND. The PFCG mapping can be [used](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) in exactly those [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) in which this authorization object is specified after ASPECT pfcg\_auth.
-   A comma-separated unordered list in curly brackets that associates the input fields input1, input2, ... of the mapping with [authorization fields](javascript:call_link\('abenauthorization_field_glosry.htm'\) "Glossary Entry") auth\_field of the authorization object auth\_object.
    -   The input fields on the left sides must be elements of the CDS entity mapping\_entity specified after BETWEEN.
    -   Authorization fields of the authorization object auth\_object must be specified on the right sides.
    -   Any number of optional assignments can be flagged using the addition CONSTRAINT ID.

A PFCG mapping can be [used](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) in a [PFCG](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) condition of the same authorization object. It is transformed to specific access conditions as follows when the condition is evaluated:

-   The values of the current user for the authorization fields assigned to the input fields fill the input fields of the mapping.
-   The output fields of the mapping are assigned to the elements within the [curly brackets](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) of the PFCG condition in the specified order.
-   The following applies to the input fields flagged with CONSTRAINT ID:
    -   Only those authorization fields of the authorization object can be assigned that contain a single value in a specific authorization. Multiple values or patterns are not allowed (with the exception of full authorization using the value \*). Otherwise the PFCG mapping in the PFCG condition returns the value false for the authorization in question.
    -   Full authorization can be assigned only when applied to all input fields of the PFCG mapping.
-   If full authorization exists for all input fields of the PFCG mapping (value \*), the PFCG mapping in the PFCG condition returns the value true when evaluated. This makes it possible to read entries of the protected entity for which there are no output fields in the mapping.

Addition   

... IN SCENARIO

Effect

To use a PFCG mapping in a PFCG condition where the authorization object is subject to the switchable authorization check, the PFCG mapping must also name the same scenario (as well as the same authorization object). For more information, see the [PFCG condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) of the statement DEFINE ROLE.

Hint

In ABAP SQL access to a CDS entity assigned a role of this type, PFCG mappings are defined internally using a subquery after EXISTS.

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
    
    define view entity demo\_cds\_mapping\_entity
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
[CDS DCL - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))



**📖 Source**: [abencds_f1_dcl_pm_annotations.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_pm_annotations.htm)

### abencds_f1_define_generic_aspect.htm

> **📖 Official SAP Documentation**: [abencds_f1_define_generic_aspect.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_generic_aspect.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [CDS DCL - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DCL%20-%20DEFINE%20ASPECT%2C%20ABENCDS_F1_DEFINE_GENERIC_ASPECT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS DCL - DEFINE ASPECT

Syntax

*\[*[aspect\_annot](javascript:call_link\('abencds_f1_dcl_as_annotations.htm'\))*\]*
*\[*DEFINE*\]* ASPECT aspect AS SELECT FROM aspect\_entity
  WITH USER ELEMENT user\_element
  *\[*WITH FILTER ELEMENTS ( filter\_element1 *\[*AS filter\_alias1*\]*,
        filter\_element2... ) *\]*
{
    output1 *\[*BYPASS WHEN aspect\_bypass\_condition*\]*
    *\[*, ... *\]*
}

Effect

Defines a user-defined aspect aspect as part of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") defined using [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The name of the user-defined aspect must be the same as the name of the CDS access policy.

The definition of a user-defined aspect contains the following:

-   An aspect entity aspect\_entity, specified after the name aspect, which is used as a data source.
-   An element user\_element of the aspect entity that is used as the input field for the user name of the logged on user.
-   An optional list of elements filter\_element of the aspect entity. Using filter elements, the rows of the aspect entity can be reduced specifically for a usage location in an access role ( ( ...) = ASPECT ... FILTER BY condition>). Filter elements are addressed in the filter condition using the last component of their path expression. Optionally an alias can be specified by the AS addition. Adding filter elements is a compatible change from the perspective of access roles using the aspect, that is, they offer a filtering possibility, but do not mandate that filtering is in fact done.
-   A comma-separated list that specifies the output elements output1, output2, ... of the generic aspect. The specified order applies.
-   Any number of the output fields can be tagged with a condition using the addition BYPASS WHEN aspect\_bypass\_condition. Typical bypass values are \* or an empty value.

The following are possible as bypass conditions aspect\_bypass\_condition:

-   [IS *\[*NOT*\]* NULL](javascript:call_link\('abencds_cond_expr_null_v2.htm'\))
-   [IS *\[*NOT*\]* INITIAL](javascript:call_link\('abencds_cond_expr_initial_v2.htm'\))
-   IS INITIAL OR NULL
    
    Is met if the value of the aspect is NULL or the type-compliant initial value.
    
-   \= [literal](javascript:call_link\('abencds_literal_v2.htm'\))

At runtime, the field user\_element is filled with the user name of the current user. The rows produced in the aspect entity are matched with their output fields in the specified order and with the elements on the left side of the access condition to which the user-defined aspect is assigned. This means those rows in the protected entity meet the condition for which a row exists for the current user in the aspect entity.

When the bypass condition is used, the match with this field is not used if this condition exists in a row of the aspect entity. A specified value, therefore, (such as an asterisk \*) can be used to indicate that any values of the protected entity are allowed.

Special Requirements in the Aspect Entity

The content of the aspect entity has a particular relevance for audits by being used in a user-defined aspect in access control.

To determine which user had access to particular data at a particular time in a system, it must be possible to reconstruct the state of the data of the aspect entity. Existing mechanisms (such as version management or change documents) cover this requirement in the case of development objects or PFCG roles, whereas aspect entities may freely specify their data sources and cannot control whether these sources are themselves auditable.

The development and runtime systems for CDS access control cannot check whether data sources are auditable. To emphasize this requirement, however, the aspect entity must have the following annotations:

-   An auditing type with the annotation @AccessControl.auditing.type. Currently only the value #CUSTOM is possible.
-   A component with the annotation @AccessControl.auditing.specification specifying (as text) how the content of the entity is audited.

Hints

-   Just adding the annotations, however, does not activate auditing. This annotation should only be set if it is ensured that auditing takes place.
-   Auditing must respect all data sources of the aspect entity.
-   If auditing cannot be ensured, the aspect entity cannot be used in a user-defined aspect.
-   In ABAP SQL access to a CDS entity assigned a role of this type, user-defined aspects are defined internally using a [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") after EXISTS.

Continue
[CDS DCL - DEFINE ASPECT, aspect\_annot](javascript:call_link\('abencds_f1_dcl_as_annotations.htm'\))



**📖 Source**: [abencds_f1_define_generic_aspect.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_generic_aspect.htm)

### abencds_f1_dcl_as_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_dcl_as_annotations.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_as_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencds_f1_dcl_as_annotations.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_as_annotations.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [CDS DCL - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) →  [CDS DCL - DEFINE ASPECT](javascript:call_link\('abencds_f1_define_generic_aspect.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DCL%20-%20DEFINE%20ASPECT%2C%20aspect_annot%2C%20ABENCDS_F1_DCL_AS_ANNOTATIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

CDS DCL - DEFINE ASPECT, aspect\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) in the definition of an aspect [DEFINE ASPECT](javascript:call_link\('abencds_f1_define_generic_aspect.htm'\)). The character @ must be placed in front of the name annotation of the annotation.

The table below shows the possible [ABAP annotations](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#abencds-f1-dcl-as-annotations-1---the-first-column-of-the-table-shows-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-shows-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-default-value-which-is-used-if-the-annotation-is-not-used-at-all--the-fifth-column-shows-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---endusertext-annotations-----translatable-texts-of-the-cds-role---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--endusertext-label--translatable-short-text-of-the-pfcg-mapping--character-string-with-a-maximum-of-60-characters----------hint--abap-annotations-introduced-using-endusertext-are-used-to-define-translatable-semantic-texts-for-a--cds-object--javascript-call-link---abencds-object-glosry-htm-----glossary-entry----the-value-of-an-annotation-like-this-is-saved-in-special-tables-that-have-a-language-key-and-that-are-translatable--the-value-specified-in-the-source-code-should-consist-of-text-in-the-original-language-of-the-cds-source-code-and-is-translated-into-the-required-languages--------abencds-f1-define-generic-aspect-htm-------------as-abap-release-758---copyright-2024-sap-se--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---core-data-services--abap-cds---javascript-call-link---abencds-htm---------abap-cds---access-control--javascript-call-link---abencds-access-control-htm---------abap-cds---dcl-statements--javascript-call-link---abencds-f1-dcl-syntax-htm---------cds-dcl---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm---------------mail-gif-object-mail-gif--feedback-mail-for-displayed-topic---mail-feedback--mailto-f1-helpsap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DCL%20-%20DEFINE%20ASPECT%2C%20ABENCDS_F1_DEFINE_GENERIC_ASPECT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS DCL - DEFINE ASPECT

Syntax

*\[*[aspect\_annot](javascript:call_link\('abencds_f1_dcl_as_annotations.htm'\))*\]*
*\[*DEFINE*\]* ASPECT aspect AS SELECT FROM aspect\_entity
  WITH USER ELEMENT user\_element
  *\[*WITH FILTER ELEMENTS ( filter\_element1 *\[*AS filter\_alias1*\]*,
        filter\_element2... ) *\]*
{
    output1 *\[*BYPASS WHEN aspect\_bypass\_condition*\]*
    *\[*, ... *\]*
}

Effect

Defines a user-defined aspect aspect as part of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") defined using [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The name of the user-defined aspect must be the same as the name of the CDS access policy.

The definition of a user-defined aspect contains the following:

-   An aspect entity aspect\_entity, specified after the name aspect, which is used as a data source.
-   An element user\_element of the aspect entity that is used as the input field for the user name of the logged on user.
-   An optional list of elements filter\_element of the aspect entity. Using filter elements, the rows of the aspect entity can be reduced specifically for a usage location in an access role ( ( ...) = ASPECT ... FILTER BY condition>). Filter elements are addressed in the filter condition using the last component of their path expression. Optionally an alias can be specified by the AS addition. Adding filter elements is a compatible change from the perspective of access roles using the aspect, that is, they offer a filtering possibility, but do not mandate that filtering is in fact done.
-   A comma-separated list that specifies the output elements output1, output2, ... of the generic aspect. The specified order applies.
-   Any number of the output fields can be tagged with a condition using the addition BYPASS WHEN aspect\_bypass\_condition. Typical bypass values are \* or an empty value.

The following are possible as bypass conditions aspect\_bypass\_condition:

-   [IS *\[*NOT*\]* NULL](javascript:call_link\('abencds_cond_expr_null_v2.htm'\))
-   [IS *\[*NOT*\]* INITIAL](javascript:call_link\('abencds_cond_expr_initial_v2.htm'\))
-   IS INITIAL OR NULL
    
    Is met if the value of the aspect is NULL or the type-compliant initial value.
    
-   \= [literal](javascript:call_link\('abencds_literal_v2.htm'\))

At runtime, the field user\_element is filled with the user name of the current user. The rows produced in the aspect entity are matched with their output fields in the specified order and with the elements on the left side of the access condition to which the user-defined aspect is assigned. This means those rows in the protected entity meet the condition for which a row exists for the current user in the aspect entity.

When the bypass condition is used, the match with this field is not used if this condition exists in a row of the aspect entity. A specified value, therefore, (such as an asterisk \*) can be used to indicate that any values of the protected entity are allowed.

Special Requirements in the Aspect Entity

The content of the aspect entity has a particular relevance for audits by being used in a user-defined aspect in access control.

To determine which user had access to particular data at a particular time in a system, it must be possible to reconstruct the state of the data of the aspect entity. Existing mechanisms (such as version management or change documents) cover this requirement in the case of development objects or PFCG roles, whereas aspect entities may freely specify their data sources and cannot control whether these sources are themselves auditable.

The development and runtime systems for CDS access control cannot check whether data sources are auditable. To emphasize this requirement, however, the aspect entity must have the following annotations:

-   An auditing type with the annotation @AccessControl.auditing.type. Currently only the value #CUSTOM is possible.
-   A component with the annotation @AccessControl.auditing.specification specifying (as text) how the content of the entity is audited.

Hints

-   Just adding the annotations, however, does not activate auditing. This annotation should only be set if it is ensured that auditing takes place.
-   Auditing must respect all data sources of the aspect entity.
-   If auditing cannot be ensured, the aspect entity cannot be used in a user-defined aspect.
-   In ABAP SQL access to a CDS entity assigned a role of this type, user-defined aspects are defined internally using a [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") after EXISTS.

Continue
[CDS DCL - DEFINE ASPECT, aspect\_annot](javascript:call_link\('abencds_f1_dcl_as_annotations.htm'\))
