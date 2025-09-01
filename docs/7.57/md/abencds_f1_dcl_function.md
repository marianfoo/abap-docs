  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ROLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_role.htm) →  [CDS DCL - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_conditions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DCL - DEFINE ROLE, dcl_function, ABENCDS_F1_DCL_FUNCTION, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DCL - DEFINE ROLE, dcl\_function

Syntax

... *{* SACF\_CHECK\_IN\_USE( NAME => scenario\_name *\[*, OBJECT => auth\_object *\]* )
          IS *\[*NOT*\]* INITIAL *}*
  *|* *{* OPTIONAL\_ELEMENT\_EXISTS( NAME >= element )
          IS *\[*NOT*\]* INITIAL *}* ...

Variants:

[1\. ... SACF\_CHECK\_IN\_USE ...](#!ABAP_VARIANT_1@1@)
[2\. ... OPTIONAL\_ELEMENT\_EXISTS ...](#!ABAP_VARIANT_2@2@)

Effect

DCL functions are evaluated in the ABAP application server before the access conditions are sent to the database.

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