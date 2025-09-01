---
title: "SET HANDLER - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_handler.htm) Syntax SET HANDLER handler1 handler2 ... FOR orefALL INSTANCES ACTIVATION act. Effect Registers or deregisters event handlers(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_handler_shortref.htm"
abapFile: "abapset_handler_shortref.htm"
keywords: ["do", "if", "try", "method", "class", "abapset", "handler", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  S

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20HANDLER%2C%20ABAPSET_HANDLER_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET HANDLER - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_handler.htm)

Syntax

SET HANDLER handler1 handler2 ...
            *\[*FOR oref*|**{*ALL INSTANCES*}**\]*
            *\[*ACTIVATION act*\]*.

Effect

Registers or deregisters [event handlers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenevent_handler_glosry.htm "Glossary Entry") handler1, handler2, ... for events of classes.

Additions   

-   Specifies the handler methods handler1, handler2, ... :
    meth (list of methods of the same class)
    oref->meth (list of methods of referenced objects)
    class=>meth (list of static methods of specified classes)
-   [FOR *{* oref *|* *{*ALL INSTANCES*}* *}*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_handler_instance.htm)
    Registers instance event handlers for an object referenced using oref or for all objects that can raise the event.
-   [ACTIVATION act](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_handler_instance.htm)
    Specifies a registration or deregistration in act.