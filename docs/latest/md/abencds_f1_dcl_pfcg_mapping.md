  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [CDS DCL - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [CDS DCL - DEFINE ROLE, condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) →  [CDS DCL - DEFINE ROLE, pfcg\_condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DCL%20-%20DEFINE%20ROLE%2C%20Converting%20Field%20Values%2C%20ABENCDS_F1_DCL_PFCG_MAPPING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

CDS DCL - DEFINE ROLE, Converting Field Values

Elements of CDS entities are linked with an [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") in [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) in the [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"). The [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") itself is generated from [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") of the current user for the authorization object. Here, the value of [CDS elements](javascript:call_link\('abencds_element_glosry.htm'\) "Glossary Entry") is supplied with field values of the authorizations. The following points should be noted.

-   [Invalid Values](#@@ITOC@@ABENCDS_F1_DCL_PFCG_MAPPING_1)
-   [Wildcard Characters](#@@ITOC@@ABENCDS_F1_DCL_PFCG_MAPPING_2)

Invalid Values   

The field values of authorizations are saved as text fields with length 40. For the assignment, they must be convertible to the [data type](javascript:call_link\('abencds_f1_dcl_cond_data_types.htm'\)) of the CDS elements:

-   The rules for [lossless assignments](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry") must be followed. If this is not possible, the field value is ignored.
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