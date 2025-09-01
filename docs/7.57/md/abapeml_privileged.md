  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) →  [ABAP EML - Common EML Statements and Operands](javascript:call_link\('abapcommon_eml_elements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP EML - PRIVILEGED, ABAPEML_PRIVILEGED, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

ABAP EML - PRIVILEGED

The addition PRIVILEGED is used for a privileged access to a RAP BO, for example, to circumvent authority checks. The addition can only be used if the RAP BO entity is defined with with privileged mode .... See the details in the CDS BDL documentation for [with privileged mode](javascript:call_link\('abenbdl_privileged_mode.htm'\)).

The addition is currently possible for the following ABAP EML statements:

-   Short forms
    -   [MODIFY ENTITY PRIVILEGED bdef ...](javascript:call_link\('abapmodify_entity_short.htm'\))
    -   [READ ENTITY PRIVILEGED bdef ...](javascript:call_link\('abapread_entity_short.htm'\))
    -   [GET PERMISSIONS PRIVILEGED ... ENTITY bdef ...](javascript:call_link\('abapget_permissions_short.htm'\))
-   Long forms:
    -   [MODIFY ENTITIES OF bdef PRIVILEGED ENTITY ...](javascript:call_link\('abapmodify_entities_long.htm'\))
    -   [READ ENTITIES OF bdef PRIVILEGED ENTITY ...](javascript:call_link\('abapread_entities_long.htm'\))
    -   [GET PERMISSIONS PRIVILEGED ... OF bdef ENTITY ...](javascript:call_link\('abapget_permissions_long.htm'\))
-   Dynamic forms:
    -   [MODIFY ENTITIES PRIVILEGED OPERATIONS ...](javascript:call_link\('abapmodify_entities_operations_dyn.htm'\))
    -   [READ ENTITIES PRIVILEGED OPERATIONS ...](javascript:call_link\('abapread_entities_operations.htm'\))
    -   [GET PERMISSIONS PRIVILEGED ... OPERATIONS ...](javascript:call_link\('abapget_permissions_dyn.htm'\))

Hint

Using the method get\_current\_context of class CL\_ABAP\_BEHV\_AUX, you can receive context information. Among others, you can determine if the running handler is running in privileged mode, e. g. as follows:

cl\_abap\_behv\_aux=>get\_current\_context( IMPORTING privileged = DATA(priv) ).

Executable Example

The example [Using the Addition PRIVILEGED with an ABAP EML Statement](javascript:call_link\('abeneml_privileged_abexa.htm'\)) demonstrates the addition PRIVILEGED using an [action](javascript:call_link\('abenaction_glosry.htm'\) "Glossary Entry") and a managed RAP BO.

Continue
![Example](exa.gif "Example") [Using the Addition PRIVILEGED with an ABAP EML Statement](javascript:call_link\('abeneml_privileged_abexa.htm'\))