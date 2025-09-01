  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_syntax.htm) → 

CDS DCL - DEFINE ACCESSPOLICY

Syntax

*\[*[@access\_policy\_annot](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_ap_annotations.htm)*\]*
*\[*DEFINE*\]* ACCESSPOLICY access\_policy {
  [pfcg\_mapping\_definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_pfcg_mapping.htm) *|* [aspect\_definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_generic_aspect.htm)
}

Effect

Defines a [CDS access policy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_policy_glosry.htm "Glossary Entry") access\_policy in the [CDS DCL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_glosry.htm "Glossary Entry") to be used as a medium for further definitions.

An ACCESSPOLICY contains the definition of one of the following objects (which must have the same name as the access policy):

-   A [PFCG mapping](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry") [DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_pfcg_mapping.htm)

-   A self-defined aspect [DEFINE ASPECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_generic_aspect.htm).

DEFINE ACCESSPOLICY can be used to specify the optional annotation [@access\_policy\_annot](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_ap_annotations.htm) in front of the actual definition of the access policy.

Hints

-   Separate [DCL source code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendcl_source_code_glosry.htm "Glossary Entry") must be created for each CDS access policy.

-   The [DCL source code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendcl_source_code_glosry.htm "Glossary Entry") of a CDS access policy must have the same name as this policy.

Continue
[CDS DCL - DEFINE ACCESSPOLICY, access\_policy\_annot](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_ap_annotations.htm)
[CDS DCL - DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_pfcg_mapping.htm)
[CDS DCL - DEFINE ASPECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_generic_aspect.htm)