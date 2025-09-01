  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  S

SET HANDLER - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_handler.htm)

Syntax

SET HANDLER handler1 handler2 ...
            *\[*FOR oref*|**{*ALL INSTANCES*}**\]*
            *\[*ACTIVATION act*\]*.

Effect

Registers or deregisters [event handlers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenevent_handler_glosry.htm "Glossary Entry") handler1, handler2, ... for events of classes.

Additions

-   Specifies the handler methods handler1, handler2,...: :
    meth - List of methods of the same class.
    oref->meth - List of methods of referenced objects.
    class=>meth - List of static methods of specified classes.
    
-   [FOR *{* oref *|* *{*ALL INSTANCES*}* *}*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_handler_instance.htm)
    Registers instance event handlers for an object referenced using oref or for all objects that can raise the event.
    
-   [ACTIVATION act](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_handler_instance.htm)
    Specifies a registration or deregistration in act.