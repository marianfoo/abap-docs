---
title: "CDS DCL - DEFINE ASPECT"
description: |
  Syntax aspect_annot(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_dcl_as_annotations.htm) DEFINE ASPECT aspect AS SELECT FROM aspect_entity WITH USER ELEMENT user_element WITH FILTER ELEMENTS ( filter_element1 AS filter_alias1, filter_eleme
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_generic_aspect.htm"
abapFile: "abencds_f1_define_generic_aspect.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abencds", "define", "generic", "aspect"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_accesspolicy.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DCL - DEFINE ASPECT, ABENCDS_F1_DEFINE_GENERIC_ASPECT, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DCL - DEFINE ASPECT

Syntax

*\[*[aspect\_annot](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_dcl_as_annotations.htm)*\]*
*\[*DEFINE*\]* ASPECT aspect AS SELECT FROM aspect\_entity
  WITH USER ELEMENT user\_element
  *\[*WITH FILTER ELEMENTS ( filter\_element1 *\[*AS filter\_alias1*\]*,
        filter\_element2... ) *\]*
{
    output1 *\[*BYPASS WHEN aspect\_bypass\_condition*\]*
    *\[*, ... *\]*
}

Effect

Defines a self-defined aspect aspect as part of a [CDS access policy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_policy_glosry.htm "Glossary Entry") defined using [DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_accesspolicy.htm). The name of the self-defined aspect must be the same as the name of the CDS access policy.

The definition of a self-defined aspect contains the following:

-   An aspect entity aspect\_entity, specified after the name aspect, which is used as a data source.
-   An element user\_element of the aspect entity that is used as the input field for the user name of the logged on user.
-   An optional list of elements filter\_element of the aspect entity. With filter elements the rows of the aspect entity can be reduced specifically for a usage location in an access role ( ( ...) = ASPECT ... FILTER BY condition>). Filter elements are addressed in the filter condition using the last component of their path expression, optionally an alias can be specified by the AS addition. Adding filter elements is a compatible change from the perspective of access roles using the aspect, that is, they offer a filtering possibility, but do not mandate that filtering is in fact done.
-   A comma-separated list that specifies the output elements output1, output2, ... of the generic aspect. The specified order applies.
-   Any number of the output fields can be tagged with a condition using the addition BYPASS WHEN aspect\_bypass\_condition. Typical bypass values are \* or an empty value.

The following are possible as bypass conditions aspect\_bypass\_condition:

-   [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cond_expr_null_v2.htm)
-   [IS *\[*NOT*\]* INITIAL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cond_expr_initial_v2.htm)
-   IS INITIAL OR NULL
    
    Is met if the value of the aspect is NULL or the type-compliant initial value.
    
-   \= [literal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_literal_v2.htm)

At runtime, the field user\_element is filled with the user name of the current user. The rows produced in the aspect entity are matched with their output fields in the specified order and with the elements on the left side of the access condition to which the self-defined aspect is assigned. This means those rows in the protected entity meet the condition for which a row exists for the current user in the aspect entity.

When the bypass condition is used, the match with this field is not used if this condition exists in a row of the aspect entity. A specified value, therefore, (such as an asterisk \*) can be used to indicate that any values of the protected entity are allowed.

Special Requirements in the Aspect Entity

The content of the aspect entity has a particular relevance for audits by being used in a self-defined aspect in access control.

To determine which user had access to particular data at a particular time in a system, it must be possible to reconstruct the state of the data of the aspect entity. Existing mechanisms (such as version management or change documents) cover this requirement in the case of development objects or PFCG roles, whereas aspect entities may freely specify their data sources and cannot control whether these sources are themselves auditable.

The development and runtime systems for CDS access control cannot check whether data sources are auditable. To emphasize this requirement, however, the aspect entity must have the following annotations:

-   An auditing type with the annotation @AccessControl.auditing.type. Currently only the value #CUSTOM is possible.
-   A component with the annotation @AccessControl.auditing.specification specifying (as text) how the content of the entity is audited.

Hints

-   Just adding the annotations, however, does not activate auditing. This annotation should only be set if it is ensured that auditing takes place.
-   Auditing must respect all data sources of the aspect entity.
-   If auditing cannot be ensured, the aspect entity cannot be used in a self-defined aspect.
-   In ABAP SQL access to a CDS entity assigned a role of this type, self-defined aspects are defined internally using a [subquery](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensubquery_glosry.htm "Glossary Entry") after EXISTS.

Continue
[CDS DCL - DEFINE ASPECT, aspect\_annot](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_dcl_as_annotations.htm)