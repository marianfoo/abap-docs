---
title: "SAP GUI User Dialogs"
description: |
  This section covers dialog processing(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendialog_processing_glosry.htm 'Glossary Entry') in dialog sessions(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendialog_session_glosry.htm 'Glossary Entry') based on SAP GUI(htt
version: "7.57"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm"
abapFile: "abenabap_screens.htm"
keywords: ["select", "do", "if", "try", "class", "abenabap", "screens"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SAP GUI User Dialogs, ABENABAP_SCREENS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0A
Suggestion for improvement:)

SAP GUI User Dialogs

This section covers [dialog processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendialog_processing_glosry.htm "Glossary Entry") in [dialog sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendialog_session_glosry.htm "Glossary Entry") based on [SAP GUI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_gui_glosry.htm "Glossary Entry"). The user dialogs are all based on classic [dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry"). Both general and special dynpros (selection screens, lists) are possible. Dynpros can be linked with [GUI controls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengui_control_glosry.htm "Glossary Entry").

-   [General dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros.htm)
-   [Selection screens](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen.htm)
-   [Classic lists](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpro_list.htm)
-   [Conversion routines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_exits.htm)

Dynpros can be used in function pools, module pools, and executable programs.

Hints

-   The dialog processing shown here are closely linked with the ABAP programming language, which means that the handling of user dialogs is performed mainly by ABAP language elements.
-   When programming user dialogs, it is important that the presentation logic and application logic are decoupled.
-   For Web-based UIs, [SAPUI5](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensapui5_glosry.htm "Glossary Entry"), [Web Dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenweb_dynpro_glosry.htm "Glossary Entry") and [Business Server Pages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbusiness_server_pages_glosry.htm "Glossary Entry") are available, which are independent of the classic dynpros and are addressed using object-oriented frameworks.

Continue
![Example](exa.gif "Example") [User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen_abexa.htm)
[General Dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros.htm)
[Selection Screens](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen.htm)
[Classic Lists](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpro_list.htm)
[Conversion Routines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_exits.htm)