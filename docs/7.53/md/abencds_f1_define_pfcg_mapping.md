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