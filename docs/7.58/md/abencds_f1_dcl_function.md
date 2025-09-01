---
title: "Syntax"
description: |
  ...  SACF_CHECK_IN_USE( NAME => scenario_name , OBJECT => auth_object  ) IS NOT INITIAL    OPTIONAL_ELEMENT_EXISTS( NAME => element ) IS NOT INITIAL    SWITCH_RUNTIME_STATE( NAME => switch_name ) IS NOT INITIAL    TOGGLE_RUNTIM
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_function.htm"
abapFile: "abencds_f1_dcl_function.htm"
keywords: ["select", "do", "while", "if", "case", "try", "method", "data", "types", "abencds", "dcl", "function"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ROLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_role.htm) →  [CDS DCL - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_role_conditions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DCL%20-%20DEFINE%20ROLE%2C%20dcl_function%2C%20ABENCDS_F1_DCL_FUNCTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

CDS DCL - DEFINE ROLE, dcl\_function

Syntax

... *{* SACF\_CHECK\_IN\_USE( NAME => scenario\_name *\[*, OBJECT => auth\_object *\]* )
          IS *\[*NOT*\]* INITIAL *}*
  *|* *{* OPTIONAL\_ELEMENT\_EXISTS( NAME => element )
          IS *\[*NOT*\]* INITIAL *}*
  *|* *{* SWITCH\_RUNTIME\_STATE( NAME => switch\_name )
          IS *\[*NOT*\]* INITIAL *}*
  *|* *{* TOGGLE\_RUNTIME\_STATE( NAME => toggle\_name )
          IS *\[*NOT*\]* INITIAL *}*
  *|* *{* CONTEXT\_NODE\_EXISTS(...)
          IS *\[*NOT*\]* INITIAL *}* ...

Variants:

[1\. ... SACF\_CHECK\_IN\_USE ...](#!ABAP_VARIANT_1@1@)
[2\. ... OPTIONAL\_ELEMENT\_EXISTS ...](#!ABAP_VARIANT_2@2@)
[3\. ... SWITCH\_RUNTIME\_STATE ...](#!ABAP_VARIANT_3@3@)
[4\. ... TOGGLE\_RUNTIME\_STATE ...](#!ABAP_VARIANT_4@4@)
[5\. ... CONTEXT\_NODE\_EXISTS ...](#!ABAP_VARIANT_5@5@)

Effect

DCL functions are evaluated in the ABAP application server before the [access conditions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaccess_condition_glosry.htm "Glossary Entry") are sent to the database.

They evaluate to either logical TRUE or logical FALSE and then may result in reduction of the logical expression tree of the access control.

Hint

The effect of the DCL function applies at runtime only. Syntactical correctness of the access control must be always given.

For example, in a condition like dcl\_function AND element IS NULL a syntax error will appear when element does not exist, even when the dcl\_function at the time of compilation behaves like a logical FALSE.

Variant 1   

... SACF\_CHECK\_IN\_USE ...

Effect

Using this DCL function, the state of switchable authorization checks can be queried and used in an access control to enable or disable condition blocks.

The function behaves like the ABAP method CL\_SACF=>SACF\_CHECK\_IN\_USE with its parameters ID\_NAME and ID\_OBJECT. The returned value can only be tested by the IS *\[*NOT*\]* INITIAL operator:

-   SACF\_CHECK\_IN\_USE( ... ) IS INITIAL is TRUE when the given scenario (eventually specifically for the given authorization object) is not active, that is, an authorization check switched by this scenario behaves like full authorization.
-   SACF\_CHECK\_IN\_USE( ...) IS NOT INITIAL is TRUE when the given scenario (eventually specifically for the given authorization object) is active, that is, an authorization check switched by this scenario is executed based on the users authorizations.

Example

GRANT SELECT ON cds\_entity
  WHERE
    SACF\_CHECK\_IN\_USE (NAME => NEW\_AUTH\_SWITCH ) IS INITIAL
      AND
    ( element ) = ASPECT PFCG\_AUTH( OLD\_AUTH, F )
  OR
    SACF\_CHECK\_IN\_USE( NAME => NEW\_AUTH\_SWITCH ) IS NOT INITIAL
      AND
    ( element ) = ASPECT PFCG\_AUTH( NEW\_AUTH, F );

This access control realizes a migration from an old authorization object OLD\_AUTH to a new authorization object NEW\_AUTH based on the SACF scenario NEW\_AUTH\_SWITCH. As soon as this scenario is activated, the old authorization object is no longer considered.

Hint

When you only need to introduce new authorization objects without the need to instantly disable the evaluation of a predecessor, the regular syntax addition to PFCG conditions is preferred:

( element ) = ASPECT PFCG\_AUTH( NEW\_AUTH IN SCENARIO NEW\_AUTH\_SWITCH, F)

Variant 2   

...  OPTIONAL\_ELEMENT\_EXISTS ...

Effect

With this DCL function, existence of the given CDS element in the protected entity can be queried at runtime. Based on the outcome of the check, larger condition blocks in the access control can then be enabled or disabled.

It is an extension to the concept of optional elements ([WITH OPTIONAL ELEMENTS](abencds_dcl_role_cond_rule.htm#!ABAP_ADDITION_1@1@)) and allows application not only for newly introduced elements, but also for replacement scenarios in which an element is semantically replaced by another element.

Hints

-   The element which is queried in the function must be declared as optional element.
    
    By using the function with an element, you explicitly make clear that the element may be missing, therefore declaring it optional is mandatory to avoid syntactically wrong access controls when the element is missing.
    
-   The element which is queried in the function must be used at least once outside in the access control in a condition statement.

Example

GRANT SELECT ON cds\_entity
   WITH OPTIONAL ELEMENTS (itemState DEFAULT FALSE )
     WHERE
       OPTIONAL\_ELEMENT\_EXISTS( NAME => itemState ) IS INITIAL
         AND
          toItem.state = 'A'
     OR
       OPTIONAL\_ELEMENT\_EXISTS( NAME => itemState ) IS NOT INITIAL
         AND
          itemState = 'A';

This access control formerly realized access control using an association.

To increase the selection performance, this association should be replaced by a replica of the used element in the protected entity itself (itemState).

As this element is not instantly available in CDS entities which inherit their access conditions from this entity, the new element is introduced as optional element (the default value FALSE is secure by default, but in the current case not used at runtime due to the DCL function), and in this case, the former access control should apply.

As soon as the new element becomes available, it should be used instead and the former one no longer be used at all (to avoid performance degradation due to join evaluation).

Variant 3   

...  SWITCH\_RUNTIME\_STATE ...

Effect

This function retrieves the runtime state of a switch in the [Switch Framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenswitch_framework_glosry.htm "Glossary Entry") (SFW):

-   If the switch state is On, the result of the function is considered non-initial and testing the function with IS NOT INITIAL returns TRUE, while testing with IS INITIAL returns FALSE.
-   Otherwise, the result of the function is initial and the test result is reversed under the two operators mentioned above.

Hints

-   For switches in the Switch Framework of type Feature Toggle, use the dedicated DCL function TOGGLE\_RUNTIME\_STATE.
-   This function is only evaluated at runtime. See the documentation for the CDS role addition [SWITCHABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_role.htm) for another type of switch dependency in CDS access control that affects the access control generation process.

Example

GRANT SELECT ON cds\_entity
  WHERE
    IF
      ( SWITCH\_RUNTIME\_STATE( NAME => SWITCH\_NAME ) IS NOT INITIAL )
    THEN
      { STATE1 = 'A' }
    ELSE
      { STATE2 = 'A' };

If the switch with the name SWITCH\_NAME is active (On), the access condition tests the value of the field STATE1, otherwise it tests the value of the field STATE2.

Variant 4   

... TOGGLE\_RUNTIME\_STATE ...

Effect

This function behaves like SWITCH\_RUNTIME\_STATE at runtime. The difference between the two functions is the type of the switch whose name is specified in the NAME parameter. While TOGGLE\_RUNTIME\_STATE can only be used for switches of type Feature Toggle, the function SWITCH\_RUNTIME\_STATE can only be used for switches of other types.

The rationale for using two different functions is the best practice that feature toggles should exist only temporarily until the feature they guard becomes a core feature, while switches of other types are long-lived.

The dedicated function allows the reader of the access control to immediately recognize that the content is ephemeral.

Variant 5   

...  CONTENT\_NODE\_EXISTS ...

Effect

This function is reserved for use by SAP.