---
title: "SET HANDLER - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_handler.htm) Syntax SET HANDLER handler1 handler2 ... FOR orefALL INSTANCES ACTIVATION act. Effect Registers or deregisters event handlers(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_handler_shortref.htm"
abapFile: "abapset_handler_shortref.htm"
keywords: ["do", "if", "try", "method", "class", "abapset", "handler", "shortref"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  S

SET HANDLER - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_handler.htm)

Syntax

SET HANDLER handler1 handler2 ...
            *\[*FOR oref*|**{*ALL INSTANCES*}**\]*
            *\[*ACTIVATION act*\]*.

Effect

Registers or deregisters [event handlers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenevent_handler_glosry.htm "Glossary Entry") handler1, handler2, ... for events of classes.

Additions

-   Specifies the handler methods handler1, handler2,...: :
    meth - List of methods of the same class.
    oref->meth - List of methods of referenced objects.
    class=>meth - List of static methods of specified classes.
    
-   [FOR *{* oref *|* *{*ALL INSTANCES*}* *}*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_handler_instance.htm)
    Registers instance event handlers for an object referenced using oref or for all objects that can raise the event.
    
-   [ACTIVATION act](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_handler_instance.htm)
    Specifies a registration or deregistration in act.