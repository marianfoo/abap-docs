  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-75.htm) →  [Changes in Release 7.55](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-755.htm) → 

ABAP CDS Access Control in Release 7.55

[1\. Check with element IS *\[*NOT*\]* INITIAL in a literal condition](#!ABAP_MODIFICATION_1@1@)
[2\. Addition bypass when](#!ABAP_MODIFICATION_2@2@)
[3\. Check on the user name in user conditions](#!ABAP_MODIFICATION_3@3@)
[4\. Data types](#!ABAP_MODIFICATION_4@4@)
[5\. Aspect bypass conditions](#!ABAP_MODIFICATION_5@5@)

Modification 1

Check with element IS *\[*NOT*\]* INITIAL in a Literal Condition

In a literal condition, IS *\[*NOT*\]* INITIAL can now be used to check whether the value of the left side matches (does not match) the initial value of the ABAP data type that matches the element.

Modification 2

Addition bypass when

The addition [BYPASS WHEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_pfcg.htm) can now be used to specify a bypass condition for an element. If the condition is met, the element in question is not used for authorization filtering.

Modification 3

Check on the User Name in User Conditions

When the user name is checked in [user conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_user.htm), the following can now be checked instead of the user name:

-   The value of the alias.

-   The number of the business partner assigned to the user.
    

Modification 4

Data Types

The operand that can be specified on the left side of a condition of an access rule of a CDS role can now have the built-in ABAP Dictionary [data type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_cond_data_types.htm) RAW.

Modification 5

Aspect Bypass Conditions

IS *\[*NOT*\]* INITIAL and IS INITIAL OR NULL are now possible as [aspect bypass conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_generic_aspect.htm).