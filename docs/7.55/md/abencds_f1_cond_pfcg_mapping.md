---
title: "Syntax"
description: |
  ... ( ...  element1, element2 ...  ... ) =?= ASPECT pfcg_auth ( ... PFCG_MAPPING = pfcg_mapping ...  ) ... Effect Associates an element list specified in curly brackets  element1, element2 ...  with a PFCG mapping(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/a
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_pfcg_mapping.htm"
abapFile: "abencds_f1_cond_pfcg_mapping.htm"
keywords: ["select", "do", "if", "try", "class", "data", "types", "abencds", "cond", "pfcg", "mapping"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ROLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_role.htm) →  [CDS DCL - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_role_conditions.htm) →  [CDS DCL - DEFINE ROLE, pfcg\_condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_pfcg.htm) → 

CDS DCL - DEFINE ROLE, pfcg\_mapping

Syntax

... ( ... { element1*\[*, element2 ...*\]* } ... )
        =|?= ASPECT pfcg\_auth
               ( ... PFCG\_MAPPING = pfcg\_mapping ...  ) ...

Effect

Associates an element list specified in curly brackets { element1*\[*, element2 ...*\]* } with a [PFCG mapping](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry") pfcg\_mapping in the definition of a [PFCG condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_pfcg.htm).

-   The element list of the left side is a comma-separated list of one or more directly specified [CDS elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_element_glosry.htm "Glossary Entry") of the CDS entity for which the access condition is defined. An element element can also be specified using a path expression [path\_expr](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_path_expression_glosry.htm "Glossary Entry") and must have one of the valid [data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_cond_data_types.htm).

-   After PFCG\_MAPPING =, the right side must specify a PFCG mapping pfcg\_mapping defined using [DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_pfcg_mapping.htm) as part of a [CDS access policy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_policy_glosry.htm "Glossary Entry").

When the PFCG condition is transformed into specific conditions, the PFCG mappings are handled as follows by CDS access control:

-   The authorization fields specified in the comma-separated list of the definition of the [PFCG mapping](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_pfcg_mapping.htm) are used as input fields of the mapping pfcg\_mapping.

-   The output fields of the [PFCG mapping](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_pfcg_mapping.htm) are compared with the CDS elements of the element list associated with the PFCG mapping in the PFCG condition.

The other conditions of the [PFCG condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_pfcg.htm) are created as described there. The PFCG condition is true if the conditions for the individually specified CDS elements and the PFCG mapping are met. If multiple authorizations exist for a single authorization field and there are individually specified CDS elements alongside the PFCG mapping, the PFCG mapping is resolved for each individual authorization.

Hints

-   PFCG mappings enable those entries in a CDS entity allowed for a particular user to be specified using high-order structural characteristics.

-   Using PFCG mappings can negatively affect performance, particularly if individual CDS elements are specified simultaneously and if multiple authorizations exist for a single authorization field.

-   If the PFCG condition has the addition [IN SCENARIO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_pfcg.htm), the PFCG mapping used in this place must also have this addition and name the same scenario.

Example

The following role uses the PFCG mapping demo\_cds\_pfcg\_mapping defined in the example for [DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_pfcg_mapping.htm) in a [PFCG condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpfcg_condition_glosry.htm "Glossary Entry"):

@MappingRole: true  
define role demo\_cds\_role\_pfcg\_mapping
   { grant select on demo\_cds\_auth\_pfcg\_mapping
       where ( { view\_object, view\_obj\_name, view\_devclass } )
         = aspect pfcg\_auth  
                ( s\_develop , pfcg\_mapping = demo\_cds\_pfcg\_mapping ); }      

The program DEMO\_CDS\_AUTH\_PFCG\_MAPPING accesses the view DEMO\_CDS\_AUTH\_PFCG\_MAPPING and an [SQL trace](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_trace_glosry.htm "Glossary Entry") demonstrates how the PFCG mapping works.