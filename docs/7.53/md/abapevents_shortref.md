---
title: "EVENTS - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapevents.htm) Syntax EVENTS evt  EXPORTING VALUE(p1) typing(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_shortref.htm) OPTIONALDEFAULT def1 VALUE(p2) typing(https://help.sap.com
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapevents_shortref.htm"
abapFile: "abapevents_shortref.htm"
keywords: ["do", "if", "class", "abapevents", "shortref"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  E

EVENTS - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapevents.htm)

Syntax

EVENTS evt *\[* EXPORTING VALUE(p1) [typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_shortref.htm)
                         *\[*OPTIONAL*|**{*DEFAULT def1*}**\]*
                       VALUE(p2) [typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_shortref.htm)
                         *\[*OPTIONAL*|**{*DEFAULT def2*}**\]*
                        ... *\]*.

Effect

Declares an instance event evt of a class or interface.

Additions

-   [EXPORTING VALUE(p1) ... VALUE(p2) ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapevents.htm)
    Defines the output parameters p1, p2, ... of the event.
    
-   [typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_shortref.htm)
    Assigns a type to the output parameter.
    
-   [OPTIONAL*|*DEFAULT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapevents_parameters.htm)
    Specifies optional output parameters either with or without the replacement parameters def1, def2, ...