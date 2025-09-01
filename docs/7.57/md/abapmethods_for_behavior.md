  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Statements for RAP](javascript:call_link\('abenrap_obsolete.htm'\)) →  [Obsolete ABP Statements](javascript:call_link\('abenabp_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: METHODS, FOR BEHAVIOR, ABAPMETHODS_FOR_BEHAVIOR, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

METHODS, FOR BEHAVIOR

Syntax

  *{* METHODS read   FOR BEHAVIOR ... *}*
*|* *{* METHODS modify FOR BEHAVIOR ... *}*
*|* *{* METHODS lock   FOR BEHAVIOR ... *}*

Effect

Obsolete declaration of [ABP handler methods](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") in the [handler class](javascript:call_link\('abenabp_handler_class_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"). When using the addition FOR BEHAVIOR, the methods must have one of the predefined names modify, read, or lock.

Instead the following declarations should be used:

-   [METHODS meth FOR READ   ...](javascript:call_link\('abapmethods_for_rap_behv.htm'\))
-   [METHODS meth FOR MODIFY ...](javascript:call_link\('abapmethods_for_rap_behv.htm'\))
-   [METHODS meth FOR LOCK   ...](javascript:call_link\('abapmethods_for_rap_behv.htm'\))

Here, the name of the method is not prescribed. The meaning of the methods is defined by the addition FOR MODIFY, FOR READ, or FOR LOCK instead.