  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-75.htm) →  [News for ABAP Release 7.55](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-755.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20Access%20Control%20in%20ABAP%20Release%207.55%2C%20ABENNEWS-755-CDS_ACCESS_CONTROL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

ABAP CDS Access Control in ABAP Release 7.55

[1\. Check with element IS *\[*NOT*\]* INITIAL in a Literal Condition](#!ABAP_MODIFICATION_1@1@)
[2\. Addition bypass when](#!ABAP_MODIFICATION_2@2@)
[3\. Check on the User Name in User Conditions](#!ABAP_MODIFICATION_3@3@)
[4\. Data Types](#!ABAP_MODIFICATION_4@4@)
[5\. Aspect Bypass Conditions](#!ABAP_MODIFICATION_5@5@)
[6\. Quantifier Operators](#!ABAP_MODIFICATION_6@6@)

Modification 1   

Check with element IS *\[*NOT*\]* INITIAL in a Literal Condition

In a literal condition, IS *\[*NOT*\]* INITIAL can now be used to check whether the value of the left side matches (does not match) the initial value of the ABAP data type that matches the element.

Modification 2   

Addition bypass when

The addition [BYPASS WHEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_pfcg.htm) can now be used to specify a bypass condition for an element. If the condition is met, the element in question is not used for authorization filtering.

Modification 3   

Check on the User Name in User Conditions

When the user name is checked in [user conditions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_user.htm), the following can now be checked instead of the user name:

-   The value of the alias.
-   The number of the business partner assigned to the user.

Modification 4   

Data Types

The operand that can be specified on the left side of a condition of an access rule of a CDS role can now have the built-in ABAP Dictionary [data type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_cond_data_types.htm) RAW.

Modification 5   

Aspect Bypass Conditions

IS *\[*NOT*\]* INITIAL and IS INITIAL OR NULL are now possible as [aspect bypass conditions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_generic_aspect.htm).

Modification 6   

Quantifier Operators

With the new addition ALL, access conditions can express that access shall only be granted when from a set-valued association all values satisfy the condition.

WHERE ALL toItem.State = 'A'

To accompany this use case, the BYPASS WHEN operator has been extended to literal conditions also.

A dedicated operator EXISTS can be used when different access conditions using the same set-valued association shall not be coupled in their fields by means of a common join expression.

[More Information](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_role_conditions.htm)