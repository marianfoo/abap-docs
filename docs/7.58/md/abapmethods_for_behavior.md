  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Statements for RAP](javascript:call_link\('abenrap_obsolete.htm'\)) →  [Obsolete Elements in ABAP Behavior Pool Implementations](javascript:call_link\('abenabp_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20METHODS%2C%20FOR%20BEHAVIOR%2C%20ABAPMETHODS_FOR_BEHAVIOR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

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