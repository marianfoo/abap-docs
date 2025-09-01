---
title: "General Dynpros"
description: |
  Dynpro is an abbreviation for 'Dynamic Program'. A dynpro is a repository(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_glosry.htm 'Glossary Entry') object and is always a component of an ABAP program (a function pool, executable program, or module pool). It consists of
version: "7.57"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros.htm"
abapFile: "abenabap_dynpros.htm"
keywords: ["select", "do", "if", "try", "class", "abenabap", "dynpros"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: General Dynpros, ABENABAP_DYNPROS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion for improvement:)

General Dynpros

Dynpro is an abbreviation for "Dynamic Program". A dynpro is a [repository](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_glosry.htm "Glossary Entry") object and is always a component of an ABAP program (a function pool, executable program, or module pool). It consists of a [screen layout](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen_glosry.htm "Glossary Entry") with its screen elements and the [dynpro flow logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry"). [Dynpro fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_field_glosry.htm "Glossary Entry") are assigned to the screen elements.

The flow logic contains processing blocks for events that are raised before a screen layout is sent, and after user actions on the displayed screen layout. General dynpros are edited using the [Screen Painter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen_painter_glosry.htm "Glossary Entry") tool. Special dynpros, such as selection screens and lists, are generated from ABAP statements.

-   [User Interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_gui.htm)
-   [Screen and Screen Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_screen.htm)
-   [Dynpro Fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_fields.htm)
-   [Dynpro Flow and Dynpro Sequences](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_processing.htm)
-   [Input Checks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_checks.htm)
-   [Field Help, Input Help, and Dropdown List Boxes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_help.htm)
-   [Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_dynpro_statements.htm)
-   [ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_abap_statements.htm)

For detailed information about dynpros, see the documentation Classic Dynpro Programming in the SAP Help Portal.

Hint

The classic dynpros described here are considered obsolete by SAP for application programs. For new developments, only [SAPUI5](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensapui5_glosry.htm "Glossary Entry") or [Web Dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenweb_dynpro_glosry.htm "Glossary Entry") should be used.

Continue
[dynpro - User Interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_gui.htm)
[dynpro - Screen Layout and Screen Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_screen.htm)
[dynpro - Dynpro Fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_fields.htm)
[dynpro - Dynpro Flow and Dynpro Sequences](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_processing.htm)
[dynpro - Input Checks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_checks.htm)
[dynpro - Field Help, Input Help, and Dropdown List Boxes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_help.htm)
[dynpro - Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_dynpro_statements.htm)
[dynpro - ABAP Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_abap_statements.htm)