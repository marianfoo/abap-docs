  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20HANDLER%2C%20ABAPSET_HANDLER_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET HANDLER - Short Reference

[Reference](javascript:call_link\('abapset_handler.htm'\))

Syntax

SET HANDLER handler1 handler2 ...
            *\[*FOR oref*|**{*ALL INSTANCES*}**\]*
            *\[*ACTIVATION act*\]*.

Effect

Registers or deregisters [event handlers](javascript:call_link\('abenevent_handler_glosry.htm'\) "Glossary Entry") handler1, handler2, ... for events of classes.

Additions   

-   Specifies the handler methods handler1, handler2, ... :
    meth (list of methods of the same class)
    oref->meth (list of methods of referenced objects)
    class=>meth (list of static methods of specified classes)
-   [FOR *{* oref *|* *{*ALL INSTANCES*}* *}*](javascript:call_link\('abapset_handler_instance.htm'\))
    Registers instance event handlers for an object referenced using oref or for all objects that can raise the event.
-   [ACTIVATION act](javascript:call_link\('abapset_handler_instance.htm'\))
    Specifies a registration or deregistration in act.