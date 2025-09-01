---
title: "SAP GUI User Dialogs"
description: |
  This section handles dialog processing(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendialog_processing_glosry.htm 'Glossary Entry') in dialog sessions(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendialog_session_glosry.htm 'Glossary Entry') based on SAP GUI(ht
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm"
abapFile: "abenabap_screens.htm"
keywords: ["select", "do", "if", "try", "class", "abenabap", "screens"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) → 

SAP GUI User Dialogs

This section handles [dialog processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendialog_processing_glosry.htm "Glossary Entry") in [dialog sessions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendialog_session_glosry.htm "Glossary Entry") based on [SAP GUI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_gui_glosry.htm "Glossary Entry"). The user dialogs are all based on classic [dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry"). Both general and special dynpros (selection screens, lists) are possible. Dynpros can be associated with [GUI controls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengui_control_glosry.htm "Glossary Entry").

-   [Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros.htm)

-   [Selection screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen.htm)

-   [Classic lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpro_list.htm)

-   [Conversion routines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_exits.htm)

Notes

-   The dialog processing shown here are closely associated with the ABAP programming language, which means that the handling of user dialogs is performed mainly by ABAP language elements.

-   When programming user dialogs, it is important that the presentation logic and application logic are decoupled.

-   For Web-based UIs, [SAPUI5](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensapui5_glosry.htm "Glossary Entry"), [Web Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenweb_dynpro_glosry.htm "Glossary Entry") and [Business Server Pages](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbusiness_server_pages_glosry.htm "Glossary Entry") are available, which are independent of the classic dynpros and are addressed using object-oriented frameworks.

Continue
![Example](exa.gif "Example") [User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_abexa.htm)
[Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros.htm)
[Selection Screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen.htm)
[Classic Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpro_list.htm)
[Conversion Routines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_exits.htm)