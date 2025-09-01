  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

SET HANDLER - Quick reference

[Reference](javascript:call_link\('abapset_handler.htm'\))

Syntax

SET HANDLER handler1 handler2 ...
            *\[*FOR oref*|**{*ALL INSTANCES*}**\]*
            *\[*ACTIVATION act*\]*.

Effect

Registers or deregisters [event handlers](javascript:call_link\('abenevent_handler_glosry.htm'\) "Glossary Entry") handler1, handler2, ... for events of classes.

Additions

-   Specifies the handler methods handler1, handler2,...: :
    meth - List of methods of the same class.
    oref->meth - List of methods of referenced objects.
    class=>meth - List of static methods of specified classes.
    
-   [FOR *{* oref *|* *{*ALL INSTANCES*}* *}*](javascript:call_link\('abapset_handler_instance.htm'\))
    Registers instance event handlers for an object referenced using oref or for all objects that can raise the event.
    
-   [ACTIVATION act](javascript:call_link\('abapset_handler_instance.htm'\))
    Specifies a registration or deregistration in act.