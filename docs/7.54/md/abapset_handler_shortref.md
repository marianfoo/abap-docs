---
title: "SET HANDLER - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_handler.htm) Syntax SET HANDLER handler1 handler2 ... FOR orefALL INSTANCES ACTIVATION act. Effect Registers or deregisters event handlers(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_handler_shortref.htm"
abapFile: "abapset_handler_shortref.htm"
keywords: ["do", "if", "try", "method", "class", "abapset", "handler", "shortref"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  S

SET HANDLER - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_handler.htm)

Syntax

SET HANDLER handler1 handler2 ...
            *\[*FOR oref*|**{*ALL INSTANCES*}**\]*
            *\[*ACTIVATION act*\]*.

Effect

Registers or deregisters [event handlers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenevent_handler_glosry.htm "Glossary Entry") handler1, handler2, ... for events of classes.

Additions

-   Specifies the handler methods handler1, handler2, ... :
    meth (list of methods of the same class)
    oref->meth (list of methods of referenced objects)
    class=>meth (list of static methods of specified classes)
    
-   [FOR *{* oref *|* *{*ALL INSTANCES*}* *}*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_handler_instance.htm)
    Registers instance event handlers for an object referenced using oref or for all objects that can raise the event.
    
-   [ACTIVATION act](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_handler_instance.htm)
    Specifies a registration or deregistration in act.