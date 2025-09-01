  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ROLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_role.htm) →  [CDS DCL - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_conditions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DCL%20-%20DEFINE%20ROLE%2C%20if_then_else%2C%20ABENCDS_F1_DCL_IFTHENELSE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

CDS DCL - DEFINE ROLE, if\_then\_else

Syntax

... IF ( condition ) THEN { condition } ELSE { condition } ...

Effect

The condition condition in the IF branch is evaluated in the application server. If the result is true, the if\_then\_else is replaced by the condition in the THEN branch, otherwise by the condition in the ELSE branch.

Hints

-   The condition in the IF branch must contain only [left-side host expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_cond_left_side.htm) (that is, it must not contain a reference to any elements of the CDS entity). Parentheses and logical operators are allowed.
-   The conditions in the THEN and ELSE branches can be any condition, including a nested if\_then\_else.
-   The separation between the THEN and the ELSE branches occurs at runtime. At compile time, both branches must be syntactically valid.

Example

GRANT SELECT ON cds\_entity
  WHERE
    IF
      (
        ( $PARAMETERS.P1 = 'NEW' OR $PARAMETERS.P1 = 'MODERN' )
          AND
        ( ) = ASPECT PFCG\_AUTH( S\_DEMO )
      )
    THEN
      {
        A\_NEW = 1 AND ( B\_NEW ) = ASPECT PFCG\_AUTH( S\_DEMO, F1 )
      }
    ELSE
      {
        A\_OLD = 1 AND ( B\_OLD ) = ASPECT PFCG\_AUTH( S\_OLD, F1 )
      };

This condition tests whether the actual value of the view parameter P1 is either NEW or MODERN and in addition whether the current user has any authorization for the authorization object S\_DEMO. If this condition is true, the access condition using the fields A\_NEW and B\_NEW applies, otherwise the one using A\_OLD and B\_OLD applies.