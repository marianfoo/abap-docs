# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ACCESSPOLICY

Included pages: 6


### abencds_f1_define_accesspolicy.htm

---
title: "ABAP CDS - DEFINE ACCESSPOLICY"
description: |
  Syntax @access_policy_annot(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_ap_annotations.htm) DEFINE ACCESSPOLICY access_policy   pfcg_mapping_definition(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_pfcg_mappin
version: "7.53"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_accesspolicy.htm"
abapFile: "abencds_f1_define_accesspolicy.htm"
keywords: ["do", "if", "try", "abencds", "define", "accesspolicy"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_syntax.htm) → 

ABAP CDS - DEFINE ACCESSPOLICY

Syntax

*\[*[@access\_policy\_annot](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_ap_annotations.htm)*\]*
*\[*DEFINE*\]* ACCESSPOLICY access\_policy {
  *\[* [pfcg\_mapping\_definition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_pfcg_mapping.htm)*\]* }

Effect

Defines a [CDS access policy](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_access_policy_glosry.htm "Glossary Entry") access\_policy in the [CDS DCL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_dcl_glosry.htm "Glossary Entry") to be used as a framework for further definitions.

Currently, an access policy can contain precisely one definition of a [PFCG mapping](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry") with the statement [DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_pfcg_mapping.htm). This definition must have the same name as the access policy.

DEFINE ACCESSPOLICY can be used to specify the optional annotation [@access\_policy\_annot](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_ap_annotations.htm) in front of the actual definition of the access policy.

Notes

-   Separate [DCL source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendcl_source_code_glosry.htm "Glossary Entry") must be created for each CDS access policy.

-   The [DCL source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendcl_source_code_glosry.htm "Glossary Entry") of a CDS access policy must have the same name as this policy.

Continue
[ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_ap_annotations.htm)
[ABAP CDS - DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_pfcg_mapping.htm)


### abencds_f1_dcl_ap_annotations.htm

---
title: "Syntax"
description: |
  ... @annotation(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations.htm) ... Effect Specifies an annotation(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotation_glosry.htm 'Glossary Entry') annotation(https://help.sap.com/doc/abapdocu_753_ind
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_ap_annotations.htm"
abapFile: "abencds_f1_dcl_ap_annotations.htm"
keywords: ["do", "if", "try", "abencds", "dcl", "annotations"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_accesspolicy.htm) → 

ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations_syntax.htm) as an access policy annotation in the definition of a [CDS access policy](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_access_policy_glosry.htm "Glossary Entry") in front of the statement [DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_accesspolicy.htm). The character @ must be placed directly in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_anno_annos.htm) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#@@ITOC@@ABENCDS_F1_DCL_AP_ANNOTATIONS_1)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

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

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages.


### abencds_f1_define_pfcg_mapping.htm

---
title: "Syntax"
description: |
  pfcg_mapping_annot(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_pm_annotations.htm) DEFINE PFCG_MAPPING pfcg_mapping BETWEEN pfcg_mapping_field_definition(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_pm_mapping_spcl
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_pfcg_mapping.htm"
abapFile: "abencds_f1_define_pfcg_mapping.htm"
keywords: ["do", "if", "try", "abencds", "define", "pfcg", "mapping"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_accesspolicy.htm) → 

ABAP CDS - DEFINE PFCG\_MAPPING

Syntax

*\[*[pfcg\_mapping\_annot](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_pm_annotations.htm)*\]*
*\[*DEFINE*\]* PFCG\_MAPPING pfcg\_mapping
  BETWEEN [pfcg\_mapping\_field\_definition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_pm_mapping_spcl.htm)
    AND auth\_object
      USING pfcg\_mapping\_value\_definition
  { input1 = auth\_field1*\[*,
    input2 = auth\_field2 ... *\]* }

Effect

Defines a [PFCG mapping](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry") pfcg\_mapping as part of a [CDS access policy](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_access_policy_glosry.htm "Glossary Entry") defined using [DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_accesspolicy.htm). The name of the PFCG mapping must match the name of the CDS access policy.

The definition of a PCFG mapping contains the following:

-   A PFCG mapping definition [pfcg\_mapping\_field\_definition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_pm_mapping_spcl.htm) specified after the keyword BETWEEN to define the fields used in the mapping. This definition specifies the output fields of the mapping. Currently only a special CDS entity can be specified here.

-   An [authorization object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenauthorization_object_glosry.htm "Glossary Entry") auth\_object specified after the keyword AND. The PFCG mapping can be [used](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_cond_pfcg_mapping.htm) in precisely those [PFCG conditions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_cond_pfcg.htm) in which this authorization object is specified after ASPECT pfcg\_auth.

-   A PFCG mapping value definition pfcg\_mapping\_value\_definition specified after the keyword USING that creates the relationship between the , input fields and output fields defined using pfcg\_mapping\_field\_definition. This is a suitable type of CDS entity.

-   A comma-separated unordered list in curly brackets that associates the input fields input of the mapping with authorization fields auth\_field of the authorization object auth\_object.

A PFCG mapping can be [used](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_cond_pfcg_mapping.htm) in a [PFCG](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_cond_pfcg.htm) condition of the same authorization object and is transformed to specific access conditions when the condition is evaluated.

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
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_pm_annotations.htm)
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_field\_definition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_pm_mapping_spcl.htm)


### abencds_f1_dcl_pm_annotations.htm

---
title: "Syntax"
description: |
  ... @annotation(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations.htm) ... Effect Specifies an annotation(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotation_glosry.htm 'Glossary Entry') annotation(https://help.sap.com/doc/abapdocu_753_ind
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_pm_annotations.htm"
abapFile: "abencds_f1_dcl_pm_annotations.htm"
keywords: ["do", "if", "try", "abencds", "dcl", "annotations"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_accesspolicy.htm) →  [ABAP CDS - DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_pfcg_mapping.htm) → 

ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations_syntax.htm) as a PFCG mapping annotation in front of the statement [PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_pfcg_mapping.htm) in the definition of a [CDS PFCG mapping](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry"). The character @ must be placed in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_anno_annos.htm) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#@@ITOC@@ABENCDS_F1_DCL_PM_ANNOTATIONS_1)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the CDS role.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the PFCG mapping

Character string with maximum 60 characters

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages.


### abencds_f1_dcl_pm_mapping_spcl.htm

---
title: "Syntax"
description: |
  ...  pfcg_mapping_field_definition ... Effect Specifies the PFCG mapping field definition in the statement DEFINE PFCG_MAPPING(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_pfcg_mapping.htm) used to define a PFCG mapping(https://help.sap.com/doc/abapdocu_753_in
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_pm_mapping_spcl.htm"
abapFile: "abencds_f1_dcl_pm_mapping_spcl.htm"
keywords: ["do", "if", "case", "try", "data", "abencds", "dcl", "mapping", "spcl"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_accesspolicy.htm) →  [ABAP CDS - DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_pfcg_mapping.htm) → 

ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_field\_definition

These language elements should be used only by specialists with in-depth knowledge of the corresponding environment.

Syntax

...  pfcg\_mapping\_field\_definition ...

Effect

Specifies the PFCG mapping field definition in the statement [DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_pfcg_mapping.htm) used to define a [PFCG mapping](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry"). Currently, a [CDS entity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry") containing the following [framework-specific annotation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations_frmwrk.htm) can be specified for the PFCG mapping field definition:

@ObjectModel.dataCategory:#HIERARCHY

CDS entities of this type provide a view of a hierarchy and are known as CDS hierarchy views. The following applies when using a CDS hierarchy view as a PFCG mapping field definition in a PFCG mapping:

-   The input fields of the PFCG mapping must be elements of the CDS hierarchy view.

-   Multiple hierarchies can be defined in a single CDS hierarchy view. Those input fields of a PFCG mapping that specify a unique hierarchy in this case are known as hierarchy key fields. A CDS hierarchy view that defines only one hierarchy does not have any hierarchy key fields. The following applies to any hierarchy key fields:

-   All hierarchy key fields must be used in the PFCG mapping.

-   A hierarchy key field can only be assigned those authorization fields of the authorization object that contain single values. Multiple values or patterns are not allowed (with the exception of full authorization using the value "\*"). If this condition is not met, the PFCG mapping produces the value "false" in the PFCG condition when evaluated.

-   Full authorization can be assigned only when applied to all input fields of the PFCG mapping.

-   If full authorization exists (an authorization with the value "\*" for the assigned authorization field of the authorization object) for all input fields of the PFCG mapping, the PFCG mapping returns the value "true" in the PFCG condition when evaluated. This enables entries to be read that are not part of any hierarchy.

-   When CDS elements are [assigned](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_cond_pfcg_mapping.htm) to the PFCG mapping in a PFCG condition, the first element in the curly brackets specifies the CDS element on which the hierarchy is defined. This element has the annotation @ObjectModel.foreignKey.association in the CDS hierarchy view and in the target of the association it has the annotations @ObjectModel.representativeKey and @ObjectModel.Hierarchy.association.The latter has the CDS hierarchy view as a value. Any further fields can be specified in any order in the curly brackets.

Notes

-   Framework-specific knowledge is required when using a CDS hierarchy view as a PFCG mapping field definition in a PFCG mapping and this knowledge is not part of the DCL documentation in ABAP CDS. More information can be found, for example, in the framework-specific documentation of the annotation @ObjectModel.dataCategory:#HIERARCHY.

-   A field of a CDS hierarchy view is a hierarchy key field when it occurs in the ON condition of the association specified in the annotation @Hierarchy.parentChild.directory and is not defined as a date field in the target of the association using @Semantics.businessDate.

Example

A CDS entity has an element called "Cost Center". The PFCG authorizations of the users are defined on the "Controlling Area" level. These are not elements in the CDS entity, but a hierarchy exists in which the assignment of "Cost Centers” to "Controlling Areas” is defined. This assignment can be complex and can vary over time. To check the authorizations, a CDS hierarchy view that expresses this assignment can be used as a PFCG mapping field definition in a PFCG mapping for a CDS role of the CDS entity


### abencds_f1_define_pfcg_mapping.htm

---
title: "Syntax"
description: |
  pfcg_mapping_annot(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_pm_annotations.htm) DEFINE PFCG_MAPPING pfcg_mapping BETWEEN pfcg_mapping_field_definition(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_pm_mapping_spcl
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_pfcg_mapping.htm"
abapFile: "abencds_f1_define_pfcg_mapping.htm"
keywords: ["do", "if", "try", "abencds", "define", "pfcg", "mapping"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_accesspolicy.htm) → 

ABAP CDS - DEFINE PFCG\_MAPPING

Syntax

*\[*[pfcg\_mapping\_annot](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_pm_annotations.htm)*\]*
*\[*DEFINE*\]* PFCG\_MAPPING pfcg\_mapping
  BETWEEN [pfcg\_mapping\_field\_definition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_pm_mapping_spcl.htm)
    AND auth\_object
      USING pfcg\_mapping\_value\_definition
  { input1 = auth\_field1*\[*,
    input2 = auth\_field2 ... *\]* }

Effect

Defines a [PFCG mapping](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry") pfcg\_mapping as part of a [CDS access policy](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_access_policy_glosry.htm "Glossary Entry") defined using [DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_accesspolicy.htm). The name of the PFCG mapping must match the name of the CDS access policy.

The definition of a PCFG mapping contains the following:

-   A PFCG mapping definition [pfcg\_mapping\_field\_definition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_pm_mapping_spcl.htm) specified after the keyword BETWEEN to define the fields used in the mapping. This definition specifies the output fields of the mapping. Currently only a special CDS entity can be specified here.

-   An [authorization object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenauthorization_object_glosry.htm "Glossary Entry") auth\_object specified after the keyword AND. The PFCG mapping can be [used](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_cond_pfcg_mapping.htm) in precisely those [PFCG conditions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_cond_pfcg.htm) in which this authorization object is specified after ASPECT pfcg\_auth.

-   A PFCG mapping value definition pfcg\_mapping\_value\_definition specified after the keyword USING that creates the relationship between the , input fields and output fields defined using pfcg\_mapping\_field\_definition. This is a suitable type of CDS entity.

-   A comma-separated unordered list in curly brackets that associates the input fields input of the mapping with authorization fields auth\_field of the authorization object auth\_object.

A PFCG mapping can be [used](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_cond_pfcg_mapping.htm) in a [PFCG](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_cond_pfcg.htm) condition of the same authorization object and is transformed to specific access conditions when the condition is evaluated.

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
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_pm_annotations.htm)
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_field\_definition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_pm_mapping_spcl.htm)
