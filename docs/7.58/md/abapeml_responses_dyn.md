  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) →  [ABAP EML - Common EML Statements and Operands](javascript:call_link\('abapcommon_eml_elements.htm'\)) →  [ABAP EML - response\_param](javascript:call_link\('abapeml_response.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20response_param%2C%20Dynamic%20Forms%20of%20ABAP%20EML%20Statements%2C%20ABAPEML_RESPONSES_DYN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20
for%20improvement:)

response\_param, Dynamic Forms of ABAP EML Statements

Syntax

... *\[*FAILED failed\_resp*\]*
    *\[*MAPPED mapped\_resp*\]*
    *\[*REPORTED reported\_resp*\]* ...

Effect

Used for [RAP responses](javascript:call_link\('abenrap_response_glosry.htm'\) "Glossary Entry") in the context of dynamic forms of ABAP EML statements. The operands failed\_resp, mapped\_resp and reported\_resp after the respective ABAP word must be internal tables typed with ABP\_BEHV\_RESPONSE\_TAB. All variants can be used together where possible.

They can be specified for the following dynamic ABAP EML statements:

-   [MODIFY ENTITIES OPERATIONS](javascript:call_link\('abapmodify_entities_operations_dyn.htm'\))
-   [READ ENTITIES OPERATIONS](javascript:call_link\('abapread_entities_operations.htm'\))
-   [COMMIT ENTITIES RESPONSES OF](javascript:call_link\('abapemlcommit_entities_dyn.htm'\))
-   [GET PERMISSIONS OPERATIONS](javascript:call_link\('abapget_permissions_dyn.htm'\))
-   [SET LOCKS lock\_tab](javascript:call_link\('abapset_locks_dyn.htm'\))

The internal table can be constructed inline using the declaration operators [DATA](javascript:call_link\('abendata_inline.htm'\)) and [FINAL](javascript:call_link\('abenfinal_inline.htm'\)). It contains deep structures of type ABP\_BEHV\_RESPONSE for each entity for which entries are available in the response. These structures include the following components:

Component

Details

Type

root\_name

Specifies the name of the [RAP BO root entity](javascript:call_link\('abenrap_bo_root_entity_glosry.htm'\) "Glossary Entry") of entity entity\_name for which entries are available in the response.

ABP\_ROOT\_ENTITY\_NAME

entity\_name

Specifies the entity's name for which entries are available in the response. This can be the root entity or associated and child entities of the root entity.

ABP\_ENTITY\_NAME

entries

Internal table containing the entries for which information is available.

REF TO DATA

Further Information

See further information and rules on response parameters in implementations of the [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") in the Development guide for the ABAP RESTful Application Programming Model, section [General RAP BO Implementation Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/1040b81372d44ed38b07a409fa0e1769?version=sap_cross_product_abap).

Executable Example

The example [ABAP EML - Responses (Dynamic Forms of ABAP EML Statements](javascript:call_link\('abeneml_responses_dyn_abexa.htm'\)) demonstrates the response parameters with the dynamic forms of read and modify operations in the context of a simple managed RAP BO.