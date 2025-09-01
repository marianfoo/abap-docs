  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.40 and its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for ABAP Release 7.40, SP02](javascript:call_link\('abennews-740_sp02.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Further%20Changes%20in%20ABAP%20Release%207.40%2C%20SP02%2C%20ABENNEWS-740-OTHERS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

Further Changes in ABAP Release 7.40, SP02

[1\. ABAP Doc](#!ABAP_MODIFICATION_1@1@)
[2\. Authorization Check in CALL TRANSACTION](#!ABAP_MODIFICATION_2@2@)
[3\. Enhancement to RTTI](#!ABAP_MODIFICATION_3@3@)
[4\. Documentation Moved](#!ABAP_MODIFICATION_4@4@)

Modification 1   

ABAP Doc

Special [ABAP Doc comments](javascript:call_link\('abenabap_doc_comment_glosry.htm'\) "Glossary Entry") can be entered in front of [declaration statements](javascript:call_link\('abendeclaration_statement_glosry.htm'\) "Glossary Entry"). These comments are prefixed by "!. Tools of an [ABAP development environment](javascript:call_link\('abenabap_dev_envir_glosry.htm'\) "Glossary Entry") that support [ABAP Doc](javascript:call_link\('abenabap_doc_glosry.htm'\) "Glossary Entry"), such as [ABAP development tools for Eclipse](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), analyze the content of ABAP Doc comments, converts it to HTML and display the content in an appropriate way.

Modification 2   

Authorization Check in CALL TRANSACTION

The new additions [WITH AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\)) and [WITHOUT AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\)) make it possible to perform or skip an authorization check when executing the statement [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)). This makes the statement CALL TRANSACTION [obsolete](javascript:call_link\('abapcall_transaction_auth_obs.htm'\)) if neither of these additions are specified.

Modification 3   

Enhancement to RTTI

The attribute METHODS of the object description class CL\_ABAP\_OBJECTDESCR has a new component, IS\_RAISING\_EXCPS, which can be used to determine whether the exception of a method is class-based. Also, the tabular component EXCEPTIONS the new component IS\_RESUMABLE, which can be used to determine whether a class-based exception can be propagated as a resumable exception.

Modification 4   

Documentation Moved

The documentation describing

-   [shared objects](javascript:call_link\('abenabap_shared_objects.htm'\))
-   [object services](javascript:call_link\('abenabap_object_services.htm'\))
-   [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\))
-   [sXML Library](javascript:call_link\('abenabap_sxml_lib.htm'\))
-   [logical databases](javascript:call_link\('abenldb.htm'\))

has been integrated into the ABAP keyword documentation.