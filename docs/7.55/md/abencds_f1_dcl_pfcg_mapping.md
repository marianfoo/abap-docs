---
title: "CDS DCL - DEFINE ROLE, Converting Field Values"
description: |
  Elements of CDS entities are associated with an authorization object(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenauthorization_object_glosry.htm 'Glossary Entry') in PFCG conditions(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_pfcg.htm) in the CD
version: "7.55"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_pfcg_mapping.htm"
abapFile: "abencds_f1_dcl_pfcg_mapping.htm"
keywords: ["do", "if", "try", "data", "types", "abencds", "dcl", "pfcg", "mapping"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ROLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_role.htm) →  [CDS DCL - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_role_conditions.htm) →  [CDS DCL - DEFINE ROLE, pfcg\_condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_pfcg.htm) → 

CDS DCL - DEFINE ROLE, Converting Field Values

Elements of CDS entities are associated with an [authorization object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenauthorization_object_glosry.htm "Glossary Entry") in [PFCG conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_pfcg.htm) in the [CDS DCL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_glosry.htm "Glossary Entry"). The [access condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenaccess_condition_glosry.htm "Glossary Entry") itself is generated from [authorizations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenauthorization_glosry.htm "Glossary Entry") of the current user for the authorization object. Here, the value of [CDS elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_element_glosry.htm "Glossary Entry") is supplied with field values of the authorizations. The following points should be noted.

-   [Invalid Values](#abencds-f1-dcl-pfcg-mapping-1--------wildcard-characters---@ITOC@@ABENCDS_F1_DCL_PFCG_MAPPING_2)

Invalid Values

The field values of authorizations are saved as text fields with length 40. For the assignment, they must be convertible to the [data type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_cond_data_types.htm) of the CDS elements:

-   The rules for [lossless assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlossless_assignment_glosry.htm "Glossary Entry") must be followed. If this is not possible, the field value is ignored.

-   If an authorization requests a pattern comparison using a wildcard character (\*), the data type of the CDS element must be character-like.

If a field value cannot be converted, the field value is ignored.

Hints

-   Field values that are ignored are, for example, field values that are longer than the CDS element or field values with a non-numeric content for a numeric CDS element.

-   If field values are ignored, CDS access control may block access completely.

-   Ignored field values are not logged, which means that they cannot be known to the system administrator or to the user.

Wildcard Characters

If a field value contains a wildcard character (\*) as its final character, it is used to create a LIKE condition in which the wildcard character \* is replaced by the SQL wildcard character %.

If the field value contains the SQL wildcard characters % and \_, the escape character # is assigned to them implicitly. This means that CDS access control checks the characters % and \_ in field values like regular characters.

Example

The field value "10%\*" produces the condition LIKE '10#%%' ESCAPE '#'.